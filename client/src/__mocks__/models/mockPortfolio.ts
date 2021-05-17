import {
  Portfolio,
  PortfolioStatus,
  Position
} from "@bondhouse/position-management";
import { Asset } from "@bondhouse/rover-universe";
import muni from "./assets/muni";
import USD from "./assets/USD";

export function position(asset: Asset, quantity: number): Position {
  const { id } = asset;
  return {
    id,
    assetId: id,
    quantity,
    portfolioId: "axp"
  };
}

const mockPortfolio: Portfolio = {
  id: "axp",
  name: "",
  currency: "USD",
  status: PortfolioStatus.PENDING,
  positions: [position(muni, 5000), position(USD, 54450)],
  createdAt: "2020-06-01T17:01:36.467Z",
  metadata: {
    app: "Custom"
  }
};

export default mockPortfolio;
