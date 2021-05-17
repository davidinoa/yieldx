import React, { ReactNode } from "react";
import {
  Container,
  EndIcon,
  ErrorText,
  HelperText,
  Icon,
  InputContainer,
  Label,
  NumberFormatInput
} from "../FormikNumberInput/NumberInput.styles";
import clsx from "clsx";
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
  value?: number;
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
  withoutFormatter?: boolean;
  error?: string;
  onValueChange: (newValue: number) => void;
}

export function NumberInput({
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
  value,
  error,
  onFocus,
  onValueChange,
  withoutFormatter,
  placeholder
}: Props) {
  const denominator = withoutFormatter ? 1 : 100;
  const inputClasses = clsx(className, {
    "text-center": align === "center",
    "text-right": align === "right",
    "text-left": align === "left",
    small,
    issue: Boolean(error),
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
          palceholder={placeholder}
          data-testid={`NumberInput-${name}`}
          thousandSeparator
          format={!withoutFormatter ? currencyFormatter : undefined}
          name={name}
          isAllowed={({ floatValue }: { floatValue: number }) =>
            (floatValue / denominator || 0) <= maxValue
          }
          value={value ? value * denominator : undefined}
          isNumericString
          allowEmptyFormatting={false}
          fixedDecimalScale
          onClick={onClick}
          onBlur={onBlur}
          allowLeadingZeros
          disabled={disabled}
          onValueChange={({ floatValue = 0 }: { floatValue: number }) => {
            onValueChange(floatValue / denominator);
          }}
          onFocus={onFocus}
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
        {error && <ErrorText className="err-text">{error}</ErrorText>}
      </div>
    </Container>
  );
}

export default NumberInput;
