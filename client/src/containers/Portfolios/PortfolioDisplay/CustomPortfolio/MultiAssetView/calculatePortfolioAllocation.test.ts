import mockYieldXPortfolio from "__mocks__/models/mockYieldXPortfolio";
import calculatePortfolioAllocation from "containers/Portfolios/PortfolioDisplay/CustomPortfolio/MultiAssetView/calculatePortfolioAllocation";

describe("calculatePortfolioAllocation", () => {
  it("Should return correct value", () => {
    expect(calculatePortfolioAllocation(mockYieldXPortfolio)).toBeTruthy();
  });
});
