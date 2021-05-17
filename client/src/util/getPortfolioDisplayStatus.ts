import { PortfolioType } from "@bondhouse/income-portfolios";
import { PortfolioStatus } from "@bondhouse/position-management";
import { PortfolioDisplayStatus } from "containers/Portfolios/PortfolioDisplay/PortfolioHeader/PortfolioHeaderInfo/AppTypeRow/AppTypeRow";

export default function getPortfolioDisplayStatus(
  portfolioType: PortfolioType | undefined,
  portfolioStatus: PortfolioStatus
): PortfolioDisplayStatus | undefined {
  if (
    portfolioType &&
    (portfolioStatus === PortfolioStatus.TERMINATED ||
      portfolioStatus.toUpperCase() === "TERMINATED")
  )
    return "CLOSED";
  if (portfolioType === PortfolioType.EXTERNAL) return "PAPER";
  if (portfolioType === PortfolioType.LIVE) {
    // TODO: Remove this redundant uppercase check once enum casing issue is resolved
    if (
      portfolioStatus === PortfolioStatus.PENDING ||
      portfolioStatus.toUpperCase() === "PENDING"
    )
      return "PENDING";
    if (
      portfolioStatus === PortfolioStatus.READY ||
      portfolioStatus.toUpperCase() === "READY"
    )
      return "LIVE";
  }
  return undefined;
}
