import React, { useState } from "react";
import { Col, Row } from "react-bootstrap";
import { ColumnApi, GridApi } from "@ag-grid-community/core";
import { useRecoilValue } from "recoil";
import { Card } from "elements/Card/Card";
import Decimal from "util/Decimal";
import { CardValue } from "elements/Card/Card.styles";
import { Spinner } from "elements/Spinner/Spinner";
import { ToolTipContent } from "assets/content";
import YieldXPortfolio from "models/YieldXPortfolio";
import exportDataAsCsv from "util/exportDataAsCsv";
import { getPositionData } from "recoil-state/getPositionData";
import { analyzeSleeve } from "recoil-state/portfoliosApi";
import PositionGridAll from "containers/Portfolios/PortfolioDisplay/PositionGrid/PositionGridAll";
import PortfolioSection from "containers/Portfolios/PortfolioDisplay/PortfolioSection/PortfolioSection";
import { PortfolioWidget } from "containers/Portfolios/PortfolioDisplay/PortfolioDisplay.styles";
import PortfolioFootNote from "containers/Portfolios/PortfolioDisplay/PortfolioFootNote/PortfolioFootNote";
import RiskCard from "containers/Portfolios/PortfolioDisplay/RiskCard/RiskCard";
import PortfolioGrowthChart from "containers/Portfolios/PortfolioDisplay/PortfolioGrowthChart/PortfolioGrowthChart";
import YieldContribution from "containers/Portfolios/PortfolioDisplay/Charts/YieldContribution/YieldContribution";
import SectorAllocation from "containers/Portfolios/PortfolioDisplay/Charts/SectorAllocation/SectorAllocation";
import { calculateYieldContributions } from "util/calculateYieldContributions";
import { FundPositions } from "../CustomPortfolio.styles";

interface Props {
  portfolio: YieldXPortfolio;
  version?: "CURRENT" | "ORIGINAL";
  editPositions: () => void;
}

function FundsView({ portfolio, version, editPositions }: Props) {
  const analysis = useRecoilValue(
    analyzeSleeve({
      drawDown: true,
      posData: getPositionData(portfolio)
    })
  );

  // @ts-expect-error
  const annual = analysis?.yield || 1;
  const [gridApi, setGridApi] = useState<GridApi>();
  const [columnApi, setColumnApi] = useState<ColumnApi>();
  const risk = analysis?.risk ?? 0;
  const maxDrawdown = analysis?.estimatedPerformance
    ? analysis.estimatedPerformance.estimatedMaximumDrawdown.value * 100
    : 0;
  const contribution = calculateYieldContributions(portfolio.positions, annual);
  return (
    <>
      <PortfolioSection title="Summary" version={version}>
        <Row>
          <Col xs={6}>
            <PortfolioWidget>
              <Row>
                <Card title="Yield" tooltipContent={ToolTipContent.Yield}>
                  <CardValue>
                    {annual ? (
                      <>
                        {Decimal.format(annual)}
                        <sup>%</sup>
                      </>
                    ) : (
                      <Spinner />
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
                  title="Distribution Income"
                  tooltipContent={ToolTipContent.DistributionIncome}
                >
                  <CardValue>
                    {annual ? (
                      <>
                        $
                        {Decimal.format(
                          (annual / 100 / 12) * (analysis.netAssetValue ?? 0)
                        )}
                        <sup>/m</sup>
                      </>
                    ) : (
                      <Spinner />
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
                  title="Expense Ratio"
                  tooltipContent={ToolTipContent.ExpenseRatio}
                >
                  <CardValue>
                    {analysis.expenseRatio ? (
                      <>
                        {Decimal.format(analysis.expenseRatio)}
                        <sup>%</sup>
                      </>
                    ) : (
                      <Spinner />
                    )}
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
      </PortfolioSection>

      <PortfolioSection title="Analytics">
        <Row>
          <Col xs={12}>
            <SectorAllocation
              type="funds"
              positions={portfolio.positions}
              totalMarketValue={portfolio.totalMarketValue}
              cashMarketValue={portfolio.cashMarketValue}
              tooltipContent={ToolTipContent.SectorAllocation}
            />
          </Col>
          <Col xs={12}>
            <YieldContribution
              contribution={contribution}
              tooltipContent={ToolTipContent.YieldContribution.Funds}
            />
          </Col>
        </Row>
      </PortfolioSection>
      {analysis.wealthProjections && analysis.netAssetValue && (
        <PortfolioGrowthChart
          nav={analysis.netAssetValue}
          wealthProjections={analysis.wealthProjections}
          tooltipContent={ToolTipContent.PortfolioGrowth}
        />
      )}
      <FundPositions>
        <PortfolioSection
          title="Positions"
          exportPositions={() => exportDataAsCsv(gridApi, columnApi)}
          tooltipContent={ToolTipContent.Positions.Default}
          onEditPositions={editPositions}
        >
          <Row>
            <PositionGridAll
              sleeve="funds"
              cashAvailable={portfolio.cashMarketValue}
              portfolio={portfolio}
              setColumnApi={setColumnApi}
              setGridApi={setGridApi}
            />
          </Row>
          <Row>
            <PortfolioFootNote />
          </Row>
        </PortfolioSection>
      </FundPositions>
    </>
  );
}

export default FundsView;
