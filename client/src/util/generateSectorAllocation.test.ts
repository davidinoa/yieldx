import { YieldXPosition } from "models/YieldXPortfolio";
import {
  AssetAssetSubtypeEnum,
  AssetAssetTypeEnum
} from "@bondhouse/rover-universe";
import { generateSectorAllocation } from "./generateSectorAllocation";

export const MOCK_YIELDX_INPAAS_POSITIONS: YieldXPosition[] = [
  {
    assetId: "19252071-ef98-4e1d-956a-8bb56e7c567c",
    createdAt: "2020-10-23T20:11:29.447469Z",
    id: "19252071-ef98-4e1d-956a-8bb56e7c567c",
    portfolioId: "c22e75e8-8e14-4611-a7c9-9cd99f1f3725",
    quantity: 2579,
    updatedAt: "2020-10-23T20:11:29.447469Z",
    quantityToMarketValueFactor: 16.5,
    marketValue: 42553.5,
    weight: 11.820416666666665,
    asset: {
      id: "19252071-ef98-4e1d-956a-8bb56e7c567c",
      createdAt: "2019-11-22T09:40:17.709465Z",
      updatedAt: "2020-10-23T04:31:51.641812Z",
      updatedBy: "bry",
      name: "Brookfield Real Assets Income Fund Inc",
      description:
        'The Fund seeks to achieve its investment objective by investing primarily in securities and other instruments of companies and issuers in the "real assets" asset class which includes Real Estate Securities, Infrastructure Securities and Natural Resources Securities (collectively, "Real Asset Companies and Issuers").',
      price: 16.5,
      priceDate: "2020-10-22",
      ticker: "RA",
      assetType: AssetAssetTypeEnum.Fund,
      assetSubtype: AssetAssetSubtypeEnum.ClosedEndFunds,
      currency: "USD",
      market: "USA",
      primaryExchange: "NYSE",
      identifiers: {
        cusip: "112830104",
        isin: "US1128301041",
        refinitivLipperId: "40217640",
        refinitivLipperParentId: "36773449",
        apex: "112830104"
      },
      fund: {
        assetStatus: "Active",
        netAssetsDate: "2020-09-30",
        netAssets: 837364096.46,
        benchmark: "Index is not provided by Management Company",
        inceptionDate: "2016-12-02",
        classification: "High Yield",
        fundType: "Closed End Funds",
        allocation: {
          asset: {
            cash: -32.8857,
            equity: 37.9364,
            fixedIncome: 94.8148,
            other: 0.1347
          },
          currency: {
            hkd: 2.3036,
            other: -3.9604,
            mxn: 1.0643,
            eur: 4.8442,
            dkk: 0.2225,
            cad: 2.56,
            usd: 115.3526,
            cny: 0.0036,
            sgd: 0.3529,
            aud: 1.823,
            jpy: 1.9314,
            gbp: 1.8241,
            sek: 0.1392,
            nzd: 0.5508,
            brl: 0.5097
          },
          debtType: {
            notes: 53.308699999999995,
            mortgageBackedSecurities: 4.3373,
            other: 35.7429
          },
          fixedIncomeCountry: {
            other: 1.7516,
            lu: 2.0359,
            ky: 0.902,
            nl: 1.0653,
            ca: 3.6915,
            us: 83.9425
          },
          fixedIncomeRegion: {
            europeExUnitedKingdom: 3.1011,
            northAmericaExUnitedStates: 4.5935,
            unitedStates: 83.9425,
            other: 1.7516
          },
          maturity: {
            lessThanOneYear: 0.1684,
            oneToThreeYears: 2.9451,
            threeToFiveYears: 8.2088,
            fiveToTenYears: 42.4369,
            tenToTwentyYears: 27.3053,
            twentyToThirtyYears: 7.3614,
            greaterThanThirtyYears: 1.7649,
            other: 3.1979
          },
          rating: {
            aaa: 0.7141,
            aa: 0.5944,
            a: 0.9618,
            bbb: 15.5134,
            bb: 32.9269,
            b: 7.737,
            ccc: 2.9285,
            cc: 11.7343,
            c: 0.5086,
            d: 0.3319,
            nr: 19.4379
          },
          region: {
            asiaPacificExJapan: 4.6887,
            emergingMarketsAsia: 0.3453,
            europeExUnitedKingdom: 8.307,
            japan: 1.9314,
            latinAmerica: 1.5741,
            northAmericaExUnitedStates: 7.1535,
            unitedKingdom: 1.8241,
            unitedStates: 105.6751,
            other: -1.9775
          }
        },
        priceDate: "2020-10-22",
        midPrice: 16.5,
        netAssetValuePerShare: 19.27,
        institutional: false,
        managementCompany: "Brookfield Public Securities Group LLC",
        focus: {
          assetClassFocus: "Bond",
          geoFocus: "United States of America"
        },
        fees: { fundExpenseRatio: 2.54 },
        scores: {
          totalReturn: {},
          consistentReturn: {},
          preservation: {},
          expense: {},
          taxEfficiency: {}
        },
        yields: {
          distributionYield: 12.3923197,
          lipperDistributionYield: 12.5157233,
          projectedYield: 11.135588,
          simpleYieldBegin: 10.2226027,
          simpleYieldEnd: 12.3923197,
          trailingTwelveMonthYield: 12.5157233
        },
        distributions: {
          capitalGain: {
            returnOfCapital: {
              exDate: "2018-12-18",
              exValue: 0.07171399,
              reinvestmentDate: "2018-12-18",
              reinvestmentValue: 22.42,
              reinvestmentType: "Nav",
              paymentDate: "2018-12-27"
            }
          },
          income: {
            incomeDividend: {
              exDate: "2020-10-13",
              exValue: 0.199,
              reinvestmentDate: "2020-10-13",
              reinvestmentValue: 19.28,
              reinvestmentType: "Nav",
              paymentDate: "2020-10-22"
            },
            nonQualifiedIncomeDividend: {
              exDate: "2018-12-18",
              exValue: 0.11785412,
              reinvestmentDate: "2018-12-18",
              reinvestmentValue: 22.42,
              reinvestmentType: "Nav",
              paymentDate: "2018-12-27"
            },
            qualifiedIncomeDividend: {
              exDate: "2018-12-18",
              exValue: 0.00943189,
              reinvestmentDate: "2018-12-18",
              reinvestmentValue: 22.42,
              reinvestmentType: "Nav",
              paymentDate: "2018-12-27"
            }
          }
        }
      },
      analytics: {
        date: "2020-10-22",
        source: "Lipper",
        // @ts-expect-error
        yield: 12.5157233,
        distributionYield: 12.5157233
      },
      scores: {
        attractiveness: 1,
        credit: 3,
        liquidity: 3,
        risk: 37.45954335325918
      },
      esgScores: {
        timestamp: "2020-10-10T00:48:39.875424Z",
        total: 59,
        environmental: 58,
        social: 54,
        governance: 67
      },
      allocation: {
        country: {
          other: 1.7516,
          lu: 2.0359,
          ky: 0.902,
          nl: 1.0653,
          ca: 3.6915,
          us: 83.9425
        },
        currency: {
          hkd: 2.3036,
          other: -3.9604,
          mxn: 1.0643,
          eur: 4.8442,
          dkk: 0.2225,
          cad: 2.56,
          usd: 115.3526,
          cny: 0.0036,
          sgd: 0.3529,
          aud: 1.823,
          jpy: 1.9314,
          gbp: 1.8241,
          sek: 0.1392,
          nzd: 0.5508,
          brl: 0.5097
        },
        maturity: {
          lessThanOneYear: 0.1684,
          oneToThreeYears: 2.9451,
          threeToFiveYears: 8.2088,
          fiveToTenYears: 42.4369,
          tenToTwentyYears: 27.3053,
          twentyToThirtyYears: 7.3614,
          greaterThanThirtyYears: 1.7649,
          other: 3.1979
        },
        rating: {
          aaa: 0.7141,
          aa: 0.5944,
          a: 0.9618,
          bbb: 15.5134,
          bb: 32.9269,
          b: 7.737,
          ccc: 2.9285,
          cc: 11.7343,
          c: 0.5086,
          d: 0.3319,
          nr: 19.4379
        },
        region: {
          asiaPacificExJapan: 4.6887,
          emergingMarketsAsia: 0.3453,
          europeExUnitedKingdom: 8.307,
          japan: 1.9314,
          latinAmerica: 1.5741,
          northAmericaExUnitedStates: 7.1535,
          unitedKingdom: 1.8241,
          unitedStates: 105.6751,
          other: -1.9775
        }
      },
      universes: {
        timestamp: "2020-10-23T04:31:52.138074Z",
        general: true,
        search: true,
        liquid: true
      }
    },
    minimumDenomination: 1,
    denominationIncrement: 1
  },
  {
    assetId: "ac1ab82c-c1c4-4d34-83fa-df78c79404bf",
    createdAt: "2020-10-23T20:11:29.447469Z",
    id: "ac1ab82c-c1c4-4d34-83fa-df78c79404bf",
    portfolioId: "c22e75e8-8e14-4611-a7c9-9cd99f1f3725",
    quantity: 5722,
    updatedAt: "2020-10-23T20:11:29.447469Z",
    quantityToMarketValueFactor: 18.87,
    marketValue: 107974.14,
    weight: 29.99281666666666,
    asset: {
      id: "ac1ab82c-c1c4-4d34-83fa-df78c79404bf",
      createdAt: "2019-11-18T00:28:19.622876Z",
      updatedAt: "2020-10-23T04:30:22.748160Z",
      updatedBy: "bry",
      name: "DoubleLine Opportunistic Credit Fund",
      description:
        "The Fund seeks high current income and/or growth of capital. The Fund may invest in debt securities and income-producing investments, includes residential and commercial mortgage-backed securities, asset-backed securities, US Government securities, corporate debt, international sovereign debt, and short-term investments.",
      price: 18.87,
      priceDate: "2020-10-22",
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
        netAssetsDate: "2020-09-30",
        netAssets: 291913142.89,
        tradeLotSize: 0,
        benchmark: "Index is not provided by Management Company",
        inceptionDate: "2012-01-27",
        classification: "Core Bond",
        fundType: "Closed End Funds",
        allocation: {
          asset: {
            cash: -21.1167,
            equity: 0.1666,
            fixedIncome: 120.1428,
            other: 0.8073
          },
          currency: {
            other: -20.9952,
            jpy: 0.0115,
            cad: 0.0131,
            usd: 120.9683
          },
          debtType: {
            bonds: 0.1306,
            notes: 4.6298,
            mortgageBackedSecurities: 18.2279,
            assetBackedSecurities: 0.5498,
            other: 95.5015
          },
          fixedIncomeCountry: {
            other: 4.0467,
            lu: 0.029,
            ie: 0.133,
            nl: 0.093,
            ky: 0.3308,
            es: 0.476,
            us: 113.9309
          },
          fixedIncomeRegion: {
            europeExUnitedKingdom: 0.7311,
            northAmericaExUnitedStates: 0.3308,
            unitedStates: 113.9309,
            other: 4.0467
          },
          maturity: {
            lessThanOneYear: 0.0547,
            oneToThreeYears: 3.0276,
            threeToFiveYears: 3.4654,
            fiveToTenYears: 19.3894,
            tenToTwentyYears: 48.8884,
            twentyToThirtyYears: 32.4591,
            greaterThanThirtyYears: 5.0909,
            other: 6.664
          },
          rating: {
            aaa: 7.0819,
            aa: 26.7896,
            a: 3.3861,
            bbb: 18.2358,
            bb: 12.9769,
            b: 5.6957,
            ccc: 0.9953,
            cc: 7.7293,
            c: 0.2634,
            d: 1.9682,
            nr: 33.9174
          },
          region: {
            europeExUnitedKingdom: 0.7311,
            northAmericaExUnitedStates: 0.3399,
            unitedStates: 116.4078,
            other: -17.4812
          }
        },
        priceDate: "2020-10-22",
        midPrice: 18.87,
        netAssetValuePerShare: 19.45,
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
          distributionYield: 6.7866324,
          lipperDistributionYield: 6.7622951,
          projectedYield: 6.723187,
          secYield: 12.28,
          simpleYieldBegin: 6.8380213,
          simpleYieldEnd: 7.2493573,
          thirtyDayYield: 12.28,
          trailingTwelveMonthYield: 7.2233607
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
              exDate: "2020-10-14",
              exValue: 0.11,
              reinvestmentDate: "2020-10-14",
              reinvestmentValue: 19.48,
              reinvestmentType: "Nav",
              paymentDate: "2020-10-30"
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
        date: "2020-10-22",
        source: "Lipper",
        // @ts-expect-error
        yield: 12.28,
        distributionYield: 6.7622951,
        secYield: 12.28
      },
      scores: {
        attractiveness: 1,
        credit: 3,
        liquidity: 3,
        risk: 24.59591070008033
      },
      allocation: {
        country: {
          other: 4.0467,
          lu: 0.029,
          ie: 0.133,
          nl: 0.093,
          ky: 0.3308,
          es: 0.476,
          us: 113.9309
        },
        currency: { other: -20.9952, jpy: 0.0115, cad: 0.0131, usd: 120.9683 },
        maturity: {
          lessThanOneYear: 0.0547,
          oneToThreeYears: 3.0276,
          threeToFiveYears: 3.4654,
          fiveToTenYears: 19.3894,
          tenToTwentyYears: 48.8884,
          twentyToThirtyYears: 32.4591,
          greaterThanThirtyYears: 5.0909,
          other: 6.664
        },
        rating: {
          aaa: 7.0819,
          aa: 26.7896,
          a: 3.3861,
          bbb: 18.2358,
          bb: 12.9769,
          b: 5.6957,
          ccc: 0.9953,
          cc: 7.7293,
          c: 0.2634,
          d: 1.9682,
          nr: 33.9174
        },
        region: {
          europeExUnitedKingdom: 0.7311,
          northAmericaExUnitedStates: 0.3399,
          unitedStates: 116.4078,
          other: -17.4812
        }
      },
      universes: {
        timestamp: "2020-10-23T04:30:23.568249Z",
        general: true,
        search: true,
        liquid: true
      }
    },
    minimumDenomination: 1,
    denominationIncrement: 1
  },
  {
    assetId: "3eb44c46-e309-41bd-a87c-d190bb0269bb",
    createdAt: "2020-10-23T20:11:29.447469Z",
    id: "3eb44c46-e309-41bd-a87c-d190bb0269bb",
    portfolioId: "c22e75e8-8e14-4611-a7c9-9cd99f1f3725",
    quantity: 2037,
    updatedAt: "2020-10-23T20:11:29.447469Z",
    quantityToMarketValueFactor: 46.2802,
    marketValue: 94272.7674,
    weight: 26.186879833333325,
    asset: {
      id: "3eb44c46-e309-41bd-a87c-d190bb0269bb",
      createdAt: "2019-11-22T09:41:24.289448Z",
      updatedAt: "2020-10-23T04:31:56.884690Z",
      updatedBy: "bry",
      name: "Xtrackers High Beta High Yield Bond ETF",
      description:
        "The Fund seeks investment results that correspond generally to the performance of the Solactive USD High Yield Corporates Total Market High Beta Index. The Index is comprised of U.S. dollar-denominated high yield corporate bonds that potentially have higher beta to the overall high yield corporate bond market.",
      price: 46.2802,
      priceDate: "2020-10-22",
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
        netAssetsDate: "2020-09-30",
        netAssets: 6862992.37,
        tradeLotSize: 0,
        benchmark: "Lipper Global Bond USD High Yield",
        inceptionDate: "2018-01-11",
        classification: "High Yield",
        fundType: "Exchange Traded Funds",
        allocation: {
          asset: { cash: -1.1918, fixedIncome: 101.1918 },
          currency: { other: 1.9063, usd: 98.3276 },
          debtType: { notes: 95.7131 },
          fixedIncomeCountry: {
            other: 0.3365,
            lu: 2.6533,
            gb: 0.7529,
            bm: 0.781,
            ie: 1.1336,
            fr: 2.2698,
            ky: 0.4132,
            nl: 3.141,
            ca: 5.0737,
            us: 79.1581
          },
          fixedIncomeRegion: {
            europeExUnitedKingdom: 9.5341,
            northAmericaExUnitedStates: 6.2679,
            unitedKingdom: 0.7529,
            unitedStates: 79.1581
          },
          maturity: {
            oneToThreeYears: 9.532,
            threeToFiveYears: 25.357,
            fiveToTenYears: 60.0811,
            tenToTwentyYears: 0.7429
          },
          rating: {
            bbb: 0.1723,
            bb: 31.8346,
            b: 44.4497,
            ccc: 17.6915,
            cc: 0.7484,
            c: 0.3537,
            nr: 0.4628
          },
          region: {
            europeExUnitedKingdom: 9.5341,
            northAmericaExUnitedStates: 6.2679,
            unitedKingdom: 0.7529,
            unitedStates: 81.7727,
            other: 1.9063
          }
        },
        priceDate: "2020-10-22",
        midPrice: 46.2802,
        netAssetValuePerShare: 46.23,
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
          distributionYield: 6.4892927,
          lipperDistributionYield: 5.6571803,
          projectedYield: 6.2616432,
          secYield: 6.8,
          simpleYieldBegin: 6.2619264,
          simpleYieldEnd: 6.5531473,
          thirtyDayYield: 6.8,
          trailingTwelveMonthYield: 6.6930055
        },
        distributions: {
          income: {
            incomeDividend: {
              exDate: "2020-10-01",
              exValue: 0.25,
              reinvestmentDate: "2020-10-01",
              reinvestmentValue: 45.6,
              reinvestmentType: "Nav",
              paymentDate: "2020-10-08"
            }
          }
        }
      },
      analytics: {
        date: "2020-10-22",
        source: "Lipper",
        // @ts-expect-error
        yield: 6.8,
        distributionYield: 5.6571803,
        secYield: 6.8
      },
      scores: {
        attractiveness: 1,
        credit: 3,
        liquidity: 2,
        risk: 11.931345000190781
      },
      esgScores: {
        timestamp: "2020-10-10T00:49:00.894596Z",
        total: 56,
        environmental: 55,
        social: 50,
        governance: 63
      },
      allocation: {
        country: {
          other: 0.3365,
          lu: 2.6533,
          gb: 0.7529,
          bm: 0.781,
          ie: 1.1336,
          fr: 2.2698,
          ky: 0.4132,
          nl: 3.141,
          ca: 5.0737,
          us: 79.1581
        },
        currency: { other: 1.9063, usd: 98.3276 },
        maturity: {
          oneToThreeYears: 9.532,
          threeToFiveYears: 25.357,
          fiveToTenYears: 60.0811,
          tenToTwentyYears: 0.7429
        },
        rating: {
          bbb: 0.1723,
          bb: 31.8346,
          b: 44.4497,
          ccc: 17.6915,
          cc: 0.7484,
          c: 0.3537,
          nr: 0.4628
        },
        region: {
          europeExUnitedKingdom: 9.5341,
          northAmericaExUnitedStates: 6.2679,
          unitedKingdom: 0.7529,
          unitedStates: 81.7727,
          other: 1.9063
        }
      },
      universes: {
        timestamp: "2020-10-23T04:31:56.946410Z",
        general: true,
        search: true,
        liquid: true
      }
    },
    minimumDenomination: 1,
    denominationIncrement: 1
  },
  {
    assetId: "ff3cee29-0863-44c1-b71b-fd5fda1bea5f",
    createdAt: "2020-10-23T20:11:29.447469Z",
    id: "ff3cee29-0863-44c1-b71b-fd5fda1bea5f",
    portfolioId: "c22e75e8-8e14-4611-a7c9-9cd99f1f3725",
    quantity: 11009,
    updatedAt: "2020-10-23T20:11:29.447469Z",
    quantityToMarketValueFactor: 9.81,
    marketValue: 107998.29000000001,
    weight: 29.999525,
    asset: {
      id: "ff3cee29-0863-44c1-b71b-fd5fda1bea5f",
      createdAt: "2019-11-18T00:24:36.779923Z",
      updatedAt: "2020-10-23T04:27:54.712920Z",
      updatedBy: "bry",
      name: "Western Asset Global High Income Fund",
      description:
        "The Fund seeks total return and high current income by investing primarily in a portfolio of non-investment grade fixed income securities and emerging market debt securities.",
      price: 9.81,
      priceDate: "2020-10-22",
      ticker: "EHI",
      assetType: AssetAssetTypeEnum.Fund,
      assetSubtype: AssetAssetSubtypeEnum.ClosedEndFunds,
      currency: "USD",
      market: "USA",
      primaryExchange: "NYSE",
      identifiers: {
        cusip: "95766B109",
        isin: "US95766B1098",
        refinitivLipperId: "40088768",
        refinitivLipperParentId: "35564008",
        apex: "95766B109"
      },
      fund: {
        assetStatus: "Active",
        netAssetsDate: "2020-09-30",
        netAssets: 446485141,
        tradeLotSize: 0,
        benchmark: "US Treasury Bills 3 Months TR",
        inceptionDate: "2003-07-29",
        classification: "High Yield",
        fundType: "Closed End Funds",
        allocation: {
          asset: {
            cash: -39.4106,
            equity: 0.0459,
            fixedIncome: 139.4167,
            other: -0.0518
          },
          currency: {
            sgd: 0.0014,
            other: -5.4592,
            mxn: 0.0075,
            pln: 0.0235,
            eur: 0.7083,
            gbp: 0.7354,
            idr: 0.7653,
            cad: -32.2649,
            usd: 132.9214,
            try: 0.008,
            brl: 1.0449,
            rub: 1.5112
          },
          debtType: {
            bonds: 11.921100000000001,
            notes: 111.49860000000001,
            preferredStock: 0.069,
            mortgageBackedSecurities: 0.0249,
            municipalBonds: 2.0977,
            other: 13.3954
          },
          fixedIncomeCountry: {
            other: 14.276299999999999,
            ru: 2.897,
            lu: 1.8394,
            bm: 1.4635,
            ua: 1.1591,
            fr: 3.1702,
            br: 1.385,
            id: 4.8748,
            gb: 6.0927,
            ie: 1.6691,
            ca: 3.2435,
            us: 67.2395,
            eg: 0.598,
            ch: 1.3578,
            za: 0.704,
            it: 2.7457,
            mx: 2.8115,
            co: 1.4553,
            ky: 1.7754,
            ar: 4.0477,
            at: 0.8509,
            pe: 1.5473,
            ng: 0.488,
            pl: 0.3169,
            tr: 1.8814,
            nl: 9.3451
          },
          fixedIncomeRegion: {
            africaExNorthAfrica: 2.2041,
            emergingMarketsAsia: 6.4782,
            europeExUnitedKingdom: 21.7619,
            latinAmerica: 14.4389,
            middleEastNorthAfrica: 1.3621,
            northAmericaExUnitedStates: 6.7756,
            unitedKingdom: 6.0927,
            unitedStates: 67.2395,
            other: 12.8818
          },
          maturity: {
            lessThanOneYear: 6.9641,
            oneToThreeYears: 18.8929,
            threeToFiveYears: 34.3829,
            fiveToTenYears: 50.9419,
            tenToTwentyYears: 11.8335,
            twentyToThirtyYears: 9.1543,
            other: 6.908
          },
          rating: {
            aaa: 9.1193,
            a: 0.3169,
            bbb: 31.636,
            bb: 53.0386,
            b: 28.184,
            ccc: 4.3725,
            cc: 0.9683,
            d: 1.392,
            nr: 10.2073
          },
          region: {
            africaExNorthAfrica: 2.2041,
            asiaPacificExJapan: 0.0014,
            emergingMarketsAsia: 6.4824,
            europeExUnitedKingdom: 21.7619,
            latinAmerica: 14.5299,
            middleEastNorthAfrica: 1.3621,
            northAmericaExUnitedStates: 6.7797,
            unitedKingdom: 6.1063,
            unitedStates: 66.7127,
            other: -25.937900000000003
          }
        },
        priceDate: "2020-10-22",
        midPrice: 9.81,
        netAssetValuePerShare: 10.22,
        institutional: false,
        managementCompany: "Franklin Advisers Inc",
        focus: { assetClassFocus: "Bond", geoFocus: "Global" },
        fees: { fundExpenseRatio: 2.73 },
        scores: {
          totalReturn: {},
          consistentReturn: {},
          preservation: {},
          expense: {},
          taxEfficiency: {}
        },
        yields: {
          distributionYield: 0,
          lipperDistributionYield: 7.8978389,
          projectedYield: 7.2058133,
          secYield: 10.19,
          simpleYieldBegin: 6.8080149,
          simpleYieldEnd: 7.1477495,
          thirtyDayYield: 10.19,
          trailingTwelveMonthYield: 7.7996071
        },
        distributions: {
          capitalGain: {
            longTermCapitalGain: {
              exDate: "2006-12-20",
              exValue: 0.1165,
              reinvestmentDate: "2006-12-20",
              reinvestmentValue: 14.58,
              reinvestmentType: "Nav",
              paymentDate: "2006-12-29"
            },
            returnOfCapital: {
              exDate: "2017-04-19",
              exValue: 0.025503262,
              paymentDate: "2017-05-01"
            },
            shortTermCapitalGain: {
              exDate: "2006-10-18",
              exValue: 0.0559,
              reinvestmentDate: "2006-10-18",
              reinvestmentValue: 14.38,
              reinvestmentType: "Nav",
              paymentDate: "2006-10-27"
            }
          },
          income: {
            incomeDividend: {
              exDate: "2020-09-22",
              exValue: 0.067,
              reinvestmentDate: "2020-09-22",
              reinvestmentValue: 10.21,
              reinvestmentType: "Nav",
              paymentDate: "2020-10-01"
            },
            nonQualifiedIncomeDividend: {
              exDate: "2017-12-21",
              exValue: 0.062864496,
              reinvestmentDate: "2017-12-21",
              paymentDate: "2017-12-29"
            },
            qualifiedIncomeDividend: {
              exDate: "2017-12-21",
              exValue: 0.000635504,
              reinvestmentDate: "2017-12-21",
              paymentDate: "2017-12-29"
            }
          }
        }
      },
      analytics: {
        date: "2020-10-22",
        source: "Lipper",
        // @ts-expect-error
        yield: 10.19,
        distributionYield: 7.8978389,
        secYield: 10.19
      },
      scores: {
        attractiveness: 1,
        credit: 3,
        liquidity: 3,
        risk: 22.24897500327933
      },
      esgScores: {
        timestamp: "2020-10-10T00:48:43.016735Z",
        total: 58,
        environmental: 58,
        social: 55,
        governance: 61
      },
      allocation: {
        country: {
          other: 14.276299999999999,
          ru: 2.897,
          lu: 1.8394,
          bm: 1.4635,
          ua: 1.1591,
          fr: 3.1702,
          br: 1.385,
          id: 4.8748,
          gb: 6.0927,
          ie: 1.6691,
          ca: 3.2435,
          us: 67.2395,
          eg: 0.598,
          ch: 1.3578,
          za: 0.704,
          it: 2.7457,
          mx: 2.8115,
          co: 1.4553,
          ky: 1.7754,
          ar: 4.0477,
          at: 0.8509,
          pe: 1.5473,
          ng: 0.488,
          pl: 0.3169,
          tr: 1.8814,
          nl: 9.3451
        },
        currency: {
          sgd: 0.0014,
          other: -5.4592,
          mxn: 0.0075,
          pln: 0.0235,
          eur: 0.7083,
          gbp: 0.7354,
          idr: 0.7653,
          cad: -32.2649,
          usd: 132.9214,
          try: 0.008,
          brl: 1.0449,
          rub: 1.5112
        },
        maturity: {
          lessThanOneYear: 6.9641,
          oneToThreeYears: 18.8929,
          threeToFiveYears: 34.3829,
          fiveToTenYears: 50.9419,
          tenToTwentyYears: 11.8335,
          twentyToThirtyYears: 9.1543,
          other: 6.908
        },
        rating: {
          aaa: 9.1193,
          a: 0.3169,
          bbb: 31.636,
          bb: 53.0386,
          b: 28.184,
          ccc: 4.3725,
          cc: 0.9683,
          d: 1.392,
          nr: 10.2073
        },
        region: {
          africaExNorthAfrica: 2.2041,
          asiaPacificExJapan: 0.0014,
          emergingMarketsAsia: 6.4824,
          europeExUnitedKingdom: 21.7619,
          latinAmerica: 14.5299,
          middleEastNorthAfrica: 1.3621,
          northAmericaExUnitedStates: 6.7797,
          unitedKingdom: 6.1063,
          unitedStates: 66.7127,
          other: -25.937900000000003
        }
      },
      universes: {
        timestamp: "2020-10-23T04:27:56.213001Z",
        general: true,
        search: true,
        liquid: true
      }
    },
    minimumDenomination: 1,
    denominationIncrement: 1
  }
];
describe("generateSectorAllocation", () => {
  it("Should calculate correctly", () => {
    const mockAllocations = generateSectorAllocation(
      MOCK_YIELDX_INPAAS_POSITIONS,
      7201.302599999981,
      360000.00000000006
    );
    expect(mockAllocations).toStrictEqual({
      names: ["High Yield", "Core Bond", "Cash"],
      values: [68.00682149999999, 29.99281666666666, 2.000361833333328]
    });
  });
});
