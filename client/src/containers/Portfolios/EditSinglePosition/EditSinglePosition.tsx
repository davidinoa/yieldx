import BottomNav from "containers/Investors/CreateInvestor/BottomNav/BottomNav";
import YieldXLoader from "elements/YieldXLoader/YieldXLoader";
import { useEditPosition } from "providers/graphql/hooks/useEditPosition";
import React, { useCallback } from "react";
import {
  generatePath,
  Redirect,
  Route,
  RouteComponentProps,
  Switch,
  useHistory,
  useRouteMatch
} from "react-router-dom";
import { Preferences } from "components/Execution/Preferences";
import { EditPositionPage, OrderPage } from "components/Execution/styles";
import { Position } from "components/Execution/Position";
import ConfirmExecution from "containers/PortfolioExecution/ConfirmExecution/ConfirmExecution";
import { PortfolioType, Position2 } from "providers/graphql/hooks";
import AppNavbar from "components/AppNavbar/AppNavbar";
import Decimal from "util/Decimal";

enum FormStep {
  "order",
  "preferences",
  "review"
}

type EditSinglePositionsUrlParams = {
  type: string;
  portfolioId: string;
  assetId: string;
  step: string;
};

export const buildEditUrl = (
  match: RouteComponentProps<Partial<EditSinglePositionsUrlParams>>["match"],
  props?: Partial<EditSinglePositionsUrlParams>
) => {
  return generatePath(
    `/portfolios/:type/:portfolioId/position/:assetId/edit/:step(order|preferences|review)`,
    { step: "order", ...match.params, ...(props || {}) }
  );
};

export function EditSinglePosition() {
  const match = useRouteMatch<EditSinglePositionsUrlParams>();
  const history = useHistory();
  const { portfolioId, assetId, type, step } = match.params;
  const enumStep = step as keyof typeof FormStep;
  const pageTitle =
    step === "review" ? "Executing Portfolio" : "Editing single position";
  const onBack = useCallback(() => {
    const lastIdx = Math.max(Number(FormStep[enumStep]) - 1, 0);
    const lastStep = FormStep[lastIdx];
    const lastUrl = buildEditUrl(match, { step: lastStep });
    history.push(lastUrl);
  }, [enumStep, match, history]);
  const onNext = useCallback(() => {
    const nextIdx = Math.min(Number(FormStep[enumStep]) + 1, 2);
    const nextStep = FormStep[nextIdx];
    const nextUrl = buildEditUrl(match, { step: nextStep });
    history.push(nextUrl);
  }, [enumStep, match, history]);

  const {
    data,
    loading,
    postOrder,
    setGoodTillCancel,
    setQuantity,
    setFullFillRequired,
    setDirection
  } = useEditPosition(type, portfolioId, assetId);
  const {
    asset,
    originalPortfolio,
    investor,
    position,
    order,
    currentPositionValue,
    currentPositionQuantity,
    currentPortfolioValue,
    spotPrice,
    errorText = ""
  } = data;
  const isLoading = !Object.values(loading).every(e => e === false);
  if (isLoading) return <YieldXLoader />;
  let blockNext = errorText.length > 0 || order.quantity <= 0;
  let helpText = "";
  const assetType = asset?.assetType;
  const spotPriceToCalculateWith = spotPrice || 0;
  if (assetType === "FUND") {
    helpText = `MARKET VALUE: $${Decimal.format(
      spotPriceToCalculateWith * order.quantity
    )}`;
  } else if (assetType === "BOND") {
    helpText = `MARKET VALUE: $${Decimal.format(
      (spotPriceToCalculateWith / 100) * order.quantity
    )}`;
  }

  return (
    <>
      <AppNavbar appName={pageTitle} />
      <EditPositionPage
        className={enumStep === "review" ? "review-page" : undefined}
      >
        <OrderPage
          className={enumStep === "review" ? "review-page" : undefined}
        >
          <Switch>
            <Route
              exact
              path="/portfolios/:type/:portfolioId/position/:assetId/edit/order"
            >
              <Position
                order={order}
                asset={asset}
                position={position}
                spotPrice={spotPrice}
                currentPositionValue={currentPositionValue}
                currentPositionQuantity={currentPositionQuantity}
                currentPortfolioValue={currentPortfolioValue}
                setQuantity={setQuantity}
                setDirection={setDirection}
                helpText={helpText}
                errorText={errorText}
              />
            </Route>
            <Route
              exact
              path="/portfolios/:type/:portfolioId/position/:assetId/edit/preferences"
            >
              <Preferences
                setGoodTillCancel={setGoodTillCancel}
                setFullFillRequired={setFullFillRequired}
                goodTillCancel={order.goodTillCancel}
                fullFillRequired={order.fullFillRequired}
              />
            </Route>
            <Route
              exact
              path="/portfolios/:type/:portfolioId/position/:assetId/edit/review"
            >
              {investor &&
                originalPortfolio &&
                asset &&
                currentPositionValue &&
                originalPortfolio.app && (
                  <ConfirmExecution
                    executionPreferences={{
                      goodTillCancel: order.goodTillCancel,
                      fullFillRequired: order.fullFillRequired
                    }}
                    originalPortfolioData={{
                      portfolioId,
                      type:
                        type === "live"
                          ? PortfolioType.Live
                          : PortfolioType.External,
                      positions: originalPortfolio.positions as Position2[],
                      assets: [asset],
                      portfolioValue: currentPositionValue,
                      app: originalPortfolio.app,
                      name: originalPortfolio.name
                    }}
                    currentPortfolioData={{
                      portfolioId,
                      type:
                        type === "live"
                          ? PortfolioType.Live
                          : PortfolioType.External,
                      positions: originalPortfolio.positions as Position2[],
                      assets: [asset],
                      portfolioValue: currentPositionValue,
                      app: originalPortfolio.app
                    }}
                    ordersToRaise={[order]}
                    selectedInvestor={investor}
                    postOrders={postOrder}
                  />
                )}
            </Route>
            <Redirect to="/portfolios/:portfolioId/position/:assetId/edit/order" />
          </Switch>
        </OrderPage>
        {enumStep !== "review" && (
          <BottomNav
            onPrevious={onBack}
            onNext={onNext}
            blockNext={blockNext}
          />
        )}
      </EditPositionPage>
    </>
  );
}
