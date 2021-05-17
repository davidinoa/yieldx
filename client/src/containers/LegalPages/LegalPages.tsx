import React from "react";
import { Container, Row } from "react-bootstrap";
import { Link, Route, Switch } from "react-router-dom";
import { useLocation } from "react-router";
import { LegalMenu } from "./LegalPages.style";

import PrivacyPolicy from "./PrivacyPolicy";
import TermsConditions from "./TermsConditions";

export default function LegalPages() {
  const { pathname } = useLocation();

  return (
    <Container fluid>
      <Row>
        <LegalMenu>
          <ul>
            <li>
              <Link
                to="/privacy-policy"
                className={pathname === "/privacy-policy" ? "active" : ""}
              >
                Privacy Policy
              </Link>
            </li>
            <li>
              <Link
                to="/terms-and-conditions"
                className={pathname === "/terms-and-conditions" ? "active" : ""}
              >
                Terms & Conditions
              </Link>
            </li>
          </ul>
        </LegalMenu>
      </Row>
      <Row>
        <Switch>
          <Route path="/privacy-policy" component={PrivacyPolicy} />
          <Route path="/terms-and-conditions" component={TermsConditions} />
        </Switch>
      </Row>
    </Container>
  );
}
