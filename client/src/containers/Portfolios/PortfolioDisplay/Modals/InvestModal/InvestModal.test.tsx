import React from "react";
import dayjs from "dayjs";
import { Proposal } from "@bondhouse/income-portfolios";
import InvestModal from "./InvestModal";
import { render, screen } from "../../../../../test/utils";
import mockYieldXPortfolio from "../../../../../__mocks__/models/mockYieldXPortfolio";
import YieldXPortfolio from "../../../../../models/YieldXPortfolio";
import { PROPOSAL_MOCK } from "../../../../../__mocks__/@bondhouse/income-portfolios/__fixtures__";

test("renders 3 buttons", async () => {
  render(
    <InvestModal
      onHide={jest.fn}
      setShowInvestModal={jest.fn}
      portfolio={mockYieldXPortfolio}
      onReviewClick={jest.fn}
      show
    />
  );
  expect(await screen.findAllByRole("button")).toHaveLength(3);
});

test("Should not render for inpaas portfolio that is not stale", async () => {
  const mockPortfolio = await YieldXPortfolio.fromInpaasProposal(
    PROPOSAL_MOCK,
    []
  );
  render(
    <InvestModal
      onHide={jest.fn}
      portfolio={mockPortfolio}
      setShowInvestModal={jest.fn}
      onReviewClick={jest.fn}
      show
    />
  );
  expect(await screen.queryByRole("h1")).toBe(null);
});

test("Should render for inpaas portfolio that is stale (atleast 1 day old)", async () => {
  const staleDate = dayjs().subtract(2, "day").toISOString();
  const mockProposal: Proposal = {
    ...PROPOSAL_MOCK,
    portfolio: {
      ...PROPOSAL_MOCK.portfolio,
      createdAt: staleDate,
      updatedAt: staleDate
    }
  };
  const mockInpaasPortfolio = YieldXPortfolio.fromInpaasProposal(
    mockProposal,
    []
  );
  render(
    <InvestModal
      onHide={jest.fn}
      portfolio={mockInpaasPortfolio}
      onReviewClick={jest.fn}
      setShowInvestModal={jest.fn}
      show
    />
  );
});
