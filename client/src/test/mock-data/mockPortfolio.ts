import { AppType2, Portfolio3, PortfolioStatus } from "providers/graphql/hooks";

interface Options {
  app?: AppType2;
  createdAt?: string;
  updatedAt?: string;
  id?: string;
  name?: string;
  status?: PortfolioStatus;
}

function mockPortfolio({
  app = AppType2.Inpaas,
  createdAt = new Date().toISOString(),
  updatedAt = new Date().toISOString(),
  id = "mock-portfolio-id",
  status = PortfolioStatus.Ready,
  name = "MOCK PORTFOLIO"
}: Options): Portfolio3 {
  return {
    app,
    createdAt,
    currency: "USD",
    description: null,
    id,
    metadata: null,
    name,
    accountNumber: null,
    positions: [
      {
        assetId: "dccc676e-46f4-4a3d-a827-21d3716cc644",
        costBasis: null,
        createdAt: "2020-10-01T12:22:19.934344Z",
        id: "1ba56897-f6dd-45d9-806b-c053677e85d9",
        metadata: null,
        portfolioId: "ba172c60-5bb1-4f99-b900-980df874fa9a",
        quantity: 321,
        settled: 0,
        tradeDate: null,
        unsettled: 321,
        updatedAt: "2020-10-01T12:22:19.934344Z",
        __typename: "Position2"
      },
      {
        assetId: "USD",
        costBasis: null,
        createdAt: "2020-10-01T12:22:17.334384Z",
        id: "CASH-USD",
        metadata: {},
        portfolioId: "ba172c60-5bb1-4f99-b900-980df874fa9a",
        quantity: 12.530000000002,
        settled: 9500.000000000002,
        tradeDate: null,
        unsettled: -9487.47,
        updatedAt: "2020-10-01T12:22:17.334384Z",
        __typename: "Position2"
      }
    ],
    status,
    updatedAt,
    __typename: "Portfolio3"
  };
}

export default mockPortfolio;
