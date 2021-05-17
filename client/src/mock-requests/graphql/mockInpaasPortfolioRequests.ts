import createMockHandler from "mock-requests/graphql/createMockHandler";
import {
  App,
  AppType2,
  AssetSubtype,
  AssetType,
  Direction,
  PortfolioType as PortfolioTypeGQL,
  Status
} from "providers/graphql/hooks";
import mockUser from "test/mock-data/mockUser";
import mockPortfolio from "test/mock-data/mockPortfolio";

export default createMockHandler({
  incomePortfoliosGetComparisons: {
    comparisons: [
      {
        average: 33.07,
        comparisonType: "Risk",
        difference: 17.7984909670246,
        inpaas: 15.2715090329754,
        percentageDifference: 53.820656084138484,
        __typename: "Comparison"
      },
      {
        average: 2.99,
        comparisonType: "Expense Ratio",
        difference: 1.337523076337073,
        inpaas: 1.6524769236629273,
        percentageDifference: 44.733213255420495,
        __typename: "Comparison"
      },
      {
        average: -32,
        comparisonType: "Max Drawdown",
        difference: 10.287464301592225,
        inpaas: -21.712535698407777,
        percentageDifference: 32.1483259424757,
        __typename: "Comparison"
      }
    ],
    __typename: "GetComparisonsResponse"
  },
  roverPortfolioAnalyzerCalculateIntradayReturn: {
    marketValueReturn: 2.5,
    totalReturn: 2.5,
    percentReturn: 1,
    __typename: "CalculateIntradayReturnResponse"
  },
  incomePortfoliosGetProposal: {
    proposal: {
      commentary: [
        {
          content:
            "The expected monthly income is $3241 for an annualized yield of 5.00%.",
          topic: "Income",
          __typename: "CommentaryItem"
        },
        {
          content:
            "The portfolio's largest drop in account value was 17.2% in the last five years. This is 629 basis points less risk than similar securities yielding 5-6%.",
          topic: "Risk",
          __typename: "CommentaryItem"
        },
        {
          content:
            "The weighted expense ratio is 0.46% per year. This is 58 basis points less than similar funds with this yield.",
          topic: "Expenses",
          __typename: "CommentaryItem"
        }
      ],
      incomePortfoliosAnalysis: {
        afterTaxYield: 3.000006955646301,
        commentary: null,
        comparisons: [
          {
            average: 12.9,
            comparisonType: "Risk",
            difference: 6.290714043374081,
            inpaas: 6.60928595662592,
            percentageDifference: 48.76522514243473,
            __typename: "Comparison"
          },
          {
            average: 1.04,
            comparisonType: "Expense Ratio",
            difference: 0.5847505003903621,
            inpaas: 0.45524949960963784,
            percentageDifference: 56.22600965291944,
            __typename: "Comparison"
          },
          {
            average: -25,
            comparisonType: "Max Drawdown",
            difference: 7.80385463987967,
            inpaas: -17.19614536012033,
            percentageDifference: 31.21541855951868,
            __typename: "Comparison"
          }
        ],
        expenseRatio: 0.45524949960963784,
        income: 3240.7482221487066,
        maxDrawdown: -17.19614536012033,
        risk: 6.60928595662592,
        yield: 5.000011592743834,
        __typename: "IncomePortfoliosAnalysis"
      },
      orders: [
        {
          assetId: "a5dcf04f-f831-4fd5-a692-41c75f1bf62f",
          direction: Direction.Buy,
          marketValue: null,
          quantity: 737,
          __typename: "Order"
        },
        {
          assetId: "4eacb809-f4eb-41c6-9716-44f3a3ea3926",
          direction: Direction.Buy,
          marketValue: null,
          quantity: 3965,
          __typename: "Order"
        },
        {
          assetId: "c7283330-e6e8-43ca-9457-d7ec6ce2656e",
          direction: Direction.Buy,
          marketValue: null,
          quantity: 8966,
          __typename: "Order"
        },
        {
          assetId: "621e7f48-e332-4e92-a875-260ed4ec9569",
          direction: Direction.Buy,
          marketValue: null,
          quantity: 10233,
          __typename: "Order"
        },
        {
          assetId: "a4cd0ac9-a72a-475d-8d10-f69223571c5d",
          direction: Direction.Buy,
          marketValue: null,
          quantity: 9533,
          __typename: "Order"
        },
        {
          assetId: "USD",
          direction: Direction.Sell,
          marketValue: null,
          quantity: -762208.89,
          __typename: "Order"
        }
      ],
      originalIncomePortfoliosAnalysis: null,
      portfolio: {
        app: App.Inpaas,
        createdAt: "2020-11-05T15:35:19.913754Z",
        currency: "USD",
        description: null,
        id: "8cfa4e0b-b01b-47bd-92f7-a5cca6ef18d6",
        metadata: { app: "inpaas" },
        name: "Your new portfolio",
        positions: [
          {
            assetId: "a5dcf04f-f831-4fd5-a692-41c75f1bf62f",
            costBasis: null,
            createdAt: "2020-11-05T15:35:22.061865Z",
            id: "_8cfa4e0b.a5dcf04f.buy",
            metadata: null,
            portfolioId: "8cfa4e0b-b01b-47bd-92f7-a5cca6ef18d6",
            quantity: 737,
            settled: null,
            tradeDate: null,
            unsettled: null,
            updatedAt: "2020-11-05T15:35:22.061865Z",
            __typename: "PositionsListItem"
          },
          {
            assetId: "4eacb809-f4eb-41c6-9716-44f3a3ea3926",
            costBasis: null,
            createdAt: "2020-11-05T15:35:22.061865Z",
            id: "_8cfa4e0b._4eacb809.buy",
            metadata: null,
            portfolioId: "8cfa4e0b-b01b-47bd-92f7-a5cca6ef18d6",
            quantity: 3965,
            settled: null,
            tradeDate: null,
            unsettled: null,
            updatedAt: "2020-11-05T15:35:22.061865Z",
            __typename: "PositionsListItem"
          },
          {
            assetId: "c7283330-e6e8-43ca-9457-d7ec6ce2656e",
            costBasis: null,
            createdAt: "2020-11-05T15:35:22.061865Z",
            id: "_8cfa4e0b.c7283330.buy",
            metadata: null,
            portfolioId: "8cfa4e0b-b01b-47bd-92f7-a5cca6ef18d6",
            quantity: 8966,
            settled: null,
            tradeDate: null,
            unsettled: null,
            updatedAt: "2020-11-05T15:35:22.061865Z",
            __typename: "PositionsListItem"
          },
          {
            assetId: "621e7f48-e332-4e92-a875-260ed4ec9569",
            costBasis: null,
            createdAt: "2020-11-05T15:35:22.061865Z",
            id: "_8cfa4e0b._621e7f48.buy",
            metadata: null,
            portfolioId: "8cfa4e0b-b01b-47bd-92f7-a5cca6ef18d6",
            quantity: 10233,
            settled: null,
            tradeDate: null,
            unsettled: null,
            updatedAt: "2020-11-05T15:35:22.061865Z",
            __typename: "PositionsListItem"
          },
          {
            assetId: "a4cd0ac9-a72a-475d-8d10-f69223571c5d",
            costBasis: null,
            createdAt: "2020-11-05T15:35:22.061865Z",
            id: "_8cfa4e0b.a4cd0ac9.buy",
            metadata: null,
            portfolioId: "8cfa4e0b-b01b-47bd-92f7-a5cca6ef18d6",
            quantity: 9533,
            settled: null,
            tradeDate: null,
            unsettled: null,
            updatedAt: "2020-11-05T15:35:22.061865Z",
            __typename: "PositionsListItem"
          },
          {
            assetId: "USD",
            costBasis: null,
            createdAt: "2020-11-05T15:35:22.061865Z",
            id: "USD",
            metadata: null,
            portfolioId: "8cfa4e0b-b01b-47bd-92f7-a5cca6ef18d6",
            quantity: 15568.880000000048,
            settled: null,
            tradeDate: null,
            unsettled: null,
            updatedAt: "2020-11-05T15:35:22.061865Z",
            __typename: "PositionsListItem"
          }
        ],
        status: Status.Pending,
        updatedAt: "2020-11-05T15:35:19.913754Z",
        __typename: "Portfolio"
      },
      proposalId: "d392bb12-c57e-4960-ad26-fd35711c0829",
      proposalRequest: {
        constraints: {
          maximumWeight: 0.3,
          minimumWeight: 0.05,
          __typename: "Constraints"
        },
        goal: { income: null, yield: 5, __typename: "Goal" },
        investmentAmount: 777777.77,
        portfolioId: null,
        taxBrackets: null,
        whitelist: null,
        __typename: "ProposalRequest"
      },
      updatedAt: "2020-11-05T15:35:19.913631Z",
      __typename: "Proposal"
    },
    __typename: "GetProposalResponse"
  },
  iamGetCurrentUser: mockUser({}),
  pricesPriceAsset: {
    prices: [],
    __typename: "PriceAssetResponse"
  },
  positionManagementGetExternalPortfolio: {
    portfolio: mockPortfolio({ app: AppType2.Inpaas, id: "mock-portfolio-id" }),
    __typename: "GetExternalPortfolioResponse"
  },
  roverUniverseGetAssets: {
    assets: [
      {
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
          debtType: null,
          maturity: {
            fiveToTenYears: 17.8907,
            greaterThanThirtyYears: 3.7363,
            lessThanOneYear: 4.9204,
            oneToThreeYears: 3.4516,
            other: 42.0924,
            tenToTwentyYears: 15.0013,
            threeToFiveYears: 6.8715,
            twentyToThirtyYears: 8.3952,
            __typename: "MaturityAllocation"
          },
          rating: {
            a: 9.4862,
            aa: 2.7873,
            aaa: 1.2806,
            b: 3.8213,
            bb: 4.5066,
            bbb: 10.7375,
            c: 0.6267,
            cc: 6.5758,
            ccc: 1.4744,
            d: 0.2188,
            nr: 61.2264,
            __typename: "RatingAllocation2"
          },
          region: {
            africaExNorthAfrica: null,
            asiaPacificExJapan: 1.2465,
            emergingMarketsAsia: null,
            emergingMarketsEurope: null,
            europeExUnitedKingdom: 0.5519,
            japan: 1.6737,
            latinAmerica: 0.0918,
            middleEastNorthAfrica: 1.4795,
            northAmericaExUnitedStates: 1.7587,
            other: 51.1475,
            unitedKingdom: null,
            unitedStates: 46.3301,
            __typename: "RegionAllocation"
          },
          sector: null,
          __typename: "Allocation7"
        },
        analytics: {
          convexity: null,
          creditBeta: null,
          currentYield: null,
          date: "2020-11-04",
          defaultAdjustedYield: null,
          distributionYield: 13.6319401,
          dividendYield: null,
          duration: null,
          effectiveDuration: null,
          gSpread: null,
          optionAdjustedSpread: null,
          recoveryRate: null,
          secYield: null,
          source: "Lipper",
          spreadDuration: null,
          standaloneRisk: null,
          yearsToMaturity: null,
          yield: 13.6319401,
          yieldToCall: null,
          yieldToMaturity: null,
          yieldToWorst: null,
          zSpread: null,
          __typename: "Analytics"
        },
        assetSubtype: AssetSubtype.ClosedEndFunds,
        assetType: AssetType.Fund,
        bond: null,
        country: null,
        createdAt: "2019-11-18T00:12:39.252142Z",
        createdBy: null,
        currency: "USD",
        description:
          "The Fund seeks to maximize total return through a combination of current income and capital appreciation.  The Fund will invest in a wide range of fixed-income and other debt and senior equity securities selected from a variety of sectors and credit qualities.",
        displayId: null,
        equity: null,
        esgScores: {
          environmental: 57,
          governance: 67,
          social: 54,
          timestamp: "2020-11-01T12:01:00.781793Z",
          total: 60,
          __typename: "EsgScores2"
        },
        fund: {
          allocation: {
            asset: {
              cash: -3.4426,
              equity: 0.8072,
              fixedIncome: 102.7509,
              other: -0.1161,
              __typename: "AssetAllocation"
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
            equityCountry: null,
            equityRegion: null,
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
              africaExNorthAfrica: null,
              asiaPacificExJapan: 1.2465,
              emergingMarketsAsia: null,
              emergingMarketsEurope: null,
              europeExUnitedKingdom: 0.5519,
              japan: 1.6737,
              latinAmerica: 0.0918,
              middleEastNorthAfrica: 1.4795,
              northAmericaExUnitedStates: 1.7587,
              other: 50.35,
              unitedKingdom: null,
              unitedStates: 45.5894,
              __typename: "RegionAllocation"
            },
            gicsSubIndustry: null,
            trbcIndustry: null,
            __typename: "FundAllocation"
          },
          apexSupport: null,
          assetStatus: "Active",
          benchmark: "Bloomberg Barclays U.S. Aggregate Bond TR",
          classification: "High Yield",
          distributions: {
            capitalGain: {
              capitalGain: null,
              collectibles: null,
              longTermCapitalGain: {
                accountingDate: null,
                exDate: "2018-12-13",
                exValue: 0.072700276,
                paymentDate: "2018-12-31",
                recordDate: null,
                reinvestmentDate: "2018-12-31",
                reinvestmentType: "Nav",
                reinvestmentValue: 17.93,
                taxableInterestIncome: null,
                __typename: "FundDistribution"
              },
              mediumTermCapitalGain: null,
              nonQualifiedShortTermCapitalGain: {
                accountingDate: null,
                exDate: "2018-12-13",
                exValue: 0.087746004,
                paymentDate: "2018-12-31",
                recordDate: null,
                reinvestmentDate: "2018-12-31",
                reinvestmentType: "Nav",
                reinvestmentValue: 17.93,
                taxableInterestIncome: null,
                __typename: "FundDistribution"
              },
              qualifiedShortTermCapitalGain: {
                accountingDate: null,
                exDate: "2018-12-13",
                exValue: 0.000017553,
                paymentDate: "2018-12-31",
                recordDate: null,
                reinvestmentDate: "2018-12-31",
                reinvestmentType: "Nav",
                reinvestmentValue: 17.93,
                taxableInterestIncome: null,
                __typename: "FundDistribution"
              },
              returnOfCapital: null,
              shortTermCapitalGain: null,
              superLongTermCapitalGain: null,
              __typename: "CapitalGainDistributions"
            },
            foreignTaxCredit: null,
            income: {
              aggregateAccrual: null,
              exemptIncome: null,
              incomeDividend: {
                accountingDate: null,
                exDate: "2020-10-14",
                exValue: 0.1821,
                paymentDate: "2020-10-30",
                recordDate: null,
                reinvestmentDate: "2020-10-14",
                reinvestmentType: "Nav",
                reinvestmentValue: 16.21,
                taxableInterestIncome: null,
                __typename: "FundDistribution"
              },
              interestIncome: null,
              nonQualifiedIncomeDividend: {
                accountingDate: null,
                exDate: "2018-12-13",
                exValue: 0.02163184,
                paymentDate: "2018-12-31",
                recordDate: null,
                reinvestmentDate: "2018-12-31",
                reinvestmentType: "Nav",
                reinvestmentValue: 17.93,
                taxableInterestIncome: null,
                __typename: "FundDistribution"
              },
              qualifiedIncomeDividend: {
                accountingDate: null,
                exDate: "2018-12-13",
                exValue: 0.000004327,
                paymentDate: "2018-12-31",
                recordDate: null,
                reinvestmentDate: "2018-12-31",
                reinvestmentType: "Nav",
                reinvestmentValue: 17.93,
                taxableInterestIncome: null,
                __typename: "FundDistribution"
              },
              __typename: "IncomeDistributions"
            },
            repaymentCategory: null,
            __typename: "FundDistributions"
          },
          fees: {
            backLoad: null,
            frontLoad: null,
            fundExpenseRatio: 1.21,
            managementFee: null,
            marketing12b1Fee: null,
            performanceFee: null,
            __typename: "Fees"
          },
          focus: {
            assetClassFocus: "Bond",
            geoFocus: "United States of America",
            __typename: "Focus"
          },
          fundType: "Closed End Funds",
          inceptionDate: "2007-07-27",
          institutional: false,
          managementCompany: "Guggenheim Funds Investment Advisors LLC",
          midPrice: 17.88,
          netAssetValuePerShare: 16.26,
          netAssets: 720907336.57,
          netAssetsDate: "2020-10-30",
          priceDate: "2020-11-04",
          regulatoryStructure: null,
          replicationStrategy: null,
          scores: {
            consistentReturn: {
              fiveYear: null,
              overall: null,
              tenYear: null,
              threeYear: null,
              __typename: "Score"
            },
            expense: {
              fiveYear: null,
              overall: null,
              tenYear: null,
              threeYear: null,
              __typename: "Score"
            },
            preservation: {
              fiveYear: null,
              overall: null,
              tenYear: null,
              threeYear: null,
              __typename: "Score"
            },
            taxEfficiency: {
              fiveYear: null,
              overall: null,
              tenYear: null,
              threeYear: null,
              __typename: "Score"
            },
            totalReturn: {
              fiveYear: null,
              overall: null,
              tenYear: null,
              threeYear: null,
              __typename: "Score"
            },
            __typename: "Scores6"
          },
          tradeLotSize: 0,
          yields: {
            dailySecYield: null,
            dailySecYieldDate: null,
            distributionYield: 13.4391144,
            dividendYield: null,
            lipperDistributionYield: 13.6319401,
            projectedYield: 11.9041029,
            secYield: null,
            simpleYieldBegin: 12.6678841,
            simpleYieldEnd: 13.4391759,
            thirtyDayYield: null,
            trailingTwelveMonthYield: 13.6320025,
            __typename: "FundYields"
          },
          __typename: "Fund4"
        },
        id: "dccc676e-46f4-4a3d-a827-21d3716cc644",
        identifiers: {
          apex: "40167F101",
          bbGlobal: null,
          cik: null,
          cins: null,
          cusip: "40167F101",
          isin: "US40167F1012",
          primaryTicker: null,
          refinitivAssetId: null,
          refinitivIssuePermId: null,
          refinitivLipperId: "40116430",
          refinitivLipperParentId: "30131768",
          refinitivLipperPermId: null,
          sedol: null,
          valoren: null,
          __typename: "Identifiers"
        },
        legalEntity: null,
        liquid: null,
        market: "USA",
        metadata: null,
        name: "Guggenheim Strategic Opportunities Fund",
        price: 17.88,
        priceDate: "2020-11-04",
        priceQuotes: null,
        primaryExchange: "NYSE",
        primaryExchangeMic: null,
        rating: null,
        scores: {
          attractiveness: 1,
          credit: 3,
          efficiency: null,
          liquidity: 3,
          risk: 31.777347819655702,
          timestamp: null,
          __typename: "RoverScores"
        },
        ticker: "GOF",
        unit: null,
        universes: {
          custom: null,
          general: true,
          liquid: true,
          search: true,
          timestamp: "2020-11-05T05:31:02.024486Z",
          __typename: "Universes"
        },
        updatedAt: "2020-11-05T05:31:01.718784Z",
        updatedBy: "bry",
        __typename: "Asset5"
      }
    ],
    __typename: "GetAssetsResponse"
  },
  incomePortfoliosGetPortfolioMapping: {
    portfolioMapping: {
      proposalId: "mock-proposal-id",
      portfolioType: PortfolioTypeGQL.External,
      portfolioId: "mock-portfolio-id",
      __typename: "PortfolioMapping2"
    },
    __typename: "GetPortfolioMappingResponse2"
  },
  roverPortfolioAnalyzerAnalyzePortfolio: {
    analysis: {
      allocations: {
        country: {
          us: 54.822388104044556,
          lu: 2.6875813053400623,
          gb: 1.9450088646171524,
          ie: 1.1158422420394494,
          fr: 0.330327914028922,
          nl: 3.5690082704073416,
          ca: 2.644034981743653,
          no: 0.04330338937925534,
          de: 0.11110282253464664,
          fi: 0.030179283991295353,
          ch: 0.015181465374931537,
          dk: 0.02892436447441593,
          bm: 0.3110485348445621,
          it: 0.214475421896483,
          es: 0.11108379751907643,
          ky: 3.0872506573467016,
          se: 0.04921733129614901,
          at: 0.18405589104582604,
          au: 0.13045041416927058,
          sn: 0.6813464712278546,
          hk: 0.9090873982852653,
          ua: 0.1184608313870493,
          br: 0.5411854002385094,
          id: 0.4054509089968762,
          il: 0.2148330896849025,
          ae: 0.5448586043125264,
          in: 0.9953464739567653,
          kr: 0.11585897850128722,
          za: 0.6088394741551755,
          cl: 0.3159261603994149,
          cn: 1.7372724768403056,
          mx: 2.3144390977859097,
          my: 0.020263842474993958,
          co: 0.45624255602686553,
          ar: 1.329915492914285,
          pe: 0.47754713965616435,
          vn: 0.05316500205081576,
          ng: 0.1427039782755617,
          tr: 2.8332341323911874,
          eg: 0.05987214490767748,
          qa: 0.017604951839383556,
          other: 13.676080337597455
        },
        currency: {
          cad: 0.316345846971163,
          usd: 93.77655031395395,
          gbp: 0.23557087571623575,
          aud: 0.00857018206649361,
          eur: -0.08318382166862422,
          other: 5.746146602960792
        },
        datastreamSubtype: {
          buckets: [
            {
              contributors: null,
              name: "Unknown",
              percentOfNetAssetValue: 1,
              __typename: "Bucket"
            }
          ],
          __typename: "Allocation4"
        },
        datastreamType: {
          buckets: [
            { name: "Unknown", percentOfNetAssetValue: 1, __typename: "Bucket" }
          ],
          __typename: "Allocation4"
        },
        debtType: {
          buckets: [
            {
              name: "mortgageBackedSecurities",
              percentOfNetAssetValue: 12.719435468721702,
              __typename: "Bucket"
            },
            {
              name: "other",
              percentOfNetAssetValue: 22.316297992047822,
              __typename: "Bucket"
            },
            {
              name: "bonds",
              percentOfNetAssetValue: 3.8326435999191766,
              __typename: "Bucket"
            },
            {
              name: "notes",
              percentOfNetAssetValue: 60.18885634727246,
              __typename: "Bucket"
            },
            {
              name: "municipalBonds",
              percentOfNetAssetValue: 0.44427403275236005,
              __typename: "Bucket"
            }
          ],
          __typename: "DebtTypeAllocation"
        },
        maturity: {
          fiveToTenYears: 19.055051670701452,
          greaterThanThirtyYears: 0.7026493751102798,
          lessThanOneYear: 2.253323449659581,
          oneToThreeYears: 21.703727953091708,
          other: 5.2205193141252835,
          tenToTwentyYears: 1.92861258923784,
          threeToFiveYears: 39.37384875502961,
          twentyToThirtyYears: 9.762266893044242,
          __typename: "Maturity"
        },
        rating: {
          investmentGrade: {
            a: 0.07424697080087848,
            aa: 13.685677319839447,
            aaa: 0.4968678726379064,
            bbb: 3.3884496279123693,
            total: 17.645241791190603,
            __typename: "InvestmentGradeRatingAllocation"
          },
          nonInvestmentGrade: {
            b: 20.63764366097593,
            bb: 33.59567837205887,
            c: 7.271837928891121,
            d: 0.16247294087057945,
            nr: 100.0742469708009,
            total: 161.74187987359738,
            __typename: "NonInvestmentGradeRatingAllocation"
          },
          __typename: "RatingAllocation"
        },
        region: {
          africaExNorthAfrica: 1.7394473042212875,
          asiaPacificExJapan: 1.8067976693121486,
          emergingMarketsAsia: 4.843401506109434,
          emergingMarketsEurope: null,
          europeExUnitedKingdom: 8.949023315668754,
          japan: 0.013832680919006336,
          latinAmerica: 6.186441939778478,
          middleEastNorthAfrica: 1.587898349220251,
          northAmericaExUnitedStates: 7.63192768868912,
          other: 8.964408617203333,
          unitedKingdom: 2.0341836326075913,
          unitedStates: 56.24263729627059,
          __typename: "Region"
        },
        sector: {
          agency: null,
          communications: null,
          consumerGoods: null,
          energy: null,
          financials: null,
          manufacturing: null,
          municipal: null,
          other: 100,
          services: null,
          sovereign: null,
          supranational: null,
          transportation: null,
          __typename: "Sector"
        },
        __typename: "Allocations2"
      },
      createdAt: "2020-11-05T15:52:40.516188Z",
      currentCoupon: 0,
      duration: 0,
      estimatedPerformance: {
        endDate: "2020-11-05",
        estimatedMaximumDrawdown: {
          endDate: "2020-03-23",
          startDate: "2020-02-21",
          value: -0.1751805219685053,
          __typename: "EstimatedMaximumDrawdown"
        },
        startDate: "2015-11-07",
        timeSeries: [
          {
            cumulativeReturn: -0.0019008382602025975,
            endDate: "2015-11-09",
            periodReturn: -0.001900838260202617,
            startDate: "2015-11-06",
            __typename: "SinglePeriodPerformance"
          },
          {
            cumulativeReturn: -0.0028270226631166295,
            endDate: "2015-11-10",
            periodReturn: -0.0009279482825130134,
            startDate: "2015-11-09",
            __typename: "SinglePeriodPerformance"
          },
          {
            cumulativeReturn: -0.0030991716429228378,
            endDate: "2015-11-11",
            periodReturn: -0.0002729205323364296,
            startDate: "2015-11-10",
            __typename: "SinglePeriodPerformance"
          },
          {
            cumulativeReturn: -0.004887238301658381,
            endDate: "2015-11-12",
            periodReturn: -0.0017936254117497036,
            startDate: "2015-11-11",
            __typename: "SinglePeriodPerformance"
          },
          {
            cumulativeReturn: -0.006954930606065557,
            endDate: "2015-11-13",
            periodReturn: -0.0020778472390187257,
            startDate: "2015-11-12",
            __typename: "SinglePeriodPerformance"
          },
          {
            cumulativeReturn: -0.008281707477018285,
            endDate: "2015-11-16",
            periodReturn: -0.001336069139100074,
            startDate: "2015-11-13",
            __typename: "SinglePeriodPerformance"
          },
          {
            cumulativeReturn: -0.006916001991752352,
            endDate: "2015-11-17",
            periodReturn: 0.001377110310017093,
            startDate: "2015-11-16",
            __typename: "SinglePeriodPerformance"
          },
          {
            cumulativeReturn: -0.006845004546089606,
            endDate: "2015-11-18",
            periodReturn: 0.00007149188367256905,
            startDate: "2015-11-17",
            __typename: "SinglePeriodPerformance"
          },
          {
            cumulativeReturn: -0.007332695603684436,
            endDate: "2015-11-19",
            periodReturn: -0.000491052312909045,
            startDate: "2015-11-18",
            __typename: "SinglePeriodPerformance"
          },
          {
            cumulativeReturn: -0.007359601517193393,
            endDate: "2015-11-20",
            periodReturn: -0.000027104663757754696,
            startDate: "2015-11-19",
            __typename: "SinglePeriodPerformance"
          },
          {
            cumulativeReturn: -0.007486525545794764,
            endDate: "2015-11-23",
            periodReturn: -0.00012786506452422728,
            startDate: "2015-11-20",
            __typename: "SinglePeriodPerformance"
          },
          {
            cumulativeReturn: -0.008451382667219676,
            endDate: "2015-11-24",
            periodReturn: -0.0009721350351999023,
            startDate: "2015-11-23",
            __typename: "SinglePeriodPerformance"
          },
          {
            cumulativeReturn: -0.009120784317646402,
            endDate: "2015-11-25",
            periodReturn: -0.0006751072400538052,
            startDate: "2015-11-24",
            __typename: "SinglePeriodPerformance"
          },
          {
            cumulativeReturn: -0.009120784317646402,
            endDate: "2015-11-26",
            periodReturn: 0,
            startDate: "2015-11-25",
            __typename: "SinglePeriodPerformance"
          },
          {
            cumulativeReturn: -0.008884293602464233,
            endDate: "2015-11-27",
            periodReturn: 0.00023866755043339534,
            startDate: "2015-11-26",
            __typename: "SinglePeriodPerformance"
          },
          {
            cumulativeReturn: -0.009268849922261069,
            endDate: "2015-11-30",
            periodReturn: -0.00038800345642237433,
            startDate: "2015-11-27",
            __typename: "SinglePeriodPerformance"
          },
          {
            cumulativeReturn: -0.009634475538828569,
            endDate: "2015-12-01",
            periodReturn: -0.0003690462508812866,
            startDate: "2015-11-30",
            __typename: "SinglePeriodPerformance"
          },
          {
            cumulativeReturn: -0.0096967744934926,
            endDate: "2015-12-02",
            periodReturn: -0.00006290501145821367,
            startDate: "2015-12-01",
            __typename: "SinglePeriodPerformance"
          },
          {
            cumulativeReturn: -0.011715303436652613,
            endDate: "2015-12-03",
            periodReturn: -0.002038293818671209,
            startDate: "2015-12-02",
            __typename: "SinglePeriodPerformance"
          },
          {
            cumulativeReturn: -0.012237806409148733,
            endDate: "2015-12-04",
            periodReturn: -0.0005286968161230022,
            startDate: "2015-12-03",
            __typename: "SinglePeriodPerformance"
          },
          {
            cumulativeReturn: -0.01338189780324539,
            endDate: "2015-12-07",
            periodReturn: -0.0011582660295363513,
            startDate: "2015-12-04",
            __typename: "SinglePeriodPerformance"
          },
          {
            cumulativeReturn: -0.017837446159525205,
            endDate: "2015-12-08",
            periodReturn: -0.00451598074914627,
            startDate: "2015-12-07",
            __typename: "SinglePeriodPerformance"
          },
          {
            cumulativeReturn: -0.018106762930711562,
            endDate: "2015-12-09",
            periodReturn: -0.0002742079405626585,
            startDate: "2015-12-08",
            __typename: "SinglePeriodPerformance"
          },
          {
            cumulativeReturn: -0.019698042783095393,
            endDate: "2015-12-10",
            periodReturn: -0.0016206241089238983,
            startDate: "2015-12-09",
            __typename: "SinglePeriodPerformance"
          },
          {
            cumulativeReturn: -0.02586279261433644,
            endDate: "2015-12-11",
            periodReturn: -0.006288623404101821,
            startDate: "2015-12-10",
            __typename: "SinglePeriodPerformance"
          },
          {
            cumulativeReturn: -0.032803715284382085,
            endDate: "2015-12-14",
            periodReturn: -0.007125200246352618,
            startDate: "2015-12-11",
            __typename: "SinglePeriodPerformance"
          },
          {
            cumulativeReturn: -0.030163821824860326,
            endDate: "2015-12-15",
            periodReturn: 0.0027294288669625177,
            startDate: "2015-12-14",
            __typename: "SinglePeriodPerformance"
          },
          {
            cumulativeReturn: -0.029578383043908807,
            endDate: "2015-12-16",
            periodReturn: 0.0006036470840394934,
            startDate: "2015-12-15",
            __typename: "SinglePeriodPerformance"
          },
          {
            cumulativeReturn: -0.028414365119080243,
            endDate: "2015-12-17",
            periodReturn: 0.0011994971098024825,
            startDate: "2015-12-16",
            __typename: "SinglePeriodPerformance"
          },
          {
            cumulativeReturn: -0.03090877528459257,
            endDate: "2015-12-18",
            periodReturn: -0.002567360071990017,
            startDate: "2015-12-17",
            __typename: "SinglePeriodPerformance"
          },
          {
            cumulativeReturn: -0.031714150728120116,
            endDate: "2015-12-21",
            periodReturn: -0.000831062569743149,
            startDate: "2015-12-18",
            __typename: "SinglePeriodPerformance"
          },
          {
            cumulativeReturn: -0.031201013618818663,
            endDate: "2015-12-22",
            periodReturn: 0.0005299438277314974,
            startDate: "2015-12-21",
            __typename: "SinglePeriodPerformance"
          },
          {
            cumulativeReturn: -0.029605676582247997,
            endDate: "2015-12-23",
            periodReturn: 0.0016467162528006317,
            startDate: "2015-12-22",
            __typename: "SinglePeriodPerformance"
          },
          {
            cumulativeReturn: -0.02909932283294736,
            endDate: "2015-12-24",
            periodReturn: 0.0005218020520949153,
            startDate: "2015-12-23",
            __typename: "SinglePeriodPerformance"
          },
          {
            cumulativeReturn: -0.02909932283294736,
            endDate: "2015-12-25",
            periodReturn: 0,
            startDate: "2015-12-24",
            __typename: "SinglePeriodPerformance"
          },
          {
            cumulativeReturn: -0.02839711497108488,
            endDate: "2015-12-28",
            periodReturn: 0.0007232540654017931,
            startDate: "2015-12-25",
            __typename: "SinglePeriodPerformance"
          },
          {
            cumulativeReturn: -0.027208119971911526,
            endDate: "2015-12-29",
            periodReturn: 0.0012237458507938415,
            startDate: "2015-12-28",
            __typename: "SinglePeriodPerformance"
          },
          {
            cumulativeReturn: -0.026897368728951987,
            endDate: "2015-12-30",
            periodReturn: 0.00031944267765730264,
            startDate: "2015-12-29",
            __typename: "SinglePeriodPerformance"
          },
          {
            cumulativeReturn: -0.026885143322939342,
            endDate: "2015-12-31",
            periodReturn: 0.000012563326436261218,
            startDate: "2015-12-30",
            __typename: "SinglePeriodPerformance"
          },
          {
            cumulativeReturn: -0.026885143322939342,
            endDate: "2016-01-01",
            periodReturn: 0,
            startDate: "2015-12-31",
            __typename: "SinglePeriodPerformance"
          },
          {
            cumulativeReturn: -0.027818297641269862,
            endDate: "2016-01-04",
            periodReturn: -0.0009589354349362099,
            startDate: "2016-01-01",
            __typename: "SinglePeriodPerformance"
          },
          {
            cumulativeReturn: -0.026565289782947588,
            endDate: "2016-01-05",
            periodReturn: 0.0012888617994787314,
            startDate: "2016-01-04",
            __typename: "SinglePeriodPerformance"
          },
          {
            cumulativeReturn: -0.026861900706981467,
            endDate: "2016-01-06",
            periodReturn: -0.00030470551432022454,
            startDate: "2016-01-05",
            __typename: "SinglePeriodPerformance"
          },
          {
            cumulativeReturn: -0.028991067120685554,
            endDate: "2016-01-07",
            periodReturn: -0.002187938603216661,
            startDate: "2016-01-06",
            __typename: "SinglePeriodPerformance"
          },
          {
            cumulativeReturn: -0.028222300896661556,
            endDate: "2016-01-08",
            periodReturn: 0.0007917190027741101,
            startDate: "2016-01-07",
            __typename: "SinglePeriodPerformance"
          },
          {
            cumulativeReturn: -0.029996149094827618,
            endDate: "2016-01-11",
            periodReturn: -0.0018253641751635459,
            startDate: "2016-01-08",
            __typename: "SinglePeriodPerformance"
          },
          {
            cumulativeReturn: -0.031533156045212785,
            endDate: "2016-01-12",
            periodReturn: -0.001584536957199569,
            startDate: "2016-01-11",
            __typename: "SinglePeriodPerformance"
          },
          {
            cumulativeReturn: -0.03417482920575177,
            endDate: "2016-01-13",
            periodReturn: -0.0027276856993386075,
            startDate: "2016-01-12",
            __typename: "SinglePeriodPerformance"
          },
          {
            cumulativeReturn: -0.03752782334427174,
            endDate: "2016-01-14",
            periodReturn: -0.0034716367308615776,
            startDate: "2016-01-13",
            __typename: "SinglePeriodPerformance"
          },
          {
            cumulativeReturn: -0.04327391710384476,
            endDate: "2016-01-15",
            periodReturn: -0.005970140123467063,
            startDate: "2016-01-14",
            __typename: "SinglePeriodPerformance"
          },
          {
            cumulativeReturn: -0.04327391710384476,
            endDate: "2016-01-18",
            periodReturn: 0,
            startDate: "2016-01-15",
            __typename: "SinglePeriodPerformance"
          },
          {
            cumulativeReturn: -0.04314090385597846,
            endDate: "2016-01-19",
            periodReturn: 0.00013902960339871675,
            startDate: "2016-01-18",
            __typename: "SinglePeriodPerformance"
          },
          {
            cumulativeReturn: -0.04980220259839774,
            endDate: "2016-01-20",
            periodReturn: -0.006961629741790799,
            startDate: "2016-01-19",
            __typename: "SinglePeriodPerformance"
          },
          {
            cumulativeReturn: -0.0488395156691277,
            endDate: "2016-01-21",
            periodReturn: 0.0010131437179738256,
            startDate: "2016-01-20",
            __typename: "SinglePeriodPerformance"
          },
          {
            cumulativeReturn: -0.043888126215731016,
            endDate: "2016-01-22",
            periodReturn: 0.005205629896283819,
            startDate: "2016-01-21",
            __typename: "SinglePeriodPerformance"
          },
          {
            cumulativeReturn: -0.04386439912732587,
            endDate: "2016-01-25",
            periodReturn: 0.000024816226066972126,
            startDate: "2016-01-22",
            __typename: "SinglePeriodPerformance"
          },
          {
            cumulativeReturn: -0.04376170306200022,
            endDate: "2016-01-26",
            periodReturn: 0.00010740742759907938,
            startDate: "2016-01-25",
            __typename: "SinglePeriodPerformance"
          },
          {
            cumulativeReturn: -0.04284752919425927,
            endDate: "2016-01-27",
            periodReturn: 0.0009560105160693993,
            startDate: "2016-01-26",
            __typename: "SinglePeriodPerformance"
          },
          {
            cumulativeReturn: -0.04094440548197953,
            endDate: "2016-01-28",
            periodReturn: 0.0019883182359418023,
            startDate: "2016-01-27",
            __typename: "SinglePeriodPerformance"
          },
          {
            cumulativeReturn: -0.03871623296056803,
            endDate: "2016-01-29",
            periodReturn: 0.002323298601403031,
            startDate: "2016-01-28",
            __typename: "SinglePeriodPerformance"
          },
          {
            cumulativeReturn: -0.03970169172120119,
            endDate: "2016-02-01",
            periodReturn: -0.0010251486547704284,
            startDate: "2016-01-29",
            __typename: "SinglePeriodPerformance"
          },
          {
            cumulativeReturn: -0.04174708781516201,
            endDate: "2016-02-02",
            periodReturn: -0.0021299590724332762,
            startDate: "2016-02-01",
            __typename: "SinglePeriodPerformance"
          },
          {
            cumulativeReturn: -0.042385939810799855,
            endDate: "2016-02-03",
            periodReturn: -0.0006666841159724188,
            startDate: "2016-02-02",
            __typename: "SinglePeriodPerformance"
          },
          {
            cumulativeReturn: -0.040833874685868854,
            endDate: "2016-02-04",
            periodReturn: 0.0016207626740823038,
            startDate: "2016-02-03",
            __typename: "SinglePeriodPerformance"
          },
          {
            cumulativeReturn: -0.04150833708704493,
            endDate: "2016-02-05",
            periodReturn: -0.0007031757934062079,
            startDate: "2016-02-04",
            __typename: "SinglePeriodPerformance"
          },
          {
            cumulativeReturn: -0.04573065127403875,
            endDate: "2016-02-08",
            periodReturn: -0.004405165272029401,
            startDate: "2016-02-05",
            __typename: "SinglePeriodPerformance"
          },
          {
            cumulativeReturn: -0.04895866558297013,
            endDate: "2016-02-09",
            periodReturn: -0.003382707736805214,
            startDate: "2016-02-08",
            __typename: "SinglePeriodPerformance"
          },
          {
            cumulativeReturn: -0.048551882008327496,
            endDate: "2016-02-10",
            periodReturn: 0.00042772439001514386,
            startDate: "2016-02-09",
            __typename: "SinglePeriodPerformance"
          },
          {
            cumulativeReturn: -0.05455095620093042,
            endDate: "2016-02-11",
            periodReturn: -0.006305203698616667,
            startDate: "2016-02-10",
            __typename: "SinglePeriodPerformance"
          },
          {
            cumulativeReturn: -0.053592869838112955,
            endDate: "2016-02-12",
            periodReturn: 0.0010133664728958875,
            startDate: "2016-02-11",
            __typename: "SinglePeriodPerformance"
          },
          {
            cumulativeReturn: -0.053592869838112955,
            endDate: "2016-02-15",
            periodReturn: 0,
            startDate: "2016-02-12",
            __typename: "SinglePeriodPerformance"
          },
          {
            cumulativeReturn: -0.05045390912836201,
            endDate: "2016-02-16",
            periodReturn: 0.003316712870933351,
            startDate: "2016-02-15",
            __typename: "SinglePeriodPerformance"
          },
          {
            cumulativeReturn: -0.046282050280174736,
            endDate: "2016-02-17",
            periodReturn: 0.004393529590920228,
            startDate: "2016-02-16",
            __typename: "SinglePeriodPerformance"
          },
          {
            cumulativeReturn: -0.04424773190240361,
            endDate: "2016-02-18",
            periodReturn: 0.002133039834647895,
            startDate: "2016-02-17",
            __typename: "SinglePeriodPerformance"
          },
          {
            cumulativeReturn: -0.044568855603131285,
            endDate: "2016-02-19",
            periodReturn: -0.0003359905191402992,
            startDate: "2016-02-18",
            __typename: "SinglePeriodPerformance"
          },
          {
            cumulativeReturn: -0.041703426026629464,
            endDate: "2016-02-22",
            periodReturn: 0.002999095846211612,
            startDate: "2016-02-19",
            __typename: "SinglePeriodPerformance"
          },
          {
            cumulativeReturn: -0.042127020347920596,
            endDate: "2016-02-23",
            periodReturn: -0.00044202842084142157,
            startDate: "2016-02-22",
            __typename: "SinglePeriodPerformance"
          },
          {
            cumulativeReturn: -0.04306667278380094,
            endDate: "2016-02-24",
            periodReturn: -0.000980978121150944,
            startDate: "2016-02-23",
            __typename: "SinglePeriodPerformance"
          },
          {
            cumulativeReturn: -0.040964619008662995,
            endDate: "2016-02-25",
            periodReturn: 0.0021966564601246666,
            startDate: "2016-02-24",
            __typename: "SinglePeriodPerformance"
          },
          {
            cumulativeReturn: -0.037383089823510796,
            endDate: "2016-02-26",
            periodReturn: 0.0037345120483979716,
            startDate: "2016-02-25",
            __typename: "SinglePeriodPerformance"
          },
          {
            cumulativeReturn: -0.03574971322821807,
            endDate: "2016-02-29",
            periodReturn: 0.0016968085414094344,
            startDate: "2016-02-26",
            __typename: "SinglePeriodPerformance"
          },
          {
            cumulativeReturn: -0.03229306982916991,
            endDate: "2016-03-01",
            periodReturn: 0.0035847989328794826,
            startDate: "2016-02-29",
            __typename: "SinglePeriodPerformance"
          },
          {
            cumulativeReturn: -0.028367463512473323,
            endDate: "2016-03-02",
            periodReturn: 0.004056606596796314,
            startDate: "2016-03-01",
            __typename: "SinglePeriodPerformance"
          },
          {
            cumulativeReturn: -0.026702995049755707,
            endDate: "2016-03-03",
            periodReturn: 0.001713063735735763,
            startDate: "2016-03-02",
            __typename: "SinglePeriodPerformance"
          },
          {
            cumulativeReturn: -0.023117841201381162,
            endDate: "2016-03-04",
            periodReturn: 0.0036835147238100186,
            startDate: "2016-03-03",
            __typename: "SinglePeriodPerformance"
          },
          {
            cumulativeReturn: -0.0211960794241548,
            endDate: "2016-03-07",
            periodReturn: 0.0019672401219710837,
            startDate: "2016-03-04",
            __typename: "SinglePeriodPerformance"
          },
          {
            cumulativeReturn: -0.02212005813703355,
            endDate: "2016-03-08",
            periodReturn: -0.0009439875479199548,
            startDate: "2016-03-07",
            __typename: "SinglePeriodPerformance"
          },
          {
            cumulativeReturn: -0.02221890994462472,
            endDate: "2016-03-09",
            periodReturn: -0.00010108787731433391,
            startDate: "2016-03-08",
            __typename: "SinglePeriodPerformance"
          },
          {
            cumulativeReturn: -0.02073776075647682,
            endDate: "2016-03-10",
            periodReturn: 0.0015148065382038908,
            startDate: "2016-03-09",
            __typename: "SinglePeriodPerformance"
          },
          {
            cumulativeReturn: -0.016998562668372408,
            endDate: "2016-03-11",
            periodReturn: 0.0038183827970256256,
            startDate: "2016-03-10",
            __typename: "SinglePeriodPerformance"
          },
          {
            cumulativeReturn: -0.015633155248831687,
            endDate: "2016-03-14",
            periodReturn: 0.0013890187416684963,
            startDate: "2016-03-11",
            __typename: "SinglePeriodPerformance"
          },
          {
            cumulativeReturn: -0.017084675363639446,
            endDate: "2016-03-15",
            periodReturn: -0.0014745723330153537,
            startDate: "2016-03-14",
            __typename: "SinglePeriodPerformance"
          },
          {
            cumulativeReturn: -0.016738807404271805,
            endDate: "2016-03-16",
            periodReturn: 0.00035187970997963306,
            startDate: "2016-03-15",
            __typename: "SinglePeriodPerformance"
          },
          {
            cumulativeReturn: -0.013145212098200076,
            endDate: "2016-03-17",
            periodReturn: 0.003654771827803967,
            startDate: "2016-03-16",
            __typename: "SinglePeriodPerformance"
          },
          {
            cumulativeReturn: -0.009931383062889543,
            endDate: "2016-03-18",
            periodReturn: 0.003256638235645117,
            startDate: "2016-03-17",
            __typename: "SinglePeriodPerformance"
          },
          {
            cumulativeReturn: -0.00934043384769423,
            endDate: "2016-03-21",
            periodReturn: 0.0005968770296177807,
            startDate: "2016-03-18",
            __typename: "SinglePeriodPerformance"
          },
          {
            cumulativeReturn: -0.009103149546012101,
            endDate: "2016-03-22",
            periodReturn: 0.00023952153675117806,
            startDate: "2016-03-21",
            __typename: "SinglePeriodPerformance"
          },
          {
            cumulativeReturn: -0.009638647219115226,
            endDate: "2016-03-23",
            periodReturn: -0.0005404171714319125,
            startDate: "2016-03-22",
            __typename: "SinglePeriodPerformance"
          },
          {
            cumulativeReturn: -0.011779958060393558,
            endDate: "2016-03-24",
            periodReturn: -0.0021621510525079244,
            startDate: "2016-03-23",
            __typename: "SinglePeriodPerformance"
          },
          {
            cumulativeReturn: -0.011779958060393558,
            endDate: "2016-03-25",
            periodReturn: 0,
            startDate: "2016-03-24",
            __typename: "SinglePeriodPerformance"
          },
          {
            cumulativeReturn: -0.011838103787516485,
            endDate: "2016-03-28",
            periodReturn: -0.00005883884626418777,
            startDate: "2016-03-25",
            __typename: "SinglePeriodPerformance"
          },
          {
            cumulativeReturn: -0.012376236428897625,
            endDate: "2016-03-29",
            periodReturn: -0.000544579429184385,
            startDate: "2016-03-28",
            __typename: "SinglePeriodPerformance"
          },
          {
            cumulativeReturn: -0.009980510420913413,
            endDate: "2016-03-30",
            periodReturn: 0.002425747634222309,
            startDate: "2016-03-29",
            __typename: "SinglePeriodPerformance"
          },
          {
            cumulativeReturn: -0.007771929632356067,
            endDate: "2016-03-31",
            periodReturn: 0.00223084576799231,
            startDate: "2016-03-30",
            __typename: "SinglePeriodPerformance"
          },
          {
            cumulativeReturn: -0.006981283172296182,
            endDate: "2016-04-01",
            periodReturn: 0.000796839440116697,
            startDate: "2016-03-31",
            __typename: "SinglePeriodPerformance"
          },
          {
            cumulativeReturn: -0.006709311940985896,
            endDate: "2016-04-04",
            periodReturn: 0.00027388328810058353,
            startDate: "2016-04-01",
            __typename: "SinglePeriodPerformance"
          },
          {
            cumulativeReturn: -0.007780569194781317,
            endDate: "2016-04-05",
            periodReturn: -0.0010784932011078771,
            startDate: "2016-04-04",
            __typename: "SinglePeriodPerformance"
          },
          {
            cumulativeReturn: -0.006154227459612249,
            endDate: "2016-04-06",
            periodReturn: 0.0016390948258786498,
            startDate: "2016-04-05",
            __typename: "SinglePeriodPerformance"
          },
          {
            cumulativeReturn: -0.00651342031937574,
            endDate: "2016-04-07",
            periodReturn: -0.0003614171028219647,
            startDate: "2016-04-06",
            __typename: "SinglePeriodPerformance"
          },
          {
            cumulativeReturn: -0.0048323080060340695,
            endDate: "2016-04-08",
            periodReturn: 0.0016921338926209097,
            startDate: "2016-04-07",
            __typename: "SinglePeriodPerformance"
          },
          {
            cumulativeReturn: -0.003655663987572777,
            endDate: "2016-04-11",
            periodReturn: 0.001182357534240104,
            startDate: "2016-04-08",
            __typename: "SinglePeriodPerformance"
          },
          {
            cumulativeReturn: -0.0020137023932434994,
            endDate: "2016-04-12",
            periodReturn: 0.0016479860776853976,
            startDate: "2016-04-11",
            __typename: "SinglePeriodPerformance"
          },
          {
            cumulativeReturn: 0.0016947181033424297,
            endDate: "2016-04-13",
            periodReturn: 0.0037159032197926155,
            startDate: "2016-04-12",
            __typename: "SinglePeriodPerformance"
          },
          {
            cumulativeReturn: 0.0041256150732376096,
            endDate: "2016-04-14",
            periodReturn: 0.002426784254685862,
            startDate: "2016-04-13",
            __typename: "SinglePeriodPerformance"
          },
          {
            cumulativeReturn: 0.004561017154234737,
            endDate: "2016-04-15",
            periodReturn: 0.0004336131600081655,
            startDate: "2016-04-14",
            __typename: "SinglePeriodPerformance"
          },
          {
            cumulativeReturn: 0.004494562448566608,
            endDate: "2016-04-18",
            periodReturn: -0.00006615298078788946,
            startDate: "2016-04-15",
            __typename: "SinglePeriodPerformance"
          },
          {
            cumulativeReturn: 0.0077429344559969415,
            endDate: "2016-04-19",
            periodReturn: 0.00323383732363075,
            startDate: "2016-04-18",
            __typename: "SinglePeriodPerformance"
          },
          {
            cumulativeReturn: 0.009279385731093548,
            endDate: "2016-04-20",
            periodReturn: 0.0015246460407344735,
            startDate: "2016-04-19",
            __typename: "SinglePeriodPerformance"
          },
          {
            cumulativeReturn: 0.010453207431501355,
            endDate: "2016-04-21",
            periodReturn: 0.0011630295010509534,
            startDate: "2016-04-20",
            __typename: "SinglePeriodPerformance"
          },
          {
            cumulativeReturn: 0.0105692259338801,
            endDate: "2016-04-22",
            periodReturn: 0.00011481828304899789,
            startDate: "2016-04-21",
            __typename: "SinglePeriodPerformance"
          },
          {
            cumulativeReturn: 0.010135025001369646,
            endDate: "2016-04-25",
            periodReturn: -0.00042965976141742053,
            startDate: "2016-04-22",
            __typename: "SinglePeriodPerformance"
          },
          {
            cumulativeReturn: 0.0100923813630458,
            endDate: "2016-04-26",
            periodReturn: -0.000042215780334798875,
            startDate: "2016-04-25",
            __typename: "SinglePeriodPerformance"
          },
          {
            cumulativeReturn: 0.012088826606412972,
            endDate: "2016-04-27",
            periodReturn: 0.00197649767506713,
            startDate: "2016-04-26",
            __typename: "SinglePeriodPerformance"
          },
          {
            cumulativeReturn: 0.014615437679115217,
            endDate: "2016-04-28",
            periodReturn: 0.0024964321374578223,
            startDate: "2016-04-27",
            __typename: "SinglePeriodPerformance"
          },
          {
            cumulativeReturn: 0.0150401980570396,
            endDate: "2016-04-29",
            periodReturn: 0.00041864174558212206,
            startDate: "2016-04-28",
            __typename: "SinglePeriodPerformance"
          },
          {
            cumulativeReturn: 0.015357202617616528,
            endDate: "2016-05-02",
            periodReturn: 0.0003123073954940535,
            startDate: "2016-04-29",
            __typename: "SinglePeriodPerformance"
          },
          {
            cumulativeReturn: 0.013556308151258634,
            endDate: "2016-05-03",
            periodReturn: -0.0017736560707060087,
            startDate: "2016-05-02",
            __typename: "SinglePeriodPerformance"
          },
          {
            cumulativeReturn: 0.012547285189163038,
            endDate: "2016-05-04",
            periodReturn: -0.0009955272874143405,
            startDate: "2016-05-03",
            __typename: "SinglePeriodPerformance"
          },
          {
            cumulativeReturn: 0.01234855560214232,
            endDate: "2016-05-05",
            periodReturn: -0.00019626696938267838,
            startDate: "2016-05-04",
            __typename: "SinglePeriodPerformance"
          },
          {
            cumulativeReturn: 0.011724916286061315,
            endDate: "2016-05-06",
            periodReturn: -0.000616032208106565,
            startDate: "2016-05-05",
            __typename: "SinglePeriodPerformance"
          },
          {
            cumulativeReturn: 0.011819995731355615,
            endDate: "2016-05-09",
            periodReturn: 0.0000939775661978357,
            startDate: "2016-05-06",
            __typename: "SinglePeriodPerformance"
          },
          {
            cumulativeReturn: 0.012901942894389284,
            endDate: "2016-05-10",
            periodReturn: 0.0010693079476569297,
            startDate: "2016-05-09",
            __typename: "SinglePeriodPerformance"
          },
          {
            cumulativeReturn: 0.01405194001782717,
            endDate: "2016-05-11",
            periodReturn: 0.0011353489165512266,
            startDate: "2016-05-10",
            __typename: "SinglePeriodPerformance"
          },
          {
            cumulativeReturn: 0.015121886028154119,
            endDate: "2016-05-12",
            periodReturn: 0.001055119533924641,
            startDate: "2016-05-11",
            __typename: "SinglePeriodPerformance"
          },
          {
            cumulativeReturn: 0.015565046916235614,
            endDate: "2016-05-13",
            periodReturn: 0.0004365592882795319,
            startDate: "2016-05-12",
            __typename: "SinglePeriodPerformance"
          },
          {
            cumulativeReturn: 0.016494445065432295,
            endDate: "2016-05-16",
            periodReturn: 0.0009151537383239661,
            startDate: "2016-05-13",
            __typename: "SinglePeriodPerformance"
          },
          {
            cumulativeReturn: 0.016996378026591596,
            endDate: "2016-05-17",
            periodReturn: 0.0004937881988396327,
            startDate: "2016-05-16",
            __typename: "SinglePeriodPerformance"
          },
          {
            cumulativeReturn: 0.016513446735405557,
            endDate: "2016-05-18",
            periodReturn: -0.0004748603845799146,
            startDate: "2016-05-17",
            __typename: "SinglePeriodPerformance"
          },
          {
            cumulativeReturn: 0.014182946297262022,
            endDate: "2016-05-19",
            periodReturn: -0.0022926410325687326,
            startDate: "2016-05-18",
            __typename: "SinglePeriodPerformance"
          },
          {
            cumulativeReturn: 0.015629255856681956,
            endDate: "2016-05-20",
            periodReturn: 0.001426083493811848,
            startDate: "2016-05-19",
            __typename: "SinglePeriodPerformance"
          },
          {
            cumulativeReturn: 0.016053629107548817,
            endDate: "2016-05-23",
            periodReturn: 0.00041784268070220345,
            startDate: "2016-05-20",
            __typename: "SinglePeriodPerformance"
          },
          {
            cumulativeReturn: 0.017470739354088938,
            endDate: "2016-05-24",
            periodReturn: 0.0013947199300738816,
            startDate: "2016-05-23",
            __typename: "SinglePeriodPerformance"
          },
          {
            cumulativeReturn: 0.018924474659658408,
            endDate: "2016-05-25",
            periodReturn: 0.001428773574847171,
            startDate: "2016-05-24",
            __typename: "SinglePeriodPerformance"
          },
          {
            cumulativeReturn: 0.019647883400840227,
            endDate: "2016-05-26",
            periodReturn: 0.0007099728774534379,
            startDate: "2016-05-25",
            __typename: "SinglePeriodPerformance"
          },
          {
            cumulativeReturn: 0.019850871795421554,
            endDate: "2016-05-27",
            periodReturn: 0.00019907695380525227,
            startDate: "2016-05-26",
            __typename: "SinglePeriodPerformance"
          },
          {
            cumulativeReturn: 0.019850871795421554,
            endDate: "2016-05-30",
            periodReturn: 0,
            startDate: "2016-05-27",
            __typename: "SinglePeriodPerformance"
          },
          {
            cumulativeReturn: 0.020424766665518845,
            endDate: "2016-05-31",
            periodReturn: 0.0005627243021197312,
            startDate: "2016-05-30",
            __typename: "SinglePeriodPerformance"
          },
          {
            cumulativeReturn: 0.019984934923902742,
            endDate: "2016-06-01",
            periodReturn: -0.0004310280933825278,
            startDate: "2016-05-31",
            __typename: "SinglePeriodPerformance"
          },
          {
            cumulativeReturn: 0.020981756731372814,
            endDate: "2016-06-02",
            periodReturn: 0.0009772907161069687,
            startDate: "2016-06-01",
            __typename: "SinglePeriodPerformance"
          },
          {
            cumulativeReturn: 0.023503715777682066,
            endDate: "2016-06-03",
            periodReturn: 0.0024701313512036816,
            startDate: "2016-06-02",
            __typename: "SinglePeriodPerformance"
          },
          {
            cumulativeReturn: 0.02547503645815219,
            endDate: "2016-06-06",
            periodReturn: 0.0019260513177249798,
            startDate: "2016-06-03",
            __typename: "SinglePeriodPerformance"
          },
          {
            cumulativeReturn: 0.027844836171252885,
            endDate: "2016-06-07",
            periodReturn: 0.002310928719713872,
            startDate: "2016-06-06",
            __typename: "SinglePeriodPerformance"
          },
          {
            cumulativeReturn: 0.02972929287329351,
            endDate: "2016-06-08",
            periodReturn: 0.0018334058174192197,
            startDate: "2016-06-07",
            __typename: "SinglePeriodPerformance"
          },
          {
            cumulativeReturn: 0.029542320186866977,
            endDate: "2016-06-09",
            periodReturn: -0.00018157460190801756,
            startDate: "2016-06-08",
            __typename: "SinglePeriodPerformance"
          },
          {
            cumulativeReturn: 0.02830316208768524,
            endDate: "2016-06-10",
            periodReturn: -0.0012036009349832288,
            startDate: "2016-06-09",
            __typename: "SinglePeriodPerformance"
          },
          {
            cumulativeReturn: 0.027150196453367137,
            endDate: "2016-06-13",
            periodReturn: -0.0011212312446626158,
            startDate: "2016-06-10",
            __typename: "SinglePeriodPerformance"
          },
          {
            cumulativeReturn: 0.02386615917002266,
            endDate: "2016-06-14",
            periodReturn: -0.0031972318115538003,
            startDate: "2016-06-13",
            __typename: "SinglePeriodPerformance"
          },
          {
            cumulativeReturn: 0.024548115611355836,
            endDate: "2016-06-15",
            periodReturn: 0.0006660601439215577,
            startDate: "2016-06-14",
            __typename: "SinglePeriodPerformance"
          },
          {
            cumulativeReturn: 0.02243115784726535,
            endDate: "2016-06-16",
            periodReturn: -0.0020662355743315264,
            startDate: "2016-06-15",
            __typename: "SinglePeriodPerformance"
          },
          {
            cumulativeReturn: 0.023834960132186334,
            endDate: "2016-06-17",
            periodReturn: 0.0013730042107448115,
            startDate: "2016-06-16",
            __typename: "SinglePeriodPerformance"
          },
          {
            cumulativeReturn: 0.027659093914597088,
            endDate: "2016-06-20",
            periodReturn: 0.003735107640705105,
            startDate: "2016-06-17",
            __typename: "SinglePeriodPerformance"
          },
          {
            cumulativeReturn: 0.02775425325437242,
            endDate: "2016-06-21",
            periodReturn: 0.00009259815860988358,
            startDate: "2016-06-20",
            __typename: "SinglePeriodPerformance"
          },
          {
            cumulativeReturn: 0.02920708382064663,
            endDate: "2016-06-22",
            periodReturn: 0.0014135972307328453,
            startDate: "2016-06-21",
            __typename: "SinglePeriodPerformance"
          },
          {
            cumulativeReturn: 0.0316377109567576,
            endDate: "2016-06-23",
            periodReturn: 0.0023616502201753604,
            startDate: "2016-06-22",
            __typename: "SinglePeriodPerformance"
          },
          {
            cumulativeReturn: 0.02607695565069834,
            endDate: "2016-06-24",
            periodReturn: -0.005390221050471366,
            startDate: "2016-06-23",
            __typename: "SinglePeriodPerformance"
          },
          {
            cumulativeReturn: 0.022923446572945982,
            endDate: "2016-06-27",
            periodReturn: -0.00307336507304416,
            startDate: "2016-06-24",
            __typename: "SinglePeriodPerformance"
          },
          {
            cumulativeReturn: 0.0248921873347836,
            endDate: "2016-06-28",
            periodReturn: 0.0019246217969030267,
            startDate: "2016-06-27",
            __typename: "SinglePeriodPerformance"
          },
          {
            cumulativeReturn: 0.029409266044895688,
            endDate: "2016-06-29",
            periodReturn: 0.004407369639394679,
            startDate: "2016-06-28",
            __typename: "SinglePeriodPerformance"
          },
          {
            cumulativeReturn: 0.031240182866462574,
            endDate: "2016-06-30",
            periodReturn: 0.0017786092295454029,
            startDate: "2016-06-29",
            __typename: "SinglePeriodPerformance"
          },
          {
            cumulativeReturn: 0.03376211755084113,
            endDate: "2016-07-01",
            periodReturn: 0.002445535701846368,
            startDate: "2016-06-30",
            __typename: "SinglePeriodPerformance"
          },
          {
            cumulativeReturn: 0.03376211755084113,
            endDate: "2016-07-04",
            periodReturn: 0,
            startDate: "2016-07-01",
            __typename: "SinglePeriodPerformance"
          },
          {
            cumulativeReturn: 0.03477590009320419,
            endDate: "2016-07-05",
            periodReturn: 0.0009806729470460131,
            startDate: "2016-07-04",
            __typename: "SinglePeriodPerformance"
          },
          {
            cumulativeReturn: 0.0349739150897308,
            endDate: "2016-07-06",
            periodReturn: 0.00019136027086512727,
            startDate: "2016-07-05",
            __typename: "SinglePeriodPerformance"
          },
          {
            cumulativeReturn: 0.03665768914823042,
            endDate: "2016-07-07",
            periodReturn: 0.0016268758409759682,
            startDate: "2016-07-06",
            __typename: "SinglePeriodPerformance"
          },
          {
            cumulativeReturn: 0.03936994257476045,
            endDate: "2016-07-08",
            periodReturn: 0.002616344290812641,
            startDate: "2016-07-07",
            __typename: "SinglePeriodPerformance"
          },
          {
            cumulativeReturn: 0.042237998562641765,
            endDate: "2016-07-11",
            periodReturn: 0.002759417864996561,
            startDate: "2016-07-08",
            __typename: "SinglePeriodPerformance"
          },
          {
            cumulativeReturn: 0.044874608634335234,
            endDate: "2016-07-12",
            periodReturn: 0.0025297581505661364,
            startDate: "2016-07-11",
            __typename: "SinglePeriodPerformance"
          },
          {
            cumulativeReturn: 0.04516724215214096,
            endDate: "2016-07-13",
            periodReturn: 0.0002800656800227963,
            startDate: "2016-07-12",
            __typename: "SinglePeriodPerformance"
          },
          {
            cumulativeReturn: 0.04603239980933238,
            endDate: "2016-07-14",
            periodReturn: 0.0008277695877743167,
            startDate: "2016-07-13",
            __typename: "SinglePeriodPerformance"
          },
          {
            cumulativeReturn: 0.04644115432629636,
            endDate: "2016-07-15",
            periodReturn: 0.0003907665929263037,
            startDate: "2016-07-14",
            __typename: "SinglePeriodPerformance"
          },
          {
            cumulativeReturn: 0.046574557848659826,
            endDate: "2016-07-18",
            periodReturn: 0.00012748306181565225,
            startDate: "2016-07-15",
            __typename: "SinglePeriodPerformance"
          },
          {
            cumulativeReturn: 0.0470836454086756,
            endDate: "2016-07-19",
            periodReturn: 0.00048643219558313955,
            startDate: "2016-07-18",
            __typename: "SinglePeriodPerformance"
          },
          {
            cumulativeReturn: 0.047586094205238405,
            endDate: "2016-07-20",
            periodReturn: 0.00047985545258568026,
            startDate: "2016-07-19",
            __typename: "SinglePeriodPerformance"
          },
          {
            cumulativeReturn: 0.04746723738665737,
            endDate: "2016-07-21",
            periodReturn: -0.00011345780479388574,
            startDate: "2016-07-20",
            __typename: "SinglePeriodPerformance"
          },
          {
            cumulativeReturn: 0.04863876518670729,
            endDate: "2016-07-22",
            periodReturn: 0.0011184386090898459,
            startDate: "2016-07-21",
            __typename: "SinglePeriodPerformance"
          },
          {
            cumulativeReturn: 0.048745079072022524,
            endDate: "2016-07-25",
            periodReturn: 0.00010138275337964361,
            startDate: "2016-07-22",
            __typename: "SinglePeriodPerformance"
          },
          {
            cumulativeReturn: 0.0474564083635729,
            endDate: "2016-07-26",
            periodReturn: -0.0012287740216048197,
            startDate: "2016-07-25",
            __typename: "SinglePeriodPerformance"
          },
          {
            cumulativeReturn: 0.047892981374740184,
            endDate: "2016-07-27",
            periodReturn: 0.00041679348914336025,
            startDate: "2016-07-26",
            __typename: "SinglePeriodPerformance"
          },
          {
            cumulativeReturn: 0.04821173251986299,
            endDate: "2016-07-28",
            periodReturn: 0.0003041829182831244,
            startDate: "2016-07-27",
            __typename: "SinglePeriodPerformance"
          },
          {
            cumulativeReturn: 0.048280993443502895,
            endDate: "2016-07-29",
            periodReturn: 0.00006607531807846948,
            startDate: "2016-07-28",
            __typename: "SinglePeriodPerformance"
          },
          {
            cumulativeReturn: 0.04818458076812493,
            endDate: "2016-08-01",
            periodReturn: -0.0000919721677499419,
            startDate: "2016-07-29",
            __typename: "SinglePeriodPerformance"
          },
          {
            cumulativeReturn: 0.04715066557178993,
            endDate: "2016-08-02",
            periodReturn: -0.0009863865728471062,
            startDate: "2016-08-01",
            __typename: "SinglePeriodPerformance"
          },
          {
            cumulativeReturn: 0.046607398391269594,
            endDate: "2016-08-03",
            periodReturn: -0.0005188051713873719,
            startDate: "2016-08-02",
            __typename: "SinglePeriodPerformance"
          },
          {
            cumulativeReturn: 0.048956640871519186,
            endDate: "2016-08-04",
            periodReturn: 0.002244626288578312,
            startDate: "2016-08-03",
            __typename: "SinglePeriodPerformance"
          },
          {
            cumulativeReturn: 0.05070172036882048,
            endDate: "2016-08-05",
            periodReturn: 0.0016636335853227528,
            startDate: "2016-08-04",
            __typename: "SinglePeriodPerformance"
          },
          {
            cumulativeReturn: 0.05202993252956123,
            endDate: "2016-08-08",
            periodReturn: 0.001264119145321807,
            startDate: "2016-08-05",
            __typename: "SinglePeriodPerformance"
          },
          {
            cumulativeReturn: 0.05407042754620495,
            endDate: "2016-08-09",
            periodReturn: 0.001939578859450741,
            startDate: "2016-08-08",
            __typename: "SinglePeriodPerformance"
          },
          {
            cumulativeReturn: 0.05473242288044,
            endDate: "2016-08-10",
            periodReturn: 0.0006280370997372606,
            startDate: "2016-08-09",
            __typename: "SinglePeriodPerformance"
          },
          {
            cumulativeReturn: 0.05512592575462372,
            endDate: "2016-08-11",
            periodReturn: 0.0003730831305149133,
            startDate: "2016-08-10",
            __typename: "SinglePeriodPerformance"
          },
          {
            cumulativeReturn: 0.055564708911545635,
            endDate: "2016-08-12",
            periodReturn: 0.00041585856835825257,
            startDate: "2016-08-11",
            __typename: "SinglePeriodPerformance"
          },
          {
            cumulativeReturn: 0.05685820945859743,
            endDate: "2016-08-15",
            periodReturn: 0.0012254109446170774,
            startDate: "2016-08-12",
            __typename: "SinglePeriodPerformance"
          },
          {
            cumulativeReturn: 0.0578172019782921,
            endDate: "2016-08-16",
            periodReturn: 0.0009073994137642717,
            startDate: "2016-08-15",
            __typename: "SinglePeriodPerformance"
          },
          {
            cumulativeReturn: 0.057762452241245876,
            endDate: "2016-08-17",
            periodReturn: -0.00005175727615681947,
            startDate: "2016-08-16",
            __typename: "SinglePeriodPerformance"
          },
          {
            cumulativeReturn: 0.05844466384522673,
            endDate: "2016-08-18",
            periodReturn: 0.0006449572893568048,
            startDate: "2016-08-17",
            __typename: "SinglePeriodPerformance"
          },
          {
            cumulativeReturn: 0.05865153187726668,
            endDate: "2016-08-19",
            periodReturn: 0.00019544529733690432,
            startDate: "2016-08-18",
            __typename: "SinglePeriodPerformance"
          },
          {
            cumulativeReturn: 0.05874695396825369,
            endDate: "2016-08-22",
            periodReturn: 0.00009013550551230057,
            startDate: "2016-08-19",
            __typename: "SinglePeriodPerformance"
          },
          {
            cumulativeReturn: 0.05956115783887883,
            endDate: "2016-08-23",
            periodReturn: 0.000769025939175913,
            startDate: "2016-08-22",
            __typename: "SinglePeriodPerformance"
          },
          {
            cumulativeReturn: 0.05924682806717785,
            endDate: "2016-08-24",
            periodReturn: -0.00029666033845754955,
            startDate: "2016-08-23",
            __typename: "SinglePeriodPerformance"
          },
          {
            cumulativeReturn: 0.05948771617234638,
            endDate: "2016-08-25",
            periodReturn: 0.00022741451641440842,
            startDate: "2016-08-24",
            __typename: "SinglePeriodPerformance"
          },
          {
            cumulativeReturn: 0.060118656380020896,
            endDate: "2016-08-26",
            periodReturn: 0.0005955144151684728,
            startDate: "2016-08-25",
            __typename: "SinglePeriodPerformance"
          },
          {
            cumulativeReturn: 0.06060431603777072,
            endDate: "2016-08-29",
            periodReturn: 0.0004581182066998478,
            startDate: "2016-08-26",
            __typename: "SinglePeriodPerformance"
          },
          {
            cumulativeReturn: 0.061096189610410745,
            endDate: "2016-08-30",
            periodReturn: 0.0004637672741870915,
            startDate: "2016-08-29",
            __typename: "SinglePeriodPerformance"
          },
          {
            cumulativeReturn: 0.06036785401558187,
            endDate: "2016-08-31",
            periodReturn: -0.0006863992180541381,
            startDate: "2016-08-30",
            __typename: "SinglePeriodPerformance"
          },
          {
            cumulativeReturn: 0.059829829746902874,
            endDate: "2016-09-01",
            periodReturn: -0.0005073939827971446,
            startDate: "2016-08-31",
            __typename: "SinglePeriodPerformance"
          },
          {
            cumulativeReturn: 0.06109138089423105,
            endDate: "2016-09-02",
            periodReturn: 0.0011903336855779818,
            startDate: "2016-09-01",
            __typename: "SinglePeriodPerformance"
          },
          {
            cumulativeReturn: 0.06109138089423105,
            endDate: "2016-09-05",
            periodReturn: 0,
            startDate: "2016-09-02",
            __typename: "SinglePeriodPerformance"
          },
          {
            cumulativeReturn: 0.06280006338935196,
            endDate: "2016-09-06",
            periodReturn: 0.001610306638888116,
            startDate: "2016-09-05",
            __typename: "SinglePeriodPerformance"
          },
          {
            cumulativeReturn: 0.06420516612941363,
            endDate: "2016-09-07",
            periodReturn: 0.0013220762667070251,
            startDate: "2016-09-06",
            __typename: "SinglePeriodPerformance"
          },
          {
            cumulativeReturn: 0.06471865157173506,
            endDate: "2016-09-08",
            periodReturn: 0.00048250606054550075,
            startDate: "2016-09-07",
            __typename: "SinglePeriodPerformance"
          },
          {
            cumulativeReturn: 0.06298830270018962,
            endDate: "2016-09-09",
            periodReturn: -0.0016251700568888717,
            startDate: "2016-09-08",
            __typename: "SinglePeriodPerformance"
          },
          {
            cumulativeReturn: 0.061804591209548176,
            endDate: "2016-09-12",
            periodReturn: -0.0011135696297265465,
            startDate: "2016-09-09",
            __typename: "SinglePeriodPerformance"
          },
          {
            cumulativeReturn: 0.06041685682199738,
            endDate: "2016-09-13",
            periodReturn: -0.0013069583603608275,
            startDate: "2016-09-12",
            __typename: "SinglePeriodPerformance"
          },
          {
            cumulativeReturn: 0.06018914550705956,
            endDate: "2016-09-14",
            periodReturn: -0.0002147375472889343,
            startDate: "2016-09-13",
            __typename: "SinglePeriodPerformance"
          },
          {
            cumulativeReturn: 0.06011274404811617,
            endDate: "2016-09-15",
            periodReturn: -0.00007206398902228087,
            startDate: "2016-09-14",
            __typename: "SinglePeriodPerformance"
          },
          {
            cumulativeReturn: 0.05979964890923117,
            endDate: "2016-09-16",
            periodReturn: -0.00029534135934378635,
            startDate: "2016-09-15",
            __typename: "SinglePeriodPerformance"
          },
          {
            cumulativeReturn: 0.06031184672086187,
            endDate: "2016-09-19",
            periodReturn: 0.0004832968308280622,
            startDate: "2016-09-16",
            __typename: "SinglePeriodPerformance"
          },
          {
            cumulativeReturn: 0.06135373566166735,
            endDate: "2016-09-20",
            periodReturn: 0.0009826250117148116,
            startDate: "2016-09-19",
            __typename: "SinglePeriodPerformance"
          },
          {
            cumulativeReturn: 0.06282021348622413,
            endDate: "2016-09-21",
            periodReturn: 0.0013817050576851683,
            startDate: "2016-09-20",
            __typename: "SinglePeriodPerformance"
          },
          {
            cumulativeReturn: 0.0663239862968048,
            endDate: "2016-09-22",
            periodReturn: 0.0032966749842740064,
            startDate: "2016-09-21",
            __typename: "SinglePeriodPerformance"
          },
          {
            cumulativeReturn: 0.06689927348794589,
            endDate: "2016-09-23",
            periodReturn: 0.00053950506462778,
            startDate: "2016-09-22",
            __typename: "SinglePeriodPerformance"
          },
          {
            cumulativeReturn: 0.06609941879441306,
            endDate: "2016-09-26",
            periodReturn: -0.0007497002888734677,
            startDate: "2016-09-23",
            __typename: "SinglePeriodPerformance"
          },
          {
            cumulativeReturn: 0.06624796581436954,
            endDate: "2016-09-27",
            periodReturn: 0.00013933692987525418,
            startDate: "2016-09-26",
            __typename: "SinglePeriodPerformance"
          },
          {
            cumulativeReturn: 0.06714792399054259,
            endDate: "2016-09-28",
            periodReturn: 0.0008440421037386784,
            startDate: "2016-09-27",
            __typename: "SinglePeriodPerformance"
          },
          {
            cumulativeReturn: 0.0682427103374843,
            endDate: "2016-09-29",
            periodReturn: 0.0010258993362868576,
            startDate: "2016-09-28",
            __typename: "SinglePeriodPerformance"
          },
          {
            cumulativeReturn: 0.06907964629217056,
            endDate: "2016-09-30",
            periodReturn: 0.000783469848740663,
            startDate: "2016-09-29",
            __typename: "SinglePeriodPerformance"
          },
          {
            cumulativeReturn: 0.06993142316182221,
            endDate: "2016-10-03",
            periodReturn: 0.0007967384587349357,
            startDate: "2016-09-30",
            __typename: "SinglePeriodPerformance"
          },
          {
            cumulativeReturn: 0.07056145027156768,
            endDate: "2016-10-04",
            periodReturn: 0.0005888481225120844,
            startDate: "2016-10-03",
            __typename: "SinglePeriodPerformance"
          },
          {
            cumulativeReturn: 0.07119936376449454,
            endDate: "2016-10-05",
            periodReturn: 0.0005958681706361263,
            startDate: "2016-10-04",
            __typename: "SinglePeriodPerformance"
          },
          {
            cumulativeReturn: 0.07145759884512626,
            endDate: "2016-10-06",
            periodReturn: 0.0002410709802180426,
            startDate: "2016-10-05",
            __typename: "SinglePeriodPerformance"
          },
          {
            cumulativeReturn: 0.07174593329391854,
            endDate: "2016-10-07",
            periodReturn: 0.0002691048615483404,
            startDate: "2016-10-06",
            __typename: "SinglePeriodPerformance"
          },
          {
            cumulativeReturn: 0.0721018311877264,
            endDate: "2016-10-10",
            periodReturn: 0.00033207300606590126,
            startDate: "2016-10-07",
            __typename: "SinglePeriodPerformance"
          },
          {
            cumulativeReturn: 0.07179613146568053,
            endDate: "2016-10-11",
            periodReturn: -0.0002851405651525481,
            startDate: "2016-10-10",
            __typename: "SinglePeriodPerformance"
          },
          {
            cumulativeReturn: 0.07164810470873184,
            endDate: "2016-10-12",
            periodReturn: -0.00013811092669853544,
            startDate: "2016-10-11",
            __typename: "SinglePeriodPerformance"
          },
          {
            cumulativeReturn: 0.0710306227570483,
            endDate: "2016-10-13",
            periodReturn: -0.000576198426489369,
            startDate: "2016-10-12",
            __typename: "SinglePeriodPerformance"
          },
          {
            cumulativeReturn: 0.07138535706167293,
            endDate: "2016-10-14",
            periodReturn: 0.00033120836798420164,
            startDate: "2016-10-13",
            __typename: "SinglePeriodPerformance"
          },
          {
            cumulativeReturn: 0.07108538060923797,
            endDate: "2016-10-17",
            periodReturn: -0.0002799893151961283,
            startDate: "2016-10-14",
            __typename: "SinglePeriodPerformance"
          },
          {
            cumulativeReturn: 0.07128555339918097,
            endDate: "2016-10-18",
            periodReturn: 0.00018688779957883422,
            startDate: "2016-10-17",
            __typename: "SinglePeriodPerformance"
          },
          {
            cumulativeReturn: 0.07249089213050364,
            endDate: "2016-10-19",
            periodReturn: 0.0011251330025857107,
            startDate: "2016-10-18",
            __typename: "SinglePeriodPerformance"
          },
          {
            cumulativeReturn: 0.07347260224621666,
            endDate: "2016-10-20",
            periodReturn: 0.0009153552006049142,
            startDate: "2016-10-19",
            __typename: "SinglePeriodPerformance"
          },
          {
            cumulativeReturn: 0.07390664531584923,
            endDate: "2016-10-21",
            periodReturn: 0.00040433548907018764,
            startDate: "2016-10-20",
            __typename: "SinglePeriodPerformance"
          },
          {
            cumulativeReturn: 0.0751931480550363,
            endDate: "2016-10-24",
            periodReturn: 0.0011979651534874906,
            startDate: "2016-10-21",
            __typename: "SinglePeriodPerformance"
          },
          {
            cumulativeReturn: 0.07543451519528577,
            endDate: "2016-10-25",
            periodReturn: 0.00022448723811729337,
            startDate: "2016-10-24",
            __typename: "SinglePeriodPerformance"
          },
          {
            cumulativeReturn: 0.07395830185857966,
            endDate: "2016-10-26",
            periodReturn: -0.0013726668763630791,
            startDate: "2016-10-25",
            __typename: "SinglePeriodPerformance"
          },
          {
            cumulativeReturn: 0.07302731375325133,
            endDate: "2016-10-27",
            periodReturn: -0.0008668754678064106,
            startDate: "2016-10-26",
            __typename: "SinglePeriodPerformance"
          },
          {
            cumulativeReturn: 0.07231895590570314,
            endDate: "2016-10-28",
            periodReturn: -0.0006601489435253955,
            startDate: "2016-10-27",
            __typename: "SinglePeriodPerformance"
          },
          {
            cumulativeReturn: 0.0717499802383128,
            endDate: "2016-10-31",
            periodReturn: -0.0005306030115916114,
            startDate: "2016-10-28",
            __typename: "SinglePeriodPerformance"
          },
          {
            cumulativeReturn: 0.07010365652388129,
            endDate: "2016-11-01",
            periodReturn: -0.0015361079960695468,
            startDate: "2016-10-31",
            __typename: "SinglePeriodPerformance"
          },
          {
            cumulativeReturn: 0.06853875222923311,
            endDate: "2016-11-02",
            periodReturn: -0.001462385709186033,
            startDate: "2016-11-01",
            __typename: "SinglePeriodPerformance"
          },
          {
            cumulativeReturn: 0.06840848645060182,
            endDate: "2016-11-03",
            periodReturn: -0.00012191020527753845,
            startDate: "2016-11-02",
            __typename: "SinglePeriodPerformance"
          },
          {
            cumulativeReturn: 0.06790185209122845,
            endDate: "2016-11-04",
            periodReturn: -0.00047419537171268576,
            startDate: "2016-11-03",
            __typename: "SinglePeriodPerformance"
          },
          {
            cumulativeReturn: 0.06975185634935666,
            endDate: "2016-11-07",
            periodReturn: 0.001732372927816606,
            startDate: "2016-11-04",
            __typename: "SinglePeriodPerformance"
          },
          {
            cumulativeReturn: 0.07019208573793012,
            endDate: "2016-11-08",
            periodReturn: 0.00041152477180625397,
            startDate: "2016-11-07",
            __typename: "SinglePeriodPerformance"
          },
          {
            cumulativeReturn: 0.0679750036045561,
            endDate: "2016-11-09",
            periodReturn: -0.00207166747252225,
            startDate: "2016-11-08",
            __typename: "SinglePeriodPerformance"
          },
          {
            cumulativeReturn: 0.06528765770852041,
            endDate: "2016-11-10",
            periodReturn: -0.002516300369358515,
            startDate: "2016-11-09",
            __typename: "SinglePeriodPerformance"
          },
          {
            cumulativeReturn: 0.06421556790933036,
            endDate: "2016-11-11",
            periodReturn: -0.0010063852626398654,
            startDate: "2016-11-10",
            __typename: "SinglePeriodPerformance"
          },
          {
            cumulativeReturn: 0.057753584770292576,
            endDate: "2016-11-14",
            periodReturn: -0.006072062215489444,
            startDate: "2016-11-11",
            __typename: "SinglePeriodPerformance"
          },
          {
            cumulativeReturn: 0.06100477902740287,
            endDate: "2016-11-15",
            periodReturn: 0.0030736783159343744,
            startDate: "2016-11-14",
            __typename: "SinglePeriodPerformance"
          },
          {
            cumulativeReturn: 0.06123991743680568,
            endDate: "2016-11-16",
            periodReturn: 0.0002216186147798056,
            startDate: "2016-11-15",
            __typename: "SinglePeriodPerformance"
          },
          {
            cumulativeReturn: 0.06224335364542943,
            endDate: "2016-11-17",
            periodReturn: 0.0009455319123758371,
            startDate: "2016-11-16",
            __typename: "SinglePeriodPerformance"
          },
          {
            cumulativeReturn: 0.06128445453421394,
            endDate: "2016-11-18",
            periodReturn: -0.0009027113306238265,
            startDate: "2016-11-17",
            __typename: "SinglePeriodPerformance"
          },
          {
            cumulativeReturn: 0.06224853554869947,
            endDate: "2016-11-21",
            periodReturn: 0.0009084096260589391,
            startDate: "2016-11-18",
            __typename: "SinglePeriodPerformance"
          },
          {
            cumulativeReturn: 0.06341585816802064,
            endDate: "2016-11-22",
            periodReturn: 0.001098916666162536,
            startDate: "2016-11-21",
            __typename: "SinglePeriodPerformance"
          },
          {
            cumulativeReturn: 0.06323274857917083,
            endDate: "2016-11-23",
            periodReturn: -0.00017219001150237586,
            startDate: "2016-11-22",
            __typename: "SinglePeriodPerformance"
          },
          {
            cumulativeReturn: 0.06323274857917083,
            endDate: "2016-11-24",
            periodReturn: 0,
            startDate: "2016-11-23",
            __typename: "SinglePeriodPerformance"
          },
          {
            cumulativeReturn: 0.06331109856122508,
            endDate: "2016-11-25",
            periodReturn: 0.00007369033935325931,
            startDate: "2016-11-24",
            __typename: "SinglePeriodPerformance"
          },
          {
            cumulativeReturn: 0.06464357757532024,
            endDate: "2016-11-28",
            periodReturn: 0.0012531412640178574,
            startDate: "2016-11-25",
            __typename: "SinglePeriodPerformance"
          },
          {
            cumulativeReturn: 0.0645028788653692,
            endDate: "2016-11-29",
            periodReturn: -0.00013215569314899253,
            startDate: "2016-11-28",
            __typename: "SinglePeriodPerformance"
          },
          {
            cumulativeReturn: 0.06582253217564671,
            endDate: "2016-11-30",
            periodReturn: 0.0012396897523508997,
            startDate: "2016-11-29",
            __typename: "SinglePeriodPerformance"
          },
          {
            cumulativeReturn: 0.06519928524987195,
            endDate: "2016-12-01",
            periodReturn: -0.0005847567554257677,
            startDate: "2016-11-30",
            __typename: "SinglePeriodPerformance"
          },
          {
            cumulativeReturn: 0.06621233015203787,
            endDate: "2016-12-02",
            periodReturn: 0.0009510379101769439,
            startDate: "2016-12-01",
            __typename: "SinglePeriodPerformance"
          },
          {
            cumulativeReturn: 0.0677678257306944,
            endDate: "2016-12-05",
            periodReturn: 0.0014588985089252632,
            startDate: "2016-12-02",
            __typename: "SinglePeriodPerformance"
          },
          {
            cumulativeReturn: 0.06972538922033067,
            endDate: "2016-12-06",
            periodReturn: 0.0018333231648898693,
            startDate: "2016-12-05",
            __typename: "SinglePeriodPerformance"
          },
          {
            cumulativeReturn: 0.07234604160431957,
            endDate: "2016-12-07",
            periodReturn: 0.002449836575253219,
            startDate: "2016-12-06",
            __typename: "SinglePeriodPerformance"
          },
          {
            cumulativeReturn: 0.07330946775701053,
            endDate: "2016-12-08",
            periodReturn: 0.0008984284133222787,
            startDate: "2016-12-07",
            __typename: "SinglePeriodPerformance"
          },
          {
            cumulativeReturn: 0.0741630360263188,
            endDate: "2016-12-09",
            periodReturn: 0.0007952676231319837,
            startDate: "2016-12-08",
            __typename: "SinglePeriodPerformance"
          },
          {
            cumulativeReturn: 0.0748127743886442,
            endDate: "2016-12-12",
            periodReturn: 0.0006048787200209153,
            startDate: "2016-12-09",
            __typename: "SinglePeriodPerformance"
          },
          {
            cumulativeReturn: 0.07564611049568182,
            endDate: "2016-12-13",
            periodReturn: 0.0007753314129632779,
            startDate: "2016-12-12",
            __typename: "SinglePeriodPerformance"
          },
          {
            cumulativeReturn: 0.07549894588632089,
            endDate: "2016-12-14",
            periodReturn: -0.0001368150806524115,
            startDate: "2016-12-13",
            __typename: "SinglePeriodPerformance"
          },
          {
            cumulativeReturn: 0.07314359604022314,
            endDate: "2016-12-15",
            periodReturn: -0.002190006652360612,
            startDate: "2016-12-14",
            __typename: "SinglePeriodPerformance"
          },
          {
            cumulativeReturn: 0.07348220513580617,
            endDate: "2016-12-16",
            periodReturn: 0.0003155300901318009,
            startDate: "2016-12-15",
            __typename: "SinglePeriodPerformance"
          },
          {
            cumulativeReturn: 0.07434497124078443,
            endDate: "2016-12-19",
            periodReturn: 0.0008037078778301365,
            startDate: "2016-12-16",
            __typename: "SinglePeriodPerformance"
          },
          {
            cumulativeReturn: 0.07492002183546909,
            endDate: "2016-12-20",
            periodReturn: 0.0005352569333669439,
            startDate: "2016-12-19",
            __typename: "SinglePeriodPerformance"
          },
          {
            cumulativeReturn: 0.07577337919723637,
            endDate: "2016-12-21",
            periodReturn: 0.0007938798649504522,
            startDate: "2016-12-20",
            __typename: "SinglePeriodPerformance"
          },
          {
            cumulativeReturn: 0.0763409515326241,
            endDate: "2016-12-22",
            periodReturn: 0.0005275947019728282,
            startDate: "2016-12-21",
            __typename: "SinglePeriodPerformance"
          },
          {
            cumulativeReturn: 0.07672671916604168,
            endDate: "2016-12-23",
            periodReturn: 0.00035840653732287773,
            startDate: "2016-12-22",
            __typename: "SinglePeriodPerformance"
          },
          {
            cumulativeReturn: 0.07672671916604168,
            endDate: "2016-12-26",
            periodReturn: 0,
            startDate: "2016-12-23",
            __typename: "SinglePeriodPerformance"
          },
          {
            cumulativeReturn: 0.07751353473420108,
            endDate: "2016-12-27",
            periodReturn: 0.0007307476949852427,
            startDate: "2016-12-26",
            __typename: "SinglePeriodPerformance"
          },
          {
            cumulativeReturn: 0.07674614012284131,
            endDate: "2016-12-28",
            periodReturn: -0.0007121902292848148,
            startDate: "2016-12-27",
            __typename: "SinglePeriodPerformance"
          },
          {
            cumulativeReturn: 0.07753218992839783,
            endDate: "2016-12-29",
            periodReturn: 0.0007300233325812189,
            startDate: "2016-12-28",
            __typename: "SinglePeriodPerformance"
          },
          {
            cumulativeReturn: 0.07999471985810014,
            endDate: "2016-12-30",
            periodReturn: 0.0022853423338246655,
            startDate: "2016-12-29",
            __typename: "SinglePeriodPerformance"
          },
          {
            cumulativeReturn: 0.07999471985810014,
            endDate: "2017-01-02",
            periodReturn: 0,
            startDate: "2016-12-30",
            __typename: "SinglePeriodPerformance"
          },
          {
            cumulativeReturn: 0.08135219186737253,
            endDate: "2017-01-03",
            periodReturn: 0.0012569246722342114,
            startDate: "2017-01-02",
            __typename: "SinglePeriodPerformance"
          },
          {
            cumulativeReturn: 0.08312207052540654,
            endDate: "2017-01-04",
            periodReturn: 0.0016367273043370193,
            startDate: "2017-01-03",
            __typename: "SinglePeriodPerformance"
          },
          {
            cumulativeReturn: 0.08523968185300457,
            endDate: "2017-01-05",
            periodReturn: 0.0019550994160525766,
            startDate: "2017-01-04",
            __typename: "SinglePeriodPerformance"
          },
          {
            cumulativeReturn: 0.08600467208735818,
            endDate: "2017-01-06",
            periodReturn: 0.000704904406966827,
            startDate: "2017-01-05",
            __typename: "SinglePeriodPerformance"
          },
          {
            cumulativeReturn: 0.08581729072883881,
            endDate: "2017-01-09",
            periodReturn: -0.00017254194510900358,
            startDate: "2017-01-06",
            __typename: "SinglePeriodPerformance"
          },
          {
            cumulativeReturn: 0.08647480621244785,
            endDate: "2017-01-10",
            periodReturn: 0.0006055489162155845,
            startDate: "2017-01-09",
            __typename: "SinglePeriodPerformance"
          },
          {
            cumulativeReturn: 0.0859353851056337,
            endDate: "2017-01-11",
            periodReturn: -0.0004964874507256765,
            startDate: "2017-01-10",
            __typename: "SinglePeriodPerformance"
          },
          {
            cumulativeReturn: 0.08629122969512415,
            endDate: "2017-01-12",
            periodReturn: 0.0003276848644690012,
            startDate: "2017-01-11",
            __typename: "SinglePeriodPerformance"
          },
          {
            cumulativeReturn: 0.08697426514662654,
            endDate: "2017-01-13",
            periodReturn: 0.0006287774703787413,
            startDate: "2017-01-12",
            __typename: "SinglePeriodPerformance"
          },
          {
            cumulativeReturn: 0.08697426514662654,
            endDate: "2017-01-16",
            periodReturn: 0,
            startDate: "2017-01-13",
            __typename: "SinglePeriodPerformance"
          },
          {
            cumulativeReturn: 0.08827924198478554,
            endDate: "2017-01-17",
            periodReturn: 0.0012005590932577751,
            startDate: "2017-01-16",
            __typename: "SinglePeriodPerformance"
          },
          {
            cumulativeReturn: 0.08788297064666994,
            endDate: "2017-01-18",
            periodReturn: -0.0003641265245424784,
            startDate: "2017-01-17",
            __typename: "SinglePeriodPerformance"
          },
          {
            cumulativeReturn: 0.0871853774062632,
            endDate: "2017-01-19",
            periodReturn: -0.0006412392318192625,
            startDate: "2017-01-18",
            __typename: "SinglePeriodPerformance"
          },
          {
            cumulativeReturn: 0.08755016153522588,
            endDate: "2017-01-20",
            periodReturn: 0.00033553075358038186,
            startDate: "2017-01-19",
            __typename: "SinglePeriodPerformance"
          },
          {
            cumulativeReturn: 0.0879200043860251,
            endDate: "2017-01-23",
            periodReturn: 0.0003400696941438215,
            startDate: "2017-01-20",
            __typename: "SinglePeriodPerformance"
          },
          {
            cumulativeReturn: 0.08821803880038726,
            endDate: "2017-01-24",
            periodReturn: 0.00027394883186317994,
            startDate: "2017-01-23",
            __typename: "SinglePeriodPerformance"
          },
          {
            cumulativeReturn: 0.08884796467347078,
            endDate: "2017-01-25",
            periodReturn: 0.0005788599808342304,
            startDate: "2017-01-24",
            __typename: "SinglePeriodPerformance"
          },
          {
            cumulativeReturn: 0.08936423909494273,
            endDate: "2017-01-26",
            periodReturn: 0.0004741473908406114,
            startDate: "2017-01-25",
            __typename: "SinglePeriodPerformance"
          },
          {
            cumulativeReturn: 0.09044610115841234,
            endDate: "2017-01-27",
            periodReturn: 0.0009931132532573306,
            startDate: "2017-01-26",
            __typename: "SinglePeriodPerformance"
          },
          {
            cumulativeReturn: 0.09054841359255295,
            endDate: "2017-01-30",
            periodReturn: 0.00009382621849146299,
            startDate: "2017-01-27",
            __typename: "SinglePeriodPerformance"
          },
          {
            cumulativeReturn: 0.09025524004496899,
            endDate: "2017-01-31",
            periodReturn: -0.00026883129985788996,
            startDate: "2017-01-30",
            __typename: "SinglePeriodPerformance"
          },
          {
            cumulativeReturn: 0.09054521478227162,
            endDate: "2017-02-01",
            periodReturn: 0.0002659695882687032,
            startDate: "2017-01-31",
            __typename: "SinglePeriodPerformance"
          },
          {
            cumulativeReturn: 0.0913872171468455,
            endDate: "2017-02-02",
            periodReturn: 0.0007720930348972002,
            startDate: "2017-02-01",
            __typename: "SinglePeriodPerformance"
          },
          {
            cumulativeReturn: 0.09252815097866973,
            endDate: "2017-02-03",
            periodReturn: 0.00104539783305046,
            startDate: "2017-02-02",
            __typename: "SinglePeriodPerformance"
          },
          {
            cumulativeReturn: 0.09380695651370097,
            endDate: "2017-02-06",
            periodReturn: 0.0011705012213053837,
            startDate: "2017-02-03",
            __typename: "SinglePeriodPerformance"
          },
          {
            cumulativeReturn: 0.09370940490135515,
            endDate: "2017-02-07",
            periodReturn: -0.00008918540128580344,
            startDate: "2017-02-06",
            __typename: "SinglePeriodPerformance"
          },
          {
            cumulativeReturn: 0.09370702963022892,
            endDate: "2017-02-08",
            periodReturn: -0.0000021717570640888277,
            startDate: "2017-02-07",
            __typename: "SinglePeriodPerformance"
          },
          {
            cumulativeReturn: 0.09391625498276501,
            endDate: "2017-02-09",
            periodReturn: 0.00019129926650177966,
            startDate: "2017-02-08",
            __typename: "SinglePeriodPerformance"
          },
          {
            cumulativeReturn: 0.09490927304770769,
            endDate: "2017-02-10",
            periodReturn: 0.0009077642465039189,
            startDate: "2017-02-09",
            __typename: "SinglePeriodPerformance"
          },
          {
            cumulativeReturn: 0.0958918160434139,
            endDate: "2017-02-13",
            periodReturn: 0.0008973738919674597,
            startDate: "2017-02-10",
            __typename: "SinglePeriodPerformance"
          },
          {
            cumulativeReturn: 0.0957939548764617,
            endDate: "2017-02-14",
            periodReturn: -0.00008929820035119521,
            startDate: "2017-02-13",
            __typename: "SinglePeriodPerformance"
          },
          {
            cumulativeReturn: 0.09563602816685268,
            endDate: "2017-02-15",
            periodReturn: -0.00014412080748036317,
            startDate: "2017-02-14",
            __typename: "SinglePeriodPerformance"
          },
          {
            cumulativeReturn: 0.09590312801000844,
            endDate: "2017-02-16",
            periodReturn: 0.0002437851953468625,
            startDate: "2017-02-15",
            __typename: "SinglePeriodPerformance"
          },
          {
            cumulativeReturn: 0.09616746462873516,
            endDate: "2017-02-17",
            periodReturn: 0.00024120436557824963,
            startDate: "2017-02-16",
            __typename: "SinglePeriodPerformance"
          },
          {
            cumulativeReturn: 0.09616746462873516,
            endDate: "2017-02-20",
            periodReturn: 0,
            startDate: "2017-02-17",
            __typename: "SinglePeriodPerformance"
          },
          {
            cumulativeReturn: 0.09767617322632516,
            endDate: "2017-02-21",
            periodReturn: 0.0013763486385731914,
            startDate: "2017-02-20",
            __typename: "SinglePeriodPerformance"
          },
          {
            cumulativeReturn: 0.0987427856253924,
            endDate: "2017-02-22",
            periodReturn: 0.000971700420472968,
            startDate: "2017-02-21",
            __typename: "SinglePeriodPerformance"
          },
          {
            cumulativeReturn: 0.09988849490103413,
            endDate: "2017-02-23",
            periodReturn: 0.0010427456640725193,
            startDate: "2017-02-22",
            __typename: "SinglePeriodPerformance"
          },
          {
            cumulativeReturn: 0.1002439502607737,
            endDate: "2017-02-24",
            periodReturn: 0.00032317399571639476,
            startDate: "2017-02-23",
            __typename: "SinglePeriodPerformance"
          },
          {
            cumulativeReturn: 0.10057633219882178,
            endDate: "2017-02-27",
            periodReturn: 0.0003020984009676171,
            startDate: "2017-02-24",
            __typename: "SinglePeriodPerformance"
          },
          {
            cumulativeReturn: 0.10109346026412958,
            endDate: "2017-02-28",
            periodReturn: 0.00046987023996293494,
            startDate: "2017-02-27",
            __typename: "SinglePeriodPerformance"
          },
          {
            cumulativeReturn: 0.10177867520994854,
            endDate: "2017-03-01",
            periodReturn: 0.0006223040736749089,
            startDate: "2017-02-28",
            __typename: "SinglePeriodPerformance"
          },
          {
            cumulativeReturn: 0.10167149661790797,
            endDate: "2017-03-02",
            periodReturn: -0.00009727778768285533,
            startDate: "2017-03-01",
            __typename: "SinglePeriodPerformance"
          },
          {
            cumulativeReturn: 0.10159739552545588,
            endDate: "2017-03-03",
            periodReturn: -0.00006726242140197585,
            startDate: "2017-03-02",
            __typename: "SinglePeriodPerformance"
          },
          {
            cumulativeReturn: 0.10133824252945578,
            endDate: "2017-03-06",
            periodReturn: -0.00023525200499997304,
            startDate: "2017-03-03",
            __typename: "SinglePeriodPerformance"
          },
          {
            cumulativeReturn: 0.10050787545037698,
            endDate: "2017-03-07",
            periodReturn: -0.0007539619047201747,
            startDate: "2017-03-06",
            __typename: "SinglePeriodPerformance"
          },
          {
            cumulativeReturn: 0.09819921793101427,
            endDate: "2017-03-08",
            periodReturn: -0.0020978109933270884,
            startDate: "2017-03-07",
            __typename: "SinglePeriodPerformance"
          },
          {
            cumulativeReturn: 0.09563970731293914,
            endDate: "2017-03-09",
            periodReturn: -0.0023306432715342875,
            startDate: "2017-03-08",
            __typename: "SinglePeriodPerformance"
          },
          {
            cumulativeReturn: 0.09635591235473195,
            endDate: "2017-03-10",
            periodReturn: 0.0006536866426183113,
            startDate: "2017-03-09",
            __typename: "SinglePeriodPerformance"
          },
          {
            cumulativeReturn: 0.09538586441550923,
            endDate: "2017-03-13",
            periodReturn: -0.0008847929110349626,
            startDate: "2017-03-10",
            __typename: "SinglePeriodPerformance"
          },
          {
            cumulativeReturn: 0.0934963258764685,
            endDate: "2017-03-14",
            periodReturn: -0.0017249981037950777,
            startDate: "2017-03-13",
            __typename: "SinglePeriodPerformance"
          },
          {
            cumulativeReturn: 0.09528847739301849,
            endDate: "2017-03-15",
            periodReturn: 0.0016389186448465534,
            startDate: "2017-03-14",
            __typename: "SinglePeriodPerformance"
          },
          {
            cumulativeReturn: 0.09721549822520781,
            endDate: "2017-03-16",
            periodReturn: 0.001759372870219371,
            startDate: "2017-03-15",
            __typename: "SinglePeriodPerformance"
          },
          {
            cumulativeReturn: 0.09771857432256437,
            endDate: "2017-03-17",
            periodReturn: 0.0004585025440949171,
            startDate: "2017-03-16",
            __typename: "SinglePeriodPerformance"
          },
          {
            cumulativeReturn: 0.09743483224978244,
            endDate: "2017-03-20",
            periodReturn: -0.0002584834395801586,
            startDate: "2017-03-17",
            __typename: "SinglePeriodPerformance"
          },
          {
            cumulativeReturn: 0.09738720531660006,
            endDate: "2017-03-21",
            periodReturn: -0.00004339841581730435,
            startDate: "2017-03-20",
            __typename: "SinglePeriodPerformance"
          },
          {
            cumulativeReturn: 0.09653352400496473,
            endDate: "2017-03-22",
            periodReturn: -0.0007779216920877405,
            startDate: "2017-03-21",
            __typename: "SinglePeriodPerformance"
          },
          {
            cumulativeReturn: 0.09696880119157103,
            endDate: "2017-03-23",
            periodReturn: 0.0003969574819897228,
            startDate: "2017-03-22",
            __typename: "SinglePeriodPerformance"
          },
          {
            cumulativeReturn: 0.09800633278027271,
            endDate: "2017-03-24",
            periodReturn: 0.0009458168614958349,
            startDate: "2017-03-23",
            __typename: "SinglePeriodPerformance"
          },
          {
            cumulativeReturn: 0.09805813957832599,
            endDate: "2017-03-27",
            periodReturn: 0.00004718260405853214,
            startDate: "2017-03-24",
            __typename: "SinglePeriodPerformance"
          },
          {
            cumulativeReturn: 0.09857802470355082,
            endDate: "2017-03-28",
            periodReturn: 0.0004734586507636691,
            startDate: "2017-03-27",
            __typename: "SinglePeriodPerformance"
          },
          {
            cumulativeReturn: 0.09989500123523243,
            endDate: "2017-03-29",
            periodReturn: 0.001198801088376956,
            startDate: "2017-03-28",
            __typename: "SinglePeriodPerformance"
          },
          {
            cumulativeReturn: 0.10124173856880314,
            endDate: "2017-03-30",
            periodReturn: 0.001224423542300199,
            startDate: "2017-03-29",
            __typename: "SinglePeriodPerformance"
          },
          {
            cumulativeReturn: 0.10127570727271906,
            endDate: "2017-03-31",
            periodReturn: 0.00003084581952008444,
            startDate: "2017-03-30",
            __typename: "SinglePeriodPerformance"
          },
          {
            cumulativeReturn: 0.10202733097757832,
            endDate: "2017-04-03",
            periodReturn: 0.0006825027555730455,
            startDate: "2017-03-31",
            __typename: "SinglePeriodPerformance"
          },
          {
            cumulativeReturn: 0.10227051767484663,
            endDate: "2017-04-04",
            periodReturn: 0.00022067211078390477,
            startDate: "2017-04-03",
            __typename: "SinglePeriodPerformance"
          },
          {
            cumulativeReturn: 0.10328056424964904,
            endDate: "2017-04-05",
            periodReturn: 0.0009163327500884863,
            startDate: "2017-04-04",
            __typename: "SinglePeriodPerformance"
          },
          {
            cumulativeReturn: 0.10419976666238795,
            endDate: "2017-04-06",
            periodReturn: 0.0008331538164674393,
            startDate: "2017-04-05",
            __typename: "SinglePeriodPerformance"
          },
          {
            cumulativeReturn: 0.10476345784632723,
            endDate: "2017-04-07",
            periodReturn: 0.0005104974669965622,
            startDate: "2017-04-06",
            __typename: "SinglePeriodPerformance"
          },
          {
            cumulativeReturn: 0.10499805458843947,
            endDate: "2017-04-10",
            periodReturn: 0.0002123502008017758,
            startDate: "2017-04-07",
            __typename: "SinglePeriodPerformance"
          },
          {
            cumulativeReturn: 0.10546555349686737,
            endDate: "2017-04-11",
            periodReturn: 0.0004230766800779878,
            startDate: "2017-04-10",
            __typename: "SinglePeriodPerformance"
          },
          {
            cumulativeReturn: 0.10548884896005828,
            endDate: "2017-04-12",
            periodReturn: 0.000021072988766802115,
            startDate: "2017-04-11",
            __typename: "SinglePeriodPerformance"
          },
          {
            cumulativeReturn: 0.10637839868526622,
            endDate: "2017-04-13",
            periodReturn: 0.0008046663935549619,
            startDate: "2017-04-12",
            __typename: "SinglePeriodPerformance"
          },
          {
            cumulativeReturn: 0.10637839868526622,
            endDate: "2017-04-14",
            periodReturn: 0,
            startDate: "2017-04-13",
            __typename: "SinglePeriodPerformance"
          },
          {
            cumulativeReturn: 0.1067985313784443,
            endDate: "2017-04-17",
            periodReturn: 0.00037973689081184994,
            startDate: "2017-04-14",
            __typename: "SinglePeriodPerformance"
          },
          {
            cumulativeReturn: 0.10694191946731557,
            endDate: "2017-04-18",
            periodReturn: 0.00012955211342110187,
            startDate: "2017-04-17",
            __typename: "SinglePeriodPerformance"
          },
          {
            cumulativeReturn: 0.1071056400125705,
            endDate: "2017-04-19",
            periodReturn: 0.00014790346483020648,
            startDate: "2017-04-18",
            __typename: "SinglePeriodPerformance"
          },
          {
            cumulativeReturn: 0.10726452586019763,
            endDate: "2017-04-20",
            periodReturn: 0.00014351462216859276,
            startDate: "2017-04-19",
            __typename: "SinglePeriodPerformance"
          },
          {
            cumulativeReturn: 0.10788686851217921,
            endDate: "2017-04-21",
            periodReturn: 0.0005620541771607217,
            startDate: "2017-04-20",
            __typename: "SinglePeriodPerformance"
          },
          {
            cumulativeReturn: 0.10912553338184172,
            endDate: "2017-04-24",
            periodReturn: 0.0011180427396219879,
            startDate: "2017-04-21",
            __typename: "SinglePeriodPerformance"
          },
          {
            cumulativeReturn: 0.10980070341470882,
            endDate: "2017-04-25",
            periodReturn: 0.0006087408616484287,
            startDate: "2017-04-24",
            __typename: "SinglePeriodPerformance"
          },
          {
            cumulativeReturn: 0.11058357371444028,
            endDate: "2017-04-26",
            periodReturn: 0.0007054152131303243,
            startDate: "2017-04-25",
            __typename: "SinglePeriodPerformance"
          },
          {
            cumulativeReturn: 0.11062715517992361,
            endDate: "2017-04-27",
            periodReturn: 0.00003924195037155458,
            startDate: "2017-04-26",
            __typename: "SinglePeriodPerformance"
          },
          {
            cumulativeReturn: 0.11140199222591085,
            endDate: "2017-04-28",
            periodReturn: 0.0006976572132001648,
            startDate: "2017-04-27",
            __typename: "SinglePeriodPerformance"
          },
          {
            cumulativeReturn: 0.11146778821092918,
            endDate: "2017-05-01",
            periodReturn: 0.00005920088813816287,
            startDate: "2017-04-28",
            __typename: "SinglePeriodPerformance"
          },
          {
            cumulativeReturn: 0.11256740146537547,
            endDate: "2017-05-02",
            periodReturn: 0.0009893343433878515,
            startDate: "2017-05-01",
            __typename: "SinglePeriodPerformance"
          },
          {
            cumulativeReturn: 0.11310925808940309,
            endDate: "2017-05-03",
            periodReturn: 0.00048703262679980274,
            startDate: "2017-05-02",
            __typename: "SinglePeriodPerformance"
          },
          {
            cumulativeReturn: 0.11229688404911653,
            endDate: "2017-05-04",
            periodReturn: -0.0007298241698941121,
            startDate: "2017-05-03",
            __typename: "SinglePeriodPerformance"
          },
          {
            cumulativeReturn: 0.11224467009762207,
            endDate: "2017-05-05",
            periodReturn: -0.0000469424595566118,
            startDate: "2017-05-04",
            __typename: "SinglePeriodPerformance"
          },
          {
            cumulativeReturn: 0.11242979219969307,
            endDate: "2017-05-08",
            periodReturn: 0.00016644008917109064,
            startDate: "2017-05-05",
            __typename: "SinglePeriodPerformance"
          },
          {
            cumulativeReturn: 0.11248387536015869,
            endDate: "2017-05-09",
            periodReturn: 0.00004861714496040462,
            startDate: "2017-05-08",
            __typename: "SinglePeriodPerformance"
          },
          {
            cumulativeReturn: 0.11296277130235732,
            endDate: "2017-05-10",
            periodReturn: 0.0004304745019729217,
            startDate: "2017-05-09",
            __typename: "SinglePeriodPerformance"
          },
          {
            cumulativeReturn: 0.11309443048248946,
            endDate: "2017-05-11",
            periodReturn: 0.00011829612232053248,
            startDate: "2017-05-10",
            __typename: "SinglePeriodPerformance"
          },
          {
            cumulativeReturn: 0.11309713952530731,
            endDate: "2017-05-12",
            periodReturn: 0.0000024337942438263165,
            startDate: "2017-05-11",
            __typename: "SinglePeriodPerformance"
          },
          {
            cumulativeReturn: 0.1138584835224814,
            endDate: "2017-05-15",
            periodReturn: 0.0006839870215629404,
            startDate: "2017-05-12",
            __typename: "SinglePeriodPerformance"
          },
          {
            cumulativeReturn: 0.11405253314187469,
            endDate: "2017-05-16",
            periodReturn: 0.00017421389006231004,
            startDate: "2017-05-15",
            __typename: "SinglePeriodPerformance"
          },
          {
            cumulativeReturn: 0.11406139377839497,
            endDate: "2017-05-17",
            periodReturn: 0.000007953517681290046,
            startDate: "2017-05-16",
            __typename: "SinglePeriodPerformance"
          },
          {
            cumulativeReturn: 0.11198630837540668,
            endDate: "2017-05-18",
            periodReturn: -0.0018626311032558806,
            startDate: "2017-05-17",
            __typename: "SinglePeriodPerformance"
          },
          {
            cumulativeReturn: 0.11308940043709304,
            endDate: "2017-05-19",
            periodReturn: 0.0009920014782357797,
            startDate: "2017-05-18",
            __typename: "SinglePeriodPerformance"
          },
          {
            cumulativeReturn: 0.11328997577785471,
            endDate: "2017-05-22",
            periodReturn: 0.00018019697311188584,
            startDate: "2017-05-19",
            __typename: "SinglePeriodPerformance"
          },
          {
            cumulativeReturn: 0.11337677012696723,
            endDate: "2017-05-23",
            periodReturn: 0.00007796203235538853,
            startDate: "2017-05-22",
            __typename: "SinglePeriodPerformance"
          },
          {
            cumulativeReturn: 0.1144374447638079,
            endDate: "2017-05-24",
            periodReturn: 0.0009526646013278624,
            startDate: "2017-05-23",
            __typename: "SinglePeriodPerformance"
          },
          {
            cumulativeReturn: 0.11517292179908667,
            endDate: "2017-05-25",
            periodReturn: 0.0006599536283839594,
            startDate: "2017-05-24",
            __typename: "SinglePeriodPerformance"
          },
          {
            cumulativeReturn: 0.11558067273567785,
            endDate: "2017-05-26",
            periodReturn: 0.0003656392014371873,
            startDate: "2017-05-25",
            __typename: "SinglePeriodPerformance"
          },
          {
            cumulativeReturn: 0.11558067273567785,
            endDate: "2017-05-29",
            periodReturn: 0,
            startDate: "2017-05-26",
            __typename: "SinglePeriodPerformance"
          },
          {
            cumulativeReturn: 0.11608788115736024,
            endDate: "2017-05-30",
            periodReturn: 0.0004546586670765028,
            startDate: "2017-05-29",
            __typename: "SinglePeriodPerformance"
          },
          {
            cumulativeReturn: 0.11585114564875187,
            endDate: "2017-05-31",
            periodReturn: -0.00021211188886204198,
            startDate: "2017-05-30",
            __typename: "SinglePeriodPerformance"
          },
          {
            cumulativeReturn: 0.11618216164605766,
            endDate: "2017-06-01",
            periodReturn: 0.0002966488842142093,
            startDate: "2017-05-31",
            __typename: "SinglePeriodPerformance"
          },
          {
            cumulativeReturn: 0.1170486682963705,
            endDate: "2017-06-02",
            periodReturn: 0.0007763129353679054,
            startDate: "2017-06-01",
            __typename: "SinglePeriodPerformance"
          },
          {
            cumulativeReturn: 0.11750218010516811,
            endDate: "2017-06-05",
            periodReturn: 0.0004059910921243764,
            startDate: "2017-06-02",
            __typename: "SinglePeriodPerformance"
          },
          {
            cumulativeReturn: 0.11764278582933252,
            endDate: "2017-06-06",
            periodReturn: 0.0001258214316423729,
            startDate: "2017-06-05",
            __typename: "SinglePeriodPerformance"
          },
          {
            cumulativeReturn: 0.11659070309905051,
            endDate: "2017-06-07",
            periodReturn: -0.0009413407786651935,
            startDate: "2017-06-06",
            __typename: "SinglePeriodPerformance"
          },
          {
            cumulativeReturn: 0.11638858181398581,
            endDate: "2017-06-08",
            periodReturn: -0.00018101644989856303,
            startDate: "2017-06-07",
            __typename: "SinglePeriodPerformance"
          },
          {
            cumulativeReturn: 0.1164209330148489,
            endDate: "2017-06-09",
            periodReturn: 0.000028978441189847493,
            startDate: "2017-06-08",
            __typename: "SinglePeriodPerformance"
          },
          {
            cumulativeReturn: 0.116313273116321,
            endDate: "2017-06-12",
            periodReturn: -0.00009643307048826346,
            startDate: "2017-06-09",
            __typename: "SinglePeriodPerformance"
          },
          {
            cumulativeReturn: 0.11638823947347166,
            endDate: "2017-06-13",
            periodReturn: 0.00006715530394206178,
            startDate: "2017-06-12",
            __typename: "SinglePeriodPerformance"
          },
          {
            cumulativeReturn: 0.11709631608345172,
            endDate: "2017-06-14",
            periodReturn: 0.0006342566008346618,
            startDate: "2017-06-13",
            __typename: "SinglePeriodPerformance"
          },
          {
            cumulativeReturn: 0.1159262345324803,
            endDate: "2017-06-15",
            periodReturn: -0.0010474312144128975,
            startDate: "2017-06-14",
            __typename: "SinglePeriodPerformance"
          },
          {
            cumulativeReturn: 0.11601763718206048,
            endDate: "2017-06-16",
            periodReturn: 0.0000819074296774867,
            startDate: "2017-06-15",
            __typename: "SinglePeriodPerformance"
          },
          {
            cumulativeReturn: 0.11597624308066412,
            endDate: "2017-06-19",
            periodReturn: -0.0000370909025244823,
            startDate: "2017-06-16",
            __typename: "SinglePeriodPerformance"
          },
          {
            cumulativeReturn: 0.11489809224181213,
            endDate: "2017-06-20",
            periodReturn: -0.000966105547082117,
            startDate: "2017-06-19",
            __typename: "SinglePeriodPerformance"
          },
          {
            cumulativeReturn: 0.11355542607558844,
            endDate: "2017-06-21",
            periodReturn: -0.0012042949715016305,
            startDate: "2017-06-20",
            __typename: "SinglePeriodPerformance"
          },
          {
            cumulativeReturn: 0.11298427968485614,
            endDate: "2017-06-22",
            periodReturn: -0.0005129034238961811,
            startDate: "2017-06-21",
            __typename: "SinglePeriodPerformance"
          },
          {
            cumulativeReturn: 0.11365839809003497,
            endDate: "2017-06-23",
            periodReturn: 0.0006056854687739169,
            startDate: "2017-06-22",
            __typename: "SinglePeriodPerformance"
          },
          {
            cumulativeReturn: 0.11475012900959092,
            endDate: "2017-06-26",
            periodReturn: 0.0009803104088544998,
            startDate: "2017-06-23",
            __typename: "SinglePeriodPerformance"
          },
          {
            cumulativeReturn: 0.11461989943054807,
            endDate: "2017-06-27",
            periodReturn: -0.00011682400894508926,
            startDate: "2017-06-26",
            __typename: "SinglePeriodPerformance"
          },
          {
            cumulativeReturn: 0.11489634254569903,
            endDate: "2017-06-28",
            periodReturn: 0.0002480155928422059,
            startDate: "2017-06-27",
            __typename: "SinglePeriodPerformance"
          },
          {
            cumulativeReturn: 0.11489507310197422,
            endDate: "2017-06-29",
            periodReturn: -0.0000011386204048212564,
            startDate: "2017-06-28",
            __typename: "SinglePeriodPerformance"
          },
          {
            cumulativeReturn: 0.11453543379823294,
            endDate: "2017-06-30",
            periodReturn: -0.00032257681679465197,
            startDate: "2017-06-29",
            __typename: "SinglePeriodPerformance"
          },
          {
            cumulativeReturn: 0.11483627391879403,
            endDate: "2017-07-03",
            periodReturn: 0.0002699242316019714,
            startDate: "2017-06-30",
            __typename: "SinglePeriodPerformance"
          },
          {
            cumulativeReturn: 0.11483627391879403,
            endDate: "2017-07-04",
            periodReturn: 0,
            startDate: "2017-07-03",
            __typename: "SinglePeriodPerformance"
          },
          {
            cumulativeReturn: 0.11492569899572547,
            endDate: "2017-07-05",
            periodReturn: 0.00008021364125249846,
            startDate: "2017-07-04",
            __typename: "SinglePeriodPerformance"
          },
          {
            cumulativeReturn: 0.1138244064830054,
            endDate: "2017-07-06",
            periodReturn: -0.000987772112269075,
            startDate: "2017-07-05",
            __typename: "SinglePeriodPerformance"
          },
          {
            cumulativeReturn: 0.11323108083310607,
            endDate: "2017-07-07",
            periodReturn: -0.0005326922685891277,
            startDate: "2017-07-06",
            __typename: "SinglePeriodPerformance"
          },
          {
            cumulativeReturn: 0.11423403941566623,
            endDate: "2017-07-10",
            periodReturn: 0.0009009437481834604,
            startDate: "2017-07-07",
            __typename: "SinglePeriodPerformance"
          },
          {
            cumulativeReturn: 0.1145816712433001,
            endDate: "2017-07-11",
            periodReturn: 0.0003119917497908042,
            startDate: "2017-07-10",
            __typename: "SinglePeriodPerformance"
          },
          {
            cumulativeReturn: 0.11638385527894468,
            endDate: "2017-07-12",
            periodReturn: 0.0016169151908216892,
            startDate: "2017-07-11",
            __typename: "SinglePeriodPerformance"
          },
          {
            cumulativeReturn: 0.11680475361308496,
            endDate: "2017-07-13",
            periodReturn: 0.0003770193667257596,
            startDate: "2017-07-12",
            __typename: "SinglePeriodPerformance"
          },
          {
            cumulativeReturn: 0.11783322518473538,
            endDate: "2017-07-14",
            periodReturn: 0.0009209054387736306,
            startDate: "2017-07-13",
            __typename: "SinglePeriodPerformance"
          },
          {
            cumulativeReturn: 0.11865677911657335,
            endDate: "2017-07-17",
            periodReturn: 0.0007367413253455957,
            startDate: "2017-07-14",
            __typename: "SinglePeriodPerformance"
          },
          {
            cumulativeReturn: 0.11943298064794328,
            endDate: "2017-07-18",
            periodReturn: 0.0006938692419875059,
            startDate: "2017-07-17",
            __typename: "SinglePeriodPerformance"
          },
          {
            cumulativeReturn: 0.12019853497795285,
            endDate: "2017-07-19",
            periodReturn: 0.000683876876279278,
            startDate: "2017-07-18",
            __typename: "SinglePeriodPerformance"
          },
          {
            cumulativeReturn: 0.12065179611892107,
            endDate: "2017-07-20",
            periodReturn: 0.0004046257219726995,
            startDate: "2017-07-19",
            __typename: "SinglePeriodPerformance"
          },
          {
            cumulativeReturn: 0.12132589280101191,
            endDate: "2017-07-21",
            periodReturn: 0.0006015219753588974,
            startDate: "2017-07-20",
            __typename: "SinglePeriodPerformance"
          },
          {
            cumulativeReturn: 0.12102956417064648,
            endDate: "2017-07-24",
            periodReturn: -0.0002642662871408823,
            startDate: "2017-07-21",
            __typename: "SinglePeriodPerformance"
          },
          {
            cumulativeReturn: 0.12124078206702249,
            endDate: "2017-07-25",
            periodReturn: 0.00018841420701717015,
            startDate: "2017-07-24",
            __typename: "SinglePeriodPerformance"
          },
          {
            cumulativeReturn: 0.12199986027002763,
            endDate: "2017-07-26",
            periodReturn: 0.0006769983888791448,
            startDate: "2017-07-25",
            __typename: "SinglePeriodPerformance"
          },
          {
            cumulativeReturn: 0.12181041604529064,
            endDate: "2017-07-27",
            periodReturn: -0.00016884514111394758,
            startDate: "2017-07-26",
            __typename: "SinglePeriodPerformance"
          },
          {
            cumulativeReturn: 0.12202903532468712,
            endDate: "2017-07-28",
            periodReturn: 0.00019488077153635374,
            startDate: "2017-07-27",
            __typename: "SinglePeriodPerformance"
          },
          {
            cumulativeReturn: 0.12227847084589527,
            endDate: "2017-07-31",
            periodReturn: 0.000222307545843325,
            startDate: "2017-07-28",
            __typename: "SinglePeriodPerformance"
          },
          {
            cumulativeReturn: 0.12232083221201262,
            endDate: "2017-08-01",
            periodReturn: 0.00003774586006746881,
            startDate: "2017-07-31",
            __typename: "SinglePeriodPerformance"
          },
          {
            cumulativeReturn: 0.12282621984037045,
            endDate: "2017-08-02",
            periodReturn: 0.00045030584290387215,
            startDate: "2017-08-01",
            __typename: "SinglePeriodPerformance"
          },
          {
            cumulativeReturn: 0.12385084503145438,
            endDate: "2017-08-03",
            periodReturn: 0.0009125412044880424,
            startDate: "2017-08-02",
            __typename: "SinglePeriodPerformance"
          },
          {
            cumulativeReturn: 0.12368406517308705,
            endDate: "2017-08-04",
            periodReturn: -0.00014840034965903475,
            startDate: "2017-08-03",
            __typename: "SinglePeriodPerformance"
          },
          {
            cumulativeReturn: 0.12373215787953074,
            endDate: "2017-08-07",
            periodReturn: 0.00004279913539239594,
            startDate: "2017-08-04",
            __typename: "SinglePeriodPerformance"
          },
          {
            cumulativeReturn: 0.12371241213419415,
            endDate: "2017-08-08",
            periodReturn: -0.000017571576285319952,
            startDate: "2017-08-07",
            __typename: "SinglePeriodPerformance"
          },
          {
            cumulativeReturn: 0.1221635795359437,
            endDate: "2017-08-09",
            periodReturn: -0.0013783176029077714,
            startDate: "2017-08-08",
            __typename: "SinglePeriodPerformance"
          },
          {
            cumulativeReturn: 0.12061140818203131,
            endDate: "2017-08-10",
            periodReturn: -0.0013831952686917935,
            startDate: "2017-08-09",
            __typename: "SinglePeriodPerformance"
          },
          {
            cumulativeReturn: 0.12035080011630273,
            endDate: "2017-08-11",
            periodReturn: -0.00023255881907484495,
            startDate: "2017-08-10",
            __typename: "SinglePeriodPerformance"
          },
          {
            cumulativeReturn: 0.12149877648948859,
            endDate: "2017-08-14",
            periodReturn: 0.001024657967010614,
            startDate: "2017-08-11",
            __typename: "SinglePeriodPerformance"
          },
          {
            cumulativeReturn: 0.1213148015982557,
            endDate: "2017-08-15",
            periodReturn: -0.0001640437734660045,
            startDate: "2017-08-14",
            __typename: "SinglePeriodPerformance"
          },
          {
            cumulativeReturn: 0.12205666267178272,
            endDate: "2017-08-16",
            periodReturn: 0.0006615992872559995,
            startDate: "2017-08-15",
            __typename: "SinglePeriodPerformance"
          },
          {
            cumulativeReturn: 0.12178182458604692,
            endDate: "2017-08-17",
            periodReturn: -0.0002449413606986182,
            startDate: "2017-08-16",
            __typename: "SinglePeriodPerformance"
          },
          {
            cumulativeReturn: 0.12149133258893952,
            endDate: "2017-08-18",
            periodReturn: -0.00025895587781930065,
            startDate: "2017-08-17",
            __typename: "SinglePeriodPerformance"
          },
          {
            cumulativeReturn: 0.1218582912308721,
            endDate: "2017-08-21",
            periodReturn: 0.00032720595449047945,
            startDate: "2017-08-18",
            __typename: "SinglePeriodPerformance"
          },
          {
            cumulativeReturn: 0.12214113941331806,
            endDate: "2017-08-22",
            periodReturn: 0.0002521246976171955,
            startDate: "2017-08-21",
            __typename: "SinglePeriodPerformance"
          },
          {
            cumulativeReturn: 0.12223750480829487,
            endDate: "2017-08-23",
            periodReturn: 0.00008587635867908162,
            startDate: "2017-08-22",
            __typename: "SinglePeriodPerformance"
          },
          {
            cumulativeReturn: 0.12308635363822784,
            endDate: "2017-08-24",
            periodReturn: 0.0007563896468403206,
            startDate: "2017-08-23",
            __typename: "SinglePeriodPerformance"
          },
          {
            cumulativeReturn: 0.1238744188669012,
            endDate: "2017-08-25",
            periodReturn: 0.0007016960237478506,
            startDate: "2017-08-24",
            __typename: "SinglePeriodPerformance"
          },
          {
            cumulativeReturn: 0.12402391082080744,
            endDate: "2017-08-28",
            periodReturn: 0.00013301482033654577,
            startDate: "2017-08-25",
            __typename: "SinglePeriodPerformance"
          },
          {
            cumulativeReturn: 0.12439536024116293,
            endDate: "2017-08-29",
            periodReturn: 0.0003304639845999885,
            startDate: "2017-08-28",
            __typename: "SinglePeriodPerformance"
          },
          {
            cumulativeReturn: 0.12496261305346423,
            endDate: "2017-08-30",
            periodReturn: 0.000504495867165135,
            startDate: "2017-08-29",
            __typename: "SinglePeriodPerformance"
          },
          {
            cumulativeReturn: 0.1261618607980184,
            endDate: "2017-08-31",
            periodReturn: 0.0010660334224787615,
            startDate: "2017-08-30",
            __typename: "SinglePeriodPerformance"
          },
          {
            cumulativeReturn: 0.12692716161632855,
            endDate: "2017-09-01",
            periodReturn: 0.0006795655624209053,
            startDate: "2017-08-31",
            __typename: "SinglePeriodPerformance"
          },
          {
            cumulativeReturn: 0.12692716161632855,
            endDate: "2017-09-04",
            periodReturn: 0,
            startDate: "2017-09-01",
            __typename: "SinglePeriodPerformance"
          },
          {
            cumulativeReturn: 0.1276433756512947,
            endDate: "2017-09-05",
            periodReturn: 0.0006355459867866887,
            startDate: "2017-09-04",
            __typename: "SinglePeriodPerformance"
          },
          {
            cumulativeReturn: 0.12805611821964957,
            endDate: "2017-09-06",
            periodReturn: 0.00036602225248428015,
            startDate: "2017-09-05",
            __typename: "SinglePeriodPerformance"
          },
          {
            cumulativeReturn: 0.1285496151106751,
            endDate: "2017-09-07",
            periodReturn: 0.00043747547932667817,
            startDate: "2017-09-06",
            __typename: "SinglePeriodPerformance"
          },
          {
            cumulativeReturn: 0.1287272630985281,
            endDate: "2017-09-08",
            periodReturn: 0.00015741265202202267,
            startDate: "2017-09-07",
            __typename: "SinglePeriodPerformance"
          },
          {
            cumulativeReturn: 0.1291270940343041,
            endDate: "2017-09-11",
            periodReturn: 0.0003542316632613245,
            startDate: "2017-09-08",
            __typename: "SinglePeriodPerformance"
          },
          {
            cumulativeReturn: 0.12909987155028024,
            endDate: "2017-09-12",
            periodReturn: -0.000024109317868479157,
            startDate: "2017-09-11",
            __typename: "SinglePeriodPerformance"
          },
          {
            cumulativeReturn: 0.12927239871637441,
            endDate: "2017-09-13",
            periodReturn: 0.00015280062502987904,
            startDate: "2017-09-12",
            __typename: "SinglePeriodPerformance"
          },
          {
            cumulativeReturn: 0.1294990914024805,
            endDate: "2017-09-14",
            periodReturn: 0.0002007422534754878,
            startDate: "2017-09-13",
            __typename: "SinglePeriodPerformance"
          },
          {
            cumulativeReturn: 0.12971712697995774,
            endDate: "2017-09-15",
            periodReturn: 0.00019303740847328811,
            startDate: "2017-09-14",
            __typename: "SinglePeriodPerformance"
          },
          {
            cumulativeReturn: 0.130056330477911,
            endDate: "2017-09-18",
            periodReturn: 0.000300255249612788,
            startDate: "2017-09-15",
            __typename: "SinglePeriodPerformance"
          },
          {
            cumulativeReturn: 0.1302210880633714,
            endDate: "2017-09-19",
            periodReturn: 0.0001457959050508758,
            startDate: "2017-09-18",
            __typename: "SinglePeriodPerformance"
          },
          {
            cumulativeReturn: 0.13010224878321175,
            endDate: "2017-09-20",
            periodReturn: -0.00010514693223729822,
            startDate: "2017-09-19",
            __typename: "SinglePeriodPerformance"
          },
          {
            cumulativeReturn: 0.12993978673086182,
            endDate: "2017-09-21",
            periodReturn: -0.0001437587196423484,
            startDate: "2017-09-20",
            __typename: "SinglePeriodPerformance"
          },
          {
            cumulativeReturn: 0.13067327031111353,
            endDate: "2017-09-22",
            periodReturn: 0.0006491351033615371,
            startDate: "2017-09-21",
            __typename: "SinglePeriodPerformance"
          },
          {
            cumulativeReturn: 0.13120107420228333,
            endDate: "2017-09-25",
            periodReturn: 0.0004668049603972927,
            startDate: "2017-09-22",
            __typename: "SinglePeriodPerformance"
          },
          {
            cumulativeReturn: 0.1312401620359276,
            endDate: "2017-09-26",
            periodReturn: 0.00003455427557118744,
            startDate: "2017-09-25",
            __typename: "SinglePeriodPerformance"
          },
          {
            cumulativeReturn: 0.13072589709673155,
            endDate: "2017-09-27",
            periodReturn: -0.0004546027947508578,
            startDate: "2017-09-26",
            __typename: "SinglePeriodPerformance"
          },
          {
            cumulativeReturn: 0.1313334718006225,
            endDate: "2017-09-28",
            periodReturn: 0.0005373315544032513,
            startDate: "2017-09-27",
            __typename: "SinglePeriodPerformance"
          },
          {
            cumulativeReturn: 0.132382744929459,
            endDate: "2017-09-29",
            periodReturn: 0.0009274658224038829,
            startDate: "2017-09-28",
            __typename: "SinglePeriodPerformance"
          },
          {
            cumulativeReturn: 0.13298238396438022,
            endDate: "2017-10-02",
            periodReturn: 0.0005295374179855288,
            startDate: "2017-09-29",
            __typename: "SinglePeriodPerformance"
          },
          {
            cumulativeReturn: 0.13320141450050715,
            endDate: "2017-10-03",
            periodReturn: 0.00019332210211459798,
            startDate: "2017-10-02",
            __typename: "SinglePeriodPerformance"
          },
          {
            cumulativeReturn: 0.1339141360425511,
            endDate: "2017-10-04",
            periodReturn: 0.0006289451574309201,
            startDate: "2017-10-03",
            __typename: "SinglePeriodPerformance"
          },
          {
            cumulativeReturn: 0.13433760240988746,
            endDate: "2017-10-05",
            periodReturn: 0.00037345540890276903,
            startDate: "2017-10-04",
            __typename: "SinglePeriodPerformance"
          },
          {
            cumulativeReturn: 0.13429991934829677,
            endDate: "2017-10-06",
            periodReturn: -0.000033220323041945235,
            startDate: "2017-10-05",
            __typename: "SinglePeriodPerformance"
          },
          {
            cumulativeReturn: 0.1342665976308024,
            endDate: "2017-10-09",
            periodReturn: -0.000029376461133364432,
            startDate: "2017-10-06",
            __typename: "SinglePeriodPerformance"
          },
          {
            cumulativeReturn: 0.13469674232273054,
            endDate: "2017-10-10",
            periodReturn: 0.0003792271524408297,
            startDate: "2017-10-09",
            __typename: "SinglePeriodPerformance"
          },
          {
            cumulativeReturn: 0.13513914041903874,
            endDate: "2017-10-11",
            periodReturn: 0.0003898822300331975,
            startDate: "2017-10-10",
            __typename: "SinglePeriodPerformance"
          },
          {
            cumulativeReturn: 0.135477773865315,
            endDate: "2017-10-12",
            periodReturn: 0.0002983188881594651,
            startDate: "2017-10-11",
            __typename: "SinglePeriodPerformance"
          },
          {
            cumulativeReturn: 0.13575240521063425,
            endDate: "2017-10-13",
            periodReturn: 0.00024186413124102995,
            startDate: "2017-10-12",
            __typename: "SinglePeriodPerformance"
          },
          {
            cumulativeReturn: 0.1361285783063686,
            endDate: "2017-10-16",
            periodReturn: 0.0003312104768683691,
            startDate: "2017-10-13",
            __typename: "SinglePeriodPerformance"
          },
          {
            cumulativeReturn: 0.1365930932889332,
            endDate: "2017-10-17",
            periodReturn: 0.00040885775732976644,
            startDate: "2017-10-16",
            __typename: "SinglePeriodPerformance"
          },
          {
            cumulativeReturn: 0.1371757916704135,
            endDate: "2017-10-18",
            periodReturn: 0.0005126710560893455,
            startDate: "2017-10-17",
            __typename: "SinglePeriodPerformance"
          },
          {
            cumulativeReturn: 0.1374553946688566,
            endDate: "2017-10-19",
            periodReturn: 0.0002458749126485674,
            startDate: "2017-10-18",
            __typename: "SinglePeriodPerformance"
          },
          {
            cumulativeReturn: 0.13731994020210858,
            endDate: "2017-10-20",
            periodReturn: -0.00011908551964564049,
            startDate: "2017-10-19",
            __typename: "SinglePeriodPerformance"
          },
          {
            cumulativeReturn: 0.13756952223036323,
            endDate: "2017-10-23",
            periodReturn: 0.00021944750938800912,
            startDate: "2017-10-20",
            __typename: "SinglePeriodPerformance"
          },
          {
            cumulativeReturn: 0.1378195498821715,
            endDate: "2017-10-24",
            periodReturn: 0.0002197910957723069,
            startDate: "2017-10-23",
            __typename: "SinglePeriodPerformance"
          },
          {
            cumulativeReturn: 0.13700126810231517,
            endDate: "2017-10-25",
            periodReturn: -0.0007191665672655395,
            startDate: "2017-10-24",
            __typename: "SinglePeriodPerformance"
          },
          {
            cumulativeReturn: 0.13600384507977115,
            endDate: "2017-10-26",
            periodReturn: -0.0008772400264854446,
            startDate: "2017-10-25",
            __typename: "SinglePeriodPerformance"
          },
          {
            cumulativeReturn: 0.13641698987463924,
            endDate: "2017-10-27",
            periodReturn: 0.00036368256732367306,
            startDate: "2017-10-26",
            __typename: "SinglePeriodPerformance"
          },
          {
            cumulativeReturn: 0.1373255799193478,
            endDate: "2017-10-30",
            periodReturn: 0.0007995217009285607,
            startDate: "2017-10-27",
            __typename: "SinglePeriodPerformance"
          },
          {
            cumulativeReturn: 0.13730111352699415,
            endDate: "2017-10-31",
            periodReturn: -0.000021512214959087402,
            startDate: "2017-10-30",
            __typename: "SinglePeriodPerformance"
          },
          {
            cumulativeReturn: 0.1375581533208683,
            endDate: "2017-11-01",
            periodReturn: 0.0002260085660841466,
            startDate: "2017-10-31",
            __typename: "SinglePeriodPerformance"
          },
          {
            cumulativeReturn: 0.1377882433051585,
            endDate: "2017-11-02",
            periodReturn: 0.00020226656863072114,
            startDate: "2017-11-01",
            __typename: "SinglePeriodPerformance"
          },
          {
            cumulativeReturn: 0.1361482031157628,
            endDate: "2017-11-03",
            periodReturn: -0.001441428314139914,
            startDate: "2017-11-02",
            __typename: "SinglePeriodPerformance"
          },
          {
            cumulativeReturn: 0.13593004810133857,
            endDate: "2017-11-06",
            periodReturn: -0.0001920128147243732,
            startDate: "2017-11-03",
            __typename: "SinglePeriodPerformance"
          },
          {
            cumulativeReturn: 0.13465600278684375,
            endDate: "2017-11-07",
            periodReturn: -0.001121587827194419,
            startDate: "2017-11-06",
            __typename: "SinglePeriodPerformance"
          },
          {
            cumulativeReturn: 0.13324837215473706,
            endDate: "2017-11-08",
            periodReturn: -0.0012405791963814347,
            startDate: "2017-11-07",
            __typename: "SinglePeriodPerformance"
          },
          {
            cumulativeReturn: 0.13154216769441396,
            endDate: "2017-11-09",
            periodReturn: -0.001505587391296238,
            startDate: "2017-11-08",
            __typename: "SinglePeriodPerformance"
          },
          {
            cumulativeReturn: 0.1317238182562548,
            endDate: "2017-11-10",
            periodReturn: 0.0001605336213063418,
            startDate: "2017-11-09",
            __typename: "SinglePeriodPerformance"
          },
          {
            cumulativeReturn: 0.13202712258132454,
            endDate: "2017-11-13",
            periodReturn: 0.00026800206921255717,
            startDate: "2017-11-10",
            __typename: "SinglePeriodPerformance"
          },
          {
            cumulativeReturn: 0.13065315205275918,
            endDate: "2017-11-14",
            periodReturn: -0.0012137258031700497,
            startDate: "2017-11-13",
            __typename: "SinglePeriodPerformance"
          },
          {
            cumulativeReturn: 0.12968674122425794,
            endDate: "2017-11-15",
            periodReturn: -0.0008547367747098854,
            startDate: "2017-11-14",
            __typename: "SinglePeriodPerformance"
          },
          {
            cumulativeReturn: 0.13232646452848118,
            endDate: "2017-11-16",
            periodReturn: 0.002336686098805217,
            startDate: "2017-11-15",
            __typename: "SinglePeriodPerformance"
          },
          {
            cumulativeReturn: 0.1326748022734232,
            endDate: "2017-11-17",
            periodReturn: 0.0003076301365852201,
            startDate: "2017-11-16",
            __typename: "SinglePeriodPerformance"
          },
          {
            cumulativeReturn: 0.13310003513679147,
            endDate: "2017-11-20",
            periodReturn: 0.00037542361012599286,
            startDate: "2017-11-17",
            __typename: "SinglePeriodPerformance"
          },
          {
            cumulativeReturn: 0.13363979905920842,
            endDate: "2017-11-21",
            periodReturn: 0.00047636034390530473,
            startDate: "2017-11-20",
            __typename: "SinglePeriodPerformance"
          },
          {
            cumulativeReturn: 0.13411517704014675,
            endDate: "2017-11-22",
            periodReturn: 0.0004193377661342061,
            startDate: "2017-11-21",
            __typename: "SinglePeriodPerformance"
          },
          {
            cumulativeReturn: 0.13411517704014675,
            endDate: "2017-11-23",
            periodReturn: 0,
            startDate: "2017-11-22",
            __typename: "SinglePeriodPerformance"
          },
          {
            cumulativeReturn: 0.13476580337549837,
            endDate: "2017-11-24",
            periodReturn: 0.0005736862961748157,
            startDate: "2017-11-23",
            __typename: "SinglePeriodPerformance"
          },
          {
            cumulativeReturn: 0.13534618483771022,
            endDate: "2017-11-27",
            periodReturn: 0.0005114548398317865,
            startDate: "2017-11-24",
            __typename: "SinglePeriodPerformance"
          },
          {
            cumulativeReturn: 0.13574593539414814,
            endDate: "2017-11-28",
            periodReturn: 0.000352095741172581,
            startDate: "2017-11-27",
            __typename: "SinglePeriodPerformance"
          },
          {
            cumulativeReturn: 0.13542292428453684,
            endDate: "2017-11-29",
            periodReturn: -0.00028440437209150136,
            startDate: "2017-11-28",
            __typename: "SinglePeriodPerformance"
          },
          {
            cumulativeReturn: 0.13505541863321424,
            endDate: "2017-11-30",
            periodReturn: -0.0003236729182248273,
            startDate: "2017-11-29",
            __typename: "SinglePeriodPerformance"
          },
          {
            cumulativeReturn: 0.1350956486545618,
            endDate: "2017-12-01",
            periodReturn: 0.00003544322214319238,
            startDate: "2017-11-30",
            __typename: "SinglePeriodPerformance"
          },
          {
            cumulativeReturn: 0.13573363441158048,
            endDate: "2017-12-04",
            periodReturn: 0.0005620546231279301,
            startDate: "2017-12-01",
            __typename: "SinglePeriodPerformance"
          },
          {
            cumulativeReturn: 0.13595589420505116,
            endDate: "2017-12-05",
            periodReturn: 0.0001956971130699297,
            startDate: "2017-12-04",
            __typename: "SinglePeriodPerformance"
          },
          {
            cumulativeReturn: 0.13625554838107679,
            endDate: "2017-12-06",
            periodReturn: 0.0002637903263271002,
            startDate: "2017-12-05",
            __typename: "SinglePeriodPerformance"
          },
          {
            cumulativeReturn: 0.1359304756097106,
            endDate: "2017-12-07",
            periodReturn: -0.0002860912510651954,
            startDate: "2017-12-06",
            __typename: "SinglePeriodPerformance"
          },
          {
            cumulativeReturn: 0.13658481698003988,
            endDate: "2017-12-08",
            periodReturn: 0.0005760399816529661,
            startDate: "2017-12-07",
            __typename: "SinglePeriodPerformance"
          },
          {
            cumulativeReturn: 0.13702607545261447,
            endDate: "2017-12-11",
            periodReturn: 0.0003882318908210508,
            startDate: "2017-12-08",
            __typename: "SinglePeriodPerformance"
          },
          {
            cumulativeReturn: 0.1370424311103804,
            endDate: "2017-12-12",
            periodReturn: 0.000014384593387083005,
            startDate: "2017-12-11",
            __typename: "SinglePeriodPerformance"
          },
          {
            cumulativeReturn: 0.13706298405603623,
            endDate: "2017-12-13",
            periodReturn: 0.00001807579479309103,
            startDate: "2017-12-12",
            __typename: "SinglePeriodPerformance"
          },
          {
            cumulativeReturn: 0.13694189390579758,
            endDate: "2017-12-14",
            periodReturn: -0.00010649379316422166,
            startDate: "2017-12-13",
            __typename: "SinglePeriodPerformance"
          },
          {
            cumulativeReturn: 0.13723681303736956,
            endDate: "2017-12-15",
            periodReturn: 0.0002593968373869509,
            startDate: "2017-12-14",
            __typename: "SinglePeriodPerformance"
          },
          {
            cumulativeReturn: 0.13744475567146308,
            endDate: "2017-12-18",
            periodReturn: 0.000182849017645021,
            startDate: "2017-12-15",
            __typename: "SinglePeriodPerformance"
          },
          {
            cumulativeReturn: 0.1372288416732188,
            endDate: "2017-12-19",
            periodReturn: -0.00018982372301390993,
            startDate: "2017-12-18",
            __typename: "SinglePeriodPerformance"
          },
          {
            cumulativeReturn: 0.13699648246229823,
            endDate: "2017-12-20",
            periodReturn: -0.00020432053990008137,
            startDate: "2017-12-19",
            __typename: "SinglePeriodPerformance"
          },
          {
            cumulativeReturn: 0.13717810890516424,
            endDate: "2017-12-21",
            periodReturn: 0.00015974230850099517,
            startDate: "2017-12-20",
            __typename: "SinglePeriodPerformance"
          },
          {
            cumulativeReturn: 0.13755496897236097,
            endDate: "2017-12-22",
            periodReturn: 0.00033139933335469185,
            startDate: "2017-12-21",
            __typename: "SinglePeriodPerformance"
          },
          {
            cumulativeReturn: 0.13755496897236097,
            endDate: "2017-12-25",
            periodReturn: 0,
            startDate: "2017-12-22",
            __typename: "SinglePeriodPerformance"
          },
          {
            cumulativeReturn: 0.13786556870740285,
            endDate: "2017-12-26",
            periodReturn: 0.00027304151756514544,
            startDate: "2017-12-25",
            __typename: "SinglePeriodPerformance"
          },
          {
            cumulativeReturn: 0.13848111898201876,
            endDate: "2017-12-27",
            periodReturn: 0.0005409692423641476,
            startDate: "2017-12-26",
            __typename: "SinglePeriodPerformance"
          },
          {
            cumulativeReturn: 0.13873578377968632,
            endDate: "2017-12-28",
            periodReturn: 0.00022368820476820976,
            startDate: "2017-12-27",
            __typename: "SinglePeriodPerformance"
          },
          {
            cumulativeReturn: 0.13933782423441077,
            endDate: "2017-12-29",
            periodReturn: 0.0005286919611204836,
            startDate: "2017-12-28",
            __typename: "SinglePeriodPerformance"
          },
          {
            cumulativeReturn: 0.13933782423441077,
            endDate: "2018-01-01",
            periodReturn: 0,
            startDate: "2017-12-29",
            __typename: "SinglePeriodPerformance"
          },
          {
            cumulativeReturn: 0.1399820492489634,
            endDate: "2018-01-02",
            periodReturn: 0.0005654380999643917,
            startDate: "2018-01-01",
            __typename: "SinglePeriodPerformance"
          },
          {
            cumulativeReturn: 0.14158461029846658,
            endDate: "2018-01-03",
            periodReturn: 0.0014057774423368247,
            startDate: "2018-01-02",
            __typename: "SinglePeriodPerformance"
          },
          {
            cumulativeReturn: 0.14292254095433576,
            endDate: "2018-01-04",
            periodReturn: 0.0011719942996772593,
            startDate: "2018-01-03",
            __typename: "SinglePeriodPerformance"
          },
          {
            cumulativeReturn: 0.1437357427070869,
            endDate: "2018-01-05",
            periodReturn: 0.0007115108186353505,
            startDate: "2018-01-04",
            __typename: "SinglePeriodPerformance"
          },
          {
            cumulativeReturn: 0.1440798514997128,
            endDate: "2018-01-08",
            periodReturn: 0.00030086389694481216,
            startDate: "2018-01-05",
            __typename: "SinglePeriodPerformance"
          },
          {
            cumulativeReturn: 0.1437412837735983,
            endDate: "2018-01-09",
            periodReturn: -0.0002959301535383668,
            startDate: "2018-01-08",
            __typename: "SinglePeriodPerformance"
          },
          {
            cumulativeReturn: 0.14294835665234107,
            endDate: "2018-01-10",
            periodReturn: -0.0006932748974847411,
            startDate: "2018-01-09",
            __typename: "SinglePeriodPerformance"
          },
          {
            cumulativeReturn: 0.14392216597789953,
            endDate: "2018-01-11",
            periodReturn: 0.0008520151587694641,
            startDate: "2018-01-10",
            __typename: "SinglePeriodPerformance"
          },
          {
            cumulativeReturn: 0.1445088071804046,
            endDate: "2018-01-12",
            periodReturn: 0.0005128331454295376,
            startDate: "2018-01-11",
            __typename: "SinglePeriodPerformance"
          },
          {
            cumulativeReturn: 0.1445088071804046,
            endDate: "2018-01-15",
            periodReturn: 0,
            startDate: "2018-01-12",
            __typename: "SinglePeriodPerformance"
          },
          {
            cumulativeReturn: 0.14494669710481345,
            endDate: "2018-01-16",
            periodReturn: 0.0003826007468546825,
            startDate: "2018-01-15",
            __typename: "SinglePeriodPerformance"
          },
          {
            cumulativeReturn: 0.14468010675968612,
            endDate: "2018-01-17",
            periodReturn: -0.00023284083512482273,
            startDate: "2018-01-16",
            __typename: "SinglePeriodPerformance"
          },
          {
            cumulativeReturn: 0.1441690131563107,
            endDate: "2018-01-18",
            periodReturn: -0.0004464947021943724,
            startDate: "2018-01-17",
            __typename: "SinglePeriodPerformance"
          },
          {
            cumulativeReturn: 0.1440527196712298,
            endDate: "2018-01-19",
            periodReturn: -0.00010164012811363569,
            startDate: "2018-01-18",
            __typename: "SinglePeriodPerformance"
          },
          {
            cumulativeReturn: 0.1441882346678005,
            endDate: "2018-01-22",
            periodReturn: 0.00011845170615007598,
            startDate: "2018-01-19",
            __typename: "SinglePeriodPerformance"
          },
          {
            cumulativeReturn: 0.14517163962760748,
            endDate: "2018-01-23",
            periodReturn: 0.0008594783008691893,
            startDate: "2018-01-22",
            __typename: "SinglePeriodPerformance"
          },
          {
            cumulativeReturn: 0.14520890763963257,
            endDate: "2018-01-24",
            periodReturn: 0.000032543603714438856,
            startDate: "2018-01-23",
            __typename: "SinglePeriodPerformance"
          },
          {
            cumulativeReturn: 0.14599475260346684,
            endDate: "2018-01-25",
            periodReturn: 0.0006862022802930489,
            startDate: "2018-01-24",
            __typename: "SinglePeriodPerformance"
          },
          {
            cumulativeReturn: 0.1463345961928788,
            endDate: "2018-01-26",
            periodReturn: 0.0002965489926022118,
            startDate: "2018-01-25",
            __typename: "SinglePeriodPerformance"
          },
          {
            cumulativeReturn: 0.14584914183291775,
            endDate: "2018-01-29",
            periodReturn: -0.0004234839998490572,
            startDate: "2018-01-26",
            __typename: "SinglePeriodPerformance"
          },
          {
            cumulativeReturn: 0.14489859201336186,
            endDate: "2018-01-30",
            periodReturn: -0.0008295593065901492,
            startDate: "2018-01-29",
            __typename: "SinglePeriodPerformance"
          },
          {
            cumulativeReturn: 0.145400054545187,
            endDate: "2018-01-31",
            periodReturn: 0.00043799733471892285,
            startDate: "2018-01-30",
            __typename: "SinglePeriodPerformance"
          },
          {
            cumulativeReturn: 0.1450752084829583,
            endDate: "2018-02-01",
            periodReturn: -0.0002836092603100417,
            startDate: "2018-01-31",
            __typename: "SinglePeriodPerformance"
          },
          {
            cumulativeReturn: 0.14314787575558774,
            endDate: "2018-02-02",
            periodReturn: -0.0016831494674694838,
            startDate: "2018-02-01",
            __typename: "SinglePeriodPerformance"
          },
          {
            cumulativeReturn: 0.14181144262465173,
            endDate: "2018-02-05",
            periodReturn: -0.0011690815854008077,
            startDate: "2018-02-02",
            __typename: "SinglePeriodPerformance"
          },
          {
            cumulativeReturn: 0.14044834576443277,
            endDate: "2018-02-06",
            periodReturn: -0.0011938020669032005,
            startDate: "2018-02-05",
            __typename: "SinglePeriodPerformance"
          },
          {
            cumulativeReturn: 0.14137192543511734,
            endDate: "2018-02-07",
            periodReturn: 0.0008098391076760566,
            startDate: "2018-02-06",
            __typename: "SinglePeriodPerformance"
          },
          {
            cumulativeReturn: 0.13846531545073293,
            endDate: "2018-02-08",
            periodReturn: -0.0025465932003508845,
            startDate: "2018-02-07",
            __typename: "SinglePeriodPerformance"
          },
          {
            cumulativeReturn: 0.1348612426117175,
            endDate: "2018-02-09",
            periodReturn: -0.0031657291531876704,
            startDate: "2018-02-08",
            __typename: "SinglePeriodPerformance"
          },
          {
            cumulativeReturn: 0.13532177608404683,
            endDate: "2018-02-12",
            periodReturn: 0.000405805974367113,
            startDate: "2018-02-09",
            __typename: "SinglePeriodPerformance"
          },
          {
            cumulativeReturn: 0.13466239675512393,
            endDate: "2018-02-13",
            periodReturn: -0.000580786295843986,
            startDate: "2018-02-12",
            __typename: "SinglePeriodPerformance"
          },
          {
            cumulativeReturn: 0.13377293679929791,
            endDate: "2018-02-14",
            periodReturn: -0.000783898328145595,
            startDate: "2018-02-13",
            __typename: "SinglePeriodPerformance"
          },
          {
            cumulativeReturn: 0.135973489345943,
            endDate: "2018-02-15",
            periodReturn: 0.0019409111606221996,
            startDate: "2018-02-14",
            __typename: "SinglePeriodPerformance"
          },
          {
            cumulativeReturn: 0.13818596920988702,
            endDate: "2018-02-16",
            periodReturn: 0.001947650966060656,
            startDate: "2018-02-15",
            __typename: "SinglePeriodPerformance"
          },
          {
            cumulativeReturn: 0.13818596920988702,
            endDate: "2018-02-19",
            periodReturn: 0,
            startDate: "2018-02-16",
            __typename: "SinglePeriodPerformance"
          },
          {
            cumulativeReturn: 0.13850767088415084,
            endDate: "2018-02-20",
            periodReturn: 0.00028264421014361104,
            startDate: "2018-02-19",
            __typename: "SinglePeriodPerformance"
          },
          {
            cumulativeReturn: 0.138235328562754,
            endDate: "2018-02-21",
            periodReturn: -0.00023920991343460082,
            startDate: "2018-02-20",
            __typename: "SinglePeriodPerformance"
          },
          {
            cumulativeReturn: 0.1377058215985023,
            endDate: "2018-02-22",
            periodReturn: -0.0004651999028357859,
            startDate: "2018-02-21",
            __typename: "SinglePeriodPerformance"
          },
          {
            cumulativeReturn: 0.13835545402540617,
            endDate: "2018-02-23",
            periodReturn: 0.0005710021119441266,
            startDate: "2018-02-22",
            __typename: "SinglePeriodPerformance"
          },
          {
            cumulativeReturn: 0.1399562028110799,
            endDate: "2018-02-26",
            periodReturn: 0.0014061941549216813,
            startDate: "2018-02-23",
            __typename: "SinglePeriodPerformance"
          },
          {
            cumulativeReturn: 0.14002969793331177,
            endDate: "2018-02-27",
            periodReturn: 0.00006447188238519037,
            startDate: "2018-02-26",
            __typename: "SinglePeriodPerformance"
          },
          {
            cumulativeReturn: 0.14004431232726944,
            endDate: "2018-02-28",
            periodReturn: 0.000012819309868925197,
            startDate: "2018-02-27",
            __typename: "SinglePeriodPerformance"
          },
          {
            cumulativeReturn: 0.13942091050377226,
            endDate: "2018-03-01",
            periodReturn: -0.0005468224495804775,
            startDate: "2018-02-28",
            __typename: "SinglePeriodPerformance"
          },
          {
            cumulativeReturn: 0.13810643391828203,
            endDate: "2018-03-02",
            periodReturn: -0.0011536356524378102,
            startDate: "2018-03-01",
            __typename: "SinglePeriodPerformance"
          },
          {
            cumulativeReturn: 0.13863336263715054,
            endDate: "2018-03-05",
            periodReturn: 0.00046298720678912255,
            startDate: "2018-03-02",
            __typename: "SinglePeriodPerformance"
          },
          {
            cumulativeReturn: 0.1396664872667066,
            endDate: "2018-03-06",
            periodReturn: 0.0009073373953871685,
            startDate: "2018-03-05",
            __typename: "SinglePeriodPerformance"
          },
          {
            cumulativeReturn: 0.13939786643255148,
            endDate: "2018-03-07",
            periodReturn: -0.0002357012662531091,
            startDate: "2018-03-06",
            __typename: "SinglePeriodPerformance"
          },
          {
            cumulativeReturn: 0.13952166216806172,
            endDate: "2018-03-08",
            periodReturn: 0.00010865013807500263,
            startDate: "2018-03-07",
            __typename: "SinglePeriodPerformance"
          },
          {
            cumulativeReturn: 0.14048907688461165,
            endDate: "2018-03-09",
            periodReturn: 0.0008489656218639071,
            startDate: "2018-03-08",
            __typename: "SinglePeriodPerformance"
          },
          {
            cumulativeReturn: 0.14099304611845453,
            endDate: "2018-03-12",
            periodReturn: 0.0004418886985042689,
            startDate: "2018-03-09",
            __typename: "SinglePeriodPerformance"
          },
          {
            cumulativeReturn: 0.14061042084611985,
            endDate: "2018-03-13",
            periodReturn: -0.0003353440878857959,
            startDate: "2018-03-12",
            __typename: "SinglePeriodPerformance"
          },
          {
            cumulativeReturn: 0.14056024886903917,
            endDate: "2018-03-14",
            periodReturn: -0.000043986953094308413,
            startDate: "2018-03-13",
            __typename: "SinglePeriodPerformance"
          },
          {
            cumulativeReturn: 0.14000565656730557,
            endDate: "2018-03-15",
            periodReturn: -0.00048624551161017133,
            startDate: "2018-03-14",
            __typename: "SinglePeriodPerformance"
          },
          {
            cumulativeReturn: 0.14001528234975202,
            endDate: "2018-03-16",
            periodReturn: 0.000008443626916261292,
            startDate: "2018-03-15",
            __typename: "SinglePeriodPerformance"
          },
          {
            cumulativeReturn: 0.1391009546574422,
            endDate: "2018-03-19",
            periodReturn: -0.0008020310836755592,
            startDate: "2018-03-16",
            __typename: "SinglePeriodPerformance"
          },
          {
            cumulativeReturn: 0.13829793286374925,
            endDate: "2018-03-20",
            periodReturn: -0.0007049610400286931,
            startDate: "2018-03-19",
            __typename: "SinglePeriodPerformance"
          },
          {
            cumulativeReturn: 0.13825405274678038,
            endDate: "2018-03-21",
            periodReturn: -0.00003854888575482326,
            startDate: "2018-03-20",
            __typename: "SinglePeriodPerformance"
          },
          {
            cumulativeReturn: 0.13819550343172704,
            endDate: "2018-03-22",
            periodReturn: -0.00005143782700547685,
            startDate: "2018-03-21",
            __typename: "SinglePeriodPerformance"
          },
          {
            cumulativeReturn: 0.1373235360684748,
            endDate: "2018-03-23",
            periodReturn: -0.0007660962994697633,
            startDate: "2018-03-22",
            __typename: "SinglePeriodPerformance"
          },
          {
            cumulativeReturn: 0.13769952808002262,
            endDate: "2018-03-26",
            periodReturn: 0.00033059371377067897,
            startDate: "2018-03-23",
            __typename: "SinglePeriodPerformance"
          },
          {
            cumulativeReturn: 0.13848872821714986,
            endDate: "2018-03-27",
            periodReturn: 0.0006936806403173601,
            startDate: "2018-03-26",
            __typename: "SinglePeriodPerformance"
          },
          {
            cumulativeReturn: 0.1381915063647996,
            endDate: "2018-03-28",
            periodReturn: -0.0002610670136503289,
            startDate: "2018-03-27",
            __typename: "SinglePeriodPerformance"
          },
          {
            cumulativeReturn: 0.13886121042982746,
            endDate: "2018-03-29",
            periodReturn: 0.0005883931318085015,
            startDate: "2018-03-28",
            __typename: "SinglePeriodPerformance"
          },
          {
            cumulativeReturn: 0.13886121042982746,
            endDate: "2018-03-30",
            periodReturn: 0,
            startDate: "2018-03-29",
            __typename: "SinglePeriodPerformance"
          },
          {
            cumulativeReturn: 0.13857115348966165,
            endDate: "2018-04-02",
            periodReturn: -0.0002546903323332044,
            startDate: "2018-03-30",
            __typename: "SinglePeriodPerformance"
          },
          {
            cumulativeReturn: 0.13895075220607045,
            endDate: "2018-04-03",
            periodReturn: 0.0003333992041212736,
            startDate: "2018-04-02",
            __typename: "SinglePeriodPerformance"
          },
          {
            cumulativeReturn: 0.1395850881632792,
            endDate: "2018-04-04",
            periodReturn: 0.0005569476608008995,
            startDate: "2018-04-03",
            __typename: "SinglePeriodPerformance"
          },
          {
            cumulativeReturn: 0.14097213872924708,
            endDate: "2018-04-05",
            periodReturn: 0.0012171540154174477,
            startDate: "2018-04-04",
            __typename: "SinglePeriodPerformance"
          },
          {
            cumulativeReturn: 0.14150847555769341,
            endDate: "2018-04-06",
            periodReturn: 0.0004700700483743882,
            startDate: "2018-04-05",
            __typename: "SinglePeriodPerformance"
          },
          {
            cumulativeReturn: 0.14097508225197553,
            endDate: "2018-04-09",
            periodReturn: -0.0004672705609630197,
            startDate: "2018-04-06",
            __typename: "SinglePeriodPerformance"
          },
          {
            cumulativeReturn: 0.14145638428778362,
            endDate: "2018-04-10",
            periodReturn: 0.0004218339587732957,
            startDate: "2018-04-09",
            __typename: "SinglePeriodPerformance"
          },
          {
            cumulativeReturn: 0.1413241667425933,
            endDate: "2018-04-11",
            periodReturn: -0.00011583232352127548,
            startDate: "2018-04-10",
            __typename: "SinglePeriodPerformance"
          },
          {
            cumulativeReturn: 0.14200048214633698,
            endDate: "2018-04-12",
            periodReturn: 0.0005925708255822445,
            startDate: "2018-04-11",
            __typename: "SinglePeriodPerformance"
          },
          {
            cumulativeReturn: 0.14293700679551558,
            endDate: "2018-04-13",
            periodReturn: 0.0008200737773931296,
            startDate: "2018-04-12",
            __typename: "SinglePeriodPerformance"
          },
          {
            cumulativeReturn: 0.1434331735624288,
            endDate: "2018-04-16",
            periodReturn: 0.0004341155846413126,
            startDate: "2018-04-13",
            __typename: "SinglePeriodPerformance"
          },
          {
            cumulativeReturn: 0.14408509546750503,
            endDate: "2018-04-17",
            periodReturn: 0.0005701442988969724,
            startDate: "2018-04-16",
            __typename: "SinglePeriodPerformance"
          },
          {
            cumulativeReturn: 0.1441571280567593,
            endDate: "2018-04-18",
            periodReturn: 0.0000629608667568645,
            startDate: "2018-04-17",
            __typename: "SinglePeriodPerformance"
          },
          {
            cumulativeReturn: 0.1425864572568405,
            endDate: "2018-04-19",
            periodReturn: -0.0013727754356488116,
            startDate: "2018-04-18",
            __typename: "SinglePeriodPerformance"
          },
          {
            cumulativeReturn: 0.1420789903519668,
            endDate: "2018-04-20",
            periodReturn: -0.00044413873597974184,
            startDate: "2018-04-19",
            __typename: "SinglePeriodPerformance"
          },
          {
            cumulativeReturn: 0.14112328119619755,
            endDate: "2018-04-23",
            periodReturn: -0.0008368152849697315,
            startDate: "2018-04-20",
            __typename: "SinglePeriodPerformance"
          },
          {
            cumulativeReturn: 0.14003814574025308,
            endDate: "2018-04-24",
            periodReturn: -0.0009509362168187596,
            startDate: "2018-04-23",
            __typename: "SinglePeriodPerformance"
          },
          {
            cumulativeReturn: 0.13836884167310903,
            endDate: "2018-04-25",
            periodReturn: -0.001464252817663553,
            startDate: "2018-04-24",
            __typename: "SinglePeriodPerformance"
          },
          {
            cumulativeReturn: 0.13914416353572112,
            endDate: "2018-04-26",
            periodReturn: 0.0006810814159956602,
            startDate: "2018-04-25",
            __typename: "SinglePeriodPerformance"
          },
          {
            cumulativeReturn: 0.1397916169994713,
            endDate: "2018-04-27",
            periodReturn: 0.0005683683281496954,
            startDate: "2018-04-26",
            __typename: "SinglePeriodPerformance"
          },
          {
            cumulativeReturn: 0.13987623002523852,
            endDate: "2018-04-30",
            periodReturn: 0.00007423552209489906,
            startDate: "2018-04-27",
            __typename: "SinglePeriodPerformance"
          },
          {
            cumulativeReturn: 0.13894782566800545,
            endDate: "2018-05-01",
            periodReturn: -0.0008144782150711627,
            startDate: "2018-04-30",
            __typename: "SinglePeriodPerformance"
          },
          {
            cumulativeReturn: 0.13831989236798692,
            endDate: "2018-05-02",
            periodReturn: -0.0005513275374579234,
            startDate: "2018-05-01",
            __typename: "SinglePeriodPerformance"
          },
          {
            cumulativeReturn: 0.13696324808021765,
            endDate: "2018-05-03",
            periodReturn: -0.001191795291345771,
            startDate: "2018-05-02",
            __typename: "SinglePeriodPerformance"
          },
          {
            cumulativeReturn: 0.1365891247496278,
            endDate: "2018-05-04",
            periodReturn: -0.00032905490236515077,
            startDate: "2018-05-03",
            __typename: "SinglePeriodPerformance"
          },
          {
            cumulativeReturn: 0.13701910504306158,
            endDate: "2018-05-07",
            periodReturn: 0.00037830759072967084,
            startDate: "2018-05-04",
            __typename: "SinglePeriodPerformance"
          },
          {
            cumulativeReturn: 0.13524640265590704,
            endDate: "2018-05-08",
            periodReturn: -0.0015590788046497392,
            startDate: "2018-05-07",
            __typename: "SinglePeriodPerformance"
          },
          {
            cumulativeReturn: 0.13416747433868004,
            endDate: "2018-05-09",
            periodReturn: -0.0009503913112632363,
            startDate: "2018-05-08",
            __typename: "SinglePeriodPerformance"
          },
          {
            cumulativeReturn: 0.13592092129264355,
            endDate: "2018-05-10",
            periodReturn: 0.0015460211949613345,
            startDate: "2018-05-09",
            __typename: "SinglePeriodPerformance"
          },
          {
            cumulativeReturn: 0.13679983261790385,
            endDate: "2018-05-11",
            periodReturn: 0.0007737434083528839,
            startDate: "2018-05-10",
            __typename: "SinglePeriodPerformance"
          },
          {
            cumulativeReturn: 0.13666244995526733,
            endDate: "2018-05-14",
            periodReturn: -0.00012085035438485663,
            startDate: "2018-05-11",
            __typename: "SinglePeriodPerformance"
          },
          {
            cumulativeReturn: 0.13478661919645707,
            endDate: "2018-05-15",
            periodReturn: -0.0016502971122905464,
            startDate: "2018-05-14",
            __typename: "SinglePeriodPerformance"
          },
          {
            cumulativeReturn: 0.1351589875745849,
            endDate: "2018-05-16",
            periodReturn: 0.00032813955666073007,
            startDate: "2018-05-15",
            __typename: "SinglePeriodPerformance"
          },
          {
            cumulativeReturn: 0.13475934005772494,
            endDate: "2018-05-17",
            periodReturn: -0.0003520630336671189,
            startDate: "2018-05-16",
            __typename: "SinglePeriodPerformance"
          },
          {
            cumulativeReturn: 0.13484107858308292,
            endDate: "2018-05-18",
            periodReturn: 0.00007203159513427346,
            startDate: "2018-05-17",
            __typename: "SinglePeriodPerformance"
          },
          {
            cumulativeReturn: 0.13499586658620122,
            endDate: "2018-05-21",
            periodReturn: 0.0001363961932992668,
            startDate: "2018-05-18",
            __typename: "SinglePeriodPerformance"
          },
          {
            cumulativeReturn: 0.13572683499589533,
            endDate: "2018-05-22",
            periodReturn: 0.0006440273759698662,
            startDate: "2018-05-21",
            __typename: "SinglePeriodPerformance"
          },
          {
            cumulativeReturn: 0.13575524651171378,
            endDate: "2018-05-23",
            periodReturn: 0.0000250161526020592,
            startDate: "2018-05-22",
            __typename: "SinglePeriodPerformance"
          },
          {
            cumulativeReturn: 0.1364989389933351,
            endDate: "2018-05-24",
            periodReturn: 0.0006547999526354016,
            startDate: "2018-05-23",
            __typename: "SinglePeriodPerformance"
          },
          {
            cumulativeReturn: 0.13701682432421003,
            endDate: "2018-05-25",
            periodReturn: 0.0004556848344562424,
            startDate: "2018-05-24",
            __typename: "SinglePeriodPerformance"
          },
          {
            cumulativeReturn: 0.13701682432421003,
            endDate: "2018-05-28",
            periodReturn: 0,
            startDate: "2018-05-25",
            __typename: "SinglePeriodPerformance"
          },
          {
            cumulativeReturn: 0.13678656299271275,
            endDate: "2018-05-29",
            periodReturn: -0.0002025135658251972,
            startDate: "2018-05-28",
            __typename: "SinglePeriodPerformance"
          },
          {
            cumulativeReturn: 0.13659150563204148,
            endDate: "2018-05-30",
            periodReturn: -0.00017158661706718106,
            startDate: "2018-05-29",
            __typename: "SinglePeriodPerformance"
          },
          {
            cumulativeReturn: 0.13615775113844153,
            endDate: "2018-05-31",
            periodReturn: -0.00038162742854466844,
            startDate: "2018-05-30",
            __typename: "SinglePeriodPerformance"
          },
          {
            cumulativeReturn: 0.13563014869901613,
            endDate: "2018-06-01",
            periodReturn: -0.0004643742815615675,
            startDate: "2018-05-31",
            __typename: "SinglePeriodPerformance"
          },
          {
            cumulativeReturn: 0.13629400413505355,
            endDate: "2018-06-04",
            periodReturn: 0.0005845701056792853,
            startDate: "2018-06-01",
            __typename: "SinglePeriodPerformance"
          },
          {
            cumulativeReturn: 0.13696571170640004,
            endDate: "2018-06-05",
            periodReturn: 0.0005911388856247009,
            startDate: "2018-06-04",
            __typename: "SinglePeriodPerformance"
          },
          {
            cumulativeReturn: 0.13670172165012717,
            endDate: "2018-06-06",
            periodReturn: -0.00023218823008898794,
            startDate: "2018-06-05",
            __typename: "SinglePeriodPerformance"
          },
          {
            cumulativeReturn: 0.13707830161965484,
            endDate: "2018-06-07",
            periodReturn: 0.0003312918088844448,
            startDate: "2018-06-06",
            __typename: "SinglePeriodPerformance"
          },
          {
            cumulativeReturn: 0.1372587879186662,
            endDate: "2018-06-08",
            periodReturn: 0.00015872811815532395,
            startDate: "2018-06-07",
            __typename: "SinglePeriodPerformance"
          },
          {
            cumulativeReturn: 0.1375662969838083,
            endDate: "2018-06-11",
            periodReturn: 0.0002703949781780847,
            startDate: "2018-06-08",
            __typename: "SinglePeriodPerformance"
          },
          {
            cumulativeReturn: 0.13756185738389015,
            endDate: "2018-06-12",
            periodReturn: -0.000003902717520716664,
            startDate: "2018-06-11",
            __typename: "SinglePeriodPerformance"
          },
          {
            cumulativeReturn: 0.13732722966355038,
            endDate: "2018-06-13",
            periodReturn: -0.00020625491160482234,
            startDate: "2018-06-12",
            __typename: "SinglePeriodPerformance"
          },
          {
            cumulativeReturn: 0.13783734915419754,
            endDate: "2018-06-14",
            periodReturn: 0.00044852481971972553,
            startDate: "2018-06-13",
            __typename: "SinglePeriodPerformance"
          },
          {
            cumulativeReturn: 0.13737503929589168,
            endDate: "2018-06-15",
            periodReturn: -0.00040630575068534584,
            startDate: "2018-06-14",
            __typename: "SinglePeriodPerformance"
          },
          {
            cumulativeReturn: 0.1363756647625598,
            endDate: "2018-06-18",
            periodReturn: -0.0008786675448324762,
            startDate: "2018-06-15",
            __typename: "SinglePeriodPerformance"
          },
          {
            cumulativeReturn: 0.13474042444909462,
            endDate: "2018-06-19",
            periodReturn: -0.0014389962440869875,
            startDate: "2018-06-18",
            __typename: "SinglePeriodPerformance"
          },
          {
            cumulativeReturn: 0.13590870275253542,
            endDate: "2018-06-20",
            periodReturn: 0.0010295555514453173,
            startDate: "2018-06-19",
            __typename: "SinglePeriodPerformance"
          },
          {
            cumulativeReturn: 0.13626965402217261,
            endDate: "2018-06-21",
            periodReturn: 0.00031776433155471413,
            startDate: "2018-06-20",
            __typename: "SinglePeriodPerformance"
          },
          {
            cumulativeReturn: 0.1376197970942079,
            endDate: "2018-06-22",
            periodReturn: 0.0011882241748303426,
            startDate: "2018-06-21",
            __typename: "SinglePeriodPerformance"
          },
          {
            cumulativeReturn: 0.13683092116388607,
            endDate: "2018-06-25",
            periodReturn: -0.000693444270517188,
            startDate: "2018-06-22",
            __typename: "SinglePeriodPerformance"
          },
          {
            cumulativeReturn: 0.1362326122486952,
            endDate: "2018-06-26",
            periodReturn: -0.0005262954270968743,
            startDate: "2018-06-25",
            __typename: "SinglePeriodPerformance"
          },
          {
            cumulativeReturn: 0.1353150484657899,
            endDate: "2018-06-27",
            periodReturn: -0.0008075492403701499,
            startDate: "2018-06-26",
            __typename: "SinglePeriodPerformance"
          },
          {
            cumulativeReturn: 0.13319556235047902,
            endDate: "2018-06-28",
            periodReturn: -0.0018668704499028295,
            startDate: "2018-06-27",
            __typename: "SinglePeriodPerformance"
          },
          {
            cumulativeReturn: 0.1337992794472571,
            endDate: "2018-06-29",
            periodReturn: 0.0005327563192409105,
            startDate: "2018-06-28",
            __typename: "SinglePeriodPerformance"
          },
          {
            cumulativeReturn: 0.13272971929201693,
            endDate: "2018-07-02",
            periodReturn: -0.000943341713677538,
            startDate: "2018-06-29",
            __typename: "SinglePeriodPerformance"
          },
          {
            cumulativeReturn: 0.1334198605716903,
            endDate: "2018-07-03",
            periodReturn: 0.0006092726869609509,
            startDate: "2018-07-02",
            __typename: "SinglePeriodPerformance"
          },
          {
            cumulativeReturn: 0.1334198605716903,
            endDate: "2018-07-04",
            periodReturn: 0,
            startDate: "2018-07-03",
            __typename: "SinglePeriodPerformance"
          },
          {
            cumulativeReturn: 0.1337489607849358,
            endDate: "2018-07-05",
            periodReturn: 0.00029036037279193375,
            startDate: "2018-07-04",
            __typename: "SinglePeriodPerformance"
          },
          {
            cumulativeReturn: 0.13466237379624335,
            endDate: "2018-07-06",
            periodReturn: 0.0008056571982877814,
            startDate: "2018-07-05",
            __typename: "SinglePeriodPerformance"
          },
          {
            cumulativeReturn: 0.13633736510446304,
            endDate: "2018-07-09",
            periodReturn: 0.0014762023901572225,
            startDate: "2018-07-06",
            __typename: "SinglePeriodPerformance"
          },
          {
            cumulativeReturn: 0.13691613639532707,
            endDate: "2018-07-10",
            periodReturn: 0.000509330511023801,
            startDate: "2018-07-09",
            __typename: "SinglePeriodPerformance"
          },
          {
            cumulativeReturn: 0.13613431689061217,
            endDate: "2018-07-11",
            periodReturn: -0.0006876668205218197,
            startDate: "2018-07-10",
            __typename: "SinglePeriodPerformance"
          },
          {
            cumulativeReturn: 0.13686390442679697,
            endDate: "2018-07-12",
            periodReturn: 0.0006421666217966661,
            startDate: "2018-07-11",
            __typename: "SinglePeriodPerformance"
          },
          {
            cumulativeReturn: 0.13798533369062316,
            endDate: "2018-07-13",
            periodReturn: 0.0009864234931370934,
            startDate: "2018-07-12",
            __typename: "SinglePeriodPerformance"
          },
          {
            cumulativeReturn: 0.13845380366708127,
            endDate: "2018-07-16",
            periodReturn: 0.00041166609321644827,
            startDate: "2018-07-13",
            __typename: "SinglePeriodPerformance"
          },
          {
            cumulativeReturn: 0.138599257429044,
            endDate: "2018-07-17",
            periodReturn: 0.00012776430760221238,
            startDate: "2018-07-16",
            __typename: "SinglePeriodPerformance"
          },
          {
            cumulativeReturn: 0.1390990287809697,
            endDate: "2018-07-18",
            periodReturn: 0.00043893525194658257,
            startDate: "2018-07-17",
            __typename: "SinglePeriodPerformance"
          },
          {
            cumulativeReturn: 0.13977459629389366,
            endDate: "2018-07-19",
            periodReturn: 0.0005930718013579245,
            startDate: "2018-07-18",
            __typename: "SinglePeriodPerformance"
          },
          {
            cumulativeReturn: 0.14023603750307267,
            endDate: "2018-07-20",
            periodReturn: 0.00040485303908268565,
            startDate: "2018-07-19",
            __typename: "SinglePeriodPerformance"
          },
          {
            cumulativeReturn: 0.14056481777023233,
            endDate: "2018-07-23",
            periodReturn: 0.0002883440413614688,
            startDate: "2018-07-20",
            __typename: "SinglePeriodPerformance"
          },
          {
            cumulativeReturn: 0.1409977723185385,
            endDate: "2018-07-24",
            periodReturn: 0.0003795966187633006,
            startDate: "2018-07-23",
            __typename: "SinglePeriodPerformance"
          },
          {
            cumulativeReturn: 0.1415169571232895,
            endDate: "2018-07-25",
            periodReturn: 0.00045502700999666777,
            startDate: "2018-07-24",
            __typename: "SinglePeriodPerformance"
          },
          {
            cumulativeReturn: 0.1428125983127393,
            endDate: "2018-07-26",
            periodReturn: 0.0011350170326992007,
            startDate: "2018-07-25",
            __typename: "SinglePeriodPerformance"
          },
          {
            cumulativeReturn: 0.14390819613566475,
            endDate: "2018-07-27",
            periodReturn: 0.0009586854612407902,
            startDate: "2018-07-26",
            __typename: "SinglePeriodPerformance"
          },
          {
            cumulativeReturn: 0.14441324423704072,
            endDate: "2018-07-30",
            periodReturn: 0.00044151104352786855,
            startDate: "2018-07-27",
            __typename: "SinglePeriodPerformance"
          },
          {
            cumulativeReturn: 0.1448959385524886,
            endDate: "2018-07-31",
            periodReturn: 0.0004217832307329595,
            startDate: "2018-07-30",
            __typename: "SinglePeriodPerformance"
          },
          {
            cumulativeReturn: 0.1443441927251714,
            endDate: "2018-08-01",
            periodReturn: -0.0004819178833099147,
            startDate: "2018-07-31",
            __typename: "SinglePeriodPerformance"
          },
          {
            cumulativeReturn: 0.14335815957777776,
            endDate: "2018-08-02",
            periodReturn: -0.0008616578418119234,
            startDate: "2018-08-01",
            __typename: "SinglePeriodPerformance"
          },
          {
            cumulativeReturn: 0.14418302014915763,
            endDate: "2018-08-03",
            periodReturn: 0.0007214367295759319,
            startDate: "2018-08-02",
            __typename: "SinglePeriodPerformance"
          },
          {
            cumulativeReturn: 0.14431312554626885,
            endDate: "2018-08-06",
            periodReturn: 0.00011371030230291312,
            startDate: "2018-08-03",
            __typename: "SinglePeriodPerformance"
          },
          {
            cumulativeReturn: 0.14376553579549767,
            endDate: "2018-08-07",
            periodReturn: -0.00047853139018200945,
            startDate: "2018-08-06",
            __typename: "SinglePeriodPerformance"
          },
          {
            cumulativeReturn: 0.143023904907283,
            endDate: "2018-08-08",
            periodReturn: -0.0006484116412013126,
            startDate: "2018-08-07",
            __typename: "SinglePeriodPerformance"
          },
          {
            cumulativeReturn: 0.1419889123816751,
            endDate: "2018-08-09",
            periodReturn: -0.0009054863342441981,
            startDate: "2018-08-08",
            __typename: "SinglePeriodPerformance"
          },
          {
            cumulativeReturn: 0.13984637654062082,
            endDate: "2018-08-10",
            periodReturn: -0.001876144170774725,
            startDate: "2018-08-09",
            __typename: "SinglePeriodPerformance"
          },
          {
            cumulativeReturn: 0.13559888052636082,
            endDate: "2018-08-13",
            periodReturn: -0.003726375853517187,
            startDate: "2018-08-10",
            __typename: "SinglePeriodPerformance"
          },
          {
            cumulativeReturn: 0.135920869169611,
            endDate: "2018-08-14",
            periodReturn: 0.00028354082482101616,
            startDate: "2018-08-13",
            __typename: "SinglePeriodPerformance"
          },
          {
            cumulativeReturn: 0.13557010829341776,
            endDate: "2018-08-15",
            periodReturn: -0.00030878988643774706,
            startDate: "2018-08-14",
            __typename: "SinglePeriodPerformance"
          },
          {
            cumulativeReturn: 0.13714293697779478,
            endDate: "2018-08-16",
            periodReturn: 0.0013850564336716693,
            startDate: "2018-08-15",
            __typename: "SinglePeriodPerformance"
          },
          {
            cumulativeReturn: 0.13758608276213535,
            endDate: "2018-08-17",
            periodReturn: 0.0003897010392714762,
            startDate: "2018-08-16",
            __typename: "SinglePeriodPerformance"
          },
          {
            cumulativeReturn: 0.13793109794042913,
            endDate: "2018-08-20",
            periodReturn: 0.00030328709494757385,
            startDate: "2018-08-17",
            __typename: "SinglePeriodPerformance"
          },
          {
            cumulativeReturn: 0.13840458071402018,
            endDate: "2018-08-21",
            periodReturn: 0.00041609089904294294,
            startDate: "2018-08-20",
            __typename: "SinglePeriodPerformance"
          },
          {
            cumulativeReturn: 0.13894917383289984,
            endDate: "2018-08-22",
            periodReturn: 0.0004783827543439312,
            startDate: "2018-08-21",
            __typename: "SinglePeriodPerformance"
          },
          {
            cumulativeReturn: 0.13927548916297305,
            endDate: "2018-08-23",
            periodReturn: 0.00028650561198892833,
            startDate: "2018-08-22",
            __typename: "SinglePeriodPerformance"
          },
          {
            cumulativeReturn: 0.13945127062001528,
            endDate: "2018-08-24",
            periodReturn: 0.00015429231885905772,
            startDate: "2018-08-23",
            __typename: "SinglePeriodPerformance"
          },
          {
            cumulativeReturn: 0.13993017898084492,
            endDate: "2018-08-27",
            periodReturn: 0.0004202973599468002,
            startDate: "2018-08-24",
            __typename: "SinglePeriodPerformance"
          },
          {
            cumulativeReturn: 0.14005495743860297,
            endDate: "2018-08-28",
            periodReturn: 0.00010946149164118364,
            startDate: "2018-08-27",
            __typename: "SinglePeriodPerformance"
          },
          {
            cumulativeReturn: 0.13969519222312266,
            endDate: "2018-08-29",
            periodReturn: -0.00031556830934596585,
            startDate: "2018-08-28",
            __typename: "SinglePeriodPerformance"
          },
          {
            cumulativeReturn: 0.13859365233184895,
            endDate: "2018-08-30",
            periodReturn: -0.000966521486438056,
            startDate: "2018-08-29",
            __typename: "SinglePeriodPerformance"
          },
          {
            cumulativeReturn: 0.13805203583580017,
            endDate: "2018-08-31",
            periodReturn: -0.00047568901771009083,
            startDate: "2018-08-30",
            __typename: "SinglePeriodPerformance"
          },
          {
            cumulativeReturn: 0.13805203583580017,
            endDate: "2018-09-03",
            periodReturn: 0,
            startDate: "2018-08-31",
            __typename: "SinglePeriodPerformance"
          },
          {
            cumulativeReturn: 0.1368232747912803,
            endDate: "2018-09-04",
            periodReturn: -0.0010797055018818516,
            startDate: "2018-09-03",
            __typename: "SinglePeriodPerformance"
          },
          {
            cumulativeReturn: 0.13658262626574036,
            endDate: "2018-09-05",
            periodReturn: -0.0002116850797096092,
            startDate: "2018-09-04",
            __typename: "SinglePeriodPerformance"
          },
          {
            cumulativeReturn: 0.13787290158764476,
            endDate: "2018-09-06",
            periodReturn: 0.0011352235130881812,
            startDate: "2018-09-05",
            __typename: "SinglePeriodPerformance"
          },
          {
            cumulativeReturn: 0.13800411011516456,
            endDate: "2018-09-07",
            periodReturn: 0.00011531035437854079,
            startDate: "2018-09-06",
            __typename: "SinglePeriodPerformance"
          },
          {
            cumulativeReturn: 0.1384216618273284,
            endDate: "2018-09-10",
            periodReturn: 0.0003669158208239407,
            startDate: "2018-09-07",
            __typename: "SinglePeriodPerformance"
          },
          {
            cumulativeReturn: 0.1383263480964787,
            endDate: "2018-09-11",
            periodReturn: -0.00008372445293850624,
            startDate: "2018-09-10",
            __typename: "SinglePeriodPerformance"
          },
          {
            cumulativeReturn: 0.13952779652779945,
            endDate: "2018-09-12",
            periodReturn: 0.0010554516578921422,
            startDate: "2018-09-11",
            __typename: "SinglePeriodPerformance"
          },
          {
            cumulativeReturn: 0.1412778932630261,
            endDate: "2018-09-13",
            periodReturn: 0.0015358087275794536,
            startDate: "2018-09-12",
            __typename: "SinglePeriodPerformance"
          },
          {
            cumulativeReturn: 0.14284704378148194,
            endDate: "2018-09-14",
            periodReturn: 0.0013749066092653345,
            startDate: "2018-09-13",
            __typename: "SinglePeriodPerformance"
          },
          {
            cumulativeReturn: 0.14345630575071033,
            endDate: "2018-09-17",
            periodReturn: 0.0005331089339939752,
            startDate: "2018-09-14",
            __typename: "SinglePeriodPerformance"
          },
          {
            cumulativeReturn: 0.14348492927699952,
            endDate: "2018-09-18",
            periodReturn: 0.000025032461796095565,
            startDate: "2018-09-17",
            __typename: "SinglePeriodPerformance"
          },
          {
            cumulativeReturn: 0.14401097055424894,
            endDate: "2018-09-19",
            periodReturn: 0.00046003341520385686,
            startDate: "2018-09-18",
            __typename: "SinglePeriodPerformance"
          },
          {
            cumulativeReturn: 0.14575734598633439,
            endDate: "2018-09-20",
            periodReturn: 0.001526537312172218,
            startDate: "2018-09-19",
            __typename: "SinglePeriodPerformance"
          },
          {
            cumulativeReturn: 0.1470987725580788,
            endDate: "2018-09-21",
            periodReturn: 0.001170777195052177,
            startDate: "2018-09-20",
            __typename: "SinglePeriodPerformance"
          },
          {
            cumulativeReturn: 0.14764453485300932,
            endDate: "2018-09-24",
            periodReturn: 0.0004757761999112545,
            startDate: "2018-09-21",
            __typename: "SinglePeriodPerformance"
          },
          {
            cumulativeReturn: 0.14797539436126161,
            endDate: "2018-09-25",
            periodReturn: 0.0002882944136483378,
            startDate: "2018-09-24",
            __typename: "SinglePeriodPerformance"
          },
          {
            cumulativeReturn: 0.149097970046143,
            endDate: "2018-09-26",
            periodReturn: 0.000977874343296452,
            startDate: "2018-09-25",
            __typename: "SinglePeriodPerformance"
          },
          {
            cumulativeReturn: 0.15040844743209858,
            endDate: "2018-09-27",
            periodReturn: 0.0011404400844106481,
            startDate: "2018-09-26",
            __typename: "SinglePeriodPerformance"
          },
          {
            cumulativeReturn: 0.15109117286335727,
            endDate: "2018-09-28",
            periodReturn: 0.0005934635066203437,
            startDate: "2018-09-27",
            __typename: "SinglePeriodPerformance"
          },
          {
            cumulativeReturn: 0.15150214646794646,
            endDate: "2018-10-01",
            periodReturn: 0.0003570295857337692,
            startDate: "2018-09-28",
            __typename: "SinglePeriodPerformance"
          },
          {
            cumulativeReturn: 0.15199412638258125,
            endDate: "2018-10-02",
            periodReturn: 0.0004272505406469672,
            startDate: "2018-10-01",
            __typename: "SinglePeriodPerformance"
          },
          {
            cumulativeReturn: 0.15167203215088487,
            endDate: "2018-10-03",
            periodReturn: -0.00027959711279772003,
            startDate: "2018-10-02",
            __typename: "SinglePeriodPerformance"
          },
          {
            cumulativeReturn: 0.148997336838806,
            endDate: "2018-10-04",
            periodReturn: -0.0023224453120420604,
            startDate: "2018-10-03",
            __typename: "SinglePeriodPerformance"
          },
          {
            cumulativeReturn: 0.14781152325131774,
            endDate: "2018-10-05",
            periodReturn: -0.0010320420678701136,
            startDate: "2018-10-04",
            __typename: "SinglePeriodPerformance"
          },
          {
            cumulativeReturn: 0.14788074876083868,
            endDate: "2018-10-08",
            periodReturn: 0.00006031086822065891,
            startDate: "2018-10-05",
            __typename: "SinglePeriodPerformance"
          },
          {
            cumulativeReturn: 0.14705866047913085,
            endDate: "2018-10-09",
            periodReturn: -0.0007161791698268844,
            startDate: "2018-10-08",
            __typename: "SinglePeriodPerformance"
          },
          {
            cumulativeReturn: 0.14539749928973245,
            endDate: "2018-10-10",
            periodReturn: -0.0014481920119974118,
            startDate: "2018-10-09",
            __typename: "SinglePeriodPerformance"
          },
          {
            cumulativeReturn: 0.14532928328234807,
            endDate: "2018-10-11",
            periodReturn: -0.000059556623291740205,
            startDate: "2018-10-10",
            __typename: "SinglePeriodPerformance"
          },
          {
            cumulativeReturn: 0.1466020562127357,
            endDate: "2018-10-12",
            periodReturn: 0.0011112724951379143,
            startDate: "2018-10-11",
            __typename: "SinglePeriodPerformance"
          },
          {
            cumulativeReturn: 0.1470735106945622,
            endDate: "2018-10-15",
            periodReturn: 0.00041117533260295576,
            startDate: "2018-10-12",
            __typename: "SinglePeriodPerformance"
          },
          {
            cumulativeReturn: 0.14815862269311952,
            endDate: "2018-10-16",
            periodReturn: 0.0009459829631148127,
            startDate: "2018-10-15",
            __typename: "SinglePeriodPerformance"
          },
          {
            cumulativeReturn: 0.14838467684709045,
            endDate: "2018-10-17",
            periodReturn: 0.00019688407986766465,
            startDate: "2018-10-16",
            __typename: "SinglePeriodPerformance"
          },
          {
            cumulativeReturn: 0.1471801489765543,
            endDate: "2018-10-18",
            periodReturn: -0.0010488888390980747,
            startDate: "2018-10-17",
            __typename: "SinglePeriodPerformance"
          },
          {
            cumulativeReturn: 0.14717951406962237,
            endDate: "2018-10-19",
            periodReturn: -5.534500683217376e-7,
            startDate: "2018-10-18",
            __typename: "SinglePeriodPerformance"
          },
          {
            cumulativeReturn: 0.14734649599737315,
            endDate: "2018-10-22",
            periodReturn: 0.0001455586729912434,
            startDate: "2018-10-19",
            __typename: "SinglePeriodPerformance"
          },
          {
            cumulativeReturn: 0.14571367469603902,
            endDate: "2018-10-23",
            periodReturn: -0.0014231283287398264,
            startDate: "2018-10-22",
            __typename: "SinglePeriodPerformance"
          },
          {
            cumulativeReturn: 0.14577774199968596,
            endDate: "2018-10-24",
            periodReturn: 0.00005591912278070637,
            startDate: "2018-10-23",
            __typename: "SinglePeriodPerformance"
          },
          {
            cumulativeReturn: 0.14487005327919333,
            endDate: "2018-10-25",
            periodReturn: -0.0007922031361059531,
            startDate: "2018-10-24",
            __typename: "SinglePeriodPerformance"
          },
          {
            cumulativeReturn: 0.14423260420151673,
            endDate: "2018-10-26",
            periodReturn: -0.0005567872754210227,
            startDate: "2018-10-25",
            __typename: "SinglePeriodPerformance"
          },
          {
            cumulativeReturn: 0.14386945944707064,
            endDate: "2018-10-29",
            periodReturn: -0.00031736969660960536,
            startDate: "2018-10-26",
            __typename: "SinglePeriodPerformance"
          },
          {
            cumulativeReturn: 0.14235715689719153,
            endDate: "2018-10-30",
            periodReturn: -0.0013220936509748833,
            startDate: "2018-10-29",
            __typename: "SinglePeriodPerformance"
          },
          {
            cumulativeReturn: 0.14262859923830096,
            endDate: "2018-10-31",
            periodReturn: 0.0002376160025528562,
            startDate: "2018-10-30",
            __typename: "SinglePeriodPerformance"
          },
          {
            cumulativeReturn: 0.14362125087493616,
            endDate: "2018-11-01",
            periodReturn: 0.0008687439096981319,
            startDate: "2018-10-31",
            __typename: "SinglePeriodPerformance"
          },
          {
            cumulativeReturn: 0.1441793556099713,
            endDate: "2018-11-02",
            periodReturn: 0.0004880153587634467,
            startDate: "2018-11-01",
            __typename: "SinglePeriodPerformance"
          },
          {
            cumulativeReturn: 0.14494447189301285,
            endDate: "2018-11-05",
            periodReturn: 0.0006687031008645784,
            startDate: "2018-11-02",
            __typename: "SinglePeriodPerformance"
          },
          {
            cumulativeReturn: 0.14560464675614404,
            endDate: "2018-11-06",
            periodReturn: 0.0005765998957482513,
            startDate: "2018-11-05",
            __typename: "SinglePeriodPerformance"
          },
          {
            cumulativeReturn: 0.1472031562749292,
            endDate: "2018-11-07",
            periodReturn: 0.0013953413363952574,
            startDate: "2018-11-06",
            __typename: "SinglePeriodPerformance"
          },
          {
            cumulativeReturn: 0.1472824604435108,
            endDate: "2018-11-08",
            periodReturn: 0.00006912826917171265,
            startDate: "2018-11-07",
            __typename: "SinglePeriodPerformance"
          },
          {
            cumulativeReturn: 0.14618830138373284,
            endDate: "2018-11-09",
            periodReturn: -0.000953696319348418,
            startDate: "2018-11-08",
            __typename: "SinglePeriodPerformance"
          },
          {
            cumulativeReturn: 0.1463109021580744,
            endDate: "2018-11-12",
            periodReturn: 0.00010696390304590114,
            startDate: "2018-11-09",
            __typename: "SinglePeriodPerformance"
          },
          {
            cumulativeReturn: 0.14446663838547402,
            endDate: "2018-11-13",
            periodReturn: -0.0016088687363334962,
            startDate: "2018-11-12",
            __typename: "SinglePeriodPerformance"
          },
          {
            cumulativeReturn: 0.14268601303875883,
            endDate: "2018-11-14",
            periodReturn: -0.0015558560529358096,
            startDate: "2018-11-13",
            __typename: "SinglePeriodPerformance"
          },
          {
            cumulativeReturn: 0.14077485608212914,
            endDate: "2018-11-15",
            periodReturn: -0.0016725127767577036,
            startDate: "2018-11-14",
            __typename: "SinglePeriodPerformance"
          },
          {
            cumulativeReturn: 0.140146965527985,
            endDate: "2018-11-16",
            periodReturn: -0.0005504070770813731,
            startDate: "2018-11-15",
            __typename: "SinglePeriodPerformance"
          },
          {
            cumulativeReturn: 0.13910460642328593,
            endDate: "2018-11-19",
            periodReturn: -0.0009142322316461402,
            startDate: "2018-11-16",
            __typename: "SinglePeriodPerformance"
          },
          {
            cumulativeReturn: 0.13583566935724178,
            endDate: "2018-11-20",
            periodReturn: -0.0028697426448905518,
            startDate: "2018-11-19",
            __typename: "SinglePeriodPerformance"
          },
          {
            cumulativeReturn: 0.13650248020333766,
            endDate: "2018-11-21",
            periodReturn: 0.0005870663020057674,
            startDate: "2018-11-20",
            __typename: "SinglePeriodPerformance"
          },
          {
            cumulativeReturn: 0.13650248020333766,
            endDate: "2018-11-22",
            periodReturn: 0,
            startDate: "2018-11-21",
            __typename: "SinglePeriodPerformance"
          },
          {
            cumulativeReturn: 0.13634049521254976,
            endDate: "2018-11-23",
            periodReturn: -0.00014252937728646448,
            startDate: "2018-11-22",
            __typename: "SinglePeriodPerformance"
          },
          {
            cumulativeReturn: 0.1358974624160343,
            endDate: "2018-11-26",
            periodReturn: -0.0003898768004678765,
            startDate: "2018-11-23",
            __typename: "SinglePeriodPerformance"
          },
          {
            cumulativeReturn: 0.1343675563735549,
            endDate: "2018-11-27",
            periodReturn: -0.0013468698479397864,
            startDate: "2018-11-26",
            __typename: "SinglePeriodPerformance"
          },
          {
            cumulativeReturn: 0.13561402044776072,
            endDate: "2018-11-28",
            periodReturn: 0.0010988185153942072,
            startDate: "2018-11-27",
            __typename: "SinglePeriodPerformance"
          },
          {
            cumulativeReturn: 0.13687921632921207,
            endDate: "2018-11-29",
            periodReturn: 0.0011141073099400639,
            startDate: "2018-11-28",
            __typename: "SinglePeriodPerformance"
          },
          {
            cumulativeReturn: 0.13710446153703182,
            endDate: "2018-11-30",
            periodReturn: 0.0001981258911100614,
            startDate: "2018-11-29",
            __typename: "SinglePeriodPerformance"
          },
          {
            cumulativeReturn: 0.1403386082188831,
            endDate: "2018-12-03",
            periodReturn: 0.002844194875007125,
            startDate: "2018-11-30",
            __typename: "SinglePeriodPerformance"
          },
          {
            cumulativeReturn: 0.13998507417290673,
            endDate: "2018-12-04",
            periodReturn: -0.00031002549894239447,
            startDate: "2018-12-03",
            __typename: "SinglePeriodPerformance"
          },
          {
            cumulativeReturn: 0.13998507417290673,
            endDate: "2018-12-05",
            periodReturn: 0,
            startDate: "2018-12-04",
            __typename: "SinglePeriodPerformance"
          },
          {
            cumulativeReturn: 0.13664514573225284,
            endDate: "2018-12-06",
            periodReturn: -0.0029298001494247826,
            startDate: "2018-12-05",
            __typename: "SinglePeriodPerformance"
          },
          {
            cumulativeReturn: 0.13724451398905058,
            endDate: "2018-12-07",
            periodReturn: 0.0005273134355503456,
            startDate: "2018-12-06",
            __typename: "SinglePeriodPerformance"
          },
          {
            cumulativeReturn: 0.13559506378194297,
            endDate: "2018-12-10",
            periodReturn: -0.0014503918786312633,
            startDate: "2018-12-07",
            __typename: "SinglePeriodPerformance"
          },
          {
            cumulativeReturn: 0.13541745890765755,
            endDate: "2018-12-11",
            periodReturn: -0.00015639806824622985,
            startDate: "2018-12-10",
            __typename: "SinglePeriodPerformance"
          },
          {
            cumulativeReturn: 0.13579950874304858,
            endDate: "2018-12-12",
            periodReturn: 0.0003364840239102556,
            startDate: "2018-12-11",
            __typename: "SinglePeriodPerformance"
          },
          {
            cumulativeReturn: 0.13626031135699668,
            endDate: "2018-12-13",
            periodReturn: 0.00040570770668680597,
            startDate: "2018-12-12",
            __typename: "SinglePeriodPerformance"
          },
          {
            cumulativeReturn: 0.13573748251988604,
            endDate: "2018-12-14",
            periodReturn: -0.00046013121455084493,
            startDate: "2018-12-13",
            __typename: "SinglePeriodPerformance"
          },
          {
            cumulativeReturn: 0.13410209095578352,
            endDate: "2018-12-17",
            periodReturn: -0.00143993800440041,
            startDate: "2018-12-14",
            __typename: "SinglePeriodPerformance"
          },
          {
            cumulativeReturn: 0.13276959915532283,
            endDate: "2018-12-18",
            periodReturn: -0.0011749310852057612,
            startDate: "2018-12-17",
            __typename: "SinglePeriodPerformance"
          },
          {
            cumulativeReturn: 0.1312962437320413,
            endDate: "2018-12-19",
            periodReturn: -0.0013006664588986986,
            startDate: "2018-12-18",
            __typename: "SinglePeriodPerformance"
          },
          {
            cumulativeReturn: 0.12603514553642325,
            endDate: "2018-12-20",
            periodReturn: -0.004650504432209689,
            startDate: "2018-12-19",
            __typename: "SinglePeriodPerformance"
          },
          {
            cumulativeReturn: 0.12473737926130157,
            endDate: "2018-12-21",
            periodReturn: -0.0011525095644358925,
            startDate: "2018-12-20",
            __typename: "SinglePeriodPerformance"
          },
          {
            cumulativeReturn: 0.12350581624681212,
            endDate: "2018-12-24",
            periodReturn: -0.0010949782919976497,
            startDate: "2018-12-21",
            __typename: "SinglePeriodPerformance"
          },
          {
            cumulativeReturn: 0.12350581624681212,
            endDate: "2018-12-25",
            periodReturn: 0,
            startDate: "2018-12-24",
            __typename: "SinglePeriodPerformance"
          },
          {
            cumulativeReturn: 0.1229236107960785,
            endDate: "2018-12-26",
            periodReturn: -0.0005182042160479658,
            startDate: "2018-12-25",
            __typename: "SinglePeriodPerformance"
          },
          {
            cumulativeReturn: 0.12357999148418242,
            endDate: "2018-12-27",
            periodReturn: 0.0005845283524126589,
            startDate: "2018-12-26",
            __typename: "SinglePeriodPerformance"
          },
          {
            cumulativeReturn: 0.12482483580255277,
            endDate: "2018-12-28",
            periodReturn: 0.0011079267411358337,
            startDate: "2018-12-27",
            __typename: "SinglePeriodPerformance"
          },
          {
            cumulativeReturn: 0.12587080680970253,
            endDate: "2018-12-31",
            periodReturn: 0.0009298967926889363,
            startDate: "2018-12-28",
            __typename: "SinglePeriodPerformance"
          },
          {
            cumulativeReturn: 0.12587080680970253,
            endDate: "2019-01-01",
            periodReturn: 0,
            startDate: "2018-12-31",
            __typename: "SinglePeriodPerformance"
          },
          {
            cumulativeReturn: 0.1265597303228858,
            endDate: "2019-01-02",
            periodReturn: 0.0006119028124865066,
            startDate: "2019-01-01",
            __typename: "SinglePeriodPerformance"
          },
          {
            cumulativeReturn: 0.12786546313440206,
            endDate: "2019-01-03",
            periodReturn: 0.0011590444575380581,
            startDate: "2019-01-02",
            __typename: "SinglePeriodPerformance"
          },
          {
            cumulativeReturn: 0.13527224945342153,
            endDate: "2019-01-04",
            periodReturn: 0.006567083185999396,
            startDate: "2019-01-03",
            __typename: "SinglePeriodPerformance"
          },
          {
            cumulativeReturn: 0.14098228133876067,
            endDate: "2019-01-07",
            periodReturn: 0.0050296586462748715,
            startDate: "2019-01-04",
            __typename: "SinglePeriodPerformance"
          },
          {
            cumulativeReturn: 0.14404217086932203,
            endDate: "2019-01-08",
            periodReturn: 0.002681802847079525,
            startDate: "2019-01-07",
            __typename: "SinglePeriodPerformance"
          },
          {
            cumulativeReturn: 0.14668581044498064,
            endDate: "2019-01-09",
            periodReturn: 0.0023107885731606303,
            startDate: "2019-01-08",
            __typename: "SinglePeriodPerformance"
          },
          {
            cumulativeReturn: 0.14640617871602624,
            endDate: "2019-01-10",
            periodReturn: -0.0002438608086079751,
            startDate: "2019-01-09",
            __typename: "SinglePeriodPerformance"
          },
          {
            cumulativeReturn: 0.14725094217851953,
            endDate: "2019-01-11",
            periodReturn: 0.0007368797187043199,
            startDate: "2019-01-10",
            __typename: "SinglePeriodPerformance"
          },
          {
            cumulativeReturn: 0.14632707493743813,
            endDate: "2019-01-14",
            periodReturn: -0.0008052878469004491,
            startDate: "2019-01-11",
            __typename: "SinglePeriodPerformance"
          },
          {
            cumulativeReturn: 0.14747932294519406,
            endDate: "2019-01-15",
            periodReturn: 0.0010051651338854205,
            startDate: "2019-01-14",
            __typename: "SinglePeriodPerformance"
          },
          {
            cumulativeReturn: 0.15003091507932353,
            endDate: "2019-01-16",
            periodReturn: 0.0022236497713792407,
            startDate: "2019-01-15",
            __typename: "SinglePeriodPerformance"
          },
          {
            cumulativeReturn: 0.1505429450634408,
            endDate: "2019-01-17",
            periodReturn: 0.0004452314954350134,
            startDate: "2019-01-16",
            __typename: "SinglePeriodPerformance"
          },
          {
            cumulativeReturn: 0.15294740608316593,
            endDate: "2019-01-18",
            periodReturn: 0.002089848996981594,
            startDate: "2019-01-17",
            __typename: "SinglePeriodPerformance"
          },
          {
            cumulativeReturn: 0.15294740608316593,
            endDate: "2019-01-21",
            periodReturn: 0,
            startDate: "2019-01-18",
            __typename: "SinglePeriodPerformance"
          },
          {
            cumulativeReturn: 0.15279798600144323,
            endDate: "2019-01-22",
            periodReturn: -0.00012959835022328999,
            startDate: "2019-01-21",
            __typename: "SinglePeriodPerformance"
          },
          {
            cumulativeReturn: 0.15325815905539408,
            endDate: "2019-01-23",
            periodReturn: 0.00039917926604570103,
            startDate: "2019-01-22",
            __typename: "SinglePeriodPerformance"
          },
          {
            cumulativeReturn: 0.15418497940089226,
            endDate: "2019-01-24",
            periodReturn: 0.0008036538377993639,
            startDate: "2019-01-23",
            __typename: "SinglePeriodPerformance"
          },
          {
            cumulativeReturn: 0.15564222166448127,
            endDate: "2019-01-25",
            periodReturn: 0.0012625725421805737,
            startDate: "2019-01-24",
            __typename: "SinglePeriodPerformance"
          },
          {
            cumulativeReturn: 0.15535400248012587,
            endDate: "2019-01-28",
            periodReturn: -0.0002494017429895997,
            startDate: "2019-01-25",
            __typename: "SinglePeriodPerformance"
          },
          {
            cumulativeReturn: 0.155785301818393,
            endDate: "2019-01-29",
            periodReturn: 0.0003733049241543786,
            startDate: "2019-01-28",
            __typename: "SinglePeriodPerformance"
          },
          {
            cumulativeReturn: 0.15714750752392304,
            endDate: "2019-01-30",
            periodReturn: 0.0011785975331118808,
            startDate: "2019-01-29",
            __typename: "SinglePeriodPerformance"
          },
          {
            cumulativeReturn: 0.16039958557657275,
            endDate: "2019-01-31",
            periodReturn: 0.002810426528600783,
            startDate: "2019-01-30",
            __typename: "SinglePeriodPerformance"
          },
          {
            cumulativeReturn: 0.1610860921446664,
            endDate: "2019-02-01",
            periodReturn: 0.0005916122141257618,
            startDate: "2019-01-31",
            __typename: "SinglePeriodPerformance"
          },
          {
            cumulativeReturn: 0.16196401354698087,
            endDate: "2019-02-04",
            periodReturn: 0.000756120849482287,
            startDate: "2019-02-01",
            __typename: "SinglePeriodPerformance"
          },
          {
            cumulativeReturn: 0.164477168023468,
            endDate: "2019-02-05",
            periodReturn: 0.0021628505247899103,
            startDate: "2019-02-04",
            __typename: "SinglePeriodPerformance"
          },
          {
            cumulativeReturn: 0.16515045709552645,
            endDate: "2019-02-06",
            periodReturn: 0.0005781900156971949,
            startDate: "2019-02-05",
            __typename: "SinglePeriodPerformance"
          },
          {
            cumulativeReturn: 0.16402976305630257,
            endDate: "2019-02-07",
            periodReturn: -0.0009618449123022367,
            startDate: "2019-02-06",
            __typename: "SinglePeriodPerformance"
          },
          {
            cumulativeReturn: 0.16358492615161024,
            endDate: "2019-02-08",
            periodReturn: -0.00038215251775387067,
            startDate: "2019-02-07",
            __typename: "SinglePeriodPerformance"
          },
          {
            cumulativeReturn: 0.1633490089912113,
            endDate: "2019-02-11",
            periodReturn: -0.00020275027210878312,
            startDate: "2019-02-08",
            __typename: "SinglePeriodPerformance"
          },
          {
            cumulativeReturn: 0.164787776769453,
            endDate: "2019-02-12",
            periodReturn: 0.001236746468275394,
            startDate: "2019-02-11",
            __typename: "SinglePeriodPerformance"
          },
          {
            cumulativeReturn: 0.16556528123099468,
            endDate: "2019-02-13",
            periodReturn: 0.0006675074009604298,
            startDate: "2019-02-12",
            __typename: "SinglePeriodPerformance"
          },
          {
            cumulativeReturn: 0.1658479527479524,
            endDate: "2019-02-14",
            periodReturn: 0.00024251882027509115,
            startDate: "2019-02-13",
            __typename: "SinglePeriodPerformance"
          },
          {
            cumulativeReturn: 0.16720826836327052,
            endDate: "2019-02-15",
            periodReturn: 0.0011668036231584015,
            startDate: "2019-02-14",
            __typename: "SinglePeriodPerformance"
          },
          {
            cumulativeReturn: 0.16720826836327052,
            endDate: "2019-02-18",
            periodReturn: 0,
            startDate: "2019-02-15",
            __typename: "SinglePeriodPerformance"
          },
          {
            cumulativeReturn: 0.16845841349391466,
            endDate: "2019-02-19",
            periodReturn: 0.001071055752883814,
            startDate: "2019-02-18",
            __typename: "SinglePeriodPerformance"
          },
          {
            cumulativeReturn: 0.169167600708219,
            endDate: "2019-02-20",
            periodReturn: 0.0006069426229589704,
            startDate: "2019-02-19",
            __typename: "SinglePeriodPerformance"
          },
          {
            cumulativeReturn: 0.16976095939758462,
            endDate: "2019-02-21",
            periodReturn: 0.0005075052447623323,
            startDate: "2019-02-20",
            __typename: "SinglePeriodPerformance"
          },
          {
            cumulativeReturn: 0.17095062310254394,
            endDate: "2019-02-22",
            periodReturn: 0.0010170143698177367,
            startDate: "2019-02-21",
            __typename: "SinglePeriodPerformance"
          },
          {
            cumulativeReturn: 0.17227195029197828,
            endDate: "2019-02-25",
            periodReturn: 0.001128422636586826,
            startDate: "2019-02-22",
            __typename: "SinglePeriodPerformance"
          },
          {
            cumulativeReturn: 0.17374725305563476,
            endDate: "2019-02-26",
            periodReturn: 0.0012584987325585946,
            startDate: "2019-02-25",
            __typename: "SinglePeriodPerformance"
          },
          {
            cumulativeReturn: 0.174030013320829,
            endDate: "2019-02-27",
            periodReturn: 0.00024090387812039,
            startDate: "2019-02-26",
            __typename: "SinglePeriodPerformance"
          },
          {
            cumulativeReturn: 0.1742576719972151,
            endDate: "2019-02-28",
            periodReturn: 0.0001939121434742489,
            startDate: "2019-02-27",
            __typename: "SinglePeriodPerformance"
          },
          {
            cumulativeReturn: 0.17386056927107507,
            endDate: "2019-03-01",
            periodReturn: -0.0003381734142426986,
            startDate: "2019-02-28",
            __typename: "SinglePeriodPerformance"
          },
          {
            cumulativeReturn: 0.17405912283153602,
            endDate: "2019-03-04",
            periodReturn: 0.0001691457790291711,
            startDate: "2019-03-01",
            __typename: "SinglePeriodPerformance"
          },
          {
            cumulativeReturn: 0.17381628568906526,
            endDate: "2019-03-05",
            periodReturn: -0.00020683553131895302,
            startDate: "2019-03-04",
            __typename: "SinglePeriodPerformance"
          },
          {
            cumulativeReturn: 0.1735487888567835,
            endDate: "2019-03-06",
            periodReturn: -0.00022788645509788104,
            startDate: "2019-03-05",
            __typename: "SinglePeriodPerformance"
          },
          {
            cumulativeReturn: 0.1728083349412759,
            endDate: "2019-03-07",
            periodReturn: -0.0006309528181004545,
            startDate: "2019-03-06",
            __typename: "SinglePeriodPerformance"
          },
          {
            cumulativeReturn: 0.170915538261466,
            endDate: "2019-03-08",
            periodReturn: -0.0016139011153128793,
            startDate: "2019-03-07",
            __typename: "SinglePeriodPerformance"
          },
          {
            cumulativeReturn: 0.17225085890290992,
            endDate: "2019-03-11",
            periodReturn: 0.001140407311894192,
            startDate: "2019-03-08",
            __typename: "SinglePeriodPerformance"
          },
          {
            cumulativeReturn: 0.17389461711679655,
            endDate: "2019-03-12",
            periodReturn: 0.0014022239364575198,
            startDate: "2019-03-11",
            __typename: "SinglePeriodPerformance"
          },
          {
            cumulativeReturn: 0.17492525580952822,
            endDate: "2019-03-13",
            periodReturn: 0.000877965260001656,
            startDate: "2019-03-12",
            __typename: "SinglePeriodPerformance"
          },
          {
            cumulativeReturn: 0.17551765522959406,
            endDate: "2019-03-14",
            periodReturn: 0.0005042017925282383,
            startDate: "2019-03-13",
            __typename: "SinglePeriodPerformance"
          },
          {
            cumulativeReturn: 0.17669747552593562,
            endDate: "2019-03-15",
            periodReturn: 0.0010036602096896517,
            startDate: "2019-03-14",
            __typename: "SinglePeriodPerformance"
          },
          {
            cumulativeReturn: 0.1775621342647309,
            endDate: "2019-03-18",
            periodReturn: 0.0007348182151990538,
            startDate: "2019-03-15",
            __typename: "SinglePeriodPerformance"
          },
          {
            cumulativeReturn: 0.17823965451997648,
            endDate: "2019-03-19",
            periodReturn: 0.0005753583913163849,
            startDate: "2019-03-18",
            __typename: "SinglePeriodPerformance"
          },
          {
            cumulativeReturn: 0.17853986122232923,
            endDate: "2019-03-20",
            periodReturn: 0.0002547925638057173,
            startDate: "2019-03-19",
            __typename: "SinglePeriodPerformance"
          },
          {
            cumulativeReturn: 0.17968994410181072,
            endDate: "2019-03-21",
            periodReturn: 0.0009758540354236335,
            startDate: "2019-03-20",
            __typename: "SinglePeriodPerformance"
          },
          {
            cumulativeReturn: 0.1788235987854605,
            endDate: "2019-03-22",
            periodReturn: -0.0007343839122150561,
            startDate: "2019-03-21",
            __typename: "SinglePeriodPerformance"
          },
          {
            cumulativeReturn: 0.17724583429547636,
            endDate: "2019-03-25",
            periodReturn: -0.001338422891779289,
            startDate: "2019-03-22",
            __typename: "SinglePeriodPerformance"
          },
          {
            cumulativeReturn: 0.17803420201168252,
            endDate: "2019-03-26",
            periodReturn: 0.0006696712727618034,
            startDate: "2019-03-25",
            __typename: "SinglePeriodPerformance"
          },
          {
            cumulativeReturn: 0.1772219621888349,
            endDate: "2019-03-27",
            periodReturn: -0.0006894874711283186,
            startDate: "2019-03-26",
            __typename: "SinglePeriodPerformance"
          },
          {
            cumulativeReturn: 0.1767390671491289,
            endDate: "2019-03-28",
            periodReturn: -0.00041019880295825996,
            startDate: "2019-03-27",
            __typename: "SinglePeriodPerformance"
          },
          {
            cumulativeReturn: 0.1787802330503605,
            endDate: "2019-03-29",
            periodReturn: 0.0017345951691538737,
            startDate: "2019-03-28",
            __typename: "SinglePeriodPerformance"
          },
          {
            cumulativeReturn: 0.180359789454267,
            endDate: "2019-04-01",
            periodReturn: 0.0013399922730457812,
            startDate: "2019-03-29",
            __typename: "SinglePeriodPerformance"
          },
          {
            cumulativeReturn: 0.1811821471853854,
            endDate: "2019-04-02",
            periodReturn: 0.000696700902949599,
            startDate: "2019-04-01",
            __typename: "SinglePeriodPerformance"
          },
          {
            cumulativeReturn: 0.1820407292766133,
            endDate: "2019-04-03",
            periodReturn: 0.0007268837353102753,
            startDate: "2019-04-02",
            __typename: "SinglePeriodPerformance"
          },
          {
            cumulativeReturn: 0.18281480088725766,
            endDate: "2019-04-04",
            periodReturn: 0.0006548603541926223,
            startDate: "2019-04-03",
            __typename: "SinglePeriodPerformance"
          },
          {
            cumulativeReturn: 0.18421651902488345,
            endDate: "2019-04-05",
            periodReturn: 0.0011850698322123413,
            startDate: "2019-04-04",
            __typename: "SinglePeriodPerformance"
          },
          {
            cumulativeReturn: 0.184402367909398,
            endDate: "2019-04-08",
            periodReturn: 0.00015693826384680548,
            startDate: "2019-04-05",
            __typename: "SinglePeriodPerformance"
          },
          {
            cumulativeReturn: 0.18461421504877817,
            endDate: "2019-04-09",
            periodReturn: 0.00017886416400363341,
            startDate: "2019-04-08",
            __typename: "SinglePeriodPerformance"
          },
          {
            cumulativeReturn: 0.18516260449361055,
            endDate: "2019-04-10",
            periodReturn: 0.00046292661177442084,
            startDate: "2019-04-09",
            __typename: "SinglePeriodPerformance"
          },
          {
            cumulativeReturn: 0.1856475068250374,
            endDate: "2019-04-11",
            periodReturn: 0.00040914413734308375,
            startDate: "2019-04-10",
            __typename: "SinglePeriodPerformance"
          },
          {
            cumulativeReturn: 0.18607286185602723,
            endDate: "2019-04-12",
            periodReturn: 0.00035875336349233997,
            startDate: "2019-04-11",
            __typename: "SinglePeriodPerformance"
          },
          {
            cumulativeReturn: 0.1863816555625204,
            endDate: "2019-04-15",
            periodReturn: 0.0002603496938710591,
            startDate: "2019-04-12",
            __typename: "SinglePeriodPerformance"
          },
          {
            cumulativeReturn: 0.18666976611044328,
            endDate: "2019-04-16",
            periodReturn: 0.00024284811432490245,
            startDate: "2019-04-15",
            __typename: "SinglePeriodPerformance"
          },
          {
            cumulativeReturn: 0.1870384194178758,
            endDate: "2019-04-17",
            periodReturn: 0.0003106620881064707,
            startDate: "2019-04-16",
            __typename: "SinglePeriodPerformance"
          },
          {
            cumulativeReturn: 0.18745336354186004,
            endDate: "2019-04-18",
            periodReturn: 0.000349562505472832,
            startDate: "2019-04-17",
            __typename: "SinglePeriodPerformance"
          },
          {
            cumulativeReturn: 0.18745336354186004,
            endDate: "2019-04-19",
            periodReturn: 0,
            startDate: "2019-04-18",
            __typename: "SinglePeriodPerformance"
          },
          {
            cumulativeReturn: 0.18732988652122473,
            endDate: "2019-04-22",
            periodReturn: -0.00010398473272835316,
            startDate: "2019-04-19",
            __typename: "SinglePeriodPerformance"
          },
          {
            cumulativeReturn: 0.18817029360999693,
            endDate: "2019-04-23",
            periodReturn: 0.0007078126292553906,
            startDate: "2019-04-22",
            __typename: "SinglePeriodPerformance"
          },
          {
            cumulativeReturn: 0.18855880991845075,
            endDate: "2019-04-24",
            periodReturn: 0.00032698705778398354,
            startDate: "2019-04-23",
            __typename: "SinglePeriodPerformance"
          },
          {
            cumulativeReturn: 0.1876405877760483,
            endDate: "2019-04-25",
            periodReturn: -0.0007725508697928497,
            startDate: "2019-04-24",
            __typename: "SinglePeriodPerformance"
          },
          {
            cumulativeReturn: 0.18851488309605346,
            endDate: "2019-04-26",
            periodReturn: 0.000736161536582588,
            startDate: "2019-04-25",
            __typename: "SinglePeriodPerformance"
          },
          {
            cumulativeReturn: 0.18898880873377744,
            endDate: "2019-04-29",
            periodReturn: 0.00039875448298078094,
            startDate: "2019-04-26",
            __typename: "SinglePeriodPerformance"
          },
          {
            cumulativeReturn: 0.1896387271751252,
            endDate: "2019-04-30",
            periodReturn: 0.0005466144311651099,
            startDate: "2019-04-29",
            __typename: "SinglePeriodPerformance"
          },
          {
            cumulativeReturn: 0.19017052568842452,
            endDate: "2019-05-01",
            periodReturn: 0.00044702521963288884,
            startDate: "2019-04-30",
            __typename: "SinglePeriodPerformance"
          },
          {
            cumulativeReturn: 0.18946483300701433,
            endDate: "2019-05-02",
            periodReturn: -0.0005929340932064558,
            startDate: "2019-05-01",
            __typename: "SinglePeriodPerformance"
          },
          {
            cumulativeReturn: 0.1908356945519143,
            endDate: "2019-05-03",
            periodReturn: 0.0011525027952565636,
            startDate: "2019-05-02",
            __typename: "SinglePeriodPerformance"
          },
          {
            cumulativeReturn: 0.19026612462286363,
            endDate: "2019-05-06",
            periodReturn: -0.00047829430345127917,
            startDate: "2019-05-03",
            __typename: "SinglePeriodPerformance"
          },
          {
            cumulativeReturn: 0.18972696717855664,
            endDate: "2019-05-07",
            periodReturn: -0.0004529721825677722,
            startDate: "2019-05-06",
            __typename: "SinglePeriodPerformance"
          },
          {
            cumulativeReturn: 0.18922099735861364,
            endDate: "2019-05-08",
            periodReturn: -0.0004252822991336843,
            startDate: "2019-05-07",
            __typename: "SinglePeriodPerformance"
          },
          {
            cumulativeReturn: 0.18807182488924723,
            endDate: "2019-05-09",
            periodReturn: -0.0009663237294993787,
            startDate: "2019-05-08",
            __typename: "SinglePeriodPerformance"
          },
          {
            cumulativeReturn: 0.1880496974360517,
            endDate: "2019-05-10",
            periodReturn: -0.000018624676330169735,
            startDate: "2019-05-09",
            __typename: "SinglePeriodPerformance"
          },
          {
            cumulativeReturn: 0.18595083206351437,
            endDate: "2019-05-13",
            periodReturn: -0.0017666477901277645,
            startDate: "2019-05-10",
            __typename: "SinglePeriodPerformance"
          },
          {
            cumulativeReturn: 0.18648831971100166,
            endDate: "2019-05-14",
            periodReturn: 0.0004532124207476053,
            startDate: "2019-05-13",
            __typename: "SinglePeriodPerformance"
          },
          {
            cumulativeReturn: 0.1867480328365898,
            endDate: "2019-05-15",
            periodReturn: 0.00021889227333584852,
            startDate: "2019-05-14",
            __typename: "SinglePeriodPerformance"
          },
          {
            cumulativeReturn: 0.18801756687412552,
            endDate: "2019-05-16",
            periodReturn: 0.0010697587039612381,
            startDate: "2019-05-15",
            __typename: "SinglePeriodPerformance"
          },
          {
            cumulativeReturn: 0.1882762324024414,
            endDate: "2019-05-17",
            periodReturn: 0.0002177287066524496,
            startDate: "2019-05-16",
            __typename: "SinglePeriodPerformance"
          },
          {
            cumulativeReturn: 0.1882334449091454,
            endDate: "2019-05-20",
            periodReturn: -0.00003600803595096579,
            startDate: "2019-05-17",
            __typename: "SinglePeriodPerformance"
          },
          {
            cumulativeReturn: 0.1890506951333384,
            endDate: "2019-05-21",
            periodReturn: 0.0006877859125193326,
            startDate: "2019-05-20",
            __typename: "SinglePeriodPerformance"
          },
          {
            cumulativeReturn: 0.18931263289138012,
            endDate: "2019-05-22",
            periodReturn: 0.00022029149733802697,
            startDate: "2019-05-21",
            __typename: "SinglePeriodPerformance"
          },
          {
            cumulativeReturn: 0.18812147679877178,
            endDate: "2019-05-23",
            periodReturn: -0.0010015500211349312,
            startDate: "2019-05-22",
            __typename: "SinglePeriodPerformance"
          },
          {
            cumulativeReturn: 0.18856898394316168,
            endDate: "2019-05-24",
            periodReturn: 0.00037665100171056396,
            startDate: "2019-05-23",
            __typename: "SinglePeriodPerformance"
          },
          {
            cumulativeReturn: 0.18856898394316168,
            endDate: "2019-05-27",
            periodReturn: 0,
            startDate: "2019-05-24",
            __typename: "SinglePeriodPerformance"
          },
          {
            cumulativeReturn: 0.18863955303821522,
            endDate: "2019-05-28",
            periodReturn: 0.00005937315882125733,
            startDate: "2019-05-27",
            __typename: "SinglePeriodPerformance"
          },
          {
            cumulativeReturn: 0.18700093343465296,
            endDate: "2019-05-29",
            periodReturn: -0.00137856728675567,
            startDate: "2019-05-28",
            __typename: "SinglePeriodPerformance"
          },
          {
            cumulativeReturn: 0.1877661830076789,
            endDate: "2019-05-30",
            periodReturn: 0.0006446916354241663,
            startDate: "2019-05-29",
            __typename: "SinglePeriodPerformance"
          },
          {
            cumulativeReturn: 0.1862641768669917,
            endDate: "2019-05-31",
            periodReturn: -0.0012645638191885588,
            startDate: "2019-05-30",
            __typename: "SinglePeriodPerformance"
          },
          {
            cumulativeReturn: 0.18622370719146186,
            endDate: "2019-06-03",
            periodReturn: -0.00003411523024893833,
            startDate: "2019-05-31",
            __typename: "SinglePeriodPerformance"
          },
          {
            cumulativeReturn: 0.18768983404879225,
            endDate: "2019-06-04",
            periodReturn: 0.0012359615209525088,
            startDate: "2019-06-03",
            __typename: "SinglePeriodPerformance"
          },
          {
            cumulativeReturn: 0.18904143582207533,
            endDate: "2019-06-05",
            periodReturn: 0.0011380090445628588,
            startDate: "2019-06-04",
            __typename: "SinglePeriodPerformance"
          },
          {
            cumulativeReturn: 0.18982767258891498,
            endDate: "2019-06-06",
            periodReturn: 0.0006612358015058791,
            startDate: "2019-06-05",
            __typename: "SinglePeriodPerformance"
          },
          {
            cumulativeReturn: 0.19184563033685653,
            endDate: "2019-06-07",
            periodReturn: 0.0016960084173792023,
            startDate: "2019-06-06",
            __typename: "SinglePeriodPerformance"
          },
          {
            cumulativeReturn: 0.1934218402802541,
            endDate: "2019-06-10",
            periodReturn: 0.0013224950474097542,
            startDate: "2019-06-07",
            __typename: "SinglePeriodPerformance"
          },
          {
            cumulativeReturn: 0.19468398517596097,
            endDate: "2019-06-11",
            periodReturn: 0.0010575848816462793,
            startDate: "2019-06-10",
            __typename: "SinglePeriodPerformance"
          },
          {
            cumulativeReturn: 0.1955440602539138,
            endDate: "2019-06-12",
            periodReturn: 0.0007199184793844943,
            startDate: "2019-06-11",
            __typename: "SinglePeriodPerformance"
          },
          {
            cumulativeReturn: 0.19591690719265298,
            endDate: "2019-06-13",
            periodReturn: 0.0003118638209450589,
            startDate: "2019-06-12",
            __typename: "SinglePeriodPerformance"
          },
          {
            cumulativeReturn: 0.19623633965709186,
            endDate: "2019-06-14",
            periodReturn: 0.00026710255747512294,
            startDate: "2019-06-13",
            __typename: "SinglePeriodPerformance"
          },
          {
            cumulativeReturn: 0.19627025903439344,
            endDate: "2019-06-17",
            periodReturn: 0.000028355080160333384,
            startDate: "2019-06-14",
            __typename: "SinglePeriodPerformance"
          },
          {
            cumulativeReturn: 0.19832218968837112,
            endDate: "2019-06-18",
            periodReturn: 0.0017152734831292666,
            startDate: "2019-06-17",
            __typename: "SinglePeriodPerformance"
          },
          {
            cumulativeReturn: 0.19928058264961068,
            endDate: "2019-06-19",
            periodReturn: 0.0007997790322890075,
            startDate: "2019-06-18",
            __typename: "SinglePeriodPerformance"
          },
          {
            cumulativeReturn: 0.20348371369533846,
            endDate: "2019-06-20",
            periodReturn: 0.003504710329288787,
            startDate: "2019-06-19",
            __typename: "SinglePeriodPerformance"
          },
          {
            cumulativeReturn: 0.20264043019310218,
            endDate: "2019-06-21",
            periodReturn: -0.000700702047430948,
            startDate: "2019-06-20",
            __typename: "SinglePeriodPerformance"
          },
          {
            cumulativeReturn: 0.20321851108279776,
            endDate: "2019-06-24",
            periodReturn: 0.0004806764143150372,
            startDate: "2019-06-21",
            __typename: "SinglePeriodPerformance"
          },
          {
            cumulativeReturn: 0.20253482424122127,
            endDate: "2019-06-25",
            periodReturn: -0.0005682150293392797,
            startDate: "2019-06-24",
            __typename: "SinglePeriodPerformance"
          },
          {
            cumulativeReturn: 0.2024214586333457,
            endDate: "2019-06-26",
            periodReturn: -0.00009427220367361744,
            startDate: "2019-06-25",
            __typename: "SinglePeriodPerformance"
          },
          {
            cumulativeReturn: 0.2034807096447293,
            endDate: "2019-06-27",
            periodReturn: 0.0008809315600436276,
            startDate: "2019-06-26",
            __typename: "SinglePeriodPerformance"
          },
          {
            cumulativeReturn: 0.20457759157664945,
            endDate: "2019-06-28",
            periodReturn: 0.0009114246062523314,
            startDate: "2019-06-27",
            __typename: "SinglePeriodPerformance"
          },
          {
            cumulativeReturn: 0.21110535652014417,
            endDate: "2019-07-01",
            periodReturn: 0.005419131975508961,
            startDate: "2019-06-28",
            __typename: "SinglePeriodPerformance"
          },
          {
            cumulativeReturn: 0.21170883647853556,
            endDate: "2019-07-02",
            periodReturn: 0.0004982885717929801,
            startDate: "2019-07-01",
            __typename: "SinglePeriodPerformance"
          },
          {
            cumulativeReturn: 0.21305447041052905,
            endDate: "2019-07-03",
            periodReturn: 0.0011105258057736583,
            startDate: "2019-07-02",
            __typename: "SinglePeriodPerformance"
          },
          {
            cumulativeReturn: 0.21305447041052905,
            endDate: "2019-07-04",
            periodReturn: 0,
            startDate: "2019-07-03",
            __typename: "SinglePeriodPerformance"
          },
          {
            cumulativeReturn: 0.21279720889661569,
            endDate: "2019-07-05",
            periodReturn: -0.00021207746246241114,
            startDate: "2019-07-04",
            __typename: "SinglePeriodPerformance"
          },
          {
            cumulativeReturn: 0.2129954449796294,
            endDate: "2019-07-08",
            periodReturn: 0.00016345361084237075,
            startDate: "2019-07-05",
            __typename: "SinglePeriodPerformance"
          },
          {
            cumulativeReturn: 0.21259604454547598,
            endDate: "2019-07-09",
            periodReturn: -0.0003292678763192703,
            startDate: "2019-07-08",
            __typename: "SinglePeriodPerformance"
          },
          {
            cumulativeReturn: 0.21341038510997667,
            endDate: "2019-07-10",
            periodReturn: 0.000671567887891152,
            startDate: "2019-07-09",
            __typename: "SinglePeriodPerformance"
          },
          {
            cumulativeReturn: 0.21320209644821952,
            endDate: "2019-07-11",
            periodReturn: -0.00017165557861799236,
            startDate: "2019-07-10",
            __typename: "SinglePeriodPerformance"
          },
          {
            cumulativeReturn: 0.21351613353580134,
            endDate: "2019-07-12",
            periodReturn: 0.0002588497732581407,
            startDate: "2019-07-11",
            __typename: "SinglePeriodPerformance"
          },
          {
            cumulativeReturn: 0.2141675681513322,
            endDate: "2019-07-15",
            periodReturn: 0.0005368157847500582,
            startDate: "2019-07-12",
            __typename: "SinglePeriodPerformance"
          },
          {
            cumulativeReturn: 0.21417815639199134,
            endDate: "2019-07-16",
            periodReturn: 0.000008720576086010765,
            startDate: "2019-07-15",
            __typename: "SinglePeriodPerformance"
          },
          {
            cumulativeReturn: 0.21408608235028126,
            endDate: "2019-07-17",
            periodReturn: -0.00007583239842146691,
            startDate: "2019-07-16",
            __typename: "SinglePeriodPerformance"
          },
          {
            cumulativeReturn: 0.21315229630896826,
            endDate: "2019-07-18",
            periodReturn: -0.0007691267158794614,
            startDate: "2019-07-17",
            __typename: "SinglePeriodPerformance"
          },
          {
            cumulativeReturn: 0.21339758341760517,
            endDate: "2019-07-19",
            periodReturn: 0.00020218987293127379,
            startDate: "2019-07-18",
            __typename: "SinglePeriodPerformance"
          },
          {
            cumulativeReturn: 0.2137274863905574,
            endDate: "2019-07-22",
            periodReturn: 0.0002718836574759743,
            startDate: "2019-07-19",
            __typename: "SinglePeriodPerformance"
          },
          {
            cumulativeReturn: 0.21423460498107638,
            endDate: "2019-07-23",
            periodReturn: 0.00041781915315023245,
            startDate: "2019-07-22",
            __typename: "SinglePeriodPerformance"
          },
          {
            cumulativeReturn: 0.21492549680274498,
            endDate: "2019-07-24",
            periodReturn: 0.0005689936844447527,
            startDate: "2019-07-23",
            __typename: "SinglePeriodPerformance"
          },
          {
            cumulativeReturn: 0.21517295541795423,
            endDate: "2019-07-25",
            periodReturn: 0.00020368213183483857,
            startDate: "2019-07-24",
            __typename: "SinglePeriodPerformance"
          },
          {
            cumulativeReturn: 0.21591775209471264,
            endDate: "2019-07-26",
            periodReturn: 0.0006129141316366326,
            startDate: "2019-07-25",
            __typename: "SinglePeriodPerformance"
          },
          {
            cumulativeReturn: 0.21666339386005395,
            endDate: "2019-07-29",
            periodReturn: 0.0006132337191860445,
            startDate: "2019-07-26",
            __typename: "SinglePeriodPerformance"
          },
          {
            cumulativeReturn: 0.21659474999109718,
            endDate: "2019-07-30",
            periodReturn: -0.0000564197700885671,
            startDate: "2019-07-29",
            __typename: "SinglePeriodPerformance"
          },
          {
            cumulativeReturn: 0.21749063320766382,
            endDate: "2019-07-31",
            periodReturn: 0.0007363858972539868,
            startDate: "2019-07-30",
            __typename: "SinglePeriodPerformance"
          },
          {
            cumulativeReturn: 0.2174147430877944,
            endDate: "2019-08-01",
            periodReturn: -0.00006233322688444996,
            startDate: "2019-07-31",
            __typename: "SinglePeriodPerformance"
          },
          {
            cumulativeReturn: 0.2161213054525375,
            endDate: "2019-08-02",
            periodReturn: -0.00106244617341857,
            startDate: "2019-08-01",
            __typename: "SinglePeriodPerformance"
          },
          {
            cumulativeReturn: 0.212225653558193,
            endDate: "2019-08-05",
            periodReturn: -0.003203341539103215,
            startDate: "2019-08-02",
            __typename: "SinglePeriodPerformance"
          },
          {
            cumulativeReturn: 0.21251699788384038,
            endDate: "2019-08-06",
            periodReturn: 0.00024033836010001108,
            startDate: "2019-08-05",
            __typename: "SinglePeriodPerformance"
          },
          {
            cumulativeReturn: 0.21138483958160892,
            endDate: "2019-08-07",
            periodReturn: -0.0009337257161815523,
            startDate: "2019-08-06",
            __typename: "SinglePeriodPerformance"
          },
          {
            cumulativeReturn: 0.2128369060333961,
            endDate: "2019-08-08",
            periodReturn: 0.0011986830314705454,
            startDate: "2019-08-07",
            __typename: "SinglePeriodPerformance"
          },
          {
            cumulativeReturn: 0.21269862374201476,
            endDate: "2019-08-09",
            periodReturn: -0.00011401557018386314,
            startDate: "2019-08-08",
            __typename: "SinglePeriodPerformance"
          },
          {
            cumulativeReturn: 0.207942882227236,
            endDate: "2019-08-12",
            periodReturn: -0.003921618629453044,
            startDate: "2019-08-09",
            __typename: "SinglePeriodPerformance"
          },
          {
            cumulativeReturn: 0.20591597014462182,
            endDate: "2019-08-13",
            periodReturn: -0.001677986693275476,
            startDate: "2019-08-12",
            __typename: "SinglePeriodPerformance"
          },
          {
            cumulativeReturn: 0.20173616589370513,
            endDate: "2019-08-14",
            periodReturn: -0.0034660825085644138,
            startDate: "2019-08-13",
            __typename: "SinglePeriodPerformance"
          },
          {
            cumulativeReturn: 0.20209567585221833,
            endDate: "2019-08-15",
            periodReturn: 0.00029915880766223413,
            startDate: "2019-08-14",
            __typename: "SinglePeriodPerformance"
          },
          {
            cumulativeReturn: 0.20316371924214804,
            endDate: "2019-08-16",
            periodReturn: 0.0008884845119940775,
            startDate: "2019-08-15",
            __typename: "SinglePeriodPerformance"
          },
          {
            cumulativeReturn: 0.20346770715288764,
            endDate: "2019-08-19",
            periodReturn: 0.0002526571453891016,
            startDate: "2019-08-16",
            __typename: "SinglePeriodPerformance"
          },
          {
            cumulativeReturn: 0.20436730009646698,
            endDate: "2019-08-20",
            periodReturn: 0.0007475006917366501,
            startDate: "2019-08-19",
            __typename: "SinglePeriodPerformance"
          },
          {
            cumulativeReturn: 0.206184938234097,
            endDate: "2019-08-21",
            periodReturn: 0.0015092058190921682,
            startDate: "2019-08-20",
            __typename: "SinglePeriodPerformance"
          },
          {
            cumulativeReturn: 0.20662941821374337,
            endDate: "2019-08-22",
            periodReturn: 0.000368500688042918,
            startDate: "2019-08-21",
            __typename: "SinglePeriodPerformance"
          },
          {
            cumulativeReturn: 0.20640731185613825,
            endDate: "2019-08-23",
            periodReturn: -0.00018407172430280616,
            startDate: "2019-08-22",
            __typename: "SinglePeriodPerformance"
          },
          {
            cumulativeReturn: 0.20610768878225838,
            endDate: "2019-08-26",
            periodReturn: -0.0002483597960119302,
            startDate: "2019-08-23",
            __typename: "SinglePeriodPerformance"
          },
          {
            cumulativeReturn: 0.2063646449636105,
            endDate: "2019-08-27",
            periodReturn: 0.00021304580324121275,
            startDate: "2019-08-26",
            __typename: "SinglePeriodPerformance"
          },
          {
            cumulativeReturn: 0.20556373741632505,
            endDate: "2019-08-28",
            periodReturn: -0.0006639017071904807,
            startDate: "2019-08-27",
            __typename: "SinglePeriodPerformance"
          },
          {
            cumulativeReturn: 0.20482001244993642,
            endDate: "2019-08-29",
            periodReturn: -0.000616910531816944,
            startDate: "2019-08-28",
            __typename: "SinglePeriodPerformance"
          },
          {
            cumulativeReturn: 0.20480285234052698,
            endDate: "2019-08-30",
            periodReturn: -0.000014242882116933393,
            startDate: "2019-08-29",
            __typename: "SinglePeriodPerformance"
          },
          {
            cumulativeReturn: 0.20480285234052698,
            endDate: "2019-09-02",
            periodReturn: 0,
            startDate: "2019-08-30",
            __typename: "SinglePeriodPerformance"
          },
          {
            cumulativeReturn: 0.20429179656748708,
            endDate: "2019-09-03",
            periodReturn: -0.00042418207430948467,
            startDate: "2019-09-02",
            __typename: "SinglePeriodPerformance"
          },
          {
            cumulativeReturn: 0.2058322103747776,
            endDate: "2019-09-04",
            periodReturn: 0.001279103462865884,
            startDate: "2019-09-03",
            __typename: "SinglePeriodPerformance"
          },
          {
            cumulativeReturn: 0.20683582829756797,
            endDate: "2019-09-05",
            periodReturn: 0.0008323031298679037,
            startDate: "2019-09-04",
            __typename: "SinglePeriodPerformance"
          },
          {
            cumulativeReturn: 0.20884572797457723,
            endDate: "2019-09-06",
            periodReturn: 0.0016654292405657023,
            startDate: "2019-09-05",
            __typename: "SinglePeriodPerformance"
          },
          {
            cumulativeReturn: 0.209728544685287,
            endDate: "2019-09-09",
            periodReturn: 0.0007302972499137069,
            startDate: "2019-09-06",
            __typename: "SinglePeriodPerformance"
          },
          {
            cumulativeReturn: 0.21070352789645952,
            endDate: "2019-09-10",
            periodReturn: 0.0008059520587954018,
            startDate: "2019-09-09",
            __typename: "SinglePeriodPerformance"
          },
          {
            cumulativeReturn: 0.21191324291559321,
            endDate: "2019-09-11",
            periodReturn: 0.000999183525330456,
            startDate: "2019-09-10",
            __typename: "SinglePeriodPerformance"
          },
          {
            cumulativeReturn: 0.21294761041222876,
            endDate: "2019-09-12",
            periodReturn: 0.0008534996235762199,
            startDate: "2019-09-11",
            __typename: "SinglePeriodPerformance"
          },
          {
            cumulativeReturn: 0.21261664047580808,
            endDate: "2019-09-13",
            periodReturn: -0.00027286416460158935,
            startDate: "2019-09-12",
            __typename: "SinglePeriodPerformance"
          },
          {
            cumulativeReturn: 0.21421259655828728,
            endDate: "2019-09-16",
            periodReturn: 0.001316125830050507,
            startDate: "2019-09-13",
            __typename: "SinglePeriodPerformance"
          },
          {
            cumulativeReturn: 0.21431231461881328,
            endDate: "2019-09-17",
            periodReturn: 0.00008212570089331247,
            startDate: "2019-09-16",
            __typename: "SinglePeriodPerformance"
          },
          {
            cumulativeReturn: 0.21448003515052294,
            endDate: "2019-09-18",
            periodReturn: 0.00013811976514654782,
            startDate: "2019-09-17",
            __typename: "SinglePeriodPerformance"
          },
          {
            cumulativeReturn: 0.21457429746830226,
            endDate: "2019-09-19",
            periodReturn: 0.00007761537040633724,
            startDate: "2019-09-18",
            __typename: "SinglePeriodPerformance"
          },
          {
            cumulativeReturn: 0.21537229208902176,
            endDate: "2019-09-20",
            periodReturn: 0.0006570158963374353,
            startDate: "2019-09-19",
            __typename: "SinglePeriodPerformance"
          },
          {
            cumulativeReturn: 0.21562076545152897,
            endDate: "2019-09-23",
            periodReturn: 0.00020444218131731432,
            startDate: "2019-09-20",
            __typename: "SinglePeriodPerformance"
          },
          {
            cumulativeReturn: 0.21547877510259972,
            endDate: "2019-09-24",
            periodReturn: -0.00011680480702918536,
            startDate: "2019-09-23",
            __typename: "SinglePeriodPerformance"
          },
          {
            cumulativeReturn: 0.21418461933360766,
            endDate: "2019-09-25",
            periodReturn: -0.0010647292206998101,
            startDate: "2019-09-24",
            __typename: "SinglePeriodPerformance"
          },
          {
            cumulativeReturn: 0.21433018337464604,
            endDate: "2019-09-26",
            periodReturn: 0.0001198862501800753,
            startDate: "2019-09-25",
            __typename: "SinglePeriodPerformance"
          },
          {
            cumulativeReturn: 0.21472072119385066,
            endDate: "2019-09-27",
            periodReturn: 0.000321607602735629,
            startDate: "2019-09-26",
            __typename: "SinglePeriodPerformance"
          },
          {
            cumulativeReturn: 0.21502185461309442,
            endDate: "2019-09-30",
            periodReturn: 0.0002479034184480716,
            startDate: "2019-09-27",
            __typename: "SinglePeriodPerformance"
          },
          {
            cumulativeReturn: 0.21505395046967735,
            endDate: "2019-10-01",
            periodReturn: 0.000026415867715402688,
            startDate: "2019-09-30",
            __typename: "SinglePeriodPerformance"
          },
          {
            cumulativeReturn: 0.2133657685365269,
            endDate: "2019-10-02",
            periodReturn: -0.0013893884567824715,
            startDate: "2019-10-01",
            __typename: "SinglePeriodPerformance"
          },
          {
            cumulativeReturn: 0.21291016748630875,
            endDate: "2019-10-03",
            periodReturn: -0.00037548533346840984,
            startDate: "2019-10-02",
            __typename: "SinglePeriodPerformance"
          },
          {
            cumulativeReturn: 0.214029235970298,
            endDate: "2019-10-04",
            periodReturn: 0.0009226309697019211,
            startDate: "2019-10-03",
            __typename: "SinglePeriodPerformance"
          },
          {
            cumulativeReturn: 0.21464317378738396,
            endDate: "2019-10-07",
            periodReturn: 0.0005057026625847746,
            startDate: "2019-10-04",
            __typename: "SinglePeriodPerformance"
          },
          {
            cumulativeReturn: 0.21359517181515897,
            endDate: "2019-10-08",
            periodReturn: -0.0008628064561192431,
            startDate: "2019-10-07",
            __typename: "SinglePeriodPerformance"
          },
          {
            cumulativeReturn: 0.21373477966123589,
            endDate: "2019-10-09",
            periodReturn: 0.000115036586597573,
            startDate: "2019-10-08",
            __typename: "SinglePeriodPerformance"
          },
          {
            cumulativeReturn: 0.21366775360653523,
            endDate: "2019-10-10",
            periodReturn: -0.00005522298266789362,
            startDate: "2019-10-09",
            __typename: "SinglePeriodPerformance"
          },
          {
            cumulativeReturn: 0.21504374418448702,
            endDate: "2019-10-11",
            periodReturn: 0.0011337456844039992,
            startDate: "2019-10-10",
            __typename: "SinglePeriodPerformance"
          },
          {
            cumulativeReturn: 0.21517668917873012,
            endDate: "2019-10-14",
            periodReturn: 0.00010941580900224017,
            startDate: "2019-10-11",
            __typename: "SinglePeriodPerformance"
          },
          {
            cumulativeReturn: 0.21609782997341842,
            endDate: "2019-10-15",
            periodReturn: 0.0007580303365684057,
            startDate: "2019-10-14",
            __typename: "SinglePeriodPerformance"
          },
          {
            cumulativeReturn: 0.216165650079998,
            endDate: "2019-10-16",
            periodReturn: 0.0000557686272501641,
            startDate: "2019-10-15",
            __typename: "SinglePeriodPerformance"
          },
          {
            cumulativeReturn: 0.2167922437345624,
            endDate: "2019-10-17",
            periodReturn: 0.0005152206482095255,
            startDate: "2019-10-16",
            __typename: "SinglePeriodPerformance"
          },
          {
            cumulativeReturn: 0.21783251378167034,
            endDate: "2019-10-18",
            periodReturn: 0.0008549282364876987,
            startDate: "2019-10-17",
            __typename: "SinglePeriodPerformance"
          },
          {
            cumulativeReturn: 0.21815528034292542,
            endDate: "2019-10-21",
            periodReturn: 0.00026503362129246227,
            startDate: "2019-10-18",
            __typename: "SinglePeriodPerformance"
          },
          {
            cumulativeReturn: 0.218543877681731,
            endDate: "2019-10-22",
            periodReturn: 0.00031900476489010813,
            startDate: "2019-10-21",
            __typename: "SinglePeriodPerformance"
          },
          {
            cumulativeReturn: 0.2193285064814119,
            endDate: "2019-10-23",
            periodReturn: 0.0006439068908816098,
            startDate: "2019-10-22",
            __typename: "SinglePeriodPerformance"
          },
          {
            cumulativeReturn: 0.22004284451091327,
            endDate: "2019-10-24",
            periodReturn: 0.0005858454269741645,
            startDate: "2019-10-23",
            __typename: "SinglePeriodPerformance"
          },
          {
            cumulativeReturn: 0.2208065782944213,
            endDate: "2019-10-25",
            periodReturn: 0.0006259893141821057,
            startDate: "2019-10-24",
            __typename: "SinglePeriodPerformance"
          },
          {
            cumulativeReturn: 0.2210399408010464,
            endDate: "2019-10-28",
            periodReturn: 0.00019115436529769625,
            startDate: "2019-10-25",
            __typename: "SinglePeriodPerformance"
          },
          {
            cumulativeReturn: 0.22135348753163986,
            endDate: "2019-10-29",
            periodReturn: 0.0002567866292625722,
            startDate: "2019-10-28",
            __typename: "SinglePeriodPerformance"
          },
          {
            cumulativeReturn: 0.22052962904767792,
            endDate: "2019-10-30",
            periodReturn: -0.0006745454877496851,
            startDate: "2019-10-29",
            __typename: "SinglePeriodPerformance"
          },
          {
            cumulativeReturn: 0.2202641110403254,
            endDate: "2019-10-31",
            periodReturn: -0.00021754327058798193,
            startDate: "2019-10-30",
            __typename: "SinglePeriodPerformance"
          },
          {
            cumulativeReturn: 0.2210630225075163,
            endDate: "2019-11-01",
            periodReturn: 0.0006547037317271931,
            startDate: "2019-10-31",
            __typename: "SinglePeriodPerformance"
          },
          {
            cumulativeReturn: 0.22232623215700542,
            endDate: "2019-11-04",
            periodReturn: 0.0010345163404383163,
            startDate: "2019-11-01",
            __typename: "SinglePeriodPerformance"
          },
          {
            cumulativeReturn: 0.2216893288664743,
            endDate: "2019-11-05",
            periodReturn: -0.0005210583506885211,
            startDate: "2019-11-04",
            __typename: "SinglePeriodPerformance"
          },
          {
            cumulativeReturn: 0.22140526187380893,
            endDate: "2019-11-06",
            periodReturn: -0.00023251982803918956,
            startDate: "2019-11-05",
            __typename: "SinglePeriodPerformance"
          },
          {
            cumulativeReturn: 0.22166609435850382,
            endDate: "2019-11-07",
            periodReturn: 0.00021355113886994487,
            startDate: "2019-11-06",
            __typename: "SinglePeriodPerformance"
          },
          {
            cumulativeReturn: 0.2219876826737186,
            endDate: "2019-11-08",
            periodReturn: 0.0002632374891140515,
            startDate: "2019-11-07",
            __typename: "SinglePeriodPerformance"
          },
          {
            cumulativeReturn: 0.222386313381296,
            endDate: "2019-11-11",
            periodReturn: 0.00032621499645985654,
            startDate: "2019-11-08",
            __typename: "SinglePeriodPerformance"
          },
          {
            cumulativeReturn: 0.22254074465380813,
            endDate: "2019-11-12",
            periodReturn: 0.00012633589792485664,
            startDate: "2019-11-11",
            __typename: "SinglePeriodPerformance"
          },
          {
            cumulativeReturn: 0.22196014659835384,
            endDate: "2019-11-13",
            periodReturn: -0.00047491100643748244,
            startDate: "2019-11-12",
            __typename: "SinglePeriodPerformance"
          },
          {
            cumulativeReturn: 0.22204764690134082,
            endDate: "2019-11-14",
            periodReturn: 0.0000716065112520917,
            startDate: "2019-11-13",
            __typename: "SinglePeriodPerformance"
          },
          {
            cumulativeReturn: 0.22291486933643356,
            endDate: "2019-11-15",
            periodReturn: 0.00070964699068136,
            startDate: "2019-11-14",
            __typename: "SinglePeriodPerformance"
          },
          {
            cumulativeReturn: 0.22287461671219555,
            endDate: "2019-11-18",
            periodReturn: -0.00003291531180725846,
            startDate: "2019-11-15",
            __typename: "SinglePeriodPerformance"
          },
          {
            cumulativeReturn: 0.2219527303348141,
            endDate: "2019-11-19",
            periodReturn: -0.0007538682746232732,
            startDate: "2019-11-18",
            __typename: "SinglePeriodPerformance"
          },
          {
            cumulativeReturn: 0.22204615135326256,
            endDate: "2019-11-20",
            periodReturn: 0.00007645223594112046,
            startDate: "2019-11-19",
            __typename: "SinglePeriodPerformance"
          },
          {
            cumulativeReturn: 0.22201359739975546,
            endDate: "2019-11-21",
            periodReturn: -0.00002663889041436583,
            startDate: "2019-11-20",
            __typename: "SinglePeriodPerformance"
          },
          {
            cumulativeReturn: 0.2223818240459614,
            endDate: "2019-11-22",
            periodReturn: 0.00030132778144985507,
            startDate: "2019-11-21",
            __typename: "SinglePeriodPerformance"
          },
          {
            cumulativeReturn: 0.22326318833157743,
            endDate: "2019-11-25",
            periodReturn: 0.0007210220802357286,
            startDate: "2019-11-22",
            __typename: "SinglePeriodPerformance"
          },
          {
            cumulativeReturn: 0.22402243715072,
            endDate: "2019-11-26",
            periodReturn: 0.0006206749507260768,
            startDate: "2019-11-25",
            __typename: "SinglePeriodPerformance"
          },
          {
            cumulativeReturn: 0.2245931614581107,
            endDate: "2019-11-27",
            periodReturn: 0.00046626948172537184,
            startDate: "2019-11-26",
            __typename: "SinglePeriodPerformance"
          },
          {
            cumulativeReturn: 0.2245931614581107,
            endDate: "2019-11-28",
            periodReturn: 0,
            startDate: "2019-11-27",
            __typename: "SinglePeriodPerformance"
          },
          {
            cumulativeReturn: 0.22509111420072148,
            endDate: "2019-11-29",
            periodReturn: 0.0004066270809627986,
            startDate: "2019-11-28",
            __typename: "SinglePeriodPerformance"
          },
          {
            cumulativeReturn: 0.2250357609396434,
            endDate: "2019-12-02",
            periodReturn: -0.00004518297491213687,
            startDate: "2019-11-29",
            __typename: "SinglePeriodPerformance"
          },
          {
            cumulativeReturn: 0.2251233737057905,
            endDate: "2019-12-03",
            periodReturn: 0.00007151853761379952,
            startDate: "2019-12-02",
            __typename: "SinglePeriodPerformance"
          },
          {
            cumulativeReturn: 0.22631668618909506,
            endDate: "2019-12-04",
            periodReturn: 0.0009740345412682742,
            startDate: "2019-12-03",
            __typename: "SinglePeriodPerformance"
          },
          {
            cumulativeReturn: 0.2270635238115204,
            endDate: "2019-12-05",
            periodReturn: 0.0006090087746796564,
            startDate: "2019-12-04",
            __typename: "SinglePeriodPerformance"
          },
          {
            cumulativeReturn: 0.2285675416521311,
            endDate: "2019-12-06",
            periodReturn: 0.0012257049544908002,
            startDate: "2019-12-05",
            __typename: "SinglePeriodPerformance"
          },
          {
            cumulativeReturn: 0.22918793435579565,
            endDate: "2019-12-09",
            periodReturn: 0.0005049724029255654,
            startDate: "2019-12-06",
            __typename: "SinglePeriodPerformance"
          },
          {
            cumulativeReturn: 0.23008538412338053,
            endDate: "2019-12-10",
            periodReturn: 0.000730115991624347,
            startDate: "2019-12-09",
            __typename: "SinglePeriodPerformance"
          },
          {
            cumulativeReturn: 0.23109704530748965,
            endDate: "2019-12-11",
            periodReturn: 0.0008224316760174499,
            startDate: "2019-12-10",
            __typename: "SinglePeriodPerformance"
          },
          {
            cumulativeReturn: 0.2327036309230801,
            endDate: "2019-12-12",
            periodReturn: 0.001305003225955391,
            startDate: "2019-12-11",
            __typename: "SinglePeriodPerformance"
          },
          {
            cumulativeReturn: 0.23496034353156814,
            endDate: "2019-12-13",
            periodReturn: 0.0018307016803367727,
            startDate: "2019-12-12",
            __typename: "SinglePeriodPerformance"
          },
          {
            cumulativeReturn: 0.23649420100345253,
            endDate: "2019-12-16",
            periodReturn: 0.0012420297379735887,
            startDate: "2019-12-13",
            __typename: "SinglePeriodPerformance"
          },
          {
            cumulativeReturn: 0.23834953984350093,
            endDate: "2019-12-17",
            periodReturn: 0.0015004832522003942,
            startDate: "2019-12-16",
            __typename: "SinglePeriodPerformance"
          },
          {
            cumulativeReturn: 0.24009531954276042,
            endDate: "2019-12-18",
            periodReturn: 0.0014097632720726434,
            startDate: "2019-12-17",
            __typename: "SinglePeriodPerformance"
          },
          {
            cumulativeReturn: 0.24119290226307233,
            endDate: "2019-12-19",
            periodReturn: 0.0008850793185128966,
            startDate: "2019-12-18",
            __typename: "SinglePeriodPerformance"
          },
          {
            cumulativeReturn: 0.24195222699063978,
            endDate: "2019-12-20",
            periodReturn: 0.0006117701174273116,
            startDate: "2019-12-19",
            __typename: "SinglePeriodPerformance"
          },
          {
            cumulativeReturn: 0.2424129322903874,
            endDate: "2019-12-23",
            periodReturn: 0.00037095251309621257,
            startDate: "2019-12-20",
            __typename: "SinglePeriodPerformance"
          },
          {
            cumulativeReturn: 0.24265423182131718,
            endDate: "2019-12-24",
            periodReturn: 0.00019421846365113007,
            startDate: "2019-12-23",
            __typename: "SinglePeriodPerformance"
          },
          {
            cumulativeReturn: 0.24265423182131718,
            endDate: "2019-12-25",
            periodReturn: 0,
            startDate: "2019-12-24",
            __typename: "SinglePeriodPerformance"
          },
          {
            cumulativeReturn: 0.24313946373529638,
            endDate: "2019-12-26",
            periodReturn: 0.0003904802329992538,
            startDate: "2019-12-25",
            __typename: "SinglePeriodPerformance"
          },
          {
            cumulativeReturn: 0.24409905007787058,
            endDate: "2019-12-27",
            periodReturn: 0.0007719056232764992,
            startDate: "2019-12-26",
            __typename: "SinglePeriodPerformance"
          },
          {
            cumulativeReturn: 0.2447912599941111,
            endDate: "2019-12-30",
            periodReturn: 0.0005563945380372022,
            startDate: "2019-12-27",
            __typename: "SinglePeriodPerformance"
          },
          {
            cumulativeReturn: 0.24486487193445639,
            endDate: "2019-12-31",
            periodReturn: 0.000059135971396239273,
            startDate: "2019-12-30",
            __typename: "SinglePeriodPerformance"
          },
          {
            cumulativeReturn: 0.24486487193445639,
            endDate: "2020-01-01",
            periodReturn: 0,
            startDate: "2019-12-31",
            __typename: "SinglePeriodPerformance"
          },
          {
            cumulativeReturn: 0.24619663969822692,
            endDate: "2020-01-02",
            periodReturn: 0.0010698090963888827,
            startDate: "2020-01-01",
            __typename: "SinglePeriodPerformance"
          },
          {
            cumulativeReturn: 0.24718345041501255,
            endDate: "2020-01-03",
            periodReturn: 0.0007918579503027225,
            startDate: "2020-01-02",
            __typename: "SinglePeriodPerformance"
          },
          {
            cumulativeReturn: 0.24797362339464057,
            endDate: "2020-01-06",
            periodReturn: 0.0006335659596549185,
            startDate: "2020-01-03",
            __typename: "SinglePeriodPerformance"
          },
          {
            cumulativeReturn: 0.24887304960271495,
            endDate: "2020-01-07",
            periodReturn: 0.0007207093092461817,
            startDate: "2020-01-06",
            __typename: "SinglePeriodPerformance"
          },
          {
            cumulativeReturn: 0.24938652766994562,
            endDate: "2020-01-08",
            periodReturn: 0.0004111531331338701,
            startDate: "2020-01-07",
            __typename: "SinglePeriodPerformance"
          },
          {
            cumulativeReturn: 0.2505534957783484,
            endDate: "2020-01-09",
            periodReturn: 0.0009340328893885413,
            startDate: "2020-01-08",
            __typename: "SinglePeriodPerformance"
          },
          {
            cumulativeReturn: 0.2519365052357907,
            endDate: "2020-01-10",
            periodReturn: 0.0011059178692562075,
            startDate: "2020-01-09",
            __typename: "SinglePeriodPerformance"
          },
          {
            cumulativeReturn: 0.25269263100708583,
            endDate: "2020-01-13",
            periodReturn: 0.0006039649520027154,
            startDate: "2020-01-10",
            __typename: "SinglePeriodPerformance"
          },
          {
            cumulativeReturn: 0.25338095569934227,
            endDate: "2020-01-14",
            periodReturn: 0.0005494761246444546,
            startDate: "2020-01-13",
            __typename: "SinglePeriodPerformance"
          },
          {
            cumulativeReturn: 0.25419641931840675,
            endDate: "2020-01-15",
            periodReturn: 0.0006506111452836843,
            startDate: "2020-01-14",
            __typename: "SinglePeriodPerformance"
          },
          {
            cumulativeReturn: 0.25484909997842586,
            endDate: "2020-01-16",
            periodReturn: 0.0005203974831740891,
            startDate: "2020-01-15",
            __typename: "SinglePeriodPerformance"
          },
          {
            cumulativeReturn: 0.25530652715310187,
            endDate: "2020-01-17",
            periodReturn: 0.00036452763498318405,
            startDate: "2020-01-16",
            __typename: "SinglePeriodPerformance"
          },
          {
            cumulativeReturn: 0.25530652715310187,
            endDate: "2020-01-20",
            periodReturn: 0,
            startDate: "2020-01-17",
            __typename: "SinglePeriodPerformance"
          },
          {
            cumulativeReturn: 0.25546420833507133,
            endDate: "2020-01-21",
            periodReturn: 0.00012561169607481264,
            startDate: "2020-01-20",
            __typename: "SinglePeriodPerformance"
          },
          {
            cumulativeReturn: 0.2548571064263174,
            endDate: "2020-01-22",
            periodReturn: -0.00048356767538520725,
            startDate: "2020-01-21",
            __typename: "SinglePeriodPerformance"
          },
          {
            cumulativeReturn: 0.2543673903289141,
            endDate: "2020-01-23",
            periodReturn: -0.00039025646417857135,
            startDate: "2020-01-22",
            __typename: "SinglePeriodPerformance"
          },
          {
            cumulativeReturn: 0.25394233613805883,
            endDate: "2020-01-24",
            periodReturn: -0.0003388594076443854,
            startDate: "2020-01-23",
            __typename: "SinglePeriodPerformance"
          },
          {
            cumulativeReturn: 0.2510356964474032,
            endDate: "2020-01-27",
            periodReturn: -0.0023180010809808883,
            startDate: "2020-01-24",
            __typename: "SinglePeriodPerformance"
          },
          {
            cumulativeReturn: 0.25243403139526976,
            endDate: "2020-01-28",
            periodReturn: 0.0011177418452866102,
            startDate: "2020-01-27",
            __typename: "SinglePeriodPerformance"
          },
          {
            cumulativeReturn: 0.25276285875811655,
            endDate: "2020-01-29",
            periodReturn: 0.00026255064506718637,
            startDate: "2020-01-28",
            __typename: "SinglePeriodPerformance"
          },
          {
            cumulativeReturn: 0.2511330704442174,
            endDate: "2020-01-30",
            periodReturn: -0.0013009551668180946,
            startDate: "2020-01-29",
            __typename: "SinglePeriodPerformance"
          },
          {
            cumulativeReturn: 0.250970817293829,
            endDate: "2020-01-31",
            periodReturn: -0.00012968496654859534,
            startDate: "2020-01-30",
            __typename: "SinglePeriodPerformance"
          },
          {
            cumulativeReturn: 0.2514704996525001,
            endDate: "2020-02-03",
            periodReturn: 0.0003994356636969791,
            startDate: "2020-01-31",
            __typename: "SinglePeriodPerformance"
          },
          {
            cumulativeReturn: 0.2529852471415883,
            endDate: "2020-02-04",
            periodReturn: 0.0012103741075068333,
            startDate: "2020-02-03",
            __typename: "SinglePeriodPerformance"
          },
          {
            cumulativeReturn: 0.25415321637634913,
            endDate: "2020-02-05",
            periodReturn: 0.0009321492311465787,
            startDate: "2020-02-04",
            __typename: "SinglePeriodPerformance"
          },
          {
            cumulativeReturn: 0.25598495511179786,
            endDate: "2020-02-06",
            periodReturn: 0.001460538243278786,
            startDate: "2020-02-05",
            __typename: "SinglePeriodPerformance"
          },
          {
            cumulativeReturn: 0.2567079024620498,
            endDate: "2020-02-07",
            periodReturn: 0.0005756019188839963,
            startDate: "2020-02-06",
            __typename: "SinglePeriodPerformance"
          },
          {
            cumulativeReturn: 0.256407719694832,
            endDate: "2020-02-10",
            periodReturn: -0.00023886439054756508,
            startDate: "2020-02-07",
            __typename: "SinglePeriodPerformance"
          },
          {
            cumulativeReturn: 0.25774473632379036,
            endDate: "2020-02-11",
            periodReturn: 0.0010641582409914618,
            startDate: "2020-02-10",
            __typename: "SinglePeriodPerformance"
          },
          {
            cumulativeReturn: 0.25855460967924415,
            endDate: "2020-02-12",
            periodReturn: 0.0006439091590405545,
            startDate: "2020-02-11",
            __typename: "SinglePeriodPerformance"
          },
          {
            cumulativeReturn: 0.2585928506183506,
            endDate: "2020-02-13",
            periodReturn: 0.00003038480715273323,
            startDate: "2020-02-12",
            __typename: "SinglePeriodPerformance"
          },
          {
            cumulativeReturn: 0.2590120007659069,
            endDate: "2020-02-14",
            periodReturn: 0.00033303077111109355,
            startDate: "2020-02-13",
            __typename: "SinglePeriodPerformance"
          },
          {
            cumulativeReturn: 0.2590120007659069,
            endDate: "2020-02-17",
            periodReturn: 0,
            startDate: "2020-02-14",
            __typename: "SinglePeriodPerformance"
          },
          {
            cumulativeReturn: 0.25941975059604516,
            endDate: "2020-02-18",
            periodReturn: 0.00032386492733215626,
            startDate: "2020-02-17",
            __typename: "SinglePeriodPerformance"
          },
          {
            cumulativeReturn: 0.2597923389411585,
            endDate: "2020-02-19",
            periodReturn: 0.00029584127526748565,
            startDate: "2020-02-18",
            __typename: "SinglePeriodPerformance"
          },
          {
            cumulativeReturn: 0.2602797692448797,
            endDate: "2020-02-20",
            periodReturn: 0.0003869132147057265,
            startDate: "2020-02-19",
            __typename: "SinglePeriodPerformance"
          },
          {
            cumulativeReturn: 0.2606821052411217,
            endDate: "2020-02-21",
            periodReturn: 0.00031924339822026664,
            startDate: "2020-02-20",
            __typename: "SinglePeriodPerformance"
          },
          {
            cumulativeReturn: 0.25693566385168265,
            endDate: "2020-02-24",
            periodReturn: -0.00297175741121709,
            startDate: "2020-02-21",
            __typename: "SinglePeriodPerformance"
          },
          {
            cumulativeReturn: 0.2552520161587166,
            endDate: "2020-02-25",
            periodReturn: -0.0013394859748085623,
            startDate: "2020-02-24",
            __typename: "SinglePeriodPerformance"
          },
          {
            cumulativeReturn: 0.2524393487854144,
            endDate: "2020-02-26",
            periodReturn: -0.0022407192636180384,
            startDate: "2020-02-25",
            __typename: "SinglePeriodPerformance"
          },
          {
            cumulativeReturn: 0.2448030187015191,
            endDate: "2020-02-27",
            periodReturn: -0.006097165576361603,
            startDate: "2020-02-26",
            __typename: "SinglePeriodPerformance"
          },
          {
            cumulativeReturn: 0.23845446020709415,
            endDate: "2020-02-28",
            periodReturn: -0.005100050689985634,
            startDate: "2020-02-27",
            __typename: "SinglePeriodPerformance"
          },
          {
            cumulativeReturn: 0.24057967973826933,
            endDate: "2020-03-02",
            periodReturn: 0.0017160255782194334,
            startDate: "2020-02-28",
            __typename: "SinglePeriodPerformance"
          },
          {
            cumulativeReturn: 0.24476815132252372,
            endDate: "2020-03-03",
            periodReturn: 0.0033762213364143586,
            startDate: "2020-03-02",
            __typename: "SinglePeriodPerformance"
          },
          {
            cumulativeReturn: 0.24758539079474473,
            endDate: "2020-03-04",
            periodReturn: 0.0022632644233608807,
            startDate: "2020-03-03",
            __typename: "SinglePeriodPerformance"
          },
          {
            cumulativeReturn: 0.24366755073564805,
            endDate: "2020-03-05",
            periodReturn: -0.0031403381988954282,
            startDate: "2020-03-04",
            __typename: "SinglePeriodPerformance"
          },
          {
            cumulativeReturn: 0.23515381848918082,
            endDate: "2020-03-06",
            periodReturn: -0.006845665661559846,
            startDate: "2020-03-05",
            __typename: "SinglePeriodPerformance"
          },
          {
            cumulativeReturn: 0.2045773063337104,
            endDate: "2020-03-09",
            periodReturn: -0.02475522618945632,
            startDate: "2020-03-06",
            __typename: "SinglePeriodPerformance"
          },
          {
            cumulativeReturn: 0.20512620723270913,
            endDate: "2020-03-10",
            periodReturn: 0.00045567926285221483,
            startDate: "2020-03-09",
            __typename: "SinglePeriodPerformance"
          },
          {
            cumulativeReturn: 0.19319144526151422,
            endDate: "2020-03-11",
            periodReturn: -0.009903329543052808,
            startDate: "2020-03-10",
            __typename: "SinglePeriodPerformance"
          },
          {
            cumulativeReturn: 0.1644844762109765,
            endDate: "2020-03-12",
            periodReturn: -0.024058979943697083,
            startDate: "2020-03-11",
            __typename: "SinglePeriodPerformance"
          },
          {
            cumulativeReturn: 0.16260115814069365,
            endDate: "2020-03-13",
            periodReturn: -0.001617297704483598,
            startDate: "2020-03-12",
            __typename: "SinglePeriodPerformance"
          },
          {
            cumulativeReturn: 0.136039718731642,
            endDate: "2020-03-16",
            periodReturn: -0.022846561972749473,
            startDate: "2020-03-13",
            __typename: "SinglePeriodPerformance"
          },
          {
            cumulativeReturn: 0.12216078249349427,
            endDate: "2020-03-17",
            periodReturn: -0.012216946299767715,
            startDate: "2020-03-16",
            __typename: "SinglePeriodPerformance"
          },
          {
            cumulativeReturn: 0.08712439865454802,
            endDate: "2020-03-18",
            periodReturn: -0.031222249418745282,
            startDate: "2020-03-17",
            __typename: "SinglePeriodPerformance"
          },
          {
            cumulativeReturn: 0.061790078995414,
            endDate: "2020-03-19",
            periodReturn: -0.023303974862939655,
            startDate: "2020-03-18",
            __typename: "SinglePeriodPerformance"
          },
          {
            cumulativeReturn: 0.058466929782262866,
            endDate: "2020-03-20",
            periodReturn: -0.0031297610317618696,
            startDate: "2020-03-19",
            __typename: "SinglePeriodPerformance"
          },
          {
            cumulativeReturn: 0.03983515600862786,
            endDate: "2020-03-23",
            periodReturn: -0.017602603585799032,
            startDate: "2020-03-20",
            __typename: "SinglePeriodPerformance"
          },
          {
            cumulativeReturn: 0.043359765901898495,
            endDate: "2020-03-24",
            periodReturn: 0.003389585236567553,
            startDate: "2020-03-23",
            __typename: "SinglePeriodPerformance"
          },
          {
            cumulativeReturn: 0.05874784757263729,
            endDate: "2020-03-25",
            periodReturn: 0.014748586416342465,
            startDate: "2020-03-24",
            __typename: "SinglePeriodPerformance"
          },
          {
            cumulativeReturn: 0.08189371335688889,
            endDate: "2020-03-26",
            periodReturn: 0.02186154695597972,
            startDate: "2020-03-25",
            __typename: "SinglePeriodPerformance"
          },
          {
            cumulativeReturn: 0.08871817531886261,
            endDate: "2020-03-27",
            periodReturn: 0.0063078857726226265,
            startDate: "2020-03-26",
            __typename: "SinglePeriodPerformance"
          },
          {
            cumulativeReturn: 0.09406249209099249,
            endDate: "2020-03-30",
            periodReturn: 0.004908815608377886,
            startDate: "2020-03-27",
            __typename: "SinglePeriodPerformance"
          },
          {
            cumulativeReturn: 0.10060749265435942,
            endDate: "2020-03-31",
            periodReturn: 0.005982291332241715,
            startDate: "2020-03-30",
            __typename: "SinglePeriodPerformance"
          },
          {
            cumulativeReturn: 0.09381347300020826,
            endDate: "2020-04-01",
            periodReturn: -0.0061729723807039975,
            startDate: "2020-03-31",
            __typename: "SinglePeriodPerformance"
          },
          {
            cumulativeReturn: 0.09149660860146835,
            endDate: "2020-04-02",
            periodReturn: -0.0021181531000756893,
            startDate: "2020-04-01",
            __typename: "SinglePeriodPerformance"
          },
          {
            cumulativeReturn: 0.08842873692021302,
            endDate: "2020-04-03",
            periodReturn: -0.0028107019821034585,
            startDate: "2020-04-02",
            __typename: "SinglePeriodPerformance"
          },
          {
            cumulativeReturn: 0.09183888112903826,
            endDate: "2020-04-06",
            periodReturn: 0.00313308909729308,
            startDate: "2020-04-03",
            __typename: "SinglePeriodPerformance"
          },
          {
            cumulativeReturn: 0.1001485470445882,
            endDate: "2020-04-07",
            periodReturn: 0.007610707091651839,
            startDate: "2020-04-06",
            __typename: "SinglePeriodPerformance"
          },
          {
            cumulativeReturn: 0.10492954194317727,
            endDate: "2020-04-08",
            periodReturn: 0.004345772133620096,
            startDate: "2020-04-07",
            __typename: "SinglePeriodPerformance"
          },
          {
            cumulativeReturn: 0.1238298421941133,
            endDate: "2020-04-09",
            periodReturn: 0.0171054348114334,
            startDate: "2020-04-08",
            __typename: "SinglePeriodPerformance"
          },
          {
            cumulativeReturn: 0.1238298421941133,
            endDate: "2020-04-10",
            periodReturn: 0,
            startDate: "2020-04-09",
            __typename: "SinglePeriodPerformance"
          },
          {
            cumulativeReturn: 0.13092393629054633,
            endDate: "2020-04-13",
            periodReturn: 0.006312427228825661,
            startDate: "2020-04-10",
            __typename: "SinglePeriodPerformance"
          },
          {
            cumulativeReturn: 0.13919965544401247,
            endDate: "2020-04-14",
            periodReturn: 0.007317662035353583,
            startDate: "2020-04-13",
            __typename: "SinglePeriodPerformance"
          },
          {
            cumulativeReturn: 0.13841768149713585,
            endDate: "2020-04-15",
            periodReturn: -0.0006864239671595616,
            startDate: "2020-04-14",
            __typename: "SinglePeriodPerformance"
          },
          {
            cumulativeReturn: 0.14002600721696168,
            endDate: "2020-04-16",
            periodReturn: 0.0014127729619507934,
            startDate: "2020-04-15",
            __typename: "SinglePeriodPerformance"
          },
          {
            cumulativeReturn: 0.14420373067560344,
            endDate: "2020-04-17",
            periodReturn: 0.003664586099084274,
            startDate: "2020-04-16",
            __typename: "SinglePeriodPerformance"
          },
          {
            cumulativeReturn: 0.14201859866976196,
            endDate: "2020-04-20",
            periodReturn: -0.0019097403261840418,
            startDate: "2020-04-17",
            __typename: "SinglePeriodPerformance"
          },
          {
            cumulativeReturn: 0.13464425882797637,
            endDate: "2020-04-21",
            periodReturn: -0.0064572852406915284,
            startDate: "2020-04-20",
            __typename: "SinglePeriodPerformance"
          },
          {
            cumulativeReturn: 0.1342094113057446,
            endDate: "2020-04-22",
            periodReturn: -0.0003832456903108189,
            startDate: "2020-04-21",
            __typename: "SinglePeriodPerformance"
          },
          {
            cumulativeReturn: 0.13527697898167879,
            endDate: "2020-04-23",
            periodReturn: 0.0009412438878505705,
            startDate: "2020-04-22",
            __typename: "SinglePeriodPerformance"
          },
          {
            cumulativeReturn: 0.13288881432839283,
            endDate: "2020-04-24",
            periodReturn: -0.002103596476895179,
            startDate: "2020-04-23",
            __typename: "SinglePeriodPerformance"
          },
          {
            cumulativeReturn: 0.1316010344176619,
            endDate: "2020-04-27",
            periodReturn: -0.0011367222400322455,
            startDate: "2020-04-24",
            __typename: "SinglePeriodPerformance"
          },
          {
            cumulativeReturn: 0.13259746549521578,
            endDate: "2020-04-28",
            periodReturn: 0.0008805498115037538,
            startDate: "2020-04-27",
            __typename: "SinglePeriodPerformance"
          },
          {
            cumulativeReturn: 0.13553200945223698,
            endDate: "2020-04-29",
            periodReturn: 0.0025909858060102044,
            startDate: "2020-04-28",
            __typename: "SinglePeriodPerformance"
          },
          {
            cumulativeReturn: 0.13945741897299002,
            endDate: "2020-04-30",
            periodReturn: 0.003456890240061628,
            startDate: "2020-04-29",
            __typename: "SinglePeriodPerformance"
          },
          {
            cumulativeReturn: 0.13787795521825874,
            endDate: "2020-05-01",
            periodReturn: -0.0013861542594149404,
            startDate: "2020-04-30",
            __typename: "SinglePeriodPerformance"
          },
          {
            cumulativeReturn: 0.13598293007897877,
            endDate: "2020-05-04",
            periodReturn: -0.0016654028058012732,
            startDate: "2020-05-01",
            __typename: "SinglePeriodPerformance"
          },
          {
            cumulativeReturn: 0.1393790705636131,
            endDate: "2020-05-05",
            periodReturn: 0.0029896052085907634,
            startDate: "2020-05-04",
            __typename: "SinglePeriodPerformance"
          },
          {
            cumulativeReturn: 0.13996404324635714,
            endDate: "2020-05-06",
            periodReturn: 0.0005134135757423665,
            startDate: "2020-05-05",
            __typename: "SinglePeriodPerformance"
          },
          {
            cumulativeReturn: 0.14259325394833122,
            endDate: "2020-05-07",
            periodReturn: 0.002306397923294703,
            startDate: "2020-05-06",
            __typename: "SinglePeriodPerformance"
          },
          {
            cumulativeReturn: 0.14469665170705914,
            endDate: "2020-05-08",
            periodReturn: 0.001840898107405554,
            startDate: "2020-05-07",
            __typename: "SinglePeriodPerformance"
          },
          {
            cumulativeReturn: 0.1461259243355857,
            endDate: "2020-05-11",
            periodReturn: 0.001248603834382753,
            startDate: "2020-05-08",
            __typename: "SinglePeriodPerformance"
          },
          {
            cumulativeReturn: 0.1501692760921325,
            endDate: "2020-05-12",
            periodReturn: 0.003527842509007662,
            startDate: "2020-05-11",
            __typename: "SinglePeriodPerformance"
          },
          {
            cumulativeReturn: 0.14859917494653097,
            endDate: "2020-05-13",
            periodReturn: -0.0013651044052717099,
            startDate: "2020-05-12",
            __typename: "SinglePeriodPerformance"
          },
          {
            cumulativeReturn: 0.14546381483580717,
            endDate: "2020-05-14",
            periodReturn: -0.002729725198409364,
            startDate: "2020-05-13",
            __typename: "SinglePeriodPerformance"
          },
          {
            cumulativeReturn: 0.14642194975111367,
            endDate: "2020-05-15",
            periodReturn: 0.0008364602206521643,
            startDate: "2020-05-14",
            __typename: "SinglePeriodPerformance"
          },
          {
            cumulativeReturn: 0.15376750507307735,
            endDate: "2020-05-18",
            periodReturn: 0.00640737498401753,
            startDate: "2020-05-15",
            __typename: "SinglePeriodPerformance"
          },
          {
            cumulativeReturn: 0.1579652156859932,
            endDate: "2020-05-19",
            periodReturn: 0.003638263856850316,
            startDate: "2020-05-18",
            __typename: "SinglePeriodPerformance"
          },
          {
            cumulativeReturn: 0.16323599536881894,
            endDate: "2020-05-20",
            periodReturn: 0.00455175994185925,
            startDate: "2020-05-19",
            __typename: "SinglePeriodPerformance"
          },
          {
            cumulativeReturn: 0.16849342868008632,
            endDate: "2020-05-21",
            periodReturn: 0.004519661816001946,
            startDate: "2020-05-20",
            __typename: "SinglePeriodPerformance"
          },
          {
            cumulativeReturn: 0.1692193404897706,
            endDate: "2020-05-22",
            periodReturn: 0.000621237391556684,
            startDate: "2020-05-21",
            __typename: "SinglePeriodPerformance"
          },
          {
            cumulativeReturn: 0.1692193404897706,
            endDate: "2020-05-25",
            periodReturn: 0,
            startDate: "2020-05-22",
            __typename: "SinglePeriodPerformance"
          },
          {
            cumulativeReturn: 0.1759811373597453,
            endDate: "2020-05-26",
            periodReturn: 0.00578317227214367,
            startDate: "2020-05-25",
            __typename: "SinglePeriodPerformance"
          },
          {
            cumulativeReturn: 0.18038188034725278,
            endDate: "2020-05-27",
            periodReturn: 0.0037421884141677704,
            startDate: "2020-05-26",
            __typename: "SinglePeriodPerformance"
          },
          {
            cumulativeReturn: 0.18361073571313713,
            endDate: "2020-05-28",
            periodReturn: 0.0027354328456266554,
            startDate: "2020-05-27",
            __typename: "SinglePeriodPerformance"
          },
          {
            cumulativeReturn: 0.18460826895658666,
            endDate: "2020-05-29",
            periodReturn: 0.0008427882692771022,
            startDate: "2020-05-28",
            __typename: "SinglePeriodPerformance"
          },
          {
            cumulativeReturn: 0.18726939670510223,
            endDate: "2020-06-01",
            periodReturn: 0.002246420034581979,
            startDate: "2020-05-29",
            __typename: "SinglePeriodPerformance"
          },
          {
            cumulativeReturn: 0.1927794783611707,
            endDate: "2020-06-02",
            periodReturn: 0.004640970003404496,
            startDate: "2020-06-01",
            __typename: "SinglePeriodPerformance"
          },
          {
            cumulativeReturn: 0.20137145187698557,
            endDate: "2020-06-03",
            periodReturn: 0.007203321042729333,
            startDate: "2020-06-02",
            __typename: "SinglePeriodPerformance"
          },
          {
            cumulativeReturn: 0.2042521754267983,
            endDate: "2020-06-04",
            periodReturn: 0.002397862497325167,
            startDate: "2020-06-03",
            __typename: "SinglePeriodPerformance"
          },
          {
            cumulativeReturn: 0.21456964974163362,
            endDate: "2020-06-05",
            periodReturn: 0.008567536372669323,
            startDate: "2020-06-04",
            __typename: "SinglePeriodPerformance"
          },
          {
            cumulativeReturn: 0.22049173816781575,
            endDate: "2020-06-08",
            periodReturn: 0.004875873876349381,
            startDate: "2020-06-05",
            __typename: "SinglePeriodPerformance"
          },
          {
            cumulativeReturn: 0.21906172927858902,
            endDate: "2020-06-09",
            periodReturn: -0.0011716661772520401,
            startDate: "2020-06-08",
            __typename: "SinglePeriodPerformance"
          },
          {
            cumulativeReturn: 0.21769624143995547,
            endDate: "2020-06-10",
            periodReturn: -0.00112011377753737,
            startDate: "2020-06-09",
            __typename: "SinglePeriodPerformance"
          },
          {
            cumulativeReturn: 0.2075228013244257,
            endDate: "2020-06-11",
            periodReturn: -0.008354661671205882,
            startDate: "2020-06-10",
            __typename: "SinglePeriodPerformance"
          },
          {
            cumulativeReturn: 0.208365888597277,
            endDate: "2020-06-12",
            periodReturn: 0.0006981957375268464,
            startDate: "2020-06-11",
            __typename: "SinglePeriodPerformance"
          },
          {
            cumulativeReturn: 0.20669830555633317,
            endDate: "2020-06-15",
            periodReturn: -0.001380031542333185,
            startDate: "2020-06-12",
            __typename: "SinglePeriodPerformance"
          },
          {
            cumulativeReturn: 0.2149544756619235,
            endDate: "2020-06-16",
            periodReturn: 0.00684195052530869,
            startDate: "2020-06-15",
            __typename: "SinglePeriodPerformance"
          },
          {
            cumulativeReturn: 0.21587933462687614,
            endDate: "2020-06-17",
            periodReturn: 0.0007612293163895631,
            startDate: "2020-06-16",
            __typename: "SinglePeriodPerformance"
          },
          {
            cumulativeReturn: 0.21403267266668813,
            endDate: "2020-06-18",
            periodReturn: -0.0015187871917856047,
            startDate: "2020-06-17",
            __typename: "SinglePeriodPerformance"
          },
          {
            cumulativeReturn: 0.21460693380569684,
            endDate: "2020-06-19",
            periodReturn: 0.00047301950922564064,
            startDate: "2020-06-18",
            __typename: "SinglePeriodPerformance"
          },
          {
            cumulativeReturn: 0.21454212846610754,
            endDate: "2020-06-22",
            periodReturn: -0.00005335498899727554,
            startDate: "2020-06-19",
            __typename: "SinglePeriodPerformance"
          },
          {
            cumulativeReturn: 0.21540048987959048,
            endDate: "2020-06-23",
            periodReturn: 0.0007067366321554128,
            startDate: "2020-06-22",
            __typename: "SinglePeriodPerformance"
          },
          {
            cumulativeReturn: 0.21221529641274617,
            endDate: "2020-06-24",
            periodReturn: -0.0026206945721734104,
            startDate: "2020-06-23",
            __typename: "SinglePeriodPerformance"
          },
          {
            cumulativeReturn: 0.20956040762530348,
            endDate: "2020-06-25",
            periodReturn: -0.0021901132540558406,
            startDate: "2020-06-24",
            __typename: "SinglePeriodPerformance"
          },
          {
            cumulativeReturn: 0.20784915933822368,
            endDate: "2020-06-26",
            periodReturn: -0.0014147687674725643,
            startDate: "2020-06-25",
            __typename: "SinglePeriodPerformance"
          },
          {
            cumulativeReturn: 0.20491791775858226,
            endDate: "2020-06-29",
            periodReturn: -0.002426827519793362,
            startDate: "2020-06-26",
            __typename: "SinglePeriodPerformance"
          },
          {
            cumulativeReturn: 0.20492498244952206,
            endDate: "2020-06-30",
            periodReturn: 0.00000586321344846612,
            startDate: "2020-06-29",
            __typename: "SinglePeriodPerformance"
          },
          {
            cumulativeReturn: 0.20649009975526367,
            endDate: "2020-07-01",
            periodReturn: 0.0012989334012808848,
            startDate: "2020-06-30",
            __typename: "SinglePeriodPerformance"
          },
          {
            cumulativeReturn: 0.20969537419949602,
            endDate: "2020-07-02",
            periodReturn: 0.002656693531826504,
            startDate: "2020-07-01",
            __typename: "SinglePeriodPerformance"
          },
          {
            cumulativeReturn: 0.20969537419949602,
            endDate: "2020-07-03",
            periodReturn: 0,
            startDate: "2020-07-02",
            __typename: "SinglePeriodPerformance"
          },
          {
            cumulativeReturn: 0.2134244486863408,
            endDate: "2020-07-06",
            periodReturn: 0.0030826558209438694,
            startDate: "2020-07-03",
            __typename: "SinglePeriodPerformance"
          },
          {
            cumulativeReturn: 0.2141201192060489,
            endDate: "2020-07-07",
            periodReturn: 0.000573311771046865,
            startDate: "2020-07-06",
            __typename: "SinglePeriodPerformance"
          },
          {
            cumulativeReturn: 0.21398596787863888,
            endDate: "2020-07-08",
            periodReturn: -0.0001104926318969253,
            startDate: "2020-07-07",
            __typename: "SinglePeriodPerformance"
          },
          {
            cumulativeReturn: 0.2134943223308261,
            endDate: "2020-07-09",
            periodReturn: -0.0004049845392133273,
            startDate: "2020-07-08",
            __typename: "SinglePeriodPerformance"
          },
          {
            cumulativeReturn: 0.2128383888066343,
            endDate: "2020-07-10",
            periodReturn: -0.0005405328332578553,
            startDate: "2020-07-09",
            __typename: "SinglePeriodPerformance"
          },
          {
            cumulativeReturn: 0.2147086056447547,
            endDate: "2020-07-13",
            periodReturn: 0.0015420165253514878,
            startDate: "2020-07-10",
            __typename: "SinglePeriodPerformance"
          },
          {
            cumulativeReturn: 0.21408898615680583,
            endDate: "2020-07-14",
            periodReturn: -0.000510097224198035,
            startDate: "2020-07-13",
            __typename: "SinglePeriodPerformance"
          },
          {
            cumulativeReturn: 0.21754786615682598,
            endDate: "2020-07-15",
            periodReturn: 0.0028489509743178892,
            startDate: "2020-07-14",
            __typename: "SinglePeriodPerformance"
          },
          {
            cumulativeReturn: 0.21852723792750806,
            endDate: "2020-07-16",
            periodReturn: 0.0008043805076620818,
            startDate: "2020-07-15",
            __typename: "SinglePeriodPerformance"
          },
          {
            cumulativeReturn: 0.21985605688480225,
            endDate: "2020-07-17",
            periodReturn: 0.0010905123134991434,
            startDate: "2020-07-16",
            __typename: "SinglePeriodPerformance"
          },
          {
            cumulativeReturn: 0.22297781340963474,
            endDate: "2020-07-20",
            periodReturn: 0.002559118764229187,
            startDate: "2020-07-17",
            __typename: "SinglePeriodPerformance"
          },
          {
            cumulativeReturn: 0.22687529542586926,
            endDate: "2020-07-21",
            periodReturn: 0.003186878758959858,
            startDate: "2020-07-20",
            __typename: "SinglePeriodPerformance"
          },
          {
            cumulativeReturn: 0.22940533693795406,
            endDate: "2020-07-22",
            periodReturn: 0.0020621831098218083,
            startDate: "2020-07-21",
            __typename: "SinglePeriodPerformance"
          },
          {
            cumulativeReturn: 0.22999289659799338,
            endDate: "2020-07-23",
            periodReturn: 0.0004779218394340691,
            startDate: "2020-07-22",
            __typename: "SinglePeriodPerformance"
          },
          {
            cumulativeReturn: 0.22997317829870068,
            endDate: "2020-07-24",
            periodReturn: -0.000016031230218764045,
            startDate: "2020-07-23",
            __typename: "SinglePeriodPerformance"
          },
          {
            cumulativeReturn: 0.2307909768448866,
            endDate: "2020-07-27",
            periodReturn: 0.0006648913656126311,
            startDate: "2020-07-24",
            __typename: "SinglePeriodPerformance"
          },
          {
            cumulativeReturn: 0.23095492121696481,
            endDate: "2020-07-28",
            periodReturn: 0.0001332024488011512,
            startDate: "2020-07-27",
            __typename: "SinglePeriodPerformance"
          },
          {
            cumulativeReturn: 0.23304116866597324,
            endDate: "2020-07-29",
            periodReturn: 0.0016948203488604651,
            startDate: "2020-07-28",
            __typename: "SinglePeriodPerformance"
          },
          {
            cumulativeReturn: 0.2335127311837777,
            endDate: "2020-07-30",
            periodReturn: 0.0003824385833884941,
            startDate: "2020-07-29",
            __typename: "SinglePeriodPerformance"
          },
          {
            cumulativeReturn: 0.23420780505692562,
            endDate: "2020-07-31",
            periodReturn: 0.0005634914464812775,
            startDate: "2020-07-30",
            __typename: "SinglePeriodPerformance"
          },
          {
            cumulativeReturn: 0.23610869564139692,
            endDate: "2020-08-03",
            periodReturn: 0.001540170607155964,
            startDate: "2020-07-31",
            __typename: "SinglePeriodPerformance"
          },
          {
            cumulativeReturn: 0.23739076746547716,
            endDate: "2020-08-04",
            periodReturn: 0.0010371837271276455,
            startDate: "2020-08-03",
            __typename: "SinglePeriodPerformance"
          },
          {
            cumulativeReturn: 0.23957387405141262,
            endDate: "2020-08-05",
            periodReturn: 0.0017642822650172924,
            startDate: "2020-08-04",
            __typename: "SinglePeriodPerformance"
          },
          {
            cumulativeReturn: 0.24029218210381176,
            endDate: "2020-08-06",
            periodReturn: 0.00057947982563665,
            startDate: "2020-08-05",
            __typename: "SinglePeriodPerformance"
          },
          {
            cumulativeReturn: 0.24137323981844583,
            endDate: "2020-08-07",
            periodReturn: 0.0008716153582460192,
            startDate: "2020-08-06",
            __typename: "SinglePeriodPerformance"
          },
          {
            cumulativeReturn: 0.2420995508950592,
            endDate: "2020-08-10",
            periodReturn: 0.0005850867839874729,
            startDate: "2020-08-07",
            __typename: "SinglePeriodPerformance"
          },
          {
            cumulativeReturn: 0.24364351636800108,
            endDate: "2020-08-11",
            periodReturn: 0.0012430287667597084,
            startDate: "2020-08-10",
            __typename: "SinglePeriodPerformance"
          },
          {
            cumulativeReturn: 0.2440066243835144,
            endDate: "2020-08-12",
            periodReturn: 0.0002919711402299171,
            startDate: "2020-08-11",
            __typename: "SinglePeriodPerformance"
          },
          {
            cumulativeReturn: 0.24335380479032898,
            endDate: "2020-08-13",
            periodReturn: -0.000524771798147739,
            startDate: "2020-08-12",
            __typename: "SinglePeriodPerformance"
          },
          {
            cumulativeReturn: 0.24268396205985066,
            endDate: "2020-08-14",
            periodReturn: -0.0005387386340860079,
            startDate: "2020-08-13",
            __typename: "SinglePeriodPerformance"
          },
          {
            cumulativeReturn: 0.2436856672451222,
            endDate: "2020-08-17",
            periodReturn: 0.0008060820094686825,
            startDate: "2020-08-14",
            __typename: "SinglePeriodPerformance"
          },
          {
            cumulativeReturn: 0.2433076656701605,
            endDate: "2020-08-18",
            periodReturn: -0.00030393658535848525,
            startDate: "2020-08-17",
            __typename: "SinglePeriodPerformance"
          },
          {
            cumulativeReturn: 0.2438050232243849,
            endDate: "2020-08-19",
            periodReturn: 0.0004000277388753881,
            startDate: "2020-08-18",
            __typename: "SinglePeriodPerformance"
          },
          {
            cumulativeReturn: 0.24349845332892062,
            endDate: "2020-08-20",
            periodReturn: -0.0002464774540543778,
            startDate: "2020-08-19",
            __typename: "SinglePeriodPerformance"
          },
          {
            cumulativeReturn: 0.2436415452682701,
            endDate: "2020-08-21",
            periodReturn: 0.00011507206861936281,
            startDate: "2020-08-20",
            __typename: "SinglePeriodPerformance"
          },
          {
            cumulativeReturn: 0.24503983297475407,
            endDate: "2020-08-24",
            periodReturn: 0.0011243494653295322,
            startDate: "2020-08-21",
            __typename: "SinglePeriodPerformance"
          },
          {
            cumulativeReturn: 0.24627817014812492,
            endDate: "2020-08-25",
            periodReturn: 0.0009946165099087548,
            startDate: "2020-08-24",
            __typename: "SinglePeriodPerformance"
          },
          {
            cumulativeReturn: 0.24679984997574622,
            endDate: "2020-08-26",
            periodReturn: 0.0004185901992966326,
            startDate: "2020-08-25",
            __typename: "SinglePeriodPerformance"
          },
          {
            cumulativeReturn: 0.247846972037308,
            endDate: "2020-08-27",
            periodReturn: 0.00083984776031381,
            startDate: "2020-08-26",
            __typename: "SinglePeriodPerformance"
          },
          {
            cumulativeReturn: 0.24878208263630697,
            endDate: "2020-08-28",
            periodReturn: 0.0007493792267429886,
            startDate: "2020-08-27",
            __typename: "SinglePeriodPerformance"
          },
          {
            cumulativeReturn: 0.24997661891588852,
            endDate: "2020-08-31",
            periodReturn: 0.0009565610334989848,
            startDate: "2020-08-28",
            __typename: "SinglePeriodPerformance"
          },
          {
            cumulativeReturn: 0.2519434093962083,
            endDate: "2020-09-01",
            periodReturn: 0.001573461815650222,
            startDate: "2020-08-31",
            __typename: "SinglePeriodPerformance"
          },
          {
            cumulativeReturn: 0.2543917751272975,
            endDate: "2020-09-02",
            periodReturn: 0.001955652078770887,
            startDate: "2020-09-01",
            __typename: "SinglePeriodPerformance"
          },
          {
            cumulativeReturn: 0.2547494255362377,
            endDate: "2020-09-03",
            periodReturn: 0.0002851185857815217,
            startDate: "2020-09-02",
            __typename: "SinglePeriodPerformance"
          },
          {
            cumulativeReturn: 0.2534166013148227,
            endDate: "2020-09-04",
            periodReturn: -0.0010622234163170396,
            startDate: "2020-09-03",
            __typename: "SinglePeriodPerformance"
          },
          {
            cumulativeReturn: 0.2534166013148227,
            endDate: "2020-09-07",
            periodReturn: 0,
            startDate: "2020-09-04",
            __typename: "SinglePeriodPerformance"
          },
          {
            cumulativeReturn: 0.25178479606337634,
            endDate: "2020-09-08",
            periodReturn: -0.0013018857814189936,
            startDate: "2020-09-07",
            __typename: "SinglePeriodPerformance"
          },
          {
            cumulativeReturn: 0.2530669979181557,
            endDate: "2020-09-09",
            periodReturn: 0.0010242989520337811,
            startDate: "2020-09-08",
            __typename: "SinglePeriodPerformance"
          },
          {
            cumulativeReturn: 0.2533983799781758,
            endDate: "2020-09-10",
            periodReturn: 0.00026445677730784585,
            startDate: "2020-09-09",
            __typename: "SinglePeriodPerformance"
          },
          {
            cumulativeReturn: 0.2533200808803995,
            endDate: "2020-09-11",
            periodReturn: -0.00006246944229963629,
            startDate: "2020-09-10",
            __typename: "SinglePeriodPerformance"
          },
          {
            cumulativeReturn: 0.2540228370847286,
            endDate: "2020-09-14",
            periodReturn: 0.0005607156663727609,
            startDate: "2020-09-11",
            __typename: "SinglePeriodPerformance"
          },
          {
            cumulativeReturn: 0.25457996856035137,
            endDate: "2020-09-15",
            periodReturn: 0.0004442753825104842,
            startDate: "2020-09-14",
            __typename: "SinglePeriodPerformance"
          },
          {
            cumulativeReturn: 0.25439176625792204,
            endDate: "2020-09-16",
            periodReturn: -0.00015001220101201277,
            startDate: "2020-09-15",
            __typename: "SinglePeriodPerformance"
          },
          {
            cumulativeReturn: 0.2534341494275665,
            endDate: "2020-09-17",
            periodReturn: -0.0007634112851460014,
            startDate: "2020-09-16",
            __typename: "SinglePeriodPerformance"
          },
          {
            cumulativeReturn: 0.25337634816920596,
            endDate: "2020-09-18",
            periodReturn: -0.00004611431592707917,
            startDate: "2020-09-17",
            __typename: "SinglePeriodPerformance"
          },
          {
            cumulativeReturn: 0.24857834378426236,
            endDate: "2020-09-21",
            periodReturn: -0.003828063607512658,
            startDate: "2020-09-18",
            __typename: "SinglePeriodPerformance"
          },
          {
            cumulativeReturn: 0.24688137228386942,
            endDate: "2020-09-22",
            periodReturn: -0.0013591229648031162,
            startDate: "2020-09-21",
            __typename: "SinglePeriodPerformance"
          },
          {
            cumulativeReturn: 0.2449662753116233,
            endDate: "2020-09-23",
            periodReturn: -0.0015359095218001355,
            startDate: "2020-09-22",
            __typename: "SinglePeriodPerformance"
          },
          {
            cumulativeReturn: 0.24130973455582372,
            endDate: "2020-09-24",
            periodReturn: -0.0029370600861331774,
            startDate: "2020-09-23",
            __typename: "SinglePeriodPerformance"
          },
          {
            cumulativeReturn: 0.2399439811400752,
            endDate: "2020-09-25",
            periodReturn: -0.0011002519175741512,
            startDate: "2020-09-24",
            __typename: "SinglePeriodPerformance"
          },
          {
            cumulativeReturn: 0.2413839125029067,
            endDate: "2020-09-28",
            periodReturn: 0.001161287432926972,
            startDate: "2020-09-25",
            __typename: "SinglePeriodPerformance"
          },
          {
            cumulativeReturn: 0.24171444868220515,
            endDate: "2020-09-29",
            periodReturn: 0.00026626426842622536,
            startDate: "2020-09-28",
            __typename: "SinglePeriodPerformance"
          },
          {
            cumulativeReturn: 0.24363394646393566,
            endDate: "2020-09-30",
            periodReturn: 0.0015458447662968996,
            startDate: "2020-09-29",
            __typename: "SinglePeriodPerformance"
          },
          {
            cumulativeReturn: 0.24507739331847556,
            endDate: "2020-10-01",
            periodReturn: 0.0011606685863182892,
            startDate: "2020-09-30",
            __typename: "SinglePeriodPerformance"
          },
          {
            cumulativeReturn: 0.244780997433373,
            endDate: "2020-10-02",
            periodReturn: -0.00023805418578232263,
            startDate: "2020-10-01",
            __typename: "SinglePeriodPerformance"
          },
          {
            cumulativeReturn: 0.24728154392353274,
            endDate: "2020-10-05",
            periodReturn: 0.0020088244400545707,
            startDate: "2020-10-02",
            __typename: "SinglePeriodPerformance"
          },
          {
            cumulativeReturn: 0.24993039285964858,
            endDate: "2020-10-06",
            periodReturn: 0.0021236976920089895,
            startDate: "2020-10-05",
            __typename: "SinglePeriodPerformance"
          },
          {
            cumulativeReturn: 0.250549883702043,
            endDate: "2020-10-07",
            periodReturn: 0.0004956202728833888,
            startDate: "2020-10-06",
            __typename: "SinglePeriodPerformance"
          },
          {
            cumulativeReturn: 0.25218883790734825,
            endDate: "2020-10-08",
            periodReturn: 0.0013105868279747307,
            startDate: "2020-10-07",
            __typename: "SinglePeriodPerformance"
          },
          {
            cumulativeReturn: 0.2538967321366379,
            endDate: "2020-10-09",
            periodReturn: 0.0013639270512455707,
            startDate: "2020-10-08",
            __typename: "SinglePeriodPerformance"
          },
          {
            cumulativeReturn: 0.25366945080791425,
            endDate: "2020-10-12",
            periodReturn: -0.000181260005627717,
            startDate: "2020-10-09",
            __typename: "SinglePeriodPerformance"
          },
          {
            cumulativeReturn: 0.25450181476468536,
            endDate: "2020-10-13",
            periodReturn: 0.0006639421230490164,
            startDate: "2020-10-12",
            __typename: "SinglePeriodPerformance"
          },
          {
            cumulativeReturn: 0.25391935366828666,
            endDate: "2020-10-14",
            periodReturn: -0.00046429673480215895,
            startDate: "2020-10-13",
            __typename: "SinglePeriodPerformance"
          },
          {
            cumulativeReturn: 0.25175564111810944,
            endDate: "2020-10-15",
            periodReturn: -0.0017255595775337745,
            startDate: "2020-10-14",
            __typename: "SinglePeriodPerformance"
          },
          {
            cumulativeReturn: 0.25267312864444236,
            endDate: "2020-10-16",
            periodReturn: 0.0007329605684967537,
            startDate: "2020-10-15",
            __typename: "SinglePeriodPerformance"
          },
          {
            cumulativeReturn: 0.2533839950978132,
            endDate: "2020-10-19",
            periodReturn: 0.0005674796059048701,
            startDate: "2020-10-16",
            __typename: "SinglePeriodPerformance"
          },
          {
            cumulativeReturn: 0.2532762607178636,
            endDate: "2020-10-20",
            periodReturn: -0.00008595480744196055,
            startDate: "2020-10-19",
            __typename: "SinglePeriodPerformance"
          },
          {
            cumulativeReturn: 0.2538363721219561,
            endDate: "2020-10-21",
            periodReturn: 0.00044691774802438594,
            startDate: "2020-10-20",
            __typename: "SinglePeriodPerformance"
          },
          {
            cumulativeReturn: 0.25393547826651,
            endDate: "2020-10-22",
            periodReturn: 0.00007904232701918845,
            startDate: "2020-10-21",
            __typename: "SinglePeriodPerformance"
          },
          {
            cumulativeReturn: 0.2545619621848323,
            endDate: "2020-10-23",
            periodReturn: 0.0004996141581291026,
            startDate: "2020-10-22",
            __typename: "SinglePeriodPerformance"
          },
          {
            cumulativeReturn: 0.2525319962750594,
            endDate: "2020-10-26",
            periodReturn: -0.0016180674777016228,
            startDate: "2020-10-23",
            __typename: "SinglePeriodPerformance"
          },
          {
            cumulativeReturn: 0.2516882966071341,
            endDate: "2020-10-27",
            periodReturn: -0.0006735953017043553,
            startDate: "2020-10-26",
            __typename: "SinglePeriodPerformance"
          },
          {
            cumulativeReturn: 0.24732835386064722,
            endDate: "2020-10-28",
            periodReturn: -0.003483249590417282,
            startDate: "2020-10-27",
            __typename: "SinglePeriodPerformance"
          },
          {
            cumulativeReturn: 0.2469199963579949,
            endDate: "2020-10-29",
            periodReturn: -0.00032738572917730884,
            startDate: "2020-10-28",
            __typename: "SinglePeriodPerformance"
          },
          {
            cumulativeReturn: 0.24575194753990948,
            endDate: "2020-10-30",
            periodReturn: -0.0009367472023041512,
            startDate: "2020-10-29",
            __typename: "SinglePeriodPerformance"
          },
          {
            cumulativeReturn: 0.2468824337788862,
            endDate: "2020-11-02",
            periodReturn: 0.0009074729854600805,
            startDate: "2020-10-30",
            __typename: "SinglePeriodPerformance"
          },
          {
            cumulativeReturn: 0.24987539187150465,
            endDate: "2020-11-03",
            periodReturn: 0.002400353081844087,
            startDate: "2020-11-02",
            __typename: "SinglePeriodPerformance"
          },
          {
            cumulativeReturn: 0.2559482273999796,
            endDate: "2020-11-04",
            periodReturn: 0.004858752774852085,
            startDate: "2020-11-03",
            __typename: "SinglePeriodPerformance"
          },
          {
            cumulativeReturn: 0.2559482273999796,
            endDate: "2020-11-05",
            periodReturn: 0,
            startDate: "2020-11-04",
            __typename: "SinglePeriodPerformance"
          }
        ],
        __typename: "EstimatedPerformance2"
      },
      expenseRatio: 0.46454842661307716,
      id: "aab20f18-2767-4580-a519-49af6b2f5fc7",
      issuerConcentration: 0.7456252305509569,
      metadata: {},
      netAssetValue: 762208.89,
      portfolioId: "4021be38-726a-4ed5-ad98-82edbadcdf5e",
      risk: 6.744287242092945,
      updatedAt: "2020-11-05T15:52:40.516188Z",
      wealthProjections: [
        {
          date: "2021-02-05",
          percentiles: [
            {
              nav: 758103.1888312574,
              cumulativeReturn: 0,
              percentile: 0.3,
              __typename: "WealthProjectionPercentile"
            },
            {
              nav: 771750.467894835,
              cumulativeReturn: 0,
              percentile: 0.5,
              __typename: "WealthProjectionPercentile"
            },
            {
              nav: 785397.7469584127,
              cumulativeReturn: 0,
              percentile: 0.7,
              __typename: "WealthProjectionPercentile"
            }
          ],
          __typename: "WealthProjection"
        },
        {
          date: "2021-05-05",
          percentiles: [
            {
              nav: 761869.717465806,
              cumulativeReturn: 761869.717465806 - 758103.1888312574,
              percentile: 0.3,
              __typename: "WealthProjectionPercentile"
            },
            {
              nav: 781411.4903539064,
              cumulativeReturn: 781411.4903539064 - 771750.467894835,
              percentile: 0.5,
              __typename: "WealthProjectionPercentile"
            },
            {
              nav: 800953.2632420068,
              cumulativeReturn: 800953.2632420068 - 785397.7469584127,
              percentile: 0.7,
              __typename: "WealthProjectionPercentile"
            }
          ],
          __typename: "WealthProjection"
        },
        {
          date: "2021-11-05",
          percentiles: [
            {
              nav: 772765.3787594511,
              cumulativeReturn: 772765.3787594511 - 758103.1888312574,
              percentile: 0.3,
              __typename: "WealthProjectionPercentile"
            },
            {
              nav: 801097.8686657844,
              cumulativeReturn: 801097.8686657844 - 771750.467894835,
              percentile: 0.5,
              __typename: "WealthProjectionPercentile"
            },
            {
              nav: 829430.3585721176,
              cumulativeReturn: 829430.3585721176 - 785397.7469584127,
              percentile: 0.7,
              __typename: "WealthProjectionPercentile"
            }
          ],
          __typename: "WealthProjection"
        },
        {
          date: "2022-11-05",
          percentiles: [
            {
              nav: 799858.4907398182,
              cumulativeReturn: 799858.4907398182 - 758103.1888312574,
              percentile: 0.3,
              __typename: "WealthProjectionPercentile"
            },
            {
              nav: 841971.0181822497,
              cumulativeReturn: 841971.0181822497 - 771750.467894835,
              percentile: 0.5,
              __typename: "WealthProjectionPercentile"
            },
            {
              nav: 884083.5456246813,
              cumulativeReturn: 884083.5456246813 - 785397.7469584127,
              percentile: 0.7,
              __typename: "WealthProjectionPercentile"
            }
          ],
          __typename: "WealthProjection"
        },
        {
          date: "2023-11-05",
          percentiles: [
            {
              nav: 830720.9348540022,
              cumulativeReturn: 830720.9348540022 - 758103.1888312574,
              percentile: 0.3,
              __typename: "WealthProjectionPercentile"
            },
            {
              nav: 884929.5737604959,
              cumulativeReturn: 884929.5737604959 - 771750.467894835,
              percentile: 0.5,
              __typename: "WealthProjectionPercentile"
            },
            {
              nav: 939138.2126669894,
              cumulativeReturn: 939138.2126669894 - 785397.7469584127,
              percentile: 0.7,
              __typename: "WealthProjectionPercentile"
            }
          ],
          __typename: "WealthProjection"
        },
        {
          date: "2025-11-05",
          percentiles: [
            {
              nav: 900227.4334184729,
              cumulativeReturn: 900227.4334184729 - 758103.1888312574,
              percentile: 0.3,
              __typename: "WealthProjectionPercentile"
            },
            {
              nav: 977533.9333010258,
              cumulativeReturn: 977533.9333010258 - 771750.467894835,
              percentile: 0.5,
              __typename: "WealthProjectionPercentile"
            },
            {
              nav: 1054840.4331835785,
              cumulativeReturn: 1054840.4331835785 - 785397.7469584127,
              percentile: 0.7,
              __typename: "WealthProjectionPercentile"
            }
          ],
          __typename: "WealthProjection"
        },
        {
          date: "2027-11-05",
          percentiles: [
            {
              nav: 978786.6851017843,
              cumulativeReturn: 978786.6851017843 - 758103.1888312574,
              percentile: 0.3,
              __typename: "WealthProjectionPercentile"
            },
            {
              nav: 1079828.9706764822,
              cumulativeReturn: 1079828.9706764822 - 771750.467894835,
              percentile: 0.5,
              __typename: "WealthProjectionPercentile"
            },
            {
              nav: 1180871.25625118,
              cumulativeReturn: 1180871.25625118 - 785397.7469584127,
              percentile: 0.7,
              __typename: "WealthProjectionPercentile"
            }
          ],
          __typename: "WealthProjection"
        },
        {
          date: "2030-11-05",
          percentiles: [
            {
              nav: 1113475.4123220292,
              cumulativeReturn: 1113475.4123220292 - 758103.1888312574,
              percentile: 0.3,
              __typename: "WealthProjectionPercentile"
            },
            {
              nav: 1253688.5928409654,
              cumulativeReturn: 1253688.5928409654 - 771750.467894835,
              percentile: 0.5,
              __typename: "WealthProjectionPercentile"
            },
            {
              nav: 1393901.7733599015,
              cumulativeReturn: 1393901.7733599015 - 785397.7469584127,
              percentile: 0.7,
              __typename: "WealthProjectionPercentile"
            }
          ],
          __typename: "WealthProjection"
        }
      ],
      yearsToMaturity: 0,
      yield: 5.102141837493456,
      __typename: "Analysis2"
    },
    __typename: "AnalyzePortfolioResponse"
  }
});
