import {
  GetTradesResponse,
  LedgerEntryStatusEnum
} from "@bondhouse/position-management";
import { rest } from "msw";

export const getTrades = rest.get(
  "/apis/position-management/v1/portfolios/mock-*/trades",
  (req, res, ctx) => {
    const response: GetTradesResponse = {
      ledgerEntries: [
        {
          portfolioId: "",
          id: "mock-sell-ledger",
          tradeId: "mock-sell-trade",
          assetId: "mock-asset-1",
          quantity: -2,
          tradePrice: 2,
          counterPartyId: "",
          status: LedgerEntryStatusEnum.SETTLED,
          relatedPositions: []
        },
        {
          portfolioId: "mock-portfolio-id",
          id: "mock-buy-trade",
          tradeId: "mock-buy-trade",
          assetId: "mock-asset-1",
          quantity: 2,
          tradePrice: 2,
          counterPartyId: "",
          status: LedgerEntryStatusEnum.SETTLED,
          relatedPositions: []
        },
        {
          portfolioId: "mock-portfolio-id",
          id: "mock-buy-trade-2",
          tradeId: "mock-buy-trade-2",
          assetId: "mock-asset-1",
          quantity: 7,
          tradePrice: 2.05,
          counterPartyId: "",
          status: LedgerEntryStatusEnum.SETTLED,
          relatedPositions: []
        }
      ]
    };
    return res(ctx.status(200), ctx.json(response));
  }
);
