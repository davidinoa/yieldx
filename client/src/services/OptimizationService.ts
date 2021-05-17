import {
  Analytic,
  InstrumentConcentrationConstraint,
  OptimizePortfolioRequest,
  OptimizerApi,
  TextFilterKeyEnum,
  TextFilterOperatorEnum,
  WhitelistItem
} from "@bondhouse/rover-optimizer";
import YieldXPortfolio, { YieldXPosition } from "../models/YieldXPortfolio";
import { AssetsService } from "./AssetsService";

const DEFAULT_CASH_BUFFER = 0.02;

export class OptimizationService {
  private assetsService: AssetsService;

  private optimizerApi: OptimizerApi;

  constructor(assetsService: AssetsService) {
    this.assetsService = assetsService;
    this.optimizerApi = new OptimizerApi();
  }

  /**
   * Reorganize an optimized portfolio to follow the position order found in the initial portfolio. Ensure the cash
   * position exists as well.
   *
   * @param initialPortfolio the initial portfolio prior to running an optimization
   * @param optimizedPortfolio the resulting, optimized portfolio
   */
  private static reorganizeOptimizedPortfolio(
    initialPortfolio: YieldXPortfolio,
    optimizedPortfolio: YieldXPortfolio
  ) {
    const order: Record<string, number> = {};

    // The optimizer generates its own position IDs. The below replaces them with asset IDs so it's easier to merge the
    // original and optimized portfolios. Additionally, the optimizer sometimes as floating point imprecisions that we
    // can correct via post-processing.
    /* eslint-disable no-param-reassign */
    optimizedPortfolio.positions.forEach((position: YieldXPosition) => {
      position.id = position.assetId;
      const roundedQuantity = Math.round(position.quantity);
      if (Math.abs(position.quantity - roundedQuantity) < 0.0001) {
        position.quantity = roundedQuantity;
      }
    });
    /* eslint-enable no-param-reassign */

    // Here, we organize resulting positions by asset ID, such that those appearing in the original portfolio come first
    // and in their original order.
    initialPortfolio.positions.forEach(({ id }: YieldXPosition, i: number) => {
      order[id] = i;
    });
    let i = initialPortfolio.positions.length;
    optimizedPortfolio.positions.forEach(({ id }: YieldXPosition) => {
      if (id in order) {
        order[id] = i;
        i += 1;
      }
    });

    // Sort optimized portfolio positions in place
    optimizedPortfolio.positions.sort((a, b) => order[a.id] - order[b.id]);
  }

  static countNonCashAssets(
    portfolio: YieldXPortfolio,
    whitelist: WhitelistItem[]
  ) {
    const portfolioAssetIds = portfolio.positions.map(({ assetId }) => assetId);
    const whitelistAssetIds = whitelist.map(({ assetId }) => assetId);
    const distinctAssetIds = new Set([
      ...portfolioAssetIds,
      ...whitelistAssetIds
    ]);
    if (distinctAssetIds.has("USD")) {
      distinctAssetIds.delete("USD");
    }
    return distinctAssetIds.size;
  }

  static buildInstrumentConcentrationConstraints(
    portfolio: YieldXPortfolio,
    whitelist: WhitelistItem[],
    weightRange: { min: number; max: number } | null,
    cashBuffer: number,
    cashMaximumWeight: number
  ) {
    const assetCount = OptimizationService.countNonCashAssets(
      portfolio,
      whitelist
    );
    const minimumWeight = weightRange?.min ?? 0.5 / assetCount;
    const maximumWeight = weightRange?.max ?? 1.5 / assetCount;
    const nonCashInstrumentConcentrationConstraint = {
      filters: {
        text: [
          {
            key: TextFilterKeyEnum.Id,
            operator: TextFilterOperatorEnum.DoesNotEqual,
            value: "USD"
          }
        ]
      },
      minimumWeight,
      maximumWeight
    };
    const cashInstrumentConcentrationConstraint: InstrumentConcentrationConstraint = {
      filters: {
        text: [
          {
            key: TextFilterKeyEnum.Id,
            operator: TextFilterOperatorEnum.Equals,
            value: "USD"
          }
        ]
      },
      minimumWeight: cashBuffer,
      maximumWeight: cashMaximumWeight
    };
    return [
      nonCashInstrumentConcentrationConstraint,
      cashInstrumentConcentrationConstraint
    ];
  }

