import { assetsService } from "services";
import { YieldXAsset } from "models/YieldXPortfolio";
import getAssetPrice from "./getAssetPrice";

type PartialPosition = { assetId: string; quantity: number };

interface Params {
  positions?: Array<PartialPosition>;
  assetIds?: Array<string>;
}

export default async function getLiveAssets({
  assetIds: propIds,
  positions: propPositions
}: Params) {
  if (propPositions === undefined && propIds === undefined)
    throw Error("positions or assetIds property required, none was provided");
  let positions: Array<PartialPosition>;
  if (propIds !== undefined)
    positions = propIds.map(assetId => ({ assetId, quantity: 0 }));
  else positions = propPositions as Array<PartialPosition>;

  const assetIds = positions?.map(({ assetId }) => assetId);
  const assetMap = await assetsService.getAssets(assetIds);
  const prices = await Promise.all(
    positions.map(position =>
      getAssetPrice(assetMap[position.assetId], position.quantity)
    )
  );
  const assets: Array<YieldXAsset> = assetIds.map((assetId, i) => {
    const price = prices[i];
    const asset = assetMap[assetId];
    if (price)
      return {
        ...asset,
        lastPrice: price.price
      };
    return asset;
  });
  return assets;
}
