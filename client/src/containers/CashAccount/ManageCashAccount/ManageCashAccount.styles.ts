import styled from "styled-components";
import { Container, Col } from "react-bootstrap";
import { mediaQuery } from "theme/breakpoints.style";

export const CashManagerContainer = styled(Container).attrs({})`
  //background: rgba(255,4,54,.3);
  margin-top: 2rem;
  margin-bottom: 2rem;
  padding-bottom: 2rem;

  ${mediaQuery("xxl")} {
    margin-top: 3rem;
    margin-bottom: 3rem;
  }
`;
export const CashManagerHeaderContainer = styled(Container).attrs({
  fluid: true
})`
  //background: rgba(255,4,54,.3);
  border-bottom: dashed 1px var(--border-new);
  padding-bottom: 2rem;
  margin-bottom: 2rem;

  ${mediaQuery("xxl")} {
    margin-bottom: 3rem;
  }
`;

export const CashManagerHeaderInfo = styled(Col).attrs({
  xs: 24,
  md: 16,
  className: "col-xxl-17"
})`
  display: flex;
  justify-content: center;
  flex-direction: column;
  //background: rgba(255,255,0,.3);
`;

export const CashManagerHeaderValue = styled(Col).attrs({
  xs: 24,
  md: 8,
  className: "col-xxl-7"
})`
  //background: rgba(0,4,255,.3);
`;

// PORTFOLIO - INFO
export const CashManagerHeaderInfoContainer = styled(Container).attrs({
  fluid: true
})`
  //display: none;
  //background: rgba(255,0,255,.3);
  ${mediaQuery("xxl")} {
  }
`;

export const CashManagerHeaderInfoStatus = styled(Col).attrs({
  xs: 24
})`
  h5 {
    display: inline-block;
    color: white;
    text-transform: uppercase;
    letter-spacing: 0.15em;
    font-size: 0.7rem;
    margin-right: 1rem;
    padding-right: 1rem;

    &:first-of-type {
      color: var(--subtext-3);
      border-right: solid 1px var(--border-new);
    }
  }
`;

export const CashManagerHeaderInfoName = styled(Col).attrs({
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
export const CashManagerHeaderInfoAdditional = styled.div.attrs({
  className: ""
})`
  //display: none;
  margin-top: 0.65rem;
  padding: 0.75rem 0.35rem 0;
  border-top: solid 1px var(--border-new);

  ${mediaQuery("xxl")} {
    margin-top: 1rem;
    padding: 1rem 0.5rem 0;
  }

  h4 {
    display: inline-block;
    margin-right: 2rem;
    font-family: var(--font-secondary);
    font-weight: normal;

    b {
      letter-spacing: 0.2em;
      font-weight: bold;
      font-family: var(--font-primary);
      display: block;
      color: var(--subtext-3);
      font-size: 0.6rem;

      ${mediaQuery("xxl")} {
        font-size: 0.75rem;
      }
    }
    span,
    a {
      display: inline-block;
      margin-right: 1rem;
      font-family: var(--font-secondary);
      font-weight: normal;
      font-size: 0.7rem;
      color: white;
      ${mediaQuery("xxl")} {
        font-size: 0.85rem;
      }
    }
    a {
      text-decoration: underline;
    }
  }
`;

// PORTFOLIO - VALUE
export const CashManagerHeaderValueContainer = styled.div.attrs({
  className: "container-fluid"
})`
  //background: rgba(255,0,255,.3);
  border: 1px solid var(--border-new);
  border-radius: 0.35rem;
  padding: 0.5rem 0.75rem;

  ${mediaQuery("xxl")} {
  }
`;
export const CashManagerHeaderValueTitle = styled.div.attrs({
  className: "col-24"
})`
  background: rgba(0, 0, 255, 0.3);
  border-radius: 0.35rem 0.35rem 0 0;
  background: var(--dark);
  padding: 0.35rem;
  h3 {
    color: var(--lightest);
    text-align: center;
    line-height: 1em;
    margin: 0;
    font-size: 0.75rem;

    ${mediaQuery("xxl")} {
      font-size: 0.75rem;
    }
  }
`;
export const CashManagerHeaderValueTotal = styled(Col)`
  //background: rgba(0,255,255,.3);
  padding-top: 0.85rem;
  padding-bottom: 0.85rem;

  ${mediaQuery("xxl")} {
    padding-top: 1.25rem;
    padding-bottom: 1.25rem;
  }

  span {
    display: block;
    text-align: center;
    font-size: 1.7rem;
    font-weight: bold;
    ${mediaQuery("xxl")} {
      font-size: 2rem;
    }

    > sup {
      font-size: 0.55em;
      line-height: 22px;
      padding: 0.25rem;
    }
  }
`;
export const CashManagerHeaderCTAs = styled(Col).attrs({
  xs: 24,
  lg: 6
})`
  //background: rgba(0,255,255,.3);
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  ${mediaQuery("lg")} {
    flex-direction: column;
  }

  button {
    border: solid 1px var(--white);
    color: var(--white);
    border-radius: 0.25rem;
    background: none;
    font-weight: bold;
    margin: 0.25rem;
    padding: 0.15rem 0.175rem;
    font-size: 0.715rem;
    min-width: 4rem;
    ${mediaQuery("lg")} {
      margin: 0.25rem 0;
    }

    ${mediaQuery("xxl")} {
      margin: 0.25rem;
      padding: 0.25rem 0.25rem;
      font-size: 0.75rem;
      min-width: 5rem;
    }
  }
`;

export const CashManagerPortfolioList = styled.div.attrs({
  className: "col-24"
})`
  //background: rgba(255,255,0,.1);
`;

export const PortfolioListItem = styled(Col).attrs({
  xs: 24,
  md: 8,
  xl: 6
})`
  //background: rgba(255,255,0,.1);
  margin-bottom: 1.5rem;
`;