  static buildWhitelist(
    portfolio: YieldXPortfolio,
    whitelistAssetIds?: string[]
  ): WhitelistItem[] {
    return whitelistAssetIds == null
      ? portfolio.positions.map(({ assetId }) => ({ assetId }))
      : whitelistAssetIds.map(assetId => ({ assetId }));
  }

  async maximizeYield(
    portfolio: YieldXPortfolio,
    whitelistAssetIds: string[],
    weightRange: { max: number; min: number } | null,
    cashTarget: number
  ): Promise<YieldXPortfolio> {
    const whitelist = OptimizationService.buildWhitelist(
      portfolio,
      whitelistAssetIds
    );
    const instrumentConcentration = OptimizationService.buildInstrumentConcentrationConstraints(
      portfolio,
      whitelist,
      weightRange,
      Math.max(cashTarget, DEFAULT_CASH_BUFFER),
      1.0
    );

    const request: OptimizePortfolioRequest = {
      portfolio: portfolio.asPmsPortfolio(),
      objectives: {
        maximizeAnalytic: [{ analytic: Analytic.Yield }]
      },
      constraints: {
        instrumentConcentration
      },
      whitelist
    };

    return this.calculateOptimizedPortfolio(portfolio, request);
  }

  async minimizeConcentration(
    portfolio: YieldXPortfolio,
    whitelistAssetIds: string[],
    weightRange: { max: number; min: number } | null,
    cashTarget: number
  ): Promise<YieldXPortfolio> {
    const whitelist = OptimizationService.buildWhitelist(
      portfolio,
      whitelistAssetIds
    );
    const instrumentConcentration = OptimizationService.buildInstrumentConcentrationConstraints(
      portfolio,
      whitelist,
      weightRange,
      DEFAULT_CASH_BUFFER,
      cashTarget
    );

    const request: OptimizePortfolioRequest = {
      portfolio: portfolio.asPmsPortfolio(),
      objectives: {
        minimizeIssuerConcentration: {}
      },
      constraints: {
        instrumentConcentration
      },
      whitelist
    };

    return this.calculateOptimizedPortfolio(portfolio, request);
  }

  async minimizeRisk(
    portfolio: YieldXPortfolio,
    whitelistAssetIds: string[],
    weightRange: { max: number; min: number } | null,
    cashTarget: number
  ): Promise<YieldXPortfolio> {
    const whitelist = OptimizationService.buildWhitelist(
      portfolio,
      whitelistAssetIds
    );
    const instrumentConcentration = OptimizationService.buildInstrumentConcentrationConstraints(
      portfolio,
      whitelist,
      weightRange,
      DEFAULT_CASH_BUFFER,
      cashTarget
    );

    const request: OptimizePortfolioRequest = {
      portfolio: portfolio.asPmsPortfolio(),
      objectives: {
        minimizeRisk: { weight: 1 }
      },
      constraints: {
        instrumentConcentration
      },
      whitelist
    };

    return this.calculateOptimizedPortfolio(portfolio, request);
  }

  async calculateOptimizedPortfolio(
    portfolio: YieldXPortfolio,
    request: OptimizePortfolioRequest
  ): Promise<YieldXPortfolio> {
    const {
      data: { portfolio: optimizedPmsPortfolio }
    } = await this.optimizerApi.optimizePortfolio(request);
    const optimizedPortfolio = new YieldXPortfolio(
      {
        ...optimizedPmsPortfolio,
        positions: optimizedPmsPortfolio.positions.map(it => ({
          ...it,
          id: it.assetId
        }))
      },
      await this.assetsService.getAssetsAsArray(optimizedPmsPortfolio.positions.map(it => it.assetId))
    );

    OptimizationService.reorganizeOptimizedPortfolio(
      portfolio,
      optimizedPortfolio
    );
    return optimizedPortfolio;
  }
}
