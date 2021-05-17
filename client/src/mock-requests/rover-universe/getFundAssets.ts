import { MockedRequest, rest } from "msw";
import {
  Asset,
  AssetAssetSubtypeEnum,
  AssetAssetTypeEnum,
  GetAssetsRequest,
  GetAssetsResponse
} from "@bondhouse/rover-universe";

export const getFundAssets = rest.post(
  "/apis/rover-universe/v1/assets/_get-assets",
  (req, res, ctx) => {
    // this will only mock the response if any of the assetIds include "mock-asset", else it will hit backend
    if (isAssetRequest(req.body) && hasMockAssetIds(req.body.assetIds))
      return res(ctx.status(200), ctx.json(createMockGetFundsResp(req.body)));
    return undefined;
  }
);

function createMockGetFundsResp(req: GetAssetsRequest): GetAssetsResponse {
  return {
    assets: req.assetIds.map(it =>
      createMockAsset({
        assetType: AssetAssetTypeEnum.Fund,
        assetSubtype: AssetAssetSubtypeEnum.ExchangeTradedFunds,
        id: it,
        name: it,
        price: 50_000
      })
    )
  };
}

// type guard
function isAssetRequest(body: MockedRequest["body"]): body is GetAssetsRequest {
  return (body as GetAssetsRequest).assetIds !== undefined;
}

function hasMockAssetIds(assetIds: string[]): boolean {
  return assetIds.some(it => it.includes("mock-asset"));
}

