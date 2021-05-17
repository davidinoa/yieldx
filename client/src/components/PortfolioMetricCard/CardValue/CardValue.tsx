import React from "react";
import Decimal from "../../../util/Decimal";
import { Root } from "./CardValue.styles";

interface Value {
  number: number;
  format: "%" | "$" | "bps";
  helperText?: string;
}

interface Props {
  value: Value;
  secondValue?: Value;
}

function renderValue({ number, format, helperText }: Value) {
  const formattedValue = Decimal.format(
    format === "bps" ? Math.round(number) : number
  );
  return (
    <>
      {format === "$" && `$${formattedValue.split(".")[0]}`}
      {format === "%" && formattedValue}
      {format === "bps" && `${formattedValue.split(".")[0]}`}
      {format === "%" && <sup>%</sup>}
      {format === "bps" && <sup>bps</sup>}
      {format === "$" && <sup>.{formattedValue.split(".")[1]}</sup>}
      {helperText && <span>{`/${helperText}`}</span>}
    </>
  );
}

export default function CardValue({ value, secondValue }: Props) {
  return (
    <Root>
      {secondValue === undefined && renderValue(value)}
      {secondValue !== undefined && (
        <div className="d-flex justify-content-between align-items-center">
          <div>{renderValue(value)}</div>
          <div className="allocation-separator" />
          <div>{renderValue(secondValue)}</div>
        </div>
      )}
    </Root>
  );
}
