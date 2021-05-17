import toInputPortfolio from "util/toInputPortfolio";
import mockYieldXPortfolio from "__mocks__/models/mockYieldXPortfolio";
import { Portfolio3, PortfolioStatus } from "../providers/graphql/hooks";
import mockPortfolio, { position } from "../__mocks__/models/mockPortfolio";
import fund from "../__mocks__/models/assets/fund";

describe("toInputPortfolio", () => {
  it("Should include cash position", () => {
    const result = toInputPortfolio(mockYieldXPortfolio);
    expect(result.positions.find(it => it?.id === "USD")).toBeTruthy();
  });
  it("Should include cash position with Portfolio3 GQL type input", () => {
    const portfolio3: Portfolio3 = {
      currency: "USD",
      createdAt: "12/15/2020",
      name: "mock-portfolio",
      status: PortfolioStatus.READY,
      id: "mock-portfolio-id",
      positions: [...mockPortfolio.positions, position(fund, 200)]
    };
    const result = toInputPortfolio(portfolio3);
    expect(result.positions.find(it => it?.id === "USD")).toBeTruthy();
  });
});
