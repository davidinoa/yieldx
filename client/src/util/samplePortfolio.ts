import { Portfolio, PortfolioStatus } from "@bondhouse/position-management";

const now = new Date().toISOString() as string;

const samplePortfolio: Portfolio = {
  description:
    "This is a Custom Portfolio by YieldX, " +
    "you chose the assets you wanted to buy and BondHouse technology helped you build the portfolio. " +
    "You can come back and change this portfolio any time you like",
  updatedAt: now,
  createdAt: now,
  name: "Your New Custom Portfolio by YieldX",
  id: "samplePortfolioId",
  positions: [
    {
      id: "USD",
      assetId: "USD",
      quantity: 1000000,
      portfolioId: "samplePortfolioId"
    }
  ],
  status: PortfolioStatus.READY,
  currency: "USD",
  metadata: {}
};
export default samplePortfolio;
