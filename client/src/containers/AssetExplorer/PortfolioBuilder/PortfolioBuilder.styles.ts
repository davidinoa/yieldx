import styled, { css } from "styled-components";
import { Container, Col } from "react-bootstrap";
import { AXP, navbar, bottomNav } from "../../../theme/theme.style";
import { mediaQuery } from "../../../theme/breakpoints.style";

export const agGridHeight = {
  xs: css`
    height: calc(
      100vh - ${navbar.height.xs} - ${bottomNav.height.xs} -
        ${AXP.titleRow.height.xs}
    );
  `,
  md: css`
    height: calc(
      100vh - ${navbar.height.xs} - ${bottomNav.height.xs} -
        ${AXP.titleRow.height.xs}
    );
  `,
  lg: css`
    height: calc(
      100vh - ${navbar.height.xs} - ${bottomNav.height.xs} -
        ${AXP.titleRow.height.xs}
    );
  `,
  xxl: css`
    height: calc(
      100vh - ${navbar.height.xxl} - ${bottomNav.height.xxl} -
        ${AXP.titleRow.height.xxl}
    );
  `
};

export const controlPanelHeight = {
  xs: css`
    height: calc(100vh - ${navbar.height.xs} - ${bottomNav.height.xs});
  `,
  xxl: css`
    height: calc(100vh - ${navbar.height.xxl} - ${bottomNav.height.xxl});
  `
};

export const PBGridWidth =
  "col-xs-24 col-md-17 col-lg-19  col-xl-20  col-xxl-21";
export const ControlPanelWidth =
  "col-xs-24 col-md-7  col-lg-5   col-xl-4   col-xxl-3";

export const PortfolioBuilderContainer = styled(Container)`
  *::-webkit-scrollbar {
    width: 0.5em;
    height: 0.5em;
  }
  ::-webkit-scrollbar-button {
    background: #cccccc !important;
  }
  *::-webkit-scrollbar-track-piece {
    background: #888888 !important;
  }
  *::-webkit-scrollbar-thumb {
    background: #eeeeee !important;
  }

  .ag-theme-alpine-dark {
    ${agGridHeight.xs};
    width: 100%;

    ${mediaQuery("md")} {
      ${agGridHeight.md};
    }
    ${mediaQuery("lg")} {
      ${agGridHeight.lg};
    }
    ${mediaQuery("xxl")} {
      ${agGridHeight.xxl};
    }

    .ag-popup {
      height: 0;
      width: 0;
    }
    .ag-root-wrapper {
      border-color: transparent !important;
    }
  }

  .ag-header-cell,
  .ag-header-group-cell,
  .ag-cell {
    line-height: 24px;
    padding-left: 4px;
    padding-right: 4px;
  }
  .ag-header-cell-label {
    display: flex;
    align-items: center;
    justify-content: center;
  }
  .ag-header-cell-text {
    font-weight: bold;
    font-size: 10px;
    line-height: 10px;
    letter-spacing: 0.1em;
    text-transform: uppercase;
    color: var(--subtext-3);
  }
`;

export const PortfolioBuilderGridWrapper = styled(Col).attrs({
  className: PBGridWidth
})``;

export const ExportButton = styled.button`
  background: #0e1f3b;
  border: 1px solid #253859 !important;
  box-sizing: border-box;
  border-radius: 5px;
  height: 40px;
  width: 114px !important;
  color: var(--primary);
  font-weight: bold;
  font-size: 15px;
  line-height: 18px;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-right: 1rem;
  > svg {
    margin-left: 0.5rem;
  }
`;

export const ControlPanel = styled(Col).attrs({
  className: ControlPanelWidth
})`
  background: var(--page);
  position: relative;
  border-left: 1px solid var(--border-new);
  z-index: var(--zindex-axp-pb-panel);
  padding-top: 1rem;
  padding-bottom: 1rem;
  overflow-x: hidden;
  overflow-y: auto;

  ${mediaQuery("xxl")} {
    padding-top: 1.5rem;
    padding-bottom: 1.5rem;
  }

  ${controlPanelHeight.xs};
  ${mediaQuery("xxl")} {
    ${controlPanelHeight.xxl};
  }
`;

