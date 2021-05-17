import React from "react";
import { Row, Col } from "react-bootstrap";
import { formatNumber } from "../../../../util/formatNumber";
import { Spinner } from "../../../../elements/Spinner/Spinner";

type Props = {
  name: string;
  value?: number;
  suffix?: string;
};

export default function AnalyticSummaryItem(props: Props) {
  const { name, value, suffix } = props;
  return (
    <Col className="analytic">
      <Row>
        <Col className="analytic-name">{name}</Col>
        <Col data-testid="analysis-value" className="analytic-value">
          {value === undefined && <Spinner small />}
          {value === 0
            ? "-"
            : formatNumber(value, { decimalPlaces: 2, suffix })}
        </Col>
      </Row>
    </Col>
  );
}
