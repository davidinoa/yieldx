import React from "react";
import userEvent from "@testing-library/user-event";
import {
  OrderDirectionEnum,
  PortfolioType
} from "@bondhouse/income-portfolios";
import {
  AssetAssetSubtypeEnum,
  AssetAssetTypeEnum
} from "@bondhouse/rover-universe";
import { render, screen } from "test/utils";
import YieldXPortfolio from "models/YieldXPortfolio";
import muni from "__mocks__/models/assets/muni";
import fund from "__mocks__/models/assets/fund";
import PortfolioTabs from "./PortfolioTabs";

const emptyPortfolio = YieldXPortfolio.fromAssets("empty", []);

export const mockInpaasAssets = {
  "dccc676e-46f4-4a3d-a827-21d3716cc644": {
    id: "dccc676e-46f4-4a3d-a827-21d3716cc644",
    createdAt: "2019-11-18T00:12:39.252142Z",
    updatedAt: "2020-08-04T04:26:25.081560Z",
    updatedBy: "bry",
    name: "Guggenheim Strategic Opportunities Fund",
    description:
      "The Fund seeks to maximize total return through a combination of current income and capital appreciation.  The Fund will invest in a wide range of fixed-income and other debt and senior equity securities selected from a variety of sectors and credit qualities.",
    price: 17.24,
    priceDate: "2020-08-03",
    ticker: "GOF",
    assetType: AssetAssetTypeEnum.Fund,
    assetSubtype: AssetAssetSubtypeEnum.ClosedEndFunds,
    currency: "USD",
    market: "USA",
    primaryExchange: "NYSE",
    identifiers: {
      cusip: "40167F101",
      isin: "US40167F1012",
      refinitivLipperId: "40116430",
      refinitivLipperParentId: "30131768",
      apex: "40167F101"
    },
    fund: {
      assetStatus: "Active",
      netAssetsDate: "2020-07-31",
      netAssets: 694025588.2,
      tradeLotSize: 0,
      benchmark: "Bloomberg Barclays U.S. Aggregate Bond TR",
      inceptionDate: "2007-07-27",
      classification: "High Yield",
      fundType: "Closed End Funds",
      allocation: {
        asset: {
          cash: -3.4426,
          equity: 0.8072,
          fixedIncome: 102.7509,
          other: -0.1161
        },
        currency: {
          ils: 1.3044,
          other: 0.611,
          jpy: 1.6737,
          eur: 1.171,
          gbp: 0.2284,
          cad: 0.6583,
          usd: 97.7156,
          brl: 0.9174
        },
        debtType: {
          bonds: 2.1997999999999998,
          notes: 13.5151,
          preferredStock: 0.3571,
          mortgageBackedSecurities: 6.6019,
          municipalBonds: 1.4759,
          assetBackedSecurities: 3.3476,
          other: 75.2441
        },
        fixedIncomeCountry: {
          other: 50.4417,
          il: 1.3044,
          ae: 0.1751,
          au: 1.2465,
          jp: 1.6737,
          ie: 0.0913,
          fr: 0.1596,
          ky: 0.2572,
          nl: 0.301,
          ca: 1.5015,
          us: 45.5894
        },
        fixedIncomeRegion: {
          asiaPacificExJapan: 1.2465,
          europeExUnitedKingdom: 0.5519,
          japan: 1.6737,
          latinAmerica: 0.0918,
          middleEastNorthAfrica: 1.4795,
          northAmericaExUnitedStates: 1.7587,
          unitedStates: 45.5894,
          other: 50.35
        },
        maturity: {
          lessThanOneYear: 4.9204,
          oneToThreeYears: 3.4516,
          threeToFiveYears: 6.8715,
          fiveToTenYears: 17.8907,
          tenToTwentyYears: 15.0013,
          twentyToThirtyYears: 8.3952,
          greaterThanThirtyYears: 3.7363,
          other: 42.0924
        },
        rating: {
          aaa: 1.2806,
          aa: 2.7873,
          a: 9.4862,
          bbb: 10.7375,
          bb: 4.5066,
          b: 3.8213,
          ccc: 1.4744,
          cc: 6.5758,
          c: 0.6267,
          d: 0.2188,
          nr: 61.2264
        },
        region: {
          asiaPacificExJapan: 1.2465,
          europeExUnitedKingdom: 0.5519,
          japan: 1.6737,
          latinAmerica: 0.0918,
          middleEastNorthAfrica: 1.4795,
          northAmericaExUnitedStates: 1.7587,
          unitedStates: 46.3301,
          other: 51.1475
        }
      },
      priceDate: "2020-08-03",
      midPrice: 17.24,
      netAssetValuePerShare: 15.99,
      institutional: false,
      managementCompany: "Guggenheim Funds Investment Advisors LLC",
      focus: {
        assetClassFocus: "Bond",
        geoFocus: "United States of America"
      },
      fees: { fundExpenseRatio: 1.17 },
      scores: {
        totalReturn: {},
        consistentReturn: {},
        preservation: {},
        expense: {},
        taxEfficiency: {}
      },
      yields: {
        distributionYield: 13.6660413,
        lipperDistributionYield: 13.6831559,
        projectedYield: 11.9792287,
        simpleYieldBegin: 12.3179256,
        simpleYieldEnd: 13.6660413,
        trailingTwelveMonthYield: 13.6831559
      },
      distributions: {
        capitalGain: {
          longTermCapitalGain: {
            exDate: "2018-12-13",
            exValue: 0.072700276,
            reinvestmentDate: "2018-12-31",
            reinvestmentValue: 17.93,
            reinvestmentType: "Nav",
            paymentDate: "2018-12-31"
          },
          nonQualifiedShortTermCapitalGain: {
            exDate: "2018-12-13",
            exValue: 0.087746004,
            reinvestmentDate: "2018-12-31",
            reinvestmentValue: 17.93,
            reinvestmentType: "Nav",
            paymentDate: "2018-12-31"
          },
          qualifiedShortTermCapitalGain: {
            exDate: "2018-12-13",
            exValue: 0.000017553,
            reinvestmentDate: "2018-12-31",
            reinvestmentValue: 17.93,
            reinvestmentType: "Nav",
            paymentDate: "2018-12-31"
          }
        },
        income: {
          incomeDividend: {
            exDate: "2020-07-14",
            exValue: 0.1821,
            reinvestmentDate: "2020-07-14",
            reinvestmentValue: 15.54,
            reinvestmentType: "Nav",
            paymentDate: "2020-07-31"
          },
          nonQualifiedIncomeDividend: {
            exDate: "2018-12-13",
            exValue: 0.02163184,
            reinvestmentDate: "2018-12-31",
            reinvestmentValue: 17.93,
            reinvestmentType: "Nav",
            paymentDate: "2018-12-31"
          },
          qualifiedIncomeDividend: {
            exDate: "2018-12-13",
            exValue: 0.000004327,
            reinvestmentDate: "2018-12-31",
            reinvestmentValue: 17.93,
            reinvestmentType: "Nav",
            paymentDate: "2018-12-31"
          }
        }
      }
    },
    analytics: {
      date: "2020-08-03",
      source: "Lipper",
      yield: 13.6831559,
      distributionYield: 13.6831559
    },
    scores: {
      attractiveness: 1,
      credit: 3,
      liquidity: 3,
      risk: 37.4093202965114
    },
    allocation: {
      country: {
        other: 50.4417,
        il: 1.3044,
        ae: 0.1751,
        au: 1.2465,
        jp: 1.6737,
        ie: 0.0913,
        fr: 0.1596,
        ky: 0.2572,
        nl: 0.301,
        ca: 1.5015,
        us: 45.5894
      },
      currency: {
        ils: 1.3044,
        other: 0.611,
        jpy: 1.6737,
        eur: 1.171,
        gbp: 0.2284,
        cad: 0.6583,
        usd: 97.7156,
        brl: 0.9174
      },
      maturity: {
        lessThanOneYear: 4.9204,
        oneToThreeYears: 3.4516,
        threeToFiveYears: 6.8715,
        fiveToTenYears: 17.8907,
        tenToTwentyYears: 15.0013,
        twentyToThirtyYears: 8.3952,
        greaterThanThirtyYears: 3.7363,
        other: 42.0924
      },
      rating: {
        aaa: 1.2806,
        aa: 2.7873,
        a: 9.4862,
        bbb: 10.7375,
        bb: 4.5066,
        b: 3.8213,
        ccc: 1.4744,
        cc: 6.5758,
        c: 0.6267,
        d: 0.2188,
        nr: 61.2264
      },
      region: {
        asiaPacificExJapan: 1.2465,
        europeExUnitedKingdom: 0.5519,
        japan: 1.6737,
        latinAmerica: 0.0918,
        middleEastNorthAfrica: 1.4795,
        northAmericaExUnitedStates: 1.7587,
        unitedStates: 46.3301,
        other: 51.1475
      }
    },
    universes: {
      timestamp: "2020-08-04T04:26:25.214422Z",
      general: true,
      search: true,
      liquid: true
    }
  },
  "ac1ab82c-c1c4-4d34-83fa-df78c79404bf": {
    id: "ac1ab82c-c1c4-4d34-83fa-df78c79404bf",
    createdAt: "2019-11-18T00:28:19.622876Z",
    updatedAt: "2020-08-04T04:33:54.577005Z",
    updatedBy: "bry",
    name: "DoubleLine Opportunistic Credit Fund",
    description:
      "The Fund seeks high current income and/or growth of capital. The Fund may invest in debt securities and income-producing investments, includes residential and commercial mortgage-backed securities, asset-backed securities, US Government securities, corporate debt, international sovereign debt, and short-term investments.",
    price: 19.45,
    priceDate: "2020-08-03",
    ticker: "DBL",
    assetType: AssetAssetTypeEnum.Fund,
    assetSubtype: AssetAssetSubtypeEnum.ClosedEndFunds,
    currency: "USD",
    market: "USA",
    primaryExchange: "NYSE",
    identifiers: {
      cusip: "258623107",
      isin: "US2586231076",
      refinitivLipperId: "40196689",
      refinitivLipperParentId: "36393626",
      apex: "258623107"
    },
    fund: {
      assetStatus: "Active",
      netAssetsDate: "2020-07-31",
      netAssets: 287530483.74,
      tradeLotSize: 0,
      benchmark: "Index is not provided by Management Company",
      inceptionDate: "2012-01-27",
      classification: "Core Bond",
      fundType: "Closed End Funds",
      allocation: {
        asset: {
          cash: -23.1887,
          equity: 0.0247,
          fixedIncome: 122.7225,
          other: 0.4412
        },
        currency: { other: -23.415, jpy: 0.0092, cad: 0, usd: 123.2227 },
        debtType: {
          bonds: 0.1021,
          notes: 0.4444,
          mortgageBackedSecurities: 17.0444,
          assetBackedSecurities: 0.9196,
          other: 103.30030000000001
        },
        fixedIncomeCountry: {
          other: 3.9713,
          lu: 0.0291,
          ie: 0.1333,
          nl: 0.2626,
          ky: 0.3327,
          es: 0.4444,
          us: 116.6377
        },
        fixedIncomeRegion: {
          europeExUnitedKingdom: 0.8694,
          northAmericaExUnitedStates: 0.3327,
          unitedStates: 116.6377,
          other: 3.9713
        },
        maturity: {
          lessThanOneYear: 4.3655,
          oneToThreeYears: 2.6988,
          threeToFiveYears: 2.9982,
          fiveToTenYears: 13.6833,
          tenToTwentyYears: 51.8021,
          twentyToThirtyYears: 34.7853,
          greaterThanThirtyYears: 4.6469,
          other: 6.66
        },
        rating: {
          aaa: 7.1906,
          aa: 28.9632,
          a: 3.5781,
          bbb: 17.7978,
          bb: 16.5623,
          b: 2.3443,
          cc: 7.9685,
          c: 0.2661,
          d: 2.0555,
          nr: 35.0848
        },
        region: {
          europeExUnitedKingdom: 0.8694,
          northAmericaExUnitedStates: 0.3391,
          unitedStates: 118.5837,
          other: -19.9752
        }
      },
      priceDate: "2020-08-03",
      midPrice: 19.45,
      netAssetValuePerShare: 19.26,
      institutional: false,
      managementCompany: "DoubleLine Capital LP",
      focus: {
        assetClassFocus: "Bond",
        geoFocus: "United States of America"
      },
      fees: { fundExpenseRatio: 2.3 },
      scores: {
        totalReturn: {},
        consistentReturn: {},
        preservation: {},
        expense: {},
        taxEfficiency: {}
      },
      yields: {
        distributionYield: 6.8535826,
        lipperDistributionYield: 6.8642746,
        projectedYield: 6.830178,
        secYield: 13.46,
        simpleYieldBegin: 6.7984571,
        simpleYieldEnd: 7.3208723,
        thirtyDayYield: 13.46,
        trailingTwelveMonthYield: 7.3322933
      },
      distributions: {
        capitalGain: {
          returnOfCapital: {
            exDate: "2018-09-19",
            exValue: 0.0472,
            reinvestmentDate: "2018-09-19",
            reinvestmentValue: 19.69,
            reinvestmentType: "Nav",
            paymentDate: "2018-09-28"
          }
        },
        income: {
          incomeDividend: {
            exDate: "2020-07-15",
            exValue: 0.11,
            reinvestmentDate: "2020-07-15",
            reinvestmentValue: 19,
            reinvestmentType: "Nav",
            paymentDate: "2020-07-31"
          },
          nonQualifiedIncomeDividend: {
            exDate: "2018-12-12",
            exValue: 0.11,
            reinvestmentDate: "2018-12-12",
            reinvestmentValue: 19.51,
            reinvestmentType: "Nav",
            paymentDate: "2018-12-31"
          }
        }
      }
    },
    analytics: {
      date: "2020-08-03",
      source: "Lipper",
      yield: 13.46,
      distributionYield: 6.8642746,
      secYield: 13.46
    },
    scores: {
      attractiveness: 1,
      credit: 3,
      liquidity: 3,
      risk: 28.399734275888495
    },
    allocation: {
      country: {
        other: 3.9713,
        lu: 0.0291,
        ie: 0.1333,
        nl: 0.2626,
        ky: 0.3327,
        es: 0.4444,
        us: 116.6377
      },
      currency: { other: -23.415, jpy: 0.0092, cad: 0, usd: 123.2227 },
      maturity: {
        lessThanOneYear: 4.3655,
        oneToThreeYears: 2.6988,
        threeToFiveYears: 2.9982,
        fiveToTenYears: 13.6833,
        tenToTwentyYears: 51.8021,
        twentyToThirtyYears: 34.7853,
        greaterThanThirtyYears: 4.6469,
        other: 6.66
      },
      rating: {
        aaa: 7.1906,
        aa: 28.9632,
        a: 3.5781,
        bbb: 17.7978,
        bb: 16.5623,
        b: 2.3443,
        cc: 7.9685,
        c: 0.2661,
        d: 2.0555,
        nr: 35.0848
      },
      region: {
        europeExUnitedKingdom: 0.8694,
        northAmericaExUnitedStates: 0.3391,
        unitedStates: 118.5837,
        other: -19.9752
      }
    },
    universes: {
      timestamp: "2020-08-04T04:33:54.665626Z",
      general: true,
      search: true,
      liquid: true
    }
  },
  "3eb44c46-e309-41bd-a87c-d190bb0269bb": {
    id: "3eb44c46-e309-41bd-a87c-d190bb0269bb",
    createdAt: "2019-11-22T09:41:24.289448Z",
    updatedAt: "2020-08-04T04:38:36.960828Z",
    updatedBy: "bry",
    name: "Xtrackers High Beta High Yield Bond ETF",
    description:
      "The Fund seeks investment results that correspond generally to the performance of the Solactive USD High Yield Corporates Total Market High Beta Index. The Index is comprised of U.S. dollar-denominated high yield corporate bonds that potentially have higher beta to the overall high yield corporate bond market.",
    price: 45.992,
    priceDate: "2020-08-03",
    ticker: "HYUP",
    assetType: AssetAssetTypeEnum.Fund,
    assetSubtype: AssetAssetSubtypeEnum.ExchangeTradedFunds,
    currency: "USD",
    market: "USA",
    primaryExchange: "Arca",
    identifiers: {
      cusip: "233051259",
      isin: "US2330512599",
      refinitivLipperId: "40223025",
      refinitivLipperParentId: "36837029"
    },
    fund: {
      assetStatus: "Active",
      netAssetsDate: "2020-07-31",
      netAssets: 142815952.55,
      tradeLotSize: 0,
      benchmark: "Lipper Global Bond USD High Yield",
      inceptionDate: "2018-01-11",
      classification: "High Yield",
      fundType: "Exchange Traded Funds",
      allocation: {
        asset: { cash: 1.9351, fixedIncome: 98.0649 },
        currency: { other: 0.1438, usd: 99.8766 },
        debtType: { bonds: 0.1483, notes: 97.3699 },
        fixedIncomeCountry: {
          other: 0.523,
          dk: 0.148,
          lu: 4.054,
          bm: 0.9024,
          fr: 2.2343,
          ky: 0.3433,
          se: 0.0993,
          at: 0.2999,
          au: 0.0626,
          gb: 1.8513,
          ie: 0.9614,
          nl: 4.5262,
          ca: 6.1404,
          us: 75.372
        },
        fixedIncomeRegion: {
          asiaPacificExJapan: 0.0626,
          europeExUnitedKingdom: 12.4898,
          northAmericaExUnitedStates: 7.3862,
          unitedKingdom: 1.8513,
          unitedStates: 75.372,
          other: 0.3564
        },
        maturity: {
          oneToThreeYears: 16.6679,
          threeToFiveYears: 29.4147,
          fiveToTenYears: 51.2083,
          tenToTwentyYears: 0.2275
        },
        rating: {
          bbb: 0.1689,
          bb: 31.4465,
          b: 46.4685,
          ccc: 16.969,
          cc: 1.5081,
          c: 0.615,
          nr: 0.3423
        },
        region: {
          asiaPacificExJapan: 0.0626,
          europeExUnitedKingdom: 12.4898,
          northAmericaExUnitedStates: 7.3862,
          unitedKingdom: 1.8513,
          unitedStates: 77.7303,
          other: 0.5002
        }
      },
      priceDate: "2020-08-03",
      midPrice: 45.992,
      netAssetValuePerShare: 45.97,
      replicationStrategy: "Optimized",
      institutional: false,
      managementCompany: "DBX Advisors LLC",
      focus: {
        assetClassFocus: "Bond",
        geoFocus: "United States of America"
      },
      fees: { managementFee: 0.35, fundExpenseRatio: 0.2 },
      scores: {
        totalReturn: {},
        consistentReturn: {},
        preservation: {},
        expense: {},
        taxEfficiency: {}
      },
      yields: {
        distributionYield: 5.6301066,
        lipperDistributionYield: 6.2010853,
        projectedYield: 6.4413281,
        secYield: 7.198,
        simpleYieldBegin: 6.4542236,
        simpleYieldEnd: 6.7813574,
        thirtyDayYield: 7.198454,
        trailingTwelveMonthYield: 6.8985891
      },
      distributions: {
        income: {
          incomeDividend: {
            exDate: "2020-08-03",
            exValue: 0.21568,
            reinvestmentDate: "2020-08-03",
            reinvestmentValue: 45.97,
            reinvestmentType: "Nav",
            paymentDate: "2020-08-10"
          }
        }
      }
    },
    analytics: {
      date: "2020-08-03",
      source: "Lipper",
      yield: 7.198,
      distributionYield: 6.2010853,
      secYield: 7.198
    },
    scores: {
      attractiveness: 1,
      credit: 3,
      liquidity: 3,
      risk: 13.666453209773156
    },
    allocation: {
      country: {
        other: 0.523,
        dk: 0.148,
        lu: 4.054,
        bm: 0.9024,
        fr: 2.2343,
        ky: 0.3433,
        se: 0.0993,
        at: 0.2999,
        au: 0.0626,
        gb: 1.8513,
        ie: 0.9614,
        nl: 4.5262,
        ca: 6.1404,
        us: 75.372
      },
      currency: { other: 0.1438, usd: 99.8766 },
      maturity: {
        oneToThreeYears: 16.6679,
        threeToFiveYears: 29.4147,
        fiveToTenYears: 51.2083,
        tenToTwentyYears: 0.2275
      },
      rating: {
        bbb: 0.1689,
        bb: 31.4465,
        b: 46.4685,
        ccc: 16.969,
        cc: 1.5081,
        c: 0.615,
        nr: 0.3423
      },
      region: {
        asiaPacificExJapan: 0.0626,
        europeExUnitedKingdom: 12.4898,
        northAmericaExUnitedStates: 7.3862,
        unitedKingdom: 1.8513,
        unitedStates: 77.7303,
        other: 0.5002
      }
    },
    universes: {
      timestamp: "2020-08-04T04:38:37.023097Z",
      general: true,
      search: true,
      liquid: true
    }
  },
  "f601e45f-0b64-45d6-83aa-990d2631b064": {
    id: "f601e45f-0b64-45d6-83aa-990d2631b064",
    createdAt: "2019-11-18T00:24:34.560456Z",
    updatedAt: "2020-08-04T04:30:30.433299Z",
    updatedBy: "bry",
    name: "Nuveen Credit Strategies Income Fund",
    description:
      "The Fund seeks high current income.  Under normal circumstances the Fund will invest at least 70% of its assets in senior secured and second lien loans.  The Fund will also use leverage.",
    price: 5.92,
    priceDate: "2020-08-03",
    ticker: "JQC",
    assetType: AssetAssetTypeEnum.Fund,
    assetSubtype: AssetAssetSubtypeEnum.ClosedEndFunds,
    currency: "USD",
    market: "USA",
    primaryExchange: "NYSE",
    identifiers: {
      cusip: "67073D102",
      isin: "US67073D1028",
      refinitivLipperId: "40088696",
      refinitivLipperParentId: "35563978",
      apex: "67073D102"
    },
    fund: {
      assetStatus: "Active",
      netAssetsDate: "2020-07-31",
      netAssets: 932500056.89,
      tradeLotSize: 0,
      benchmark: "Index is not available on Lipper Database",
      inceptionDate: "2003-06-25",
      classification: "Loan Participation Funds",
      fundType: "Closed End Funds",
      allocation: {
        asset: {
          cash: -61.6193,
          equity: 0.7225,
          fixedIncome: 151.06,
          other: 9.8369
        },
        currency: { other: 17.9316, cad: 3.0313, usd: 131.2129 },
        debtType: {
          bonds: 2.0092,
          notes: 23.180600000000002,
          other: 124.7462
        },
        fixedIncomeCountry: {
          other: 59.7854,
          at: 0.3202,
          lu: 1.4839,
          gb: 2.2405,
          ie: 0.1657,
          fr: 0.9179,
          ca: 2.2125,
          nl: 2.8881,
          us: 79.9216
        },
        fixedIncomeRegion: {
          europeExUnitedKingdom: 5.7758,
          northAmericaExUnitedStates: 2.2125,
          unitedKingdom: 2.2405,
          unitedStates: 79.9216,
          other: 59.7854
        },
        maturity: {
          lessThanOneYear: 2.1959,
          oneToThreeYears: 26.2026,
          threeToFiveYears: 56.3896,
          fiveToTenYears: 64.2337,
          tenToTwentyYears: 0.001,
          twentyToThirtyYears: 0.9131
        },
        rating: {
          bbb: 2.2341,
          bb: 6.8649,
          b: 6.7119,
          ccc: 6.0531,
          cc: 0.5762,
          d: 1.0617,
          nr: 126.434
        },
        region: {
          europeExUnitedKingdom: 5.7758,
          northAmericaExUnitedStates: 2.2125,
          unitedKingdom: 2.2677,
          unitedStates: 82.4703,
          other: 59.4494
        }
      },
      priceDate: "2020-08-03",
      midPrice: 5.92,
      netAssetValuePerShare: 6.88,
      institutional: false,
      managementCompany: "Nuveen Fund Advisors LLC",
      focus: {
        assetClassFocus: "Bond",
        geoFocus: "United States of America"
      },
      fees: { fundExpenseRatio: 3.42 },
      scores: {
        totalReturn: {},
        consistentReturn: {},
        preservation: {},
        expense: {},
        taxEfficiency: {}
      },
      yields: {
        distributionYield: 14.127907,
        lipperDistributionYield: 14.127907,
        projectedYield: 14.1872532,
        simpleYieldBegin: 13.3525943,
        simpleYieldEnd: 16.4578488,
        trailingTwelveMonthYield: 16.4578488
      },
      distributions: {
        capitalGain: {
          longTermCapitalGain: {
            exDate: "2005-12-22",
            exValue: 0.053,
            reinvestmentDate: "2005-12-22",
            reinvestmentValue: 14.17,
            reinvestmentType: "Nav",
            paymentDate: "2005-12-30"
          },
          shortTermCapitalGain: {
            exDate: "2004-12-27",
            exValue: 0.0001,
            reinvestmentDate: "2004-12-27",
            reinvestmentValue: 15.07,
            reinvestmentType: "Nav",
            paymentDate: "2004-12-31"
          }
        },
        income: {
          incomeDividend: {
            exDate: "2020-07-14",
            exValue: 0.081,
            reinvestmentDate: "2020-07-14",
            reinvestmentValue: 6.76,
            reinvestmentType: "Nav",
            paymentDate: "2020-08-03"
          },
          nonQualifiedIncomeDividend: {
            exDate: "2018-12-13",
            exValue: 0.0385,
            reinvestmentDate: "2018-12-13",
            reinvestmentValue: 8.67,
            reinvestmentType: "Nav",
            paymentDate: "2018-12-31"
          },
          qualifiedIncomeDividend: {
            exDate: "2016-12-13",
            exValue: 0.001103,
            reinvestmentDate: "2016-12-13",
            reinvestmentValue: 9.38,
            reinvestmentType: "Nav",
            paymentDate: "2016-12-30"
          }
        }
      }
    },
    analytics: {
      date: "2020-08-03",
      source: "Lipper",
      yield: 14.127907,
      distributionYield: 14.127907
    },
    scores: {
      attractiveness: 1,
      credit: 3,
      liquidity: 3,
      risk: 41.01744977731985
    },
    allocation: {
      country: {
        other: 59.7854,
        at: 0.3202,
        lu: 1.4839,
        gb: 2.2405,
        ie: 0.1657,
        fr: 0.9179,
        ca: 2.2125,
        nl: 2.8881,
        us: 79.9216
      },
      currency: { other: 17.9316, cad: 3.0313, usd: 131.2129 },
      maturity: {
        lessThanOneYear: 2.1959,
        oneToThreeYears: 26.2026,
        threeToFiveYears: 56.3896,
        fiveToTenYears: 64.2337,
        tenToTwentyYears: 0.001,
        twentyToThirtyYears: 0.9131
      },
      rating: {
        bbb: 2.2341,
        bb: 6.8649,
        b: 6.7119,
        ccc: 6.0531,
        cc: 0.5762,
        d: 1.0617,
        nr: 126.434
      },
      region: {
        europeExUnitedKingdom: 5.7758,
        northAmericaExUnitedStates: 2.2125,
        unitedKingdom: 2.2677,
        unitedStates: 82.4703,
        other: 59.4494
      }
    },
    universes: {
      timestamp: "2020-08-04T04:30:30.531741Z",
      general: true,
      search: true,
      liquid: true
    }
  }
};

