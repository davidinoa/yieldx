import {
  AppType,
  NewProposalRequest,
  OrderDirectionEnum,
  PortfolioStatus,
  PortfolioType,
  GetComparisonsResponse
} from "@bondhouse/income-portfolios";
import { MockResponse } from "test/utils";

// eslint-disable-next-line @typescript-eslint/no-empty-function,no-shadow
function ProposalsApi() {}

ProposalsApi.prototype.getComparisons = jest.fn(() =>
  Promise.resolve<MockResponse<GetComparisonsResponse>>({
    data: {
      comparisons: [
        {
          comparisonType: "Risk",
          inpaas: 16.812674797951423,
          average: 37.5,
          difference: 20.687325202048577,
          percentageDifference: 55.166200538796204
        },
        {
          comparisonType: "Expense Ratio",
          inpaas: 1.5599931630856463,
          average: 2.99,
          difference: 1.430006836914354,
          percentageDifference: 47.82631561586468
        },
        {
          comparisonType: "Max Drawdown",
          inpaas: -19.50881468122584,
          average: -32.6,
          difference: 13.091185318774162,
          percentageDifference: 40.157010180288836
        }
      ]
    }
  })
);
ProposalsApi.prototype.newProposal = jest.fn(
  (newProposalRequest?: NewProposalRequest) =>
    Promise.resolve({
      data: {
        proposal: {
          proposalId: "d646831d-2e18-43a9-9a98-9c12e97cd2f7",
          status: "PENDING",
          updatedAt: "2020-05-22T12:48:51.233506Z",
          commentary: [
            {
              topic: "Income",
              content:
                "The expected monthly income is $1008 for an annualized yield of 6.05%."
            },
            {
              topic: "Risk",
              content:
                "You have a 29% chance of losing money in a given year, and the portfolio's largest drop in account value was 14.2% in the last five years. This is -4.4% less risk than similar securities yielding 6-7%."
            },
            {
              topic: "Expenses",
              content:
                "The weighted expense ratio is 0.41% per year. This is 1.12% less than similar funds with this yield."
            }
          ],
          portfolio: {
            id: "e4d4c1be-ad5b-4221-8e34-12e0e8d73dcf",
            currency: "USD",
            name: "Your new portfolio",
            positions: [
              {
                _yield: 0.77,
                id: "a7524667._04b96c46.buy",
                assetId: "fund",
                publicIdentifiers: {
                  cusip: "46434V878",
                  isin: "US46434V8789",
                  ticker: "ICSH"
                },
                quantity: 5,
                marketValue: 252.60000000000002,
                weight: 25.260000000000005,
                price: 50.52,
                name: "iShares Ultra Short-Term Bond ETF"
              },
              {
                _yield: 0,
                id: "USD",
                assetId: "USD",
                publicIdentifiers: {},
                quantity: 163.80999999999995,
                marketValue: 163.80999999999995,
                weight: 16.380999999999997,
                price: 1,
                name: "Cash"
              }
            ],
            createdAt: "2020-05-22T12:48:51.233586Z",
            updatedAt: "2020-05-22T12:48:51.233586Z",
            metadata: { app: "inpaas" }
          },
          incomePortfoliosAnalysis: {
            income: 1007.5426586045,
            risk: 9.785923627675485,
            expenseRatio: 0.41044404884999997,
            yield: 6.045255951627,
            afterTaxYield: 3.6271535709762004,
            maxDrawdown: -14.161982640325931
          },
          proposalRequest: {
            goal: {
              income: newProposalRequest?.goal.income,
              // eslint-disable-next-line @typescript-eslint/ban-ts-comment
              // @ts-ignore
              yield: newProposalRequest?.goal.yield
            },
            investmentAmount: newProposalRequest?.investmentAmount
          },
          orders: [
            {
              assetId: "102dd159-1401-49dc-bad0-9cb776fbe5cb",
              direction: "BUY",
              quantity: 1209
            },
            {
              assetId: "6f5c3533-89be-48ab-806a-ab693cf0a7ff",
              direction: "BUY",
              quantity: 933.9999999999999
            },
            {
              assetId: "8feba4a4-1a13-47be-b447-1752287b8e2f",
              direction: "BUY",
              quantity: 398
            },
            {
              assetId: "4357f998-6755-40e6-8607-adbd454f9756",
              direction: "BUY",
              quantity: 217
            },
            {
              assetId: "a0135762-04b7-4dc6-8077-3ef61bcedeaa",
              direction: "BUY",
              quantity: 114
            },
            {
              assetId: "f10c6a1d-c607-4666-8621-8b1a2c3741b3",
              direction: "BUY",
              quantity: 489
            },
            {
              assetId: "e4871590-916e-4256-b957-18bb2e8e8b2f",
              direction: "BUY",
              quantity: 295.0000096246391
            },
            {
              assetId: "621e7f48-e332-4e92-a875-260ed4ec9569",
              direction: "BUY",
              quantity: 2787
            },
            {
              assetId: "ac1ab82c-c1c4-4d34-83fa-df78c79404bf",
              direction: "BUY",
              quantity: 714
            },
            {
              assetId: "USD",
              direction: "SELL",
              quantity: -199999.99999999997
            }
          ]
        }
      }
    })
);

