import React, { useState } from "react";
import { Col, Row } from "react-bootstrap";
import { useMachine } from "@xstate/react";
import { Redirect, useHistory, useLocation } from "react-router-dom";
import { AgGridReact } from "@ag-grid-community/react";
import { GridReadyEvent } from "@ag-grid-community/core";
import { Asset } from "@bondhouse/rover-universe";
import { useRecoilValue } from "recoil";
import AppBottomNav from "elements/AppBottomNav/AppBottomNav";
import { cartService, watchListService } from "services";
import { defaultSideBarDef } from "grid/sideBarDefs";
import { defaultGridOptions } from "grid/gridOptions";
import AssetDetails from "elements/AssetDetails/AssetDetails";
import parsePortfolioQuery from "util/parsePortfolioQuery";
import YieldXLoader from "elements/YieldXLoader/YieldXLoader";
import { portfolioCreateOrEditState } from "recoil-state/portfolioCreateOrEditState";
import { selectedInventoriesAtom } from "../../UniverseManager/SetDefaultUniverses/useSetDefaultUniverses";
import SearchOptionsBar from "./SearchOptionsBar/SearchOptionsBar";
import { ratings } from "./SearchOptionsBar/RatingsSlider/RatingsSlider";
import { GridBottomBar, Header } from "../AssetExplorer.styles";
import { SearchPageContainer } from "./Search.styles";
import { defaultColDefs } from "./Search.constants";
import SearchMachine, { createFrameworkComponents } from "./Search.state";

export default function Search() {
  const { search, pathname } = useLocation();
  const portfolioQueryParams = parsePortfolioQuery(search);
  const { assetExplorer } = useRecoilValue(selectedInventoriesAtom);
  const { cartContext } = useRecoilValue(portfolioCreateOrEditState);
  const history = useHistory();
  const isEditing =
    cartContext === "portfolio-cart" ||
    (pathname.includes("edit") && portfolioQueryParams != null);
  const [state, send] = useMachine(
    SearchMachine.withContext({
      inventoryId: assetExplorer?.id,
      assetClassFilters: {},
      tradabilityFilters: {
        "universes.liquid": {
          equalsBoolean: true
        }
      },
      query: "",
      rowData: [],
      found: 0,
      selectedClass: "all",
      selectedYield: undefined,
      inGridFilters: {},
      ratings,
      yieldFilters: {},
      hideNonTradable: true,
      isEditing
    })
  );
  const {
    cart,
    query,
    selectedClass,
    rowData,
    found,
    tradabilityFilters,
    selectedYield,
    hideNonTradable,
    ratings: selectedRatings
  } = state.context;
  const frameworkComponents = createFrameworkComponents();
  const [displayedRowCount, setDisplayedRowCount] = useState(0);
  const [assetSelected, setAssetSelected] = useState<Asset>();
  if (pathname.includes("edit") && portfolioQueryParams === null)
    return <Redirect to="/asset-explorer/search" />;
  if (cart == null) {
    return <YieldXLoader />;
  }

  return (
    <>
      <SearchPageContainer fluid>
        <Row>
          <Header>
            <h1>Explore, analyze, and add assets</h1>
          </Header>
        </Row>
        <SearchOptionsBar
          selectedRatings={selectedRatings}
          send={send}
          query={query}
          selectedClass={selectedClass}
          tradabilityFilters={tradabilityFilters}
          hideNonTradable={hideNonTradable}
          selectedYield={selectedYield}
        />
        <Row>
          <div className="ag-theme-alpine-dark">
            <AgGridReact
              {...defaultGridOptions}
              columnDefs={defaultColDefs}
              context={{
                cart,
                setAssetSelected,
                watchList: state.context.watchList,
                addFavorite: (assetId: string) =>
                  watchListService.createOrReplaceWatchListItem(assetId),
                addToCart: (assetId: string) =>
                  isEditing
                    ? cartService.createPortfolioCartItems([assetId])
                    : cartService.createOrReplaceCartItem(assetId),
                removeFromCart: (assetId: string) =>
                  isEditing
                    ? cartService.deletePortfolioCartItem(assetId)
                    : cartService.deleteCartItem(assetId),
                removeFavorite: (assetId: string) =>
                  watchListService.deleteWatchListItem(assetId)
              }}
              frameworkComponents={frameworkComponents}
              getRowNodeId={data => data.id}
              onFilterChanged={e => {
                const filters = e.api.getFilterModel();
                send({
                  type: "APPLY_INGRID_FILTERS",
                  inGridFilters: filters
                });
                setDisplayedRowCount(e.api.getDisplayedRowCount());
              }}
              onGridReady={(params: GridReadyEvent) => {
                send({
                  type: "GRID_READY",
                  gridApi: params.api,
                  columnApi: params.columnApi
                });
              }}
              onRowDataChanged={e => {
                setDisplayedRowCount(e.api.getDisplayedRowCount());
              }}
              rowData={rowData}
              rowSelection="multiple"
              sideBar={defaultSideBarDef}
              suppressRowClickSelection
            />
          </div>
          <GridBottomBar className="justify-content-between align-items-center">
            <Col xs>
              <span className="label">Status:</span>
              {!state.matches("searching") && rowData ? (
                <span className="value">
                  {createRowCountText(
                    displayedRowCount,
                    rowData.length,
                    found ?? 0
                  )}
                </span>
              ) : (
                <span className="value"> Loading...</span>
              )}
            </Col>
          </GridBottomBar>
        </Row>
        <Row>
          <AppBottomNav
            hideBack
            blockNext={cart.items.length === 0}
            onNext={() =>
              isEditing
                ? history.push({
                    pathname: "/asset-explorer/portfolio-builder/edit",
                    search
                  })
                : history.push("/asset-explorer/portfolio-builder")
            }
          />
        </Row>
      </SearchPageContainer>

      {assetSelected && (
        <AssetDetails
          asset={assetSelected}
          onHide={() => setAssetSelected(undefined)}
        />
      )}
    </>
  );
}

export function createRowCountText(
  displayed: number,
  inGrid: number,
  total: number
): string {
  if (displayed === inGrid) {
    if (total > inGrid) {
      if (total < 10_000) {
        return `Grid contains first ${inGrid.toLocaleString()} of ${total.toLocaleString()} hits.`;
      }
      return `Grid contains first ${inGrid.toLocaleString()} of at least 10,000 hits.`;
    }
    return `Grid contains ${inGrid.toLocaleString()} hits.`;
  }
  if (total > inGrid) {
    if (total < 10_000) {
      return `Filtered to ${displayed.toLocaleString()} rows. Grid contains first ${inGrid.toLocaleString()} of ${total.toLocaleString()} hits.`;
    }
    return `Filtered to ${displayed.toLocaleString()} rows. Grid contains first ${inGrid.toLocaleString()} of at least 10,000 hits.`;
  }
  return `Filtered to ${displayed.toLocaleString()} rows. Grid contains ${inGrid.toLocaleString()} hits.`;
}
