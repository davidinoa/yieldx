import {
  AssetAssetTypeEnum,
  Asset,
  AssetAssetSubtypeEnum
} from "@bondhouse/rover-universe";

export const mutualFund: Asset = {
  id: "a852cebd-7bb8-4c39-b19f-a80ef7ee6391",
  createdAt: "2019-11-17T23:22:37.566968Z",
  updatedAt: "2020-06-18T03:24:39.867837Z",
  updatedBy: "bry",
  name: "PF Managed Bond Fund - P",
  description:
    "The Fund seeks to maximize total return consistent with prudent investment management.  The Fund invests at least 80% of its assets in debt instruments, including instruments with characteristics of debt instruments (such as derivatives). The Fund may invest in U.S. and foreign issuers (including emerging markets).",
  price: 11.59,
  priceDate: "2020-06-16",
  ticker: "ZDZH",
  assetType: AssetAssetTypeEnum.Fund,
  assetSubtype: AssetAssetSubtypeEnum.MutualFunds,
  currency: "USD",
  market: "USA",
  identifiers: {
    cusip: "69447T409",
    isin: "US69447T4094",
    refinitivLipperId: "40183611",
    refinitivLipperParentId: "36254464"
  },
  fund: {
    netAssetsDate: "2020-05-29",
    netAssets: 403517837.48,
    tradeLotSize: 0,
    benchmark: "Lipper Global Bond USD Medium Term",
    inceptionDate: "2010-07-02",
    classification: "Medium Term",
    fundType: "Mutual Funds",
    allocation: {
      asset: { cash: -82.8266, fixedIncome: 158.3448, other: 24.4816 },
      currency: {
        chf: 0.0012,
        other: 12.4295,
        mxn: 0.9589,
        eur: 0.3959,
        dkk: 0.0076,
        cad: 0.2402,
        usd: 170.8537,
        nok: 0.0001,
        cny: 0.2318,
        sgd: 0.0002,
        aud: 0.1973,
        jpy: 0.1622,
        pln: 0,
        gbp: -0.5561,
        idr: 0.2256,
        sek: 0.0032,
        nzd: 0.0002,
        try: 0.0002,
        brl: 0.3221,
        rub: 0.536
      },
      debtType: {
        bonds: 19.325300000000002,
        notes: 76.69,
        preferredStock: 0.075,
        mortgageBackedSecurities: 33.3828,
        municipalBonds: 0.6181,
        other: 23.419
      },
      fixedIncomeCountry: {
        de: 0.0385,
        other: 3.6245,
        ru: 0.4881,
        jp: 3.1439,
        dk: 0.1494,
        lu: 0.3832,
        bm: 0.2115,
        fr: 1.4871,
        br: 0.5246,
        qa: 0.5358,
        sn: 0.4328,
        id: 0.6781,
        gb: 8.5349,
        ie: 0.8288,
        ca: 1.3027,
        us: 124.8841,
        eg: 0.0703,
        il: 0.2519,
        ae: 0.1516,
        ch: 1.5257,
        kr: 0.3253,
        cn: 0.2318,
        mx: 0.9306,
        it: 1.0386,
        co: 0.0847,
        kw: 0.1041,
        ky: 0.1414,
        es: 0.4607,
        ar: 0.115,
        au: 0.4333,
        pe: 0.5496,
        pl: 0.0654,
        nl: 4.2923
      },
      fixedIncomeRegion: {
        asiaPacificExJapan: 0.8661,
        emergingMarketsAsia: 1.4274,
        europeExUnitedKingdom: 10.506,
        japan: 3.1439,
        latinAmerica: 2.2044,
        middleEastNorthAfrica: 1.1137,
        northAmericaExUnitedStates: 1.7668,
        unitedKingdom: 8.5349,
        unitedStates: 124.8841,
        other: 3.5728
      },
      maturity: {
        lessThanOneYear: 4.4293,
        oneToThreeYears: 19.9759,
        threeToFiveYears: 29.9407,
        fiveToTenYears: 28.4546,
        tenToTwentyYears: 16.322,
        twentyToThirtyYears: 33.2645,
        greaterThanThirtyYears: 5.7656,
        other: 19.8676
      },
      rating: {
        aaa: 42.3088,
        aa: 37.6515,
        a: 18.4035,
        bbb: 38.7972,
        bb: 6.8719,
        b: 2.2762,
        ccc: 1.9936,
        cc: 1.652,
        c: 0.1341,
        d: 0.1737,
        nr: 7.7576
      },
      region: {
        asiaPacificExJapan: 0.8948,
        emergingMarketsAsia: 1.4337,
        europeExUnitedKingdom: 10.5181,
        japan: 3.8024,
        latinAmerica: 2.3809,
        middleEastNorthAfrica: 1.1137,
        northAmericaExUnitedStates: 1.767,
        unitedKingdom: 8.9033,
        unitedStates: 126.51,
        other: 28.6859
      }
    },
    priceDate: "2020-06-16",
    netAssetValuePerShare: 11.59,
    institutional: false,
    managementCompany: "Pacific Life Fund Advisors LLC",
    focus: { assetClassFocus: "Bond", geoFocus: "United States of America" },
    fees: { managementFee: 0.4, fundExpenseRatio: 0.63 },
    scores: {
      totalReturn: { threeYear: 5, fiveYear: 5, overall: 5 },
      consistentReturn: { threeYear: 5, fiveYear: 5, overall: 5 },
      preservation: { threeYear: 4, fiveYear: 4, overall: 4 },
      expense: { threeYear: 2, fiveYear: 3, overall: 2 },
      taxEfficiency: { threeYear: 1, fiveYear: 1, overall: 1 }
    },
    yields: {
      distributionYield: 1.2390078,
      lipperDistributionYield: 1.2497911,
      projectedYield: 1.2336278,
      secYield: 0.019,
      simpleYieldBegin: 1.3271811,
      simpleYieldEnd: 1.2390078,
      thirtyDayYield: 0.019197,
      trailingTwelveMonthYield: 1.243133
    }
  },
  analytics: {
    date: "2020-06-17",
    source: "Lipper",
    _yield: 0.019,
    distributionYield: 1.2390078,
    secYield: 0.019
  },
  scores: {
    timestamp: "2020-06-08T00:29:08.823701Z",
    attractiveness: 1,
    credit: 3,
    efficiency: 1.6,
    liquidity: 3,
    risk: 6.208839881099431
  },
  allocation: {
    country: {
      de: 0.0385,
      other: 3.6245,
      ru: 0.4881,
      jp: 3.1439,
      dk: 0.1494,
      lu: 0.3832,
      bm: 0.2115,
      fr: 1.4871,
      br: 0.5246,
      qa: 0.5358,
      sn: 0.4328,
      id: 0.6781,
      gb: 8.5349,
      ie: 0.8288,
      ca: 1.3027,
      us: 124.8841,
      eg: 0.0703,
      il: 0.2519,
      ae: 0.1516,
      ch: 1.5257,
      kr: 0.3253,
      cn: 0.2318,
      mx: 0.9306,
      it: 1.0386,
      co: 0.0847,
      kw: 0.1041,
      ky: 0.1414,
      es: 0.4607,
      ar: 0.115,
      au: 0.4333,
      pe: 0.5496,
      pl: 0.0654,
      nl: 4.2923
    },
    currency: {
      chf: 0.0012,
      other: 12.4295,
      mxn: 0.9589,
      eur: 0.3959,
      dkk: 0.0076,
      cad: 0.2402,
      usd: 170.8537,
      nok: 0.0001,
      cny: 0.2318,
      sgd: 0.0002,
      aud: 0.1973,
      jpy: 0.1622,
      pln: 0,
      gbp: -0.5561,
      idr: 0.2256,
      sek: 0.0032,
      nzd: 0.0002,
      try: 0.0002,
      brl: 0.3221,
      rub: 0.536
    },
    maturity: {
      lessThanOneYear: 4.4293,
      oneToThreeYears: 19.9759,
      threeToFiveYears: 29.9407,
      fiveToTenYears: 28.4546,
      tenToTwentyYears: 16.322,
      twentyToThirtyYears: 33.2645,
      greaterThanThirtyYears: 5.7656,
      other: 19.8676
    },
    rating: {
      aaa: 42.3088,
      aa: 37.6515,
      a: 18.4035,
      bbb: 38.7972,
      bb: 6.8719,
      b: 2.2762,
      ccc: 1.9936,
      cc: 1.652,
      c: 0.1341,
      d: 0.1737,
      nr: 7.7576
    },
    region: {
      asiaPacificExJapan: 0.8948,
      emergingMarketsAsia: 1.4337,
      europeExUnitedKingdom: 10.5181,
      japan: 3.8024,
      latinAmerica: 2.3809,
      middleEastNorthAfrica: 1.1137,
      northAmericaExUnitedStates: 1.767,
      unitedKingdom: 8.9033,
      unitedStates: 126.51,
      other: 28.6859
    }
  }
};

