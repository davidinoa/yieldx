import React from "react";
import { render } from "test/utils";
import { mockMultiAssetPortfolio } from "__mocks__/models/mockYieldXPortfolio";
import { PortfolioType } from "@bondhouse/income-portfolios";
import { userState } from "services/userState";
import { UserType } from "@bondhouse/iam";
import PortfolioHeaderValueBox from "./PortfolioHeaderValueBox";

describe("PortfolioHeaderValueBox", () => {
  test("Should render", () => {
    const { container } = render(
      <PortfolioHeaderValueBox
        portfolio={mockMultiAssetPortfolio}
        setShowInvestModal={jest.fn()}
      />
    );
    expect(container).toBeInTheDocument();
  });

  test("Should render live portfolio options when portfolioType is LIVE", () => {
    const { asFragment } = render(
      <PortfolioHeaderValueBox
        portfolio={mockMultiAssetPortfolio}
        setShowInvestModal={jest.fn()}
      />
    );
    expect(asFragment()).toMatchSnapshot();
  });

  test("Should render external portfolio options when portfolioType is EXTERNAL", () => {
    const clone = mockMultiAssetPortfolio.clone();
    clone.setType(PortfolioType.EXTERNAL)
    const { asFragment } = render(
      <PortfolioHeaderValueBox
        portfolio={clone}
        setShowInvestModal={jest.fn()}
      />, {
        initializeState: ({set}: {set: any}) => set(userState, {
          institutionId: "mock-institution-id",
          id: "mock-user-id",
          userType: UserType.ADMIN,
          first: "mock",
          last: "user",
          policies: [],
          email: "mock@email.com",
          terms: true
        })
      }
    );
    expect(asFragment()).toMatchSnapshot();
  });
});
