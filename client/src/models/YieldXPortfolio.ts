import { AppType, Portfolio, Position } from "@bondhouse/position-management";
import {
  Asset,
  AssetAssetSubtypeEnum,
  AssetAssetTypeEnum
} from "@bondhouse/rover-universe";
import {
  Position as InpaasPosition,
  Proposal,
  PortfolioType
} from "@bondhouse/income-portfolios";
import { PortfolioStatus } from "@bondhouse/rover-portfolio-analyzer";
import rfdc from "rfdc";
import { Order } from "@bondhouse/order-management";
import determineDenominationIncrement from "../util/determineDenominationIncrement";
import determineMinimumDenomination from "../util/determineMinimumDenomination";
import logger from "./Logger";
import { Asset5, AssetSubtype, AssetType } from "../providers/graphql/hooks";

const clone = rfdc();

let currentSubscriberId = 0;

export interface YieldXAsset extends Asset {
  lastPrice?: number;
}

export interface YieldXPosition extends Position {
  quantityToMarketValueFactor: number;
  marketValue: number;
  weight: number;
  asset: YieldXAsset;
  minimumDenomination: number;
  denominationIncrement: number;
  rating?: string;
}

export interface YieldXPortfolioOptions {
  withCashMarketValue?: number;
  inpaasData?: {
    proposal: Proposal;
  };
  portfolioType?: PortfolioType;
}

type OnUpdate = (portfolio: YieldXPortfolio) => void;
type Callbacks = {
  onUpdate: OnUpdate;
};

const usdCash: YieldXAsset = {
  assetSubtype: AssetAssetSubtypeEnum.Cash,
  createdAt: "2019-11-21T21:10:56.289624Z",
  id: "USD",
  name: "Cash",
  price: 1,
  updatedAt: "2020-01-12T01:14:31.270150Z",
  updatedBy: "blm"
};

export default class YieldXPortfolio {
  private readonly portfolio: Portfolio;

  private positionMap: Record<string, YieldXPosition>;

  private assetMap: Record<string, YieldXAsset>;

  public positions: YieldXPosition[];

  public orders: Order[];

  public cashMarketValue: number;

  public totalMarketValue: number;

  public portfolioType?: PortfolioType;

  private inpaasData?: YieldXPortfolioOptions["inpaasData"];

  private readonly subscribers: { [id: string]: Callbacks };

  constructor(
    portfolio: Portfolio,
    assets: YieldXAsset[],
    options?: YieldXPortfolioOptions,
    orders: Order[] = []
  ) {
    this.subscribers = {};
    this.portfolio = {
      ...portfolio,
      app: options?.inpaasData !== undefined ? AppType.INPAAS : AppType.CUSTOM
    };
    this.assetMap = { USD: usdCash };
    assets.forEach((asset: YieldXAsset) => {
      this.assetMap[asset.id] = asset;
    });
    this.orders = orders;
    this.cashMarketValue =
      options?.withCashMarketValue !== undefined
        ? options.withCashMarketValue
        : 0;
    this.totalMarketValue = this.cashMarketValue;
    this.positionMap = {};
    const positions: YieldXPosition[] = [];
    portfolio.positions.forEach((position: Position) => {
      if (position.assetId === "USD") {
        this.cashMarketValue += position.quantity;
        this.totalMarketValue += position.quantity;
      } else {
        const asset = this.getAsset(position.assetId);
        const yieldXPosition = YieldXPortfolio.pmsPositionToYieldXPosition(
          position,
          asset
        );
        this.totalMarketValue += yieldXPosition.marketValue;
        this.positionMap[position.id] = yieldXPosition;
        positions.push(yieldXPosition);
      }
    });
    positions.forEach((position: YieldXPosition) => {
      // eslint-disable-next-line no-param-reassign
      position.weight = this.calculateWeight(position.marketValue);
    });
    this.positions = positions;
    this.inpaasData = options?.inpaasData;
    this.portfolioType = options?.portfolioType;
  }

