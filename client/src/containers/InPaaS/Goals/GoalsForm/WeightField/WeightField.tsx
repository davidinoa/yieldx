import React from "react";
import Field from "elements/Field/Field";
import { InputGroup } from "containers/InPaaS/Goals/GoalsForm/GoalsForm.styles";
import AllocationSlider from "elements/AllocationSlider/AllocationSlider";
import { constraintsDescription } from "containers/InPaaS/Goals/GoalsForm/goalsFieldDescriptions";

interface Props {
  disabled?: boolean;
  active: boolean;
  startValue: [number, number];
  setWeight: (range: [number, number]) => void;
  setActive: (val: string) => void;
}

function WeightField({
  disabled,
  active,
  setActive,
  setWeight,
  startValue
}: Props) {
  return (
    <Field
      step={3}
      heading="Set portfolio diversification"
      active={active}
      disabled={disabled}
    >
      <span className="field-description">{constraintsDescription}</span>
      <InputGroup className="d-flex justify-content-around text-left mt-3 mb-5">
        <AllocationSlider
          minDistance={15}
          min={5}
          max={30}
          onSliderClick={() => setActive("allocation")}
          defaultValue={startValue}
          onChange={value => {
            if (Array.isArray(value) && value.length === 2) {
              setWeight(value as [number, number]);
            }
          }}
        />
      </InputGroup>
    </Field>
  );
}

export default WeightField;
