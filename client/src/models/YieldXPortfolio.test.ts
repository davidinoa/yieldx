import { Portfolio, PortfolioStatus } from "@bondhouse/position-management";
import YieldXPortfolio from "./YieldXPortfolio";

describe("YieldXPortfolio", () => {
  const basePmsPortfolio: Portfolio = {
    id: "bryan",
    name: "Bryan",
    createdAt: "1984-11-23",
    currency: "USD",
    positions: [],
    status: PortfolioStatus.PENDING
  };

  test("can be instantiated with an empty PMS portfolio and no assets", () => {
    const portfolio = new YieldXPortfolio(basePmsPortfolio, []);
    expect(portfolio.positions).toEqual([]);
  });

  test("throws an exception when instantiated with a missing asset", () => {
    const portfolio = new YieldXPortfolio(basePmsPortfolio, []);
    expect(portfolio.positions).toEqual([]);
  });

  test("adds withCashMarketValue to portfolio cash", () => {
    const portfolio = new YieldXPortfolio(basePmsPortfolio, [], {
      withCashMarketValue: 1000
    });
    expect(portfolio.cashMarketValue).toEqual(1000);
    expect(portfolio.totalMarketValue).toEqual(1000);
  });
});
