import { rest } from "msw";
import {
  GetProposalResponse,
  PortfolioStatus,
  Proposal
} from "@bondhouse/income-portfolios";

export const createGetProposalHandler: CreateGetProposalHandler = mockProposal =>
  rest.get(
    `/apis/income-portfolios/v1/proposals/${mockProposal.proposalId}`,
    (req, res, ctx) => {
      const response: GetProposalResponse = {
        proposal: mockProposal
      };
      return res(ctx.status(200), ctx.json(response));
    }
  );

export function createMockProposal({
  id,
  assetIds,
  portfolioId = "mock-portfolio-id"
}: CreateProposalParams): Proposal {
  const now = new Date().toISOString();
  return {
    proposalId: id,
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
      positions: assetIds.map(it => ({
        portfolioId,
        yield: 3.27,
        id: it,
        assetId: it,
        quantity: 1209,
        marketValue: 29898.57,
        weight: 14.949285000000001,
        price: 24.73,
        name: it
      })),
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
      investmentAmount: 100_000
    },
    orders: []
  };
}

type CreateGetProposalHandler = (
  params: Proposal
) => ReturnType<typeof rest["get"]>;

interface CreateProposalParams {
  id: string;
  institutionId?: string;
  assetIds: string[];
  portfolioId?: string;
}
