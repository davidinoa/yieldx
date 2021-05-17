import "./setAgGridLicenseKey";
import { AgGridReactProps } from "@ag-grid-community/react";
import { AllModules } from "@ag-grid-enterprise/all-modules";
import { defaultColDef } from "./colDefs";

export const defaultRowHeight = 28;
export const defaultHeaderHeight = 36;

export const defaultGridOptions: AgGridReactProps = {
  defaultColDef,
  headerHeight: defaultHeaderHeight,
  modules: AllModules,
  rowHeight: defaultRowHeight
};
