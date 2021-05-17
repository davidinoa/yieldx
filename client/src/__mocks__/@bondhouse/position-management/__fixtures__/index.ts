import { AppType, PortfolioStatus } from "@bondhouse/position-management";
import {
  AssetAssetTypeEnum,
  Asset,
  AssetAssetSubtypeEnum
} from "@bondhouse/rover-universe";

export const MOCK_BESTFIT_PORTFOLIO = {
  id: "mockBestFitPortfolioId",
  createdAt: "2020-06-24T15:15:24.612104Z",
  status: PortfolioStatus.READY,
  currency: "USD",
  name: "test",
  positions: [
    {
      id: "d7f11323-b0e3-4ac4-8e0a-c7aeb5a8b434",
      assetId: "d7f11323-b0e3-4ac4-8e0a-c7aeb5a8b434",
      quantity: 2000,
      portfolioId: "dev-test"
    },
    {
      id: "12832fb6-52f5-4e87-bea7-3e0a12666522",
      assetId: "12832fb6-52f5-4e87-bea7-3e0a12666522",
      quantity: 2000,
      portfolioId: "dev-test"
    },
    {
      id: "3ffe2499-bb1a-411f-bdf7-d9b3a77eac5b",
      assetId: "3ffe2499-bb1a-411f-bdf7-d9b3a77eac5b",
      quantity: 2000,
      portfolioId: "dev-test"
    },
    {
      id: "3f1a4ef0-6a21-49ca-b408-68a04b1e9320",
      assetId: "3f1a4ef0-6a21-49ca-b408-68a04b1e9320",
      quantity: 3000,
      portfolioId: "dev-test"
    },
    {
      id: "17929599-8998-4a23-a573-bb507877f434",
      assetId: "17929599-8998-4a23-a573-bb507877f434",
      quantity: 2000,
      portfolioId: "dev-test"
    },
    {
      id: "38f8026a-b8c9-45d1-ba48-1d189c696f01",
      assetId: "38f8026a-b8c9-45d1-ba48-1d189c696f01",
      quantity: 2000,
      portfolioId: "dev-test"
    },
    {
      id: "211b3eb4-44ec-4092-914e-ec3550b8eb65",
      assetId: "211b3eb4-44ec-4092-914e-ec3550b8eb65",
      quantity: 2000,
      portfolioId: "dev-test"
    },
    {
      id: "7d93fc57-85d3-4f21-a23b-f924f6cc4cbc",
      assetId: "7d93fc57-85d3-4f21-a23b-f924f6cc4cbc",
      quantity: 2000,
      portfolioId: "dev-test"
    },
    {
      id: "5be4b115-113b-4eef-b5ed-58609968baf5",
      assetId: "5be4b115-113b-4eef-b5ed-58609968baf5",
      quantity: 2000,
      portfolioId: "dev-test"
    },
    {
      id: "c684b4cf-21ed-40d9-b77e-cf1fb61c2546",
      assetId: "c684b4cf-21ed-40d9-b77e-cf1fb61c2546",
      quantity: 3000,
      portfolioId: "dev-test"
    },
    {
      id: "300c760c-1894-4def-94e5-e0bf5ceffae0",
      assetId: "300c760c-1894-4def-94e5-e0bf5ceffae0",
      quantity: 3000,
      portfolioId: "dev-test"
    },
    {
      id: "c2add176-a9fe-4438-a902-9f09316be040",
      assetId: "c2add176-a9fe-4438-a902-9f09316be040",
      quantity: 2000,
      portfolioId: "dev-test"
    },
    {
      id: "3b8b1855-1b0e-4d7d-8b7c-67cb9591c798",
      assetId: "3b8b1855-1b0e-4d7d-8b7c-67cb9591c798",
      quantity: 2000,
      portfolioId: "dev-test"
    },
    {
      id: "40833669-47fa-4c1d-9845-a174fceb837f",
      assetId: "40833669-47fa-4c1d-9845-a174fceb837f",
      quantity: 2000,
      portfolioId: "dev-test"
    },
    {
      id: "2eec992a-9f72-43e5-a084-7f2870980331",
      assetId: "2eec992a-9f72-43e5-a084-7f2870980331",
      quantity: 2000,
      portfolioId: "dev-test"
    },
    {
      id: "1b9c0b15-d331-41e4-b9c0-7d7424f265da",
      assetId: "1b9c0b15-d331-41e4-b9c0-7d7424f265da",
      quantity: 2000,
      portfolioId: "dev-test"
    },
    {
      id: "a2192fd8-5906-4d26-82b6-0a06e54879b2",
      assetId: "a2192fd8-5906-4d26-82b6-0a06e54879b2",
      quantity: 2000,
      portfolioId: "dev-test"
    },
    {
      id: "04d14467-d7bb-4052-bf4e-f03b3e9a9919",
      assetId: "04d14467-d7bb-4052-bf4e-f03b3e9a9919",
      quantity: 3000,
      portfolioId: "dev-test"
    },
    {
      id: "b48e2d25-e96b-4b73-ad2c-0877ce735719",
      assetId: "b48e2d25-e96b-4b73-ad2c-0877ce735719",
      quantity: 2000,
      portfolioId: "dev-test"
    },
    {
      id: "0806f9e9-32e5-4296-8ba0-e6bcbf24b014",
      assetId: "0806f9e9-32e5-4296-8ba0-e6bcbf24b014",
      quantity: 2000,
      portfolioId: "dev-test"
    },
    {
      id: "USD",
      assetId: "USD",
      quantity: 1252.345000000009,
      portfolioId: "dev-test"
    }
  ],
  updatedAt: "2020-06-24T15:15:24.612104Z",
  app: AppType.CUSTOM,
  metadata: { app: "Custom" }
};

