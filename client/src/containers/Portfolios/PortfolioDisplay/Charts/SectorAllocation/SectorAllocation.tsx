import React from "react";
import { generateSectorAllocation } from "util/generateSectorAllocation";
import PieChart from "components/PortfolioReviewChart/PortfolioReviewChart";
import { YieldXPosition } from "models/YieldXPortfolio";
import { ChartWrapper, Root } from "./SectorAllocation.styles";

type Props = {
  type: "funds" | "bonds";
  positions: Array<YieldXPosition>;
  totalMarketValue: number;
  cashMarketValue: number;
  tooltipContent?: string;
};

export default function SectorAllocation({
  positions,
  totalMarketValue,
  cashMarketValue,
  tooltipContent
}: Props) {
  const sectorAllocation = generateSectorAllocation(
    positions,
    cashMarketValue,
    totalMarketValue,
    {
      withoutCash: true
    }
  );

  return (
    <Root tooltipContent={tooltipContent}>
      {sectorAllocation && (
        <ChartWrapper>
          <PieChart
            names={sectorAllocation.names}
            values={sectorAllocation.values}
            chartId="sector-allocation"
          />
        </ChartWrapper>
      )}
    </Root>
  );
}