export const exchangeTradedFund: Asset = {
  id: "1d4310fe-5ea4-4814-9b80-bc0db9b1d3f8",
  createdAt: "2019-11-17T23:21:21.092440Z",
  updatedAt: "2020-06-18T03:24:36.371886Z",
  updatedBy: "bry",
  name: "Invesco International Corporate Bond ETF",
  description:
    "The Fund seeks to track the investment results of the S&P International Corporate Bond Index. The Fund invests at least 80% of its total assets in investment grade corporate bonds that comprise the Underlying Index. The Fund utilizes a sampling methodology to seek to achieve its investment objective.",
  price: 26.89,
  priceDate: "2020-06-17",
  ticker: "PICB",
  assetType: AssetAssetTypeEnum.Fund,
  assetSubtype: AssetAssetSubtypeEnum.ExchangeTradedFunds,
  currency: "USD",
  market: "USA",
  primaryExchange: "Arca",
  identifiers: {
    cusip: "46138E636",
    isin: "US46138E6361",
    refinitivLipperId: "40183105",
    refinitivLipperParentId: "36238080"
  },
  fund: {
    netAssetsDate: "2020-05-29",
    netAssets: 112510054.44,
    tradeLotSize: 0,
    benchmark: "S&P International Corporate Bond NTR USD",
    inceptionDate: "2010-06-02",
    classification: "Global  Bond",
    fundType: "Exchange Traded Funds",
    allocation: {
      asset: { cash: 1.2349, fixedIncome: 98.7652 },
      currency: {
        chf: 0.328,
        other: 0,
        jpy: 0.447,
        eur: 49.4194,
        gbp: 31.2048,
        usd: 1.6295,
        cad: 16.6865,
        sek: 0.1963,
        nok: 0.0885
      },
      debtType: {
        bonds: 11.134400000000001,
        notes: 78.7013,
        other: 8.331800000000001
      },
      fixedIncomeCountry: {
        no: 1.2595,
        de: 4.205,
        other: 2.07,
        fi: 0.5558,
        be: 2.7008,
        ch: 0.5015,
        jp: 1.2803,
        dk: 1.271,
        lu: 1.8596,
        it: 2.7344,
        fr: 15.5241,
        ky: 0.3953,
        es: 5.4753,
        se: 1.1907,
        au: 1.4252,
        sn: 0.3821,
        gb: 22.477,
        us: 0.5537,
        nl: 16.4254,
        ca: 16.4782
      },
      fixedIncomeRegion: {
        asiaPacificExJapan: 1.8073,
        europeExUnitedKingdom: 55.0159,
        japan: 1.2803,
        northAmericaExUnitedStates: 16.8735,
        unitedKingdom: 22.477,
        unitedStates: 0.5537,
        other: 0.7573
      },
      maturity: {
        lessThanOneYear: 0.1121,
        oneToThreeYears: 13.4546,
        threeToFiveYears: 27.0618,
        fiveToTenYears: 34.9393,
        tenToTwentyYears: 15.3186,
        twentyToThirtyYears: 5.7591,
        greaterThanThirtyYears: 2.1197
      },
      rating: {
        aaa: 1.0267,
        aa: 11.3975,
        a: 36.7933,
        bbb: 46.8893,
        nr: 2.6584
      },
      region: {
        asiaPacificExJapan: 1.8073,
        europeExUnitedKingdom: 55.0159,
        japan: 1.2803,
        northAmericaExUnitedStates: 16.8735,
        unitedKingdom: 22.477,
        unitedStates: 1.7886,
        other: 0.7573
      }
    },
    priceDate: "2020-06-17",
    midPrice: 26.89,
    netAssetValuePerShare: 26.939926,
    replicationStrategy: "Optimized",
    institutional: false,
    managementCompany: "Invesco Capital Management LLC",
    focus: { assetClassFocus: "Bond", geoFocus: "Global Ex US" },
    fees: { managementFee: 0.5, fundExpenseRatio: 0.5 },
    scores: {
      totalReturn: { threeYear: 3, fiveYear: 3, overall: 3 },
      consistentReturn: { threeYear: 3, fiveYear: 4, overall: 3 },
      preservation: { threeYear: 1, fiveYear: 1, overall: 1 },
      expense: { threeYear: 5, fiveYear: 5, overall: 5 },
      taxEfficiency: { threeYear: 4, fiveYear: 4, overall: 4 }
    },
    yields: {
      distributionYield: 1.2859688,
      lipperDistributionYield: 1.3240523,
      projectedYield: 1.3737433,
      secYield: 1.02,
      simpleYieldBegin: 1.3952621,
      simpleYieldEnd: 1.3529324,
      thirtyDayYield: 1.02,
      trailingTwelveMonthYield: 1.3929991
    }
  },
  analytics: {
    date: "2020-06-17",
    source: "Lipper",
    _yield: 1.02,
    distributionYield: 1.2859688,
    secYield: 1.02
  },
  scores: {
    timestamp: "2020-06-09T01:14:39.056758Z",
    attractiveness: 1,
    credit: 3,
    efficiency: 4.6,
    liquidity: 3,
    risk: 10.932113468268835
  },
  allocation: {
    country: {
      no: 1.2595,
      de: 4.205,
      other: 2.07,
      fi: 0.5558,
      be: 2.7008,
      ch: 0.5015,
      jp: 1.2803,
      dk: 1.271,
      lu: 1.8596,
      it: 2.7344,
      fr: 15.5241,
      ky: 0.3953,
      es: 5.4753,
      se: 1.1907,
      au: 1.4252,
      sn: 0.3821,
      gb: 22.477,
      us: 0.5537,
      nl: 16.4254,
      ca: 16.4782
    },
    currency: {
      chf: 0.328,
      other: 0,
      jpy: 0.447,
      eur: 49.4194,
      gbp: 31.2048,
      usd: 1.6295,
      cad: 16.6865,
      sek: 0.1963,
      nok: 0.0885
    },
    maturity: {
      lessThanOneYear: 0.1121,
      oneToThreeYears: 13.4546,
      threeToFiveYears: 27.0618,
      fiveToTenYears: 34.9393,
      tenToTwentyYears: 15.3186,
      twentyToThirtyYears: 5.7591,
      greaterThanThirtyYears: 2.1197
    },
    rating: { aaa: 1.0267, aa: 11.3975, a: 36.7933, bbb: 46.8893, nr: 2.6584 },
    region: {
      asiaPacificExJapan: 1.8073,
      europeExUnitedKingdom: 55.0159,
      japan: 1.2803,
      northAmericaExUnitedStates: 16.8735,
      unitedKingdom: 22.477,
      unitedStates: 1.7886,
      other: 0.7573
    }
  }
};

