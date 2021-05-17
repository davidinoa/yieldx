import React, { useState } from "react";
import { Row, Col } from "react-bootstrap";
import { Analysis } from "@bondhouse/rover-portfolio-analyzer";
import { Card } from "elements/Card/Card";
import { ToolTipContent } from "assets/content";
import { CardValue } from "elements/Card/Card.styles";
import { formatNumber } from "util/formatNumber";
import getYield from "util/getYield";
import Decimal from "util/Decimal";
import { PortfolioWidget } from "containers/Portfolios/PortfolioDisplay/PortfolioDisplay.styles";
import RiskCard from "containers/Portfolios/PortfolioDisplay/RiskCard/RiskCard";

export default function PortfolioAnalysis({
  analysis,
  averageSpread,
  timeMetricPreference = "maturity"
}: {
  analysis: Analysis;
  averageSpread: number;
  timeMetricPreference?: "duration" | "maturity";
}) {
  const [showDuration, setShowDuration] = useState(
    timeMetricPreference === "duration"
  );
  const {
    estimatedPerformance,
    risk = 0,
    duration = 0,
    yearsToMaturity = 0
  } = analysis;

  const maxDrawdown = estimatedPerformance
    ? estimatedPerformance.estimatedMaximumDrawdown.value * 100
    : 0;
  return (
    <Row>
      <Col xs={6}>
        <PortfolioWidget>
          <Row>
            <Card title="Yield" tooltipContent={ToolTipContent.Yield}>
              <CardValue>
                {formatNumber(getYield(analysis) ?? 0)}
                <sup>%</sup>
              </CardValue>
            </Card>
          </Row>
        </PortfolioWidget>
      </Col>
      <Col xs={6}>
        <PortfolioWidget>
          <Row>
            <Card
              title={showDuration ? "Duration" : "Maturity"}
              tooltipContent={
                showDuration ? ToolTipContent.Duration : ToolTipContent.Maturity
              }
            >
              <CardValue>
                <button
                  type="button"
                  className="toggle-link hidden-pdf"
                  onClick={() => setShowDuration(!showDuration)}
                >
                  {showDuration ? "Maturity" : "Duration"}
                </button>
                {Decimal.format(showDuration ? duration : yearsToMaturity)}
              </CardValue>
            </Card>
          </Row>
        </PortfolioWidget>
      </Col>
      <Col xs={6}>
        <PortfolioWidget>
          <Row>
            <Card title="Spread" tooltipContent={ToolTipContent.Spread}>
              <CardValue>
                {averageSpread.toFixed(0)}
                <sup>bps</sup>
              </CardValue>
            </Card>
          </Row>
        </PortfolioWidget>
      </Col>
      <Col xs={6}>
        <PortfolioWidget>
          <Row>
            <RiskCard risk={risk} maxDrawdown={maxDrawdown} />
          </Row>
        </PortfolioWidget>
      </Col>
    </Row>
  );
}
