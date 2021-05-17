import React, { Dispatch, SetStateAction, useEffect, useState } from "react";
import { AgGridReact } from "@ag-grid-community/react";
import { Container, Row } from "react-bootstrap";
import {
  CellValueChangedEvent,
  ColumnApi,
  GridApi,
  GridReadyEvent
} from "@ag-grid-community/core";

import clsx from "clsx";
import { ChangeDetectionStrategyType } from "@ag-grid-community/react/lib/changeDetectionService";
import { useLocation } from "react-router";
import { cartService, watchListService } from "services";
import { defaultGridOptions } from "grid/gridOptions";
import { formatNumber } from "util/formatNumber";
import YieldXPortfolio from "models/YieldXPortfolio";
import noOp from "util/noOp";
import useBuilderCart from "hooks/useBuilderCart";
import parsePortfolioQuery from "util/parsePortfolioQuery";
import { Header } from "../../AssetExplorer.styles";
import { createColDefs } from "./PositionsGrid.constants";
import { createFrameworkComponents } from "../../Search/Search.state";

interface Props {
  portfolio: YieldXPortfolio;
  setPortfolio: Dispatch<SetStateAction<YieldXPortfolio | undefined>>;
  setColumnApi: Dispatch<SetStateAction<ColumnApi | undefined>>;
  setGridApi: Dispatch<SetStateAction<GridApi | undefined>>;
  onChange: (e?: CellValueChangedEvent) => void;
}

function PositionsGrid({
  setColumnApi: setParentColumnApi,
  setGridApi: setParentGridApi,
  setPortfolio,
  portfolio,
  onChange
}: Props) {
  const { search, pathname } = useLocation();
  const portfolioEditParams = parsePortfolioQuery(search);
  const cartContext =
    portfolioEditParams !== null && pathname.includes("edit")
      ? "portfolio-cart"
      : "user-cart";
  const currentBasket = useBuilderCart(cartContext);
  const frameworkComponents = createFrameworkComponents();
  const colDefs = createColDefs(onChange);

  const [gridApi, setGridApi] = useState<GridApi>();
  useEffect(() => {
    if (gridApi && portfolio?.positions)
      // Mapping positions here to trigger change detection in AG grid
      gridApi.setRowData(portfolio.positions.map(it => ({ ...it })));
  }, [portfolio, gridApi]);

  return (
    <Container fluid>
      <Row>
        <Header className="justify-content-between align-items-center">
          <h1>Build your portfolio</h1>
          <div className="cash-available">
            <span>
              Cash available:
              <b className={clsx({ negative: portfolio.cashMarketValue < 0 })}>
                {formatNumber(portfolio.cashMarketValue, { prefix: "$" })}
              </b>
            </span>
          </div>
        </Header>
      </Row>
      <Row>
        <div className="ag-theme-alpine-dark">
          <AgGridReact
            {...defaultGridOptions}
            columnDefs={colDefs}
            context={{
              cart: currentBasket,
              portfolio,
              addToCart: async () => noOp(),
              removeFromCart: (assetId: string) => {
                setPortfolio(prev => {
                  if (prev) {
                    const copy = prev.clone();
                    copy.sellPosition(assetId);
                    return copy;
                  }
                  return prev;
                });
                if (cartContext === "portfolio-cart")
                  cartService.deletePortfolioCartItem(assetId);
                else cartService.deleteCartItem(assetId);
                if (portfolio.totalMarketValue !== portfolio.cashMarketValue)
                  onChange();
              },
              removeFavorite: (assetId: string) =>
                watchListService.deleteWatchListItem(assetId)
            }}
            frameworkComponents={frameworkComponents}
            rowDataChangeDetectionStrategy={
              ChangeDetectionStrategyType.IdentityCheck
            }
            stopEditingWhenGridLosesFocus
            immutableData
            getRowNodeId={pos => pos.assetId}
            onGridReady={(params: GridReadyEvent) => {
              setGridApi(params.api);
              setParentGridApi(params.api);
              setParentColumnApi(params.columnApi);
            }}
            singleClickEdit
          />
        </div>
      </Row>
    </Container>
  );
}

export default PositionsGrid;
