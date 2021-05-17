import _ from "lodash";
import React, { useEffect } from "react";
import { useSetRecoilState } from "recoil";
import { BestFitCreditQuality } from "@bondhouse/rover-whitelist";
import { Field, useField } from "formik";
import { Option, BestFitQuestion } from "../../PreferencesForm.styles";
import { preferencesState } from "../../../../../recoil-state/bestFit";

export default function QualityStep() {
  const [field, , helpers] = useField("quality");
  const setPreferences = useSetRecoilState(preferencesState);

  useEffect(() => {
    setPreferences(prev => ({
      ...prev,
      quality: field.value,
      currentStepIndex: 0,
      isCurrentValid: !!field.value
    }));
  }, [field.value, setPreferences]);

  const options = Object.values(BestFitCreditQuality).filter(
    val => val !== "Speculative"
  );
  const qualityToLetters: Record<string, string> = {
    "Highest quality": "AAA to A-",
    "Investment grade": "BBB+ to BBB-",
    "High yield": "BB+ to B-"
  };

  return (
    <>
      <h3>What credit quality would you like to target?</h3>
      <Field name="quality">
        {() => {
          return (
            <BestFitQuestion>
              {options.map(option => {
                const key = `${_.kebabCase(option)}-option`;
                const selected = field.value === option;
                return (
                  <Option
                    role="option"
                    key={key}
                    data-testid={key}
                    data-selected={selected}
                    selected={selected}
                    onClick={() => {
                      helpers.setValue(option);
                    }}
                  >
                    <b>{option}</b>
                    <span>{qualityToLetters[option]}</span>
                  </Option>
                );
              })}
            </BestFitQuestion>
          );
        }}
      </Field>
    </>
  );
}
