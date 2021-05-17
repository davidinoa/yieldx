import styled from "styled-components";

export const ComparisonButton = styled.button.attrs({
  type: "button"
})`
  background: var(--lightest);
  border-radius: 0.3125rem;
  padding: 0.625rem 1.5625rem;
  display: flex;
  align-items: center;
  justify-content: center;
  > svg {
    margin-right: 0.5rem;
  }
`;

export const Root = styled.div.attrs({
  className: "container center-block"
})``;
