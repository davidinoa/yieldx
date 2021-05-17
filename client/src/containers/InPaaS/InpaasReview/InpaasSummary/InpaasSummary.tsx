import React from "react";
import { Row } from "react-bootstrap";
import { Constraints } from "@bondhouse/income-portfolios";
import { ToolTipContent } from "assets/content";
import PortfolioSection from "containers/Portfolios/PortfolioDisplay/PortfolioSection/PortfolioSection";
import PortfolioMetricCard from "components/PortfolioMetricCard/PortfolioMetricCard";
import CardValue from "components/PortfolioMetricCard/CardValue/CardValue";

interface Props {
  version?: "CURRENT" | "ORIGINAL";
  reviewData?: {
    risk: number;
    maxDrawdown: number;
    actualAllocation: Required<Constraints>;
    actualYield?: number;
    actualIncome: number;
  };
  loading?: boolean;
  error?: Error;
  savedPortfolioData?: {
    expenseRatio?: number;
    risk?: number;
    maxDrawdown?: number;
    targetYield: number;
    targetIncome: number;
    actualYield?: number;
    actualIncome?: number;
  };
}

export default function InpaasSummary({
  version,
  reviewData,
  savedPortfolioData
}: Props) {
  if (reviewData)
    return (
      <PortfolioSection title="Summary" version={version}>
        <Row>
          <PortfolioMetricCard
            xs={6}
            value={{
              tooltipContent: ToolTipContent.targetYield,
              label: "Yield",
              number: reviewData.actualYield,
              format: "%",
              helperText: "annual"
            }}
          />
          <PortfolioMetricCard
            xs={6}
            value={{
              tooltipContent: ToolTipContent.targetIncome,
              label: "Income",
              number: reviewData.actualIncome,
              format: "$",
              helperText: "monthly",
              toggleLabel: "Annual"
            }}
            secondValue={{
              tooltipContent: ToolTipContent.targetIncome,
              label: "Income",
              number: reviewData.actualIncome * 12,
              format: "$",
              toggleLabel: "Monthly",
              helperText: "annual"
            }}
          />
          <PortfolioMetricCard
            xs={6}
            value={{
              tooltipContent: ToolTipContent.risk,
              label: "Risk",
              number: reviewData.risk,
              format: "%",
              toggleLabel: "Max drawdown"
            }}
            secondValue={{
              tooltipContent: ToolTipContent.maxDrawdown,
              label: "Max drawdown",
              toggleLabel: "Risk",
              number: reviewData.maxDrawdown,
              format: "%"
            }}
          />
          <PortfolioMetricCard xs={6} label="Allocation">
            <CardValue
              value={{
                format: "%",
                number: reviewData.actualAllocation.minimumWeight * 100,
                helperText: "min"
              }}
              secondValue={{
                format: "%",
                number: reviewData.actualAllocation.maximumWeight * 100,
                helperText: "max"
              }}
            />
          </PortfolioMetricCard>
        </Row>
      </PortfolioSection>
    );
  if (savedPortfolioData)
    return (
      <PortfolioSection title="Summary" version={version}>
        <Row>
          <PortfolioMetricCard
            xs={6}
            value={{
              tooltipContent: ToolTipContent.CurrentYield,
              label: "Current Yield",
              number: savedPortfolioData.actualYield,
              format: "%",
              helperText: "annual",
              toggleLabel: "%"
            }}
          />
          <PortfolioMetricCard
            xs={6}
            value={{
              tooltipContent: ToolTipContent.CurrentIncome,
              label: "Current Income",
              number: savedPortfolioData.actualIncome,
              format: "$",
              toggleLabel: "$",
              helperText: "monthly"
            }}
          />
          <PortfolioMetricCard
            xs={6}
            value={{
              tooltipContent: ToolTipContent.ExpenseRatio,
              label: "Expense ratio",
              number: savedPortfolioData.expenseRatio,
              format: "%"
            }}
          />
          <PortfolioMetricCard
            xs={6}
            value={{
              tooltipContent: ToolTipContent.risk,
              label: "Risk",
              number: savedPortfolioData.risk,
              format: "%",
              toggleLabel: "Max drawdown"
            }}
            secondValue={{
              tooltipContent: ToolTipContent.maxDrawdown,
              label: "Max drawdown",
              toggleLabel: "Risk",
              number: savedPortfolioData.maxDrawdown,
              format: "%"
            }}
          />
        </Row>
      </PortfolioSection>
    );
  return null;
}
