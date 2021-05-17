import styled from "styled-components";
import NumberFormat from "react-number-format";

export const Input = styled(NumberFormat)`
  display: block;
  min-width: 175px;
  width: 100%;
  padding: 7px 20px;
  border-radius: 4px;
  background: var(--page);
  font-weight: bold;
  border: 1px solid var(--border-new);
  :focus {
    outline-style: none;
    border-color: var(--white);
  }
`;

export const Error = styled.p`
  width: fit-content;
  background: var(--issue);
  opacity: 0.9;
  border-radius: 2px;
  font-size: 13px;
  line-height: 16px;
  color: var(--white);
  padding: 5px;
  top: 0;
  position: absolute;
  margin-top: 5px;
`;
