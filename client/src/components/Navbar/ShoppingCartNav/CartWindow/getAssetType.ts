import { Asset } from "@bondhouse/rover-universe";

/**
 * Takes an asset as param and returns abbreviation of asset type to display in cart window
 */

export default function getAssetType(asset: Asset) {
  const { assetType, assetSubtype } = asset;
  const fixedSubtype = assetSubtype?.toUpperCase()?.replace(/\s/g, "_");
  if (assetType?.toUpperCase() === "BOND") return "BOND";
  if (fixedSubtype === "MUTUAL_FUNDS") return "MUTF";
  if (fixedSubtype === "EXCHANGE_TRADED_FUNDS") return "ETF";
  return "CEF";
}
