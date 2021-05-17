import { Asset } from "@bondhouse/rover-universe";
import determineMinimumDenomination from "./determineMinimumDenomination";

export default function determineMinimumDenominationQuantity(
  asset: Asset
): number | null {
  const minimumDenomination = determineMinimumDenomination(asset);
  if (minimumDenomination == null) {
    return null;
  }
  return minimumDenomination.amount;
}
