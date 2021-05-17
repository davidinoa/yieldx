export const analysisMock = {
  id: "6ffab8b2-6c3f-4c6d-b948-7aa1a8114774",
  portfolioId: "fd2af5ab-4b45-4c19-abd9-1a44c20b2ad2",
  createdAt: "2020-05-22T14:07:18.741492Z",
  updatedAt: "2020-05-22T14:07:18.741492Z",
  risk: 3.599317267062541,
  expenseRatio: 0.359124803671075,
  yearsToMaturity: 0,
  yield: 6.0062152989005035,
  currentCoupon: 0,
  netAssetValue: 200527.635,
  duration: 0,
  issuerConcentration: 0.7902259037810557,
  estimatedPerformance: {
    estimatedMaximumDrawdown: {
      value: -0.13511229557267634,
      startDate: "2020-02-21",
      endDate: "2020-03-23"
    }
  },
  allocations: {
    datastreamType: {
      buckets: [{ name: "Unknown", percentOfNetAssetValue: 1 }]
    },
    datastreamSubtype: {
      buckets: [{ name: "Unknown", percentOfNetAssetValue: 1 }]
    },
    country: {
      no: 0.4611777087033415,
      fi: 0.20566260165088965,
      jp: 1.9244772936084347,
      kr: 0.43552400337240293,
      lu: 0.9181267603490163,
      fr: 1.0052450128881238,
      se: 0.5651838242245264,
      au: 2.3339397770486845,
      sn: 0.5319289048165357,
      gb: 4.500165903946356,
      ie: 0.837831752922733,
      nl: 1.9949026875971483,
      ca: 5.615399351979591,
      us: 57.252558632422414,
      de: 0.48781765559395346,
      hk: 0.6949416322643012,
      ch: 0.4723703414943281,
      dk: 0.09050657456764001,
      it: 0.0233415700983059,
      cn: 0.3611379367761456,
      nz: 0.023281652665977932,
      es: 0.06955360229526468,
      bm: 0.001422642437786692,
      mx: 0.11512655250484553,
      co: 0.25407641841235495,
      ky: 1.2460215317953558,
      at: 0.13384913335511087,
      pe: 0.1321024049627873,
      pl: 0.009094947569196635,
      ru: 0.19319919131345661,
      ua: 0.35908702869806447,
      br: 0.6819096437356378,
      id: 0.18213598282351456,
      ec: 0.019564093487663182,
      eg: 0.19889659296086548,
      ae: 0.2032374704065103,
      in: 0.3623728317645595,
      za: 0.3781688024695449,
      my: 0.02586439478030048,
      ar: 0.48816784274147546,
      ng: 0.2934312573326863,
      pk: 0.09227379070221418,
      tr: 2.44132153342356,
      other: 11.38360073103641
    },
    currency: {
      eur: 0.13917671060150885,
      cad: 0.3404417908683758,
      usd: 100.465613797228,
      aud: 0.0034806457474053387,
      jpy: 0.0015082798238756467,
      gbp: 0.004350807184256673,
      inr: 0.0022624197358134704,
      other: -0.9568344511892377
    },
    debtType: {
      buckets: [
        {
          name: "bonds",
          percentOfNetAssetValue: 6.15160046802028,
          contributors: [
            {
              positionId: "fd2af5ab._04b96c46.buy",
              assetId: "04b96c46-dac4-4efc-a145-97d0943e4cbf",
              percentOfNetAssetValue: 3.433095942112916
            },
            {
              positionId: "fd2af5ab._6f5c3533.buy",
              assetId: "6f5c3533-89be-48ab-806a-ab693cf0a7ff",
              percentOfNetAssetValue: 0.09908238227613864
            },
            {
              positionId: "fd2af5ab._4357f998.buy",
              assetId: "4357f998-6755-40e6-8607-adbd454f9756",
              percentOfNetAssetValue: 0.7246176668916481
            },
            {
              positionId: "fd2af5ab.ab0d2199.buy",
              assetId: "ab0d2199-2717-4ac2-9b68-aee876ffc448",
              percentOfNetAssetValue: 1.9131814442034387
            },
            {
              positionId: "fd2af5ab._71192461.buy",
              assetId: "71192461-e29a-40b2-a5ad-ca92bda40fa4",
              percentOfNetAssetValue: -0.018376967463861027
            }
          ]
        },
        {
          name: "mortgageBackedSecurities",
          percentOfNetAssetValue: 2.256856615927276,
          contributors: [
            {
              positionId: "fd2af5ab._04b96c46.buy",
              assetId: "04b96c46-dac4-4efc-a145-97d0943e4cbf",
              percentOfNetAssetValue: 0.002566179968162493
            },
            {
              positionId: "fd2af5ab._6f5c3533.buy",
              assetId: "6f5c3533-89be-48ab-806a-ab693cf0a7ff",
              percentOfNetAssetValue: 0.010248568034026831
            },
            {
              positionId: "fd2af5ab._8feba4a4.buy",
              assetId: "8feba4a4-1a13-47be-b447-1752287b8e2f",
              percentOfNetAssetValue: 0.44614925793145666
            },
            {
              positionId: "fd2af5ab._4357f998.buy",
              assetId: "4357f998-6755-40e6-8607-adbd454f9756",
              percentOfNetAssetValue: 1.551709873893441
            },
            {
              positionId: "fd2af5ab.ab0d2199.buy",
              assetId: "ab0d2199-2717-4ac2-9b68-aee876ffc448",
              percentOfNetAssetValue: 0.06764534019463202
            },
            {
              positionId: "fd2af5ab._71192461.buy",
              assetId: "71192461-e29a-40b2-a5ad-ca92bda40fa4",
              percentOfNetAssetValue: 0.17853739590555687
            }
          ]
        },
        {
          name: "notes",
          percentOfNetAssetValue: 67.68290452415947,
          contributors: [
            {
              positionId: "fd2af5ab._04b96c46.buy",
              assetId: "04b96c46-dac4-4efc-a145-97d0943e4cbf",
              percentOfNetAssetValue: 6.477174096228682
            },
            {
              positionId: "fd2af5ab._6f5c3533.buy",
              assetId: "6f5c3533-89be-48ab-806a-ab693cf0a7ff",
              percentOfNetAssetValue: 17.34138926424779
            },
            {
              positionId: "fd2af5ab._8feba4a4.buy",
              assetId: "8feba4a4-1a13-47be-b447-1752287b8e2f",
              percentOfNetAssetValue: 14.35181268307483
            },
            {
              positionId: "fd2af5ab._4357f998.buy",
              assetId: "4357f998-6755-40e6-8607-adbd454f9756",
              percentOfNetAssetValue: 2.953533019039994
            },
            {
              positionId: "fd2af5ab.ab0d2199.buy",
              assetId: "ab0d2199-2717-4ac2-9b68-aee876ffc448",
              percentOfNetAssetValue: 26.558995461568173
            }
          ]
        },
        {
          name: "other",
          percentOfNetAssetValue: 20.813236365800652,
          contributors: [
            {
              positionId: "fd2af5ab._04b96c46.buy",
              assetId: "04b96c46-dac4-4efc-a145-97d0943e4cbf",
              percentOfNetAssetValue: 3.596380463969467
            },
            {
              positionId: "fd2af5ab._6f5c3533.buy",
              assetId: "6f5c3533-89be-48ab-806a-ab693cf0a7ff",
              percentOfNetAssetValue: 0.13042753092360562
            },
            {
              positionId: "fd2af5ab._8feba4a4.buy",
              assetId: "8feba4a4-1a13-47be-b447-1752287b8e2f",
              percentOfNetAssetValue: 5.798464666478512
            },
            {
              positionId: "fd2af5ab._4357f998.buy",
              assetId: "4357f998-6755-40e6-8607-adbd454f9756",
              percentOfNetAssetValue: 0.03738726468798178
            },
            {
              positionId: "fd2af5ab.ab0d2199.buy",
              assetId: "ab0d2199-2717-4ac2-9b68-aee876ffc448",
              percentOfNetAssetValue: 0.330509585514236
            },
            {
              positionId: "fd2af5ab._71192461.buy",
              assetId: "71192461-e29a-40b2-a5ad-ca92bda40fa4",
              percentOfNetAssetValue: 10.92006685422685
            }
          ]
        },
        {
          name: "supranationalBonds",
          percentOfNetAssetValue: 1.5780084469878677,
          contributors: [
            {
              positionId: "fd2af5ab._6f5c3533.buy",
              assetId: "6f5c3533-89be-48ab-806a-ab693cf0a7ff",
              percentOfNetAssetValue: 1.4810341024417906
            },
            {
              positionId: "fd2af5ab._4357f998.buy",
              assetId: "4357f998-6755-40e6-8607-adbd454f9756",
              percentOfNetAssetValue: 0.06583457787002774
            },
            {
              positionId: "fd2af5ab.ab0d2199.buy",
              assetId: "ab0d2199-2717-4ac2-9b68-aee876ffc448",
              percentOfNetAssetValue: 0.031139766676049414
            }
          ]
        },
        {
          name: "municipalBonds",
          percentOfNetAssetValue: 0.009299763795648416,
          contributors: [
            {
              positionId: "fd2af5ab._4357f998.buy",
              assetId: "4357f998-6755-40e6-8607-adbd454f9756",
              percentOfNetAssetValue: 0.009299763795648416
            }
          ]
        }
      ]
    },
    region: {
      africaExNorthAfrica: 1.131522054164754,
      asiaPacificExJapan: 3.6989711986829144,
      emergingMarketsAsia: 2.5093588172398285,
      europeExUnitedKingdom: 7.628479309547535,
      japan: 1.9244772936084347,
      latinAmerica: 2.2249855452815765,
      middleEastNorthAfrica: 0.8011317707008313,
      northAmericaExUnitedStates: 8.486826173200516,
      unitedKingdom: 4.509718342830902,
      unitedStates: 59.066436230604815,
      other: 8.018093264137889
    },
    maturity: {
      lessThanOneYear: 29.364735794879344,
      oneToThreeYears: 48.70030859708688,
      threeToFiveYears: 5.599891652749009,
      fiveToTenYears: 1.0652996145468927,
      tenToTwentyYears: 2.4669462427834445,
      twentyToThirtyYears: 8.492037544690534,
      greaterThanThirtyYears: 2.66626191017263,
      other: 1.64451864309126
    },
    rating: {
      investmentGrade: {
        total: 58.610015729505314,
        aaa: 11.156114033841272,
        aa: 14.18828238757466,
        a: 18.617609882413465,
        bbb: 14.648009425675918
      },
      nonInvestmentGrade: {
        total: 145.76707467035405,
        bb: 14.496704086406844,
        b: 10.126094309652135,
        c: 2.5068309935535815,
        d: 0.019835398328015987,
        nr: 118.61760988241346
      }
    },
    sector: { other: 100 }
  },
  wealthProjections: [
    {
      date: "2020-08-22",
      percentiles: [
        { percentile: 0.1, nav: 198780.3158360613 },
        { percentile: 0.5, nav: 203473.12921566138 },
        { percentile: 0.9, nav: 208165.94259526147 }
      ]
    },
    {
      date: "2020-11-22",
      percentiles: [
        { percentile: 0.1, nav: 199727.7648937316 },
        { percentile: 0.5, nav: 206461.88897013242 },
        { percentile: 0.9, nav: 213196.01304653325 }
      ]
    },
    {
      date: "2021-05-22",
      percentiles: [
        { percentile: 0.1, nav: 202766.4363807259 },
        { percentile: 0.5, nav: 212571.75649189338 },
        { percentile: 0.9, nav: 222377.07660306085 }
      ]
    },
    {
      date: "2022-05-22",
      percentiles: [
        { percentile: 0.1, nav: 210639.58630164602 },
        { percentile: 0.5, nav: 225339.273851451 },
        { percentile: 0.9, nav: 240038.96140125598 }
      ]
    },
    {
      date: "2023-05-22",
      percentiles: [
        { percentile: 0.1, nav: 219788.94787493747 },
        { percentile: 0.5, nav: 238873.6357919482 },
        { percentile: 0.9, nav: 257958.32370895895 }
      ]
    },
    {
      date: "2025-05-22",
      percentiles: [
        { percentile: 0.1, nav: 240743.13568038304 },
        { percentile: 0.5, nav: 268429.89312477346 },
        { percentile: 0.9, nav: 296116.65056916384 }
      ]
    },
    {
      date: "2027-05-22",
      percentiles: [
        { percentile: 0.1, nav: 264830.4051236513 },
        { percentile: 0.5, nav: 301643.1984387541 },
        { percentile: 0.9, nav: 338455.9917538569 }
      ]
    },
    {
      date: "2030-05-22",
      percentiles: [
        { percentile: 0.1, nav: 306911.5053001208 },
        { percentile: 0.5, nav: 359325.07518466114 },
        { percentile: 0.9, nav: 411738.64506920154 }
      ]
    }
  ],
  metadata: {}
};
