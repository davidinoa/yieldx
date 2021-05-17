import React, { ReactNode } from "react";
import { Modal } from "react-bootstrap";
import { StyledModal } from "./ModalBase.styles";
import { ReactComponent as X } from "../../assets/svg/x.svg";

interface Props {
  onHide: () => void;
  show: boolean;
  children: ReactNode;
  keepOpen?: boolean;
  size?: string;
  small?: boolean;
  nopadding?: boolean;
  testId?: string;
}

function ModalBase({
  onHide,
  show,
  children,
  small,
  nopadding,
  keepOpen,
  size,
  testId
}: Props) {
  return (
    <StyledModal
      data-testid={testId ?? "modal"}
      dialogClassName="styled-modal"
      centered
      backdropClassName="styled-modal-backdrop"
      animation
      show={show}
      onHide={onHide}
      size={size}
      small={String(small)}
      nopadding={nopadding}
      backdrop={keepOpen ? "static" : undefined}
      keyboard={keepOpen ? "false" : undefined}
    >
      {!keepOpen && (
        <button
          data-testid="ModalBase-Close"
          type="button"
          onClick={() => onHide()}
          className="close-modal"
        >
          <X />
        </button>
      )}

      <Modal.Body bsPrefix="body">{children}</Modal.Body>
    </StyledModal>
  );
}

export default ModalBase;
