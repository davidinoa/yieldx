import usePriceAssets from "providers/graphql/hooks/usePriceAssets";
import { YieldXAsset } from "models/YieldXPortfolio";
import { Asset } from "@bondhouse/rover-universe";
import { Price } from "@bondhouse/prices";
import { Asset5, useRoverUniverseGetAssetsQuery } from ".";

type PartialPosition = { assetId: string; quantity: number };

interface Params {
  positions?: Array<PartialPosition>;
  assetIds?: Array<string>;
}

function useGetYieldxAssets({
  assetIds: propIds,
  positions: propPositions
}: Params) {
  let positions: Array<PartialPosition> | undefined;
  if (propIds !== undefined)
    positions = propIds.map(assetId => ({ assetId, quantity: 0 }));
  else positions = propPositions;
  const assetIds = positions?.map(({ assetId }) => assetId);

  const { data: assetsData, loading, error } = useRoverUniverseGetAssetsQuery({
    variables: {
      getAssetsRequestInput: {
        assetIds: assetIds?.filter(it => !!it) as string[]
      }
    },
    skip: !assetIds || assetIds.length === 0
  });

  const assets = assetsData?.roverUniverseGetAssets?.assets.filter(
    it => !!it
  ) as Asset5[];
  const { pricesMap } = usePriceAssets(
    assets?.map(asset => ({
      asset,
      quantity: positions?.find(it => it.assetId === asset.id)?.quantity
    }))
  );
  if (loading) return { loading, error };
  if (!pricesMap) return { loading, error };
  const yieldXAssets: Array<YieldXAsset> =
    (assets as Array<Asset>)?.map((asset, i) => {
      const price = pricesMap[asset.id];
      if (price)
        return {
          ...asset,
          lastPrice: (price.price as Price)?.price ?? undefined
        };
      return asset;
    }) ?? [];
  return { yieldXAssets, loading, error };
}

export default useGetYieldxAssets;
