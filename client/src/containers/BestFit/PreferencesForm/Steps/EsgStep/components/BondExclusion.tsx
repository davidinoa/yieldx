import React, { useCallback, useEffect } from "react";
import { Field, useField } from "formik";
import { useSetRecoilState } from "recoil";
import {
  BestFitQuestion,
  Option
} from "containers/BestFit/PreferencesForm/PreferencesForm.styles";
import { ExcludedEsgScorePercentile } from "containers/BestFit/BestFit.state";
import { preferencesState } from "recoil-state/bestFit";

export function BondExclusion() {
  const [field, , helpers] = useField<number>("excludedEsgScorePercentile");
  const setPreferences = useSetRecoilState(preferencesState);

  const setOptionValueCallback = useCallback(
    (selected, option) => {
      if (selected) {
        helpers.setValue(0);
      } else {
        helpers.setValue(option);
      }
    },
    [helpers]
  );

  useEffect(() => {
    setPreferences(prev => ({
      ...prev,
      excludedEsgScorePercentile: field.value
    }));
  }, [field.value, setPreferences]);

  return (
    <>
      <h3>Exclude bonds from the universe with low ESG scores?</h3>
      <Field name="excludedEsgScorePercentile">
        {() => (
          <BestFitQuestion>
            {ExcludedEsgScorePercentile.map(option => {
              const key = `${option}-option`;
              const selected = field.value === option;
              return (
                <Option
                  role="option"
                  key={key}
                  data-testid={key}
                  data-selected={selected}
                  selected={selected}
                  onClick={() => setOptionValueCallback(selected, option)}
                  bondOption={true}
                >
                  <b>Exclude</b>
                  <b>the bottom</b>
                  <strong>{`${option}%`}</strong>
                </Option>
              );
            })}
          </BestFitQuestion>
        )}
      </Field>
    </>
  );
}
