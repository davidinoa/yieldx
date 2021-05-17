/* eslint-disable @typescript-eslint/no-explicit-any */
import React, { PropsWithChildren, ReactChild, ReactElement } from "react";
import { RecoilRoot, RecoilRootProps } from "recoil";
import {
  render as rtlRender,
  RenderOptions,
  RenderResult
} from "@testing-library/react";
import { Router } from "react-router-dom";
import { createMemoryHistory, MemoryHistory } from "history";
import dayjs from "dayjs";
import utc from "dayjs/plugin/utc";
import timezone from "dayjs/plugin/timezone";
import {
  AppType,
  Portfolio,
  PortfolioStatus
} from "@bondhouse/position-management";
import { OrderStatus } from "@bondhouse/order-management";
import { PortfolioType } from "@bondhouse/income-portfolios";
import {
  AssetAssetSubtypeEnum,
  AssetAssetTypeEnum
} from "@bondhouse/rover-universe";
import { Spinner } from "elements/Spinner/Spinner";
import fund from "__mocks__/models/assets/fund";
import { mockMultiAssets } from "__mocks__/models/mockAssets";
import GraphqlProvider from "providers/graphql";
import { AxiosResponse } from "axios";
import YieldXPortfolio, {
  YieldXPortfolioOptions
} from "../models/YieldXPortfolio";
import { AlertProvider } from "providers/alerts/AlertProvider";

dayjs.extend(utc);
dayjs.extend(timezone);

export type MockResponse<T> = Partial<AxiosResponse<T>>;
interface Options<H> extends RenderOptions {
  route?: string;
  history?: MemoryHistory<H>;
  initializeState?: RecoilRootProps["initializeState"];
}

function render(
  ui: ReactElement,
  {
    route = "/yieldx",
    history = createMemoryHistory({ initialEntries: [route] }),
    initializeState = undefined,
    ...renderOptions
  }: Options<unknown> = {}
): RenderResult {
  function Wrapper({ children }: Partial<PropsWithChildren<ReactChild>>) {
    // @ts-expect-error
    global.FS = {
      event: jest.fn(),
      identify: jest.fn()
    };
    return (
      <GraphqlProvider>
        <AlertProvider>
          <RecoilRoot initializeState={initializeState}>
            <Router history={history}>
              <React.Suspense fallback={<Spinner />}>{children}</React.Suspense>
            </Router>
          </RecoilRoot>
        </AlertProvider>
      </GraphqlProvider>
    );
  }

  return rtlRender(ui, { wrapper: Wrapper, ...renderOptions });
}

