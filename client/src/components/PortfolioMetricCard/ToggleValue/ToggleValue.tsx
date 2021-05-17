import React from "react";
import _ from "lodash";
import clsx from "clsx";
import { ToggleLink, ToggleSwitch } from "./ToggleValue.styles";

interface Props {
  switchToggleLabels?: [string, string];
  onToggle: () => void;
  current: string;
  className?: string;
}

export default function ToggleValue({
  onToggle,
  switchToggleLabels,
  current,
  className
}: Props) {
  if (switchToggleLabels) {
    const [firstLabel, secondLabel] = switchToggleLabels;
    return (
      <ToggleSwitch
        className={clsx(
          `d-flex align-items-center ${
            className !== undefined ? className : ""
          }`,
          {
            toggled: current === secondLabel
          }
        )}
      >
        <button
          type="button"
          data-testid="ToggleValue-Percent"
          className="d-flex justify-content-center align-items-center toggle-button"
          onClick={onToggle}
        >
          {firstLabel}
        </button>
        <button
          type="button"
          data-testid="ToggleValue-Dollar"
          className="d-flex justify-content-center align-items-center toggle-button"
          onClick={onToggle}
        >
          {secondLabel}
        </button>
      </ToggleSwitch>
    );
  }

  return (
    <ToggleLink type="button" onClick={onToggle}>
      {_.startCase(current)}
    </ToggleLink>
  );
}
