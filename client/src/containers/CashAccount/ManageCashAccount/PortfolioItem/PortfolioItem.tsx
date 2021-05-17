import React, { Dispatch, SetStateAction } from "react";
import { Col, Row } from "react-bootstrap";
import { Link, useHistory } from "react-router-dom";
import { Portfolio } from "@bondhouse/position-management";
import { ReactComponent as Remove } from "assets/svg/remove.svg";
import { ReactComponent as Add } from "assets/svg/add.svg";
import { CashManageInvestor } from "services/InvestorService";
import Decimal from "util/Decimal";
import { ReactComponent as PortfolioIcon } from "assets/svg/portfolio.svg";
import portfolioCashAvailable from "util/portfolioCashAvailable";
import {
  AppType2,
  Order2,
  PortfolioStatus,
  useOrderManagementGetOrdersQuery,
  usePositionManagementGetPortfolioQuery
} from "providers/graphql/hooks";
import {
  CashManagerPortfolioItem,
  PortfolioItemCash,
  PortfolioItemCTAs,
  PortfolioItemTitle
} from "./PortfolioItem.styles";
import { Spinner } from "elements/Spinner/Spinner";
import { getHasPendingBuyOrders } from "util/getHasPendingBuyOrders";

interface Props {
  portfolioId: string;
  cashOnlyPortfolio: CashManageInvestor["cashPortfolio"];
  setTransferPortfolio: Dispatch<SetStateAction<Portfolio | undefined>>;
}

export default function PortfolioItem({
  portfolioId,
  cashOnlyPortfolio,
  setTransferPortfolio
}: Props) {
  const {
    data: portfolioData,
    loading: portfolioLoading,
    error: portfolioError
  } = usePositionManagementGetPortfolioQuery({
    variables: {
      id: portfolioId
    }
  });

  const portfolio = portfolioData?.positionManagementGetPortfolio?.portfolio;

  const {
    data: ordersData,
    loading: ordersLoading,
    error: ordersError
  } = useOrderManagementGetOrdersQuery({
    variables: {
      portfolioId
    }
  });

  const orders = ordersData?.orderManagementGetOrders?.orders;
  const hasPendingBuyOrders = orders
    ? getHasPendingBuyOrders(orders as Array<Order2>)
    : null;
  const cashAvailableInPortfolio = portfolio
    ? portfolioCashAvailable((portfolio as unknown) as Portfolio)
    : null;
  const history = useHistory();

  const disableTransfer = Boolean(
    !(cashOnlyPortfolio.cashAvailable > 0) ||
      hasPendingBuyOrders ||
      portfolio?.status === PortfolioStatus.Terminated ||
      ordersLoading ||
      ordersError
  );
  return (
    <CashManagerPortfolioItem>
      <Row>
        <PortfolioItemTitle>
          <h5>
            <PortfolioIcon width="15" height="13" />
            {portfolio?.app === AppType2.Inpaas
              ? "InPaaS Portfolio"
              : "Custom Portfolio"}
          </h5>
          <h3>
            {portfolio?.name}
            <Link
              className={!portfolio ? "disabled" : undefined}
              data-testid="CashAccount-ShowPortfolioItem"
              to={`/portfolios/live/${portfolio?.id}`}
            >
              Details
            </Link>
          </h3>
        </PortfolioItemTitle>
      </Row>
      <Row>
        <PortfolioItemCash>
          <h5>CASH AVAILABLE</h5>
          {(portfolioLoading || cashAvailableInPortfolio === null) &&
            !portfolioError && <Spinner />}
          {cashAvailableInPortfolio !== null && (
            <span>${Decimal.format(cashAvailableInPortfolio)}</span>
          )}
        </PortfolioItemCash>
      </Row>
      <Row>
        <PortfolioItemCTAs>
          <Row>
            {portfolio?.app !== AppType2.Inpaas && (
              <Col>
                <button
                  data-testid="CashAccount-InternalDeposit"
                  disabled={disableTransfer}
                  type="button"
                  onClick={() => {
                    setTransferPortfolio((portfolio as unknown) as Portfolio);
                    history.push(
                      `${history.location.pathname}#internal-deposit`
                    );
                  }}
                >
                  <i>
                    <Add />
                  </i>
                  cash
                </button>
              </Col>
            )}
            <Col>
              <button
                disabled={
                  cashAvailableInPortfolio === null ||
                  !(cashAvailableInPortfolio > 0) ||
                  hasPendingBuyOrders ||
                  ordersLoading
                }
                data-testid="CashAccount-InternalWithdraw"
                type="button"
                onClick={() => {
                  setTransferPortfolio((portfolio as unknown) as Portfolio);
                  history.push(
                    `${history.location.pathname}#internal-withdraw`
                  );
                }}
              >
                <i>
                  <Remove />
                </i>
                cash
              </button>
            </Col>
          </Row>
        </PortfolioItemCTAs>
      </Row>
    </CashManagerPortfolioItem>
  );
}
