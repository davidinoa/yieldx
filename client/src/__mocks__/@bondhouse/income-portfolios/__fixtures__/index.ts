import {
  OrderDirectionEnum,
  PortfolioStatus,
  Proposal
} from "@bondhouse/income-portfolios";

const now = new Date().toISOString();
export const PROPOSAL_MOCK: Proposal = {
  proposalId: "mockProposalId",
  updatedAt: now,
  commentary: [
    {
      topic: "Income",
      content:
        "The expected monthly income is $1008 for an annualized yield of 6.05%."
    },
    {
      topic: "Risk",
      content:
        "You have a 29% chance of losing money in a given year, and the portfolio's largest drop in account value was 14.2% in the last five years. This is -4.4% less risk than similar securities yielding 6-7%."
    },
    {
      topic: "Expenses",
      content:
        "The weighted expense ratio is 0.41% per year. This is 1.12% less than similar funds with this yield."
    }
  ],
  portfolio: {
    status: PortfolioStatus.READY,
    id: "e4d4c1be-ad5b-4221-8e34-12e0e8d73dcf",
    currency: "USD",
    name: "Your new portfolio",
    positions: [],
    createdAt: now,
    updatedAt: now,
    metadata: { app: "inpaas" }
  },
  incomePortfoliosAnalysis: {
    income: 1007.5426586045,
    risk: 9.785923627675485,
    expenseRatio: 0.41044404884999997,
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-ignore
    yield: 6.045255951627,
    afterTaxYield: 3.6271535709762004,
    maxDrawdown: -14.161982640325931
  },
  proposalRequest: {
    goal: {
      income: 600
    },
    investmentAmount: 60_000
  },
  orders: [
    {
      assetId: "102dd159-1401-49dc-bad0-9cb776fbe5cb",
      direction: OrderDirectionEnum.BUY,
      quantity: 1209
    },
    {
      assetId: "6f5c3533-89be-48ab-806a-ab693cf0a7ff",
      direction: OrderDirectionEnum.BUY,
      quantity: 933.9999999999999
    },
    {
      assetId: "8feba4a4-1a13-47be-b447-1752287b8e2f",
      direction: OrderDirectionEnum.BUY,
      quantity: 398
    },
    {
      assetId: "4357f998-6755-40e6-8607-adbd454f9756",
      direction: OrderDirectionEnum.BUY,
      quantity: 217
    },
    {
      assetId: "a0135762-04b7-4dc6-8077-3ef61bcedeaa",
      direction: OrderDirectionEnum.BUY,
      quantity: 114
    },
    {
      assetId: "f10c6a1d-c607-4666-8621-8b1a2c3741b3",
      direction: OrderDirectionEnum.BUY,
      quantity: 489
    },
    {
      assetId: "e4871590-916e-4256-b957-18bb2e8e8b2f",
      direction: OrderDirectionEnum.BUY,
      quantity: 295.0000096246391
    },
    {
      assetId: "621e7f48-e332-4e92-a875-260ed4ec9569",
      direction: OrderDirectionEnum.BUY,
      quantity: 2787
    },
    {
      assetId: "ac1ab82c-c1c4-4d34-83fa-df78c79404bf",
      direction: OrderDirectionEnum.BUY,
      quantity: 714
    },
    {
      assetId: "USD",
      direction: OrderDirectionEnum.SELL,
      quantity: -199999.99999999997
    }
  ]
};
