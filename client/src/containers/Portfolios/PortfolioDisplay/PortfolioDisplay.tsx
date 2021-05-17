import React, { useState } from "react";
import { Col, Container, Row } from "react-bootstrap";
import portfolioCashAvailable from "util/portfolioCashAvailable";
import { Order2, OrderStatus, PortfolioStatus } from "providers/graphql/hooks";
import YieldXLoader from "elements/YieldXLoader/YieldXLoader";
import usePortfolioDisplayData from "containers/Portfolios/PortfolioDisplay/hooks/usePortfolioDisplayData";
import NotFound404 from "elements/ErrorPages/NotFound404";
import { Spinner } from "elements/Spinner/Spinner";
import InpaasPortfolio from "./InpaasPortfolio/InpaasPortfolio";
import CustomPortfolio from "./CustomPortfolio/CustomPortfolio";
import PortfolioHeader from "./PortfolioHeader/PortfolioHeader";
import EditNameModal from "./Modals/EditNameModal";
import DeleteModal from "./Modals/DeleteModal";
import LiquidateModal from "./Modals/LiquidateModal";
import CancelOrderModal from "./Modals/CancelOrderModal/CancelOrderModal";
import PendingPortfolio from "./ExecutingPortfolio/ExecutingPortfolio";
import PortfolioTabs from "./PortfolioTabs/PortfolioTabs";
import ExecutionHoursModal from "./Modals/ExecutionHoursModal/ExecutionHoursModal";
import OrdersAndTrades from "./OrdersAndTrades/OrdersAndTrades";
import DepositModal from "./Modals/DepositModal";
import WithdrawModal from "./Modals/WithdrawModal";

export default function PortfolioDisplay() {
  const {
    portfolio,
    history,
    pathname,
    hash,
    orders,
    investorCashAvailable,
    onCancelOrder,
    onDelete,
    onLiquidate,
    onDeposit,
    onWithdraw,
    portfolioError,
    ordersLoading
  } = usePortfolioDisplayData();

  const hasOpenOrders = !!orders?.filter(
    it => it?.status === OrderStatus.Open && it.quantity
  )?.length;
  const hasExecutingOrders = !!orders?.filter(
    it => it?.status === OrderStatus.Executing && it.quantity
  )?.length;
  const hasStagedOrders = !!orders?.filter(
    it => it?.status?.toString() === "STAGED"
  ).length;
  const hasPendingOrders = hasOpenOrders || hasExecutingOrders;
  const onHide = (targetHash = "") => history.push(pathname + targetHash);
  const appType = portfolio?.getAppType();
  const isOrdersTabSelected = hash.includes("#orders");
  const hasBeenClosed =
    portfolio &&
    ((portfolio.getStatus() as unknown) as PortfolioStatus) ===
      PortfolioStatus.Terminated;
  const hasOrders = orders?.length
    ? orders.length > 0
    : portfolio?.orders && portfolio.orders.length > 0;

  const [confirmingHours, setConfirmingHours] = useState(false);

  if (portfolioError)
    return (
      <NotFound404
        topText="sorry, this portfolio"
        bottomText="was not found"
        buttonText="Go to portfolio list"
        onClick={() => history.push("/portfolios")}
      />
    );
  if (portfolio) {
    const views = {
      INPAAS: <InpaasPortfolio portfolio={portfolio} />,
      CUSTOM: <CustomPortfolio portfolio={portfolio} />,
      PENDING: (
        <PendingPortfolio portfolio={portfolio} updating={hasStagedOrders} />
      ),
      orders: orders ? (
        <OrdersAndTrades
          portfolio={portfolio}
          orders={orders as Array<Order2>}
        />
      ) : (
        <YieldXLoader />
      )
    };
    const isPendingPortfolio =
      (hasPendingOrders || hasBeenClosed || hasStagedOrders) &&
      !isOrdersTabSelected;
    const isValidPortfolio =
      !hasPendingOrders &&
      !isOrdersTabSelected &&
      !hasBeenClosed &&
      !hasStagedOrders &&
      appType;
    let currentView;
    if (isPendingPortfolio) currentView = views.PENDING;
    else if (isValidPortfolio && appType) currentView = views[appType];
    else if (hasOrders && isOrdersTabSelected) currentView = views.orders;
    return (
      <Container>
        <Row>
          <Col>
            <PortfolioHeader portfolio={portfolio} />
            <PortfolioTabs
              portfolio={portfolio}
              orders={orders as Array<Order2>}
            />
            {ordersLoading ? <Spinner /> : currentView}
          </Col>
        </Row>
        <EditNameModal
          onHide={onHide}
          portfolio={portfolio}
          show={hash === "#edit-name"}
        />
        <DeleteModal onHide={onHide} onDelete={onDelete} />
        <CancelOrderModal
          onCancel={onCancelOrder}
          onHide={() => history.push(`${pathname}#orders`)}
        />
        <LiquidateModal
          show={hash === "#liquidate"}
          onHide={onHide}
          onLiquidate={onLiquidate}
        />
        <DepositModal
          show={hash === "#deposit"}
          limit={investorCashAvailable ?? 0}
          onHide={onHide}
          onDeposit={onDeposit}
        />
        <WithdrawModal
          available={portfolioCashAvailable(portfolio.asPmsPortfolio())}
          show={hash === "#withdraw"}
          onWithdraw={onWithdraw}
          onHide={onHide}
        />
        <ExecutionHoursModal
          isOpen={confirmingHours}
          onHide={() => setConfirmingHours(false)}
        />
      </Container>
    );
  }
  return <YieldXLoader />;
}
