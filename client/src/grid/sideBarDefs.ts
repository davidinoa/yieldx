import { SideBarDef } from "@ag-grid-community/core";

export const defaultSideBarDef: SideBarDef = {
  defaultToolPanel: "",
  position: "right",
  toolPanels: [
    {
      id: "columns",
      labelDefault: "Columns",
      labelKey: "columns",
      iconKey: "columns",
      toolPanel: "agColumnsToolPanel"
    },
    {
      id: "filters",
      labelDefault: "Filters",
      labelKey: "filters",
      iconKey: "filter",
      toolPanel: "agFiltersToolPanel"
    }
  ]
};
