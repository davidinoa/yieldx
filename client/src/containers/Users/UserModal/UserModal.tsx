import React, { ReactNode } from "react";
import { Modal } from "react-bootstrap";
import StyledModal from "./UserModal.styles";

interface Props {
  onHide: () => void;
  show: boolean;
  children: ReactNode;
}

function UserModal({ onHide, show, children }: Props) {
  return (
    <StyledModal
      dialogClassName="user-modal"
      centered
      show={show}
      onHide={onHide}
    >
      <Modal.Header closeButton />
      <Modal.Body bsPrefix="body">{children}</Modal.Body>
    </StyledModal>
  );
}

export default UserModal;
