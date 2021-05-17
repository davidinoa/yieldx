import parsePortfolioQuery from "util/parsePortfolioQuery";
import { PortfolioType } from "@bondhouse/income-portfolios";

describe("parsePortfolioQuery", () => {
  it("Should work for external portfolio type", () => {
    const parsed = parsePortfolioQuery(
      "?portfolioId=29c619cb-5d77-4238-8ddb-4df925153d59&portfolioType=EXTERNAL"
    );
    const expected = {
      portfolioType: PortfolioType.EXTERNAL,
      portfolioId: "29c619cb-5d77-4238-8ddb-4df925153d59"
    };
    expect(parsed).toMatchObject(expected);
  });

  it("Should work for live portfolio type", () => {
    const parsed = parsePortfolioQuery(
      "?portfolioId=29c619cb-5d77-4238-8ddb-4df925153d59&portfolioType=LIVE"
    );
    const expected = {
      portfolioType: PortfolioType.LIVE,
      portfolioId: "29c619cb-5d77-4238-8ddb-4df925153d59"
    };
    expect(parsed).toMatchObject(expected);
  });

  it("Should work no matter the param order", () => {
    const parsed = parsePortfolioQuery(
      "?portfolioType=LIVE&portfolioId=29c619cb-5d77-4238-8ddb-4df925153d59"
    );
    const expected = {
      portfolioType: PortfolioType.LIVE,
      portfolioId: "29c619cb-5d77-4238-8ddb-4df925153d59"
    };
    expect(parsed).toMatchObject(expected);
  });

  it("Should return null if no query string available", () => {
    const parsed = parsePortfolioQuery("");
    expect(parsed).toBeNull();
  });

  it("Should throw error if query string doesn't match format", () => {
    expect(() => {
      parsePortfolioQuery(
        "?portfolioType=fetch('somethingMalicious')&portfolioId=29c619cb-5d77-4238-8ddb-4df925153d59"
      );
    }).toThrow("Query string does not match correct format");
  });
});
