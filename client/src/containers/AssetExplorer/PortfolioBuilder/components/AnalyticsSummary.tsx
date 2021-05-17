import React from "react";
import { Row, Col } from "react-bootstrap";
import { Analysis } from "@bondhouse/rover-portfolio-analyzer";
import AnalyticSummaryItem from "./AnalyticSummaryItem";

type Props = {
  analysis: Analysis | null | undefined;
};

export default function AnalyticsSummary(props: Props) {
  const { analysis } = props;
  // eslint-disable-next-line @typescript-eslint/ban-ts-comment
  // @ts-ignore
  const yld = analysis?.yield;
  return (
    <Col className="analytics">
      <Row>
        <Col>
          <h3>Analytics summary</h3>
        </Col>
      </Row>
      <Row>
        <Col className="data-container" data-testid="analysis">
          <AnalyticSummaryItem name="Yield" value={yld} suffix="%" />
          <AnalyticSummaryItem name="Risk" value={analysis?.risk} suffix="%" />
        </Col>
      </Row>
    </Col>
  );
}
