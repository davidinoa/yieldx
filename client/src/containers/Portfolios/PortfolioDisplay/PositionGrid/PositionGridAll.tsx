import React, {
  Dispatch,
  SetStateAction,
  useCallback,
  useEffect,
  useState
} from "react";
import { AgGridReact } from "@ag-grid-community/react";
import { ColDef, ColumnApi, GridApi } from "@ag-grid-community/core";
import { Asset } from "@bondhouse/rover-universe";
import { defaultGridOptions } from "grid/gridOptions";
import {
  convertYieldXColDefsToColDefs,
  costBasisColDef,
  cusipColDef,
  expenseRatioColDef,
  fundClassificationColDef,
  gainLossColDef,
  issuerColDef,
  lastPriceColDef,
  managementCompanyColDef,
  marketValueColDef,
  nameColDef,
  editPositionColDef,
  nonTradableColDef,
  priceColDef,
  productTypeColDef,
  quantityColDef,
  ratingColDef,
  sectorColDef,
  tickerColDef,
  weightColDef,
  yieldColDef
} from "grid/colDefs";
import AssetDetails from "elements/AssetDetails/AssetDetails";
import YieldXPortfolio from "models/YieldXPortfolio";
import styled from "styled-components";
import { AgGridApis } from "recoil-state/bestFit";
import { buildEditUrl } from "containers/Portfolios/EditSinglePosition/EditSinglePosition";
import { useHistory, useRouteMatch } from "react-router-dom";
import {
  createNonTradableRenderer,
  createEditPositionRenderer
} from "../../../AssetExplorer/Search/Search.state";
import { currencyFormatter } from "../../../Investors/InvestorAccount/InvestorPortfolios/InvestorPortfolios";
import { AdditionalRow, Root } from "./PositionGrid.styles";

const colDefs: ColDef[] = convertYieldXColDefsToColDefs(
  [
    editPositionColDef,
    nonTradableColDef,
    cusipColDef,
    tickerColDef,
    issuerColDef,
    nameColDef,
    ratingColDef,
    lastPriceColDef,
    priceColDef,
    costBasisColDef,
    quantityColDef,
    marketValueColDef,
    weightColDef,
    gainLossColDef,
    yieldColDef,
    expenseRatioColDef,
    sectorColDef,
    fundClassificationColDef,
    managementCompanyColDef,
    productTypeColDef
  ],
  { rowDataType: "Position" }
);

export type Sleeve = "all" | "bonds" | "funds";

const bondColumnIds: string[] = [
  `asset.${cusipColDef.field}`,
  `asset.${nonTradableColDef.field}`,
  `asset.${tickerColDef.field}`,
  `asset.${nameColDef.field}`,
  `asset.${ratingColDef.field}`,
  `asset.${priceColDef.field}`,
  `asset.${lastPriceColDef.field}`,
  `${costBasisColDef.field}`,
  `${quantityColDef.field}`,
  `${marketValueColDef.field}`,
  `${weightColDef.field}`,
  `${gainLossColDef.field}`,
  `asset.${yieldColDef.field}`,
  `asset.${sectorColDef.field}`,
  `${issuerColDef.field}`
];

const fundColumnIds: string[] = [
  `asset.${tickerColDef.field}`,
  `asset.${nonTradableColDef.field}`,
  `asset.${nameColDef.field}`,
  `asset.${priceColDef.field}`,
  `asset.${lastPriceColDef.field}`,
  `${costBasisColDef.field}`,
  `${quantityColDef.field}`,
  `${marketValueColDef.field}`,
  `${weightColDef.field}`,
  `${gainLossColDef.field}`,
  `asset.${yieldColDef.field}`,
  `asset.${expenseRatioColDef.field}`,
  `asset.${fundClassificationColDef.field}`,
  `asset.${managementCompanyColDef.field}`,
  `asset.${productTypeColDef.field}`
];

type ColFilter = { [key: string]: boolean };
function getColDefs(sleeve: Sleeve, filter: ColFilter = {}): ColDef[] {
  const visibleColKeys: ColFilter = {};
  if (sleeve === "all" || sleeve === "bonds") {
    bondColumnIds.forEach(columnId => {
      visibleColKeys[columnId] = true;
    });
  }
  if (sleeve === "all" || sleeve === "funds") {
    fundColumnIds.forEach(columnId => {
      visibleColKeys[columnId] = true;
    });
  }
  // Apply filter mask to visible column filter
  if (filter) Object.assign(visibleColKeys, filter);
  return colDefs.filter(colDef => {
    const { field } = colDef;
    return field != null && field in visibleColKeys;
  });
}

type GridOnReadyHandlerParams = {
  columnApi: ColumnApi;
  api: GridApi;
};

type Props = {
  sleeve: Sleeve;
  cashAvailable?: number;
  portfolio?: YieldXPortfolio;
  setColumnApi?: (
    columnApi: ColumnApi
  ) => void | Dispatch<SetStateAction<ColumnApi | undefined>>;
  setGridApi?: (
    gridApi: GridApi
  ) => void | Dispatch<SetStateAction<GridApi | undefined>>;
  setGridApis?: (apis: AgGridApis) => void;
};

export const GridContainer = styled.div.attrs(() => ({}))`
  border: 1px solid var(--border-new);
  height: 400px;
`;

export default function PositionGridAll({
  sleeve = "all",
  portfolio,
  setGridApi,
  setColumnApi,
  setGridApis,
  cashAvailable
}: Props) {
  const { push } = useHistory();
  const match = useRouteMatch();
  const [assetSelected, setAssetSelected] = useState<Asset>();
  const [api, setApi] = useState<GridApi>();
  const frameworkComponents: any = {
    nonTradableRenderer: createNonTradableRenderer()
  };
  const gridContext: any = { setAssetSelected };
  const isCustomLive =
    portfolio?.getType()?.toUpperCase() === "LIVE" &&
    portfolio?.getAppType() === "CUSTOM";
  const columnDefs = getColDefs(
    sleeve,
    isCustomLive ? { [`asset.${editPositionColDef.field}`]: true } : {}
  );

  // Only add edit button if the portfolio is not live
  if (isCustomLive) {
    gridContext.editPosition = (assetId: string) =>
      push(buildEditUrl(match, { assetId }));
    frameworkComponents.editPositionRenderer = createEditPositionRenderer();
  }

  useEffect(() => {
    if (api) api.setRowData(portfolio?.positions ?? []);
  }, [portfolio, api]);

  const onGridReady = useCallback(
    ({ api: gridApi, columnApi }: GridOnReadyHandlerParams) => {
      setApi(gridApi);
      if (setGridApi && setColumnApi) {
        setGridApi(gridApi);
        setColumnApi(columnApi);
      } else if (setGridApis) {
        setGridApis({ gridApi, columnApi });
      }
    },
    [setApi, setGridApi, setColumnApi, setGridApis]
  );

  return (
    <Root>
      {cashAvailable ? (
        <AdditionalRow>
          <span className="row-label">cash available:</span>
          <span className="row-value">
            {currencyFormatter.format(cashAvailable)}
          </span>
        </AdditionalRow>
      ) : null}
      <GridContainer className="ag-theme-alpine-dark">
        <AgGridReact
          {...defaultGridOptions}
          context={gridContext}
          frameworkComponents={frameworkComponents}
          columnDefs={columnDefs}
          onGridReady={onGridReady}
        />
      </GridContainer>
      <AdditionalRow className="hidden-pdf">
        <span className="row-label">rows: </span>
        <span className="row-value">
          {portfolio?.positions.length.toLocaleString("en-US") ?? 0}
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
