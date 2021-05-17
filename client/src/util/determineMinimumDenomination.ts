import {
  Asset,
  AssetAssetSubtypeEnum,
  AssetAssetTypeEnum
} from "@bondhouse/rover-universe";
import { LotSize } from "./lotSize";

/**
 * Determine the minimum position
 *
 * @param asset
 *
 * @see {@link https://github.com/bondhouse/rover-universe-extensions/blob/master/src/main/kotlin/com/bondhouse/rover/universe/extensions/asset/MinimumPosition.kt} for the canonical implementation
 */
export default function determineMinimumDenomination(
  asset: Asset
): LotSize | null {
  if (asset.assetType === AssetAssetTypeEnum.Bond) {
    const amount = asset.bond?.minimumDenomination || 1000;
    return { amount, units: "face" };
  }

  if (asset.assetType === AssetAssetTypeEnum.Fund) {
    if (
      asset.assetSubtype === AssetAssetSubtypeEnum.ExchangeTradedFunds ||
      asset.assetSubtype === AssetAssetSubtypeEnum.ClosedEndFunds
    ) {
      return { amount: 1, units: "face" };
    }
    const tradeLotSize = asset.fund?.tradeLotSize;
    if (tradeLotSize) {
      return { amount: tradeLotSize, units: "currency" };
    }
    return null;
  }

  return null;
}
