import React from "react";
import { useField } from "formik";
import { Label, FormGroup } from "../elements";
import { Input, Error } from "./NumberInput.styles";

interface Props {
  name: string;
  label: string;
  className?: string;
  suffix?: string;
  prefix?: string;
  error?: string;
  xs?: number;
  decimalScale?: number;
  format?: string;
  maxLen?: number;
  asString?: boolean;
}

function NumberInput({
  name,
  label,
  className,
  suffix,
  prefix,
  xs,
  maxLen,
  format,
  asString,
  error,
  decimalScale = 2
}: Props) {
  const [field, meta, helpers] = useField(name);
  return (
    <FormGroup
      invalid={error || meta.error}
      touched={String(meta.touched)}
      className={className}
      xs={xs}
    >
      <Label htmlFor={name}>{label}</Label>
      <Input
        id={name}
        name={name}
        suffix={suffix}
        format={format}
        allowLeadingZeros={false}
        allowNegative={false}
        decimalScale={decimalScale}
        fixedDecimalScale
        thousandSeparator
        value={field.value}
        isAllowed={
          maxLen
            ? ({ floatValue }: { floatValue: number }) => {
                const trimmedLen = floatValue?.toString()?.length || 0;
                return trimmedLen <= maxLen;
              }
            : undefined
        }
        onBlur={() => helpers.setTouched(true)}
        onValueChange={({
          floatValue,
          formattedValue
        }: {
          floatValue: number;
          formattedValue: string;
        }) => {
          if (asString) helpers.setValue(formattedValue);
          else helpers.setValue(floatValue);
        }}
        prefix={prefix}
        data-testid={`${name.replace(/\./g, "-")}-input-text`}
      />
      <div style={{ position: "relative" }}>
        {meta.touched && meta.error && <Error>{meta.error}</Error>}
      </div>
    </FormGroup>
  );
}

export default NumberInput;
