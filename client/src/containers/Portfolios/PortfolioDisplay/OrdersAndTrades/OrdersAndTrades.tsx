import React, { useState } from "react";
import { Col, Row } from "react-bootstrap";
import { useRecoilValue } from "recoil";
import { Formik } from "formik";
import dayjs from "dayjs";
import { PortfolioStatus } from "@bondhouse/position-management";
import { Asset, AssetAssetTypeEnum } from "@bondhouse/rover-universe";
import { ListContainer } from "components/ListPages/ListPages.styles";
import Pagination from "elements/Pagination/Pagination";
import usePagination from "hooks/usePagination";
import { Dropdown } from "containers/Investors/InvestorForms/elements/elements";
import YieldXPortfolio from "models/YieldXPortfolio";
import { assetPricesSelector, assetsSelector } from "recoil-state/assetsState";
import { Spinner } from "elements/Spinner/Spinner";
import {
  LedgerEntry,
  Order2,
  usePositionManagementGetTradesQuery
} from "providers/graphql/hooks";
import { Root } from "./OrdersAndTrades.styles";
import OrderAndTradesRow from "./OrderAndTradesRow/OrderAndTradesRow";

const PER_PAGE = 20;
type Props = {
  portfolio: YieldXPortfolio;
  orders: Order2[];
};

function sortOrdersBy(orders: Order2[], value: "status" | "updatedAt") {
  if (value === "status") {
    return [...orders].sort((a, b) => {
      if (a.status && b.status) {
        return a.status.charCodeAt(0) - b.status.charCodeAt(0);
      }
      return 0;
    });
  }
  if (value === "updatedAt") {
    return [...orders].sort((a, b) =>
      dayjs(a.updatedAt ?? Date.now()).diff(
        dayjs(b.updatedAt ?? Date.now()),
        "second"
      )
    );
  }
  return orders;
}

type SortOptions = "status" | "updatedAt";

interface DropdownFormProps {
  onChange: (value: string) => void;
}

// Returns a filter function:
//   matching trades with the target order
//   having the same "assetId" & BUY/SELL quantities
function filterTradesByOrder(order: Order2) {
  return (it: LedgerEntry | null) => {
    if (!it) return false;
    const { assetId, quantity } = order;
    return (
      it.assetId === assetId && Math.sign(it.quantity) === Math.sign(quantity)
    );
  };
}

function DropdownForm({ onChange }: DropdownFormProps) {
  return (
    <Formik<{ sortBy: SortOptions }>
      initialValues={{ sortBy: "status" }}
      onSubmit={_values => undefined}
    >
      <Dropdown
        inline
        style={{ minWidth: "fit-content" }}
        name="sortBy"
        onSelectCallBack={onChange}
        label="sort by"
        items={[
          { label: "Status", value: "status" },
          { label: "Updated At", value: "updatedAt" }
        ]}
      />
    </Formik>
  );
}

export default function OrdersAndTrades({ portfolio, orders }: Props) {
  const portfolioStatus = portfolio.getStatus();
  const [sortBy, setSortedBy] = useState<SortOptions>("status");
  const sortedOrders = sortOrdersBy(orders, sortBy);
  const { data, loading, error } = usePositionManagementGetTradesQuery({
    variables: {
      portfolioId: portfolio.getId()
    }
  });
  const trades = data?.positionManagementGetTrades?.ledgerEntries;
  const [page, totalPages, setPage] = usePagination(sortedOrders, PER_PAGE);
  const assets = useRecoilValue(
    assetsSelector(sortedOrders.map(cv => cv.assetId))
  );
  const assetPrices = useRecoilValue(
    assetPricesSelector(portfolio.getAssetIds())
  );

  return (
    <React.Suspense fallback={<Spinner />}>
      <Root>
        <ListContainer>
          <Row className="order-filters">
            <DropdownForm onChange={setSortedBy as (value: string) => void} />
          </Row>
          {sortedOrders.map(order => {
            const orderAsset = assets.find(
              item => item.id === order.assetId
            ) as Asset;
            if (!orderAsset) return null;
            const assetPrice = assetPrices[orderAsset.id];
            const key = `${order.id}-${orderAsset.id}-${order.quantity}`;
            const filteredTrades = trades?.filter(filterTradesByOrder(order));

            const notTerminated =
              portfolioStatus !== PortfolioStatus.TERMINATED;
            const isOpen = order.status === "OPEN";
            const isExecutingFund =
              orderAsset.assetType === AssetAssetTypeEnum.Fund &&
              orderAsset.assetSubtype !== "Mutual Funds" &&
              order.status === "EXECUTING";
            const canCancel = notTerminated && (isExecutingFund || isOpen);
            return (
              <OrderAndTradesRow
                key={key}
                data-testid={key}
                order={order}
                asset={orderAsset}
                assetPrice={
                  assetPrice ?? orderAsset.price ?? order.spotPrice ?? 0
                }
                trades={{
                  data: filteredTrades as Array<LedgerEntry>,
                  error,
                  loading
                }}
                cancelable={canCancel}
              />
            );
          })}
          <Row>
            <Col>
              <Pagination
                current={page}
                total={totalPages}
                handleChange={setPage}
              />
            </Col>
          </Row>
        </ListContainer>
      </Root>
    </React.Suspense>
  );
}
