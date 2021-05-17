import { atom, selectorFamily } from "recoil";
import { Investor } from "@bondhouse/investor";
import { Analysis } from "@bondhouse/rover-portfolio-analyzer";
import { Order } from "@bondhouse/order-management";
import { Asset } from "@bondhouse/rover-universe";
import YieldXPortfolio from "models/YieldXPortfolio";
import fund from "../models/assets/fund";

export const portfolioState = atom<{
  status: "reviewing" | "editing";
  portfolioId: string;
  orders: Array<Order & { asset?: Asset }>;
  originalPortfolio?: YieldXPortfolio;
  currentPortfolio?: YieldXPortfolio;
  selectedInvestor?: Investor;
  originalAnalysis?: Analysis;
  currentAnalysis?: Analysis;
}>({
  key: "portfolioState",
  default: {
    orders: [],
    status: "reviewing",
    portfolioId: ""
  }
});

export const getAssets = selectorFamily({
  key: "getAssets",
  get: (assetIds: string[]) => async () => {
    const filtered = assetIds.filter(cv => cv !== "USD");
    if (filtered.length > 0) {
      return filtered.map(cv => ({
        ...fund,
        id: cv
      }));
    }
    return [];
  }
});
