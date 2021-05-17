import React from "react";
import { Col, Row } from "react-bootstrap";
import { PageTitleWrapper } from "./PageTitle.style";

type Props = {
  subtitle?: string;
  title: string;
  alignment?: string;
  page?: boolean;
  reversed?: boolean;
};

export default function PageTitle({
  title,
  subtitle,
  alignment = "center",
  page = false,
  reversed
}: Props) {
  return (
    <PageTitleWrapper fluid>
      <Row>
        <Col className={`${alignment} ${page ? "default-page" : ""}`}>
          <h1 data-testid="PageTitle">
            {reversed ? (
              <>
                {title}
                {subtitle && <small className="reversed">{subtitle}</small>}
              </>
            ) : (
              <>
                {subtitle && <small>{subtitle}</small>}
                {title}
              </>
            )}
          </h1>
        </Col>
      </Row>
    </PageTitleWrapper>
  );
}
