import React, { useState } from "react";
import { Container, Row } from "react-bootstrap";
import { ColumnApi, GridApi } from "@ag-grid-community/core";
import { useRecoilValue } from "recoil";
import { useHistory, useLocation } from "react-router-dom";
import PortfolioFootNote from "containers/Portfolios/PortfolioDisplay/PortfolioFootNote/PortfolioFootNote";
import PortfolioSection from "containers/Portfolios/PortfolioDisplay/PortfolioSection/PortfolioSection";
import { ToolTipContent } from "assets/content";
import YieldXPortfolio from "models/YieldXPortfolio";
import exportDataAsCsv from "util/exportDataAsCsv";
import { analyzeSleeve } from "recoil-state/portfoliosApi";
import EditModal from "containers/BestFit/BestFitReview/EditModal/EditModal";
import PositionGridAll from "containers/Portfolios/PortfolioDisplay/PositionGrid/PositionGridAll";
import getPortfolioAllocation from "util/getPortfolioAllocation";
import PortfolioGrowthChart from "containers/Portfolios/PortfolioDisplay/PortfolioGrowthChart/PortfolioGrowthChart";
import InpaasSummary from "./InpaasSummary/InpaasSummary";
import InpaasAnalytics from "../../../components/InpaasAnalytics/InpaasAnalytics";
import { InpaasPositions } from "./InpaasReview.styles";

interface Props {
  portfolio: YieldXPortfolio;
  version?: "CURRENT" | "ORIGINAL";
}

function InpaasReview({ portfolio, version }: Props) {
  const { hash, pathname } = useLocation();
  const history = useHistory();
  const [gridApi, setGridApi] = useState<GridApi>();
  const [columnApi, setColumnApi] = useState<ColumnApi>();

  const { wealthProjections } = useRecoilValue(
    analyzeSleeve({
      drawDown: true,
      posData: portfolio.asPmsPortfolio().positions.map(cv => ({
        id: cv.id,
        assetId: cv.assetId,
        quantity: cv.quantity,
        portfolioId: cv.portfolioId
      }))
    })
  );
  if (!wealthProjections) throw Error("Wealth projections missing");
  const { proposal } = portfolio.getInpaasData() || {};
  if (!proposal) throw Error("No proposal found on YieldX Portfolio");
  const { incomePortfoliosAnalysis } = proposal;
  const actualYield =
    (incomePortfoliosAnalysis as { yield?: number })?.yield ?? 1;
  const allocation = getPortfolioAllocation(
    portfolio.positions,
    portfolio.totalMarketValue
  );
  return (
    <>
      <EditModal
        isOpen={hash.includes("#edit")}
        onClose={() => history.push(pathname)}
        portfolio={portfolio}
      />
      <Container fluid>
        <Row>
          <InpaasSummary
            reviewData={{
              risk: incomePortfoliosAnalysis.risk,
              actualIncome: incomePortfoliosAnalysis.income,
              actualYield,
              actualAllocation: allocation,
              maxDrawdown: incomePortfoliosAnalysis.maxDrawdown
            }}
            version={version}
          />
          <InpaasAnalytics
            positions={portfolio.positions}
            annualYield={actualYield}
            totalMarketValue={portfolio.totalMarketValue}
            cashMarketValue={portfolio.cashMarketValue}
            riskComparison={incomePortfoliosAnalysis.comparisons?.find(
              it => it.comparisonType === "Risk"
            )}
            expenseComparison={incomePortfoliosAnalysis.comparisons?.find(
              it => it.comparisonType === "Expense Ratio"
            )}
          />
          <PortfolioGrowthChart
            nav={portfolio.totalMarketValue}
            wealthProjections={wealthProjections}
          />
          <InpaasPositions>
            <PortfolioSection
              title="Positions"
              tooltipContent={ToolTipContent.Positions.Default}
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
        </Row>
      </Container>
    </>
  );
}

export default InpaasReview;
