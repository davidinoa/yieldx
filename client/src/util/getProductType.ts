import { Asset, AssetAssetTypeEnum } from "@bondhouse/rover-universe";

export default function getProductType(asset: Asset): string | null {
  switch (asset?.assetType) {
    case AssetAssetTypeEnum.Bond:
      switch (asset.assetSubtype?.toUpperCase()) {
        case "CORPORATE":
          return "Corporate Bond";
        case "SOVEREIGN":
          if (asset.bond?.classifications?.datastreamType === "Municipals") {
            return "Municipal Bond";
          }
          break;
        default:
          break;
      }
      break;
    case AssetAssetTypeEnum.Fund:
      switch (asset.assetSubtype?.toUpperCase()?.replace(/\s/g, "_")) {
        case "EXCHANGE_TRADED_FUNDS":
          return "Exchange Traded Fund";
        case "CLOSED_END_FUNDS":
          return "Closed End Fund";
        case "MUTUAL_FUNDS":
          return "Mutual Fund";
        default:
          break;
      }
      break;
    default:
      break;
  }
  return null;
}