export const MOCK_BESTFIT_PORTFOLIO_ASSETS: Array<Asset> = [
  {
    id: "b48e2d25-e96b-4b73-ad2c-0877ce735719",
    createdAt: "2019-11-02T15:07:33.603677Z",
    updatedAt: "2020-06-24T03:34:56.687984Z",
    updatedBy: "blm",
    name: "CMCSA 3.375 08/15/25 '25",
    description: "3.375% Guar Sr Nts Due 2025",
    price: 111.3023,
    priceDate: "2020-06-23",
    ticker: "CMCSA",
    country: "US",
    assetType: AssetAssetTypeEnum.Bond,
    assetSubtype: AssetAssetSubtypeEnum.Corporate,
    currency: "USD",
    identifiers: {
      cusip: "20030NBN0",
      isin: "US20030NBN03",
      refinitivAssetId: "0x00102c81469f0165"
    },
    bond: {
      issuer: {
        id: "0x0003860021b9829f",
        longName: "COMCAST CORP",
        shortName: "Comcast",
        legalName: "COMCAST CORPORATION",
        ticker: "CMCSA",
        country: "US",
        sector: "Service Company",
        subsector: "Cable/Media",
        bankrupt: false,
        active: true,
        ratings: {
          snpSeniorUnsecured: {
            effectiveDate: "2013-02-14",
            rating: "A-",
            rank: 13
          },
          snpShortTerm: { effectiveDate: "2004-05-25", rating: "A-2", rank: 3 },
          snpLongTerm: { effectiveDate: "2013-02-14", rating: "A-", rank: 7 }
        }
      },
      cleanPrice: 111.3023,
      accruedInterest: 1.21875,
      marketData: {
        ejv: {
          date: "2020-06-23",
          source: "ejv",
          price: 111.3023,
          yieldToMaturity: 1.106262,
          yieldToWorst: 1.000426,
          cbeYieldToMaturity: 1.106262,
          cbeYieldToWorst: 1.000426
        }
      },
      maturityDate: "2025-08-15",
      countryOfIssue: "US",
      assetStatus: "Issued",
      principalCurrency: "USD",
      currentCoupon: 3.375,
      couponClass: "Fixed Coupon",
      couponSchedule: [
        {
          effectiveDate: "2015-05-27",
          couponClass: "Fixed Coupon",
          paymentFrequency: "Semiannually",
          paymentCurrency: "USD",
          paymentBusinessDayRule: "Move forward to next business day",
          paymentCalendarAdjustment: "Nth Calendar Day of Month",
          paymentCalendarAdjustmentValue: 15,
          dayCount: "30/360 US",
          paymentHolidayCalendar: "New York"
        }
      ],
      classifications: {
        datastreamType: "Corporate",
        datastreamSubtype: "Services"
      },
      instrumentType: "Note",
      issueDate: "2015-05-27",
      datedDate: "2015-05-27",
      firstCouponDate: "2015-08-15",
      lastCouponDate: "2025-02-15",
      originalIssuePrice: 99.875,
      originalAmountIssued: 1500000,
      totalAmountIssued: 1500000,
      amountOutstanding: 1500000,
      amountOutstandingDate: "2015-05-27",
      redemptionValue: 100,
      minimumDenomination: 2000,
      denominationIncrement: 1000,
      callType: "Ordinary Call",
      ordinaryCallable: true,
      ordinaryCallNoticePeriodMinimumAmount: 30,
      ordinaryCallNoticePeriodMaximumAmount: 60,
      ordinaryCallNoticePeriodUnits: "Calendar Days",
      ordinaryCallOptionType: "American (Any Time)",
      nearestCallPeriodStartDate: "2025-05-15",
      nearestCallPeriodEndDate: "2025-08-14",
      nearestCallPrice: 100,
      active: true,
      straight: true,
      floating: false,
      covered: false,
      callable: true,
      puttable: false,
      sinkingOrAmortizing: false,
      hasWarrantsAttached: false,
      convertible: false,
      perpetual: false,
      partlyPaid: false,
      privatePlacement: false,
      exchangeListed: true,
      dualCurrency: false,
      inflationProtected: false,
      guaranteed: false,
      payableInKind: false,
      annuity: false,
      defeasable: true,
      strippable: false,
      mediumTermNote: false,
      quotedDirty: false,
      lastLiquidEtfConstituentDate: "2020-05-31",
      priceQuoteConvention: "DECIMAL",
      priceQuoteRoundingMethod: "Round to 4 decimals",
      dayCount: "30/360 US",
      ratings: {
        snpLongTerm: { effectiveDate: "2015-05-20", rating: "A-", rank: 13 }
      },
      seniority: "Senior Unsecured",
      parValue: 1000
    },
    analytics: {
      date: "2020-06-23",
      source: "DataScope Fixed Income",
      _yield: 1.013394,
      yearsToMaturity: 5.138889,
      duration: 4.495961,
      effectiveDuration: 4.495961,
      convexity: 0.236259,
      yieldToMaturity: 1.106262,
      yieldToWorst: 1.000426,
      currentYield: 3.032282,
      zSpread: 76.8837,
      optionAdjustedSpread: 67.602647,
      spreadDuration: 4.495961
    },
    scores: {
      timestamp: "2020-06-24T07:36:13.345006Z",
      attractiveness: 1,
      credit: 3,
      liquidity: 1,
      risk: 3.7836948377643504
    },
    allocation: {
      country: { us: 100 },
      currency: { usd: 100 },
      maturity: { fiveToTenYears: 100 },
      rating: { a: 100 },
      region: { unitedStates: 100 },
      sector: { services: 100 }
    }
  }
];
