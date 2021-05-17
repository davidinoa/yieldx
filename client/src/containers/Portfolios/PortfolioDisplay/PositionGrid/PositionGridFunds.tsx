import React, { Dispatch, SetStateAction, useState } from "react";
import { ColDef } from "@ag-grid-enterprise/all-modules";
import { AgGridReact } from "@ag-grid-community/react";
import { ColumnApi, GridApi } from "@ag-grid-community/core";
import { Asset } from "@bondhouse/rover-universe";
import {
  convertYieldXColDefsToColDefs,
  expenseRatioColDef,
  fundClassificationColDef,
  managementCompanyColDef,
  marketValueColDef,
  nameColDef,
  productTypeColDef,
  quantityColDef,
  tickerColDef,
  weightColDef,
  yieldColDef,
  priceColDef
} from "grid/colDefs";
import { defaultGridOptions } from "grid/gridOptions";
import YieldXPortfolio from "models/YieldXPortfolio";
import AssetDetails from "elements/AssetDetails/AssetDetails";
import { AdditionalRow, Root } from "./PositionGrid.styles";
import { currencyFormatter } from "../../../Investors/InvestorAccount/InvestorPortfolios/InvestorPortfolios";
import { createFrameworkComponents } from "../../../AssetExplorer/Search/Search.state";

const colDefs: ColDef[] = convertYieldXColDefsToColDefs(
  [
    nameColDef,
    tickerColDef,
    quantityColDef,
    priceColDef,
    weightColDef,
    yieldColDef,
    expenseRatioColDef,
    marketValueColDef,
    managementCompanyColDef,
    productTypeColDef,
    fundClassificationColDef
  ],
  { rowDataType: "Position" }
);

type Props = {
  setColumnApi: Dispatch<SetStateAction<ColumnApi | undefined>>;
  setGridApi: Dispatch<SetStateAction<GridApi | undefined>>;
  portfolio: YieldXPortfolio;
};

export default function PositionGridFunds({
  portfolio,
  setColumnApi,
  setGridApi
}: Props) {
  const [assetSelected, setAssetSelected] = useState<Asset>();
  const frameworkComponents = createFrameworkComponents();

  return (
    <Root>
      <AdditionalRow>
        <span className="row-label">cash available:</span>
        <span className="row-value">
          {currencyFormatter.format(portfolio.cashMarketValue)}
        </span>
      </AdditionalRow>
      <div className="ag-theme-alpine-dark">
        <AgGridReact
          {...defaultGridOptions}
          columnDefs={colDefs}
          frameworkComponents={frameworkComponents}
          context={{ setAssetSelected }}
          onGridReady={({ api, columnApi }) => {
            columnApi.setColumnWidth("name", 236);
            if (setColumnApi) {
              setColumnApi(columnApi);
            }
            if (setGridApi) {
              setGridApi(api);
            }
          }}
          rowData={portfolio.positions}
        />
      </div>
      <AdditionalRow>
        <span className="row-label">rows: </span>
        <span className="row-value">
          {portfolio.positions.length.toLocaleString("en-US")}
        </span>
      </AdditionalRow>
      {assetSelected && (
        <AssetDetails
          asset={assetSelected}
          onHide={() => setAssetSelected(undefined)}
        />
      )}
    </Root>
  );
}
