import styled from "styled-components";
import clsx from "clsx";

export const BootstrapSpinner = styled.div.attrs(attrs => ({
  className: clsx("spinner-border", attrs.className)
}))`
  margin: auto;
  flex-grow: 0;
  font-size: 0.5rem;
  color: var(--lightest);
`;

export const SpinnerContainer = styled.div`
  height: 100%;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const SpinnerWrapper = styled.div`
  width: 100%;
  height: ${(props: { height: string }) => props.height};
`;
