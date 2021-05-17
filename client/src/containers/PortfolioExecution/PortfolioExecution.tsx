import React, { useCallback } from "react";
import {
  Redirect,
  Route,
  Switch,
  useHistory,
  useLocation,
  useRouteMatch
} from "react-router-dom";
import { PortfolioType } from "@bondhouse/income-portfolios";
import { useRecoilValue, useResetRecoilState } from "recoil";
import AppNavbar from "components/AppNavbar/AppNavbar";
import { portfolioCreateOrEditState } from "recoil-state/portfolioCreateOrEditState";
import { inpaasFormState } from "recoil-state/inPaaS";
import parsePortfolioQuery from "util/parsePortfolioQuery";
import { executionPreferencesState } from "recoil-state/executionPreferencesState";
import {
  AppType2,
  Investor,
  PortfolioType as PortfolioTypeGQL
} from "providers/graphql/hooks";
import useGetYieldxPortfolio from "providers/graphql/hooks/useGetYieldxPortfolio";
import useGetPortfolioInvestor from "providers/graphql/hooks/useGetPortfolioInvestor";
import YieldXLoader from "elements/YieldXLoader/YieldXLoader";
import CheckNonTradable from "./CheckNonTradable/CheckNonTradable";
import ExecutionPreferences from "./ExecutionPreferences/ExecutionPreferences";
import ConfirmExecution from "./ConfirmExecution/ConfirmExecution";
import CreateInvestor from "../Investors/CreateInvestor/CreateInvestor";
import SelectInvestor from "./SelectInvestor/SelectInvestor";
import CheckBalanceModal from "./CheckBalanceModal/CheckBalanceModal";
import useGenerateOrders from "../../util/useGenerateOrders";
import useExecuteLivePortfolio from "./ConfirmExecution/ExecutePortfolioModal/useExecuteLivePortfolio";
import useUpdateLivePortfolio from "./ConfirmExecution/ExecutePortfolioModal/useUpdateLivePortfolio";

