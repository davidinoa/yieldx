import React from "react";
import { useField } from "formik";
import { Error, Input } from "./TextInput.styles";
import { FormGroup, Label, OptionalLabel } from "../elements";

interface Props {
  name: string;
  label: string;
  className?: string;
  xs?: number;
  type?: string;
  error?: string;
  readOnly?: boolean;
  disabled?: boolean;
  optional?: boolean;
  optionalLabel?: string;
}

function TextInput({
  name,
  label,
  className,
  xs,
  error,
  type = "text",
  readOnly,
  disabled,
  optional,
  optionalLabel
}: Props) {
  const [field, meta] = useField(name);
  return (
    <FormGroup
      xs={xs}
      invalid={error || meta.error}
      touched={String(meta.touched)}
      className={className}
    >
      <Label htmlFor={name}>{label}</Label>
      {optional && (
        <OptionalLabel htmlFor={name}>{` (optional)`}</OptionalLabel>
      )}
      <Input
        readOnly={readOnly}
        disabled={disabled}
        id={name}
        type={type}
        name={field.name}
        value={field.value}
        onBlur={field.onBlur}
        onChange={field.onChange}
        data-testid={`${name.replace(/\./g, "-")}-input-text`}
      />
      {optional && (
        <OptionalLabel htmlFor={name}>{optionalLabel}</OptionalLabel>
      )}
      <div style={{ position: "relative" }}>
        {!readOnly && meta.touched && meta.error && <Error>{meta.error}</Error>}
      </div>
    </FormGroup>
  );
}

export default TextInput;
