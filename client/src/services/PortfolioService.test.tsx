import { PortfolioType } from "@bondhouse/income-portfolios";
import { PortfolioStatus } from "@bondhouse/position-management";
import { getPositionData } from "recoil-state/getPositionData";
import mockYieldXPortfolio from "__mocks__/models/mockYieldXPortfolio";
import YieldXPortfolio from "models/YieldXPortfolio";
import usdCash from "util/usdCash";
import { assetsSelector } from "recoil-state/assetsState";
import { getEditPath, liquidatePortfolio } from "./PortfolioService";

const cashPmsPortfolio = YieldXPortfolio.fromAssets("mockId", [
  usdCash
]).asPmsPortfolio();

cashPmsPortfolio.positions = [
  {
    id: "USD",
    assetId: "USD",
    quantity: 10000,
    portfolioId: "mockId"
  }
];

const cashPortfolio = new YieldXPortfolio(cashPmsPortfolio, [usdCash], {
  portfolioType: PortfolioType.LIVE,
  withCashMarketValue: 10000
});

describe.skip("PortfolioService", () => {
  test("liquidation", async () => {
    expect(cashPortfolio.getStatus()).toBe(PortfolioStatus.READY);
    const pmsPortfolio = await liquidatePortfolio(cashPortfolio, {});
    expect(pmsPortfolio).toBeDefined();
    expect(cashPortfolio.getId()).toBe("mockId");
    expect(pmsPortfolio.status).toBe(PortfolioStatus.TERMINATED);
  });

  test("position data", () => {
    const mockGetAssets = jest.fn(getPositionData);
    const response = mockGetAssets(mockYieldXPortfolio);
    expect(mockGetAssets).toHaveBeenCalled();
    expect(response).toBeDefined();
  });

  test("method for getting assets", () => {
    const mockGetAssets = jest.fn(assetsSelector);
    const response = mockGetAssets([]);
    expect(mockGetAssets).toHaveBeenCalled();
    expect(response).toBeDefined();
  });

  test("utilities for editing positions", async () => {
    const targetPath = getEditPath("/best-fit/portfolio-review");
    expect(targetPath).toBe("/asset-explorer/portfolio-builder");
  });
});
