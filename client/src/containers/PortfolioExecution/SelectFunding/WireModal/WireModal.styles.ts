import styled from "styled-components";
import { Modal } from "react-bootstrap";

export const StyledModal = styled(Modal)`
  .user-modal .body,
  .modal-content {
    width: 515px;
    height: 300px;
    background: #03132f;
    border: 1px solid #6980a6;
    box-sizing: border-box;
    border-radius: 8px;
    position: relative;
    > button.close-modal {
      background: inherit;
      position: absolute;
      top: 8px;
      right: 8px;
      z-index: 1;
    }
  }
  & .continue-button {
    border-radius: 5px;
    width: 248px;
    height: 40px;
    margin: auto;
    background: var(--primary);
    :disabled {
      opacity: 0.3;
      pointer-events: none;
    }
    :hover {
      background: var(--primary-hover);
    }
  }
`;

export const ModalTitle = styled.h1`
  font-weight: bold;
  font-size: 25px;
  line-height: 30px;
  text-align: center;
`;

export const ModalSubtitle = styled.span`
  font-size: 16px;
  line-height: 165%;
  text-align: center;
  color: var(--subtext-3);
`;

export const ModalBody = styled.div`
  padding: 10% 15% 0 15%;
  text-align: center;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: end;
  align-items: center;
`;
