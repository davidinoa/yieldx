import { useRecoilValue } from "recoil";
import parsePortfolioQuery from "util/parsePortfolioQuery";
import { yieldXPortfolioSelector } from "recoil-state/getProposalWithPortfolioId";

export default function useOriginalPortfolio(query: string) {
  const portfolioEditParams = parsePortfolioQuery(query);
  return useRecoilValue(yieldXPortfolioSelector(portfolioEditParams));
}
