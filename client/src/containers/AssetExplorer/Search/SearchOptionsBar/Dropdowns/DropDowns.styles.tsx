import styled from "styled-components";
import { Dropdown } from "react-bootstrap";
import React from "react";
import { ReactComponent as Up } from "../../../../../assets/svg/up.svg";
import { mediaQuery } from "../../../../../theme/breakpoints.style";
import { Form } from "../../../../../theme/theme.style";

export const StyledDropdown = styled(Dropdown)`
  &.show {
    > button > svg {
      transform: unset;
    }
  }

  > button {
    height: ${Form.dropdown.height.xs};
    background: var(--dark);
    border-radius: 5px;
    font-size: 0.75rem;

    ${mediaQuery("xxl")} {
      height: ${Form.dropdown.height.xxl};
    }

    > span {
      margin: 0;
      font-weight: bold;
      line-height: 18px;
      font-size: 0.725rem;
      text-align: left;

      ${mediaQuery("xxl")} {
        font-size: 0.9rem;
      }
    }

    > svg {
      transition-property: transform;
      transition-duration: 0.5s;
      transform: rotate(180deg);

      path {
        stroke: white;
      }
    }
  }
`;

export const StyledMenu = styled.div`
  width: 100%;
  border-radius: 5px;
  background: var(--medium);
  min-width: 12rem;

  button {
    background: inherit;
    width: 100%;
    height: 24px;
    text-align: left;
    :hover {
      background: var(--dark);
    }
  }
  button.big {
    margin: 0;
    color: var(--secondary);
    font-family: Roboto Mono;
    font-style: normal;
    font-weight: bold;
    font-size: 12px;
    line-height: 14px;
    letter-spacing: 0.05em;
  }
  button.small {
    font-size: 13px;
    line-height: 130.3%;
    letter-spacing: -0.05px;
  }
`;

export const StyledDropDownMenu = styled.div`
  width: 100%;
  border-radius: 5px;
  background: var(--medium);
  button {
    background: inherit;
    width: 100%;
    height: 24px;
    text-align: left;
    :hover {
      background: var(--dark);
    }
  }
`;

export const StyledItem = styled.button.attrs({
  type: "button"
})`
  background: var(--medium);
  height: 32px;
  align-items: center;
  &.big {
    margin: 0;
    color: var(--secondary);
    font-family: Roboto Mono;
    font-style: normal;
    font-weight: bold;
    font-size: 12px;
    line-height: 14px;
    letter-spacing: 0.05em;
  }
  &.small {
    font-size: 13px;
    line-height: 130.3%;
    letter-spacing: -0.05px;
  }
  &.selected {
    background: var(--dark) !important;
  }
`;

export const CustomToggle = React.forwardRef(
  ({ onClick, children }: any, ref: any) => (
    // eslint-disable-next-line jsx-a11y/anchor-is-valid
    <button
      type="button"
      ref={ref}
      onClick={e => {
        onClick(e);
        e.preventDefault();
      }}
      className="w-100 d-flex justify-content-between align-items-center"
    >
      <span>{children}</span>
      <Up />
    </button>
  )
);
