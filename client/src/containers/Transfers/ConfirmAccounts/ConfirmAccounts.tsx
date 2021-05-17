import React from "react";
import { Col, Row } from "react-bootstrap";
import { Title } from "containers/PortfolioExecution/Select.styles";
import { CardContainer } from "./ConfirmAccounts.styles";
import BottomNav from "containers/Investors/CreateInvestor/BottomNav/BottomNav";
import ErrorAlert from "elements/Alert/ErrorAlert";
import InvestorCard from "./InvestorCard/InvestorCard";
import FundingCard from "./FundingCard/FundingCard";
import { CashManageInvestor } from "services/InvestorService";
import { SpinnerWrapper } from "containers/BestFit/PreferencesForm/PreferencesForm.styles";
import { Spinner } from "elements/Spinner/Spinner";
import {
  CashManagerHeaderValue,
  CashManagerHeaderValueContainer,
  CashManagerHeaderValueTitle,
  CashManagerHeaderValueTotal
} from "containers/CashAccount/ManageCashAccount/ManageCashAccount.styles";
import Decimal from "util/Decimal";
import {
  ApexAccount2,
  Investor,
  LinkedBankAccount,
  TransferDirection
} from "providers/graphql/hooks";
import { useConfirmAccounts } from "./useConfirmAccounts";

interface Props {
  bankAccount?: LinkedBankAccount;
  investor: Investor;
  apexAccount: ApexAccount2;
  amount: number;
  cashOnlyPortfolio: CashManageInvestor["cashPortfolio"];
  transferDirection: TransferDirection;
  fundingSource: "wire" | "plaid";
}

function ConfirmAccounts({
  bankAccount,
  cashOnlyPortfolio,
  apexAccount,
  investor,
  transferDirection,
  amount,
  fundingSource
}: Props) {
  const { isSubmitting, error, transferCallback, goBack } = useConfirmAccounts(
    investor,
    apexAccount,
    amount,
    cashOnlyPortfolio,
    transferDirection,
    fundingSource,
    bankAccount
  );
  if (isSubmitting)
    return (
      <SpinnerWrapper>
        <Spinner />
      </SpinnerWrapper>
    );

  // TODO: Breakup component into smaller pieces
  return (
    <>
      {error && <ErrorAlert message={error.message} bottomNav />}
      <Col xs={{ offset: 4, span: 16 }} className="mt-5 d-flex flex-column">
        <Row className="d-flex align-items-center mb-4">
          <Col xs={24} md={16} className="col-xxl-17">
            <Title>accounts & funding</Title>
            <h1 className="mb-3">Confirm accounts & funding source</h1>
          </Col>
          {/* TODO: Make a component that is flexible enough to support this and also the values shown in review/display */}
          <CashManagerHeaderValue>
            <CashManagerHeaderValueContainer>
              <Row>
                <CashManagerHeaderValueTitle>
                  <h3>TRANSFER AMOUNT</h3>
                </CashManagerHeaderValueTitle>
              </Row>
              <Row>
                <CashManagerHeaderValueTotal>
                  <span>${Decimal.format(amount)}</span>
                </CashManagerHeaderValueTotal>
              </Row>
            </CashManagerHeaderValueContainer>
          </CashManagerHeaderValue>
        </Row>
        <CardContainer>
          {transferDirection === TransferDirection.Deposit ? (
            <>
              <FundingCard
                bankAccount={bankAccount}
                blockChange={fundingSource === "wire" && amount >= 100_000}
                changeLink={`/cash-account/investors/${investor.id}/deposit/funding-source`}
                rightBorder
              />
              <InvestorCard investor={investor} apexAccount={apexAccount} />
            </>
          ) : (
            <>
              <InvestorCard
                investor={investor}
                apexAccount={apexAccount}
                rightBorder
              />
              <FundingCard
                blockChange={fundingSource === "wire" && amount >= 100_000}
                bankAccount={bankAccount}
                changeLink={`/cash-account/investors/${investor.id}/withdrawal/funding-source`}
              />
            </>
          )}
        </CardContainer>
      </Col>
      <BottomNav
        blockNext={isSubmitting}
        onNext={transferCallback}
        onPrevious={goBack}
      />
    </>
  );
}

export default ConfirmAccounts;
