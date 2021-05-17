import "./setAgGridLicenseKey";
import { CellValueChangedEvent, ColDef } from "@ag-grid-community/core";
import { compareBondRating } from "util/ratings";
import getProductType from "util/getProductType";
import determineMinimumDenominationQuantity from "util/determineMinimumDenominationQuantity";
import determineMinimumDenominationUnits from "util/determineMinimumDenominationUnits";
import { createNumberValueSetter } from "./valueSetters";
import { createNumberFormatter, starFormatter } from "./valueFormatters";
import { createAssetValueGetter, createDateValueGetter } from "./valueGetters";
import { renderDate } from "./cellRenderers";

type DataSource = "Asset" | "Position" | "Custom";
type RowDataType = "Asset" | "Position";

export interface YieldXColDef extends ColDef {
  dependencies?: string[];
  dataSource: DataSource;
}

interface ConvertYieldXColDefsToColDefsOptions {
  rowDataType?: RowDataType;
}

// <editor-fold desc="Helper functions">

export function convertYieldXColDefsToColDefs(
  colDefs: YieldXColDef[],
  options?: ConvertYieldXColDefsToColDefsOptions
): ColDef[] {
  const rowDataType = options?.rowDataType ?? "Asset";
  const prefix = rowDataType === "Position" ? "asset" : null;
  return colDefs.map((yieldXColDef: YieldXColDef) => {
    /* eslint-disable @typescript-eslint/no-unused-vars */
    const { dependencies, dataSource, ...colDef } = yieldXColDef;
    /* eslint-enable @typescript-eslint/no-unused-vars */
    if (prefix != null && dataSource === "Asset") {
      colDef.field = `${prefix}.${colDef.field}`;
    }
    return colDef;
  });
}

/**
 * Makes a column definition editable with the following properties:
 *
 * * The cell will briefly flash when its value changes
 * * Changing the cell's value will emit an event with the provided `eventType` and data where `id` is the asset ID and
 *   another field with the same name as the {@link ColDef} field is equal to the new value
 *
 * @param colDef - A column definition to make editable
 * @param onCellValueChanged - The name or type of the event to emit
 */
export function makeEditable(
  colDef: YieldXColDef,
  onCellValueChanged: (e: CellValueChangedEvent) => void
): YieldXColDef {
  const { field } = colDef;
  if (field == null) {
    return colDef;
  }
  const valueSetter = createNumberValueSetter(field);
  return {
    ...colDef,
    editable: true,
    enableCellChangeFlash: true,
    onCellValueChanged,
    valueSetter
  };
}

// </editor-fold>

// <editor-fold desc="Generic column definitions">

/**
 * Default column definition.
 */
export const defaultColDef: YieldXColDef = {
  filter: true,
  filterParams: {
    applyButton: true,
    debounceMs: 200,
    newRowsAction: "keep",
    resetButton: true,
    suppressAndOrCondition: true
  },
  resizable: true,
  sortable: true,
  dataSource: "Asset"
};

const defaultDateColDef: YieldXColDef = {
  filter: "agDateColumnFilter",
  cellStyle: {
    textAlign: "right"
  },
  cellRenderer: renderDate,
  dataSource: "Asset"
};

const defaultFloatColDef: YieldXColDef = {
  cellStyle: {
    textAlign: "right",
    "justify-content": "flex-end"
  },
  filter: "agNumberColumnFilter",
  valueFormatter: createNumberFormatter(2, false),
  dataSource: "Asset"
};

const defaultTextColDef: YieldXColDef = {
  dataSource: "Asset"
};

const defaultCustomColDef: YieldXColDef = {
  dataSource: "Custom"
};

const defaultStarColDef: YieldXColDef = {
  valueFormatter: starFormatter,
  dataSource: "Asset"
};

// </editor-fold>

// Please keep these in alphabetical order to help with organization

export const accruedInterestColDef = {
  ...defaultFloatColDef,
  headerName: "Accr Int",
  field: "bond.accruedInterest",
  width: 100,
  valueFormatter: createNumberFormatter(4, false)
};

export const addToCartColDef: YieldXColDef = {
  ...defaultCustomColDef,
  headerName: "Add to Cart",
  field: "id",
  cellRenderer: "addToCartRenderer",
  colId: "addToCart",
  filter: false,
  width: 124,
  dataSource: "Asset"
};

export const assetTypeColDef: YieldXColDef = {
  ...defaultTextColDef,
  field: "assetType",
  headerName: "Type",
  width: 76
};

