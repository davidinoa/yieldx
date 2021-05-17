import React from "react";
import { OrderDirectionEnum } from "@bondhouse/income-portfolios";
import { Portfolio, PortfolioStatus } from "@bondhouse/position-management";
import {
  AssetAssetSubtypeEnum,
  AssetAssetTypeEnum
} from "@bondhouse/rover-universe";

import { createMemoryHistory } from "history";
import { RecoilRoot } from "recoil";
import { UserStatus, UserType } from "@bondhouse/iam";
import { render, screen, waitForElementToBeRemoved } from "test/utils";
import YieldXPortfolio from "models/YieldXPortfolio";
import { PROPOSAL_MOCK } from "__mocks__/@bondhouse/income-portfolios/__fixtures__";
import { Spinner } from "elements/Spinner/Spinner";
import { userState } from "services/userState";
import InpaasReview from "./InpaasReview";
import { liveInpaas } from "../../Portfolios/PortfolioDisplay/PortfolioTabs/PortfolioTabs.test";
import Goals from "../Goals/Goals";
import { mockSelectedInventories } from "../Goals/Goals.test";
import { selectedInventoriesAtom } from "../../UniverseManager/SetDefaultUniverses/useSetDefaultUniverses";

export const mockInpaasPortfolio = ({
  portfolio: {
    id: "68e6002f-03ea-4c7b-a758-5a8d919fa963",
    name: "Your new portfolio",
    currency: "USD",
    status: PortfolioStatus.READY,
    positions: [
      {
        assetId: "04b96c46-dac4-4efc-a145-97d0943e4cbf",
        createdAt: new Date().toISOString(),
        id: "_68e6002f._04b96c46.buy",
        portfolioId: "68e6002f-03ea-4c7b-a758-5a8d919fa963",
        quantity: 4,
        updatedAt: new Date().toISOString()
      },
      {
        assetId: "f5011ea3-efe9-40af-947c-8ac99c6574a5",
        createdAt: new Date().toISOString(),
        id: "_68e6002f.f5011ea3.buy",
        portfolioId: "68e6002f-03ea-4c7b-a758-5a8d919fa963",
        quantity: 5,
        updatedAt: new Date().toISOString()
      },
      {
        assetId: "a5dcf04f-f831-4fd5-a692-41c75f1bf62f",
        createdAt: new Date().toISOString(),
        id: "_68e6002f.a5dcf04f.buy",
        portfolioId: "68e6002f-03ea-4c7b-a758-5a8d919fa963",
        quantity: 2,
        updatedAt: new Date().toISOString()
      },
      {
        assetId: "d96cf090-a15d-40d0-82c0-03e6ccc0b154",
        createdAt: new Date().toISOString(),
        id: "_68e6002f.d96cf090.buy",
        portfolioId: "68e6002f-03ea-4c7b-a758-5a8d919fa963",
        quantity: 6,
        updatedAt: new Date().toISOString()
      },
      {
        assetId: "USD",
        createdAt: new Date().toISOString(),
        id: "USD",
        portfolioId: "68e6002f-03ea-4c7b-a758-5a8d919fa963",
        quantity: 171.75,
        updatedAt: new Date().toISOString()
      }
    ],
    createdAt: new Date().toISOString(),
    metadata: { app: "inpaas" },
    updatedAt: new Date().toISOString()
  },
  positionMap: {
    "_68e6002f._04b96c46.buy": {
      assetId: "04b96c46-dac4-4efc-a145-97d0943e4cbf",
      createdAt: new Date().toISOString(),
      id: "_68e6002f._04b96c46.buy",
      portfolioId: "68e6002f-03ea-4c7b-a758-5a8d919fa963",
      quantity: 4,
      updatedAt: new Date().toISOString(),
      quantityToMarketValueFactor: 50.52,
      marketValue: 202.08,
      weight: 20.208000000000002,
      asset: {
        id: "04b96c46-dac4-4efc-a145-97d0943e4cbf",
        createdAt: "2019-11-22T09:37:54.484259Z",
        updatedAt: "2020-07-03T03:32:15.667601Z",
        updatedBy: "bry",
        name: "iShares Ultra Short-Term Bond ETF",
        description:
          "The Fund seeks to provide current income consistent with preservation of capital. The Fund invests at least 80% of its net assets in a portfolio of U.S. dollar-denominated investment-grade fixed and floating-rate debt securities that are rated BBB- or higher by Standard & Poors Ratings Services and/or Fitch Ratings, Inc.",
        price: 50.52,
        priceDate: "2020-07-01",
        ticker: "ICSH",
        assetType: AssetAssetTypeEnum.Fund,
        assetSubtype: AssetAssetSubtypeEnum.ExchangeTradedFunds,
        currency: "USD",
        market: "USA",
        primaryExchange: "BATS ECN - RDFD",
        identifiers: {
          cusip: "46434V878",
          isin: "US46434V8789",
          refinitivLipperId: "40206723",
          refinitivLipperParentId: "36571370",
          apex: "46434V878"
        },
        fund: {
          assetStatus: "Active",
          netAssetsDate: "2020-06-30",
          netAssets: 3874321869.54,
          tradeLotSize: 0,
          benchmark: "Bloomberg Barclays Intermediate U.S. Credit TR",
          inceptionDate: "2013-12-11",
          classification: "Short Term",
          fundType: "Exchange Traded Funds",
          allocation: {
            asset: { cash: 5.5615, fixedIncome: 88.4944, other: 5.944 },
            currency: {
              aud: 0.2302,
              other: 11.6559,
              eur: 0.9228,
              cad: 1.0852,
              usd: 86.1059
            },
            debtType: {
              bonds: 18.813499999999998,
              notes: 38.8716,
              mortgageBackedSecurities: 0.0751,
              other: 29.4112
            },
            fixedIncomeCountry: {
              no: 0.5208,
              de: 1.4107,
              other: 0.7797000000000001,
              fi: 0.2669,
              jp: 0.8867,
              kr: 0.5319,
              lu: 1.0193,
              bm: 2.0843,
              fr: 4.9499,
              es: 0.1973,
              se: 1.7992,
              au: 4.042,
              sn: 0.3407,
              gb: 7.4793,
              nl: 1.7528,
              ca: 5.1179,
              us: 55.315
            },
            fixedIncomeRegion: {
              asiaPacificExJapan: 4.3827,
              emergingMarketsAsia: 0.5319,
              europeExUnitedKingdom: 11.9168,
              japan: 0.8867,
              northAmericaExUnitedStates: 7.4647,
              unitedKingdom: 7.4793,
              unitedStates: 55.315,
              other: 0.5172
            },
            maturity: {
              lessThanOneYear: 62.8405,
              oneToThreeYears: 25.0386,
              threeToFiveYears: 0.2207
            },
            rating: {
              aaa: 0.8753,
              aa: 6.9363,
              a: 24.0734,
              bbb: 8.4027,
              nr: 48.2067
            },
            region: {
              asiaPacificExJapan: 4.3827,
              emergingMarketsAsia: 0.5319,
              europeExUnitedKingdom: 11.9168,
              japan: 0.8867,
              northAmericaExUnitedStates: 7.4647,
              unitedKingdom: 7.4793,
              unitedStates: 55.1646,
              other: 12.1732
            }
          },
          priceDate: "2020-07-01",
          midPrice: 50.52,
          netAssetValuePerShare: 50.5,
          institutional: false,
          managementCompany: "BlackRock Fund Advisors",
          focus: {
            assetClassFocus: "Bond",
            geoFocus: "United States of America"
          },
          fees: { managementFee: 0.08, fundExpenseRatio: 0.08 },
          scores: {
            totalReturn: { threeYear: 5, fiveYear: 5, overall: 5 },
            consistentReturn: { threeYear: 5, fiveYear: 5, overall: 5 },
            preservation: { threeYear: 5, fiveYear: 5, overall: 5 },
            expense: { threeYear: 5, fiveYear: 5, overall: 5 },
            taxEfficiency: { threeYear: 2, fiveYear: 3, overall: 3 }
          },
          yields: {
            distributionYield: 1.140903,
            lipperDistributionYield: 1.4363442,
            projectedYield: 2.1547965,
            secYield: 1.07,
            dailySecYield: 0.77,
            dailySecYieldDate: "2020-07-03",
            simpleYieldBegin: 2.0814959,
            simpleYieldEnd: 2.0720158,
            thirtyDayYield: 1.07,
            trailingTwelveMonthYield: 2.2030049
          }
        },
        analytics: {
          date: "2020-07-02",
          source: "Lipper",
          _yield: 0.77,
          distributionYield: 1.4363442,
          secYield: 1.07
        },
        scores: {
          timestamp: "2020-07-03T09:51:47.373411Z",
          attractiveness: 1.0976719875826983,
          credit: 3,
          efficiency: 4.2,
          liquidity: 3,
          risk: 0.7014846044269563
        },
        allocation: {
          country: {
            no: 0.5208,
            de: 1.4107,
            other: 0.7797000000000001,
            fi: 0.2669,
            jp: 0.8867,
            kr: 0.5319,
            lu: 1.0193,
            bm: 2.0843,
            fr: 4.9499,
            es: 0.1973,
            se: 1.7992,
            au: 4.042,
            sn: 0.3407,
            gb: 7.4793,
            nl: 1.7528,
            ca: 5.1179,
            us: 55.315
          },
          currency: {
            aud: 0.2302,
            other: 11.6559,
            eur: 0.9228,
            cad: 1.0852,
            usd: 86.1059
          },
          maturity: {
            lessThanOneYear: 62.8405,
            oneToThreeYears: 25.0386,
            threeToFiveYears: 0.2207
          },
          rating: {
            aaa: 0.8753,
            aa: 6.9363,
            a: 24.0734,
            bbb: 8.4027,
            nr: 48.2067
          },
          region: {
            asiaPacificExJapan: 4.3827,
            emergingMarketsAsia: 0.5319,
            europeExUnitedKingdom: 11.9168,
            japan: 0.8867,
            northAmericaExUnitedStates: 7.4647,
            unitedKingdom: 7.4793,
            unitedStates: 55.1646,
            other: 12.1732
          }
        }
      },
      minimumDenomination: 1,
      denominationIncrement: 1
    },
    "_68e6002f.f5011ea3.buy": {
      assetId: "f5011ea3-efe9-40af-947c-8ac99c6574a5",
      createdAt: new Date().toISOString(),
      id: "_68e6002f.f5011ea3.buy",
      portfolioId: "68e6002f-03ea-4c7b-a758-5a8d919fa963",
      quantity: 5,
      updatedAt: new Date().toISOString(),
      quantityToMarketValueFactor: 21.29,
      marketValue: 106.44999999999999,
      weight: 10.645,
      asset: {
        id: "f5011ea3-efe9-40af-947c-8ac99c6574a5",
        createdAt: "2019-11-18T00:30:55.204726Z",
        updatedAt: "2020-07-03T03:30:51.935397Z",
        updatedBy: "bry",
        name: "Invesco BulletShares 2020 Corporate Bond ETF",
        description:
          "The Fund seeks investment results that correspond generally to the performance of the BulletShares USD Corporate Bond 2020 Index. The 2020 Index is a rules-based index comprised of, as of the date of this prospectus, approximately 157 investment grade corporate bonds with effective maturities in the year 2020.",
        price: 21.29,
        priceDate: "2020-07-02",
        ticker: "BSCK",
        assetType: AssetAssetTypeEnum.Fund,
        assetSubtype: AssetAssetSubtypeEnum.ExchangeTradedFunds,
        currency: "USD",
        market: "USA",
        primaryExchange: "NASDAQ",
        identifiers: {
          cusip: "46138J502",
          isin: "US46138J5020",
          refinitivLipperId: "40197635",
          refinitivLipperParentId: "36406305",
          apex: "46138J502"
        },
        fund: {
          assetStatus: "Active",
          netAssetsDate: "2020-06-30",
          netAssets: 1549707165.549,
          tradeLotSize: 0,
          benchmark: "Bloomberg Barclays Intermediate U.S. Credit TR",
          inceptionDate: "2012-03-28",
          classification: "Short Term",
          fundType: "Exchange Traded Funds",
          allocation: {
            asset: { cash: 6.97, fixedIncome: 92.4591, other: 0.5709 },
            currency: { other: 8.0746, usd: 91.9291 },
            debtType: {
              notes: 73.8549,
              mortgageBackedSecurities: 0.4334,
              other: 1.1042
            },
            fixedIncomeCountry: {
              se: 1.0393,
              jp: 0.4545,
              gb: 2.8681,
              ie: 0.5541,
              es: 0.4258,
              nl: 0.5721,
              ca: 6.3441,
              us: 63.1344
            },
            fixedIncomeRegion: {
              europeExUnitedKingdom: 2.5913,
              japan: 0.4545,
              northAmericaExUnitedStates: 6.3441,
              unitedKingdom: 2.8681,
              unitedStates: 63.1344
            },
            maturity: {
              lessThanOneYear: 74.0851,
              oneToThreeYears: 0.6121,
              threeToFiveYears: 0.6953
            },
            rating: {
              aaa: 1.8065,
              aa: 11.1726,
              a: 36.0571,
              bbb: 24.7193,
              bb: 1.4353,
              nr: 0.2017
            },
            region: {
              europeExUnitedKingdom: 2.5913,
              japan: 0.4545,
              northAmericaExUnitedStates: 6.3441,
              unitedKingdom: 2.8681,
              unitedStates: 78.9264,
              other: 8.8193
            }
          },
          priceDate: "2020-07-02",
          midPrice: 21.29,
          netAssetValuePerShare: 21.26,
          replicationStrategy: "Optimized",
          institutional: false,
          managementCompany: "Invesco Capital Management LLC",
          focus: {
            assetClassFocus: "Bond",
            geoFocus: "United States of America"
          },
          fees: { managementFee: 0.1, fundExpenseRatio: 0.1 },
          scores: {
            totalReturn: { threeYear: 2, fiveYear: 5, overall: 3 },
            consistentReturn: { threeYear: 3, fiveYear: 4, overall: 3 },
            preservation: { threeYear: 5, fiveYear: 5, overall: 5 },
            expense: { threeYear: 5, fiveYear: 5, overall: 5 },
            taxEfficiency: { threeYear: 2, fiveYear: 2, overall: 2 }
          },
          yields: {
            distributionYield: 1.6989652,
            lipperDistributionYield: 1.6991262,
            projectedYield: 2.3000354,
            secYield: 1.23,
            dailySecYield: 0.77,
            dailySecYieldDate: "2020-07-03",
            simpleYieldBegin: 2.3545913,
            simpleYieldEnd: 2.3546566,
            thirtyDayYield: 1.23,
            trailingTwelveMonthYield: 2.3548797
          }
        },
        analytics: {
          date: "2020-07-02",
          source: "Lipper",
          _yield: 0.77,
          distributionYield: 1.6991262,
          secYield: 1.23
        },
        scores: {
          timestamp: "2020-07-03T09:56:38.267869Z",
          attractiveness: 1,
          credit: 3,
          efficiency: 3.8,
          liquidity: 3,
          risk: 0.8752741776335007
        },
        allocation: {
          country: {
            se: 1.0393,
            jp: 0.4545,
            gb: 2.8681,
            ie: 0.5541,
            es: 0.4258,
            nl: 0.5721,
            ca: 6.3441,
            us: 63.1344
          },
          currency: { other: 8.0746, usd: 91.9291 },
          maturity: {
            lessThanOneYear: 74.0851,
            oneToThreeYears: 0.6121,
            threeToFiveYears: 0.6953
          },
          rating: {
            aaa: 1.8065,
            aa: 11.1726,
            a: 36.0571,
            bbb: 24.7193,
            bb: 1.4353,
            nr: 0.2017
          },
          region: {
            europeExUnitedKingdom: 2.5913,
            japan: 0.4545,
            northAmericaExUnitedStates: 6.3441,
            unitedKingdom: 2.8681,
            unitedStates: 78.9264,
            other: 8.8193
          }
        }
      },
      minimumDenomination: 1,
      denominationIncrement: 1
    },
    "_68e6002f.a5dcf04f.buy": {
      assetId: "a5dcf04f-f831-4fd5-a692-41c75f1bf62f",
      createdAt: new Date().toISOString(),
      id: "_68e6002f.a5dcf04f.buy",
      portfolioId: "68e6002f-03ea-4c7b-a758-5a8d919fa963",
      quantity: 2,
      updatedAt: new Date().toISOString(),
      quantityToMarketValueFactor: 110.55,
      marketValue: 221.1,
      weight: 22.11,
      asset: {
        id: "a5dcf04f-f831-4fd5-a692-41c75f1bf62f",
        createdAt: "2019-11-17T23:31:47.294322Z",
        updatedAt: "2020-07-03T03:26:00.048964Z",
        updatedBy: "bry",
        name: "iShares MBS ETF",
        description:
          "The Fund seeks investment results that correspond to the investment grade agency mortgage-backed securities sector of the U.S. as defined by the Barclays Capital U.S. MBS Fixed-Rate Index The Index includes securities issued by GNMA, FHLMC, and FNMA that have 30-, 20-, 15-year and balloon securities.",
        price: 110.55,
        priceDate: "2020-07-01",
        ticker: "MBB",
        assetType: AssetAssetTypeEnum.Fund,
        assetSubtype: AssetAssetSubtypeEnum.ExchangeTradedFunds,
        currency: "USD",
        market: "USA",
        primaryExchange: "NASDAQ",
        identifiers: {
          cusip: "464288588",
          isin: "US4642885887",
          sedol: "B1VKHR1",
          refinitivLipperId: "40111259",
          refinitivLipperParentId: "30091864",
          apex: "464288588"
        },
        fund: {
          assetStatus: "Active",
          netAssetsDate: "2020-06-30",
          netAssets: 21430665139.4,
          tradeLotSize: 0,
          benchmark: "Bloomberg Barclays U.S. Aggregate Bond TR",
          inceptionDate: "2007-03-13",
          classification: "Mortgages",
          fundType: "Exchange Traded Funds",
          allocation: {
            asset: { cash: -14.8258, fixedIncome: 99.6283, other: 15.1975 },
            currency: { other: 15.1975, usd: 84.8025 },
            debtType: { mortgageBackedSecurities: 99.6245, other: 0.0038 },
            fixedIncomeCountry: { other: 0.0038, us: 99.6245 },
            fixedIncomeRegion: { unitedStates: 99.6245, other: 0.0038 },
            maturity: {
              lessThanOneYear: 0.0014,
              oneToThreeYears: 0.0081,
              threeToFiveYears: 0.0514,
              fiveToTenYears: 2.475,
              tenToTwentyYears: 10.0099,
              twentyToThirtyYears: 72.1162,
              greaterThanThirtyYears: 0.1539,
              other: 14.8124
            },
            rating: { aa: 99.6245, nr: 0.0038 },
            region: { unitedStates: 84.7987, other: 15.2013 }
          },
          priceDate: "2020-07-01",
          midPrice: 110.55,
          netAssetValuePerShare: 110.57,
          replicationStrategy: "Optimized",
          institutional: false,
          managementCompany: "BlackRock Fund Advisors",
          focus: {
            assetClassFocus: "Bond",
            geoFocus: "United States of America"
          },
          fees: { managementFee: 0.06, fundExpenseRatio: 0.06 },
          scores: {
            totalReturn: {
              threeYear: 5,
              fiveYear: 4,
              tenYear: 3,
              overall: 4
            },
            consistentReturn: {
              threeYear: 5,
              fiveYear: 4,
              tenYear: 3,
              overall: 4
            },
            preservation: {
              threeYear: 5,
              fiveYear: 5,
              tenYear: 5,
              overall: 5
            },
            expense: { threeYear: 5, fiveYear: 5, tenYear: 5, overall: 5 },
            taxEfficiency: {
              threeYear: 4,
              fiveYear: 4,
              tenYear: 4,
              overall: 4
            }
          },
          yields: {
            distributionYield: 2.1604124,
            lipperDistributionYield: 2.1742266,
            projectedYield: 2.4304729,
            secYield: 2.01,
            dailySecYield: 1.92,
            dailySecYieldDate: "2020-07-03",
            simpleYieldBegin: 2.5090944,
            simpleYieldEnd: 2.4380673,
            thirtyDayYield: 2.01,
            trailingTwelveMonthYield: 2.4928912
          }
        },
        analytics: {
          date: "2020-07-02",
          source: "Lipper",
          _yield: 1.92,
          distributionYield: 2.1742266,
          secYield: 2.01
        },
        scores: {
          timestamp: "2020-07-03T10:02:55.332493Z",
          attractiveness: 1,
          credit: 3,
          efficiency: 4.6,
          liquidity: 3,
          risk: 2.815855791267612
        },
        allocation: {
          country: { other: 0.0038, us: 99.6245 },
          currency: { other: 15.1975, usd: 84.8025 },
          maturity: {
            lessThanOneYear: 0.0014,
            oneToThreeYears: 0.0081,
            threeToFiveYears: 0.0514,
            fiveToTenYears: 2.475,
            tenToTwentyYears: 10.0099,
            twentyToThirtyYears: 72.1162,
            greaterThanThirtyYears: 0.1539,
            other: 14.8124
          },
          rating: { aa: 99.6245, nr: 0.0038 },
          region: { unitedStates: 84.7987, other: 15.2013 }
        }
      },
      minimumDenomination: 1,
      denominationIncrement: 1
    },
    "_68e6002f.d96cf090.buy": {
      assetId: "d96cf090-a15d-40d0-82c0-03e6ccc0b154",
      createdAt: new Date().toISOString(),
      id: "_68e6002f.d96cf090.buy",
      portfolioId: "68e6002f-03ea-4c7b-a758-5a8d919fa963",
      quantity: 6,
      updatedAt: new Date().toISOString(),
      quantityToMarketValueFactor: 49.77,
      marketValue: 298.62,
      weight: 29.862,
      asset: {
        id: "d96cf090-a15d-40d0-82c0-03e6ccc0b154",
        createdAt: "2019-11-22T09:54:38.244143Z",
        updatedAt: "2020-07-03T03:33:59.284300Z",
        updatedBy: "bry",
        name: "PGIM Ultra Short Bond ETF",
        description:
          "The Fund seeks total return through a combination of current income and capital appreciation. The Fund invests primarily in a portfolio of investment grade debt instruments which normally maintain a weighted average portfolio duration of one year or less and a weighted average maturity of three years or less.",
        price: 49.77,
        priceDate: "2020-07-02",
        ticker: "PULS",
        assetType: AssetAssetTypeEnum.Fund,
        assetSubtype: AssetAssetSubtypeEnum.ExchangeTradedFunds,
        currency: "USD",
        market: "USA",
        primaryExchange: "Arca",
        identifiers: {
          cusip: "69344A107",
          isin: "US69344A1079",
          refinitivLipperId: "40223647",
          refinitivLipperParentId: "36847334"
        },
        fund: {
          assetStatus: "Active",
          netAssetsDate: "2020-06-30",
          netAssets: 947378741.32,
          tradeLotSize: 0,
          benchmark: "Bloomberg Barclays U.S. Aggregate Bond TR",
          inceptionDate: "2018-04-05",
          classification: "Short Term",
          fundType: "Exchange Traded Funds",
          allocation: {
            asset: { cash: 2.1327, fixedIncome: 93.9902, other: 3.8771 },
            currency: { other: 3.6596, usd: 96.3404 },
            debtType: {
              bonds: 3.3501000000000003,
              notes: 55.4558,
              mortgageBackedSecurities: 8.7108,
              other: 23.6586
            },
            fixedIncomeCountry: {
              other: 2.0247,
              hk: 0.5607,
              ae: 0.5087,
              ch: 0.2194,
              jp: 0.1121,
              kr: 0.6848,
              lu: 0.1197,
              cl: 0.698,
              cn: 0.0273,
              it: 0.892,
              my: 0.1432,
              fr: 0.4861,
              sa: 0.2202,
              ky: 0.9173,
              qa: 0.275,
              au: 0.5942,
              id: 0.1963,
              sn: 0.5452,
              gb: 2.6773,
              nl: 0.4356,
              ca: 4.0824,
              us: 77.5701
            },
            fixedIncomeRegion: {
              asiaPacificExJapan: 1.7001,
              emergingMarketsAsia: 1.0516,
              europeExUnitedKingdom: 2.1528,
              japan: 0.1121,
              latinAmerica: 0.698,
              middleEastNorthAfrica: 1.0039,
              northAmericaExUnitedStates: 5.8969,
              unitedKingdom: 2.6773,
              unitedStates: 77.5701,
              other: 1.1275
            },
            maturity: {
              lessThanOneYear: 28.4581,
              oneToThreeYears: 39.5838,
              threeToFiveYears: 1.1658,
              fiveToTenYears: 14.7085,
              tenToTwentyYears: 0.5062,
              twentyToThirtyYears: 5.0319,
              greaterThanThirtyYears: 3.2023,
              other: 1.3337
            },
            rating: {
              aaa: 22.3335,
              aa: 6.2138,
              a: 29.0018,
              bbb: 26.2565,
              bb: 0.028,
              nr: 10.1566
            },
            region: {
              asiaPacificExJapan: 1.7001,
              emergingMarketsAsia: 1.0516,
              europeExUnitedKingdom: 2.1528,
              japan: 0.1121,
              latinAmerica: 0.698,
              middleEastNorthAfrica: 1.0039,
              northAmericaExUnitedStates: 5.8969,
              unitedKingdom: 2.6773,
              unitedStates: 79.9208,
              other: 4.7866
            }
          },
          priceDate: "2020-07-02",
          midPrice: 49.77,
          netAssetValuePerShare: 49.76,
          institutional: false,
          managementCompany: "PGIM Investments LLC",
          focus: {
            assetClassFocus: "Bond",
            geoFocus: "United States of America"
          },
          fees: { managementFee: 0.15, fundExpenseRatio: 0.15 },
          scores: {
            totalReturn: {},
            consistentReturn: {},
            preservation: {},
            expense: {},
            taxEfficiency: {}
          },
          yields: {
            distributionYield: 1.5407556,
            lipperDistributionYield: 1.8049461,
            projectedYield: 2.5883868,
            secYield: 2.15,
            dailySecYield: 1.81,
            dailySecYieldDate: "2020-07-03",
            simpleYieldBegin: 2.5383749,
            simpleYieldEnd: 2.5536174,
            thirtyDayYield: 2.15,
            trailingTwelveMonthYield: 2.6579579
          }
        },
        analytics: {
          date: "2020-07-02",
          source: "Lipper",
          _yield: 1.81,
          distributionYield: 1.8049461,
          secYield: 2.15
        },
        scores: {
          timestamp: "2020-07-03T09:59:41.529506Z",
          attractiveness: 1.2358615857292259,
          credit: 3,
          liquidity: 3,
          risk: 1.4645653048047456
        },
        allocation: {
          country: {
            other: 2.0247,
            hk: 0.5607,
            ae: 0.5087,
            ch: 0.2194,
            jp: 0.1121,
            kr: 0.6848,
            lu: 0.1197,
            cl: 0.698,
            cn: 0.0273,
            it: 0.892,
            my: 0.1432,
            fr: 0.4861,
            sa: 0.2202,
            ky: 0.9173,
            qa: 0.275,
            au: 0.5942,
            id: 0.1963,
            sn: 0.5452,
            gb: 2.6773,
            nl: 0.4356,
            ca: 4.0824,
            us: 77.5701
          },
          currency: { other: 3.6596, usd: 96.3404 },
          maturity: {
            lessThanOneYear: 28.4581,
            oneToThreeYears: 39.5838,
            threeToFiveYears: 1.1658,
            fiveToTenYears: 14.7085,
            tenToTwentyYears: 0.5062,
            twentyToThirtyYears: 5.0319,
            greaterThanThirtyYears: 3.2023,
            other: 1.3337
          },
          rating: {
            aaa: 22.3335,
            aa: 6.2138,
            a: 29.0018,
            bbb: 26.2565,
            bb: 0.028,
            nr: 10.1566
          },
          region: {
            asiaPacificExJapan: 1.7001,
            emergingMarketsAsia: 1.0516,
            europeExUnitedKingdom: 2.1528,
            japan: 0.1121,
            latinAmerica: 0.698,
            middleEastNorthAfrica: 1.0039,
            northAmericaExUnitedStates: 5.8969,
            unitedKingdom: 2.6773,
            unitedStates: 79.9208,
            other: 4.7866
          }
        }
      },
      minimumDenomination: 1,
      denominationIncrement: 1
    }
  },
  assetMap: {
    USD: {
      id: "USD",
      createdAt: "2019-11-21T21:10:56.289624Z",
      updatedAt: "2020-01-12T01:14:31.270150Z",
      updatedBy: "blm",
      name: "Cash",
      price: 1,
      assetSubtype: AssetAssetSubtypeEnum.Cash
    }
  },
  positions: [],
  cashMarketValue: 171.75,
  totalMarketValue: 1000,
  inpaasData: {
    proposal: {
      proposalId: "164c3754-a456-4599-930f-17edfb00a769",
      institution: "adbedc86-e795-4334-b1bd-7cbdf1fbe3bf",
      updatedAt: new Date(),
      commentary: [
        {
          topic: "Income",
          content:
            "The expected monthly income is $1 for an annualized yield of 1.20%."
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
        id: "68e6002f-03ea-4c7b-a758-5a8d919fa963",
        currency: "USD",
        name: "Your new portfolio",
        positions: [
          {
            _yield: 0.77,
            id: "_68e6002f._04b96c46.buy",
            assetId: "04b96c46-dac4-4efc-a145-97d0943e4cbf",
            publicIdentifiers: {
              cusip: "46434V878",
              isin: "US46434V8789",
              ticker: "ICSH"
            },
            quantity: 4,
            marketValue: 202.08,
            weight: 20.208000000000002,
            price: 50.52,
            name: "iShares Ultra Short-Term Bond ETF"
          },
          {
            _yield: 0.77,
            id: "_68e6002f.f5011ea3.buy",
            assetId: "f5011ea3-efe9-40af-947c-8ac99c6574a5",
            publicIdentifiers: {
              cusip: "46138J502",
              isin: "US46138J5020",
              ticker: "BSCK"
            },
            quantity: 5,
            marketValue: 106.44999999999999,
            weight: 10.645,
            price: 21.29,
            name: "Invesco BulletShares 2020 Corporate Bond ETF"
          },
          {
            _yield: 1.92,
            id: "_68e6002f.a5dcf04f.buy",
            assetId: "a5dcf04f-f831-4fd5-a692-41c75f1bf62f",
            publicIdentifiers: {
              cusip: "464288588",
              isin: "US4642885887",
              sedol: "B1VKHR1",
              ticker: "MBB"
            },
            quantity: 2,
            marketValue: 221.1,
            weight: 22.11,
            price: 110.55,
            name: "iShares MBS ETF"
          },
          {
            _yield: 1.81,
            id: "_68e6002f.d96cf090.buy",
            assetId: "d96cf090-a15d-40d0-82c0-03e6ccc0b154",
            publicIdentifiers: {
              cusip: "69344A107",
              isin: "US69344A1079",
              ticker: "PULS"
            },
            quantity: 6,
            marketValue: 298.62,
            weight: 29.862,
            price: 49.77,
            name: "PGIM Ultra Short Bond ETF"
          },
          {
            _yield: 0,
            id: "USD",
            assetId: "USD",
            publicIdentifiers: {},
            quantity: 171.75,
            marketValue: 171.75,
            weight: 17.175,
            price: 1,
            name: "Cash"
          }
        ],
        createdAt: new Date(),
        updatedAt: new Date()
      },
      incomePortfoliosAnalysis: {
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
        ],
        income: 1.0021519166666666,
        risk: 0.8921857018403183,
        expenseRatio: 0.0848704,
        _yield: 1.2025823,
        afterTaxYield: 0.7215493799999999,
        maxDrawdown: -1.6563515759544845
      },
      proposalRequest: {
        goal: { income: 1 },
        investmentAmount: 1000,
        constraints: { minimumWeight: 0.1, maximumWeight: 0.3 }
      },
      orders: [
        {
          assetId: "04b96c46-dac4-4efc-a145-97d0943e4cbf",
          direction: OrderDirectionEnum.BUY,
          quantity: 4
        },
        {
          assetId: "f5011ea3-efe9-40af-947c-8ac99c6574a5",
          direction: OrderDirectionEnum.BUY,
          quantity: 5
        },
        {
          assetId: "a5dcf04f-f831-4fd5-a692-41c75f1bf62f",
          direction: OrderDirectionEnum.BUY,
          quantity: 2
        },
        {
          assetId: "d96cf090-a15d-40d0-82c0-03e6ccc0b154",
          direction: OrderDirectionEnum.BUY,
          quantity: 6
        },
        {
          assetId: "USD",
          direction: OrderDirectionEnum.SELL,
          quantity: -828.2499999999999
        }
      ]
    }
  },
  subscribers: {}
} as unknown) as YieldXPortfolio;

