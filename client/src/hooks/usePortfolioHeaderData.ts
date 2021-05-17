import { useSetRecoilState } from "recoil";
import { PortfolioType } from "@bondhouse/income-portfolios";
import { AppType } from "@bondhouse/position-management";
import { useHistory } from "react-router";
import { useLocation } from "react-router-dom";
import { Dispatch, SetStateAction, useState } from "react";
import YieldXPortfolio from "models/YieldXPortfolio";
import { portfolioCreateOrEditState } from "recoil-state/portfolioCreateOrEditState";
import { cartService } from "services";
import useGetPortfolioInvestor from "providers/graphql/hooks/useGetPortfolioInvestor";
import { Investor } from "providers/graphql/hooks";

export type PortfolioHeaderData = {
  investor?: Investor;
  loading: boolean;
  error?: Error;
  onReview: (app: AppType) => void;
  pathname: string;
  showInvestModal: boolean;
  setShowInvestModal: Dispatch<SetStateAction<boolean>>;
};
export const usePortfolioHeaderData = (
  portfolio: YieldXPortfolio
): PortfolioHeaderData => {
  const history = useHistory();
  const { pathname } = useLocation();
  const [showInvestModal, setShowInvestModal] = useState(false);
  const setPortfolioState = useSetRecoilState(portfolioCreateOrEditState);
  const portfolioId = portfolio.getId();
  const portfolioType = portfolio.getType() ?? PortfolioType.EXTERNAL;
  const { investor, loading, error } = useGetPortfolioInvestor(
    portfolioId,
    portfolioType !== PortfolioType.LIVE
  );
  return {
    investor,
    loading,
    error,
    pathname,
    showInvestModal,
    setShowInvestModal,
    onReview: (app: AppType) => {
      setPortfolioState({
        status: "editing",
        // originalPortfolio: portfolio,
        cartContext: "portfolio-cart"
      });
      const queryParams = new URLSearchParams();
      queryParams.append("portfolioId", portfolioId);
      queryParams.append("portfolioType", portfolioType);
      if (app === AppType.INPAAS) {
        history.push({
          pathname: "/inpaas/goals/rebalance",
          search: queryParams.toString()
        });
      } else {
        cartService.clearPortfolioCart();
        cartService
          .createPortfolioCartItems(portfolio.positions.map(it => it.assetId))
          .then(() =>
            history.push({
              pathname: `/asset-explorer/portfolio-builder/edit`,
              search: queryParams.toString()
            })
          );
      }
    }
  };
};
