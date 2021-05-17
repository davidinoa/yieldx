import { Direction, PriceAssetApi } from "@bondhouse/prices";
import { Asset } from "@bondhouse/rover-asset-analyzer";

const pricesApi = new PriceAssetApi();

export default async function getAssetPrice(asset: Asset, quantity?: number) {
  const { id, assetType, assetSubtype, identifiers } = asset;
  const qty = quantity === 0 ? undefined : quantity;
  const {
    data: { prices }
  } = await pricesApi.priceAsset({
    assetId: id,
    // @ts-expect-error
    assetSubtype,
    // @ts-expect-error
    assetType,
    cusip: identifiers?.cusip,
    ticker: identifiers?.primaryTicker,
    quantity: qty !== undefined ? Math.abs(qty) : undefined,
    direction: qty && qty < 0 ? Direction.Sell : Direction.Buy
  });
  if (prices.length === 0) return null;
  return prices[0];
}
