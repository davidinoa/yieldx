import React from "react";
import { useDidMount } from "beautiful-react-hooks";
import { useRecoilValue, useResetRecoilState } from "recoil";
import {
  Redirect,
  Route,
  Switch,
  useLocation,
  useRouteMatch
} from "react-router-dom";
import LandingPage from "../../components/LandingPage/LandingPage";
import PreferencesForm from "./PreferencesForm/PreferencesForm";
import AppNavbar from "../../components/AppNavbar/AppNavbar";
import PortfolioReview from "../../components/PortfolioReview/PortfolioReview";
import {
  bestFitReviewState,
  preferencesState
} from "../../recoil-state/bestFit";

export default function BestFit() {
  const { path } = useRouteMatch();
  const { pathname } = useLocation();
  const reviewData = useRecoilValue(bestFitReviewState);
  const resetReviewData = useResetRecoilState(bestFitReviewState);
  const resetPreferences = useResetRecoilState(preferencesState);

  useDidMount(() => {
    if (!pathname.includes("review")) {
      resetReviewData();
      resetPreferences();
    }
  });

  return (
    <Switch>
      <Route exact path={path}>
        <LandingPage
          tag="bestfit"
          link="/best-fit/preferences/quality"
          title="Customized portfolios tailored to your investment goals and preferences."
          text="The BestFit app curates a customized corporate and municipal bond portfolio tailored to your investment goals and preferences."
        />
      </Route>
      <>
        <AppNavbar appName="BestFit" />
        <Route path={`${path}/preferences`} component={PreferencesForm} />
        <Route path={`${path}/portfolio-review`}>
          {reviewData && reviewData.portfolio ? (
            <PortfolioReview
              portfolio={reviewData.portfolio}
              bestFitData={reviewData}
            />
          ) : (
            <Redirect to="/best-fit" />
          )}
        </Route>
      </>
    </Switch>
  );
}
