import styled from "styled-components";

export const Input = styled.input.attrs(props => ({ id: props.id }))`
  display: block;
  min-width: 175px;
  width: 100%;
  padding: 7px 20px;
  border-radius: 4px;
  background: var(--page);
  font-weight: bold;
  border: 1px solid var(--border-new);
  color: ${props => (props.readOnly ? "var(--lightest)" : "var(--white)")};
  :focus {
    outline-style: none;
    border-color: var(--white);
  }
  :disabled {
    opacity: 1;
  }
  &.validated {
    border-color: var(--live);
  }
  &.error {
    border-color: var(--invalid);
  }
`;

export const Error = styled.p`
  width: fit-content;
  background: var(--issue);
  opacity: 0.9;
  border-radius: 2px;
  font-size: 13px;
  line-height: 16px;
  color: var(--white) !important;
  padding: 5px;
  top: 0;
  position: absolute;
  margin-top: 5px;
`;
