import React, { useState, useCallback } from "react";
import { Label } from "elements/Label/Label";
import { ReactComponent as Locked } from "assets/svg/locked.svg";
import { ReactComponent as UnLocked } from "assets/svg/unlocked.svg";
import { Action, Size } from "elements/Button/Action";
import styled from "styled-components";

export type LockToggleProps = {
  disabled: boolean;
  defaultLocked: boolean;
  onChange: (val: boolean) => void;
};

const StyledAction = styled.span`
  .Action {
    > svg {
      margin-right: 8px;
    }
    width: 115px;
    justify-content: start;
    border-color: var(--border-1);
    :hover:not(disabled) {
      border-color: var(--primary);
    }
  }
`;

export function LockToggle({
  defaultLocked,
  onChange,
  disabled
}: LockToggleProps) {
  const [isLocked, setIsLocked] = useState(defaultLocked);
  const toggleLockedCallback = useCallback(() => {
    if (!disabled) {
      setIsLocked(!isLocked);
      onChange && onChange(!isLocked);
    }
  }, [setIsLocked, isLocked, onChange, disabled]);
  return (
    <StyledAction>
      <Action
        onClick={toggleLockedCallback}
        size={Size.Small}
        disabled={disabled}
        icon={
          isLocked ? (
            <Locked width="10" height="10" />
          ) : (
            <UnLocked width="10" height="10" />
          )
        }
        text={isLocked ? "locked" : "unlocked"}
      />
    </StyledAction>
  );
}
