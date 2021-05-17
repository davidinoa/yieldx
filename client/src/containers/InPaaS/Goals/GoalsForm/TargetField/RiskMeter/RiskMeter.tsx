import React from "react";
import clsx from "clsx";
import {
  BarContainer,
  ClassificationLabel,
  RiskBar
} from "containers/InPaaS/Goals/GoalsForm/TargetField/RiskMeter/RiskMeter.styles";

interface Props {
  risk: number;
}

type RiskClassification =
  | "Ultra Conservative"
  | "Conservative"
  | "Moderate"
  | "Moderately Aggressive"
  | "Aggressive";

function classifyRisk(
  risk: number,
  index?: number
): {
  filled: boolean;
  classification: RiskClassification;
} {
  let filled = false;
  let classification: RiskClassification | undefined;
  if (risk <= 2.5) classification = "Ultra Conservative";
  else if (risk >= 2.51 && risk <= 5) {
    classification = "Conservative";
    if (index === 1) filled = true;
  } else if (risk >= 5.01 && risk <= 7) {
    classification = "Moderate";
    if (index === 2) filled = true;
  } else if (risk >= 7.01 && risk <= 9) {
    classification = "Moderately Aggressive";
    if (index === 3) filled = true;
  } else if (risk >= 9.01) {
    classification = "Aggressive";
    if (index === 4) filled = true;
  }
  if (!classification) throw Error(`Invalid risk: ${risk}`);
  if (index !== undefined) {
    if (classification === "Ultra Conservative" && index === 0) filled = true;
    else if (classification === "Conservative" && index <= 1) filled = true;
    else if (classification === "Moderate" && index <= 2) filled = true;
    else if (classification === "Moderately Aggressive" && index <= 3)
      filled = true;
    else if (classification === "Aggressive") filled = true;
  }
  return {
    filled,
    classification
  };
}

function RiskMeter({ risk }: Props) {
  return (
    <div className="row">
      <div className="col">
        <BarContainer>
          <RiskBar
            className={clsx("bar-1", {
              filled: classifyRisk(risk, 0).filled
            })}
          />
          <RiskBar
            className={clsx("bar-2", {
              filled: classifyRisk(risk, 1).filled
            })}
          />
          <RiskBar
            className={clsx("bar-3", {
              filled: classifyRisk(risk, 2).filled
            })}
          />
          <RiskBar
            className={clsx("bar-4", {
              filled: classifyRisk(risk, 3).filled
            })}
          />
          <RiskBar
            className={clsx("bar-5", {
              filled: classifyRisk(risk, 4).filled
            })}
          />
        </BarContainer>
      </div>
      <ClassificationLabel className="col">
        {classifyRisk(risk).classification}
      </ClassificationLabel>
    </div>
  );
}

export default RiskMeter;
