import checkRebalance from "containers/Portfolios/PortfolioDisplay/InpaasPortfolio/util/checkRebalance";

describe("testing rebalance upper bounds check", () => {
  test("target 15%, current 16.6% should return true", () => {
    const { shouldAlert } = checkRebalance(0.15, 0.166, 0.1);
    expect(shouldAlert).toBe(true);
  });

  test("target 15%, current 16.5% should return false", () => {
    const { shouldAlert } = checkRebalance(0.15, 0.165, 0.1);
    expect(shouldAlert).toBe(false);
  });
});

describe("testing rebalance lower bounds check", () => {
  test("target 15%, current 13.4% should return true", () => {
    const { shouldAlert } = checkRebalance(0.15, 0.134, 0.1);
    expect(shouldAlert).toBe(true);
  });

  test("target 15%, current 13.5% should return false", () => {
    const { shouldAlert } = checkRebalance(0.15, 0.135, 0.1);
    expect(shouldAlert).toBe(false);
  });
});
