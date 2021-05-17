import Decimal from "../../../../../../../util/Decimal";
import { roundToHundredth } from "../../../../../../../util/roundToHundredth";

export function displayGains(gain: number) {
  // rounding to the nearest 10th place
  const roundedGain = roundToHundredth(gain);
  if (roundedGain === 0) return "$0.00";
  let displayValue = roundedGain > 0 ? "+ $" : "- $";
  displayValue += Decimal.format(Math.abs(roundedGain));
  return displayValue;
}