export const closedEndFund: Asset = {
  id: "c23d3d3b-e5c4-4ea0-81f7-8bb13a31cb1f",
  createdAt: "2019-11-18T00:29:24.928305Z",
  updatedAt: "2020-06-18T03:25:25.720088Z",
  updatedBy: "bry",
  name: "Virtus Global Multi-Sector Income",
  description:
    "The Fund seeks to maximize current income while preserving capital. The Fund invests at least 80% of its assets in fixed income securities of US and non-US issuers. The Fund invests in securities issued by the US Government, debt securities issuer by foreign government, high yield debt securities.",
  price: 11.1,
  priceDate: "2020-06-17",
  ticker: "VGI",
  assetType: AssetAssetTypeEnum.Fund,
  assetSubtype: AssetAssetSubtypeEnum.ClosedEndFunds,
  currency: "USD",
  market: "USA",
  primaryExchange: "NYSE",
  identifiers: {
    cusip: "92829B101",
    isin: "US92829B1017",
    refinitivLipperId: "40197119",
    refinitivLipperParentId: "36399363",
    apex: "92829B101"
  },
  fund: {
    netAssetsDate: "2020-05-29",
    netAssets: 132129885,
    tradeLotSize: 0,
    benchmark: "US Treasury Bills 3 Months TR",
    inceptionDate: "2012-02-23",
    classification: "Global  Bond",
    fundType: "Closed End Funds",
    allocation: {
      asset: {
        cash: 1.4434,
        equity: 0.0495,
        fixedIncome: 97.8222,
        other: 0.6849
      },
      currency: {
        other: 0.5927,
        mxn: 0.5679,
        eur: 0.3073,
        cop: 0,
        cad: 0.0202,
        usd: 97.0628,
        zar: 0
      },
      debtType: {
        bonds: 8.9411,
        notes: 56.036199999999994,
        preferredStock: 0.544,
        mortgageBackedSecurities: 3.4868,
        municipalBonds: 1.1237,
        assetBackedSecurities: 0.29,
        other: 26.1457
      },
      fixedIncomeCountry: {
        de: 0.0008,
        no: 0.3274,
        other: 16.8313,
        fi: 0.0005,
        ru: 1.159,
        lu: 1.095,
        bm: 0.1883,
        fr: 0.0058,
        ua: 1.0389,
        sa: 0.5904,
        br: 0.1976,
        se: 0.0005,
        gb: 0.2406,
        id: 3.1165,
        ie: 0.2413,
        ec: 0.2942,
        ca: 3.2147,
        us: 45.4805,
        eg: 0.6239,
        ae: 1.0321,
        ch: 0.0001,
        in: 0.1844,
        za: 1.6965,
        cl: 1.9381,
        it: 0.0022,
        cn: 0.6764,
        mx: 4.8665,
        co: 1.7622,
        ky: 0.7588,
        at: 0.0012,
        au: 0.6655,
        pe: 1.6747,
        ng: 0.512,
        pk: 0.2024,
        tr: 2.1463,
        nl: 5.0557
      },
      fixedIncomeRegion: {
        africaExNorthAfrica: 3.5047,
        asiaPacificExJapan: 0.6655,
        emergingMarketsAsia: 6.1361,
        europeExUnitedKingdom: 6.7312,
        latinAmerica: 13.364,
        middleEastNorthAfrica: 4.2139,
        northAmericaExUnitedStates: 4.9277,
        unitedKingdom: 0.2406,
        unitedStates: 45.4805,
        other: 12.5581
      },
      maturity: {
        lessThanOneYear: 0.1178,
        oneToThreeYears: 6.3119,
        threeToFiveYears: 13.9162,
        fiveToTenYears: 39.665,
        tenToTwentyYears: 10.4036,
        twentyToThirtyYears: 17.571,
        greaterThanThirtyYears: 6.6632,
        other: 3.1731
      },
      rating: {
        aaa: 8.0774,
        aa: 5.2151,
        a: 9.5367,
        bbb: 30.4653,
        bb: 15.6262,
        b: 10.3827,
        ccc: 3.2323,
        cc: 0.2557,
        c: 0.0249,
        d: 0.1009,
        nr: 14.9048
      },
      region: {
        africaExNorthAfrica: 3.5047,
        asiaPacificExJapan: 0.6655,
        emergingMarketsAsia: 6.1361,
        europeExUnitedKingdom: 6.7312,
        latinAmerica: 13.364,
        middleEastNorthAfrica: 4.2139,
        northAmericaExUnitedStates: 4.9479,
        unitedKingdom: 0.2408,
        unitedStates: 46.1565,
        other: 12.5904
      }
    },
    priceDate: "2020-06-17",
    midPrice: 11.1,
    netAssetValuePerShare: 12.04,
    institutional: false,
    managementCompany: "Virtus Investment Advisers Inc",
    focus: { assetClassFocus: "Bond", geoFocus: "Global" },
    fees: { fundExpenseRatio: 3.13 },
    scores: {
      totalReturn: {},
      consistentReturn: {},
      preservation: {},
      expense: {},
      taxEfficiency: {}
    },
    yields: {
      distributionYield: 9.9667774,
      lipperDistributionYield: 12.9341317,
      projectedYield: 10.8888124,
      secYield: 5.42,
      simpleYieldBegin: 10.5705706,
      simpleYieldEnd: 11.6943522,
      thirtyDayYield: 5.42,
      trailingTwelveMonthYield: 12.2261062
    }
  },
  analytics: {
    date: "2020-06-17",
    source: "Lipper",
    _yield: 5.42,
    distributionYield: 9.9667774,
    secYield: 5.42
  },
  scores: {
    timestamp: "2020-06-09T01:17:03.878918Z",
    attractiveness: 1,
    credit: 3,
    liquidity: 3,
    risk: 40.27795195625362
  },
  allocation: {
    country: {
      de: 0.0008,
      no: 0.3274,
      other: 16.8313,
      fi: 0.0005,
      ru: 1.159,
      lu: 1.095,
      bm: 0.1883,
      fr: 0.0058,
      ua: 1.0389,
      sa: 0.5904,
      br: 0.1976,
      se: 0.0005,
      gb: 0.2406,
      id: 3.1165,
      ie: 0.2413,
      ec: 0.2942,
      ca: 3.2147,
      us: 45.4805,
      eg: 0.6239,
      ae: 1.0321,
      ch: 0.0001,
      in: 0.1844,
      za: 1.6965,
      cl: 1.9381,
      it: 0.0022,
      cn: 0.6764,
      mx: 4.8665,
      co: 1.7622,
      ky: 0.7588,
      at: 0.0012,
      au: 0.6655,
      pe: 1.6747,
      ng: 0.512,
      pk: 0.2024,
      tr: 2.1463,
      nl: 5.0557
    },
    currency: {
      other: 0.5927,
      mxn: 0.5679,
      eur: 0.3073,
      cop: 0,
      cad: 0.0202,
      usd: 97.0628,
      zar: 0
    },
    maturity: {
      lessThanOneYear: 0.1178,
      oneToThreeYears: 6.3119,
      threeToFiveYears: 13.9162,
      fiveToTenYears: 39.665,
      tenToTwentyYears: 10.4036,
      twentyToThirtyYears: 17.571,
      greaterThanThirtyYears: 6.6632,
      other: 3.1731
    },
    rating: {
      aaa: 8.0774,
      aa: 5.2151,
      a: 9.5367,
      bbb: 30.4653,
      bb: 15.6262,
      b: 10.3827,
      ccc: 3.2323,
      cc: 0.2557,
      c: 0.0249,
      d: 0.1009,
      nr: 14.9048
    },
    region: {
      africaExNorthAfrica: 3.5047,
      asiaPacificExJapan: 0.6655,
      emergingMarketsAsia: 6.1361,
      europeExUnitedKingdom: 6.7312,
      latinAmerica: 13.364,
      middleEastNorthAfrica: 4.2139,
      northAmericaExUnitedStates: 4.9479,
      unitedKingdom: 0.2408,
      unitedStates: 46.1565,
      other: 12.5904
    }
  }
};

