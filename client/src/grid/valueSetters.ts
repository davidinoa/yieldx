import { ValueSetterParams } from "@ag-grid-community/core";

/**
 * Sets the value of the key in grid data to the input value coerced to a {@link Number}. If that coercion produces a
 * non-finite number such as {@link NaN} or {@link Infinity}, the result is forced to 0.
 *
 * @remarks
 * This only supports top-level keys at the moment. If dot notation needs to be supported, that will require an
 * enhancement.
 *
 * @param key - The key on the grid data
 */
function createNumberValueSetter(
  key: string
): (params: ValueSetterParams) => boolean {
  return function numberValueSetter(params: ValueSetterParams) {
    let numericValue = Number(params.newValue);
    if (!Number.isFinite(numericValue)) {
      numericValue = 0;
    }
    // eslint-disable-next-line no-param-reassign
    params.data[key] = numericValue;
    return true;
  };
}

export { createNumberValueSetter };
