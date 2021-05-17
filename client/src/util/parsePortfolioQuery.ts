import { PortfolioType } from "@bondhouse/income-portfolios";

const QUERY_PARAM_REGEX = /^([?|&](portfolioId=[\w|\d]+-[\w|\d]+-[\w|\d]+-[\w|\d]+-[\w|\d]+)|([?|&]portfolioType=(EXTERNAL|LIVE))){2}$/;

export default function parsePortfolioQuery(query: string) {
  if (query && !query.match(QUERY_PARAM_REGEX))
    throw Error("Query string does not match correct format");
  const params = new URLSearchParams(query);
  const portfolioId = params.get("portfolioId");
  let portfolioType;
  if (params.get("portfolioType") === "LIVE")
    portfolioType = PortfolioType.LIVE;
  else if (params.get("portfolioType") === "EXTERNAL")
    portfolioType = PortfolioType.EXTERNAL;
  else portfolioType = null;
  if (portfolioType === null || portfolioId === null) return null;
  return {
    portfolioId,
    portfolioType
  };
}
