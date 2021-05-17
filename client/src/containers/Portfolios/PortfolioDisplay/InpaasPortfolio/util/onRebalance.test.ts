import onRebalance from "containers/Portfolios/PortfolioDisplay/InpaasPortfolio/util/onRebalance";
import { buildMockPortfolio } from "test/utils";
import { AppType } from "@bondhouse/position-management";
import { PortfolioType } from "@bondhouse/income-portfolios";

describe("onRebalance", () => {
  const liveInpaas = buildMockPortfolio({
    appType: AppType.INPAAS,
    portfolioType: PortfolioType.LIVE
  });
  const externalInpaas = buildMockPortfolio({
    appType: AppType.INPAAS,
    portfolioType: PortfolioType.EXTERNAL
  });
  const customPortfolio = buildMockPortfolio({
    appType: AppType.CUSTOM,
    portfolioType: PortfolioType.EXTERNAL
  });
  const mockHistory = {
    push: jest.fn()
  };

  beforeEach(jest.resetAllMocks);

  it("Should push to /history if live", () => {
    onRebalance(liveInpaas, mockHistory as any);
    expect(mockHistory.push).toHaveBeenCalled();
    expect(mockHistory.push).toHaveBeenCalledWith(
      `/portfolios/live/${liveInpaas.getId()}/rebalance`
    );
  });

  it("Should push to rebalance page with query params if external portfolio", () => {
    onRebalance(externalInpaas, mockHistory as any);
    expect(mockHistory.push).toHaveBeenCalled();
    expect(mockHistory.push).toHaveBeenCalledWith({
      pathname: "/inpaas/goals/rebalance",
      search: `portfolioType=EXTERNAL&portfolioId=${externalInpaas.getId()}`
    });
  });

  it("Should throw error if not inpaas portfolio", () => {
    expect(() => onRebalance(customPortfolio, mockHistory as any)).toThrowError(
      "Must be inpaas portfolio"
    );
  });

  it("Should throw error if not inpaas portfolio", () => {
    const noIdClone = externalInpaas.clone();
    noIdClone.setId("");
    expect(() => onRebalance(noIdClone, mockHistory as any)).toThrowError(
      "Portfolio must have an ID"
    );
  });

  it("Should throw error if not inpaas portfolio", () => {
    const noTypeClone = externalInpaas.clone();
    noTypeClone.setType(undefined);
    expect(() => onRebalance(noTypeClone, mockHistory as any)).toThrowError(
      "Portfolio type must be either LIVE or EXTERNAL"
    );
  });
});
