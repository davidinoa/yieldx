import React, { useRef, useState } from "react";
import { useLocation } from "react-router-dom";
import { AppType } from "@bondhouse/position-management";
import { MoreButton } from "containers/Portfolios/PortfolioDisplay/PortfolioHeader/PortfolioHeader.styles";
import {
  DropDownBody,
  NavItem,
  Root
} from "components/Navbar/UserNav/UserMenuDropDown/UserMenuDropDown.styles";
import useOutsideClick from "hooks/useOutsideClick";
import YieldXPortfolio from "models/YieldXPortfolio";
import {
  Order2,
  Status3,
  useOrderManagementGetOrdersQuery,
  usePositionManagementGetTradesQuery
} from "providers/graphql/hooks";
import { getHasPendingBuyOrders } from "util/getHasPendingBuyOrders";
import portfolioCashAvailable from "util/portfolioCashAvailable";

interface Props {
  portfolio: YieldXPortfolio;
  investorId?: string;
}

export default function LiveHeaderOptions({ portfolio, investorId }: Props) {
  const { pathname } = useLocation();
  const [isOpen, setOpen] = useState(false);
  const dropDownRef = useRef<HTMLDivElement>(null);
  const buttonRef = useRef<HTMLButtonElement>(null);
  const portfolioApp = portfolio.getAppType();
  const portfolioStatus = portfolio.getStatus();
  const isTerminated = portfolioStatus === "TERMINATED";
  const {
    data: tradesData,
    loading: tradesLoading
  } = usePositionManagementGetTradesQuery({
    variables: {
      portfolioId: portfolio.getId()
    }
  });
  const trades = tradesData?.positionManagementGetTrades?.ledgerEntries;

  const {
    data: ordersData,
    loading: ordersLoading
  } = useOrderManagementGetOrdersQuery({
    variables: {
      portfolioId: portfolio.getId()
    },
    skip: portfolio.getType() === "EXTERNAL" || !portfolio
  });

  const orders = ordersData?.orderManagementGetOrders?.orders;
  const allTradesSettled = trades?.every(
    it => it?.status === Status3.Settled || it?.status === Status3.Canceled
  );
  useOutsideClick(dropDownRef, () => setOpen(false), buttonRef);
  const isInpaas = portfolioApp === AppType.INPAAS;
  const loading = ordersLoading || tradesLoading;
  const hasPendingBuyOrders = orders
    ? getHasPendingBuyOrders(orders as Array<Order2>)
    : null;
  const cashAvailableInPortfolio = portfolioCashAvailable(
    portfolio.asPmsPortfolio()
  );
  return (
    <>
      {isOpen ? (
        <Root ref={dropDownRef} className="live-header-options">
          <div className="arrow" />
          <DropDownBody>
            <NavItem
              disabled={
                !investorId ||
                hasPendingBuyOrders ||
                loading ||
                !(cashAvailableInPortfolio > 0)
              }
              className="nav-item"
              to={`${pathname}#withdraw`}
            >
              Withdraw cash
            </NavItem>

            {!isTerminated && (
              <>
                {!isInpaas && (
                  <NavItem
                    disabled={!investorId || hasPendingBuyOrders || loading}
                    to={`${pathname}#deposit`}
                  >
                    Deposit cash
                  </NavItem>
                )}

                {isInpaas ? (
                  <NavItem
                    data-testid="rebalance-option"
                    disabled={
                      !allTradesSettled || hasPendingBuyOrders || loading
                    }
                    to={`${pathname}/rebalance`}
                  >
                    Rebalance
                  </NavItem>
                ) : (
                  <NavItem
                    disabled={
                      !allTradesSettled || hasPendingBuyOrders || loading
                    }
                    data-testid="edit-positions-header"
                    to={`${pathname}/edit`}
                  >
                    Edit positions
                  </NavItem>
                )}

                <NavItem
                  disabled={hasPendingBuyOrders || !allTradesSettled || loading}
                  to={`${pathname}#liquidate`}
                >
                  Liquidate portfolio
                </NavItem>
              </>
            )}
          </DropDownBody>
        </Root>
      ) : null}
      <MoreButton
        ref={buttonRef}
        data-testid="more-button"
        onClick={() => setOpen(prev => !prev)}
      />
    </>
  );
}
