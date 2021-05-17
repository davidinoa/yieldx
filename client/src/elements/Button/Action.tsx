import React from "react";
import clsx from "clsx";
import styled from "styled-components";

const ActionGroupButton = styled.button`
  cursor: pointer;
  height: 35px;
  background: var(--primary);
  font-family: var(--font-primary);
  font-style: normal;
  font-weight: bold;
  font-size: 15px;
  line-height: 15px;
  border-radius: 5px;
  &.small {
    background: #1d232f;
    height: 25px;
    min-width: 60px;
  }
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  padding: 9px 14px;
  &.selected {
    background: var(--primary);
  }
  border: 1px solid #015cff;
  &.inverted {
    background: none;
    border: 1px solid var(--dark-light-border);
    &.active {
      background: var(--dark-light-border);
      border: 1px solid var(--black-light-4);
      box-shadow: 0px 0px 4px 0px var(--primary-light);
    }
  }
  box-sizing: border-box;
`;

const ActionGroupSwitchButton = styled.button`
  cursor: pointer;
  height: 35px;
  min-width: 99px;
  background: none;
  font-family: var(--font-primary);
  font-style: normal;
  font-weight: bold;
  font-size: 14px;
  line-height: 14px;
  &.small {
    background: var(--dark-light);
    height: 25px;
    min-width: 60px;
    border: 1px solid var(--dark-light-border);
    font-size: 12px;
    line-height: 15px;
  }
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  padding: 9px 14px;
  &.selected {
    background: var(--primary);
  }
  border: 1px solid var(--primary);
  box-sizing: border-box;
  border-top-left-radius: 5px;
  border-bottom-left-radius: 5px;
  &:nth-of-type(2) {
    border-radius: 0px;
  }
  &:last-of-type {
    border-radius: 0px 5px 5px 0px;
  }
`;

export enum Size {
  Large = "LARGE",
  Small = "SMALL"
}

export type ActionGroupSwitchProps = {
  children: JSX.Element | JSX.Element[];
};

const ActionGroupSwitchContainer = styled.div`
  height: 35px;
`;

export function ActionGroupSwitch({ children }: ActionGroupSwitchProps) {
  return (
    <ActionGroupSwitchContainer className="row ActionGroup switch">
      {children}
    </ActionGroupSwitchContainer>
  );
}
type ActionLinkProps = {
  text?: string;
  icon?: JSX.Element;
  onClick: () => void;
  reversed?: boolean;
};
function ActionLink({ text, icon, onClick, reversed }: ActionLinkProps) {
  return (
    <button type="button" onClick={onClick} className="Action bg-transparent">
      {!!icon && !reversed && icon}
      {text}
      {!!icon && reversed && icon}
    </button>
  );
}
type SwitchButtonProps = {
  text: string;
  onClick: () => void;
  selected?: boolean;
  size?: Size;
  className?: string;
};
function SwitchButton({
  text,
  onClick,
  selected,
  size,
  className
}: SwitchButtonProps) {
  return (
    <ActionGroupSwitchButton
      className={clsx(className, "Action", {
        selected,
        small: size === "SMALL"
      })}
      onClick={onClick}
    >
      {text}
    </ActionGroupSwitchButton>
  );
}

export type ActionProps = {
  icon?: JSX.Element;
  text: string;
  active?: boolean;
  size?: Size;
  onClick: () => void;
  onMouseEnter?: () => void;
  inverted?: boolean;
  className?: string;
  disabled?: boolean;
  reversed?: boolean;
};

export function Action({
  size = Size.Large,
  className,
  icon,
  text,
  inverted,
  onClick,
  onMouseEnter,
  active,
  disabled,
  reversed
}: ActionProps) {
  return (
    <ActionGroupButton
      disabled={disabled}
      type="button"
      onMouseEnter={onMouseEnter}
      className={clsx(className, "Action", {
        small: size === Size.Small,
        inverted,
        active
      })}
      onClick={onClick}
    >
      {!!icon && !reversed && icon}
      {text}
      {!!icon && reversed && icon}
    </ActionGroupButton>
  );
}
Action.Link = ActionLink;
Action.SwitchButton = SwitchButton;
