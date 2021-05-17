import { ValueGetterParams } from "@ag-grid-community/core";
import { Asset } from "@bondhouse/rover-universe";
import { createAssetValueGetter } from "./valueGetters";
import { YieldXPosition } from "../models/YieldXPortfolio";

describe("createAssetValueGetter", () => {
  const asset: Asset = { id: "foo", name: "Foo" };
  const position: YieldXPosition = {
    id: "position",
    assetId: asset.id,
    portfolioId: "portfolio",
    asset,
    quantity: 0,
    marketValue: 0,
    weight: 0,
    minimumDenomination: 1,
    denominationIncrement: 1,
    quantityToMarketValueFactor: 1
  };

  test("generates expected value for asset-level row data", () => {
    const params = ({ data: asset } as unknown) as ValueGetterParams;
    const getAssetValue = createAssetValueGetter(
      ({ id, name }) => `${name} (${id})`
    );
    const value = getAssetValue(params);
    expect(value).toBe("Foo (foo)");
  });

  test("generates expected value for position-level row data", () => {
    const params = ({ data: position } as unknown) as ValueGetterParams;
    const getAssetValue = createAssetValueGetter(
      ({ id, name }) => `${name} (${id})`
    );
    const value = getAssetValue(params);
    expect(value).toBe("Foo (foo)");
  });

  test("generates null for empty row data", () => {
    const params = ({ data: null } as unknown) as ValueGetterParams;
    const getAssetValue = createAssetValueGetter(
      ({ id, name }) => `${name} (${id})`
    );
    const value = getAssetValue(params);
    expect(value).toBeNull();
  });
});
