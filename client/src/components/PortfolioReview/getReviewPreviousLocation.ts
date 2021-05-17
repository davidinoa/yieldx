function getReviewPreviousLocation(path: string) {
  if (path.includes("/execute-portfolio/check-tradable")) {
    return "/asset-explorer/portfolio-builder";
  }
  if (path.includes("/execute-portfolio/investors")) {
    return "/asset-explorer/portfolio-builder/edit";
  }
  if (path.includes("/portfolios"))
    return "/asset-explorer/portfolio-builder/edit";

  if (path.includes("asset-explorer/portfolio-review/edit")) {
    return "/asset-explorer/portfolio-builder/edit";
  }
  if (path.includes("asset-explorer")) {
    return "/asset-explorer/portfolio-builder";
  }
  if (path.includes("best-fit")) {
    return "/best-fit/preferences/investment";
  }
  if (path.includes("rebalance")) {
    return "/inpaas/goals/rebalance";
  }
  if (path.includes("inpaas")) {
    return "/inpaas/goals";
  }
  return "#";
}

export default getReviewPreviousLocation;
