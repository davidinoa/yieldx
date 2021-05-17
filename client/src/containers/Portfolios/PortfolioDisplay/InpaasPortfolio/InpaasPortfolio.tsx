import React, { useCallback, useEffect, useState } from "react";
import { Row } from "react-bootstrap";
import { ColumnApi, GridApi } from "@ag-grid-community/core";
import { useHistory, useLocation } from "react-router";
import PortfolioGrowthChart from "containers/Portfolios/PortfolioDisplay/PortfolioGrowthChart/PortfolioGrowthChart";
import Decimal from "util/Decimal";
import PortfolioFootNote from "containers/Portfolios/PortfolioDisplay/PortfolioFootNote/PortfolioFootNote";
import PortfolioSection from "containers/Portfolios/PortfolioDisplay/PortfolioSection/PortfolioSection";
import { ToolTipContent } from "assets/content";
import YieldXPortfolio from "models/YieldXPortfolio";
import exportDataAsCsv from "util/exportDataAsCsv";
import EditModal from "containers/BestFit/BestFitReview/EditModal/EditModal";
import getProposalTargetValues from "util/getProposalTargetValues";
import InpaasSummary from "containers/InPaaS/InpaasReview/InpaasSummary/InpaasSummary";
import InpaasAnalytics from "components/InpaasAnalytics/InpaasAnalytics";
import PositionGridAll from "containers/Portfolios/PortfolioDisplay/PositionGrid/PositionGridAll";
import checkRebalance from "containers/Portfolios/PortfolioDisplay/InpaasPortfolio/util/checkRebalance";
import onRebalance from "containers/Portfolios/PortfolioDisplay/InpaasPortfolio/util/onRebalance";
import {
  WealthProjection,
  useRoverPortfolioAnalyzerAnalyzePortfolioQuery
} from "providers/graphql/hooks";
import toPortfolioInput from "util/toInputPortfolio";

import useGetComparisons from "containers/Portfolios/PortfolioDisplay/InpaasPortfolio/useGetComparisons";
import { Analysis } from "@bondhouse/rover-portfolio-analyzer";
import { InpaasPositions } from "containers/InPaaS/InpaasReview/InpaasReview.styles";
import {
  AlertLevel,
  useTriggerAlert,
  useCloseAlert
} from "providers/alerts/AlertProvider";
import noOp from "util/noOp";

interface Props {
  portfolio: YieldXPortfolio;
}

