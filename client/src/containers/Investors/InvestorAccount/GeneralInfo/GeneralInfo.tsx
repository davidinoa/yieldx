import React from "react";
import { useHistory } from "react-router";
import {
  ButtonGroup,
  CloseButton,
  ManageCashButton,
  Root
} from "./GeneralInfo.styles";
import { currencyFormatter } from "../InvestorPortfolios/InvestorPortfolios";
import {
  AccountStatus,
  AccountStatus2,
  ApexAccount2,
  InvestorInfo,
  InvestorStatus,
  InvestorType,
  Position2
} from "providers/graphql/hooks";

type GeneralInfo = {
  type: InvestorType;
  name: InvestorInfo["givenName"];
  status: InvestorStatus;
};

interface Props {
  generalInfo: GeneralInfo;
  apexAccount: ApexAccount2;
  investorId: string;
  aum: number;
  cashPortfolio?: {
    cashPos: Position2;
    cashAvailable: number;
    portfolioId: string;
  };
}

export default function GeneralInformation({
  generalInfo,
  apexAccount,
  aum,
  cashPortfolio,
  investorId
}: Props) {
  const history = useHistory();
  return (
    <Root>
      <div>
        <h2 className="title">Investor information</h2>
        <section className="data">
          <div className="record">
            <span className="label">investor type: </span>
            <span className="value text-capitalize">
              {generalInfo.type?.toLowerCase()}
            </span>
          </div>
          <div className="record">
            <span className="label">
              {generalInfo.type === InvestorType.Individual
                ? "investor name:"
                : "organization name:"}
            </span>
            <span className="value">{generalInfo.name}</span>
          </div>
          {cashPortfolio && (
            <>
              <div className="record">
                <span className="label">total aum: </span>
                <span className="value">{currencyFormatter.format(aum)}</span>
              </div>
              <div className="record">
                <span className="label">available in cash account: </span>
                <span className="value">
                  {currencyFormatter.format(cashPortfolio.cashAvailable ?? 0)}
                </span>
              </div>
              <div className="record">
                <span className="label">
                  {(cashPortfolio.cashPos?.unsettled ?? 0) >= 0
                    ? "pending deposits:"
                    : "pending withdrawals:"}
                </span>
                <span className="value">
                  {currencyFormatter.format(
                    Math.abs(cashPortfolio.cashPos?.unsettled ?? 0)
                  )}
                </span>
              </div>
            </>
          )}
          <div className="record">
            <span className="label">status: </span>
            <span className="value">
              {apexAccount?.status ?? AccountStatus.Error}
            </span>
          </div>
        </section>
        <ButtonGroup className="d-flex justify-content-between">
          {apexAccount?.status === AccountStatus2.Active && (
            <CloseButton
              data-testid="Investors-InvestorAccount-GeneralInfo-CloseAccount"
              onClick={() =>
                history.push(`/investors/${investorId}#close-investor`)
              }
            >
              Close account
            </CloseButton>
          )}
          {cashPortfolio?.cashAvailable === 0 && aum === 0 ? (
            <ManageCashButton
              data-testid="Investors-InvestorAccount-GeneralInfo-AddCash"
              to={`/cash-account/investors/${investorId}/deposit`}
            >
              Add cash to account
            </ManageCashButton>
          ) : (
            <ManageCashButton
              data-testid="Investors-InvestorAccount-GeneralInfo-ManageCash"
              to={`/cash-account/investors/${investorId}`}
            >
              Manage Cash
            </ManageCashButton>
          )}
        </ButtonGroup>
      </div>
    </Root>
  );
}