export const liveInpaas = YieldXPortfolio.fromInpaasProposal(
  {
    proposalId: "f0d27b11-9707-4dcb-9455-44774490bd50",
    updatedAt: "2020-07-20T18:24:41.868111Z",
    commentary: [
      {
        topic: "Income",
        content:
          "The expected monthly income is $1000 for an annualized yield of 12.00%."
      },
      {
        topic: "Risk",
        content:
          "You have a 32% chance of losing money in a given year, and the portfolio's largest drop in account value was 18.8% in the last five years. This is 1379 basis points less risk than similar securities yielding 12-13%."
      },
      {
        topic: "Expenses",
        content:
          "The weighted expense ratio is 1.61% per year. This is 138 basis points less than similar funds with this yield."
      }
    ],
    portfolio: {
      id: "b14f0e76-b65b-44a2-aeea-c1e865d301aa",
      currency: "USD",
      name: "Your new portfolio",
      positions: [
        {
          // @ts-expect-error
          yield: 7.735,
          id: "b14f0e76._3eb44c46.buy",
          assetId: "3eb44c46-e309-41bd-a87c-d190bb0269bb",
          publicIdentifiers: {
            cusip: "233051259",
            isin: "US2330512599",
            ticker: "HYUP"
          },
          quantity: 433,
          marketValue: 19521.6751,
          weight: 19.521675099999996,
          price: 45.0847,
          name: "Xtrackers High Beta High Yield Bond ETF"
        },
        {
          // @ts-expect-error
          yield: 13.46,
          id: "b14f0e76.ac1ab82c.buy",
          assetId: "ac1ab82c-c1c4-4d34-83fa-df78c79404bf",
          publicIdentifiers: {
            cusip: "258623107",
            isin: "US2586231076",
            ticker: "DBL"
          },
          quantity: 1593,
          marketValue: 29996.19,
          weight: 29.996189999999995,
          price: 18.83,
          name: "DoubleLine Opportunistic Credit Fund"
        },
        {
          // @ts-expect-error
          yield: 14.1162791,
          id: "b14f0e76.dccc676e.buy",
          assetId: "dccc676e-46f4-4a3d-a827-21d3716cc644",
          publicIdentifiers: {
            cusip: "40167F101",
            isin: "US40167F1012",
            ticker: "GOF"
          },
          quantity: 1765,
          marketValue: 29987.35,
          weight: 29.987349999999996,
          price: 16.99,
          name: "Guggenheim Strategic Opportunities Fund"
        },
        {
          // @ts-expect-error
          yield: 14.3362832,
          id: "b14f0e76.f601e45f.buy",
          assetId: "f601e45f-0b64-45d6-83aa-990d2631b064",
          publicIdentifiers: {
            cusip: "67073D102",
            isin: "US67073D1028",
            ticker: "JQC"
          },
          quantity: 2688,
          marketValue: 15482.88,
          weight: 15.482879999999996,
          price: 5.76,
          name: "Nuveen Credit Strategies Income Fund"
        },
        {
          // @ts-expect-error
          yield: 0,
          id: "USD",
          assetId: "USD",
          publicIdentifiers: {},
          quantity: 5011.904900000007,
          marketValue: 5011.904900000007,
          weight: 5.011904900000006,
          price: 1,
          name: "Cash"
        }
      ],
      createdAt: "2020-07-20T18:24:41.868216Z",
      updatedAt: "2020-07-20T18:24:41.868216Z",
      metadata: { app: "incomeportfolios" }
    },
    incomePortfoliosAnalysis: {
      income: 1000.0213573329174,
      risk: 26.209672042874637,
      expenseRatio: 1.6093222111999999,
      // @ts-expect-error
      yield: 12.000256287995008,
      afterTaxYield: 7.200153772797004,
      maxDrawdown: -18.824913862299542,
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
      goal: { income: 1000 },
      investmentAmount: 100000,
      constraints: { minimumWeight: 0.05, maximumWeight: 0.3 }
    },
    orders: [
      {
        assetId: "3eb44c46-e309-41bd-a87c-d190bb0269bb",
        direction: OrderDirectionEnum.BUY,
        quantity: 433
      },
      {
        assetId: "ac1ab82c-c1c4-4d34-83fa-df78c79404bf",
        direction: OrderDirectionEnum.BUY,
        quantity: 1593
      },
      {
        assetId: "dccc676e-46f4-4a3d-a827-21d3716cc644",
        direction: OrderDirectionEnum.BUY,
        quantity: 1765
      },
      {
        assetId: "f601e45f-0b64-45d6-83aa-990d2631b064",
        direction: OrderDirectionEnum.BUY,
        quantity: 2688
      },
      {
        assetId: "USD",
        direction: OrderDirectionEnum.SELL,
        quantity: -94988.09509999999
      }
    ]
  },
  Object.values(mockInpaasAssets),
  PortfolioType.LIVE
);

