import { ColDef } from "@ag-grid-community/core";
import {
  accruedInterestColDef,
  addToCartColDef,
  productTypeColDef,
  cusipColDef,
  durationColDef,
  expenseRatioColDef,
  favoriteColDef,
  isinColDef,
  fundClassificationColDef,
  issuerColDef,
  managementCompanyColDef,
  liquidityColDef,
  managementFeeColDef,
  maturityColDef,
  nameColDef,
  netAssetValuePerShareColDef,
  priceColDef,
  ratingColDef,
  riskColDef,
  esgScoreColDef,
  sectorColDef,
  subsectorColDef,
  tickerColDef,
  yieldColDef,
  YieldXColDef,
  minimumQuantityColDef,
  minimumUnitsColDef,
  convertYieldXColDefsToColDefs,
  latestOfferColDef,
  nonTradableColDef
} from "../../../grid/colDefs";

// NOTE: these control the column order within agGrid
const yieldXColDefs: YieldXColDef[] = [
  addToCartColDef,
  favoriteColDef,
  nonTradableColDef,
  issuerColDef,
  nameColDef,
  tickerColDef,
  cusipColDef,
  isinColDef,
  productTypeColDef,
  fundClassificationColDef,
  ratingColDef,
  maturityColDef,
  minimumQuantityColDef,
  minimumUnitsColDef,
  latestOfferColDef,
  priceColDef,
  accruedInterestColDef,
  netAssetValuePerShareColDef,
  yieldColDef,
  durationColDef,
  expenseRatioColDef,
  managementFeeColDef,
  managementCompanyColDef,
  liquidityColDef,
  esgScoreColDef,
  riskColDef,
  sectorColDef,
  subsectorColDef
];

// NOTE: these control the column order within agGrid
const defaultYieldXColDefs: YieldXColDef[] = [
  addToCartColDef,
  favoriteColDef,
  nameColDef,
  cusipColDef,
  isinColDef,
  productTypeColDef,
  fundClassificationColDef,
  priceColDef,
  yieldColDef,
  riskColDef,
  esgScoreColDef,
  liquidityColDef,
  tickerColDef,
  ratingColDef,
  issuerColDef,
  maturityColDef,
  minimumQuantityColDef,
  minimumUnitsColDef,
  accruedInterestColDef,
  durationColDef,
  sectorColDef,
  subsectorColDef,
  latestOfferColDef,
  netAssetValuePerShareColDef,
  expenseRatioColDef,
  managementFeeColDef,
  managementCompanyColDef,
  nonTradableColDef
];

export const colDefs: ColDef[] = convertYieldXColDefsToColDefs(yieldXColDefs);
export const defaultColDefs: ColDef[] = convertYieldXColDefsToColDefs(
  defaultYieldXColDefs
);

/**
 * Returns a list of fields to request from the search API. If a field such as `rating` needs to be expanded, it should
 * be part of {@link fieldExpansions}.
 */
function getSearchFields(): string[] {
  const searchFields: string[] = [];
  const seen: { [key: string]: boolean } = {};
  yieldXColDefs.forEach(({ field, dependencies }) => {
    if (field != null && !(field in seen)) {
      // Check whether a field needs to be expanded. If it has no mapping in fieldExpansions, then the field itself will
      // be added to the list
      if (dependencies == null) {
        searchFields.push(field);
      } else {
        dependencies.forEach(dependentField => {
          if (!(dependentField in seen)) {
            searchFields.push(dependentField);
            seen[dependentField] = true;
          }
        });
      }
      seen[field] = true;
    }
  });
  return searchFields;
}

export const searchFields = getSearchFields();