function InpaasPortfolio({ portfolio }: Props) {
  const history = useHistory();
  const { pathname, hash } = useLocation();
  const [gridApi, setGridApi] = useState<GridApi>();
  const [columnApi, setColumnApi] = useState<ColumnApi>();
  const triggerAlert = useTriggerAlert();
  const closeAlert = useCloseAlert();
  const { data } = useRoverPortfolioAnalyzerAnalyzePortfolioQuery({
    variables: {
      enableEstimatedPerformance: true,
      analyzePortfolioRequestInput: {
        portfolio: toPortfolioInput(portfolio)
      }
    }
  });

  const analysis = data?.roverPortfolioAnalyzerAnalyzePortfolio?.analysis;
  const { data: comparisonsData } = useGetComparisons(
    (analysis as unknown) as Analysis
  );
  const { proposalRequest } =
    (portfolio.getInpaasData && portfolio.getInpaasData()?.proposal) ?? {};
  const annualYield = analysis?.yield ?? undefined;
  const monthlyIncome =
    analysis && annualYield
      ? ((analysis?.netAssetValue ?? 0) * annualYield) / 100 / 12
      : undefined;

  const targets = proposalRequest
    ? getProposalTargetValues(
        proposalRequest.goal,
        proposalRequest.investmentAmount
      )
    : undefined;

  const { isNegative, shouldAlert } = targets
    ? checkRebalance(
        targets.targetRisk || targets.targetYield || 0,
        (targets.targetRisk ? analysis?.risk : annualYield) || 0,
        0.1
      )
    : checkRebalance(0, annualYield ?? 0, 0.1);

  const maxDrawdown =
    analysis?.estimatedPerformance?.estimatedMaximumDrawdown.value;
  const allPositionsSettled = portfolio.positions.every(
    it => it.quantity === it.settled
  );
  const rebalanceDisabled =
    portfolio.getType() === "LIVE" && !allPositionsSettled;
  const rebalanceCallback = useCallback(() => {
    onRebalance(portfolio, history);
  }, [portfolio, history]);
  const shouldTriggerAlert = Boolean(
    proposalRequest && shouldAlert && analysis
  );
  // TODO: This effect is fired and cleaned up 4 more times than it needs to be.
  useEffect(() => {
    if (shouldTriggerAlert) {
      const type = targets?.targetRisk ? "risk" : "yield";
      const targetValue = targets?.targetRisk || targets?.targetYield;
      if (!targetValue) throw Error(`Invalid target value of ${targetValue}`);
      triggerAlert(
        `Your ${type} has reached 10% ${
          isNegative ? "beneath" : "above"
        } your target of ${Decimal.format(targetValue)}%`,
        AlertLevel.danger,
        {
          disabled: rebalanceDisabled,
          buttonText: "Rebalance",
          onClick: rebalanceCallback
        }
      );
      return closeAlert;
    }
    return noOp;
  }, [
    shouldTriggerAlert,
    isNegative,
    triggerAlert,
    rebalanceDisabled,
    rebalanceCallback,
    closeAlert,
    targets
  ]);
  return (
    <>
      {proposalRequest && (
        <InpaasSummary
          savedPortfolioData={{
            targetIncome: getProposalTargetValues(
              proposalRequest.goal,
              proposalRequest.investmentAmount
            ).targetIncome,
            targetYield: getProposalTargetValues(
              proposalRequest.goal,
              proposalRequest.investmentAmount
            ).targetYield,
            actualYield: annualYield,
            actualIncome: monthlyIncome,
            risk: analysis?.risk ?? undefined,
            maxDrawdown:
              maxDrawdown !== undefined ? maxDrawdown * 100 : undefined,
            expenseRatio: analysis?.expenseRatio ?? undefined
          }}
          loading={!analysis}
        />
      )}
      <InpaasAnalytics
        positions={portfolio.positions}
        annualYield={annualYield}
        totalMarketValue={portfolio.totalMarketValue}
        cashMarketValue={portfolio.cashMarketValue}
        riskComparison={
          comparisonsData?.comparisons?.find(
            it => it?.comparisonType === "Risk"
          ) || undefined
        }
        expenseComparison={
          comparisonsData?.comparisons?.find(
            it => it?.comparisonType === "Expense Ratio"
          ) || undefined
        }
      />

      {analysis?.wealthProjections && (
        <PortfolioGrowthChart
          nav={portfolio.totalMarketValue}
          wealthProjections={analysis.wealthProjections as WealthProjection[]}
        />
      )}
      <InpaasPositions>
        <PortfolioSection
          title="Positions"
          tooltipContent={ToolTipContent.Positions.Default}
          onEditPositions={() => history.push("#edit-positions")}
          exportPositions={() => exportDataAsCsv(gridApi, columnApi)}
        >
          <Row>
            <PositionGridAll
              sleeve="funds"
              portfolio={portfolio}
              cashAvailable={portfolio.cashMarketValue}
              setGridApis={apis => {
                setGridApi(apis.gridApi);
                setColumnApi(apis.columnApi);
              }}
            />
          </Row>
          <Row>
            <PortfolioFootNote />
          </Row>
        </PortfolioSection>
      </InpaasPositions>
      <EditModal
        isOpen={hash === "#edit-positions" || hash === "#edit-goals"}
        onClose={() => history.push(pathname)}
        portfolio={portfolio}
      />
    </>
  );
}

export default InpaasPortfolio;
