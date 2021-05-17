import React from "react";
import { Col } from "react-bootstrap";
import { StyledHeading } from "./ReviewCreateInvestor.styles";

interface Props {
  title: string;
  onClick?: () => void;
  editStatus?: boolean;
}

function SectionHeading({ title, onClick, editStatus = true }: Props) {
  return (
    <StyledHeading>
      <Col xs={{ span: 18, offset: 3 }}>
        <h1>{title}</h1>
      </Col>
      <Col xs={3} className="d-flex justify-content-center">
        {onClick && editStatus && (
          <button
            type="button"
            onClick={onClick}
            data-testid={`edit-${title.replace(/ /g, "-")}`}
          >
            Edit
          </button>
        )}
      </Col>
    </StyledHeading>
  );
}
export default SectionHeading;
