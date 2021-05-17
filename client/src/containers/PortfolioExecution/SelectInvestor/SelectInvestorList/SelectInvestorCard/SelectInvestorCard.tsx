import React from "react";
import {
  Investor,
  InvestorInfo,
  useInvestorGetDeliveryInstructionsByIdQuery,
  usePositionManagementGetPortfolioQuery
} from "providers/graphql/hooks";
import Decimal from "util/Decimal";
import { Spinner } from "elements/Spinner/Spinner";
import ErrorAlert from "elements/Alert/ErrorAlert";
import { InvestorListItem } from "containers/PortfolioExecution/SelectInvestor/SelectInvestor.style";

interface SelectInvestorCardProps {
  isSelected: boolean;
  onSelect: Function;
  name: string;
  investor: Partial<
    Omit<Investor, "investorInfo"> & { investorInfo: Partial<InvestorInfo> }
  > & { id: string };
  portfolioValue: number;
}

export default function SelectInvestorCard({
  name,
  investor,
  onSelect,
  portfolioValue,
  isSelected = false
}: SelectInvestorCardProps) {
  const {
    data: deliveryInstructionsData,
    loading: deliveryInstructionsLoading,
    error: deliveryInstructionsError
  } = useInvestorGetDeliveryInstructionsByIdQuery({
    variables: {
      investorId: investor.id
    },
    errorPolicy: "all"
  });
  const deliveryInstructions =
    deliveryInstructionsData?.investorGetDeliveryInstructionsById
      ?.deliveryInstructions;
  const cashOnlyPortfolioId = deliveryInstructions?.find(
    instruction => instruction?.cashOnly === true
  )?.portfolioId;

  const {
    data: cashOnlyPortfolioData,
    loading: cashOnlyPortfolioLoading,
    error: cashOnlyPortfolioError
  } = usePositionManagementGetPortfolioQuery({
    variables: {
      id: cashOnlyPortfolioId ?? ""
    },
    skip: !cashOnlyPortfolioId,
    errorPolicy: "all"
  });
  const cashOnlyPortfolio =
    cashOnlyPortfolioData?.positionManagementGetPortfolio?.portfolio;
  const cashPos = cashOnlyPortfolio?.positions.find(
    position => position?.id === "CASH-USD"
  );
  const cashAvailable =
    (cashPos?.unsettled ?? 0) > 0
      ? cashPos?.settled ?? 0
      : cashPos?.quantity ?? 0;
  const notEnoughCashAvailable = cashAvailable < portfolioValue;
  const loading = cashOnlyPortfolioLoading || deliveryInstructionsLoading;
  const error = cashOnlyPortfolioError || deliveryInstructionsError;
  return (
    <InvestorListItem className={notEnoughCashAvailable ? "no-funds" : ""}>
      <div className="investor-item-container">
        <h3>{name}</h3>
        <h5>{investor.investorType}</h5>
        <div className="total-available">
          <small>CASH AVAILABLE</small>
          {loading || !cashOnlyPortfolioData ? (
            <Spinner />
          ) : (
            <b>{`$${Decimal.format(cashAvailable)}`}</b>
          )}
        </div>
        <button
          type="button"
          disabled={isSelected || notEnoughCashAvailable}
          data-testid={`select-investor-${investor.id}`}
          onClick={() => onSelect(investor)}
          className={isSelected ? "selected" : ""}
        >
          {isSelected ? "Selected" : "Select"}
        </button>
        {error && <ErrorAlert message={error.message} />}
      </div>
    </InvestorListItem>
  );
}
