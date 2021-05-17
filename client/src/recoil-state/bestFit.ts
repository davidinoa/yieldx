import { CashFlow } from "@bondhouse/rover-portfolio-analyzer";
import { atom } from "recoil";
import { GridApi, ColumnApi } from "@ag-grid-community/core";
import YieldXPortfolio, { YieldXAsset } from "models/YieldXPortfolio";
import { Preferences } from "containers/BestFit/BestFit.state";

export const MINIMUM_INVESTMENT = 50_000.0;
export const MAXIMUM_INVESTMENT = 25_000_000.0;

export interface BestFitReviewData {
  portfolio: YieldXPortfolio;
  preferences: Preferences;
  additionalAssets: YieldXAsset[];
  cashflows: Array<CashFlow>;
}

export type AgGridApis = { gridApi: GridApi; columnApi: ColumnApi };

export const bestFitReviewState = atom<BestFitReviewData | undefined>({
  key: "bestFitReviewState",
  default: undefined
});

export const preferencesDefault: Preferences = {
  submitting: false,
  isCurrentValid: false,
  currentStepIndex: 0,
  quality: undefined,
  timeMetric: "maturity",
  years: 5,
  weighting: undefined,
  excludedSubsectors: [],
  excludedSectors: [],
  excludedEsgScorePercentile: 0,
  quantity: 20,
  investment: MINIMUM_INVESTMENT
};

export const preferencesState = atom<Preferences>({
  key: "preferencesState",
  default: preferencesDefault
});

export const agGridState = atom<AgGridApis | undefined>({
  key: "agGridState",
  default: undefined
});
