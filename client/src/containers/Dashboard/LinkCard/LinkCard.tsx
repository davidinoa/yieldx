import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import { useHistory } from "react-router";
import clsx from "clsx";
import { LinkCardWrapper, HighlightImg } from "./LinkCard.style";

type Props = {
  appName?: string;
  highlight?: boolean;
  icon?: React.ReactNode;
  title?: string;
  text?: string;
  buttonLabel?: string;
  link?: string;
};

export default function LinkCard({
  appName,
  highlight,
  icon,
  title,
  text,
  buttonLabel,
  link
}: Props) {
  const history = useHistory();

  return (
    <>
      <Container fluid>
        <Row>
          <LinkCardWrapper
            className={clsx(appName ? "app" : "", highlight ? "highlight" : "")}
          >
            <Row>
              <Col className="link-card-content">
                {appName && (
                  <Row>
                    <Col className="link-app-header">
                      <h4>
                        {icon}
                        {appName}
                      </h4>
                    </Col>
                  </Row>
                )}
                <Row>
                  <Col>
                    <h3>{title}</h3>
                  </Col>
                </Row>
                <Row>
                  <Col>
                    <p>{text}</p>
                  </Col>
                </Row>
                <Row>
                  <Col>
                    <button
                      type="button"
                      data-testid={`LinkCard-Button-${(title || "").replace(
                        / |\./gm,
                        ""
                      )}`}
                      onClick={() => history.push(`${link}`)}
                    >
                      {buttonLabel}
                    </button>
                  </Col>
                </Row>
              </Col>
              {highlight && (
                <HighlightImg>
                  <div />
                </HighlightImg>
              )}
            </Row>
          </LinkCardWrapper>
        </Row>
      </Container>
    </>
  );
}
