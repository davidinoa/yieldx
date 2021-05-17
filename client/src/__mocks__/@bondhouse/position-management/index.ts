import {
  CreateFundTransferResponse,
  CreateOrReplaceExternalPortfolioResponse,
  LedgerEntryStatusEnum,
  PortfolioStatus,
  AppType
} from "@bondhouse/position-management";

import samplePortfolio from "util/samplePortfolio";
import usdCash from "util/usdCash";

export function PortfoliosApi() {
  return {
    async internalPortfolioFundTransfer() {
      return {
        accepted: true,
        ledgerEntry: {
          id: "",
          tradeId: "",
          portfolioId: "",
          assetId: "",
          quantity: 1,
          tradePrice: 1,
          counterPartyId: "",
          relatedPositions: [],
          status: LedgerEntryStatusEnum.SETTLED
        }
      } as CreateFundTransferResponse;
    },

    updatePortfolio: jest.fn(async () => ({
      id: "mockId",
      createdAt: new Date().toISOString(),
      updateAt: new Date().toISOString(),
      status: PortfolioStatus.TERMINATED,
      currency: "USD",
      name: "Mock Portfolio",
      positions: [usdCash]
    })),

    getPortfolio: jest.fn(async () => {
      return {
        data: {
          portfolio: {
            ...samplePortfolio,
            positions: []
          }
        }
      };
    }),

    createPortfolioForInvestor: jest.fn(async () => {
      const portfolio = {
        ...samplePortfolio,
        positions: []
      };
      delete portfolio.metadata;
      return { data: { portfolio } };
    })
  };
}

export function TradesApi() {
  return {
    getTrades: jest.fn(async () => ({
      data: {
        ledgerEntries: []
      }
    }))
  };
}

export function ExternalPortfolioApi() {
  return {
    createExternalPortfolio: jest.fn(async () => {
      return {
        created: true,
        updated: false
      } as CreateOrReplaceExternalPortfolioResponse;
    }),
    getExternalPortfolio: jest.fn(async () => {
      return {
        data: {
          portfolio: { positions: [] }
        }
      };
    })
  };
}

export { AppType, PortfolioStatus, LedgerEntryStatusEnum };