export const municipalBond: Asset = {
  id: "3c5aac0d-282d-48ad-a55f-1720f6a65d58",
  createdAt: "2020-02-19T06:25:53.951239Z",
  updatedAt: "2020-06-17T01:35:19.997700Z",
  name: "MI 06/01/52 '19",
  description: "MI : 0.000 : DUE - 2052",
  price: 7.211,
  priceDate: "2020-06-16",
  country: "US",
  assetType: AssetAssetTypeEnum.Bond,
  assetSubtype: AssetAssetSubtypeEnum.Sovereign,
  currency: "USD",
  identifiers: {
    cusip: "594751AH2",
    isin: "US594751AH20",
    refinitivAssetId: "0x00038500b898ab0d",
    refinitivIssuePermId: "44835274981"
  },
  bond: {
    issuer: {
      id: "5000011754",
      longName: "THE MICHIGAN TOBACCO SETTLEMENT FINANCE AUTHORITY",
      legalName: "THE MICHIGAN TOBACCO SETTLEMENT FINANCE AUTHORITY",
      country: "US",
      ultimateParentId: "0x0003ef06cf9ce55c",
      immediateParentId: "0x0003ef06cf9ce55c",
      active: true,
      headquartersAddress: {
        street1: "430 West Allegan Street",
        street2: "Austin Building",
        cityOrTown: "LANSING",
        stateOrCountyOrRegion: "MICHIGAN",
        zipCode: "48922-0001",
        country: "US"
      },
      registeredAddress: {
        street1: "Austin Building",
        street2: "430 West Allegan Street",
        cityOrTown: "LANSING",
        stateOrCountyOrRegion: "MICHIGAN",
        zipCode: "48922",
        country: "US"
      },
      url:
        "http://www.legislature.mi.gov/(S(l2qxo0eutx3lyc45bsavnh45))/mileg.aspx?page=getobject&objectName=mcl"
    },
    issue: {
      id: "44836238456",
      active: true,
      issueDescription:
        "Tobacco Settlement Asset-Backed (First Subordinate CAB)",
      issueIdentifier: "0x00100c002f24b0a7",
      issuerIdentifier: "0x00038500a8393423",
      offeringDate: "2007-08-15",
      offeringDescription: "Negotiated",
      privatePlacement: false,
      private144a: false,
      totalProgramAmount: 35649.947999
    },
    cleanPrice: 7.211,
    accruedInterest: 0,
    maturityDate: "2052-06-01",
    series: "2007-B",
    countryOfIssue: "US",
    assetStatus: "Re-Opening",
    currentCoupon: 0,
    couponClass: "Discount / Zero Coupon",
    couponSchedule: [
      {
        effectiveDate: "2007-08-20",
        couponClass: "Discount/Zero Coupon",
        paymentCurrency: "USD",
        dayCount: "30/360 (Bond Basis)"
      }
    ],
    classifications: {
      datastreamType: "Municipals",
      datastreamSubtype: "Municipals"
    },
    instrumentType: "Bond",
    issueDate: "2007-08-20",
    originalAmountIssued: 865290,
    amountOutstanding: 865290,
    capType: "New Filing",
    debtServiceType: "Tobacco Agreement",
    state: "MI",
    useOfProceeds: "Other Health Care",
    minimumDenomination: 5000,
    denominationIncrement: 5000,
    active: true,
    straight: false,
    floating: false,
    callable: true,
    cleanUpCallable: false,
    sinkingOrAmortizing: false,
    privatePlacement: false,
    green: false,
    priceQuoteConvention: "DECIMAL",
    dayCount: "30/360 (Bond Basis)",
    ratings: {
      snpLongTerm: { effectiveDate: "2019-10-24", rating: "CCC-", rank: 26 }
    },
    unitedStatesTaxExempt: true,
    stateTaxExempt: true,
    subjectToAlternativeMinimumTax: false
  },
  analytics: {
    date: "2020-06-16",
    _yield: 8.401,
    yearsToMaturity: 31.975342,
    duration: 30.665,
    effectiveDuration: 30.665,
    convexity: 9.55039,
    yieldToMaturity: 8.401,
    yieldToWorst: 8.401,
    currentYield: 0,
    gSpread: 895.7887
  },
  scores: {
    timestamp: "2020-06-13T08:58:25.273235Z",
    attractiveness: 1,
    credit: 3,
    liquidity: 1,
    risk: 45.050686474966724
  },
  allocation: {
    country: { us: 100 },
    currency: { usd: 100 },
    maturity: { greaterThanThirtyYears: 100 },
    rating: { ccc: 100 },
    region: { unitedStates: 100 }
  }
};

