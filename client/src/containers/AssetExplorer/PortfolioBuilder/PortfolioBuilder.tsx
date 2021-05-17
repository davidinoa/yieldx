import { Col, Row } from "react-bootstrap";
import { formatNumber } from "util/formatNumber";
import { ReactComponent as CloseIcon } from "assets/svg/cross.svg";
import { ReactComponent as Export } from "assets/svg/export.svg";
import { Redirect } from "react-router-dom";
import AppBottomNav from "elements/AppBottomNav/AppBottomNav";
import clsx from "clsx";
import debounce from "util/debounce";
import ErrorAlert from "elements/Alert/ErrorAlert";
import exportDataAsCsv from "util/exportDataAsCsv";
import getLiveAssets from "util/getLiveAssets";
import NumberInput from "react-number-format";
import React, { Dispatch, SetStateAction } from "react";
import Tooltip from "elements/Tooltip/Tooltip";
import YieldXPortfolio from "models/YieldXPortfolio";
import InvestmentModal from "../Search/InvestmentModal/InvestmentModal";
import PositionsGrid from "./PositionsGrid/PositionsGrid";
import {
  calculateMinimumInvestmentToBuyAll,
  calculateMinimumInvestmentToUseOptimizer,
  meetsMinimumInvestmentToUseOptimizer
} from "./util/minimumInvestment";
import AnalyticsSummary from "./components/AnalyticsSummary";
import OptimizationOptionCard from "./components/OptimizationOptionCard";
import {
  ControlPanel,
  ControlPanelItem,
  ExportButton,
  OptionsMenu,
  PortfolioBuilderContainer,
  PortfolioBuilderGridWrapper
} from "./PortfolioBuilder.styles";
import { Input } from "../../Investors/InvestorForms/elements/TextInput/TextInput.styles";
import { emptyAnalysis, usePortfolioBuilder } from "./usePortfolioBuilder";

interface Props {
  portfolio: YieldXPortfolio;
  setPortfolio: Dispatch<SetStateAction<YieldXPortfolio | undefined>>;
}

export function currencyFormatter(value: string) {
  if (!Number(value)) return "";
  const amount = new Intl.NumberFormat("en-US", {
    minimumFractionDigits: 2,
    maximumFractionDigits: 2
  }).format(parseFloat(value) / 100);
  return `${amount}`;
}

