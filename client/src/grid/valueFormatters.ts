import { ValueFormatterParams } from "@ag-grid-community/core";

function createNumberFormatter(
  fractionDigits: number,
  withPercentSign: boolean,
  withDollarSign?: boolean
): (params: ValueFormatterParams) => string {
  return function numberFormatter(params: ValueFormatterParams): string {
    try {
      const formattedNumber = params.value.toLocaleString("en-US", {
        minimumFractionDigits: fractionDigits,
        maximumFractionDigits: fractionDigits
      });
      if (withPercentSign) {
        return `${formattedNumber}%`;
      }
      if (withDollarSign) {
        return `$${formattedNumber}`;
      }
      return formattedNumber;
    } catch {
      try {
        return params.value.toString();
      } catch {
        return "";
      }
    }
  };
}

function starFormatter(params: ValueFormatterParams): string {
  try {
    const formattedNumber = parseInt(params.value, 10);
    return "\u2605".repeat(formattedNumber);
  } catch (e) {
    return "";
  }
}

export { createNumberFormatter, starFormatter };