  static fromAssets(
    portfolioId: string,
    assets: YieldXAsset[]
  ): YieldXPortfolio {
    const now = new Date().toISOString();
    const positions: Position[] = assets.map(({ id }: YieldXAsset) => ({
      id,
      assetId: id,
      portfolioId,
      quantity: 0
    }));
    const pmsPortfolio = {
      id: portfolioId,
      name: "",
      currency: "USD",
      status: PortfolioStatus.READY,
      positions,
      createdAt: now,
      metadata: {
        app: "Custom"
      }
    };
    return new YieldXPortfolio(pmsPortfolio, assets);
  }

  static fromInpaasProposal(
    proposal: Proposal,
    assets: YieldXAsset[],
    type?: PortfolioType,
    withId?: string
  ) {
    const { portfolio: inpaasPortfolio } = proposal;
    const {
      id: portfolioId,
      name,
      currency,
      createdAt,
      metadata,
      updatedAt
    } = inpaasPortfolio;
    const createdAtText = createdAt.toString();
    const updatedAtText = updatedAt?.toString();
    const positions: Position[] = inpaasPortfolio.positions.map(
      (position: InpaasPosition) => {
        const { assetId, id, quantity } = position;
        return {
          assetId,
          createdAt: createdAtText,
          id,
          portfolioId,
          quantity,
          updatedAt: updatedAtText
        };
      }
    );
    const pmsPortfolio = {
      id: withId || portfolioId,
      name,
      currency,
      status: PortfolioStatus.READY,
      positions,
      createdAt: createdAtText,
      metadata,
      updatedAt: updatedAtText
    };
    return new YieldXPortfolio(pmsPortfolio, assets, {
      inpaasData: { proposal }
    });
  }

  getBondSleeve(): YieldXPortfolio {
    const bondAssets: YieldXAsset[] = [];
    const bondPositions: Position[] = [];
    this.asPmsPositions().forEach((position: Position) => {
      const { assetId } = position;
      const asset = this.getAsset(assetId);
      if (
        asset.assetType === AssetAssetTypeEnum.Bond ||
        asset.assetType?.toString() === "BOND"
      ) {
        bondAssets.push(asset);
        bondPositions.push(position);
      }
    });
    const bondPortfolio = { ...this.portfolio, positions: bondPositions };
    return new YieldXPortfolio(bondPortfolio, bondAssets, {
      portfolioType: this.portfolioType,
      withCashMarketValue: this.cashMarketValue
    });
  }

  getFundSleeve(): YieldXPortfolio {
    const fundAssets: YieldXAsset[] = [];
    const fundPositions: Position[] = [];
    this.asPmsPositions().forEach((position: Position) => {
      const { assetId } = position;
      const asset = this.getAsset(assetId);
      if (
        asset.assetType === AssetAssetTypeEnum.Fund ||
        asset.assetType?.toString() === "FUND"
      ) {
        fundAssets.push(asset);
        fundPositions.push(position);
      }
    });
    const fundPortfolio = { ...this.portfolio, positions: fundPositions };
    return new YieldXPortfolio(fundPortfolio, fundAssets, {
      portfolioType: this.portfolioType,
      withCashMarketValue: this.cashMarketValue
    });
  }

  getSecuritiesSleeve(): YieldXPortfolio {
    const securityAssets: YieldXAsset[] = [];
    const securityPositions: Position[] = [];
    this.asPmsPositions().forEach((position: Position) => {
      const { assetId } = position;
      if (assetId !== "USD") {
        const asset = this.getAsset(assetId);
        securityAssets.push(asset);
        securityPositions.push(position);
      }
    });
    const securityPortfolio = {
      ...this.portfolio,
      positions: securityPositions
    };
    return new YieldXPortfolio(securityPortfolio, securityAssets);
  }

  private getAsset(assetId: string): YieldXAsset {
    const asset = this.assetMap[assetId];
    if (asset == null) {
      throw new Error(`Asset ID ${assetId} not found in asset map`);
    }
    return asset;
  }

  withoutEmptyPositions(): YieldXPortfolio {
    const assets: YieldXAsset[] = [];
    const positions: Position[] = [];
    logger.info("positions", this.positions);
    logger.info("assets", this.assetMap);
    this.asPmsPositions().forEach((position: Position) => {
      const { assetId, quantity } = position;
      const asset = this.getAsset(assetId);
      if (quantity !== 0) {
        assets.push(asset);
        positions.push(position);
      }
    });
    const securityPortfolio = { ...this.portfolio, positions };
    return new YieldXPortfolio(securityPortfolio, assets);
  }

