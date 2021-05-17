import { Column, ColumnApi, GridApi } from "@ag-grid-community/core";

const ignoredColumnKeys: Record<string, boolean> = {
  addToCart: true,
  favorite: true,
  removePosition: true,
  nonTradable: true
};

export default function exportDataAsCsv(
  gridApi?: GridApi,
  columnApi?: ColumnApi,
  fileName?: string
) {
  if (gridApi != null && columnApi != null) {
    const columnKeys = columnApi
      .getAllDisplayedColumns()
      .map((column: Column) => column.getColId())
      .filter((columnKey: string) => !ignoredColumnKeys[columnKey]);
    gridApi.exportDataAsCsv({
      columnKeys,
      columnSeparator: ",",
      fileName
    });
  }
}
