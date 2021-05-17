/* eslint-disable react/no-array-index-key */
/* eslint-disable no-nested-ternary */
import React from "react";
import { useRecoilValue } from "recoil";
import { StepperItems, Step, StepperWrapper } from "./Stepper.style";
import { navSteps } from "../../BestFit.state";
import { preferencesState } from "../../../../recoil-state/bestFit";

export default function Stepper() {
  const { currentStepIndex: current } = useRecoilValue(preferencesState);
  return (
    <StepperWrapper>
      <StepperItems className="col d-flex align-items-center justify-content-center">
        {navSteps.map((step, i) => (
          <Step
            key={i + step}
            completed={i < current}
            current={i === current}
            className={
              i < current ? "completed" : current === i ? "current" : ""
            }
          >
            <span />
            <h5>{step}</h5>
          </Step>
        ))}
      </StepperItems>
    </StepperWrapper>
  );
}