  getId(): string {
    return this.portfolio.id;
  }

  setId(id: string) {
    this.portfolio.id = id;
  }

  getName(): string {
    return this.portfolio.name;
  }

  getType(): PortfolioType | undefined {
    return this.portfolioType;
  }

  setType(type: PortfolioType | undefined) {
    this.portfolioType = type;
  }

  setName(name: string) {
    this.portfolio.name = name;
  }

  setUpdatedAt(updatedAt: string) {
    this.portfolio.updatedAt = updatedAt;
  }

  setCreatedAt(createdAt: string) {
    this.portfolio.createdAt = createdAt;
  }

  getStatus(): PortfolioStatus {
    return this.portfolio.status;
  }

  setStatus(status: PortfolioStatus) {
    this.portfolio.status = status;
  }

  getCreatedAt(): string {
    return this.portfolio.createdAt;
  }

  getUpdatedAt(): string | undefined {
    return this.portfolio.updatedAt;
  }

  getMetadata(): Record<string, string> | undefined {
    return this.portfolio.metadata;
  }

  getAppType(): AppType | undefined {
    return this.portfolio.app;
  }

  putMetadata(key: string, value: string) {
    if (this.portfolio.metadata == null) {
      this.portfolio.metadata = { [key]: value };
    } else if (!(key in this.portfolio.metadata)) {
      this.portfolio.metadata[key] = value;
    }
  }

  getAssetIds(): string[] {
    const assetIds: Record<string, boolean> = {};
    this.positions.forEach((position: YieldXPosition) => {
      assetIds[position.assetId] = true;
    });
    return Object.keys(assetIds);
  }

  getInpaasData(): YieldXPortfolioOptions["inpaasData"] | undefined {
    return this.inpaasData;
  }

  /**
   * @deprecated Please avoid using this
   */
  getAssetMap(): Record<string, YieldXAsset> {
    const assetMap: Record<string, YieldXAsset> = {};
    this.positions.forEach((position: YieldXPosition) => {
      const { assetId } = position;
      assetMap[assetId] = this.getAsset(assetId);
    });
    return assetMap;
  }

  asPmsPortfolio(): Portfolio {
    const positions = this.asPmsPositions();
    if (this.cashMarketValue !== 0) {
      positions.push({
        id: "USD",
        assetId: "USD",
        quantity: this.cashMarketValue,
        portfolioId: this.portfolio.id
      });
    }
    return {
      ...this.portfolio,
      positions
    };
  }

  private asPmsPositions(): Position[] {
    /* eslint-disable @typescript-eslint/no-unused-vars */
    return this.positions.map((position: YieldXPosition) => {
      // The line below is equivalent to copying all of the contents of a "YieldXPosition" except for its properties
      // that are inherited from Position
      const {
        quantityToMarketValueFactor,
        marketValue,
        weight,
        asset,
        costBasis,
        rating,
        minimumDenomination,
        denominationIncrement,
        ...pmsPosition
      } = position;
      return pmsPosition;
    });
    /* eslint-enable @typescript-eslint/no-unused-vars */
  }

  buySellAssetIdsDiff(
    beforeAssetIds: string[],
    afterAssetIds: string[],
    assetMap: Record<string, YieldXAsset>
  ) {
    const removed = beforeAssetIds.filter(
      (assetId: string) => !afterAssetIds.includes(assetId)
    );
    const added = afterAssetIds.filter(
      (assetId: string) => !beforeAssetIds.includes(assetId)
    );
    removed.forEach((assetId: string) => {
      const positionId =
        this.positions.find(it => it.assetId === assetId)?.id ?? assetId;
      this.sellPosition(positionId);
    });
    added.forEach((assetId: string) => {
      const asset = assetMap[assetId];
      if (asset == null) {
        throw new Error(`Could not find asset with ID ${assetId}`);
      } else {
        this.buyEmptyPosition(asset);
      }
    });
    this.notifySubscribers();
  }

