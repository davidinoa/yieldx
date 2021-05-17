import YieldXPortfolio from "models/YieldXPortfolio";
import { PortfolioType } from "@bondhouse/income-portfolios";
import { AppType } from "@bondhouse/position-management";
import * as H from "history";

function onRebalance(portfolio: YieldXPortfolio, history: H.History<unknown>) {
  const isInpaasPortfolio =
    portfolio.getAppType() === AppType.INPAAS &&
    portfolio.getInpaasData() !== undefined;

  if (!isInpaasPortfolio) throw Error("Must be inpaas portfolio");
  const queryParams = new URLSearchParams();
  if (!portfolio.getId()) throw Error("Portfolio must have an ID");
  const portfolioType = portfolio.getType();
  if (!portfolioType)
    throw Error("Portfolio type must be either LIVE or EXTERNAL");
  if (portfolioType === PortfolioType.LIVE)
    return history.push(`/portfolios/live/${portfolio.getId()}/rebalance`);
  queryParams.append("portfolioType", portfolioType);
  queryParams.append("portfolioId", portfolio.getId());
  history.push({
    pathname: "/inpaas/goals/rebalance",
    search: queryParams.toString()
  });
  return undefined;
}

export default onRebalance;
