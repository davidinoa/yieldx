import React, { ReactNode } from "react";
import { Modal } from "react-bootstrap";
import { StyledModal } from "./Modals.styles";
import { ReactComponent as X } from "../../../../assets/svg/x.svg";

interface Props {
  onHide: () => void;
  show: boolean;
  children: ReactNode;
  keepOpen?: boolean;
  small?: boolean;
  nopadding?: boolean;
}

function ModalBase({
  onHide,
  show,
  children,
  small,
  nopadding,
  keepOpen
}: Props) {
  return (
    <StyledModal
      dialogClassName="styled-modal"
      centered
      show={show}
      onHide={onHide}
      small={small}
      nopadding={nopadding}
      backdrop={keepOpen ? "static" : undefined}
      keyboard={keepOpen ? "false" : undefined}
    >
      {!keepOpen && (
        <button type="button" onClick={() => onHide()} className="close-modal">
          <X />
        </button>
      )}
      <Modal.Body bsPrefix="body">{children}</Modal.Body>
    </StyledModal>
  );
}

export default ModalBase;
