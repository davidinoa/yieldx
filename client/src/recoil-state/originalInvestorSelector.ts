import { selectorFamily } from "recoil";
import { getPortfolioInvestor } from "recoil-state/portfoliosApi";

export const originalInvestorSelector = selectorFamily({
  key: "portfolioDisplaySelector",
  get: (portfolioId: string | undefined) => async ({ get }) => {
    if (portfolioId === undefined) return null;
    return get(getPortfolioInvestor(portfolioId));
  }
});
