import styled, { css } from "styled-components";
import { Col, Container } from "react-bootstrap";
import { Link } from "react-router-dom";
import { bottomNav, navbar } from "../../../theme/theme.style";
import { mediaQuery } from "../../../theme/breakpoints.style";

const containerHeight = {
  xs: css`
    min-height: calc(100vh - ${navbar.height.xs} - ${bottomNav.height.xs});
  `,
  xxl: css`
    min-height: calc(100vh - ${navbar.height.xxl} - ${bottomNav.height.xxl});
  `
};

export const CashBalanceContainer = styled(Container).attrs({
  fluid: true
})`
  padding-top: 2rem;
  padding-bottom: 2rem;

  ${containerHeight.xs};

  ${mediaQuery("md")} {
    display: flex;
    align-items: center;
    justify-content: center;
  }
  ${mediaQuery("xxl")} {
    ${containerHeight.xxl};
  }
`;
export const CashMessageBox = styled(Container).attrs({
  fluid: true
})`
  //background: rgba(0,25,222,.3);
  border: solid 1px var(--border-new);
  border-radius: 0.5rem;
  padding: 0.65rem;
  max-width: 1000px;

  ${mediaQuery("xxl")} {
    max-width: 1200px;
  }
`;
export const CashMessageBoxTitle = styled(Col).attrs({
  className: ""
})`
  text-align: center;
  background: var(--dark);
  border-radius: 0.5rem 0.5rem 0 0;
  padding-top: 1.15rem;
  padding-bottom: 1.15rem;

  ${mediaQuery("xxl")} {
    padding-top: 1.5rem;
    padding-bottom: 1.5rem;
  }

  i {
    display: block;
    margin-bottom: 0.75rem;
    svg {
      > path {
        stroke: var(--primary);
      }
    }
  }
  h1,
  h4 {
    margin: 0;
  }
  h1 {
    font-size: 1.25rem;

    ${mediaQuery("xxl")} {
      font-size: 1.5rem;
    }
  }
  h4 {
    font-family: var(--font-secondary);
    font-size: 0.575rem;
    letter-spacing: 0.2em;
    ${mediaQuery("xxl")} {
      font-size: 0.675rem;
    }
  }
`;
export const CashMessageBoxContent = styled(Col).attrs({
  className: ""
})`
  padding-bottom: 1.25rem;
  height: auto;

  ${mediaQuery("xxl")} {
    padding-bottom: 2rem;
  }
`;

export const BoxStatus = styled(Col).attrs({
  xs: 24,
  md: { span: 8, offset: 8 }
  // xl: {span: 6 , offset: 9},
})`
  padding-top: 1.25rem;
  padding-bottom: 1.25rem;

  ${mediaQuery("xxl")} {
    padding-top: 2rem;
    padding-bottom: 2rem;
  }
`;

export const BoxStatusCol = styled(Col).attrs({
  xs: 12
})`
  padding-top: 0.35rem;
  padding-bottom: 0.35rem;

  ${mediaQuery("xxl")} {
    padding-top: 0.5rem;
    padding-bottom: 0.5rem;
  }

  h3,
  span {
    //background:rgba(0,255,255,.3);
    margin: 0;
    width: 100%;
    height: 100%;
    display: flex;
    align-items: center;
    font-family: var(--font-primary);
  }
  h3 {
    color: var(--subtext-3);
    font-size: 0.625rem;
    letter-spacing: 0.2em;
    justify-content: flex-start;
    ${mediaQuery("xxl")} {
      font-size: 0.725rem;
    }
  }
  span {
    justify-content: flex-end;
    font-size: 0.875rem;
    text-align: right;
    ${mediaQuery("xxl")} {
      font-size: 1rem;
    }

    &.status {
      display: block;
      vertical-align: middle;

      i {
        display: inline-block;
        height: 5px;
        width: 5px;
        border-radius: 50%;
        margin: 0 0.5rem 0.05rem 0;

        ${mediaQuery("xxl")} {
          height: 6px;
          width: 6px;
        }
      }

      &.active,
      &.ready {
        color: var(--active);
        i {
          background: var(--active);
        }
      }
      &.deactivated,
      &.inactive,
      &.blocked,
      &.closed,
      &.terminated {
        color: var(--subtext-3);
        i {
          background: var(--subtext-3);
        }
      }
      &.tracking {
        color: var(--tracking);
        i {
          background: var(--tracking);
        }
      }
      &.pending {
        color: var(--caution);
        i {
          background: var(--caution);
        }
      }
      &.error {
        color: var(--issue);
        i {
          background: var(--issue);
        }
      }
    }
  }
`;

export const Divider = styled(Col).attrs({
  xs: 24
})`
  background: var(--border-new);
  height: 1px;
  margin-top: 0.35rem;
  margin-bottom: 0.35rem;
  ${mediaQuery("xxl")} {
    margin-top: 0.5rem;
    margin-bottom: 0.5rem;
  }
`;

export const BoxTotalAvailable = styled(Col).attrs({
  xs: 24,
  md: { span: 12, offset: 6 },
  xl: { span: 10, offset: 7 }
})`
  padding-top: 1.5rem;
  padding-bottom: 1.5rem;
  text-align: center;

  h3,
  p,
  b {
    color: var(--subtext-3);
    margin: 0;
  }

  h3 {
    text-transform: uppercase;
    font-size: 0.625rem;
    letter-spacing: 0.2em;
    justify-content: flex-start;
    ${mediaQuery("xxl")} {
      font-size: 0.725rem;
    }
  }
  span {
    font-weight: bold;
    display: block;
    font-size: 2.25rem;
    margin: 0.85rem 0;
    ${mediaQuery("xxl")} {
      font-size: 2.5rem;
    }

    sup {
      font-size: 0.5em;
      top: -0.675rem;
      margin-left: 0.25rem;
    }
  }
  p {
    font-size: 0.9rem;

    ${mediaQuery("xxl")} {
      font-size: 1rem;
    }
  }
`;

export const ManageCashButton = styled(Link).attrs({
  className: "d-flex justify-content-center align-items-center"
})`
  width: 210px;
  height: 40px;
  background-color: var(--dark);
  border-radius: 5px;
  background: #0e1f3b;
  border: 1px solid #253859;
  > span {
    font-weight: bold;
    font-size: 15px;
    line-height: 18px;
    text-align: center;
    margin-left: 0.5rem;
  }
  > svg > path {
    stroke: white;
  }
`;
