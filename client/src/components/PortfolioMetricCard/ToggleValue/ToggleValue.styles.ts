import styled from "styled-components";
import { mediaQuery } from "../../../theme/breakpoints.style";

export const ToggleLink = styled.button`
  margin-left: auto;
  color: var(--lightest);
  font-size: 0.8rem;
  text-decoration: underline;
  padding: 0;
  background: none;
  border: none;
`;

const toggleButtonSize = 24;
const toggleWrapperPadding = 4;
const factor = 0.75;

export const ToggleSwitch = styled.div`
  position: relative;
  background: var(--page);
  border-radius: ${toggleButtonSize * factor}px;
  height: ${(toggleButtonSize + toggleWrapperPadding * 2) * factor}px;

  ${mediaQuery("xxl")} {
    border-radius: ${toggleButtonSize}px;
    height: ${toggleButtonSize + toggleWrapperPadding * 2}px;
  }

  .toggle-button {
    background: none;
    z-index: 1;
    border: none;
    padding: 7px;
    height: ${toggleButtonSize * factor}px;
    ${mediaQuery("xxl")} {
      height: ${toggleButtonSize}px;
    }
    font-weight: bold;
    font-size: 0.9rem;
    line-height: 12px;
    letter-spacing: 0.1em;
    text-transform: uppercase;
  }
  &::before {
    content: "";
    background: var(--light);
    width: 50%;
    position: absolute;
    border-radius: 12px;
    transition: all 200ms ease-out;
    top: ${toggleWrapperPadding * factor}px;
    height: ${toggleButtonSize * factor}px;
    left: 2px;
    ${mediaQuery("xxl")} {
      top: ${toggleWrapperPadding}px;
      height: ${toggleButtonSize}px;
    }
  }

  &.toggled {
    &::before {
      transition: all 200ms ease-out;
      left: 47%;
    }
  }
`;
