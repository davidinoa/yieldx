import React, { useEffect } from "react";
import { useField } from "formik";
import { useSetRecoilState } from "recoil";
import { Option, BestFitQuestion, Field } from "../../PreferencesForm.styles";
import { preferencesState } from "../../../../../recoil-state/bestFit";

export default function WeightingStep() {
  const [field, , helpers] = useField("weighting");
  const setPreferences = useSetRecoilState(preferencesState);

  const maximizeYieldSelected = field.value === "maximizeYield";
  const minimizeRiskSelected = field.value === "minimizeRisk";
  const balanceSelected = field.value === "minimizeConcentration";

  useEffect(() => {
    setPreferences(prev => ({
      ...prev,
      weighting: field.value,
      isCurrentValid: Boolean(field.value)
    }));
  }, [field.value, setPreferences]);

  useEffect(() => {
    if (field.value === undefined) {
      setPreferences(prev => ({
        ...prev,
        isCurrentValid: false
      }));
    }
  }, [field.value, setPreferences]);
  return (
    <>
      <h3>Which weighting approach would you like?</h3>
      <Field name="weighting">
        <BestFitQuestion>
          <Option
            data-testid="maximize-yield-option"
            data-selected={maximizeYieldSelected}
            selected={maximizeYieldSelected}
            onClick={() => {
              helpers.setValue("maximizeYield");
            }}
          >
            <b>Maximize Income</b>
          </Option>
          <Option
            data-testid="minimize-risk-option"
            data-selected={minimizeRiskSelected}
            selected={minimizeRiskSelected}
            onClick={() => {
              helpers.setValue("minimizeRisk");
            }}
          >
            <b>Minimize Risk</b>
          </Option>
          <Option
            data-testid="balance-option"
            data-selected={balanceSelected}
            selected={balanceSelected}
            onClick={() => {
              helpers.setValue("minimizeConcentration");
            }}
          >
            <b>Balance</b>
          </Option>
        </BestFitQuestion>
      </Field>
    </>
  );
}
