import styled from "styled-components";
import { mediaQuery } from "../../theme/breakpoints.style";

// eslint-disable-next-line import/prefer-default-export
export const TooltipIcon = styled.i`
  > svg {
    margin: -0.5rem 0 0 0.35rem;
    vertical-align: middle;
    width: 0.85rem;
    height: 0.85rem;
    ${mediaQuery("xxl")} {
      width: 1rem;
      height: 1rem;
    }
  }
`;
