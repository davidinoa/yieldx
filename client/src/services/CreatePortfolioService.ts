import {
  AppType,
  ExternalPortfolioApi,
  PortfoliosApi,
  PortfolioStatus
} from "@bondhouse/position-management";
import {
  PortfolioMappingsApi,
  PortfolioType
} from "@bondhouse/income-portfolios";
import { Investor } from "@bondhouse/investor";
import { v4 as uuidv4 } from "uuid";
import {
  CreateOrderRequest,
  CreateOrderRequestDirectionEnum,
  OrdersApi
} from "@bondhouse/order-management";
import YieldXPortfolio, { YieldXPosition } from "models/YieldXPortfolio";

export class CreatePortfolioService {
  private portfoliosApi: PortfoliosApi;

  private ordersApi: OrdersApi;

  private externalPortfolioApi: ExternalPortfolioApi;

  private portfolioMappingsApi: PortfolioMappingsApi;

  constructor(
    portfoliosApi: PortfoliosApi,
    ordersApi: OrdersApi,
    externalPortfolioApi: ExternalPortfolioApi,
    portfolioMappingsApi: PortfolioMappingsApi
  ) {
    this.portfoliosApi = portfoliosApi;
    this.ordersApi = ordersApi;
    this.externalPortfolioApi = externalPortfolioApi;
    this.portfolioMappingsApi = portfolioMappingsApi;
  }

  async updateStatus(portfolioId: string, status: PortfolioStatus) {
    try {
      return this.portfoliosApi.updatePortfolio(portfolioId, { status });
    } catch (error) {
      return console.error(error);
    }
  }

  async executeLivePortfolio({
    selectedInvestor,
    selectedPortfolio,
    executionPreferences,
    referencePrices
  }: ExecuteLiveOptions) {
    const { proposal } = selectedPortfolio.getInpaasData() || {};
    const {
      data: { portfolio }
    } = await this.portfoliosApi.createPortfolioForInvestor(
      selectedInvestor.id,
      {
        currency: "USD",
        name: selectedPortfolio.getName(),
        app: proposal === undefined ? AppType.CUSTOM : AppType.INPAAS
      }
    );

    if (proposal)
      await this.portfolioMappingsApi.createOrReplacePortfolioMapping(
        portfolio.id,
        {
          proposalId: proposal.proposalId,
          portfolioType: PortfolioType.LIVE
        }
      );

    // Internal portfolio fund transfer
    await this.initialDeposit(
      portfolio.id,
      selectedInvestor.id,
      selectedPortfolio.totalMarketValue
    );

    // Raise orders
    await this.raiseOrders(
      portfolio.id,
      selectedPortfolio.positions,
      executionPreferences,
      referencePrices
    );

    return portfolio;
  }

  async savePaperPortfolio(options: SavePaperOptions) {
    const id = !options.isUpdating ? uuidv4() : undefined;
    const { proposal } = options.selectedPortfolio.getInpaasData() || {};
    await this.createExternalPortfolio(options.selectedPortfolio, {
      withId: id,
      asNew: !options.isUpdating,
      withStatus: PortfolioStatus.READY,
      withApp: proposal === undefined ? AppType.CUSTOM : AppType.INPAAS
    });
    if (proposal) {
      await this.portfolioMappingsApi.createOrReplacePortfolioMapping(
        id || options.selectedPortfolio.getId(),
        {
          proposalId: proposal.proposalId,
          portfolioType: PortfolioType.EXTERNAL
        }
      );
    }
    return id ?? options.selectedPortfolio.getId();
  }

  private async createExternalPortfolio(
    selectedPortfolio: YieldXPortfolio,
    { withName, withStatus, withId, asNew, withApp }: CreateExternalOptions
  ) {
    const portfolioReq = selectedPortfolio.asPmsPortfolio();
    if (withName !== undefined) portfolioReq.name = withName;
    if (withId !== undefined) portfolioReq.id = withId;
    if (withStatus !== undefined) portfolioReq.status = withStatus;
    portfolioReq.app = withApp;
    if (asNew) {
      const now = `${new Date().toISOString().split(".")[0]}Z`;
      portfolioReq.updatedAt = now;
      portfolioReq.createdAt = now;
    }
    const { data } = await this.externalPortfolioApi.createExternalPortfolio({
      portfolio: {
        ...portfolioReq,
        positions: portfolioReq.positions.map(it => ({
          ...it,
          portfolioId: withId || portfolioReq.id
        }))
      }
    });
    return data;
  }

  private async initialDeposit(
    newPortfolioId: string,
    investorId: string,
    quantity: number
  ) {
    await this.portfoliosApi.internalPortfolioFundTransfer(
      investorId,
      newPortfolioId,
      {
        currency: "USD",
        quantity
      }
    );
  }

  private async raiseOrders(
    newPortfolioId: string,
    positions: Array<YieldXPosition>,
    executionPreferences: ExecuteLiveOptions["executionPreferences"],
    referencePrices: ExecuteLiveOptions["referencePrices"]
  ) {
    // RAISE PENDING ORDERS AND ADD TO PREFERENCES
    const pendingOrders: Array<CreateOrderRequest> = positions.map(
      ({ assetId, quantity, asset }) => {
        const referencePrice = referencePrices[assetId] ?? asset.price;
        const limitPrice = referencePrices[assetId] ?? asset.price;
        return {
          assetId,
          direction: CreateOrderRequestDirectionEnum.BUY,
          comment: "Generated by YieldX",
          quantity,
          spotPrice: referencePrice,
          priceLimit: limitPrice ? limitPrice * 1.02 : undefined,
          fullFillRequired: executionPreferences.fullFillRequired,
          goodTillCancel: executionPreferences.goodTillCancel
        };
      }
    );
    await Promise.all(
      pendingOrders.map(it => this.ordersApi.createOrder(newPortfolioId, it))
    );
  }
}

interface CreateExternalOptions {
  withApp: AppType;
  withName?: string;
  withStatus?: PortfolioStatus;
  withId?: string;
  asNew?: boolean;
}

interface ExecuteLiveOptions {
  selectedInvestor: Investor;
  selectedPortfolio: YieldXPortfolio;
  referencePrices: { [assetId: string]: null | number };
  executionPreferences: {
    fullFillRequired: boolean;
    goodTillCancel: boolean;
  };
}

interface SavePaperOptions {
  selectedPortfolio: YieldXPortfolio;
  isUpdating?: boolean;
}
