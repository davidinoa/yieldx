import React from "react";
import clsx from "clsx";
import { ActionGroupSwitch } from "./Action";

export type ActionGroupDefaultProps = {
  children: JSX.Element | JSX.Element[];
};

export function ActionGroup({ children }: ActionGroupDefaultProps) {
  if (Array.isArray(children) && children.length === 2) {
    return (
      <div className="row ActionGroup default">
        {children.map((it, i) => (
          <div
            key={JSON.stringify(it.props + i)}
            className={clsx("col-12", "Action", {
              "d-flex justify-content-end": i === 0
            })}
          >
            {it}
          </div>
        ))}
      </div>
    );
  }
  return <div className="row ActionGroup default">{children}</div>;
}

ActionGroup.Switch = ActionGroupSwitch;
