import {
  Asset,
  AssetAssetSubtypeEnum,
  AssetAssetTypeEnum
} from "@bondhouse/rover-universe";
import { LotSize } from "./lotSize";

/**
 * Determine the minimum trading increment
 *
 * @param asset
 *
 * @see {@link https://github.com/bondhouse/rover-universe-extensions/blob/master/src/main/kotlin/com/bondhouse/rover/universe/extensions/asset/MinimumIncrement.kt} for the canonical implementation
 */
export default function determineDenominationIncrement(
  asset: Asset
): LotSize | null {
  if (asset.assetType === AssetAssetTypeEnum.Bond) {
    const amount = asset.bond?.denominationIncrement || 1000;
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
