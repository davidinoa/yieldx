import React from "react";
import clsx from "clsx";
import { Spinner } from "elements/Spinner/Spinner";
import { ReactComponent as RedAlert } from "assets/svg/red-alert.svg";
import { displayGains } from "./displayGains";

interface Props {
  label: string;
  value?: number;
  error?: boolean;
}

export default function ProfitLossValue({ value, error, label }: Props) {
  return (
    <div className="d-inline-block performance">
      <span className="label">{label}</span>
      {value !== undefined && !error && (
        <span
          className={clsx("value", {
            positive: value > 0,
            negative: value < 0
          })}
        >
          {displayGains(value)}
        </span>
      )}
      {value === undefined && !error && (
        <span>
          <Spinner />
        </span>
      )}
      {error && (
        <span>
          <RedAlert />
        </span>
      )}
    </div>
  );
}
