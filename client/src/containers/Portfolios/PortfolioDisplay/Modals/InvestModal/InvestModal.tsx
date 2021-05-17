import React, { Dispatch, SetStateAction, useCallback } from "react";
import { useHistory, useLocation } from "react-router-dom";
import { useSetRecoilState } from "recoil";
import { AppType } from "@bondhouse/position-management";
import ModalBase from "components/ModalBase/ModalBase";
import {
  ButtonContainer,
  CancelButton,
  ContinueButton,
  InfoText
} from "components/ModalBase/ModalBase.styles";
import YieldXPortfolio from "models/YieldXPortfolio";
import { portfolioCreateOrEditState } from "recoil-state/portfolioCreateOrEditState";
import { calculateDaysSince } from "util/calculateDaysSince";
import { inpaasFormState } from "recoil-state/inPaaS";
import { convertProposalToInpaasGoals } from "util/convertProposalToInpaasGoals";

interface Props {
  onHide: () => void;
  portfolio: YieldXPortfolio;
  onReviewClick: () => void;
  show: boolean;
  setShowInvestModal: Dispatch<SetStateAction<boolean>>;
}

export default function InvestModal({
  portfolio,
  onReviewClick,
  show,
  setShowInvestModal
}: Props) {
  const history = useHistory();
  const { pathname } = useLocation();
  const setPortfolioState = useSetRecoilState(portfolioCreateOrEditState);
  const setInpaasData = useSetRecoilState(inpaasFormState);
  const onHide = () => {
    setShowInvestModal(false);
    return history.push(pathname);
  };
  const daysSinceUpdated = calculateDaysSince(
    portfolio.getUpdatedAt() ?? portfolio.getCreatedAt()
  );
  const originalReq = portfolio.getInpaasData()?.proposal.proposalRequest;
  const onNewProposal = useCallback(() => {
    if (!originalReq)
      throw Error("Original portfolio request data is undefined");
    setInpaasData(
      convertProposalToInpaasGoals(originalReq, portfolio.totalMarketValue)
    );
    history.push("/inpaas/goals");
  }, [originalReq, portfolio.totalMarketValue, history, setInpaasData]);
  return (
    <ModalBase onHide={onHide} show={show}>
      {portfolio.getAppType() === AppType.INPAAS && (
        <>
          <h1>Review your portfolio</h1>
          <InfoText>
            {`Your portfolio was ${
              portfolio.getUpdatedAt() === undefined
                ? "created"
                : "last updated"
            } ${daysSinceUpdated} ${
              daysSinceUpdated > 1 ? "days" : "day"
            } ago. We recommend that you create a new proposal before investing.`}
          </InfoText>
          <ButtonContainer>
            <CancelButton
              data-testid="PortfolioDisplay-InvestModal-Proposal"
              onClick={onNewProposal}
            >
              New proposal
            </CancelButton>
            <ContinueButton
              data-testid="PortfolioDisplay-InvestModal-Execute"
              onClick={async () => {
                setPortfolioState({
                  status: "executing",
                  currentPortfolio: portfolio
                });
                history.push("/execute-portfolio");
              }}
            >
              Execute now
            </ContinueButton>
          </ButtonContainer>
        </>
      )}
      {portfolio.getAppType() === AppType.CUSTOM && (
        <>
          <h1>Paper to live alert</h1>
          <InfoText>
            Your paper portfolio is about to become a live portfolio. Before
            moving forward, we recommend that you review your positions in
            AssetExplorer.
          </InfoText>
          <ButtonContainer>
            <CancelButton
              data-testid="PortfolioDisplay-InvestModal-Cancel"
              onClick={onReviewClick}
            >
              Review positions
            </CancelButton>
            <ContinueButton
              data-testid="PortfolioDisplay-InvestModal-Execute"
              onClick={async () => {
                setPortfolioState({
                  status: "executing",
                  currentPortfolio: portfolio
                });
                history.push("/execute-portfolio");
              }}
            >
              Start executing now
            </ContinueButton>
          </ButtonContainer>
        </>
      )}
    </ModalBase>
  );
}
