import React from "react";
import { Col, Row } from "react-bootstrap";
import { CardOutlined, CardOutlinedBorderTop } from "theme/styles";
import {
  ChangeButton,
  Label,
  Value
} from "containers/Transfers/ConfirmAccounts/ConfirmAccounts.styles";

interface Props {
  title: string;
  items: Record<string, string>;
  buttonLabel: string;
  onClick: () => void;
}

export function ExecutionCard({ title, buttonLabel, items, onClick }: Props) {
  return (
    <CardOutlined>
      <CardOutlinedBorderTop className="justify-content-center">
        <h3 className="pt-2 pb-2">{title}</h3>
      </CardOutlinedBorderTop>
      <div className="d-flex flex-column">
        {Object.entries(items).map(([label, value], i) => (
          <Row
            key={label}
            className={`justify-content-center mt-${i === 0 ? "5" : "3"}`}
          >
            <Col xs={7} className="ml-4">
              <Label>{label}</Label>
            </Col>
            <Col xs={7} className="ml-4">
              <Value>{value}</Value>
            </Col>
          </Row>
        ))}
        <div className="change-container mt-5">
          <ChangeButton onClick={onClick}>{buttonLabel}</ChangeButton>
        </div>
      </div>
    </CardOutlined>
  );
}
