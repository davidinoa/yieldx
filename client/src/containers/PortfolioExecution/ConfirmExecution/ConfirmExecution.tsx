import React, { useCallback } from "react";
import { Col, Row } from "react-bootstrap";
import { useHistory } from "react-router";
import { PageContainer } from "theme/styles";
import { HeaderWithValue } from "../SelectInvestor/HeaderWithValue/HeaderWithValue";
import BottomNav from "containers/Investors/CreateInvestor/BottomNav/BottomNav";
import ExecutePortfolioModal from "./ExecutePortfolioModal/ExecutePortfolioModal";
import { OrderListContainer } from "components/ExecutionReview/Orders/OrderListContainer";
import { InvestorSummaryCard } from "components/ExecutionReview/ReviewCards/InvestorSummaryCard";
import {
  AppType2,
  Asset5,
  CreateOrderRequestInput,
  Investor,
  PortfolioType,
  Position2
} from "providers/graphql/hooks";
import { ExecutionPreferencesCard } from "components/ExecutionReview/ReviewCards/ExecutionPreferencesCard";

type PortfolioData = {
  portfolioId: string;
  type: PortfolioType;
  positions: Position2[];
  assets: Asset5[];
  portfolioValue: number;
  app: AppType2;
};

interface Props {
  selectedInvestor: Investor;
  ordersToRaise: (CreateOrderRequestInput & { metadata: { yield: number } })[];
  originalPortfolioData?: PortfolioData & { name: string };
  currentPortfolioData: PortfolioData;
  postOrders: (name: string) => void;
  executionPreferences: {
    fullFillRequired: boolean;
    goodTillCancel: boolean;
  };
}

export default function ConfirmExecution({
  selectedInvestor,
  originalPortfolioData,
  currentPortfolioData,
  ordersToRaise,
  postOrders,
  executionPreferences
}: Props) {
  const history = useHistory();
  const [showExecution, setShowExecution] = React.useState(false);
  const { investorInfo, investorType } = selectedInvestor;
  const onSwitchInvestor = useCallback(
    () => history.push("/execute-portfolio/investors"),
    [history]
  );
  const onEditPreferences = useCallback(() => {
    const queryParams = new URLSearchParams();
    const portfolioType = originalPortfolioData?.type;
    if (originalPortfolioData && portfolioType !== undefined) {
      queryParams.append("portfolioId", originalPortfolioData.portfolioId);
      queryParams.append("portfolioType", portfolioType);
    }
    return history.push({
      pathname: `/execute-portfolio/preferences`,
      search: queryParams.toString()
    });
  }, [history, originalPortfolioData]);
  const investorFullName = `${investorInfo.givenName} ${investorInfo.familyName}`;
  const allAssets = currentPortfolioData.assets.concat(
    originalPortfolioData?.assets || []
  );
  const onEdit = useCallback(() => {
    history.push({
      pathname: `/asset-explorer/portfolio-builder/edit`,
      search: originalPortfolioData
        ? `?portfolioId=${
            originalPortfolioData.portfolioId
          }&portfolioType=${originalPortfolioData.type.toLowerCase()}`
        : undefined
    });
  }, [history, originalPortfolioData]);
  return (
    <>
      <ExecutePortfolioModal
        onHide={() => setShowExecution(false)}
        isOpen={showExecution}
        originalPortfolioData={{
          isLivePortfolio: originalPortfolioData?.type === "LIVE",
          name: originalPortfolioData?.name || ""
        }}
        postOrders={postOrders}
      />
      <PageContainer>
        <HeaderWithValue
          title="Review your execution preferences"
          subtitle="EXECUTE PORTFOLIO"
          value={currentPortfolioData.portfolioValue}
        />
        <Row>
          <Col>
            <InvestorSummaryCard
              investorType={investorType}
              fullName={investorFullName}
              onSwitchInvestor={onSwitchInvestor}
            />
          </Col>
          <Col>
            <ExecutionPreferencesCard
              executionPreferences={executionPreferences}
              onEditPreferences={onEditPreferences}
            />
          </Col>
        </Row>

        <div className="separator mt-5 mb-5" />

        <Row className="justify-content-between pt-2 mb-2">
          <h2>Orders to create</h2>
          {currentPortfolioData.app === AppType2.Custom && (
            <button
              type="button"
              data-testid="edit-portfolio-button"
              className="edit-portfolio-button"
              onClick={onEdit}
            >
              Edit portfolio
            </button>
          )}
        </Row>
        <OrderListContainer
          allAssets={allAssets}
          ordersToRaise={ordersToRaise}
        />
        <BottomNav
          onNext={() => {
            setShowExecution(true);
          }}
          nextLabel={
            originalPortfolioData ? "Execute Changes" : "Execute Portfolio"
          }
          onPrevious={() => history.goBack()}
        />
      </PageContainer>
    </>
  );
}
