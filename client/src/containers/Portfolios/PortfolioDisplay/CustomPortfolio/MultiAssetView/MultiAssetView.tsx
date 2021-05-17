import React, { useState } from "react";
import { Container, Row } from "react-bootstrap";
import { useRecoilValue } from "recoil";
import { ColumnApi, GridApi } from "@ag-grid-community/core";
import { ToolTipContent } from "assets/content";
import YieldXPortfolio from "models/YieldXPortfolio";
import getYield from "util/getYield";
import exportDataAsCsv from "util/exportDataAsCsv";
import { getPositionData } from "recoil-state/getPositionData";
import { analyzeSleeve } from "recoil-state/portfoliosApi";
import calculatePortfolioAllocation from "containers/Portfolios/PortfolioDisplay/CustomPortfolio/MultiAssetView/calculatePortfolioAllocation";
import CustomPortfolioSummary from "../CustomPortfolioSummary/CustomPortfolioSummary";
import PortfolioSection from "../../PortfolioSection/PortfolioSection";
import PortfolioGrowthChart from "../../PortfolioGrowthChart/PortfolioGrowthChart";
import PositionGridAll from "../../PositionGrid/PositionGridAll";
import PortfolioFootNote from "../../PortfolioFootNote/PortfolioFootNote";

interface Props {
  version?: "CURRENT" | "ORIGINAL";
  portfolio: YieldXPortfolio;
  editPositions: () => void;
}

export default function MultiAssetView({
  version,
  portfolio,
  editPositions
}: Props) {
  const analysis = useRecoilValue(
    analyzeSleeve({ drawDown: true, posData: getPositionData(portfolio) })
  );
  const { netAssetValue, wealthProjections, estimatedPerformance } = analysis;
  const risk = analysis?.risk ?? 0;
  const maxDrawdown = estimatedPerformance
    ? estimatedPerformance.estimatedMaximumDrawdown.value * 100
    : 0;
  const [gridApi, setGridApi] = useState<GridApi>();
  const [columnApi, setColumnApi] = useState<ColumnApi>();
  const annualYield = getYield(analysis) ?? 0;
  const { bondAllocation, fundAllocation } = calculatePortfolioAllocation(
    portfolio
  );

  const portfolioSummaryProps = {
    annualYield,
    bondAllocation,
    fundAllocation,
    maxDrawdown,
    risk
  };

  return (
    <>
      <CustomPortfolioSummary version={version} {...portfolioSummaryProps} />
      <PortfolioSection title="Analytics">
        <Row>
          {wealthProjections && netAssetValue && (
            <PortfolioGrowthChart
              nav={netAssetValue}
              wealthProjections={wealthProjections}
              tooltipContent={ToolTipContent.PortfolioGrowth}
            />
          )}
        </Row>
      </PortfolioSection>
      <PortfolioSection
        title="Positions"
        tooltipContent={ToolTipContent.Positions.Default}
        exportPositions={() => exportDataAsCsv(gridApi, columnApi)}
        onEditPositions={editPositions}
      >
        <Container fluid>
          <Row>
            <PositionGridAll
              sleeve="all"
              cashAvailable={portfolio.cashMarketValue}
              portfolio={portfolio}
              setColumnApi={setColumnApi}
              setGridApi={setGridApi}
            />
          </Row>
          <Row>
            <PortfolioFootNote />
          </Row>
        </Container>
      </PortfolioSection>
    </>
  );
}
