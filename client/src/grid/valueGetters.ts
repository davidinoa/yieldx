import { Asset } from "@bondhouse/search";
import { ValueGetterParams } from "@ag-grid-community/core";

function getAssetFromParams(params: ValueGetterParams): Asset | null {
  const { data } = params;
  if (data == null) {
    return null;
  }
  const { asset } = data;
  if (asset == null) {
    return data;
  }
  return asset;
}

export function createAssetValueGetter<T>(
  extract: (asset: Asset) => T
): (params: ValueGetterParams) => T | null {
  return function getAssetValue(params: ValueGetterParams): T | null {
    const asset = getAssetFromParams(params);
    if (asset == null) {
      return null;
    }
    return extract(asset);
  };
}

export function createDateValueGetter(
  extractText: (asset: Asset) => string | undefined
): (params: ValueGetterParams) => Date | null {
  return function getDateValue(params: ValueGetterParams): Date | null {
    const asset = getAssetFromParams(params);
    if (asset == null) {
      return null;
    }
    const text = extractText(asset);
    if (text == null) {
      return null;
    }
    return new Date(text);
  };
}
