import React, { useState, useEffect } from "react";
import { Col, Container, Row } from "react-bootstrap";
import { ColumnApi, GridApi } from "@ag-grid-community/core";
import {
  CashFlow,
  PortfolioAnalyzerApi
} from "@bondhouse/rover-portfolio-analyzer";
import { useRecoilValue } from "recoil";
import calculateWeightedAverageSpread from "util/calculateWeightedAverageSpread";
import { ToolTipContent } from "assets/content";
import YieldXPortfolio from "models/YieldXPortfolio";
import exportDataAsCsv from "util/exportDataAsCsv";
import { getPositionData } from "recoil-state/getPositionData";
import { analyzeSleeve } from "recoil-state/portfoliosApi";
import CashflowChart from "containers/BestFit/BestFitReview/CashflowChart/CashflowChart";
import PositionGridAll from "../../PositionGrid/PositionGridAll";
import PortfolioSection from "../../PortfolioSection/PortfolioSection";
import SectorAllocation from "../../Charts/SectorAllocation/SectorAllocation";
import RatingsChart from "../../Charts/RatingsAllocation/RatingsAllocation";
import PortfolioFootNote from "../../PortfolioFootNote/PortfolioFootNote";
import { getBondRatingsData } from "../../../../BestFit/BestFitReview/utils";
import PortfolioAnalysis from "../../../../BestFit/BestFitReview/PortfolioSummary/PortfolioAnalysis/PortfolioAnalysis";

export default function BondsView({
  version,
  portfolio,
  editPositions
}: Props) {
  const averageSpread = calculateWeightedAverageSpread(portfolio);
  const ratingsData = getBondRatingsData(portfolio);
  const [gridApi, setGridApi] = useState<GridApi>();
  const [columnApi, setColumnApi] = useState<ColumnApi>();
  const [cashFlows, setCashFlows] = useState<CashFlow[] | undefined>();

  useEffect(() => {
    const api = new PortfolioAnalyzerApi();
    api
      .projectCashFlows({ portfolio: portfolio.asPmsPortfolio() })
      .then(response => {
        setCashFlows(response.data.cashFlows);
      });
  }, [portfolio]);

  const analysis = useRecoilValue(
    analyzeSleeve({ drawDown: true, posData: getPositionData(portfolio) })
  );
  return (
    <>
      <PortfolioSection title="Summary" version={version}>
        <Container fluid>
          <PortfolioAnalysis
            analysis={analysis}
            averageSpread={averageSpread}
          />
        </Container>
      </PortfolioSection>

      <PortfolioSection title="Analytics">
        <Row>
          <Col xs={12} className="analytics-card-container">
            <SectorAllocation
              type="bonds"
              positions={portfolio.positions}
              cashMarketValue={portfolio.cashMarketValue}
              totalMarketValue={portfolio.totalMarketValue}
              tooltipContent={ToolTipContent.SectorAllocation}
            />
          </Col>
          <Col
            xs={12}
            className="analytics-card-container"
            style={{ marginTop: 0 }}
          >
            {ratingsData && (
              <RatingsChart
                data={ratingsData}
                tooltipContent={ToolTipContent.Ratings}
              />
            )}
          </Col>
        </Row>
        <Row>{cashFlows && <CashflowChart cashflows={cashFlows} />}</Row>
      </PortfolioSection>

      <PortfolioSection
        title="Positions"
        onEditPositions={editPositions}
        tooltipContent={ToolTipContent.Positions.Default}
        exportPositions={() => exportDataAsCsv(gridApi, columnApi)}
      >
        <Container fluid>
          <Row>
            <PositionGridAll
              sleeve="bonds"
              setColumnApi={setColumnApi}
              setGridApi={setGridApi}
              portfolio={portfolio}
              cashAvailable={portfolio.cashMarketValue}
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

type Props = {
  portfolio: YieldXPortfolio;
  version?: "CURRENT" | "ORIGINAL";
  editPositions: () => void;
};
