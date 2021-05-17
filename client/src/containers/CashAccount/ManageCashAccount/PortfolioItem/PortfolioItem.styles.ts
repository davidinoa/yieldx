import styled from "styled-components";
import { Col, Container } from "react-bootstrap";
import { mediaQuery } from "../../../../theme/breakpoints.style";

export const CashManagerPortfolioItem = styled(Container).attrs({
  fluid: true
})`
  background: var(--dark);
  padding: 1.75rem 1.5rem 2rem;
  border-radius: 0.675rem;
  max-width: 18.25rem;
  text-align: center;
  ${mediaQuery("xxl")} {
  }

  h5 {
    color: var(--subtext-3);
    margin: 0 0 0.15rem;
    font-size: 0.575rem;
    letter-spacing: 0.2em;
    ${mediaQuery("xxl")} {
      font-size: 0.65rem;
      margin: 0 0 0.25rem;
    }
  }
`;

export const PortfolioItemTitle = styled(Col).attrs({})`
  //background: rgba(255,0,114,.1);
  height: 4.75rem;
  ${mediaQuery("xxl")} {
    height: 5.5rem;
  }

  h5 {
    font-weight: bold;
    font-size: 10px;
    line-height: 12px;
    letter-spacing: 0.2em;
    text-transform: uppercase;
    > svg {
      margin: -0.25rem 0.3rem 0 0;

      > path {
        fill: var(--subtext-3);
      }
    }
  }

  h3 {
    line-height: normal;
    font-size: 1.15rem;
    ${mediaQuery("xxl")} {
      font-size: 1.25rem;
    }
  }
  a {
    display: inline-block;
    margin: 0 0 0 0.5rem;
    color: var(--subtext-3);
    font-size: 0.75rem;
    text-decoration: underline;
    font-weight: normal;
  }
`;

export const PortfolioItemCash = styled(Col).attrs({})`
  background: var(--page);
  border-radius: 0.25rem;
  border: solid 1px var(--border-new);
  padding: 0.75rem 0.85rem;
  margin-top: 0.5rem;
  margin-bottom: 1.5rem;

  span {
    font-size: 1.25rem;
    font-weight: bold;
    ${mediaQuery("xxl")} {
      font-size: 1.5rem;
    }
  }
`;

export const PortfolioItemCTAs = styled(Col).attrs({
  className: "ctas"
})`
  //background: rgba(255,4,54,.3);

  div {
    display: flex;
    align-items: center;
    justify-content: center;
  }

  button {
    display: flex;
    background: none;
    border: solid 1px var(--white);
    align-items: center;
    justify-content: center;
    width: 100%;
    padding: 0.35rem 0.75rem;
    border-radius: 0.25rem;
    font-weight: bold;

    i {
      display: flex;

      svg {
        margin-right: 0.75rem;
        width: 1rem;
        height: 1rem;
        > path {
          stroke: var(--white);
        }
      }
    }
  }
`;
