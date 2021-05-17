import React, { useState } from "react";
import ModalBase from "containers/Portfolios/PortfolioDisplay/Modals/ModalBase";
import { Analysis } from "@bondhouse/rover-portfolio-analyzer";
import { Container, Row, Col } from "react-bootstrap";
import { ReactComponent as PdfIcon } from "assets/svg/pdf.svg";
import { ToolTipContent } from "assets/content";
import calculateWeightedAverageSpread from "util/calculateWeightedAverageSpread";
import exportDataAsCsv from "util/exportDataAsCsv";
import { BestFitReviewData, AgGridApis } from "recoil-state/bestFit";
import PortfolioHeader from "containers/Portfolios/PortfolioDisplay/PortfolioHeader/PortfolioHeader";
import PositionGridAll from "../../Portfolios/PortfolioDisplay/PositionGrid/PositionGridAll";
import PortfolioFootNote from "../../Portfolios/PortfolioDisplay/PortfolioFootNote/PortfolioFootNote";
import PortfolioSection from "../../Portfolios/PortfolioDisplay/PortfolioSection/PortfolioSection";
import PositionGridNextOptions from "../../Portfolios/PortfolioDisplay/PositionGrid/PositionGridNextOptions";
import { AnalyticsCharts } from "./AnalyticsCharts/AnalyticsCharts";
import PortfolioAnalysis from "./PortfolioSummary/PortfolioAnalysis/PortfolioAnalysis";
import PreferencesSummary from "./PortfolioSummary/Preferences/Preferences";
import PDFContainer, { ExportOptions } from "./PDFContainer";
import CashflowChart from "./CashflowChart/CashflowChart";
import { BestFitPositions } from "./BestFitReview.styles";

type Props = {
  reviewData: BestFitReviewData;
  onEditPositions: () => void;
  analysis: Analysis;
};

export default function BestFitReview({
  reviewData,
  onEditPositions,
  analysis
}: Props) {
  const { portfolio, preferences, additionalAssets, cashflows } = reviewData;
  const [exporting, setExporting] = useState(false);
  const [showModal, setShowExportModal] = useState(false);
  const [{ columnApi, gridApi }, setGridApis] = useState<Partial<AgGridApis>>(
    {}
  );
  const was = Math.round(calculateWeightedAverageSpread(portfolio));
  return (
    <PDFContainer
      portfolio={portfolio}
      exporting={exporting}
      setExporting={setExporting}
    >
      <Container>
        {exporting && <PortfolioHeader isReview portfolio={portfolio} />}
        <PortfolioSection title="Summary">
          <PortfolioAnalysis
            analysis={analysis}
            averageSpread={was}
            timeMetricPreference={preferences.timeMetric}
          />
          <Row>
            <Col xs>
              <PreferencesSummary />
            </Col>
          </Row>
        </PortfolioSection>
        <AnalyticsCharts
          portfolio={portfolio}
          netAssetValue={analysis.netAssetValue}
          wealthProjections={analysis.wealthProjections}
          esgScores={analysis.esgScores}
        />
        <CashflowChart cashflows={cashflows} />
        <div className="break-page" />
      </Container>

      <div style={{ maxWidth: "145vw" }}>
        <BestFitPositions>
          <PortfolioSection
            title="Positions"
            tooltipContent={ToolTipContent.Positions.Default}
            onExportClick={() => setShowExportModal(true)}
            onEditPositions={onEditPositions}
          >
            <Row>
              <PositionGridAll
                sleeve="bonds"
                portfolio={portfolio}
                cashAvailable={portfolio.cashMarketValue}
                setGridApis={apis => setGridApis(apis)}
              />
            </Row>
          </PortfolioSection>
        </BestFitPositions>
        <PortfolioSection
          title="Next 10 options for trade"
          tooltipContent={ToolTipContent.Positions.Next10}
        >
          <Row>
            <PositionGridNextOptions assets={additionalAssets.slice(-10)} />
          </Row>
          <Row>
            <PortfolioFootNote />
          </Row>
        </PortfolioSection>
        <ModalBase show={showModal} onHide={() => setShowExportModal(false)}>
          <ExportOptions>
            <section
              style={{ display: "flex", justifyContent: "space-between" }}
            >
              <button
                type="button"
                onClick={() => exportDataAsCsv(gridApi, columnApi)}
              >
                <i>
                  <PdfIcon />
                </i>
                <h4>CSV</h4>
                <p>
                  Structured data file with the portfolio positions for external
                  usage
                </p>
              </button>

              <button type="button" onClick={() => setExporting(true)}>
                <i>
                  <PdfIcon />
                </i>
                <h4>PDF</h4>
                <p>Full portfolio with the positions and YieldX analytics</p>
              </button>
            </section>
          </ExportOptions>
        </ModalBase>
      </div>
    </PDFContainer>
  );
}
