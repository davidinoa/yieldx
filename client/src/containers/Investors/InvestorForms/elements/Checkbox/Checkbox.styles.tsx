import styled from "styled-components";
import { Form } from "react-bootstrap";

export default styled(Form.Check).attrs(() => ({
  custom: true,
  type: "checkbox"
}))`
  * {
    color: ${props =>
      props.disabled ? "var(--lightest)" : "var(--white)"} !important;
  }
  label {
    cursor: pointer;
    font-size: 15px;
    ::before {
      background: transparent;
      border: 1.5px solid var(--border-new);
      border-radius: 2px;
    }
  }
  .custom-control-input:checked ~ .custom-control-label::before {
    background: transparent;
    border-color: ${props =>
      props.disabled ? "var(--lightest)" : "var(--white)"};
  }
`;
