import styled from "styled-components";
import { Modal } from "react-bootstrap";

export default styled(Modal)`
  background: #ff0;
  //background: var(--modal-backdrop);
  z-index: var(--zindex-modal);

  .modal-content,
  .modal-body {
    .modal-header {
      border-bottom: none;
      //padding-top: 0px;
      //padding-bottom: 0px;
      button {
        background: transparent;
        font-weight: bold;
        font-size: 30px;
      }
    }
    max-width: 525px;
    height: 325px;
    background: var(--darkest);
    border: 1px solid var(--lightest);
    border-radius: 8px;
  }
`;
