import { Portfolio, Position } from "@bondhouse/position-management";
import YieldXPortfolio from "models/YieldXPortfolio";

export function getPositionData(portfolio: YieldXPortfolio | Portfolio) {
  let positions: Array<Position>;
  if (portfolio instanceof YieldXPortfolio)
    positions = [...portfolio.asPmsPortfolio().positions];
  else {
    positions = portfolio.positions;
  }
  return positions.map(({ id, assetId, quantity, portfolioId }) => ({
    id,
    assetId,
    quantity,
    portfolioId
  }));
}
