import styled from "styled-components";
import { mediaQuery } from "../../../theme/breakpoints.style";

export const Root = styled.div`
  line-height: normal;
  font-size: 1.5rem;

  ${mediaQuery("xxl")} {
    font-size: 1.95rem;
  }

  sup {
    font-size: 1rem;
    padding: 0.25rem;

    ${mediaQuery("xxl")} {
      font-size: 1.15rem;
    }
  }

  span {
    color: var(--subtext-3);
    font-size: 12px;
    line-height: 15px;
  }

  .allocation-separator {
    height: 23px;
    width: 2px;
    background: var(--border-new);
  }
`;