  buyEmptyPosition(asset: YieldXAsset) {
    logger.info(`Buying ${asset.name} (${asset.id})`);
    const position: YieldXPosition = {
      id: asset.id,
      assetId: asset.id,
      portfolioId: this.portfolio.id,
      quantity: 0,
      marketValue: 0,
      weight: 0,
      asset,
      quantityToMarketValueFactor: YieldXPortfolio.calculateQuantityToMarketValueMultiplier(
        asset
      ),
      minimumDenomination: YieldXPortfolio.calculateMinimumDenomination(asset),
      denominationIncrement: YieldXPortfolio.calculateDenominationIncrement(
        asset
      )
    };
    this.positions.push(position);
    this.positionMap[position.id] = position;
    this.assetMap[asset.id] = asset;
    this.notifySubscribers();
  }

  buyPositionWithAsset(position: Position, asset: YieldXAsset) {
    logger.info(
      `Buying position with quantity ${position.quantity} in ${asset.name} (${asset.id})`
    );
    if (position.assetId !== asset.id) {
      throw new Error(
        `Asset ID on position (${position.assetId}) does not equal provided asset's ID (${asset.id})`
      );
    }
    const yieldXPosition = YieldXPortfolio.pmsPositionToYieldXPosition(
      position,
      asset
    );
    const { marketValue } = yieldXPosition;
    this.cashMarketValue -= marketValue;
    yieldXPosition.weight = this.calculateWeight(marketValue);

    this.positions.push(yieldXPosition);
    this.positionMap[yieldXPosition.id] = yieldXPosition;
    this.assetMap[asset.id] = asset;
    this.notifySubscribers();
  }

  addCash(amount: number) {
    this.cashMarketValue += amount;
    this.totalMarketValue += amount;
    logger.info(
      `Added ${amount} in cash. Total cash = ${this.cashMarketValue}`
    );
    this.assetMap[usdCash.id] = usdCash;
    this.notifySubscribers();
  }

  hasPosition(id: string) {
    return this.positionMap[id] != null;
  }

  sellPosition(id: string) {
    const position = this.positionMap[id];
    if (position == null) {
      return;
    }
    logger.info(`Selling ${position.asset.name} (${id})`);
    delete this.positionMap[id];
    let indexToDelete = -1;
    for (let i = 0, len = this.positions.length; i < len; i += 1) {
      const currentPosition = this.positions[i];
      if (currentPosition.id === id) {
        indexToDelete = i;
        this.cashMarketValue += currentPosition.marketValue;
        break;
      }
    }
    if (indexToDelete !== -1) {
      this.positions.splice(indexToDelete, 1);
    }
    this.notifySubscribers();
  }

  clearEmptyPositions() {
    const indicesToDelete: number[] = [];
    this.positions.forEach(({ quantity }: YieldXPosition, i: number) => {
      if (quantity === 0) {
        indicesToDelete.push(i);
      }
    });
    indicesToDelete.reverse().forEach((i: number) => {
      const { id, assetId } = this.positions[i];
      delete this.positionMap[id];
      delete this.assetMap[assetId];
      this.positions.splice(i, 1);
    });
    this.notifySubscribers();
  }

  clear() {
    this.positionMap = {};
    this.positions = [];
    this.assetMap = {};
    this.cashMarketValue = 0;
    this.totalMarketValue = 0;
    this.notifySubscribers();
  }

  private calculateWeight(marketValue: number) {
    if (this.totalMarketValue === 0) {
      return 0;
    }
    return (marketValue / this.totalMarketValue) * 100;
  }

  refreshCash() {
    let securitiesMarketValue = 0;
    this.positions.forEach((position: YieldXPosition) => {
      securitiesMarketValue += position.marketValue;
    });
    this.cashMarketValue = this.totalMarketValue - securitiesMarketValue;
    this.notifySubscribers();
  }

  refreshWeights() {
    let totalMarketValue = this.cashMarketValue;
    this.positions.forEach((position: YieldXPosition) => {
      totalMarketValue += position.marketValue;
    });
    this.positions.forEach((position: YieldXPosition) => {
      const nextWeight = this.calculateWeight(position.marketValue);
      if (Math.abs(position.weight - nextWeight) >= 0.0001) {
        // eslint-disable-next-line no-param-reassign
        position.weight = nextWeight;
      }
    });
    this.totalMarketValue = totalMarketValue;
    this.notifySubscribers();
  }

