import getReviewPreviousLocation from "components/PortfolioReview/getReviewPreviousLocation";

describe("getReviewPreviousLocation", () => {
  it("Should get correct location for best fit review prev", () => {
    const previousPath = getReviewPreviousLocation(
      "/best-fit/portfolio-review"
    );
    expect(previousPath).toBe("/best-fit/preferences/investment");
  });

  it("Should get correct location for inpaas review prev", () => {
    const previousPath = getReviewPreviousLocation("/inpaas/portfolio-review");
    expect(previousPath).toBe("/inpaas/goals");
  });

  it("Should get correct location for rebalance review", () => {
    const previousPath = getReviewPreviousLocation(
      "/inpaas/portfolio-review/rebalance?portfolioId=274ef784-e005-427e-9fb3-82e5556dbb68&portfolioType=EXTERNAL"
    );
    expect(previousPath).toBe("/inpaas/goals/rebalance");
  });
});
