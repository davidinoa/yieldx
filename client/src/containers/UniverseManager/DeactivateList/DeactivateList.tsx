import React from "react";
import styled from "styled-components";
import ModalBase from "../../../components/ModalBase/ModalBase";
import {
  ButtonContainer,
  CancelButton,
  ContinueButton
} from "../../../components/ModalBase/ModalBase.styles";

type Props = {
  show: boolean;
  onHide: () => void;
  onContinue: () => void;
};

const StyledButtonContainer = styled(ButtonContainer)`
  border-top: 1px solid var(--dark);
  display: flex;
  flex-direction: column;
  > * {
    margin-top: 1rem;
  }
`;

const ImportantDisclaimer = styled.i`
  text-align: center;
  font-size: 13px;
`;

const LayoutWrapper = styled.div`
  max-width: 32rem;
  margin: 0 auto;
`;

export default function DeactivateList({ show, onHide, onContinue }: Props) {
  return (
    <ModalBase onHide={onHide} show={show}>
      <LayoutWrapper>
        <h1>Deactivate list</h1>
        <p>
          If you continue you won't be able to use this list across the
          platform. If it's used as default for the app, the YieldX Universe
          will be set back as the default.
        </p>
        <StyledButtonContainer>
          <ImportantDisclaimer>
            <b>Important:</b> The portfolios that were already created with this
            list won't be impacted, only the new ones.
          </ImportantDisclaimer>
          <ContinueButton onClick={onContinue}>Continue</ContinueButton>
          <CancelButton onClick={onHide}>Dismiss</CancelButton>
        </StyledButtonContainer>
      </LayoutWrapper>
    </ModalBase>
  );
}
