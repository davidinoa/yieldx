import React, { useEffect, useState } from "react";
import { GridApi, GridReadyEvent, ColDef } from "@ag-grid-community/core";
import { AgGridReact } from "@ag-grid-community/react";
import { Cart, WatchList } from "@bondhouse/rover-preferences";
import { Asset } from "@bondhouse/rover-universe";
import styled from "styled-components";
import { assetsService, cartService, watchListService } from "services";
import { defaultSideBarDef } from "../../../../grid/sideBarDefs";
import { defaultGridOptions } from "../../../../grid/gridOptions";
import { GridBottomBar } from "../../../AssetExplorer/Search/Search.styles";
import { createFrameworkComponents } from "../../../AssetExplorer/Search/Search.state";
import "../../../../index.scss";

import {
  accruedInterestColDef,
  addToCartColDef,
  productTypeColDef,
  cusipColDef,
  durationColDef,
  expenseRatioColDef,
  favoriteColDef,
  isinColDef,
  issuerColDef,
  managementCompanyColDef,
  liquidityColDef,
  managementFeeColDef,
  maturityColDef,
  nameColDef,
  netAssetValuePerShareColDef,
  priceColDef,
  ratingColDef,
  riskColDef,
  sectorColDef,
  subsectorColDef,
  tickerColDef,
  yieldColDef,
  YieldXColDef,
  minimumQuantityColDef,
  minimumUnitsColDef,
  convertYieldXColDefsToColDefs,
  latestOfferColDef,
  nonTradableColDef
} from "../../../../grid/colDefs";
import AssetDetails from "../../../../elements/AssetDetails/AssetDetails";

const yieldXColDefs: YieldXColDef[] = [
  nonTradableColDef,
  addToCartColDef,
  favoriteColDef,
  issuerColDef,
  nameColDef,
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
];

export const colDefs: ColDef[] = convertYieldXColDefsToColDefs(yieldXColDefs);

const Root = styled.div`
  [col-id="name"] {
    text-decoration: underline;
  }
`;

export default function InventoryGrid({ assetIds }: { assetIds: string[] }) {
  const [rowData, setRowData] = useState<Array<Asset>>();
  const frameworkComponents = createFrameworkComponents();
  const [cart, setCart] = useState<Cart>();

  const [watchList, setWatchList] = useState<WatchList>({
    id: "",
    items: []
  });

  const [gridApi, setGridApis] = useState<GridApi>();
  const [cartDiff, setCartDiff] = useState<{
    added: string[];
    removed: string[];
  }>({
    added: [],
    removed: []
  });
  const [rowCount, setRowCount] = useState(watchList.items.length);

  useEffect(() => {
    const watchListId = watchListService.subscribe(nextList =>
      setWatchList(nextList)
    );
    const cartId = cartService.subscribe((nextCart, added, removed) => {
      setCart(nextCart);
      setCartDiff({ added, removed });
    });
    return () => {
      watchListService.unsubscribe(watchListId);
      cartService.unsubscribe(cartId);
    };
  }, []);

  useEffect(() => {
    assetsService.getAssetsAsArray(assetIds).then(assets => setRowData(assets));
  }, [assetIds]);

  useEffect(() => {
    if (gridApi) {
      const { added, removed } = cartDiff;
      gridApi.refreshCells({
        rowNodes: [...added, ...removed]
          .map((assetId: string) => gridApi.getRowNode(assetId))
          .filter(node => node != null),
        columns: ["addToCart"],
        force: true
      });
    }
  }, [cartDiff, gridApi]);

  const [asset, setAssetSelected] = useState<Asset>();

  return (
    <Root>
      <div className="ag-theme-alpine-dark grid-container">
        {asset && (
          <AssetDetails
            asset={asset}
            onHide={() => setAssetSelected(undefined)}
          />
        )}
        <AgGridReact
          {...defaultGridOptions}
          rowData={rowData}
          rowMultiSelectWithClick
          rowSelection="multiple"
          columnDefs={colDefs}
          sideBar={defaultSideBarDef}
          frameworkComponents={frameworkComponents}
          onGridReady={({ api }: GridReadyEvent) => {
            setGridApis(api);
          }}
          getRowNodeId={data => data.id}
          context={{
            cart,
            setAssetSelected,
            watchlist: watchList,
            addFavorite: (assetId: string) =>
              watchListService.createOrReplaceWatchListItem(assetId),
            addToCart: (assetId: string) =>
              cartService.createOrReplaceCartItem(assetId),
            removeFromCart: (assetId: string) =>
              cartService.deleteCartItem(assetId),
            removeFavorite: (assetId: string) =>
              watchListService.deleteWatchListItem(assetId)
          }}
          onFilterChanged={e => setRowCount(e.api.getDisplayedRowCount())}
          onRowDataChanged={e => setRowCount(e.api.getDisplayedRowCount())}
        />
      </div>
      <GridBottomBar style={{ background: "var(--dark)" }}>
        <span className="label">rows:</span>
        <span className="value">{rowCount.toLocaleString()}</span>
      </GridBottomBar>
    </Root>
  );
}
