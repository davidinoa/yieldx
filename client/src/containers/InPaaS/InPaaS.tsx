import React from "react";
import {
  Redirect,
  Route,
  Switch,
  useLocation,
  useRouteMatch
} from "react-router-dom";
import { selector, useRecoilValue } from "recoil";
import LandingPage from "components/LandingPage/LandingPage";
import AppNavbar from "components/AppNavbar/AppNavbar";
import YieldXPortfolio from "models/YieldXPortfolio";
import PortfolioReview from "components/PortfolioReview/PortfolioReview";
import { yieldXPortfolioSelector } from "recoil-state/getProposalWithPortfolioId";
import parsePortfolioQuery from "util/parsePortfolioQuery";
import getLiveAssets from "util/getLiveAssets";
import { proposalAtom } from "containers/InPaaS/Goals/useGoals";
import Goals from "./Goals/Goals";

const inpaasPortfolioSelector = selector({
  key: "inpaasPortfolioSelector",
  get: async ({ get }) => {
    const proposal = get(proposalAtom);
    if (!proposal) return undefined;
    const assets = await getLiveAssets({
      positions: proposal.portfolio.positions
    });
    return YieldXPortfolio.fromInpaasProposal(proposal, assets);
  }
});

const landingInfo = {
  title: "Optimized portfolios for a desired income or yield target.",
  text:
    "The InPaaS app optimizes fixed income ETFs and Closed End Funds for a desired income or yield target.",
  link: "/inpaas/goals",
  tag: "inpaas"
};
export default function InPaaS() {
  const { path, isExact } = useRouteMatch();
  const { search, pathname } = useLocation();
  const portfolioQueryParams = parsePortfolioQuery(search);
  const originalPortfolio = useRecoilValue(
    yieldXPortfolioSelector(portfolioQueryParams)
  );
  const portfolio = useRecoilValue(inpaasPortfolioSelector);
  const investmentAmount = portfolio?.getInpaasData()?.proposal.proposalRequest
    .investmentAmount;
  return (
    <>
      {!isExact && <AppNavbar appName="InPaaS" />}
      <Switch>
        <Route path={`${path}/(goals|goals/rebalance)`}>
          {pathname.includes("rebalance") && !originalPortfolio ? (
            <Redirect to={`${path}/goals`} />
          ) : (
            <Goals
              original={originalPortfolio?.getInpaasData()?.proposal}
              originalValue={originalPortfolio?.totalMarketValue}
            />
          )}
        </Route>
        <Route path={`${path}/(portfolio-review|portfolio-review/rebalance)`}>
          <>
            {!portfolio && originalPortfolio && (
              <Redirect to={`${path}/goals/rebalance${search}`} />
            )}
            {!portfolio && !originalPortfolio && (
              <Redirect to={`${path}/goals`} />
            )}
            {portfolio && investmentAmount !== undefined && (
              <PortfolioReview portfolio={portfolio} />
            )}
          </>
        </Route>
        <Route component={() => LandingPage(landingInfo)} />
      </Switch>
    </>
  );
}