const mockOrder = {
  id: "5d62a607-9c33-4610-9310-eeb45351c37a",
  portfolioId: "6cdf10c3-000c-40c5-886e-c45f4b8226f7",
  quantity: 1,
  assetId: "4207ed32-9c48-4235-9821-f0612f54a009",
  createdAt: "2020-07-15T15:00:02.250811Z",
  updatedAt: "2020-07-15T15:00:02.250811Z",
  status: OrderStatus.OPEN,
  asset: {
    id: "4207ed32-9c48-4235-9821-f0612f54a009",
    createdAt: "2019-11-22T09:54:49.532486Z",
    updatedAt: "2020-07-23T03:25:24.475801Z",
    updatedBy: "bry",
    name: "FlexShares High Yield Value-Scored Bond Index Fund",
    description:
      "The Fund seeks investment results that correspond generally to the price and yield of the Northern Trust High Yield Value-Scored US Corporate Bond Index. The Index reflects the performance of a broad universe of US-dollar high yield corporate bonds that seeks higher yield than the overall high yield corporate bond market.",
    price: 46.3223,
    priceDate: "2020-07-21",
    ticker: "HYGV",
    assetType: AssetAssetTypeEnum.Fund,
    assetSubtype: AssetAssetSubtypeEnum.ExchangeTradedFunds,
    currency: "USD",
    market: "USA",
    primaryExchange: "Arca",
    identifiers: {
      cusip: "33939L662",
      isin: "US33939L6627",
      sedol: "BFXXR21",
      refinitivLipperId: "40224602",
      refinitivLipperParentId: "36866295"
    },
    fund: {
      assetStatus: "Active",
      netAssetsDate: "2020-06-30",
      netAssets: 168509063.85,
      tradeLotSize: 0,
      benchmark: "Index is not available on Lipper Database",
      inceptionDate: "2018-07-17",
      classification: "High Yield",
      fundType: "Exchange Traded Funds",
      allocation: {
        asset: {
          cash: 0.8067,
          fixedIncome: 99.1933
        },
        currency: {
          usd: 99.6904
        },
        debtType: {
          bonds: 0.0954,
          notes: 97.0996,
          preferredStock: 0.1079,
          municipalBonds: 0.2093,
          other: 1.2657
        },
        fixedIncomeCountry: {
          de: 0.1682,
          other: 0.2556,
          dk: 0.1286,
          lu: 2.0239,
          bm: 0.9342,
          ky: 0.0901,
          se: 0.3361,
          au: 0.4931,
          gb: 2.7561,
          ie: 0.5281,
          nl: 1.4599,
          ca: 5.9348,
          us: 84.0844
        },
        fixedIncomeRegion: {
          asiaPacificExJapan: 0.4931,
          europeExUnitedKingdom: 4.6448,
          northAmericaExUnitedStates: 6.9592,
          unitedKingdom: 2.7561,
          unitedStates: 84.0844,
          other: 0.2556
        },
        maturity: {
          lessThanOneYear: 0.2075,
          oneToThreeYears: 10.3692,
          threeToFiveYears: 25.8781,
          fiveToTenYears: 58.1433,
          tenToTwentyYears: 3.2913,
          twentyToThirtyYears: 0.852,
          greaterThanThirtyYears: 0.344,
          other: 0.1079
        },
        rating: {
          bbb: 0.9101,
          bb: 36.4119,
          b: 38.9802,
          ccc: 19.9065,
          cc: 1.3427,
          c: 0.6106,
          d: 0.0422,
          nr: 0.9891
        },
        region: {
          asiaPacificExJapan: 0.4931,
          europeExUnitedKingdom: 4.6448,
          northAmericaExUnitedStates: 6.9592,
          unitedKingdom: 2.7561,
          unitedStates: 84.5815,
          other: 0.2556
        }
      },
      priceDate: "2020-07-21",
      midPrice: 46.3223,
      netAssetValuePerShare: 46.26,
      replicationStrategy: "Optimized",
      institutional: false,
      managementCompany: "Northern Trust Investments Inc",
      focus: {
        assetClassFocus: "Bond",
        geoFocus: "United States of America"
      },
      fees: {
        managementFee: 0.37,
        fundExpenseRatio: 0.37
      },
      scores: {
        totalReturn: {},
        consistentReturn: {},
        preservation: {},
        expense: {},
        taxEfficiency: {}
      },
      yields: {
        distributionYield: 6.4161349,
        lipperDistributionYield: 5.8662483,
        projectedYield: 6.9988609,
        secYield: 6.32,
        simpleYieldBegin: 6.7306048,
        simpleYieldEnd: 7.024505,
        thirtyDayYield: 6.32,
        trailingTwelveMonthYield: 7.5230485
      },
      distributions: {
        income: {
          incomeDividend: {
            exDate: "2020-07-01",
            exValue: 0.247342,
            reinvestmentDate: "2020-07-01",
            reinvestmentValue: 44.81,
            reinvestmentType: "Nav",
            paymentDate: "2020-07-08"
          }
        }
      }
    },
    analytics: {
      date: "2020-07-22",
      source: "Lipper",
      yield: 6.32,
      distributionYield: 5.8662483,
      secYield: 6.32
    },
    scores: {
      timestamp: "2020-07-11T04:13:25.095858Z",
      attractiveness: 1,
      credit: 3,
      liquidity: 3,
      risk: 11.966749297840943
    },
    allocation: {
      country: {
        de: 0.1682,
        other: 0.2556,
        dk: 0.1286,
        lu: 2.0239,
        bm: 0.9342,
        ky: 0.0901,
        se: 0.3361,
        au: 0.4931,
        gb: 2.7561,
        ie: 0.5281,
        nl: 1.4599,
        ca: 5.9348,
        us: 84.0844
      },
      currency: {
        usd: 99.6904
      },
      maturity: {
        lessThanOneYear: 0.2075,
        oneToThreeYears: 10.3692,
        threeToFiveYears: 25.8781,
        fiveToTenYears: 58.1433,
        tenToTwentyYears: 3.2913,
        twentyToThirtyYears: 0.852,
        greaterThanThirtyYears: 0.344,
        other: 0.1079
      },
      rating: {
        bbb: 0.9101,
        bb: 36.4119,
        b: 38.9802,
        ccc: 19.9065,
        cc: 1.3427,
        c: 0.6106,
        d: 0.0422,
        nr: 0.9891
      },
      region: {
        asiaPacificExJapan: 0.4931,
        europeExUnitedKingdom: 4.6448,
        northAmericaExUnitedStates: 6.9592,
        unitedKingdom: 2.7561,
        unitedStates: 84.5815,
        other: 0.2556
      }
    }
  }
};

