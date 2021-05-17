import React from "react";
import ModalBase from "../../../components/ModalBase/ModalBase";
import {
  ButtonContainer,
  CancelButton
} from "../../../components/ModalBase/ModalBase.styles";

type Props = {
  show: boolean;
  onHide: () => void;
};

export default function ContactUs({ show, onHide }: Props) {
  return (
    <ModalBase onHide={onHide} show={show}>
      <div style={{ maxWidth: 300, margin: "0 auto" }}>
        <h1>Contact us</h1>
        <p>
          Please call your sales representative to create or edit a universe.
        </p>
        <ButtonContainer>
          <CancelButton onClick={onHide}>Dismiss</CancelButton>
        </ButtonContainer>
      </div>
    </ModalBase>
  );
}
