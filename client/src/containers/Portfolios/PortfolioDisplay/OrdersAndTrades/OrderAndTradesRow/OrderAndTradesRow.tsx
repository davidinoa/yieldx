/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/no-static-element-interactions */
import React, { useState } from "react";
import { useHistory, useLocation } from "react-router-dom";
import { Asset } from "@bondhouse/rover-universe";
import { displayDate } from "containers/Users/UserList/UserList";
import { ListRow } from "components/ListPages/ListPages.styles";
import { currencyFormatter } from "containers/Investors/InvestorAccount/InvestorPortfolios/InvestorPortfolios";
import AssetDetails from "elements/AssetDetails/AssetDetails";
import { LedgerEntry, Order2, OrderStatus } from "providers/graphql/hooks";
import { ApolloError } from "@apollo/client";
import { List } from "components/ListPages/List";
import { ChevronDown, ChevronUp } from "elements/Icon";
import {
  CancelButton,
  MoreInfoToggle,
  StatusBadge
} from "../OrdersAndTrades.styles";
import CollapsiblePanel from "./CollapsiblePanel/CollapsiblePanel";

type Props = {
  order: Order2;
  cancelable: boolean;
  asset: Asset;
  assetPrice: number;
  trades: {
    data?: Array<LedgerEntry> | null;
    loading: boolean;
    error?: ApolloError;
  };
};

export default function OrderAndTradesRow({
  order,
  cancelable,
  asset,
  assetPrice,
  trades
}: Props) {
  const history = useHistory();
  const { pathname } = useLocation();
  const [showAsset, setShowAsset] = useState(false);
  const [showMore, setShowMore] = useState(false);

  return (
    <>
      <ListRow
        data-testid="OrderAndTradesRow-OrderAndTradesRow"
        key={order.id}
        status={order.status}
        background={showMore ? "var(--medium)" : "var(--dark)"}
      >
        <List.Col className="col-3 no-borders">
          <StatusBadge status={order.status?.toString()}>
            {order.status === OrderStatus.Closed ? "complete" : order.status}
          </StatusBadge>
        </List.Col>
        <List.Col className="col-sm-5 col-6 no-borders">
          <span
            style={{ cursor: "pointer", textDecoration: "underline" }}
            onClick={() => setShowAsset(true)}
          >
            {asset?.name ?? "N/A"}
          </span>
          <span className="label">name</span>
        </List.Col>
        <List.Col
          className="col-2 centered no-borders"
          value={asset?.identifiers?.cusip ?? asset?.identifiers?.isin}
          label="cusip/isin"
        />
        <List.Col
          className="col-2 centered no-borders"
          label="last (usd)"
          value={assetPrice > 0 ? currencyFormatter.format(assetPrice) : "N/A"}
        />
        <List.Col
          className="col-3 centered no-borders"
          label="qty"
          value={`${Math.abs(order.quantity)}`}
        />
        <List.Col
          className="col-2 centered no-borders"
          label="buy/sell"
          value={order.quantity > 0 ? "BUY" : "SELL"}
        />
        <List.Col
          label="updated at"
          value={order.updatedAt ? displayDate(order.updatedAt) : "N/A"}
          className="col-3 centered no-borders"
        />
        <List.Col className="col-3 centered no-borders">
          {cancelable ? (
            <CancelButton
              onClick={() =>
                history.push(`${pathname}#orders-cancel`, {
                  orderId: order.id
                })
              }
            >
              Cancel
            </CancelButton>
          ) : null}
        </List.Col>
        <List.Col className="centered">
          <MoreInfoToggle
            data-testid={`OrderAndTradesRow-MoreInfoToggle-${order.id}`}
            onClick={() => setShowMore(!showMore)}
          >
            {showMore ? <ChevronDown /> : <ChevronUp />}
          </MoreInfoToggle>
        </List.Col>
      </ListRow>
      {showMore && (
        <CollapsiblePanel
          order={order}
          trades={trades}
          assetType={asset.assetType}
        />
      )}
      {showAsset && (
        <AssetDetails asset={asset} onHide={() => setShowAsset(false)} />
      )}
    </>
  );
}
