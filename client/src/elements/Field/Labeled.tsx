import clsx from "clsx";
import React, { ReactNode } from "react";
import { Row, Col, ColProps, RowProps } from "react-bootstrap";
import styled from "styled-components";
import { mediaQuery } from "theme/breakpoints.style";

const Val = styled.span`
  margin: 0.125rem 0.25rem;
  font-weight: bold;
  color: var(--text);
  font-size: 0.725rem;
  ${mediaQuery("xxl")} {
    font-size: 0.875rem;
  }
  line-height: normal;
`;

const Label = styled.span`
  margin: 0.125rem 0.25rem;
  font-weight: bold;
  font-size: 0.6rem;
  letter-spacing: 0.2em;
  text-transform: uppercase;
  color: var(--subtext-3);
  ${mediaQuery("xxl")} {
    font-size: 0.6875rem;
  }
`;

export type LabeledFieldProps = {
  value: React.ReactNode;
  label: React.ReactNode;
  reverse?: boolean;
  align?: "start" | "center" | "end";
  orientation?: "row" | "column";
} & ColProps &
  RowProps;

const reversedAlignment: { [key: string]: string } = {
  start: "end",
  end: "start",
  center: "center"
};

function GridItem({
  orientation,
  ...containerProps
}: {
  orientation: "row" | "column";
} & ColProps &
  RowProps) {
  const classes = `${containerProps.className || ""} ${clsx("text-truncate")}`;
  return orientation === "column" ? (
    <Col {...containerProps} className={classes} />
  ) : (
    <Row {...containerProps} className={classes} />
  );
}

export function LabeledField({
  value,
  label,
  reverse = false,
  orientation = "column",
  align = "start",
  ...containerProps
}: LabeledFieldProps) {
  let combinedClasses = `d-flex flex-${orientation}`;

  const isReversed =
    (orientation === "row" && reverse === false) ||
    (orientation === "column" && reverse);

  if (isReversed) combinedClasses += "-reverse";

  if (orientation === "column") {
    combinedClasses += ` align-items-${align}`;
  } else {
    combinedClasses += ` justify-content-${
      isReversed ? align : reversedAlignment[align]
    }`;
  }

  return (
    <GridItem
      orientation={orientation}
      {...containerProps}
      className={clsx(combinedClasses)}
    >
      <Val>{value}</Val>
      <Label>{label}</Label>
    </GridItem>
  );
}
