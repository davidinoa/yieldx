import React from "react";
import { useRecoilValue } from "recoil";
import { UserType } from "@bondhouse/iam";
import { Redirect, Route, Switch, useLocation } from "react-router-dom";
import { userState } from "services/userState";
import { allInventoriesSelector } from "containers/UniverseManager/UniverseManager";
import { calculateDaysSince } from "util/calculateDaysSince";
import { selectedInventoriesAtom } from "containers/UniverseManager/SetDefaultUniverses/useSetDefaultUniverses";
import Pages from "containers";

if (process.env.NODE_ENV !== "production") {
  localStorage.setItem("debug", "yieldx:*");
} else {
  localStorage.removeItem("debug");
}

const App = () => {
  const { pathname } = useLocation();
  const inventoryIds = useRecoilValue(allInventoriesSelector);
  useRecoilValue(selectedInventoriesAtom);
  const user = useRecoilValue(userState);
  const isTrialExpired = calculateDaysSince(user.createdAt || "") >= 30;
  const isAdmin =
    user.userType === UserType.ADMIN &&
    user.institutionId !== "bondhouse" &&
    user.institutionId !== undefined;
  const isTrialUser = user.userType === UserType.TRIAL;
  const isIndividual =
    user.institutionId === "bondhouse" || user.institutionId === undefined;
  if (isTrialUser && isTrialExpired && !pathname.includes("/trial-expired"))
    return <Redirect to="/trial-expired" />;

  return (
    <Switch>
      <Route path="/trial-expired" component={Pages.TrialExpired} />
      <Route path="/portfolios" component={Pages.Portfolios} />
      <Switch>
        <Route path="/inpaas" component={Pages.InPaaS} />
        <Route path="/login-security" component={Pages.LoginSecurity} />
        <Route path="/users/:userId?" component={Pages.Users} />
        <Route
          path={[
            "/cash-account/investors/:investorId/deposit",
            "/cash-account/investors/:investorId/withdrawal"
          ]}
          component={Pages.Transfers}
        />
        <Route path="/best-fit" component={Pages.BestFit} />
        <Route
          strict
          exact
          path={[
            "/asset-explorer/(search|portfolio-builder|portfolio-review)?",
            "/asset-explorer/(search|portfolio-builder|portfolio-review)/edit"
          ]}
          component={Pages.AssetExplorer}
        />
        <Route path="/favorites" component={Pages.Favorites} />
        <Route path="/privacy-policy" component={Pages.LegalPages} />
        <Route path="/terms-and-conditions" component={Pages.LegalPages} />
        <Route
          path="/cash-account/investors/:investorId"
          component={Pages.CashAccount}
        />
        <Route path="/execute-portfolio" component={Pages.PortfolioExecution} />
        <Route path="/investors">
          {user.userType !== UserType.TRIAL ? (
            <Pages.Investors />
          ) : (
            <Redirect to="/" />
          )}
        </Route>
        {inventoryIds.length > 0 && (
          <Route path="/universes" component={Pages.UniverseManager} />
        )}
        <Route path="/">
          <Pages.Dashboard isAdmin={isAdmin} isIndividual={isIndividual} />
        </Route>
      </Switch>
    </Switch>
  );
};

export default App;
