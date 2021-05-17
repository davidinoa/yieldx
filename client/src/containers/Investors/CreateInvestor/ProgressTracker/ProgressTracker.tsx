import React from "react";
import { useLocation } from "react-router-dom";
import { InvestorType } from "@bondhouse/investor";
import { ProgressDisplay, Root } from "./ProgressTracker.styles";
import StepDisplay from "./StepDisplay/StepDisplay";
import { individualSteps, organizationSteps } from "./stepArrays";

interface Props {
  investorType?: InvestorType;
}

interface AssessProps {
  type: "large" | "small";
  isIn: boolean;
}

const stepMap: Record<string, number> = {
  "investor-type": 1.1,
  "organization-info": 1.2,
  "personal-info": 2.1,
  contact: 2.2,
  employment: 2.3,
  "public-trade": 3.1,
  "sec-finra-association": 3.2,
  "public-person": 3.3,
  "trusted-contact": 3.4,
  "investment-profile": 4.1,
  "w-9": 4.2,
  "w-9-upload": 4.3,
  "organization-background": 4.4,
  "exempt-legal": 4.5,
  "beneficial-ownership": 4.6,
  "additional-information": 4.7,
  "entity-account-agreement": 4.8,
  "crs-form": 5.1,
  "terms-and-agreement": 5.2,
  review: 6
};

const assessShowable = ({ type, isIn }: AssessProps) => {
  if (type === "large") return true;

  if (isIn) return true;
  return false;
};

function ProgressTracker({ investorType }: Props) {
  const location = useLocation();
  const slugs = location.pathname.split("/");
  const currentStep: string | undefined = slugs[slugs.length - 1];
  const stepNum = stepMap[currentStep || ""].toString();
  const steps =
    investorType === "INDIVIDUAL" ? individualSteps : organizationSteps;
  const stepComponents = steps.map((step, i) => {
    let status: "active" | "disabled" | "complete" = "disabled";
    let orgFirst = false;
    if (stepNum === "1.2" && step.stepNumber === "1.1") orgFirst = true;
    if (step.stepNumber.length === 1 && stepNum[0] === step.stepNumber[0])
      status = "active";
    else if (stepNum === step.stepNumber) status = "active";
    else if (parseFloat(stepNum) > parseFloat(step.stepNumber)) {
      status = "complete";
    }
    const showable = assessShowable({
      type: step.type,
      isIn: stepNum[0] === step.stepNumber[0]
    });
    return (
      <StepDisplay
        key={step.stepNumber}
        investorType={investorType}
        first={i === 0}
        last={i === steps.length - 1}
        type={step.type}
        status={status}
        label={step.label}
        showable={showable}
        orgFirst={orgFirst}
        stepNum={step.stepNumber}
      />
    );
  });
  return (
    // <Root xs={{ span: 4, offset: 3 }} className="d-flex flex-column">
    <Root>
      <ProgressDisplay className="d-flex justify-content-center align-items-center">
        Progress
      </ProgressDisplay>
      <div>{stepComponents}</div>
    </Root>
  );
}

export default ProgressTracker;
