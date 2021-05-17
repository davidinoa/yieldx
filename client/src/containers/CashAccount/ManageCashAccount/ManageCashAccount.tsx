import React, { useCallback } from "react";
import { useHistory, useLocation, useParams } from "react-router-dom";
import { Row } from "react-bootstrap";
import AppNavbar from "components/AppNavbar/AppNavbar";
import {
  CashManagerContainer,
  CashManagerHeaderContainer,
  CashManagerHeaderCTAs,
  CashManagerHeaderInfo,
  CashManagerHeaderInfoAdditional,
  CashManagerHeaderInfoContainer,
  CashManagerHeaderInfoName,
  CashManagerHeaderInfoStatus,
  CashManagerHeaderValue,
  CashManagerHeaderValueContainer,
  CashManagerHeaderValueTitle,
  CashManagerHeaderValueTotal
} from "./ManageCashAccount.styles";
import { getGeneralInfo } from "containers/Investors/InvestorAccount/AccountSection/AccountSection";
import useManageCashAccountData from "hooks/useManageCashAccountData";
import DepositModal from "containers/Portfolios/PortfolioDisplay/Modals/DepositModal";
import WithdrawModal from "containers/Portfolios/PortfolioDisplay/Modals/WithdrawModal";
import Decimal from "util/Decimal";
import PortfolioItemList from "./PortfolioItemList/PortfolioItemList";
import portfolioCashAvailable from "util/portfolioCashAvailable";
import { TransferDirection } from "providers/graphql/hooks";
import { Spinner } from "elements/Spinner/Spinner";

export default function CashAccount() {
  const { investorId } = useParams<{ investorId: string }>();
  const location = useLocation();
  const history = useHistory();
  const {
    data: { investor, cashPortfolio, livePortfolioIds },
    loading: { investorLoading, cashInvLoading },
    setAmount,
    setTransferPortfolio,
    transferPortfolio,
    onInternalTransfer
  } = useManageCashAccountData(investorId);
  const generalInfo = investor ? getGeneralInfo(investor) : null;
  const { cashAvailable, cashPos } = cashPortfolio;
  if (
    !transferPortfolio &&
    (location.hash === "#internal-deposit" ||
      location.hash === "#internal-withdraw")
  )
    history.push(location.pathname);
  const onTransfer = useCallback(
    async (direction: TransferDirection, amount: number) => {
      if (!transferPortfolio) {
        setAmount(amount);
        const slug =
          direction === "WITHDRAW" ? "withdrawal" : direction.toLowerCase();
        history.push(`${location.pathname}/${slug}`);
      } else {
        await onInternalTransfer(direction, amount);
        setTransferPortfolio(undefined);
        history.push(location.pathname);
      }
    },
    [
      history,
      setTransferPortfolio,
      setAmount,
      transferPortfolio,
      onInternalTransfer,
      location.pathname
    ]
  );
  const onDeposit = useCallback(
    (amount: number) => onTransfer(TransferDirection.Deposit, amount),
    [onTransfer]
  );
  const onWithdraw = useCallback(
    (amount: number) => onTransfer(TransferDirection.Withdraw, amount),
    [onTransfer]
  );
  return (
    <>
      <AppNavbar appName="Manage your cash account" />
      <CashManagerContainer>
        <Row>
          <CashManagerHeaderContainer>
            <Row>
              {(investorLoading || cashInvLoading) && <Spinner />}
              {investor && cashPortfolio && (
                <CashManagerHeaderInfo>
                  <Row>
                    <CashManagerHeaderInfoContainer>
                      <Row className="d-flex flex-row">
                        <CashManagerHeaderInfoStatus>
                          <h5>CASH ACCOUNT</h5>
                          <h5>{generalInfo?.type ?? "INVESTOR"}</h5>
                        </CashManagerHeaderInfoStatus>
                      </Row>
                      <Row>
                        <CashManagerHeaderInfoName>
                          <h1>{generalInfo?.name}</h1>
                        </CashManagerHeaderInfoName>
                      </Row>
                      <Row>
                        <CashManagerHeaderInfoAdditional>
                          {(cashPos?.unsettled ?? 0) !== 0 && (
                            <h4>
                              <b>
                                {(cashPos?.unsettled ?? 0) > 0
                                  ? "Pending Deposit:"
                                  : "Pending Withdrawal"}
                              </b>
                              <span>${Math.abs(cashPos?.unsettled ?? 0)}</span>
                            </h4>
                          )}
                        </CashManagerHeaderInfoAdditional>
                      </Row>
                    </CashManagerHeaderInfoContainer>
                  </Row>
                </CashManagerHeaderInfo>
              )}

              {cashPortfolio && (
                <CashManagerHeaderValue>
                  <CashManagerHeaderValueContainer>
                    <Row>
                      <CashManagerHeaderValueTitle>
                        <h3>CASH AVAILABLE</h3>
                      </CashManagerHeaderValueTitle>
                    </Row>
                    <Row>
                      <CashManagerHeaderValueTotal xs={24} lg={18}>
                        <span>${Decimal.format(cashAvailable)}</span>
                      </CashManagerHeaderValueTotal>
                      <CashManagerHeaderCTAs>
                        <button
                          type="button"
                          onClick={() =>
                            history.push(`${location.pathname}#deposit`)
                          }
                        >
                          Deposit
                        </button>
                        <button
                          type="button"
                          onClick={() =>
                            history.push(`${location.pathname}#withdraw`)
                          }
                        >
                          Withdraw
                        </button>
                      </CashManagerHeaderCTAs>
                    </Row>
                  </CashManagerHeaderValueContainer>
                </CashManagerHeaderValue>
              )}
            </Row>
          </CashManagerHeaderContainer>
        </Row>
        {cashPortfolio && cashPortfolio.cashAvailable !== undefined && (
          <PortfolioItemList
            cashPortfolio={cashPortfolio}
            livePortfolioIds={livePortfolioIds}
            setTransferPortfolio={setTransferPortfolio}
          />
        )}
      </CashManagerContainer>
      {(location.hash === "#internal-deposit" ||
        location.hash === "#deposit") && (
        <DepositModal
          show
          limit={
            transferPortfolio && location.hash === "#internal-deposit"
              ? cashPortfolio.cashAvailable
              : undefined
          }
          onHide={() => {
            setTransferPortfolio(undefined);
            return history.push(location.pathname);
          }}
          onDeposit={onDeposit}
        />
      )}
      {(location.hash === "#withdraw" ||
        location.hash === "#internal-withdraw") && (
        <WithdrawModal
          available={
            !transferPortfolio
              ? cashAvailable || 0
              : portfolioCashAvailable(transferPortfolio)
          }
          show
          onWithdraw={onWithdraw}
          onHide={() => {
            setTransferPortfolio(undefined);
            return history.push(location.pathname);
          }}
        />
      )}
    </>
  );
}
