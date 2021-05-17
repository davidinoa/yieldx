import {
  Portfolio3,
  PortfolioStatus,
  PortfolioType
} from "providers/graphql/hooks";

function getPortfoliosStatusCount(
  portfolios: { portfolio: Portfolio3; portfolioType: PortfolioType }[] = []
) {
  return portfolios.reduce(
    (statuses, { portfolio, portfolioType }) => {
      if (portfolioType === PortfolioType.Live) {
        if (portfolio.status === PortfolioStatus.Ready)
          return {
            ...statuses,
            active: statuses.active + 1
          };
        if (portfolio.status === PortfolioStatus.Terminated)
          return {
            ...statuses,
            closed: statuses.closed + 1
          };
        return statuses;
      }
      return {
        ...statuses,
        tracking: statuses.tracking + 1
      };
    },
    {
      active: 0,
      tracking: 0,
      closed: 0
    }
  );
}

export default getPortfoliosStatusCount;
