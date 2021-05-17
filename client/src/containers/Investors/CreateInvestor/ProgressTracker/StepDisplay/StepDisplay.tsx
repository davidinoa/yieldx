import React from "react";
import { Col } from "react-bootstrap";
import clsx from "clsx";
import { InvestorType } from "@bondhouse/investor";
import renderStepIcon from "./renderStepIcon";
import {
  StepLabel,
  StepLine,
  StepPoint,
  StepTracker
} from "../ProgressTracker.styles";

interface Props {
  stepNum: string;
  type: "large" | "small";
  status: "complete" | "disabled" | "active";
  label: string;
  first?: boolean;
  last?: boolean;
  investorType?: InvestorType;
  showable: boolean;
  orgFirst: boolean;
}

type marginProps = {
  first?: boolean;
  type: string;
  status: string;
  orgFirst: boolean;
};
const adjustMargin = ({ first, type, status, orgFirst }: marginProps) => {
  if (orgFirst) return "mt-4 mb-2";
  if (first) return "mt-4 mb-5";

  if (type === "large") {
    return status === "active" ? "mb-2" : "mb-5";
  }
  return "mb-2";
};

function StepDisplay({
  stepNum,
  type,
  status,
  label,
  first,
  last,
  investorType,
  showable,
  orgFirst
}: Props) {
  const isInTerms = stepNum === "5.1" || stepNum === "5.2";
  return (
    <StepTracker>
      {showable ? (
        <StepPoint
          className={clsx(adjustMargin({ first, type, status, orgFirst }), {
            "should-show": !(last || isInTerms),
            "first-step": !!first
          })}
        >
          <Col
            xs={{ span: 3, offset: 3 }}
            className="d-flex align-items-center justify-content-center"
          >
            {first && <StepLine className={investorType} />}
            {renderStepIcon(type, status)}
          </Col>
          <StepLabel
            xs
            className={clsx(type, { disabled: status === "disabled" })}
          >
            {type === "large" || status === "active" ? `${label}` : undefined}
          </StepLabel>
        </StepPoint>
      ) : null}
    </StepTracker>
  );
}

export default StepDisplay;
