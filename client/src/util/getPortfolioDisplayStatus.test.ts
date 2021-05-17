import { PortfolioType } from "@bondhouse/income-portfolios";
import { PortfolioStatus } from "@bondhouse/position-management";
import getPortfolioDisplayStatus from "./getPortfolioDisplayStatus";

describe("getPortfolioDisplayStatus", () => {
  it("Should return correct paper portfolio status", () => {
    expect(
      getPortfolioDisplayStatus(PortfolioType.EXTERNAL, PortfolioStatus.READY)
    ).toBe("PAPER");
    expect(
      getPortfolioDisplayStatus(PortfolioType.EXTERNAL, PortfolioStatus.PENDING)
    ).toBe("PAPER");
    expect(
      getPortfolioDisplayStatus(
        PortfolioType.EXTERNAL,
        PortfolioStatus.TERMINATED
      )
    ).toBe("CLOSED");
  });
  it("Should return undefined when portfolioType is undefined", () => {
    expect(getPortfolioDisplayStatus(undefined, PortfolioStatus.READY)).toBe(
      undefined
    );
    expect(getPortfolioDisplayStatus(undefined, PortfolioStatus.PENDING)).toBe(
      undefined
    );
    expect(
      getPortfolioDisplayStatus(undefined, PortfolioStatus.TERMINATED)
    ).toBe(undefined);
  });
  it("Should return correct live portfolio status", () => {
    expect(
      getPortfolioDisplayStatus(PortfolioType.LIVE, PortfolioStatus.READY)
    ).toBe("LIVE");
    expect(
      getPortfolioDisplayStatus(PortfolioType.LIVE, PortfolioStatus.PENDING)
    ).toBe("PENDING");
    expect(
      getPortfolioDisplayStatus(PortfolioType.LIVE, PortfolioStatus.TERMINATED)
    ).toBe("CLOSED");
  });
});
