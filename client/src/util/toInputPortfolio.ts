import YieldXPortfolio from "models/YieldXPortfolio";
import {
  App,
  AppType2,
  Portfolio3,
  PortfolioInput,
  Position2,
  PositionsListItemInput,
  Status
} from "providers/graphql/hooks";
import { AppType } from "@bondhouse/position-management";

function toInputPortfolio(
  portfolio: YieldXPortfolio | Portfolio3
): PortfolioInput {
  if (portfolio instanceof YieldXPortfolio)
    return {
      app: portfolio.getAppType() === AppType.INPAAS ? App.Inpaas : App.Custom,
      createdAt: portfolio.getCreatedAt(),
      currency: "USD",
      id: portfolio.getId(),
      name: portfolio.getName(),
      positions: portfolio
        .asPmsPortfolio()
        .positions.map<PositionsListItemInput>(position => {
          const {
            createdAt,
            assetId,
            costBasis,
            id,
            portfolioId,
            quantity,
            settled,
            tradeDate,
            unsettled,
            updatedAt
          } = position;
          return {
            assetId,
            createdAt,
            ...(costBasis ? { costBasis } : {}),
            ...(tradeDate ? { tradeDate } : {}),
            id,
            portfolioId,
            quantity,
            settled,
            unsettled,
            updatedAt
          };
        }),
      status: (portfolio.getStatus() as unknown) as Status,
      updatedAt: portfolio.getUpdatedAt()
    };

  return {
    app: portfolio.app === AppType2.Inpaas ? App.Inpaas : App.Custom,
    createdAt: portfolio.createdAt as string,
    currency: "USD",
    id: portfolio.id as string,
    name: portfolio.name as string,
    positions: portfolio.positions.map<PositionsListItemInput>(position => {
      const {
        createdAt,
        assetId,
        costBasis,
        id,
        portfolioId,
        quantity,
        settled,
        tradeDate,
        unsettled,
        updatedAt
      } = position as Position2;
      return {
        assetId,
        createdAt,
        ...(costBasis ? { costBasis } : {}),
        ...(tradeDate ? { tradeDate } : {}),
        id,
        portfolioId,
        quantity,
        settled,
        unsettled,
        updatedAt
      };
    }),
    status: (portfolio.status as unknown) as Status,
    updatedAt: portfolio.updatedAt as string
  };
}

export default toInputPortfolio;