  private static pmsPositionToYieldXPosition(
    position: Position,
    asset: YieldXAsset
  ): YieldXPosition {
    const quantityToMarketValueFactor = YieldXPortfolio.calculateQuantityToMarketValueMultiplier(
      asset
    );
    const marketValue = position.quantity * quantityToMarketValueFactor;

    return {
      ...position,
      id: asset.id,
      quantityToMarketValueFactor,
      marketValue,
      weight: 0,
      asset,
      rating: asset.rating,
      minimumDenomination: YieldXPortfolio.calculateMinimumDenomination(asset),
      denominationIncrement: YieldXPortfolio.calculateDenominationIncrement(
        asset
      )
    };
  }

  overwriteWith(other: YieldXPortfolio) {
    const targetPositionMap: Record<string, YieldXPosition> = {};
    other.positions.forEach((position: YieldXPosition) => {
      targetPositionMap[position.id] = position;
    });
    /* eslint-disable no-param-reassign */
    this.positions.forEach((position: YieldXPosition) => {
      const targetPosition = targetPositionMap[position.id];
      if (targetPosition == null) {
        position.quantity = 0;
        position.weight = 0;
        position.marketValue = 0;
      } else {
        position.quantity = targetPosition.quantity;
        position.weight = targetPosition.weight;
        position.marketValue = targetPosition.marketValue;
      }
      delete targetPositionMap[position.id];
    });
    /* eslint-enable no-param-reassign */
    Object.values(targetPositionMap).forEach((position: YieldXPosition) => {
      this.positions.push(position);
    });
    this.cashMarketValue = other.cashMarketValue;
    this.totalMarketValue = other.totalMarketValue;
    this.notifySubscribers();
  }

  /**
   * Calculates the factor that will convert a position quantity in an asset into its market value
   *
   * @param asset
   *
   * @see {@link https://github.com/bondhouse/rover-universe-extensions/blob/master/src/main/kotlin/com/bondhouse/rover/universe/extensions/asset/QuantityToMarketValueFactor.kt} for the canonical implementation.
   */
  static calculateQuantityToMarketValueMultiplier(asset: YieldXAsset): number {
    const { price } = asset;
    if (
      asset.assetType === AssetAssetTypeEnum.Bond ||
      asset.assetType?.toString() === "BOND"
    ) {
      const { bond } = asset;
      if (bond == null) {
        if (price == null) {
          return 1;
        }
        return price / 100;
      }

      const { priceQuoteConvention } = bond;
      const denominator =
        priceQuoteConvention == null || priceQuoteConvention === "DECIMAL"
          ? 100
          : 1;

      if (bond.quotedDirty === true && price != null) {
        return price / denominator;
      }

      const { dirtyPrice } = bond;
      if (dirtyPrice != null) {
        return dirtyPrice / denominator;
      }

      const { accruedInterest } = bond;
      if (accruedInterest == null) {
        if (price == null) {
          return 1;
        }
        return price / denominator;
      }
      if (price == null) {
        return 1 + accruedInterest / denominator;
      }
      return (price + accruedInterest) / denominator;
    }
    return price ?? 1;
  }

  private static calculateMinimumDenomination(asset: YieldXAsset): number {
    const minimumDenomination = determineMinimumDenomination(asset);
    if (minimumDenomination == null) {
      return 1;
    }
    if (minimumDenomination.units === "currency") {
      return minimumDenomination.amount / (asset.price || 1);
    }
    return minimumDenomination.amount;
  }

  private static calculateDenominationIncrement(asset: YieldXAsset): number {
    const denominationIncrement = determineDenominationIncrement(asset);
    if (denominationIncrement == null) {
      return 1;
    }
    if (denominationIncrement.units === "currency") {
      return denominationIncrement.amount / (asset.price || 1);
    }
    return denominationIncrement.amount;
  }

