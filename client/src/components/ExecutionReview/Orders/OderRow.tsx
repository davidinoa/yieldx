import React from "react";
import { Col } from "react-bootstrap";
import { AssetAssetTypeEnum } from "@bondhouse/rover-universe";
import { YieldXAsset } from "models/YieldXPortfolio";
import { ListRow } from "components/ListPages/ListPages.styles";
import { CreateOrderRequestInput } from "providers/graphql/hooks";
import Decimal from "util/Decimal";

interface Props {
  orderReq: CreateOrderRequestInput & {
    metadata: {
      yield: number;
    };
  };
  asset: YieldXAsset;
}

export function OrderRow({ orderReq, asset }: Props) {
  const { quantity } = orderReq;
  const price = orderReq.spotPrice;
  const { priceLimit, metadata } = orderReq;
  if (
    price === undefined ||
    price === null ||
    priceLimit === null ||
    priceLimit === undefined
  )
    throw Error("No price found");
  return (
    <ListRow>
      <Col className="pl-3">
        <span>{asset.name ?? "n/a"}</span>
        <span className="label">ASSET NAME</span>
      </Col>
      <Col xs={3} className="flex-column align-items-center">
        <span>{asset.identifiers?.cusip ?? "n/a"}</span>
        <span className="label">CUSIP</span>
      </Col>
      <Col xs={3} className="flex-column align-items-center">
        <span>{`$${Decimal.format(price)}`}</span>
        <span className="label">REFERENCE PRICE</span>
      </Col>
      <Col xs={3} className="flex-column align-items-center">
        <span>{`$${Decimal.format(priceLimit)}`}</span>
        <span className="label">LIMIT PRICE</span>
      </Col>
      {asset.assetType === AssetAssetTypeEnum.Bond && (
        <Col xs={3} className="flex-column align-items-center">
          <span>{`${Decimal.format(metadata.yield)}%`}</span>
          <span className="label">YIELD</span>
        </Col>
      )}
      <Col xs={3} className="flex-column align-items-center">
        <span>
          {quantity.toLocaleString(undefined, {
            minimumFractionDigits: 0,
            maximumFractionDigits: 0
          })}
        </span>
        <span className="label">QUANTITY</span>
      </Col>
      <Col xs={3} className="flex-column align-items-center">
        <span>{orderReq.direction}</span>
        <span className="label">ACTION</span>
      </Col>
    </ListRow>
  );
}
