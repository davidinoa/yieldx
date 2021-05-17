import getPortfolioAllocation from "./getPortfolioAllocation";

describe("getPortfolioAllocation", () => {
  test("should return correct values", () => {
    const { maximumWeight, minimumWeight } = getPortfolioAllocation([{ marketValue: 500 }, { marketValue: 1000 }, { marketValue: 700 }, { marketValue: 820 }], 10_000);
    expect(minimumWeight).toBe(0.05);
    expect(maximumWeight).toBe(0.1);
  });
});
