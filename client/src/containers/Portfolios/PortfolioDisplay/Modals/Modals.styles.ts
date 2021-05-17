import styled from "styled-components";
import { Modal } from "react-bootstrap";

export const StyledModal = styled(Modal)`
  .styled-modal .body,
  .modal-content {
    text-align: ${props => (props.small ? "left" : "center")};
    width: 515px;
    min-height: 212px;
    background: var(--darkest);
    border: 1px solid var(--lightest);
    border-radius: 8px;
    position: relative;
    > button.close-modal {
      background: inherit;
      position: absolute;
      top: 8px;
      right: 8px;
      z-index: 1;
    }
    > h1 {
      margin: 0;
      font-weight: bold;
      font-size: 25px;
      line-height: 145%;
      margin-bottom: 0.5rem;
    }
  }
  .body {
    padding: ${props => {
      if (props.small) return "2rem";
      if (props.nopadding) return "0px";
      return "2rem 6rem";
    }};
    input {
      height: 40px;
    }
  }
`;

export const ContinueButton = styled.button<{ small?: boolean }>`
  border-radius: 5px;
  width: ${props => (props.small ? "95px" : "248px")};
  height: 40px;
  background: var(--primary);
  :hover {
    background: var(--primary-hover);
  }
`;

export const CancelButton = styled.button`
  border: 1px solid var(--border-new);
  background: inherit;
  border-radius: 5px;
  :hover {
    border: 1px solid var(--subtext-3);
  }
`;

export const InfoText = styled.span`
  font-size: 16px;
  line-height: 165%;
  color: var(--subtext-3);
`;

export const ButtonContainer = styled.div.attrs({
  className: "d-flex justify-content-between mt-4"
})`
  > button {
    width: 144px;
    height: 40px;
    font-weight: bold;
    font-size: 14px;
    line-height: 17px;
  }
`;

export const InputHelperText = styled.span`
  font-weight: bold;
  font-size: 11px;
  line-height: 13px;
  letter-spacing: 0.2em;
  text-transform: uppercase;
  color: var(--subtext-3);
`;
