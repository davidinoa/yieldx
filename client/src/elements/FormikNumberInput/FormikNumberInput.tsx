import React, { ReactNode } from "react";
import { useField } from "formik";
import clsx from "clsx";
import {
  Container,
  EndIcon,
  ErrorText,
  HelperText,
  Icon,
  InputContainer,
  Label,
  NumberFormatInput
} from "./NumberInput.styles";
import { ReactComponent as Percent } from "../../assets/svg/percent.svg";

export function currencyFormatter(value: string) {
  if (!Number(value)) return "";
  const amount = new Intl.NumberFormat("en-US", {
    minimumFractionDigits: 2,
    maximumFractionDigits: 2
  }).format(parseFloat(value) / 100);
  return `${amount}`;
}

interface Props extends React.HtmlHTMLAttributes<HTMLInputElement> {
  name: string;
  type?: string;
  disabled?: boolean;
  helperText?: string;
  endIcon?: ReactNode;
  startIcon?: ReactNode;
  align?: "left" | "right" | "center";
  label?: string;
  small?: boolean;
  hidden?: boolean;
  percentage?: boolean;
  decimalScale?: number;
  maxValue?: number;
  onBlur?: () => void;
  withoutFormatter?: boolean;
}

function FormikNumberInput({
  name,
  align,
  endIcon,
  startIcon,
  disabled,
  className,
  helperText,
  label,
  small,
  onClick,
  hidden,
  percentage,
  decimalScale,
  maxValue = 999_999_999.99,
  onBlur,
  withoutFormatter
}: Props) {
  const [field, meta, helpers] = useField(name);
  const denominator = withoutFormatter ? 1 : 100;
  const inputClasses = clsx(className, {
    "text-center": align === "center",
    "text-right": align === "right",
    "text-left": align === "left",
    small,
    issue: Boolean(meta.error),
    "end-icon": Boolean(endIcon),
    "start-icon": Boolean(startIcon)
  });
  return (
    <Container className={clsx({ hidden })}>
      {label && <Label htmlFor={name}>{label}</Label>}
      <InputContainer percentage={percentage}>
        {startIcon && <Icon>{startIcon}</Icon>}
        <NumberFormatInput
          id={name}
          data-testid={`NumberInput-${name}`}
          thousandSeparator
          format={!withoutFormatter ? currencyFormatter : undefined}
          name={field.name}
          isAllowed={({ floatValue }: { floatValue: number }) =>
            (floatValue / denominator || 0) <= maxValue
          }
          value={field.value * denominator}
          isNumericString
          allowEmptyFormatting={false}
          fixedDecimalScale
          onClick={onClick}
          onBlur={(e: FocusEvent) => {
            if (onBlur != null) {
              onBlur();
            }
            field.onBlur(e);
          }}
          allowLeadingZeros
          disabled={disabled}
          onValueChange={({ floatValue = 0 }: { floatValue: number }) => {
            if (!meta.touched) {
              helpers.setTouched(true);
            }
            helpers.setValue(floatValue / denominator);
          }}
          onFocus={(e: React.FocusEvent<HTMLInputElement>) => {
            if (field.value !== undefined) e.target.select();
          }}
          className={inputClasses}
          decimalScale={decimalScale ?? 2}
          displayType="input"
        />
        {percentage && (
          <EndIcon>
            <Percent />
          </EndIcon>
        )}
        {endIcon && <EndIcon>{endIcon}</EndIcon>}
      </InputContainer>
      <div style={{ position: "relative" }}>
        {helperText && <HelperText>{helperText}</HelperText>}
        {meta.error && meta.touched && (
          <ErrorText className="err-text">{meta.error}</ErrorText>
        )}
      </div>
    </Container>
  );
}

export default FormikNumberInput;
