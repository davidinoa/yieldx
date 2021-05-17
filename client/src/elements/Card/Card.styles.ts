import styled from "styled-components";
// import { Link } from "react-router-dom";
import { mediaQuery } from "../../theme/breakpoints.style";

const toggleButtonSize = 24;
const toggleWrapperPadding = 4;
const factor = 0.75;

export const Root = styled.div`
  width: 100%;
  background: var(--dark);
  border: 1px solid var(--border-new);
  display: flex;
  flex-direction: column;
  justify-content: stretch;
  border-radius: 0.5rem;
  padding: 1rem 1.15rem;
  min-height: 6rem;

  ${mediaQuery("xxl")} {
    border-radius: 0.625rem;
    padding: 1.65rem;
  }

  > * {
    flex-grow: 1;
  }
`;

export const Title = styled.div`
  font-weight: bold;
  line-height: normal;
  letter-spacing: 0.2em;
  text-transform: uppercase;
  color: var(--lightest);
  display: flex;
  position: relative;
  align-items: flex-end;
  font-size: 0.65rem;
  padding: 0.25rem 0;
  margin-bottom: 0.25rem;
  max-height: 2rem;

  ${mediaQuery("xxl")} {
    font-size: 0.75rem;
    margin-bottom: 0.5rem;
  }

  > svg {
    margin: -0.5rem 0 0 0.35rem;
    vertical-align: middle;
    width: 0.85rem;
    height: 0.85rem;
    ${mediaQuery("xxl")} {
      width: 1rem;
      height: 1rem;
    }
  }
`;
export const EditLink = styled.div.attrs({
  className: "pdf-hidden"
})`
  border: none;
  background: none;
  position: absolute;
  top: 50%;
  right: 0;
  transform: translate(0, -50%);
  color: var(--lightest);
  font-size: 0.8rem;
  cursor: pointer;

  svg {
    margin-right: 0.15rem;
    width: 10px;
    height: 10px;
  }
`;

export const CardValue = styled.div`
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

  .toggle-link {
    color: var(--lightest);
    font-size: 0.8rem;
    position: absolute;
    top: 0.75rem;
    right: 1rem;
    text-decoration: underline;
    padding: 0;
    background: none;
    border: none;
    ${mediaQuery("xxl")} {
      top: 1rem;
      right: 1.5rem;
    }
  }

  .toggle-buttons {
    display: flex;
    background: var(--page);
    position: absolute;
    top: 0.5rem;
    right: 1rem;
    border-radius: ${toggleButtonSize * factor}px;
    width: ${(toggleWrapperPadding * 2 + toggleButtonSize * 2) * factor}px;
    height: ${(toggleButtonSize + toggleWrapperPadding * 2) * factor}px;

    ${mediaQuery("xxl")} {
      top: 1rem;
      border-radius: ${toggleButtonSize}px;
      width: ${toggleWrapperPadding * 2 + toggleButtonSize * 2}px;
      height: ${toggleButtonSize + toggleWrapperPadding * 2}px;
    }

    button {
      display: flex;
      align-items: center;
      justify-content: center;
      background: none;
      border: none;
      font-size: 0.9rem;
      line-height: normal;
      position: absolute;
      padding: 0;
      top: ${toggleWrapperPadding * factor}px;
      left: ${toggleWrapperPadding * factor}px;
      width: ${toggleButtonSize * factor}px;
      height: ${toggleButtonSize * factor}px;

      ${mediaQuery("xxl")} {
        top: ${toggleWrapperPadding}px;
        left: ${toggleWrapperPadding}px;
        width: ${toggleButtonSize}px;
        height: ${toggleButtonSize}px;
      }

      &:last-of-type {
        left: auto;
        right: ${toggleWrapperPadding * factor}px;

        ${mediaQuery("xxl")} {
          right: ${toggleWrapperPadding}px;
        }
      }
    }
    &::before {
      content: "";
      background: var(--light);
      display: flex;
      position: absolute;
      border-radius: 12px;
      transition: all 200ms ease-out;
      top: ${toggleWrapperPadding * factor}px;
      left: ${toggleWrapperPadding * factor}px;
      width: ${toggleButtonSize * factor}px;
      height: ${toggleButtonSize * factor}px;

      ${mediaQuery("xxl")} {
        top: ${toggleWrapperPadding}px;
        left: ${toggleWrapperPadding}px;
        width: ${toggleButtonSize}px;
        height: ${toggleButtonSize}px;
      }
    }

    &.toggled {
      &::before {
        transition: all 200ms ease-out;
        left: ${(toggleButtonSize + toggleWrapperPadding) * factor}px;

        ${mediaQuery("xxl")} {
          left: ${toggleButtonSize + toggleWrapperPadding}px;
        }
      }
    }
  }
`;
