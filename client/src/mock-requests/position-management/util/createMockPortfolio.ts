import {
  AppType,
  Portfolio,
  PortfolioStatus,
  Position
} from "@bondhouse/position-management";

const now = new Date().toISOString();
export default function createPortfolioObject({
  status = PortfolioStatus.READY,
  positions = [
    {
      id: "CASH-USD",
      assetId: "USD",
      quantity: 900_000,
      portfolioId: "bb0d9f0f-d7c4-4fd0-9988-282a9ff3b3a0",
      settled: 900_000,
      unsettled: 0,
      createdAt: "2020-09-16T22:58:00.541907Z",
      updatedAt: "2020-09-16T22:58:00.541907Z",
      metadata: {}
    }
  ],
  app = AppType.CUSTOM,
  name = "SIMPLE MOCK PORTFOLIO",
  id = "mock-portfolio-id",
  createdAt = now,
  updatedAt = now
}: CreatePortfolioParams): Portfolio {
  return {
    id,
    status,
    createdAt,
    currency: "USD",
    name,
    positions,
    updatedAt,
    app
  };
}

interface CreatePortfolioParams {
  id?: string;
  status?: PortfolioStatus;
  positions?: Position[];
  app?: AppType;
  name?: string;
  createdAt?: string;
  updatedAt?: string;
}
