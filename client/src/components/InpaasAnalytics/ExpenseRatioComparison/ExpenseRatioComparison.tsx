import React, { useState } from "react";
import { Comparison } from "@bondhouse/income-portfolios";
import ParentSize from "@visx/responsive/lib/components/ParentSize";
import PortfolioMetricCard, {
  ValueFormat
} from "components/PortfolioMetricCard/PortfolioMetricCard";
import CardValue from "components/PortfolioMetricCard/CardValue/CardValue";
import ComparisonBarChart from "components/ComparisonBarChart/ComparisonBarChart";
import ToggleValue from "components/PortfolioMetricCard/ToggleValue/ToggleValue";
import { ComparisonRow } from "components/InpaasAnalytics/ExpenseRatioComparison/ExpenseRatioComparison.styles";
import calculateCashSaved from "components/InpaasAnalytics/ExpenseRatioComparison/calculateCashSaved";
import calculateBpsSaved from "components/InpaasAnalytics/ExpenseRatioComparison/calculateBpsSaved";
import { ToolTipContent } from "assets/content";
import { DataVal } from "components/ComparisonBarChart/util/dataIsEqual";
import { Spinner } from "elements/Spinner/Spinner";

interface Props {
  comparison?: Comparison;
  portfolioMarketValue: number;
}

function ExpenseRatioComparison({ comparison, portfolioMarketValue }: Props) {
  const [currentSaved, setCurrent] = useState("CASH");
  const barData: [DataVal, DataVal] = [
    { label: "inpaas", value: comparison?.inpaas ?? 0 },
    {
      label: "average",
      value: comparison?.average ?? 0
    }
  ];
  const savedDisplayValue =
    currentSaved === "CASH"
      ? {
          number: calculateCashSaved(
            comparison?.difference ?? 0,
            portfolioMarketValue
          ),
          format: "$" as ValueFormat
        }
      : {
          number: calculateBpsSaved(
            comparison?.average ?? 0,
            comparison?.inpaas ?? 0
          ),
          format: "bps" as ValueFormat
        };
  return (
    <PortfolioMetricCard
      label="Expense ratio comparison"
      xs={12}
      tooltipContent={ToolTipContent.expenseComparison}
    >
      {comparison ? (
        <ComparisonRow className="row">
          <div className="col-7 d-flex flex-column justify-content-center">
            <ToggleValue
              className="mt-4 position-absolute comparison-toggle"
              onToggle={() =>
                setCurrent(prev => (prev === "CASH" ? "BPS" : "CASH"))
              }
              current={currentSaved}
              switchToggleLabels={["CASH", "BPS"]}
            />
            <CardValue value={savedDisplayValue} />
            <span className="comparison-label">SAVED</span>
          </div>
          <div className="col-1 d-flex justify-content-center align-content-center">
            <div className="vertical-separator m-auto" />
          </div>
          <div className="col-16">
            <ParentSize>
              {({ width, height }) => (
                <ComparisonBarChart
                  width={width}
                  height={height}
                  maxValue={5}
                  data={barData}
                />
              )}
            </ParentSize>
          </div>
        </ComparisonRow>
      ) : (
        <ComparisonRow className="row">
          <Spinner />
        </ComparisonRow>
      )}
    </PortfolioMetricCard>
  );
}

export default ExpenseRatioComparison;
