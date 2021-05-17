import React from "react";
import { Col } from "react-bootstrap";
import { Link } from "react-router-dom";
import { ReactComponent as LeftChevron } from "../../assets/svg/left.svg";
import { StyledBackLink } from "./BackLink.styles";

interface Props {
  text: string;
  to: string;
}

export default function BackLink({ text, to }: Props) {
  return (
    <StyledBackLink>
      <Col>
        <Link className="list-link" to={to}>
          <LeftChevron />
          <span>{text}</span>
        </Link>
      </Col>
    </StyledBackLink>
  );
}
