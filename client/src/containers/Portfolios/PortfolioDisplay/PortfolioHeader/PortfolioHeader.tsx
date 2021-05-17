import * as React from "react";
import { Row } from "react-bootstrap";
import { AppType } from "@bondhouse/position-management";
import YieldXPortfolio from "models/YieldXPortfolio";
// eslint-disable-next-line import/no-cycle
import { usePortfolioHeaderData } from "hooks/usePortfolioHeaderData";
import { Container } from "./PortfolioHeader.styles";
import BackLink from "../../../../elements/BackLink/BackLink";
import PortfolioHeaderInfo from "./PortfolioHeaderInfo/PortfolioHeaderInfo";
import PortfolioHeaderValueBox from "./PortfolioHeaderValueBox/PortfolioHeaderValueBox";
import InvestModal from "../Modals/InvestModal/InvestModal";

interface Props {
  isReview?: boolean;
  portfolio: YieldXPortfolio;
}

export default function PortfolioHeader({ isReview, portfolio }: Props) {
  const {
    investor,
    onReview,
    pathname,
    showInvestModal,
    setShowInvestModal
  } = usePortfolioHeaderData(portfolio);
  return (
    <div className="hidden-pdf">
      <Container>
        {pathname.includes("portfolios") && (
          <BackLink text="All Portfolios" to="/portfolios" />
        )}
        <Row>
          <PortfolioHeaderInfo
            portfolio={portfolio}
            investor={investor}
            isReview={isReview}
          />

          <PortfolioHeaderValueBox
            portfolio={portfolio}
            isReview={isReview}
            investorId={investor?.id}
            setShowInvestModal={setShowInvestModal}
          />
        </Row>
      </Container>
      <InvestModal
        onHide={() => setShowInvestModal(false)}
        show={showInvestModal}
        setShowInvestModal={setShowInvestModal}
        portfolio={portfolio}
        onReviewClick={() => onReview(portfolio.getAppType() ?? AppType.CUSTOM)}
      />
    </div>
  );
}
