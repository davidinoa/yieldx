import styled from "styled-components";
import { Form } from "react-bootstrap";

export default styled(Form.Check).attrs({
  custom: true,
  inline: true,
  type: "radio"
})`
  margin-bottom: 1rem;

  .custom-control-label {
    display: flex;
    align-items: center;
    font-weight: bold;
    font-size: 11px;
    letter-spacing: 0.2em;
    text-transform: uppercase;
    ::before {
      display: block;
      border-width: 1.5px;
      border-color: var(--border-new);
      background: var(--page);
    }
  }
  .custom-control-input:checked ~ .custom-control-label::before {
    background: var(--page);
    border-color: var(--white);
  }
`;

export const GroupLabel = styled(Form.Label)`
  display: block;
`;
