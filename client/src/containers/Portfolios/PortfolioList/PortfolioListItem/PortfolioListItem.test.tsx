import React from "react";
import { render } from "test/utils";
import PortfolioListItem from "containers/Portfolios/PortfolioList/PortfolioListItem/PortfolioListItem";
import mockPortfolio from "test/mock-data/mockPortfolio";
import { PortfolioType } from "providers/graphql/hooks";

describe("PortfolioListItem", () => {
  it("It should render external portfolio properly", () => {
    const { asFragment } = render(
      <PortfolioListItem
        portfolio={mockPortfolio({ createdAt: "11/05/2020" })}
        portfolioType={PortfolioType.External}
      />
    );
    expect(asFragment()).toMatchSnapshot();
  });
});
