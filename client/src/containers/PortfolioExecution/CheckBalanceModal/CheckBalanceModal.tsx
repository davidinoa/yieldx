import React from "react";
import { Row } from "react-bootstrap";
import { useRecoilValue } from "recoil";
import { useHistory } from "react-router";
import clsx from "clsx";
import {
  CreateFundTransferRequest,
  PortfoliosApi
} from "@bondhouse/position-management";
import {
  CreateOrderRequestDirectionEnum,
  OrdersApi
} from "@bondhouse/order-management";
import { useLocation } from "react-router-dom";
import ModalBase from "components/ModalBase/ModalBase";
import {
  BalanceList,
  BalanceListTitle,
  BalanceListValue,
  CancelButton,
  ContinueButton
} from "components/ModalBase/ModalBase.styles";
import { yieldXPortfolioSelector } from "recoil-state/getProposalWithPortfolioId";
import { portfolioCreateOrEditState } from "recoil-state/portfolioCreateOrEditState";
import Decimal from "util/Decimal";
import { getCashOnlyPortfolio } from "services/InvestorService";
import ErrorAlert from "elements/Alert/ErrorAlert";
import parsePortfolioQuery from "util/parsePortfolioQuery";
import { ReactComponent as RedAlert } from "assets/svg/red-alert.svg";
import { originalInvestorSelector } from "recoil-state/originalInvestorSelector";
import convertGoals from "../../InPaaS/Goals/convertGoals";

const portfoliosApi = new PortfoliosApi();
const ordersApi = new OrdersApi();

