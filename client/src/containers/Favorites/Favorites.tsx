import React, { useState } from "react";
import { Col, Container, Row } from "react-bootstrap";
import { AgGridReact } from "@ag-grid-community/react";
import { Cart, WatchList } from "@bondhouse/rover-preferences";
import { Asset } from "@bondhouse/rover-universe";
import { GridApi, GridReadyEvent } from "@ag-grid-community/core";
import { assetsService, cartService, watchListService } from "services";
import PageTitle from "elements/PageTitle/PageTitle";
import { defaultSideBarDef } from "grid/sideBarDefs";
import { defaultGridOptions } from "grid/gridOptions";
import { Spinner } from "elements/Spinner/Spinner";
import AssetDetails from "elements/AssetDetails/AssetDetails";
import { createFrameworkComponents } from "../AssetExplorer/Search/Search.state";
import { colDefs } from "../AssetExplorer/Search/Search.constants";
import { GridBottomBar } from "../AssetExplorer/Search/Search.styles";
import { WatchListWrapper } from "./Favorites.style";

export default function Favorites() {
  const frameworkComponents = createFrameworkComponents();
  const [cart, setCart] = useState<Cart>();
  const [watchList, setWatchList] = useState<WatchList>();
  const [displayedRowCount, setDisplayedRowCount] = useState(
    watchList?.items?.length ?? 0
  );
  const [rowData, setRowData] = useState<Array<Asset>>();
  const [assetSelected, setAssetSelected] = useState<Asset>();
  const [gridApi, setGridApis] = useState<GridApi>();
  const [cartDiff, setCartDiff] = useState<{
    added: string[];
    removed: string[];
  }>({
    added: [],
    removed: []
  });

  React.useEffect(() => {
    const watchListId = watchListService.subscribe(nextList => {
      setWatchList(nextList);
      const assetIds = nextList.items.map(cv => cv.assetId);
      assetsService
        .getAssetsAsArray(assetIds)
        .then(assets => setRowData(assets));
    });
    const cartId = cartService.subscribe((nextCart, added, removed) => {
      setCart(nextCart);
      setCartDiff({ added, removed });
    });
    return () => {
      watchListService.unsubscribe(watchListId);
      cartService.unsubscribe(cartId);
    };
  }, []);

  React.useEffect(() => {
    if (gridApi !== undefined) {
      const { added, removed } = cartDiff;
      gridApi.refreshCells({
        rowNodes: [...added, ...removed]
          .map((assetId: string) => {
            return gridApi.getRowNode(assetId);
          })
          .filter(node => node != null),
        columns: ["addToCart"],
        force: true
      });
    }
  }, [cartDiff, gridApi]);

  return (
    <Container>
      <Row>
        <PageTitle
          subtitle="FAVORITE ASSETS"
          title="Manage your favorites"
          alignment="left"
          page
        />
      </Row>
      <Row>
        {rowData ? (
          <WatchListWrapper fluid>
            <Row>
              <Col>
                <div className="ag-theme-alpine-dark">
                  <AgGridReact
                    {...defaultGridOptions}
                    columnDefs={colDefs}
                    onGridReady={({ api }: GridReadyEvent) => {
                      setGridApis(api);
                    }}
                    data-testid="Favorites-AgGridReact"
                    getRowNodeId={data => data.id}
                    context={{
                      cart,
                      setAssetSelected,
                      watchlist: watchList ?? { items: [] },
                      addFavorite: (assetId: string) =>
                        watchListService.createOrReplaceWatchListItem(assetId),
                      addToCart: (assetId: string) =>
                        cartService.createOrReplaceCartItem(assetId),
                      removeFromCart: (assetId: string) =>
                        cartService.deleteCartItem(assetId),
                      removeFavorite: (assetId: string) =>
                        watchListService.deleteWatchListItem(assetId)
                    }}
                    frameworkComponents={frameworkComponents}
                    rowData={rowData}
                    rowMultiSelectWithClick
                    rowSelection="multiple"
                    sideBar={defaultSideBarDef}
                    onFilterChanged={e =>
                      setDisplayedRowCount(e.api.getDisplayedRowCount())
                    }
                    onRowDataChanged={e =>
                      setDisplayedRowCount(e.api.getDisplayedRowCount())
                    }
                  />
                </div>
              </Col>
            </Row>
            <Row>
              <Col>
                <GridBottomBar>
                  <span className="label">rows:</span>
                  <span className="value">
                    {displayedRowCount.toLocaleString()}
                  </span>
                </GridBottomBar>
              </Col>
            </Row>
          </WatchListWrapper>
        ) : (
          <Spinner />
        )}
      </Row>

      {assetSelected && (
        <AssetDetails
          asset={assetSelected}
          onHide={() => setAssetSelected(undefined)}
        />
      )}
    </Container>
  );
}
