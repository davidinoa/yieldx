import React, { useEffect } from "react";
import { useHistory, useLocation } from "react-router-dom";
import { Container, Row } from "react-bootstrap";
import AccountNav from "./AccountNav/AccountNav";
import {
  InvestorAccountContent,
  InvestorAccountNav
} from "./InvestorAccount.styles";
import AccountSection from "./AccountSection/AccountSection";

import PageTitle from "elements/PageTitle/PageTitle";
import ErrorBoundary from "elements/ErrorBoundary/ErrorBoundary";
import BackLink from "elements/BackLink/BackLink";

function InvestorAccount() {
  const history = useHistory();
  const { hash, pathname } = useLocation();
  const title = hash.slice(1).replace("-", " ");

  useEffect(() => {
    if (!hash) {
      history.replace(`${pathname}#general-info`);
    }
  }, [history, hash, pathname]);

  const headings: { [section: string]: string } = {
    "general-info": "Check your account information",
    portfolios: "Select a portfolio",
    "linked-banks": "Manage bank accounts",
    "unlink-bank": "Manage bank accounts",
    "investor-details": "Review or edit investor details",
    statements: "Select a statement",
    "close-investor": "Check your account information"
  };

  return (
    <ErrorBoundary>
      <Container>
        <BackLink text="All Accounts" to="/investors" />
        <Row>
          <PageTitle
            subtitle={title}
            title={headings[hash.slice(1)]}
            page
            alignment="left"
          />
        </Row>
        <Row>
          <InvestorAccountNav>
            <AccountNav />
          </InvestorAccountNav>
          <InvestorAccountContent>
            <AccountSection />
          </InvestorAccountContent>
        </Row>
      </Container>
    </ErrorBoundary>
  );
}

export default InvestorAccount;
