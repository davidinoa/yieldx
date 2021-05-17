/* eslint-disable @typescript-eslint/no-explicit-any */
import styled from "styled-components";
import { Col } from "react-bootstrap";
import ReactSlider from "react-slider";
import { AXP } from "../../theme/theme.style";
import { mediaQuery } from "../../theme/breakpoints.style";

export const Header = styled(Col).attrs({
  className: "justify-content-between align-items-center"
})`
  display: flex;
  align-items: center;
  justify-content: center;
  height: ${AXP.titleRow.height.xs};
  border-bottom: 1px solid var(--border-new);

  ${mediaQuery("xxl")} {
    height: ${AXP.titleRow.height.xxl};
  }
  h1 {
    font-weight: 300;
    font-size: 1.125rem;
    margin: 0 0 0 1.25rem;

    ${mediaQuery("xxl")} {
      font-size: 1.325rem;
    }
  }

  .cash-available {
    //background: rgba(255,0,255,.3);
    padding: 0 0.25rem;

    span {
      font-weight: normal;
      font-size: 0.75rem;
      text-transform: uppercase;
      letter-spacing: 0.1em;
      color: var(--subtext-3);

      b {
        margin-left: 0.25rem;

        &.negative {
          color: var(--invalid);
        }
      }
    }
  }
`;

export const StyledSlider = styled(ReactSlider)`
  width: 100%;
`;

export const GridBottomBar = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-start;
  height: ${AXP.statusRow.height.xs};
  padding: 0 0.75rem;

  ${mediaQuery("xxl")} {
    height: ${AXP.statusRow.height.xxl};
  }

  .label {
    font-weight: bold;
    letter-spacing: 0.2em;
    text-transform: uppercase;
    color: var(--subtext-3);
    font-size: 0.575rem;

    ${mediaQuery("xxl")} {
      font-size: 0.625rem;
    }
  }
  .value {
    margin: 0 0 0 0.5rem;
    font-size: 0.75rem;

    ${mediaQuery("xxl")} {
      font-size: 0.9rem;
    }
  }
`;
