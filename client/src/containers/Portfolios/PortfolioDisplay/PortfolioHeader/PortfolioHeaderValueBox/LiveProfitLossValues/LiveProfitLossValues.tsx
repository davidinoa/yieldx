import React from "react";
import { Row } from "react-bootstrap";
import {
  PortfolioInput,
  useRoverPortfolioAnalyzerCalculateIntradayReturnQuery
} from "providers/graphql/hooks";
import { ValuePnL } from "../../PortfolioHeader.styles";
import ProfitLossValue from "./ProfitLossValue/ProfitLossValue";

interface Props {
  portfolioInput: PortfolioInput;
}

function LiveProfitLossValues({ portfolioInput }: Props) {
  const { data, error } = useRoverPortfolioAnalyzerCalculateIntradayReturnQuery(
    {
      variables: {
        calculateIntradayReturnRequestInput: {
          portfolio: portfolioInput
        }
      }
    }
  );

  const gainToday =
    data?.roverPortfolioAnalyzerCalculateIntradayReturn?.marketValueReturn;
  return (
    <Row>
      <ValuePnL>
        {/*
          <ProfitLossValue value={gainTotal} label="total gain/loss:" />
        */}
        <ProfitLossValue
          value={gainToday}
          label="today gain/loss:"
          error={Boolean(error)}
        />
      </ValuePnL>
    </Row>
  );
}

export default LiveProfitLossValues;
