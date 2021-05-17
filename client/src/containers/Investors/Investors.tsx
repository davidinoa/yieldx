import React from "react";
import { Route, Switch, useRouteMatch } from "react-router-dom";
import { Container, Row } from "react-bootstrap";
import CreateInvestor from "./CreateInvestor/CreateInvestor";
import InvestorAccount from "./InvestorAccount/InvestorAccount";
import InvestorList from "./InvestorList/InvestorList";
import AppNavbar from "components/AppNavbar/AppNavbar";

function Investors() {
  const { path } = useRouteMatch();

  return (
    <Container fluid>
      <Row>
        <Switch>
          <Route exact path={path}>
            <InvestorList />
          </Route>
          <Route path={`${path}/create`}>
            <AppNavbar appName="Create Investor" />
            <CreateInvestor />
          </Route>
          <Route path={`${path}/:investorId`} component={InvestorAccount} />
        </Switch>
      </Row>
    </Container>
  );
}

export default Investors;
