import React from "react";
import {
  Asset,
  AssetAssetTypeEnum,
  AssetAssetSubtypeEnum
} from "@bondhouse/rover-universe";
import PositionGridNextOptions from "./PositionGridNextOptions";
import { render } from "../../../../test/utils";

test("renders", () => {
  const assets: Array<Asset> = [
    {
      id: "5829c0c1-ad0c-4b07-82fc-4db73a321d21",
      createdAt: "2019-11-02T02:26:58.609791Z",
      updatedAt: "2020-06-23T04:03:22.738274Z",
      updatedBy: "blm",
      name: "DLTR 4.000 05/15/25 '25",
      description: "4.00% Sr Nts Due 2025",
      price: 113.4497,
      priceDate: "2020-06-22",
      ticker: "DLTR",
      country: "US",
      assetType: AssetAssetTypeEnum.Bond,
      assetSubtype: AssetAssetSubtypeEnum.Corporate,
      currency: "USD",
      identifiers: {
        cusip: "256746AG3",
        isin: "US256746AG33",
        refinitivAssetId: "0x00102c6d99c0121a"
      },
      bond: {
        issuer: {
          id: "0x00029600024561b2",
          longName: "DOLLAR TREE INC",
          shortName: "Dollar Tree",
          legalName: "DOLLAR TREE, INC.",
          ticker: "DLTR",
          country: "US",
          sector: "Service Company",
          subsector: "Retail Stores - Other",
          bankrupt: false,
          active: true,
          ratings: {
            snpSeniorSecured: {
              effectiveDate: "2018-05-08",
              rating: "NR",
              rank: 0
            },
            snpSeniorUnsecured: {
              effectiveDate: "2018-04-05",
              rating: "BBB-",
              rank: 17
            },
            snpLongTerm: {
              effectiveDate: "2018-03-08",
              rating: "BBB-",
              rank: 10
            }
          }
        },
        cleanPrice: 113.4497,
        accruedInterest: 0.43333333333,
        marketData: {
          ejv: {
            date: "2020-06-22",
            source: "ejv",
            price: 113.4497,
            yieldToMaturity: 1.16332,
            yieldToWorst: 1.076258,
            cbeYieldToMaturity: 1.16332,
            cbeYieldToWorst: 1.076258
          }
        },
        maturityDate: "2025-05-15",
        countryOfIssue: "US",
        assetStatus: "Issued",
        principalCurrency: "USD",
        currentCoupon: 4,
        couponClass: "Fixed Coupon",
        couponSchedule: [
          {
            effectiveDate: "2018-04-19",
            couponClass: "Fixed Coupon",
            paymentFrequency: "Semiannually",
            paymentCurrency: "USD",
            paymentBusinessDayRule: "Move forward to next business day",
            paymentCalendarAdjustment: "Nth Calendar Day of Month",
            paymentCalendarAdjustmentValue: 15,
            dayCount: "30/360 US"
          }
        ],
        classifications: {
          datastreamType: "Corporate",
          datastreamSubtype: "Services"
        },
        instrumentType: "Note",
        issueDate: "2018-04-19",
        datedDate: "2018-04-19",
        firstCouponDate: "2018-11-15",
        lastCouponDate: "2024-11-15",
        originalIssuePrice: 99.899,
        originalAmountIssued: 1000000,
        totalAmountIssued: 1000000,
        amountOutstanding: 1000000,
        amountOutstandingDate: "2018-04-19",
        redemptionValue: 100,
        minimumDenomination: 2000,
        denominationIncrement: 1000,
        callType: "Ordinary Call",
        ordinaryCallable: true,
        ordinaryCallNoticePeriodMinimumAmount: 15,
        ordinaryCallNoticePeriodMaximumAmount: 60,
        ordinaryCallNoticePeriodUnits: "Calendar Days",
        ordinaryCallOptionType: "American (Any Time)",
        nearestCallPeriodStartDate: "2025-03-15",
        nearestCallPeriodEndDate: "2025-05-14",
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
        recordDateCalendarAdjustment: "Nth Calendar Day of Month",
        recordDateCalendarAdjustmentValue: 1,
        ratings: {
          snpLongTerm: { effectiveDate: "2018-04-05", rating: "BBB-", rank: 17 }
        },
        seniority: "Senior Unsecured",
        parValue: 1000
      },
      analytics: {
        date: "2020-06-22",
        source: "DataScope Fixed Income",
        _yield: 1.084238,
        yearsToMaturity: 4.891667,
        duration: 4.34191,
        effectiveDuration: 4.34191,
        convexity: 0.22029,
        yieldToMaturity: 1.16332,
        yieldToWorst: 1.076258,
        currentYield: 3.525792,
        zSpread: 83.713777,
        optionAdjustedSpread: 75.806516,
        spreadDuration: 4.34191
      },
      scores: {
        timestamp: "2020-06-20T10:31:26.874253Z",
        attractiveness: 1,
        credit: 3,
        liquidity: 1,
        risk: 3.4347348954668218
      },
      allocation: {
        country: { us: 100 },
        currency: { usd: 100 },
        maturity: { threeToFiveYears: 100 },
        rating: { bbb: 100 },
        region: { unitedStates: 100 },
        sector: { services: 100 }
      }
    },
    {
      id: "847a5877-8989-4850-8b11-630134e84e9a",
      createdAt: "2020-03-28T01:05:55.706238Z",
      updatedAt: "2020-06-23T03:59:43.688008Z",
      name: "VIACA 4.750 05/15/25 '25",
      description: "4.75% Sr Nts Due 2025",
      price: 113.8927,
      priceDate: "2020-06-22",
      ticker: "VIACA",
      country: "US",
      assetType: AssetAssetTypeEnum.Bond,
      assetSubtype: AssetAssetSubtypeEnum.Corporate,
      currency: "USD",
      identifiers: {
        cusip: "92556HAA5",
        isin: "US92556HAA59",
        refinitivAssetId: "0x00102c8057a5206e"
      },
      bond: {
        issuer: {
          id: "0x000034000075febf",
          longName: "VIACOMCBS INC",
          shortName: "ViacomCBS",
          legalName: "VIACOMCBS INC.",
          ticker: "VIACA",
          country: "US",
          sector: "Service Company",
          subsector: "Cable/Media",
          ultimateParentId: "0x000386005a8a7326",
          immediateParentId: "0x000386005a8a7326",
          bankrupt: false,
          active: true,
          ratings: {
            snpSeniorUnsecured: {
              effectiveDate: "2011-11-10",
              rating: "BBB",
              rank: 16
            },
            snpShortTerm: {
              effectiveDate: "2011-11-10",
              rating: "A-2",
              rank: 3
            },
            snpLongTerm: { effectiveDate: "2011-11-10", rating: "BBB", rank: 9 }
          }
        },
        cleanPrice: 113.8927,
        accruedInterest: 1.09513888889,
        marketData: {
          ejv: {
            date: "2020-06-22",
            source: "ejv",
            price: 113.8927,
            yieldToMaturity: 1.771319,
            yieldToWorst: 1.725786,
            cbeYieldToMaturity: 1.771319,
            cbeYieldToWorst: 1.725786
          }
        },
        maturityDate: "2025-05-15",
        countryOfIssue: "US",
        assetStatus: "Issued",
        principalCurrency: "USD",
        currentCoupon: 4.75,
        couponClass: "Fixed Coupon",
        couponSchedule: [
          {
            effectiveDate: "2020-04-01",
            couponClass: "Fixed Coupon",
            paymentFrequency: "Semiannually",
            paymentCurrency: "USD",
            paymentBusinessDayRule: "Move forward to next business day",
            paymentCalendarAdjustment: "Nth Calendar Day of Month",
            paymentCalendarAdjustmentValue: 15,
            dayCount: "30/360 US"
          }
        ],
        classifications: {
          datastreamType: "Corporate",
          datastreamSubtype: "Services"
        },
        instrumentType: "Note",
        issueDate: "2020-04-01",
        datedDate: "2020-04-01",
        firstCouponDate: "2020-11-15",
        lastCouponDate: "2024-11-15",
        originalIssuePrice: 99.498,
        originalAmountIssued: 1250000,
        totalAmountIssued: 1250000,
        amountOutstanding: 1250000,
        amountOutstandingDate: "2020-04-01",
        redemptionValue: 100,
        minimumDenomination: 2000,
        denominationIncrement: 1000,
        callType: "Ordinary Call",
        ordinaryCallable: true,
        ordinaryCallNoticePeriodMinimumAmount: 10,
        ordinaryCallNoticePeriodMaximumAmount: 45,
        ordinaryCallNoticePeriodUnits: "Calendar Days",
        ordinaryCallOptionType: "American (Any Time)",
        nearestCallPeriodStartDate: "2025-04-15",
        nearestCallPeriodEndDate: "2025-05-14",
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
        exchangeListed: false,
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
        recordDateCalendarAdjustment: "Nth Calendar Day of Month",
        recordDateCalendarAdjustmentValue: 1,
        ratings: {
          snpLongTerm: { effectiveDate: "2020-03-27", rating: "BBB", rank: 16 }
        },
        seniority: "Senior Unsecured",
        parValue: 1000
      },
      analytics: {
        date: "2020-06-22",
        source: "DataScope Fixed Income",
        _yield: 1.728221,
        yearsToMaturity: 4.891667,
        duration: 4.311712,
        effectiveDuration: 4.311712,
        convexity: 0.219691,
        yieldToMaturity: 1.771319,
        yieldToWorst: 1.725786,
        currentYield: 4.170592,
        zSpread: 144.678938,
        optionAdjustedSpread: 140.376438,
        spreadDuration: 4.311712
      },
      scores: {
        timestamp: "2020-06-20T10:13:46.113660Z",
        attractiveness: 1,
        credit: 3,
        liquidity: 1,
        risk: 4.113797377226723
      },
      allocation: {
        country: { us: 100 },
        currency: { usd: 100 },
        maturity: { threeToFiveYears: 100 },
        rating: { bbb: 100 },
        region: { unitedStates: 100 },
        sector: { services: 100 }
      }
    },
    {
      id: "8e4dda86-2fd6-475c-9ea5-92f6c5caa812",
      createdAt: "2020-04-04T01:15:06.291674Z",
      updatedAt: "2020-06-23T04:11:52.355342Z",
      name: "FDX 3.800 05/15/25 '25",
      description: "3.800% Guar Sr Nts Due 2025",
      price: 111.4294,
      priceDate: "2020-06-22",
      ticker: "FDX",
      country: "US",
      assetType: AssetAssetTypeEnum.Bond,
      assetSubtype: AssetAssetSubtypeEnum.Corporate,
      currency: "USD",
      identifiers: {
        cusip: "31428XBY1",
        isin: "US31428XBY13",
        refinitivAssetId: "0x00102c643fcc208b"
      },
      bond: {
        issuer: {
          id: "0x0002440002cf59d2",
          longName: "FEDEX CORP",
          shortName: "FedEx",
          legalName: "FEDEX CORPORATION",
          ticker: "FDX",
          country: "US",
          sector: "Transportation",
          subsector: "Transportation - Other",
          bankrupt: false,
          active: true,
          ratings: {
            snpSeniorUnsecured: {
              effectiveDate: "2009-01-14",
              rating: "BBB",
              rank: 16
            },
            snpShortTerm: {
              effectiveDate: "1998-02-02",
              rating: "A-2",
              rank: 3
            },
            snpLongTerm: { effectiveDate: "1998-02-02", rating: "BBB", rank: 9 }
          }
        },
        cleanPrice: 111.4294,
        accruedInterest: 0.81277777778,
        marketData: {
          ejv: {
            date: "2020-06-22",
            source: "ejv",
            price: 111.4294,
            yieldToMaturity: 1.375309,
            yieldToWorst: 1.33732,
            cbeYieldToMaturity: 1.375309,
            cbeYieldToWorst: 1.33732
          }
        },
        maturityDate: "2025-05-15",
        countryOfIssue: "US",
        assetStatus: "Issued",
        principalCurrency: "USD",
        currentCoupon: 3.8,
        couponClass: "Fixed Coupon",
        couponSchedule: [
          {
            effectiveDate: "2020-04-07",
            couponClass: "Fixed Coupon",
            paymentFrequency: "Semiannually",
            paymentCurrency: "USD",
            paymentBusinessDayRule: "Move forward to next business day",
            paymentCalendarAdjustment: "Nth Calendar Day of Month",
            paymentCalendarAdjustmentValue: 15,
            dayCount: "30/360 US"
          }
        ],
        classifications: {
          datastreamType: "Corporate",
          datastreamSubtype: "Industrials"
        },
        instrumentType: "Note",
        issueDate: "2020-04-07",
        datedDate: "2020-04-07",
        firstCouponDate: "2020-11-15",
        lastCouponDate: "2024-11-15",
        originalIssuePrice: 99.724,
        originalAmountIssued: 1000000,
        totalAmountIssued: 1000000,
        amountOutstanding: 1000000,
        amountOutstandingDate: "2020-04-07",
        redemptionValue: 100,
        minimumDenomination: 2000,
        denominationIncrement: 1000,
        callType: "Ordinary Call",
        ordinaryCallable: true,
        ordinaryCallNoticePeriodMinimumAmount: 10,
        ordinaryCallNoticePeriodMaximumAmount: 60,
        ordinaryCallNoticePeriodUnits: "Calendar Days",
        ordinaryCallOptionType: "American (Any Time)",
        nearestCallPeriodStartDate: "2025-04-15",
        nearestCallPeriodEndDate: "2025-05-14",
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
        guaranteed: true,
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
        recordDateCalendarAdjustment: "Nth Calendar Day of Month",
        recordDateCalendarAdjustmentValue: 15,
        ratings: {
          snpLongTerm: { effectiveDate: "2020-04-03", rating: "BBB", rank: 16 }
        },
        seniority: "Senior Unsecured",
        parValue: 1000
      },
      analytics: {
        date: "2020-06-22",
        source: "DataScope Fixed Income",
        _yield: 1.34044,
        yearsToMaturity: 4.891667,
        duration: 4.402396,
        effectiveDuration: 4.402396,
        convexity: 0.231214,
        yieldToMaturity: 1.375309,
        yieldToWorst: 1.33732,
        currentYield: 3.410231,
        zSpread: 104.89147,
        optionAdjustedSpread: 101.40876,
        spreadDuration: 4.402396
      },
      scores: {
        timestamp: "2020-06-20T11:11:06.609346Z",
        attractiveness: 1,
        credit: 3,
        liquidity: 1,
        risk: 3.835569689849036
      },
      allocation: {
        country: { us: 100 },
        currency: { usd: 100 },
        maturity: { threeToFiveYears: 100 },
        rating: { bbb: 100 },
        region: { unitedStates: 100 },
        sector: { transportation: 100 }
      }
    },
    {
      id: "fde3641d-0a69-452a-82b4-bdc2236a1533",
      createdAt: "2020-01-13T23:32:43.095483Z",
      updatedAt: "2020-06-23T04:00:52.758261Z",
      name: "ET 2.900 05/15/25 '25",
      description: "2.90% Guar Sr Nts Due 2025",
      price: 102.625,
      priceDate: "2020-06-22",
      ticker: "ET",
      country: "US",
      assetType: AssetAssetTypeEnum.Bond,
      assetSubtype: AssetAssetSubtypeEnum.Corporate,
      currency: "USD",
      identifiers: {
        cusip: "29278NAP8",
        isin: "US29278NAP87",
        refinitivAssetId: "0x00102cbdb8f71ed0"
      },
      bond: {
        issuer: {
          id: "0x0002a0007aeb4f7c",
          longName: "ENERGY TRANSFER OPERATING LP",
          shortName: "Energy Transf",
          legalName: "ENERGY TRANSFER OPERATING, L.P.",
          ticker: "ET",
          country: "US",
          sector: "Energy Company",
          subsector: "Oil and Gas",
          ultimateParentId: "0x0003e7015db7c3cc",
          immediateParentId: "0x0003e7015db7c3cc",
          bankrupt: false,
          active: true,
          ratings: {
            snpSeniorUnsecured: {
              effectiveDate: "2018-06-05",
              rating: "BBB-",
              rank: 17
            },
            snpShortTerm: {
              effectiveDate: "2017-04-28",
              rating: "A-3",
              rank: 4
            },
            snpLongTerm: {
              effectiveDate: "2017-04-28",
              rating: "BBB-",
              rank: 10
            }
          }
        },
        cleanPrice: 102.625,
        accruedInterest: 0.31416666667,
        marketData: {
          ejv: {
            date: "2020-06-22",
            source: "ejv",
            price: 102.625,
            yieldToMaturity: 2.328803,
            yieldToWorst: 2.319819,
            cbeYieldToMaturity: 2.328803,
            cbeYieldToWorst: 2.319819
          }
        },
        maturityDate: "2025-05-15",
        countryOfIssue: "US",
        assetStatus: "Issued",
        principalCurrency: "USD",
        currentCoupon: 2.9,
        couponClass: "Fixed Coupon",
        couponSchedule: [
          {
            effectiveDate: "2020-01-22",
            couponClass: "Fixed Coupon",
            paymentFrequency: "Semiannually",
            paymentCurrency: "USD",
            paymentCalendarAdjustment: "Nth Calendar Day of Month",
            paymentCalendarAdjustmentValue: 15,
            dayCount: "30/360 US"
          }
        ],
        classifications: {
          datastreamType: "Corporate",
          datastreamSubtype: "Industrials"
        },
        instrumentType: "Note",
        issueDate: "2020-01-22",
        datedDate: "2020-01-22",
        firstCouponDate: "2020-05-15",
        lastCouponDate: "2024-11-15",
        originalIssuePrice: 99.924,
        originalAmountIssued: 1000000,
        totalAmountIssued: 1000000,
        amountOutstanding: 1000000,
        amountOutstandingDate: "2020-01-22",
        redemptionValue: 100,
        minimumDenomination: 2000,
        denominationIncrement: 1000,
        callType: "Ordinary Call",
        ordinaryCallable: true,
        ordinaryCallNoticePeriodMinimumAmount: 15,
        ordinaryCallNoticePeriodMaximumAmount: 60,
        ordinaryCallNoticePeriodUnits: "Calendar Days",
        ordinaryCallOptionType: "American (Any Time)",
        nearestCallPeriodStartDate: "2025-04-15",
        nearestCallPeriodEndDate: "2025-05-14",
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
        guaranteed: true,
        payableInKind: false,
        annuity: false,
        defeasable: false,
        strippable: false,
        mediumTermNote: false,
        quotedDirty: false,
        lastLiquidEtfConstituentDate: "2020-05-31",
        priceQuoteConvention: "DECIMAL",
        priceQuoteRoundingMethod: "Round to 4 decimals",
        dayCount: "30/360 US",
        ratings: {
          snpLongTerm: { effectiveDate: "2020-01-07", rating: "BBB-", rank: 17 }
        },
        seniority: "Senior Unsecured",
        parValue: 1000
      },
      analytics: {
        date: "2020-06-22",
        source: "DataScope Fixed Income",
        _yield: 2.32311,
        yearsToMaturity: 4.891667,
        duration: 4.46806,
        effectiveDuration: 4.46806,
        convexity: 0.19658,
        yieldToMaturity: 2.328803,
        yieldToWorst: 2.319819,
        currentYield: 2.825822,
        zSpread: 200.115666,
        optionAdjustedSpread: 199.553918,
        spreadDuration: 4.46806
      },
      scores: {
        timestamp: "2020-06-20T10:18:40.627702Z",
        attractiveness: 1,
        credit: 3,
        liquidity: 1,
        risk: 7.374011105477359
      },
      allocation: {
        country: { us: 100 },
        currency: { usd: 100 },
        maturity: { threeToFiveYears: 100 },
        rating: { bbb: 100 },
        region: { unitedStates: 100 },
        sector: { energy: 100 }
      }
    },
    {
      id: "024e2589-ef44-4f9c-8334-9c9258122edc",
      createdAt: "2019-11-02T02:14:36.512250Z",
      updatedAt: "2020-06-23T03:56:02.794213Z",
      updatedBy: "blm",
      name: "ABBV 3.600 05/14/25 '25",
      description: "3.600% Sr Nts Due 2025",
      price: 110.5785,
      priceDate: "2020-06-22",
      ticker: "ABBV",
      country: "US",
      assetType: AssetAssetTypeEnum.Bond,
      assetSubtype: AssetAssetSubtypeEnum.Corporate,
      currency: "USD",
      identifiers: {
        cusip: "00287YAQ2",
        isin: "US00287YAQ26",
        refinitivAssetId: "0x00102c8a5a5f01b2"
      },
      bond: {
        issuer: {
          id: "0x0004050fec77ed78",
          longName: "ABBVIE INC",
          shortName: "AbbVie",
          legalName: "ABBVIE INC.",
          ticker: "ABBV",
          country: "US",
          sector: "Service Company",
          subsector: "Pharmaceuticals",
          bankrupt: false,
          active: true,
          ratings: {
            snpSeniorUnsecured: {
              effectiveDate: "2020-05-08",
              rating: "BBB+",
              rank: 15
            },
            snpShortTerm: {
              effectiveDate: "2020-05-08",
              rating: "A-2",
              rank: 3
            },
            snpLongTerm: {
              effectiveDate: "2020-05-08",
              rating: "BBB+",
              rank: 8
            }
          }
        },
        cleanPrice: 110.5785,
        accruedInterest: 0.4,
        marketData: {
          ejv: {
            date: "2020-06-22",
            source: "ejv",
            price: 110.5785,
            yieldToMaturity: 1.356146,
            yieldToWorst: 1.246048,
            cbeYieldToMaturity: 1.356146,
            cbeYieldToWorst: 1.246048
          }
        },
        maturityDate: "2025-05-14",
        countryOfIssue: "US",
        assetStatus: "Issued",
        principalCurrency: "USD",
        currentCoupon: 3.6,
        couponClass: "Fixed Coupon",
        couponSchedule: [
          {
            effectiveDate: "2015-05-14",
            couponClass: "Fixed Coupon",
            paymentFrequency: "Semiannually",
            paymentCurrency: "USD",
            paymentBusinessDayRule: "Move forward to next business day",
            paymentCalendarAdjustment: "Nth Calendar Day of Month",
            paymentCalendarAdjustmentValue: 14,
            dayCount: "30/360 US",
            paymentHolidayCalendar: "New York"
          }
        ],
        classifications: {
          datastreamType: "Corporate",
          datastreamSubtype: "Services"
        },
        instrumentType: "Note",
        issueDate: "2015-05-14",
        datedDate: "2015-05-14",
        firstCouponDate: "2015-11-14",
        lastCouponDate: "2024-11-14",
        originalIssuePrice: 99.825,
        originalAmountIssued: 3750000,
        totalAmountIssued: 3750000,
        amountOutstanding: 3750000,
        amountOutstandingDate: "2015-05-14",
        redemptionValue: 100,
        minimumDenomination: 2000,
        denominationIncrement: 1000,
        callType: "Ordinary Call",
        ordinaryCallable: true,
        ordinaryCallNoticePeriodMinimumAmount: 30,
        ordinaryCallNoticePeriodMaximumAmount: 60,
        ordinaryCallNoticePeriodUnits: "Calendar Days",
        ordinaryCallOptionType: "American (Any Time)",
        nearestCallPeriodStartDate: "2025-02-14",
        nearestCallPeriodEndDate: "2025-05-13",
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
        recordDateCalendarAdjustment:
          "Nth Calendar Day(s) Prior to Payment Date",
        recordDateCalendarAdjustmentValue: 15,
        ratings: {
          snpLongTerm: { effectiveDate: "2020-05-08", rating: "BBB+", rank: 15 }
        },
        seniority: "Senior Unsecured",
        parValue: 1000
      },
      analytics: {
        date: "2020-06-22",
        source: "DataScope Fixed Income",
        _yield: 1.263777,
        yearsToMaturity: 4.888889,
        duration: 4.294066,
        effectiveDuration: 4.294066,
        convexity: 0.2143,
        yieldToMaturity: 1.356146,
        yieldToWorst: 1.246048,
        currentYield: 3.255606,
        zSpread: 102.949448,
        optionAdjustedSpread: 93.715963,
        spreadDuration: 4.294066
      },
      scores: {
        timestamp: "2020-06-20T09:54:51.670632Z",
        attractiveness: 1,
        credit: 3,
        liquidity: 2,
        risk: 3.544663354345367
      },
      allocation: {
        country: { us: 100 },
        currency: { usd: 100 },
        maturity: { threeToFiveYears: 100 },
        rating: { bbb: 100 },
        region: { unitedStates: 100 },
        sector: { services: 100 }
      }
    },
    {
      id: "2e8a4a4a-5d76-407b-aed7-4da3882317d0",
      createdAt: "2020-05-05T01:08:03.840814Z",
      updatedAt: "2020-06-23T03:55:06.482449Z",
      name: "MO 2.350 05/06/25 '25",
      description: "2.35% Sr Guar Nts Due 2025",
      price: 104.9119,
      priceDate: "2020-06-22",
      ticker: "MO",
      country: "US",
      assetType: AssetAssetTypeEnum.Bond,
      assetSubtype: AssetAssetSubtypeEnum.Corporate,
      currency: "USD",
      identifiers: {
        cusip: "02209SBH5",
        isin: "US02209SBH58",
        refinitivAssetId: "0x00102c11c380214f"
      },
      bond: {
        issuer: {
          id: "0x000019000051a9e1",
          longName: "ALTRIA GROUP INC",
          shortName: "Altria Group",
          legalName: "Altria Group, Inc.",
          ticker: "MO",
          country: "US",
          sector: "Consumer Goods",
          subsector: "Food Processors",
          bankrupt: false,
          active: true,
          ratings: {
            snpSeniorUnsecured: {
              effectiveDate: "2018-12-20",
              rating: "BBB",
              rank: 16
            },
            snpShortTerm: {
              effectiveDate: "2018-12-20",
              rating: "A-2",
              rank: 3
            },
            snpLongTerm: { effectiveDate: "2018-12-20", rating: "BBB", rank: 9 }
          }
        },
        cleanPrice: 104.9119,
        accruedInterest: 0.31333333333,
        marketData: {
          ejv: {
            date: "2020-06-22",
            source: "ejv",
            price: 104.9119,
            yieldToMaturity: 1.304873,
            yieldToWorst: 1.288394,
            cbeYieldToMaturity: 1.304873,
            cbeYieldToWorst: 1.288394
          }
        },
        maturityDate: "2025-05-06",
        countryOfIssue: "US",
        assetStatus: "Issued",
        principalCurrency: "USD",
        currentCoupon: 2.35,
        couponClass: "Fixed Coupon",
        couponSchedule: [
          {
            effectiveDate: "2020-05-06",
            couponClass: "Fixed Coupon",
            paymentFrequency: "Semiannually",
            paymentCurrency: "USD",
            paymentCalendarAdjustment: "Nth Calendar Day of Month",
            paymentCalendarAdjustmentValue: 6,
            dayCount: "30/360 US"
          }
        ],
        classifications: {
          datastreamType: "Corporate",
          datastreamSubtype: "Industrials"
        },
        instrumentType: "Note",
        issueDate: "2020-05-06",
        datedDate: "2020-05-06",
        firstCouponDate: "2020-11-06",
        lastCouponDate: "2024-11-06",
        originalIssuePrice: 99.958,
        originalAmountIssued: 750000,
        totalAmountIssued: 750000,
        amountOutstanding: 750000,
        amountOutstandingDate: "2020-05-06",
        redemptionValue: 100,
        minimumDenomination: 2000,
        denominationIncrement: 1000,
        callType: "Ordinary Call",
        ordinaryCallable: true,
        ordinaryCallNoticePeriodMinimumAmount: 15,
        ordinaryCallNoticePeriodMaximumAmount: 45,
        ordinaryCallNoticePeriodUnits: "Calendar Days",
        ordinaryCallOptionType: "American (Any Time)",
        nearestCallPeriodStartDate: "2025-04-06",
        nearestCallPeriodEndDate: "2025-05-05",
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
        guaranteed: true,
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
        recordDateCalendarAdjustment:
          "Nth Calendar Day of Prior Month to Payment Date",
        recordDateCalendarAdjustmentValue: 21,
        ratings: {
          snpLongTerm: { effectiveDate: "2020-05-04", rating: "BBB", rank: 16 }
        },
        seniority: "Senior Unsecured",
        parValue: 1000
      },
      analytics: {
        date: "2020-06-22",
        source: "DataScope Fixed Income",
        _yield: 1.292368,
        yearsToMaturity: 4.866667,
        duration: 4.518943,
        effectiveDuration: 4.518943,
        convexity: 0.231689,
        yieldToMaturity: 1.304873,
        yieldToWorst: 1.288394,
        currentYield: 2.239975,
        zSpread: 97.737503,
        optionAdjustedSpread: 96.490797,
        spreadDuration: 4.518943
      },
      scores: {
        timestamp: "2020-06-20T09:49:54.680867Z",
        attractiveness: 1,
        credit: 3,
        liquidity: 1,
        risk: 3.95853114654199
      },
      allocation: {
        country: { us: 100 },
        currency: { usd: 100 },
        maturity: { threeToFiveYears: 100 },
        rating: { bbb: 100 },
        region: { unitedStates: 100 },
        sector: { consumerGoods: 100 }
      }
    },
    {
      id: "6849c319-2197-4317-93df-5b7ffa1e1e6b",
      createdAt: "2020-04-15T01:05:36.038410Z",
      updatedAt: "2020-06-23T04:06:04.877421Z",
      name: "MAR 5.750 05/01/25 '25",
      description: "5.75% Ser EE Sr Nts Due 2025",
      price: 110.25,
      priceDate: "2020-06-22",
      ticker: "MAR",
      country: "US",
      assetType: AssetAssetTypeEnum.Bond,
      assetSubtype: AssetAssetSubtypeEnum.Corporate,
      currency: "USD",
      identifiers: {
        cusip: "571903BD4",
        isin: "US571903BD44",
        refinitivAssetId: "0x00102cb8770421d6"
      },
      bond: {
        issuer: {
          id: "0x0002460001aa33dc",
          longName: "MARRIOTT INTERNATIONAL INC",
          shortName: "Marriott Intnl",
          legalName: "MARRIOTT INTERNATIONAL, INC.",
          ticker: "MAR",
          country: "US",
          sector: "Service Company",
          subsector: "Lodging",
          bankrupt: false,
          active: true,
          ratings: {
            snpSeniorUnsecured: {
              effectiveDate: "2020-04-02",
              rating: "BBB-",
              rank: 17
            },
            snpShortTerm: {
              effectiveDate: "2020-04-02",
              rating: "A-3",
              rank: 4
            },
            snpLongTerm: {
              effectiveDate: "2020-04-02",
              rating: "BBB-",
              rank: 10
            }
          }
        },
        cleanPrice: 110.25,
        accruedInterest: 1.08611111111,
        marketData: {
          ejv: {
            date: "2020-06-22",
            source: "ejv",
            price: 110.25,
            yieldToMaturity: 3.436924,
            yieldToWorst: 3.402479,
            cbeYieldToMaturity: 3.436924,
            cbeYieldToWorst: 3.402479
          }
        },
        maturityDate: "2025-05-01",
        series: "EE",
        countryOfIssue: "US",
        assetStatus: "Issued",
        principalCurrency: "USD",
        currentCoupon: 5.75,
        couponClass: "Fixed Coupon",
        couponSchedule: [
          {
            effectiveDate: "2020-04-16",
            couponClass: "Fixed Coupon",
            paymentFrequency: "Semiannually",
            paymentCurrency: "USD",
            paymentBusinessDayRule: "Move forward to next business day",
            paymentCalendarAdjustment: "Nth Calendar Day of Month",
            paymentCalendarAdjustmentValue: 1,
            dayCount: "30/360 US"
          }
        ],
        classifications: {
          datastreamType: "Corporate",
          datastreamSubtype: "Services"
        },
        instrumentType: "Note",
        issueDate: "2020-04-16",
        datedDate: "2020-04-16",
        firstCouponDate: "2020-11-01",
        lastCouponDate: "2024-11-01",
        originalIssuePrice: 99.996,
        originalAmountIssued: 1600000,
        totalAmountIssued: 1600000,
        amountOutstanding: 1600000,
        amountOutstandingDate: "2020-04-16",
        redemptionValue: 100,
        minimumDenomination: 2000,
        denominationIncrement: 1000,
        callType: "Ordinary Call",
        ordinaryCallable: true,
        ordinaryCallNoticePeriodMinimumAmount: 15,
        ordinaryCallNoticePeriodMaximumAmount: 45,
        ordinaryCallNoticePeriodUnits: "Calendar Days",
        ordinaryCallOptionType: "American (Any Time)",
        nearestCallPeriodStartDate: "2025-04-01",
        nearestCallPeriodEndDate: "2025-04-30",
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
        recordDateCalendarAdjustment:
          "Nth Calendar Day of Prior Month to Payment Date",
        recordDateCalendarAdjustmentValue: 15,
        ratings: {
          snpLongTerm: { effectiveDate: "2020-04-14", rating: "BBB-", rank: 17 }
        },
        seniority: "Senior Unsecured",
        parValue: 1000
      },
      analytics: {
        date: "2020-06-22",
        source: "DataScope Fixed Income",
        _yield: 3.403726,
        yearsToMaturity: 4.852778,
        duration: 4.157634,
        effectiveDuration: 4.157634,
        convexity: 0.220585,
        yieldToMaturity: 3.436924,
        yieldToWorst: 3.402479,
        currentYield: 5.21542,
        zSpread: 311.700168,
        optionAdjustedSpread: 308.401793,
        spreadDuration: 4.157634
      },
      scores: {
        timestamp: "2020-06-20T10:45:50.456848Z",
        attractiveness: 1,
        credit: 3,
        liquidity: 2,
        risk: 6.414337968667325
      },
      allocation: {
        country: { us: 100 },
        currency: { usd: 100 },
        maturity: { threeToFiveYears: 100 },
        rating: { bbb: 100 },
        region: { unitedStates: 100 },
        sector: { services: 100 }
      }
    },
    {
      id: "0ed413cc-e4cb-4f2a-ac18-4519ab519783",
      createdAt: "2020-05-01T01:07:10.283528Z",
      updatedAt: "2020-06-23T04:09:20.858483Z",
      name: "BA 4.875 05/01/25 '25",
      description: "4.875% Sr Nts due 2025",
      price: 110.6715,
      priceDate: "2020-06-22",
      ticker: "BA",
      country: "US",
      assetType: AssetAssetTypeEnum.Bond,
      assetSubtype: AssetAssetSubtypeEnum.Corporate,
      currency: "USD",
      identifiers: {
        cusip: "097023CT0",
        isin: "US097023CT04",
        refinitivAssetId: "0x00102c33df672196"
      },
      bond: {
        issuer: {
          id: "0x00001900004fbaec",
          longName: "BOEING CO",
          shortName: "Boeing",
          legalName: "THE BOEING COMPANY",
          ticker: "BA",
          country: "US",
          sector: "Manufacturing",
          subsector: "Aerospace",
          bankrupt: false,
          active: true,
          ratings: {
            snpSeniorUnsecured: {
              effectiveDate: "2020-04-29",
              rating: "BBB-",
              rank: 17
            },
            snpShortTerm: {
              effectiveDate: "2020-04-29",
              rating: "A-3",
              rank: 4
            },
            snpLongTerm: {
              effectiveDate: "2020-04-29",
              rating: "BBB-",
              rank: 10
            }
          }
        },
        cleanPrice: 110.6715,
        accruedInterest: 0.67708333333,
        marketData: {
          ejv: {
            date: "2020-06-22",
            source: "ejv",
            price: 110.6715,
            yieldToMaturity: 2.524073,
            yieldToWorst: 2.488069,
            cbeYieldToMaturity: 2.524073,
            cbeYieldToWorst: 2.488069
          }
        },
        maturityDate: "2025-05-01",
        countryOfIssue: "US",
        assetStatus: "Issued",
        principalCurrency: "USD",
        currentCoupon: 4.875,
        couponClass: "Fixed Coupon",
        couponSchedule: [
          {
            effectiveDate: "2020-05-04",
            couponClass: "Fixed Coupon",
            paymentFrequency: "Semiannually",
            paymentCurrency: "USD",
            paymentCalendarAdjustment: "Nth Calendar Day of Month",
            paymentCalendarAdjustmentValue: 1,
            dayCount: "30/360 US"
          }
        ],
        classifications: {
          datastreamType: "Corporate",
          datastreamSubtype: "Industrials"
        },
        instrumentType: "Note",
        issueDate: "2020-05-04",
        datedDate: "2020-05-04",
        firstCouponDate: "2020-11-01",
        lastCouponDate: "2024-11-01",
        originalIssuePrice: 100,
        originalAmountIssued: 3500000,
        totalAmountIssued: 3500000,
        amountOutstanding: 3500000,
        amountOutstandingDate: "2020-05-04",
        redemptionValue: 100,
        minimumDenomination: 2000,
        denominationIncrement: 1000,
        callType: "Ordinary Call",
        ordinaryCallable: true,
        ordinaryCallNoticePeriodMinimumAmount: 10,
        ordinaryCallNoticePeriodMaximumAmount: 60,
        ordinaryCallNoticePeriodUnits: "Calendar Days",
        ordinaryCallOptionType: "American (Any Time)",
        nearestCallPeriodStartDate: "2025-04-01",
        nearestCallPeriodEndDate: "2025-04-30",
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
        defeasable: false,
        strippable: false,
        mediumTermNote: false,
        quotedDirty: false,
        lastLiquidEtfConstituentDate: "2020-05-31",
        priceQuoteConvention: "DECIMAL",
        priceQuoteRoundingMethod: "Round to 4 decimals",
        dayCount: "30/360 US",
        ratings: {
          snpLongTerm: { effectiveDate: "2020-04-30", rating: "BBB-", rank: 17 }
        },
        seniority: "Senior Unsecured",
        parValue: 1000
      },
      analytics: {
        date: "2020-06-22",
        source: "DataScope Fixed Income",
        _yield: 2.490241,
        yearsToMaturity: 4.852778,
        duration: 4.260603,
        effectiveDuration: 4.260603,
        convexity: 0.216633,
        yieldToMaturity: 2.524073,
        yieldToWorst: 2.488069,
        currentYield: 4.404928,
        zSpread: 220.2375,
        optionAdjustedSpread: 216.866584,
        spreadDuration: 4.260603
      },
      scores: {
        timestamp: "2020-06-20T10:59:08.339135Z",
        attractiveness: 1,
        credit: 3,
        liquidity: 2,
        risk: 5.324476518734615
      },
      allocation: {
        country: { us: 100 },
        currency: { usd: 100 },
        maturity: { threeToFiveYears: 100 },
        rating: { bbb: 100 },
        region: { unitedStates: 100 },
        sector: { manufacturing: 100 }
      }
    },
    {
      id: "06d626cf-3f96-4366-8bc2-d66ea9e885b7",
      createdAt: "2020-04-08T06:51:33.547738Z",
      updatedAt: "2020-06-23T03:59:06.135053Z",
      name: "AGR 3.200 04/15/25 '25",
      description: "3.20% Sr Nts Due 2025",
      price: 108.8941,
      priceDate: "2020-06-22",
      ticker: "AGR",
      country: "US",
      assetType: AssetAssetTypeEnum.Bond,
      assetSubtype: AssetAssetSubtypeEnum.Corporate,
      currency: "USD",
      identifiers: {
        cusip: "05351WAC7",
        isin: "US05351WAC73",
        refinitivAssetId: "0x00102ce52ee32034"
      },
      bond: {
        issuer: {
          id: "0x0002a0001c986f49",
          longName: "AVANGRID INC",
          shortName: "Avangrid",
          legalName: "AVANGRID, INC.",
          ticker: "AGR",
          country: "US",
          sector: "Electric Power",
          subsector: "Utility - Other",
          ultimateParentId: "0x0002a0006abb4c3f",
          immediateParentId: "0x0002a0006abb4c3f",
          bankrupt: false,
          active: true,
          ratings: {
            snpSeniorUnsecured: {
              effectiveDate: "2012-11-28",
              rating: "BBB",
              rank: 16
            },
            snpShortTerm: {
              effectiveDate: "2016-05-26",
              rating: "A-2",
              rank: 3
            },
            snpLongTerm: {
              effectiveDate: "2016-04-22",
              rating: "BBB+",
              rank: 8
            }
          }
        },
        cleanPrice: 108.8941,
        accruedInterest: 0.66666666667,
        marketData: {
          ejv: {
            date: "2020-06-22",
            source: "ejv",
            price: 108.8941,
            yieldToMaturity: 1.286239,
            yieldToWorst: 1.257323,
            cbeYieldToMaturity: 1.286239,
            cbeYieldToWorst: 1.257323
          }
        },
        maturityDate: "2025-04-15",
        countryOfIssue: "US",
        assetStatus: "Issued",
        principalCurrency: "USD",
        currentCoupon: 3.2,
        couponClass: "Fixed Coupon",
        couponSchedule: [
          {
            effectiveDate: "2020-04-09",
            couponClass: "Fixed Coupon",
            paymentFrequency: "Semiannually",
            paymentCurrency: "USD",
            paymentBusinessDayRule: "Move forward to next business day",
            paymentCalendarAdjustment: "Nth Calendar Day of Month",
            paymentCalendarAdjustmentValue: 15,
            dayCount: "30/360 US"
          }
        ],
        classifications: {
          datastreamType: "Corporate",
          datastreamSubtype: "Utilities"
        },
        instrumentType: "Note",
        issueDate: "2020-04-09",
        datedDate: "2020-04-09",
        firstCouponDate: "2020-10-15",
        lastCouponDate: "2024-10-15",
        originalIssuePrice: 99.871,
        originalAmountIssued: 750000,
        totalAmountIssued: 750000,
        amountOutstanding: 750000,
        amountOutstandingDate: "2020-04-09",
        redemptionValue: 100,
        minimumDenomination: 2000,
        denominationIncrement: 1000,
        callType: "Ordinary Call",
        ordinaryCallable: true,
        ordinaryCallNoticePeriodMinimumAmount: 10,
        ordinaryCallNoticePeriodMaximumAmount: 60,
        ordinaryCallNoticePeriodUnits: "Calendar Days",
        ordinaryCallOptionType: "American (Any Time)",
        nearestCallPeriodStartDate: "2025-03-15",
        nearestCallPeriodEndDate: "2025-04-14",
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
        exchangeListed: false,
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
        recordDateCalendarAdjustment: "Nth Calendar Day of Month",
        recordDateCalendarAdjustmentValue: 1,
        ratings: {
          snpLongTerm: { effectiveDate: "2020-04-07", rating: "BBB", rank: 16 }
        },
        seniority: "Senior Unsecured",
        parValue: 1000
      },
      analytics: {
        date: "2020-06-22",
        source: "DataScope Fixed Income",
        _yield: 1.26146,
        yearsToMaturity: 4.808333,
        duration: 4.386759,
        effectiveDuration: 4.386759,
        convexity: 0.22299,
        yieldToMaturity: 1.286239,
        yieldToWorst: 1.257323,
        currentYield: 2.938635,
        zSpread: 96.421788,
        optionAdjustedSpread: 93.952337,
        spreadDuration: 4.386759
      },
      scores: {
        timestamp: "2020-06-20T10:09:08.795290Z",
        attractiveness: 1,
        credit: 3,
        liquidity: 1,
        risk: 3.706242513415198
      },
      allocation: {
        country: { us: 100 },
        currency: { usd: 100 },
        maturity: { threeToFiveYears: 100 },
        rating: { bbb: 100 },
        region: { unitedStates: 100 },
        sector: { energy: 100 }
      }
    },
    {
      id: "d1636bae-1089-4785-9058-993ae53ad769",
      createdAt: "2019-11-02T02:36:27.130059Z",
      updatedAt: "2020-06-23T04:08:34.101256Z",
      name: "HCA 5.250 04/15/25",
      description: "5.25% Gtd Sr 1st Lien Nts Due 2025",
      price: 114.5,
      priceDate: "2020-06-22",
      ticker: "HCA",
      country: "US",
      assetType: AssetAssetTypeEnum.Bond,
      assetSubtype: AssetAssetSubtypeEnum.Corporate,
      currency: "USD",
      identifiers: {
        cusip: "404119BQ1",
        isin: "US404119BQ19",
        refinitivAssetId: "0x0004051b45471008"
      },
      bond: {
        issuer: {
          id: "0x0000fa000114ee01",
          longName: "HCA INC",
          shortName: "HCA",
          legalName: "HCA INC.",
          ticker: "HCA",
          country: "US",
          sector: "Service Company",
          subsector: "Health Care Facilities",
          ultimateParentId: "0x00040504160e0c11",
          immediateParentId: "0x00040504160e0c11",
          bankrupt: false,
          active: true,
          ratings: {
            snpSeniorSecured: {
              effectiveDate: "2015-01-13",
              rating: "BBB-",
              rank: 17
            },
            snpSeniorUnsecured: {
              effectiveDate: "2018-07-16",
              rating: "BB-",
              rank: 20
            },
            snpShortTerm: {
              effectiveDate: "2000-08-15",
              rating: "NR",
              rank: 0
            },
            snpLongTerm: {
              effectiveDate: "2018-07-16",
              rating: "BB+",
              rank: 11
            }
          }
        },
        cleanPrice: 114.5,
        accruedInterest: 1.00625,
        marketData: {
          ejv: {
            date: "2020-06-22",
            source: "ejv",
            price: 114.5,
            yieldToMaturity: 2.065909,
            yieldToWorst: 2.065909,
            cbeYieldToMaturity: 2.065909,
            cbeYieldToWorst: 2.065909
          }
        },
        maturityDate: "2025-04-15",
        countryOfIssue: "US",
        assetStatus: "Issued",
        principalCurrency: "USD",
        currentCoupon: 5.25,
        couponClass: "Fixed Coupon",
        couponSchedule: [
          {
            effectiveDate: "2014-10-17",
            couponClass: "Fixed Coupon",
            paymentFrequency: "Semiannually",
            paymentCurrency: "USD",
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
        issueDate: "2014-10-17",
        datedDate: "2014-10-17",
        firstCouponDate: "2015-04-15",
        lastCouponDate: "2024-10-15",
        originalIssuePrice: 100,
        originalAmountIssued: 1400000,
        totalAmountIssued: 1400000,
        amountOutstanding: 1400000,
        amountOutstandingDate: "2014-10-17",
        redemptionValue: 100,
        minimumDenomination: 2000,
        denominationIncrement: 1000,
        callType: "Make Whole Call",
        active: true,
        straight: true,
        floating: false,
        covered: false,
        callable: false,
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
        guaranteed: true,
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
        recordDateCalendarAdjustment: "Nth Calendar Day of Month",
        recordDateCalendarAdjustmentValue: 1,
        ratings: {
          snpLongTerm: { effectiveDate: "2015-01-13", rating: "BBB-", rank: 17 }
        },
        seniority: "Senior Secured - First Lien",
        parValue: 1000
      },
      analytics: {
        date: "2020-06-22",
        source: "DataScope Fixed Income",
        _yield: 2.065909,
        yearsToMaturity: 4.808333,
        duration: 4.269731,
        effectiveDuration: 4.269731,
        convexity: 0.216406,
        yieldToMaturity: 2.065909,
        yieldToWorst: 2.065909,
        currentYield: 4.585153,
        zSpread: 174.743602,
        optionAdjustedSpread: 174.743602,
        spreadDuration: 4.269731
      },
      scores: {
        timestamp: "2020-06-20T10:55:42.845729Z",
        attractiveness: 1,
        credit: 3,
        liquidity: 1,
        risk: 7.065275267742321
      },
      allocation: {
        country: { us: 100 },
        currency: { usd: 100 },
        maturity: { threeToFiveYears: 100 },
        rating: { bbb: 100 },
        region: { unitedStates: 100 },
        sector: { services: 100 }
      }
    }
  ];
  render(<PositionGridNextOptions assets={assets} />);
});
