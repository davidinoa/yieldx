import styled from "styled-components";
import { Form } from "react-bootstrap";

export const FieldSet = styled.fieldset`
  margin-bottom: 25px;
  display: flex;
  align-items: center;

  .custom-control.custom-checkbox {
    display: inline-block;
    .custom-control-label {
      padding-top: 5px;
      text-transform: uppercase;
      font-weight: bold;
      font-size: 11px;
      line-height: 13px;
      letter-spacing: 0.2em;
      text-transform: uppercase;
      ::before {
        background: transparent;
        border: 1.5px solid var(--subtext-3);
      }
    }
  }
`;

export const Label = styled.label`
  //min-width: 325px;
  margin-bottom: 10px;
  display: inline-block;
  font-weight: bold;
  font-size: 13px;
  line-height: 16px;
  letter-spacing: 0.2em;
  text-transform: uppercase;
`;

export const TextInput = styled(Form.Control)`
  &,
  &:focus,
  &:disabled {
    color: var(--text);
    font-size: 21px;
    line-height: 26px;
    background: transparent;
    border: 1px solid var(--subtext-3);
    border-radius: 4px;
  }

  &:focus {
    border-color: var(--text);
  }
`;

export const Button = styled.button.attrs({ type: "button" })`
  width: 125px;
  height: 40px;
  border-radius: 5px;
  border: 1px solid var(--border-new);
  font-weight: bold;
  font-weight: bold;
  font-size: 15px;
  line-height: 18px;
  text-align: center;
  &.primary {
    background: var(--primary);
    border: none;
  }
  &.secondary {
    background: transparent;
  }
  &.invite-another {
    color: var(--primary);
    width: 165px;
  }
`;

export const SuccessMessage = styled.p`
  color: var(--subtext-3);
  marginbottom: 25;
  textalign: center;
`;

export const Content = styled.div`
  form {
    padding: 0 40px;
    width: 100%;
  }
  h2 {
    margin-top: 0;
  }
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  width: 100%;
`;
