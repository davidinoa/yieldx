import React from "react";
import { render, screen } from "test/utils";
import { Direction2 } from "providers/graphql/hooks";
import {
  AssetAssetSubtypeEnum,
  AssetAssetTypeEnum
} from "@bondhouse/rover-universe";
import { OrderRow } from "../OderRow";

const mockAsset = {
  __typename: "Asset5",
  allocation: {
    country: {
      no: 0.0217,
      de: 0.2797,
      other: 15.610800000000001,
      pt: 0.1461,
      lu: 2.731,
      bm: 1.7954,
      fr: 0.2025,
      ua: 0.2041,
      br: 0.0184,
      gb: 12.4753,
      ie: 0.7288,
      ca: 2.5814,
      us: 120.3429,
      il: 0.076,
      in: 0.0138,
      ch: 0.0844,
      za: 0.0979,
      gr: 0,
      mx: 2.0193,
      es: 1.729,
      ky: 2.5189,
      ar: 2.6066,
      pe: 0.0428,
      tr: 0.0955,
      nl: 3.9089
    },
    currency: {
      aud: -0.1512,
      other: -55.9836,
      jpy: 0,
      mxn: 0,
      eur: 7.3411,
      gbp: 5.3489,
      cad: 0.6773,
      usd: 151.1149,
      nzd: 0,
      brl: 0.0707
    },
    debtType: undefined,
    maturity: {
      fiveToTenYears: 21.8441,
      greaterThanThirtyYears: 4.0995,
      lessThanOneYear: 3.2518,
      oneToThreeYears: 8.6974,
      other: 10.3673,
      tenToTwentyYears: 74.4713,
      threeToFiveYears: 16.1169,
      twentyToThirtyYears: 29.2221
    },
    rating: {
      a: 0.3162,
      aa: 4.8002,
      aaa: 1.0018,
      b: 15.6399,
      bb: 12.3207,
      bbb: 10.5815,
      c: 3.6707,
      cc: 34.7758,
      ccc: 20.4587,
      d: 12.4304,
      nr: 54.3353
    },
    region: {
      africaExNorthAfrica: 0.3174,
      asiaPacificExJapan: -0.1512,
      emergingMarketsAsia: 0.0526,
      emergingMarketsEurope: undefined,
      europeExUnitedKingdom: 9.8622,
      japan: 0,
      latinAmerica: 5.9675,
      middleEastNorthAfrica: 1.092,
      northAmericaExUnitedStates: 7.219,
      other: -52.0807,
      unitedKingdom: 12.0537,
      unitedStates: 124.0855
    },
    sector: undefined
  },
  analytics: {
    convexity: undefined,
    creditBeta: undefined,
    currentYield: undefined,
    date: "2020-12-07",
    defaultAdjustedYield: undefined,
    distributionYield: 10.5348133,
    dividendYield: undefined,
    duration: undefined,
    effectiveDuration: undefined,
    gSpread: undefined,
    optionAdjustedSpread: undefined,
    recoveryRate: undefined,
    secYield: undefined,
    source: "Lipper",
    spreadDuration: undefined,
    standaloneRisk: undefined,
    yearsToMaturity: undefined,
    yield: 10.5348133,
    yieldToCall: undefined,
    yieldToMaturity: undefined,
    yieldToWorst: undefined,
    zSpread: undefined
  },
  assetSubtype: AssetAssetSubtypeEnum.ClosedEndFunds,
  assetType: AssetAssetTypeEnum.Fund,
  bond: undefined,
  country: undefined,
  createdAt: "2019-11-22T09:35:52.196578Z",
  createdBy: undefined,
  currency: "USD",
  description:
    "The Fund seeks to provide current income as a primary objective and capital appreciation as a secondary objective. The Fund utilizes dynamic asset allocation strategy among multiple fixed-income sectors in the global credit markets, including corporate debt, mortgage-related and other asset-backed securities.",
  displayId: undefined,
  equity: undefined,
  esgScores: {
    environmental: 55,
    governance: 62,
    social: 53,
    timestamp: "2020-12-06T12:01:09.588962Z",
    total: 57
  },
  fund: {
    allocation: {
      asset: {
        cash: -81.0118,
        equity: 9.3306,
        fixedIncome: 170.3311,
        other: 1.3499
      },
      currency: {
        aud: -0.1512,
        other: -55.9836,
        jpy: 0,
        mxn: 0,
        eur: 7.3411,
        gbp: 5.3489,
        cad: 0.6773,
        usd: 151.1149,
        nzd: 0,
        brl: 0.0707
      },
      equityCountry: undefined,
      equityRegion: undefined,
      fixedIncomeCountry: {
        no: 0.0217,
        de: 0.2797,
        other: 15.610800000000001,
        pt: 0.1461,
        lu: 2.731,
        bm: 1.7954,
        fr: 0.2025,
        ua: 0.2041,
        br: 0.0184,
        gb: 12.4753,
        ie: 0.7288,
        ca: 2.5814,
        us: 120.3429,
        il: 0.076,
        in: 0.0138,
        ch: 0.0844,
        za: 0.0979,
        gr: 0,
        mx: 2.0193,
        es: 1.729,
        ky: 2.5189,
        ar: 2.6066,
        pe: 0.0428,
        tr: 0.0955,
        nl: 3.9089
      },
      fixedIncomeRegion: {
        africaExNorthAfrica: 0.3174,
        asiaPacificExJapan: undefined,
        emergingMarketsAsia: 0.0526,
        emergingMarketsEurope: undefined,
        europeExUnitedKingdom: 9.8622,
        japan: undefined,
        latinAmerica: 5.6891,
        middleEastNorthAfrica: 1.092,
        northAmericaExUnitedStates: 6.8957,
        other: 13.604,
        unitedKingdom: 12.4753,
        unitedStates: 120.3429
      },
      gicsSubIndustry: undefined,
      trbcIndustry: undefined
    },
    apexSupport: undefined,
    assetStatus: "Active",
    benchmark: "Bloomberg Barclays Multiverse TR USD Unhedged",
    classification: "Global  Bond",
    distributions: {
      capitalGain: {
        capitalGain: undefined,
        collectibles: undefined,
        longTermCapitalGain: undefined,
        mediumTermCapitalGain: undefined,
        nonQualifiedShortTermCapitalGain: undefined,
        qualifiedShortTermCapitalGain: undefined,
        returnOfCapital: undefined,
        shortTermCapitalGain: {
          accountingDate: undefined,
          exDate: "2013-12-26",
          exValue: 0.24456,
          paymentDate: "2014-01-17",
          recordDate: undefined,
          reinvestmentDate: "2013-12-26",
          reinvestmentType: "Nav",
          reinvestmentValue: 24.02,
          taxableInterestIncome: undefined
        },
        superLongTermCapitalGain: undefined
      },
      foreignTaxCredit: undefined,
      income: {
        aggregateAccrual: undefined,
        exemptIncome: undefined,
        incomeDividend: {
          accountingDate: undefined,
          exDate: "2020-11-10",
          exValue: 0.174,
          paymentDate: "2020-12-01",
          recordDate: undefined,
          reinvestmentDate: "2020-11-10",
          reinvestmentType: "Nav",
          reinvestmentValue: 19.04,
          taxableInterestIncome: undefined
        },
        interestIncome: undefined,
        nonQualifiedIncomeDividend: undefined,
        qualifiedIncomeDividend: undefined
      },
      repaymentCategory: undefined
    },
    fees: {
      backLoad: undefined,
      frontLoad: undefined,
      fundExpenseRatio: 4.18,
      managementFee: undefined,
      marketing12b1Fee: undefined,
      performanceFee: undefined
    },
    focus: { assetClassFocus: "Bond", geoFocus: "Global" },
    fundType: "Closed End Funds",
    inceptionDate: "2013-01-31",
    institutional: false,
    managementCompany: "PIMCO",
    midPrice: 21.34,
    netAssetValuePerShare: 20.04,
    netAssets: 2737074141.38,
    netAssetsDate: "2020-10-30",
    priceDate: "2020-12-04",
    regulatoryStructure: undefined,
    replicationStrategy: undefined,
    scores: {
      consistentReturn: {
        fiveYear: undefined,
        overall: undefined,
        tenYear: undefined,
        threeYear: undefined
      },
      expense: {
        fiveYear: undefined,
        overall: undefined,
        tenYear: undefined,
        threeYear: undefined
      },
      preservation: {
        fiveYear: undefined,
        overall: undefined,
        tenYear: undefined,
        threeYear: undefined
      },
      taxEfficiency: {
        fiveYear: undefined,
        overall: undefined,
        tenYear: undefined,
        threeYear: undefined
      },
      totalReturn: {
        fiveYear: undefined,
        overall: undefined,
        tenYear: undefined,
        threeYear: undefined
      }
    },
    tradeLotSize: 0,
    yields: {
      dailySecYield: undefined,
      dailySecYieldDate: undefined,
      distributionYield: 10.4191617,
      dividendYield: undefined,
      lipperDistributionYield: 10.5348133,
      projectedYield: 11.2724819,
      secYield: undefined,
      simpleYieldBegin: 11.0781318,
      simpleYieldEnd: 12.6646707,
      thirtyDayYield: undefined,
      trailingTwelveMonthYield: 12.8052472
    }
  },
  id: "7e70b152-9a18-47ae-9f53-a877d65c1a88",
  identifiers: {
    apex: "72202D106",
    bbGlobal: undefined,
    cik: undefined,
    cins: undefined,
    cusip: "72202D106",
    isin: "US72202D1063",
    primaryTicker: undefined,
    refinitivAssetId: undefined,
    refinitivIssuePermId: undefined,
    refinitivLipperId: "40202238",
    refinitivLipperParentId: "36480631",
    refinitivLipperPermId: undefined,
    sedol: undefined,
    valoren: undefined
  },
  legalEntity: undefined,
  liquid: undefined,
  market: "USA",
  metadata: undefined,
  name: "PIMCO Dynamic Credit and Mortgage Income Fund",
  price: 21.34,
  priceDate: "2020-12-04",
  priceQuotes: undefined,
  primaryExchange: "NYSE",
  primaryExchangeMic: undefined,
  rating: undefined,
  scores: {
    attractiveness: 1,
    credit: 3,
    efficiency: undefined,
    liquidity: 3,
    risk: 32.01259158816579,
    timestamp: undefined
  },
  ticker: "PCI",
  unit: undefined,
  universes: {
    custom: undefined,
    general: true,
    liquid: true,
    search: true,
    timestamp: "2020-12-08T02:03:10.293943Z"
  },
  updatedAt: "2020-12-08T02:03:10.293883Z",
  updatedBy: "bry",
  lastPrice: 21.38
};
const mockReq = {
  assetId: "7e70b152-9a18-47ae-9f53-a877d65c1a88",
  direction: Direction2.Buy,
  comment: "Generated by YieldX",
  quantity: 3112,
  spotPrice: 21.34,
  priceLimit: 21.7668,
  fullFillRequired: false,
  goodTillCancel: true,
  metadata: { yield: 10.5348133 }
};
describe("OrderRow", () => {
  test("Should render", async () => {
    const { container } = render(
      <OrderRow orderReq={mockReq} asset={mockAsset} />
    );
    expect(container).toBeInTheDocument();
  });

  test("Should display required columns", () => {
    render(<OrderRow orderReq={mockReq} asset={mockAsset} />);
    expect(screen.getByText(/ASSET NAME/i)).toBeInTheDocument();
    expect(screen.getByText(/CUSIP/i)).toBeInTheDocument();
    expect(screen.getByText(/REFERENCE PRICE/i)).toBeInTheDocument();
    expect(screen.getByText(/LIMIT PRICE/i)).toBeInTheDocument();
    expect(screen.getByText(/QUANTITY/i)).toBeInTheDocument();
    expect(screen.getByText(/ACTION/i)).toBeInTheDocument();
  });

  test("Should display yield col if position is a bond", () => {
    render(
      <OrderRow
        orderReq={mockReq}
        asset={{
          ...mockAsset,
          assetType: AssetAssetTypeEnum.Bond
        }}
      />
    );
    expect(screen.getByText(/YIELD/i)).toBeInTheDocument();
  });

  test("Should display not display yield col if position is a fund", () => {
    render(<OrderRow orderReq={mockReq} asset={mockAsset} />);
    expect(screen.queryByText(/YIELD/i)).toBe(null);
  });
});