export default function PortfolioExecution() {
  const history = useHistory();
  const { path } = useRouteMatch();
  const { pathname, search } = useLocation();
  const portfolioQueryParams = parsePortfolioQuery(search);

  const { portfolio: originalPortfolio, loading } = useGetYieldxPortfolio({
    portfolioId: portfolioQueryParams?.portfolioId,
    portfolioType:
      portfolioQueryParams?.portfolioType === PortfolioType.LIVE
        ? PortfolioTypeGQL.Live
        : PortfolioTypeGQL.External
  });

  const {
    investor: originalPortfolioInvestor,
    loading: investorLoading
  } = useGetPortfolioInvestor(
    originalPortfolio?.getId() ?? "",
    originalPortfolio?.getType()?.toUpperCase() !== "LIVE"
  );

  const {
    currentPortfolio,
    selectedInvestor = originalPortfolioInvestor
  } = useRecoilValue(portfolioCreateOrEditState);
  const executionPreferences = useRecoilValue(executionPreferencesState);
  const resetPortfolioData = useResetRecoilState(portfolioCreateOrEditState);
  const resetInpaasForm = useResetRecoilState(inpaasFormState);
  React.useEffect(() => {
    return history.listen(location => {
      if (!location.pathname.includes("execute-portfolio")) {
        if (!location.pathname.includes("portfolio-builder"))
          resetPortfolioData();
        resetInpaasForm();
      }
    });
  }, [resetPortfolioData, resetInpaasForm, history]);

  const hasExistingLive = originalPortfolio?.getType() === "LIVE";

  const { ordersToRaise, loading: ordersLoading } = useGenerateOrders(
    currentPortfolio?.positions ?? [],
    executionPreferences,
    hasExistingLive ? originalPortfolio?.positions : undefined
  );

  const executePortfolio = useExecuteLivePortfolio(ordersToRaise);
  const updatePortfolio = useUpdateLivePortfolio(
    ordersToRaise,
    originalPortfolio
  );

  const postOrders = useCallback(
    async (name: string) => {
      if (!ordersToRaise || ordersLoading) throw Error("Orders still loading");
      if (
        currentPortfolio &&
        selectedInvestor &&
        originalPortfolio &&
        originalPortfolio.getType()?.toUpperCase() === "LIVE"
      ) {
        await updatePortfolio(name, currentPortfolio);
        resetPortfolioData();
        history.push(`/portfolios/live/${originalPortfolio.getId()}`);
      } else if (currentPortfolio) {
        const portfolio = await executePortfolio(
          name,
          currentPortfolio,
          selectedInvestor as Investor
        );
        resetPortfolioData();
        history.push(`/portfolios/live/${portfolio.id}`);
      }
    },
    [
      ordersToRaise,
      ordersLoading,
      currentPortfolio,
      executePortfolio,
      history,
      originalPortfolio,
      resetPortfolioData,
      selectedInvestor,
      updatePortfolio
    ]
  );

  if (!currentPortfolio) return <Redirect to="/" />;
  const nonTradables = currentPortfolio.positions.filter(
    cv => !cv.asset.universes?.liquid
  );
  if (!pathname.includes("/check-tradable") && nonTradables.length > 0)
    return <Redirect to={`${path}/check-tradable`} />;

  return (
    <>
      <AppNavbar appName="Executing portfolio" />
      {loading || investorLoading ? (
        <YieldXLoader />
      ) : (
        <>
          <Switch>
            <Route
              path={`${path}/check-tradable`}
              component={CheckNonTradable}
            />
            <Route
              path={`${path}/investors/create`}
              component={CreateInvestor}
            />
            <Route exact path={`${path}/investors`}>
              {originalPortfolioInvestor && (
                <Redirect to={`${path}/preferences`} />
              )}
              <SelectInvestor selectedPortfolio={currentPortfolio} />
            </Route>
            <Route path={`${path}/preferences`}>
              {selectedInvestor ? (
                <ExecutionPreferences />
              ) : (
                <Redirect to={`${path}/investors`} />
              )}
            </Route>
            <Route path={`${path}/confirm`}>
              {executionPreferences && !selectedInvestor && (
                <Redirect to={`${path}/investors`} />
              )}
              {!executionPreferences && selectedInvestor && (
                <Redirect to={`${path}/preferences`} />
              )}
              {executionPreferences && selectedInvestor && (
                <ConfirmExecution
                  executionPreferences={executionPreferences}
                  postOrders={postOrders}
                  currentPortfolioData={{
                    portfolioValue: currentPortfolio.totalMarketValue,
                    portfolioId: currentPortfolio.getId(),
                    type: (currentPortfolio.getType() as unknown) as PortfolioTypeGQL,
                    positions: currentPortfolio.asPmsPortfolio().positions,
                    assets: currentPortfolio.getAssets(),
                    app: currentPortfolio.getAppType()?.toString() as AppType2
                  }}
                  originalPortfolioData={
                    originalPortfolio
                      ? {
                          portfolioValue: originalPortfolio.totalMarketValue,
                          portfolioId: originalPortfolio.getId(),
                          type: (originalPortfolio.getType() as unknown) as PortfolioTypeGQL,
                          positions: originalPortfolio.asPmsPortfolio()
                            .positions,
                          assets: originalPortfolio.getAssets(),
                          app: originalPortfolio
                            .getAppType()
                            ?.toString() as AppType2,
                          name: originalPortfolio.getName()
                        }
                      : undefined
                  }
                  ordersToRaise={ordersToRaise}
                  selectedInvestor={selectedInvestor as Investor}
                />
              )}
            </Route>
            <Route>
              <Redirect to={`${path}/investors`} />
            </Route>
          </Switch>
          {originalPortfolioInvestor && <CheckBalanceModal />}
        </>
      )}
    </>
  );
}
