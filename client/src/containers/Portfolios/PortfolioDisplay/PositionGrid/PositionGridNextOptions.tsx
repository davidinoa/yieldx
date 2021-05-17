import React, { useState } from "react";
import { AgGridReact } from "@ag-grid-community/react";
import { Asset } from "@bondhouse/rover-universe";
import { Root, AdditionalRow } from "./PositionGrid.styles";
import { defaultGridOptions } from "../../../../grid/gridOptions";
import {
  cusipColDef,
  nameColDef,
  priceColDef,
  ratingColDef,
  sectorColDef,
  tickerColDef,
  yieldColDef,
  convertYieldXColDefsToColDefs,
  lastPriceColDef
} from "../../../../grid/colDefs";
import AssetDetails from "../../../../elements/AssetDetails/AssetDetails";
import { GridContainer } from "./PositionGridAll";

const colDefs = convertYieldXColDefsToColDefs([
  cusipColDef,
  tickerColDef,
  nameColDef,
  ratingColDef,
  lastPriceColDef,
  priceColDef,
  yieldColDef,
  sectorColDef
]);

export default function PositionGridNextOptions({ assets }: Props) {
  const [assetSelected, setAssetSelected] = useState<Asset>();

  return (
    <Root>
      <GridContainer className="ag-theme-alpine-dark">
        <AgGridReact
          {...defaultGridOptions}
          columnDefs={colDefs}
          rowData={assets}
          context={{ setAssetSelected }}
        />
      </GridContainer>
      <AdditionalRow>
        <span className="row-label">rows: </span>
        <span className="row-value">
          {assets.length.toLocaleString("en-US")}
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

type Props = {
  assets: Asset[];
};
