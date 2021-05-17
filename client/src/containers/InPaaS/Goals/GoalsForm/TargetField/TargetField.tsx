import React from "react";
import clsx from "clsx";
import { useRecoilValue } from "recoil";
import Field from "elements/Field/Field";
import FormikNumberInput from "elements/FormikNumberInput/FormikNumberInput";
import { ReactComponent as Dollar } from "assets/svg/dollar.svg";
import Decimal from "util/Decimal";
import { inpaasDataSelector } from "containers/InPaaS/Goals/useGoals";
import { RadioGroup } from "containers/Investors/InvestorForms/elements/elements";
import { Row } from "react-bootstrap";
import RiskMeter from "containers/InPaaS/Goals/GoalsForm/TargetField/RiskMeter/RiskMeter";
import { targetDescription } from "containers/InPaaS/Goals/GoalsForm/goalsFieldDescriptions";

interface Props {
  goal: "targetIncome" | "targetRisk" | "targetYield";
  validated: boolean;
  disabled?: boolean;
  investment?: number;
  active: boolean;
  setActive: (val: string) => void;
  targetRisk?: number;
  setValue: (
    field: string,
    value: number,
    shouldValidate?: boolean | undefined
  ) => void;
}

function TargetField({
  goal,
  disabled,
  investment,
  validated,
  active,
  targetRisk,
  setActive
}: Props) {
  const investmentAmount = investment || 0;
  const { maxYield, maxRisk } = useRecoilValue(inpaasDataSelector);
  const maxIncome = ((maxYield / 100) * investmentAmount * 1000) / 1000 / 12;
  const inputClass = clsx({ validated });
  return (
    <Field
      step={2}
      heading="Choose your target"
      active={active}
      disabled={disabled}
    >
      <span className="field-description">{targetDescription}</span>
      <Row className="mb-3">
        <RadioGroup
          name="goal"
          options={[
            { value: "targetYield", label: "Yield", disabled },
            { value: "targetRisk", label: "Risk", disabled },
            { value: "targetIncome", label: "Dollar", disabled }
          ]}
        />
      </Row>
      <Row className="mb-4">
        {goal === "targetIncome" && (
          <FormikNumberInput
            name="targetIncome"
            maxValue={999_999_999.99}
            helperText={`Max. ${
              !investmentAmount ? " - " : `$${Decimal.format(maxIncome)}`
            } / month`}
            startIcon={<Dollar />}
            disabled={disabled}
            className={inputClass}
            onClick={() => setActive("target")}
          />
        )}
        {goal === "targetYield" && (
          <FormikNumberInput
            align="left"
            maxValue={maxYield}
            name="targetYield"
            helperText={`Max. ${Decimal.format(maxYield)}% / year`}
            percentage
            disabled={disabled}
            className={inputClass}
            onClick={() => setActive("target")}
          />
        )}
        {goal === "targetRisk" && (
          <div className="row d-flex justify-content-between align-items-start">
            <div className="col-12">
              <FormikNumberInput
                align="left"
                maxValue={maxRisk}
                name="targetRisk"
                helperText={`Max. ${Decimal.format(maxRisk)}% / year`}
                percentage
                disabled={disabled}
                className={inputClass}
                onClick={() => setActive("target")}
              />
            </div>
            <div className="col">
              <RiskMeter risk={targetRisk ?? 0} />
            </div>
          </div>
        )}
      </Row>
    </Field>
  );
}

export default TargetField;
