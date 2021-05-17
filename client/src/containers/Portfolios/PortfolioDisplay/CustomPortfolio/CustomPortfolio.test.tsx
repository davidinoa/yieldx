import React from "react";
import userEvent from "@testing-library/user-event";
import { render, waitFor, screen } from "../../../../test/utils";
import CustomPortfolio from "./CustomPortfolio";
import mockYieldXPortfolio from "../../../../__mocks__/models/mockYieldXPortfolio";
import YieldXPortfolio from "../../../../models/YieldXPortfolio";
import fund from "../../../../__mocks__/models/assets/fund";
import FundsView from "./FundsView/FundsView";

test.skip("renders", async () => {
  render(<CustomPortfolio portfolio={mockYieldXPortfolio} />, {
    route: "/asset-explorer/portfolio-review"
  });
  await waitFor(() => screen.getAllByRole("heading"));
  expect(screen.getByRole("heading", { name: "Summary" })).toBeInTheDocument();
});

test.skip("current version", async () => {
  render(
    <CustomPortfolio portfolio={mockYieldXPortfolio} version="CURRENT" />,
    {
      route: "/asset-explorer/portfolio-review"
    }
  );
  await waitFor(() => screen.getAllByRole("heading"));
  expect(screen.getByRole("heading", { name: "Summary" })).toBeInTheDocument();

  render(<CustomPortfolio portfolio={mockYieldXPortfolio} />, {
    route: "/asset-explorer/portfolio-review"
  });
});

test("funds only, non-edit", async () => {
  const fundsPortfolio = YieldXPortfolio.fromAssets("fundsPtf", [fund]);

  render(
    <FundsView
      editPositions={jest.fn}
      portfolio={fundsPortfolio.getFundSleeve()}
    />,
    {
      route: "/asset-explorer/portfolio-review"
    }
  );

  const maxDrawdownToggle = await screen.findByRole("button", {
    name: /max drawdown/i
  });
  expect(maxDrawdownToggle).toBeInTheDocument();
  userEvent.click(maxDrawdownToggle);

  const riskToggle = await screen.findByRole("button", {
    name: /risk/i
  });
  expect(riskToggle).toBeInTheDocument();
  userEvent.click(riskToggle);
});
