import { useHistory } from "react-router";
import { useEffect } from "react";
import { Portfolio } from "@bondhouse/position-management";
import { useRecoilValue, useSetRecoilState } from "recoil";
import YieldXPortfolio from "models/YieldXPortfolio";
import { portfolioCreateOrEditState } from "recoil-state/portfolioCreateOrEditState";
import { assetsSelector } from "recoil-state/assetsState";

export default function useExecutePortfolioListener(
  portfolio: YieldXPortfolio | Portfolio,
  history: ReturnType<typeof useHistory>
) {
  const setPortfolioData = useSetRecoilState(portfolioCreateOrEditState);
  const assets = useRecoilValue(
    assetsSelector(
      portfolio instanceof YieldXPortfolio
        ? []
        : portfolio.positions
            .filter(cv => cv.assetId === "USD" || cv.assetId === "CASH-USD")
            .map(cv => cv.assetId)
    )
  );
  useEffect(() => {
    return history.listen((location, action) => {
      if (
        action === "PUSH" &&
        (location.pathname.match(/execute-portfolio/) ||
          location.pathname.match(/check-tradable/))
      ) {
        setPortfolioData(prev => ({
          ...prev,
          currentPortfolio:
            portfolio instanceof YieldXPortfolio
              ? portfolio
              : new YieldXPortfolio(portfolio, assets)
        }));
      }
    });
  }, [portfolio, history, assets, setPortfolioData]);
}
