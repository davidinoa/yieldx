import React from "react";
import { Switch } from "react-router";
import { Route, useRouteMatch } from "react-router-dom";
import { EditSinglePosition } from "containers/Portfolios/EditSinglePosition/EditSinglePosition";
import { YieldxRoutes } from "hooks/useRouting";
import PortfolioList from "./PortfolioList/PortfolioList";
import PortfolioDisplay from "./PortfolioDisplay/PortfolioDisplay";
import CashBalanceReview from "./CashBalanceReview/CashBalanceReview";

export default function Portfolios() {
  const { path } = useRouteMatch();
  return (
    <Switch>
      <Route
        path={YieldxRoutes.EDIT_PORTFOLIO_POSITION}
        component={EditSinglePosition}
      />
      <Route
        exact
        path={YieldxRoutes.EDIT_PORTFOLIO}
        component={CashBalanceReview}
      />
      <Route
        exact
        path={YieldxRoutes.VIEW_PORTFOLIO}
        component={PortfolioDisplay}
      />
      <Route exact path={path} component={PortfolioList} />
    </Switch>
  );
}
