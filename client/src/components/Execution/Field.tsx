import Tooltip from "elements/Tooltip/Tooltip";
import React from "react";
import styled from "styled-components";

const FieldContainer = styled.div`
  display: flex;
  flex-direction: row;
  flex: 1;
  align-items: center;
  justify-content: space-between;
  margin: 6px;
`;
const FieldLabel = styled.div`
  display: flex;
  flex-direction: column;
  flex: 1;
  min-width: 17em;
  font-style: normal;
  font-weight: bold;
  font-size: 11px;
  line-height: 13px;
  letter-spacing: 0.2em;
  text-transform: uppercase;

  color: #6980a6;
`;

const FieldValue = styled.div`
  display: flex;
  flex-direction: column;
  flex: 1;

  font-style: normal;
  font-weight: normal;
  font-size: 16px;
  line-height: 26px;
  text-align: right;

  color: #ffffff;
`;
// REF: stackoverflow.com/questions/149055/how-to-format-numbers-as-currency-string
const formatter = new Intl.NumberFormat("en-US", {
  style: "currency",
  currency: "USD"
});

function Field({
  label,
  value = "",
  helpText,
  type = "string"
}: {
  label: string;
  value?: string | number | null;
  helpText?: string;
  type?: "string" | "money" | "unit" | "percent";
}): JSX.Element {
  let body: string | number;
  const isNaN = value === undefined || value === null;

  switch (type) {
    case "money":
      body = formatter.format(Number(value));
      break;
    case "percent":
      body = `${Number(value).toFixed(2)}%`;
      break;
    default:
      body = `${value}`;
      break;
  }
  return (
    <FieldContainer>
      <FieldLabel>{label}</FieldLabel>
      <FieldValue>{isNaN ? "N/A" : body}</FieldValue>
      {helpText && <Tooltip content={helpText} />}
    </FieldContainer>
  );
}

Field.Container = FieldContainer;
Field.Label = FieldLabel;
Field.Value = FieldValue;

export { Field };
