import { Portfolio, PortfolioStatus } from "@bondhouse/position-management";
import YieldXPortfolio, { YieldXAsset } from "models/YieldXPortfolio";
import { PortfolioType } from "@bondhouse/income-portfolios";
import {
  EmploymentStatus,
  Investor,
  InvestorType,
  LiquidityNeeds,
  PhoneType,
  TimeHorizon,
  TrustedContact
} from "@bondhouse/investor";
import { render, screen, waitFor } from "test/utils";
import { RecoilRoot } from "recoil";
import { executionPreferencesState } from "recoil-state/executionPreferencesState";
import { portfolioCreateOrEditState } from "recoil-state/portfolioCreateOrEditState";
import ConfirmExecution from "containers/PortfolioExecution/ConfirmExecution/ConfirmExecution";
import React from "react";
import { client } from "providers/graphql";
import { setupServer } from "msw/node";
import createMockHandler from "mock-requests/graphql/createMockHandler";
import {
  AppType2,
  Investor as InvestorGQL,
  PortfolioType as PortfolioTypeGQL
} from "providers/graphql/hooks";

const mockAsset = {
  allocation: {
    country: {
      no: 0.0796,
      de: 0.2804,
      other: 1.1536,
      fi: 0.0759,
      ch: 0.0468,
      dk: 0.0905,
      lu: 1.2682,
      bm: 0.4489,
      it: 0.7594,
      fr: 0.2748,
      es: 0.0007,
      ky: 0.9028,
      se: 0.2186,
      at: 0.063,
      au: 0.4725,
      sn: 0.0915,
      gb: 1.4999,
      pl: 0.0025,
      ie: 0.6346,
      nl: 1.5735,
      ca: 4.5843,
      us: 81.3099
    },
    currency: {
      aud: 0.0695,
      other: 0.4846,
      eur: 0.1739,
      gbp: 0.114,
      cad: 0.2346,
      usd: 97.9806
    },
    debtType: undefined,
    maturity: {
      fiveToTenYears: 2.5833,
      greaterThanThirtyYears: undefined,
      lessThanOneYear: 5.2446,
      oneToThreeYears: 27.8898,
      other: 0.0003,
      tenToTwentyYears: undefined,
      threeToFiveYears: 60.1138,
      twentyToThirtyYears: undefined
    },
    rating: {
      a: 0.0515,
      aa: undefined,
      aaa: undefined,
      b: 29.959,
      bb: 50.0766,
      bbb: 2.5325,
      c: 0.4203,
      cc: 0.2508,
      ccc: 11.6355,
      d: 0.1055,
      nr: 0.8001
    },
    region: {
      africaExNorthAfrica: 0.0232,
      asiaPacificExJapan: 0.8152,
      emergingMarketsAsia: 0.4433,
      emergingMarketsEurope: undefined,
      europeExUnitedKingdom: 5.7787,
      japan: 0.0649,
      latinAmerica: undefined,
      middleEastNorthAfrica: undefined,
      northAmericaExUnitedStates: 6.6715,
      other: 0.9821,
      unitedKingdom: 1.7362,
      unitedStates: 82.5422
    },
    sector: undefined
  },
  analytics: {
    convexity: undefined,
    creditBeta: undefined,
    currentYield: undefined,
    date: "2020-12-07",
    defaultAdjustedYield: undefined,
    distributionYield: 5.2300479,
    dividendYield: undefined,
    duration: undefined,
    effectiveDuration: undefined,
    gSpread: undefined,
    optionAdjustedSpread: undefined,
    recoveryRate: undefined,
    secYield: 4.47,
    source: "Lipper",
    spreadDuration: undefined,
    standaloneRisk: undefined,
    yearsToMaturity: undefined,
    yield: 4.32,
    yieldToCall: undefined,
    yieldToMaturity: undefined,
    yieldToWorst: undefined,
    zSpread: undefined
  },
  assetSubtype: "EXCHANGE_TRADED_FUNDS",
  assetType: "FUND",
  bond: undefined,
  country: undefined,
  createdAt: "2019-11-18T00:30:12.474548Z",
  createdBy: undefined,
  currency: "USD",
  description:
    "The Fund seeks to track the performance of index that tracks the US high yield short term corporate bond market. The Index is designed to measure the performance of short-term publicly issued US dollar denominated high yield corporate bonds.",
  displayId: undefined,
  equity: undefined,
  esgScores: {
    environmental: 56,
    governance: 65,
    social: 53,
    timestamp: "2020-12-06T12:01:09.539986Z",
    total: 57,
    __typename: "EsgScores"
  },
  fund: {
    allocation: {
      asset: {
        cash: 1.5047,
        equity: 0.0335,
        fixedIncome: 98.3854,
        other: 0.0766,
        __typename: "AssetAllocation"
      },
      currency: {
        aud: 0.0695,
        other: 0.4846,
        eur: 0.1739,
        gbp: 0.114,
        cad: 0.2346,
        usd: 97.9806
      },
      equityCountry: undefined,
      equityRegion: undefined,
      fixedIncomeCountry: {
        no: 0.0796,
        de: 0.2804,
        other: 1.1536,
        fi: 0.0759,
        ch: 0.0468,
        dk: 0.0905,
        lu: 1.2682,
        bm: 0.4489,
        it: 0.7594,
        fr: 0.2748,
        es: 0.0007,
        ky: 0.9028,
        se: 0.2186,
        at: 0.063,
        au: 0.4725,
        sn: 0.0915,
        gb: 1.4999,
        pl: 0.0025,
        ie: 0.6346,
        nl: 1.5735,
        ca: 4.5843,
        us: 81.3099
      },
      fixedIncomeRegion: {
        africaExNorthAfrica: undefined,
        asiaPacificExJapan: 0.564,
        emergingMarketsAsia: 0.4433,
        emergingMarketsEurope: undefined,
        europeExUnitedKingdom: 5.4528,
        japan: undefined,
        latinAmerica: undefined,
        middleEastNorthAfrica: undefined,
        northAmericaExUnitedStates: 6.165,
        other: 0.3968,
        unitedKingdom: 1.4999,
        unitedStates: 81.3099,
        __typename: "RegionAllocation"
      },
      gicsSubIndustry: undefined,
      trbcIndustry: undefined,
      __typename: "FundAllocation"
    },
    apexSupport: undefined,
    assetStatus: "Active",
    benchmark: "Bloomberg Barclays U.S. Corporate High Yield TR",
    classification: "High Yield",
    distributions: {
      capitalGain: undefined,
      foreignTaxCredit: undefined,
      income: {
        aggregateAccrual: undefined,
        exemptIncome: undefined,
        incomeDividend: {
          accountingDate: undefined,
          exDate: "2020-12-01",
          exValue: 0.113191,
          paymentDate: "2020-12-07",
          recordDate: undefined,
          reinvestmentDate: "2020-12-01",
          reinvestmentType: "Nav",
          reinvestmentValue: 26.572104,
          taxableInterestIncome: undefined,
          __typename: "FundDistribution"
        },
        interestIncome: undefined,
        nonQualifiedIncomeDividend: {
          accountingDate: undefined,
          exDate: "2019-12-20",
          exValue: 0.117925,
          paymentDate: "2019-12-27",
          recordDate: undefined,
          reinvestmentDate: "2019-12-20",
          reinvestmentType: "Nav",
          reinvestmentValue: 26.840292,
          taxableInterestIncome: undefined,
          __typename: "FundDistribution"
        },
        qualifiedIncomeDividend: {
          accountingDate: undefined,
          exDate: "2019-07-01",
          exValue: 0.342778,
          paymentDate: "2019-07-08",
          recordDate: undefined,
          reinvestmentDate: "2019-07-01",
          reinvestmentType: "Nav",
          reinvestmentValue: 27.113158,
          taxableInterestIncome: undefined,
          __typename: "FundDistribution"
        },
        __typename: "IncomeDistributions"
      },
      repaymentCategory: undefined,
      __typename: "FundDistributions"
    },
    fees: {
      backLoad: undefined,
      frontLoad: undefined,
      fundExpenseRatio: 0.4,
      managementFee: 0.4,
      marketing12b1Fee: undefined,
      performanceFee: undefined,
      __typename: "Fees"
    },
    focus: {
      assetClassFocus: "Bond",
      geoFocus: "United States of America",
      __typename: "Focus"
    },
    fundType: "Exchange Traded Funds",
    inceptionDate: "2012-03-14",
    institutional: false,
    managementCompany: "SSgA Funds Management Inc",
    midPrice: 26.77,
    netAssetValuePerShare: 26.719808,
    netAssets: 3574778094.12,
    netAssetsDate: "2020-11-30",
    priceDate: "2020-12-04",
    regulatoryStructure: undefined,
    replicationStrategy: "Optimized",
    scores: {
      consistentReturn: {
        fiveYear: 5,
        overall: 5,
        tenYear: undefined,
        threeYear: 5,
        __typename: "Score"
      },
      expense: {
        fiveYear: 5,
        overall: 5,
        tenYear: undefined,
        threeYear: 5,
        __typename: "Score"
      },
      preservation: {
        fiveYear: 2,
        overall: 2,
        tenYear: undefined,
        threeYear: 2,
        __typename: "Score"
      },
      taxEfficiency: {
        fiveYear: 1,
        overall: 1,
        tenYear: undefined,
        threeYear: 1,
        __typename: "Score"
      },
      totalReturn: {
        fiveYear: 5,
        overall: 5,
        tenYear: undefined,
        threeYear: 5,
        __typename: "Score"
      },
      __typename: "Scores6"
    },
    tradeLotSize: 0,
    yields: {
      dailySecYield: 4.32,
      dailySecYieldDate: "2020-12-08",
      distributionYield: 5.0797223,
      dividendYield: undefined,
      lipperDistributionYield: 5.2300479,
      projectedYield: 5.1586469,
      secYield: 4.47,
      simpleYieldBegin: 5.4276218,
      simpleYieldEnd: 5.4037599,
      thirtyDayYield: 4.46974,
      trailingTwelveMonthYield: 5.4603569,
      __typename: "FundYields"
    },
    __typename: "Fund4"
  },
  id: "mockAssetId",
  identifiers: {
    apex: "78468R408",
    bbGlobal: undefined,
    cik: undefined,
    cins: undefined,
    cusip: "78468R408",
    isin: "US78468R4083",
    primaryTicker: undefined,
    refinitivAssetId: undefined,
    refinitivIssuePermId: undefined,
    refinitivLipperId: "40197411",
    refinitivLipperParentId: "36403937",
    refinitivLipperPermId: undefined,
    sedol: "B7N0HC6",
    valoren: undefined,
    __typename: "Identifiers"
  },
  legalEntity: undefined,
  liquid: undefined,
  market: "USA",
  metadata: undefined,
  name: "SPDR Bbg Barclays Short Term High Yield Bond ETF",
  price: 26.77,
  priceDate: "2020-12-04",
  priceQuotes: undefined,
  primaryExchange: "Arca",
  primaryExchangeMic: undefined,
  rating: undefined,
  scores: {
    attractiveness: 1,
    credit: 3,
    efficiency: 3.4,
    liquidity: 3,
    risk: 7.365683555718009,
    timestamp: undefined,
    __typename: "RoverScores"
  },
  ticker: "SJNK",
  unit: undefined,
  universes: {
    custom: undefined,
    general: true,
    liquid: true,
    search: true,
    timestamp: "2020-12-08T05:33:27.395636Z",
    __typename: "Universes"
  },
  updatedAt: "2020-12-08T05:33:27.395623Z",
  updatedBy: "bry",
  __typename: "Asset5"
};
const server = setupServer();
describe("ConfirmExecution", () => {
  beforeAll(() => server.listen());
  afterEach(() => client.clearStore());
  afterAll(() => server.close());
  test("pagination for orders-to-create list", async () => {
    server.use(
      createMockHandler({
        pricesPriceAsset: {
          prices: [
            {
              price: 25
            }
          ],
          __typename: "PriceAssetResponse"
        }
      })
    );
    const emptyPortfolio: Portfolio = {
      id: "mockPortfolioId",
      currency: "USD",
      createdAt: new Date().toISOString(),
      status: PortfolioStatus.READY,
      name: "Empty PMS Portfolio",
      positions: Array(1).fill({
        assetId: "mockAssetId",
        id: "mockPositionId",
        quantity: 1,
        portfolioId: "mockPortfolioId"
      })
    };

    const mockPortfolio = new YieldXPortfolio(
      emptyPortfolio,
      [mockAsset as YieldXAsset],
      {
        portfolioType: PortfolioType.LIVE
      }
    );

    const mockInvestor: Investor = {
      id: "4c533eb8-af67-4002-b6ab-fbd402e7295d",
      investorType: InvestorType.INDIVIDUAL,
      investorInfo: {
        givenName: "0test0",
        familyName: "0test0",
        citizenshipCountry: "USA",
        contactInformation: {
          streetAddress: "372 Westminster Road",
          city: "Brooklyn",
          state: "NY",
          postalCode: "11218",
          country: "USA",
          phone: "516-708-5387 ",
          phoneType: PhoneType.MOBILE,
          emailAddresses: ["fredo.alpizar@gmail.com"]
        },
        trustedContactInfo: { trustedContact: TrustedContact.EXCLUDE },
        disclosures: {
          isControlPerson: false,
          isAffiliatedExchangeOrFINRA: false,
          isPoliticallyExposed: false
        },
        suitabilityProfile: {
          timeHorizon: TimeHorizon.SHORT,
          liquidityNeeds: LiquidityNeeds.SOMEWHATIMPORTANT
        },
        applicantSignature: { eSigned: true },
        birthCountry: "USA",
        isPermanentResident: false,
        employment: { employmentStatus: EmploymentStatus.STUDENT }
      },
      createdAt: "2020-08-03T14:10:11.096790Z",
      updatedAt: "2020-08-03T14:10:11.096790Z"
    };

    const mockPortfolioState = {
      selectedInvestor: mockInvestor,
      currentPortfolio: mockPortfolio
    };

    const mockExecutionPreferences = {
      fullFillRequired: true,
      goodTillCancel: true
    };

    render(
      <RecoilRoot
        initializeState={({ set }) => {
          set(executionPreferencesState, mockExecutionPreferences);
          set(portfolioCreateOrEditState, mockPortfolioState);
        }}
      >
        <ConfirmExecution
          selectedInvestor={
            (mockPortfolioState.selectedInvestor as unknown) as InvestorGQL
          }
          currentPortfolioData={{
            portfolioValue: mockPortfolio.totalMarketValue,
            portfolioId: mockPortfolio.getId(),
            type: (mockPortfolio.getType() as unknown) as PortfolioTypeGQL,
            positions: mockPortfolio.asPmsPortfolio().positions,
            assets: mockPortfolio.getAssets(),
            app: mockPortfolio.getAppType()?.toString() as AppType2
          }}
          postOrders={jest.fn}
          ordersToRaise={[]}
          executionPreferences={{
            fullFillRequired: true,
            goodTillCancel: true
          }}
        />
      </RecoilRoot>
    );

    await waitFor(() => screen.getByTestId("pagination"));
    expect(screen.getByTestId("pagination")).toBeInTheDocument();
  });
});
