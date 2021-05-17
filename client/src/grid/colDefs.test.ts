import { Asset } from "@bondhouse/rover-universe";
import { ValueGetterParams } from "@ag-grid-community/core";
import {
  convertYieldXColDefsToColDefs,
  issuerColDef,
  marketValueColDef,
  maturityColDef,
  nameColDef,
  priceColDef,
  quantityColDef,
  removePositionColDef
} from "./colDefs";
import { YieldXPosition } from "../models/YieldXPortfolio";

describe("convertYieldXColDefsToColDefs", () => {
  const yieldXColDefs = [
    removePositionColDef,
    nameColDef,
    priceColDef,
    quantityColDef,
    marketValueColDef
  ];

  test("does not prefix fields by default", () => {
    const colDefs = convertYieldXColDefsToColDefs(yieldXColDefs);
    const fields = colDefs.map(({ field }) => field);
    expect(fields).toEqual(["id", "name", "price", "quantity", "marketValue"]);
  });

  test("does not prefix fields for asset-level row data", () => {
    const colDefs = convertYieldXColDefsToColDefs(yieldXColDefs, {
      rowDataType: "Asset"
    });
    const fields = colDefs.map(({ field }) => field);
    expect(fields).toEqual(["id", "name", "price", "quantity", "marketValue"]);
  });

  test("prefixes asset-level fields when using position-level row data", () => {
    const colDefs = convertYieldXColDefsToColDefs(yieldXColDefs, {
      rowDataType: "Position"
    });
    const fields = colDefs.map(({ field }) => field);
    expect(fields).toEqual([
      "asset.id",
      "asset.name",
      "asset.price",
      "quantity",
      "marketValue"
    ]);
  });

  test("strips dependencies and data source", () => {
    const [cleanedIssuerColDef] = convertYieldXColDefsToColDefs([issuerColDef]);
    expect(issuerColDef.dependencies).not.toHaveLength(0);
    expect(issuerColDef.dataSource).toBe("Asset");
    expect(cleanedIssuerColDef).not.toHaveProperty("dependencies");
    expect(cleanedIssuerColDef).not.toHaveProperty("dataSource");
  });
});

describe("column definitions", () => {
  describe("maturityColDef", () => {
    const bond: Asset = { id: "bond", bond: { maturityDate: "1984-11-23" } };
    const equity: Asset = { id: "equity" };
    const position: YieldXPosition = {
      id: "position",
      assetId: bond.id,
      portfolioId: "portfolio",
      asset: bond,
      quantity: 0,
      marketValue: 0,
      weight: 0,
      minimumDenomination: 1,
      denominationIncrement: 1,
      quantityToMarketValueFactor: 1
    };

    test("extracts date from bond", () => {
      const params = ({ data: bond } as unknown) as ValueGetterParams;
      const dateValue = maturityColDef.valueGetter(params);
      expect(dateValue).toEqual(new Date(Date.UTC(1984, 11 - 1, 23)));
    });

    test("extracts date from bond position", () => {
      const params = ({ data: position } as unknown) as ValueGetterParams;
      const dateValue = maturityColDef.valueGetter(params);
      expect(dateValue).toEqual(new Date(Date.UTC(1984, 11 - 1, 23)));
    });

    test("returns null for assets other than bonds", () => {
      const params = ({ data: equity } as unknown) as ValueGetterParams;
      const dateValue = maturityColDef.valueGetter(params);
      expect(dateValue).toBeNull();
    });
  });
});