ProposalsApi.prototype.getProposal = jest.fn((proposalId: string) =>
  Promise.resolve({
    data: {
      proposal: {
        proposalId,
        status: "PENDING",
        updatedAt: "2020-05-22T12:48:51.233506Z",
        commentary: [
          {
            topic: "Income",
            content:
              "The expected monthly income is $1008 for an annualized yield of 6.05%."
          },
          {
            topic: "Risk",
            content:
              "You have a 29% chance of losing money in a given year, and the portfolio's largest drop in account value was 14.2% in the last five years. This is -4.4% less risk than similar securities yielding 6-7%."
          },
          {
            topic: "Expenses",
            content:
              "The weighted expense ratio is 0.41% per year. This is 1.12% less than similar funds with this yield."
          }
        ],
        portfolio: {
          id: "e4d4c1be-ad5b-4221-8e34-12e0e8d73dcf",
          currency: "USD",
          name: "Your new portfolio",
          positions: [
            {
              _yield: 0.77,
              id: "a7524667._04b96c46.buy",
              assetId: "fund",
              publicIdentifiers: {
                cusip: "46434V878",
                isin: "US46434V8789",
                ticker: "ICSH"
              },
              quantity: 5,
              marketValue: 252.60000000000002,
              weight: 25.260000000000005,
              price: 50.52,
              name: "iShares Ultra Short-Term Bond ETF"
            },
            {
              _yield: 0,
              id: "USD",
              assetId: "USD",
              publicIdentifiers: {},
              quantity: 163.80999999999995,
              marketValue: 163.80999999999995,
              weight: 16.380999999999997,
              price: 1,
              name: "Cash"
            }
          ],
          createdAt: "2020-05-22T12:48:51.233586Z",
          updatedAt: "2020-05-22T12:48:51.233586Z",
          metadata: { app: "inpaas" }
        },
        incomePortfoliosAnalysis: {
          income: 1007.5426586045,
          risk: 9.785923627675485,
          expenseRatio: 0.41044404884999997,
          yield: 6.045255951627,
          afterTaxYield: 3.6271535709762004,
          maxDrawdown: -14.161982640325931
        },
        proposalRequest: {
          goal: {
            income: 100_000,
            // eslint-disable-next-line @typescript-eslint/ban-ts-comment
            // @ts-ignore
            yield: 10
          },
          investmentAmount: 1_000_000
        },
        orders: [
          {
            assetId: "102dd159-1401-49dc-bad0-9cb776fbe5cb",
            direction: "BUY",
            quantity: 1209
          },
          {
            assetId: "6f5c3533-89be-48ab-806a-ab693cf0a7ff",
            direction: "BUY",
            quantity: 933.9999999999999
          },
          {
            assetId: "8feba4a4-1a13-47be-b447-1752287b8e2f",
            direction: "BUY",
            quantity: 398
          },
          {
            assetId: "4357f998-6755-40e6-8607-adbd454f9756",
            direction: "BUY",
            quantity: 217
          },
          {
            assetId: "a0135762-04b7-4dc6-8077-3ef61bcedeaa",
            direction: "BUY",
            quantity: 114
          },
          {
            assetId: "f10c6a1d-c607-4666-8621-8b1a2c3741b3",
            direction: "BUY",
            quantity: 489
          },
          {
            assetId: "e4871590-916e-4256-b957-18bb2e8e8b2f",
            direction: "BUY",
            quantity: 295.0000096246391
          },
          {
            assetId: "621e7f48-e332-4e92-a875-260ed4ec9569",
            direction: "BUY",
            quantity: 2787
          },
          {
            assetId: "ac1ab82c-c1c4-4d34-83fa-df78c79404bf",
            direction: "BUY",
            quantity: 714
          },
          {
            assetId: "USD",
            direction: "SELL",
            quantity: -199999.99999999997
          }
        ]
      }
    }
  })
);

ProposalsApi.prototype.getMinMaxYield = jest.fn(() =>
  Promise.resolve({
    data: {
      maxYield: 14,
      minYield: 1
    }
  })
);

ProposalsApi.prototype.getMinMaxRisk = jest.fn(() =>
  Promise.resolve({
    data: {
      maxRisk: 12,
      minRisk: 1
    }
  })
);

