import { generatePath } from "react-router";

export enum YieldxRoutes {
  VIEW_PORTFOLIO = "/portfolios/:type/:portfolioId",
  EDIT_PORTFOLIO = "/portfolios/live/:portfolioId/:method(edit|rebalance)",
  EDIT_PORTFOLIO_POSITION = "/portfolios/:type/:portfolioId/position/:assetId/edit/:step(order|preferences|review)"
}

type TRouteParams = { [idx: string]: string | number };
interface ViewPortfolioParams extends TRouteParams {
  type: "live" | "external";
  portfolioId: string;
}

interface EditPortfolioParams extends ViewPortfolioParams {
  method: "edit" | "rebalance";
}

interface EditPortfolioPositionParams extends ViewPortfolioParams {
  assetId: string;
  step: "order" | "preferences" | "review";
}

interface RouteParams {
  [YieldxRoutes.VIEW_PORTFOLIO]: ViewPortfolioParams;
  [YieldxRoutes.EDIT_PORTFOLIO]: EditPortfolioParams;
  [YieldxRoutes.EDIT_PORTFOLIO_POSITION]: EditPortfolioPositionParams;
}

type RouteParamMap = {
  [Route in YieldxRoutes]: RouteParams[Route];
};

function hasRequiredProps<
  T extends YieldxRoutes,
  V extends Partial<RouteParamMap[T]>
>(params: V = {} as V): params is V {
  return Object.keys(typeof params).reduce(
    (res: boolean, required: string) => res && required in params,
    true
  );
}

// TODO: goTo is a bad name
export function goTo<
  Route extends YieldxRoutes,
  Params extends RouteParamMap[Route]
>(route: Route): (params: Params) => void;
export function goTo<
  Route extends YieldxRoutes,
  ParamKeys extends keyof RouteParamMap[Route],
  Params = { [Key in ParamKeys]: string },
  MissingParams = Exclude<Params, ParamKeys>
>(
  route: Route,
  params: Params = {} as Params
): () => void | ((lazyParams: MissingParams) => void) {
  if (hasRequiredProps(params)) {
    return () => {
      // eslint-disable-next-line no-restricted-globals
      location.replace(generatePath(route, params as any));
    };
  }
  return (lazyParams: MissingParams = {} as MissingParams) => {
    // eslint-disable-next-line no-restricted-globals
    location.replace(
      generatePath(route, {
        ...(params as any),
        ...(lazyParams as any)
      })
    );
  };
}

// const x = goTo(YieldxRoutes.VIEW_PORTFOLIO)
// const x2 = goTo(YieldxRoutes.VIEW_PORTFOLIO, { });
