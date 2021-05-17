import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import { WealthProjection } from "@bondhouse/rover-portfolio-analyzer";
import RatingsAllocation from "containers/Portfolios/PortfolioDisplay/Charts/RatingsAllocation/RatingsAllocation";
import SectorAllocation from "containers/Portfolios/PortfolioDisplay/Charts/SectorAllocation/SectorAllocation";
import { EsgScores } from "containers/Portfolios/PortfolioDisplay/EsgScores/EsgScores";
import { EsgScoresInput } from "providers/graphql/hooks";
import { ToolTipContent } from "assets/content";
import PortfolioSection from "containers/Portfolios/PortfolioDisplay/PortfolioSection/PortfolioSection";
import YieldXPortfolio from "models/YieldXPortfolio";
import { getBondRatingsData } from "../utils";

type Props = {
  portfolio: YieldXPortfolio;
  netAssetValue?: number;
  wealthProjections?: Array<WealthProjection>;
  esgScores?: EsgScoresInput;
};

export function AnalyticsCharts({ portfolio, esgScores }: Props) {
  return (
    <PortfolioSection title="Analytics">
      <Container fluid className="keep-together">
        <Row>
          <Col xs={12}>
            <SectorAllocation
              type="bonds"
              positions={portfolio.positions}
              totalMarketValue={portfolio.totalMarketValue}
              cashMarketValue={portfolio.cashMarketValue}
              tooltipContent={ToolTipContent.SectorAllocation}
            />
          </Col>
          <Col xs={12}>
            <EsgScores
              total={esgScores?.total ?? 0}
              environmental={esgScores?.environmental ?? 0}
              social={esgScores?.social ?? 0}
              governance={esgScores?.governance ?? 0}
              tooltipContent={ToolTipContent.EsgScore}
            />
          </Col>
          <Col xs={24}>
            <RatingsAllocation
              data={getBondRatingsData(portfolio)}
              tooltipContent={ToolTipContent.Ratings}
            />
          </Col>
        </Row>
      </Container>
    </PortfolioSection>
  );
}
