import React from "react";
import { useRecoilState } from "recoil";
import { AgGridReact } from "@ag-grid-community/react";
import { WatchList } from "@bondhouse/rover-preferences";
import { Redirect, useHistory } from "react-router";
import styled from "styled-components";
import { GridReadyEvent } from "@ag-grid-community/core";
import { Col, Row } from "react-bootstrap";
import { portfolioCreateOrEditState } from "recoil-state/portfolioCreateOrEditState";
import { defaultGridOptions } from "grid/gridOptions";
import { cartService, watchListService } from "services";
import { defaultSideBarDef } from "grid/sideBarDefs";
import {
  accruedInterestColDef,
  convertYieldXColDefsToColDefs,
  cusipColDef,
  durationColDef,
  expenseRatioColDef,
  favoriteColDef,
  isinColDef,
  issuerColDef,
  latestOfferColDef,
  liquidityColDef,
  managementCompanyColDef,
  managementFeeColDef,
  maturityColDef,
  minimumQuantityColDef,
  minimumUnitsColDef,
  netAssetValuePerShareColDef,
  nonTradableColDef,
  priceColDef,
  productTypeColDef,
  ratingColDef,
  riskColDef,
  sectorColDef,
  subsectorColDef,
  tickerColDef,
  yieldColDef
} from "grid/colDefs";
import { bottomNav, navbar } from "theme/theme.style";
import { mediaQuery } from "theme/breakpoints.style";
import AppBottomNav from "elements/AppBottomNav/AppBottomNav";
import {
  createFavoriteRenderer,
  createLatestOfferRenderer,
  createNonTradableRenderer
} from "../../AssetExplorer/Search/Search.state";
import { GridBottomBar } from "../../AssetExplorer/AssetExplorer.styles";

const Wrapper = styled.div`
  width: 100%;
  height: calc(100% - ${navbar.height.xs} - ${bottomNav.height.xs});
  ${mediaQuery("xxl")} {
    height: calc(100% - ${navbar.height.xxl} - ${bottomNav.height.xxl});
    padding: 0 2rem;
  }
  h1 {
    font-weight: bold;
    font-size: 30px;
    line-height: 37px;
  }
  span {
    font-size: 16px;
    line-height: 165%;
  }
  .ag-theme-alpine-dark {
    height: 600px;
    //width: 100%;
    .ag-popup {
      height: 0px;
      width: 0px;
    }
  }
  .ag-cell {
    display: flex;
    align-items: center;
    justify-content: center;
  }
  .ag-header-cell-text {
    font-weight: bold;
    font-size: 10px;
    line-height: 12px;
    letter-spacing: 0.2em;
    text-transform: uppercase;
    color: var(--subtext-3);
  }
`;

export default function CheckNonTradable() {
  const [{ currentPortfolio }, setPortfolioData] = useRecoilState(
    portfolioCreateOrEditState
  );
  const history = useHistory();
  const [watchList, setList] = React.useState<WatchList>();
  React.useEffect(() => {
    const unsubId = watchListService.subscribe(list => {
      setList(list);
    });
    return () => watchListService.unsubscribe(unsubId);
  });
  if (!currentPortfolio) return <Redirect to="/" />;
  const assets = currentPortfolio.positions.map(cv => cv.asset);

  return (
    <>
      <Wrapper>
        <Row className="h-100">
          <Col
            xs={{
              offset: 2,
              span: 7
            }}
            className="d-flex justify-content-center align-items-start flex-column"
          >
            <h1 className="mb-3">CHECK NON-TRADABLE</h1>
            <span>
              Currently, the following assets cannot be executed within YieldX.
              We're expanding our trading capabilities and soon there'll be more
              options to trade directly with us.
            </span>
            <br />
            <span>
              By clicking ”Edit positions”, you'll be able to either remove the
              non-tradeable instruments and continue to execute with YieldX or
              leave them and save as a paper portfolio.
            </span>
          </Col>
          <Col className="d-flex align-items-center">
            <div className="w-100">
              <div className="ag-theme-alpine-dark">
                <AgGridReact
                  {...defaultGridOptions}
                  headerHeight={50}
                  rowHeight={40}
                  columnDefs={[
                    ...convertYieldXColDefsToColDefs([
                      nonTradableColDef,
                      favoriteColDef,
                      issuerColDef,
                      {
                        dataSource: "Asset",
                        field: "name",
                        filter: "agTextColumnFilter",
                        headerName: "Name",
                        width: 236
                      },
                      tickerColDef,
                      cusipColDef,
                      isinColDef,
                      productTypeColDef,
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
                      riskColDef,
                      sectorColDef,
                      subsectorColDef
                    ])
                  ]}
                  context={{
                    watchList,
                    addFavorite: (assetId: string) =>
                      watchListService.createOrReplaceWatchListItem(assetId),
                    removeFavorite: (assetId: string) =>
                      watchListService.deleteWatchListItem(assetId)
                  }}
                  frameworkComponents={{
                    favoriteRenderer: createFavoriteRenderer(),
                    nonTradableRenderer: createNonTradableRenderer(),
                    latestOfferRenderer: createLatestOfferRenderer()
                  }}
                  getRowNodeId={data => data.id}
                  onGridReady={({ columnApi }: GridReadyEvent) => {
                    columnApi.autoSizeAllColumns();
                  }}
                  rowData={assets}
                  rowSelection="multiple"
                  sideBar={defaultSideBarDef}
                  suppressRowClickSelection
                />
              </div>
              <GridBottomBar className="justify-content-between align-items-center">
                <Col xs className="d-flex flex-column">
                  <div>
                    <span className="label">Rows:</span>
                    <span className="value">
                      {currentPortfolio.positions.length}
                    </span>
                  </div>
                  <div>
                    <span className="label">Non-Tradable:</span>
                    <span className="value">
                      {assets.filter(cv => !cv.universes?.liquid).length}
                    </span>
                  </div>
                </Col>
              </GridBottomBar>
            </div>
          </Col>
          <Col xs={2} />
        </Row>
      </Wrapper>
      <AppBottomNav
        hideNext
        previousLabel="Edit positions"
        onPrevious={() => {
          if (!currentPortfolio) throw Error("No portfolio currently in state");
          setPortfolioData(prev => ({
            ...prev,
            portfolioId: currentPortfolio.getId(),
            status: "editing",
            originalPortfolio: currentPortfolio,
            cartContext: "portfolio-cart"
          }));
          cartService.clearPortfolioCart();
          cartService
            .createPortfolioCartItems(
              currentPortfolio.positions.map(it => it.asset.id)
            )
            .then(() => history.push(`/asset-explorer/portfolio-builder`));
        }}
      />
    </>
  );
}
