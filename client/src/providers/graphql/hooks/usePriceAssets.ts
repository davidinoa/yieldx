import {
  Asset5,
  AssetSubtype,
  AssetType,
  Direction3,
  Price,
  PriceAssetResponse,
  PricesPriceAssetDocument,
  PricesPriceAssetQueryVariables
} from "providers/graphql/hooks";
import { useApolloClient } from "@apollo/client";
import { useEffect, useState } from "react";
import logger from "models/Logger";

export type PriceData = {
  price: Price | null;
  loading: boolean;
};

function usePriceAssets(assets?: { asset: Asset5; quantity?: number }[]) {
  const client = useApolloClient();
  const [pricesMap, setPricesMap] = useState<{
    [assetId: string]: PriceData;
  }>({});
  useEffect(() => {
    const fixedAssets = assets?.map(it => {
      return {
        ...it,
        asset: {
          ...it.asset,
          assetType: it.asset.assetType?.toUpperCase() as AssetType,
          assetSubtype: it.asset.assetSubtype
            ? (it.asset.assetSubtype
                .toUpperCase()
                .replace(/\s/g, "_") as AssetSubtype)
            : undefined
        }
      };
    });
    if (fixedAssets && !Object.entries(pricesMap).length) {
      const priceAssetPromises = fixedAssets.map(({ asset, quantity }) => {
        const { id, assetType, assetSubtype, identifiers } = asset;
        const qty = quantity === 0 ? undefined : quantity;
        logger.info(assetSubtype);
        return client.query<
          { pricesPriceAsset: PriceAssetResponse } | undefined,
          PricesPriceAssetQueryVariables
        >({
          query: PricesPriceAssetDocument,
          fetchPolicy: "network-only",
          variables: {
            priceAssetRequestInput: {
              assetId: id,
              assetSubtype,
              assetType,
              cusip: identifiers?.cusip,
              ticker: identifiers?.primaryTicker,
              quantity: qty !== undefined ? Math.abs(qty) : undefined,
              direction: qty && qty < 0 ? Direction3.Sell : Direction3.Buy
            }
          }
        });
      });
      Promise.all(priceAssetPromises).then(data => {
        data.forEach(({ data: pricesData, loading: pricesLoading }, i) => {
          const prices = pricesData?.pricesPriceAsset?.prices;
          const { id } = fixedAssets[i].asset;
          if (!pricesData)
            setPricesMap(prev => ({
              ...(prev ?? {}),
              [id]: { price: null, loading: pricesLoading }
            }));
          else if (!pricesLoading && prices?.length === 0)
            setPricesMap(prev => ({
              ...(prev ?? {}),
              [id]: { price: null, loading: false }
            }));
          else if (prices && !pricesLoading)
            setPricesMap(prev => ({
              ...(prev ?? {}),
              [id]: { price: prices[0], loading: false }
            }));
        });
      });
    }
  }, [assets, pricesMap, client]);
  return {
    pricesMap,
    loading: !Object.values(pricesMap).every(it => !it.loading)
  };
}

export default usePriceAssets;
