import { MockedRequest, rest } from "msw";
import {
  NewProposalRequest,
  NewProposalResponse,
  Proposal
} from "@bondhouse/income-portfolios";

export const newProposalHandler = (mockProposal: Proposal) =>
  rest.post(`/apis/income-portfolios/v1/proposals/_new`, (req, res, ctx) => {
    if (isNewProposalRequest(req.body)) {
      const response: NewProposalResponse = {
        proposal: {
          ...mockProposal,
          proposalRequest: {
            ...req.body
          }
        }
      };
      return res(ctx.status(200), ctx.json(response));
    }
    return undefined;
  });

// type guard
function isNewProposalRequest(
  body: MockedRequest["body"]
): body is NewProposalRequest {
  return (body as NewProposalRequest).goal !== undefined;
}