  /**
   * Subscribes to updates. The caller provides callbacks that will be invoked when updates happen to the portfolio.
   *
   * The method returns a subscriber ID which can be used to unsubscribe
   *
   * @param onUpdate
   */
  subscribe(onUpdate: OnUpdate): number {
    currentSubscriberId += 1;
    this.subscribers[currentSubscriberId] = { onUpdate };
    return currentSubscriberId;
  }

  /**
   * Unsubscribes to updates using the provided subscriberId
   * @param subscriberId
   */
  unsubscribe(subscriberId?: number): void {
    if (subscriberId) {
      delete this.subscribers[subscriberId];
    }
  }

  /**
   * Returns whether the portfolio has non-zero positions aside from cash
   */
  isEmpty(): boolean {
    for (let i = 0, len = this.positions.length; i < len; i += 1) {
      const position = this.positions[i];
      if (position.quantity !== 0) {
        return false;
      }
    }
    return true;
  }

  /**
   * Returns whether the portfolio has non-zero positions in funds
   */
  hasFunds(): boolean {
    for (let i = 0, len = this.positions.length; i < len; i += 1) {
      const position = this.positions[i];
      if (
        position.quantity !== 0 &&
        (position.asset.assetType === AssetAssetTypeEnum.Fund ||
          position.asset.assetType?.toString() === "FUND")
      ) {
        return true;
      }
    }
    return false;
  }

  /**
   * Returns whether the portfolio has non-zero positions in bonds
   */
  hasBonds(): boolean {
    for (let i = 0, len = this.positions.length; i < len; i += 1) {
      const position = this.positions[i];
      if (
        position.quantity !== 0 &&
        (position.asset.assetType === AssetAssetTypeEnum.Bond ||
          position.asset.assetType?.toString() === "BOND")
      ) {
        return true;
      }
    }
    return false;
  }

  /**
   * Returns whether the portfolio has non-zero positions in both bonds and funds
   */
  isMultiAsset(): boolean {
    let hasBonds = false;
    let hasFunds = false;
    for (let i = 0, len = this.positions.length; i < len; i += 1) {
      const position = this.positions[i];
      if (position.quantity !== 0) {
        if (
          position.asset.assetType === AssetAssetTypeEnum.Bond ||
          position.asset.assetType?.toString() === "BOND"
        ) {
          if (hasFunds) {
            return true;
          }
          hasBonds = true;
        } else if (
          position.asset.assetType === AssetAssetTypeEnum.Fund ||
          position.asset.assetType?.toString() === "FUND"
        ) {
          if (hasBonds) {
            return true;
          }
          hasFunds = true;
        }
      }
    }
    return false;
  }

  private notifySubscribers() {
    // eslint-disable-next-line @typescript-eslint/no-this-alias
    const portfolio: YieldXPortfolio = this;
    if (portfolio != null) {
      Object.values(this.subscribers).forEach(subscriber => {
        subscriber.onUpdate(portfolio);
      });
    }
  }

  clone(): YieldXPortfolio {
    const portfolio = this.asPmsPortfolio();
    const assets = Object.values(this.assetMap);
    const inpaasData = clone(this.inpaasData);
    return new YieldXPortfolio(portfolio, assets, {
      inpaasData,
      portfolioType: this.portfolioType
    });
  }

  /**
   * Returns whether the portfolio is equal to given portfolio in parameter.
   * Checks:
   *  Cash market value of both portfolios
   *  Number of positions in each
   *  Asset ID of each position
   *  Quantity of each position
   */
  isEqualTo(other: YieldXPortfolio): boolean {
    const haveEqualCash = other.cashMarketValue === this.cashMarketValue;
    const haveEqualPositions =
      this.positions.length === other.positions.length &&
      other.positions.every(
        it =>
          it.quantity ===
          this.positions.find(pos => pos.assetId === it.assetId)?.quantity
      );
    return haveEqualCash && haveEqualPositions;
  }

  getAssets(): Asset5[] {
    return this.positions.map(it => ({
      ...it.asset,
      bond: {
        ...it.asset.bond,
        richCheap: null
      },
      assetSubtype: it.asset.assetSubtype
        ?.toUpperCase()
        .replace(/\s/g, "_") as AssetSubtype,
      assetType: it.asset.assetType?.toUpperCase() as AssetType
    }));
  }
}
