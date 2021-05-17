import React from "react";
import { useField } from "formik";
import {
  Input,
  Error,
  Label,
  Container,
  HelperText
} from "./FormikInput.styles";

interface Props {
  name: string;
  label?: string;
  type?: string;
  helperText?: string;
  className?: string;
  disabled?: boolean;
}

function FormikInput({
  name,
  label,
  helperText,
  type,
  className,
  disabled = false
}: Props) {
  const [{ value, onBlur, onChange }, { error, touched }] = useField(name);
  const isPassword = type === "password";
  return (
    <Container
      disabled={disabled}
      // eslint-disable-next-line no-nested-ternary
      invalid={isPassword ? (error ? true : undefined) : Boolean(error)}
      touched={isPassword ? Boolean(error) && true : Boolean(touched)}
      className={className}
    >
      {label && <Label htmlFor={name}>{label}</Label>}
      <Input
        id={name}
        data-testid={`FormikInput-${name}`}
        type={type}
        name={name}
        value={value}
        onBlur={onBlur}
        onChange={onChange}
        disabled={disabled}
      />
      {helperText && <HelperText>{helperText}</HelperText>}
      <Error>{error}</Error>
    </Container>
  );
}

export default FormikInput;
