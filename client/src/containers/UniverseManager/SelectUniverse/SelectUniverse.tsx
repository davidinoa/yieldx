import React, { useState } from "react";
import { Col, Container, Row } from "react-bootstrap";
import styled from "styled-components";
import { Link } from "react-router-dom";
import PageTitle from "../../../elements/PageTitle/PageTitle";
import UniverseList from "./UniverseList/UniverseList";
import Button from "../../../elements/Button/Button";
import ContactUs from "../ContactUs/ContactUs";

export const ButtonContainer = styled.div`
  display: flex;
  max-width: fit-content;
  margin-left: auto;
  > *:not(:last-child) {
    margin-right: 1rem;
  }
`;

const SetDefaultButton = styled(Link)`
  width: 205px;
  padding: 6px 22px;
  border: 1px solid var(--white);
  border-radius: 5px;
  font-weight: bold;
  font-size: 15px;
  line-height: 18px;
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
  color: white;
  &:hover {
    color: var(--white);
  }
`;

export const CreateButton = styled(Button)`
  width: 165px;
  text-align: center;
`;

export default function SelectUniverse() {
  const [showContactUs, setShowContactUs] = useState(false);
  return (
    <Container data-testid="select-universe">
      <Row>
        <Col>
          <PageTitle
            page
            subtitle="UNIVERSES"
            title="Select a universe to manage"
            alignment="left"
          />
        </Col>
      </Row>
      <Row className="mb-3">
        <Col>
          <ButtonContainer>
            <SetDefaultButton to="/universes/manage">
              Set default universes
            </SetDefaultButton>
            <CreateButton
              text="Create universe"
              onClick={() => setShowContactUs(true)}
            />
          </ButtonContainer>
          <ContactUs
            show={showContactUs}
            onHide={() => setShowContactUs(false)}
          />
        </Col>
      </Row>
      <Row>
        <UniverseList />
      </Row>
    </Container>
  );
}