export const corporateBond: Asset = {
  id: "bceea189-735d-48e8-b1b0-a8cdf31b160d",
  createdAt: "2019-11-02T02:21:01.971577Z",
  updatedAt: "2020-06-18T03:24:56.933383Z",
  updatedBy: "blm",
  name: "UBSG 1.578 05/23/23 '22 FRN",
  description: "FLT/NA Sr 144A Nts Due 2023",
  price: 100.3845,
  priceDate: "2020-06-17",
  ticker: "UBSG",
  country: "US",
  assetType: AssetAssetTypeEnum.Bond,
  assetSubtype: AssetAssetSubtypeEnum.Corporate,
  currency: "USD",
  identifiers: {
    cusip: "90352JAB9",
    isin: "US90352JAB98",
    refinitivAssetId: "0x00102c3920b00c99"
  },
  bond: {
    issuer: {
      id: "0x0004051bdc68e04e",
      longName: "UBS GROUP AG",
      shortName: "UBS Group",
      legalName: "UBS Group AG",
      ticker: "UBSG",
      country: "CH",
      sector: "Other Financial",
      subsector: "Financial - Other",
      ultimateParentId: "0x0004051bdc68e04e",
      immediateParentId: "0x0004051bdc68e04e",
      bankrupt: false,
      active: true,
      ratings: {
        snpSeniorUnsecured: {
          effectiveDate: "2016-06-06",
          rating: "A-",
          rank: 13
        },
        snpShortTerm: { effectiveDate: "2015-02-12", rating: "A-2", rank: 3 },
        snpLongTerm: { effectiveDate: "2016-06-06", rating: "A-", rank: 7 }
      }
    },
    cleanPrice: 100.3845,
    accruedInterest: 0.1052,
    marketData: {
      ejv: {
        date: "2020-06-17",
        source: "ejv",
        price: 100.3845,
        yieldToMaturity: 1.423627,
        yieldToWorst: 1.355783,
        cbeYieldToMaturity: 1.427548,
        cbeYieldToWorst: 1.360072
      }
    },
    maturityDate: "2023-05-23",
    countryOfIssue: "US",
    assetStatus: "Issued",
    principalCurrency: "USD",
    currentCoupon: 1.578,
    couponClass: "Floating Coupon",
    couponSchedule: [
      {
        effectiveDate: "2017-03-23",
        couponClass: "Floating Coupon",
        floor: 0,
        paymentFrequency: "Quarterly",
        paymentCurrency: "USD",
        paymentBusinessDayRule:
          "Move forward to next business day. If the next month, move back to last bus day",
        paymentCalendarAdjustment: "Nth Calendar Day of Month",
        paymentCalendarAdjustmentValue: 23,
        dayCount: "Actual/360",
        resetBusinessDayRule:
          "Move forward to next business day. If the next month, move back to last bus day",
        resetCalendarAdjustment: "Nth Calendar Day of Month",
        resetCalendarAdjustmentValue: 23,
        resetFrequency: "Quarterly",
        paymentHolidayCalendar: "London, New York and Zurich",
        resetHolidayCalendar: "London, New York and Zurich"
      }
    ],
    classifications: {
      datastreamType: "Corporate",
      datastreamSubtype: "Financials"
    },
    instrumentType: "Note",
    issueDate: "2017-03-23",
    datedDate: "2017-03-23",
    firstCouponDate: "2017-05-23",
    lastCouponDate: "2023-02-23",
    originalIssuePrice: 100,
    originalAmountIssued: 1000000,
    totalAmountIssued: 1000000,
    amountOutstanding: 1000000,
    amountOutstandingDate: "2017-03-23",
    redemptionValue: 100,
    minimumDenomination: 200000,
    denominationIncrement: 1000,
    callType: "Ordinary Call",
    ordinaryCallable: true,
    ordinaryCallNoticePeriodMinimumAmount: 30,
    ordinaryCallNoticePeriodMaximumAmount: 60,
    ordinaryCallNoticePeriodUnits: "Calendar Days",
    ordinaryCallOptionType: "European (One Time)",
    nearestCallPeriodStartDate: "2022-05-23",
    nearestCallPeriodEndDate: "2022-05-23",
    nearestCallPrice: 100,
    active: true,
    straight: true,
    floating: true,
    covered: false,
    callable: true,
    puttable: false,
    sinkingOrAmortizing: false,
    hasWarrantsAttached: false,
    convertible: false,
    perpetual: false,
    partlyPaid: false,
    privatePlacement: true,
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
    priceQuoteConvention: "DECIMAL",
    priceQuoteRoundingMethod: "Round to 4 decimals",
    dayCount: "Actual/360",
    recordDateCalendarAdjustment: "Nth Business Day(s) Prior to Payment Date",
    recordDateCalendarAdjustmentValue: 1,
    nextResetDate: "2020-08-24",
    ratings: {
      snpLongTerm: { effectiveDate: "2017-03-17", rating: "A-", rank: 13 }
    },
    seniority: "Senior Unsecured",
    parValue: 1000
  },
  analytics: {
    date: "2020-06-17",
    source: "DataScope Fixed Income",
    _yield: 2.7955491838446265,
    yearsToMaturity: 2.927778,
    duration: 0.5238029541552218,
    convexity: 0.5903589020639598,
    yieldToMaturity: 1.423627,
    yieldToWorst: 1.355783,
    currentYield: 1.571956
  },
  scores: {
    timestamp: "2020-02-17T22:58:52.536802Z",
    attractiveness: 1.7476923736287,
    credit: 3,
    liquidity: 1,
    risk: 1.5995659339293686
  },
  allocation: {
    country: { us: 100 },
    currency: { usd: 100 },
    maturity: { oneToThreeYears: 100 },
    rating: { a: 100 },
    region: { unitedStates: 100 },
    sector: { financials: 100 }
  }
};
