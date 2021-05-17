import { Analysis } from "@bondhouse/rover-portfolio-analyzer";
import { CreateOrderRequestDirectionEnum } from "@bondhouse/rover-preferences";
import { Investor } from "@bondhouse/investor";
import { OrdersApi } from "@bondhouse/order-management";
import { PortfolioType } from "@bondhouse/income-portfolios";
import { portfoliosApi } from "recoil-state/portfoliosApi";
import { PortfolioStatus } from "@bondhouse/position-management";
import { Preferences } from "containers/BestFit/BestFit.state";
import YieldXPortfolio, { YieldXAsset } from "models/YieldXPortfolio";

const ordersApi = new OrdersApi();

export async function liquidatePortfolio(
  portfolio: YieldXPortfolio,
  referencePrices: { [assetId: string]: null | number }
) {
  try {
    await Promise.all(
      portfolio.positions.map(position =>
        ordersApi.createOrder(portfolio.getId(), {
          assetId: position.assetId,
          quantity: position.quantity,
          direction: CreateOrderRequestDirectionEnum.SELL,
          priceLimit: (position.asset?.price ?? 1) * 0.98,
          spotPrice:
            referencePrices[position.assetId] ??
            position.asset.price ??
            undefined
        })
      )
    );
    return updatePortfolioStatus(portfolio.getId(), PortfolioStatus.TERMINATED);
  } catch (error) {
    console.error("Could not liquidate your portfolio", error);
  }
  return undefined;
}

export async function updatePortfolioStatus(
  portfolioId: string,
  newStatus: PortfolioStatus
) {
  try {
    return portfoliosApi.updatePortfolio(portfolioId, {
      status: newStatus
    });
  } catch (error) {
    return error;
  }
}

export interface PortfolioUIState {
  type?: PortfolioType;
  cartContext?: "user-cart" | "portfolio-cart";
  status?: "reviewing" | "editing" | "executing";
  portfolioId?: string;
  currentPortfolio?: YieldXPortfolio;
  originalPortfolio?: YieldXPortfolio;
  selectedInvestor?: Investor;
  originalAnalysis?: Analysis;
  currentAnalysis?: Analysis;
  bestFitData?: {
    preferences: Preferences;
    additionalAssets: YieldXAsset[];
  };
}

export const getEditPath = (path: string) => {
  if (path.includes("/best-fit/portfolio-review")) {
    return "/asset-explorer/portfolio-builder";
  }
  if (path.includes("/execute-portfolio/check-tradable")) {
    return "/asset-explorer/portfolio-builder";
  }
  if (path.includes("/execute-portfolio/investors")) {
    return "/asset-explorer/portfolio-builder/edit";
  }
  if (path.includes("/portfolios"))
    return "/asset-explorer/portfolio-builder/edit";

  if (path.includes("asset-explorer/portfolio-review/edit")) {
    return "/asset-explorer/portfolio-builder/edit";
  }
  if (path.includes("asset-explorer")) {
    return "/asset-explorer/portfolio-builder";
  }
  if (path.includes("inpaas")) {
    return "/inpaas/goals";
  }
  return "#";
};
