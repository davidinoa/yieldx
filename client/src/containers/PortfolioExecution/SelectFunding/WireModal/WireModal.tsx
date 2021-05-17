import React from "react";
import { useSetRecoilState } from "recoil";
import { useHistory, useLocation, useRouteMatch } from "react-router-dom";
import {
  ModalBody,
  ModalSubtitle,
  ModalTitle,
  StyledModal
} from "./WireModal.styles";
import { ReactComponent as X } from "../../../../assets/svg/x.svg";
import { fundingSourceState } from "../../../../services/InvestorService";

interface Props {
  show: boolean;
}

function WireModal({ show }: Props) {
  const history = useHistory();
  const location = useLocation();
  const { url } = useRouteMatch();
  const setFunding = useSetRecoilState(fundingSourceState);
  return (
    <StyledModal show={show} backdrop="static" keyboard="false">
      <button
        type="button"
        onClick={() => history.goBack()}
        className="close-modal"
      >
        <X/>
      </button>
      <ModalBody>
        <ModalTitle>Are you sure you want to transfer $100,000+?</ModalTitle>
        <ModalSubtitle>
          For transfers that exceed $100,000, ACH is not available. Only wire
          transfers.
        </ModalSubtitle>
        <button
          type="button"
          className="continue-button"
          onClick={() => {
            setFunding("wire");
            const slugs = url.split("/funding-source");
            history.push(
              `${slugs[0]}/review-options`,
              location.state
            );

          }}
        >
          Continue
        </button>
      </ModalBody>
    </StyledModal>
  );
}

export default WireModal;
