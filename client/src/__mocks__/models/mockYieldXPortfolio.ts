import { PortfolioType } from "@bondhouse/income-portfolios";
import YieldXPortfolio from "models/YieldXPortfolio";
import mockPortfolio, { position } from "./mockPortfolio";
import mockAssets from "./mockAssets";
import fund from "./assets/fund";

export const mockMultiAssetPortfolio = new YieldXPortfolio(
  {
    ...mockPortfolio,
    positions: [...mockPortfolio.positions, position(fund, 200)]
  },
  Object.values(mockAssets).concat(fund),
  { portfolioType: PortfolioType.LIVE }
);

export default new YieldXPortfolio(mockPortfolio, Object.values(mockAssets));
