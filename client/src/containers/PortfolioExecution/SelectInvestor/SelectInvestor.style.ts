import styled from "styled-components";
import { Col, Container } from "react-bootstrap";
import { mediaQuery } from "../../../theme/breakpoints.style";

export const SFIHeaderContainer = styled(Container).attrs({
  fluid: true
})`
  //background: rgba(255,4,54,.3);
  //border-bottom: dashed 1px var(--border-new);
  //padding-bottom: 2rem;
  margin-bottom: 2rem;

  ${mediaQuery("xxl")} {
    //margin-bottom: 3rem;
  }
`;

export const SFIHeaderInfo = styled(Col).attrs({
  xs: 24,
  md: 16,
  className: "col-xxl-17"
})`
  display: flex;
  justify-content: center;
  flex-direction: column;
  //background: rgba(255,255,0,.3);
`;

// PORTFOLIO - INFO
export const SFIHeaderInfoContainer = styled(Container).attrs({
  fluid: true
})`
  //display: none;
  //background: rgba(255,0,255,.3);
  ${mediaQuery("xxl")} {
  }
`;

export const SFIHeaderInfoStatus = styled(Col).attrs({
  xs: 24
})`
  h5 {
    display: inline-block;
    font-family: var(--font-secondary);
    color: white;
    text-transform: uppercase;
    letter-spacing: 0.15em;
    font-size: 0.7rem;
    margin-right: 1rem;
    padding-right: 1rem;

    &:first-of-type {
      color: var(--subtext-3);
      //border-right: solid 1px var(--border-new);
    }
  }
`;

export const SFIHeaderInfoName = styled(Col).attrs({
  xs: 24
})`
  //background: #0f0;

  h1 {
    line-height: 1.1em;
    margin: 0;
    font-size: 1.5rem;

    ${mediaQuery("xxl")} {
      font-size: 1.95rem;
    }

    svg {
      margin-left: 0.5rem;
    }
  }
  button {
    background: none;
    border: none;
    padding: 0;
    margin-left: 0.25rem;
  }
`;

// PORTFOLIO - VALUE

export const SFIPortfolioList = styled(Container).attrs({
  fluid: true
})`
  //background: rgba(255,255,0,.1);
  position: relative;
  //min-height: 600px;
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: center;
  border: 2px solid var(--border-new);
  padding: 5.75rem 0.35rem 5rem;
  border-radius: 0.7rem;

  &::before {
    width: calc(100% - 0.7rem);
    height: 1.25rem;
    position: absolute;
    top: 0.35rem;
    left: 50%;
    transform: translate(-50%, 0);
    display: block;
    border-radius: 0.4rem 0.4rem 0 0;
    content: " ";
    background: var(--dark);
  }
`;

export const InvestorListItem = styled(Col).attrs({
  xs: 24,
  md: 6
})`
  margin-bottom: 2.5rem;
  align-items: center;
  justify-content: center;

  .investor-item-container {
    position: relative;
    z-index: 0;
    background: var(--dark);
    border-radius: 0.675rem;
    border: solid 1px (--light);
    width: 100%;
    max-width: 290px;
    padding: 2.25rem 1.25rem;
    text-align: center;
    overflow: hidden;
  }

  h3 {
    //background: rgba(255,0,0,.3);
    line-height: normal;
    font-size: 1.15rem;
    margin: 0;
    height: 3rem;
  }
  h5 {
    font-weight: normal;
    font-size: 0.785rem;
    color: var(--subtext-3);
  }

  button {
    background: none;
    border: solid 1px var(--lightest);
    padding: 0.5rem 3rem;
    font-size: 0.9rem;
    border-radius: 0.25rem;
    font-weight: bold;
    max-width: 150px;

    &.selected {
      background: var(--page);
      border-color: var(--page);
    }
  }

  .total-available {
    background: var(--page);
    padding: 0.5rem;
    border-radius: 0.675rem;
    border: solid 1px var(--lightest);
    margin: 1.5rem 0;

    small {
      display: block;
      font-size: 0.625rem;
      letter-spacing: 0.2em;
      font-weight: bold;
      color: var(--subtext-3);
    }
    b {
      font-size: 1.575rem;
      color: var(--white);
    }
  }

  &.no-funds {
    .investor-item-container {
      opacity: 0.75;
      &::before {
        background: rgba(14, 31, 59, 0.5);
        content: "";
        width: 100%;
        height: 100%;
        z-index: 10;
        position: absolute;
        top: 0;
        left: 0;
      }

      &:hover {
        cursor: no-drop;
      }
    }
  }
`;