export default function CheckBalanceModal() {
  const { search } = useLocation();
  const portfolioQueryParams = parsePortfolioQuery(search);
  const originalPortfolio = useRecoilValue(
    yieldXPortfolioSelector(portfolioQueryParams)
  );
  if (!originalPortfolio) throw Error("EDIT_PORTFOLIO_NOT_FOUND");
  const originalPortfolioInvestor = useRecoilValue(
    originalInvestorSelector(originalPortfolio?.getId())
  );
  if (!originalPortfolioInvestor)
    throw Error("No investor found for portfolio being edited");
  const { currentPortfolio } = useRecoilValue(portfolioCreateOrEditState);
  const history = useHistory();
  const [error, setError] = React.useState<string>();
  const [isSubmitting, setSubmitting] = React.useState<boolean>();
  const cashOnlyPort = useRecoilValue(
    getCashOnlyPortfolio(originalPortfolioInvestor.id)
  );
  if (!cashOnlyPort)
    throw Error("Error getting cash investor for portfolio being edited");
  if (!currentPortfolio)
    throw Error("New portfolio not defined in local state");
  const { cashAvailable } = cashOnlyPort;
  const currentInvestment = originalPortfolio.totalMarketValue;
  const newInvestment = currentPortfolio.totalMarketValue;
  const diff = currentInvestment - newInvestment;
  const [currentStatus, setStatus] = React.useState<"initial" | "confirm">(
    cashAvailable >= Math.abs(diff) ? "confirm" : "initial"
  );

  return (
    <ModalBase
      testId="check-balance-modal"
      onHide={() => {
        return false;
      }}
      show={cashAvailable + diff < 0}
    >
      {cashAvailable + diff < 0 && <RedAlert className="mb-3" />}
      <h1>
        {currentStatus === "confirm" && "Confirm transfer from your account"}
        {currentStatus === "initial" &&
          cashAvailable + diff < 0 &&
          "Insufficient funds in your investment account"}
        {currentStatus === "initial" &&
          cashAvailable + diff >= 0 &&
          "These changes will leave cash available in the portfolio"}
      </h1>
      <BalanceList>
        <Row>
          <BalanceListTitle>
            <b>Current investment:</b>
          </BalanceListTitle>
          <BalanceListValue>
            <span> ${Decimal.format(currentInvestment)}</span>
          </BalanceListValue>
        </Row>
        <Row>
          <BalanceListTitle>
            <b>New investment:</b>
          </BalanceListTitle>
          <BalanceListValue>
            <span className="text-primary">
              {" "}
              ${Decimal.format(newInvestment)}
            </span>
          </BalanceListValue>
        </Row>
        <Row>
          <BalanceListTitle>
            <b>Difference:</b>
          </BalanceListTitle>
          <BalanceListValue>
            <span className="text-warning">
              {" "}
              {`${diff < 0 ? "- " : ""}$${Decimal.format(Math.abs(diff))}`}
            </span>
          </BalanceListValue>
        </Row>
        <Row>
          <BalanceListTitle>
            <b>Cash account (Total):</b>
          </BalanceListTitle>
          <BalanceListValue>
            <span
              className={clsx({
                "text-success": cashAvailable + diff >= 0,
                "text-danger": cashAvailable + diff < 0
              })}
            >
              {`$${Decimal.format(cashAvailable)}`}
            </span>
          </BalanceListValue>
        </Row>
      </BalanceList>
      <p>How would you like to proceed?</p>
      <div>
        <ContinueButton
          disabled={
            isSubmitting || originalPortfolio.getInpaasData() !== undefined
          }
          onClick={async () => {
            if (currentStatus === "initial" && cashAvailable + diff >= 0) {
              const createFundTransferRequest: CreateFundTransferRequest = {
                currency: "USD",
                quantity: diff * -1
              };
              try {
                await portfoliosApi.internalPortfolioFundTransfer(
                  originalPortfolioInvestor.id,
                  originalPortfolio.getId(),
                  createFundTransferRequest
                );
                setStatus("confirm");
              } catch (e) {
                console.error(e);
              }
            } else if (
              currentStatus === "initial" &&
              cashAvailable + diff < 0
            ) {
              history.push({
                pathname: `/asset-explorer/portfolio-builder/edit`,
                search
              });
            } else if (currentStatus === "confirm") {
              const pendingOrders = currentPortfolio.positions.map(
                ({ assetId, quantity, asset }) => ({
                  assetId,
                  direction: CreateOrderRequestDirectionEnum.BUY,
                  comment: "Generated by YieldX",
                  quantity,
                  prices: asset.price
                })
              );
              setSubmitting(true);
              try {
                await Promise.all(
                  pendingOrders.map(it =>
                    ordersApi.createOrder(originalPortfolio.getId(), it)
                  )
                );
                history.push(`/portfolios/live/${originalPortfolio.getId()}`);
              } catch (e) {
                setSubmitting(false);
                setError(e.response?.data?.message || "unknown error");
              }
            }
          }}
        >
          {currentStatus === "initial" &&
            cashAvailable + diff < 0 &&
            "Continue editing portfolio"}
          {currentStatus === "initial" &&
            cashAvailable + diff >= 0 &&
            "Transfer to cash account"}
          {currentStatus === "confirm" && "Confirm and continue"}
        </ContinueButton>
        <CancelButton
          disabled={isSubmitting}
          onClick={() => {
            if (currentStatus === "initial" && cashAvailable + diff >= 0)
              setStatus("confirm");
            else if (currentStatus === "initial" && cashAvailable + diff < 0)
              history.push(
                `/cash-account/investors/${originalPortfolioInvestor.id}`
              );
            else if (currentStatus === "confirm") {
              const originalInpaasData = originalPortfolio.getInpaasData();
              const currentInpaasData = currentPortfolio.getInpaasData();
              if (originalInpaasData && currentInpaasData)
                history.push(`/inpaas/goals/${originalPortfolio.getId()}`, {
                  investmentAmount: currentPortfolio.totalMarketValue,
                  goal: "income",
                  maximumWeight:
                    (currentInpaasData.proposal.proposalRequest.constraints
                      ?.maximumWeight || 0.3) * 100,
                  minimumWeight:
                    (currentInpaasData.proposal.proposalRequest.constraints
                      ?.minimumWeight || 0.05) * 100,
                  ...convertGoals(
                    currentInpaasData.proposal.proposalRequest.investmentAmount,
                    currentInpaasData.proposal.proposalRequest.goal
                  )
                });
              else
                history.push(
                  `/asset-explorer/portfolio-builder/live/${originalPortfolio.getId()}`
                );
            }
          }}
        >
          {currentStatus === "initial" &&
            cashAvailable + diff < 0 &&
            "Manage cash account"}
          {currentStatus === "confirm" && "Continue editing portfolio"}
          {currentStatus === "initial" &&
            cashAvailable + diff >= 0 &&
            "Keep in the portfolio"}
        </CancelButton>
      </div>
      {error && <ErrorAlert message={error} />}
    </ModalBase>
  );
}
