import React from "react";
import { Container, Row } from "react-bootstrap";
import { PortfolioStatus } from "@bondhouse/rover-portfolio-analyzer";
import AnalyticsFallback from "../AnalyticsFallback";
import YieldXPortfolio from "../../../../models/YieldXPortfolio";
import PositionGridAll from "../PositionGrid/PositionGridAll";
import PortfolioSection from "../PortfolioSection/PortfolioSection";

interface Props {
  portfolio: YieldXPortfolio;
  updating?: boolean;
}

export default function ExecutingPortfolio({ portfolio, updating }: Props) {
  return (
    <Container fluid>
      <Row>
        <PortfolioSection title="Analytics">
          <AnalyticsFallback
            updating={updating}
            // TODO: Remove this redundant uppercase check once enum casing issue is resolved
            terminated={
              portfolio.getStatus() === PortfolioStatus.TERMINATED ||
              portfolio.getStatus().toString() === "TERMINATED"
            }
          />
        </PortfolioSection>
        <PortfolioSection title="Positions">
          <PositionGridAll
            sleeve="all"
            cashAvailable={portfolio.cashMarketValue}
          />
        </PortfolioSection>
      </Row>
    </Container>
  );
}
