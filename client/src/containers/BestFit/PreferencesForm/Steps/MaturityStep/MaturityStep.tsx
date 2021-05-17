import React, { useEffect } from "react";
import { useSetRecoilState } from "recoil";
import { useField } from "formik";
import Slider, { SliderItem } from "../../../../../elements/Slider/Slider";
import { preferencesState } from "../../../../../recoil-state/bestFit";
import {
  Field,
  Toggle,
  ToggleButton,
  BestFitQuestion
} from "../../PreferencesForm.styles";

const sliderItems: SliderItem[] = Array(7)
  .fill(null)
  .map((item, i) => {
    return {
      value: i + 3,
      label: `${i + 3} years`
    };
  });

export default function MaturityStep() {
  const [timeMetricField, , timeMetricHelpers] = useField("timeMetric");
  const [yearsField, , yearsFieldHelpers] = useField("years");
  const timeMetric = timeMetricField.value;
  const years = yearsField.value;
  const setPreferences = useSetRecoilState(preferencesState);

  useEffect(() => {
    setPreferences(prev => ({
      ...prev,
      timeMetric,
      years
    }));
  }, [setPreferences, years, timeMetric]);

  return (
    <>
      <p className="instruction">drag to select an option</p>
      <h3>
        Please select a {timeMetric} target
        <Toggle>
          <ToggleButton
            data-testid="maturity-toggle"
            selected={timeMetric === "maturity"}
            onClick={() => {
              timeMetricHelpers.setValue("maturity");
            }}
          >
            maturity
          </ToggleButton>
          <ToggleButton
            data-testid="duration-toggle"
            selected={timeMetric === "duration"}
            onClick={() => {
              timeMetricHelpers.setValue("duration");
            }}
          >
            duration
          </ToggleButton>
        </Toggle>
      </h3>

      <Field name="timeMetric">
        <BestFitQuestion className="maturity-step">
          <Slider
            startLabel={sliderItems[0].label?.toUpperCase()}
            endLabel={sliderItems[sliderItems.length - 1].label?.toUpperCase()}
            sliderItems={sliderItems}
            currValue={sliderItems.find((sliderItem: SliderItem) => {
              return sliderItem.value === years;
            })}
            onChange={(sliderItem: SliderItem) => {
              yearsFieldHelpers.setValue(sliderItem.value);
            }}
          />
        </BestFitQuestion>
      </Field>
    </>
  );
}
