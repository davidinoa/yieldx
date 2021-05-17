import React from "react";
import ModalBase from "../../../../components/ModalBase/ModalBase";
import {
  ButtonContainer,
  CancelButton as SecondaryButton,
  ContinueButton as PrimaryButton,
  InfoText
} from "../../../../components/ModalBase/ModalBase.styles";

interface Props {
  onHide: () => void;
  onLiquidate: () => Promise<void>;
  show: boolean;
}

function LiquidateModal({ onHide, onLiquidate, show }: Props) {
  const [isSubmitting, setSubmitting] = React.useState(false);
  return (
    <ModalBase onHide={onHide} show={show}>
      <h1>Are you sure you want to liquidate this portfolio?</h1>
      <InfoText>
        By selecting “Liquidate” this portfolio will sell all current assets and
        will close permanently.
      </InfoText>
      <ButtonContainer>
        <SecondaryButton
          disabled={isSubmitting}
          onClick={() => {
            setSubmitting(true);
            onLiquidate().catch(() => onHide());
          }}
        >
          Liquidate
        </SecondaryButton>
        <PrimaryButton onClick={() => onHide()}>
          Don&#39;t liquidate
        </PrimaryButton>
      </ButtonContainer>
    </ModalBase>
  );
}

export default LiquidateModal;
