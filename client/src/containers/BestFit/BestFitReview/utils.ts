import { getRatingValue } from "../../../util/ratings";
import YieldXPortfolio, {
  YieldXPosition
} from "../../../models/YieldXPortfolio";

export function getBondRatingsData(
  portfolio: YieldXPortfolio
): { name: string; value: number }[] {
  if (portfolio.getBondSleeve) {
    const ratingMarketValues: { [key: string]: number } = {};
    const bondPortfolio = portfolio.getBondSleeve();
    bondPortfolio.positions.forEach((position: YieldXPosition) => {
      const { asset, weight } = position;
      const rating = asset.rating ?? "NR";
      ratingMarketValues[rating] = (ratingMarketValues[rating] || 0) + weight;
    });
    return Object.entries(ratingMarketValues)
      .map(([rating, weight]) => {
        return {
          name: rating,
          value: weight
        };
      })
      .sort((a, b) => {
        return getRatingValue(a.name) - getRatingValue(b.name);
      });
  }
  return [];
}
