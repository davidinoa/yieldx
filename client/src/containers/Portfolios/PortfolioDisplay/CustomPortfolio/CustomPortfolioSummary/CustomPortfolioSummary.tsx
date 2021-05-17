import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import { Card } from "elements/Card/Card";
import Decimal from "util/Decimal";
import { ToolTipContent } from "assets/content";
import { CardValue } from "elements/Card/Card.styles";
import PortfolioSection from "../../PortfolioSection/PortfolioSection";
import { PortfolioWidget } from "../../PortfolioDisplay.styles";
import RiskCard from "../../RiskCard/RiskCard";

type Props = {
  version?: "CURRENT" | "ORIGINAL";
  annualYield: number;
  bondAllocation: number;
  fundAllocation: number;
  risk: number;
  maxDrawdown: number;
};
export default function CustomPortfolioSummary({
  version,
  annualYield,
  bondAllocation,
  fundAllocation,
  risk,
  maxDrawdown
}: Props) {
  return (
    <PortfolioSection title="Summary" version={version}>
      <Container fluid>
        <Row>
          <Col xs={6}>
            <PortfolioWidget>
              <Row>
                <Card title="Yield" tooltipContent={ToolTipContent.Yield}>
                  <CardValue>
                    {annualYield && (
                      <>
                        {Decimal.format(annualYield)}
                        <sup>%</sup>
                      </>
                    )}
                  </CardValue>
                </Card>
              </Row>
            </PortfolioWidget>
          </Col>
          <Col xs={6}>
            <PortfolioWidget>
              <Row>
                <Card
                  title="Fund Allocation"
                  tooltipContent={ToolTipContent.FundAllocation}
                >
                  <CardValue>
                    {Decimal.format(fundAllocation)}
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
                  title="Bond Allocation"
                  tooltipContent={ToolTipContent.BondAllocation}
                >
                  <CardValue>
                    {Decimal.format(bondAllocation)}
                    <sup>%</sup>
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
      </Container>
    </PortfolioSection>
  );
}
