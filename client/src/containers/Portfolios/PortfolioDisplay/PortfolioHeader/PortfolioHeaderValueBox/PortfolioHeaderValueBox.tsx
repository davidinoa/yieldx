import React, { Dispatch, SetStateAction, useState } from "react";
import { useHistory } from "react-router-dom";
import { PortfolioType } from "@bondhouse/income-portfolios";
import YieldXPortfolio from "models/YieldXPortfolio";
import { PortfolioStatus } from "@bondhouse/position-management";
import toInputPortfolio from "util/toInputPortfolio";
import LiveHeaderOptions from "./LiveHeaderOptions/LiveHeaderOptions";
import { Value, ValueContainer } from "../PortfolioHeader.styles";
import ExecutionHoursModal from "../../Modals/ExecutionHoursModal/ExecutionHoursModal";
import PortfolioValue from "./PortfolioValue/PortfolioValue";
import ExternalHeaderOptions from "./ExternalHeaderOptions/ExternalHeaderOptions";
import LiveProfitLossValues from "./LiveProfitLossValues/LiveProfitLossValues";

interface Props {
  portfolio: YieldXPortfolio;
  isReview?: boolean;
  investorId?: string;
  setShowInvestModal: Dispatch<SetStateAction<boolean>>;
}

export default function PortfolioHeaderValueBox({
  portfolio,
  investorId,
  isReview,
  setShowInvestModal
}: Props) {
  const history = useHistory();
  const [showHoursModal, setShowHoursModal] = useState(false);
  const isLive = portfolio.getType() === PortfolioType.LIVE;
  // TODO: Remove this redundant uppercase check once enum casing issue is resolved
  const isTerminated =
    portfolio.getStatus() === PortfolioStatus.TERMINATED ||
    portfolio.getStatus().toUpperCase() === "TERMINATED";
  const isPaper = portfolio.getType() === PortfolioType.EXTERNAL;
  return (
    <>
      <Value>
        <ValueContainer>
          <PortfolioValue value={portfolio.totalMarketValue} />
          {!isReview && isLive && (
            <LiveHeaderOptions investorId={investorId} portfolio={portfolio} />
          )}
          {isLive && !isTerminated && (
            <LiveProfitLossValues
              portfolioInput={toInputPortfolio(portfolio)}
            />
          )}
          {isPaper && !isReview && (
            <ExternalHeaderOptions
              portfolio={portfolio}
              setShowInvestModal={setShowInvestModal}
              setShowHoursModal={setShowHoursModal}
            />
          )}
        </ValueContainer>
      </Value>
      <ExecutionHoursModal
        isOpen={showHoursModal}
        onHide={() => setShowHoursModal(false)}
        onSave={() => {
          setShowHoursModal(false);
          history.push("#save");
        }}
      />
    </>
  );
}
