import React from "react";
import InvestorStatusCount from "./InvestorStatusCount";
import { render, screen } from "../../../../test/utils";

describe("InvestorStatusCount", () => {
  test("Should render", async () => {
    const { container } = render(<InvestorStatusCount canCreateAccount />);
    expect(container).toBeInTheDocument();
  });

  test("Should render correct status labels", async () => {
    render(<InvestorStatusCount canCreateAccount />);
    expect(screen.getByText(/^PENDING:$/i)).toBeInTheDocument();
    expect(screen.getByText(/^ACTIVE:$/i)).toBeInTheDocument();
    expect(screen.getByText(/^INACTIVE:$/i)).toBeInTheDocument();
    expect(screen.getByText(/^ISSUES:$/i)).toBeInTheDocument();
  });

  test("Should render spinners if totals undefined", async () => {
    render(<InvestorStatusCount canCreateAccount />);
    expect(screen.getAllByTestId("spinner").length).toBe(4);
  });

  test("Should render create investor button according to canCreateAccount prop", async () => {
    const { rerender } = render(<InvestorStatusCount canCreateAccount />);
    expect(
      screen.queryByTestId("InvestorList-CreateInvestorLink")
    ).toBeInTheDocument();
    rerender(<InvestorStatusCount canCreateAccount={false} />);
    expect(
      screen.queryByTestId("InvestorList-CreateInvestorLink")
    ).not.toBeInTheDocument();
  });

  test("Should render status counts properly", async () => {
    const mockStatusCounts = {
      active: 6,
      pending: 0,
      inactive: 0,
      error: 2
    };
    const { asFragment } = render(
      <InvestorStatusCount canCreateAccount statusCounts={mockStatusCounts} />
    );
    expect(asFragment()).toMatchSnapshot();
  });
});
