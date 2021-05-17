import React from "react";
import { Spinner } from "elements/Spinner/Spinner";
import Root from "./YieldContribution.styles";
import PieChart from "../../../../../components/PortfolioReviewChart/PortfolioReviewChart";

type Props = {
  contribution?: { names: string[]; values: number[] };
  tooltipContent?: string;
};

function YieldContribution({ contribution, tooltipContent }: Props) {
  return (
    <Root tooltipContent={tooltipContent}>
      {contribution ? (
        <PieChart
          names={contribution.names}
          values={contribution.values}
          chartId="yield-contribution"
        />
      ) : (
        <Spinner />
      )}
    </Root>
  );
}

export default YieldContribution;
