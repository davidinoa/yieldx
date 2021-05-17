import React from "react";
import { useLocation } from "react-router-dom";
import ModalBase from "../../../../components/ModalBase/ModalBase";
import {
  ButtonContainer,
  CancelButton as DeleteButton,
  ContinueButton as DontDeleteButton,
  InfoText
} from "../../../../components/ModalBase/ModalBase.styles";

interface Props {
  onHide: () => void;
  onDelete: () => Promise<void>;
}

export default function DeleteModal({ onHide, onDelete }: Props) {
  const { hash } = useLocation();
  const [isSubmitting, setSubmitting] = React.useState(false);
  return (
    <ModalBase onHide={onHide} show={hash === "#delete"}>
      <h1>Are you sure you want to delete this portfolio?</h1>
      <InfoText>
        By selecting “Delete” this portfolio will be permanently excluded. This
        action can&#39;t be undone.
      </InfoText>
      <ButtonContainer>
        <DeleteButton
          disabled={isSubmitting}
          onClick={() => {
            setSubmitting(true);
            onDelete().catch(() => onHide());
          }}
        >
          Delete
        </DeleteButton>
        <DontDeleteButton onClick={() => onHide()}>
          Don&#39;t delete
        </DontDeleteButton>
      </ButtonContainer>
    </ModalBase>
  );
}
