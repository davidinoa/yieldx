import styled from "styled-components";
import Card from "elements/Card/Card";
import { mediaQuery } from "theme/breakpoints.style";

export const Root = styled(Card).attrs({
  title: "ESG scores"
})`
  height: 100%;
  li > span {
    display: inline-block;
    margin: 0 15px;
  }
`;

export const EsgContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const TotalScoreCircle = styled.div`
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-flow: column;
  border-radius: 50%;
  color: var(--text);
  font-family: var(--font-secondary);
  font-weight: bold;
  letter-spacing: 0.25em;
  text-transform: uppercase;
  text-align: center;
  position: relative;
  margin-right: 1.5rem;

  height: 9rem;
  width: 9rem;
  font-size: 0.55rem;

  ${mediaQuery("xxl")} {
    height: 11rem;
    width: 11rem;
    font-size: 0.85rem;
    margin-right: 2rem;
  }

  &::before {
    content: "";
    border-radius: 100%;
    position: absolute;
    border: solid 2.15px var(--primary);

    height: 9.1rem;
    width: 9.1rem;
    ${mediaQuery("xxl")} {
      height: 11.1rem;
      width: 11.1rem;
    }
  }

  b {
    width: 80%;
    display: block;
    font-family: var(--font-secondary);
    position: relative;
    z-index: 10;
    font-size: 3.25rem;
    line-height: 2.7rem;
    ${mediaQuery("xxl")} {
      font-size: 3.75rem;
      line-height: 2rem;
    }
  }
  h5 {
    width: 80%;
    display: block;
    font-family: var(--font-secondary);
    font-weight: bold;
    position: relative;
    z-index: 10;
    font-size: 0.625rem;
    margin: 0 5%;
    color: var(--subtext-3);
    ${mediaQuery("xxl")} {
      font-size: 0.75rem;
      margin: 0.6rem 5%;
    }
  }
  span {
    position: relative;
    z-index: 10;
    line-height: 1.45em;
    font-weight: normal;
    letter-spacing: 0.1em;
    font-size: 0.625rem;
    color: var(--subtext-3);
    font-style: italic;
    padding: 0.4rem 0 0;

    ${mediaQuery("xxl")} {
      font-size: 0.6875rem;
      padding: 0.75rem 0 0;
    }
  }
`;

export const EsgFactorsWrapper = styled.div``;

export const IndividualScoreWrapper = styled.div`
  display: flex;
  border-bottom: 1px solid var(--border-new);
  padding-top: 0.1rem;
  justify-content: space-between;

  ${mediaQuery("xxl")} {
    padding-top: 0.3rem;
  }

  h1 {
    font-size: 1.3125rem;
    margin-left: 2.5rem;
    line-height: 1.5rem;
  }
`;

export const EsgFactor = styled.div`
  h6 {
    font-size: 0.875rem;
    margin-bottom: 0px;
  }

  span {
    font-size: 0.625rem;
    color: var(--subtext-3);
    font-style: italic;
  }
`;
