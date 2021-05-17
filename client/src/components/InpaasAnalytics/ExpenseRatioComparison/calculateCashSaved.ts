export default function calculateCashSaved(
  difference: number,
  portfolioMarketValue: number
) {
  return (difference / 100) * portfolioMarketValue;
}
