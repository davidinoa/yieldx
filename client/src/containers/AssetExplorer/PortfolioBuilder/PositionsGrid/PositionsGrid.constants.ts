import {
  CellValueChangedEvent,
  ColDef,
  RowNode
} from "@ag-grid-community/core";
import {
  convertYieldXColDefsToColDefs,
  cusipColDef,
  expenseRatioColDef,
  fundClassificationColDef,
  issuerColDef,
  makeEditable,
  managementCompanyColDef,
  marketValueColDef,
  minimumQuantityColDef,
  minimumUnitsColDef,
  nameColDef,
  nonTradableColDef,
  priceColDef,
  productTypeColDef,
  quantityColDef,
  ratingColDef,
  removePositionColDef,
  sectorColDef,
  tickerColDef,
  weightColDef,
  yieldColDef
} from "../../../../grid/colDefs";

type CellValueChangeHandler = (e: CellValueChangedEvent) => void;

function cleanQuantity(
  quantity: number,
  minimumDenomination: number,
  denominationIncrement: number
): number {
  // If quantity is zero or negative, force it to zero
  if (quantity <= 0) {
    return 0;
  }
  // If quantity is positive but less than the minimum denomination, force it to at least equal the minimum denomation
  if (quantity <= minimumDenomination) {
    return minimumDenomination;
  }
  // Ensure we have at least the minimum denomation, after which we require units of denomination increments
  return (
    minimumDenomination +
    Math.round((quantity - minimumDenomination) / denominationIncrement) *
      denominationIncrement
  );
}

function updatePosition(
  node: RowNode,
  totalMarketValue: number,
  targetQuantity: number
) {
  const {
    quantity,
    marketValue,
    weight,
    denominationIncrement,
    minimumDenomination,
    quantityToMarketValueFactor
  } = node.data;
  const newQuantity = cleanQuantity(
    targetQuantity,
    minimumDenomination,
    denominationIncrement
  );
  const newMarketValue = newQuantity * quantityToMarketValueFactor;
  const newWeight = (newMarketValue / totalMarketValue) * 100;
  if (Math.abs(newQuantity - quantity) >= 0.001) {
    node.setDataValue("quantity", newQuantity);
  }
  if (Math.abs(newWeight - weight) >= 0.00001) {
    node.setDataValue("weight", newWeight);
  }
  if (Math.abs(newMarketValue - marketValue) >= 0.001) {
    node.setDataValue("marketValue", newMarketValue);
  }
}

function createQuantityUpdater(
  onChange: CellValueChangeHandler
): CellValueChangeHandler {
  return function updateQuantity(e: CellValueChangedEvent) {
    const targetQuantity = e.newValue;
    updatePosition(
      e.node,
      e.context.portfolio.totalMarketValue,
      targetQuantity
    );
    onChange(e);
  };
}

function createWeightUpdater(
  onChange: CellValueChangeHandler
): CellValueChangeHandler {
  return function updateWeight(e: CellValueChangedEvent) {
    const targetMarketValue =
      (e.context.portfolio.totalMarketValue * e.newValue) / 100;
    const targetQuantity =
      targetMarketValue / e.data.quantityToMarketValueFactor;
    updatePosition(
      e.node,
      e.context.portfolio.totalMarketValue,
      targetQuantity
    );
    onChange(e);
  };
}

function createMarketValueUpdater(
  onChange: CellValueChangeHandler
): CellValueChangeHandler {
  return function updateMarketValue(e: CellValueChangedEvent) {
    const targetQuantity = e.newValue / e.data.quantityToMarketValueFactor;
    updatePosition(
      e.node,
      e.context.portfolio.totalMarketValue,
      targetQuantity
    );
    onChange(e);
  };
}

export function createColDefs(onChange: CellValueChangeHandler): ColDef[] {
  return convertYieldXColDefsToColDefs(
    [
      removePositionColDef,
      nonTradableColDef,
      { ...issuerColDef, hide: true },
      nameColDef,
      tickerColDef,
      cusipColDef,
      productTypeColDef,
      fundClassificationColDef,
      ratingColDef,
      priceColDef,
      makeEditable(quantityColDef, createQuantityUpdater(onChange)),
      makeEditable(marketValueColDef, createMarketValueUpdater(onChange)),
      makeEditable(weightColDef, createWeightUpdater(onChange)),
      minimumQuantityColDef,
      minimumUnitsColDef,
      yieldColDef,
      expenseRatioColDef,
      sectorColDef,
      managementCompanyColDef
    ],
    { rowDataType: "Position" }
  );
}
