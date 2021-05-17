import React from "react";
import { render, screen } from "test/utils";
import InvestorRow from "./InvestorRow";
import { INDIVIDUAL_INVESTOR } from "__mocks__/@bondhouse/investor/__fixtures__";
import { MOCK_APEX_ACCOUNT } from "__mocks__/@bondhouse/apex/__fixtures__";

describe("InvestorRow", () => {
  test("Should render", async () => {
    const { container } = render(
      <InvestorRow
        account={{
          investor: INDIVIDUAL_INVESTOR,
          apexAccount: MOCK_APEX_ACCOUNT
        }}
      />
    );
    expect(container).toBeInTheDocument();
  });

  test("Should display required columns", () => {
    render(
      <InvestorRow
        account={{
          investor: INDIVIDUAL_INVESTOR,
          apexAccount: MOCK_APEX_ACCOUNT
        }}
      />
    );
    expect(screen.getByText(/INVESTOR NAME/i)).toBeInTheDocument();
    expect(screen.getByText(/TYPE/i)).toBeInTheDocument();
    expect(screen.getByText(/CREATED AT/i)).toBeInTheDocument();
    expect(
      screen.getByTestId("InvestorList-ShowInvestorLink")
    ).toBeInTheDocument();
  });

  test("Status column should render appropriately while fetching apex account status", async () => {
    const { asFragment } = render(
      <InvestorRow
        account={{
          investor: INDIVIDUAL_INVESTOR,
          apexAccount: MOCK_APEX_ACCOUNT
        }}
      />
    );
    expect(asFragment()).toMatchSnapshot();
  });
});
