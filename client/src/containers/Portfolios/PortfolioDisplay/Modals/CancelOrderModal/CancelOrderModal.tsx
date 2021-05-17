import React from "react";
import { useLocation } from "react-router-dom";
import ModalBase from "components/ModalBase/ModalBase";
import {
  ButtonContainer,
  CancelButton as CancelOrderButton,
  ContinueButton as DismissButton,
  InfoText
} from "components/ModalBase/ModalBase.styles";

interface Props {
  onHide: () => void;
  onCancel: (orderId: string) => Promise<void>;
}

export default function CancelOrderModal({ onHide, onCancel }: Props) {
  const { hash, state } = useLocation<{ orderId?: string }>();
  const [isSubmitting, setSubmitting] = React.useState(false);
  const show = hash.includes("#orders-cancel");
  React.useEffect(() => {
    if (!show && isSubmitting) setSubmitting(false);
  }, [show, isSubmitting, setSubmitting]);
  return (
    <ModalBase onHide={onHide} show={show}>
      <div>
        <h1>Are you sure you want to cancel this order?</h1>
        <InfoText>This action can&#39;t be undone.</InfoText>
        <ButtonContainer>
          <CancelOrderButton
            disabled={isSubmitting}
            onClick={() => {
              if (!state.orderId)
                throw Error("No order ID found in history state");
              setSubmitting(true);
              onCancel(state.orderId).finally(onHide);
            }}
          >
            Confirm & Cancel Order
          </CancelOrderButton>

          <DismissButton onClick={onHide}>Dismiss</DismissButton>
        </ButtonContainer>
      </div>
    </ModalBase>
  );
}
