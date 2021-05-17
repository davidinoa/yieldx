import styled from "styled-components";
import { Container } from "react-bootstrap";
import { mediaQuery } from "../../theme/breakpoints.style";

export const PageTitleWrapper = styled(Container).attrs({})`
  //background: rgba(255,255,0,.3);
  text-align: center;
  padding-top: 0.5rem;
  padding-bottom: 1rem;

  ${mediaQuery("xxl")} {
    padding-top: 1rem;
    padding-bottom: 2rem;
  }

  .left {
    text-align: left !important;
  }

  .default-page {
    padding-top: 2rem;
    padding-bottom: 0;
  }

  h1 {
    //background: rgba(233,3,434,.3);
    margin: 0;
    position: relative;
    font-size: 1.65rem;

    ${mediaQuery("xl")} {
      font-size: 1.75rem;
    }
    ${mediaQuery("xxl")} {
      font-size: 2rem;
    }

    small {
      display: block;
      font-family: var(--font-secondary);
      font-size: 0.415em;
      text-transform: uppercase;
      letter-spacing: 0.25em;
      color: var(--subtext-3);
      width: 100%;
      &.reversed {
        text-transform: none;
        letter-spacing: normal;
      }
    }
  }
`;
