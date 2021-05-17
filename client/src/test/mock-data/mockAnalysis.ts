import { Analysis2 } from "providers/graphql/hooks";

export const MOCK_ANALYSIS: Analysis2 = {
  allocations: {
    country: {
      us: 60.20194075112825,
      no: 0.0044643070768179945,
      de: 0.0413342314053619,
      pt: 0.017226973190544732,
      ch: 0.0064732452613860915,
      jp: 0.1168598028931769,
      za: 0.6440965881735906,
      lu: 2.840341594711292,
      bm: 0.43929857685458495,
      it: 0.07530235613397411,
      mx: 2.5282601096528676,
      ua: 0.11883120842582881,
      fr: 0.3332166262776572,
      es: 0.2446113739906814,
      ky: 2.971749208303857,
      ar: 1.5270299180103921,
      pe: 0.5595504239504305,
      sn: 0.6686218934940111,
      gb: 3.3490199315492895,
      ie: 0.9723597908423389,
      ca: 1.4270768384846195,
      tr: 2.904367314663479,
      nl: 3.6176830012197208,
      hk: 0.8850018471446344,
      br: 0.4730678301173371,
      id: 0.2967687014856195,
      il: 0.22017162979045204,
      ae: 0.5282081321201181,
      in: 1.0001072275754397,
      kr: 0.09406815651452688,
      cl: 0.30069445124777405,
      cn: 1.7959555972970997,
      co: 0.4624892830483253,
      at: 0.13464422657526895,
      vn: 0.029308269216695534,
      ng: 0.10419719025199425,
      pl: 0.03527181274851804,
      ru: 0,
      fi: 0,
      sa: 0,
      qa: 0,
      se: 0,
      eg: 0,
      is: 0,
      kw: 0,
      au: 0.007790079281828605,
      pk: 0,
      other: 8.0225394998902
    },
    currency: {
      cad: 0.5007529787524699,
      usd: 105.50002637484448,
      aud: -0.014454278413387655,
      mxn: 0,
      jpy: 0.0014968559022272099,
      eur: 0.8165874159246702,
      gbp: 0.8679589131802992,
      nzd: 0.00001313031493181763,
      try: 0,
      zar: 0.0001838244090454468,
      brl: 0.005921772034249751,
      chf: 0,
      idr: 0,
      nok: 0,
      inr: 0,
      egp: 0,
      other: -7.678486986949011
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
        {
          name: "Unknown",
          percentOfNetAssetValue: 1,
          __typename: "Bucket"
        }
      ],
      __typename: "Allocation4"
    },
    debtType: {
      buckets: [
        {
          name: "mortgageBackedSecurities",
          percentOfNetAssetValue: 29.880732088600496,
          __typename: "Bucket"
        },
        {
          name: "municipalBonds",
          percentOfNetAssetValue: 4.09539763398629,
          __typename: "Bucket"
        },
        {
          name: "other",
          percentOfNetAssetValue: 31.54977610267607,
          __typename: "Bucket"
        },
        {
          name: "assetBackedSecurities",
          percentOfNetAssetValue: 0.0766611620764521,
          __typename: "Bucket"
        },
        {
          name: "bonds",
          percentOfNetAssetValue: 4.190481126216671,
          __typename: "Bucket"
        },
        {
          name: "notes",
          percentOfNetAssetValue: 37.37639482814139,
          __typename: "Bucket"
        },
        {
          name: "preferredStock",
          percentOfNetAssetValue: 0.0042542220379089115,
          __typename: "Bucket"
        }
      ],
      __typename: "DebtTypeAllocation"
    },
    maturity: {
      fiveToTenYears: 27.24710772527017,
      greaterThanThirtyYears: 3.18392014856195,
      lessThanOneYear: 0.7732591953260313,
      oneToThreeYears: 13.80829524135828,
      other: -3.611066316273522,
      tenToTwentyYears: 17.302249865684388,
      threeToFiveYears: 23.388442577391267,
      twentyToThirtyYears: 17.907791562681435,
      __typename: "Maturity"
    },
    rating: {
      investmentGrade: {
        a: 11.696822260849414,
        aa: 8.629626473910182,
        aaa: 0.9671065951259973,
        bbb: 14.592899697167812,
        total: 35.8864550270534,
        __typename: "InvestmentGradeRatingAllocation"
      },
      nonInvestmentGrade: {
        b: 13.321482095333351,
        bb: 21.52949858975923,
        c: 7.0203682056692625,
        d: 0.7287675793184204,
        nr: 111.69682226084942,
        total: 154.29693873092967,
        __typename: "NonInvestmentGradeRatingAllocation"
      },
      __typename: "RatingAllocation"
    },
    region: {
      africaExNorthAfrica: 1.4505464864001172,
      asiaPacificExJapan: 1.5469726718220185,
      emergingMarketsAsia: 4.73609285580465,
      emergingMarketsEurope: null,
      europeExUnitedKingdom: 8.632282170492525,
      japan: 0.11835665879540411,
      latinAmerica: 6.7427944088258975,
      middleEastNorthAfrica: 1.4300217778645135,
      northAmericaExUnitedStates: 6.217841564462225,
      other: 3.1596873875051728,
      unitedKingdom: 3.3597211382187204,
      unitedStates: 62.605682879808754,
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
  createdAt: "2021-01-04T18:21:05.205003Z",
  currentCoupon: 0,
  duration: 0,
  estimatedPerformance: {
    averageMaximumDrawdown: {
      averageValue: -0.07879363109507971,
      rankedMaximumDrawdowns: [
        {
          endDate: "2020-03-23",
          rank: 0,
          startDate: "2020-02-21",
          value: -0.19712088423137242,
          __typename: "RankedMaximumDrawdown"
        },
        {
          endDate: "2016-12-01",
          rank: 1,
          startDate: "2016-10-25",
          value: -0.022100418139852307,
          __typename: "RankedMaximumDrawdown"
        },
        {
          endDate: "2020-04-02",
          rank: 2,
          startDate: "2020-03-31",
          value: -0.017159590914014422,
          __typename: "RankedMaximumDrawdown"
        }
      ],
      __typename: "AverageMaximumDrawdown2"
    },
    endDate: "2021-01-04",
    estimatedMaximumDrawdown: {
      endDate: "2020-03-23",
      startDate: "2020-02-21",
      value: -0.19712088423137242,
      __typename: "EstimatedMaximumDrawdown"
    },
    startDate: "2016-01-06",
    timeSeries: [
      {
        cumulativeReturn: 0.0009973550118711483,
        endDate: "2016-01-06",
        periodReturn: 0.0009973550118710568,
        startDate: "2016-01-05",
        __typename: "SinglePeriodPerformance"
      },
      {
        cumulativeReturn: -0.0001844740381543586,
        endDate: "2016-01-07",
        periodReturn: -0.0011806515213133798,
        startDate: "2016-01-06",
        __typename: "SinglePeriodPerformance"
      },
      {
        cumulativeReturn: 0.00012328228391300655,
        endDate: "2016-01-08",
        periodReturn: 0.000307813105594131,
        startDate: "2016-01-07",
        __typename: "SinglePeriodPerformance"
      },
      {
        cumulativeReturn: -0.0011950561235972712,
        endDate: "2016-01-11",
        periodReturn: -0.0013181758997748386,
        startDate: "2016-01-08",
        __typename: "SinglePeriodPerformance"
      },
      {
        cumulativeReturn: -0.0025666281583163197,
        endDate: "2016-01-12",
        periodReturn: -0.0013732131014449072,
        startDate: "2016-01-11",
        __typename: "SinglePeriodPerformance"
      },
      {
        cumulativeReturn: -0.0038501435470189582,
        endDate: "2016-01-13",
        periodReturn: -0.0012868181724587189,
        startDate: "2016-01-12",
        __typename: "SinglePeriodPerformance"
      },
      {
        cumulativeReturn: -0.005978441197084794,
        endDate: "2016-01-14",
        periodReturn: -0.0021365235725116214,
        startDate: "2016-01-13",
        __typename: "SinglePeriodPerformance"
      },
      {
        cumulativeReturn: -0.00777946512276495,
        endDate: "2016-01-15",
        periodReturn: -0.0018118560002351846,
        startDate: "2016-01-14",
        __typename: "SinglePeriodPerformance"
      },
      {
        cumulativeReturn: -0.00777946512276495,
        endDate: "2016-01-18",
        periodReturn: 0,
        startDate: "2016-01-15",
        __typename: "SinglePeriodPerformance"
      },
      {
        cumulativeReturn: -0.007621160894279111,
        endDate: "2016-01-19",
        periodReturn: 0.0001595454064105745,
        startDate: "2016-01-18",
        __typename: "SinglePeriodPerformance"
      },
      {
        cumulativeReturn: -0.01054111953168091,
        endDate: "2016-01-20",
        periodReturn: -0.0029423830117468503,
        startDate: "2016-01-19",
        __typename: "SinglePeriodPerformance"
      },
      {
        cumulativeReturn: -0.010735187011704839,
        endDate: "2016-01-21",
        periodReturn: -0.00019613496210377085,
        startDate: "2016-01-20",
        __typename: "SinglePeriodPerformance"
      },
      {
        cumulativeReturn: -0.009009773011267264,
        endDate: "2016-01-22",
        periodReturn: 0.0017441376442224898,
        startDate: "2016-01-21",
        __typename: "SinglePeriodPerformance"
      },
      {
        cumulativeReturn: -0.009148126479532115,
        endDate: "2016-01-25",
        periodReturn: -0.0001396113347003123,
        startDate: "2016-01-22",
        __typename: "SinglePeriodPerformance"
      },
      {
        cumulativeReturn: -0.009123134388152376,
        endDate: "2016-01-26",
        periodReturn: 0.000025222833046620092,
        startDate: "2016-01-25",
        __typename: "SinglePeriodPerformance"
      },
      {
        cumulativeReturn: -0.008602250729954686,
        endDate: "2016-01-27",
        periodReturn: 0.0005256795029483131,
        startDate: "2016-01-26",
        __typename: "SinglePeriodPerformance"
      },
      {
        cumulativeReturn: -0.007087385102213739,
        endDate: "2016-01-28",
        periodReturn: 0.0015280099524699023,
        startDate: "2016-01-27",
        __typename: "SinglePeriodPerformance"
      },
      {
        cumulativeReturn: -0.0050282945666202394,
        endDate: "2016-01-29",
        periodReturn: 0.002073788271695436,
        startDate: "2016-01-28",
        __typename: "SinglePeriodPerformance"
      },
      {
        cumulativeReturn: -0.005533817369955951,
        endDate: "2016-02-01",
        periodReturn: -0.0005080775670053251,
        startDate: "2016-01-29",
        __typename: "SinglePeriodPerformance"
      },
      {
        cumulativeReturn: -0.006340904794579938,
        endDate: "2016-02-02",
        periodReturn: -0.0008115785521128221,
        startDate: "2016-02-01",
        __typename: "SinglePeriodPerformance"
      },
      {
        cumulativeReturn: -0.006259265910211309,
        endDate: "2016-02-03",
        periodReturn: 0.00008215985216911012,
        startDate: "2016-02-02",
        __typename: "SinglePeriodPerformance"
      },
      {
        cumulativeReturn: -0.005138826734226942,
        endDate: "2016-02-04",
        periodReturn: 0.001127496476242064,
        startDate: "2016-02-03",
        __typename: "SinglePeriodPerformance"
      },
      {
        cumulativeReturn: -0.004476008784396024,
        endDate: "2016-02-05",
        periodReturn: 0.0006662416502344539,
        startDate: "2016-02-04",
        __typename: "SinglePeriodPerformance"
      },
      {
        cumulativeReturn: -0.0054014466421986596,
        endDate: "2016-02-08",
        periodReturn: -0.0009295987499734337,
        startDate: "2016-02-05",
        __typename: "SinglePeriodPerformance"
      },
      {
        cumulativeReturn: -0.007077937395611689,
        endDate: "2016-02-09",
        periodReturn: -0.0016855954070645952,
        startDate: "2016-02-08",
        __typename: "SinglePeriodPerformance"
      },
      {
        cumulativeReturn: -0.007440120687893681,
        endDate: "2016-02-10",
        periodReturn: -0.00036476507665869065,
        startDate: "2016-02-09",
        __typename: "SinglePeriodPerformance"
      },
      {
        cumulativeReturn: -0.010097088161791556,
        endDate: "2016-02-11",
        periodReturn: -0.0026768838125306527,
        startDate: "2016-02-10",
        __typename: "SinglePeriodPerformance"
      },
      {
        cumulativeReturn: -0.01075516793944975,
        endDate: "2016-02-12",
        periodReturn: -0.0006647922435506146,
        startDate: "2016-02-11",
        __typename: "SinglePeriodPerformance"
      },
      {
        cumulativeReturn: -0.01075516793944975,
        endDate: "2016-02-15",
        periodReturn: 0,
        startDate: "2016-02-12",
        __typename: "SinglePeriodPerformance"
      },
      {
        cumulativeReturn: -0.010469849577862456,
        endDate: "2016-02-16",
        periodReturn: 0.000288420371115807,
        startDate: "2016-02-15",
        __typename: "SinglePeriodPerformance"
      },
      {
        cumulativeReturn: -0.00902412836734312,
        endDate: "2016-02-17",
        periodReturn: 0.0014610178476144645,
        startDate: "2016-02-16",
        __typename: "SinglePeriodPerformance"
      },
      {
        cumulativeReturn: -0.008257957431276108,
        endDate: "2016-02-18",
        periodReturn: 0.0007731479221635367,
        startDate: "2016-02-17",
        __typename: "SinglePeriodPerformance"
      },
      {
        cumulativeReturn: -0.008037958849239302,
        endDate: "2016-02-19",
        periodReturn: 0.00022183044843701358,
        startDate: "2016-02-18",
        __typename: "SinglePeriodPerformance"
      },
      {
        cumulativeReturn: -0.006575304769594115,
        endDate: "2016-02-22",
        periodReturn: 0.0014745060989918154,
        startDate: "2016-02-19",
        __typename: "SinglePeriodPerformance"
      },
      {
        cumulativeReturn: -0.006872386612088666,
        endDate: "2016-02-23",
        periodReturn: -0.00029904817538850125,
        startDate: "2016-02-22",
        __typename: "SinglePeriodPerformance"
      },
      {
        cumulativeReturn: -0.0076023261628013206,
        endDate: "2016-02-24",
        periodReturn: -0.0007349906908967419,
        startDate: "2016-02-23",
        __typename: "SinglePeriodPerformance"
      },
      {
        cumulativeReturn: -0.006785596767439062,
        endDate: "2016-02-25",
        periodReturn: 0.0008229860033874181,
        startDate: "2016-02-24",
        __typename: "SinglePeriodPerformance"
      },
      {
        cumulativeReturn: -0.00567662784615286,
        endDate: "2016-02-26",
        periodReturn: 0.0011165453477888798,
        startDate: "2016-02-25",
        __typename: "SinglePeriodPerformance"
      },
      {
        cumulativeReturn: -0.004681299488898172,
        endDate: "2016-02-29",
        periodReturn: 0.0010010107225968264,
        startDate: "2016-02-26",
        __typename: "SinglePeriodPerformance"
      },
      {
        cumulativeReturn: -0.003234756219718582,
        endDate: "2016-03-01",
        periodReturn: 0.0014533468209094573,
        startDate: "2016-02-29",
        __typename: "SinglePeriodPerformance"
      },
      {
        cumulativeReturn: -0.0005584558422401242,
        endDate: "2016-03-02",
        periodReturn: 0.002684985651514427,
        startDate: "2016-03-01",
        __typename: "SinglePeriodPerformance"
      },
      {
        cumulativeReturn: 0.0008602928125285292,
        endDate: "2016-03-03",
        periodReturn: 0.001419541405960042,
        startDate: "2016-03-02",
        __typename: "SinglePeriodPerformance"
      },
      {
        cumulativeReturn: 0.0027156737445299672,
        endDate: "2016-03-04",
        periodReturn: 0.0018537861331151403,
        startDate: "2016-03-03",
        __typename: "SinglePeriodPerformance"
      },
      {
        cumulativeReturn: 0.003456919008284265,
        endDate: "2016-03-07",
        periodReturn: 0.0007392377352457687,
        startDate: "2016-03-04",
        __typename: "SinglePeriodPerformance"
      },
      {
        cumulativeReturn: 0.00399102824816322,
        endDate: "2016-03-08",
        periodReturn: 0.0005322692282663035,
        startDate: "2016-03-07",
        __typename: "SinglePeriodPerformance"
      },
      {
        cumulativeReturn: 0.004400594957525872,
        endDate: "2016-03-09",
        periodReturn: 0.00040793861482742145,
        startDate: "2016-03-08",
        __typename: "SinglePeriodPerformance"
      },
      {
        cumulativeReturn: 0.005538422355746864,
        endDate: "2016-03-10",
        periodReturn: 0.0011328422184665983,
        startDate: "2016-03-09",
        __typename: "SinglePeriodPerformance"
      },
      {
        cumulativeReturn: 0.007503775010322178,
        endDate: "2016-03-11",
        periodReturn: 0.001954527654916383,
        startDate: "2016-03-10",
        __typename: "SinglePeriodPerformance"
      },
      {
        cumulativeReturn: 0.008433360990010241,
        endDate: "2016-03-14",
        periodReturn: 0.0009226625276698458,
        startDate: "2016-03-11",
        __typename: "SinglePeriodPerformance"
      },
      {
        cumulativeReturn: 0.007682928584789472,
        endDate: "2016-03-15",
        periodReturn: -0.0007441566634447318,
        startDate: "2016-03-14",
        __typename: "SinglePeriodPerformance"
      },
      {
        cumulativeReturn: 0.008353361824386507,
        endDate: "2016-03-16",
        periodReturn: 0.0006653216210962339,
        startDate: "2016-03-15",
        __typename: "SinglePeriodPerformance"
      },
      {
        cumulativeReturn: 0.011404458630563497,
        endDate: "2016-03-17",
        periodReturn: 0.0030258210283116596,
        startDate: "2016-03-16",
        __typename: "SinglePeriodPerformance"
      },
      {
        cumulativeReturn: 0.013515722200465374,
        endDate: "2016-03-18",
        periodReturn: 0.0020874572500507393,
        startDate: "2016-03-17",
        __typename: "SinglePeriodPerformance"
      },
      {
        cumulativeReturn: 0.01376582481809896,
        endDate: "2016-03-21",
        periodReturn: 0.00024676737830046214,
        startDate: "2016-03-18",
        __typename: "SinglePeriodPerformance"
      },
      {
        cumulativeReturn: 0.014359465776525138,
        endDate: "2016-03-22",
        periodReturn: 0.0005855799671809682,
        startDate: "2016-03-21",
        __typename: "SinglePeriodPerformance"
      },
      {
        cumulativeReturn: 0.01419470661575395,
        endDate: "2016-03-23",
        periodReturn: -0.00016242679871388704,
        startDate: "2016-03-22",
        __typename: "SinglePeriodPerformance"
      },
      {
        cumulativeReturn: 0.013244782893614415,
        endDate: "2016-03-24",
        periodReturn: -0.000936628554599091,
        startDate: "2016-03-23",
        __typename: "SinglePeriodPerformance"
      },
      {
        cumulativeReturn: 0.013244782893614415,
        endDate: "2016-03-25",
        periodReturn: 0,
        startDate: "2016-03-24",
        __typename: "SinglePeriodPerformance"
      },
      {
        cumulativeReturn: 0.01421812387696808,
        endDate: "2016-03-28",
        periodReturn: 0.000960617809029363,
        startDate: "2016-03-25",
        __typename: "SinglePeriodPerformance"
      },
      {
        cumulativeReturn: 0.014643637729959913,
        endDate: "2016-03-29",
        periodReturn: 0.00041954865819722047,
        startDate: "2016-03-28",
        __typename: "SinglePeriodPerformance"
      },
      {
        cumulativeReturn: 0.01626115467846989,
        endDate: "2016-03-30",
        periodReturn: 0.0015941724644613008,
        startDate: "2016-03-29",
        __typename: "SinglePeriodPerformance"
      },
      {
        cumulativeReturn: 0.018789130211009697,
        endDate: "2016-03-31",
        periodReturn: 0.0024875254956877833,
        startDate: "2016-03-30",
        __typename: "SinglePeriodPerformance"
      },
      {
        cumulativeReturn: 0.01980538802913201,
        endDate: "2016-04-01",
        periodReturn: 0.0009975153719120069,
        startDate: "2016-03-31",
        __typename: "SinglePeriodPerformance"
      },
      {
        cumulativeReturn: 0.02073540024922149,
        endDate: "2016-04-04",
        periodReturn: 0.0009119506829502211,
        startDate: "2016-04-01",
        __typename: "SinglePeriodPerformance"
      },
      {
        cumulativeReturn: 0.020758113068257478,
        endDate: "2016-04-05",
        periodReturn: 0.000022251426795288632,
        startDate: "2016-04-04",
        __typename: "SinglePeriodPerformance"
      },
      {
        cumulativeReturn: 0.021796089366313165,
        endDate: "2016-04-06",
        periodReturn: 0.001016868036380877,
        startDate: "2016-04-05",
        __typename: "SinglePeriodPerformance"
      },
      {
        cumulativeReturn: 0.02273522946854789,
        endDate: "2016-04-07",
        periodReturn: 0.0009191071604288687,
        startDate: "2016-04-06",
        __typename: "SinglePeriodPerformance"
      },
      {
        cumulativeReturn: 0.023574725517863326,
        endDate: "2016-04-08",
        periodReturn: 0.0008208341955243797,
        startDate: "2016-04-07",
        __typename: "SinglePeriodPerformance"
      },
      {
        cumulativeReturn: 0.024561468134941533,
        endDate: "2016-04-11",
        periodReturn: 0.0009640161997736088,
        startDate: "2016-04-08",
        __typename: "SinglePeriodPerformance"
      },
      {
        cumulativeReturn: 0.0251077381577558,
        endDate: "2016-04-12",
        periodReturn: 0.000533174474937644,
        startDate: "2016-04-11",
        __typename: "SinglePeriodPerformance"
      },
      {
        cumulativeReturn: 0.027614897468435817,
        endDate: "2016-04-13",
        periodReturn: 0.002445752009623593,
        startDate: "2016-04-12",
        __typename: "SinglePeriodPerformance"
      },
      {
        cumulativeReturn: 0.029513914161113153,
        endDate: "2016-04-14",
        periodReturn: 0.0018479847823884394,
        startDate: "2016-04-13",
        __typename: "SinglePeriodPerformance"
      },
      {
        cumulativeReturn: 0.02992236917022839,
        endDate: "2016-04-15",
        periodReturn: 0.0003967454965852893,
        startDate: "2016-04-14",
        __typename: "SinglePeriodPerformance"
      },
      {
        cumulativeReturn: 0.029888124383753212,
        endDate: "2016-04-18",
        periodReturn: -0.000033249871543928545,
        startDate: "2016-04-15",
        __typename: "SinglePeriodPerformance"
      },
      {
        cumulativeReturn: 0.03301579384925102,
        endDate: "2016-04-19",
        periodReturn: 0.003036902156114478,
        startDate: "2016-04-18",
        __typename: "SinglePeriodPerformance"
      },
      {
        cumulativeReturn: 0.03373428722361749,
        endDate: "2016-04-20",
        periodReturn: 0.0006955299024897151,
        startDate: "2016-04-19",
        __typename: "SinglePeriodPerformance"
      },
      {
        cumulativeReturn: 0.034521345148537996,
        endDate: "2016-04-21",
        periodReturn: 0.0007613735315236649,
        startDate: "2016-04-20",
        __typename: "SinglePeriodPerformance"
      },
      {
        cumulativeReturn: 0.03455831224390393,
        endDate: "2016-04-22",
        periodReturn: 0.00003573352598222043,
        startDate: "2016-04-21",
        __typename: "SinglePeriodPerformance"
      },
      {
        cumulativeReturn: 0.034479518386334895,
        endDate: "2016-04-25",
        periodReturn: -0.00007616183315761132,
        startDate: "2016-04-22",
        __typename: "SinglePeriodPerformance"
      },
      {
        cumulativeReturn: 0.03417916736546833,
        endDate: "2016-04-26",
        periodReturn: -0.0002903402295823776,
        startDate: "2016-04-25",
        __typename: "SinglePeriodPerformance"
      },
      {
        cumulativeReturn: 0.035697321836309914,
        endDate: "2016-04-27",
        periodReturn: 0.0014679801322135717,
        startDate: "2016-04-26",
        __typename: "SinglePeriodPerformance"
      },
      {
        cumulativeReturn: 0.037789613800947475,
        endDate: "2016-04-28",
        periodReturn: 0.0020201770541685487,
        startDate: "2016-04-27",
        __typename: "SinglePeriodPerformance"
      },
      {
        cumulativeReturn: 0.038516386762087684,
        endDate: "2016-04-29",
        periodReturn: 0.00070030857071161,
        startDate: "2016-04-28",
        __typename: "SinglePeriodPerformance"
      },
      {
        cumulativeReturn: 0.03865929769789811,
        endDate: "2016-05-02",
        periodReturn: 0.00013761067002122582,
        startDate: "2016-04-29",
        __typename: "SinglePeriodPerformance"
      },
      {
        cumulativeReturn: 0.03814108714674158,
        endDate: "2016-05-03",
        periodReturn: -0.0004989225555531299,
        startDate: "2016-05-02",
        __typename: "SinglePeriodPerformance"
      },
      {
        cumulativeReturn: 0.03757855312388614,
        endDate: "2016-05-04",
        periodReturn: -0.0005418666401129372,
        startDate: "2016-05-03",
        __typename: "SinglePeriodPerformance"
      },
      {
        cumulativeReturn: 0.03778936813783229,
        endDate: "2016-05-05",
        periodReturn: 0.00020317981063838774,
        startDate: "2016-05-04",
        __typename: "SinglePeriodPerformance"
      },
      {
        cumulativeReturn: 0.03770050708887407,
        endDate: "2016-05-06",
        periodReturn: -0.00008562532213793672,
        startDate: "2016-05-05",
        __typename: "SinglePeriodPerformance"
      },
      {
        cumulativeReturn: 0.03814419195054897,
        endDate: "2016-05-09",
        periodReturn: 0.000427565428217518,
        startDate: "2016-05-06",
        __typename: "SinglePeriodPerformance"
      },
      {
        cumulativeReturn: 0.038773841189954306,
        endDate: "2016-05-10",
        periodReturn: 0.0006065142436740811,
        startDate: "2016-05-09",
        __typename: "SinglePeriodPerformance"
      },
      {
        cumulativeReturn: 0.040030812078673206,
        endDate: "2016-05-11",
        periodReturn: 0.0012100525050562762,
        startDate: "2016-05-10",
        __typename: "SinglePeriodPerformance"
      },
      {
        cumulativeReturn: 0.04131892039427387,
        endDate: "2016-05-12",
        periodReturn: 0.0012385289941804411,
        startDate: "2016-05-11",
        __typename: "SinglePeriodPerformance"
      },
      {
        cumulativeReturn: 0.042339079798497714,
        endDate: "2016-05-13",
        periodReturn: 0.0009796800809474646,
        startDate: "2016-05-12",
        __typename: "SinglePeriodPerformance"
      },
      {
        cumulativeReturn: 0.04281930206002049,
        endDate: "2016-05-16",
        periodReturn: 0.00046071597125141864,
        startDate: "2016-05-13",
        __typename: "SinglePeriodPerformance"
      },
      {
        cumulativeReturn: 0.04345282082326851,
        endDate: "2016-05-17",
        periodReturn: 0.0006075057893506381,
        startDate: "2016-05-16",
        __typename: "SinglePeriodPerformance"
      },
      {
        cumulativeReturn: 0.04257632385825194,
        endDate: "2016-05-18",
        periodReturn: -0.000839996737298569,
        startDate: "2016-05-17",
        __typename: "SinglePeriodPerformance"
      },
      {
        cumulativeReturn: 0.04093906451412277,
        endDate: "2016-05-19",
        periodReturn: -0.0015703975878430404,
        startDate: "2016-05-18",
        __typename: "SinglePeriodPerformance"
      },
      {
        cumulativeReturn: 0.04186719302704289,
        endDate: "2016-05-20",
        periodReturn: 0.0008916261715600554,
        startDate: "2016-05-19",
        __typename: "SinglePeriodPerformance"
      },
      {
        cumulativeReturn: 0.04224088044515395,
        endDate: "2016-05-23",
        periodReturn: 0.0003586708753399194,
        startDate: "2016-05-20",
        __typename: "SinglePeriodPerformance"
      },
      {
        cumulativeReturn: 0.0429896122178528,
        endDate: "2016-05-24",
        periodReturn: 0.0007183864946642161,
        startDate: "2016-05-23",
        __typename: "SinglePeriodPerformance"
      },
      {
        cumulativeReturn: 0.043142638673550504,
        endDate: "2016-05-25",
        periodReturn: 0.00014671906019491423,
        startDate: "2016-05-24",
        __typename: "SinglePeriodPerformance"
      },
      {
        cumulativeReturn: 0.043929390894313025,
        endDate: "2016-05-26",
        periodReturn: 0.0007542134618934836,
        startDate: "2016-05-25",
        __typename: "SinglePeriodPerformance"
      },
      {
        cumulativeReturn: 0.04393627146766588,
        endDate: "2016-05-27",
        periodReturn: 0.000006591033275663814,
        startDate: "2016-05-26",
        __typename: "SinglePeriodPerformance"
      },
      {
        cumulativeReturn: 0.04393627146766588,
        endDate: "2016-05-30",
        periodReturn: 0,
        startDate: "2016-05-27",
        __typename: "SinglePeriodPerformance"
      },
      {
        cumulativeReturn: 0.044736298945697195,
        endDate: "2016-05-31",
        periodReturn: 0.000766356625301147,
        startDate: "2016-05-30",
        __typename: "SinglePeriodPerformance"
      },
      {
        cumulativeReturn: 0.04444914377178666,
        endDate: "2016-06-01",
        periodReturn: -0.0002748589995391586,
        startDate: "2016-05-31",
        __typename: "SinglePeriodPerformance"
      },
      {
        cumulativeReturn: 0.04574628142639492,
        endDate: "2016-06-02",
        periodReturn: 0.0012419347196972563,
        startDate: "2016-06-01",
        __typename: "SinglePeriodPerformance"
      },
      {
        cumulativeReturn: 0.04839714586438193,
        endDate: "2016-06-03",
        periodReturn: 0.0025349020934325264,
        startDate: "2016-06-02",
        __typename: "SinglePeriodPerformance"
      },
      {
        cumulativeReturn: 0.04956764527060109,
        endDate: "2016-06-06",
        periodReturn: 0.0011164656550586823,
        startDate: "2016-06-03",
        __typename: "SinglePeriodPerformance"
      },
      {
        cumulativeReturn: 0.05129722235949408,
        endDate: "2016-06-07",
        periodReturn: 0.0016478948228697433,
        startDate: "2016-06-06",
        __typename: "SinglePeriodPerformance"
      },
      {
        cumulativeReturn: 0.052657954614485414,
        endDate: "2016-06-08",
        periodReturn: 0.0012943363932203162,
        startDate: "2016-06-07",
        __typename: "SinglePeriodPerformance"
      },
      {
        cumulativeReturn: 0.05330282138159159,
        endDate: "2016-06-09",
        periodReturn: 0.0006126080787014984,
        startDate: "2016-06-08",
        __typename: "SinglePeriodPerformance"
      },
      {
        cumulativeReturn: 0.053512970230999546,
        endDate: "2016-06-10",
        periodReturn: 0.00019951418067257518,
        startDate: "2016-06-09",
        __typename: "SinglePeriodPerformance"
      },
      {
        cumulativeReturn: 0.05283750896257877,
        endDate: "2016-06-13",
        periodReturn: -0.0006411513550447342,
        startDate: "2016-06-10",
        __typename: "SinglePeriodPerformance"
      },
      {
        cumulativeReturn: 0.05154917988881924,
        endDate: "2016-06-14",
        periodReturn: -0.0012236732285773046,
        startDate: "2016-06-13",
        __typename: "SinglePeriodPerformance"
      },
      {
        cumulativeReturn: 0.05168040841763455,
        endDate: "2016-06-15",
        periodReturn: 0.00012479542690458202,
        startDate: "2016-06-14",
        __typename: "SinglePeriodPerformance"
      },
      {
        cumulativeReturn: 0.052065559309025566,
        endDate: "2016-06-16",
        periodReturn: 0.00036622427146898895,
        startDate: "2016-06-15",
        __typename: "SinglePeriodPerformance"
      },
      {
        cumulativeReturn: 0.05291932985721526,
        endDate: "2016-06-17",
        periodReturn: 0.0008115183893581876,
        startDate: "2016-06-16",
        __typename: "SinglePeriodPerformance"
      },
      {
        cumulativeReturn: 0.05502242263900681,
        endDate: "2016-06-20",
        periodReturn: 0.0019973921288695606,
        startDate: "2016-06-17",
        __typename: "SinglePeriodPerformance"
      },
      {
        cumulativeReturn: 0.05503690882506729,
        endDate: "2016-06-21",
        periodReturn: 0.000013730690220241666,
        startDate: "2016-06-20",
        __typename: "SinglePeriodPerformance"
      },
      {
        cumulativeReturn: 0.05598795177563565,
        endDate: "2016-06-22",
        periodReturn: 0.0009014309761232242,
        startDate: "2016-06-21",
        __typename: "SinglePeriodPerformance"
      },
      {
        cumulativeReturn: 0.05764403924329553,
        endDate: "2016-06-23",
        periodReturn: 0.0015682825404164241,
        startDate: "2016-06-22",
        __typename: "SinglePeriodPerformance"
      },
      {
        cumulativeReturn: 0.05646581709241261,
        endDate: "2016-06-24",
        periodReturn: -0.0011140063264818512,
        startDate: "2016-06-23",
        __typename: "SinglePeriodPerformance"
      },
      {
        cumulativeReturn: 0.05544363869727875,
        endDate: "2016-06-27",
        periodReturn: -0.0009675451667211787,
        startDate: "2016-06-24",
        __typename: "SinglePeriodPerformance"
      },
      {
        cumulativeReturn: 0.05658046834516117,
        endDate: "2016-06-28",
        periodReturn: 0.0010771107107959942,
        startDate: "2016-06-27",
        __typename: "SinglePeriodPerformance"
      },
      {
        cumulativeReturn: 0.05961285343205702,
        endDate: "2016-06-29",
        periodReturn: 0.002869999188651683,
        startDate: "2016-06-28",
        __typename: "SinglePeriodPerformance"
      },
      {
        cumulativeReturn: 0.06091235445727894,
        endDate: "2016-06-30",
        periodReturn: 0.0012263922818724867,
        startDate: "2016-06-29",
        __typename: "SinglePeriodPerformance"
      },
      {
        cumulativeReturn: 0.06344631043782134,
        endDate: "2016-07-01",
        periodReturn: 0.0023884687268426416,
        startDate: "2016-06-30",
        __typename: "SinglePeriodPerformance"
      },
      {
        cumulativeReturn: 0.06344631043782134,
        endDate: "2016-07-04",
        periodReturn: 0,
        startDate: "2016-07-01",
        __typename: "SinglePeriodPerformance"
      },
      {
        cumulativeReturn: 0.0651568933259048,
        endDate: "2016-07-05",
        periodReturn: 0.001608527737878209,
        startDate: "2016-07-04",
        __typename: "SinglePeriodPerformance"
      },
      {
        cumulativeReturn: 0.06522412297009517,
        endDate: "2016-07-06",
        periodReturn: 0.00006311712820116148,
        startDate: "2016-07-05",
        __typename: "SinglePeriodPerformance"
      },
      {
        cumulativeReturn: 0.06626864952333356,
        endDate: "2016-07-07",
        periodReturn: 0.0009805697512050575,
        startDate: "2016-07-06",
        __typename: "SinglePeriodPerformance"
      },
      {
        cumulativeReturn: 0.06802750550913572,
        endDate: "2016-07-08",
        periodReturn: 0.0016495429989322637,
        startDate: "2016-07-07",
        __typename: "SinglePeriodPerformance"
      },
      {
        cumulativeReturn: 0.07017062196082313,
        endDate: "2016-07-11",
        periodReturn: 0.002006611665554121,
        startDate: "2016-07-08",
        __typename: "SinglePeriodPerformance"
      },
      {
        cumulativeReturn: 0.07099082948698432,
        endDate: "2016-07-12",
        periodReturn: 0.0007664268756119752,
        startDate: "2016-07-11",
        __typename: "SinglePeriodPerformance"
      },
      {
        cumulativeReturn: 0.07298354943251839,
        endDate: "2016-07-13",
        periodReturn: 0.0018606321274373511,
        startDate: "2016-07-12",
        __typename: "SinglePeriodPerformance"
      },
      {
        cumulativeReturn: 0.07346357084032351,
        endDate: "2016-07-14",
        periodReturn: 0.00044737070578490263,
        startDate: "2016-07-13",
        __typename: "SinglePeriodPerformance"
      },
      {
        cumulativeReturn: 0.07347259779466286,
        endDate: "2016-07-15",
        periodReturn: 0.000008409185541694529,
        startDate: "2016-07-14",
        __typename: "SinglePeriodPerformance"
      },
      {
        cumulativeReturn: 0.07349778604998392,
        endDate: "2016-07-18",
        periodReturn: 0.000023464274144352518,
        startDate: "2016-07-15",
        __typename: "SinglePeriodPerformance"
      },
      {
        cumulativeReturn: 0.07411145774043071,
        endDate: "2016-07-19",
        periodReturn: 0.0005716562236284301,
        startDate: "2016-07-18",
        __typename: "SinglePeriodPerformance"
      },
      {
        cumulativeReturn: 0.07454800809377682,
        endDate: "2016-07-20",
        periodReturn: 0.00040642928645819336,
        startDate: "2016-07-19",
        __typename: "SinglePeriodPerformance"
      },
      {
        cumulativeReturn: 0.07469336424171447,
        endDate: "2016-07-21",
        periodReturn: 0.0001352718974329966,
        startDate: "2016-07-20",
        __typename: "SinglePeriodPerformance"
      },
      {
        cumulativeReturn: 0.07565292458425033,
        endDate: "2016-07-22",
        periodReturn: 0.0008928689563586155,
        startDate: "2016-07-21",
        __typename: "SinglePeriodPerformance"
      },
      {
        cumulativeReturn: 0.07626604420053584,
        endDate: "2016-07-25",
        periodReturn: 0.0005699976286705343,
        startDate: "2016-07-22",
        __typename: "SinglePeriodPerformance"
      },
      {
        cumulativeReturn: 0.0757504500292796,
        endDate: "2016-07-26",
        periodReturn: -0.0004790582904984021,
        startDate: "2016-07-25",
        __typename: "SinglePeriodPerformance"
      },
      {
        cumulativeReturn: 0.07610514031345117,
        endDate: "2016-07-27",
        periodReturn: 0.00032971427914521486,
        startDate: "2016-07-26",
        __typename: "SinglePeriodPerformance"
      },
      {
        cumulativeReturn: 0.0765505206517374,
        endDate: "2016-07-28",
        periodReturn: 0.00041388180541213505,
        startDate: "2016-07-27",
        __typename: "SinglePeriodPerformance"
      },
      {
        cumulativeReturn: 0.07709064424181888,
        endDate: "2016-07-29",
        periodReturn: 0.000501716900154885,
        startDate: "2016-07-28",
        __typename: "SinglePeriodPerformance"
      },
      {
        cumulativeReturn: 0.07740427050656207,
        endDate: "2016-08-01",
        periodReturn: 0.0002911790817420114,
        startDate: "2016-07-29",
        __typename: "SinglePeriodPerformance"
      },
      {
        cumulativeReturn: 0.0762835658683001,
        endDate: "2016-08-02",
        periodReturn: -0.0010401895267550315,
        startDate: "2016-08-01",
        __typename: "SinglePeriodPerformance"
      },
      {
        cumulativeReturn: 0.07504737391953964,
        endDate: "2016-08-03",
        periodReturn: -0.0011485745838394088,
        startDate: "2016-08-02",
        __typename: "SinglePeriodPerformance"
      },
      {
        cumulativeReturn: 0.07696351889490005,
        endDate: "2016-08-04",
        periodReturn: 0.0017823818948315903,
        startDate: "2016-08-03",
        __typename: "SinglePeriodPerformance"
      },
      {
        cumulativeReturn: 0.07790494312745433,
        endDate: "2016-08-05",
        periodReturn: 0.000874146817452471,
        startDate: "2016-08-04",
        __typename: "SinglePeriodPerformance"
      },
      {
        cumulativeReturn: 0.07916528251310884,
        endDate: "2016-08-08",
        periodReturn: 0.001169249100943555,
        startDate: "2016-08-05",
        __typename: "SinglePeriodPerformance"
      },
      {
        cumulativeReturn: 0.08036208982318094,
        endDate: "2016-08-09",
        periodReturn: 0.0011090120572494978,
        startDate: "2016-08-08",
        __typename: "SinglePeriodPerformance"
      },
      {
        cumulativeReturn: 0.0811680675549924,
        endDate: "2016-08-10",
        periodReturn: 0.0007460255588414957,
        startDate: "2016-08-09",
        __typename: "SinglePeriodPerformance"
      },
      {
        cumulativeReturn: 0.08115905776380505,
        endDate: "2016-08-11",
        periodReturn: -0.000008333386323289075,
        startDate: "2016-08-10",
        __typename: "SinglePeriodPerformance"
      },
      {
        cumulativeReturn: 0.0823179593632184,
        endDate: "2016-08-12",
        periodReturn: 0.0010719066645107455,
        startDate: "2016-08-11",
        __typename: "SinglePeriodPerformance"
      },
      {
        cumulativeReturn: 0.08315182493578321,
        endDate: "2016-08-15",
        periodReturn: 0.0007704441798744137,
        startDate: "2016-08-12",
        __typename: "SinglePeriodPerformance"
      },
      {
        cumulativeReturn: 0.08371621796329021,
        endDate: "2016-08-16",
        periodReturn: 0.0005210654817854441,
        startDate: "2016-08-15",
        __typename: "SinglePeriodPerformance"
      },
      {
        cumulativeReturn: 0.08399466536274902,
        endDate: "2016-08-17",
        periodReturn: 0.0002569375587846927,
        startDate: "2016-08-16",
        __typename: "SinglePeriodPerformance"
      },
      {
        cumulativeReturn: 0.08465357948223562,
        endDate: "2016-08-18",
        periodReturn: 0.0006078573451891878,
        startDate: "2016-08-17",
        __typename: "SinglePeriodPerformance"
      },
      {
        cumulativeReturn: 0.08478250943306387,
        endDate: "2016-08-19",
        periodReturn: 0.00011886739993975441,
        startDate: "2016-08-18",
        __typename: "SinglePeriodPerformance"
      },
      {
        cumulativeReturn: 0.08554797275212644,
        endDate: "2016-08-22",
        periodReturn: 0.000705637593163737,
        startDate: "2016-08-19",
        __typename: "SinglePeriodPerformance"
      },
      {
        cumulativeReturn: 0.08592419001949336,
        endDate: "2016-08-23",
        periodReturn: 0.0003465689926287297,
        startDate: "2016-08-22",
        __typename: "SinglePeriodPerformance"
      },
      {
        cumulativeReturn: 0.0857062722344415,
        endDate: "2016-08-24",
        periodReturn: -0.00020067495231674182,
        startDate: "2016-08-23",
        __typename: "SinglePeriodPerformance"
      },
      {
        cumulativeReturn: 0.08549764784625191,
        endDate: "2016-08-25",
        periodReturn: -0.00019215546002170373,
        startDate: "2016-08-24",
        __typename: "SinglePeriodPerformance"
      },
      {
        cumulativeReturn: 0.08604103580739553,
        endDate: "2016-08-26",
        periodReturn: 0.00050058879650431,
        startDate: "2016-08-25",
        __typename: "SinglePeriodPerformance"
      },
      {
        cumulativeReturn: 0.08655157141784797,
        endDate: "2016-08-29",
        periodReturn: 0.0004700886924340507,
        startDate: "2016-08-26",
        __typename: "SinglePeriodPerformance"
      },
      {
        cumulativeReturn: 0.08661291103564128,
        endDate: "2016-08-30",
        periodReturn: 0.00005645348035641108,
        startDate: "2016-08-29",
        __typename: "SinglePeriodPerformance"
      },
      {
        cumulativeReturn: 0.08626429784734957,
        endDate: "2016-08-31",
        periodReturn: -0.0003208255531949258,
        startDate: "2016-08-30",
        __typename: "SinglePeriodPerformance"
      },
      {
        cumulativeReturn: 0.08554456260609511,
        endDate: "2016-09-01",
        periodReturn: -0.0006625783823335575,
        startDate: "2016-08-31",
        __typename: "SinglePeriodPerformance"
      },
      {
        cumulativeReturn: 0.0865940346058518,
        endDate: "2016-09-02",
        periodReturn: 0.0009667700764279004,
        startDate: "2016-09-01",
        __typename: "SinglePeriodPerformance"
      },
      {
        cumulativeReturn: 0.0865940346058518,
        endDate: "2016-09-05",
        periodReturn: 0,
        startDate: "2016-09-02",
        __typename: "SinglePeriodPerformance"
      },
      {
        cumulativeReturn: 0.0878336188055997,
        endDate: "2016-09-06",
        periodReturn: 0.0011407979063657538,
        startDate: "2016-09-05",
        __typename: "SinglePeriodPerformance"
      },
      {
        cumulativeReturn: 0.0891425832237851,
        endDate: "2016-09-07",
        periodReturn: 0.0012032763058219683,
        startDate: "2016-09-06",
        __typename: "SinglePeriodPerformance"
      },
      {
        cumulativeReturn: 0.08931015370815798,
        endDate: "2016-09-08",
        periodReturn: 0.0001538554152174956,
        startDate: "2016-09-07",
        __typename: "SinglePeriodPerformance"
      },
      {
        cumulativeReturn: 0.08756935828671786,
        endDate: "2016-09-09",
        periodReturn: -0.0015980714175061717,
        startDate: "2016-09-08",
        __typename: "SinglePeriodPerformance"
      },
      {
        cumulativeReturn: 0.08608969531484312,
        endDate: "2016-09-12",
        periodReturn: -0.0013605228582438337,
        startDate: "2016-09-09",
        __typename: "SinglePeriodPerformance"
      },
      {
        cumulativeReturn: 0.08540407026641139,
        endDate: "2016-09-13",
        periodReturn: -0.0006312784767126262,
        startDate: "2016-09-12",
        __typename: "SinglePeriodPerformance"
      },
      {
        cumulativeReturn: 0.08440574436609483,
        endDate: "2016-09-14",
        periodReturn: -0.0009197734997175363,
        startDate: "2016-09-13",
        __typename: "SinglePeriodPerformance"
      },
      {
        cumulativeReturn: 0.08433349991238859,
        endDate: "2016-09-15",
        periodReturn: -0.00006662123848167183,
        startDate: "2016-09-14",
        __typename: "SinglePeriodPerformance"
      },
      {
        cumulativeReturn: 0.08471055668910243,
        endDate: "2016-09-16",
        periodReturn: 0.00034773137299930825,
        startDate: "2016-09-15",
        __typename: "SinglePeriodPerformance"
      },
      {
        cumulativeReturn: 0.08477867150486107,
        endDate: "2016-09-19",
        periodReturn: 0.00006279538383629426,
        startDate: "2016-09-16",
        __typename: "SinglePeriodPerformance"
      },
      {
        cumulativeReturn: 0.08574888656578783,
        endDate: "2016-09-20",
        periodReturn: 0.0008943898754765814,
        startDate: "2016-09-19",
        __typename: "SinglePeriodPerformance"
      },
      {
        cumulativeReturn: 0.08727197325247649,
        endDate: "2016-09-21",
        periodReturn: 0.001402798294830579,
        startDate: "2016-09-20",
        __typename: "SinglePeriodPerformance"
      },
      {
        cumulativeReturn: 0.0894994280436896,
        endDate: "2016-09-22",
        periodReturn: 0.002048663854131947,
        startDate: "2016-09-21",
        __typename: "SinglePeriodPerformance"
      },
      {
        cumulativeReturn: 0.09036506696634894,
        endDate: "2016-09-23",
        periodReturn: 0.0007945290289996124,
        startDate: "2016-09-22",
        __typename: "SinglePeriodPerformance"
      },
      {
        cumulativeReturn: 0.08981184087700766,
        endDate: "2016-09-26",
        periodReturn: -0.0005073769383316526,
        startDate: "2016-09-23",
        __typename: "SinglePeriodPerformance"
      },
      {
        cumulativeReturn: 0.09016188658266766,
        endDate: "2016-09-27",
        periodReturn: 0.0003211982954582982,
        startDate: "2016-09-26",
        __typename: "SinglePeriodPerformance"
      },
      {
        cumulativeReturn: 0.09042870024606398,
        endDate: "2016-09-28",
        periodReturn: 0.00024474682767788457,
        startDate: "2016-09-27",
        __typename: "SinglePeriodPerformance"
      },
      {
        cumulativeReturn: 0.09082139741329898,
        endDate: "2016-09-29",
        periodReturn: 0.0003601309899000292,
        startDate: "2016-09-28",
        __typename: "SinglePeriodPerformance"
      },
      {
        cumulativeReturn: 0.09164957574098409,
        endDate: "2016-09-30",
        periodReturn: 0.0007592244978406123,
        startDate: "2016-09-29",
        __typename: "SinglePeriodPerformance"
      },
      {
        cumulativeReturn: 0.09213335015964419,
        endDate: "2016-10-03",
        periodReturn: 0.00044315907724488886,
        startDate: "2016-09-30",
        __typename: "SinglePeriodPerformance"
      },
      {
        cumulativeReturn: 0.09211602847199196,
        endDate: "2016-10-04",
        periodReturn: -0.000015860414526925986,
        startDate: "2016-10-03",
        __typename: "SinglePeriodPerformance"
      },
      {
        cumulativeReturn: 0.09144067361289099,
        endDate: "2016-10-05",
        periodReturn: -0.0006183911246554296,
        startDate: "2016-10-04",
        __typename: "SinglePeriodPerformance"
      },
      {
        cumulativeReturn: 0.09100607741167366,
        endDate: "2016-10-06",
        periodReturn: -0.0003981858214782942,
        startDate: "2016-10-05",
        __typename: "SinglePeriodPerformance"
      },
      {
        cumulativeReturn: 0.09124203230262906,
        endDate: "2016-10-07",
        periodReturn: 0.0002162727557990447,
        startDate: "2016-10-06",
        __typename: "SinglePeriodPerformance"
      },
      {
        cumulativeReturn: 0.09139868629427106,
        endDate: "2016-10-10",
        periodReturn: 0.00014355567967942688,
        startDate: "2016-10-07",
        __typename: "SinglePeriodPerformance"
      },
      {
        cumulativeReturn: 0.09061620257658931,
        endDate: "2016-10-11",
        periodReturn: -0.0007169549748483814,
        startDate: "2016-10-10",
        __typename: "SinglePeriodPerformance"
      },
      {
        cumulativeReturn: 0.09013196885303132,
        endDate: "2016-10-12",
        periodReturn: -0.0004440001188446641,
        startDate: "2016-10-11",
        __typename: "SinglePeriodPerformance"
      },
      {
        cumulativeReturn: 0.08987186614860021,
        endDate: "2016-10-13",
        periodReturn: -0.0002385974467887071,
        startDate: "2016-10-12",
        __typename: "SinglePeriodPerformance"
      },
      {
        cumulativeReturn: 0.08989289508610576,
        endDate: "2016-10-14",
        periodReturn: 0.00001929487140538991,
        startDate: "2016-10-13",
        __typename: "SinglePeriodPerformance"
      },
      {
        cumulativeReturn: 0.08934841017731787,
        endDate: "2016-10-17",
        periodReturn: -0.000499576528338481,
        startDate: "2016-10-14",
        __typename: "SinglePeriodPerformance"
      },
      {
        cumulativeReturn: 0.08901581431519956,
        endDate: "2016-10-18",
        periodReturn: -0.0003053163331502642,
        startDate: "2016-10-17",
        __typename: "SinglePeriodPerformance"
      },
      {
        cumulativeReturn: 0.08961913043015723,
        endDate: "2016-10-19",
        periodReturn: 0.0005540012431656588,
        startDate: "2016-10-18",
        __typename: "SinglePeriodPerformance"
      },
      {
        cumulativeReturn: 0.09066805546737577,
        endDate: "2016-10-20",
        periodReturn: 0.000962652919653097,
        startDate: "2016-10-19",
        __typename: "SinglePeriodPerformance"
      },
      {
        cumulativeReturn: 0.09128683171503615,
        endDate: "2016-10-21",
        periodReturn: 0.0005673369129668859,
        startDate: "2016-10-20",
        __typename: "SinglePeriodPerformance"
      },
      {
        cumulativeReturn: 0.09241126088394847,
        endDate: "2016-10-24",
        periodReturn: 0.0010303699597889711,
        startDate: "2016-10-21",
        __typename: "SinglePeriodPerformance"
      },
      {
        cumulativeReturn: 0.09258156062228284,
        endDate: "2016-10-25",
        periodReturn: 0.0001558934299126977,
        startDate: "2016-10-24",
        __typename: "SinglePeriodPerformance"
      },
      {
        cumulativeReturn: 0.09128156313440661,
        endDate: "2016-10-26",
        periodReturn: -0.0011898402231278486,
        startDate: "2016-10-25",
        __typename: "SinglePeriodPerformance"
      },
      {
        cumulativeReturn: 0.08993675083970798,
        endDate: "2016-10-27",
        periodReturn: -0.0012323238476017588,
        startDate: "2016-10-26",
        __typename: "SinglePeriodPerformance"
      },
      {
        cumulativeReturn: 0.08990625002723895,
        endDate: "2016-10-28",
        periodReturn: -0.00002798402058234319,
        startDate: "2016-10-27",
        __typename: "SinglePeriodPerformance"
      },
      {
        cumulativeReturn: 0.09004705336980412,
        endDate: "2016-10-31",
        periodReturn: 0.00012918848989218395,
        startDate: "2016-10-28",
        __typename: "SinglePeriodPerformance"
      },
      {
        cumulativeReturn: 0.08947706887164464,
        endDate: "2016-11-01",
        periodReturn: -0.0005228989853211584,
        startDate: "2016-10-31",
        __typename: "SinglePeriodPerformance"
      },
      {
        cumulativeReturn: 0.08895851990631543,
        endDate: "2016-11-02",
        periodReturn: -0.00047596133975191096,
        startDate: "2016-11-01",
        __typename: "SinglePeriodPerformance"
      },
      {
        cumulativeReturn: 0.08863151935670999,
        endDate: "2016-11-03",
        periodReturn: -0.00030028742475300983,
        startDate: "2016-11-02",
        __typename: "SinglePeriodPerformance"
      },
      {
        cumulativeReturn: 0.08849857773623859,
        endDate: "2016-11-04",
        periodReturn: -0.00012211810709826553,
        startDate: "2016-11-03",
        __typename: "SinglePeriodPerformance"
      },
      {
        cumulativeReturn: 0.08932928913171789,
        endDate: "2016-11-07",
        periodReturn: 0.0007631717785126537,
        startDate: "2016-11-04",
        __typename: "SinglePeriodPerformance"
      },
      {
        cumulativeReturn: 0.08980639187404282,
        endDate: "2016-11-08",
        periodReturn: 0.00043797843965554293,
        startDate: "2016-11-07",
        __typename: "SinglePeriodPerformance"
      },
      {
        cumulativeReturn: 0.08556545418236738,
        endDate: "2016-11-09",
        periodReturn: -0.003891459733854794,
        startDate: "2016-11-08",
        __typename: "SinglePeriodPerformance"
      },
      {
        cumulativeReturn: 0.08122286902074838,
        endDate: "2016-11-10",
        periodReturn: -0.004000297858492447,
        startDate: "2016-11-09",
        __typename: "SinglePeriodPerformance"
      },
      {
        cumulativeReturn: 0.07977053632779851,
        endDate: "2016-11-11",
        periodReturn: -0.0013432315709943396,
        startDate: "2016-11-10",
        __typename: "SinglePeriodPerformance"
      },
      {
        cumulativeReturn: 0.07186154286571966,
        endDate: "2016-11-14",
        periodReturn: -0.007324698346536227,
        startDate: "2016-11-11",
        __typename: "SinglePeriodPerformance"
      },
      {
        cumulativeReturn: 0.07282582490902767,
        endDate: "2016-11-15",
        periodReturn: 0.0008996330260436779,
        startDate: "2016-11-14",
        __typename: "SinglePeriodPerformance"
      },
      {
        cumulativeReturn: 0.07289733133548792,
        endDate: "2016-11-16",
        periodReturn: 0.00006665240973872652,
        startDate: "2016-11-15",
        __typename: "SinglePeriodPerformance"
      },
      {
        cumulativeReturn: 0.07337237969689325,
        endDate: "2016-11-17",
        periodReturn: 0.00044277150061886137,
        startDate: "2016-11-16",
        __typename: "SinglePeriodPerformance"
      },
      {
        cumulativeReturn: 0.07192960723316344,
        endDate: "2016-11-18",
        periodReturn: -0.0013441490493142684,
        startDate: "2016-11-17",
        __typename: "SinglePeriodPerformance"
      },
      {
        cumulativeReturn: 0.07188263351709612,
        endDate: "2016-11-21",
        periodReturn: -0.00004382164253168161,
        startDate: "2016-11-18",
        __typename: "SinglePeriodPerformance"
      },
      {
        cumulativeReturn: 0.07193006743886832,
        endDate: "2016-11-22",
        periodReturn: 0.00004425290632472129,
        startDate: "2016-11-21",
        __typename: "SinglePeriodPerformance"
      },
      {
        cumulativeReturn: 0.07114326688873929,
        endDate: "2016-11-23",
        periodReturn: -0.0007340036202258779,
        startDate: "2016-11-22",
        __typename: "SinglePeriodPerformance"
      },
      {
        cumulativeReturn: 0.07114326688873929,
        endDate: "2016-11-24",
        periodReturn: 0,
        startDate: "2016-11-23",
        __typename: "SinglePeriodPerformance"
      },
      {
        cumulativeReturn: 0.07138017498293636,
        endDate: "2016-11-25",
        periodReturn: 0.0002211731161652509,
        startDate: "2016-11-24",
        __typename: "SinglePeriodPerformance"
      },
      {
        cumulativeReturn: 0.07185947581751706,
        endDate: "2016-11-28",
        periodReturn: 0.0004473676532125571,
        startDate: "2016-11-25",
        __typename: "SinglePeriodPerformance"
      },
      {
        cumulativeReturn: 0.07172937944020696,
        endDate: "2016-11-29",
        periodReturn: -0.00012137447141663355,
        startDate: "2016-11-28",
        __typename: "SinglePeriodPerformance"
      },
      {
        cumulativeReturn: 0.07074015040903259,
        endDate: "2016-11-30",
        periodReturn: -0.0009230212870446079,
        startDate: "2016-11-29",
        __typename: "SinglePeriodPerformance"
      },
      {
        cumulativeReturn: 0.06843505128063798,
        endDate: "2016-12-01",
        periodReturn: -0.0021528090895947816,
        startDate: "2016-11-30",
        __typename: "SinglePeriodPerformance"
      },
      {
        cumulativeReturn: 0.06949015045886164,
        endDate: "2016-12-02",
        periodReturn: 0.0009875183119076366,
        startDate: "2016-12-01",
        __typename: "SinglePeriodPerformance"
      },
      {
        cumulativeReturn: 0.07073245562590924,
        endDate: "2016-12-05",
        periodReturn: 0.0011615863563722703,
        startDate: "2016-12-02",
        __typename: "SinglePeriodPerformance"
      },
      {
        cumulativeReturn: 0.07300987447393892,
        endDate: "2016-12-06",
        periodReturn: 0.0021269728362707883,
        startDate: "2016-12-05",
        __typename: "SinglePeriodPerformance"
      },
      {
        cumulativeReturn: 0.07718981836618455,
        endDate: "2016-12-07",
        periodReturn: 0.0038955316178194057,
        startDate: "2016-12-06",
        __typename: "SinglePeriodPerformance"
      },
      {
        cumulativeReturn: 0.0777213364930931,
        endDate: "2016-12-08",
        periodReturn: 0.0004934303294052183,
        startDate: "2016-12-07",
        __typename: "SinglePeriodPerformance"
      },
      {
        cumulativeReturn: 0.07782191194902666,
        endDate: "2016-12-09",
        periodReturn: 0.00009332232046275313,
        startDate: "2016-12-08",
        __typename: "SinglePeriodPerformance"
      },
      {
        cumulativeReturn: 0.07760177084301256,
        endDate: "2016-12-12",
        periodReturn: -0.00020424627071840396,
        startDate: "2016-12-09",
        __typename: "SinglePeriodPerformance"
      },
      {
        cumulativeReturn: 0.07813947754356132,
        endDate: "2016-12-13",
        periodReturn: 0.0004989846111036511,
        startDate: "2016-12-12",
        __typename: "SinglePeriodPerformance"
      },
      {
        cumulativeReturn: 0.07831512914323513,
        endDate: "2016-12-14",
        periodReturn: 0.0001629210351094045,
        startDate: "2016-12-13",
        __typename: "SinglePeriodPerformance"
      },
      {
        cumulativeReturn: 0.07526030536386052,
        endDate: "2016-12-15",
        periodReturn: -0.0028329601401417487,
        startDate: "2016-12-14",
        __typename: "SinglePeriodPerformance"
      },
      {
        cumulativeReturn: 0.07609218856482047,
        endDate: "2016-12-16",
        periodReturn: 0.0007736575011746034,
        startDate: "2016-12-15",
        __typename: "SinglePeriodPerformance"
      },
      {
        cumulativeReturn: 0.0769310403551926,
        endDate: "2016-12-19",
        periodReturn: 0.0007795352473387861,
        startDate: "2016-12-16",
        __typename: "SinglePeriodPerformance"
      },
      {
        cumulativeReturn: 0.07753470706091359,
        endDate: "2016-12-20",
        periodReturn: 0.0005605435103085995,
        startDate: "2016-12-19",
        __typename: "SinglePeriodPerformance"
      },
      {
        cumulativeReturn: 0.07834771500006332,
        endDate: "2016-12-21",
        periodReturn: 0.000754507426834832,
        startDate: "2016-12-20",
        __typename: "SinglePeriodPerformance"
      },
      {
        cumulativeReturn: 0.07879913912885761,
        endDate: "2016-12-22",
        periodReturn: 0.0004186257572717028,
        startDate: "2016-12-21",
        __typename: "SinglePeriodPerformance"
      },
      {
        cumulativeReturn: 0.07979930528906443,
        endDate: "2016-12-23",
        periodReturn: 0.0009271106399051059,
        startDate: "2016-12-22",
        __typename: "SinglePeriodPerformance"
      },
      {
        cumulativeReturn: 0.07979930528906443,
        endDate: "2016-12-26",
        periodReturn: 0,
        startDate: "2016-12-23",
        __typename: "SinglePeriodPerformance"
      },
      {
        cumulativeReturn: 0.08017196728557674,
        endDate: "2016-12-27",
        periodReturn: 0.00034512153757349325,
        startDate: "2016-12-26",
        __typename: "SinglePeriodPerformance"
      },
      {
        cumulativeReturn: 0.08077464003608936,
        endDate: "2016-12-28",
        periodReturn: 0.0005579414841019382,
        startDate: "2016-12-27",
        __typename: "SinglePeriodPerformance"
      },
      {
        cumulativeReturn: 0.08158206744245056,
        endDate: "2016-12-29",
        periodReturn: 0.0007470821172619517,
        startDate: "2016-12-28",
        __typename: "SinglePeriodPerformance"
      },
      {
        cumulativeReturn: 0.0825392224271797,
        endDate: "2016-12-30",
        periodReturn: 0.0008849582602571078,
        startDate: "2016-12-29",
        __typename: "SinglePeriodPerformance"
      },
      {
        cumulativeReturn: 0.0825392224271797,
        endDate: "2017-01-02",
        periodReturn: 0,
        startDate: "2016-12-30",
        __typename: "SinglePeriodPerformance"
      },
      {
        cumulativeReturn: 0.08355833785792233,
        endDate: "2017-01-03",
        periodReturn: 0.0009414120150376988,
        startDate: "2017-01-02",
        __typename: "SinglePeriodPerformance"
      },
      {
        cumulativeReturn: 0.08549515031257982,
        endDate: "2017-01-04",
        periodReturn: 0.001787455632971509,
        startDate: "2017-01-03",
        __typename: "SinglePeriodPerformance"
      },
      {
        cumulativeReturn: 0.08853859665712127,
        endDate: "2017-01-05",
        periodReturn: 0.002803740158272636,
        startDate: "2017-01-04",
        __typename: "SinglePeriodPerformance"
      },
      {
        cumulativeReturn: 0.08947576271923485,
        endDate: "2017-01-06",
        periodReturn: 0.0008609396717686681,
        startDate: "2017-01-05",
        __typename: "SinglePeriodPerformance"
      },
      {
        cumulativeReturn: 0.09017661034475744,
        endDate: "2017-01-09",
        periodReturn: 0.0006432888637864999,
        startDate: "2017-01-06",
        __typename: "SinglePeriodPerformance"
      },
      {
        cumulativeReturn: 0.0908606951822879,
        endDate: "2017-01-10",
        periodReturn: 0.00062749909605389,
        startDate: "2017-01-09",
        __typename: "SinglePeriodPerformance"
      },
      {
        cumulativeReturn: 0.09085134086377167,
        endDate: "2017-01-11",
        periodReturn: -0.000008575172391376102,
        startDate: "2017-01-10",
        __typename: "SinglePeriodPerformance"
      },
      {
        cumulativeReturn: 0.0930925467973358,
        endDate: "2017-01-12",
        periodReturn: 0.00205454753512918,
        startDate: "2017-01-11",
        __typename: "SinglePeriodPerformance"
      },
      {
        cumulativeReturn: 0.09327529150356972,
        endDate: "2017-01-13",
        periodReturn: 0.00016718136700265304,
        startDate: "2017-01-12",
        __typename: "SinglePeriodPerformance"
      },
      {
        cumulativeReturn: 0.09327529150356972,
        endDate: "2017-01-16",
        periodReturn: 0,
        startDate: "2017-01-13",
        __typename: "SinglePeriodPerformance"
      },
      {
        cumulativeReturn: 0.09521420773325162,
        endDate: "2017-01-17",
        periodReturn: 0.0017734931400629679,
        startDate: "2017-01-16",
        __typename: "SinglePeriodPerformance"
      },
      {
        cumulativeReturn: 0.09465129122246241,
        endDate: "2017-01-18",
        periodReturn: -0.000513978459021567,
        startDate: "2017-01-17",
        __typename: "SinglePeriodPerformance"
      },
      {
        cumulativeReturn: 0.09242962345140682,
        endDate: "2017-01-19",
        periodReturn: -0.0020295666655401902,
        startDate: "2017-01-18",
        __typename: "SinglePeriodPerformance"
      },
      {
        cumulativeReturn: 0.09195702715457688,
        endDate: "2017-01-20",
        periodReturn: -0.0004326102905713295,
        startDate: "2017-01-19",
        __typename: "SinglePeriodPerformance"
      },
      {
        cumulativeReturn: 0.09268865346772603,
        endDate: "2017-01-23",
        periodReturn: 0.0006700138329212001,
        startDate: "2017-01-20",
        __typename: "SinglePeriodPerformance"
      },
      {
        cumulativeReturn: 0.09261317006039183,
        endDate: "2017-01-24",
        periodReturn: -0.00006908043484737756,
        startDate: "2017-01-23",
        __typename: "SinglePeriodPerformance"
      },
      {
        cumulativeReturn: 0.0923344253771532,
        endDate: "2017-01-25",
        periodReturn: -0.00025511744767201373,
        startDate: "2017-01-24",
        __typename: "SinglePeriodPerformance"
      },
      {
        cumulativeReturn: 0.09254961253205485,
        endDate: "2017-01-26",
        periodReturn: 0.00019699750360552786,
        startDate: "2017-01-25",
        __typename: "SinglePeriodPerformance"
      },
      {
        cumulativeReturn: 0.09384329898517652,
        endDate: "2017-01-27",
        periodReturn: 0.0011840985876361973,
        startDate: "2017-01-26",
        __typename: "SinglePeriodPerformance"
      },
      {
        cumulativeReturn: 0.09427547353743937,
        endDate: "2017-01-30",
        periodReturn: 0.0003950973166484462,
        startDate: "2017-01-27",
        __typename: "SinglePeriodPerformance"
      },
      {
        cumulativeReturn: 0.09494287704269833,
        endDate: "2017-01-31",
        periodReturn: 0.0006099044723184528,
        startDate: "2017-01-30",
        __typename: "SinglePeriodPerformance"
      },
      {
        cumulativeReturn: 0.09500950497035321,
        endDate: "2017-02-01",
        periodReturn: 0.000060850596914086026,
        startDate: "2017-01-31",
        __typename: "SinglePeriodPerformance"
      },
      {
        cumulativeReturn: 0.09593225798247862,
        endDate: "2017-02-02",
        periodReturn: 0.0008426894998965605,
        startDate: "2017-02-01",
        __typename: "SinglePeriodPerformance"
      },
      {
        cumulativeReturn: 0.09677495698123106,
        endDate: "2017-02-03",
        periodReturn: 0.0007689334743224259,
        startDate: "2017-02-02",
        __typename: "SinglePeriodPerformance"
      },
      {
        cumulativeReturn: 0.09846579339925832,
        endDate: "2017-02-06",
        periodReturn: 0.001541643896284185,
        startDate: "2017-02-03",
        __typename: "SinglePeriodPerformance"
      },
      {
        cumulativeReturn: 0.09853394184026287,
        endDate: "2017-02-07",
        periodReturn: 0.00006203965695972527,
        startDate: "2017-02-06",
        __typename: "SinglePeriodPerformance"
      },
      {
        cumulativeReturn: 0.09929509156063387,
        endDate: "2017-02-08",
        periodReturn: 0.0006928777449479362,
        startDate: "2017-02-07",
        __typename: "SinglePeriodPerformance"
      },
      {
        cumulativeReturn: 0.09918514960400637,
        endDate: "2017-02-09",
        periodReturn: -0.00010001132313930648,
        startDate: "2017-02-08",
        __typename: "SinglePeriodPerformance"
      },
      {
        cumulativeReturn: 0.10004919319802319,
        endDate: "2017-02-10",
        periodReturn: 0.0007860764806803869,
        startDate: "2017-02-09",
        __typename: "SinglePeriodPerformance"
      },
      {
        cumulativeReturn: 0.10075384364968065,
        endDate: "2017-02-13",
        periodReturn: 0.0006405626730281157,
        startDate: "2017-02-10",
        __typename: "SinglePeriodPerformance"
      },
      {
        cumulativeReturn: 0.10036312378550383,
        endDate: "2017-02-14",
        periodReturn: -0.0003549566203478725,
        startDate: "2017-02-13",
        __typename: "SinglePeriodPerformance"
      },
      {
        cumulativeReturn: 0.09972585793777289,
        endDate: "2017-02-15",
        periodReturn: -0.0005791414070099206,
        startDate: "2017-02-14",
        __typename: "SinglePeriodPerformance"
      },
      {
        cumulativeReturn: 0.10043865616905179,
        endDate: "2017-02-16",
        periodReturn: 0.0006481599265252392,
        startDate: "2017-02-15",
        __typename: "SinglePeriodPerformance"
      },
      {
        cumulativeReturn: 0.10136346745809255,
        endDate: "2017-02-17",
        periodReturn: 0.000840402401220957,
        startDate: "2017-02-16",
        __typename: "SinglePeriodPerformance"
      },
      {
        cumulativeReturn: 0.10136346745809255,
        endDate: "2017-02-20",
        periodReturn: 0,
        startDate: "2017-02-17",
        __typename: "SinglePeriodPerformance"
      },
      {
        cumulativeReturn: 0.10254669114959625,
        endDate: "2017-02-21",
        periodReturn: 0.0010743262569209097,
        startDate: "2017-02-20",
        __typename: "SinglePeriodPerformance"
      },
      {
        cumulativeReturn: 0.10370219685646043,
        endDate: "2017-02-22",
        periodReturn: 0.0010480333541787693,
        startDate: "2017-02-21",
        __typename: "SinglePeriodPerformance"
      },
      {
        cumulativeReturn: 0.10499245145756375,
        endDate: "2017-02-23",
        periodReturn: 0.0011690242211877177,
        startDate: "2017-02-22",
        __typename: "SinglePeriodPerformance"
      },
      {
        cumulativeReturn: 0.10689542042701494,
        endDate: "2017-02-24",
        periodReturn: 0.0017221556282497376,
        startDate: "2017-02-23",
        __typename: "SinglePeriodPerformance"
      },
      {
        cumulativeReturn: 0.1075884497308659,
        endDate: "2017-02-27",
        periodReturn: 0.0006261018801429645,
        startDate: "2017-02-24",
        __typename: "SinglePeriodPerformance"
      },
      {
        cumulativeReturn: 0.1078222995125997,
        endDate: "2017-02-28",
        periodReturn: 0.00021113418236767448,
        startDate: "2017-02-27",
        __typename: "SinglePeriodPerformance"
      },
      {
        cumulativeReturn: 0.10716727532250037,
        endDate: "2017-03-01",
        periodReturn: -0.0005912718947681239,
        startDate: "2017-02-28",
        __typename: "SinglePeriodPerformance"
      },
      {
        cumulativeReturn: 0.1068636062551922,
        endDate: "2017-03-02",
        periodReturn: -0.00027427568902788,
        startDate: "2017-03-01",
        __typename: "SinglePeriodPerformance"
      },
      {
        cumulativeReturn: 0.10677692069812172,
        endDate: "2017-03-03",
        periodReturn: -0.00007831638566901375,
        startDate: "2017-03-02",
        __typename: "SinglePeriodPerformance"
      },
      {
        cumulativeReturn: 0.10705884906141949,
        endDate: "2017-03-06",
        periodReturn: 0.0002547291672109692,
        startDate: "2017-03-03",
        __typename: "SinglePeriodPerformance"
      },
      {
        cumulativeReturn: 0.1070080446445476,
        endDate: "2017-03-07",
        periodReturn: -0.00004589134255606115,
        startDate: "2017-03-06",
        __typename: "SinglePeriodPerformance"
      },
      {
        cumulativeReturn: 0.10507105789943627,
        endDate: "2017-03-08",
        periodReturn: -0.001749749475156996,
        startDate: "2017-03-07",
        __typename: "SinglePeriodPerformance"
      },
      {
        cumulativeReturn: 0.10324346735674239,
        endDate: "2017-03-09",
        periodReturn: -0.0016538217426197291,
        startDate: "2017-03-08",
        __typename: "SinglePeriodPerformance"
      },
      {
        cumulativeReturn: 0.10376574042482467,
        endDate: "2017-03-10",
        periodReturn: 0.0004733978342365789,
        startDate: "2017-03-09",
        __typename: "SinglePeriodPerformance"
      },
      {
        cumulativeReturn: 0.10328903663682265,
        endDate: "2017-03-13",
        periodReturn: -0.00043188855256413183,
        startDate: "2017-03-10",
        __typename: "SinglePeriodPerformance"
      },
      {
        cumulativeReturn: 0.10217753267473784,
        endDate: "2017-03-14",
        periodReturn: -0.0010074458507020579,
        startDate: "2017-03-13",
        __typename: "SinglePeriodPerformance"
      },
      {
        cumulativeReturn: 0.103627847453299,
        endDate: "2017-03-15",
        periodReturn: 0.001315863130544509,
        startDate: "2017-03-14",
        __typename: "SinglePeriodPerformance"
      },
      {
        cumulativeReturn: 0.10522946900137464,
        endDate: "2017-03-16",
        periodReturn: 0.0014512333589366503,
        startDate: "2017-03-15",
        __typename: "SinglePeriodPerformance"
      },
      {
        cumulativeReturn: 0.10580699085042489,
        endDate: "2017-03-17",
        periodReturn: 0.0005225356952996719,
        startDate: "2017-03-16",
        __typename: "SinglePeriodPerformance"
      },
      {
        cumulativeReturn: 0.10620815866711841,
        endDate: "2017-03-20",
        periodReturn: 0.0003627828545241832,
        startDate: "2017-03-17",
        __typename: "SinglePeriodPerformance"
      },
      {
        cumulativeReturn: 0.10702913874685294,
        endDate: "2017-03-21",
        periodReturn: 0.0007421569559961708,
        startDate: "2017-03-20",
        __typename: "SinglePeriodPerformance"
      },
      {
        cumulativeReturn: 0.10700353033578591,
        endDate: "2017-03-22",
        periodReturn: -0.000023132553760926452,
        startDate: "2017-03-21",
        __typename: "SinglePeriodPerformance"
      },
      {
        cumulativeReturn: 0.10765187085915517,
        endDate: "2017-03-23",
        periodReturn: 0.0005856715950783908,
        startDate: "2017-03-22",
        __typename: "SinglePeriodPerformance"
      },
      {
        cumulativeReturn: 0.10862083439213754,
        endDate: "2017-03-24",
        periodReturn: 0.0008747906797021737,
        startDate: "2017-03-23",
        __typename: "SinglePeriodPerformance"
      },
      {
        cumulativeReturn: 0.10919346361397819,
        endDate: "2017-03-27",
        periodReturn: 0.0005165239584863207,
        startDate: "2017-03-24",
        __typename: "SinglePeriodPerformance"
      },
      {
        cumulativeReturn: 0.10967632320916532,
        endDate: "2017-03-28",
        periodReturn: 0.0004353249554987317,
        startDate: "2017-03-27",
        __typename: "SinglePeriodPerformance"
      },
      {
        cumulativeReturn: 0.1101070451794206,
        endDate: "2017-03-29",
        periodReturn: 0.00038815099614790616,
        startDate: "2017-03-28",
        __typename: "SinglePeriodPerformance"
      },
      {
        cumulativeReturn: 0.11089287443623741,
        endDate: "2017-03-30",
        periodReturn: 0.0007078860189466228,
        startDate: "2017-03-29",
        __typename: "SinglePeriodPerformance"
      },
      {
        cumulativeReturn: 0.11078556656652938,
        endDate: "2017-03-31",
        periodReturn: -0.00009659605545899388,
        startDate: "2017-03-30",
        __typename: "SinglePeriodPerformance"
      },
      {
        cumulativeReturn: 0.11170594353781405,
        endDate: "2017-04-03",
        periodReturn: 0.0008285820404830358,
        startDate: "2017-03-31",
        __typename: "SinglePeriodPerformance"
      },
      {
        cumulativeReturn: 0.11210583978689681,
        endDate: "2017-04-04",
        periodReturn: 0.0003597140515504875,
        startDate: "2017-04-03",
        __typename: "SinglePeriodPerformance"
      },
      {
        cumulativeReturn: 0.11311769092788859,
        endDate: "2017-04-05",
        periodReturn: 0.0009098514770731535,
        startDate: "2017-04-04",
        __typename: "SinglePeriodPerformance"
      },
      {
        cumulativeReturn: 0.1141759489282912,
        endDate: "2017-04-06",
        periodReturn: 0.0009507152828741375,
        startDate: "2017-04-05",
        __typename: "SinglePeriodPerformance"
      },
      {
        cumulativeReturn: 0.1152910954349311,
        endDate: "2017-04-07",
        periodReturn: 0.0010008710991406071,
        startDate: "2017-04-06",
        __typename: "SinglePeriodPerformance"
      },
      {
        cumulativeReturn: 0.11599001782295915,
        endDate: "2017-04-10",
        periodReturn: 0.0006266726156865528,
        startDate: "2017-04-07",
        __typename: "SinglePeriodPerformance"
      },
      {
        cumulativeReturn: 0.11683531016197057,
        endDate: "2017-04-11",
        periodReturn: 0.0007574371862754932,
        startDate: "2017-04-10",
        __typename: "SinglePeriodPerformance"
      },
      {
        cumulativeReturn: 0.11725561774155624,
        endDate: "2017-04-12",
        periodReturn: 0.00037633801130875687,
        startDate: "2017-04-11",
        __typename: "SinglePeriodPerformance"
      },
      {
        cumulativeReturn: 0.11864131873842543,
        endDate: "2017-04-13",
        periodReturn: 0.001240272122927579,
        startDate: "2017-04-12",
        __typename: "SinglePeriodPerformance"
      },
      {
        cumulativeReturn: 0.11864131873842543,
        endDate: "2017-04-14",
        periodReturn: 0,
        startDate: "2017-04-13",
        __typename: "SinglePeriodPerformance"
      },
      {
        cumulativeReturn: 0.11923869617629501,
        endDate: "2017-04-17",
        periodReturn: 0.0005340205371131587,
        startDate: "2017-04-14",
        __typename: "SinglePeriodPerformance"
      },
      {
        cumulativeReturn: 0.12024694031788763,
        endDate: "2017-04-18",
        periodReturn: 0.0009008303099570546,
        startDate: "2017-04-17",
        __typename: "SinglePeriodPerformance"
      },
      {
        cumulativeReturn: 0.12042949331794972,
        endDate: "2017-04-19",
        periodReturn: 0.00016295782071963362,
        startDate: "2017-04-18",
        __typename: "SinglePeriodPerformance"
      },
      {
        cumulativeReturn: 0.12023979351584146,
        endDate: "2017-04-20",
        periodReturn: -0.00016930989699902524,
        startDate: "2017-04-19",
        __typename: "SinglePeriodPerformance"
      },
      {
        cumulativeReturn: 0.12143322226536157,
        endDate: "2017-04-21",
        periodReturn: 0.0010653332941999534,
        startDate: "2017-04-20",
        __typename: "SinglePeriodPerformance"
      },
      {
        cumulativeReturn: 0.12190070329456026,
        endDate: "2017-04-24",
        periodReturn: 0.0004168603354323605,
        startDate: "2017-04-21",
        __typename: "SinglePeriodPerformance"
      },
      {
        cumulativeReturn: 0.12155650658623185,
        endDate: "2017-04-25",
        periodReturn: -0.0003067978363125503,
        startDate: "2017-04-24",
        __typename: "SinglePeriodPerformance"
      },
      {
        cumulativeReturn: 0.12206036242023832,
        endDate: "2017-04-26",
        periodReturn: 0.0004492469448018138,
        startDate: "2017-04-25",
        __typename: "SinglePeriodPerformance"
      },
      {
        cumulativeReturn: 0.12273478796432835,
        endDate: "2017-04-27",
        periodReturn: 0.0006010599488919634,
        startDate: "2017-04-26",
        __typename: "SinglePeriodPerformance"
      },
      {
        cumulativeReturn: 0.12377776361274884,
        endDate: "2017-04-28",
        periodReturn: 0.0009289599463747662,
        startDate: "2017-04-27",
        __typename: "SinglePeriodPerformance"
      },
      {
        cumulativeReturn: 0.12354156401014915,
        endDate: "2017-05-01",
        periodReturn: -0.0002101835525204154,
        startDate: "2017-04-28",
        __typename: "SinglePeriodPerformance"
      },
      {
        cumulativeReturn: 0.12425962428616844,
        endDate: "2017-05-02",
        periodReturn: 0.0006391043277976205,
        startDate: "2017-05-01",
        __typename: "SinglePeriodPerformance"
      },
      {
        cumulativeReturn: 0.12500493384338873,
        endDate: "2017-05-03",
        periodReturn: 0.000662933668629742,
        startDate: "2017-05-02",
        __typename: "SinglePeriodPerformance"
      },
      {
        cumulativeReturn: 0.12448563243545663,
        endDate: "2017-05-04",
        periodReturn: -0.0004615992270877613,
        startDate: "2017-05-03",
        __typename: "SinglePeriodPerformance"
      },
      {
        cumulativeReturn: 0.12459941684340481,
        endDate: "2017-05-05",
        periodReturn: 0.00010118796066936554,
        startDate: "2017-05-04",
        __typename: "SinglePeriodPerformance"
      },
      {
        cumulativeReturn: 0.12500929532926075,
        endDate: "2017-05-08",
        periodReturn: 0.00036446620878244004,
        startDate: "2017-05-05",
        __typename: "SinglePeriodPerformance"
      },
      {
        cumulativeReturn: 0.12454409053769755,
        endDate: "2017-05-09",
        periodReturn: -0.0004135119536296648,
        startDate: "2017-05-08",
        __typename: "SinglePeriodPerformance"
      },
      {
        cumulativeReturn: 0.12520403077678677,
        endDate: "2017-05-10",
        periodReturn: 0.0005868513690500533,
        startDate: "2017-05-09",
        __typename: "SinglePeriodPerformance"
      },
      {
        cumulativeReturn: 0.12544605005721032,
        endDate: "2017-05-11",
        periodReturn: 0.00021508924053204113,
        startDate: "2017-05-10",
        __typename: "SinglePeriodPerformance"
      },
      {
        cumulativeReturn: 0.12636751928289125,
        endDate: "2017-05-12",
        periodReturn: 0.0008187591272226943,
        startDate: "2017-05-11",
        __typename: "SinglePeriodPerformance"
      },
      {
        cumulativeReturn: 0.1274765043896955,
        endDate: "2017-05-15",
        periodReturn: 0.00098456772573704,
        startDate: "2017-05-12",
        __typename: "SinglePeriodPerformance"
      },
      {
        cumulativeReturn: 0.12788420379595355,
        endDate: "2017-05-16",
        periodReturn: 0.000361603461066021,
        startDate: "2017-05-15",
        __typename: "SinglePeriodPerformance"
      },
      {
        cumulativeReturn: 0.1293191607277977,
        endDate: "2017-05-17",
        periodReturn: 0.0012722555445095038,
        startDate: "2017-05-16",
        __typename: "SinglePeriodPerformance"
      },
      {
        cumulativeReturn: 0.12750633513933063,
        endDate: "2017-05-18",
        periodReturn: -0.001605237608205306,
        startDate: "2017-05-17",
        __typename: "SinglePeriodPerformance"
      },
      {
        cumulativeReturn: 0.12871950497884166,
        endDate: "2017-05-19",
        periodReturn: 0.0010759760736608714,
        startDate: "2017-05-18",
        __typename: "SinglePeriodPerformance"
      },
      {
        cumulativeReturn: 0.1292897769172492,
        endDate: "2017-05-22",
        periodReturn: 0.0005052379584938821,
        startDate: "2017-05-19",
        __typename: "SinglePeriodPerformance"
      },
      {
        cumulativeReturn: 0.1297389187918787,
        endDate: "2017-05-23",
        periodReturn: 0.00039772065931181793,
        startDate: "2017-05-22",
        __typename: "SinglePeriodPerformance"
      },
      {
        cumulativeReturn: 0.1312385331947481,
        endDate: "2017-05-24",
        periodReturn: 0.001327399081261212,
        startDate: "2017-05-23",
        __typename: "SinglePeriodPerformance"
      },
      {
        cumulativeReturn: 0.13173750034401244,
        endDate: "2017-05-25",
        periodReturn: 0.00044108040401973206,
        startDate: "2017-05-24",
        __typename: "SinglePeriodPerformance"
      },
      {
        cumulativeReturn: 0.13242236179727374,
        endDate: "2017-05-26",
        periodReturn: 0.0006051416101817515,
        startDate: "2017-05-25",
        __typename: "SinglePeriodPerformance"
      },
      {
        cumulativeReturn: 0.13242236179727374,
        endDate: "2017-05-29",
        periodReturn: 0,
        startDate: "2017-05-26",
        __typename: "SinglePeriodPerformance"
      },
      {
        cumulativeReturn: 0.13344474726316635,
        endDate: "2017-05-30",
        periodReturn: 0.0009028305165840074,
        startDate: "2017-05-29",
        __typename: "SinglePeriodPerformance"
      },
      {
        cumulativeReturn: 0.1340008805745161,
        endDate: "2017-05-31",
        periodReturn: 0.0004906576281662187,
        startDate: "2017-05-30",
        __typename: "SinglePeriodPerformance"
      },
      {
        cumulativeReturn: 0.1343979647892959,
        endDate: "2017-06-01",
        periodReturn: 0.0003501621749874649,
        startDate: "2017-05-31",
        __typename: "SinglePeriodPerformance"
      },
      {
        cumulativeReturn: 0.13594803200638328,
        endDate: "2017-06-02",
        periodReturn: 0.0013664227768387213,
        startDate: "2017-06-01",
        __typename: "SinglePeriodPerformance"
      },
      {
        cumulativeReturn: 0.13626457928190638,
        endDate: "2017-06-05",
        periodReturn: 0.0002786635185799864,
        startDate: "2017-06-02",
        __typename: "SinglePeriodPerformance"
      },
      {
        cumulativeReturn: 0.13705245294614077,
        endDate: "2017-06-06",
        periodReturn: 0.0006933892674295437,
        startDate: "2017-06-05",
        __typename: "SinglePeriodPerformance"
      },
      {
        cumulativeReturn: 0.13648662836154668,
        endDate: "2017-06-07",
        periodReturn: -0.0004976239953821172,
        startDate: "2017-06-06",
        __typename: "SinglePeriodPerformance"
      },
      {
        cumulativeReturn: 0.13625237979921012,
        endDate: "2017-06-08",
        periodReturn: -0.0002061164262657034,
        startDate: "2017-06-07",
        __typename: "SinglePeriodPerformance"
      },
      {
        cumulativeReturn: 0.13614583598791885,
        endDate: "2017-06-09",
        periodReturn: -0.00009376773433924664,
        startDate: "2017-06-08",
        __typename: "SinglePeriodPerformance"
      },
      {
        cumulativeReturn: 0.13593951794220271,
        endDate: "2017-06-12",
        periodReturn: -0.0001815946854541154,
        startDate: "2017-06-09",
        __typename: "SinglePeriodPerformance"
      },
      {
        cumulativeReturn: 0.1357353965083523,
        endDate: "2017-06-13",
        periodReturn: -0.0001796939279127992,
        startDate: "2017-06-12",
        __typename: "SinglePeriodPerformance"
      },
      {
        cumulativeReturn: 0.1376631365836276,
        endDate: "2017-06-14",
        periodReturn: 0.0016973496478157012,
        startDate: "2017-06-13",
        __typename: "SinglePeriodPerformance"
      },
      {
        cumulativeReturn: 0.13710315823397234,
        endDate: "2017-06-15",
        periodReturn: -0.000492218066708961,
        startDate: "2017-06-14",
        __typename: "SinglePeriodPerformance"
      },
      {
        cumulativeReturn: 0.13730579644740182,
        endDate: "2017-06-16",
        periodReturn: 0.0001782056552760152,
        startDate: "2017-06-15",
        __typename: "SinglePeriodPerformance"
      },
      {
        cumulativeReturn: 0.13723928820200837,
        endDate: "2017-06-19",
        periodReturn: -0.000058478771146055294,
        startDate: "2017-06-16",
        __typename: "SinglePeriodPerformance"
      },
      {
        cumulativeReturn: 0.13755099866542553,
        endDate: "2017-06-20",
        periodReturn: 0.0002740939982033539,
        startDate: "2017-06-19",
        __typename: "SinglePeriodPerformance"
      },
      {
        cumulativeReturn: 0.1369311420069812,
        endDate: "2017-06-21",
        periodReturn: -0.0005449045002566683,
        startDate: "2017-06-20",
        __typename: "SinglePeriodPerformance"
      },
      {
        cumulativeReturn: 0.1364766066376406,
        endDate: "2017-06-22",
        periodReturn: -0.00039979146717559425,
        startDate: "2017-06-21",
        __typename: "SinglePeriodPerformance"
      },
      {
        cumulativeReturn: 0.13728738799186124,
        endDate: "2017-06-23",
        periodReturn: 0.00071341666822286,
        startDate: "2017-06-22",
        __typename: "SinglePeriodPerformance"
      },
      {
        cumulativeReturn: 0.13818868241161142,
        endDate: "2017-06-26",
        periodReturn: 0.0007924948691654456,
        startDate: "2017-06-23",
        __typename: "SinglePeriodPerformance"
      },
      {
        cumulativeReturn: 0.13749204405532267,
        endDate: "2017-06-27",
        periodReturn: -0.000612058762359685,
        startDate: "2017-06-26",
        __typename: "SinglePeriodPerformance"
      },
      {
        cumulativeReturn: 0.13679603244695926,
        endDate: "2017-06-28",
        periodReturn: -0.0006118826166748183,
        startDate: "2017-06-27",
        __typename: "SinglePeriodPerformance"
      },
      {
        cumulativeReturn: 0.13607233566528487,
        endDate: "2017-06-29",
        periodReturn: -0.0006366109319686462,
        startDate: "2017-06-28",
        __typename: "SinglePeriodPerformance"
      },
      {
        cumulativeReturn: 0.13624830449318193,
        endDate: "2017-06-30",
        periodReturn: 0.00015489227434976186,
        startDate: "2017-06-29",
        __typename: "SinglePeriodPerformance"
      },
      {
        cumulativeReturn: 0.13651801331631486,
        endDate: "2017-07-03",
        periodReturn: 0.00023736785530628586,
        startDate: "2017-06-30",
        __typename: "SinglePeriodPerformance"
      },
      {
        cumulativeReturn: 0.13651801331631486,
        endDate: "2017-07-04",
        periodReturn: 0,
        startDate: "2017-07-03",
        __typename: "SinglePeriodPerformance"
      },
      {
        cumulativeReturn: 0.13667935218537952,
        endDate: "2017-07-05",
        periodReturn: 0.00014195891941376352,
        startDate: "2017-07-04",
        __typename: "SinglePeriodPerformance"
      },
      {
        cumulativeReturn: 0.13552694064986825,
        endDate: "2017-07-06",
        periodReturn: -0.0010138404760283652,
        startDate: "2017-07-05",
        __typename: "SinglePeriodPerformance"
      },
      {
        cumulativeReturn: 0.1352800580080309,
        endDate: "2017-07-07",
        periodReturn: -0.00021741680712221429,
        startDate: "2017-07-06",
        __typename: "SinglePeriodPerformance"
      },
      {
        cumulativeReturn: 0.13617208905524136,
        endDate: "2017-07-10",
        periodReturn: 0.0007857365598192187,
        startDate: "2017-07-07",
        __typename: "SinglePeriodPerformance"
      },
      {
        cumulativeReturn: 0.13655022787512783,
        endDate: "2017-07-11",
        periodReturn: 0.0003328182618893176,
        startDate: "2017-07-10",
        __typename: "SinglePeriodPerformance"
      },
      {
        cumulativeReturn: 0.1378198308446903,
        endDate: "2017-07-12",
        periodReturn: 0.0011170671901900627,
        startDate: "2017-07-11",
        __typename: "SinglePeriodPerformance"
      },
      {
        cumulativeReturn: 0.1385569450263009,
        endDate: "2017-07-13",
        periodReturn: 0.000647830316917047,
        startDate: "2017-07-12",
        __typename: "SinglePeriodPerformance"
      },
      {
        cumulativeReturn: 0.13973054527885265,
        endDate: "2017-07-14",
        periodReturn: 0.001030778704287557,
        startDate: "2017-07-13",
        __typename: "SinglePeriodPerformance"
      },
      {
        cumulativeReturn: 0.14024626991532885,
        endDate: "2017-07-17",
        periodReturn: 0.00045249698589954607,
        startDate: "2017-07-14",
        __typename: "SinglePeriodPerformance"
      },
      {
        cumulativeReturn: 0.141768220482984,
        endDate: "2017-07-18",
        periodReturn: 0.0013347560152669401,
        startDate: "2017-07-17",
        __typename: "SinglePeriodPerformance"
      },
      {
        cumulativeReturn: 0.142422490643634,
        endDate: "2017-07-19",
        periodReturn: 0.0005730323798758101,
        startDate: "2017-07-18",
        __typename: "SinglePeriodPerformance"
      },
      {
        cumulativeReturn: 0.14304635454543568,
        endDate: "2017-07-20",
        periodReturn: 0.0005460886028690142,
        startDate: "2017-07-19",
        __typename: "SinglePeriodPerformance"
      },
      {
        cumulativeReturn: 0.14435634880390236,
        endDate: "2017-07-21",
        periodReturn: 0.0011460552349930738,
        startDate: "2017-07-20",
        __typename: "SinglePeriodPerformance"
      },
      {
        cumulativeReturn: 0.14409667026776507,
        endDate: "2017-07-24",
        periodReturn: -0.00022692104291517347,
        startDate: "2017-07-21",
        __typename: "SinglePeriodPerformance"
      },
      {
        cumulativeReturn: 0.14362598782041602,
        endDate: "2017-07-25",
        periodReturn: -0.00041140094152952863,
        startDate: "2017-07-24",
        __typename: "SinglePeriodPerformance"
      },
      {
        cumulativeReturn: 0.14462101137662686,
        endDate: "2017-07-26",
        periodReturn: 0.0008700602878981229,
        startDate: "2017-07-25",
        __typename: "SinglePeriodPerformance"
      },
      {
        cumulativeReturn: 0.14450336422211763,
        endDate: "2017-07-27",
        periodReturn: -0.00010278262703533063,
        startDate: "2017-07-26",
        __typename: "SinglePeriodPerformance"
      },
      {
        cumulativeReturn: 0.14482098263998244,
        endDate: "2017-07-28",
        periodReturn: 0.00027751636892781723,
        startDate: "2017-07-27",
        __typename: "SinglePeriodPerformance"
      },
      {
        cumulativeReturn: 0.14524558658273157,
        endDate: "2017-07-31",
        periodReturn: 0.0003708911255016819,
        startDate: "2017-07-28",
        __typename: "SinglePeriodPerformance"
      },
      {
        cumulativeReturn: 0.14546213812448183,
        endDate: "2017-08-01",
        periodReturn: 0.00018908742743684924,
        startDate: "2017-07-31",
        __typename: "SinglePeriodPerformance"
      },
      {
        cumulativeReturn: 0.1461215009246084,
        endDate: "2017-08-02",
        periodReturn: 0.0005756303750083935,
        startDate: "2017-08-01",
        __typename: "SinglePeriodPerformance"
      },
      {
        cumulativeReturn: 0.1479360717418723,
        endDate: "2017-08-03",
        periodReturn: 0.0015832272719778807,
        startDate: "2017-08-02",
        __typename: "SinglePeriodPerformance"
      },
      {
        cumulativeReturn: 0.14760726729651275,
        endDate: "2017-08-04",
        periodReturn: -0.0002864309724674862,
        startDate: "2017-08-03",
        __typename: "SinglePeriodPerformance"
      },
      {
        cumulativeReturn: 0.14820157476711437,
        endDate: "2017-08-07",
        periodReturn: 0.0005178665973434385,
        startDate: "2017-08-04",
        __typename: "SinglePeriodPerformance"
      },
      {
        cumulativeReturn: 0.1482370357693461,
        endDate: "2017-08-08",
        periodReturn: 0.00003088395192176685,
        startDate: "2017-08-07",
        __typename: "SinglePeriodPerformance"
      },
      {
        cumulativeReturn: 0.1475996073879231,
        endDate: "2017-08-09",
        periodReturn: -0.0005551365803105403,
        startDate: "2017-08-08",
        __typename: "SinglePeriodPerformance"
      },
      {
        cumulativeReturn: 0.14755041799981194,
        endDate: "2017-08-10",
        periodReturn: -0.000042862848500965816,
        startDate: "2017-08-09",
        __typename: "SinglePeriodPerformance"
      },
      {
        cumulativeReturn: 0.14772652402756692,
        endDate: "2017-08-11",
        periodReturn: 0.00015346256250945716,
        startDate: "2017-08-10",
        __typename: "SinglePeriodPerformance"
      },
      {
        cumulativeReturn: 0.148705652707825,
        endDate: "2017-08-14",
        periodReturn: 0.0008531027729690798,
        startDate: "2017-08-11",
        __typename: "SinglePeriodPerformance"
      },
      {
        cumulativeReturn: 0.1482529752791948,
        endDate: "2017-08-15",
        periodReturn: -0.0003940760869097337,
        startDate: "2017-08-14",
        __typename: "SinglePeriodPerformance"
      },
      {
        cumulativeReturn: 0.14887849231942618,
        endDate: "2017-08-16",
        periodReturn: 0.0005447554273300216,
        startDate: "2017-08-15",
        __typename: "SinglePeriodPerformance"
      },
      {
        cumulativeReturn: 0.1493134037663284,
        endDate: "2017-08-17",
        periodReturn: 0.00037855304090891293,
        startDate: "2017-08-16",
        __typename: "SinglePeriodPerformance"
      },
      {
        cumulativeReturn: 0.14936897332089805,
        endDate: "2017-08-18",
        periodReturn: 0.00004835021882417986,
        startDate: "2017-08-17",
        __typename: "SinglePeriodPerformance"
      },
      {
        cumulativeReturn: 0.15020810470369583,
        endDate: "2017-08-21",
        periodReturn: 0.0007300800720008869,
        startDate: "2017-08-18",
        __typename: "SinglePeriodPerformance"
      },
      {
        cumulativeReturn: 0.15078230513983715,
        endDate: "2017-08-22",
        periodReturn: 0.0004992143889381076,
        startDate: "2017-08-21",
        __typename: "SinglePeriodPerformance"
      },
      {
        cumulativeReturn: 0.15138389907865957,
        endDate: "2017-08-23",
        periodReturn: 0.0005227695421935601,
        startDate: "2017-08-22",
        __typename: "SinglePeriodPerformance"
      },
      {
        cumulativeReturn: 0.15247059517595596,
        endDate: "2017-08-24",
        periodReturn: 0.000943817347251448,
        startDate: "2017-08-23",
        __typename: "SinglePeriodPerformance"
      },
      {
        cumulativeReturn: 0.15331956608297337,
        endDate: "2017-08-25",
        periodReturn: 0.0007366529875652223,
        startDate: "2017-08-24",
        __typename: "SinglePeriodPerformance"
      },
      {
        cumulativeReturn: 0.15320784910592455,
        endDate: "2017-08-28",
        periodReturn: -0.00009686558724415203,
        startDate: "2017-08-25",
        __typename: "SinglePeriodPerformance"
      },
      {
        cumulativeReturn: 0.15415120341854083,
        endDate: "2017-08-29",
        periodReturn: 0.0008180262676391128,
        startDate: "2017-08-28",
        __typename: "SinglePeriodPerformance"
      },
      {
        cumulativeReturn: 0.1547568526096188,
        endDate: "2017-08-30",
        periodReturn: 0.000524757232227519,
        startDate: "2017-08-29",
        __typename: "SinglePeriodPerformance"
      },
      {
        cumulativeReturn: 0.1558551895761897,
        endDate: "2017-08-31",
        periodReturn: 0.0009511413282274809,
        startDate: "2017-08-30",
        __typename: "SinglePeriodPerformance"
      },
      {
        cumulativeReturn: 0.15631166413200948,
        endDate: "2017-09-01",
        periodReturn: 0.0003949236547418252,
        startDate: "2017-08-31",
        __typename: "SinglePeriodPerformance"
      },
      {
        cumulativeReturn: 0.15631166413200948,
        endDate: "2017-09-04",
        periodReturn: 0,
        startDate: "2017-09-01",
        __typename: "SinglePeriodPerformance"
      },
      {
        cumulativeReturn: 0.15801672293824431,
        endDate: "2017-09-05",
        periodReturn: 0.0014745668137098858,
        startDate: "2017-09-04",
        __typename: "SinglePeriodPerformance"
      },
      {
        cumulativeReturn: 0.15839765806087103,
        endDate: "2017-09-06",
        periodReturn: 0.00032895476816624514,
        startDate: "2017-09-05",
        __typename: "SinglePeriodPerformance"
      },
      {
        cumulativeReturn: 0.1591199162291752,
        endDate: "2017-09-07",
        periodReturn: 0.000623497607473732,
        startDate: "2017-09-06",
        __typename: "SinglePeriodPerformance"
      },
      {
        cumulativeReturn: 0.16002599128065342,
        endDate: "2017-09-08",
        periodReturn: 0.0007816922466711253,
        startDate: "2017-09-07",
        __typename: "SinglePeriodPerformance"
      },
      {
        cumulativeReturn: 0.15953001660635624,
        endDate: "2017-09-11",
        periodReturn: -0.0004275547944832037,
        startDate: "2017-09-08",
        __typename: "SinglePeriodPerformance"
      },
      {
        cumulativeReturn: 0.15895927981837743,
        endDate: "2017-09-12",
        periodReturn: -0.000492213896841889,
        startDate: "2017-09-11",
        __typename: "SinglePeriodPerformance"
      },
      {
        cumulativeReturn: 0.15871797376458985,
        endDate: "2017-09-13",
        periodReturn: -0.0002082092597984818,
        startDate: "2017-09-12",
        __typename: "SinglePeriodPerformance"
      },
      {
        cumulativeReturn: 0.15865159485032243,
        endDate: "2017-09-14",
        periodReturn: -0.0000572865147261609,
        startDate: "2017-09-13",
        __typename: "SinglePeriodPerformance"
      },
      {
        cumulativeReturn: 0.15909589973670246,
        endDate: "2017-09-15",
        periodReturn: 0.00038346720304416874,
        startDate: "2017-09-14",
        __typename: "SinglePeriodPerformance"
      },
      {
        cumulativeReturn: 0.15927113079882105,
        endDate: "2017-09-18",
        periodReturn: 0.00015117908894197462,
        startDate: "2017-09-15",
        __typename: "SinglePeriodPerformance"
      },
      {
        cumulativeReturn: 0.15907182332070247,
        endDate: "2017-09-19",
        periodReturn: -0.00017192481795112535,
        startDate: "2017-09-18",
        __typename: "SinglePeriodPerformance"
      },
      {
        cumulativeReturn: 0.15885121757924314,
        endDate: "2017-09-20",
        periodReturn: -0.00019032965604076705,
        startDate: "2017-09-19",
        __typename: "SinglePeriodPerformance"
      },
      {
        cumulativeReturn: 0.15890217292142594,
        endDate: "2017-09-21",
        periodReturn: 0.000043970564477838855,
        startDate: "2017-09-20",
        __typename: "SinglePeriodPerformance"
      },
      {
        cumulativeReturn: 0.15981873692424609,
        endDate: "2017-09-22",
        periodReturn: 0.0007908898820246973,
        startDate: "2017-09-21",
        __typename: "SinglePeriodPerformance"
      },
      {
        cumulativeReturn: 0.16019790826311908,
        endDate: "2017-09-25",
        periodReturn: 0.00032692292924889956,
        startDate: "2017-09-22",
        __typename: "SinglePeriodPerformance"
      },
      {
        cumulativeReturn: 0.16004064590976075,
        endDate: "2017-09-26",
        periodReturn: -0.00013554786837509982,
        startDate: "2017-09-25",
        __typename: "SinglePeriodPerformance"
      },
      {
        cumulativeReturn: 0.15850072687498562,
        endDate: "2017-09-27",
        periodReturn: -0.001327469895304788,
        startDate: "2017-09-26",
        __typename: "SinglePeriodPerformance"
      },
      {
        cumulativeReturn: 0.15852172069647796,
        endDate: "2017-09-28",
        periodReturn: 0.000018121543651335916,
        startDate: "2017-09-27",
        __typename: "SinglePeriodPerformance"
      },
      {
        cumulativeReturn: 0.15922006413905243,
        endDate: "2017-09-29",
        periodReturn: 0.0006027883898065403,
        startDate: "2017-09-28",
        __typename: "SinglePeriodPerformance"
      },
      {
        cumulativeReturn: 0.15926239192375613,
        endDate: "2017-10-02",
        periodReturn: 0.00003651402008393316,
        startDate: "2017-09-29",
        __typename: "SinglePeriodPerformance"
      },
      {
        cumulativeReturn: 0.1600903300579457,
        endDate: "2017-10-03",
        periodReturn: 0.0007141939046393564,
        startDate: "2017-10-02",
        __typename: "SinglePeriodPerformance"
      },
      {
        cumulativeReturn: 0.16085357203555262,
        endDate: "2017-10-04",
        periodReturn: 0.0006579159896701756,
        startDate: "2017-10-03",
        __typename: "SinglePeriodPerformance"
      },
      {
        cumulativeReturn: 0.16108997189137964,
        endDate: "2017-10-05",
        periodReturn: 0.00020364313081506087,
        startDate: "2017-10-04",
        __typename: "SinglePeriodPerformance"
      },
      {
        cumulativeReturn: 0.16093105638689154,
        endDate: "2017-10-06",
        periodReturn: -0.0001368675196023486,
        startDate: "2017-10-05",
        __typename: "SinglePeriodPerformance"
      },
      {
        cumulativeReturn: 0.16112291349719365,
        endDate: "2017-10-09",
        periodReturn: 0.00016526141603904432,
        startDate: "2017-10-06",
        __typename: "SinglePeriodPerformance"
      },
      {
        cumulativeReturn: 0.16149242103910222,
        endDate: "2017-10-10",
        periodReturn: 0.0003182329257421859,
        startDate: "2017-10-09",
        __typename: "SinglePeriodPerformance"
      },
      {
        cumulativeReturn: 0.16172019585988262,
        endDate: "2017-10-11",
        periodReturn: 0.00019610530095112247,
        startDate: "2017-10-10",
        __typename: "SinglePeriodPerformance"
      },
      {
        cumulativeReturn: 0.1629882389079389,
        endDate: "2017-10-12",
        periodReturn: 0.0010915219108484466,
        startDate: "2017-10-11",
        __typename: "SinglePeriodPerformance"
      },
      {
        cumulativeReturn: 0.16408303654910328,
        endDate: "2017-10-13",
        periodReturn: 0.0009413660469965511,
        startDate: "2017-10-12",
        __typename: "SinglePeriodPerformance"
      },
      {
        cumulativeReturn: 0.16457655641869184,
        endDate: "2017-10-16",
        periodReturn: 0.00042395589841382955,
        startDate: "2017-10-13",
        __typename: "SinglePeriodPerformance"
      },
      {
        cumulativeReturn: 0.1652917055066312,
        endDate: "2017-10-17",
        periodReturn: 0.0006140850801073044,
        startDate: "2017-10-16",
        __typename: "SinglePeriodPerformance"
      },
      {
        cumulativeReturn: 0.16562092497812486,
        endDate: "2017-10-18",
        periodReturn: 0.0002825210802907637,
        startDate: "2017-10-17",
        __typename: "SinglePeriodPerformance"
      },
      {
        cumulativeReturn: 0.1664411830028285,
        endDate: "2017-10-19",
        periodReturn: 0.000703709076532629,
        startDate: "2017-10-18",
        __typename: "SinglePeriodPerformance"
      },
      {
        cumulativeReturn: 0.1658612793634333,
        endDate: "2017-10-20",
        periodReturn: -0.0004971563485973302,
        startDate: "2017-10-19",
        __typename: "SinglePeriodPerformance"
      },
      {
        cumulativeReturn: 0.16621034243489463,
        endDate: "2017-10-23",
        periodReturn: 0.0002994036062779186,
        startDate: "2017-10-20",
        __typename: "SinglePeriodPerformance"
      },
      {
        cumulativeReturn: 0.1661159610671763,
        endDate: "2017-10-24",
        periodReturn: -0.00008092996973531787,
        startDate: "2017-10-23",
        __typename: "SinglePeriodPerformance"
      },
      {
        cumulativeReturn: 0.16515163399556165,
        endDate: "2017-10-25",
        periodReturn: -0.0008269564124069986,
        startDate: "2017-10-24",
        __typename: "SinglePeriodPerformance"
      },
      {
        cumulativeReturn: 0.16408879876754723,
        endDate: "2017-10-26",
        periodReturn: -0.0009121861884790108,
        startDate: "2017-10-25",
        __typename: "SinglePeriodPerformance"
      },
      {
        cumulativeReturn: 0.16498390189733514,
        endDate: "2017-10-27",
        periodReturn: 0.0007689302832700848,
        startDate: "2017-10-26",
        __typename: "SinglePeriodPerformance"
      },
      {
        cumulativeReturn: 0.16587772592431405,
        endDate: "2017-10-30",
        periodReturn: 0.0007672415262762155,
        startDate: "2017-10-27",
        __typename: "SinglePeriodPerformance"
      },
      {
        cumulativeReturn: 0.16596908310945224,
        endDate: "2017-10-31",
        periodReturn: 0.00007835914788208284,
        startDate: "2017-10-30",
        __typename: "SinglePeriodPerformance"
      },
      {
        cumulativeReturn: 0.1664253545890393,
        endDate: "2017-11-01",
        periodReturn: 0.0003913238234159459,
        startDate: "2017-10-31",
        __typename: "SinglePeriodPerformance"
      },
      {
        cumulativeReturn: 0.16711096890893695,
        endDate: "2017-11-02",
        periodReturn: 0.0005877909951120219,
        startDate: "2017-11-01",
        __typename: "SinglePeriodPerformance"
      },
      {
        cumulativeReturn: 0.1662264630839312,
        endDate: "2017-11-03",
        periodReturn: -0.0007578592340989882,
        startDate: "2017-11-02",
        __typename: "SinglePeriodPerformance"
      },
      {
        cumulativeReturn: 0.16639970872990362,
        endDate: "2017-11-06",
        periodReturn: 0.0001485523193447721,
        startDate: "2017-11-03",
        __typename: "SinglePeriodPerformance"
      },
      {
        cumulativeReturn: 0.16643289929160332,
        endDate: "2017-11-07",
        periodReturn: 0.00002845556411850486,
        startDate: "2017-11-06",
        __typename: "SinglePeriodPerformance"
      },
      {
        cumulativeReturn: 0.16590092624781438,
        endDate: "2017-11-08",
        periodReturn: -0.000456068278005503,
        startDate: "2017-11-07",
        __typename: "SinglePeriodPerformance"
      },
      {
        cumulativeReturn: 0.16483840540725514,
        endDate: "2017-11-09",
        periodReturn: -0.0009113302997182399,
        startDate: "2017-11-08",
        __typename: "SinglePeriodPerformance"
      },
      {
        cumulativeReturn: 0.1640537409712226,
        endDate: "2017-11-10",
        periodReturn: -0.0006736251418137107,
        startDate: "2017-11-09",
        __typename: "SinglePeriodPerformance"
      },
      {
        cumulativeReturn: 0.1644322952315287,
        endDate: "2017-11-13",
        periodReturn: 0.00032520342230089167,
        startDate: "2017-11-10",
        __typename: "SinglePeriodPerformance"
      },
      {
        cumulativeReturn: 0.16323397302856812,
        endDate: "2017-11-14",
        periodReturn: -0.0010291042320518292,
        startDate: "2017-11-13",
        __typename: "SinglePeriodPerformance"
      },
      {
        cumulativeReturn: 0.16398179697785165,
        endDate: "2017-11-15",
        periodReturn: 0.000642883518383168,
        startDate: "2017-11-14",
        __typename: "SinglePeriodPerformance"
      },
      {
        cumulativeReturn: 0.1649763293152373,
        endDate: "2017-11-16",
        periodReturn: 0.0008544225863049778,
        startDate: "2017-11-15",
        __typename: "SinglePeriodPerformance"
      },
      {
        cumulativeReturn: 0.1657136129081933,
        endDate: "2017-11-17",
        periodReturn: 0.0006328743120381704,
        startDate: "2017-11-16",
        __typename: "SinglePeriodPerformance"
      },
      {
        cumulativeReturn: 0.16549213860326262,
        endDate: "2017-11-20",
        periodReturn: -0.0001899903222182117,
        startDate: "2017-11-17",
        __typename: "SinglePeriodPerformance"
      },
      {
        cumulativeReturn: 0.1651027251059214,
        endDate: "2017-11-21",
        periodReturn: -0.0003341193684995125,
        startDate: "2017-11-20",
        __typename: "SinglePeriodPerformance"
      },
      {
        cumulativeReturn: 0.16504081668795778,
        endDate: "2017-11-22",
        periodReturn: -0.00005313558764353747,
        startDate: "2017-11-21",
        __typename: "SinglePeriodPerformance"
      },
      {
        cumulativeReturn: 0.16504081668795778,
        endDate: "2017-11-23",
        periodReturn: 0,
        startDate: "2017-11-22",
        __typename: "SinglePeriodPerformance"
      },
      {
        cumulativeReturn: 0.1653443510430901,
        endDate: "2017-11-24",
        periodReturn: 0.00026053538278189597,
        startDate: "2017-11-23",
        __typename: "SinglePeriodPerformance"
      },
      {
        cumulativeReturn: 0.16549127802199992,
        endDate: "2017-11-27",
        periodReturn: 0.00012608031160759683,
        startDate: "2017-11-24",
        __typename: "SinglePeriodPerformance"
      },
      {
        cumulativeReturn: 0.1649773159272856,
        endDate: "2017-11-28",
        periodReturn: -0.00044098321832704984,
        startDate: "2017-11-27",
        __typename: "SinglePeriodPerformance"
      },
      {
        cumulativeReturn: 0.16383032531205477,
        endDate: "2017-11-29",
        periodReturn: -0.0009845604713065728,
        startDate: "2017-11-28",
        __typename: "SinglePeriodPerformance"
      },
      {
        cumulativeReturn: 0.1641331885841042,
        endDate: "2017-11-30",
        periodReturn: 0.0002602297478098705,
        startDate: "2017-11-29",
        __typename: "SinglePeriodPerformance"
      },
      {
        cumulativeReturn: 0.16599631824409444,
        endDate: "2017-12-01",
        periodReturn: 0.001600443727797477,
        startDate: "2017-11-30",
        __typename: "SinglePeriodPerformance"
      },
      {
        cumulativeReturn: 0.16649176668572419,
        endDate: "2017-12-04",
        periodReturn: 0.00042491424190421013,
        startDate: "2017-12-01",
        __typename: "SinglePeriodPerformance"
      },
      {
        cumulativeReturn: 0.16825667472254113,
        endDate: "2017-12-05",
        periodReturn: 0.0015130051383316395,
        startDate: "2017-12-04",
        __typename: "SinglePeriodPerformance"
      },
      {
        cumulativeReturn: 0.1705667031492477,
        endDate: "2017-12-06",
        periodReturn: 0.0019773295344151414,
        startDate: "2017-12-05",
        __typename: "SinglePeriodPerformance"
      },
      {
        cumulativeReturn: 0.16991841446233602,
        endDate: "2017-12-07",
        periodReturn: -0.000553824643369381,
        startDate: "2017-12-06",
        __typename: "SinglePeriodPerformance"
      },
      {
        cumulativeReturn: 0.16957811888412921,
        endDate: "2017-12-08",
        periodReturn: -0.00029087120435075496,
        startDate: "2017-12-07",
        __typename: "SinglePeriodPerformance"
      },
      {
        cumulativeReturn: 0.16872739052361796,
        endDate: "2017-12-11",
        periodReturn: -0.0007273805372854278,
        startDate: "2017-12-08",
        __typename: "SinglePeriodPerformance"
      },
      {
        cumulativeReturn: 0.16781420557847104,
        endDate: "2017-12-12",
        periodReturn: -0.0007813498276427869,
        startDate: "2017-12-11",
        __typename: "SinglePeriodPerformance"
      },
      {
        cumulativeReturn: 0.16885051655720273,
        endDate: "2017-12-13",
        periodReturn: 0.0008873937085038622,
        startDate: "2017-12-12",
        __typename: "SinglePeriodPerformance"
      },
      {
        cumulativeReturn: 0.1692309024606109,
        endDate: "2017-12-14",
        periodReturn: 0.00032543588595781243,
        startDate: "2017-12-13",
        __typename: "SinglePeriodPerformance"
      },
      {
        cumulativeReturn: 0.1694466293021668,
        endDate: "2017-12-15",
        periodReturn: 0.00018450319872830384,
        startDate: "2017-12-14",
        __typename: "SinglePeriodPerformance"
      },
      {
        cumulativeReturn: 0.1690489347423576,
        endDate: "2017-12-18",
        periodReturn: -0.00034007072220694745,
        startDate: "2017-12-15",
        __typename: "SinglePeriodPerformance"
      },
      {
        cumulativeReturn: 0.16790439177237815,
        endDate: "2017-12-19",
        periodReturn: -0.000979037691208054,
        startDate: "2017-12-18",
        __typename: "SinglePeriodPerformance"
      },
      {
        cumulativeReturn: 0.16673853521286075,
        endDate: "2017-12-20",
        periodReturn: -0.0009982465754309114,
        startDate: "2017-12-19",
        __typename: "SinglePeriodPerformance"
      },
      {
        cumulativeReturn: 0.16697176620405463,
        endDate: "2017-12-21",
        periodReturn: 0.00019989996400631303,
        startDate: "2017-12-20",
        __typename: "SinglePeriodPerformance"
      },
      {
        cumulativeReturn: 0.16756255915484863,
        endDate: "2017-12-22",
        periodReturn: 0.0005062615633930458,
        startDate: "2017-12-21",
        __typename: "SinglePeriodPerformance"
      },
      {
        cumulativeReturn: 0.16756255915484863,
        endDate: "2017-12-25",
        periodReturn: 0,
        startDate: "2017-12-22",
        __typename: "SinglePeriodPerformance"
      },
      {
        cumulativeReturn: 0.16879595328235353,
        endDate: "2017-12-26",
        periodReturn: 0.00105638376105313,
        startDate: "2017-12-25",
        __typename: "SinglePeriodPerformance"
      },
      {
        cumulativeReturn: 0.17007217361532945,
        endDate: "2017-12-27",
        periodReturn: 0.0010919102940011697,
        startDate: "2017-12-26",
        __typename: "SinglePeriodPerformance"
      },
      {
        cumulativeReturn: 0.1707253881829347,
        endDate: "2017-12-28",
        periodReturn: 0.0005582686114026424,
        startDate: "2017-12-27",
        __typename: "SinglePeriodPerformance"
      },
      {
        cumulativeReturn: 0.17177082587057746,
        endDate: "2017-12-29",
        periodReturn: 0.00089298284482003,
        startDate: "2017-12-28",
        __typename: "SinglePeriodPerformance"
      },
      {
        cumulativeReturn: 0.17177082587057746,
        endDate: "2018-01-01",
        periodReturn: 0,
        startDate: "2017-12-29",
        __typename: "SinglePeriodPerformance"
      },
      {
        cumulativeReturn: 0.17190472474579033,
        endDate: "2018-01-02",
        periodReturn: 0.00011427053162322457,
        startDate: "2018-01-01",
        __typename: "SinglePeriodPerformance"
      },
      {
        cumulativeReturn: 0.17296656564735424,
        endDate: "2018-01-03",
        periodReturn: 0.0009060812531446442,
        startDate: "2018-01-02",
        __typename: "SinglePeriodPerformance"
      },
      {
        cumulativeReturn: 0.17333584529118617,
        endDate: "2018-01-04",
        periodReturn: 0.00031482537921103933,
        startDate: "2018-01-03",
        __typename: "SinglePeriodPerformance"
      },
      {
        cumulativeReturn: 0.17372116924778425,
        endDate: "2018-01-05",
        periodReturn: 0.0003284003963098337,
        startDate: "2018-01-04",
        __typename: "SinglePeriodPerformance"
      },
      {
        cumulativeReturn: 0.17395902359888038,
        endDate: "2018-01-08",
        periodReturn: 0.00020264979224016174,
        startDate: "2018-01-05",
        __typename: "SinglePeriodPerformance"
      },
      {
        cumulativeReturn: 0.1729235963722282,
        endDate: "2018-01-09",
        periodReturn: -0.0008819960542388179,
        startDate: "2018-01-08",
        __typename: "SinglePeriodPerformance"
      },
      {
        cumulativeReturn: 0.17111530970116018,
        endDate: "2018-01-10",
        periodReturn: -0.0015416917833871566,
        startDate: "2018-01-09",
        __typename: "SinglePeriodPerformance"
      },
      {
        cumulativeReturn: 0.17203404767693287,
        endDate: "2018-01-11",
        periodReturn: 0.0007844983053011258,
        startDate: "2018-01-10",
        __typename: "SinglePeriodPerformance"
      },
      {
        cumulativeReturn: 0.17250824945300547,
        endDate: "2018-01-12",
        periodReturn: 0.00040459727003024553,
        startDate: "2018-01-11",
        __typename: "SinglePeriodPerformance"
      },
      {
        cumulativeReturn: 0.17250824945300547,
        endDate: "2018-01-15",
        periodReturn: 0,
        startDate: "2018-01-12",
        __typename: "SinglePeriodPerformance"
      },
      {
        cumulativeReturn: 0.17368868004529703,
        endDate: "2018-01-16",
        periodReturn: 0.0010067567480589196,
        startDate: "2018-01-15",
        __typename: "SinglePeriodPerformance"
      },
      {
        cumulativeReturn: 0.17349149537425923,
        endDate: "2018-01-17",
        periodReturn: -0.00016800423689018772,
        startDate: "2018-01-16",
        __typename: "SinglePeriodPerformance"
      },
      {
        cumulativeReturn: 0.17303969192319735,
        endDate: "2018-01-18",
        periodReturn: -0.00038500786144831647,
        startDate: "2018-01-17",
        __typename: "SinglePeriodPerformance"
      },
      {
        cumulativeReturn: 0.17269275338608558,
        endDate: "2018-01-19",
        periodReturn: -0.00029576027094431505,
        startDate: "2018-01-18",
        __typename: "SinglePeriodPerformance"
      },
      {
        cumulativeReturn: 0.17327060646083492,
        endDate: "2018-01-22",
        periodReturn: 0.0004927574363198412,
        startDate: "2018-01-19",
        __typename: "SinglePeriodPerformance"
      },
      {
        cumulativeReturn: 0.1738665009011069,
        endDate: "2018-01-23",
        periodReturn: 0.0005078917318737637,
        startDate: "2018-01-22",
        __typename: "SinglePeriodPerformance"
      },
      {
        cumulativeReturn: 0.17320960386257278,
        endDate: "2018-01-24",
        periodReturn: -0.0005596011454709337,
        startDate: "2018-01-23",
        __typename: "SinglePeriodPerformance"
      },
      {
        cumulativeReturn: 0.1736840518234013,
        endDate: "2018-01-25",
        periodReturn: 0.00040440170219064323,
        startDate: "2018-01-24",
        __typename: "SinglePeriodPerformance"
      },
      {
        cumulativeReturn: 0.17326434369944765,
        endDate: "2018-01-26",
        periodReturn: -0.0003575988983590153,
        startDate: "2018-01-25",
        __typename: "SinglePeriodPerformance"
      },
      {
        cumulativeReturn: 0.17204165111006886,
        endDate: "2018-01-29",
        periodReturn: -0.0010421288228392859,
        startDate: "2018-01-26",
        __typename: "SinglePeriodPerformance"
      },
      {
        cumulativeReturn: 0.17085463904549636,
        endDate: "2018-01-30",
        periodReturn: -0.001012772936395493,
        startDate: "2018-01-29",
        __typename: "SinglePeriodPerformance"
      },
      {
        cumulativeReturn: 0.17131890029334862,
        endDate: "2018-01-31",
        periodReturn: 0.0003965148468223259,
        startDate: "2018-01-30",
        __typename: "SinglePeriodPerformance"
      },
      {
        cumulativeReturn: 0.1703591147278225,
        endDate: "2018-02-01",
        periodReturn: -0.0008194058554726467,
        startDate: "2018-01-31",
        __typename: "SinglePeriodPerformance"
      },
      {
        cumulativeReturn: 0.16886431285283732,
        endDate: "2018-02-02",
        periodReturn: -0.0012772164168882258,
        startDate: "2018-02-01",
        __typename: "SinglePeriodPerformance"
      },
      {
        cumulativeReturn: 0.16816248340902984,
        endDate: "2018-02-05",
        periodReturn: -0.0006004370533773939,
        startDate: "2018-02-02",
        __typename: "SinglePeriodPerformance"
      },
      {
        cumulativeReturn: 0.16860805720717398,
        endDate: "2018-02-06",
        periodReturn: 0.00038143135434706244,
        startDate: "2018-02-05",
        __typename: "SinglePeriodPerformance"
      },
      {
        cumulativeReturn: 0.16893058408959272,
        endDate: "2018-02-07",
        periodReturn: 0.0002759923487002432,
        startDate: "2018-02-06",
        __typename: "SinglePeriodPerformance"
      },
      {
        cumulativeReturn: 0.16689023913954726,
        endDate: "2018-02-08",
        periodReturn: -0.0017454799949772155,
        startDate: "2018-02-07",
        __typename: "SinglePeriodPerformance"
      },
      {
        cumulativeReturn: 0.1645196565267748,
        endDate: "2018-02-09",
        periodReturn: -0.002031538642846577,
        startDate: "2018-02-08",
        __typename: "SinglePeriodPerformance"
      },
      {
        cumulativeReturn: 0.16444342151581037,
        endDate: "2018-02-12",
        periodReturn: -0.00006546476956162822,
        startDate: "2018-02-09",
        __typename: "SinglePeriodPerformance"
      },
      {
        cumulativeReturn: 0.1641633289521751,
        endDate: "2018-02-13",
        periodReturn: -0.00024053771824361544,
        startDate: "2018-02-12",
        __typename: "SinglePeriodPerformance"
      },
      {
        cumulativeReturn: 0.16210428416977263,
        endDate: "2018-02-14",
        periodReturn: -0.0017686906391869296,
        startDate: "2018-02-13",
        __typename: "SinglePeriodPerformance"
      },
      {
        cumulativeReturn: 0.163131168701647,
        endDate: "2018-02-15",
        periodReturn: 0.0008836423252738107,
        startDate: "2018-02-14",
        __typename: "SinglePeriodPerformance"
      },
      {
        cumulativeReturn: 0.16497811107032856,
        endDate: "2018-02-16",
        periodReturn: 0.0015879054902666488,
        startDate: "2018-02-15",
        __typename: "SinglePeriodPerformance"
      },
      {
        cumulativeReturn: 0.16497811107032856,
        endDate: "2018-02-19",
        periodReturn: 0,
        startDate: "2018-02-16",
        __typename: "SinglePeriodPerformance"
      },
      {
        cumulativeReturn: 0.16482775389817284,
        endDate: "2018-02-20",
        periodReturn: -0.00012906437531041477,
        startDate: "2018-02-19",
        __typename: "SinglePeriodPerformance"
      },
      {
        cumulativeReturn: 0.16415266506520942,
        endDate: "2018-02-21",
        periodReturn: -0.0005795610816312587,
        startDate: "2018-02-20",
        __typename: "SinglePeriodPerformance"
      },
      {
        cumulativeReturn: 0.16404621152382193,
        endDate: "2018-02-22",
        periodReturn: -0.00009144293921400732,
        startDate: "2018-02-21",
        __typename: "SinglePeriodPerformance"
      },
      {
        cumulativeReturn: 0.16509758531595575,
        endDate: "2018-02-23",
        periodReturn: 0.0009032062316130093,
        startDate: "2018-02-22",
        __typename: "SinglePeriodPerformance"
      },
      {
        cumulativeReturn: 0.16609111502145835,
        endDate: "2018-02-26",
        periodReturn: 0.0008527437684399685,
        startDate: "2018-02-23",
        __typename: "SinglePeriodPerformance"
      },
      {
        cumulativeReturn: 0.1651379538048139,
        endDate: "2018-02-27",
        periodReturn: -0.0008173985757768364,
        startDate: "2018-02-26",
        __typename: "SinglePeriodPerformance"
      },
      {
        cumulativeReturn: 0.16541123645596856,
        endDate: "2018-02-28",
        periodReturn: 0.00023454960870707036,
        startDate: "2018-02-27",
        __typename: "SinglePeriodPerformance"
      },
      {
        cumulativeReturn: 0.16638168187149427,
        endDate: "2018-03-01",
        periodReturn: 0.0008327064174161529,
        startDate: "2018-02-28",
        __typename: "SinglePeriodPerformance"
      },
      {
        cumulativeReturn: 0.16569909719392406,
        endDate: "2018-03-02",
        periodReturn: -0.0005852155329419765,
        startDate: "2018-03-01",
        __typename: "SinglePeriodPerformance"
      },
      {
        cumulativeReturn: 0.16563312235622085,
        endDate: "2018-03-05",
        periodReturn: -0.0000565967991757081,
        startDate: "2018-03-02",
        __typename: "SinglePeriodPerformance"
      },
      {
        cumulativeReturn: 0.16665875466198043,
        endDate: "2018-03-06",
        periodReturn: 0.0008798928977637537,
        startDate: "2018-03-05",
        __typename: "SinglePeriodPerformance"
      },
      {
        cumulativeReturn: 0.16652244694814367,
        endDate: "2018-03-07",
        periodReturn: -0.0001168359756372966,
        startDate: "2018-03-06",
        __typename: "SinglePeriodPerformance"
      },
      {
        cumulativeReturn: 0.16673300994731077,
        endDate: "2018-03-08",
        periodReturn: 0.00018050488416921335,
        startDate: "2018-03-07",
        __typename: "SinglePeriodPerformance"
      },
      {
        cumulativeReturn: 0.16690910729757813,
        endDate: "2018-03-09",
        periodReturn: 0.00015093200309418368,
        startDate: "2018-03-08",
        __typename: "SinglePeriodPerformance"
      },
      {
        cumulativeReturn: 0.16706119330627,
        endDate: "2018-03-12",
        periodReturn: 0.00013033235214350455,
        startDate: "2018-03-09",
        __typename: "SinglePeriodPerformance"
      },
      {
        cumulativeReturn: 0.167030711526458,
        endDate: "2018-03-13",
        periodReturn: -0.00002611840748956675,
        startDate: "2018-03-12",
        __typename: "SinglePeriodPerformance"
      },
      {
        cumulativeReturn: 0.16735888825840783,
        endDate: "2018-03-14",
        periodReturn: 0.0002812065944010166,
        startDate: "2018-03-13",
        __typename: "SinglePeriodPerformance"
      },
      {
        cumulativeReturn: 0.16693127451339418,
        endDate: "2018-03-15",
        periodReturn: -0.0003663087241761115,
        startDate: "2018-03-14",
        __typename: "SinglePeriodPerformance"
      },
      {
        cumulativeReturn: 0.16711500120717093,
        endDate: "2018-03-16",
        periodReturn: 0.00015744431380799873,
        startDate: "2018-03-15",
        __typename: "SinglePeriodPerformance"
      },
      {
        cumulativeReturn: 0.1662829392707461,
        endDate: "2018-03-19",
        periodReturn: -0.0007129219790374125,
        startDate: "2018-03-16",
        __typename: "SinglePeriodPerformance"
      },
      {
        cumulativeReturn: 0.16522418083377266,
        endDate: "2018-03-20",
        periodReturn: -0.0009078058173734808,
        startDate: "2018-03-19",
        __typename: "SinglePeriodPerformance"
      },
      {
        cumulativeReturn: 0.16499540024894466,
        endDate: "2018-03-21",
        periodReturn: -0.00019634040263776938,
        startDate: "2018-03-20",
        __typename: "SinglePeriodPerformance"
      },
      {
        cumulativeReturn: 0.165828448953786,
        endDate: "2018-03-22",
        periodReturn: 0.000715066089242298,
        startDate: "2018-03-21",
        __typename: "SinglePeriodPerformance"
      },
      {
        cumulativeReturn: 0.16551548783432368,
        endDate: "2018-03-23",
        periodReturn: -0.0002684452585997405,
        startDate: "2018-03-22",
        __typename: "SinglePeriodPerformance"
      },
      {
        cumulativeReturn: 0.16549547164737644,
        endDate: "2018-03-26",
        periodReturn: -0.000017173677360990272,
        startDate: "2018-03-23",
        __typename: "SinglePeriodPerformance"
      },
      {
        cumulativeReturn: 0.1663106302415449,
        endDate: "2018-03-27",
        periodReturn: 0.0006994094906403683,
        startDate: "2018-03-26",
        __typename: "SinglePeriodPerformance"
      },
      {
        cumulativeReturn: 0.1665634542624872,
        endDate: "2018-03-28",
        periodReturn: 0.00021677245699973892,
        startDate: "2018-03-27",
        __typename: "SinglePeriodPerformance"
      },
      {
        cumulativeReturn: 0.16808232413572832,
        endDate: "2018-03-29",
        periodReturn: 0.001302003648143844,
        startDate: "2018-03-28",
        __typename: "SinglePeriodPerformance"
      },
      {
        cumulativeReturn: 0.16808232413572832,
        endDate: "2018-03-30",
        periodReturn: 0,
        startDate: "2018-03-29",
        __typename: "SinglePeriodPerformance"
      },
      {
        cumulativeReturn: 0.1682832714580209,
        endDate: "2018-04-02",
        periodReturn: 0.00017203181500185738,
        startDate: "2018-03-30",
        __typename: "SinglePeriodPerformance"
      },
      {
        cumulativeReturn: 0.16824584689872202,
        endDate: "2018-04-03",
        periodReturn: -0.000032033805681455054,
        startDate: "2018-04-02",
        __typename: "SinglePeriodPerformance"
      },
      {
        cumulativeReturn: 0.16820819491214434,
        endDate: "2018-04-04",
        periodReturn: -0.000032229506039055744,
        startDate: "2018-04-03",
        __typename: "SinglePeriodPerformance"
      },
      {
        cumulativeReturn: 0.16942513632407885,
        endDate: "2018-04-05",
        periodReturn: 0.0010417162088356806,
        startDate: "2018-04-04",
        __typename: "SinglePeriodPerformance"
      },
      {
        cumulativeReturn: 0.1702714508534442,
        endDate: "2018-04-06",
        periodReturn: 0.0007237013324562288,
        startDate: "2018-04-05",
        __typename: "SinglePeriodPerformance"
      },
      {
        cumulativeReturn: 0.16926939908273986,
        endDate: "2018-04-09",
        periodReturn: -0.0008562558455763325,
        startDate: "2018-04-06",
        __typename: "SinglePeriodPerformance"
      },
      {
        cumulativeReturn: 0.16896172731428072,
        endDate: "2018-04-10",
        periodReturn: -0.00026313163476326593,
        startDate: "2018-04-09",
        __typename: "SinglePeriodPerformance"
      },
      {
        cumulativeReturn: 0.16939695987904924,
        endDate: "2018-04-11",
        periodReturn: 0.00037232405013668457,
        startDate: "2018-04-10",
        __typename: "SinglePeriodPerformance"
      },
      {
        cumulativeReturn: 0.16961803469502024,
        endDate: "2018-04-12",
        periodReturn: 0.0001890502742490142,
        startDate: "2018-04-11",
        __typename: "SinglePeriodPerformance"
      },
      {
        cumulativeReturn: 0.17023558497329838,
        endDate: "2018-04-13",
        periodReturn: 0.0005279931225062359,
        startDate: "2018-04-12",
        __typename: "SinglePeriodPerformance"
      },
      {
        cumulativeReturn: 0.17028970969246804,
        endDate: "2018-04-16",
        periodReturn: 0.00004625113085312438,
        startDate: "2018-04-13",
        __typename: "SinglePeriodPerformance"
      },
      {
        cumulativeReturn: 0.17060968077450966,
        endDate: "2018-04-17",
        periodReturn: 0.000273411856390594,
        startDate: "2018-04-16",
        __typename: "SinglePeriodPerformance"
      },
      {
        cumulativeReturn: 0.17056813532562476,
        endDate: "2018-04-18",
        periodReturn: -0.00003549043679308509,
        startDate: "2018-04-17",
        __typename: "SinglePeriodPerformance"
      },
      {
        cumulativeReturn: 0.1693670407438581,
        endDate: "2018-04-19",
        periodReturn: -0.0010260783166052797,
        startDate: "2018-04-18",
        __typename: "SinglePeriodPerformance"
      },
      {
        cumulativeReturn: 0.168674750147771,
        endDate: "2018-04-20",
        periodReturn: -0.0005920216424492064,
        startDate: "2018-04-19",
        __typename: "SinglePeriodPerformance"
      },
      {
        cumulativeReturn: 0.16772063282971916,
        endDate: "2018-04-23",
        periodReturn: -0.000816409628026247,
        startDate: "2018-04-20",
        __typename: "SinglePeriodPerformance"
      },
      {
        cumulativeReturn: 0.16708045778510527,
        endDate: "2018-04-24",
        periodReturn: -0.0005482261994998969,
        startDate: "2018-04-23",
        __typename: "SinglePeriodPerformance"
      },
      {
        cumulativeReturn: 0.16481734193960196,
        endDate: "2018-04-25",
        periodReturn: -0.001939125816396724,
        startDate: "2018-04-24",
        __typename: "SinglePeriodPerformance"
      },
      {
        cumulativeReturn: 0.16501344367780924,
        endDate: "2018-04-26",
        periodReturn: 0.00016835406818457383,
        startDate: "2018-04-25",
        __typename: "SinglePeriodPerformance"
      },
      {
        cumulativeReturn: 0.16574896057647037,
        endDate: "2018-04-27",
        periodReturn: 0.0006313376919832818,
        startDate: "2018-04-26",
        __typename: "SinglePeriodPerformance"
      },
      {
        cumulativeReturn: 0.16595568393866178,
        endDate: "2018-04-30",
        periodReturn: 0.00017733094275219487,
        startDate: "2018-04-27",
        __typename: "SinglePeriodPerformance"
      },
      {
        cumulativeReturn: 0.1651551321979856,
        endDate: "2018-05-01",
        periodReturn: -0.0006866056332190783,
        startDate: "2018-04-30",
        __typename: "SinglePeriodPerformance"
      },
      {
        cumulativeReturn: 0.16475937991659917,
        endDate: "2018-05-02",
        periodReturn: -0.00033965630022149456,
        startDate: "2018-05-01",
        __typename: "SinglePeriodPerformance"
      },
      {
        cumulativeReturn: 0.1642690292595066,
        endDate: "2018-05-03",
        periodReturn: -0.0004209888029644099,
        startDate: "2018-05-02",
        __typename: "SinglePeriodPerformance"
      },
      {
        cumulativeReturn: 0.16437542909207337,
        endDate: "2018-05-04",
        periodReturn: 0.00009138766890883846,
        startDate: "2018-05-03",
        __typename: "SinglePeriodPerformance"
      },
      {
        cumulativeReturn: 0.1645413521449859,
        endDate: "2018-05-07",
        periodReturn: 0.0001424996171911898,
        startDate: "2018-05-04",
        __typename: "SinglePeriodPerformance"
      },
      {
        cumulativeReturn: 0.16320742163711177,
        endDate: "2018-05-08",
        periodReturn: -0.0011454556812577417,
        startDate: "2018-05-07",
        __typename: "SinglePeriodPerformance"
      },
      {
        cumulativeReturn: 0.1619272553458988,
        endDate: "2018-05-09",
        periodReturn: -0.001100548592968307,
        startDate: "2018-05-08",
        __typename: "SinglePeriodPerformance"
      },
      {
        cumulativeReturn: 0.16372654603120318,
        endDate: "2018-05-10",
        periodReturn: 0.0015485398737537953,
        startDate: "2018-05-09",
        __typename: "SinglePeriodPerformance"
      },
      {
        cumulativeReturn: 0.16477047143359802,
        endDate: "2018-05-11",
        periodReturn: 0.0008970538705635312,
        startDate: "2018-05-10",
        __typename: "SinglePeriodPerformance"
      },
      {
        cumulativeReturn: 0.16485320648634794,
        endDate: "2018-05-14",
        periodReturn: 0.00007103120724561907,
        startDate: "2018-05-11",
        __typename: "SinglePeriodPerformance"
      },
      {
        cumulativeReturn: 0.16243803529835854,
        endDate: "2018-05-15",
        periodReturn: -0.002073369566689447,
        startDate: "2018-05-14",
        __typename: "SinglePeriodPerformance"
      },
      {
        cumulativeReturn: 0.1623479397049461,
        endDate: "2018-05-16",
        periodReturn: -0.00007750571701607843,
        startDate: "2018-05-15",
        __typename: "SinglePeriodPerformance"
      },
      {
        cumulativeReturn: 0.161731141969095,
        endDate: "2018-05-17",
        periodReturn: -0.0005306481086961039,
        startDate: "2018-05-16",
        __typename: "SinglePeriodPerformance"
      },
      {
        cumulativeReturn: 0.1621118202518117,
        endDate: "2018-05-18",
        periodReturn: 0.0003276819127628798,
        startDate: "2018-05-17",
        __typename: "SinglePeriodPerformance"
      },
      {
        cumulativeReturn: 0.1620938167387005,
        endDate: "2018-05-21",
        periodReturn: -0.000015492066079556317,
        startDate: "2018-05-18",
        __typename: "SinglePeriodPerformance"
      },
      {
        cumulativeReturn: 0.16304639382599095,
        endDate: "2018-05-22",
        periodReturn: 0.0008197075602413087,
        startDate: "2018-05-21",
        __typename: "SinglePeriodPerformance"
      },
      {
        cumulativeReturn: 0.16420594828497737,
        endDate: "2018-05-23",
        periodReturn: 0.000996997596262742,
        startDate: "2018-05-22",
        __typename: "SinglePeriodPerformance"
      },
      {
        cumulativeReturn: 0.16514826900568713,
        endDate: "2018-05-24",
        periodReturn: 0.0008094106735135211,
        startDate: "2018-05-23",
        __typename: "SinglePeriodPerformance"
      },
      {
        cumulativeReturn: 0.16688298958208225,
        endDate: "2018-05-25",
        periodReturn: 0.0014888410535730467,
        startDate: "2018-05-24",
        __typename: "SinglePeriodPerformance"
      },
      {
        cumulativeReturn: 0.16688298958208225,
        endDate: "2018-05-28",
        periodReturn: 0,
        startDate: "2018-05-25",
        __typename: "SinglePeriodPerformance"
      },
      {
        cumulativeReturn: 0.16885632283640595,
        endDate: "2018-05-29",
        periodReturn: 0.001691114937780122,
        startDate: "2018-05-28",
        __typename: "SinglePeriodPerformance"
      },
      {
        cumulativeReturn: 0.1679737671333621,
        endDate: "2018-05-30",
        periodReturn: -0.000755059185462865,
        startDate: "2018-05-29",
        __typename: "SinglePeriodPerformance"
      },
      {
        cumulativeReturn: 0.16710515893664724,
        endDate: "2018-05-31",
        periodReturn: -0.0007436881042684973,
        startDate: "2018-05-30",
        __typename: "SinglePeriodPerformance"
      },
      {
        cumulativeReturn: 0.16578035432168914,
        endDate: "2018-06-01",
        periodReturn: -0.001135120177315636,
        startDate: "2018-05-31",
        __typename: "SinglePeriodPerformance"
      },
      {
        cumulativeReturn: 0.16575814335358463,
        endDate: "2018-06-04",
        periodReturn: -0.00001905244673431894,
        startDate: "2018-06-01",
        __typename: "SinglePeriodPerformance"
      },
      {
        cumulativeReturn: 0.1663984026817409,
        endDate: "2018-06-05",
        periodReturn: 0.0005492214073790914,
        startDate: "2018-06-04",
        __typename: "SinglePeriodPerformance"
      },
      {
        cumulativeReturn: 0.16536488543072903,
        endDate: "2018-06-06",
        periodReturn: -0.0008860756741741103,
        startDate: "2018-06-05",
        __typename: "SinglePeriodPerformance"
      },
      {
        cumulativeReturn: 0.16521862159164513,
        endDate: "2018-06-07",
        periodReturn: -0.0001255090494938406,
        startDate: "2018-06-06",
        __typename: "SinglePeriodPerformance"
      },
      {
        cumulativeReturn: 0.16541719847863456,
        endDate: "2018-06-08",
        periodReturn: 0.00017042028277758456,
        startDate: "2018-06-07",
        __typename: "SinglePeriodPerformance"
      },
      {
        cumulativeReturn: 0.16535117179583358,
        endDate: "2018-06-11",
        periodReturn: -0.000056654975477730964,
        startDate: "2018-06-08",
        __typename: "SinglePeriodPerformance"
      },
      {
        cumulativeReturn: 0.16469384674177223,
        endDate: "2018-06-12",
        periodReturn: -0.0005640574875368866,
        startDate: "2018-06-11",
        __typename: "SinglePeriodPerformance"
      },
      {
        cumulativeReturn: 0.1637207924662536,
        endDate: "2018-06-13",
        periodReturn: -0.0008354592739033595,
        startDate: "2018-06-12",
        __typename: "SinglePeriodPerformance"
      },
      {
        cumulativeReturn: 0.16412822351081502,
        endDate: "2018-06-14",
        periodReturn: 0.0003501106512826054,
        startDate: "2018-06-13",
        __typename: "SinglePeriodPerformance"
      },
      {
        cumulativeReturn: 0.16401105305963104,
        endDate: "2018-06-15",
        periodReturn: -0.000100650812185018,
        startDate: "2018-06-14",
        __typename: "SinglePeriodPerformance"
      },
      {
        cumulativeReturn: 0.1630288573325589,
        endDate: "2018-06-18",
        periodReturn: -0.0008438027495448071,
        startDate: "2018-06-15",
        __typename: "SinglePeriodPerformance"
      },
      {
        cumulativeReturn: 0.16213173343068776,
        endDate: "2018-06-19",
        periodReturn: -0.0007713685659776215,
        startDate: "2018-06-18",
        __typename: "SinglePeriodPerformance"
      },
      {
        cumulativeReturn: 0.16288250313392805,
        endDate: "2018-06-20",
        periodReturn: 0.0006460280548607943,
        startDate: "2018-06-19",
        __typename: "SinglePeriodPerformance"
      },
      {
        cumulativeReturn: 0.1635498379467899,
        endDate: "2018-06-21",
        periodReturn: 0.0005738626310599056,
        startDate: "2018-06-20",
        __typename: "SinglePeriodPerformance"
      },
      {
        cumulativeReturn: 0.16444390310490276,
        endDate: "2018-06-22",
        periodReturn: 0.0007683943815336911,
        startDate: "2018-06-21",
        __typename: "SinglePeriodPerformance"
      },
      {
        cumulativeReturn: 0.16448369396670004,
        endDate: "2018-06-25",
        periodReturn: 0.000034171557505940415,
        startDate: "2018-06-22",
        __typename: "SinglePeriodPerformance"
      },
      {
        cumulativeReturn: 0.16363208986123245,
        endDate: "2018-06-26",
        periodReturn: -0.0007313147533793464,
        startDate: "2018-06-25",
        __typename: "SinglePeriodPerformance"
      },
      {
        cumulativeReturn: 0.1635440040675482,
        endDate: "2018-06-27",
        periodReturn: -0.00007569900697287873,
        startDate: "2018-06-26",
        __typename: "SinglePeriodPerformance"
      },
      {
        cumulativeReturn: 0.16240107145486027,
        endDate: "2018-06-28",
        periodReturn: -0.0009822856795208789,
        startDate: "2018-06-27",
        __typename: "SinglePeriodPerformance"
      },
      {
        cumulativeReturn: 0.16290633543071942,
        endDate: "2018-06-29",
        periodReturn: 0.0004346726687259222,
        startDate: "2018-06-28",
        __typename: "SinglePeriodPerformance"
      },
      {
        cumulativeReturn: 0.16217676545715776,
        endDate: "2018-07-02",
        periodReturn: -0.0006273677864962586,
        startDate: "2018-06-29",
        __typename: "SinglePeriodPerformance"
      },
      {
        cumulativeReturn: 0.16315741544822338,
        endDate: "2018-07-03",
        periodReturn: 0.0008438045056595142,
        startDate: "2018-07-02",
        __typename: "SinglePeriodPerformance"
      },
      {
        cumulativeReturn: 0.16315741544822338,
        endDate: "2018-07-04",
        periodReturn: 0,
        startDate: "2018-07-03",
        __typename: "SinglePeriodPerformance"
      },
      {
        cumulativeReturn: 0.16357781967146745,
        endDate: "2018-07-05",
        periodReturn: 0.00036143364402825264,
        startDate: "2018-07-04",
        __typename: "SinglePeriodPerformance"
      },
      {
        cumulativeReturn: 0.16490118753083594,
        endDate: "2018-07-06",
        periodReturn: 0.0011373264744270965,
        startDate: "2018-07-05",
        __typename: "SinglePeriodPerformance"
      },
      {
        cumulativeReturn: 0.16621519455188172,
        endDate: "2018-07-09",
        periodReturn: 0.0011279986964654667,
        startDate: "2018-07-06",
        __typename: "SinglePeriodPerformance"
      },
      {
        cumulativeReturn: 0.16640583379028717,
        endDate: "2018-07-10",
        periodReturn: 0.00016346831982310097,
        startDate: "2018-07-09",
        __typename: "SinglePeriodPerformance"
      },
      {
        cumulativeReturn: 0.16600343656414385,
        endDate: "2018-07-11",
        periodReturn: -0.00034498903767961976,
        startDate: "2018-07-10",
        __typename: "SinglePeriodPerformance"
      },
      {
        cumulativeReturn: 0.16652275670842642,
        endDate: "2018-07-12",
        periodReturn: 0.0004453847458742149,
        startDate: "2018-07-11",
        __typename: "SinglePeriodPerformance"
      },
      {
        cumulativeReturn: 0.1678337791954001,
        endDate: "2018-07-13",
        periodReturn: 0.001123872191463202,
        startDate: "2018-07-12",
        __typename: "SinglePeriodPerformance"
      },
      {
        cumulativeReturn: 0.16823302170813914,
        endDate: "2018-07-16",
        periodReturn: 0.0003418658715402918,
        startDate: "2018-07-13",
        __typename: "SinglePeriodPerformance"
      },
      {
        cumulativeReturn: 0.16806343982287553,
        endDate: "2018-07-17",
        periodReturn: -0.00014516100992896646,
        startDate: "2018-07-16",
        __typename: "SinglePeriodPerformance"
      },
      {
        cumulativeReturn: 0.16824979386232553,
        endDate: "2018-07-18",
        periodReturn: 0.000159541025852461,
        startDate: "2018-07-17",
        __typename: "SinglePeriodPerformance"
      },
      {
        cumulativeReturn: 0.1694186253465535,
        endDate: "2018-07-19",
        periodReturn: 0.001000497916086667,
        startDate: "2018-07-18",
        __typename: "SinglePeriodPerformance"
      },
      {
        cumulativeReturn: 0.16983131904549897,
        endDate: "2018-07-20",
        periodReturn: 0.0003529050162195808,
        startDate: "2018-07-19",
        __typename: "SinglePeriodPerformance"
      },
      {
        cumulativeReturn: 0.169486723205319,
        endDate: "2018-07-23",
        periodReturn: -0.00029456882763325055,
        startDate: "2018-07-20",
        __typename: "SinglePeriodPerformance"
      },
      {
        cumulativeReturn: 0.1691867774620568,
        endDate: "2018-07-24",
        periodReturn: -0.0002564763988427398,
        startDate: "2018-07-23",
        __typename: "SinglePeriodPerformance"
      },
      {
        cumulativeReturn: 0.169765392018995,
        endDate: "2018-07-25",
        periodReturn: 0.0004948863330410457,
        startDate: "2018-07-24",
        __typename: "SinglePeriodPerformance"
      },
      {
        cumulativeReturn: 0.1706899796879351,
        endDate: "2018-07-26",
        periodReturn: 0.0007904043624887409,
        startDate: "2018-07-25",
        __typename: "SinglePeriodPerformance"
      },
      {
        cumulativeReturn: 0.17181186313409413,
        endDate: "2018-07-27",
        periodReturn: 0.0009583096000002955,
        startDate: "2018-07-26",
        __typename: "SinglePeriodPerformance"
      },
      {
        cumulativeReturn: 0.17209288356414731,
        endDate: "2018-07-30",
        periodReturn: 0.00023981702088400869,
        startDate: "2018-07-27",
        __typename: "SinglePeriodPerformance"
      },
      {
        cumulativeReturn: 0.17247144011085824,
        endDate: "2018-07-31",
        periodReturn: 0.0003229748700117158,
        startDate: "2018-07-30",
        __typename: "SinglePeriodPerformance"
      },
      {
        cumulativeReturn: 0.17127932179471017,
        endDate: "2018-08-01",
        periodReturn: -0.0010167568056373155,
        startDate: "2018-07-31",
        __typename: "SinglePeriodPerformance"
      },
      {
        cumulativeReturn: 0.16988127170260903,
        endDate: "2018-08-02",
        periodReturn: -0.001193609471358991,
        startDate: "2018-08-01",
        __typename: "SinglePeriodPerformance"
      },
      {
        cumulativeReturn: 0.17042711597589122,
        endDate: "2018-08-03",
        periodReturn: 0.0004665809142219639,
        startDate: "2018-08-02",
        __typename: "SinglePeriodPerformance"
      },
      {
        cumulativeReturn: 0.170466804186711,
        endDate: "2018-08-06",
        periodReturn: 0.000033909168950551984,
        startDate: "2018-08-03",
        __typename: "SinglePeriodPerformance"
      },
      {
        cumulativeReturn: 0.16969626980343278,
        endDate: "2018-08-07",
        periodReturn: -0.0006583137433049622,
        startDate: "2018-08-06",
        __typename: "SinglePeriodPerformance"
      },
      {
        cumulativeReturn: 0.16856514062005767,
        endDate: "2018-08-08",
        periodReturn: -0.0009670281188168547,
        startDate: "2018-08-07",
        __typename: "SinglePeriodPerformance"
      },
      {
        cumulativeReturn: 0.16766241368746626,
        endDate: "2018-08-09",
        periodReturn: -0.0007725088668247944,
        startDate: "2018-08-08",
        __typename: "SinglePeriodPerformance"
      },
      {
        cumulativeReturn: 0.16593045985025734,
        endDate: "2018-08-10",
        periodReturn: -0.001483265896809464,
        startDate: "2018-08-09",
        __typename: "SinglePeriodPerformance"
      },
      {
        cumulativeReturn: 0.16190601106389635,
        endDate: "2018-08-13",
        periodReturn: -0.0034517056762354416,
        startDate: "2018-08-10",
        __typename: "SinglePeriodPerformance"
      },
      {
        cumulativeReturn: 0.162306621652188,
        endDate: "2018-08-14",
        periodReturn: 0.0003447874307189019,
        startDate: "2018-08-13",
        __typename: "SinglePeriodPerformance"
      },
      {
        cumulativeReturn: 0.16278368026963586,
        endDate: "2018-08-15",
        periodReturn: 0.00041044127991777385,
        startDate: "2018-08-14",
        __typename: "SinglePeriodPerformance"
      },
      {
        cumulativeReturn: 0.16450358337926185,
        endDate: "2018-08-16",
        periodReturn: 0.001479125600754281,
        startDate: "2018-08-15",
        __typename: "SinglePeriodPerformance"
      },
      {
        cumulativeReturn: 0.164983520863762,
        endDate: "2018-08-17",
        periodReturn: 0.0004121391220690746,
        startDate: "2018-08-16",
        __typename: "SinglePeriodPerformance"
      },
      {
        cumulativeReturn: 0.16547917434700388,
        endDate: "2018-08-20",
        periodReturn: 0.0004254596518880837,
        startDate: "2018-08-17",
        __typename: "SinglePeriodPerformance"
      },
      {
        cumulativeReturn: 0.16580713165168626,
        endDate: "2018-08-21",
        periodReturn: 0.0002813926768499573,
        startDate: "2018-08-20",
        __typename: "SinglePeriodPerformance"
      },
      {
        cumulativeReturn: 0.16637548855539053,
        endDate: "2018-08-22",
        periodReturn: 0.0004875222395484405,
        startDate: "2018-08-21",
        __typename: "SinglePeriodPerformance"
      },
      {
        cumulativeReturn: 0.16645576845274368,
        endDate: "2018-08-23",
        periodReturn: 0.00006882851889540376,
        startDate: "2018-08-22",
        __typename: "SinglePeriodPerformance"
      },
      {
        cumulativeReturn: 0.1667316814712112,
        endDate: "2018-08-24",
        periodReturn: 0.00023653963221725928,
        startDate: "2018-08-23",
        __typename: "SinglePeriodPerformance"
      },
      {
        cumulativeReturn: 0.16679218672088658,
        endDate: "2018-08-27",
        periodReturn: 0.00005185875264753734,
        startDate: "2018-08-24",
        __typename: "SinglePeriodPerformance"
      },
      {
        cumulativeReturn: 0.1669637828668924,
        endDate: "2018-08-28",
        periodReturn: 0.00014706658817115648,
        startDate: "2018-08-27",
        __typename: "SinglePeriodPerformance"
      },
      {
        cumulativeReturn: 0.16614431461960844,
        endDate: "2018-08-29",
        periodReturn: -0.0007022225190834952,
        startDate: "2018-08-28",
        __typename: "SinglePeriodPerformance"
      },
      {
        cumulativeReturn: 0.16527968636857682,
        endDate: "2018-08-30",
        periodReturn: -0.0007414418954772621,
        startDate: "2018-08-29",
        __typename: "SinglePeriodPerformance"
      },
      {
        cumulativeReturn: 0.16498970867813711,
        endDate: "2018-08-31",
        periodReturn: -0.000248848146785536,
        startDate: "2018-08-30",
        __typename: "SinglePeriodPerformance"
      },
      {
        cumulativeReturn: 0.16498970867813711,
        endDate: "2018-09-03",
        periodReturn: 0,
        startDate: "2018-08-31",
        __typename: "SinglePeriodPerformance"
      },
      {
        cumulativeReturn: 0.1632929571730215,
        endDate: "2018-09-04",
        periodReturn: -0.0014564519261210482,
        startDate: "2018-09-03",
        __typename: "SinglePeriodPerformance"
      },
      {
        cumulativeReturn: 0.16326171613964657,
        endDate: "2018-09-05",
        periodReturn: -0.00002685568857122141,
        startDate: "2018-09-04",
        __typename: "SinglePeriodPerformance"
      },
      {
        cumulativeReturn: 0.16449593425466236,
        endDate: "2018-09-06",
        periodReturn: 0.0010609977942982924,
        startDate: "2018-09-05",
        __typename: "SinglePeriodPerformance"
      },
      {
        cumulativeReturn: 0.16397841121434165,
        endDate: "2018-09-07",
        periodReturn: -0.00044441807403290917,
        startDate: "2018-09-06",
        __typename: "SinglePeriodPerformance"
      },
      {
        cumulativeReturn: 0.16414734910439455,
        endDate: "2018-09-10",
        periodReturn: 0.00014513833626574285,
        startDate: "2018-09-07",
        __typename: "SinglePeriodPerformance"
      },
      {
        cumulativeReturn: 0.16319764205153664,
        endDate: "2018-09-11",
        periodReturn: -0.0008157962594584621,
        startDate: "2018-09-10",
        __typename: "SinglePeriodPerformance"
      },
      {
        cumulativeReturn: 0.16408411442807758,
        endDate: "2018-09-12",
        periodReturn: 0.0007620995302031864,
        startDate: "2018-09-11",
        __typename: "SinglePeriodPerformance"
      },
      {
        cumulativeReturn: 0.1656435140042205,
        endDate: "2018-09-13",
        periodReturn: 0.0013395935541214408,
        startDate: "2018-09-12",
        __typename: "SinglePeriodPerformance"
      },
      {
        cumulativeReturn: 0.16692997109970809,
        endDate: "2018-09-14",
        periodReturn: 0.0011036453941809224,
        startDate: "2018-09-13",
        __typename: "SinglePeriodPerformance"
      },
      {
        cumulativeReturn: 0.1675447356465336,
        endDate: "2018-09-17",
        periodReturn: 0.0005268221419030498,
        startDate: "2018-09-14",
        __typename: "SinglePeriodPerformance"
      },
      {
        cumulativeReturn: 0.16687489383760434,
        endDate: "2018-09-18",
        periodReturn: -0.0005737183239992244,
        startDate: "2018-09-17",
        __typename: "SinglePeriodPerformance"
      },
      {
        cumulativeReturn: 0.16741503875308328,
        endDate: "2018-09-19",
        periodReturn: 0.0004628987377579431,
        startDate: "2018-09-18",
        __typename: "SinglePeriodPerformance"
      },
      {
        cumulativeReturn: 0.168761765420115,
        endDate: "2018-09-20",
        periodReturn: 0.0011535971546762067,
        startDate: "2018-09-19",
        __typename: "SinglePeriodPerformance"
      },
      {
        cumulativeReturn: 0.1702366093686496,
        endDate: "2018-09-21",
        periodReturn: 0.00126188586260311,
        startDate: "2018-09-20",
        __typename: "SinglePeriodPerformance"
      },
      {
        cumulativeReturn: 0.170773825358433,
        endDate: "2018-09-24",
        periodReturn: 0.0004590661285780932,
        startDate: "2018-09-21",
        __typename: "SinglePeriodPerformance"
      },
      {
        cumulativeReturn: 0.1705289931495506,
        endDate: "2018-09-25",
        periodReturn: -0.00020911998848926376,
        startDate: "2018-09-24",
        __typename: "SinglePeriodPerformance"
      },
      {
        cumulativeReturn: 0.17152549495061087,
        endDate: "2018-09-26",
        periodReturn: 0.0008513260302754687,
        startDate: "2018-09-25",
        __typename: "SinglePeriodPerformance"
      },
      {
        cumulativeReturn: 0.17337875591172458,
        endDate: "2018-09-27",
        periodReturn: 0.0015819211524643148,
        startDate: "2018-09-26",
        __typename: "SinglePeriodPerformance"
      },
      {
        cumulativeReturn: 0.17434598121828349,
        endDate: "2018-09-28",
        periodReturn: 0.000824307838952968,
        startDate: "2018-09-27",
        __typename: "SinglePeriodPerformance"
      },
      {
        cumulativeReturn: 0.17393891423572083,
        endDate: "2018-10-01",
        periodReturn: -0.0003466329251116046,
        startDate: "2018-09-28",
        __typename: "SinglePeriodPerformance"
      },
      {
        cumulativeReturn: 0.17470865755798948,
        endDate: "2018-10-02",
        periodReturn: 0.00065569282433222,
        startDate: "2018-10-01",
        __typename: "SinglePeriodPerformance"
      },
      {
        cumulativeReturn: 0.17330413805951683,
        endDate: "2018-10-03",
        periodReturn: -0.0011956322015983472,
        startDate: "2018-10-02",
        __typename: "SinglePeriodPerformance"
      },
      {
        cumulativeReturn: 0.17071684445720936,
        endDate: "2018-10-04",
        periodReturn: -0.002205134643594293,
        startDate: "2018-10-03",
        __typename: "SinglePeriodPerformance"
      },
      {
        cumulativeReturn: 0.1699054895583374,
        endDate: "2018-10-05",
        periodReturn: -0.000693041107859185,
        startDate: "2018-10-04",
        __typename: "SinglePeriodPerformance"
      },
      {
        cumulativeReturn: 0.17005394630516624,
        endDate: "2018-10-08",
        periodReturn: 0.00012689635885443725,
        startDate: "2018-10-05",
        __typename: "SinglePeriodPerformance"
      },
      {
        cumulativeReturn: 0.16919562374625396,
        endDate: "2018-10-09",
        periodReturn: -0.0007335752010604195,
        startDate: "2018-10-08",
        __typename: "SinglePeriodPerformance"
      },
      {
        cumulativeReturn: 0.16784356429253466,
        endDate: "2018-10-10",
        periodReturn: -0.0011564013979003876,
        startDate: "2018-10-09",
        __typename: "SinglePeriodPerformance"
      },
      {
        cumulativeReturn: 0.16805683185476283,
        endDate: "2018-10-11",
        periodReturn: 0.00018261654963822816,
        startDate: "2018-10-10",
        __typename: "SinglePeriodPerformance"
      },
      {
        cumulativeReturn: 0.16942642441902311,
        endDate: "2018-10-12",
        periodReturn: 0.0011725393207842754,
        startDate: "2018-10-11",
        __typename: "SinglePeriodPerformance"
      },
      {
        cumulativeReturn: 0.16980293905417154,
        endDate: "2018-10-15",
        periodReturn: 0.00032196521926161224,
        startDate: "2018-10-12",
        __typename: "SinglePeriodPerformance"
      },
      {
        cumulativeReturn: 0.1706084174032978,
        endDate: "2018-10-16",
        periodReturn: 0.0006885590061669069,
        startDate: "2018-10-15",
        __typename: "SinglePeriodPerformance"
      },
      {
        cumulativeReturn: 0.17087834159880733,
        endDate: "2018-10-17",
        periodReturn: 0.00023058453321933307,
        startDate: "2018-10-16",
        __typename: "SinglePeriodPerformance"
      },
      {
        cumulativeReturn: 0.17018306349516488,
        endDate: "2018-10-18",
        periodReturn: -0.0005938090055480014,
        startDate: "2018-10-17",
        __typename: "SinglePeriodPerformance"
      },
      {
        cumulativeReturn: 0.17003157597744978,
        endDate: "2018-10-19",
        periodReturn: -0.00012945625555609586,
        startDate: "2018-10-18",
        __typename: "SinglePeriodPerformance"
      },
      {
        cumulativeReturn: 0.17036378414995812,
        endDate: "2018-10-22",
        periodReturn: 0.0002839309462488485,
        startDate: "2018-10-19",
        __typename: "SinglePeriodPerformance"
      },
      {
        cumulativeReturn: 0.1706082907633768,
        endDate: "2018-10-23",
        periodReturn: 0.00020891505421636523,
        startDate: "2018-10-22",
        __typename: "SinglePeriodPerformance"
      },
      {
        cumulativeReturn: 0.17066313571567338,
        endDate: "2018-10-24",
        periodReturn: 0.00004685166911034596,
        startDate: "2018-10-23",
        __typename: "SinglePeriodPerformance"
      },
      {
        cumulativeReturn: 0.1701280406691632,
        endDate: "2018-10-25",
        periodReturn: -0.00045708712454075424,
        startDate: "2018-10-24",
        __typename: "SinglePeriodPerformance"
      },
      {
        cumulativeReturn: 0.17029997916182849,
        endDate: "2018-10-26",
        periodReturn: 0.0001469398960536932,
        startDate: "2018-10-25",
        __typename: "SinglePeriodPerformance"
      },
      {
        cumulativeReturn: 0.1700857810405183,
        endDate: "2018-10-29",
        periodReturn: -0.00018302839026246358,
        startDate: "2018-10-26",
        __typename: "SinglePeriodPerformance"
      },
      {
        cumulativeReturn: 0.16871635708110522,
        endDate: "2018-10-30",
        periodReturn: -0.0011703620209752932,
        startDate: "2018-10-29",
        __typename: "SinglePeriodPerformance"
      },
      {
        cumulativeReturn: 0.16755097262869634,
        endDate: "2018-10-31",
        periodReturn: -0.000997149090408366,
        startDate: "2018-10-30",
        __typename: "SinglePeriodPerformance"
      },
      {
        cumulativeReturn: 0.16789038976533632,
        endDate: "2018-11-01",
        periodReturn: 0.0002907086239462865,
        startDate: "2018-10-31",
        __typename: "SinglePeriodPerformance"
      },
      {
        cumulativeReturn: 0.16824304575167082,
        endDate: "2018-11-02",
        periodReturn: 0.0003019598323824073,
        startDate: "2018-11-01",
        __typename: "SinglePeriodPerformance"
      },
      {
        cumulativeReturn: 0.16865131428899915,
        endDate: "2018-11-05",
        periodReturn: 0.000349472259914593,
        startDate: "2018-11-02",
        __typename: "SinglePeriodPerformance"
      },
      {
        cumulativeReturn: 0.1692330679568479,
        endDate: "2018-11-06",
        periodReturn: 0.0004977991816171172,
        startDate: "2018-11-05",
        __typename: "SinglePeriodPerformance"
      },
      {
        cumulativeReturn: 0.17064300193272208,
        endDate: "2018-11-07",
        periodReturn: 0.00120586221388506,
        startDate: "2018-11-06",
        __typename: "SinglePeriodPerformance"
      },
      {
        cumulativeReturn: 0.17071234899587662,
        endDate: "2018-11-08",
        periodReturn: 0.00005923843822583322,
        startDate: "2018-11-07",
        __typename: "SinglePeriodPerformance"
      },
      {
        cumulativeReturn: 0.17068215683748633,
        endDate: "2018-11-09",
        periodReturn: -0.000025789561728118728,
        startDate: "2018-11-08",
        __typename: "SinglePeriodPerformance"
      },
      {
        cumulativeReturn: 0.1714828967899713,
        endDate: "2018-11-12",
        periodReturn: 0.0006839943257083505,
        startDate: "2018-11-09",
        __typename: "SinglePeriodPerformance"
      },
      {
        cumulativeReturn: 0.17056934194092443,
        endDate: "2018-11-13",
        periodReturn: -0.0007798277307762508,
        startDate: "2018-11-12",
        __typename: "SinglePeriodPerformance"
      },
      {
        cumulativeReturn: 0.1698298322337639,
        endDate: "2018-11-14",
        periodReturn: -0.0006317521574024866,
        startDate: "2018-11-13",
        __typename: "SinglePeriodPerformance"
      },
      {
        cumulativeReturn: 0.16902672472144054,
        endDate: "2018-11-15",
        periodReturn: -0.0006865165259034374,
        startDate: "2018-11-14",
        __typename: "SinglePeriodPerformance"
      },
      {
        cumulativeReturn: 0.16933169801032566,
        endDate: "2018-11-16",
        periodReturn: 0.0002608779443924233,
        startDate: "2018-11-15",
        __typename: "SinglePeriodPerformance"
      },
      {
        cumulativeReturn: 0.16863207229689814,
        endDate: "2018-11-19",
        periodReturn: -0.0005983124502807823,
        startDate: "2018-11-16",
        __typename: "SinglePeriodPerformance"
      },
      {
        cumulativeReturn: 0.16580710567094403,
        endDate: "2018-11-20",
        periodReturn: -0.0024173276542048543,
        startDate: "2018-11-19",
        __typename: "SinglePeriodPerformance"
      },
      {
        cumulativeReturn: 0.1657512075300962,
        endDate: "2018-11-21",
        periodReturn: -0.00004794801865246279,
        startDate: "2018-11-20",
        __typename: "SinglePeriodPerformance"
      },
      {
        cumulativeReturn: 0.1657512075300962,
        endDate: "2018-11-22",
        periodReturn: 0,
        startDate: "2018-11-21",
        __typename: "SinglePeriodPerformance"
      },
      {
        cumulativeReturn: 0.16622410299626322,
        endDate: "2018-11-23",
        periodReturn: 0.00040565728185595586,
        startDate: "2018-11-22",
        __typename: "SinglePeriodPerformance"
      },
      {
        cumulativeReturn: 0.16564171625974233,
        endDate: "2018-11-26",
        periodReturn: -0.0004993780655233596,
        startDate: "2018-11-23",
        __typename: "SinglePeriodPerformance"
      },
      {
        cumulativeReturn: 0.16438689409005058,
        endDate: "2018-11-27",
        periodReturn: -0.0010765076027978158,
        startDate: "2018-11-26",
        __typename: "SinglePeriodPerformance"
      },
      {
        cumulativeReturn: 0.16488813720035056,
        endDate: "2018-11-28",
        periodReturn: 0.00043047814505994245,
        startDate: "2018-11-27",
        __typename: "SinglePeriodPerformance"
      },
      {
        cumulativeReturn: 0.1664123175290635,
        endDate: "2018-11-29",
        periodReturn: 0.0013084349303927303,
        startDate: "2018-11-28",
        __typename: "SinglePeriodPerformance"
      },
      {
        cumulativeReturn: 0.16691804278413347,
        endDate: "2018-11-30",
        periodReturn: 0.0004335733149161894,
        startDate: "2018-11-29",
        __typename: "SinglePeriodPerformance"
      },
      {
        cumulativeReturn: 0.16894420777425223,
        endDate: "2018-12-03",
        periodReturn: 0.0017363387280263046,
        startDate: "2018-11-30",
        __typename: "SinglePeriodPerformance"
      },
      {
        cumulativeReturn: 0.17003954705003,
        endDate: "2018-12-04",
        periodReturn: 0.0009370329811236264,
        startDate: "2018-12-03",
        __typename: "SinglePeriodPerformance"
      },
      {
        cumulativeReturn: 0.17003954705003,
        endDate: "2018-12-05",
        periodReturn: 0,
        startDate: "2018-12-04",
        __typename: "SinglePeriodPerformance"
      },
      {
        cumulativeReturn: 0.16872874095630785,
        endDate: "2018-12-06",
        periodReturn: -0.0011203092211943615,
        startDate: "2018-12-05",
        __typename: "SinglePeriodPerformance"
      },
      {
        cumulativeReturn: 0.16928472443008213,
        endDate: "2018-12-07",
        periodReturn: 0.000475716438118452,
        startDate: "2018-12-06",
        __typename: "SinglePeriodPerformance"
      },
      {
        cumulativeReturn: 0.16797317658198074,
        endDate: "2018-12-10",
        periodReturn: -0.0011216667939802074,
        startDate: "2018-12-07",
        __typename: "SinglePeriodPerformance"
      },
      {
        cumulativeReturn: 0.16693703579042674,
        endDate: "2018-12-11",
        periodReturn: -0.0008871272151867431,
        startDate: "2018-12-10",
        __typename: "SinglePeriodPerformance"
      },
      {
        cumulativeReturn: 0.16563595093938255,
        endDate: "2018-12-12",
        periodReturn: -0.001114957200893846,
        startDate: "2018-12-11",
        __typename: "SinglePeriodPerformance"
      },
      {
        cumulativeReturn: 0.16626148019707832,
        endDate: "2018-12-13",
        periodReturn: 0.0005366420426477514,
        startDate: "2018-12-12",
        __typename: "SinglePeriodPerformance"
      },
      {
        cumulativeReturn: 0.16607079774191025,
        endDate: "2018-12-14",
        periodReturn: -0.00016349888803308664,
        startDate: "2018-12-13",
        __typename: "SinglePeriodPerformance"
      },
      {
        cumulativeReturn: 0.1659339036964138,
        endDate: "2018-12-17",
        periodReturn: -0.0001173977135535584,
        startDate: "2018-12-14",
        __typename: "SinglePeriodPerformance"
      },
      {
        cumulativeReturn: 0.1658260566557943,
        endDate: "2018-12-18",
        periodReturn: -0.00009249841717240335,
        startDate: "2018-12-17",
        __typename: "SinglePeriodPerformance"
      },
      {
        cumulativeReturn: 0.16551655207776617,
        endDate: "2018-12-19",
        periodReturn: -0.00026548092338569095,
        startDate: "2018-12-18",
        __typename: "SinglePeriodPerformance"
      },
      {
        cumulativeReturn: 0.16440588442371928,
        endDate: "2018-12-20",
        periodReturn: -0.00095294026675724,
        startDate: "2018-12-19",
        __typename: "SinglePeriodPerformance"
      },
      {
        cumulativeReturn: 0.16403294261387602,
        endDate: "2018-12-21",
        periodReturn: -0.00032028506110455226,
        startDate: "2018-12-20",
        __typename: "SinglePeriodPerformance"
      },
      {
        cumulativeReturn: 0.16413774364236944,
        endDate: "2018-12-24",
        periodReturn: 0.00009003269981191837,
        startDate: "2018-12-21",
        __typename: "SinglePeriodPerformance"
      },
      {
        cumulativeReturn: 0.16413774364236944,
        endDate: "2018-12-25",
        periodReturn: 0,
        startDate: "2018-12-24",
        __typename: "SinglePeriodPerformance"
      },
      {
        cumulativeReturn: 0.1632898451824476,
        endDate: "2018-12-26",
        periodReturn: -0.0007283489127917095,
        startDate: "2018-12-25",
        __typename: "SinglePeriodPerformance"
      },
      {
        cumulativeReturn: 0.16388278416918922,
        endDate: "2018-12-27",
        periodReturn: 0.0005097087275342741,
        startDate: "2018-12-26",
        __typename: "SinglePeriodPerformance"
      },
      {
        cumulativeReturn: 0.16435604441559026,
        endDate: "2018-12-28",
        periodReturn: 0.0004066219148854386,
        startDate: "2018-12-27",
        __typename: "SinglePeriodPerformance"
      },
      {
        cumulativeReturn: 0.16492711251976222,
        endDate: "2018-12-31",
        periodReturn: 0.0004904583154877451,
        startDate: "2018-12-28",
        __typename: "SinglePeriodPerformance"
      },
      {
        cumulativeReturn: 0.16492711251976222,
        endDate: "2019-01-01",
        periodReturn: 0,
        startDate: "2018-12-31",
        __typename: "SinglePeriodPerformance"
      },
      {
        cumulativeReturn: 0.16555657651263966,
        endDate: "2019-01-02",
        periodReturn: 0.0005403462466555516,
        startDate: "2019-01-01",
        __typename: "SinglePeriodPerformance"
      },
      {
        cumulativeReturn: 0.16830298910784647,
        endDate: "2019-01-03",
        periodReturn: 0.0023563099814719237,
        startDate: "2019-01-02",
        __typename: "SinglePeriodPerformance"
      },
      {
        cumulativeReturn: 0.17265098004441626,
        endDate: "2019-01-04",
        periodReturn: 0.0037216295576629906,
        startDate: "2019-01-03",
        __typename: "SinglePeriodPerformance"
      },
      {
        cumulativeReturn: 0.17620870929982035,
        endDate: "2019-01-07",
        periodReturn: 0.0030339199949069766,
        startDate: "2019-01-04",
        __typename: "SinglePeriodPerformance"
      },
      {
        cumulativeReturn: 0.1776144694954025,
        endDate: "2019-01-08",
        periodReturn: 0.0011951622058800754,
        startDate: "2019-01-07",
        __typename: "SinglePeriodPerformance"
      },
      {
        cumulativeReturn: 0.17876424719191641,
        endDate: "2019-01-09",
        periodReturn: 0.0009763617264371796,
        startDate: "2019-01-08",
        __typename: "SinglePeriodPerformance"
      },
      {
        cumulativeReturn: 0.17840084117869348,
        endDate: "2019-01-10",
        periodReturn: -0.0003082940580262458,
        startDate: "2019-01-09",
        __typename: "SinglePeriodPerformance"
      },
      {
        cumulativeReturn: 0.1796267731162544,
        endDate: "2019-01-11",
        periodReturn: 0.0010403352532697985,
        startDate: "2019-01-10",
        __typename: "SinglePeriodPerformance"
      },
      {
        cumulativeReturn: 0.17898745526755988,
        endDate: "2019-01-14",
        periodReturn: -0.0005419662076722809,
        startDate: "2019-01-11",
        __typename: "SinglePeriodPerformance"
      },
      {
        cumulativeReturn: 0.1798295414714164,
        endDate: "2019-01-15",
        periodReturn: 0.0007142452619781171,
        startDate: "2019-01-14",
        __typename: "SinglePeriodPerformance"
      },
      {
        cumulativeReturn: 0.18139912965515403,
        endDate: "2019-01-16",
        periodReturn: 0.0013303516555282393,
        startDate: "2019-01-15",
        __typename: "SinglePeriodPerformance"
      },
      {
        cumulativeReturn: 0.1815842140996986,
        endDate: "2019-01-17",
        periodReturn: 0.0001566654654626429,
        startDate: "2019-01-16",
        __typename: "SinglePeriodPerformance"
      },
      {
        cumulativeReturn: 0.18335932932480214,
        endDate: "2019-01-18",
        periodReturn: 0.0015023179930141596,
        startDate: "2019-01-17",
        __typename: "SinglePeriodPerformance"
      },
      {
        cumulativeReturn: 0.18335932932480214,
        endDate: "2019-01-21",
        periodReturn: 0,
        startDate: "2019-01-18",
        __typename: "SinglePeriodPerformance"
      },
      {
        cumulativeReturn: 0.18348916535027304,
        endDate: "2019-01-22",
        periodReturn: 0.0001097181745675999,
        startDate: "2019-01-21",
        __typename: "SinglePeriodPerformance"
      },
      {
        cumulativeReturn: 0.1842308297419195,
        endDate: "2019-01-23",
        periodReturn: 0.0006266761144592735,
        startDate: "2019-01-22",
        __typename: "SinglePeriodPerformance"
      },
      {
        cumulativeReturn: 0.18491527337363411,
        endDate: "2019-01-24",
        periodReturn: 0.00057796471306513,
        startDate: "2019-01-23",
        __typename: "SinglePeriodPerformance"
      },
      {
        cumulativeReturn: 0.18613963432605396,
        endDate: "2019-01-25",
        periodReturn: 0.0010332898730673714,
        startDate: "2019-01-24",
        __typename: "SinglePeriodPerformance"
      },
      {
        cumulativeReturn: 0.18628442017676483,
        endDate: "2019-01-28",
        periodReturn: 0.0001220647607760075,
        startDate: "2019-01-25",
        __typename: "SinglePeriodPerformance"
      },
      {
        cumulativeReturn: 0.18637985037730798,
        endDate: "2019-01-29",
        periodReturn: 0.00008044462096940033,
        startDate: "2019-01-28",
        __typename: "SinglePeriodPerformance"
      },
      {
        cumulativeReturn: 0.18747852623104655,
        endDate: "2019-01-30",
        periodReturn: 0.0009260742698799666,
        startDate: "2019-01-29",
        __typename: "SinglePeriodPerformance"
      },
      {
        cumulativeReturn: 0.19142117234734335,
        endDate: "2019-01-31",
        periodReturn: 0.0033201830847505594,
        startDate: "2019-01-30",
        __typename: "SinglePeriodPerformance"
      },
      {
        cumulativeReturn: 0.19215577360945835,
        endDate: "2019-02-01",
        periodReturn: 0.0006165756318293968,
        startDate: "2019-01-31",
        __typename: "SinglePeriodPerformance"
      },
      {
        cumulativeReturn: 0.19210078563981492,
        endDate: "2019-02-04",
        periodReturn: -0.00004612481930691673,
        startDate: "2019-02-01",
        __typename: "SinglePeriodPerformance"
      },
      {
        cumulativeReturn: 0.19397533247041854,
        endDate: "2019-02-05",
        periodReturn: 0.001572473446192291,
        startDate: "2019-02-04",
        __typename: "SinglePeriodPerformance"
      },
      {
        cumulativeReturn: 0.19481762858334584,
        endDate: "2019-02-06",
        periodReturn: 0.0007054552049954799,
        startDate: "2019-02-05",
        __typename: "SinglePeriodPerformance"
      },
      {
        cumulativeReturn: 0.1947024613843542,
        endDate: "2019-02-07",
        periodReturn: -0.0000963889352118946,
        startDate: "2019-02-06",
        __typename: "SinglePeriodPerformance"
      },
      {
        cumulativeReturn: 0.19573169708939386,
        endDate: "2019-02-08",
        periodReturn: 0.0008614996104110805,
        startDate: "2019-02-07",
        __typename: "SinglePeriodPerformance"
      },
      {
        cumulativeReturn: 0.19549460739200275,
        endDate: "2019-02-11",
        periodReturn: -0.00019828001379259918,
        startDate: "2019-02-08",
        __typename: "SinglePeriodPerformance"
      },
      {
        cumulativeReturn: 0.1959477754641865,
        endDate: "2019-02-12",
        periodReturn: 0.00037906325079310315,
        startDate: "2019-02-11",
        __typename: "SinglePeriodPerformance"
      },
      {
        cumulativeReturn: 0.19625004376957822,
        endDate: "2019-02-13",
        periodReturn: 0.0002527437331237133,
        startDate: "2019-02-12",
        __typename: "SinglePeriodPerformance"
      },
      {
        cumulativeReturn: 0.19677914721337375,
        endDate: "2019-02-14",
        periodReturn: 0.0004423017132173447,
        startDate: "2019-02-13",
        __typename: "SinglePeriodPerformance"
      },
      {
        cumulativeReturn: 0.19773692857712444,
        endDate: "2019-02-15",
        periodReturn: 0.0008002991746478395,
        startDate: "2019-02-14",
        __typename: "SinglePeriodPerformance"
      },
      {
        cumulativeReturn: 0.19773692857712444,
        endDate: "2019-02-18",
        periodReturn: 0,
        startDate: "2019-02-15",
        __typename: "SinglePeriodPerformance"
      },
      {
        cumulativeReturn: 0.19921106709814485,
        endDate: "2019-02-19",
        periodReturn: 0.0012307698676133213,
        startDate: "2019-02-18",
        __typename: "SinglePeriodPerformance"
      },
      {
        cumulativeReturn: 0.2001148099474397,
        endDate: "2019-02-20",
        periodReturn: 0.0007536145004747436,
        startDate: "2019-02-19",
        __typename: "SinglePeriodPerformance"
      },
      {
        cumulativeReturn: 0.20014547066586186,
        endDate: "2019-02-21",
        periodReturn: 0.000025548154366598822,
        startDate: "2019-02-20",
        __typename: "SinglePeriodPerformance"
      },
      {
        cumulativeReturn: 0.20163975038385828,
        endDate: "2019-02-22",
        periodReturn: 0.0012450821625543584,
        startDate: "2019-02-21",
        __typename: "SinglePeriodPerformance"
      },
      {
        cumulativeReturn: 0.2027692747342269,
        endDate: "2019-02-25",
        periodReturn: 0.0009399858401885756,
        startDate: "2019-02-22",
        __typename: "SinglePeriodPerformance"
      },
      {
        cumulativeReturn: 0.20437228645364702,
        endDate: "2019-02-26",
        periodReturn: 0.0013327674335332574,
        startDate: "2019-02-25",
        __typename: "SinglePeriodPerformance"
      },
      {
        cumulativeReturn: 0.2048727851423413,
        endDate: "2019-02-27",
        periodReturn: 0.00041556808830941843,
        startDate: "2019-02-26",
        __typename: "SinglePeriodPerformance"
      },
      {
        cumulativeReturn: 0.20501929293958043,
        endDate: "2019-02-28",
        periodReturn: 0.00012159607142410611,
        startDate: "2019-02-27",
        __typename: "SinglePeriodPerformance"
      },
      {
        cumulativeReturn: 0.2041840423106036,
        endDate: "2019-03-01",
        periodReturn: -0.0006931429512131624,
        startDate: "2019-02-28",
        __typename: "SinglePeriodPerformance"
      },
      {
        cumulativeReturn: 0.2040891995019931,
        endDate: "2019-03-04",
        periodReturn: -0.00007876105751129194,
        startDate: "2019-03-01",
        __typename: "SinglePeriodPerformance"
      },
      {
        cumulativeReturn: 0.20386417521339584,
        endDate: "2019-03-05",
        periodReturn: -0.00018688340422827687,
        startDate: "2019-03-04",
        __typename: "SinglePeriodPerformance"
      },
      {
        cumulativeReturn: 0.20430627827030534,
        endDate: "2019-03-06",
        periodReturn: 0.0003672366584304291,
        startDate: "2019-03-05",
        __typename: "SinglePeriodPerformance"
      },
      {
        cumulativeReturn: 0.20437689572745543,
        endDate: "2019-03-07",
        periodReturn: 0.00005863745662064943,
        startDate: "2019-03-06",
        __typename: "SinglePeriodPerformance"
      },
      {
        cumulativeReturn: 0.20347594517577017,
        endDate: "2019-03-08",
        periodReturn: -0.0007480636293184181,
        startDate: "2019-03-07",
        __typename: "SinglePeriodPerformance"
      },
      {
        cumulativeReturn: 0.2045740560921303,
        endDate: "2019-03-11",
        periodReturn: 0.0009124494101954219,
        startDate: "2019-03-08",
        __typename: "SinglePeriodPerformance"
      },
      {
        cumulativeReturn: 0.2058780065154069,
        endDate: "2019-03-12",
        periodReturn: 0.0010824991761044507,
        startDate: "2019-03-11",
        __typename: "SinglePeriodPerformance"
      },
      {
        cumulativeReturn: 0.20682730105000968,
        endDate: "2019-03-13",
        periodReturn: 0.000787222695391717,
        startDate: "2019-03-12",
        __typename: "SinglePeriodPerformance"
      },
      {
        cumulativeReturn: 0.2075682944162356,
        endDate: "2019-03-14",
        periodReturn: 0.0006140011628682528,
        startDate: "2019-03-13",
        __typename: "SinglePeriodPerformance"
      },
      {
        cumulativeReturn: 0.20920678398895154,
        endDate: "2019-03-15",
        periodReturn: 0.0013568504409169893,
        startDate: "2019-03-14",
        __typename: "SinglePeriodPerformance"
      },
      {
        cumulativeReturn: 0.21020156097514153,
        endDate: "2019-03-18",
        periodReturn: 0.0008226690416904996,
        startDate: "2019-03-15",
        __typename: "SinglePeriodPerformance"
      },
      {
        cumulativeReturn: 0.2109314978245358,
        endDate: "2019-03-19",
        periodReturn: 0.000603153121704679,
        startDate: "2019-03-18",
        __typename: "SinglePeriodPerformance"
      },
      {
        cumulativeReturn: 0.21175064756790585,
        endDate: "2019-03-20",
        periodReturn: 0.0006764624958900084,
        startDate: "2019-03-19",
        __typename: "SinglePeriodPerformance"
      },
      {
        cumulativeReturn: 0.2135620220148664,
        endDate: "2019-03-21",
        periodReturn: 0.001494840915163579,
        startDate: "2019-03-20",
        __typename: "SinglePeriodPerformance"
      },
      {
        cumulativeReturn: 0.2143456038708984,
        endDate: "2019-03-22",
        periodReturn: 0.0006456875230249081,
        startDate: "2019-03-21",
        __typename: "SinglePeriodPerformance"
      },
      {
        cumulativeReturn: 0.2133539657256498,
        endDate: "2019-03-25",
        periodReturn: -0.0008166029029031797,
        startDate: "2019-03-22",
        __typename: "SinglePeriodPerformance"
      },
      {
        cumulativeReturn: 0.213760323225344,
        endDate: "2019-03-26",
        periodReturn: 0.0003349043322664766,
        startDate: "2019-03-25",
        __typename: "SinglePeriodPerformance"
      },
      {
        cumulativeReturn: 0.21363800643697894,
        endDate: "2019-03-27",
        periodReturn: -0.00010077507562608189,
        startDate: "2019-03-26",
        __typename: "SinglePeriodPerformance"
      },
      {
        cumulativeReturn: 0.21380708985707209,
        endDate: "2019-03-28",
        periodReturn: 0.00013931948340129395,
        startDate: "2019-03-27",
        __typename: "SinglePeriodPerformance"
      },
      {
        cumulativeReturn: 0.2149985421003533,
        endDate: "2019-03-29",
        periodReturn: 0.0009815828670282258,
        startDate: "2019-03-28",
        __typename: "SinglePeriodPerformance"
      },
      {
        cumulativeReturn: 0.21565846888223694,
        endDate: "2019-04-01",
        periodReturn: 0.0005431502664545559,
        startDate: "2019-03-29",
        __typename: "SinglePeriodPerformance"
      },
      {
        cumulativeReturn: 0.21640326315352976,
        endDate: "2019-04-02",
        periodReturn: 0.0006126673653477708,
        startDate: "2019-04-01",
        __typename: "SinglePeriodPerformance"
      },
      {
        cumulativeReturn: 0.21685600328956234,
        endDate: "2019-04-03",
        periodReturn: 0.00037219575920791173,
        startDate: "2019-04-02",
        __typename: "SinglePeriodPerformance"
      },
      {
        cumulativeReturn: 0.21739049692049384,
        endDate: "2019-04-04",
        periodReturn: 0.000439241479260159,
        startDate: "2019-04-03",
        __typename: "SinglePeriodPerformance"
      },
      {
        cumulativeReturn: 0.21871200449909622,
        endDate: "2019-04-05",
        periodReturn: 0.0010855248023911377,
        startDate: "2019-04-04",
        __typename: "SinglePeriodPerformance"
      },
      {
        cumulativeReturn: 0.21874280818521452,
        endDate: "2019-04-08",
        periodReturn: 0.00002527560736612676,
        startDate: "2019-04-05",
        __typename: "SinglePeriodPerformance"
      },
      {
        cumulativeReturn: 0.21944255552601466,
        endDate: "2019-04-09",
        periodReturn: 0.0005741550523214395,
        startDate: "2019-04-08",
        __typename: "SinglePeriodPerformance"
      },
      {
        cumulativeReturn: 0.2201765710561141,
        endDate: "2019-04-10",
        periodReturn: 0.0006019271074090825,
        startDate: "2019-04-09",
        __typename: "SinglePeriodPerformance"
      },
      {
        cumulativeReturn: 0.22067396615986112,
        endDate: "2019-04-11",
        periodReturn: 0.00040764190654501336,
        startDate: "2019-04-10",
        __typename: "SinglePeriodPerformance"
      },
      {
        cumulativeReturn: 0.22047985272705928,
        endDate: "2019-04-12",
        periodReturn: -0.00015902152268584103,
        startDate: "2019-04-11",
        __typename: "SinglePeriodPerformance"
      },
      {
        cumulativeReturn: 0.22133723847142162,
        endDate: "2019-04-15",
        periodReturn: 0.0007024988920927636,
        startDate: "2019-04-12",
        __typename: "SinglePeriodPerformance"
      },
      {
        cumulativeReturn: 0.22125566949156772,
        endDate: "2019-04-16",
        periodReturn: -0.00006678661493697854,
        startDate: "2019-04-15",
        __typename: "SinglePeriodPerformance"
      },
      {
        cumulativeReturn: 0.2215422784784149,
        endDate: "2019-04-17",
        periodReturn: 0.00023468385368187212,
        startDate: "2019-04-16",
        __typename: "SinglePeriodPerformance"
      },
      {
        cumulativeReturn: 0.22213925436849546,
        endDate: "2019-04-18",
        periodReturn: 0.0004887066952967449,
        startDate: "2019-04-17",
        __typename: "SinglePeriodPerformance"
      },
      {
        cumulativeReturn: 0.22213925436849546,
        endDate: "2019-04-19",
        periodReturn: 0,
        startDate: "2019-04-18",
        __typename: "SinglePeriodPerformance"
      },
      {
        cumulativeReturn: 0.22228686691967314,
        endDate: "2019-04-22",
        periodReturn: 0.00012078210453518363,
        startDate: "2019-04-19",
        __typename: "SinglePeriodPerformance"
      },
      {
        cumulativeReturn: 0.22322715900325152,
        endDate: "2019-04-23",
        periodReturn: 0.0007692891979997162,
        startDate: "2019-04-22",
        __typename: "SinglePeriodPerformance"
      },
      {
        cumulativeReturn: 0.22462180878524518,
        endDate: "2019-04-24",
        periodReturn: 0.0011401396475942376,
        startDate: "2019-04-23",
        __typename: "SinglePeriodPerformance"
      },
      {
        cumulativeReturn: 0.22360242250047757,
        endDate: "2019-04-25",
        periodReturn: -0.0008324090567835964,
        startDate: "2019-04-24",
        __typename: "SinglePeriodPerformance"
      },
      {
        cumulativeReturn: 0.22524812573275277,
        endDate: "2019-04-26",
        periodReturn: 0.0013449656538862692,
        startDate: "2019-04-25",
        __typename: "SinglePeriodPerformance"
      },
      {
        cumulativeReturn: 0.2258667615762462,
        endDate: "2019-04-29",
        periodReturn: 0.000504906582185794,
        startDate: "2019-04-26",
        __typename: "SinglePeriodPerformance"
      },
      {
        cumulativeReturn: 0.22754314249642826,
        endDate: "2019-04-30",
        periodReturn: 0.0013675066269245712,
        startDate: "2019-04-29",
        __typename: "SinglePeriodPerformance"
      },
      {
        cumulativeReturn: 0.2284795625962257,
        endDate: "2019-05-01",
        periodReturn: 0.0007628408871177657,
        startDate: "2019-04-30",
        __typename: "SinglePeriodPerformance"
      },
      {
        cumulativeReturn: 0.22814618000116504,
        endDate: "2019-05-02",
        periodReturn: -0.0002713782184182936,
        startDate: "2019-05-01",
        __typename: "SinglePeriodPerformance"
      },
      {
        cumulativeReturn: 0.2294203602075784,
        endDate: "2019-05-03",
        periodReturn: 0.0010374825303061225,
        startDate: "2019-05-02",
        __typename: "SinglePeriodPerformance"
      },
      {
        cumulativeReturn: 0.22979137539957595,
        endDate: "2019-05-06",
        periodReturn: 0.000301780582139397,
        startDate: "2019-05-03",
        __typename: "SinglePeriodPerformance"
      },
      {
        cumulativeReturn: 0.22986676673780249,
        endDate: "2019-05-07",
        periodReturn: 0.00006130416893030034,
        startDate: "2019-05-06",
        __typename: "SinglePeriodPerformance"
      },
      {
        cumulativeReturn: 0.22997291932620723,
        endDate: "2019-05-08",
        periodReturn: 0.00008631226672310746,
        startDate: "2019-05-07",
        __typename: "SinglePeriodPerformance"
      },
      {
        cumulativeReturn: 0.22942942421649604,
        endDate: "2019-05-09",
        periodReturn: -0.00044187567154636625,
        startDate: "2019-05-08",
        __typename: "SinglePeriodPerformance"
      },
      {
        cumulativeReturn: 0.22976003699451475,
        endDate: "2019-05-10",
        periodReturn: 0.00026891562175639815,
        startDate: "2019-05-09",
        __typename: "SinglePeriodPerformance"
      },
      {
        cumulativeReturn: 0.2290586413069502,
        endDate: "2019-05-13",
        periodReturn: -0.0005703516673697828,
        startDate: "2019-05-10",
        __typename: "SinglePeriodPerformance"
      },
      {
        cumulativeReturn: 0.2298774228856897,
        endDate: "2019-05-14",
        periodReturn: 0.0006661859338694307,
        startDate: "2019-05-13",
        __typename: "SinglePeriodPerformance"
      },
      {
        cumulativeReturn: 0.23060813729240337,
        endDate: "2019-05-15",
        periodReturn: 0.0005941359627524253,
        startDate: "2019-05-14",
        __typename: "SinglePeriodPerformance"
      },
      {
        cumulativeReturn: 0.23128699340454628,
        endDate: "2019-05-16",
        periodReturn: 0.0005516427947864453,
        startDate: "2019-05-15",
        __typename: "SinglePeriodPerformance"
      },
      {
        cumulativeReturn: 0.23144317065243225,
        endDate: "2019-05-17",
        periodReturn: 0.0001268406543092733,
        startDate: "2019-05-16",
        __typename: "SinglePeriodPerformance"
      },
      {
        cumulativeReturn: 0.2313839015018,
        endDate: "2019-05-20",
        periodReturn: -0.000048129830141465856,
        startDate: "2019-05-17",
        __typename: "SinglePeriodPerformance"
      },
      {
        cumulativeReturn: 0.2320792568823904,
        endDate: "2019-05-21",
        periodReturn: 0.0005646942271555983,
        startDate: "2019-05-20",
        __typename: "SinglePeriodPerformance"
      },
      {
        cumulativeReturn: 0.2318727876117208,
        endDate: "2019-05-22",
        periodReturn: -0.00016757791312223158,
        startDate: "2019-05-21",
        __typename: "SinglePeriodPerformance"
      },
      {
        cumulativeReturn: 0.2315428028014046,
        endDate: "2019-05-23",
        periodReturn: -0.0002678724732251534,
        startDate: "2019-05-22",
        __typename: "SinglePeriodPerformance"
      },
      {
        cumulativeReturn: 0.23248211769640292,
        endDate: "2019-05-24",
        periodReturn: 0.0007627139656546395,
        startDate: "2019-05-23",
        __typename: "SinglePeriodPerformance"
      },
      {
        cumulativeReturn: 0.23248211769640292,
        endDate: "2019-05-27",
        periodReturn: 0,
        startDate: "2019-05-24",
        __typename: "SinglePeriodPerformance"
      },
      {
        cumulativeReturn: 0.23267712931667672,
        endDate: "2019-05-28",
        periodReturn: 0.00015822673406263284,
        startDate: "2019-05-27",
        __typename: "SinglePeriodPerformance"
      },
      {
        cumulativeReturn: 0.23222836741844577,
        endDate: "2019-05-29",
        periodReturn: -0.00036405469652842326,
        startDate: "2019-05-28",
        __typename: "SinglePeriodPerformance"
      },
      {
        cumulativeReturn: 0.2330306554821937,
        endDate: "2019-05-30",
        periodReturn: 0.0006510871563757219,
        startDate: "2019-05-29",
        __typename: "SinglePeriodPerformance"
      },
      {
        cumulativeReturn: 0.23329737664242245,
        endDate: "2019-05-31",
        periodReturn: 0.0002163134866459908,
        startDate: "2019-05-30",
        __typename: "SinglePeriodPerformance"
      },
      {
        cumulativeReturn: 0.2338220245277951,
        endDate: "2019-06-03",
        periodReturn: 0.0004254025795472968,
        startDate: "2019-05-31",
        __typename: "SinglePeriodPerformance"
      },
      {
        cumulativeReturn: 0.23440614236663349,
        endDate: "2019-06-04",
        periodReturn: 0.00047342147183834673,
        startDate: "2019-06-03",
        __typename: "SinglePeriodPerformance"
      },
      {
        cumulativeReturn: 0.23595128904948348,
        endDate: "2019-06-05",
        periodReturn: 0.0012517328210046117,
        startDate: "2019-06-04",
        __typename: "SinglePeriodPerformance"
      },
      {
        cumulativeReturn: 0.23604547987042235,
        endDate: "2019-06-06",
        periodReturn: 0.00007620916922328754,
        startDate: "2019-06-05",
        __typename: "SinglePeriodPerformance"
      },
      {
        cumulativeReturn: 0.23780272075059905,
        endDate: "2019-06-07",
        periodReturn: 0.0014216636109223297,
        startDate: "2019-06-06",
        __typename: "SinglePeriodPerformance"
      },
      {
        cumulativeReturn: 0.23874656894781676,
        endDate: "2019-06-10",
        periodReturn: 0.000762519084337845,
        startDate: "2019-06-07",
        __typename: "SinglePeriodPerformance"
      },
      {
        cumulativeReturn: 0.23963343530273895,
        endDate: "2019-06-11",
        periodReturn: 0.0007159384955355665,
        startDate: "2019-06-10",
        __typename: "SinglePeriodPerformance"
      },
      {
        cumulativeReturn: 0.24006395533325176,
        endDate: "2019-06-12",
        periodReturn: 0.00034729623955943986,
        startDate: "2019-06-11",
        __typename: "SinglePeriodPerformance"
      },
      {
        cumulativeReturn: 0.24050578541983447,
        endDate: "2019-06-13",
        periodReturn: 0.0003562962093064691,
        startDate: "2019-06-12",
        __typename: "SinglePeriodPerformance"
      },
      {
        cumulativeReturn: 0.2410630403125562,
        endDate: "2019-06-14",
        periodReturn: 0.00044921587571074994,
        startDate: "2019-06-13",
        __typename: "SinglePeriodPerformance"
      },
      {
        cumulativeReturn: 0.24113496323712336,
        endDate: "2019-06-17",
        periodReturn: 0.00005795267623886071,
        startDate: "2019-06-14",
        __typename: "SinglePeriodPerformance"
      },
      {
        cumulativeReturn: 0.24298056609066254,
        endDate: "2019-06-18",
        periodReturn: 0.0014870283314922417,
        startDate: "2019-06-17",
        __typename: "SinglePeriodPerformance"
      },
      {
        cumulativeReturn: 0.24375888102692134,
        endDate: "2019-06-19",
        periodReturn: 0.0006261682261910433,
        startDate: "2019-06-18",
        __typename: "SinglePeriodPerformance"
      },
      {
        cumulativeReturn: 0.2470285456430279,
        endDate: "2019-06-20",
        periodReturn: 0.0026288573018325434,
        startDate: "2019-06-19",
        __typename: "SinglePeriodPerformance"
      },
      {
        cumulativeReturn: 0.24692219321859454,
        endDate: "2019-06-21",
        periodReturn: -0.00008528467516231582,
        startDate: "2019-06-20",
        __typename: "SinglePeriodPerformance"
      },
      {
        cumulativeReturn: 0.2477428816485947,
        endDate: "2019-06-24",
        periodReturn: 0.000658171323330082,
        startDate: "2019-06-21",
        __typename: "SinglePeriodPerformance"
      },
      {
        cumulativeReturn: 0.24768395323316894,
        endDate: "2019-06-25",
        periodReturn: -0.000047228011710086164,
        startDate: "2019-06-24",
        __typename: "SinglePeriodPerformance"
      },
      {
        cumulativeReturn: 0.24738079455284012,
        endDate: "2019-06-26",
        periodReturn: -0.0002429771414011838,
        startDate: "2019-06-25",
        __typename: "SinglePeriodPerformance"
      },
      {
        cumulativeReturn: 0.24815838640791932,
        endDate: "2019-06-27",
        periodReturn: 0.0006233796916505547,
        startDate: "2019-06-26",
        __typename: "SinglePeriodPerformance"
      },
      {
        cumulativeReturn: 0.24995013384143117,
        endDate: "2019-06-28",
        periodReturn: 0.0014355128748269113,
        startDate: "2019-06-27",
        __typename: "SinglePeriodPerformance"
      },
      {
        cumulativeReturn: 0.2512940434184867,
        endDate: "2019-07-01",
        periodReturn: 0.0010751705533447059,
        startDate: "2019-06-28",
        __typename: "SinglePeriodPerformance"
      },
      {
        cumulativeReturn: 0.2524840615819992,
        endDate: "2019-07-02",
        periodReturn: 0.0009510299915288561,
        startDate: "2019-07-01",
        __typename: "SinglePeriodPerformance"
      },
      {
        cumulativeReturn: 0.2536342880697009,
        endDate: "2019-07-03",
        periodReturn: 0.0009183561875020966,
        startDate: "2019-07-02",
        __typename: "SinglePeriodPerformance"
      },
      {
        cumulativeReturn: 0.2536342880697009,
        endDate: "2019-07-04",
        periodReturn: 0,
        startDate: "2019-07-03",
        __typename: "SinglePeriodPerformance"
      },
      {
        cumulativeReturn: 0.2534698603586032,
        endDate: "2019-07-05",
        periodReturn: -0.00013116082789254438,
        startDate: "2019-07-04",
        __typename: "SinglePeriodPerformance"
      },
      {
        cumulativeReturn: 0.2537760485308065,
        endDate: "2019-07-08",
        periodReturn: 0.0002442724646891368,
        startDate: "2019-07-05",
        __typename: "SinglePeriodPerformance"
      },
      {
        cumulativeReturn: 0.2540906883989067,
        endDate: "2019-07-09",
        periodReturn: 0.00025095380348740714,
        startDate: "2019-07-08",
        __typename: "SinglePeriodPerformance"
      },
      {
        cumulativeReturn: 0.2545649260719902,
        endDate: "2019-07-10",
        periodReturn: 0.00037815261485523696,
        startDate: "2019-07-09",
        __typename: "SinglePeriodPerformance"
      },
      {
        cumulativeReturn: 0.25484240675249614,
        endDate: "2019-07-11",
        periodReturn: 0.0002211768197399328,
        startDate: "2019-07-10",
        __typename: "SinglePeriodPerformance"
      },
      {
        cumulativeReturn: 0.2554519536049218,
        endDate: "2019-07-12",
        periodReturn: 0.0004857557005928059,
        startDate: "2019-07-11",
        __typename: "SinglePeriodPerformance"
      },
      {
        cumulativeReturn: 0.25590420955483584,
        endDate: "2019-07-15",
        periodReturn: 0.00036023357852555977,
        startDate: "2019-07-12",
        __typename: "SinglePeriodPerformance"
      },
      {
        cumulativeReturn: 0.255599181146956,
        endDate: "2019-07-16",
        periodReturn: -0.00024287553585638968,
        startDate: "2019-07-15",
        __typename: "SinglePeriodPerformance"
      },
      {
        cumulativeReturn: 0.2561264379352237,
        endDate: "2019-07-17",
        periodReturn: 0.0004199244441894734,
        startDate: "2019-07-16",
        __typename: "SinglePeriodPerformance"
      },
      {
        cumulativeReturn: 0.25603148991203706,
        endDate: "2019-07-18",
        periodReturn: -0.00007558795063866957,
        startDate: "2019-07-17",
        __typename: "SinglePeriodPerformance"
      },
      {
        cumulativeReturn: 0.2562863806801998,
        endDate: "2019-07-19",
        periodReturn: 0.00020293342182108599,
        startDate: "2019-07-18",
        __typename: "SinglePeriodPerformance"
      },
      {
        cumulativeReturn: 0.25649638104427286,
        endDate: "2019-07-22",
        periodReturn: 0.00016715962801352888,
        startDate: "2019-07-19",
        __typename: "SinglePeriodPerformance"
      },
      {
        cumulativeReturn: 0.25655524522313633,
        endDate: "2019-07-23",
        periodReturn: 0.00004684786980023498,
        startDate: "2019-07-22",
        __typename: "SinglePeriodPerformance"
      },
      {
        cumulativeReturn: 0.25708579451824987,
        endDate: "2019-07-24",
        periodReturn: 0.00042222520428800023,
        startDate: "2019-07-23",
        __typename: "SinglePeriodPerformance"
      },
      {
        cumulativeReturn: 0.2575370164267001,
        endDate: "2019-07-25",
        periodReturn: 0.0003589428107596528,
        startDate: "2019-07-24",
        __typename: "SinglePeriodPerformance"
      },
      {
        cumulativeReturn: 0.25798792595707765,
        endDate: "2019-07-26",
        periodReturn: 0.00035856561237378436,
        startDate: "2019-07-25",
        __typename: "SinglePeriodPerformance"
      },
      {
        cumulativeReturn: 0.25861726219279557,
        endDate: "2019-07-29",
        periodReturn: 0.0005002720795106839,
        startDate: "2019-07-26",
        __typename: "SinglePeriodPerformance"
      },
      {
        cumulativeReturn: 0.2587837365956722,
        endDate: "2019-07-30",
        periodReturn: 0.00013226769398239598,
        startDate: "2019-07-29",
        __typename: "SinglePeriodPerformance"
      },
      {
        cumulativeReturn: 0.26000332234281665,
        endDate: "2019-07-31",
        periodReturn: 0.0009688604258924689,
        startDate: "2019-07-30",
        __typename: "SinglePeriodPerformance"
      },
      {
        cumulativeReturn: 0.26079204163049563,
        endDate: "2019-08-01",
        periodReturn: 0.0006259660380993942,
        startDate: "2019-07-31",
        __typename: "SinglePeriodPerformance"
      },
      {
        cumulativeReturn: 0.2611723739809224,
        endDate: "2019-08-02",
        periodReturn: 0.00030166144603418734,
        startDate: "2019-08-01",
        __typename: "SinglePeriodPerformance"
      },
      {
        cumulativeReturn: 0.2608143027033689,
        endDate: "2019-08-05",
        periodReturn: -0.0002839193792544687,
        startDate: "2019-08-02",
        __typename: "SinglePeriodPerformance"
      },
      {
        cumulativeReturn: 0.26113740095028004,
        endDate: "2019-08-06",
        periodReturn: 0.0002562615654172167,
        startDate: "2019-08-05",
        __typename: "SinglePeriodPerformance"
      },
      {
        cumulativeReturn: 0.2618652587513721,
        endDate: "2019-08-07",
        periodReturn: 0.0005771439341531407,
        startDate: "2019-08-06",
        __typename: "SinglePeriodPerformance"
      },
      {
        cumulativeReturn: 0.2619805720400703,
        endDate: "2019-08-08",
        periodReturn: 0.000091383202682422,
        startDate: "2019-08-07",
        __typename: "SinglePeriodPerformance"
      },
      {
        cumulativeReturn: 0.2620592256182013,
        endDate: "2019-08-09",
        periodReturn: 0.00006232550632988516,
        startDate: "2019-08-08",
        __typename: "SinglePeriodPerformance"
      },
      {
        cumulativeReturn: 0.2568373851895711,
        endDate: "2019-08-12",
        periodReturn: -0.004137555768091896,
        startDate: "2019-08-09",
        __typename: "SinglePeriodPerformance"
      },
      {
        cumulativeReturn: 0.25445876936054,
        endDate: "2019-08-13",
        periodReturn: -0.001892540639752172,
        startDate: "2019-08-12",
        __typename: "SinglePeriodPerformance"
      },
      {
        cumulativeReturn: 0.2526285546189855,
        endDate: "2019-08-14",
        periodReturn: -0.0014589676330992764,
        startDate: "2019-08-13",
        __typename: "SinglePeriodPerformance"
      },
      {
        cumulativeReturn: 0.25325365405184663,
        endDate: "2019-08-15",
        periodReturn: 0.0004990301638552805,
        startDate: "2019-08-14",
        __typename: "SinglePeriodPerformance"
      },
      {
        cumulativeReturn: 0.25422307824581347,
        endDate: "2019-08-16",
        periodReturn: 0.0007735259265613748,
        startDate: "2019-08-15",
        __typename: "SinglePeriodPerformance"
      },
      {
        cumulativeReturn: 0.25333528570367503,
        endDate: "2019-08-19",
        periodReturn: -0.0007078426139152902,
        startDate: "2019-08-16",
        __typename: "SinglePeriodPerformance"
      },
      {
        cumulativeReturn: 0.25389687083484236,
        endDate: "2019-08-20",
        periodReturn: 0.0004480725449710752,
        startDate: "2019-08-19",
        __typename: "SinglePeriodPerformance"
      },
      {
        cumulativeReturn: 0.25468139066077633,
        endDate: "2019-08-21",
        periodReturn: 0.0006256653510999346,
        startDate: "2019-08-20",
        __typename: "SinglePeriodPerformance"
      },
      {
        cumulativeReturn: 0.2546661516719666,
        endDate: "2019-08-22",
        periodReturn: -0.000012145704019441099,
        startDate: "2019-08-21",
        __typename: "SinglePeriodPerformance"
      },
      {
        cumulativeReturn: 0.2551588504679181,
        endDate: "2019-08-23",
        periodReturn: 0.00039269314414432116,
        startDate: "2019-08-22",
        __typename: "SinglePeriodPerformance"
      },
      {
        cumulativeReturn: 0.25481252409396715,
        endDate: "2019-08-26",
        periodReturn: -0.00027592234546407565,
        startDate: "2019-08-23",
        __typename: "SinglePeriodPerformance"
      },
      {
        cumulativeReturn: 0.25495592973861925,
        endDate: "2019-08-27",
        periodReturn: 0.00011428451812409646,
        startDate: "2019-08-26",
        __typename: "SinglePeriodPerformance"
      },
      {
        cumulativeReturn: 0.25425204403150237,
        endDate: "2019-08-28",
        periodReturn: -0.0005608848011606778,
        startDate: "2019-08-27",
        __typename: "SinglePeriodPerformance"
      },
      {
        cumulativeReturn: 0.2529718873062601,
        endDate: "2019-08-29",
        periodReturn: -0.0010206534893318158,
        startDate: "2019-08-28",
        __typename: "SinglePeriodPerformance"
      },
      {
        cumulativeReturn: 0.2527216105994987,
        endDate: "2019-08-30",
        periodReturn: -0.0001997464662191023,
        startDate: "2019-08-29",
        __typename: "SinglePeriodPerformance"
      },
      {
        cumulativeReturn: 0.2527216105994987,
        endDate: "2019-09-02",
        periodReturn: 0,
        startDate: "2019-08-30",
        __typename: "SinglePeriodPerformance"
      },
      {
        cumulativeReturn: 0.2526739705612584,
        endDate: "2019-09-03",
        periodReturn: -0.00003802922998782798,
        startDate: "2019-09-02",
        __typename: "SinglePeriodPerformance"
      },
      {
        cumulativeReturn: 0.25431949732201375,
        endDate: "2019-09-04",
        periodReturn: 0.001313611362115193,
        startDate: "2019-09-03",
        __typename: "SinglePeriodPerformance"
      },
      {
        cumulativeReturn: 0.25463533218365986,
        endDate: "2019-09-05",
        periodReturn: 0.0002517977774564316,
        startDate: "2019-09-04",
        __typename: "SinglePeriodPerformance"
      },
      {
        cumulativeReturn: 0.2559896367112726,
        endDate: "2019-09-06",
        periodReturn: 0.0010794407688612766,
        startDate: "2019-09-05",
        __typename: "SinglePeriodPerformance"
      },
      {
        cumulativeReturn: 0.25601791675349683,
        endDate: "2019-09-09",
        periodReturn: 0.00002251614296611044,
        startDate: "2019-09-06",
        __typename: "SinglePeriodPerformance"
      },
      {
        cumulativeReturn: 0.2553697587452717,
        endDate: "2019-09-10",
        periodReturn: -0.000516042008302382,
        startDate: "2019-09-09",
        __typename: "SinglePeriodPerformance"
      },
      {
        cumulativeReturn: 0.25573174208371463,
        endDate: "2019-09-11",
        periodReturn: 0.00028834798346963694,
        startDate: "2019-09-10",
        __typename: "SinglePeriodPerformance"
      },
      {
        cumulativeReturn: 0.2563479728576321,
        endDate: "2019-09-12",
        periodReturn: 0.0004907344086841383,
        startDate: "2019-09-11",
        __typename: "SinglePeriodPerformance"
      },
      {
        cumulativeReturn: 0.2533914608622583,
        endDate: "2019-09-13",
        periodReturn: -0.0023532588576149283,
        startDate: "2019-09-12",
        __typename: "SinglePeriodPerformance"
      },
      {
        cumulativeReturn: 0.2536791529511522,
        endDate: "2019-09-16",
        periodReturn: 0.00022953091502306118,
        startDate: "2019-09-13",
        __typename: "SinglePeriodPerformance"
      },
      {
        cumulativeReturn: 0.2532002734340617,
        endDate: "2019-09-17",
        periodReturn: -0.0003819793253826412,
        startDate: "2019-09-16",
        __typename: "SinglePeriodPerformance"
      },
      {
        cumulativeReturn: 0.25497814126826124,
        endDate: "2019-09-18",
        periodReturn: 0.0014186621818456488,
        startDate: "2019-09-17",
        __typename: "SinglePeriodPerformance"
      },
      {
        cumulativeReturn: 0.2558130386850359,
        endDate: "2019-09-19",
        periodReturn: 0.0006652684929881096,
        startDate: "2019-09-18",
        __typename: "SinglePeriodPerformance"
      },
      {
        cumulativeReturn: 0.2574580403763773,
        endDate: "2019-09-20",
        periodReturn: 0.001309909708425821,
        startDate: "2019-09-19",
        __typename: "SinglePeriodPerformance"
      },
      {
        cumulativeReturn: 0.25881209733637567,
        endDate: "2019-09-23",
        periodReturn: 0.0010768207896567899,
        startDate: "2019-09-20",
        __typename: "SinglePeriodPerformance"
      },
      {
        cumulativeReturn: 0.2601726747834012,
        endDate: "2019-09-24",
        periodReturn: 0.001080842367105093,
        startDate: "2019-09-23",
        __typename: "SinglePeriodPerformance"
      },
      {
        cumulativeReturn: 0.25878135428478677,
        endDate: "2019-09-25",
        periodReturn: -0.0011040713121745112,
        startDate: "2019-09-24",
        __typename: "SinglePeriodPerformance"
      },
      {
        cumulativeReturn: 0.25837373870618596,
        endDate: "2019-09-26",
        periodReturn: -0.0003238176171051414,
        startDate: "2019-09-25",
        __typename: "SinglePeriodPerformance"
      },
      {
        cumulativeReturn: 0.2589464797798584,
        endDate: "2019-09-27",
        periodReturn: 0.0004551438543698136,
        startDate: "2019-09-26",
        __typename: "SinglePeriodPerformance"
      },
      {
        cumulativeReturn: 0.2596464783698904,
        endDate: "2019-09-30",
        periodReturn: 0.0005560193394037779,
        startDate: "2019-09-27",
        __typename: "SinglePeriodPerformance"
      },
      {
        cumulativeReturn: 0.2603921385347763,
        endDate: "2019-10-01",
        periodReturn: 0.0005919598694474386,
        startDate: "2019-09-30",
        __typename: "SinglePeriodPerformance"
      },
      {
        cumulativeReturn: 0.2607163753190149,
        endDate: "2019-10-02",
        periodReturn: 0.0002572507193003613,
        startDate: "2019-10-01",
        __typename: "SinglePeriodPerformance"
      },
      {
        cumulativeReturn: 0.2619820835361806,
        endDate: "2019-10-03",
        periodReturn: 0.0010039595280464787,
        startDate: "2019-10-02",
        __typename: "SinglePeriodPerformance"
      },
      {
        cumulativeReturn: 0.2630524004166659,
        endDate: "2019-10-04",
        periodReturn: 0.0008481236734249681,
        startDate: "2019-10-03",
        __typename: "SinglePeriodPerformance"
      },
      {
        cumulativeReturn: 0.26318233782029576,
        endDate: "2019-10-07",
        periodReturn: 0.00010287570300876612,
        startDate: "2019-10-04",
        __typename: "SinglePeriodPerformance"
      },
      {
        cumulativeReturn: 0.2636902063457105,
        endDate: "2019-10-08",
        periodReturn: 0.0004020548025482494,
        startDate: "2019-10-07",
        __typename: "SinglePeriodPerformance"
      },
      {
        cumulativeReturn: 0.26323503981417584,
        endDate: "2019-10-09",
        periodReturn: -0.0003601883826029273,
        startDate: "2019-10-08",
        __typename: "SinglePeriodPerformance"
      },
      {
        cumulativeReturn: 0.26217278045651593,
        endDate: "2019-10-10",
        periodReturn: -0.0008409039681294712,
        startDate: "2019-10-09",
        __typename: "SinglePeriodPerformance"
      },
      {
        cumulativeReturn: 0.26111053956381713,
        endDate: "2019-10-11",
        periodReturn: -0.0008415970532295942,
        startDate: "2019-10-10",
        __typename: "SinglePeriodPerformance"
      },
      {
        cumulativeReturn: 0.26108922527482314,
        endDate: "2019-10-14",
        periodReturn: -0.00001690120598101315,
        startDate: "2019-10-11",
        __typename: "SinglePeriodPerformance"
      },
      {
        cumulativeReturn: 0.26095173229642143,
        endDate: "2019-10-15",
        periodReturn: -0.00010902716131897237,
        startDate: "2019-10-14",
        __typename: "SinglePeriodPerformance"
      },
      {
        cumulativeReturn: 0.26071560264336213,
        endDate: "2019-10-16",
        periodReturn: -0.00018726303871222257,
        startDate: "2019-10-15",
        __typename: "SinglePeriodPerformance"
      },
      {
        cumulativeReturn: 0.2606896076899927,
        endDate: "2019-10-17",
        periodReturn: -0.000020619204930076564,
        startDate: "2019-10-16",
        __typename: "SinglePeriodPerformance"
      },
      {
        cumulativeReturn: 0.2618945265770469,
        endDate: "2019-10-18",
        periodReturn: 0.0009557617352472825,
        startDate: "2019-10-17",
        __typename: "SinglePeriodPerformance"
      },
      {
        cumulativeReturn: 0.26149731056201575,
        endDate: "2019-10-21",
        periodReturn: -0.00031477750847264867,
        startDate: "2019-10-18",
        __typename: "SinglePeriodPerformance"
      },
      {
        cumulativeReturn: 0.26198230714593995,
        endDate: "2019-10-22",
        periodReturn: 0.0003844610526424394,
        startDate: "2019-10-21",
        __typename: "SinglePeriodPerformance"
      },
      {
        cumulativeReturn: 0.262385679556401,
        endDate: "2019-10-23",
        periodReturn: 0.00031963396648038644,
        startDate: "2019-10-22",
        __typename: "SinglePeriodPerformance"
      },
      {
        cumulativeReturn: 0.2629950931234859,
        endDate: "2019-10-24",
        periodReturn: 0.0004827475287100298,
        startDate: "2019-10-23",
        __typename: "SinglePeriodPerformance"
      },
      {
        cumulativeReturn: 0.26305352743950805,
        endDate: "2019-10-25",
        periodReturn: 0.00004626646321934536,
        startDate: "2019-10-24",
        __typename: "SinglePeriodPerformance"
      },
      {
        cumulativeReturn: 0.2620504056791362,
        endDate: "2019-10-28",
        periodReturn: -0.0007942036806669422,
        startDate: "2019-10-25",
        __typename: "SinglePeriodPerformance"
      },
      {
        cumulativeReturn: 0.2620723417498394,
        endDate: "2019-10-29",
        periodReturn: 0.00001738129523551573,
        startDate: "2019-10-28",
        __typename: "SinglePeriodPerformance"
      },
      {
        cumulativeReturn: 0.2624307861347617,
        endDate: "2019-10-30",
        periodReturn: 0.0002840125506793782,
        startDate: "2019-10-29",
        __typename: "SinglePeriodPerformance"
      },
      {
        cumulativeReturn: 0.2643033804000161,
        endDate: "2019-10-31",
        periodReturn: 0.001483324302465741,
        startDate: "2019-10-30",
        __typename: "SinglePeriodPerformance"
      },
      {
        cumulativeReturn: 0.26507836262851936,
        endDate: "2019-11-01",
        periodReturn: 0.0006129717285560865,
        startDate: "2019-10-31",
        __typename: "SinglePeriodPerformance"
      },
      {
        cumulativeReturn: 0.26534356208346743,
        endDate: "2019-11-04",
        periodReturn: 0.00020963085195524502,
        startDate: "2019-11-01",
        __typename: "SinglePeriodPerformance"
      },
      {
        cumulativeReturn: 0.26358968963944696,
        endDate: "2019-11-05",
        periodReturn: -0.0013860839827031224,
        startDate: "2019-11-04",
        __typename: "SinglePeriodPerformance"
      },
      {
        cumulativeReturn: 0.2637620641246856,
        endDate: "2019-11-06",
        periodReturn: 0.00013641650185345868,
        startDate: "2019-11-05",
        __typename: "SinglePeriodPerformance"
      },
      {
        cumulativeReturn: 0.2618202808051382,
        endDate: "2019-11-07",
        periodReturn: -0.0015365102139636184,
        startDate: "2019-11-06",
        __typename: "SinglePeriodPerformance"
      },
      {
        cumulativeReturn: 0.2618393331116595,
        endDate: "2019-11-08",
        periodReturn: 0.000015099065065711827,
        startDate: "2019-11-07",
        __typename: "SinglePeriodPerformance"
      },
      {
        cumulativeReturn: 0.26225369529645604,
        endDate: "2019-11-11",
        periodReturn: 0.00032837951229087526,
        startDate: "2019-11-08",
        __typename: "SinglePeriodPerformance"
      },
      {
        cumulativeReturn: 0.26207298638958054,
        endDate: "2019-11-12",
        periodReturn: -0.0001431636980338328,
        startDate: "2019-11-11",
        __typename: "SinglePeriodPerformance"
      },
      {
        cumulativeReturn: 0.2626409237688314,
        endDate: "2019-11-13",
        periodReturn: 0.00045000359359206947,
        startDate: "2019-11-12",
        __typename: "SinglePeriodPerformance"
      },
      {
        cumulativeReturn: 0.26411994393651606,
        endDate: "2019-11-14",
        periodReturn: 0.0011713703712928744,
        startDate: "2019-11-13",
        __typename: "SinglePeriodPerformance"
      },
      {
        cumulativeReturn: 0.26497425483034975,
        endDate: "2019-11-15",
        periodReturn: 0.0006758147420515569,
        startDate: "2019-11-14",
        __typename: "SinglePeriodPerformance"
      },
      {
        cumulativeReturn: 0.26542549141369753,
        endDate: "2019-11-18",
        periodReturn: 0.00035671602139318126,
        startDate: "2019-11-15",
        __typename: "SinglePeriodPerformance"
      },
      {
        cumulativeReturn: 0.26545970706621036,
        endDate: "2019-11-19",
        periodReturn: 0.000027038851947426608,
        startDate: "2019-11-18",
        __typename: "SinglePeriodPerformance"
      },
      {
        cumulativeReturn: 0.26742153265336155,
        endDate: "2019-11-20",
        periodReturn: 0.001550286884834521,
        startDate: "2019-11-19",
        __typename: "SinglePeriodPerformance"
      },
      {
        cumulativeReturn: 0.2671715748390775,
        endDate: "2019-11-21",
        periodReturn: -0.00019721758534480392,
        startDate: "2019-11-20",
        __typename: "SinglePeriodPerformance"
      },
      {
        cumulativeReturn: 0.26758555987147115,
        endDate: "2019-11-22",
        periodReturn: 0.00032670006225968246,
        startDate: "2019-11-21",
        __typename: "SinglePeriodPerformance"
      },
      {
        cumulativeReturn: 0.26843401418844204,
        endDate: "2019-11-25",
        periodReturn: 0.000669346783231807,
        startDate: "2019-11-22",
        __typename: "SinglePeriodPerformance"
      },
      {
        cumulativeReturn: 0.2697733777819251,
        endDate: "2019-11-26",
        periodReturn: 0.0010559190139189838,
        startDate: "2019-11-25",
        __typename: "SinglePeriodPerformance"
      },
      {
        cumulativeReturn: 0.27056760359818033,
        endDate: "2019-11-27",
        periodReturn: 0.0006254862719224889,
        startDate: "2019-11-26",
        __typename: "SinglePeriodPerformance"
      },
      {
        cumulativeReturn: 0.27056760359818033,
        endDate: "2019-11-28",
        periodReturn: 0,
        startDate: "2019-11-27",
        __typename: "SinglePeriodPerformance"
      },
      {
        cumulativeReturn: 0.27098589579630605,
        endDate: "2019-11-29",
        periodReturn: 0.0003292167980209222,
        startDate: "2019-11-28",
        __typename: "SinglePeriodPerformance"
      },
      {
        cumulativeReturn: 0.2700505827364874,
        endDate: "2019-12-02",
        periodReturn: -0.0007358957034159721,
        startDate: "2019-11-29",
        __typename: "SinglePeriodPerformance"
      },
      {
        cumulativeReturn: 0.2716303414293004,
        endDate: "2019-12-03",
        periodReturn: 0.0012438549411231206,
        startDate: "2019-12-02",
        __typename: "SinglePeriodPerformance"
      },
      {
        cumulativeReturn: 0.27250922625441265,
        endDate: "2019-12-04",
        periodReturn: 0.0006911480455272838,
        startDate: "2019-12-03",
        __typename: "SinglePeriodPerformance"
      },
      {
        cumulativeReturn: 0.2731220037900368,
        endDate: "2019-12-05",
        periodReturn: 0.0004815505640206485,
        startDate: "2019-12-04",
        __typename: "SinglePeriodPerformance"
      },
      {
        cumulativeReturn: 0.27369865147284567,
        endDate: "2019-12-06",
        periodReturn: 0.0004529398448005841,
        startDate: "2019-12-05",
        __typename: "SinglePeriodPerformance"
      },
      {
        cumulativeReturn: 0.2745712853129971,
        endDate: "2019-12-09",
        periodReturn: 0.0006851179744458571,
        startDate: "2019-12-06",
        __typename: "SinglePeriodPerformance"
      },
      {
        cumulativeReturn: 0.2756198835385133,
        endDate: "2019-12-10",
        periodReturn: 0.000822706613273986,
        startDate: "2019-12-09",
        __typename: "SinglePeriodPerformance"
      },
      {
        cumulativeReturn: 0.2775359670264499,
        endDate: "2019-12-11",
        periodReturn: 0.001502080292619243,
        startDate: "2019-12-10",
        __typename: "SinglePeriodPerformance"
      },
      {
        cumulativeReturn: 0.2783221714716124,
        endDate: "2019-12-12",
        periodReturn: 0.0006154068969131507,
        startDate: "2019-12-11",
        __typename: "SinglePeriodPerformance"
      },
      {
        cumulativeReturn: 0.2805520307155478,
        endDate: "2019-12-13",
        periodReturn: 0.0017443640528963483,
        startDate: "2019-12-12",
        __typename: "SinglePeriodPerformance"
      },
      {
        cumulativeReturn: 0.2813387480193035,
        endDate: "2019-12-16",
        periodReturn: 0.0006143579369563059,
        startDate: "2019-12-13",
        __typename: "SinglePeriodPerformance"
      },
      {
        cumulativeReturn: 0.28330750634713087,
        endDate: "2019-12-17",
        periodReturn: 0.0015364854382735943,
        startDate: "2019-12-16",
        __typename: "SinglePeriodPerformance"
      },
      {
        cumulativeReturn: 0.28424060464665524,
        endDate: "2019-12-18",
        periodReturn: 0.0007271042169622057,
        startDate: "2019-12-17",
        __typename: "SinglePeriodPerformance"
      },
      {
        cumulativeReturn: 0.285090950777271,
        endDate: "2019-12-19",
        periodReturn: 0.000662139265445316,
        startDate: "2019-12-18",
        __typename: "SinglePeriodPerformance"
      },
      {
        cumulativeReturn: 0.2853731642074233,
        endDate: "2019-12-20",
        periodReturn: 0.0002196058029834344,
        startDate: "2019-12-19",
        __typename: "SinglePeriodPerformance"
      },
      {
        cumulativeReturn: 0.286120765130784,
        endDate: "2019-12-23",
        periodReturn: 0.0005816216988019909,
        startDate: "2019-12-20",
        __typename: "SinglePeriodPerformance"
      },
      {
        cumulativeReturn: 0.2870159463055495,
        endDate: "2019-12-24",
        periodReturn: 0.0006960319738516344,
        startDate: "2019-12-23",
        __typename: "SinglePeriodPerformance"
      },
      {
        cumulativeReturn: 0.2870159463055495,
        endDate: "2019-12-25",
        periodReturn: 0,
        startDate: "2019-12-24",
        __typename: "SinglePeriodPerformance"
      },
      {
        cumulativeReturn: 0.2874686980656289,
        endDate: "2019-12-26",
        periodReturn: 0.00035178411066230853,
        startDate: "2019-12-25",
        __typename: "SinglePeriodPerformance"
      },
      {
        cumulativeReturn: 0.28840533090951737,
        endDate: "2019-12-27",
        periodReturn: 0.0007274995075964142,
        startDate: "2019-12-26",
        __typename: "SinglePeriodPerformance"
      },
      {
        cumulativeReturn: 0.2889150604456021,
        endDate: "2019-12-30",
        periodReturn: 0.0003956282420261876,
        startDate: "2019-12-27",
        __typename: "SinglePeriodPerformance"
      },
      {
        cumulativeReturn: 0.28881251443168865,
        endDate: "2019-12-31",
        periodReturn: -0.00007955994701317192,
        startDate: "2019-12-30",
        __typename: "SinglePeriodPerformance"
      },
      {
        cumulativeReturn: 0.28881251443168865,
        endDate: "2020-01-01",
        periodReturn: 0,
        startDate: "2019-12-31",
        __typename: "SinglePeriodPerformance"
      },
      {
        cumulativeReturn: 0.29084050439732634,
        endDate: "2020-01-02",
        periodReturn: 0.0015735337319656515,
        startDate: "2020-01-01",
        __typename: "SinglePeriodPerformance"
      },
      {
        cumulativeReturn: 0.2933038072936489,
        endDate: "2020-01-03",
        periodReturn: 0.001908293772879779,
        startDate: "2020-01-02",
        __typename: "SinglePeriodPerformance"
      },
      {
        cumulativeReturn: 0.2945563690039441,
        endDate: "2020-01-06",
        periodReturn: 0.000968497659429628,
        startDate: "2020-01-03",
        __typename: "SinglePeriodPerformance"
      },
      {
        cumulativeReturn: 0.2959410196581034,
        endDate: "2020-01-07",
        periodReturn: 0.001069594717783312,
        startDate: "2020-01-06",
        __typename: "SinglePeriodPerformance"
      },
      {
        cumulativeReturn: 0.29681635096372205,
        endDate: "2020-01-08",
        periodReturn: 0.000675440697023145,
        startDate: "2020-01-07",
        __typename: "SinglePeriodPerformance"
      },
      {
        cumulativeReturn: 0.2980863262253395,
        endDate: "2020-01-09",
        periodReturn: 0.000979302320389133,
        startDate: "2020-01-08",
        __typename: "SinglePeriodPerformance"
      },
      {
        cumulativeReturn: 0.2998684284120672,
        endDate: "2020-01-10",
        periodReturn: 0.001372868776693542,
        startDate: "2020-01-09",
        __typename: "SinglePeriodPerformance"
      },
      {
        cumulativeReturn: 0.3003752599188223,
        endDate: "2020-01-13",
        periodReturn: 0.00038990985216429255,
        startDate: "2020-01-10",
        __typename: "SinglePeriodPerformance"
      },
      {
        cumulativeReturn: 0.301641857943616,
        endDate: "2020-01-14",
        periodReturn: 0.0009740250094211522,
        startDate: "2020-01-13",
        __typename: "SinglePeriodPerformance"
      },
      {
        cumulativeReturn: 0.3033155239121019,
        endDate: "2020-01-15",
        periodReturn: 0.0012858114221450162,
        startDate: "2020-01-14",
        __typename: "SinglePeriodPerformance"
      },
      {
        cumulativeReturn: 0.304200265733942,
        endDate: "2020-01-16",
        periodReturn: 0.0006788393183443949,
        startDate: "2020-01-15",
        __typename: "SinglePeriodPerformance"
      },
      {
        cumulativeReturn: 0.3050211188650458,
        endDate: "2020-01-17",
        periodReturn: 0.0006293919367068148,
        startDate: "2020-01-16",
        __typename: "SinglePeriodPerformance"
      },
      {
        cumulativeReturn: 0.3050211188650458,
        endDate: "2020-01-20",
        periodReturn: 0,
        startDate: "2020-01-17",
        __typename: "SinglePeriodPerformance"
      },
      {
        cumulativeReturn: 0.30622389790438165,
        endDate: "2020-01-21",
        periodReturn: 0.0009216548467674618,
        startDate: "2020-01-20",
        __typename: "SinglePeriodPerformance"
      },
      {
        cumulativeReturn: 0.3064225343870399,
        endDate: "2020-01-22",
        periodReturn: 0.0001520692455380186,
        startDate: "2020-01-21",
        __typename: "SinglePeriodPerformance"
      },
      {
        cumulativeReturn: 0.30687901694818165,
        endDate: "2020-01-23",
        periodReturn: 0.0003494141819559761,
        startDate: "2020-01-22",
        __typename: "SinglePeriodPerformance"
      },
      {
        cumulativeReturn: 0.3077144103113265,
        endDate: "2020-01-24",
        periodReturn: 0.0006392277726638626,
        startDate: "2020-01-23",
        __typename: "SinglePeriodPerformance"
      },
      {
        cumulativeReturn: 0.3073036202469528,
        endDate: "2020-01-27",
        periodReturn: -0.0003141282692418228,
        startDate: "2020-01-24",
        __typename: "SinglePeriodPerformance"
      },
      {
        cumulativeReturn: 0.30815884983855235,
        endDate: "2020-01-28",
        periodReturn: 0.0006541935464372165,
        startDate: "2020-01-27",
        __typename: "SinglePeriodPerformance"
      },
      {
        cumulativeReturn: 0.308876950498987,
        endDate: "2020-01-29",
        periodReturn: 0.0005489399552074882,
        startDate: "2020-01-28",
        __typename: "SinglePeriodPerformance"
      },
      {
        cumulativeReturn: 0.30828424262974585,
        endDate: "2020-01-30",
        periodReturn: -0.0004528369676120264,
        startDate: "2020-01-29",
        __typename: "SinglePeriodPerformance"
      },
      {
        cumulativeReturn: 0.3086439982192277,
        endDate: "2020-01-31",
        periodReturn: 0.00027498274286220264,
        startDate: "2020-01-30",
        __typename: "SinglePeriodPerformance"
      },
      {
        cumulativeReturn: 0.3093884301369594,
        endDate: "2020-02-03",
        periodReturn: 0.0005688574728838842,
        startDate: "2020-01-31",
        __typename: "SinglePeriodPerformance"
      },
      {
        cumulativeReturn: 0.3097578222391568,
        endDate: "2020-02-04",
        periodReturn: 0.00028211040642746153,
        startDate: "2020-02-03",
        __typename: "SinglePeriodPerformance"
      },
      {
        cumulativeReturn: 0.309776889262251,
        endDate: "2020-02-05",
        periodReturn: 0.00001455767071616038,
        startDate: "2020-02-04",
        __typename: "SinglePeriodPerformance"
      },
      {
        cumulativeReturn: 0.3107629334476594,
        endDate: "2020-02-06",
        periodReturn: 0.0007528337028178029,
        startDate: "2020-02-05",
        __typename: "SinglePeriodPerformance"
      },
      {
        cumulativeReturn: 0.31243038634138354,
        endDate: "2020-02-07",
        periodReturn: 0.0012721239296401574,
        startDate: "2020-02-06",
        __typename: "SinglePeriodPerformance"
      },
      {
        cumulativeReturn: 0.3127436894147313,
        endDate: "2020-02-10",
        periodReturn: 0.00023871976495547703,
        startDate: "2020-02-07",
        __typename: "SinglePeriodPerformance"
      },
      {
        cumulativeReturn: 0.31389610286454617,
        endDate: "2020-02-11",
        periodReturn: 0.000877866303305915,
        startDate: "2020-02-10",
        __typename: "SinglePeriodPerformance"
      },
      {
        cumulativeReturn: 0.3147136203867009,
        endDate: "2020-02-12",
        periodReturn: 0.0006222086513326696,
        startDate: "2020-02-11",
        __typename: "SinglePeriodPerformance"
      },
      {
        cumulativeReturn: 0.3147251468505581,
        endDate: "2020-02-13",
        periodReturn: 0.000008767281085768816,
        startDate: "2020-02-12",
        __typename: "SinglePeriodPerformance"
      },
      {
        cumulativeReturn: 0.3155210434531073,
        endDate: "2020-02-14",
        periodReturn: 0.0006053710955904263,
        startDate: "2020-02-13",
        __typename: "SinglePeriodPerformance"
      },
      {
        cumulativeReturn: 0.3155210434531073,
        endDate: "2020-02-17",
        periodReturn: 0,
        startDate: "2020-02-14",
        __typename: "SinglePeriodPerformance"
      },
      {
        cumulativeReturn: 0.3163674700928687,
        endDate: "2020-02-18",
        periodReturn: 0.0006434155074703101,
        startDate: "2020-02-17",
        __typename: "SinglePeriodPerformance"
      },
      {
        cumulativeReturn: 0.31652130305206594,
        endDate: "2020-02-19",
        periodReturn: 0.00011686171429512544,
        startDate: "2020-02-18",
        __typename: "SinglePeriodPerformance"
      },
      {
        cumulativeReturn: 0.3172085750528235,
        endDate: "2020-02-20",
        periodReturn: 0.0005220363690007944,
        startDate: "2020-02-19",
        __typename: "SinglePeriodPerformance"
      },
      {
        cumulativeReturn: 0.31793523782654676,
        endDate: "2020-02-21",
        periodReturn: 0.0005516687239104451,
        startDate: "2020-02-20",
        __typename: "SinglePeriodPerformance"
      },
      {
        cumulativeReturn: 0.3160062522292686,
        endDate: "2020-02-24",
        periodReturn: -0.0014636421744512172,
        startDate: "2020-02-21",
        __typename: "SinglePeriodPerformance"
      },
      {
        cumulativeReturn: 0.3150038291636499,
        endDate: "2020-02-25",
        periodReturn: -0.0007617160358627254,
        startDate: "2020-02-24",
        __typename: "SinglePeriodPerformance"
      },
      {
        cumulativeReturn: 0.3119180007975926,
        endDate: "2020-02-26",
        periodReturn: -0.002346630707546892,
        startDate: "2020-02-25",
        __typename: "SinglePeriodPerformance"
      },
      {
        cumulativeReturn: 0.3057448635044142,
        endDate: "2020-02-27",
        periodReturn: -0.004705429218461445,
        startDate: "2020-02-26",
        __typename: "SinglePeriodPerformance"
      },
      {
        cumulativeReturn: 0.30066119318297013,
        endDate: "2020-02-28",
        periodReturn: -0.003893310602655084,
        startDate: "2020-02-27",
        __typename: "SinglePeriodPerformance"
      },
      {
        cumulativeReturn: 0.3011411896413896,
        endDate: "2020-03-02",
        periodReturn: 0.0003690403472751619,
        startDate: "2020-02-28",
        __typename: "SinglePeriodPerformance"
      },
      {
        cumulativeReturn: 0.3049702371227274,
        endDate: "2020-03-03",
        periodReturn: 0.0029428378040918944,
        startDate: "2020-03-02",
        __typename: "SinglePeriodPerformance"
      },
      {
        cumulativeReturn: 0.30681750294032084,
        endDate: "2020-03-04",
        periodReturn: 0.0014155616465755178,
        startDate: "2020-03-03",
        __typename: "SinglePeriodPerformance"
      },
      {
        cumulativeReturn: 0.3026837173526522,
        endDate: "2020-03-05",
        periodReturn: -0.0031632462668795065,
        startDate: "2020-03-04",
        __typename: "SinglePeriodPerformance"
      },
      {
        cumulativeReturn: 0.2969370535631901,
        endDate: "2020-03-06",
        periodReturn: -0.004411403714433922,
        startDate: "2020-03-05",
        __typename: "SinglePeriodPerformance"
      },
      {
        cumulativeReturn: 0.27241207523681377,
        endDate: "2020-03-09",
        periodReturn: -0.018909921849326942,
        startDate: "2020-03-06",
        __typename: "SinglePeriodPerformance"
      },
      {
        cumulativeReturn: 0.26580722858055195,
        endDate: "2020-03-10",
        periodReturn: -0.005190807903196353,
        startDate: "2020-03-09",
        __typename: "SinglePeriodPerformance"
      },
      {
        cumulativeReturn: 0.2472048798798867,
        endDate: "2020-03-11",
        periodReturn: -0.014696036079305239,
        startDate: "2020-03-10",
        __typename: "SinglePeriodPerformance"
      },
      {
        cumulativeReturn: 0.20564847192309177,
        endDate: "2020-03-12",
        periodReturn: -0.03331963226506698,
        startDate: "2020-03-11",
        __typename: "SinglePeriodPerformance"
      },
      {
        cumulativeReturn: 0.20590029554309885,
        endDate: "2020-03-13",
        periodReturn: 0.00020886985375210502,
        startDate: "2020-03-12",
        __typename: "SinglePeriodPerformance"
      },
      {
        cumulativeReturn: 0.18037380337232056,
        endDate: "2020-03-16",
        periodReturn: -0.02116799561715174,
        startDate: "2020-03-13",
        __typename: "SinglePeriodPerformance"
      },
      {
        cumulativeReturn: 0.1638075760105533,
        endDate: "2020-03-17",
        periodReturn: -0.014034729773261314,
        startDate: "2020-03-16",
        __typename: "SinglePeriodPerformance"
      },
      {
        cumulativeReturn: 0.12620284252937952,
        endDate: "2020-03-18",
        periodReturn: -0.03231181361619934,
        startDate: "2020-03-17",
        __typename: "SinglePeriodPerformance"
      },
      {
        cumulativeReturn: 0.08881439412812941,
        endDate: "2020-03-19",
        periodReturn: -0.03319868054788257,
        startDate: "2020-03-18",
        __typename: "SinglePeriodPerformance"
      },
      {
        cumulativeReturn: 0.07390070692419748,
        endDate: "2020-03-20",
        periodReturn: -0.013697180423366918,
        startDate: "2020-03-19",
        __typename: "SinglePeriodPerformance"
      },
      {
        cumulativeReturn: 0.058142678386493785,
        endDate: "2020-03-23",
        periodReturn: -0.014673636432214279,
        startDate: "2020-03-20",
        __typename: "SinglePeriodPerformance"
      },
      {
        cumulativeReturn: 0.06401911504144686,
        endDate: "2020-03-24",
        periodReturn: 0.005553539021707093,
        startDate: "2020-03-23",
        __typename: "SinglePeriodPerformance"
      },
      {
        cumulativeReturn: 0.0912112561474443,
        endDate: "2020-03-25",
        periodReturn: 0.025556064474403922,
        startDate: "2020-03-24",
        __typename: "SinglePeriodPerformance"
      },
      {
        cumulativeReturn: 0.12294385093781757,
        endDate: "2020-03-26",
        periodReturn: 0.029080157129616015,
        startDate: "2020-03-25",
        __typename: "SinglePeriodPerformance"
      },
      {
        cumulativeReturn: 0.12777271509554344,
        endDate: "2020-03-27",
        periodReturn: 0.004300183089023698,
        startDate: "2020-03-26",
        __typename: "SinglePeriodPerformance"
      },
      {
        cumulativeReturn: 0.1300147072320026,
        endDate: "2020-03-30",
        periodReturn: 0.0019879822471758203,
        startDate: "2020-03-27",
        __typename: "SinglePeriodPerformance"
      },
      {
        cumulativeReturn: 0.13300643193842254,
        endDate: "2020-03-31",
        periodReturn: 0.002647509529984892,
        startDate: "2020-03-30",
        __typename: "SinglePeriodPerformance"
      },
      {
        cumulativeReturn: 0.11607596285857902,
        endDate: "2020-04-01",
        periodReturn: -0.014942959371269977,
        startDate: "2020-03-31",
        __typename: "SinglePeriodPerformance"
      },
      {
        cumulativeReturn: 0.1135645050634122,
        endDate: "2020-04-02",
        periodReturn: -0.0022502570423023507,
        startDate: "2020-04-01",
        __typename: "SinglePeriodPerformance"
      },
      {
        cumulativeReturn: 0.11526081049981274,
        endDate: "2020-04-03",
        periodReturn: 0.0015233113382182078,
        startDate: "2020-04-02",
        __typename: "SinglePeriodPerformance"
      },
      {
        cumulativeReturn: 0.12127596705453914,
        endDate: "2020-04-06",
        periodReturn: 0.005393497644762283,
        startDate: "2020-04-03",
        __typename: "SinglePeriodPerformance"
      },
      {
        cumulativeReturn: 0.12926882018856656,
        endDate: "2020-04-07",
        periodReturn: 0.0071283549892035,
        startDate: "2020-04-06",
        __typename: "SinglePeriodPerformance"
      },
      {
        cumulativeReturn: 0.13383791037926596,
        endDate: "2020-04-08",
        periodReturn: 0.004046060697873737,
        startDate: "2020-04-07",
        __typename: "SinglePeriodPerformance"
      },
      {
        cumulativeReturn: 0.1501046789027669,
        endDate: "2020-04-09",
        periodReturn: 0.014346643708587799,
        startDate: "2020-04-08",
        __typename: "SinglePeriodPerformance"
      },
      {
        cumulativeReturn: 0.1501046789027669,
        endDate: "2020-04-10",
        periodReturn: 0,
        startDate: "2020-04-09",
        __typename: "SinglePeriodPerformance"
      },
      {
        cumulativeReturn: 0.15552884838505587,
        endDate: "2020-04-13",
        periodReturn: 0.0047162398186778665,
        startDate: "2020-04-10",
        __typename: "SinglePeriodPerformance"
      },
      {
        cumulativeReturn: 0.16401706917434344,
        endDate: "2020-04-14",
        periodReturn: 0.007345745457718841,
        startDate: "2020-04-13",
        __typename: "SinglePeriodPerformance"
      },
      {
        cumulativeReturn: 0.16477450883928446,
        endDate: "2020-04-15",
        periodReturn: 0.0006507118194394217,
        startDate: "2020-04-14",
        __typename: "SinglePeriodPerformance"
      },
      {
        cumulativeReturn: 0.1661514638510606,
        endDate: "2020-04-16",
        periodReturn: 0.0011821644458446365,
        startDate: "2020-04-15",
        __typename: "SinglePeriodPerformance"
      },
      {
        cumulativeReturn: 0.1695622529406169,
        endDate: "2020-04-17",
        periodReturn: 0.0029248251151633453,
        startDate: "2020-04-16",
        __typename: "SinglePeriodPerformance"
      },
      {
        cumulativeReturn: 0.16884016529592571,
        endDate: "2020-04-20",
        periodReturn: -0.0006173999228136655,
        startDate: "2020-04-17",
        __typename: "SinglePeriodPerformance"
      },
      {
        cumulativeReturn: 0.16297984500035523,
        endDate: "2020-04-21",
        periodReturn: -0.005013790995184311,
        startDate: "2020-04-20",
        __typename: "SinglePeriodPerformance"
      },
      {
        cumulativeReturn: 0.16013845203969446,
        endDate: "2020-04-22",
        periodReturn: -0.0024432005188017676,
        startDate: "2020-04-21",
        __typename: "SinglePeriodPerformance"
      },
      {
        cumulativeReturn: 0.15929918173069413,
        endDate: "2020-04-23",
        periodReturn: -0.0007234225428222246,
        startDate: "2020-04-22",
        __typename: "SinglePeriodPerformance"
      },
      {
        cumulativeReturn: 0.15633792730672513,
        endDate: "2020-04-24",
        periodReturn: -0.0025543487571070777,
        startDate: "2020-04-23",
        __typename: "SinglePeriodPerformance"
      },
      {
        cumulativeReturn: 0.15493449069866005,
        endDate: "2020-04-27",
        periodReturn: -0.0012136907169809459,
        startDate: "2020-04-24",
        __typename: "SinglePeriodPerformance"
      },
      {
        cumulativeReturn: 0.15423478890282794,
        endDate: "2020-04-28",
        periodReturn: -0.0006058367824904376,
        startDate: "2020-04-27",
        __typename: "SinglePeriodPerformance"
      },
      {
        cumulativeReturn: 0.15464163792607244,
        endDate: "2020-04-29",
        periodReturn: 0.00035248376427049374,
        startDate: "2020-04-28",
        __typename: "SinglePeriodPerformance"
      },
      {
        cumulativeReturn: 0.1575826864868599,
        endDate: "2020-04-30",
        periodReturn: 0.0025471526958529413,
        startDate: "2020-04-29",
        __typename: "SinglePeriodPerformance"
      },
      {
        cumulativeReturn: 0.15794219343086668,
        endDate: "2020-05-01",
        periodReturn: 0.00031056696701118355,
        startDate: "2020-04-30",
        __typename: "SinglePeriodPerformance"
      },
      {
        cumulativeReturn: 0.15716743511605258,
        endDate: "2020-05-04",
        periodReturn: -0.0006690820312182694,
        startDate: "2020-05-01",
        __typename: "SinglePeriodPerformance"
      },
      {
        cumulativeReturn: 0.15976881823632016,
        endDate: "2020-05-05",
        periodReturn: 0.0022480611200458383,
        startDate: "2020-05-04",
        __typename: "SinglePeriodPerformance"
      },
      {
        cumulativeReturn: 0.16040317692020212,
        endDate: "2020-05-06",
        periodReturn: 0.0005469699425498964,
        startDate: "2020-05-05",
        __typename: "SinglePeriodPerformance"
      },
      {
        cumulativeReturn: 0.16353047170679558,
        endDate: "2020-05-07",
        periodReturn: 0.002695007087875724,
        startDate: "2020-05-06",
        __typename: "SinglePeriodPerformance"
      },
      {
        cumulativeReturn: 0.16645571207245835,
        endDate: "2020-05-08",
        periodReturn: 0.0025141072252038185,
        startDate: "2020-05-07",
        __typename: "SinglePeriodPerformance"
      },
      {
        cumulativeReturn: 0.16802449934922592,
        endDate: "2020-05-11",
        periodReturn: 0.0013449179943405673,
        startDate: "2020-05-08",
        __typename: "SinglePeriodPerformance"
      },
      {
        cumulativeReturn: 0.17189987755489566,
        endDate: "2020-05-12",
        periodReturn: 0.003317891198197473,
        startDate: "2020-05-11",
        __typename: "SinglePeriodPerformance"
      },
      {
        cumulativeReturn: 0.17216345183445902,
        endDate: "2020-05-13",
        periodReturn: 0.00022491194393941177,
        startDate: "2020-05-12",
        __typename: "SinglePeriodPerformance"
      },
      {
        cumulativeReturn: 0.17144696524640612,
        endDate: "2020-05-14",
        periodReturn: -0.0006112514316424935,
        startDate: "2020-05-13",
        __typename: "SinglePeriodPerformance"
      },
      {
        cumulativeReturn: 0.1738076978013834,
        endDate: "2020-05-15",
        periodReturn: 0.0020152278549637557,
        startDate: "2020-05-14",
        __typename: "SinglePeriodPerformance"
      },
      {
        cumulativeReturn: 0.1789982279645599,
        endDate: "2020-05-18",
        periodReturn: 0.004421959553425032,
        startDate: "2020-05-15",
        __typename: "SinglePeriodPerformance"
      },
      {
        cumulativeReturn: 0.18337823591892466,
        endDate: "2020-05-19",
        periodReturn: 0.0037150250530286013,
        startDate: "2020-05-18",
        __typename: "SinglePeriodPerformance"
      },
      {
        cumulativeReturn: 0.1882118174039369,
        endDate: "2020-05-20",
        periodReturn: 0.004084561755742409,
        startDate: "2020-05-19",
        __typename: "SinglePeriodPerformance"
      },
      {
        cumulativeReturn: 0.19363432757047017,
        endDate: "2020-05-21",
        periodReturn: 0.0045635888207042384,
        startDate: "2020-05-20",
        __typename: "SinglePeriodPerformance"
      },
      {
        cumulativeReturn: 0.19542284022086642,
        endDate: "2020-05-22",
        periodReturn: 0.001498375682640229,
        startDate: "2020-05-21",
        __typename: "SinglePeriodPerformance"
      },
      {
        cumulativeReturn: 0.19542284022086642,
        endDate: "2020-05-25",
        periodReturn: 0,
        startDate: "2020-05-22",
        __typename: "SinglePeriodPerformance"
      },
      {
        cumulativeReturn: 0.2012961739944792,
        endDate: "2020-05-26",
        periodReturn: 0.004913185172643595,
        startDate: "2020-05-25",
        __typename: "SinglePeriodPerformance"
      },
      {
        cumulativeReturn: 0.20539800075518078,
        endDate: "2020-05-27",
        periodReturn: 0.0034145008112882362,
        startDate: "2020-05-26",
        __typename: "SinglePeriodPerformance"
      },
      {
        cumulativeReturn: 0.20873419165029516,
        endDate: "2020-05-28",
        periodReturn: 0.002767708999869238,
        startDate: "2020-05-27",
        __typename: "SinglePeriodPerformance"
      },
      {
        cumulativeReturn: 0.21076820026791987,
        endDate: "2020-05-29",
        periodReturn: 0.0016827592300071173,
        startDate: "2020-05-28",
        __typename: "SinglePeriodPerformance"
      },
      {
        cumulativeReturn: 0.2133133712581199,
        endDate: "2020-06-01",
        periodReturn: 0.0021021125180169667,
        startDate: "2020-05-29",
        __typename: "SinglePeriodPerformance"
      },
      {
        cumulativeReturn: 0.2177031826843927,
        endDate: "2020-06-02",
        periodReturn: 0.0036180359750925214,
        startDate: "2020-06-01",
        __typename: "SinglePeriodPerformance"
      },
      {
        cumulativeReturn: 0.2252892651267422,
        endDate: "2020-06-03",
        periodReturn: 0.006229828869812214,
        startDate: "2020-06-02",
        __typename: "SinglePeriodPerformance"
      },
      {
        cumulativeReturn: 0.22915061358626332,
        endDate: "2020-06-04",
        periodReturn: 0.0031513770416666674,
        startDate: "2020-06-03",
        __typename: "SinglePeriodPerformance"
      },
      {
        cumulativeReturn: 0.2376622712004286,
        endDate: "2020-06-05",
        periodReturn: 0.006924828837151937,
        startDate: "2020-06-04",
        __typename: "SinglePeriodPerformance"
      },
      {
        cumulativeReturn: 0.24303550177140587,
        endDate: "2020-06-08",
        periodReturn: 0.004341435217028779,
        startDate: "2020-06-05",
        __typename: "SinglePeriodPerformance"
      },
      {
        cumulativeReturn: 0.24375413555955316,
        endDate: "2020-06-09",
        periodReturn: 0.0005781281283785415,
        startDate: "2020-06-08",
        __typename: "SinglePeriodPerformance"
      },
      {
        cumulativeReturn: 0.24468132834093304,
        endDate: "2020-06-10",
        periodReturn: 0.0007454791544976234,
        startDate: "2020-06-09",
        __typename: "SinglePeriodPerformance"
      },
      {
        cumulativeReturn: 0.23916382761141186,
        endDate: "2020-06-11",
        periodReturn: -0.004432862134178249,
        startDate: "2020-06-10",
        __typename: "SinglePeriodPerformance"
      },
      {
        cumulativeReturn: 0.24050142620464343,
        endDate: "2020-06-12",
        periodReturn: 0.0010794364420803383,
        startDate: "2020-06-11",
        __typename: "SinglePeriodPerformance"
      },
      {
        cumulativeReturn: 0.23889911212891168,
        endDate: "2020-06-15",
        periodReturn: -0.0012916664518751748,
        startDate: "2020-06-12",
        __typename: "SinglePeriodPerformance"
      },
      {
        cumulativeReturn: 0.24402188472205344,
        endDate: "2020-06-16",
        periodReturn: 0.004134939272285778,
        startDate: "2020-06-15",
        __typename: "SinglePeriodPerformance"
      },
      {
        cumulativeReturn: 0.24531907827170008,
        endDate: "2020-06-17",
        periodReturn: 0.00104274174399798,
        startDate: "2020-06-16",
        __typename: "SinglePeriodPerformance"
      },
      {
        cumulativeReturn: 0.24485398105546707,
        endDate: "2020-06-18",
        periodReturn: -0.0003734763438125624,
        startDate: "2020-06-17",
        __typename: "SinglePeriodPerformance"
      },
      {
        cumulativeReturn: 0.24676691615016066,
        endDate: "2020-06-19",
        periodReturn: 0.0015366742797190283,
        startDate: "2020-06-18",
        __typename: "SinglePeriodPerformance"
      },
      {
        cumulativeReturn: 0.24664105293696004,
        endDate: "2020-06-22",
        periodReturn: -0.0001009516787542026,
        startDate: "2020-06-19",
        __typename: "SinglePeriodPerformance"
      },
      {
        cumulativeReturn: 0.24787002131190605,
        endDate: "2020-06-23",
        periodReturn: 0.0009858237638258026,
        startDate: "2020-06-22",
        __typename: "SinglePeriodPerformance"
      },
      {
        cumulativeReturn: 0.24637187765248436,
        endDate: "2020-06-24",
        periodReturn: -0.0012005606624372286,
        startDate: "2020-06-23",
        __typename: "SinglePeriodPerformance"
      },
      {
        cumulativeReturn: 0.24436026943889555,
        endDate: "2020-06-25",
        periodReturn: -0.0016139711186180686,
        startDate: "2020-06-24",
        __typename: "SinglePeriodPerformance"
      },
      {
        cumulativeReturn: 0.2433314106554758,
        endDate: "2020-06-26",
        periodReturn: -0.0008268174488434471,
        startDate: "2020-06-25",
        __typename: "SinglePeriodPerformance"
      },
      {
        cumulativeReturn: 0.24237408124949011,
        endDate: "2020-06-29",
        periodReturn: -0.0007699712222993791,
        startDate: "2020-06-26",
        __typename: "SinglePeriodPerformance"
      },
      {
        cumulativeReturn: 0.24303668815472834,
        endDate: "2020-06-30",
        periodReturn: 0.0005333392858388289,
        startDate: "2020-06-29",
        __typename: "SinglePeriodPerformance"
      },
      {
        cumulativeReturn: 0.24420049007637146,
        endDate: "2020-07-01",
        periodReturn: 0.0009362570974239404,
        startDate: "2020-06-30",
        __typename: "SinglePeriodPerformance"
      },
      {
        cumulativeReturn: 0.2466183857321489,
        endDate: "2020-07-02",
        periodReturn: 0.0019433328270341574,
        startDate: "2020-07-01",
        __typename: "SinglePeriodPerformance"
      },
      {
        cumulativeReturn: 0.2466183857321489,
        endDate: "2020-07-03",
        periodReturn: 0,
        startDate: "2020-07-02",
        __typename: "SinglePeriodPerformance"
      },
      {
        cumulativeReturn: 0.24979557759774074,
        endDate: "2020-07-06",
        periodReturn: 0.002548648328915617,
        startDate: "2020-07-03",
        __typename: "SinglePeriodPerformance"
      },
      {
        cumulativeReturn: 0.25123148301702614,
        endDate: "2020-07-07",
        periodReturn: 0.001148912226146183,
        startDate: "2020-07-06",
        __typename: "SinglePeriodPerformance"
      },
      {
        cumulativeReturn: 0.2513484236279493,
        endDate: "2020-07-08",
        periodReturn: 0.00009346041280950067,
        startDate: "2020-07-07",
        __typename: "SinglePeriodPerformance"
      },
      {
        cumulativeReturn: 0.25233769449318744,
        endDate: "2020-07-09",
        periodReturn: 0.0007905638801780857,
        startDate: "2020-07-08",
        __typename: "SinglePeriodPerformance"
      },
      {
        cumulativeReturn: 0.25295978834423183,
        endDate: "2020-07-10",
        periodReturn: 0.0004967460883594534,
        startDate: "2020-07-09",
        __typename: "SinglePeriodPerformance"
      },
      {
        cumulativeReturn: 0.2544763091622091,
        endDate: "2020-07-13",
        periodReturn: 0.0012103507487509458,
        startDate: "2020-07-10",
        __typename: "SinglePeriodPerformance"
      },
      {
        cumulativeReturn: 0.25472365088001503,
        endDate: "2020-07-14",
        periodReturn: 0.0001971673087802745,
        startDate: "2020-07-13",
        __typename: "SinglePeriodPerformance"
      },
      {
        cumulativeReturn: 0.2579078574697906,
        endDate: "2020-07-15",
        periodReturn: 0.002537775220497643,
        startDate: "2020-07-14",
        __typename: "SinglePeriodPerformance"
      },
      {
        cumulativeReturn: 0.25973642309007894,
        endDate: "2020-07-16",
        periodReturn: 0.0014536562510758196,
        startDate: "2020-07-15",
        __typename: "SinglePeriodPerformance"
      },
      {
        cumulativeReturn: 0.2620424519198632,
        endDate: "2020-07-17",
        periodReturn: 0.0018305645431188698,
        startDate: "2020-07-16",
        __typename: "SinglePeriodPerformance"
      },
      {
        cumulativeReturn: 0.26488120652946856,
        endDate: "2020-07-20",
        periodReturn: 0.002249333693400588,
        startDate: "2020-07-17",
        __typename: "SinglePeriodPerformance"
      },
      {
        cumulativeReturn: 0.26840954827113017,
        endDate: "2020-07-21",
        periodReturn: 0.002789464910576465,
        startDate: "2020-07-20",
        __typename: "SinglePeriodPerformance"
      },
      {
        cumulativeReturn: 0.2708042779786335,
        endDate: "2020-07-22",
        periodReturn: 0.0018879783038272743,
        startDate: "2020-07-21",
        __typename: "SinglePeriodPerformance"
      },
      {
        cumulativeReturn: 0.27260535780359985,
        endDate: "2020-07-23",
        periodReturn: 0.0014172755444537318,
        startDate: "2020-07-22",
        __typename: "SinglePeriodPerformance"
      },
      {
        cumulativeReturn: 0.2728169754764127,
        endDate: "2020-07-24",
        periodReturn: 0.000166286957315904,
        startDate: "2020-07-23",
        __typename: "SinglePeriodPerformance"
      },
      {
        cumulativeReturn: 0.2732874189123562,
        endDate: "2020-07-27",
        periodReturn: 0.0003696080779936067,
        startDate: "2020-07-24",
        __typename: "SinglePeriodPerformance"
      },
      {
        cumulativeReturn: 0.2735272464764611,
        endDate: "2020-07-28",
        periodReturn: 0.00018835304625080727,
        startDate: "2020-07-27",
        __typename: "SinglePeriodPerformance"
      },
      {
        cumulativeReturn: 0.27537842671752344,
        endDate: "2020-07-29",
        periodReturn: 0.0014535851087473116,
        startDate: "2020-07-28",
        __typename: "SinglePeriodPerformance"
      },
      {
        cumulativeReturn: 0.27626547267506796,
        endDate: "2020-07-30",
        periodReturn: 0.0006955158868631074,
        startDate: "2020-07-29",
        __typename: "SinglePeriodPerformance"
      },
      {
        cumulativeReturn: 0.27726526424907094,
        endDate: "2020-07-31",
        periodReturn: 0.0007833727350686506,
        startDate: "2020-07-30",
        __typename: "SinglePeriodPerformance"
      },
      {
        cumulativeReturn: 0.2783501109260884,
        endDate: "2020-08-03",
        periodReturn: 0.0008493511155299652,
        startDate: "2020-07-31",
        __typename: "SinglePeriodPerformance"
      },
      {
        cumulativeReturn: 0.2815079264437852,
        endDate: "2020-08-04",
        periodReturn: 0.002470227436683135,
        startDate: "2020-08-03",
        __typename: "SinglePeriodPerformance"
      },
      {
        cumulativeReturn: 0.28381991266732354,
        endDate: "2020-08-05",
        periodReturn: 0.0018041138691620487,
        startDate: "2020-08-04",
        __typename: "SinglePeriodPerformance"
      },
      {
        cumulativeReturn: 0.2852843052198559,
        endDate: "2020-08-06",
        periodReturn: 0.0011406526243153154,
        startDate: "2020-08-05",
        __typename: "SinglePeriodPerformance"
      },
      {
        cumulativeReturn: 0.2871603896578536,
        endDate: "2020-08-07",
        periodReturn: 0.001459664939794584,
        startDate: "2020-08-06",
        __typename: "SinglePeriodPerformance"
      },
      {
        cumulativeReturn: 0.2884245337304925,
        endDate: "2020-08-10",
        periodReturn: 0.0009821185322327615,
        startDate: "2020-08-07",
        __typename: "SinglePeriodPerformance"
      },
      {
        cumulativeReturn: 0.2893123270619429,
        endDate: "2020-08-11",
        periodReturn: 0.0006890534200553586,
        startDate: "2020-08-10",
        __typename: "SinglePeriodPerformance"
      },
      {
        cumulativeReturn: 0.289295064649423,
        endDate: "2020-08-12",
        periodReturn: -0.000013388852458509002,
        startDate: "2020-08-11",
        __typename: "SinglePeriodPerformance"
      },
      {
        cumulativeReturn: 0.2886585520000573,
        endDate: "2020-08-13",
        periodReturn: -0.0004936904412479791,
        startDate: "2020-08-12",
        __typename: "SinglePeriodPerformance"
      },
      {
        cumulativeReturn: 0.28819028814225245,
        endDate: "2020-08-14",
        periodReturn: -0.0003633731038204094,
        startDate: "2020-08-13",
        __typename: "SinglePeriodPerformance"
      },
      {
        cumulativeReturn: 0.28959434706178566,
        endDate: "2020-08-17",
        periodReturn: 0.0010899468288634426,
        startDate: "2020-08-14",
        __typename: "SinglePeriodPerformance"
      },
      {
        cumulativeReturn: 0.28917027324982914,
        endDate: "2020-08-18",
        periodReturn: -0.0003288427969016555,
        startDate: "2020-08-17",
        __typename: "SinglePeriodPerformance"
      },
      {
        cumulativeReturn: 0.2889516064598461,
        endDate: "2020-08-19",
        periodReturn: -0.00016961823780791162,
        startDate: "2020-08-18",
        __typename: "SinglePeriodPerformance"
      },
      {
        cumulativeReturn: 0.28833762745665314,
        endDate: "2020-08-20",
        periodReturn: -0.0004763398409340682,
        startDate: "2020-08-19",
        __typename: "SinglePeriodPerformance"
      },
      {
        cumulativeReturn: 0.28860881158363316,
        endDate: "2020-08-21",
        periodReturn: 0.00021049150564315293,
        startDate: "2020-08-20",
        __typename: "SinglePeriodPerformance"
      },
      {
        cumulativeReturn: 0.290358908017031,
        endDate: "2020-08-24",
        periodReturn: 0.0013581285628856132,
        startDate: "2020-08-21",
        __typename: "SinglePeriodPerformance"
      },
      {
        cumulativeReturn: 0.2904009229253466,
        endDate: "2020-08-25",
        periodReturn: 0.000032560637241771246,
        startDate: "2020-08-24",
        __typename: "SinglePeriodPerformance"
      },
      {
        cumulativeReturn: 0.2907520788145803,
        endDate: "2020-08-26",
        periodReturn: 0.0002721292917536857,
        startDate: "2020-08-25",
        __typename: "SinglePeriodPerformance"
      },
      {
        cumulativeReturn: 0.29075277765250807,
        endDate: "2020-08-27",
        periodReturn: 5.414191766699335e-7,
        startDate: "2020-08-26",
        __typename: "SinglePeriodPerformance"
      },
      {
        cumulativeReturn: 0.2916260792139298,
        endDate: "2020-08-28",
        periodReturn: 0.0006765831354707377,
        startDate: "2020-08-27",
        __typename: "SinglePeriodPerformance"
      },
      {
        cumulativeReturn: 0.2930122519731493,
        endDate: "2020-08-31",
        periodReturn: 0.0010731997298033921,
        startDate: "2020-08-28",
        __typename: "SinglePeriodPerformance"
      },
      {
        cumulativeReturn: 0.2942765793652351,
        endDate: "2020-09-01",
        periodReturn: 0.0009778154771204405,
        startDate: "2020-08-31",
        __typename: "SinglePeriodPerformance"
      },
      {
        cumulativeReturn: 0.2968235593216848,
        endDate: "2020-09-02",
        periodReturn: 0.001967879197581528,
        startDate: "2020-09-01",
        __typename: "SinglePeriodPerformance"
      },
      {
        cumulativeReturn: 0.2971116533241993,
        endDate: "2020-09-03",
        periodReturn: 0.00022215358476765357,
        startDate: "2020-09-02",
        __typename: "SinglePeriodPerformance"
      },
      {
        cumulativeReturn: 0.29604819632223034,
        endDate: "2020-09-04",
        periodReturn: -0.0008198654288885745,
        startDate: "2020-09-03",
        __typename: "SinglePeriodPerformance"
      },
      {
        cumulativeReturn: 0.29604819632223034,
        endDate: "2020-09-07",
        periodReturn: 0,
        startDate: "2020-09-04",
        __typename: "SinglePeriodPerformance"
      },
      {
        cumulativeReturn: 0.2952523079978968,
        endDate: "2020-09-08",
        periodReturn: -0.0006140885243248904,
        startDate: "2020-09-07",
        __typename: "SinglePeriodPerformance"
      },
      {
        cumulativeReturn: 0.29641219627252813,
        endDate: "2020-09-09",
        periodReturn: 0.0008954921504244989,
        startDate: "2020-09-08",
        __typename: "SinglePeriodPerformance"
      },
      {
        cumulativeReturn: 0.29688729534522484,
        endDate: "2020-09-10",
        periodReturn: 0.0003664722331853996,
        startDate: "2020-09-09",
        __typename: "SinglePeriodPerformance"
      },
      {
        cumulativeReturn: 0.2970595750780356,
        endDate: "2020-09-11",
        periodReturn: 0.0001328409441816855,
        startDate: "2020-09-10",
        __typename: "SinglePeriodPerformance"
      },
      {
        cumulativeReturn: 0.2976603671704785,
        endDate: "2020-09-14",
        periodReturn: 0.0004631954491424961,
        startDate: "2020-09-11",
        __typename: "SinglePeriodPerformance"
      },
      {
        cumulativeReturn: 0.2983912007628362,
        endDate: "2020-09-15",
        periodReturn: 0.0005631932752567612,
        startDate: "2020-09-14",
        __typename: "SinglePeriodPerformance"
      },
      {
        cumulativeReturn: 0.29762992351385487,
        endDate: "2020-09-16",
        periodReturn: -0.0005863234813468307,
        startDate: "2020-09-15",
        __typename: "SinglePeriodPerformance"
      },
      {
        cumulativeReturn: 0.2967494285296284,
        endDate: "2020-09-17",
        periodReturn: -0.0006785409062100695,
        startDate: "2020-09-16",
        __typename: "SinglePeriodPerformance"
      },
      {
        cumulativeReturn: 0.29718724545648456,
        endDate: "2020-09-18",
        periodReturn: 0.000337626466010801,
        startDate: "2020-09-17",
        __typename: "SinglePeriodPerformance"
      },
      {
        cumulativeReturn: 0.29305176119336807,
        endDate: "2020-09-21",
        periodReturn: -0.003188039566069816,
        startDate: "2020-09-18",
        __typename: "SinglePeriodPerformance"
      },
      {
        cumulativeReturn: 0.2917944873857867,
        endDate: "2020-09-22",
        periodReturn: -0.0009723306098906843,
        startDate: "2020-09-21",
        __typename: "SinglePeriodPerformance"
      },
      {
        cumulativeReturn: 0.2900205587585196,
        endDate: "2020-09-23",
        periodReturn: -0.0013732282066452697,
        startDate: "2020-09-22",
        __typename: "SinglePeriodPerformance"
      },
      {
        cumulativeReturn: 0.2864634333900622,
        endDate: "2020-09-24",
        periodReturn: -0.002757417580911126,
        startDate: "2020-09-23",
        __typename: "SinglePeriodPerformance"
      },
      {
        cumulativeReturn: 0.2858509905373927,
        endDate: "2020-09-25",
        periodReturn: -0.000476067050779393,
        startDate: "2020-09-24",
        __typename: "SinglePeriodPerformance"
      },
      {
        cumulativeReturn: 0.2867501221408171,
        endDate: "2020-09-28",
        periodReturn: 0.0006992502319796213,
        startDate: "2020-09-25",
        __typename: "SinglePeriodPerformance"
      },
      {
        cumulativeReturn: 0.28656596820254543,
        endDate: "2020-09-29",
        periodReturn: -0.0001431155397641373,
        startDate: "2020-09-28",
        __typename: "SinglePeriodPerformance"
      },
      {
        cumulativeReturn: 0.28666009397268066,
        endDate: "2020-09-30",
        periodReturn: 0.0000731604693901295,
        startDate: "2020-09-29",
        __typename: "SinglePeriodPerformance"
      },
      {
        cumulativeReturn: 0.28795101231977327,
        endDate: "2020-10-01",
        periodReturn: 0.0010033095400563642,
        startDate: "2020-09-30",
        __typename: "SinglePeriodPerformance"
      },
      {
        cumulativeReturn: 0.2873072147946645,
        endDate: "2020-10-02",
        periodReturn: -0.0004998618106981658,
        startDate: "2020-10-01",
        __typename: "SinglePeriodPerformance"
      },
      {
        cumulativeReturn: 0.28773166503956205,
        endDate: "2020-10-05",
        periodReturn: 0.0003297194640251014,
        startDate: "2020-10-02",
        __typename: "SinglePeriodPerformance"
      },
      {
        cumulativeReturn: 0.2887239264706223,
        endDate: "2020-10-06",
        periodReturn: 0.0007705498420198484,
        startDate: "2020-10-05",
        __typename: "SinglePeriodPerformance"
      },
      {
        cumulativeReturn: 0.2883754164235568,
        endDate: "2020-10-07",
        periodReturn: -0.00027043033803210144,
        startDate: "2020-10-06",
        __typename: "SinglePeriodPerformance"
      },
      {
        cumulativeReturn: 0.2901716144998734,
        endDate: "2020-10-08",
        periodReturn: 0.0013941573654850888,
        startDate: "2020-10-07",
        __typename: "SinglePeriodPerformance"
      },
      {
        cumulativeReturn: 0.2917146580816281,
        endDate: "2020-10-09",
        periodReturn: 0.0011959987062285635,
        startDate: "2020-10-08",
        __typename: "SinglePeriodPerformance"
      },
      {
        cumulativeReturn: 0.2912657737765161,
        endDate: "2020-10-12",
        periodReturn: -0.0003475104213638946,
        startDate: "2020-10-09",
        __typename: "SinglePeriodPerformance"
      },
      {
        cumulativeReturn: 0.2923090491716307,
        endDate: "2020-10-13",
        periodReturn: 0.0008079478418012858,
        startDate: "2020-10-12",
        __typename: "SinglePeriodPerformance"
      },
      {
        cumulativeReturn: 0.29172990836420043,
        endDate: "2020-10-14",
        periodReturn: -0.0004481442018854347,
        startDate: "2020-10-13",
        __typename: "SinglePeriodPerformance"
      },
      {
        cumulativeReturn: 0.2898221040664981,
        endDate: "2020-10-15",
        periodReturn: -0.0014769374660669032,
        startDate: "2020-10-14",
        __typename: "SinglePeriodPerformance"
      },
      {
        cumulativeReturn: 0.2904537806408112,
        endDate: "2020-10-16",
        periodReturn: 0.0004897392999558543,
        startDate: "2020-10-15",
        __typename: "SinglePeriodPerformance"
      },
      {
        cumulativeReturn: 0.2909100942031597,
        endDate: "2020-10-19",
        periodReturn: 0.00035360705605589314,
        startDate: "2020-10-16",
        __typename: "SinglePeriodPerformance"
      },
      {
        cumulativeReturn: 0.290121183747754,
        endDate: "2020-10-20",
        periodReturn: -0.0006111273425999271,
        startDate: "2020-10-19",
        __typename: "SinglePeriodPerformance"
      },
      {
        cumulativeReturn: 0.2908314709485391,
        endDate: "2020-10-21",
        periodReturn: 0.0005505585132102755,
        startDate: "2020-10-20",
        __typename: "SinglePeriodPerformance"
      },
      {
        cumulativeReturn: 0.2901056333247358,
        endDate: "2020-10-22",
        periodReturn: -0.0005623023920154782,
        startDate: "2020-10-21",
        __typename: "SinglePeriodPerformance"
      },
      {
        cumulativeReturn: 0.2909353392469567,
        endDate: "2020-10-23",
        periodReturn: 0.0006431302218893775,
        startDate: "2020-10-22",
        __typename: "SinglePeriodPerformance"
      },
      {
        cumulativeReturn: 0.29079717833708285,
        endDate: "2020-10-26",
        periodReturn: -0.00010702388080450875,
        startDate: "2020-10-23",
        __typename: "SinglePeriodPerformance"
      },
      {
        cumulativeReturn: 0.2908879718894257,
        endDate: "2020-10-27",
        periodReturn: 0.00007033913140391931,
        startDate: "2020-10-26",
        __typename: "SinglePeriodPerformance"
      },
      {
        cumulativeReturn: 0.2879885198244292,
        endDate: "2020-10-28",
        periodReturn: -0.0022460911621577004,
        startDate: "2020-10-27",
        __typename: "SinglePeriodPerformance"
      },
      {
        cumulativeReturn: 0.2869954261594596,
        endDate: "2020-10-29",
        periodReturn: -0.0007710423266077011,
        startDate: "2020-10-28",
        __typename: "SinglePeriodPerformance"
      },
      {
        cumulativeReturn: 0.28567178830396567,
        endDate: "2020-10-30",
        periodReturn: -0.0010284712972475811,
        startDate: "2020-10-29",
        __typename: "SinglePeriodPerformance"
      },
      {
        cumulativeReturn: 0.28644661927669746,
        endDate: "2020-11-02",
        periodReturn: 0.0006026662323779587,
        startDate: "2020-10-30",
        __typename: "SinglePeriodPerformance"
      },
      {
        cumulativeReturn: 0.2884317005390693,
        endDate: "2020-11-03",
        periodReturn: 0.0015430731696338324,
        startDate: "2020-11-02",
        __typename: "SinglePeriodPerformance"
      },
      {
        cumulativeReturn: 0.2951164863301965,
        endDate: "2020-11-04",
        periodReturn: 0.005188312107137812,
        startDate: "2020-11-03",
        __typename: "SinglePeriodPerformance"
      },
      {
        cumulativeReturn: 0.30005329018224103,
        endDate: "2020-11-05",
        periodReturn: 0.003811860866687951,
        startDate: "2020-11-04",
        __typename: "SinglePeriodPerformance"
      },
      {
        cumulativeReturn: 0.30100780131406335,
        endDate: "2020-11-06",
        periodReturn: 0.0007342092351372173,
        startDate: "2020-11-05",
        __typename: "SinglePeriodPerformance"
      },
      {
        cumulativeReturn: 0.3079168494061062,
        endDate: "2020-11-09",
        periodReturn: 0.0053105354826192145,
        startDate: "2020-11-06",
        __typename: "SinglePeriodPerformance"
      },
      {
        cumulativeReturn: 0.3082714749301798,
        endDate: "2020-11-10",
        periodReturn: 0.00027113766768471764,
        startDate: "2020-11-09",
        __typename: "SinglePeriodPerformance"
      },
      {
        cumulativeReturn: 0.30973617686142885,
        endDate: "2020-11-11",
        periodReturn: 0.0011195703333110893,
        startDate: "2020-11-10",
        __typename: "SinglePeriodPerformance"
      },
      {
        cumulativeReturn: 0.3108787127419994,
        endDate: "2020-11-12",
        periodReturn: 0.0008723404764678869,
        startDate: "2020-11-11",
        __typename: "SinglePeriodPerformance"
      },
      {
        cumulativeReturn: 0.31217562639070207,
        endDate: "2020-11-13",
        periodReturn: 0.000989346791656828,
        startDate: "2020-11-12",
        __typename: "SinglePeriodPerformance"
      },
      {
        cumulativeReturn: 0.31488891144978215,
        endDate: "2020-11-16",
        periodReturn: 0.0020677758407562593,
        startDate: "2020-11-13",
        __typename: "SinglePeriodPerformance"
      },
      {
        cumulativeReturn: 0.3167844844938412,
        endDate: "2020-11-17",
        periodReturn: 0.00144162219907153,
        startDate: "2020-11-16",
        __typename: "SinglePeriodPerformance"
      },
      {
        cumulativeReturn: 0.31930793066623653,
        endDate: "2020-11-18",
        periodReturn: 0.0019163699163459616,
        startDate: "2020-11-17",
        __typename: "SinglePeriodPerformance"
      },
      {
        cumulativeReturn: 0.32141479407270745,
        endDate: "2020-11-19",
        periodReturn: 0.001596945911942764,
        startDate: "2020-11-18",
        __typename: "SinglePeriodPerformance"
      },
      {
        cumulativeReturn: 0.32358500767888687,
        endDate: "2020-11-20",
        periodReturn: 0.0016423409333042665,
        startDate: "2020-11-19",
        __typename: "SinglePeriodPerformance"
      },
      {
        cumulativeReturn: 0.32507879341081036,
        endDate: "2020-11-23",
        periodReturn: 0.0011285907012069853,
        startDate: "2020-11-20",
        __typename: "SinglePeriodPerformance"
      },
      {
        cumulativeReturn: 0.32789364533220233,
        endDate: "2020-11-24",
        periodReturn: 0.0021242902198641543,
        startDate: "2020-11-23",
        __typename: "SinglePeriodPerformance"
      },
      {
        cumulativeReturn: 0.3291948889447689,
        endDate: "2020-11-25",
        periodReturn: 0.000979930596957477,
        startDate: "2020-11-24",
        __typename: "SinglePeriodPerformance"
      },
      {
        cumulativeReturn: 0.3291948889447689,
        endDate: "2020-11-26",
        periodReturn: 0,
        startDate: "2020-11-25",
        __typename: "SinglePeriodPerformance"
      },
      {
        cumulativeReturn: 0.33069951685863574,
        endDate: "2020-11-27",
        periodReturn: 0.0011319844263479647,
        startDate: "2020-11-26",
        __typename: "SinglePeriodPerformance"
      },
      {
        cumulativeReturn: 0.3330560234605715,
        endDate: "2020-11-30",
        periodReturn: 0.0017708780773429567,
        startDate: "2020-11-27",
        __typename: "SinglePeriodPerformance"
      },
      {
        cumulativeReturn: 0.33491497343946386,
        endDate: "2020-12-01",
        periodReturn: 0.001394502516155712,
        startDate: "2020-11-30",
        __typename: "SinglePeriodPerformance"
      },
      {
        cumulativeReturn: 0.3364325380917992,
        endDate: "2020-12-02",
        periodReturn: 0.0011368249532966487,
        startDate: "2020-12-01",
        __typename: "SinglePeriodPerformance"
      },
      {
        cumulativeReturn: 0.3390870463258675,
        endDate: "2020-12-03",
        periodReturn: 0.0019862642957336587,
        startDate: "2020-12-02",
        __typename: "SinglePeriodPerformance"
      },
      {
        cumulativeReturn: 0.3410681890335383,
        endDate: "2020-12-04",
        periodReturn: 0.0014794726848464323,
        startDate: "2020-12-03",
        __typename: "SinglePeriodPerformance"
      },
      {
        cumulativeReturn: 0.3425780664595577,
        endDate: "2020-12-07",
        periodReturn: 0.0011258766991612565,
        startDate: "2020-12-04",
        __typename: "SinglePeriodPerformance"
      },
      {
        cumulativeReturn: 0.3438136794702542,
        endDate: "2020-12-08",
        periodReturn: 0.0009203286137057622,
        startDate: "2020-12-07",
        __typename: "SinglePeriodPerformance"
      },
      {
        cumulativeReturn: 0.3448881297168762,
        endDate: "2020-12-09",
        periodReturn: 0.0007995529908920293,
        startDate: "2020-12-08",
        __typename: "SinglePeriodPerformance"
      },
      {
        cumulativeReturn: 0.34688059918664504,
        endDate: "2020-12-10",
        periodReturn: 0.0014815131651050165,
        startDate: "2020-12-09",
        __typename: "SinglePeriodPerformance"
      },
      {
        cumulativeReturn: 0.34821019061306413,
        endDate: "2020-12-11",
        periodReturn: 0.0009871635445798644,
        startDate: "2020-12-10",
        __typename: "SinglePeriodPerformance"
      },
      {
        cumulativeReturn: 0.3492588146533355,
        endDate: "2020-12-14",
        periodReturn: 0.000777789730097292,
        startDate: "2020-12-11",
        __typename: "SinglePeriodPerformance"
      },
      {
        cumulativeReturn: 0.3502464295832195,
        endDate: "2020-12-15",
        periodReturn: 0.0007319684845919698,
        startDate: "2020-12-14",
        __typename: "SinglePeriodPerformance"
      },
      {
        cumulativeReturn: 0.3517097652676051,
        endDate: "2020-12-16",
        periodReturn: 0.0010837545297840798,
        startDate: "2020-12-15",
        __typename: "SinglePeriodPerformance"
      },
      {
        cumulativeReturn: 0.3528242893931821,
        endDate: "2020-12-17",
        periodReturn: 0.0008245291661086015,
        startDate: "2020-12-16",
        __typename: "SinglePeriodPerformance"
      },
      {
        cumulativeReturn: 0.3537455261781264,
        endDate: "2020-12-18",
        periodReturn: 0.0006809729779152627,
        startDate: "2020-12-17",
        __typename: "SinglePeriodPerformance"
      },
      {
        cumulativeReturn: 0.3528529010793968,
        endDate: "2020-12-21",
        periodReturn: -0.0006593743665028138,
        startDate: "2020-12-18",
        __typename: "SinglePeriodPerformance"
      },
      {
        cumulativeReturn: 0.3537445845561933,
        endDate: "2020-12-22",
        periodReturn: 0.0006591134010838668,
        startDate: "2020-12-21",
        __typename: "SinglePeriodPerformance"
      },
      {
        cumulativeReturn: 0.35367063985275826,
        endDate: "2020-12-23",
        periodReturn: -0.00005462234477499864,
        startDate: "2020-12-22",
        __typename: "SinglePeriodPerformance"
      },
      {
        cumulativeReturn: 0.35464675012908553,
        endDate: "2020-12-24",
        periodReturn: 0.0007210840270817113,
        startDate: "2020-12-23",
        __typename: "SinglePeriodPerformance"
      },
      {
        cumulativeReturn: 0.35464675012908553,
        endDate: "2020-12-25",
        periodReturn: 0,
        startDate: "2020-12-24",
        __typename: "SinglePeriodPerformance"
      },
      {
        cumulativeReturn: 0.35577472976125657,
        endDate: "2020-12-28",
        periodReturn: 0.0008326743721664444,
        startDate: "2020-12-25",
        __typename: "SinglePeriodPerformance"
      },
      {
        cumulativeReturn: 0.3569631415847232,
        endDate: "2020-12-29",
        periodReturn: 0.0008765555201607361,
        startDate: "2020-12-28",
        __typename: "SinglePeriodPerformance"
      },
      {
        cumulativeReturn: 0.35788921488864034,
        endDate: "2020-12-30",
        periodReturn: 0.0006824601756209843,
        startDate: "2020-12-29",
        __typename: "SinglePeriodPerformance"
      },
      {
        cumulativeReturn: 0.3583193635556037,
        endDate: "2020-12-31",
        periodReturn: 0.0003167774382821463,
        startDate: "2020-12-30",
        __typename: "SinglePeriodPerformance"
      },
      {
        cumulativeReturn: 0.3583193635556037,
        endDate: "2021-01-01",
        periodReturn: 0,
        startDate: "2020-12-31",
        __typename: "SinglePeriodPerformance"
      },
      {
        cumulativeReturn: 0.3583193635556037,
        endDate: "2021-01-04",
        periodReturn: 0,
        startDate: "2021-01-01",
        __typename: "SinglePeriodPerformance"
      }
    ],
    __typename: "EstimatedPerformance2"
  },
  expenseRatio: 1.193431344375869,
  id: "b89b14e2-b066-465b-8259-4f6d86446a31",
  issuerConcentration: 0.7653378790531947,
  metadata: {},
  netAssetValue: 40992.99999999999,
  portfolioId: "f5d69091-3481-40a0-832c-c398844587c5",
  risk: 12.083802016917497,
  updatedAt: "2021-01-04T18:21:05.205003Z",
  wealthProjections: [
    {
      date: "2021-04-04",
      percentiles: [
        {
          cumulativeReturn: 0.3583193635556037,
          nav: 40267.99817615883,
          percentile: 0.3,
          __typename: "WealthProjectionPercentile"
        },
        {
          cumulativeReturn: 0.3583193635556037,
          nav: 41585.585893481075,
          percentile: 0.5,
          __typename: "WealthProjectionPercentile"
        },
        {
          cumulativeReturn: 0.3583193635556037,
          nav: 42903.17361080333,
          percentile: 0.7,
          __typename: "WealthProjectionPercentile"
        }
      ],
      __typename: "WealthProjection"
    },
    {
      date: "2021-07-04",
      percentiles: [
        {
          cumulativeReturn: 0.3583193635556037,
          nav: 40296.45147186743,
          percentile: 0.3,
          __typename: "WealthProjectionPercentile"
        },
        {
          cumulativeReturn: 0.3583193635556037,
          nav: 42186.73807977197,
          percentile: 0.5,
          __typename: "WealthProjectionPercentile"
        },
        {
          cumulativeReturn: 0.3583193635556037,
          nav: 44077.024687676494,
          percentile: 0.7,
          __typename: "WealthProjectionPercentile"
        }
      ],
      __typename: "WealthProjection"
    },
    {
      date: "2022-01-04",
      percentiles: [
        {
          cumulativeReturn: 0.3583193635556037,
          nav: 40664.12247157415,
          percentile: 0.3,
          __typename: "WealthProjectionPercentile"
        },
        {
          cumulativeReturn: 0.3583193635556037,
          nav: 43415.23845074239,
          percentile: 0.5,
          __typename: "WealthProjectionPercentile"
        },
        {
          cumulativeReturn: 0.3583193635556037,
          nav: 46166.354429910636,
          percentile: 0.7,
          __typename: "WealthProjectionPercentile"
        }
      ],
      __typename: "WealthProjection"
    },
    {
      date: "2023-01-04",
      percentiles: [
        {
          cumulativeReturn: 0.3583193635556037,
          nav: 41860.04337432707,
          percentile: 0.3,
          __typename: "WealthProjectionPercentile"
        },
        {
          cumulativeReturn: 0.3583193635556037,
          nav: 45980.604730925304,
          percentile: 0.5,
          __typename: "WealthProjectionPercentile"
        },
        {
          cumulativeReturn: 0.3583193635556037,
          nav: 50101.16608752353,
          percentile: 0.7,
          __typename: "WealthProjectionPercentile"
        }
      ],
      __typename: "WealthProjection"
    },
    {
      date: "2024-01-04",
      percentiles: [
        {
          cumulativeReturn: 0.3583193635556037,
          nav: 43352.71866686424,
          percentile: 0.3,
          __typename: "WealthProjectionPercentile"
        },
        {
          cumulativeReturn: 0.3583193635556037,
          nav: 48697.55613159457,
          percentile: 0.5,
          __typename: "WealthProjectionPercentile"
        },
        {
          cumulativeReturn: 0.3583193635556037,
          nav: 54042.393596324895,
          percentile: 0.7,
          __typename: "WealthProjectionPercentile"
        }
      ],
      __typename: "WealthProjection"
    },
    {
      date: "2026-01-04",
      percentiles: [
        {
          cumulativeReturn: 0.3583193635556037,
          nav: 46882.87652498609,
          percentile: 0.3,
          __typename: "WealthProjectionPercentile"
        },
        {
          cumulativeReturn: 0.3583193635556037,
          nav: 54622.57165488982,
          percentile: 0.5,
          __typename: "WealthProjectionPercentile"
        },
        {
          cumulativeReturn: 0.3583193635556037,
          nav: 62362.26678479355,
          percentile: 0.7,
          __typename: "WealthProjectionPercentile"
        }
      ],
      __typename: "WealthProjection"
    },
    {
      date: "2028-01-04",
      percentiles: [
        {
          cumulativeReturn: 0.3583193635556037,
          nav: 50996.53300703025,
          percentile: 0.3,
          __typename: "WealthProjectionPercentile"
        },
        {
          cumulativeReturn: 0.3583193635556037,
          nav: 61268.48185422228,
          percentile: 0.5,
          __typename: "WealthProjectionPercentile"
        },
        {
          cumulativeReturn: 0.3583193635556037,
          nav: 71540.43070141431,
          percentile: 0.7,
          __typename: "WealthProjectionPercentile"
        }
      ],
      __typename: "WealthProjection"
    },
    {
      date: "2031-01-04",
      percentiles: [
        {
          cumulativeReturn: 0.3583193635556037,
          nav: 58198.948768151015,
          percentile: 0.3,
          __typename: "WealthProjectionPercentile"
        },
        {
          cumulativeReturn: 0.3583193635556037,
          nav: 72783.77611283814,
          percentile: 0.5,
          __typename: "WealthProjectionPercentile"
        },
        {
          cumulativeReturn: 0.3583193635556037,
          nav: 87368.60345752527,
          percentile: 0.7,
          __typename: "WealthProjectionPercentile"
        }
      ],
      __typename: "WealthProjection"
    }
  ],
  yearsToMaturity: 0,
  yield: 5.908907498212866,
  __typename: "Analysis2"
};