function createMockAsset({
  assetSubtype = AssetAssetSubtypeEnum.Corporate,
  assetType = AssetAssetTypeEnum.Bond,
  name = "MOCK ASSET",
  id,
  price
}: MockAssetParams): Asset {
  return {
    id,
    createdAt: "2019-11-22T09:43:38.214966Z",
    updatedAt: "2020-09-18T12:32:38.205682Z",
    updatedBy: "bry",
    name,
    description:
      "The Fund seeks to provide equal emphasis, high current income and relative stability of net asset value.",
    price: price ?? 4.11,
    priceDate: "2020-09-17",
    ticker: "PIM",
    assetType,
    assetSubtype,
    currency: "USD",
    market: "USA",
    primaryExchange: "NYSE",
    identifiers: {
      cusip: "746909100",
      isin: "US7469091000",
      refinitivLipperId: "40002720",
      refinitivLipperParentId: "35530972",
      apex: "746909100"
    },
    fund: {
      assetStatus: "Active",
      netAssetsDate: "2020-08-31",
      netAssets: 222031873.42,
      tradeLotSize: 0,
      benchmark: "Bloomberg Barclays U.S. Aggregate Bond TR",
      inceptionDate: "1988-04-11",
      classification: "Core Bond",
      fundType: "Closed End Funds",
      allocation: {
        asset: {
          cash: 49.6225,
          equity: 0.0402,
          fixedIncome: 145.1155,
          other: -94.7785
        },
        currency: {
          other: -0.7884,
          eur: -2.181,
          gbp: 0.1297,
          cad: 0.1033,
          usd: 53.1155
        },
        debtType: {
          bonds: 10.0455,
          notes: 32.933099999999996,
          mortgageBackedSecurities: 55.9477,
          other: 45.9033
        },
        fixedIncomeCountry: {
          de: 0.104,
          no: 0.2244,
          other: 6.7606,
          eg: 1.1514,
          il: 0.1,
          za: 0.4832,
          lu: 0.3994,
          it: 0.0949,
          bm: 0.1587,
          mx: 1.1947,
          fr: 0.0953,
          ky: 0.0558,
          qa: 0.3457,
          ar: 1.5382,
          vn: 0.4527,
          gb: 0.753,
          id: 2.13,
          ie: 0.2798,
          nl: 1.3886,
          ca: 1.915,
          us: 125.4898
        },
        fixedIncomeRegion: {
          africaExNorthAfrica: 3.4565,
          emergingMarketsAsia: 2.5827,
          europeExUnitedKingdom: 2.5866,
          latinAmerica: 4.4283,
          middleEastNorthAfrica: 2.3045,
          northAmericaExUnitedStates: 2.1295,
          unitedKingdom: 0.753,
          unitedStates: 125.4898,
          other: 1.3846
        },
        maturity: {
          lessThanOneYear: 9.3157,
          oneToThreeYears: 4.3318,
          threeToFiveYears: 16.5973,
          fiveToTenYears: 30.4544,
          tenToTwentyYears: 6.2993,
          twentyToThirtyYears: 21.331,
          greaterThanThirtyYears: 8.0216,
          other: 48.5727
        },
        rating: {
          aaa: 9.6424,
          aa: 75.4711,
          a: 1.3502,
          bbb: 8.9214,
          bb: 20.1922,
          b: 11.475,
          ccc: 3.0751,
          cc: 3.0162,
          c: 0.5133,
          d: 0.6543,
          nr: 10.8044
        },
        region: {
          africaExNorthAfrica: 3.4565,
          emergingMarketsAsia: 2.5827,
          europeExUnitedKingdom: 2.5866,
          latinAmerica: 4.4283,
          middleEastNorthAfrica: 2.3045,
          northAmericaExUnitedStates: 2.1297,
          unitedKingdom: 0.7545,
          unitedStates: 127.2405,
          other: -95.104
        }
      },
      priceDate: "2020-09-17",
      midPrice: 4.11,
      netAssetValuePerShare: 4.33,
      institutional: false,
      managementCompany: "Putnam Investment Management LLC",
      focus: { assetClassFocus: "Bond", geoFocus: "United States of America" },
      fees: { fundExpenseRatio: 1.02 },
      scores: {
        totalReturn: {},
        consistentReturn: {},
        preservation: {},
        expense: {},
        taxEfficiency: {}
      },
      yields: {
        distributionYield: 8.3140878,
        lipperDistributionYield: 8.3140878,
        projectedYield: 7.6770331,
        simpleYieldBegin: 7.4688797,
        simpleYieldEnd: 8.3140878,
        trailingTwelveMonthYield: 8.3140878
      },
      distributions: {
        capitalGain: {
          capitalGain: {
            exDate: "1993-07-14",
            exValue: 0.001,
            reinvestmentDate: "1993-07-14",
            reinvestmentValue: 8.89,
            reinvestmentType: "Nav",
            paymentDate: "1993-07-14"
          }
        },
        income: {
          incomeDividend: {
            exDate: "2020-08-21",
            exValue: 0.03,
            reinvestmentDate: "2020-08-21",
            reinvestmentValue: 4.33,
            reinvestmentType: "Nav",
            paymentDate: "2020-09-01"
          },
          nonQualifiedIncomeDividend: {
            exDate: "2018-12-20",
            exValue: 0.03,
            reinvestmentDate: "2018-12-20",
            reinvestmentValue: 4.69,
            reinvestmentType: "Nav",
            paymentDate: "2019-01-02"
          },
          qualifiedIncomeDividend: {
            exDate: "2003-12-22",
            exValue: 0.00195,
            reinvestmentDate: "2003-12-22",
            reinvestmentValue: 7.12,
            reinvestmentType: "Nav"
          }
        }
      }
    },
    analytics: {
      date: "2020-09-17",
      source: "Lipper",
      // @ts-expect-error
      yield: 8.3140878,
      distributionYield: 8.3140878
    },
    scores: {
      attractiveness: 1,
      credit: 3,
      liquidity: 3,
      risk: 23.612570204701903
    },
    allocation: {
      country: {
        de: 0.104,
        no: 0.2244,
        other: 6.7606,
        eg: 1.1514,
        il: 0.1,
        za: 0.4832,
        lu: 0.3994,
        it: 0.0949,
        bm: 0.1587,
        mx: 1.1947,
        fr: 0.0953,
        ky: 0.0558,
        qa: 0.3457,
        ar: 1.5382,
        vn: 0.4527,
        gb: 0.753,
        id: 2.13,
        ie: 0.2798,
        nl: 1.3886,
        ca: 1.915,
        us: 125.4898
      },
      currency: {
        other: -0.7884,
        eur: -2.181,
        gbp: 0.1297,
        cad: 0.1033,
        usd: 53.1155
      },
      maturity: {
        lessThanOneYear: 9.3157,
        oneToThreeYears: 4.3318,
        threeToFiveYears: 16.5973,
        fiveToTenYears: 30.4544,
        tenToTwentyYears: 6.2993,
        twentyToThirtyYears: 21.331,
        greaterThanThirtyYears: 8.0216,
        other: 48.5727
      },
      rating: {
        aaa: 9.6424,
        aa: 75.4711,
        a: 1.3502,
        bbb: 8.9214,
        bb: 20.1922,
        b: 11.475,
        ccc: 3.0751,
        cc: 3.0162,
        c: 0.5133,
        d: 0.6543,
        nr: 10.8044
      },
      region: {
        africaExNorthAfrica: 3.4565,
        emergingMarketsAsia: 2.5827,
        europeExUnitedKingdom: 2.5866,
        latinAmerica: 4.4283,
        middleEastNorthAfrica: 2.3045,
        northAmericaExUnitedStates: 2.1297,
        unitedKingdom: 0.7545,
        unitedStates: 127.2405,
        other: -95.104
      }
    },
    universes: {
      timestamp: "2020-09-18T04:27:47.296656Z",
      general: true,
      search: true,
      liquid: true
    }
  };
}

interface MockAssetParams {
  id: string;
  name?: string;
  assetType?: AssetAssetTypeEnum;
  assetSubtype?: AssetAssetSubtypeEnum;
  price?: number;
}
