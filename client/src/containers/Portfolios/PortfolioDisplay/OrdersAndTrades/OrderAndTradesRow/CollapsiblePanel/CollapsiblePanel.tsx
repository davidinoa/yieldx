import React from "react";
import dayjs from "dayjs";
import { Col, Row } from "react-bootstrap";
import { AssetAssetTypeEnum } from "@bondhouse/rover-universe";
import { displayDate } from "containers/Users/UserList/UserList";
import { currencyFormatter } from "containers/Investors/InvestorAccount/InvestorPortfolios/InvestorPortfolios";
import { LedgerEntry, Order2, OrderStatus } from "providers/graphql/hooks";
import { ApolloError } from "@apollo/client";
import { Spinner } from "elements/Spinner/Spinner";
import {
  CollapsibleRow,
  Heading,
  HeadingColumn,
  HeadRow,
  MoreInfoValue as Value,
  MoreInfoWrapper as Wrapper,
  StatusBadge,
  TradesHeader,
  TradesList,
  TradesWrapper
} from "containers/Portfolios/PortfolioDisplay/OrdersAndTrades/OrdersAndTrades.styles";

type Props = {
  order: Order2;
  trades: {
    data?: Array<LedgerEntry> | null;
    loading: boolean;
    error?: ApolloError;
  };
  assetType?: AssetAssetTypeEnum;
};

export default function CollapsiblePanel({ order, trades, assetType }: Props) {
  const isClosedSell =
    order.status === OrderStatus.Closed && order.quantity !== 0;
  const isCanceledBuy =
    order.status !== OrderStatus.Canceled && order.quantity !== 0;

  const hasTrades = !trades.loading && trades.data && trades.data.length !== 0;

  const hasNoTrades =
    !trades.loading && trades.data && trades.data.length === 0;
  return (
    <span data-testid={`OrderAndTradesRow-CollapsiblePanel-${order.id}`}>
      <CollapsibleRow>
        <Col className="order-info">
          <ul>
            <Heading>Order info:</Heading>
            <Wrapper>
              <div className="label">order type:</div>
              {order.fullFillRequired ? "All or none" : "Partial fill"}
            </Wrapper>
            <Wrapper>
              <div className="label">good until cancel:</div>
              {order.goodTillCancel ? "Yes" : "No"}
            </Wrapper>
            <Wrapper>
              <div className="label">created at:</div>
              <Value>{order.createdAt && displayDate(order.createdAt)}</Value>
            </Wrapper>
            <Wrapper>
              <div className="label">updated at:</div>
              <Value>{order.updatedAt && displayDate(order.updatedAt)}</Value>
            </Wrapper>
          </ul>
        </Col>
        <Col className="trades" xs={{ span: 16 }}>
          <TradesWrapper>
            <TradesHeader>
              <Heading>Trades:</Heading>
              <HeadRow>
                <HeadingColumn>status</HeadingColumn>
                <HeadingColumn>quantity</HeadingColumn>
                <HeadingColumn>buy/sell</HeadingColumn>
                <HeadingColumn>fill price</HeadingColumn>
                <HeadingColumn>total amount</HeadingColumn>
                <HeadingColumn>updated</HeadingColumn>
              </HeadRow>
            </TradesHeader>
            <TradesList>
              {trades.loading && <Spinner />}
              {(isClosedSell || isCanceledBuy) &&
                hasTrades &&
                trades.data?.map(trade => (
                  <Row key={trade.id}>
                    <Col data-testid="CollapsiblePanel-TradesList-Status">
                      <StatusBadge status={trade.status}>
                        {trade.status}
                      </StatusBadge>
                    </Col>
                    <Col>{Math.abs(trade.quantity)}</Col>
                    <Col data-testid="CollapsiblePanel-TradesList-Type">
                      {trade.quantity > 0 ? "BUY" : "SELL"}
                    </Col>
                    <Col>{currencyFormatter.format(trade.tradePrice)}</Col>
                    <Col>
                      {currencyFormatter.format(
                        Math.abs(
                          (assetType === AssetAssetTypeEnum.Bond ||
                          assetType?.toString() === "BOND"
                            ? trade.tradePrice / 100
                            : trade.tradePrice) * trade.quantity
                        )
                      )}
                    </Col>
                    <Col>
                      {dayjs(
                        trade.updatedAt ?? new Date().toISOString()
                      ).format("MMM D, YYYY")}
                    </Col>
                  </Row>
                ))}
              {(isClosedSell || isCanceledBuy) && hasNoTrades && (
                <p
                  style={{ fontSize: 13, height: "100%" }}
                  className="d-flex align-items-center justify-content-center"
                >
                  <span>No trades available</span>
                </p>
              )}
            </TradesList>
          </TradesWrapper>
        </Col>
      </CollapsibleRow>
    </span>
  );
}
