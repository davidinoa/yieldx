import React from "react";
import { Col } from "react-bootstrap";
import { ToolTipContent } from "assets/content";
import { Comparison } from "@bondhouse/income-portfolios";
import YieldContribution from "containers/Portfolios/PortfolioDisplay/Charts/YieldContribution/YieldContribution";
import PortfolioSection from "containers/Portfolios/PortfolioDisplay/PortfolioSection/PortfolioSection";
import { YieldXPosition } from "models/YieldXPortfolio";
import { calculateYieldContributions } from "util/calculateYieldContributions";
import SectorAllocation from "containers/Portfolios/PortfolioDisplay/Charts/SectorAllocation/SectorAllocation";
import RiskComparison from "components/InpaasAnalytics/RiskComparison/RiskComparison";
import ExpenseRatioComparison from "components/InpaasAnalytics/ExpenseRatioComparison/ExpenseRatioComparison";
import { AnalyticsRow } from "./InpaasAnalytics.styles";

interface Props {
  positions: Array<YieldXPosition>;
  totalMarketValue: number;
  cashMarketValue: number;
  annualYield?: number;
  riskComparison?: Comparison;
  expenseComparison?: Comparison;
}

function InpaasAnalytics({
  positions,
  totalMarketValue,
  cashMarketValue,
  annualYield,
  riskComparison,
  expenseComparison
}: Props) {
  const contribution = !annualYield
    ? undefined
    : calculateYieldContributions(positions, annualYield);
  return (
    <PortfolioSection title="Analytics">
      <AnalyticsRow className="mb-2">
        <RiskComparison comparison={riskComparison} />
        <ExpenseRatioComparison
          portfolioMarketValue={totalMarketValue}
          comparison={expenseComparison}
        />
      </AnalyticsRow>
      <AnalyticsRow>
        <Col xs={12}>
          <SectorAllocation
            type="funds"
            positions={positions}
            totalMarketValue={totalMarketValue}
            cashMarketValue={cashMarketValue}
            tooltipContent={ToolTipContent.SectorAllocation}
          />
        </Col>
        <Col xs={12}>
          <YieldContribution
            contribution={contribution}
            tooltipContent={ToolTipContent.YieldContribution.Funds}
          />
        </Col>
      </AnalyticsRow>
    </PortfolioSection>
  );
}

export default InpaasAnalytics;
