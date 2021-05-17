import React, { useCallback, useEffect } from "react";
import { Field, FieldArray, useField } from "formik";
import { kebabCase } from "lodash";
import { useSetRecoilState } from "recoil";
import {
  SectorQuestion,
  SectorOption
} from "containers/BestFit/PreferencesForm/PreferencesForm.styles";
import { Sector } from "containers/BestFit/BestFit.state";
import { preferencesState } from "recoil-state/bestFit";

export function SectorExclusion() {
  const [field] = useField<Sector[]>("excludedSectors");
  const setPreferences = useSetRecoilState(preferencesState);

  const setExclusionCallback = useCallback(
    (arrayHelpers, val) => {
      if (field.value.includes(val)) {
        const index = field.value.indexOf(val);
        arrayHelpers.remove(index);
      } else {
        if (field.value.length < 3) {
          arrayHelpers.push(val);
        }
      }
    },
    [field.value]
  );

  useEffect(() => {
    setPreferences(prev => ({
      ...prev,
      excludedSectors: field.value
    }));
  }, [field.value, setPreferences]);

  return (
    <>
      <p className="instruction">Choose up to 3 exclusions</p>
      <h3>Which sectors would you like to exclude?</h3>
      <Field
        name="excludedSectors"
        component={() => (
          <FieldArray
            name="excludedSectors"
            render={arrayHelpers => (
              <SectorQuestion>
                {Object.values(Sector).map((val: Sector) => {
                  const key = `${kebabCase(val)}-option`;
                  const selected = field.value.includes(val);
                  return (
                    <SectorOption
                      role="option"
                      key={key}
                      data-testid={key}
                      data-selected={selected}
                      selected={selected}
                      onClick={() => setExclusionCallback(arrayHelpers, val)}
                    >
                      <b>{val}</b>
                    </SectorOption>
                  );
                })}
              </SectorQuestion>
            )}
          />
        )}
      />
    </>
  );
}