export const costBasisColDef: YieldXColDef = {
  ...defaultFloatColDef,
  headerName: "Cost Basis",
  field: "costBasis",
  valueFormatter: createNumberFormatter(2, false),
  width: 118
};

export const cusipColDef: YieldXColDef = {
  ...defaultTextColDef,
  field: "identifiers.cusip",
  headerName: "CUSIP",
  width: 109
};

export const durationColDef: YieldXColDef = {
  ...defaultFloatColDef,
  headerName: "Duration",
  field: "analytics.duration",
  valueFormatter: createNumberFormatter(2, false),
  width: 105
};

export const expenseRatioColDef: YieldXColDef = {
  ...defaultFloatColDef,
  field: "fund.fees.fundExpenseRatio",
  filter: "agNumberColumnFilter",
  headerName: "Exp Ratio",
  valueFormatter: createNumberFormatter(2, true),
  width: 106
};

export const favoriteColDef: YieldXColDef = {
  ...defaultCustomColDef,
  cellRenderer: "favoriteRenderer",
  colId: "favorite",
  field: "id",
  filter: false,
  headerName: "Favorite",
  width: 102,
  dataSource: "Asset"
};

export const nonTradableColDef: YieldXColDef = {
  colId: "nonTradable",
  cellRenderer: "nonTradableRenderer",
  field: "universes.liquid",
  filter: false,
  headerName: "Tradable",
  dataSource: "Asset"
};

export const fundClassificationColDef: YieldXColDef = {
  ...defaultTextColDef,
  headerName: "Classification",
  field: "fund.classification",
  width: 118
};

export const gainLossColDef: YieldXColDef = {
  ...defaultFloatColDef,
  headerName: "Gain/Loss",
  field: "gainLoss",
  valueFormatter: createNumberFormatter(2, false),
  width: 110
};

export const isinColDef: YieldXColDef = {
  ...defaultTextColDef,
  field: "identifiers.isin",
  headerName: "ISIN",
  width: 136
};

export const issuerColDef: YieldXColDef = {
  ...defaultTextColDef,
  headerName: "Issuer",
  field: "issuerName",
  width: 140,
  valueGetter: createAssetValueGetter(asset => {
    const issuer = asset.bond?.issuer;
    return issuer == null ? null : issuer.shortName ?? issuer.longName;
  }),
  dependencies: ["bond.issuer.shortName", "bond.issuer.longName"]
};

export const latestOfferColDef: YieldXColDef = {
  ...defaultFloatColDef,
  headerName: "Offer",
  cellRenderer: "latestOfferRenderer",
  colId: "latestOffer",
  filter: false,
  width: 124,
  dataSource: "Asset"
};

export const liquidityColDef: YieldXColDef = {
  ...defaultStarColDef,
  headerName: "Liquidity",
  field: "scores.liquidity",
  width: 103
};

export const managementCompanyColDef: YieldXColDef = {
  ...defaultTextColDef,
  headerName: "Mgmt Cmpy",
  field: "fund.managementCompany",
  width: 108
};

export const managementFeeColDef: YieldXColDef = {
  ...defaultFloatColDef,
  headerName: "Mgmt Fee",
  field: "fund.fees.managementFee",
  width: 105,
  valueFormatter: createNumberFormatter(2, true)
};

export const marketValueColDef: YieldXColDef = {
  ...defaultFloatColDef,
  headerName: "Market Value",
  field: "marketValue",
  valueFormatter: createNumberFormatter(2, false),
  width: 135,
  dataSource: "Position"
};

export const maturityColDef = {
  ...defaultDateColDef,
  field: "bond.maturityDate",
  headerName: "Maturity",
  valueGetter: createDateValueGetter(asset => asset.bond?.maturityDate),
  width: 103
};

export const minimumQuantityColDef: YieldXColDef = {
  ...defaultFloatColDef,
  field: "minimumQuantity",
  headerName: "Min Qty",
  width: 93,
  valueGetter: createAssetValueGetter(determineMinimumDenominationQuantity),
  valueFormatter: createNumberFormatter(0, false),
  dependencies: ["assetType", "bond.minimumDenomination", "fund.tradeLotSize"]
};

export const minimumUnitsColDef: YieldXColDef = {
  ...defaultTextColDef,
  field: "minimumUnits",
  headerName: "Min Units",
  width: 105,
  valueGetter: createAssetValueGetter(determineMinimumDenominationUnits),
  dependencies: ["assetType", "assetSubtype", "fund.tradeLotSize"]
};

