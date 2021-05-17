import React from "react";
import { Comparison } from "@bondhouse/income-portfolios";
import PortfolioMetricCard from "components/PortfolioMetricCard/PortfolioMetricCard";
import ParentSize from "@visx/responsive/lib/components/ParentSize";
import CardValue from "components/PortfolioMetricCard/CardValue/CardValue";
import ComparisonBarChart from "components/ComparisonBarChart/ComparisonBarChart";
import { ComparisonRow } from "components/InpaasAnalytics/RiskComparison/RiskComparison.styles";
import { ToolTipContent } from "assets/content";
import { DataVal } from "components/ComparisonBarChart/util/dataIsEqual";
import { Spinner } from "elements/Spinner/Spinner";

interface Props {
  comparison?: Comparison;
}

function RiskComparison({ comparison }: Props) {
  const barData: [DataVal, DataVal] = [
    { label: "inpaas", value: comparison?.inpaas ?? 0 },
    {
      label: "average",
      value: comparison?.average ?? 0
    }
  ];
  return (
    <PortfolioMetricCard
      label="Risk comparison"
      xs={12}
      tooltipContent={ToolTipContent.riskComparison}
    >
      {comparison ? (
        <ComparisonRow className="row">
          <div className="col-7 d-flex flex-column justify-content-between">
            <div className="comparison-value-container">
              <CardValue
                value={{
                  number: comparison.percentageDifference ?? 0,
                  format: "%"
                }}
              />
              <span className="comparison-label">LESS RISK</span>
            </div>
            <div className="horizontal-separator m-auto" />
            <div className="comparison-value-container mt-0 mb-auto">
              <CardValue
                value={{
                  number: comparison.difference
                    ? comparison.difference * 100
                    : 0,
                  format: "bps"
                }}
              />
              <span className="comparison-label">REDUCTION</span>
            </div>
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
                  data={barData}
                  maxValue={45}
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

export default RiskComparison;