export default function PortfolioBuilder({ portfolio, setPortfolio }: Props) {
  const {
    history,
    analysis,
    setColumnApi,
    setShowOptions,
    showOptions,
    handleOptimizationSelection,
    setGridApi,
    setAnalysis,
    optimizing,
    columnApi,
    validated,
    errorMessage,
    gridApi,
    originalPortfolio,
    search,
    pathname,
    setInvestmentAmount,
    investmentAmount
  } = usePortfolioBuilder(portfolio, setPortfolio);
  const [isSubmitting, setSubmitting] = React.useState(false);
  if (pathname.includes("edit") && search == null)
    return <Redirect to="/asset-explorer/portfolio-builder" />;
  const minimumInvestmentToBuyAll = calculateMinimumInvestmentToBuyAll(
    portfolio
  );
  const minimumInvestmentToUseOptimizer = calculateMinimumInvestmentToUseOptimizer(
    portfolio
  );

  const allowOptimization = meetsMinimumInvestmentToUseOptimizer(portfolio);
  return (
    <>
      <PortfolioBuilderContainer fluid>
        <Row>
          <PortfolioBuilderGridWrapper>
            <Row>
              <PositionsGrid
                setPortfolio={setPortfolio}
                portfolio={portfolio}
                setColumnApi={setColumnApi}
                setGridApi={setGridApi}
                onChange={debounce(e => {
                  setPortfolio(prev => {
                    if (prev && e) {
                      const copy = prev.clone();
                      const ind = copy.positions.findIndex(
                        it => it.assetId === e.node.id
                      );
                      const diff =
                        copy.positions[ind].marketValue - e.data.marketValue;
                      copy.positions[ind].weight = e.data.weight;
                      copy.positions[ind].marketValue = e.data.marketValue;
                      copy.positions[ind].quantity = e.data.quantity;
                      copy.cashMarketValue += diff;
                      copy.refreshWeights();
                      return copy;
                    }
                    return prev;
                  });
                  setAnalysis(undefined);
                }, 100)}
              />
            </Row>
          </PortfolioBuilderGridWrapper>
          <ControlPanel>
            <ControlPanelItem>
              <Row>
                <Col>
                  <h3>Investment amount</h3>
                </Col>
              </Row>
              <Row>
                <Col className="investment-amount">
                  <NumberInput
                    name="investment-input"
                    thousandSeparator
                    fixedDecimalScale
                    allowNegative={false}
                    prefix="$"
                    decimalScale={2}
                    value={(investmentAmount ?? 0) * 100}
                    isNumericString
                    format={currencyFormatter}
                    customInput={Input}
                    onBlur={() => {
                      if (!validated) {
                        setAnalysis(emptyAnalysis);
                      } else if (
                        portfolio.cashMarketValue !== portfolio.totalMarketValue
                      ) {
                        setAnalysis(undefined);
                      }
                    }}
                    onValueChange={({ floatValue }) =>
                      setInvestmentAmount((floatValue ?? 0) / 100)
                    }
                    className={clsx({ validated, error: !validated })}
                  />
                  <div className="minimum-investment">
                    To buy all:
                    <b>
                      {formatNumber(minimumInvestmentToBuyAll, { prefix: "$" })}
                    </b>
                    <Tooltip content="Minimum investment to purchase all assets that you have in the list" />
                  </div>
                  <div className="minimum-investment">
                    To optimize:
                    <b>
                      {formatNumber(minimumInvestmentToUseOptimizer, {
                        prefix: "$"
                      })}
                    </b>
                    <Tooltip content="Minimum investment to use optimizer" />
                  </div>
                </Col>
              </Row>
            </ControlPanelItem>
            <ControlPanelItem>
              <Row>
                <AnalyticsSummary analysis={analysis} />
              </Row>
            </ControlPanelItem>
            <Row>
              <ControlPanelItem className="optimization-options">
                <Row>
                  <Col>
                    <h4>auto-optimize&trade;</h4>
                    <h3>Optimize your assets with the click of a button</h3>
                    <p>Skip manual editing and get started fast</p>
                    <button
                      type="button"
                      className="explore-options"
                      data-testid="PortfolioBuilder-AutoOptimizeButton"
                      disabled={!allowOptimization}
                      onClick={() => {
                        setShowOptions(!showOptions);
                      }}
                    >
                      Explore options
                    </button>
                    {!allowOptimization && (
                      <div className="small-alert">
                        You must meet the minimum investment amount for the
                        optimizer (
                        <b>
                          {formatNumber(minimumInvestmentToUseOptimizer, {
                            prefix: "$"
                          })}
                        </b>
                        ) to be able to optimize the portfolio
                      </div>
                    )}
                  </Col>
                </Row>
              </ControlPanelItem>
            </Row>
          </ControlPanel>

          {portfolio.totalMarketValue !== 0 && (
            <OptionsMenu className={clsx({ opened: showOptions })}>
              <i className="close-icon" style={{ cursor: "pointer" }}>
                <CloseIcon
                  data-testid="optimization-close"
                  onClick={() => setShowOptions(false)}
                  style={{ marginLeft: "auto", display: "block" }}
                />
              </i>
              <h3>Select an option</h3>
              <OptimizationOptionCard
                heading="Balance weights"
                description="Auto allocate your assets in the most balanced way."
                buttonText="Balance weights"
                portfolio={portfolio}
                disabled={!allowOptimization || optimizing}
                data-testid="PortfolioBuilder-OptimizationOptionCard-BalanceWeights"
                onClick={() =>
                  handleOptimizationSelection("minimizeConcentration", {
                    min: 0.0001,
                    max: 1
                  })
                }
                disableAllocation
              />
              <OptimizationOptionCard
                heading="Maximize yield"
                description="Auto allocate your assets focused on yield. "
                buttonText="Maximize yield"
                portfolio={portfolio}
                disabled={!allowOptimization || optimizing}
                data-testid="PortfolioBuilder-OptimizationOptionCard-MaximizeYield"
                onClick={e => {
                  const [min, max] = e.weightRange;
                  handleOptimizationSelection("maximizeYield", {
                    min: min / 100,
                    max: max / 100
                  });
                }}
              />
              <OptimizationOptionCard
                heading="Minimize risk"
                description="Auto allocate your assets in the less riskier way."
                buttonText="Minimize risk"
                portfolio={portfolio}
                disabled={!allowOptimization || optimizing}
                data-testid="PortfolioBuilder-OptimizationOptionCard-MinimizeRisk"
                onClick={e => {
                  const [min, max] = e.weightRange;
                  handleOptimizationSelection("minimizeRisk", {
                    min: min / 100,
                    max: max / 100
                  });
                }}
              />
            </OptionsMenu>
          )}
        </Row>

        <AppBottomNav
          blockNext={
            isSubmitting ||
            (originalPortfolio && originalPortfolio.isEqualTo(portfolio)) ||
            portfolio.cashMarketValue < 0 ||
            portfolio.totalMarketValue === 0 ||
            portfolio.isEmpty() ||
            !analysis ||
            // eslint-disable-next-line @typescript-eslint/ban-ts-comment
            // @ts-ignore
            (analysis?.yield === 0 && analysis?.risk === 0)
          }
          onPrevious={() =>
            originalPortfolio !== null && search != null
              ? history.push({
                  pathname: "/asset-explorer/search/edit",
                  search
                })
              : history.push("/asset-explorer/search")
          }
          onNext={async () => {
            if (portfolio != null) {
              const copy = portfolio.clone();
              copy.clearEmptyPositions();
              try {
                setSubmitting(true);
                const liveAssets = await getLiveAssets({
                  positions: copy.positions
                });
                setPortfolio(
                  new YieldXPortfolio(copy.asPmsPortfolio(), liveAssets)
                );
                if (originalPortfolio !== null && search !== null)
                  history.push({
                    pathname: "/asset-explorer/portfolio-review/edit",
                    search
                  });
                else history.push("/asset-explorer/portfolio-review");
              } catch (e) {
                setSubmitting(false);
              }
            }
          }}
          previousLabel="Add more assets"
          secondaryButton={
            <ExportButton
              data-testid="PortfolioBuilder-ExportButton"
              onClick={() => exportDataAsCsv(gridApi, columnApi)}
            >
              Export <Export />
            </ExportButton>
          }
        />
        {errorMessage != null && (
          <ErrorAlert message={errorMessage} bottomNav />
        )}
      </PortfolioBuilderContainer>
      <InvestmentModal
        onHide={() => history.push("/asset-explorer/search")}
        show={
          portfolio.totalMarketValue === 0 && portfolio.cashMarketValue === 0
        }
        portfolio={portfolio}
        onSubmitInvestment={values => setInvestmentAmount(values.amount)}
      />
    </>
  );
}
