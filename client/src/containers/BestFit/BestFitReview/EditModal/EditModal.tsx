import React from "react";
import { useHistory } from "react-router-dom";
import { useSetRecoilState } from "recoil";
import { PortfolioType } from "@bondhouse/income-portfolios";
import {
  ButtonContainer,
  ContinueButton,
  InfoText
} from "components/ModalBase/ModalBase.styles";
import ModalBase from "components/ModalBase/ModalBase";
import YieldXPortfolio from "models/YieldXPortfolio";
import { portfolioCreateOrEditState } from "recoil-state/portfolioCreateOrEditState";
import { cartService } from "services";

type EditModalProps = {
  onClose?: () => void;
  isOpen?: boolean;
  portfolio: YieldXPortfolio;
};

export default function EditModal({
  onClose,
  isOpen,
  portfolio
}: EditModalProps) {
  const history = useHistory();
  const setPortfolioData = useSetRecoilState(portfolioCreateOrEditState);
  return (
    <ModalBase
      show={isOpen || history.location.hash.includes("edit")}
      data-testid="edit-modal"
      onHide={() => (onClose ? onClose() : history.goBack())}
    >
      <h1>In order to edit your positions, you will use AssetExplorer</h1>
      {history.location.pathname.includes("best-fit") && (
        <InfoText>
          After selecting &ldquo;Continue&rdquo;, you won&rsquo;t be able to
          edit your preferences on BestFit anymore.
        </InfoText>
      )}
      <ButtonContainer>
        <ContinueButton
          className="full-width"
          onClick={async () => {
            if (
              history.location.pathname.includes("best-fit") ||
              history.location.pathname.includes("inpaas")
            ) {
              setPortfolioData(prev => ({
                ...prev,
                currentPortfolio: portfolio,
                cartContext: "portfolio-cart"
              }));
              cartService.clearPortfolioCart();
              cartService
                .createPortfolioCartItems(
                  portfolio.positions.map(it => it.asset.id)
                )
                .then(() => history.push("/asset-explorer/portfolio-builder"));
            } else if (portfolio.getType() === PortfolioType.LIVE)
              history.push(`/portfolios/live/${portfolio.getId()}/edit`);
            else {
              history.push({
                pathname: `/asset-explorer/portfolio-builder/edit`,
                search: `?portfolioId=${portfolio.getId()}&portfolioType=EXTERNAL`
              });
            }
          }}
        >
          Continue
        </ContinueButton>
      </ButtonContainer>
    </ModalBase>
  );
}