export const ControlPanelItem = styled(Col).attrs({
  xs: 24
})`
  margin-bottom: 1rem;

  ${mediaQuery("xxl")} {
    margin-bottom: 2.5rem;
  }

  h3 {
    color: var(--text);
    font-weight: normal;
    font-size: 1rem;
    margin: 0 0 0.5rem;
    ${mediaQuery("xxl")} {
      font-size: 1.1rem;
      margin: 0 0 0.75rem;
    }
  }

  .investment-amount {
    padding: 1rem 0.75rem 0.5rem;
    border: 1px solid var(--border-new);
    border-radius: 5px;

    > input {
      font-size: 0.85rem;
      ${mediaQuery("xxl")} {
        font-size: 1rem;
      }
    }
    .minimum-investment {
      display: block;
      text-align: center;
      font-size: 0.7rem;
      font-weight: normal;
      text-transform: uppercase;
      color: var(--subtext-3);
      margin: 0.5rem 0 0;
      ${mediaQuery("xxl")} {
        font-size: 0.75rem;
      }
      &,
      b {
        color: var(--subtext-3);
      }
      b {
        display: inline-block;
        margin-left: 0.35rem;
        font-size: 0.785rem;
      }
    }
  }

  .data-container {
    border: 1px solid var(--border-new);
    border-radius: 5px;
    padding: 0.5rem 0.75rem;
  }

  .analytics {
    //background: #f0f;

    .analytic {
      padding-top: 0.65rem;
      padding-bottom: 0.65rem;
      border-bottom: solid 1px var(--border-new);

      &:last-of-type {
        border: none;
      }

      &-name,
      &-value {
      }
      &-name {
        //background: #ff0;
        text-align: left;
        font-weight: bold;
        font-size: 0.65rem;
        line-height: 155%;
        letter-spacing: 0.15em;
        text-transform: uppercase;
        ${mediaQuery("xxl")} {
          font-size: 0.725rem;
        }
      }
      &-value {
        //background: #0f0;
        text-align: right;
        font-size: 0.75rem;
        ${mediaQuery("xxl")} {
          font-size: 0.85rem;
        }
      }
    }
  }

  &.optimization-options {
    padding-top: 0.75rem;
    padding-bottom: 0.75rem;
    text-align: center;
    background: var(--dark);
    ${mediaQuery("xxl")} {
      padding-top: 1rem;
      padding-bottom: 1rem;
    }

    h3,
    h4,
    p {
      padding: 0 1rem;
      margin: 0;
    }
    h4 {
      font-weight: bold;
      letter-spacing: 0.2em;
      text-transform: uppercase;
      color: var(--subtext-3);
      font-size: 0.65rem;
      ${mediaQuery("xxl")} {
        margin-bottom: 0.25rem;
        font-size: 0.75rem;
      }
    }
    h3 {
      font-weight: bold;
      font-size: 0.9rem;
      line-height: 145%;
      margin-bottom: 0;
      ${mediaQuery("xxl")} {
        font-size: 1rem;
        margin-bottom: 0.25rem;
      }
    }
    p {
      color: var(--subtext-3);
      font-size: 0.875rem;
      ${mediaQuery("xxl")} {
        font-size: 0.9rem;
      }
    }
    button.explore-options {
      color: var(--text);
      background: var(--medium);
      border-radius: 5px;
      font-weight: bold;
      font-size: 13px;
      line-height: 16px;
      margin: 0.5rem 0;
      padding: 0.45rem 0.9rem;
      ${mediaQuery("xxl")} {
        margin: 0.75rem 0;
        padding: 0.5rem 1.1rem;
      }
    }

    .small-alert {
      background: rgba(255, 0, 0, 0.65);
      color: var(--white);
      padding: 0.25rem 0.75rem;
      font-size: 0.75rem;
      line-height: normal;
      border-radius: 0.25rem;
    }
  }
`;

export const OptionsMenu = styled(Col).attrs({
  className: ControlPanelWidth
})`
  position: absolute;
  right: 0;
  background: var(--dark);

  transition: all 300ms ease-out;
  z-index: var(--zindex-axp-pb-opt);
  transform: translate(0, 0);

  ${controlPanelHeight.xs};
  top: ${navbar.height.xs};
  padding: 1.25rem 1rem;
  //opacity: 0;
  overflow-x: hidden;
  overflow-y: auto;

  ${mediaQuery("xxl")} {
    ${controlPanelHeight.xxl};
    top: ${navbar.height.xxl};
    padding: 2rem 1rem;
  }
  .close-icon {
    //background: #00f;
    position: absolute;
    top: 1rem;
    right: 0.75rem;
  }
  h3 {
    color: var(--text);
    font-weight: normal;
    font-size: 1rem;
    margin: 0.5rem 0 1rem;
    ${mediaQuery("xxl")} {
      font-size: 1.1rem;
      margin: 0.75rem 0 1.5rem;
    }
  }

  &.opened {
    transform: translate(-100%, 0);
    //opacity: 1;
    transition: all 300ms ease-out;
  }
`;

export const OptionCard = styled.div`
  border: 1px solid var(--border-new);
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  border-radius: 5px;
  position: relative;

  padding: 0.75rem 0.725rem;
  margin-bottom: 0.5rem;

  ${mediaQuery("xxl")} {
    padding: 1.5rem 0.725rem;
    margin-bottom: 0.85rem;
  }

  h5,
  p {
    margin: 0;
  }

  h5 {
    font-weight: bold;
    font-size: 0.95rem;
    margin-bottom: 0.5rem;

    ${mediaQuery("xxl")} {
      font-size: 1rem;
    }
  }

  p {
    font-size: 0.785rem;
    text-align: center;
    color: var(--subtext-3);
    ${mediaQuery("xxl")} {
      font-size: 0.85rem;
      line-height: 165%;
    }
  }
  h6 {
    //background: rgba(255,9,34,.3);
    font-weight: bold;
    font-size: 10px;
    margin: 0 0 0.5rem;
    letter-spacing: 0.2em;
    text-transform: uppercase;
  }

  .slider {
    border-right: none;
    border-left: none;

    width: 100%;
    display: flex;
    text-align: center;
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;
    padding: 0.75rem 0 1.25rem;
  }
`;
export const OptionButton = styled.button.attrs({
  type: "button"
})`
  color: var(--text);
  padding: 7px 15px;
  background: var(--darkest);
  border-radius: 5px;
  font-weight: bold;
  font-size: 13px;
  line-height: 16px;
  margin: 0.5rem 0 0;
`;
