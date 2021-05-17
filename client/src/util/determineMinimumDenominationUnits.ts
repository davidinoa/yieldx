import { Asset, AssetAssetTypeEnum } from "@bondhouse/rover-universe";
import determineMinimumDenomination from "./determineMinimumDenomination";

type MinimumDenominationUnits = "Face" | "Shares" | "Dollars";

export default function determineMinimumDenominationUnits(
  asset: Asset
): MinimumDenominationUnits | null {
  const minimumDenomination = determineMinimumDenomination(asset);
  if (minimumDenomination == null) {
    return null;
  }
  if (minimumDenomination.units === "face") {
    if (asset.assetType === AssetAssetTypeEnum.Bond) {
      return "Face";
    }
    return "Shares";
  }
  return "Dollars";
}