describe("PortfolioTabs", () => {
  test("external-portfolio", () => {
    render(<PortfolioTabs portfolio={emptyPortfolio} />);
    expect(screen.queryAllByRole("tab")).toHaveLength(0);
  });

  test("live-portfolio with multi orders", async () => {
    const mockPMS = {
      ...emptyPortfolio.asPmsPortfolio(),
      positions: [
        {
          portfolioId: "empty",
          quantity: 1,
          assetId: "fund",
          id: "fund"
        },
        {
          portfolioId: "empty",
          quantity: 1,
          assetId: "bond",
          id: "bond"
        }
      ]
    };
    const portfolio = new YieldXPortfolio(mockPMS, [fund, muni], {
      portfolioType: PortfolioType.LIVE
    });
    portfolio.buySellAssetIdsDiff([], ["fund", "muni"], { fund, muni });
    render(<PortfolioTabs portfolio={portfolio} orders={[]} />);
    const tabs = await screen.findAllByRole("tab");
    expect(tabs).toHaveLength(4);
    userEvent.click(screen.getByText(/orders/i));
    expect(screen.getByText(/orders/i)).toHaveClass("active");
  });

  test("inpaas portfolio should not have tabs", () => {
    render(<PortfolioTabs portfolio={liveInpaas} />);
    const tabs = screen.queryAllByRole("tab");
    expect(tabs).toHaveLength(0);
  });
});
