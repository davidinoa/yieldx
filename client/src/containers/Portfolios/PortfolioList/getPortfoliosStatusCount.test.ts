import { PortfolioType, PortfolioStatus } from "providers/graphql/hooks";
import getPortfoliosStatusCount from "containers/Portfolios/PortfolioList/getPortfoliosStatusCount";

describe("getPortfoliosStatusCount", () => {
  it("Should return correct object", () => {
    const mockPortfolioList = [
      {
        portfolio: {
          id: "a",
          createdAt: "2020-05-19T15:42:50.089014Z",
          status: PortfolioStatus.READY,
          currency: "USD",
          name: "testing asset explorer 05/19/2020",
          positions: [],
          updatedAt: "2020-05-19T15:42:50.089014Z",
          description:
            "This is a Custom Portfolio by YieldX, you chose the assets you wanted to buy and BondHouse technology helped you build the portfolio. You can come back and change this portfolio any time you like",
          metadata: {
            app: "Custom"
          }
        },
        portfolioType: PortfolioType.External
      },
      {
        portfolio: {
          id: "b",
          createdAt: "2020-05-19T15:42:50.089014Z",
          status: PortfolioStatus.PENDING,
          currency: "USD",
          name: "testing asset explorer 05/19/2020",
          positions: [],
          updatedAt: "2020-05-19T15:42:50.089014Z",
          description:
            "This is a Custom Portfolio by YieldX, you chose the assets you wanted to buy and BondHouse technology helped you build the portfolio. You can come back and change this portfolio any time you like",
          metadata: {
            app: "Custom"
          }
        },
        portfolioType: PortfolioType.LIVE
      },
      {
        portfolio: {
          id: "c",
          createdAt: "2020-05-19T15:42:50.089014Z",
          status: PortfolioStatus.TERMINATED,
          currency: "USD",
          name: "testing asset explorer 05/19/2020",
          positions: [],
          updatedAt: "2020-05-19T15:42:50.089014Z",
          description:
            "This is a Custom Portfolio by YieldX, you chose the assets you wanted to buy and BondHouse technology helped you build the portfolio. You can come back and change this portfolio any time you like",
          metadata: {
            app: "Custom"
          }
        },
        portfolioType: PortfolioType.EXTERNAL
      },
      {
        portfolio: {
          id: "d",
          createdAt: "2020-05-19T15:42:50.089014Z",
          status: PortfolioStatus.PENDING,
          currency: "USD",
          name: "testing asset explorer 05/19/2020",
          positions: [],
          updatedAt: "2020-05-19T15:42:50.089014Z",
          description:
            "This is a Custom Portfolio by YieldX, you chose the assets you wanted to buy and BondHouse technology helped you build the portfolio. You can come back and change this portfolio any time you like",
          metadata: {
            app: "Custom"
          }
        },
        portfolioType: PortfolioType.External
      },
      {
        portfolio: {
          id: "e",
          createdAt: "2020-05-19T15:42:50.089014Z",
          status: PortfolioStatus.READY,
          currency: "USD",
          name: "testing asset explorer 05/19/2020",
          positions: [],
          updatedAt: "2020-05-19T15:42:50.089014Z",
          description:
            "This is a Custom Portfolio by YieldX, you chose the assets you wanted to buy and BondHouse technology helped you build the portfolio. You can come back and change this portfolio any time you like",
          metadata: {
            app: "Custom"
          }
        },
        portfolioType: PortfolioType.Live
      },
      {
        portfolio: {
          id: "f",
          createdAt: "2020-05-19T15:42:50.089014Z",
          status: PortfolioStatus.TERMINATED,
          currency: "USD",
          name: "testing asset explorer 05/19/2020",
          positions: [],
          updatedAt: "2020-05-19T15:42:50.089014Z",
          description:
            "This is a Custom Portfolio by YieldX, you chose the assets you wanted to buy and BondHouse technology helped you build the portfolio. You can come back and change this portfolio any time you like",
          metadata: {
            app: "Custom"
          }
        },
        portfolioType: PortfolioType.LIVE
      }
    ];

    expect(getPortfoliosStatusCount(mockPortfolioList)).toMatchInlineSnapshot(`
      Object {
        "active": 0,
        "closed": 0,
        "tracking": 5,
      }
    `);
  });
});