describe("InpaasReview", () => {
  test("view for an empty portfolio", async () => {
    const emptyPortfolio: Portfolio = {
      id: "mockPortfolioId",
      currency: "USD",
      createdAt: new Date().toISOString(),
      status: PortfolioStatus.READY,
      name: "Empty PMS Portfolio",
      positions: []
    };
    const emptyWithProposal = YieldXPortfolio.fromInpaasProposal(
      {
        ...PROPOSAL_MOCK,
        portfolio: emptyPortfolio
      },
      []
    );
    render(<InpaasReview portfolio={emptyWithProposal} />);
    await waitForElementToBeRemoved(() => screen.getByTestId("spinner"));
  });
  test("inpaas container", async () => {
    const history = createMemoryHistory();
    history.location.state = {
      portfolio: liveInpaas
    };
    render(
      <RecoilRoot
        initializeState={snap => {
          snap.set(userState, {
            id: "auth0|5ec6119474dfa00cbf1d53cb",
            first: "Institution",
            last: "New User",
            userType: UserType.ADMIN,
            email: "test4@bondhouse.com",
            terms: true,
            institutionId: "bf8a5597-9569-4510-babd-a6d9655e9f0d",
            createdAt: "2020-05-21T05:28:52.982380Z",
            updatedAt: "2020-05-21T05:28:52.982380Z",
            status: UserStatus.ACTIVE,
            policies: []
          });
          snap.set(selectedInventoriesAtom, mockSelectedInventories);
        }}
      >
        <React.Suspense fallback={<Spinner />}>
          <Goals />
        </React.Suspense>
      </RecoilRoot>,
      {
        history,
        route: "/inpaas/goals"
      }
    );
    await waitForElementToBeRemoved(() => screen.getByTestId("spinner"));
    await screen.findByRole("button", { name: "Continue" });
    expect(screen.getByRole("button", { name: "Continue" })).toBeDisabled();
  });

  test("version", async () => {
    const renderOptions = { route: "/inpaas/portfolio-review" };
    // edit comparison
    const component = render(
      <InpaasReview portfolio={liveInpaas} version="CURRENT" />,
      renderOptions
    );

    await waitForElementToBeRemoved(() => screen.getByTestId("spinner"));
    expect(screen.getByText("CURRENT")).toBeInTheDocument();

    // edit comparison
    component.rerender(
      <InpaasReview portfolio={liveInpaas} version="ORIGINAL" />
    );
    expect(screen.getByText("ORIGINAL")).toBeInTheDocument();

    // review
    component.rerender(
      <InpaasReview portfolio={liveInpaas} version={undefined} />
    );
  });

  it("Should match snapshot", async () => {
    const { asFragment } = render(<InpaasReview portfolio={liveInpaas} />);
    expect(asFragment()).toMatchSnapshot();
  });
});
