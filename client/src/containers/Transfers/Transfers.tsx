import React from "react";
import {
  Redirect,
  Route,
  Switch,
  useHistory,
  useLocation,
  useParams,
  useRouteMatch
} from "react-router-dom";
import SelectFunding from "../PortfolioExecution/SelectFunding/SelectFunding";
import SelectBankAccount from "../PortfolioExecution/SelectFunding/SelectBankAccount/SelectBankAccount";
import AppNavbar from "components/AppNavbar/AppNavbar";
import useTransfersData from "hooks/useTransfersData";
import ConfirmAccounts from "./ConfirmAccounts/ConfirmAccounts";
import DepositModal from "../Portfolios/PortfolioDisplay/Modals/DepositModal";
import { Spinner } from "../../elements/Spinner/Spinner";
import { Investor, TransferDirection } from "providers/graphql/hooks";

function Transfers() {
  const { path } = useRouteMatch();
  const { investorId } = useParams<{ investorId: string }>();
  const history = useHistory();
  const location = useLocation();
  const {
    amount,
    data: { cashOnlyPortfolio, selectedInvestor, apexAccount },
    loading: { cashInvestorLoading, investorLoading, apexLoading },
    selectedBank,
    fundingSource,
    setAmount
  } = useTransfersData(investorId);
  const direction = path.includes("/withdrawal")
    ? TransferDirection.Withdraw
    : TransferDirection.Deposit;
  if (cashInvestorLoading || investorLoading || apexLoading) return <Spinner />;
  return (
    <>
      {!amount && direction === TransferDirection.Deposit && (
        <DepositModal
          show
          onHide={() => history.push(`/cash-account/investors/${investorId}`)}
          onDeposit={num => {
            setAmount(num);
            history.push(`${location.pathname}`);
          }}
        />
      )}
      <Switch>
        <Route
          exact
          path={`/cash-account/investors/${investorId}/(deposit|withdrawal)/funding-source`}
          render={() => {
            return (
              <>
                <AppNavbar appName="Select Funding" />
                <SelectFunding
                  transferDirection={direction}
                  warn={amount >= 100_000}
                />
              </>
            );
          }}
        />

        <Route
          exact
          path={`/cash-account/investors/${investorId}/(deposit|withdrawal)/funding-source/linked-bank`}
          render={() => {
            if (fundingSource === "plaid" && selectedInvestor)
              return (
                <>
                  <AppNavbar appName="Select Bank Account" />
                  <SelectBankAccount
                    investorId={selectedInvestor.id}
                    onNext={() => {
                      history.push(
                        `/cash-account/investors/${investorId}/${
                          direction === TransferDirection.Deposit
                            ? "deposit"
                            : "withdrawal"
                        }/review-options`
                      );
                    }}
                  />
                </>
              );
            return (
              <Redirect
                to={`/cash-account/investors/${investorId}/${
                  direction === TransferDirection.Deposit
                    ? "deposit"
                    : "withdrawal"
                }/funding-source`}
              />
            );
          }}
        />
        <Route
          path={`/cash-account/investors/${investorId}/(deposit|withdrawal)/review-options`}
          render={() => {
            if (
              cashOnlyPortfolio &&
              selectedInvestor &&
              apexAccount &&
              ((selectedBank && fundingSource === "plaid") ||
                fundingSource === "wire")
            )
              return (
                <>
                  <AppNavbar
                    appName={
                      direction === TransferDirection.Deposit
                        ? "Confirm Deposit"
                        : "Confirm Withdrawal"
                    }
                  />
                  <ConfirmAccounts
                    bankAccount={selectedBank}
                    cashOnlyPortfolio={cashOnlyPortfolio}
                    transferDirection={direction}
                    apexAccount={apexAccount}
                    amount={amount}
                    fundingSource={fundingSource}
                    investor={selectedInvestor as Investor}
                  />
                </>
              );
            if (
              (fundingSource === "plaid" && !selectedBank) ||
              (fundingSource === "wire" &&
                direction === TransferDirection.Withdraw)
            )
              return (
                <Redirect
                  to={`/cash-account/investors/${investorId}/${
                    direction === TransferDirection.Deposit
                      ? "deposit"
                      : "withdrawal"
                  }/funding-source/linked-bank`}
                />
              );
            return (
              <Redirect
                to={`/cash-account/investors/${investorId}/${
                  direction === TransferDirection.Deposit
                    ? "deposit"
                    : "withdrawal"
                }/funding-source`}
              />
            );
          }}
        />
        <Route
          path="/"
          render={() => {
            return (
              <Redirect
                to={`/cash-account/investors/${investorId}/${
                  direction === TransferDirection.Deposit
                    ? "deposit"
                    : "withdrawal"
                }/funding-source`}
              />
            );
          }}
        />
      </Switch>
    </>
  );
}

export default Transfers;
