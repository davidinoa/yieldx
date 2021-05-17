type FormatNumberOptions = {
  prefix?: string;
  suffix?: string;
  decimalPlaces?: number;
};

export function formatNumber(
  value: number | null | undefined,
  options?: FormatNumberOptions
): string {
  if (value == null) {
    return "";
  }
  if (!Number.isFinite(value)) {
    return "";
  }
  const { prefix, suffix, decimalPlaces } = options || {};
  let result = "";
  if (prefix != null) {
    result = prefix;
  }
  result += value.toLocaleString(undefined, {
    minimumFractionDigits: decimalPlaces ?? 2,
    maximumFractionDigits: decimalPlaces ?? 2
  });
  if (suffix != null) {
    result += suffix;
  }
  return result;
}
