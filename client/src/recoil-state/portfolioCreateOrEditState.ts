import { atom } from "recoil";
import { PortfolioUIState } from "services/PortfolioService";

export const portfolioCreateOrEditState = atom<PortfolioUIState>({
  key: "portfolioState",
  default: {}
});