export const nameColDef: YieldXColDef = {
  ...defaultTextColDef,
  field: "name",
  filter: "agTextColumnFilter",
  headerName: "Name",
  width: 236,
  onCellClicked: event => {
    event.context.setAssetSelected(event.data.asset ?? event.data);
  }
};

export const netAssetValuePerShareColDef = {
  ...defaultFloatColDef,
  field: "fund.netAssetValuePerShare",
  headerName: "NAV/Share",
  valueFormatter: createNumberFormatter(2, false),
  width: 112
};

export const priceColDef = {
  ...defaultFloatColDef,
  field: "price",
  headerName: "Close Price",
  width: 120
};

export const lastPriceColDef = {
  ...defaultFloatColDef,
  field: "lastPrice",
  headerName: "Last Price",
  width: 120
};

export const productTypeColDef: YieldXColDef = {
  ...defaultTextColDef,
  field: "productType",
  headerName: "Product Type",
  width: 176,
  valueGetter: createAssetValueGetter(getProductType),
  dependencies: [
    "assetType",
    "assetSubtype",
    "bond.classifications.datastreamType"
  ]
};

export const quantityColDef: YieldXColDef = {
  ...defaultFloatColDef,
  headerName: "Quantity",
  field: "quantity",
  valueFormatter: createNumberFormatter(0, false),
  valueSetter: createNumberValueSetter("quantity"),
  width: 104,
  dataSource: "Position"
};

export const ratingColDef: YieldXColDef = {
  ...defaultTextColDef,
  headerName: "Rating",
  field: "rating",
  filter: "agSetColumnFilter",
  filterParams: {
    ...defaultColDef.filterParams,
    suppressSorting: true,
    values: [
      "AAA",
      "AA+",
      "AA",
      "AA-",
      "A+",
      "A",
      "A-",
      "BBB+",
      "BBB",
      "BBB-",
      "BB+",
      "BB",
      "BB-",
      "B+",
      "B",
      "B-",
      "CCC+",
      "CCC",
      "CCC-",
      "CC+",
      "CC",
      "CC-",
      "C+",
      "C",
      "C-",
      "D"
    ]
  },
  comparator: compareBondRating,
  width: 88
};

export const relevanceColDef: YieldXColDef = {
  ...defaultFloatColDef,
  field: "score",
  headerName: "Relevance",
  hide: true,
  width: 114
};

export const removePositionColDef: YieldXColDef = {
  ...defaultCustomColDef,
  headerName: "Remove",
  field: "id",
  cellRenderer: "removePositionRenderer",
  colId: "removePosition",
  filter: false,
  width: 124,
  dataSource: "Asset"
};
export const editPositionColDef: YieldXColDef = {
  ...defaultCustomColDef,
  headerName: "Edit",
  field: "id",
  cellRenderer: "editPositionRenderer",
  colId: "editPosition",
  filter: false,
  width: 124,
  dataSource: "Asset"
};

export const riskColDef: YieldXColDef = {
  ...defaultFloatColDef,
  headerName: "Risk",
  field: "scores.risk",
  width: 78,
  valueFormatter: createNumberFormatter(2, true)
};

export const esgScoreColDef: YieldXColDef = {
  ...defaultFloatColDef,
  field: "esgScores.total",
  headerName: "ESG Score",
  width: 93,
  valueFormatter: createNumberFormatter(0, false)
};

export const sectorColDef: YieldXColDef = {
  ...defaultTextColDef,
  headerName: "Sector",
  field: "bond.issuer.sector",
  width: 125
};

export const subsectorColDef: YieldXColDef = {
  ...defaultTextColDef,
  headerName: "Subsector",
  field: "bond.issuer.subsector",
  width: 134
};

export const tickerColDef: YieldXColDef = {
  ...defaultTextColDef,
  field: "ticker",
  headerName: "Ticker",
  width: 88
};

export const weightColDef: YieldXColDef = {
  ...defaultFloatColDef,
  headerName: "Weight",
  field: "weight",
  valueFormatter: createNumberFormatter(2, true),
  width: 90,
  dataSource: "Position"
};

export const yieldColDef: YieldXColDef = {
  ...defaultFloatColDef,
  field: "analytics.yield",
  headerName: "Yield",
  valueFormatter: createNumberFormatter(2, true),
  width: 79
};
