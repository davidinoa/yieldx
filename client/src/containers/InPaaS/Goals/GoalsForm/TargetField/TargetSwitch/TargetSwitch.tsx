import React from "react";
import { useField } from "formik";
import {
  Labels,
  Root,
  StyledSwitch
} from "containers/InPaaS/Goals/GoalsForm/TargetField/TargetSwitch/TargetSwitch.styles";

interface Props {
  name: string;
  label?: string;
  disabled?: boolean;
  setActive: () => void;
}

function TargetSwitch({ name, label, disabled, setActive }: Props) {
  const [field, , helpers] = useField(name);
  return (
    <Root>
      <Labels>
        <span className="dollar">Dollar</span>
        <span className="yield">Yield</span>
      </Labels>
      <StyledSwitch
        data-testid="Inpaas-Target-Field-Switch"
        type="switch"
        id="custom-switch"
        label={label || ""}
        onBlur={field.onBlur}
        name={name}
        checked={field.value === "yield"}
        value={field.value}
        onChange={() => {
          helpers.setValue(field.value === "income" ? "yield" : "income");
        }}
        onClick={setActive}
        onFocus={setActive}
        disabled={disabled}
      />
    </Root>
  );
}

export default TargetSwitch;
