import React from "react";
import { useField } from "formik";
import { Col } from "react-bootstrap";
import noOp from "util/noOp";
import RadioButton, { GroupLabel } from "./RadioGroup.styles";

type RadioProps<T> = {
  name: string;
  label?: string;
  options: { value: T; label: string; disabled?: boolean }[];
  className?: string;
  value: T;
  onChange?: (value: T) => void;
};

function RadioGroupComponent<T>({
  name,
  label,
  value,
  options,
  className,
  onChange = noOp
}: RadioProps<T>) {
  return (
    <Col className={className}>
      {label && <GroupLabel htmlFor={name}>{label}</GroupLabel>}
      {options.map(option => (
        <RadioButton
          disabled={option.disabled}
          name={name}
          id={name.concat(option.label)}
          key={option.label}
          label={option.label}
          checked={option.value === value}
          onChange={() => onChange(option.value)}
        />
      ))}
    </Col>
  );
}

/*
 * RadioGroup needs to be a direct decendant of Formik
 * Use @RadioGroup.Component for a raw RadioGroup input
 */
function RadioGroup<T>({
  name,
  label,
  options,
  className
}: Omit<RadioProps<T>, "value" | "onChange">) {
  const [field, , helper] = useField<T>(name);
  return (
    <RadioGroupComponent
      onChange={helper.setValue}
      options={options}
      name={name}
      label={label}
      value={field.value}
      className={className}
    />
  );
}

RadioGroup.Component = RadioGroupComponent;

export { RadioGroup };
export default RadioGroup;
