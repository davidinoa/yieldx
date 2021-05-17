import { SetterOrUpdater } from "recoil";
import { History } from "history";
import YieldXPortfolio from "models/YieldXPortfolio";
import { PortfolioUIState } from "services/PortfolioService";

export const editPositions = ({
  portfolio,
  setPortfolioData,
  history
}: {
  portfolio: YieldXPortfolio;
  setPortfolioData: SetterOrUpdater<PortfolioUIState>;
  history: History;
}) => {
  const { pathname } = history.location;
  if (pathname.includes("execute"))
    setPortfolioData({
      status: "reviewing",
      currentPortfolio: portfolio,
      cartContext: "portfolio-cart"
    });
  if (pathname.includes("review/edit")) history.goBack();
  else if (pathname.includes("asset-explorer/portfolio-review"))
    history.push("/asset-explorer/portfolio-builder");
  else
    history.push({
      pathname: `/asset-explorer/portfolio-builder/edit`,
      search: `?portfolioId=${portfolio.getId()}&portfolioType=EXTERNAL`
    });
};
