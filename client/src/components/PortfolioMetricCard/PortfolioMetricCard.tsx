import React, { useState } from "react";
import { Col } from "react-bootstrap";
import Tooltip from "../../elements/Tooltip/Tooltip";
import { ReactComponent as Edit } from "../../assets/svg/edit.svg";
import { CardHeader, CardRoot, EditLink } from "./PortfolioMetricCard.styles";
import { ColBreakPoints } from "../../theme/breakpoints.style";
import CardValue from "./CardValue/CardValue";
import ToggleValue from "./ToggleValue/ToggleValue";
import { Spinner } from "../../elements/Spinner/Spinner";

export type ValueFormat = "%" | "$" | "bps";
type ToggleValueOptions = {
  label: string;
  number?: number;
  toggleLabel?: ValueFormat | string;
  format: ValueFormat;
  tooltipContent?: string;
  helperText?: string;
};

interface ToggleProps extends ColBreakPoints {
  defaultToggleLabel?: ValueFormat | string;
  value?: ToggleValueOptions;
  secondValue?: ToggleValueOptions;
  toggle?: JSX.Element;
  children?: never;
  onEdit?: () => void;
  label?: never;
  tooltipContent?: never;
}

interface CustomContentProps extends ColBreakPoints {
  children: JSX.Element | JSX.Element[];
  label: string;
  tooltipContent?: string;
  toggle?: never;
  defaultToggleLabel?: never;
  value?: never;
  secondValue?: never;
  onEdit?: never;
}

export default function PortfolioMetricCard(
  props: ToggleProps | CustomContentProps
) {
  const {
    toggle,
    children,
    onEdit,
    value,
    secondValue,
    defaultToggleLabel,
    label,
    tooltipContent,
    xs
  } = props;
  const [currentToggleLabel, setCurrentToggleLabel] = useState(
    defaultToggleLabel
  );
  let currentValue: ToggleValueOptions | undefined = value;
  if (
    secondValue !== undefined &&
    currentToggleLabel === secondValue.toggleLabel
  )
    currentValue = secondValue;
  return (
    <Col xs={xs} className="mb-1" data-testid="Portfolio-Metric-Card">
      <CardRoot>
        <CardHeader className="d-flex align-items-center">
          {currentValue !== undefined ? currentValue.label : label}
          {tooltipContent && <Tooltip content={tooltipContent} />}
          {!tooltipContent && currentValue && currentValue.tooltipContent && (
            <Tooltip content={currentValue.tooltipContent} />
          )}
          {value &&
            currentValue &&
            currentValue.toggleLabel &&
            value.toggleLabel &&
            secondValue &&
            secondValue.toggleLabel && (
              <ToggleValue
                className="ml-auto"
                onToggle={() => {
                  if (currentValue?.toggleLabel === secondValue?.toggleLabel)
                    setCurrentToggleLabel(value.toggleLabel);
                  else setCurrentToggleLabel(secondValue?.toggleLabel);
                }}
                switchToggleLabels={
                  currentValue.toggleLabel === "%" ||
                  currentValue.toggleLabel === "$"
                    ? ["%", "$"]
                    : undefined
                }
                current={currentValue.toggleLabel}
              />
            )}
          {!currentValue?.toggleLabel && toggle}
          {onEdit && (
            <EditLink data-testid="Card-EditLink" onClick={onEdit}>
              <Edit /> Edit
            </EditLink>
          )}
        </CardHeader>
        {children !== undefined && children}

        {currentValue !== undefined && currentValue.number === undefined && (
          <Spinner />
        )}
        {currentValue !== undefined && currentValue.number !== undefined && (
          <CardValue
            value={{
              number: currentValue.number,
              format: currentValue.format,
              helperText: currentValue.helperText
            }}
          />
        )}
      </CardRoot>
    </Col>
  );
}
