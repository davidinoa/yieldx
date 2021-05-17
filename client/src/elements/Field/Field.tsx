import React, { ReactNode } from "react";
import { Row, Col } from "react-bootstrap";
import clsx from "clsx";
import Tooltip from "elements/Tooltip/Tooltip";
import {
  Circle,
  InPaaSBoxContainer,
  Heading,
  Root,
  Subheading
} from "./Field.styles";
import { LabeledField } from "./Labeled";

export type FieldProps = {
  step: number;
  heading: string;
  children: ReactNode;
  subheading?: string;
  className?: string;
  active: boolean;
  disabled?: boolean;
  tooltipContent?: string;
};

export function Field({
  step,
  heading,
  subheading,
  children,
  className,
  active,
  disabled,
  tooltipContent
}: FieldProps) {
  return (
    <Root className={clsx({ disabled }, className)}>
      <InPaaSBoxContainer fluid>
        <Row>
          <Col>
            <Row>
              <Col>
                <Circle className={clsx({ active })}>{step}</Circle>
              </Col>
            </Row>
            <Row>
              <Heading>
                <h2>
                  {heading}
                  &nbsp;
                  {tooltipContent && <Tooltip content={tooltipContent} />}
                </h2>
                {subheading && <Subheading>{subheading}</Subheading>}
              </Heading>
            </Row>
          </Col>
        </Row>
        <Row className="flex-grow-1 flex-shrink-1">
          <div className="col d-flex flex-column justify-content-between">
            {children}
          </div>
        </Row>
      </InPaaSBoxContainer>
    </Root>
  );
}

Field.Labeled = LabeledField;

export default Field;
