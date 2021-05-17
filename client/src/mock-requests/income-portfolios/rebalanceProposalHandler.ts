import { MockedRequest, rest } from "msw";
import {
  Action,
  Proposal,
  RebalanceProposalRequest,
  RebalanceProposalResponse
} from "@bondhouse/income-portfolios";

export const rebalanceProposalHandler = (
  mockProposal: Proposal,
  newProposalId: string
) =>
  rest.post(
    `/apis/income-portfolios/v1/proposals/portfolios/*/_rebalance`,
    (req, res, ctx) => {
      if (req.url.pathname.includes("mock") && isRebalanceRequest(req.body)) {
        let { investmentAmount } = mockProposal.proposalRequest;
        const { amount, action } = req.body.updateInvestmentAmount ?? {};
        if (action !== undefined && amount !== undefined) {
          if (action === Action.ADD) investmentAmount += amount;
          else if (action === Action.REDUCE) investmentAmount -= amount;
        }
        const response: RebalanceProposalResponse = {
          proposal: {
            ...mockProposal,
            proposalRequest: {
              investmentAmount,
              goal: req.body.goal ?? mockProposal.proposalRequest.goal
            },
            proposalId: newProposalId
          }
        };
        return res(ctx.status(200), ctx.json(response));
      }
      return undefined;
    }
  );

// type guard
function isRebalanceRequest(
  body: MockedRequest["body"]
): body is RebalanceProposalRequest {
  return (
    (body as RebalanceProposalRequest).updateInvestmentAmount !== undefined ||
    (body as RebalanceProposalRequest).goal !== undefined
  );
}