ProposalsApi.prototype.rebalanceProposal = jest.fn(() =>
  Promise.resolve({
    data: {
      proposal: {
        proposalId: "d646831d-2e18-43a9-9a98-9c12e97cd2f7",
        status: "PENDING",
        updatedAt: "2020-05-22T12:48:51.233506Z",
        commentary: [
          {
            topic: "Income",
            content:
              "The expected monthly income is $1008 for an annualized yield of 6.05%."
          },
          {
            topic: "Risk",
            content:
              "You have a 29% chance of losing money in a given year, and the portfolio's largest drop in account value was 14.2% in the last five years. This is -4.4% less risk than similar securities yielding 6-7%."
          },
          {
            topic: "Expenses",
            content:
              "The weighted expense ratio is 0.41% per year. This is 1.12% less than similar funds with this yield."
          }
        ],
        portfolio: {
          id: "e4d4c1be-ad5b-4221-8e34-12e0e8d73dcf",
          currency: "USD",
          name: "Your new portfolio",
          positions: [
            {
              _yield: 0.77,
              id: "a7524667._04b96c46.buy",
              assetId: "fund",
              publicIdentifiers: {
                cusip: "46434V878",
                isin: "US46434V8789",
                ticker: "ICSH"
              },
              quantity: 5,
              marketValue: 252.60000000000002,
              weight: 25.260000000000005,
              price: 50.52,
              name: "iShares Ultra Short-Term Bond ETF"
            },
            {
              _yield: 0,
              id: "USD",
              assetId: "USD",
              publicIdentifiers: {},
              quantity: 163.80999999999995,
              marketValue: 163.80999999999995,
              weight: 16.380999999999997,
              price: 1,
              name: "Cash"
            }
          ],
          createdAt: "2020-05-22T12:48:51.233586Z",
          updatedAt: "2020-05-22T12:48:51.233586Z",
          metadata: { app: "inpaas" }
        },
        incomePortfoliosAnalysis: {
          income: 1007.5426586045,
          risk: 9.785923627675485,
          expenseRatio: 0.41044404884999997,
          yield: 6.045255951627,
          afterTaxYield: 3.6271535709762004,
          maxDrawdown: -14.161982640325931
        },
        proposalRequest: {
          goal: {
            income: 1_000,
            // eslint-disable-next-line @typescript-eslint/ban-ts-comment
            // @ts-ignore
            yield: 10
          },
          investmentAmount: 100000
        },
        orders: [
          {
            assetId: "102dd159-1401-49dc-bad0-9cb776fbe5cb",
            direction: "BUY",
            quantity: 1209
          },
          {
            assetId: "6f5c3533-89be-48ab-806a-ab693cf0a7ff",
            direction: "BUY",
            quantity: 933.9999999999999
          },
          {
            assetId: "8feba4a4-1a13-47be-b447-1752287b8e2f",
            direction: "BUY",
            quantity: 398
          },
          {
            assetId: "4357f998-6755-40e6-8607-adbd454f9756",
            direction: "BUY",
            quantity: 217
          },
          {
            assetId: "a0135762-04b7-4dc6-8077-3ef61bcedeaa",
            direction: "BUY",
            quantity: 114
          },
          {
            assetId: "f10c6a1d-c607-4666-8621-8b1a2c3741b3",
            direction: "BUY",
            quantity: 489
          },
          {
            assetId: "e4871590-916e-4256-b957-18bb2e8e8b2f",
            direction: "BUY",
            quantity: 295.0000096246391
          },
          {
            assetId: "621e7f48-e332-4e92-a875-260ed4ec9569",
            direction: "BUY",
            quantity: 2787
          },
          {
            assetId: "ac1ab82c-c1c4-4d34-83fa-df78c79404bf",
            direction: "BUY",
            quantity: 714
          },
          {
            assetId: "USD",
            direction: "SELL",
            quantity: -199999.99999999997
          }
        ]
      }
    }
  })
);

// eslint-disable-next-line @typescript-eslint/no-unused-vars,@typescript-eslint/no-empty-function
function PortfolioMappingsApi() {}

PortfolioMappingsApi.prototype.createOrReplacePortfolioMapping = jest.fn();
PortfolioMappingsApi.prototype.getPortfolioMapping = jest.fn(() =>
  Promise.resolve({
    data: {
      portfolioMapping: {
        institution: "bf8a5597-9569-4510-babd-a6d9655e9f0d",
        proposalId: "proposalId",
        portfolioId: "portfolioId"
      }
    }
  })
);

export {
  ProposalsApi,
  PortfolioMappingsApi,
  OrderDirectionEnum,
  PortfolioType,
  PortfolioStatus,
  AppType
};
