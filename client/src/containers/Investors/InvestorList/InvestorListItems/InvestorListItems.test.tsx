import React from "react";
import InvestorListItems from "./InvestorListItems";
import { render, screen } from "test/utils";
import { INDIVIDUAL_INVESTOR } from "__mocks__/@bondhouse/investor/__fixtures__";
import { MOCK_APEX_ACCOUNT } from "__mocks__/@bondhouse/apex/__fixtures__";

describe("InvestorListItems", () => {
  test("Should render", async () => {
    const { container } = render(
      <InvestorListItems investors={[]} canCreateAccount />
    );
    expect(container).toBeInTheDocument();
  });

  test("Should display no investors message if investor array empty", () => {
    render(<InvestorListItems investors={[]} canCreateAccount />);

    expect(
      screen.getByText(
        /It looks like you haven’t set up any investor accounts\. Create an investor account to get started\./i
      )
    ).toBeInTheDocument();

    expect(
      screen.queryAllByTestId("InvestorList-ShowInvestorLink").length
    ).toBe(0);

    expect(screen.queryByTestId("pagination")).toBe(null);
  });

  test("Should show correct message if not admin account and no investors", async () => {
    render(<InvestorListItems investors={[]} canCreateAccount={false} />);

    expect(
      screen.getByText(
        /It looks like there aren’t any investor accounts yet\. Ask your administrator to set one up\./i
      )
    ).toBeInTheDocument();
  });

  test("Should show up to 7 rows in one page", () => {
    const { rerender } = render(
      <InvestorListItems
        investors={[
          {
            investor: INDIVIDUAL_INVESTOR,
            apexAccount: MOCK_APEX_ACCOUNT
          },
          {
            investor: INDIVIDUAL_INVESTOR,
            apexAccount: MOCK_APEX_ACCOUNT
          },
          {
            investor: INDIVIDUAL_INVESTOR,
            apexAccount: MOCK_APEX_ACCOUNT
          },
          {
            investor: INDIVIDUAL_INVESTOR,
            apexAccount: MOCK_APEX_ACCOUNT
          }
        ]}
        canCreateAccount
      />
    );

    expect(
      screen.queryAllByTestId("InvestorList-ShowInvestorLink").length
    ).toBe(4);

    rerender(
      <InvestorListItems
        investors={[
          {
            investor: INDIVIDUAL_INVESTOR,
            apexAccount: MOCK_APEX_ACCOUNT
          },
          {
            investor: INDIVIDUAL_INVESTOR,
            apexAccount: MOCK_APEX_ACCOUNT
          },
          {
            investor: INDIVIDUAL_INVESTOR,
            apexAccount: MOCK_APEX_ACCOUNT
          },
          {
            investor: INDIVIDUAL_INVESTOR,
            apexAccount: MOCK_APEX_ACCOUNT
          },
          {
            investor: INDIVIDUAL_INVESTOR,
            apexAccount: MOCK_APEX_ACCOUNT
          },
          {
            investor: INDIVIDUAL_INVESTOR,
            apexAccount: MOCK_APEX_ACCOUNT
          },
          {
            investor: INDIVIDUAL_INVESTOR,
            apexAccount: MOCK_APEX_ACCOUNT
          }
        ]}
        canCreateAccount
      />
    );

    expect(
      screen.queryAllByTestId("InvestorList-ShowInvestorLink").length
    ).toBe(7);

    expect(screen.queryByTestId("pagination")).toBe(null);

    rerender(
      <InvestorListItems
        investors={[
          {
            investor: INDIVIDUAL_INVESTOR,
            apexAccount: MOCK_APEX_ACCOUNT
          },
          {
            investor: INDIVIDUAL_INVESTOR,
            apexAccount: MOCK_APEX_ACCOUNT
          },
          {
            investor: INDIVIDUAL_INVESTOR,
            apexAccount: MOCK_APEX_ACCOUNT
          },
          {
            investor: INDIVIDUAL_INVESTOR,
            apexAccount: MOCK_APEX_ACCOUNT
          },
          {
            investor: INDIVIDUAL_INVESTOR,
            apexAccount: MOCK_APEX_ACCOUNT
          },
          {
            investor: INDIVIDUAL_INVESTOR,
            apexAccount: MOCK_APEX_ACCOUNT
          },
          {
            investor: INDIVIDUAL_INVESTOR,
            apexAccount: MOCK_APEX_ACCOUNT
          },
          {
            investor: INDIVIDUAL_INVESTOR,
            apexAccount: MOCK_APEX_ACCOUNT
          }
        ]}
        canCreateAccount
      />
    );

    expect(
      screen.queryAllByTestId("InvestorList-ShowInvestorLink").length
    ).toBe(7);

    expect(screen.queryByTestId("pagination")).not.toBe(null);
  });
});