const buildMockPortfolio = ({
  appType,
  portfolioType = PortfolioType.EXTERNAL
}: {
  appType: AppType;
  portfolioType?: PortfolioType;
}): YieldXPortfolio => {
  if (appType === AppType.INPAAS) {
    const inpaasPortfolio: Portfolio = {
      id: "mock-inpaas-portfolio",
      currency: "USD",
      status: PortfolioStatus.READY,
      updatedAt: new Date().toISOString(),
      createdAt: new Date().toISOString(),
      name: "Mock Paper InPaaS Portfolio",
      positions: []
    };

    const portfolioOptions: YieldXPortfolioOptions = {
      portfolioType,
      inpaasData: {
        proposal: {
          proposalId: "971ee1f2-53b6-4ea7-8e84-4f4e51e1b0fe",
          updatedAt: "2020-07-03T20:39:53.982641Z",
          commentary: [
            {
              topic: "Income",
              content:
                "The expected monthly income is $1 for an annualized yield of 1.21%."
            },
            {
              topic: "Risk",
              content:
                "You have a 9% chance of losing money in a given year, and the portfolio's largest drop in account value was 1.7% in the last five years. This is 211 basis points less risk than similar securities yielding 1-2%."
            },
            {
              topic: "Expenses",
              content:
                "The weighted expense ratio is 0.08% per year. This is 12 basis points less than similar funds with this yield."
            }
          ],
          portfolio: {
            id: "a7524667-fe8e-4527-8102-5e0d5d6b0099",
            currency: "USD",
            name: "Your new portfolio",
            positions: [
              {
                // @ts-expect-error
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
                // @ts-expect-error
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
            createdAt: "2020-07-03T20:39:53.982729Z",
            updatedAt: "2020-07-03T20:39:53.982729Z",
            metadata: { app: "inpaas" }
          },
          incomePortfoliosAnalysis: {
            income: 1.0072467500000002,
            risk: 0.8895562588647008,
            expenseRatio: 0.08465400000000001,
            // @ts-expect-error
            yield: 1.2086961,
            afterTaxYield: 0.72521766,
            maxDrawdown: -1.6595305251572379,
            comparisons: [
              {
                comparisonType: "Risk",
                inpaas: 6.744287242092945,
                average: 12.9,
                difference: 6.155712757907056,
                percentageDifference: 47.7187035496671
              },
              {
                comparisonType: "Expense Ratio",
                inpaas: 0.46454842661307716,
                average: 1.04,
                difference: 0.5754515733869229,
                percentageDifference: 55.33188205643489
              },
              {
                comparisonType: "Max Drawdown",
                inpaas: -17.51805219685053,
                average: -25,
                difference: 7.481947803149469,
                percentageDifference: 29.927791212597874
              }
            ]
          },
          proposalRequest: {
            goal: { income: 1 },
            investmentAmount: 1000,
            constraints: { minimumWeight: 0.05, maximumWeight: 0.3 }
          }
        }
      }
    };
    return new YieldXPortfolio(inpaasPortfolio, [fund], portfolioOptions, []);
  }

  if (appType === AppType.CUSTOM) {
    const multiPortfolio: Portfolio = {
      id: "mockMultiAsset",
      currency: "USD",
      createdAt: new Date().toISOString(),
      status: PortfolioStatus.TERMINATED,
      name: "Mock MultiAsset Portfolio",
      positions: [
        {
          assetId: "USD",
          id: "USD",
          quantity: 1000,
          portfolioId: "mockMultiAsset"
        },
        {
          assetId: "bond",
          id: "bond",
          quantity: 1,
          portfolioId: "mockMultiAsset"
        },
        {
          assetId: "fund",
          id: "fund",
          quantity: 1,
          portfolioId: "mockMultiAsset"
        }
      ]
    };

    mockOrder.status = OrderStatus.CANCELED;
    const mockOrders = [mockOrder];
    const portfolioOptions = {
      portfolioType: PortfolioType.LIVE,
      withCashMarketValue: 1000
    };
    return new YieldXPortfolio(
      multiPortfolio,
      mockMultiAssets,
      portfolioOptions,
      mockOrders
    );
  }

  return YieldXPortfolio.fromAssets("empty-yieldx-portfolio", []);
};

// TODO: unsure if this should exist
export * from "@testing-library/react";

export { render, buildMockPortfolio };
