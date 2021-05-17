import _ from "lodash";
import { selectorFamily } from "recoil";
import {
  PriceAssetApi,
  PriceAssetRequestAssetSubtypeEnum,
  PriceAssetRequestAssetTypeEnum
} from "@bondhouse/prices";
import { assetsService } from "services";

export const assetsSelector = selectorFamily({
  key: "assetsSelector",
  get: (assetIds: string[]) => async () => {
    if (assetIds.length > 0) {
      const assets = await assetsService.getAssetsAsArray(assetIds);
      return assets;
    }
    return [];
  }
});

const priceAssetApi = new PriceAssetApi();
export const assetPricesSelector = selectorFamily({
  key: "assetPricesSelector",
  get: (assetIds: string[]) => async () => {
    const assets = await assetsService.getAssetsAsArray(assetIds);
    const pricedAssets = (
      await Promise.all(
        assets.map(async function fetchPrices(asset) {
          try {
            const response = await priceAssetApi.priceAsset({
              assetId: asset.id,
              assetType: (asset.assetType as unknown) as PriceAssetRequestAssetTypeEnum,
              assetSubtype: (asset.assetSubtype as unknown) as PriceAssetRequestAssetSubtypeEnum,
              cusip: asset.identifiers?.cusip,
              ticker: asset.identifiers?.primaryTicker
            });
            return [
              asset.id,
              _.sortBy(response.data.prices, ({ dateTime }) => dateTime)[0]
                ?.price ?? 0
            ];
          } catch (error) {
            console.error(error);
          }
          return [];
        })
      )
    ).filter(tuple => tuple[1] > 0) as [string, number][];
    return Object.fromEntries(pricedAssets);
  }
});
