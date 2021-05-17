import { Analysis } from "@bondhouse/rover-portfolio-analyzer";

const mockAnalysis: Analysis = {
  id: "analysis",
  portfolioId: "axp",
  createdAt: "1984-11-23",
  updatedAt: "1984-11-23",
  risk: 4,
  expenseRatio: 2.223400433843384,
  // eslint-disable-next-line @typescript-eslint/ban-ts-comment
  // @ts-ignore
  yield: 1,
  duration: 2,
  issuerConcentration: 0,
  estimatedPerformance: {
    estimatedMaximumDrawdown: {
      value: -0.21700180680868686,
      startDate: "2020-02-21",
      endDate: "2020-03-23"
    },
    startDate: "2015-09-20",
    endDate: "2020-09-18",
    timeSeries: [
      {
        startDate: "2015-09-18",
        endDate: "2015-09-21",
        cumulativeReturn: -0.0021004545633533933,
        periodReturn: -0.0021004545633534354
      },
      {
        startDate: "2015-09-21",
        endDate: "2015-09-22",
        cumulativeReturn: -0.004327773302131743,
        periodReturn: -0.002232006967999784
      },
      {
        startDate: "2015-09-22",
        endDate: "2015-09-23",
        cumulativeReturn: -0.005328325982727367,
        periodReturn: -0.0010049016672022282
      },
      {
        startDate: "2015-09-23",
        endDate: "2015-09-24",
        cumulativeReturn: -0.008094327821614011,
        periodReturn: -0.002780818948744537
      },
      {
        startDate: "2015-09-24",
        endDate: "2015-09-25",
        cumulativeReturn: -0.009864756020771193,
        periodReturn: -0.0017848755671182927
      },
      {
        startDate: "2015-09-25",
        endDate: "2015-09-28",
        cumulativeReturn: -0.015236122322750734,
        periodReturn: -0.00542488143376533
      },
      {
        startDate: "2015-09-28",
        endDate: "2015-09-29",
        cumulativeReturn: -0.01657437259123873,
        periodReturn: -0.00135895548041886
      },
      {
        startDate: "2015-09-29",
        endDate: "2015-09-30",
        cumulativeReturn: -0.015958661097729032,
        periodReturn: 0.0006260885178801426
      },
      {
        startDate: "2015-09-30",
        endDate: "2015-10-01",
        cumulativeReturn: -0.01567080841457691,
        periodReturn: 0.00029252092546550956
      },
      {
        startDate: "2015-10-01",
        endDate: "2015-10-02",
        cumulativeReturn: -0.014127037674343312,
        periodReturn: 0.0015683480216074572
      },
      {
        startDate: "2015-10-02",
        endDate: "2015-10-05",
        cumulativeReturn: -0.010471599077171212,
        periodReturn: 0.003707819097248516
      },
      {
        startDate: "2015-10-05",
        endDate: "2015-10-06",
        cumulativeReturn: -0.008384492235984475,
        periodReturn: 0.0021091934695762287
      },
      {
        startDate: "2015-10-06",
        endDate: "2015-10-07",
        cumulativeReturn: -0.005823329999889881,
        periodReturn: 0.002582817852324475
      },
      {
        startDate: "2015-10-07",
        endDate: "2015-10-08",
        cumulativeReturn: -0.005394251827954166,
        periodReturn: 0.00043159147149942175
      },
      {
        startDate: "2015-10-08",
        endDate: "2015-10-09",
        cumulativeReturn: -0.003200134054377024,
        periodReturn: 0.0022060175879836915
      },
      {
        startDate: "2015-10-09",
        endDate: "2015-10-12",
        cumulativeReturn: -0.002840715965432783,
        periodReturn: 0.00036057196757668887
      },
      {
        startDate: "2015-10-12",
        endDate: "2015-10-13",
        cumulativeReturn: -0.0031341029673283005,
        periodReturn: -0.0002942228053160029
      },
      {
        startDate: "2015-10-13",
        endDate: "2015-10-14",
        cumulativeReturn: -0.0026015401047239095,
        periodReturn: 0.0005342372170516473
      },
      {
        startDate: "2015-10-14",
        endDate: "2015-10-15",
        cumulativeReturn: -0.002771059921762631,
        periodReturn: -0.00016996197994580776
      },
      {
        startDate: "2015-10-15",
        endDate: "2015-10-16",
        cumulativeReturn: -0.0008706150733748252,
        periodReturn: 0.0019057257285762042
      },
      {
        startDate: "2015-10-16",
        endDate: "2015-10-19",
        cumulativeReturn: -0.0013031468104520716,
        periodReturn: -0.000432908633859221
      },
      {
        startDate: "2015-10-19",
        endDate: "2015-10-20",
        cumulativeReturn: -0.00166255472258936,
        periodReturn: -0.0003598768845515504
      },
      {
        startDate: "2015-10-20",
        endDate: "2015-10-21",
        cumulativeReturn: -0.001506536866419439,
        periodReturn: 0.00015627767635873236
      },
      {
        startDate: "2015-10-21",
        endDate: "2015-10-22",
        cumulativeReturn: -0.00035584236087704557,
        periodReturn: 0.0011524306848551282
      },
      {
        startDate: "2015-10-22",
        endDate: "2015-10-23",
        cumulativeReturn: 0.0006943417533382679,
        periodReturn: 0.001050557947235579
      },
      {
        startDate: "2015-10-23",
        endDate: "2015-10-26",
        cumulativeReturn: 0.0017858297719370864,
        periodReturn: 0.0010907306787468665
      },
      {
        startDate: "2015-10-26",
        endDate: "2015-10-27",
        cumulativeReturn: 0.0011854255737786534,
        periodReturn: -0.0005993338898546684
      },
      {
        startDate: "2015-10-27",
        endDate: "2015-10-28",
        cumulativeReturn: 0.00041880589141740643,
        periodReturn: -0.0007657119877888833
      },
      {
        startDate: "2015-10-28",
        endDate: "2015-10-29",
        cumulativeReturn: -0.002169399843798825,
        periodReturn: -0.002587122233183164
      },
      {
        startDate: "2015-10-29",
        endDate: "2015-10-30",
        cumulativeReturn: -0.002510859558977452,
        periodReturn: -0.0003422020883355968
      },
      {
        startDate: "2015-10-30",
        endDate: "2015-11-02",
        cumulativeReturn: -0.0017340370320197973,
        periodReturn: 0.0007787779289650174
      },
      {
        startDate: "2015-11-02",
        endDate: "2015-11-03",
        cumulativeReturn: -0.000818125941933423,
        periodReturn: 0.0009175020726572553
      },
      {
        startDate: "2015-11-03",
        endDate: "2015-11-04",
        cumulativeReturn: -0.00030084434812760463,
        periodReturn: 0.0005177051418125539
      },
      {
        startDate: "2015-11-04",
        endDate: "2015-11-05",
        cumulativeReturn: -0.0025127339326562748,
        periodReturn: -0.0022125552192613597
      },
      {
        startDate: "2015-11-05",
        endDate: "2015-11-06",
        cumulativeReturn: -0.006762424347429352,
        periodReturn: -0.00426039565550319
      },
      {
        startDate: "2015-11-06",
        endDate: "2015-11-09",
        cumulativeReturn: -0.010077406450371251,
        periodReturn: -0.003337552046159718
      },
      {
        startDate: "2015-11-09",
        endDate: "2015-11-10",
        cumulativeReturn: -0.01060622704190739,
        periodReturn: -0.0005342039821920494
      },
      {
        startDate: "2015-11-10",
        endDate: "2015-11-11",
        cumulativeReturn: -0.010742417510614777,
        periodReturn: -0.00013765042031762571
      },
      {
        startDate: "2015-11-11",
        endDate: "2015-11-12",
        cumulativeReturn: -0.012540596073064347,
        periodReturn: -0.0018177051096486358
      },
      {
        startDate: "2015-11-12",
        endDate: "2015-11-13",
        cumulativeReturn: -0.013083183085204064,
        periodReturn: -0.0005494777911699195
      },
      {
        startDate: "2015-11-13",
        endDate: "2015-11-16",
        cumulativeReturn: -0.01386085440118967,
        periodReturn: -0.0007879806105813647
      },
      {
        startDate: "2015-11-16",
        endDate: "2015-11-17",
        cumulativeReturn: -0.012495856354532986,
        periodReturn: 0.0013841840198197993
      },
      {
        startDate: "2015-11-17",
        endDate: "2015-11-18",
        cumulativeReturn: -0.012545079621871236,
        periodReturn: -0.00004984613751247549
      },
      {
        startDate: "2015-11-18",
        endDate: "2015-11-19",
        cumulativeReturn: -0.012728732020085287,
        periodReturn: -0.00018598560240482148
      },
      {
        startDate: "2015-11-19",
        endDate: "2015-11-20",
        cumulativeReturn: -0.014158346298747793,
        periodReturn: -0.001448046069027898
      },
      {
        startDate: "2015-11-20",
        endDate: "2015-11-23",
        cumulativeReturn: -0.014931550713366049,
        periodReturn: -0.0007843089320839695
      },
      {
        startDate: "2015-11-23",
        endDate: "2015-11-24",
        cumulativeReturn: -0.015481086433839497,
        periodReturn: -0.0005578655177428858
      },
      {
        startDate: "2015-11-24",
        endDate: "2015-11-25",
        cumulativeReturn: -0.015168225359250442,
        periodReturn: 0.0003177806645236591
      },
      {
        startDate: "2015-11-25",
        endDate: "2015-11-26",
        cumulativeReturn: -0.015168225359250442,
        periodReturn: 0
      },
      {
        startDate: "2015-11-26",
        endDate: "2015-11-27",
        cumulativeReturn: -0.01497356360819746,
        periodReturn: 0.00019765990097533333
      },
      {
        startDate: "2015-11-27",
        endDate: "2015-11-30",
        cumulativeReturn: -0.015131396186289225,
        periodReturn: -0.0001602318194320841
      },
      {
        startDate: "2015-11-30",
        endDate: "2015-12-01",
        cumulativeReturn: -0.012533238376282618,
        periodReturn: 0.002638075576727481
      },
      {
        startDate: "2015-12-01",
        endDate: "2015-12-02",
        cumulativeReturn: -0.0137231099724201,
        periodReturn: -0.0012049738202640995
      },
      {
        startDate: "2015-12-02",
        endDate: "2015-12-03",
        cumulativeReturn: -0.019003179863918862,
        periodReturn: -0.0053535370694442475
      },
      {
        startDate: "2015-12-03",
        endDate: "2015-12-04",
        cumulativeReturn: -0.018161379533692013,
        periodReturn: 0.0008581070936703578
      },
      {
        startDate: "2015-12-04",
        endDate: "2015-12-07",
        cumulativeReturn: -0.019260582077174182,
        periodReturn: -0.0011195348406238801
      },
      {
        startDate: "2015-12-07",
        endDate: "2015-12-08",
        cumulativeReturn: -0.022900338018944866,
        periodReturn: -0.003711236517320273
      },
      {
        startDate: "2015-12-08",
        endDate: "2015-12-09",
        cumulativeReturn: -0.023483246932911483,
        periodReturn: -0.0005965705819452481
      },
      {
        startDate: "2015-12-09",
        endDate: "2015-12-10",
        cumulativeReturn: -0.02517521653514876,
        periodReturn: -0.0017326580388130747
      },
      {
        startDate: "2015-12-10",
        endDate: "2015-12-11",
        cumulativeReturn: -0.029326417746585953,
        periodReturn: -0.004258407543438186
      },
      {
        startDate: "2015-12-11",
        endDate: "2015-12-14",
        cumulativeReturn: -0.03655741762233289,
        periodReturn: -0.007449466028487365
      },
      {
        startDate: "2015-12-14",
        endDate: "2015-12-15",
        cumulativeReturn: -0.03405500807131212,
        periodReturn: 0.0025973624134871015
      },
      {
        startDate: "2015-12-15",
        endDate: "2015-12-16",
        cumulativeReturn: -0.032662364117327036,
        periodReturn: 0.0014417425066871232
      },
      {
        startDate: "2015-12-16",
        endDate: "2015-12-17",
        cumulativeReturn: -0.03195952884257136,
        periodReturn: 0.0007265666595453731
      },
      {
        startDate: "2015-12-17",
        endDate: "2015-12-18",
        cumulativeReturn: -0.0351138501282634,
        periodReturn: -0.0032584601364038335
      },
      {
        startDate: "2015-12-18",
        endDate: "2015-12-21",
        cumulativeReturn: -0.035282093360093914,
        periodReturn: -0.0001743658895434478
      },
      {
        startDate: "2015-12-21",
        endDate: "2015-12-22",
        cumulativeReturn: -0.03541815442184926,
        periodReturn: -0.00014103714756291363
      },
      {
        startDate: "2015-12-22",
        endDate: "2015-12-23",
        cumulativeReturn: -0.0333605671404259,
        periodReturn: 0.0021331391326260664
      },
      {
        startDate: "2015-12-23",
        endDate: "2015-12-24",
        cumulativeReturn: -0.03253016940049436,
        periodReturn: 0.0008590563468686607
      },
      {
        startDate: "2015-12-24",
        endDate: "2015-12-25",
        cumulativeReturn: -0.03253016940049436,
        periodReturn: 0
      },
      {
        startDate: "2015-12-25",
        endDate: "2015-12-28",
        cumulativeReturn: -0.032324056363152276,
        periodReturn: 0.00021304337440092546
      },
      {
        startDate: "2015-12-28",
        endDate: "2015-12-29",
        cumulativeReturn: -0.03234022471995246,
        periodReturn: -0.00001670844140173454
      },
      {
        startDate: "2015-12-29",
        endDate: "2015-12-30",
        cumulativeReturn: -0.03217655362823191,
        periodReturn: 0.00016914115467199704
      },
      {
        startDate: "2015-12-30",
        endDate: "2015-12-31",
        cumulativeReturn: -0.03142868291263823,
        periodReturn: 0.0007727346536161581
      },
      {
        startDate: "2015-12-31",
        endDate: "2016-01-01",
        cumulativeReturn: -0.03142868291263823,
        periodReturn: 0
      },
      {
        startDate: "2016-01-01",
        endDate: "2016-01-04",
        cumulativeReturn: -0.03238694793259245,
        periodReturn: -0.0009893592790212312
      },
      {
        startDate: "2016-01-04",
        endDate: "2016-01-05",
        cumulativeReturn: -0.03089898365590149,
        periodReturn: 0.0015377678851186594
      },
      {
        startDate: "2016-01-05",
        endDate: "2016-01-06",
        cumulativeReturn: -0.030331661816176303,
        periodReturn: 0.0005854104269390876
      },
      {
        startDate: "2016-01-06",
        endDate: "2016-01-07",
        cumulativeReturn: -0.033296820574050146,
        periodReturn: -0.0030579102576738116
      },
      {
        startDate: "2016-01-07",
        endDate: "2016-01-08",
        cumulativeReturn: -0.03204126111214012,
        periodReturn: 0.0012988055575193864
      },
      {
        startDate: "2016-01-08",
        endDate: "2016-01-11",
        cumulativeReturn: -0.03360727233988281,
        periodReturn: -0.0016178491549567106
      },
      {
        startDate: "2016-01-11",
        endDate: "2016-01-12",
        cumulativeReturn: -0.03364037710732304,
        periodReturn: -0.00003425601879298988
      },
      {
        startDate: "2016-01-12",
        endDate: "2016-01-13",
        cumulativeReturn: -0.03616820367509532,
        periodReturn: -0.002615823869177804
      },
      {
        startDate: "2016-01-13",
        endDate: "2016-01-14",
        cumulativeReturn: -0.03924052125337685,
        periodReturn: -0.0031876076199148697
      },
      {
        startDate: "2016-01-14",
        endDate: "2016-01-15",
        cumulativeReturn: -0.04495901567143423,
        periodReturn: -0.0059520562061147475
      },
      {
        startDate: "2016-01-15",
        endDate: "2016-01-18",
        cumulativeReturn: -0.04495901567143423,
        periodReturn: 0
      },
      {
        startDate: "2016-01-18",
        endDate: "2016-01-19",
        cumulativeReturn: -0.04571590676728843,
        periodReturn: -0.0007925221098090391
      },
      {
        startDate: "2016-01-19",
        endDate: "2016-01-20",
        cumulativeReturn: -0.05275367311237633,
        periodReturn: -0.007374917380469963
      },
      {
        startDate: "2016-01-20",
        endDate: "2016-01-21",
        cumulativeReturn: -0.05166882365378522,
        periodReturn: 0.0011452664716638012
      },
      {
        startDate: "2016-01-21",
        endDate: "2016-01-22",
        cumulativeReturn: -0.04637341299183728,
        periodReturn: 0.005583925525205804
      },
      {
        startDate: "2016-01-22",
        endDate: "2016-01-25",
        cumulativeReturn: -0.04829569947111134,
        periodReturn: -0.0020157643520665783
      },
      {
        startDate: "2016-01-25",
        endDate: "2016-01-26",
        cumulativeReturn: -0.047071974957689555,
        periodReturn: 0.001285824297254633
      },
      {
        startDate: "2016-01-26",
        endDate: "2016-01-27",
        cumulativeReturn: -0.04616808389799176,
        periodReturn: 0.0009485407459368898
      },
      {
        startDate: "2016-01-27",
        endDate: "2016-01-28",
        cumulativeReturn: -0.045016762905810026,
        periodReturn: 0.001207048089653771
      },
      {
        startDate: "2016-01-28",
        endDate: "2016-01-29",
        cumulativeReturn: -0.04163347330798661,
        periodReturn: 0.0035427738062901565
      },
      {
        startDate: "2016-01-29",
        endDate: "2016-02-01",
        cumulativeReturn: -0.04297127394349165,
        periodReturn: -0.0013959175307621569
      },
      {
        startDate: "2016-02-01",
        endDate: "2016-02-02",
        cumulativeReturn: -0.04414141604569444,
        periodReturn: -0.0012226823190820077
      },
      {
        startDate: "2016-02-02",
        endDate: "2016-02-03",
        cumulativeReturn: -0.04537993221401926,
        periodReturn: -0.0012957106721803496
      },
      {
        startDate: "2016-02-03",
        endDate: "2016-02-04",
        cumulativeReturn: -0.04644109365942595,
        periodReturn: -0.0011116060527282285
      },
      {
        startDate: "2016-02-04",
        endDate: "2016-02-05",
        cumulativeReturn: -0.049264462077114324,
        periodReturn: -0.0029608746758220785
      },
      {
        startDate: "2016-02-05",
        endDate: "2016-02-08",
        cumulativeReturn: -0.05456954014756499,
        periodReturn: -0.005579972409615543
      },
      {
        startDate: "2016-02-08",
        endDate: "2016-02-09",
        cumulativeReturn: -0.05801283701148452,
        periodReturn: -0.0036420413876415494
      },
      {
        startDate: "2016-02-09",
        endDate: "2016-02-10",
        cumulativeReturn: -0.05709002506800265,
        periodReturn: 0.000979643863249972
      },
      {
        startDate: "2016-02-10",
        endDate: "2016-02-11",
        cumulativeReturn: -0.06388646688053912,
        periodReturn: -0.0072079434868918746
      },
      {
        startDate: "2016-02-11",
        endDate: "2016-02-12",
        cumulativeReturn: -0.06279255532627792,
        periodReturn: 0.0011685671828884974
      },
      {
        startDate: "2016-02-12",
        endDate: "2016-02-15",
        cumulativeReturn: -0.06279255532627792,
        periodReturn: 0
      },
      {
        startDate: "2016-02-15",
        endDate: "2016-02-16",
        cumulativeReturn: -0.06092808221831225,
        periodReturn: 0.0019893921229091126
      },
      {
        startDate: "2016-02-16",
        endDate: "2016-02-17",
        cumulativeReturn: -0.05678353000153302,
        periodReturn: 0.004413455602601451
      },
      {
        startDate: "2016-02-17",
        endDate: "2016-02-18",
        cumulativeReturn: -0.0542436060527004,
        periodReturn: 0.002692832482915424
      },
      {
        startDate: "2016-02-18",
        endDate: "2016-02-19",
        cumulativeReturn: -0.05572168595074056,
        periodReturn: -0.0015628547768746044
      },
      {
        startDate: "2016-02-19",
        endDate: "2016-02-22",
        cumulativeReturn: -0.054322243720241636,
        periodReturn: 0.001482023053667226
      },
      {
        startDate: "2016-02-22",
        endDate: "2016-02-23",
        cumulativeReturn: -0.05557532970270551,
        periodReturn: -0.0013250665717182237
      },
      {
        startDate: "2016-02-23",
        endDate: "2016-02-24",
        cumulativeReturn: -0.05764993040455768,
        periodReturn: -0.0021966820299168708
      },
      {
        startDate: "2016-02-24",
        endDate: "2016-02-25",
        cumulativeReturn: -0.054667183435922806,
        periodReturn: 0.0031652217842095555
      },
      {
        startDate: "2016-02-25",
        endDate: "2016-02-26",
        cumulativeReturn: -0.052158093435873965,
        periodReturn: 0.002654186923467335
      },
      {
        startDate: "2016-02-26",
        endDate: "2016-02-29",
        cumulativeReturn: -0.04958706906249877,
        periodReturn: 0.00271250337801067
      },
      {
        startDate: "2016-02-29",
        endDate: "2016-03-01",
        cumulativeReturn: -0.047376593003470524,
        periodReturn: 0.0023258059597819052
      },
      {
        startDate: "2016-03-01",
        endDate: "2016-03-02",
        cumulativeReturn: -0.04112361619564675,
        periodReturn: 0.006563954614067566
      },
      {
        startDate: "2016-03-02",
        endDate: "2016-03-03",
        cumulativeReturn: -0.041880772449933046,
        periodReturn: -0.0007896286393897298
      },
      {
        startDate: "2016-03-03",
        endDate: "2016-03-04",
        cumulativeReturn: -0.039471069367627454,
        periodReturn: 0.0025150346773305673
      },
      {
        startDate: "2016-03-04",
        endDate: "2016-03-07",
        cumulativeReturn: -0.0383830136730251,
        periodReturn: 0.0011327672284539576
      },
      {
        startDate: "2016-03-07",
        endDate: "2016-03-08",
        cumulativeReturn: -0.037977830201118,
        periodReturn: 0.00042135640038423934
      },
      {
        startDate: "2016-03-08",
        endDate: "2016-03-09",
        cumulativeReturn: -0.03862490670325747,
        periodReturn: -0.0006726211956994458
      },
      {
        startDate: "2016-03-09",
        endDate: "2016-03-10",
        cumulativeReturn: -0.03755511264670219,
        periodReturn: 0.0011127748825765194
      },
      {
        startDate: "2016-03-10",
        endDate: "2016-03-11",
        cumulativeReturn: -0.03246641530371497,
        periodReturn: 0.005287261026427182
      },
      {
        startDate: "2016-03-11",
        endDate: "2016-03-14",
        cumulativeReturn: -0.030796741005196915,
        periodReturn: 0.0017257016448087045
      },
      {
        startDate: "2016-03-14",
        endDate: "2016-03-15",
        cumulativeReturn: -0.03224916017084245,
        periodReturn: -0.00149857024537028
      },
      {
        startDate: "2016-03-15",
        endDate: "2016-03-16",
        cumulativeReturn: -0.030858906478383852,
        periodReturn: 0.0014365822639885396
      },
      {
        startDate: "2016-03-16",
        endDate: "2016-03-17",
        cumulativeReturn: -0.02588225779145359,
        periodReturn: 0.005135112647887456
      },
      {
        startDate: "2016-03-17",
        endDate: "2016-03-18",
        cumulativeReturn: -0.0207853233074059,
        periodReturn: 0.005232359768431771
      },
      {
        startDate: "2016-03-18",
        endDate: "2016-03-21",
        cumulativeReturn: -0.020448684423293395,
        periodReturn: 0.00034378455728369545
      },
      {
        startDate: "2016-03-21",
        endDate: "2016-03-22",
        cumulativeReturn: -0.020882171114192438,
        periodReturn: -0.00044253596928078566
      },
      {
        startDate: "2016-03-22",
        endDate: "2016-03-23",
        cumulativeReturn: -0.020943146942515645,
        periodReturn: -0.00006227629252003278
      },
      {
        startDate: "2016-03-23",
        endDate: "2016-03-24",
        cumulativeReturn: -0.023755676711567197,
        periodReturn: -0.002872693000685551
      },
      {
        startDate: "2016-03-24",
        endDate: "2016-03-25",
        cumulativeReturn: -0.023755676711567197,
        periodReturn: 0
      },
      {
        startDate: "2016-03-25",
        endDate: "2016-03-28",
        cumulativeReturn: -0.02390845521868379,
        periodReturn: -0.0001564961797697336
      },
      {
        startDate: "2016-03-28",
        endDate: "2016-03-29",
        cumulativeReturn: -0.02232928709757842,
        periodReturn: 0.0016178483765671447
      },
      {
        startDate: "2016-03-29",
        endDate: "2016-03-30",
        cumulativeReturn: -0.01893264641234005,
        periodReturn: 0.0034742174848980535
      },
      {
        startDate: "2016-03-30",
        endDate: "2016-03-31",
        cumulativeReturn: -0.01728331309001352,
        periodReturn: 0.0016811621712770578
      },
      {
        startDate: "2016-03-31",
        endDate: "2016-04-01",
        cumulativeReturn: -0.01697251291932622,
        periodReturn: 0.00031626630017310376
      },
      {
        startDate: "2016-04-01",
        endDate: "2016-04-04",
        cumulativeReturn: -0.015719986603244696,
        periodReturn: 0.0012741518752453313
      },
      {
        startDate: "2016-04-04",
        endDate: "2016-04-05",
        cumulativeReturn: -0.01697018492324498,
        periodReturn: -0.001270165301524178
      },
      {
        startDate: "2016-04-05",
        endDate: "2016-04-06",
        cumulativeReturn: -0.015259316595745198,
        periodReturn: 0.0017404032932269394
      },
      {
        startDate: "2016-04-06",
        endDate: "2016-04-07",
        cumulativeReturn: -0.014611144653761454,
        periodReturn: 0.0006582158662756257
      },
      {
        startDate: "2016-04-07",
        endDate: "2016-04-08",
        cumulativeReturn: -0.013646874401016973,
        periodReturn: 0.0009785682550729482
      },
      {
        startDate: "2016-04-08",
        endDate: "2016-04-11",
        cumulativeReturn: -0.01250949633878884,
        periodReturn: 0.0011531144705780234
      },
      {
        startDate: "2016-04-11",
        endDate: "2016-04-12",
        cumulativeReturn: -0.010514853271356706,
        periodReturn: 0.002019911138423005
      },
      {
        startDate: "2016-04-12",
        endDate: "2016-04-13",
        cumulativeReturn: -0.006403902477551071,
        periodReturn: 0.004154636183672918
      },
      {
        startDate: "2016-04-13",
        endDate: "2016-04-14",
        cumulativeReturn: -0.005186038097980683,
        periodReturn: 0.0012257137307675862
      },
      {
        startDate: "2016-04-14",
        endDate: "2016-04-15",
        cumulativeReturn: -0.0037858507486052684,
        periodReturn: 0.0014074866286539931
      },
      {
        startDate: "2016-04-15",
        endDate: "2016-04-18",
        cumulativeReturn: -0.003840750957710748,
        periodReturn: -0.00005510884295984356
      },
      {
        startDate: "2016-04-18",
        endDate: "2016-04-19",
        cumulativeReturn: -0.0005767756157492032,
        periodReturn: 0.0032765597921211955
      },
      {
        startDate: "2016-04-19",
        endDate: "2016-04-20",
        cumulativeReturn: 0.0012199435440103379,
        periodReturn: 0.0017977560616189798
      },
      {
        startDate: "2016-04-20",
        endDate: "2016-04-21",
        cumulativeReturn: 0.002025419158129038,
        periodReturn: 0.0008044941766415559
      },
      {
        startDate: "2016-04-21",
        endDate: "2016-04-22",
        cumulativeReturn: 0.0025660797623847653,
        periodReturn: 0.0005395677533907403
      },
      {
        startDate: "2016-04-22",
        endDate: "2016-04-25",
        cumulativeReturn: 0.0020354459347655673,
        periodReturn: -0.0005292756640490509
      },
      {
        startDate: "2016-04-25",
        endDate: "2016-04-26",
        cumulativeReturn: 0.001423422082985626,
        periodReturn: -0.0006107806408077132
      },
      {
        startDate: "2016-04-26",
        endDate: "2016-04-27",
        cumulativeReturn: 0.004101716658635457,
        periodReturn: 0.0026744876508667894
      },
      {
        startDate: "2016-04-27",
        endDate: "2016-04-28",
        cumulativeReturn: 0.007486248753184377,
        periodReturn: 0.0033707064119076393
      },
      {
        startDate: "2016-04-28",
        endDate: "2016-04-29",
        cumulativeReturn: 0.008288561264629513,
        periodReturn: 0.0007963508310290726
      },
      {
        startDate: "2016-04-29",
        endDate: "2016-05-02",
        cumulativeReturn: 0.00797178486590533,
        periodReturn: -0.0003141723618553341
      },
      {
        startDate: "2016-05-02",
        endDate: "2016-05-03",
        cumulativeReturn: 0.00662555671671039,
        periodReturn: -0.0013355811833304714
      },
      {
        startDate: "2016-05-03",
        endDate: "2016-05-04",
        cumulativeReturn: 0.006209690357102726,
        periodReturn: -0.00041312914899963667
      },
      {
        startDate: "2016-05-04",
        endDate: "2016-05-05",
        cumulativeReturn: 0.007403292978720666,
        periodReturn: 0.0011862364605080135
      },
      {
        startDate: "2016-05-05",
        endDate: "2016-05-06",
        cumulativeReturn: 0.00588316569230285,
        periodReturn: -0.0015089560427415333
      },
      {
        startDate: "2016-05-06",
        endDate: "2016-05-09",
        cumulativeReturn: 0.006487022329196179,
        periodReturn: 0.0006003248264700878
      },
      {
        startDate: "2016-05-09",
        endDate: "2016-05-10",
        cumulativeReturn: 0.008145094573106748,
        periodReturn: 0.0016473856166306397
      },
      {
        startDate: "2016-05-10",
        endDate: "2016-05-11",
        cumulativeReturn: 0.00911316820439989,
        periodReturn: 0.0009602522856127701
      },
      {
        startDate: "2016-05-11",
        endDate: "2016-05-12",
        cumulativeReturn: 0.009536736067703,
        periodReturn: 0.00041974267767896185
      },
      {
        startDate: "2016-05-12",
        endDate: "2016-05-13",
        cumulativeReturn: 0.010551181339012894,
        periodReturn: 0.0010048621660477893
      },
      {
        startDate: "2016-05-13",
        endDate: "2016-05-16",
        cumulativeReturn: 0.011393147470118992,
        periodReturn: 0.0008331751490214909
      },
      {
        startDate: "2016-05-16",
        endDate: "2016-05-17",
        cumulativeReturn: 0.011248199499698686,
        periodReturn: -0.0001433151596713772
      },
      {
        startDate: "2016-05-17",
        endDate: "2016-05-18",
        cumulativeReturn: 0.009713957927121042,
        periodReturn: -0.001517176073427479
      },
      {
        startDate: "2016-05-18",
        endDate: "2016-05-19",
        cumulativeReturn: 0.007537755783151079,
        periodReturn: -0.0021552659809097145
      },
      {
        startDate: "2016-05-19",
        endDate: "2016-05-20",
        cumulativeReturn: 0.008932526202290791,
        periodReturn: 0.0013843356351995887
      },
      {
        startDate: "2016-05-20",
        endDate: "2016-05-23",
        cumulativeReturn: 0.009732428678780103,
        periodReturn: 0.0007928205858326351
      },
      {
        startDate: "2016-05-23",
        endDate: "2016-05-24",
        cumulativeReturn: 0.011587576790898613,
        periodReturn: 0.0018372670416714764
      },
      {
        startDate: "2016-05-24",
        endDate: "2016-05-25",
        cumulativeReturn: 0.013644017033259459,
        periodReturn: 0.00203288404241253
      },
      {
        startDate: "2016-05-25",
        endDate: "2016-05-26",
        cumulativeReturn: 0.015379500328601248,
        periodReturn: 0.0017121230591597293
      },
      {
        startDate: "2016-05-26",
        endDate: "2016-05-27",
        cumulativeReturn: 0.01608490167108778,
        periodReturn: 0.0006947169430328362
      },
      {
        startDate: "2016-05-27",
        endDate: "2016-05-30",
        cumulativeReturn: 0.01608490167108778,
        periodReturn: 0
      },
      {
        startDate: "2016-05-30",
        endDate: "2016-05-31",
        cumulativeReturn: 0.016973179966124574,
        periodReturn: 0.0008742166068761093
      },
      {
        startDate: "2016-05-31",
        endDate: "2016-06-01",
        cumulativeReturn: 0.01642013995802949,
        periodReturn: -0.0005438098260502307
      },
      {
        startDate: "2016-06-01",
        endDate: "2016-06-02",
        cumulativeReturn: 0.018671053899792955,
        periodReturn: 0.002214550709174719
      },
      {
        startDate: "2016-06-02",
        endDate: "2016-06-03",
        cumulativeReturn: 0.022232180127654377,
        periodReturn: 0.0034958549320002097
      },
      {
        startDate: "2016-06-03",
        endDate: "2016-06-06",
        cumulativeReturn: 0.02421528883770785,
        periodReturn: 0.0019399787529734115
      },
      {
        startDate: "2016-06-06",
        endDate: "2016-06-07",
        cumulativeReturn: 0.02788899477869,
        periodReturn: 0.0035868493480029785
      },
      {
        startDate: "2016-06-07",
        endDate: "2016-06-08",
        cumulativeReturn: 0.030464366752731786,
        periodReturn: 0.0025054962035042285
      },
      {
        startDate: "2016-06-08",
        endDate: "2016-06-09",
        cumulativeReturn: 0.03134720069447505,
        periodReturn: 0.0008567340805051858
      },
      {
        startDate: "2016-06-09",
        endDate: "2016-06-10",
        cumulativeReturn: 0.030842198299694257,
        periodReturn: -0.000489653139544742
      },
      {
        startDate: "2016-06-10",
        endDate: "2016-06-13",
        cumulativeReturn: 0.029563278009101968,
        periodReturn: -0.0012406557402304627
      },
      {
        startDate: "2016-06-13",
        endDate: "2016-06-14",
        cumulativeReturn: 0.026125654494822514,
        periodReturn: -0.00333891426365437
      },
      {
        startDate: "2016-06-14",
        endDate: "2016-06-15",
        cumulativeReturn: 0.02762856704312977,
        periodReturn: 0.0014646476693413286
      },
      {
        startDate: "2016-06-15",
        endDate: "2016-06-16",
        cumulativeReturn: 0.02598967619144954,
        periodReturn: -0.0015948280383017255
      },
      {
        startDate: "2016-06-16",
        endDate: "2016-06-17",
        cumulativeReturn: 0.027260782118070814,
        periodReturn: 0.001238907131443764
      },
      {
        startDate: "2016-06-17",
        endDate: "2016-06-20",
        cumulativeReturn: 0.03033172415687102,
        periodReturn: 0.0029894473655153395
      },
      {
        startDate: "2016-06-20",
        endDate: "2016-06-21",
        cumulativeReturn: 0.03025280766482341,
        periodReturn: -0.00007659328563541527
      },
      {
        startDate: "2016-06-21",
        endDate: "2016-06-22",
        cumulativeReturn: 0.033014137314334,
        periodReturn: 0.002680244721457683
      },
      {
        startDate: "2016-06-22",
        endDate: "2016-06-23",
        cumulativeReturn: 0.035036450334596125,
        periodReturn: 0.0019576818430771274
      },
      {
        startDate: "2016-06-23",
        endDate: "2016-06-24",
        cumulativeReturn: 0.030102922529596343,
        periodReturn: -0.004766525665260399
      },
      {
        startDate: "2016-06-24",
        endDate: "2016-06-27",
        cumulativeReturn: 0.02742672029147797,
        periodReturn: -0.002597994996021035
      },
      {
        startDate: "2016-06-27",
        endDate: "2016-06-28",
        cumulativeReturn: 0.030122574461153295,
        periodReturn: 0.0026238894866493214
      },
      {
        startDate: "2016-06-28",
        endDate: "2016-06-29",
        cumulativeReturn: 0.035632296935896646,
        periodReturn: 0.005348608613519053
      },
      {
        startDate: "2016-06-29",
        endDate: "2016-06-30",
        cumulativeReturn: 0.03840866596455772,
        periodReturn: 0.002680844385478628
      },
      {
        startDate: "2016-06-30",
        endDate: "2016-07-01",
        cumulativeReturn: 0.04151491194439383,
        periodReturn: 0.002991352134904206
      },
      {
        startDate: "2016-07-01",
        endDate: "2016-07-04",
        cumulativeReturn: 0.04151491194439383,
        periodReturn: 0
      },
      {
        startDate: "2016-07-04",
        endDate: "2016-07-05",
        cumulativeReturn: 0.042906553767311006,
        periodReturn: 0.0013361708094213835
      },
      {
        startDate: "2016-07-05",
        endDate: "2016-07-06",
        cumulativeReturn: 0.04321487903290344,
        periodReturn: 0.00029564035673065815
      },
      {
        startDate: "2016-07-06",
        endDate: "2016-07-07",
        cumulativeReturn: 0.0447198011027401,
        periodReturn: 0.0014425811020178732
      },
      {
        startDate: "2016-07-07",
        endDate: "2016-07-08",
        cumulativeReturn: 0.04864202509941995,
        periodReturn: 0.0037543310584711204
      },
      {
        startDate: "2016-07-08",
        endDate: "2016-07-11",
        cumulativeReturn: 0.05086996799171728,
        periodReturn: 0.002124598136419508
      },
      {
        startDate: "2016-07-11",
        endDate: "2016-07-12",
        cumulativeReturn: 0.052684881981256426,
        periodReturn: 0.001727058575103758
      },
      {
        startDate: "2016-07-12",
        endDate: "2016-07-13",
        cumulativeReturn: 0.053885124185304,
        periodReturn: 0.0011401723579317017
      },
      {
        startDate: "2016-07-13",
        endDate: "2016-07-14",
        cumulativeReturn: 0.05505342320780948,
        periodReturn: 0.001108563918110842
      },
      {
        startDate: "2016-07-14",
        endDate: "2016-07-15",
        cumulativeReturn: 0.05552622863734169,
        periodReturn: 0.000448134112578692
      },
      {
        startDate: "2016-07-15",
        endDate: "2016-07-18",
        cumulativeReturn: 0.05625439819240596,
        periodReturn: 0.0006898640084048747
      },
      {
        startDate: "2016-07-18",
        endDate: "2016-07-19",
        cumulativeReturn: 0.0569823210296212,
        periodReturn: 0.0006891548460872574
      },
      {
        startDate: "2016-07-19",
        endDate: "2016-07-20",
        cumulativeReturn: 0.057993653824479185,
        periodReturn: 0.0009568114572370209
      },
      {
        startDate: "2016-07-20",
        endDate: "2016-07-21",
        cumulativeReturn: 0.05944021439685865,
        periodReturn: 0.001367267721455914
      },
      {
        startDate: "2016-07-21",
        endDate: "2016-07-22",
        cumulativeReturn: 0.06146479011134853,
        periodReturn: 0.001910986280280677
      },
      {
        startDate: "2016-07-22",
        endDate: "2016-07-25",
        cumulativeReturn: 0.06225261485829914,
        periodReturn: 0.0007422052566322544
      },
      {
        startDate: "2016-07-25",
        endDate: "2016-07-26",
        cumulativeReturn: 0.06190101438958906,
        periodReturn: -0.00033099515481730443
      },
      {
        startDate: "2016-07-26",
        endDate: "2016-07-27",
        cumulativeReturn: 0.06296503480572135,
        periodReturn: 0.00100199585621828
      },
      {
        startDate: "2016-07-27",
        endDate: "2016-07-28",
        cumulativeReturn: 0.06360380055724035,
        periodReturn: 0.0006009282813670541
      },
      {
        startDate: "2016-07-28",
        endDate: "2016-07-29",
        cumulativeReturn: 0.06535749170295624,
        periodReturn: 0.0016488199316297047
      },
      {
        startDate: "2016-07-29",
        endDate: "2016-08-01",
        cumulativeReturn: 0.06545305991818062,
        periodReturn: 0.00008970530171189352
      },
      {
        startDate: "2016-08-01",
        endDate: "2016-08-02",
        cumulativeReturn: 0.06441180636011201,
        periodReturn: -0.0009772871252992027
      },
      {
        startDate: "2016-08-02",
        endDate: "2016-08-03",
        cumulativeReturn: 0.06492996597389511,
        periodReturn: 0.0004868037076318095
      },
      {
        startDate: "2016-08-03",
        endDate: "2016-08-04",
        cumulativeReturn: 0.06805546359400894,
        periodReturn: 0.002934932549536745
      },
      {
        startDate: "2016-08-04",
        endDate: "2016-08-05",
        cumulativeReturn: 0.0692389450248807,
        periodReturn: 0.0011080711360151674
      },
      {
        startDate: "2016-08-05",
        endDate: "2016-08-08",
        cumulativeReturn: 0.07122894577544248,
        periodReturn: 0.0018611375500502127
      },
      {
        startDate: "2016-08-08",
        endDate: "2016-08-09",
        cumulativeReturn: 0.07326777878483037,
        periodReturn: 0.001903265419991178
      },
      {
        startDate: "2016-08-09",
        endDate: "2016-08-10",
        cumulativeReturn: 0.07611194112245667,
        periodReturn: 0.0026500025379001214
      },
      {
        startDate: "2016-08-10",
        endDate: "2016-08-11",
        cumulativeReturn: 0.07532742296248274,
        periodReturn: -0.0007290302523318975
      },
      {
        startDate: "2016-08-11",
        endDate: "2016-08-12",
        cumulativeReturn: 0.07721359575099451,
        periodReturn: 0.001754045091973626
      },
      {
        startDate: "2016-08-12",
        endDate: "2016-08-15",
        cumulativeReturn: 0.0783267605893172,
        periodReturn: 0.001033374293374531
      },
      {
        startDate: "2016-08-15",
        endDate: "2016-08-16",
        cumulativeReturn: 0.07918936367755447,
        periodReturn: 0.0007999459159911021
      },
      {
        startDate: "2016-08-16",
        endDate: "2016-08-17",
        cumulativeReturn: 0.07942567651609189,
        periodReturn: 0.00021897254225340578
      },
      {
        startDate: "2016-08-17",
        endDate: "2016-08-18",
        cumulativeReturn: 0.08053379009007067,
        periodReturn: 0.0010265770011653207
      },
      {
        startDate: "2016-08-18",
        endDate: "2016-08-19",
        cumulativeReturn: 0.08011042260254886,
        periodReturn: -0.0003918132791445626
      },
      {
        startDate: "2016-08-19",
        endDate: "2016-08-22",
        cumulativeReturn: 0.08043396061210761,
        periodReturn: 0.00029954160499560923
      },
      {
        startDate: "2016-08-22",
        endDate: "2016-08-23",
        cumulativeReturn: 0.08191228004540108,
        periodReturn: 0.0013682645003643395
      },
      {
        startDate: "2016-08-23",
        endDate: "2016-08-24",
        cumulativeReturn: 0.08271239269129804,
        periodReturn: 0.0007395355988226303
      },
      {
        startDate: "2016-08-24",
        endDate: "2016-08-25",
        cumulativeReturn: 0.08191316612242927,
        periodReturn: -0.0007381707037472368
      },
      {
        startDate: "2016-08-25",
        endDate: "2016-08-26",
        cumulativeReturn: 0.08101246503935,
        periodReturn: -0.0008325077384051949
      },
      {
        startDate: "2016-08-26",
        endDate: "2016-08-29",
        cumulativeReturn: 0.08403654868760801,
        periodReturn: 0.002797454928651515
      },
      {
        startDate: "2016-08-29",
        endDate: "2016-08-30",
        cumulativeReturn: 0.08442464937798588,
        periodReturn: 0.0003580143961452386
      },
      {
        startDate: "2016-08-30",
        endDate: "2016-08-31",
        cumulativeReturn: 0.08332986038018952,
        periodReturn: -0.0010095574629590336
      },
      {
        startDate: "2016-08-31",
        endDate: "2016-09-01",
        cumulativeReturn: 0.08319423227638811,
        periodReturn: -0.00012519557409215802
      },
      {
        startDate: "2016-09-01",
        endDate: "2016-09-02",
        cumulativeReturn: 0.08446993402539471,
        periodReturn: 0.0011777220658990126
      },
      {
        startDate: "2016-09-02",
        endDate: "2016-09-05",
        cumulativeReturn: 0.08446993402539471,
        periodReturn: 0
      },
      {
        startDate: "2016-09-05",
        endDate: "2016-09-06",
        cumulativeReturn: 0.08747946068491119,
        periodReturn: 0.002775113043794075
      },
      {
        startDate: "2016-09-06",
        endDate: "2016-09-07",
        cumulativeReturn: 0.08882282116904716,
        periodReturn: 0.0012352973391239494
      },
      {
        startDate: "2016-09-07",
        endDate: "2016-09-08",
        cumulativeReturn: 0.08818758205148347,
        periodReturn: -0.0005834182616429531
      },
      {
        startDate: "2016-09-08",
        endDate: "2016-09-09",
        cumulativeReturn: 0.08489529251509853,
        periodReturn: -0.0030254797892273256
      },
      {
        startDate: "2016-09-09",
        endDate: "2016-09-12",
        cumulativeReturn: 0.08450390397595187,
        periodReturn: -0.00036076157934026047
      },
      {
        startDate: "2016-09-12",
        endDate: "2016-09-13",
        cumulativeReturn: 0.08189334900032619,
        periodReturn: -0.0024071420730297833
      },
      {
        startDate: "2016-09-13",
        endDate: "2016-09-14",
        cumulativeReturn: 0.08236122178267569,
        periodReturn: 0.0004324573977478866
      },
      {
        startDate: "2016-09-14",
        endDate: "2016-09-15",
        cumulativeReturn: 0.0833054067996093,
        periodReturn: 0.0008723381787261652
      },
      {
        startDate: "2016-09-15",
        endDate: "2016-09-16",
        cumulativeReturn: 0.08261989480481469,
        periodReturn: -0.0006327966153329206
      },
      {
        startDate: "2016-09-16",
        endDate: "2016-09-19",
        cumulativeReturn: 0.0834413547053745,
        periodReturn: 0.0007587703722256251
      },
      {
        startDate: "2016-09-19",
        endDate: "2016-09-20",
        cumulativeReturn: 0.0845174551511465,
        periodReturn: 0.0009932244519728992
      },
      {
        startDate: "2016-09-20",
        endDate: "2016-09-21",
        cumulativeReturn: 0.08619333417554098,
        periodReturn: 0.0015452762114934043
      },
      {
        startDate: "2016-09-21",
        endDate: "2016-09-22",
        cumulativeReturn: 0.09133131890926505,
        periodReturn: 0.00473026722965856
      },
      {
        startDate: "2016-09-22",
        endDate: "2016-09-23",
        cumulativeReturn: 0.09159514953852366,
        periodReturn: 0.00024175117554794053
      },
      {
        startDate: "2016-09-23",
        endDate: "2016-09-26",
        cumulativeReturn: 0.09120773547065553,
        periodReturn: -0.0003549063661852997
      },
      {
        startDate: "2016-09-26",
        endDate: "2016-09-27",
        cumulativeReturn: 0.09160674635916921,
        periodReturn: 0.00036565987899790295
      },
      {
        startDate: "2016-09-27",
        endDate: "2016-09-28",
        cumulativeReturn: 0.09304215068844512,
        periodReturn: 0.0013149463706261845
      },
      {
        startDate: "2016-09-28",
        endDate: "2016-09-29",
        cumulativeReturn: 0.09487672335612851,
        periodReturn: 0.0016784098092902796
      },
      {
        startDate: "2016-09-29",
        endDate: "2016-09-30",
        cumulativeReturn: 0.0951542839203443,
        periodReturn: 0.00025350850766556746
      },
      {
        startDate: "2016-09-30",
        endDate: "2016-10-03",
        cumulativeReturn: 0.09611337726829627,
        periodReturn: 0.0008757609425759035
      },
      {
        startDate: "2016-10-03",
        endDate: "2016-10-04",
        cumulativeReturn: 0.09596783684429933,
        periodReturn: -0.00013277862218926407
      },
      {
        startDate: "2016-10-04",
        endDate: "2016-10-05",
        cumulativeReturn: 0.09608538990402615,
        periodReturn: 0.00010725958899070526
      },
      {
        startDate: "2016-10-05",
        endDate: "2016-10-06",
        cumulativeReturn: 0.09602425744817733,
        periodReturn: -0.000055773442846655325
      },
      {
        startDate: "2016-10-06",
        endDate: "2016-10-07",
        cumulativeReturn: 0.09709657282997286,
        periodReturn: 0.0009783682929539082
      },
      {
        startDate: "2016-10-07",
        endDate: "2016-10-10",
        cumulativeReturn: 0.09726004117390463,
        periodReturn: 0.0001490008700966798
      },
      {
        startDate: "2016-10-10",
        endDate: "2016-10-11",
        cumulativeReturn: 0.09664151108639962,
        periodReturn: -0.0005637041943525266
      },
      {
        startDate: "2016-10-11",
        endDate: "2016-10-12",
        cumulativeReturn: 0.09669542522594554,
        periodReturn: 0.00004916295708370742
      },
      {
        startDate: "2016-10-12",
        endDate: "2016-10-13",
        cumulativeReturn: 0.09732328817377467,
        periodReturn: 0.000572504392183145
      },
      {
        startDate: "2016-10-13",
        endDate: "2016-10-14",
        cumulativeReturn: 0.0982557135520914,
        periodReturn: 0.0008497271390899891
      },
      {
        startDate: "2016-10-14",
        endDate: "2016-10-17",
        cumulativeReturn: 0.09917670607198192,
        periodReturn: 0.0008385957009152871
      },
      {
        startDate: "2016-10-17",
        endDate: "2016-10-18",
        cumulativeReturn: 0.10070410287648524,
        periodReturn: 0.0013895825812772489
      },
      {
        startDate: "2016-10-18",
        endDate: "2016-10-19",
        cumulativeReturn: 0.10260093644269008,
        periodReturn: 0.0017232910836326163
      },
      {
        startDate: "2016-10-19",
        endDate: "2016-10-20",
        cumulativeReturn: 0.10388607582146991,
        periodReturn: 0.001165552591426319
      },
      {
        startDate: "2016-10-20",
        endDate: "2016-10-21",
        cumulativeReturn: 0.10442989851749918,
        periodReturn: 0.0004926438587647703
      },
      {
        startDate: "2016-10-21",
        endDate: "2016-10-24",
        cumulativeReturn: 0.10520529480826668,
        periodReturn: 0.0007020783227693709
      },
      {
        startDate: "2016-10-24",
        endDate: "2016-10-25",
        cumulativeReturn: 0.1057387238395362,
        periodReturn: 0.00048265153431249086
      },
      {
        startDate: "2016-10-25",
        endDate: "2016-10-26",
        cumulativeReturn: 0.10347025828421796,
        periodReturn: -0.00205153849314543
      },
      {
        startDate: "2016-10-26",
        endDate: "2016-10-27",
        cumulativeReturn: 0.10185468148671828,
        periodReturn: -0.0014640873058161658
      },
      {
        startDate: "2016-10-27",
        endDate: "2016-10-28",
        cumulativeReturn: 0.10084982718932078,
        periodReturn: -0.0009119662640464345
      },
      {
        startDate: "2016-10-28",
        endDate: "2016-10-31",
        cumulativeReturn: 0.09999964732596167,
        periodReturn: -0.0007722941334602629
      },
      {
        startDate: "2016-10-31",
        endDate: "2016-11-01",
        cumulativeReturn: 0.09889465440880474,
        periodReturn: -0.00100453933766535
      },
      {
        startDate: "2016-11-01",
        endDate: "2016-11-02",
        cumulativeReturn: 0.09730439377236033,
        periodReturn: -0.0014471456659327431
      },
      {
        startDate: "2016-11-02",
        endDate: "2016-11-03",
        cumulativeReturn: 0.09733289346383844,
        periodReturn: 0.000025972457268788713
      },
      {
        startDate: "2016-11-03",
        endDate: "2016-11-04",
        cumulativeReturn: 0.0973378051305982,
        periodReturn: 0.0000044760043091837675
      },
      {
        startDate: "2016-11-04",
        endDate: "2016-11-07",
        cumulativeReturn: 0.10040739189790004,
        periodReturn: 0.0027973033945883395
      },
      {
        startDate: "2016-11-07",
        endDate: "2016-11-08",
        cumulativeReturn: 0.10107647730195568,
        periodReturn: 0.0006080342689280751
      },
      {
        startDate: "2016-11-08",
        endDate: "2016-11-09",
        cumulativeReturn: 0.095737182952226,
        periodReturn: -0.004849158491527175
      },
      {
        startDate: "2016-11-09",
        endDate: "2016-11-10",
        cumulativeReturn: 0.09215656281288687,
        periodReturn: -0.0032677727789541607
      },
      {
        startDate: "2016-11-10",
        endDate: "2016-11-11",
        cumulativeReturn: 0.09165381447338117,
        periodReturn: -0.0004603262541507374
      },
      {
        startDate: "2016-11-11",
        endDate: "2016-11-14",
        cumulativeReturn: 0.08389452921770069,
        periodReturn: -0.007107825899388701
      },
      {
        startDate: "2016-11-14",
        endDate: "2016-11-15",
        cumulativeReturn: 0.0879910890007185,
        periodReturn: 0.0037794819261377445
      },
      {
        startDate: "2016-11-15",
        endDate: "2016-11-16",
        cumulativeReturn: 0.08941237258727086,
        periodReturn: 0.0013063375251149102
      },
      {
        startDate: "2016-11-16",
        endDate: "2016-11-17",
        cumulativeReturn: 0.08944197518729369,
        periodReturn: 0.00002717299781771841
      },
      {
        startDate: "2016-11-17",
        endDate: "2016-11-18",
        cumulativeReturn: 0.08751227387007376,
        periodReturn: -0.001771274984046854
      },
      {
        startDate: "2016-11-18",
        endDate: "2016-11-21",
        cumulativeReturn: 0.08981954158723382,
        periodReturn: 0.002121601541975586
      },
      {
        startDate: "2016-11-21",
        endDate: "2016-11-22",
        cumulativeReturn: 0.09296670727796386,
        periodReturn: 0.0028877860697435888
      },
      {
        startDate: "2016-11-22",
        endDate: "2016-11-23",
        cumulativeReturn: 0.09201166231593905,
        periodReturn: -0.0008738097470537017
      },
      {
        startDate: "2016-11-23",
        endDate: "2016-11-24",
        cumulativeReturn: 0.09201166231593905,
        periodReturn: 0
      },
      {
        startDate: "2016-11-24",
        endDate: "2016-11-25",
        cumulativeReturn: 0.09178312026461932,
        periodReturn: -0.0002092853576628064
      },
      {
        startDate: "2016-11-25",
        endDate: "2016-11-28",
        cumulativeReturn: 0.09406614079119247,
        periodReturn: 0.0020910934453904555
      },
      {
        startDate: "2016-11-28",
        endDate: "2016-11-29",
        cumulativeReturn: 0.09425213733387405,
        periodReturn: 0.00017000484316902456
      },
      {
        startDate: "2016-11-29",
        endDate: "2016-11-30",
        cumulativeReturn: 0.09333581284231962,
        periodReturn: -0.0008373979454013997
      },
      {
        startDate: "2016-11-30",
        endDate: "2016-12-01",
        cumulativeReturn: 0.09111681432536378,
        periodReturn: -0.002029567211547889
      },
      {
        startDate: "2016-12-01",
        endDate: "2016-12-02",
        cumulativeReturn: 0.09339587587740139,
        periodReturn: 0.0020887420321231047
      },
      {
        startDate: "2016-12-02",
        endDate: "2016-12-05",
        cumulativeReturn: 0.09549063654491019,
        periodReturn: 0.001915830042643945
      },
      {
        startDate: "2016-12-05",
        endDate: "2016-12-06",
        cumulativeReturn: 0.09772364782151022,
        periodReturn: 0.002038366374031882
      },
      {
        startDate: "2016-12-06",
        endDate: "2016-12-07",
        cumulativeReturn: 0.10195388561292851,
        periodReturn: 0.0038536454961260814
      },
      {
        startDate: "2016-12-07",
        endDate: "2016-12-08",
        cumulativeReturn: 0.10167920967943522,
        periodReturn: -0.0002492626389175274
      },
      {
        startDate: "2016-12-08",
        endDate: "2016-12-09",
        cumulativeReturn: 0.10098849119910658,
        periodReturn: -0.0006269687893354289
      },
      {
        startDate: "2016-12-09",
        endDate: "2016-12-12",
        cumulativeReturn: 0.10131871115273916,
        periodReturn: 0.0002999304318550329
      },
      {
        startDate: "2016-12-12",
        endDate: "2016-12-13",
        cumulativeReturn: 0.10255943210868179,
        periodReturn: 0.0011265775686713413
      },
      {
        startDate: "2016-12-13",
        endDate: "2016-12-14",
        cumulativeReturn: 0.09961246430384918,
        periodReturn: -0.0026728425869944807
      },
      {
        startDate: "2016-12-14",
        endDate: "2016-12-15",
        cumulativeReturn: 0.09675770287452057,
        periodReturn: -0.0025961523009253784
      },
      {
        startDate: "2016-12-15",
        endDate: "2016-12-16",
        cumulativeReturn: 0.09757192094856104,
        periodReturn: 0.0007423864650381895
      },
      {
        startDate: "2016-12-16",
        endDate: "2016-12-19",
        cumulativeReturn: 0.10006356801622229,
        periodReturn: 0.0022701446894776984
      },
      {
        startDate: "2016-12-19",
        endDate: "2016-12-20",
        cumulativeReturn: 0.10043901345165995,
        periodReturn: 0.00034129430912323636
      },
      {
        startDate: "2016-12-20",
        endDate: "2016-12-21",
        cumulativeReturn: 0.10183626719712247,
        periodReturn: 0.0012697239268897006
      },
      {
        startDate: "2016-12-21",
        endDate: "2016-12-22",
        cumulativeReturn: 0.10292723369554957,
        periodReturn: 0.0009901348602386851
      },
      {
        startDate: "2016-12-22",
        endDate: "2016-12-23",
        cumulativeReturn: 0.10431067567712082,
        periodReturn: 0.001254336586590527
      },
      {
        startDate: "2016-12-23",
        endDate: "2016-12-26",
        cumulativeReturn: 0.10431067567712082,
        periodReturn: 0
      },
      {
        startDate: "2016-12-26",
        endDate: "2016-12-27",
        cumulativeReturn: 0.1043212002191003,
        periodReturn: 0.000009530417672567563
      },
      {
        startDate: "2016-12-27",
        endDate: "2016-12-28",
        cumulativeReturn: 0.10628166969958142,
        periodReturn: 0.0017752710715797212
      },
      {
        startDate: "2016-12-28",
        endDate: "2016-12-29",
        cumulativeReturn: 0.1075905752109525,
        periodReturn: 0.0011831575513009426
      },
      {
        startDate: "2016-12-29",
        endDate: "2016-12-30",
        cumulativeReturn: 0.10871100097533848,
        periodReturn: 0.0010115883878593602
      },
      {
        startDate: "2016-12-30",
        endDate: "2017-01-02",
        cumulativeReturn: 0.10871100097533848,
        periodReturn: 0
      },
      {
        startDate: "2017-01-02",
        endDate: "2017-01-03",
        cumulativeReturn: 0.1114646411820821,
        periodReturn: 0.0024836410970227787
      },
      {
        startDate: "2017-01-03",
        endDate: "2017-01-04",
        cumulativeReturn: 0.11447087484408436,
        periodReturn: 0.002704749706481889
      },
      {
        startDate: "2017-01-04",
        endDate: "2017-01-05",
        cumulativeReturn: 0.1180693265250603,
        periodReturn: 0.0032288431776911607
      },
      {
        startDate: "2017-01-05",
        endDate: "2017-01-06",
        cumulativeReturn: 0.11767844041163156,
        periodReturn: -0.0003496081183477319
      },
      {
        startDate: "2017-01-06",
        endDate: "2017-01-09",
        cumulativeReturn: 0.11897410247148099,
        periodReturn: 0.001159244030306508
      },
      {
        startDate: "2017-01-09",
        endDate: "2017-01-10",
        cumulativeReturn: 0.11918913968195577,
        periodReturn: 0.00019217353645615946
      },
      {
        startDate: "2017-01-10",
        endDate: "2017-01-11",
        cumulativeReturn: 0.11956551831964823,
        periodReturn: 0.0003362958273518976
      },
      {
        startDate: "2017-01-11",
        endDate: "2017-01-12",
        cumulativeReturn: 0.12221735342244666,
        periodReturn: 0.0023686287755437137
      },
      {
        startDate: "2017-01-12",
        endDate: "2017-01-13",
        cumulativeReturn: 0.12337068483235436,
        periodReturn: 0.001027725517156216
      },
      {
        startDate: "2017-01-13",
        endDate: "2017-01-16",
        cumulativeReturn: 0.12337068483235436,
        periodReturn: 0
      },
      {
        startDate: "2017-01-16",
        endDate: "2017-01-17",
        cumulativeReturn: 0.12614633783417029,
        periodReturn: 0.0024708255603360287
      },
      {
        startDate: "2017-01-17",
        endDate: "2017-01-18",
        cumulativeReturn: 0.12353358534182446,
        periodReturn: -0.0023200825723686744
      },
      {
        startDate: "2017-01-18",
        endDate: "2017-01-19",
        cumulativeReturn: 0.1215802213789392,
        periodReturn: -0.0017385897389893981
      },
      {
        startDate: "2017-01-19",
        endDate: "2017-01-20",
        cumulativeReturn: 0.12210827942558011,
        periodReturn: 0.0004708161187006499
      },
      {
        startDate: "2017-01-20",
        endDate: "2017-01-23",
        cumulativeReturn: 0.12425519722375711,
        periodReturn: 0.0019132893300422317
      },
      {
        startDate: "2017-01-23",
        endDate: "2017-01-24",
        cumulativeReturn: 0.12423350743925932,
        periodReturn: -0.00001929258103632831
      },
      {
        startDate: "2017-01-24",
        endDate: "2017-01-25",
        cumulativeReturn: 0.12405854457095411,
        periodReturn: -0.00015562858351703528
      },
      {
        startDate: "2017-01-25",
        endDate: "2017-01-26",
        cumulativeReturn: 0.12420107691555682,
        periodReturn: 0.00012680153119339063
      },
      {
        startDate: "2017-01-26",
        endDate: "2017-01-27",
        cumulativeReturn: 0.12558087837698917,
        periodReturn: 0.0012273618036536186
      },
      {
        startDate: "2017-01-27",
        endDate: "2017-01-30",
        cumulativeReturn: 0.12563990397735703,
        periodReturn: 0.00005244012358576001
      },
      {
        startDate: "2017-01-30",
        endDate: "2017-01-31",
        cumulativeReturn: 0.12648032640152507,
        periodReturn: 0.0007466174761557958
      },
      {
        startDate: "2017-01-31",
        endDate: "2017-02-01",
        cumulativeReturn: 0.12672546077282343,
        periodReturn: 0.0002176108765975747
      },
      {
        startDate: "2017-02-01",
        endDate: "2017-02-02",
        cumulativeReturn: 0.1277571396443824,
        periodReturn: 0.0009156435240677724
      },
      {
        startDate: "2017-02-02",
        endDate: "2017-02-03",
        cumulativeReturn: 0.1289990668585863,
        periodReturn: 0.0011012364014787038
      },
      {
        startDate: "2017-02-03",
        endDate: "2017-02-06",
        cumulativeReturn: 0.13112297460851674,
        periodReturn: 0.0018812307399333884
      },
      {
        startDate: "2017-02-06",
        endDate: "2017-02-07",
        cumulativeReturn: 0.13155554333643726,
        periodReturn: 0.00038242413745533224
      },
      {
        startDate: "2017-02-07",
        endDate: "2017-02-08",
        cumulativeReturn: 0.133423191413637,
        periodReturn: 0.0016505138331018663
      },
      {
        startDate: "2017-02-08",
        endDate: "2017-02-09",
        cumulativeReturn: 0.13248879164389482,
        periodReturn: -0.000824405020843714
      },
      {
        startDate: "2017-02-09",
        endDate: "2017-02-10",
        cumulativeReturn: 0.13379486759925996,
        periodReturn: 0.0011532793657668833
      },
      {
        startDate: "2017-02-10",
        endDate: "2017-02-13",
        cumulativeReturn: 0.13409707228509649,
        periodReturn: 0.00026654264759234627
      },
      {
        startDate: "2017-02-13",
        endDate: "2017-02-14",
        cumulativeReturn: 0.13341672881994193,
        periodReturn: -0.0005998987933049332
      },
      {
        startDate: "2017-02-14",
        endDate: "2017-02-15",
        cumulativeReturn: 0.13263175246363934,
        periodReturn: -0.0006925752341064546
      },
      {
        startDate: "2017-02-15",
        endDate: "2017-02-16",
        cumulativeReturn: 0.13414948678876648,
        periodReturn: 0.0013400068661556044
      },
      {
        startDate: "2017-02-16",
        endDate: "2017-02-17",
        cumulativeReturn: 0.1351862732541269,
        periodReturn: 0.0009141532729481703
      },
      {
        startDate: "2017-02-17",
        endDate: "2017-02-20",
        cumulativeReturn: 0.1351862732541269,
        periodReturn: 0
      },
      {
        startDate: "2017-02-20",
        endDate: "2017-02-21",
        cumulativeReturn: 0.13598871087436604,
        periodReturn: 0.0007068774871094124
      },
      {
        startDate: "2017-02-21",
        endDate: "2017-02-22",
        cumulativeReturn: 0.13735968953902322,
        periodReturn: 0.001206859409370437
      },
      {
        startDate: "2017-02-22",
        endDate: "2017-02-23",
        cumulativeReturn: 0.1391422855600397,
        periodReturn: 0.0015673107086632873
      },
      {
        startDate: "2017-02-23",
        endDate: "2017-02-24",
        cumulativeReturn: 0.1413415498487458,
        periodReturn: 0.0019306317714515642
      },
      {
        startDate: "2017-02-24",
        endDate: "2017-02-27",
        cumulativeReturn: 0.14127678802622712,
        periodReturn: -0.000056741842551268626
      },
      {
        startDate: "2017-02-27",
        endDate: "2017-02-28",
        cumulativeReturn: 0.14157867213609365,
        periodReturn: 0.00026451436937448156
      },
      {
        startDate: "2017-02-28",
        endDate: "2017-03-01",
        cumulativeReturn: 0.14088099858522973,
        periodReturn: -0.0006111480250052183
      },
      {
        startDate: "2017-03-01",
        endDate: "2017-03-02",
        cumulativeReturn: 0.13977019312749972,
        periodReturn: -0.0009736383190774318
      },
      {
        startDate: "2017-03-02",
        endDate: "2017-03-03",
        cumulativeReturn: 0.1400167651946378,
        periodReturn: 0.00021633489682820238
      },
      {
        startDate: "2017-03-03",
        endDate: "2017-03-06",
        cumulativeReturn: 0.1399266578840206,
        periodReturn: -0.00007904033814967787
      },
      {
        startDate: "2017-03-06",
        endDate: "2017-03-07",
        cumulativeReturn: 0.1407918766127989,
        periodReturn: 0.0007590126283952807
      },
      {
        startDate: "2017-03-07",
        endDate: "2017-03-08",
        cumulativeReturn: 0.13749247402567155,
        periodReturn: -0.002892203788235185
      },
      {
        startDate: "2017-03-08",
        endDate: "2017-03-09",
        cumulativeReturn: 0.13372057867798826,
        periodReturn: -0.003315973893290306
      },
      {
        startDate: "2017-03-09",
        endDate: "2017-03-10",
        cumulativeReturn: 0.1355008168315719,
        periodReturn: 0.001570261832646199
      },
      {
        startDate: "2017-03-10",
        endDate: "2017-03-13",
        cumulativeReturn: 0.1334341497312388,
        periodReturn: -0.0018200489772431517
      },
      {
        startDate: "2017-03-13",
        endDate: "2017-03-14",
        cumulativeReturn: 0.13129692406674387,
        periodReturn: -0.0018856196145155236
      },
      {
        startDate: "2017-03-14",
        endDate: "2017-03-15",
        cumulativeReturn: 0.13692179544601601,
        periodReturn: 0.004972055752659539
      },
      {
        startDate: "2017-03-15",
        endDate: "2017-03-16",
        cumulativeReturn: 0.1384496318640287,
        periodReturn: 0.0013438359825032125
      },
      {
        startDate: "2017-03-16",
        endDate: "2017-03-17",
        cumulativeReturn: 0.13918793183083666,
        periodReturn: 0.0006485135100787572
      },
      {
        startDate: "2017-03-17",
        endDate: "2017-03-20",
        cumulativeReturn: 0.13964781263080717,
        periodReturn: 0.00040369177650211306
      },
      {
        startDate: "2017-03-20",
        endDate: "2017-03-21",
        cumulativeReturn: 0.14018096520215928,
        periodReturn: 0.00046782222142942016
      },
      {
        startDate: "2017-03-21",
        endDate: "2017-03-22",
        cumulativeReturn: 0.13908749300425516,
        periodReturn: -0.0009590339001231619
      },
      {
        startDate: "2017-03-22",
        endDate: "2017-03-23",
        cumulativeReturn: 0.13934659814056105,
        periodReturn: 0.00022746728227404506
      },
      {
        startDate: "2017-03-23",
        endDate: "2017-03-24",
        cumulativeReturn: 0.1412019466182013,
        periodReturn: 0.0016284320159188138
      },
      {
        startDate: "2017-03-24",
        endDate: "2017-03-27",
        cumulativeReturn: 0.1420787230491618,
        periodReturn: 0.0007682920919989042
      },
      {
        startDate: "2017-03-27",
        endDate: "2017-03-28",
        cumulativeReturn: 0.1421902249221032,
        periodReturn: 0.00009763063674253013
      },
      {
        startDate: "2017-03-28",
        endDate: "2017-03-29",
        cumulativeReturn: 0.14545392248809552,
        periodReturn: 0.002857402816781046
      },
      {
        startDate: "2017-03-29",
        endDate: "2017-03-30",
        cumulativeReturn: 0.14550206418628897,
        periodReturn: 0.00004202848953432259
      },
      {
        startDate: "2017-03-30",
        endDate: "2017-03-31",
        cumulativeReturn: 0.14628544024105294,
        periodReturn: 0.0006838713602148545
      },
      {
        startDate: "2017-03-31",
        endDate: "2017-04-03",
        cumulativeReturn: 0.14878722227669883,
        periodReturn: 0.0021825122677293918
      },
      {
        startDate: "2017-04-03",
        endDate: "2017-04-04",
        cumulativeReturn: 0.14878132439360647,
        periodReturn: -0.0000051340082635953705
      },
      {
        startDate: "2017-04-04",
        endDate: "2017-04-05",
        cumulativeReturn: 0.1509013892548503,
        periodReturn: 0.0018454903611554545
      },
      {
        startDate: "2017-04-05",
        endDate: "2017-04-06",
        cumulativeReturn: 0.15116395067157762,
        periodReturn: 0.00022813545902266547
      },
      {
        startDate: "2017-04-06",
        endDate: "2017-04-07",
        cumulativeReturn: 0.15087905842360017,
        periodReturn: -0.0002474819054325526
      },
      {
        startDate: "2017-04-07",
        endDate: "2017-04-10",
        cumulativeReturn: 0.15215180611486034,
        periodReturn: 0.0011058917806736036
      },
      {
        startDate: "2017-04-10",
        endDate: "2017-04-11",
        cumulativeReturn: 0.15386508347905536,
        periodReturn: 0.001487023979915007
      },
      {
        startDate: "2017-04-11",
        endDate: "2017-04-12",
        cumulativeReturn: 0.15489711186787836,
        periodReturn: 0.0008944099302419912
      },
      {
        startDate: "2017-04-12",
        endDate: "2017-04-13",
        cumulativeReturn: 0.1554227027695454,
        periodReturn: 0.00045509759810290846
      },
      {
        startDate: "2017-04-13",
        endDate: "2017-04-14",
        cumulativeReturn: 0.1554227027695454,
        periodReturn: 0
      },
      {
        startDate: "2017-04-14",
        endDate: "2017-04-17",
        cumulativeReturn: 0.15611244759504195,
        periodReturn: 0.0005969631926421814
      },
      {
        startDate: "2017-04-17",
        endDate: "2017-04-18",
        cumulativeReturn: 0.15766596362235807,
        periodReturn: 0.001343741286193902
      },
      {
        startDate: "2017-04-18",
        endDate: "2017-04-19",
        cumulativeReturn: 0.1572008870519277,
        periodReturn: -0.000401736411922469
      },
      {
        startDate: "2017-04-19",
        endDate: "2017-04-20",
        cumulativeReturn: 0.15657201348620298,
        periodReturn: -0.0005434437294002754
      },
      {
        startDate: "2017-04-20",
        endDate: "2017-04-21",
        cumulativeReturn: 0.1576437103018269,
        periodReturn: 0.0009266148610958464
      },
      {
        startDate: "2017-04-21",
        endDate: "2017-04-24",
        cumulativeReturn: 0.15870499094419332,
        periodReturn: 0.0009167593041988417
      },
      {
        startDate: "2017-04-24",
        endDate: "2017-04-25",
        cumulativeReturn: 0.15799978256048908,
        periodReturn: -0.0006086177147898956
      },
      {
        startDate: "2017-04-25",
        endDate: "2017-04-26",
        cumulativeReturn: 0.1591621245677477,
        periodReturn: 0.0010037497629650212
      },
      {
        startDate: "2017-04-26",
        endDate: "2017-04-27",
        cumulativeReturn: 0.159862312995124,
        periodReturn: 0.0006040470202883899
      },
      {
        startDate: "2017-04-27",
        endDate: "2017-04-28",
        cumulativeReturn: 0.16091678141297439,
        periodReturn: 0.0009091324082489183
      },
      {
        startDate: "2017-04-28",
        endDate: "2017-05-01",
        cumulativeReturn: 0.1599728470720272,
        periodReturn: -0.0008130938892951755
      },
      {
        startDate: "2017-05-01",
        endDate: "2017-05-02",
        cumulativeReturn: 0.16116324083894473,
        periodReturn: 0.0010262255447807782
      },
      {
        startDate: "2017-05-02",
        endDate: "2017-05-03",
        cumulativeReturn: 0.161162391912403,
        periodReturn: -7.311000830182921e-7
      },
      {
        startDate: "2017-05-03",
        endDate: "2017-05-04",
        cumulativeReturn: 0.1587731728938746,
        periodReturn: -0.0020576097152038815
      },
      {
        startDate: "2017-05-04",
        endDate: "2017-05-05",
        cumulativeReturn: 0.15935730024919526,
        periodReturn: 0.0005040911966073459
      },
      {
        startDate: "2017-05-05",
        endDate: "2017-05-08",
        cumulativeReturn: 0.15857151195642416,
        periodReturn: -0.0006777792252676142
      },
      {
        startDate: "2017-05-08",
        endDate: "2017-05-09",
        cumulativeReturn: 0.15839515792354586,
        periodReturn: -0.00015221678684335422
      },
      {
        startDate: "2017-05-09",
        endDate: "2017-05-10",
        cumulativeReturn: 0.15976290478513522,
        periodReturn: 0.0011807256377358475
      },
      {
        startDate: "2017-05-10",
        endDate: "2017-05-11",
        cumulativeReturn: 0.16062745656884703,
        periodReturn: 0.0007454556273051293
      },
      {
        startDate: "2017-05-11",
        endDate: "2017-05-12",
        cumulativeReturn: 0.16341232874092015,
        periodReturn: 0.0023994539818194757
      },
      {
        startDate: "2017-05-12",
        endDate: "2017-05-15",
        cumulativeReturn: 0.16456371801919256,
        periodReturn: 0.0009896657013412568
      },
      {
        startDate: "2017-05-15",
        endDate: "2017-05-16",
        cumulativeReturn: 0.16470481436109696,
        periodReturn: 0.00012115811245107431
      },
      {
        startDate: "2017-05-16",
        endDate: "2017-05-17",
        cumulativeReturn: 0.16654397025865242,
        periodReturn: 0.0015790746933283782
      },
      {
        startDate: "2017-05-17",
        endDate: "2017-05-18",
        cumulativeReturn: 0.1642424284331756,
        periodReturn: -0.001972957628820828
      },
      {
        startDate: "2017-05-18",
        endDate: "2017-05-19",
        cumulativeReturn: 0.16615815826423552,
        periodReturn: 0.0016454733002971276
      },
      {
        startDate: "2017-05-19",
        endDate: "2017-05-22",
        cumulativeReturn: 0.1667286584987535,
        periodReturn: 0.0004892134317074202
      },
      {
        startDate: "2017-05-22",
        endDate: "2017-05-23",
        cumulativeReturn: 0.16619881277969495,
        periodReturn: -0.00045412934292739796
      },
      {
        startDate: "2017-05-23",
        endDate: "2017-05-24",
        cumulativeReturn: 0.16951484156123486,
        periodReturn: 0.0028434506579849855
      },
      {
        startDate: "2017-05-24",
        endDate: "2017-05-25",
        cumulativeReturn: 0.1703145432263622,
        periodReturn: 0.0006837892403825027
      },
      {
        startDate: "2017-05-25",
        endDate: "2017-05-26",
        cumulativeReturn: 0.17177594887130687,
        periodReturn: 0.0012487289450542449
      },
      {
        startDate: "2017-05-26",
        endDate: "2017-05-29",
        cumulativeReturn: 0.17177594887130687,
        periodReturn: 0
      },
      {
        startDate: "2017-05-29",
        endDate: "2017-05-30",
        cumulativeReturn: 0.17274423365960256,
        periodReturn: 0.0008263395312290046
      },
      {
        startDate: "2017-05-30",
        endDate: "2017-05-31",
        cumulativeReturn: 0.17263353024864836,
        periodReturn: -0.00009439689215846483
      },
      {
        startDate: "2017-05-31",
        endDate: "2017-06-01",
        cumulativeReturn: 0.1732895151375895,
        periodReturn: 0.0005594116763845191
      },
      {
        startDate: "2017-06-01",
        endDate: "2017-06-02",
        cumulativeReturn: 0.1759491094689456,
        periodReturn: 0.002266784367406632
      },
      {
        startDate: "2017-06-02",
        endDate: "2017-06-05",
        cumulativeReturn: 0.1752686303854356,
        periodReturn: -0.0005786637176988663
      },
      {
        startDate: "2017-06-05",
        endDate: "2017-06-06",
        cumulativeReturn: 0.17686681994400888,
        periodReturn: 0.0013598504352568552
      },
      {
        startDate: "2017-06-06",
        endDate: "2017-06-07",
        cumulativeReturn: 0.17542334357818645,
        periodReturn: -0.00122654181540374
      },
      {
        startDate: "2017-06-07",
        endDate: "2017-06-08",
        cumulativeReturn: 0.17501482116092837,
        periodReturn: -0.0003475534321229971
      },
      {
        startDate: "2017-06-08",
        endDate: "2017-06-09",
        cumulativeReturn: 0.1750718834299343,
        periodReturn: 0.00004856302063453125
      },
      {
        startDate: "2017-06-09",
        endDate: "2017-06-12",
        cumulativeReturn: 0.1758172954587509,
        periodReturn: 0.0006343544078687457
      },
      {
        startDate: "2017-06-12",
        endDate: "2017-06-13",
        cumulativeReturn: 0.17562850582836131,
        periodReturn: -0.00016056034480761355
      },
      {
        startDate: "2017-06-13",
        endDate: "2017-06-14",
        cumulativeReturn: 0.1782898188090385,
        periodReturn: 0.0022637363482455016
      },
      {
        startDate: "2017-06-14",
        endDate: "2017-06-15",
        cumulativeReturn: 0.17626478691397507,
        periodReturn: -0.0017186195303886822
      },
      {
        startDate: "2017-06-15",
        endDate: "2017-06-16",
        cumulativeReturn: 0.17699585768471837,
        periodReturn: 0.0006215188781271186
      },
      {
        startDate: "2017-06-16",
        endDate: "2017-06-19",
        cumulativeReturn: 0.17676744076250905,
        periodReturn: -0.000194067736702764
      },
      {
        startDate: "2017-06-19",
        endDate: "2017-06-20",
        cumulativeReturn: 0.17563311965702,
        periodReturn: -0.0009639297164391704
      },
      {
        startDate: "2017-06-20",
        endDate: "2017-06-21",
        cumulativeReturn: 0.17457731486022254,
        periodReturn: -0.0008980733692713415
      },
      {
        startDate: "2017-06-21",
        endDate: "2017-06-22",
        cumulativeReturn: 0.1747084581044076,
        periodReturn: 0.00011165143624524378
      },
      {
        startDate: "2017-06-22",
        endDate: "2017-06-23",
        cumulativeReturn: 0.17497777000871184,
        periodReturn: 0.00022925850447938682
      },
      {
        startDate: "2017-06-23",
        endDate: "2017-06-26",
        cumulativeReturn: 0.17655657962428117,
        periodReturn: 0.0013436931794527471
      },
      {
        startDate: "2017-06-26",
        endDate: "2017-06-27",
        cumulativeReturn: 0.17453456159003644,
        periodReturn: -0.0017185897127790304
      },
      {
        startDate: "2017-06-27",
        endDate: "2017-06-28",
        cumulativeReturn: 0.17516768167723784,
        periodReturn: 0.0005390391291204377
      },
      {
        startDate: "2017-06-28",
        endDate: "2017-06-29",
        cumulativeReturn: 0.17430898845472642,
        periodReturn: -0.0007306984661846463
      },
      {
        startDate: "2017-06-29",
        endDate: "2017-06-30",
        cumulativeReturn: 0.1737586122073067,
        periodReturn: -0.00046868094584204034
      },
      {
        startDate: "2017-06-30",
        endDate: "2017-07-03",
        cumulativeReturn: 0.1730447095771399,
        periodReturn: -0.000608219290356731
      },
      {
        startDate: "2017-07-03",
        endDate: "2017-07-04",
        cumulativeReturn: 0.1730447095771399,
        periodReturn: 0
      },
      {
        startDate: "2017-07-04",
        endDate: "2017-07-05",
        cumulativeReturn: 0.17310476108238682,
        periodReturn: 0.00005119285288669149
      },
      {
        startDate: "2017-07-05",
        endDate: "2017-07-06",
        cumulativeReturn: 0.1708439826770607,
        periodReturn: -0.0019271752023579665
      },
      {
        startDate: "2017-07-06",
        endDate: "2017-07-07",
        cumulativeReturn: 0.17024713352514453,
        periodReturn: -0.0005097597636804466
      },
      {
        startDate: "2017-07-07",
        endDate: "2017-07-10",
        cumulativeReturn: 0.17192814380331312,
        periodReturn: 0.0014364575054373401
      },
      {
        startDate: "2017-07-10",
        endDate: "2017-07-11",
        cumulativeReturn: 0.17285693553901393,
        periodReturn: 0.0007925330069184292
      },
      {
        startDate: "2017-07-11",
        endDate: "2017-07-12",
        cumulativeReturn: 0.1764578702479751,
        periodReturn: 0.003070225020501873
      },
      {
        startDate: "2017-07-12",
        endDate: "2017-07-13",
        cumulativeReturn: 0.17579158153568186,
        periodReturn: -0.0005663515278731356
      },
      {
        startDate: "2017-07-13",
        endDate: "2017-07-14",
        cumulativeReturn: 0.17771401284496458,
        periodReturn: 0.0016350102683774397
      },
      {
        startDate: "2017-07-14",
        endDate: "2017-07-17",
        cumulativeReturn: 0.17949449025851427,
        periodReturn: 0.001511807955183189
      },
      {
        startDate: "2017-07-17",
        endDate: "2017-07-18",
        cumulativeReturn: 0.18152417846934066,
        periodReturn: 0.0017208119474822427
      },
      {
        startDate: "2017-07-18",
        endDate: "2017-07-19",
        cumulativeReturn: 0.1823619151284448,
        periodReturn: 0.0007090304831421913
      },
      {
        startDate: "2017-07-19",
        endDate: "2017-07-20",
        cumulativeReturn: 0.18306884263818346,
        periodReturn: 0.0005978943508694665
      },
      {
        startDate: "2017-07-20",
        endDate: "2017-07-21",
        cumulativeReturn: 0.18391557390464008,
        periodReturn: 0.0007157075192416496
      },
      {
        startDate: "2017-07-21",
        endDate: "2017-07-24",
        cumulativeReturn: 0.18406534469573543,
        periodReturn: 0.0001265046211033514
      },
      {
        startDate: "2017-07-24",
        endDate: "2017-07-25",
        cumulativeReturn: 0.182875225438778,
        periodReturn: -0.001005112819397113
      },
      {
        startDate: "2017-07-25",
        endDate: "2017-07-26",
        cumulativeReturn: 0.18515886541325588,
        periodReturn: 0.001930583991756904
      },
      {
        startDate: "2017-07-26",
        endDate: "2017-07-27",
        cumulativeReturn: 0.1850123754049049,
        periodReturn: -0.00012360368945131423
      },
      {
        startDate: "2017-07-27",
        endDate: "2017-07-28",
        cumulativeReturn: 0.18605895938167039,
        periodReturn: 0.0008831840059120178
      },
      {
        startDate: "2017-07-28",
        endDate: "2017-07-31",
        cumulativeReturn: 0.1872944923647748,
        periodReturn: 0.001041712954766091
      },
      {
        startDate: "2017-07-31",
        endDate: "2017-08-01",
        cumulativeReturn: 0.18905042420750018,
        periodReturn: 0.0014789353896758513
      },
      {
        startDate: "2017-08-01",
        endDate: "2017-08-02",
        cumulativeReturn: 0.18851724430038397,
        periodReturn: -0.0004484081551642977
      },
      {
        startDate: "2017-08-02",
        endDate: "2017-08-03",
        cumulativeReturn: 0.18978521536428938,
        periodReturn: 0.0010668512131280566
      },
      {
        startDate: "2017-08-03",
        endDate: "2017-08-04",
        cumulativeReturn: 0.18853615788492206,
        periodReturn: -0.0010498176168584935
      },
      {
        startDate: "2017-08-04",
        endDate: "2017-08-07",
        cumulativeReturn: 0.18875382369959537,
        periodReturn: 0.0001831377305850663
      },
      {
        startDate: "2017-08-07",
        endDate: "2017-08-08",
        cumulativeReturn: 0.18824292244461405,
        periodReturn: -0.00042977885311122946
      },
      {
        startDate: "2017-08-08",
        endDate: "2017-08-09",
        cumulativeReturn: 0.18637416632877213,
        periodReturn: -0.0015727054464564762
      },
      {
        startDate: "2017-08-09",
        endDate: "2017-08-10",
        cumulativeReturn: 0.18531748775585322,
        periodReturn: -0.0008906790141838428
      },
      {
        startDate: "2017-08-10",
        endDate: "2017-08-11",
        cumulativeReturn: 0.18567277804390336,
        periodReturn: 0.00029974272017425837
      },
      {
        startDate: "2017-08-11",
        endDate: "2017-08-14",
        cumulativeReturn: 0.18620943590764494,
        periodReturn: 0.0004526188622015893
      },
      {
        startDate: "2017-08-14",
        endDate: "2017-08-15",
        cumulativeReturn: 0.18478682439210004,
        periodReturn: -0.0011992920242253273
      },
      {
        startDate: "2017-08-15",
        endDate: "2017-08-16",
        cumulativeReturn: 0.18650473756082042,
        periodReturn: 0.0014499765977746871
      },
      {
        startDate: "2017-08-16",
        endDate: "2017-08-17",
        cumulativeReturn: 0.18600671166435645,
        periodReturn: -0.0004197420209950705
      },
      {
        startDate: "2017-08-17",
        endDate: "2017-08-18",
        cumulativeReturn: 0.18592658245985483,
        periodReturn: -0.0000675621846939183
      },
      {
        startDate: "2017-08-18",
        endDate: "2017-08-21",
        cumulativeReturn: 0.18622870920405066,
        periodReturn: 0.00025476007424439376
      },
      {
        startDate: "2017-08-21",
        endDate: "2017-08-22",
        cumulativeReturn: 0.18708333910543407,
        periodReturn: 0.0007204596337555746
      },
      {
        startDate: "2017-08-22",
        endDate: "2017-08-23",
        cumulativeReturn: 0.18891220975755596,
        periodReturn: 0.001540642170498507
      },
      {
        startDate: "2017-08-23",
        endDate: "2017-08-24",
        cumulativeReturn: 0.18884160196895317,
        periodReturn: -0.00005938856378408891
      },
      {
        startDate: "2017-08-24",
        endDate: "2017-08-25",
        cumulativeReturn: 0.19110616011209358,
        periodReturn: 0.001904844294975862
      },
      {
        startDate: "2017-08-25",
        endDate: "2017-08-28",
        cumulativeReturn: 0.1918916557679493,
        periodReturn: 0.0006594673776028866
      },
      {
        startDate: "2017-08-28",
        endDate: "2017-08-29",
        cumulativeReturn: 0.19272600365828807,
        periodReturn: 0.0007000199106196288
      },
      {
        startDate: "2017-08-29",
        endDate: "2017-08-30",
        cumulativeReturn: 0.1930087976899708,
        periodReturn: 0.0002370989068867318
      },
      {
        startDate: "2017-08-30",
        endDate: "2017-08-31",
        cumulativeReturn: 0.19498353184024908,
        periodReturn: 0.001655255312535811
      },
      {
        startDate: "2017-08-31",
        endDate: "2017-09-01",
        cumulativeReturn: 0.19493843127627053,
        periodReturn: -0.00003774157783510559
      },
      {
        startDate: "2017-09-01",
        endDate: "2017-09-04",
        cumulativeReturn: 0.19493843127627053,
        periodReturn: 0
      },
      {
        startDate: "2017-09-04",
        endDate: "2017-09-05",
        cumulativeReturn: 0.19807981170573563,
        periodReturn: 0.0026289056801946094
      },
      {
        startDate: "2017-09-05",
        endDate: "2017-09-06",
        cumulativeReturn: 0.19715255162620338,
        periodReturn: -0.000773955182678675
      },
      {
        startDate: "2017-09-06",
        endDate: "2017-09-07",
        cumulativeReturn: 0.19959104560197916,
        periodReturn: 0.0020369116471108807
      },
      {
        startDate: "2017-09-07",
        endDate: "2017-09-08",
        cumulativeReturn: 0.1992027784743351,
        periodReturn: -0.0003236662436483237
      },
      {
        startDate: "2017-09-08",
        endDate: "2017-09-11",
        cumulativeReturn: 0.1975953839008977,
        periodReturn: -0.0013403859649845382
      },
      {
        startDate: "2017-09-11",
        endDate: "2017-09-12",
        cumulativeReturn: 0.19677890021697175,
        periodReturn: -0.0006817692309956622
      },
      {
        startDate: "2017-09-12",
        endDate: "2017-09-13",
        cumulativeReturn: 0.195706768090826,
        periodReturn: -0.0008958481186052266
      },
      {
        startDate: "2017-09-13",
        endDate: "2017-09-14",
        cumulativeReturn: 0.19631399622841306,
        periodReturn: 0.0005078403449674931
      },
      {
        startDate: "2017-09-14",
        endDate: "2017-09-15",
        cumulativeReturn: 0.19633683642061772,
        periodReturn: 0.000019092138248480232
      },
      {
        startDate: "2017-09-15",
        endDate: "2017-09-18",
        cumulativeReturn: 0.1961828911142205,
        periodReturn: -0.000128680570313083
      },
      {
        startDate: "2017-09-18",
        endDate: "2017-09-19",
        cumulativeReturn: 0.19580239338108352,
        periodReturn: -0.00031809327483578584
      },
      {
        startDate: "2017-09-19",
        endDate: "2017-09-20",
        cumulativeReturn: 0.1951345100142503,
        periodReturn: -0.0005585231895588707
      },
      {
        startDate: "2017-09-20",
        endDate: "2017-09-21",
        cumulativeReturn: 0.19472686595774413,
        periodReturn: -0.00034108634056709465
      },
      {
        startDate: "2017-09-21",
        endDate: "2017-09-22",
        cumulativeReturn: 0.19604012154469808,
        periodReturn: 0.0010992098900373141
      },
      {
        startDate: "2017-09-22",
        endDate: "2017-09-25",
        cumulativeReturn: 0.1980043732134067,
        periodReturn: 0.0016422958003881006
      },
      {
        startDate: "2017-09-25",
        endDate: "2017-09-26",
        cumulativeReturn: 0.19786928698180617,
        periodReturn: -0.00011275938103473039
      },
      {
        startDate: "2017-09-26",
        endDate: "2017-09-27",
        cumulativeReturn: 0.19621877187675207,
        periodReturn: -0.0013778758024697928
      },
      {
        startDate: "2017-09-27",
        endDate: "2017-09-28",
        cumulativeReturn: 0.1966348865618841,
        periodReturn: 0.00034785834741532696
      },
      {
        startDate: "2017-09-28",
        endDate: "2017-09-29",
        cumulativeReturn: 0.19786280778480214,
        periodReturn: 0.0010261452651159678
      },
      {
        startDate: "2017-09-29",
        endDate: "2017-10-02",
        cumulativeReturn: 0.1980976617844159,
        periodReturn: 0.00019606084944586417
      },
      {
        startDate: "2017-10-02",
        endDate: "2017-10-03",
        cumulativeReturn: 0.19890538319890605,
        periodReturn: 0.0006741699280900295
      },
      {
        startDate: "2017-10-03",
        endDate: "2017-10-04",
        cumulativeReturn: 0.19955325042279437,
        periodReturn: 0.0005403822795086111
      },
      {
        startDate: "2017-10-04",
        endDate: "2017-10-05",
        cumulativeReturn: 0.1993091043466948,
        periodReturn: -0.00020353083617884792
      },
      {
        startDate: "2017-10-05",
        endDate: "2017-10-06",
        cumulativeReturn: 0.19873270654858843,
        periodReturn: -0.00048060820685616435
      },
      {
        startDate: "2017-10-06",
        endDate: "2017-10-09",
        cumulativeReturn: 0.19861077822028372,
        periodReturn: -0.00010171435853762604
      },
      {
        startDate: "2017-10-09",
        endDate: "2017-10-10",
        cumulativeReturn: 0.2001230313076412,
        periodReturn: 0.0012616715240980631
      },
      {
        startDate: "2017-10-10",
        endDate: "2017-10-11",
        cumulativeReturn: 0.20070879362824656,
        periodReturn: 0.00048808522570147354
      },
      {
        startDate: "2017-10-11",
        endDate: "2017-10-12",
        cumulativeReturn: 0.20164700309565053,
        periodReturn: 0.0007813796920475414
      },
      {
        startDate: "2017-10-12",
        endDate: "2017-10-13",
        cumulativeReturn: 0.20305437232927304,
        periodReturn: 0.0011712002193627997
      },
      {
        startDate: "2017-10-13",
        endDate: "2017-10-16",
        cumulativeReturn: 0.20277279692825934,
        periodReturn: -0.00023405043653062713
      },
      {
        startDate: "2017-10-16",
        endDate: "2017-10-17",
        cumulativeReturn: 0.2029148329883046,
        periodReturn: 0.00011809051585460891
      },
      {
        startDate: "2017-10-17",
        endDate: "2017-10-18",
        cumulativeReturn: 0.20318382193316054,
        periodReturn: 0.00022361428879188444
      },
      {
        startDate: "2017-10-18",
        endDate: "2017-10-19",
        cumulativeReturn: 0.2035772469522832,
        periodReturn: 0.00032698662660746386
      },
      {
        startDate: "2017-10-19",
        endDate: "2017-10-20",
        cumulativeReturn: 0.20235014291492948,
        periodReturn: -0.0010195473871419177
      },
      {
        startDate: "2017-10-20",
        endDate: "2017-10-23",
        cumulativeReturn: 0.20320840749135094,
        periodReturn: 0.0007138224929559045
      },
      {
        startDate: "2017-10-23",
        endDate: "2017-10-24",
        cumulativeReturn: 0.20228192818957447,
        periodReturn: -0.0007700073370565816
      },
      {
        startDate: "2017-10-24",
        endDate: "2017-10-25",
        cumulativeReturn: 0.2009382318447286,
        periodReturn: -0.001117621677029851
      },
      {
        startDate: "2017-10-25",
        endDate: "2017-10-26",
        cumulativeReturn: 0.19973450199772125,
        periodReturn: -0.0010023245285133784
      },
      {
        startDate: "2017-10-26",
        endDate: "2017-10-27",
        cumulativeReturn: 0.20175954962491982,
        periodReturn: 0.0016879131373037843
      },
      {
        startDate: "2017-10-27",
        endDate: "2017-10-30",
        cumulativeReturn: 0.20370716934240618,
        periodReturn: 0.0016206401006708215
      },
      {
        startDate: "2017-10-30",
        endDate: "2017-10-31",
        cumulativeReturn: 0.20398739610049255,
        periodReturn: 0.00023280309798233
      },
      {
        startDate: "2017-10-31",
        endDate: "2017-11-01",
        cumulativeReturn: 0.20483203951867401,
        periodReturn: 0.0007015384221772172
      },
      {
        startDate: "2017-11-01",
        endDate: "2017-11-02",
        cumulativeReturn: 0.20550957982831775,
        periodReturn: 0.0005623525001164286
      },
      {
        startDate: "2017-11-02",
        endDate: "2017-11-03",
        cumulativeReturn: 0.2049364317278728,
        periodReturn: -0.0004754405191259813
      },
      {
        startDate: "2017-11-03",
        endDate: "2017-11-06",
        cumulativeReturn: 0.2054999785539129,
        periodReturn: 0.00046769838740130446
      },
      {
        startDate: "2017-11-06",
        endDate: "2017-11-07",
        cumulativeReturn: 0.2048453741159728,
        periodReturn: -0.0005430148897434488
      },
      {
        startDate: "2017-11-07",
        endDate: "2017-11-08",
        cumulativeReturn: 0.2033286082031749,
        periodReturn: -0.0012588884394488036
      },
      {
        startDate: "2017-11-08",
        endDate: "2017-11-09",
        cumulativeReturn: 0.20129798975234592,
        periodReturn: -0.0016875011837881836
      },
      {
        startDate: "2017-11-09",
        endDate: "2017-11-10",
        cumulativeReturn: 0.19991892400516664,
        periodReturn: -0.0011479797343735615
      },
      {
        startDate: "2017-11-10",
        endDate: "2017-11-13",
        cumulativeReturn: 0.19926578018415486,
        periodReturn: -0.0005443232938035699
      },
      {
        startDate: "2017-11-13",
        endDate: "2017-11-14",
        cumulativeReturn: 0.19837248834482168,
        periodReturn: -0.0007448656120213449
      },
      {
        startDate: "2017-11-14",
        endDate: "2017-11-15",
        cumulativeReturn: 0.1976152338917858,
        periodReturn: -0.000631902401299177
      },
      {
        startDate: "2017-11-15",
        endDate: "2017-11-16",
        cumulativeReturn: 0.19919298879878955,
        periodReturn: 0.0013174138591045674
      },
      {
        startDate: "2017-11-16",
        endDate: "2017-11-17",
        cumulativeReturn: 0.20045475189920992,
        periodReturn: 0.0010521768491028385
      },
      {
        startDate: "2017-11-17",
        endDate: "2017-11-20",
        cumulativeReturn: 0.20082082058279815,
        periodReturn: 0.0003049416756517401
      },
      {
        startDate: "2017-11-20",
        endDate: "2017-11-21",
        cumulativeReturn: 0.20139170019058583,
        periodReturn: 0.0004754078193869559
      },
      {
        startDate: "2017-11-21",
        endDate: "2017-11-22",
        cumulativeReturn: 0.2037968169168145,
        periodReturn: 0.0020019421857561
      },
      {
        startDate: "2017-11-22",
        endDate: "2017-11-23",
        cumulativeReturn: 0.2037968169168145,
        periodReturn: 0
      },
      {
        startDate: "2017-11-23",
        endDate: "2017-11-24",
        cumulativeReturn: 0.20419453784447406,
        periodReturn: 0.00033038875171493404
      },
      {
        startDate: "2017-11-24",
        endDate: "2017-11-27",
        cumulativeReturn: 0.2048762956707486,
        periodReturn: 0.0005661525649294434
      },
      {
        startDate: "2017-11-27",
        endDate: "2017-11-28",
        cumulativeReturn: 0.20516758883871855,
        periodReturn: 0.00024176188793541024
      },
      {
        startDate: "2017-11-28",
        endDate: "2017-11-29",
        cumulativeReturn: 0.20416587658728136,
        periodReturn: -0.0008311808753523093
      },
      {
        startDate: "2017-11-29",
        endDate: "2017-11-30",
        cumulativeReturn: 0.20321188054897132,
        periodReturn: -0.0007922463647729906
      },
      {
        startDate: "2017-11-30",
        endDate: "2017-12-01",
        cumulativeReturn: 0.20528355583277924,
        periodReturn: 0.0017217875897823423
      },
      {
        startDate: "2017-12-01",
        endDate: "2017-12-04",
        cumulativeReturn: 0.20553553112170508,
        periodReturn: 0.00020905892866990693
      },
      {
        startDate: "2017-12-04",
        endDate: "2017-12-05",
        cumulativeReturn: 0.20634333598342036,
        periodReturn: 0.0006700796789983688
      },
      {
        startDate: "2017-12-05",
        endDate: "2017-12-06",
        cumulativeReturn: 0.20682237612193877,
        periodReturn: 0.0003971009945753275
      },
      {
        startDate: "2017-12-06",
        endDate: "2017-12-07",
        cumulativeReturn: 0.20558259958577008,
        periodReturn: -0.0010273065537222254
      },
      {
        startDate: "2017-12-07",
        endDate: "2017-12-08",
        cumulativeReturn: 0.20610069089619132,
        periodReturn: 0.0004297435203522073
      },
      {
        startDate: "2017-12-08",
        endDate: "2017-12-11",
        cumulativeReturn: 0.2063286086378926,
        periodReturn: 0.00018897074134972589
      },
      {
        startDate: "2017-12-11",
        endDate: "2017-12-12",
        cumulativeReturn: 0.20605927249147427,
        periodReturn: -0.00022326930198760295
      },
      {
        startDate: "2017-12-12",
        endDate: "2017-12-13",
        cumulativeReturn: 0.20784164969690666,
        periodReturn: 0.0014778520808106236
      },
      {
        startDate: "2017-12-13",
        endDate: "2017-12-14",
        cumulativeReturn: 0.20755938865464407,
        periodReturn: -0.00023369043643548182
      },
      {
        startDate: "2017-12-14",
        endDate: "2017-12-15",
        cumulativeReturn: 0.2078663102417675,
        periodReturn: 0.0002541668674906991
      },
      {
        startDate: "2017-12-15",
        endDate: "2017-12-18",
        cumulativeReturn: 0.20753844871309113,
        periodReturn: -0.00027143859042713745
      },
      {
        startDate: "2017-12-18",
        endDate: "2017-12-19",
        cumulativeReturn: 0.2056047573754145,
        periodReturn: -0.0016013497042163952
      },
      {
        startDate: "2017-12-19",
        endDate: "2017-12-20",
        cumulativeReturn: 0.20488679451738,
        periodReturn: -0.0005955209231237363
      },
      {
        startDate: "2017-12-20",
        endDate: "2017-12-21",
        cumulativeReturn: 0.20543310674347448,
        periodReturn: 0.00045341373860208157
      },
      {
        startDate: "2017-12-21",
        endDate: "2017-12-22",
        cumulativeReturn: 0.205756631535583,
        periodReturn: 0.0002683888390809724
      },
      {
        startDate: "2017-12-22",
        endDate: "2017-12-25",
        cumulativeReturn: 0.205756631535583,
        periodReturn: 0
      },
      {
        startDate: "2017-12-25",
        endDate: "2017-12-26",
        cumulativeReturn: 0.20724708519179424,
        periodReturn: 0.0012361148321557221
      },
      {
        startDate: "2017-12-26",
        endDate: "2017-12-27",
        cumulativeReturn: 0.20919461721571908,
        periodReturn: 0.0016132008499448358
      },
      {
        startDate: "2017-12-27",
        endDate: "2017-12-28",
        cumulativeReturn: 0.20901437034769743,
        periodReturn: -0.00014906357128575563
      },
      {
        startDate: "2017-12-28",
        endDate: "2017-12-29",
        cumulativeReturn: 0.2106843692570466,
        periodReturn: 0.0013812895448619975
      },
      {
        startDate: "2017-12-29",
        endDate: "2018-01-01",
        cumulativeReturn: 0.2106843692570466,
        periodReturn: 0
      },
      {
        startDate: "2018-01-01",
        endDate: "2018-01-02",
        cumulativeReturn: 0.2100971159299987,
        periodReturn: -0.0004850589814820093
      },
      {
        startDate: "2018-01-02",
        endDate: "2018-01-03",
        cumulativeReturn: 0.211950121639213,
        periodReturn: 0.0015312867742768535
      },
      {
        startDate: "2018-01-03",
        endDate: "2018-01-04",
        cumulativeReturn: 0.21308673094026642,
        periodReturn: 0.0009378350484557027
      },
      {
        startDate: "2018-01-04",
        endDate: "2018-01-05",
        cumulativeReturn: 0.21308521399397118,
        periodReturn: -0.000001250484616354356
      },
      {
        startDate: "2018-01-05",
        endDate: "2018-01-08",
        cumulativeReturn: 0.21358784874456216,
        periodReturn: 0.00041434414070237285
      },
      {
        startDate: "2018-01-08",
        endDate: "2018-01-09",
        cumulativeReturn: 0.21217413109463457,
        periodReturn: -0.001164907551925407
      },
      {
        startDate: "2018-01-09",
        endDate: "2018-01-10",
        cumulativeReturn: 0.21083934162259577,
        periodReturn: -0.0011011532401153327
      },
      {
        startDate: "2018-01-10",
        endDate: "2018-01-11",
        cumulativeReturn: 0.21253021077881473,
        periodReturn: 0.0013964438535281184
      },
      {
        startDate: "2018-01-11",
        endDate: "2018-01-12",
        cumulativeReturn: 0.21277833162794324,
        periodReturn: 0.00020463065325945933
      },
      {
        startDate: "2018-01-12",
        endDate: "2018-01-15",
        cumulativeReturn: 0.21277833162794324,
        periodReturn: 0
      },
      {
        startDate: "2018-01-15",
        endDate: "2018-01-16",
        cumulativeReturn: 0.2130041221726473,
        periodReturn: 0.0001861762688330046
      },
      {
        startDate: "2018-01-16",
        endDate: "2018-01-17",
        cumulativeReturn: 0.21227747936322894,
        periodReturn: -0.0005990439736649798
      },
      {
        startDate: "2018-01-17",
        endDate: "2018-01-18",
        cumulativeReturn: 0.21068314747367567,
        periodReturn: -0.0013151542585701514
      },
      {
        startDate: "2018-01-18",
        endDate: "2018-01-19",
        cumulativeReturn: 0.20859815901894296,
        periodReturn: -0.0017221586499187422
      },
      {
        startDate: "2018-01-19",
        endDate: "2018-01-22",
        cumulativeReturn: 0.20914412354331047,
        periodReturn: 0.00045173370511397416
      },
      {
        startDate: "2018-01-22",
        endDate: "2018-01-23",
        cumulativeReturn: 0.21204860410985282,
        periodReturn: 0.0024020962513806652
      },
      {
        startDate: "2018-01-23",
        endDate: "2018-01-24",
        cumulativeReturn: 0.2116188209710732,
        periodReturn: -0.00035459233014437964
      },
      {
        startDate: "2018-01-24",
        endDate: "2018-01-25",
        cumulativeReturn: 0.2138795214907967,
        periodReturn: 0.0018658512731848942
      },
      {
        startDate: "2018-01-25",
        endDate: "2018-01-26",
        cumulativeReturn: 0.21364340841413387,
        periodReturn: -0.00019451112938532862
      },
      {
        startDate: "2018-01-26",
        endDate: "2018-01-29",
        cumulativeReturn: 0.2118283296486354,
        periodReturn: -0.0014955618371216876
      },
      {
        startDate: "2018-01-29",
        endDate: "2018-01-30",
        cumulativeReturn: 0.21046387865181182,
        periodReturn: -0.0011259441320531644
      },
      {
        startDate: "2018-01-30",
        endDate: "2018-01-31",
        cumulativeReturn: 0.2113786506286106,
        periodReturn: 0.0007557201771420359
      },
      {
        startDate: "2018-01-31",
        endDate: "2018-02-01",
        cumulativeReturn: 0.21052366169743708,
        periodReturn: -0.0007057982495645784
      },
      {
        startDate: "2018-02-01",
        endDate: "2018-02-02",
        cumulativeReturn: 0.2066756828447569,
        periodReturn: -0.003178772108662764
      },
      {
        startDate: "2018-02-02",
        endDate: "2018-02-05",
        cumulativeReturn: 0.20549660307182416,
        periodReturn: -0.0009771306322780896
      },
      {
        startDate: "2018-02-05",
        endDate: "2018-02-06",
        cumulativeReturn: 0.20297789868419058,
        periodReturn: -0.0020893500497765915
      },
      {
        startDate: "2018-02-06",
        endDate: "2018-02-07",
        cumulativeReturn: 0.20312090327308208,
        periodReturn: 0.00011887549143486543
      },
      {
        startDate: "2018-02-07",
        endDate: "2018-02-08",
        cumulativeReturn: 0.19815930118039748,
        periodReturn: -0.004123943054423396
      },
      {
        startDate: "2018-02-08",
        endDate: "2018-02-09",
        cumulativeReturn: 0.1949509182798641,
        periodReturn: -0.0026777598749786603
      },
      {
        startDate: "2018-02-09",
        endDate: "2018-02-12",
        cumulativeReturn: 0.19734162624219387,
        periodReturn: 0.0020006746099423566
      },
      {
        startDate: "2018-02-12",
        endDate: "2018-02-13",
        cumulativeReturn: 0.19703135634633107,
        periodReturn: -0.0002591323053191342
      },
      {
        startDate: "2018-02-13",
        endDate: "2018-02-14",
        cumulativeReturn: 0.19521234980993984,
        periodReturn: -0.0015195980679598754
      },
      {
        startDate: "2018-02-14",
        endDate: "2018-02-15",
        cumulativeReturn: 0.19880420078873895,
        periodReturn: 0.003005199017036783
      },
      {
        startDate: "2018-02-15",
        endDate: "2018-02-16",
        cumulativeReturn: 0.20195775576093755,
        periodReturn: 0.002630583851911725
      },
      {
        startDate: "2018-02-16",
        endDate: "2018-02-19",
        cumulativeReturn: 0.20195775576093755,
        periodReturn: 0
      },
      {
        startDate: "2018-02-19",
        endDate: "2018-02-20",
        cumulativeReturn: 0.20086104035125407,
        periodReturn: -0.0009124408943881943
      },
      {
        startDate: "2018-02-20",
        endDate: "2018-02-21",
        cumulativeReturn: 0.19782873644280796,
        periodReturn: -0.0025251080737528227
      },
      {
        startDate: "2018-02-21",
        endDate: "2018-02-22",
        cumulativeReturn: 0.19887272552652457,
        periodReturn: 0.0008715679061240153
      },
      {
        startDate: "2018-02-22",
        endDate: "2018-02-23",
        cumulativeReturn: 0.20133418444102436,
        periodReturn: 0.002053144476548893
      },
      {
        startDate: "2018-02-23",
        endDate: "2018-02-26",
        cumulativeReturn: 0.20457438501637015,
        periodReturn: 0.002697168379382717
      },
      {
        startDate: "2018-02-26",
        endDate: "2018-02-27",
        cumulativeReturn: 0.20275239561183267,
        periodReturn: -0.0015125586490972176
      },
      {
        startDate: "2018-02-27",
        endDate: "2018-02-28",
        cumulativeReturn: 0.2030280185083735,
        periodReturn: 0.00022916013100159798
      },
      {
        startDate: "2018-02-28",
        endDate: "2018-03-01",
        cumulativeReturn: 0.20323383477402412,
        periodReturn: 0.00017108185552140498
      },
      {
        startDate: "2018-03-01",
        endDate: "2018-03-02",
        cumulativeReturn: 0.2006415160412236,
        periodReturn: -0.002154459638585019
      },
      {
        startDate: "2018-03-02",
        endDate: "2018-03-05",
        cumulativeReturn: 0.2015450948165134,
        periodReturn: 0.0007525799859637259
      },
      {
        startDate: "2018-03-05",
        endDate: "2018-03-06",
        cumulativeReturn: 0.20286241543393535,
        periodReturn: 0.0010963555368042014
      },
      {
        startDate: "2018-03-06",
        endDate: "2018-03-07",
        cumulativeReturn: 0.20216784080162276,
        periodReturn: -0.0005774348116630568
      },
      {
        startDate: "2018-03-07",
        endDate: "2018-03-08",
        cumulativeReturn: 0.20286725469837252,
        periodReturn: 0.0005817938835258404
      },
      {
        startDate: "2018-03-08",
        endDate: "2018-03-09",
        cumulativeReturn: 0.20362777531131004,
        periodReturn: 0.0006322564771522737
      },
      {
        startDate: "2018-03-09",
        endDate: "2018-03-12",
        cumulativeReturn: 0.20433979644824452,
        periodReturn: 0.0005915625673810443
      },
      {
        startDate: "2018-03-12",
        endDate: "2018-03-13",
        cumulativeReturn: 0.2038764124709338,
        periodReturn: -0.00038476182442635445
      },
      {
        startDate: "2018-03-13",
        endDate: "2018-03-14",
        cumulativeReturn: 0.20475883104104264,
        periodReturn: 0.0007329810277598015
      },
      {
        startDate: "2018-03-14",
        endDate: "2018-03-15",
        cumulativeReturn: 0.2041099446819381,
        periodReturn: -0.0005386026998813577
      },
      {
        startDate: "2018-03-15",
        endDate: "2018-03-16",
        cumulativeReturn: 0.20389536347032422,
        periodReturn: -0.00017820732447375344
      },
      {
        startDate: "2018-03-16",
        endDate: "2018-03-19",
        cumulativeReturn: 0.20172803788837768,
        periodReturn: -0.0018002607599543168
      },
      {
        startDate: "2018-03-19",
        endDate: "2018-03-20",
        cumulativeReturn: 0.2005773420359367,
        periodReturn: -0.0009575343306985046
      },
      {
        startDate: "2018-03-20",
        endDate: "2018-03-21",
        cumulativeReturn: 0.2015147626830931,
        periodReturn: 0.0007808082114615212
      },
      {
        startDate: "2018-03-21",
        endDate: "2018-03-22",
        cumulativeReturn: 0.20070653454043863,
        periodReturn: -0.0006726743338962638
      },
      {
        startDate: "2018-03-22",
        endDate: "2018-03-23",
        cumulativeReturn: 0.19888366839044025,
        periodReturn: -0.0015181612638563372
      },
      {
        startDate: "2018-03-23",
        endDate: "2018-03-26",
        cumulativeReturn: 0.20024971722709095,
        periodReturn: 0.0011394340190527547
      },
      {
        startDate: "2018-03-26",
        endDate: "2018-03-27",
        cumulativeReturn: 0.2030114771982725,
        periodReturn: 0.0023009878124045533
      },
      {
        startDate: "2018-03-27",
        endDate: "2018-03-28",
        cumulativeReturn: 0.20232743675032916,
        periodReturn: -0.0005686067513973804
      },
      {
        startDate: "2018-03-28",
        endDate: "2018-03-29",
        cumulativeReturn: 0.20463026643942173,
        periodReturn: 0.0019153099386275611
      },
      {
        startDate: "2018-03-29",
        endDate: "2018-03-30",
        cumulativeReturn: 0.20463026643942173,
        periodReturn: 0
      },
      {
        startDate: "2018-03-30",
        endDate: "2018-04-02",
        cumulativeReturn: 0.20302850207773004,
        periodReturn: -0.001329673017785027
      },
      {
        startDate: "2018-04-02",
        endDate: "2018-04-03",
        cumulativeReturn: 0.20274573926424955,
        periodReturn: -0.00023504248901171304
      },
      {
        startDate: "2018-04-03",
        endDate: "2018-04-04",
        cumulativeReturn: 0.20328735690483413,
        periodReturn: 0.00045031765476541543
      },
      {
        startDate: "2018-04-04",
        endDate: "2018-04-05",
        cumulativeReturn: 0.2046079035091959,
        periodReturn: 0.0010974490812890255
      },
      {
        startDate: "2018-04-05",
        endDate: "2018-04-06",
        cumulativeReturn: 0.20516047766271184,
        periodReturn: 0.0004587170247732363
      },
      {
        startDate: "2018-04-06",
        endDate: "2018-04-09",
        cumulativeReturn: 0.20592981102899666,
        periodReturn: 0.0006383659110502387
      },
      {
        startDate: "2018-04-09",
        endDate: "2018-04-10",
        cumulativeReturn: 0.20760068602939064,
        periodReturn: 0.0013855491299018668
      },
      {
        startDate: "2018-04-10",
        endDate: "2018-04-11",
        cumulativeReturn: 0.20771050072319341,
        periodReturn: 0.00009093626318139855
      },
      {
        startDate: "2018-04-11",
        endDate: "2018-04-12",
        cumulativeReturn: 0.2076335649380754,
        periodReturn: -0.00006370383057198121
      },
      {
        startDate: "2018-04-12",
        endDate: "2018-04-13",
        cumulativeReturn: 0.2088392786923512,
        periodReturn: 0.0009984102705339814
      },
      {
        startDate: "2018-04-13",
        endDate: "2018-04-16",
        cumulativeReturn: 0.21010427775530505,
        periodReturn: 0.001046457610412921
      },
      {
        startDate: "2018-04-16",
        endDate: "2018-04-17",
        cumulativeReturn: 0.2113968122119927,
        periodReturn: 0.00106811824439242
      },
      {
        startDate: "2018-04-17",
        endDate: "2018-04-18",
        cumulativeReturn: 0.21096502540394502,
        periodReturn: -0.0003564371341370948
      },
      {
        startDate: "2018-04-18",
        endDate: "2018-04-19",
        cumulativeReturn: 0.20768065296415994,
        periodReturn: -0.002712194300318022
      },
      {
        startDate: "2018-04-19",
        endDate: "2018-04-20",
        cumulativeReturn: 0.20585445574736871,
        periodReturn: -0.001512152415714374
      },
      {
        startDate: "2018-04-20",
        endDate: "2018-04-23",
        cumulativeReturn: 0.2051175609593885,
        periodReturn: -0.0006110976200055985
      },
      {
        startDate: "2018-04-23",
        endDate: "2018-04-24",
        cumulativeReturn: 0.20354578748422458,
        periodReturn: -0.0013042490841412358
      },
      {
        startDate: "2018-04-24",
        endDate: "2018-04-25",
        cumulativeReturn: 0.20074742179240923,
        periodReturn: -0.002325101147721826
      },
      {
        startDate: "2018-04-25",
        endDate: "2018-04-26",
        cumulativeReturn: 0.20345349355825793,
        periodReturn: 0.0022536561117984877
      },
      {
        startDate: "2018-04-26",
        endDate: "2018-04-27",
        cumulativeReturn: 0.2040877585972274,
        periodReturn: 0.0005270374321605312
      },
      {
        startDate: "2018-04-27",
        endDate: "2018-04-30",
        cumulativeReturn: 0.20394655414742813,
        periodReturn: -0.00011727089557301762
      },
      {
        startDate: "2018-04-30",
        endDate: "2018-05-01",
        cumulativeReturn: 0.20296951746757674,
        periodReturn: -0.0008115282829503541
      },
      {
        startDate: "2018-05-01",
        endDate: "2018-05-02",
        cumulativeReturn: 0.20209475893895945,
        periodReturn: -0.0007271659970725609
      },
      {
        startDate: "2018-05-02",
        endDate: "2018-05-03",
        cumulativeReturn: 0.20156250875884263,
        periodReturn: -0.0004427689049960637
      },
      {
        startDate: "2018-05-03",
        endDate: "2018-05-04",
        cumulativeReturn: 0.20239518228330922,
        periodReturn: 0.0006929922649857444
      },
      {
        startDate: "2018-05-04",
        endDate: "2018-05-07",
        cumulativeReturn: 0.20279886008178094,
        periodReturn: 0.00033572805714754823
      },
      {
        startDate: "2018-05-07",
        endDate: "2018-05-08",
        cumulativeReturn: 0.2007756328437964,
        periodReturn: -0.0016820993976057969
      },
      {
        startDate: "2018-05-08",
        endDate: "2018-05-09",
        cumulativeReturn: 0.20029448103518588,
        periodReturn: -0.0004007008432300313
      },
      {
        startDate: "2018-05-09",
        endDate: "2018-05-10",
        cumulativeReturn: 0.2029804263920374,
        periodReturn: 0.0022377386543801286
      },
      {
        startDate: "2018-05-10",
        endDate: "2018-05-11",
        cumulativeReturn: 0.20381954955176318,
        periodReturn: 0.0006975368354434694
      },
      {
        startDate: "2018-05-11",
        endDate: "2018-05-14",
        cumulativeReturn: 0.20264599686047968,
        periodReturn: -0.0009748576451681919
      },
      {
        startDate: "2018-05-14",
        endDate: "2018-05-15",
        cumulativeReturn: 0.19984315274830178,
        periodReturn: -0.0023305645381057455
      },
      {
        startDate: "2018-05-15",
        endDate: "2018-05-16",
        cumulativeReturn: 0.19962101218572825,
        periodReturn: -0.00018514133456925112
      },
      {
        startDate: "2018-05-16",
        endDate: "2018-05-17",
        cumulativeReturn: 0.1990138037113045,
        periodReturn: -0.0005061669212657975
      },
      {
        startDate: "2018-05-17",
        endDate: "2018-05-18",
        cumulativeReturn: 0.20049410651050348,
        periodReturn: 0.0012346002978588253
      },
      {
        startDate: "2018-05-18",
        endDate: "2018-05-21",
        cumulativeReturn: 0.20108157825098005,
        periodReturn: 0.0004893582878004643
      },
      {
        startDate: "2018-05-21",
        endDate: "2018-05-22",
        cumulativeReturn: 0.20192668111232637,
        periodReturn: 0.0007036182026679549
      },
      {
        startDate: "2018-05-22",
        endDate: "2018-05-23",
        cumulativeReturn: 0.20380664972746798,
        periodReturn: 0.0015641291974663669
      },
      {
        startDate: "2018-05-23",
        endDate: "2018-05-24",
        cumulativeReturn: 0.20520290278217712,
        periodReturn: 0.0011598648794847778
      },
      {
        startDate: "2018-05-24",
        endDate: "2018-05-25",
        cumulativeReturn: 0.20701968606710408,
        periodReturn: 0.0015074501403316174
      },
      {
        startDate: "2018-05-25",
        endDate: "2018-05-28",
        cumulativeReturn: 0.20701968606710408,
        periodReturn: 0
      },
      {
        startDate: "2018-05-28",
        endDate: "2018-05-29",
        cumulativeReturn: 0.2091290777966217,
        periodReturn: 0.001747603418458511
      },
      {
        startDate: "2018-05-29",
        endDate: "2018-05-30",
        cumulativeReturn: 0.20845195382207082,
        periodReturn: -0.0005600096689302626
      },
      {
        startDate: "2018-05-30",
        endDate: "2018-05-31",
        cumulativeReturn: 0.20812456572901272,
        periodReturn: -0.000270915274722093
      },
      {
        startDate: "2018-05-31",
        endDate: "2018-06-01",
        cumulativeReturn: 0.2071903046450878,
        periodReturn: -0.0007733151948293655
      },
      {
        startDate: "2018-06-01",
        endDate: "2018-06-04",
        cumulativeReturn: 0.20755358723557116,
        periodReturn: 0.00030093232946405246
      },
      {
        startDate: "2018-06-04",
        endDate: "2018-06-05",
        cumulativeReturn: 0.2093623577679673,
        periodReturn: 0.0014978801367621381
      },
      {
        startDate: "2018-06-05",
        endDate: "2018-06-06",
        cumulativeReturn: 0.20818504073921784,
        periodReturn: -0.0009735022933261431
      },
      {
        startDate: "2018-06-06",
        endDate: "2018-06-07",
        cumulativeReturn: 0.20980508964265043,
        periodReturn: 0.001340894688152539
      },
      {
        startDate: "2018-06-07",
        endDate: "2018-06-08",
        cumulativeReturn: 0.20952638762390996,
        periodReturn: -0.00023036935546608337
      },
      {
        startDate: "2018-06-08",
        endDate: "2018-06-11",
        cumulativeReturn: 0.20955086724296668,
        periodReturn: 0.000020239011986175338
      },
      {
        startDate: "2018-06-11",
        endDate: "2018-06-12",
        cumulativeReturn: 0.20955922780948755,
        periodReturn: 0.000006912124779039474
      },
      {
        startDate: "2018-06-12",
        endDate: "2018-06-13",
        cumulativeReturn: 0.20950966348935385,
        periodReturn: -0.0000409771749858618
      },
      {
        startDate: "2018-06-13",
        endDate: "2018-06-14",
        cumulativeReturn: 0.2106180273052567,
        periodReturn: 0.0009163745022964024
      },
      {
        startDate: "2018-06-14",
        endDate: "2018-06-15",
        cumulativeReturn: 0.21110413934906824,
        periodReturn: 0.00040154039742298876
      },
      {
        startDate: "2018-06-15",
        endDate: "2018-06-18",
        cumulativeReturn: 0.21059636778582336,
        periodReturn: -0.0004192633372699667
      },
      {
        startDate: "2018-06-18",
        endDate: "2018-06-19",
        cumulativeReturn: 0.20998340231773827,
        periodReturn: -0.0005063334769508028
      },
      {
        startDate: "2018-06-19",
        endDate: "2018-06-20",
        cumulativeReturn: 0.21018101371453368,
        periodReturn: 0.00016331744420382057
      },
      {
        startDate: "2018-06-20",
        endDate: "2018-06-21",
        cumulativeReturn: 0.21087267008110788,
        periodReturn: 0.000571531331871698
      },
      {
        startDate: "2018-06-21",
        endDate: "2018-06-22",
        cumulativeReturn: 0.21187995890493383,
        periodReturn: 0.0008318701451561914
      },
      {
        startDate: "2018-06-22",
        endDate: "2018-06-25",
        cumulativeReturn: 0.21180072819949003,
        periodReturn: -0.00006537834449812395
      },
      {
        startDate: "2018-06-25",
        endDate: "2018-06-26",
        cumulativeReturn: 0.2106404641701829,
        periodReturn: -0.0009574709787730605
      },
      {
        startDate: "2018-06-26",
        endDate: "2018-06-27",
        cumulativeReturn: 0.21081967774605337,
        periodReturn: 0.00014803203855676464
      },
      {
        startDate: "2018-06-27",
        endDate: "2018-06-28",
        cumulativeReturn: 0.20851587260199023,
        periodReturn: -0.001902682279124985
      },
      {
        startDate: "2018-06-28",
        endDate: "2018-06-29",
        cumulativeReturn: 0.20970615846918017,
        periodReturn: 0.0009849153777576989
      },
      {
        startDate: "2018-06-29",
        endDate: "2018-07-02",
        cumulativeReturn: 0.20886107214127247,
        periodReturn: -0.0006985881009129519
      },
      {
        startDate: "2018-07-02",
        endDate: "2018-07-03",
        cumulativeReturn: 0.21070244357091217,
        periodReturn: 0.0015232283279484555
      },
      {
        startDate: "2018-07-03",
        endDate: "2018-07-04",
        cumulativeReturn: 0.21070244357091217,
        periodReturn: 0
      },
      {
        startDate: "2018-07-04",
        endDate: "2018-07-05",
        cumulativeReturn: 0.21168735095325486,
        periodReturn: 0.000813500780123772
      },
      {
        startDate: "2018-07-05",
        endDate: "2018-07-06",
        cumulativeReturn: 0.21387255321395138,
        periodReturn: 0.0018034373792690623
      },
      {
        startDate: "2018-07-06",
        endDate: "2018-07-09",
        cumulativeReturn: 0.21532342583964925,
        periodReturn: 0.0011952429617561615
      },
      {
        startDate: "2018-07-09",
        endDate: "2018-07-10",
        cumulativeReturn: 0.21619427423986148,
        periodReturn: 0.0007165569112688472
      },
      {
        startDate: "2018-07-10",
        endDate: "2018-07-11",
        cumulativeReturn: 0.21620044262420746,
        periodReturn: 0.0000050718741870452165
      },
      {
        startDate: "2018-07-11",
        endDate: "2018-07-12",
        cumulativeReturn: 0.21710768219021626,
        periodReturn: 0.0007459622067322463
      },
      {
        startDate: "2018-07-12",
        endDate: "2018-07-13",
        cumulativeReturn: 0.21869385992105284,
        periodReturn: 0.0013032353291718183
      },
      {
        startDate: "2018-07-13",
        endDate: "2018-07-16",
        cumulativeReturn: 0.21795524143246503,
        periodReturn: -0.0006060738573309555
      },
      {
        startDate: "2018-07-16",
        endDate: "2018-07-17",
        cumulativeReturn: 0.21753677858437737,
        periodReturn: -0.0003435781823932998
      },
      {
        startDate: "2018-07-17",
        endDate: "2018-07-18",
        cumulativeReturn: 0.21723482533385718,
        periodReturn: -0.00024800339162743166
      },
      {
        startDate: "2018-07-18",
        endDate: "2018-07-19",
        cumulativeReturn: 0.2177862180013892,
        periodReturn: 0.00045298791659259974
      },
      {
        startDate: "2018-07-19",
        endDate: "2018-07-20",
        cumulativeReturn: 0.21769973099957785,
        periodReturn: -0.00007101985597543881
      },
      {
        startDate: "2018-07-20",
        endDate: "2018-07-23",
        cumulativeReturn: 0.21599749213786357,
        periodReturn: -0.0013979134743808842
      },
      {
        startDate: "2018-07-23",
        endDate: "2018-07-24",
        cumulativeReturn: 0.2171127349362616,
        periodReturn: 0.000917142350711018
      },
      {
        startDate: "2018-07-24",
        endDate: "2018-07-25",
        cumulativeReturn: 0.21769190761368984,
        periodReturn: 0.00047585787314805223
      },
      {
        startDate: "2018-07-25",
        endDate: "2018-07-26",
        cumulativeReturn: 0.21750119790970612,
        periodReturn: -0.00015661572750154902
      },
      {
        startDate: "2018-07-26",
        endDate: "2018-07-27",
        cumulativeReturn: 0.218369761600826,
        periodReturn: 0.0007133986337025137
      },
      {
        startDate: "2018-07-27",
        endDate: "2018-07-30",
        cumulativeReturn: 0.21815327004503238,
        periodReturn: -0.00017768953450493096
      },
      {
        startDate: "2018-07-30",
        endDate: "2018-07-31",
        cumulativeReturn: 0.21906446646365918,
        periodReturn: 0.0007480145898167748
      },
      {
        startDate: "2018-07-31",
        endDate: "2018-08-01",
        cumulativeReturn: 0.21797120428832906,
        periodReturn: -0.000896804234235159
      },
      {
        startDate: "2018-08-01",
        endDate: "2018-08-02",
        cumulativeReturn: 0.21786108451610064,
        periodReturn: -0.00009041245953978119
      },
      {
        startDate: "2018-08-02",
        endDate: "2018-08-03",
        cumulativeReturn: 0.22047990246842764,
        periodReturn: 0.0021503420920684006
      },
      {
        startDate: "2018-08-03",
        endDate: "2018-08-06",
        cumulativeReturn: 0.22139096991303053,
        periodReturn: 0.0007464829554016462
      },
      {
        startDate: "2018-08-06",
        endDate: "2018-08-07",
        cumulativeReturn: 0.2219339746219411,
        periodReturn: 0.00044457894506068764
      },
      {
        startDate: "2018-08-07",
        endDate: "2018-08-08",
        cumulativeReturn: 0.2217209922106882,
        periodReturn: -0.0001742994430765005
      },
      {
        startDate: "2018-08-08",
        endDate: "2018-08-09",
        cumulativeReturn: 0.2223424680453845,
        periodReturn: 0.0005086888402988202
      },
      {
        startDate: "2018-08-09",
        endDate: "2018-08-10",
        cumulativeReturn: 0.22230761553765732,
        periodReturn: -0.000028512882959028115
      },
      {
        startDate: "2018-08-10",
        endDate: "2018-08-13",
        cumulativeReturn: 0.22043904306367912,
        periodReturn: -0.001528725216324778
      },
      {
        startDate: "2018-08-13",
        endDate: "2018-08-14",
        cumulativeReturn: 0.2206841693082875,
        periodReturn: 0.0002008508708415233
      },
      {
        startDate: "2018-08-14",
        endDate: "2018-08-15",
        cumulativeReturn: 0.2205953018790432,
        periodReturn: -0.00007280132853252918
      },
      {
        startDate: "2018-08-15",
        endDate: "2018-08-16",
        cumulativeReturn: 0.22140668586627998,
        periodReturn: 0.000664744478360469
      },
      {
        startDate: "2018-08-16",
        endDate: "2018-08-17",
        cumulativeReturn: 0.22204095838214633,
        periodReturn: 0.0005192967446518713
      },
      {
        startDate: "2018-08-17",
        endDate: "2018-08-20",
        cumulativeReturn: 0.22381974138974292,
        periodReturn: 0.0014555837882484397
      },
      {
        startDate: "2018-08-20",
        endDate: "2018-08-21",
        cumulativeReturn: 0.2238177615992989,
        periodReturn: -0.000001617714093907225
      },
      {
        startDate: "2018-08-21",
        endDate: "2018-08-22",
        cumulativeReturn: 0.22468871445753824,
        periodReturn: 0.0007116687513188885
      },
      {
        startDate: "2018-08-22",
        endDate: "2018-08-23",
        cumulativeReturn: 0.22472374002978213,
        periodReturn: 0.000028599571328084236
      },
      {
        startDate: "2018-08-23",
        endDate: "2018-08-24",
        cumulativeReturn: 0.22541718927975296,
        periodReturn: 0.000566208710834692
      },
      {
        startDate: "2018-08-24",
        endDate: "2018-08-27",
        cumulativeReturn: 0.22506067528538987,
        periodReturn: -0.0002909327512964815
      },
      {
        startDate: "2018-08-27",
        endDate: "2018-08-28",
        cumulativeReturn: 0.2244536386616185,
        periodReturn: -0.0004955155577333668
      },
      {
        startDate: "2018-08-28",
        endDate: "2018-08-29",
        cumulativeReturn: 0.22518313616692076,
        periodReturn: 0.0005957738882622134
      },
      {
        startDate: "2018-08-29",
        endDate: "2018-08-30",
        cumulativeReturn: 0.22478872666064187,
        periodReturn: -0.00032191881738815676
      },
      {
        startDate: "2018-08-30",
        endDate: "2018-08-31",
        cumulativeReturn: 0.22519966704050653,
        periodReturn: 0.00033551940095421406
      },
      {
        startDate: "2018-08-31",
        endDate: "2018-09-03",
        cumulativeReturn: 0.22519966704050653,
        periodReturn: 0
      },
      {
        startDate: "2018-09-03",
        endDate: "2018-09-04",
        cumulativeReturn: 0.22318091599491408,
        periodReturn: -0.0016476914742139146
      },
      {
        startDate: "2018-09-04",
        endDate: "2018-09-05",
        cumulativeReturn: 0.22318091599491408,
        periodReturn: 0
      },
      {
        startDate: "2018-09-05",
        endDate: "2018-09-06",
        cumulativeReturn: 0.22423378967364527,
        periodReturn: 0.0008607669274130179
      },
      {
        startDate: "2018-09-06",
        endDate: "2018-09-07",
        cumulativeReturn: 0.22234225707927657,
        periodReturn: -0.0015450746502209867
      },
      {
        startDate: "2018-09-07",
        endDate: "2018-09-10",
        cumulativeReturn: 0.22248882966502004,
        periodReturn: 0.00011991124817502393
      },
      {
        startDate: "2018-09-10",
        endDate: "2018-09-11",
        cumulativeReturn: 0.2216506980983597,
        periodReturn: -0.0006855944580615369
      },
      {
        startDate: "2018-09-11",
        endDate: "2018-09-12",
        cumulativeReturn: 0.22282245628143227,
        periodReturn: 0.0009591597540087057
      },
      {
        startDate: "2018-09-12",
        endDate: "2018-09-13",
        cumulativeReturn: 0.22423742159790327,
        periodReturn: 0.0011571306277561111
      },
      {
        startDate: "2018-09-13",
        endDate: "2018-09-14",
        cumulativeReturn: 0.22445771102151757,
        periodReturn: 0.0001799401159676426
      },
      {
        startDate: "2018-09-14",
        endDate: "2018-09-17",
        cumulativeReturn: 0.2250561010109957,
        periodReturn: 0.0004886979632632002
      },
      {
        startDate: "2018-09-17",
        endDate: "2018-09-18",
        cumulativeReturn: 0.2241443902977891,
        periodReturn: -0.0007442195606015507
      },
      {
        startDate: "2018-09-18",
        endDate: "2018-09-19",
        cumulativeReturn: 0.22406548298187423,
        periodReturn: -0.00006445915738398714
      },
      {
        startDate: "2018-09-19",
        endDate: "2018-09-20",
        cumulativeReturn: 0.225203618882879,
        periodReturn: 0.0009297998488056929
      },
      {
        startDate: "2018-09-20",
        endDate: "2018-09-21",
        cumulativeReturn: 0.22642210629241122,
        periodReturn: 0.0009945182912888195
      },
      {
        startDate: "2018-09-21",
        endDate: "2018-09-24",
        cumulativeReturn: 0.2263784544596763,
        periodReturn: -0.0000355928293456299
      },
      {
        startDate: "2018-09-24",
        endDate: "2018-09-25",
        cumulativeReturn: 0.22601485266806898,
        periodReturn: -0.0002964841646435806
      },
      {
        startDate: "2018-09-25",
        endDate: "2018-09-26",
        cumulativeReturn: 0.22721328400674556,
        periodReturn: 0.0009775014846421899
      },
      {
        startDate: "2018-09-26",
        endDate: "2018-09-27",
        cumulativeReturn: 0.22909808227255124,
        periodReturn: 0.001535835938519065
      },
      {
        startDate: "2018-09-27",
        endDate: "2018-09-28",
        cumulativeReturn: 0.2292804566662794,
        periodReturn: 0.0001483806673841742
      },
      {
        startDate: "2018-09-28",
        endDate: "2018-10-01",
        cumulativeReturn: 0.22948612863644047,
        periodReturn: 0.0001673108598170628
      },
      {
        startDate: "2018-10-01",
        endDate: "2018-10-02",
        cumulativeReturn: 0.23071876007966985,
        periodReturn: 0.0010025582351191051
      },
      {
        startDate: "2018-10-02",
        endDate: "2018-10-03",
        cumulativeReturn: 0.22895056173582984,
        periodReturn: -0.001436720070575308
      },
      {
        startDate: "2018-10-03",
        endDate: "2018-10-04",
        cumulativeReturn: 0.22484375354795705,
        periodReturn: -0.003341719606744935
      },
      {
        startDate: "2018-10-04",
        endDate: "2018-10-05",
        cumulativeReturn: 0.2233193155193569,
        periodReturn: -0.0012445979531546835
      },
      {
        startDate: "2018-10-05",
        endDate: "2018-10-08",
        cumulativeReturn: 0.22360805861589883,
        periodReturn: 0.00023603248381585
      },
      {
        startDate: "2018-10-08",
        endDate: "2018-10-09",
        cumulativeReturn: 0.22325346770247045,
        periodReturn: -0.00028979125376917073
      },
      {
        startDate: "2018-10-09",
        endDate: "2018-10-10",
        cumulativeReturn: 0.22003777685304726,
        periodReturn: -0.002628801744141277
      },
      {
        startDate: "2018-10-10",
        endDate: "2018-10-11",
        cumulativeReturn: 0.21980215135903158,
        periodReturn: -0.00019312967064304565
      },
      {
        startDate: "2018-10-11",
        endDate: "2018-10-12",
        cumulativeReturn: 0.22169179268117922,
        periodReturn: 0.0015491375548422298
      },
      {
        startDate: "2018-10-12",
        endDate: "2018-10-15",
        cumulativeReturn: 0.22152813232256396,
        periodReturn: -0.00013396206767999372
      },
      {
        startDate: "2018-10-15",
        endDate: "2018-10-16",
        cumulativeReturn: 0.22376662194399866,
        periodReturn: 0.0018325321883324512
      },
      {
        startDate: "2018-10-16",
        endDate: "2018-10-17",
        cumulativeReturn: 0.22250200574616774,
        periodReturn: -0.0010333802010566477
      },
      {
        startDate: "2018-10-17",
        endDate: "2018-10-18",
        cumulativeReturn: 0.21989178538303555,
        periodReturn: -0.00213514607817677
      },
      {
        startDate: "2018-10-18",
        endDate: "2018-10-19",
        cumulativeReturn: 0.21944063415419413,
        periodReturn: -0.00036982889322409023
      },
      {
        startDate: "2018-10-19",
        endDate: "2018-10-22",
        cumulativeReturn: 0.21946722904698213,
        periodReturn: 0.0000218090918435045
      },
      {
        startDate: "2018-10-22",
        endDate: "2018-10-23",
        cumulativeReturn: 0.21862183784695421,
        periodReturn: -0.0006932463455279623
      },
      {
        startDate: "2018-10-23",
        endDate: "2018-10-24",
        cumulativeReturn: 0.21865257157635543,
        periodReturn: 0.000025220071105393623
      },
      {
        startDate: "2018-10-24",
        endDate: "2018-10-25",
        cumulativeReturn: 0.2178544119760184,
        periodReturn: -0.0006549525426304204
      },
      {
        startDate: "2018-10-25",
        endDate: "2018-10-26",
        cumulativeReturn: 0.21785097249817964,
        periodReturn: -0.0000028242110098034014
      },
      {
        startDate: "2018-10-26",
        endDate: "2018-10-29",
        cumulativeReturn: 0.2167765440353444,
        periodReturn: -0.0008822331197316764
      },
      {
        startDate: "2018-10-29",
        endDate: "2018-10-30",
        cumulativeReturn: 0.21542870648413048,
        periodReturn: -0.0011077116483063818
      },
      {
        startDate: "2018-10-30",
        endDate: "2018-10-31",
        cumulativeReturn: 0.2153402724724225,
        periodReturn: -0.00007275952199929756
      },
      {
        startDate: "2018-10-31",
        endDate: "2018-11-01",
        cumulativeReturn: 0.2170177898239618,
        periodReturn: 0.001380286154861446
      },
      {
        startDate: "2018-11-01",
        endDate: "2018-11-02",
        cumulativeReturn: 0.2158147974026392,
        periodReturn: -0.0009884756257316051
      },
      {
        startDate: "2018-11-02",
        endDate: "2018-11-05",
        cumulativeReturn: 0.2168772659572029,
        periodReturn: 0.0008738736827626477
      },
      {
        startDate: "2018-11-05",
        endDate: "2018-11-06",
        cumulativeReturn: 0.21686474592128646,
        periodReturn: -0.00001028865956062896
      },
      {
        startDate: "2018-11-06",
        endDate: "2018-11-07",
        cumulativeReturn: 0.21893633462977768,
        periodReturn: 0.0017023984920549473
      },
      {
        startDate: "2018-11-07",
        endDate: "2018-11-08",
        cumulativeReturn: 0.21731527477079227,
        periodReturn: -0.001329897069216389
      },
      {
        startDate: "2018-11-08",
        endDate: "2018-11-09",
        cumulativeReturn: 0.2174016076135099,
        periodReturn: 0.00007092069286163026
      },
      {
        startDate: "2018-11-09",
        endDate: "2018-11-12",
        cumulativeReturn: 0.21605365533451182,
        periodReturn: -0.0011072371439039023
      },
      {
        startDate: "2018-11-12",
        endDate: "2018-11-13",
        cumulativeReturn: 0.2152450955235936,
        periodReturn: -0.0006649047164747669
      },
      {
        startDate: "2018-11-13",
        endDate: "2018-11-14",
        cumulativeReturn: 0.21452529092290296,
        periodReturn: -0.0005923122860911186
      },
      {
        startDate: "2018-11-14",
        endDate: "2018-11-15",
        cumulativeReturn: 0.21275711345179338,
        periodReturn: -0.0014558589140337519
      },
      {
        startDate: "2018-11-15",
        endDate: "2018-11-16",
        cumulativeReturn: 0.2137525440436867,
        periodReturn: 0.0008207996315604271
      },
      {
        startDate: "2018-11-16",
        endDate: "2018-11-19",
        cumulativeReturn: 0.2127648517303915,
        periodReturn: -0.0008137509726690801
      },
      {
        startDate: "2018-11-19",
        endDate: "2018-11-20",
        cumulativeReturn: 0.20709863459271438,
        periodReturn: -0.0046721482153713615
      },
      {
        startDate: "2018-11-20",
        endDate: "2018-11-21",
        cumulativeReturn: 0.20857797113403787,
        periodReturn: 0.0012255307883954705
      },
      {
        startDate: "2018-11-21",
        endDate: "2018-11-22",
        cumulativeReturn: 0.20857797113403787,
        periodReturn: 0
      },
      {
        startDate: "2018-11-22",
        endDate: "2018-11-23",
        cumulativeReturn: 0.208598980089862,
        periodReturn: 0.000017383202677833178
      },
      {
        startDate: "2018-11-23",
        endDate: "2018-11-26",
        cumulativeReturn: 0.20791839334111528,
        periodReturn: -0.000563120406320565
      },
      {
        startDate: "2018-11-26",
        endDate: "2018-11-27",
        cumulativeReturn: 0.20607277550059777,
        periodReturn: -0.0015279325579376291
      },
      {
        startDate: "2018-11-27",
        endDate: "2018-11-28",
        cumulativeReturn: 0.20842475570721297,
        periodReturn: 0.0019501146650449139
      },
      {
        startDate: "2018-11-28",
        endDate: "2018-11-29",
        cumulativeReturn: 0.21006909626117087,
        periodReturn: 0.0013607306091604093
      },
      {
        startDate: "2018-11-29",
        endDate: "2018-11-30",
        cumulativeReturn: 0.2106273086063859,
        periodReturn: 0.00046130617411832526
      },
      {
        startDate: "2018-11-30",
        endDate: "2018-12-03",
        cumulativeReturn: 0.21452218024207315,
        periodReturn: 0.0032172342454183413
      },
      {
        startDate: "2018-12-03",
        endDate: "2018-12-04",
        cumulativeReturn: 0.2134452641202158,
        periodReturn: -0.000886699427459394
      },
      {
        startDate: "2018-12-04",
        endDate: "2018-12-05",
        cumulativeReturn: 0.2134452641202158,
        periodReturn: 0
      },
      {
        startDate: "2018-12-05",
        endDate: "2018-12-06",
        cumulativeReturn: 0.2097992684435135,
        periodReturn: -0.0030046643095564584
      },
      {
        startDate: "2018-12-06",
        endDate: "2018-12-07",
        cumulativeReturn: 0.21160187628501848,
        periodReturn: 0.0014900057294828246
      },
      {
        startDate: "2018-12-07",
        endDate: "2018-12-10",
        cumulativeReturn: 0.21011412260159745,
        periodReturn: -0.0012279228949221542
      },
      {
        startDate: "2018-12-10",
        endDate: "2018-12-11",
        cumulativeReturn: 0.2086214153275956,
        periodReturn: -0.0012335260337203464
      },
      {
        startDate: "2018-12-11",
        endDate: "2018-12-12",
        cumulativeReturn: 0.20816079289869527,
        periodReturn: -0.0003811139063554722
      },
      {
        startDate: "2018-12-12",
        endDate: "2018-12-13",
        cumulativeReturn: 0.20802883320066812,
        periodReturn: -0.00010922362222217002
      },
      {
        startDate: "2018-12-13",
        endDate: "2018-12-14",
        cumulativeReturn: 0.20724870858192612,
        periodReturn: -0.0006457831115463248
      },
      {
        startDate: "2018-12-14",
        endDate: "2018-12-17",
        cumulativeReturn: 0.20484724309845825,
        periodReturn: -0.001989205261845862
      },
      {
        startDate: "2018-12-17",
        endDate: "2018-12-18",
        cumulativeReturn: 0.20332371932754767,
        periodReturn: -0.0012644953786776223
      },
      {
        startDate: "2018-12-18",
        endDate: "2018-12-19",
        cumulativeReturn: 0.20160417730536806,
        periodReturn: -0.0014289937068143327
      },
      {
        startDate: "2018-12-19",
        endDate: "2018-12-20",
        cumulativeReturn: 0.19394881999518687,
        periodReturn: -0.006370947650455512
      },
      {
        startDate: "2018-12-20",
        endDate: "2018-12-21",
        cumulativeReturn: 0.19092161884718561,
        periodReturn: -0.0025354530255437746
      },
      {
        startDate: "2018-12-21",
        endDate: "2018-12-24",
        cumulativeReturn: 0.19156591176753768,
        periodReturn: 0.0005410036312680221
      },
      {
        startDate: "2018-12-24",
        endDate: "2018-12-25",
        cumulativeReturn: 0.19156591176753768,
        periodReturn: 0
      },
      {
        startDate: "2018-12-25",
        endDate: "2018-12-26",
        cumulativeReturn: 0.190373161242819,
        periodReturn: -0.0010009941648543787
      },
      {
        startDate: "2018-12-26",
        endDate: "2018-12-27",
        cumulativeReturn: 0.19165044926154562,
        periodReturn: 0.0010730147993197668
      },
      {
        startDate: "2018-12-27",
        endDate: "2018-12-28",
        cumulativeReturn: 0.19432481339427587,
        periodReturn: 0.0022442521918970546
      },
      {
        startDate: "2018-12-28",
        endDate: "2018-12-31",
        cumulativeReturn: 0.19660964341033949,
        periodReturn: 0.0019130725498117214
      },
      {
        startDate: "2018-12-31",
        endDate: "2019-01-01",
        cumulativeReturn: 0.19660964341033949,
        periodReturn: 0
      },
      {
        startDate: "2019-01-01",
        endDate: "2019-01-02",
        cumulativeReturn: 0.19842073540026295,
        periodReturn: 0.0015135194671856797
      },
      {
        startDate: "2019-01-02",
        endDate: "2019-01-03",
        cumulativeReturn: 0.2026551288653171,
        periodReturn: 0.00353331124869092
      },
      {
        startDate: "2019-01-03",
        endDate: "2019-01-04",
        cumulativeReturn: 0.20969048061287365,
        periodReturn: 0.005849849702295089
      },
      {
        startDate: "2019-01-04",
        endDate: "2019-01-07",
        cumulativeReturn: 0.2152541207623857,
        periodReturn: 0.0045992261976744745
      },
      {
        startDate: "2019-01-07",
        endDate: "2019-01-08",
        cumulativeReturn: 0.21779211666066445,
        periodReturn: 0.0020884487079020912
      },
      {
        startDate: "2019-01-08",
        endDate: "2019-01-09",
        cumulativeReturn: 0.22113858739355075,
        periodReturn: 0.0027479819314832478
      },
      {
        startDate: "2019-01-09",
        endDate: "2019-01-10",
        cumulativeReturn: 0.22016146078710874,
        periodReturn: -0.0008001766683400203
      },
      {
        startDate: "2019-01-10",
        endDate: "2019-01-11",
        cumulativeReturn: 0.22192251393147733,
        periodReturn: 0.0014432951711427964
      },
      {
        startDate: "2019-01-11",
        endDate: "2019-01-14",
        cumulativeReturn: 0.21989429230019963,
        periodReturn: -0.0016598610862417896
      },
      {
        startDate: "2019-01-14",
        endDate: "2019-01-15",
        cumulativeReturn: 0.22047323788401796,
        periodReturn: 0.0004745866813808605
      },
      {
        startDate: "2019-01-15",
        endDate: "2019-01-16",
        cumulativeReturn: 0.2223568363330608,
        periodReturn: 0.0015433344956491191
      },
      {
        startDate: "2019-01-16",
        endDate: "2019-01-17",
        cumulativeReturn: 0.22204865788304895,
        periodReturn: -0.00025211823655061483
      },
      {
        startDate: "2019-01-17",
        endDate: "2019-01-18",
        cumulativeReturn: 0.22394896916903506,
        periodReturn: 0.0015550209672322538
      },
      {
        startDate: "2019-01-18",
        endDate: "2019-01-21",
        cumulativeReturn: 0.22394896916903506,
        periodReturn: 0
      },
      {
        startDate: "2019-01-21",
        endDate: "2019-01-22",
        cumulativeReturn: 0.2238723816050594,
        periodReturn: -0.00006257414802814405
      },
      {
        startDate: "2019-01-22",
        endDate: "2019-01-23",
        cumulativeReturn: 0.224519587457781,
        periodReturn: 0.0005288180879388959
      },
      {
        startDate: "2019-01-23",
        endDate: "2019-01-24",
        cumulativeReturn: 0.22579691812562253,
        periodReturn: 0.001043127999686359
      },
      {
        startDate: "2019-01-24",
        endDate: "2019-01-25",
        cumulativeReturn: 0.22682748092710603,
        periodReturn: 0.0008407288240367317
      },
      {
        startDate: "2019-01-25",
        endDate: "2019-01-28",
        cumulativeReturn: 0.22523955513178318,
        periodReturn: -0.0012943350389598035
      },
      {
        startDate: "2019-01-28",
        endDate: "2019-01-29",
        cumulativeReturn: 0.22661249780302883,
        periodReturn: 0.0011205503980794742
      },
      {
        startDate: "2019-01-29",
        endDate: "2019-01-30",
        cumulativeReturn: 0.22900996897386205,
        periodReturn: 0.0019545465052143887
      },
      {
        startDate: "2019-01-30",
        endDate: "2019-01-31",
        cumulativeReturn: 0.23409851648758329,
        periodReturn: 0.004140363090764697
      },
      {
        startDate: "2019-01-31",
        endDate: "2019-02-01",
        cumulativeReturn: 0.23420979617334337,
        periodReturn: 0.00009017082856292931
      },
      {
        startDate: "2019-02-01",
        endDate: "2019-02-04",
        cumulativeReturn: 0.23434499227724115,
        periodReturn: 0.00010954061806766413
      },
      {
        startDate: "2019-02-04",
        endDate: "2019-02-05",
        cumulativeReturn: 0.23724336888005504,
        periodReturn: 0.002348109014050285
      },
      {
        startDate: "2019-02-05",
        endDate: "2019-02-06",
        cumulativeReturn: 0.23729985828171696,
        periodReturn: 0.00004565746972887724
      },
      {
        startDate: "2019-02-06",
        endDate: "2019-02-07",
        cumulativeReturn: 0.23685285018406188,
        periodReturn: -0.00036127709436252443
      },
      {
        startDate: "2019-02-07",
        endDate: "2019-02-08",
        cumulativeReturn: 0.2367511375503073,
        periodReturn: -0.00008223503203272713
      },
      {
        startDate: "2019-02-08",
        endDate: "2019-02-11",
        cumulativeReturn: 0.23600472816892282,
        periodReturn: -0.0006035243136003776
      },
      {
        startDate: "2019-02-11",
        endDate: "2019-02-12",
        cumulativeReturn: 0.2373967848392502,
        periodReturn: 0.0011262551336593757
      },
      {
        startDate: "2019-02-12",
        endDate: "2019-02-13",
        cumulativeReturn: 0.23788807432548809,
        periodReturn: 0.0003970347201943643
      },
      {
        startDate: "2019-02-13",
        endDate: "2019-02-14",
        cumulativeReturn: 0.23921905243129915,
        periodReturn: 0.0010752006852769412
      },
      {
        startDate: "2019-02-14",
        endDate: "2019-02-15",
        cumulativeReturn: 0.24066789577834857,
        periodReturn: 0.001169158385845342
      },
      {
        startDate: "2019-02-15",
        endDate: "2019-02-18",
        cumulativeReturn: 0.24066789577834857,
        periodReturn: 0
      },
      {
        startDate: "2019-02-18",
        endDate: "2019-02-19",
        cumulativeReturn: 0.24185778278610637,
        periodReturn: 0.00095906971705051
      },
      {
        startDate: "2019-02-19",
        endDate: "2019-02-20",
        cumulativeReturn: 0.2427398975246533,
        periodReturn: 0.0007103186458016414
      },
      {
        startDate: "2019-02-20",
        endDate: "2019-02-21",
        cumulativeReturn: 0.2425173755746861,
        periodReturn: -0.0001790575408501762
      },
      {
        startDate: "2019-02-21",
        endDate: "2019-02-22",
        cumulativeReturn: 0.24504627757330577,
        periodReturn: 0.002035305138046868
      },
      {
        startDate: "2019-02-22",
        endDate: "2019-02-25",
        cumulativeReturn: 0.24695561869277238,
        periodReturn: 0.0015335503216701127
      },
      {
        startDate: "2019-02-25",
        endDate: "2019-02-26",
        cumulativeReturn: 0.24914484775535928,
        periodReturn: 0.001755659166829019
      },
      {
        startDate: "2019-02-26",
        endDate: "2019-02-27",
        cumulativeReturn: 0.24878607110946294,
        periodReturn: -0.000287217808680123
      },
      {
        startDate: "2019-02-27",
        endDate: "2019-02-28",
        cumulativeReturn: 0.24857264542412083,
        periodReturn: -0.00017090652296625756
      },
      {
        startDate: "2019-02-28",
        endDate: "2019-03-01",
        cumulativeReturn: 0.24795861949571707,
        periodReturn: -0.0004917823008969967
      },
      {
        startDate: "2019-03-01",
        endDate: "2019-03-04",
        cumulativeReturn: 0.24874011775786853,
        periodReturn: 0.0006262212944748673
      },
      {
        startDate: "2019-03-04",
        endDate: "2019-03-05",
        cumulativeReturn: 0.2483398397258163,
        periodReturn: -0.00032054550531383834
      },
      {
        startDate: "2019-03-05",
        endDate: "2019-03-06",
        cumulativeReturn: 0.24781157035429824,
        periodReturn: -0.0004231775312353892
      },
      {
        startDate: "2019-03-06",
        endDate: "2019-03-07",
        cumulativeReturn: 0.24744383610636755,
        periodReturn: -0.0002947033483800152
      },
      {
        startDate: "2019-03-07",
        endDate: "2019-03-08",
        cumulativeReturn: 0.24645403791826515,
        periodReturn: -0.0007934611238224937
      },
      {
        startDate: "2019-03-08",
        endDate: "2019-03-11",
        cumulativeReturn: 0.24820771923129592,
        periodReturn: 0.0014069362043703547
      },
      {
        startDate: "2019-03-11",
        endDate: "2019-03-12",
        cumulativeReturn: 0.24858532876386263,
        periodReturn: 0.00030252138866690957
      },
      {
        startDate: "2019-03-12",
        endDate: "2019-03-13",
        cumulativeReturn: 0.24960775048282113,
        periodReturn: 0.0008188641139733913
      },
      {
        startDate: "2019-03-13",
        endDate: "2019-03-14",
        cumulativeReturn: 0.25021060387976557,
        periodReturn: 0.00048243410519155367
      },
      {
        startDate: "2019-03-14",
        endDate: "2019-03-15",
        cumulativeReturn: 0.25262778688515164,
        periodReturn: 0.0019334206555959488
      },
      {
        startDate: "2019-03-15",
        endDate: "2019-03-18",
        cumulativeReturn: 0.2530244093796552,
        periodReturn: 0.0003166323617087584
      },
      {
        startDate: "2019-03-18",
        endDate: "2019-03-19",
        cumulativeReturn: 0.25379202245412635,
        periodReturn: 0.0006126082370983536
      },
      {
        startDate: "2019-03-19",
        endDate: "2019-03-20",
        cumulativeReturn: 0.2558434718639453,
        periodReturn: 0.0016361959344768056
      },
      {
        startDate: "2019-03-20",
        endDate: "2019-03-21",
        cumulativeReturn: 0.2570177842076822,
        periodReturn: 0.0009350785906415102
      },
      {
        startDate: "2019-03-21",
        endDate: "2019-03-22",
        cumulativeReturn: 0.2568992259488052,
        periodReturn: -0.0000943170895164415
      },
      {
        startDate: "2019-03-22",
        endDate: "2019-03-25",
        cumulativeReturn: 0.2571941744038868,
        periodReturn: 0.00023466356649170974
      },
      {
        startDate: "2019-03-25",
        endDate: "2019-03-26",
        cumulativeReturn: 0.25826590258421467,
        periodReturn: 0.0008524762539851912
      },
      {
        startDate: "2019-03-26",
        endDate: "2019-03-27",
        cumulativeReturn: 0.25843449355654946,
        periodReturn: 0.00013398676065885608
      },
      {
        startDate: "2019-03-27",
        endDate: "2019-03-28",
        cumulativeReturn: 0.2592604479947176,
        periodReturn: 0.0006563348687574835
      },
      {
        startDate: "2019-03-28",
        endDate: "2019-03-29",
        cumulativeReturn: 0.2608317295186262,
        periodReturn: 0.001247781208732971
      },
      {
        startDate: "2019-03-29",
        endDate: "2019-04-01",
        cumulativeReturn: 0.26123887085981634,
        periodReturn: 0.0003229148915419566
      },
      {
        startDate: "2019-04-01",
        endDate: "2019-04-02",
        cumulativeReturn: 0.2623192654027293,
        periodReturn: 0.0008566137373932584
      },
      {
        startDate: "2019-04-02",
        endDate: "2019-04-03",
        cumulativeReturn: 0.26325399956580786,
        periodReturn: 0.0007404895011092487
      },
      {
        startDate: "2019-04-03",
        endDate: "2019-04-04",
        cumulativeReturn: 0.26382599348234304,
        periodReturn: 0.0004527940673305646
      },
      {
        startDate: "2019-04-04",
        endDate: "2019-04-05",
        cumulativeReturn: 0.26573679578102505,
        periodReturn: 0.0015119188151976842
      },
      {
        startDate: "2019-04-05",
        endDate: "2019-04-08",
        cumulativeReturn: 0.26559983462103043,
        periodReturn: -0.00010820666701887483
      },
      {
        startDate: "2019-04-08",
        endDate: "2019-04-09",
        cumulativeReturn: 0.26680124254475146,
        periodReturn: 0.0009492794569468527
      },
      {
        startDate: "2019-04-09",
        endDate: "2019-04-10",
        cumulativeReturn: 0.2683318836403412,
        periodReturn: 0.0012082724930983241
      },
      {
        startDate: "2019-04-10",
        endDate: "2019-04-11",
        cumulativeReturn: 0.26869614856226387,
        periodReturn: 0.00028720000389592404
      },
      {
        startDate: "2019-04-11",
        endDate: "2019-04-12",
        cumulativeReturn: 0.2689096000858975,
        periodReturn: 0.00016824479515882118
      },
      {
        startDate: "2019-04-12",
        endDate: "2019-04-15",
        cumulativeReturn: 0.2695365810979482,
        periodReturn: 0.0004941100705741148
      },
      {
        startDate: "2019-04-15",
        endDate: "2019-04-16",
        cumulativeReturn: 0.2695037048676554,
        periodReturn: -0.000025896244962316552
      },
      {
        startDate: "2019-04-16",
        endDate: "2019-04-17",
        cumulativeReturn: 0.2694799600926654,
        periodReturn: -0.000018703982429455618
      },
      {
        startDate: "2019-04-17",
        endDate: "2019-04-18",
        cumulativeReturn: 0.27041794017926124,
        periodReturn: 0.0007388695498016071
      },
      {
        startDate: "2019-04-18",
        endDate: "2019-04-19",
        cumulativeReturn: 0.27041794017926124,
        periodReturn: 0
      },
      {
        startDate: "2019-04-19",
        endDate: "2019-04-22",
        cumulativeReturn: 0.27012001399638974,
        periodReturn: -0.0002345103713110003
      },
      {
        startDate: "2019-04-22",
        endDate: "2019-04-23",
        cumulativeReturn: 0.2715087261203706,
        periodReturn: 0.0010933707906951226
      },
      {
        startDate: "2019-04-23",
        endDate: "2019-04-24",
        cumulativeReturn: 0.2726573182567327,
        periodReturn: 0.0009033301248878076
      },
      {
        startDate: "2019-04-24",
        endDate: "2019-04-25",
        cumulativeReturn: 0.2718238546210563,
        periodReturn: -0.0006549002812619681
      },
      {
        startDate: "2019-04-25",
        endDate: "2019-04-26",
        cumulativeReturn: 0.2734855285984883,
        periodReturn: 0.0013065283933733954
      },
      {
        startDate: "2019-04-26",
        endDate: "2019-04-29",
        cumulativeReturn: 0.27390834244071605,
        periodReturn: 0.00033201307178801686
      },
      {
        startDate: "2019-04-29",
        endDate: "2019-04-30",
        cumulativeReturn: 0.27513700927095464,
        periodReturn: 0.0009644860539059844
      },
      {
        startDate: "2019-04-30",
        endDate: "2019-05-01",
        cumulativeReturn: 0.2755205411950412,
        periodReturn: 0.00030077703125091235
      },
      {
        startDate: "2019-05-01",
        endDate: "2019-05-02",
        cumulativeReturn: 0.2732585632860667,
        periodReturn: -0.0017733763086679646
      },
      {
        startDate: "2019-05-02",
        endDate: "2019-05-03",
        cumulativeReturn: 0.27494329407214835,
        periodReturn: 0.001323164700917974
      },
      {
        startDate: "2019-05-03",
        endDate: "2019-05-06",
        cumulativeReturn: 0.2753325026943665,
        periodReturn: 0.00030527524167368853
      },
      {
        startDate: "2019-05-06",
        endDate: "2019-05-07",
        cumulativeReturn: 0.27536362368759404,
        periodReturn: 0.000024402258361494526
      },
      {
        startDate: "2019-05-07",
        endDate: "2019-05-08",
        cumulativeReturn: 0.2743528632140835,
        periodReturn: -0.0007925272876985431
      },
      {
        startDate: "2019-05-08",
        endDate: "2019-05-09",
        cumulativeReturn: 0.2735809605209021,
        periodReturn: -0.0006057213158642826
      },
      {
        startDate: "2019-05-09",
        endDate: "2019-05-10",
        cumulativeReturn: 0.27354686033119346,
        periodReturn: -0.000026775046711378526
      },
      {
        startDate: "2019-05-10",
        endDate: "2019-05-13",
        cumulativeReturn: 0.2727168565542146,
        periodReturn: -0.0006517261381045733
      },
      {
        startDate: "2019-05-13",
        endDate: "2019-05-14",
        cumulativeReturn: 0.27427419501021166,
        periodReturn: 0.0012236330869485918
      },
      {
        startDate: "2019-05-14",
        endDate: "2019-05-15",
        cumulativeReturn: 0.2756921697035357,
        periodReturn: 0.0011127704687708584
      },
      {
        startDate: "2019-05-15",
        endDate: "2019-05-16",
        cumulativeReturn: 0.27635383163096705,
        periodReturn: 0.0005186689572492842
      },
      {
        startDate: "2019-05-16",
        endDate: "2019-05-17",
        cumulativeReturn: 0.27656961391698154,
        periodReturn: 0.00016906149428704825
      },
      {
        startDate: "2019-05-17",
        endDate: "2019-05-20",
        cumulativeReturn: 0.27625520346747456,
        periodReturn: -0.00024629322684744086
      },
      {
        startDate: "2019-05-20",
        endDate: "2019-05-21",
        cumulativeReturn: 0.2772432898212811,
        periodReturn: 0.0007742075026389541
      },
      {
        startDate: "2019-05-21",
        endDate: "2019-05-22",
        cumulativeReturn: 0.27776621516761923,
        periodReturn: 0.0004094171803487931
      },
      {
        startDate: "2019-05-22",
        endDate: "2019-05-23",
        cumulativeReturn: 0.27802694173051035,
        periodReturn: 0.00020404872174262887
      },
      {
        startDate: "2019-05-23",
        endDate: "2019-05-24",
        cumulativeReturn: 0.2790779477883074,
        periodReturn: 0.0008223661203684338
      },
      {
        startDate: "2019-05-24",
        endDate: "2019-05-27",
        cumulativeReturn: 0.2790779477883074,
        periodReturn: 0
      },
      {
        startDate: "2019-05-27",
        endDate: "2019-05-28",
        cumulativeReturn: 0.2804909897554,
        periodReturn: 0.0011047348361653078
      },
      {
        startDate: "2019-05-28",
        endDate: "2019-05-29",
        cumulativeReturn: 0.27908621661627153,
        periodReturn: -0.001097058199055998
      },
      {
        startDate: "2019-05-29",
        endDate: "2019-05-30",
        cumulativeReturn: 0.2804599511957582,
        periodReturn: 0.0010739968593522777
      },
      {
        startDate: "2019-05-30",
        endDate: "2019-05-31",
        cumulativeReturn: 0.2819317625646345,
        periodReturn: 0.0011494395959058582
      },
      {
        startDate: "2019-05-31",
        endDate: "2019-06-03",
        cumulativeReturn: 0.2842721848302785,
        periodReturn: 0.0018256995684089675
      },
      {
        startDate: "2019-06-03",
        endDate: "2019-06-04",
        cumulativeReturn: 0.28508292943072333,
        periodReturn: 0.000631287206887493
      },
      {
        startDate: "2019-06-04",
        endDate: "2019-06-05",
        cumulativeReturn: 0.2864148092430152,
        periodReturn: 0.0010364154575470048
      },
      {
        startDate: "2019-06-05",
        endDate: "2019-06-06",
        cumulativeReturn: 0.2865112440622719,
        periodReturn: 0.00007496401515574823
      },
      {
        startDate: "2019-06-06",
        endDate: "2019-06-07",
        cumulativeReturn: 0.2893401487132148,
        periodReturn: 0.0021988961728855233
      },
      {
        startDate: "2019-06-07",
        endDate: "2019-06-10",
        cumulativeReturn: 0.2903528699166331,
        periodReturn: 0.0007854569676040705
      },
      {
        startDate: "2019-06-10",
        endDate: "2019-06-11",
        cumulativeReturn: 0.29091400696234815,
        periodReturn: 0.0004348710021866248
      },
      {
        startDate: "2019-06-11",
        endDate: "2019-06-12",
        cumulativeReturn: 0.2918577703209151,
        periodReturn: 0.0007310815077354639
      },
      {
        startDate: "2019-06-12",
        endDate: "2019-06-13",
        cumulativeReturn: 0.29353152731408194,
        periodReturn: 0.0012956201770966532
      },
      {
        startDate: "2019-06-13",
        endDate: "2019-06-14",
        cumulativeReturn: 0.2938657432089087,
        periodReturn: 0.00025837475760711963
      },
      {
        startDate: "2019-06-14",
        endDate: "2019-06-17",
        cumulativeReturn: 0.29385193970860257,
        periodReturn: -0.000010668417784919053
      },
      {
        startDate: "2019-06-17",
        endDate: "2019-06-18",
        cumulativeReturn: 0.29621479141557194,
        periodReturn: 0.001826214912582318
      },
      {
        startDate: "2019-06-18",
        endDate: "2019-06-19",
        cumulativeReturn: 0.2989825922170293,
        periodReturn: 0.0021352948753458403
      },
      {
        startDate: "2019-06-19",
        endDate: "2019-06-20",
        cumulativeReturn: 0.30218220846828014,
        periodReturn: 0.0024631710004597387
      },
      {
        startDate: "2019-06-20",
        endDate: "2019-06-21",
        cumulativeReturn: 0.30087108028330034,
        periodReturn: -0.001006869988280745
      },
      {
        startDate: "2019-06-21",
        endDate: "2019-06-24",
        cumulativeReturn: 0.30212071405566765,
        periodReturn: 0.0009606130778886658
      },
      {
        startDate: "2019-06-24",
        endDate: "2019-06-25",
        cumulativeReturn: 0.30115348971927136,
        periodReturn: -0.0007428069655568925
      },
      {
        startDate: "2019-06-25",
        endDate: "2019-06-26",
        cumulativeReturn: 0.29962245810719645,
        periodReturn: -0.0011766725633616305
      },
      {
        startDate: "2019-06-26",
        endDate: "2019-06-27",
        cumulativeReturn: 0.30064700785594156,
        periodReturn: 0.0007883441397565927
      },
      {
        startDate: "2019-06-27",
        endDate: "2019-06-28",
        cumulativeReturn: 0.3016829783862165,
        periodReturn: 0.0007965039891818697
      },
      {
        startDate: "2019-06-28",
        endDate: "2019-07-01",
        cumulativeReturn: 0.30281063308074896,
        periodReturn: 0.0008663051705036343
      },
      {
        startDate: "2019-07-01",
        endDate: "2019-07-02",
        cumulativeReturn: 0.30342295684111953,
        periodReturn: 0.0004700021206632449
      },
      {
        startDate: "2019-07-02",
        endDate: "2019-07-03",
        cumulativeReturn: 0.30508784753098706,
        periodReturn: 0.001277321901635316
      },
      {
        startDate: "2019-07-03",
        endDate: "2019-07-04",
        cumulativeReturn: 0.30508784753098706,
        periodReturn: 0
      },
      {
        startDate: "2019-07-04",
        endDate: "2019-07-05",
        cumulativeReturn: 0.3035531293035876,
        periodReturn: -0.0011759501326312248
      },
      {
        startDate: "2019-07-05",
        endDate: "2019-07-08",
        cumulativeReturn: 0.30371585314799243,
        periodReturn: 0.00012483100285435724
      },
      {
        startDate: "2019-07-08",
        endDate: "2019-07-09",
        cumulativeReturn: 0.30253047149293844,
        periodReturn: -0.0009092331371071116
      },
      {
        startDate: "2019-07-09",
        endDate: "2019-07-10",
        cumulativeReturn: 0.30418822949124324,
        periodReturn: 0.0012727210875955511
      },
      {
        startDate: "2019-07-10",
        endDate: "2019-07-11",
        cumulativeReturn: 0.30330466379397314,
        periodReturn: -0.0006774832629909955
      },
      {
        startDate: "2019-07-11",
        endDate: "2019-07-12",
        cumulativeReturn: 0.3038936611302696,
        periodReturn: 0.0004519260558631405
      },
      {
        startDate: "2019-07-12",
        endDate: "2019-07-15",
        cumulativeReturn: 0.30569886504021326,
        periodReturn: 0.0013844717278392153
      },
      {
        startDate: "2019-07-15",
        endDate: "2019-07-16",
        cumulativeReturn: 0.3054799072434793,
        periodReturn: -0.00016769394735371106
      },
      {
        startDate: "2019-07-16",
        endDate: "2019-07-17",
        cumulativeReturn: 0.30615957998516374,
        periodReturn: 0.0005206305649848307
      },
      {
        startDate: "2019-07-17",
        endDate: "2019-07-18",
        cumulativeReturn: 0.30633255923635283,
        periodReturn: 0.00013243347431639353
      },
      {
        startDate: "2019-07-18",
        endDate: "2019-07-19",
        cumulativeReturn: 0.30677565247539573,
        periodReturn: 0.00033918869732666763
      },
      {
        startDate: "2019-07-19",
        endDate: "2019-07-22",
        cumulativeReturn: 0.30723354415917914,
        periodReturn: 0.00035039808318744557
      },
      {
        startDate: "2019-07-22",
        endDate: "2019-07-23",
        cumulativeReturn: 0.30778986661574104,
        periodReturn: 0.0004255723539589215
      },
      {
        startDate: "2019-07-23",
        endDate: "2019-07-24",
        cumulativeReturn: 0.30840945039348977,
        periodReturn: 0.00047376401481999316
      },
      {
        startDate: "2019-07-24",
        endDate: "2019-07-25",
        cumulativeReturn: 0.30838768227182656,
        periodReturn: -0.000016637086851322077
      },
      {
        startDate: "2019-07-25",
        endDate: "2019-07-26",
        cumulativeReturn: 0.30926591668574255,
        periodReturn: 0.0006712340889599473
      },
      {
        startDate: "2019-07-26",
        endDate: "2019-07-29",
        cumulativeReturn: 0.30961070307916705,
        periodReturn: 0.00026334328957204226
      },
      {
        startDate: "2019-07-29",
        endDate: "2019-07-30",
        cumulativeReturn: 0.3096362933486927,
        periodReturn: 0.00001954036376268115
      },
      {
        startDate: "2019-07-30",
        endDate: "2019-07-31",
        cumulativeReturn: 0.31007315432443483,
        periodReturn: 0.00033357427398805035
      },
      {
        startDate: "2019-07-31",
        endDate: "2019-08-01",
        cumulativeReturn: 0.3121023203041031,
        periodReturn: 0.0015488951689225409
      },
      {
        startDate: "2019-08-01",
        endDate: "2019-08-02",
        cumulativeReturn: 0.31190681743602133,
        periodReturn: -0.00014899971218437758
      },
      {
        startDate: "2019-08-02",
        endDate: "2019-08-05",
        cumulativeReturn: 0.31113722466434246,
        periodReturn: -0.0005866215202562894
      },
      {
        startDate: "2019-08-05",
        endDate: "2019-08-06",
        cumulativeReturn: 0.31198251255226306,
        periodReturn: 0.0006446982604258134
      },
      {
        startDate: "2019-08-06",
        endDate: "2019-08-07",
        cumulativeReturn: 0.3121583639714751,
        periodReturn: 0.00013403488044206149
      },
      {
        startDate: "2019-08-07",
        endDate: "2019-08-08",
        cumulativeReturn: 0.3134908667136047,
        periodReturn: 0.001015504514330448
      },
      {
        startDate: "2019-08-08",
        endDate: "2019-08-09",
        cumulativeReturn: 0.31314927813326987,
        periodReturn: -0.00026006163346194215
      },
      {
        startDate: "2019-08-09",
        endDate: "2019-08-12",
        cumulativeReturn: 0.3099599527889956,
        periodReturn: -0.002428760688052258
      },
      {
        startDate: "2019-08-12",
        endDate: "2019-08-13",
        cumulativeReturn: 0.3068935298813218,
        periodReturn: -0.0023408524063236896
      },
      {
        startDate: "2019-08-13",
        endDate: "2019-08-14",
        cumulativeReturn: 0.3044428623377604,
        periodReturn: -0.0018751853058634423
      },
      {
        startDate: "2019-08-14",
        endDate: "2019-08-15",
        cumulativeReturn: 0.3067544983165895,
        periodReturn: 0.0017721251314037321
      },
      {
        startDate: "2019-08-15",
        endDate: "2019-08-16",
        cumulativeReturn: 0.30734096669176236,
        periodReturn: 0.00044879767081605144
      },
      {
        startDate: "2019-08-16",
        endDate: "2019-08-19",
        cumulativeReturn: 0.30649687120779356,
        periodReturn: -0.0006456582524946387
      },
      {
        startDate: "2019-08-19",
        endDate: "2019-08-20",
        cumulativeReturn: 0.30806998768780547,
        periodReturn: 0.0012040721372395468
      },
      {
        startDate: "2019-08-20",
        endDate: "2019-08-21",
        cumulativeReturn: 0.30910551879459214,
        periodReturn: 0.0007916480895775304
      },
      {
        startDate: "2019-08-21",
        endDate: "2019-08-22",
        cumulativeReturn: 0.3094656417746344,
        periodReturn: 0.0002750908730212821
      },
      {
        startDate: "2019-08-22",
        endDate: "2019-08-23",
        cumulativeReturn: 0.31029194506350577,
        periodReturn: 0.0006310232682024049
      },
      {
        startDate: "2019-08-23",
        endDate: "2019-08-26",
        cumulativeReturn: 0.3107716393585014,
        periodReturn: 0.0003660972631348882
      },
      {
        startDate: "2019-08-26",
        endDate: "2019-08-27",
        cumulativeReturn: 0.3118761544297848,
        periodReturn: 0.0008426449261781201
      },
      {
        startDate: "2019-08-27",
        endDate: "2019-08-28",
        cumulativeReturn: 0.3126473405612318,
        periodReturn: 0.0005878497972869294
      },
      {
        startDate: "2019-08-28",
        endDate: "2019-08-29",
        cumulativeReturn: 0.3124348451742671,
        periodReturn: -0.00016188307430223728
      },
      {
        startDate: "2019-08-29",
        endDate: "2019-08-30",
        cumulativeReturn: 0.3129642632801941,
        periodReturn: 0.00040338620075016415
      },
      {
        startDate: "2019-08-30",
        endDate: "2019-09-02",
        cumulativeReturn: 0.3129642632801941,
        periodReturn: 0
      },
      {
        startDate: "2019-09-02",
        endDate: "2019-09-03",
        cumulativeReturn: 0.31319020280213494,
        periodReturn: 0.00017208352752612544
      },
      {
        startDate: "2019-09-03",
        endDate: "2019-09-04",
        cumulativeReturn: 0.31554798247461524,
        periodReturn: 0.0017954593839103737
      },
      {
        startDate: "2019-09-04",
        endDate: "2019-09-05",
        cumulativeReturn: 0.3149981165666218,
        periodReturn: -0.0004179748023778432
      },
      {
        startDate: "2019-09-05",
        endDate: "2019-09-06",
        cumulativeReturn: 0.3163343682007791,
        periodReturn: 0.00101616239394028
      },
      {
        startDate: "2019-09-06",
        endDate: "2019-09-09",
        cumulativeReturn: 0.3153626327298942,
        periodReturn: -0.000738213249125413
      },
      {
        startDate: "2019-09-09",
        endDate: "2019-09-10",
        cumulativeReturn: 0.31523759548206187,
        periodReturn: -0.00009505914545613462
      },
      {
        startDate: "2019-09-10",
        endDate: "2019-09-11",
        cumulativeReturn: 0.3151959231124877,
        periodReturn: -0.000031684290136852515
      },
      {
        startDate: "2019-09-11",
        endDate: "2019-09-12",
        cumulativeReturn: 0.3156256013430532,
        periodReturn: 0.0003267028303650149
      },
      {
        startDate: "2019-09-12",
        endDate: "2019-09-13",
        cumulativeReturn: 0.3126293329642389,
        periodReturn: -0.00227744760800916
      },
      {
        startDate: "2019-09-13",
        endDate: "2019-09-16",
        cumulativeReturn: 0.3145237652704791,
        periodReturn: 0.001443234779739533
      },
      {
        startDate: "2019-09-16",
        endDate: "2019-09-17",
        cumulativeReturn: 0.3154908611671492,
        periodReturn: 0.0007357005801041683
      },
      {
        startDate: "2019-09-17",
        endDate: "2019-09-18",
        cumulativeReturn: 0.31593526586163523,
        periodReturn: 0.00033782423550381135
      },
      {
        startDate: "2019-09-18",
        endDate: "2019-09-19",
        cumulativeReturn: 0.3174738573392033,
        periodReturn: 0.0011691999731922188
      },
      {
        startDate: "2019-09-19",
        endDate: "2019-09-20",
        cumulativeReturn: 0.3183157789394273,
        periodReturn: 0.0006390423578682729
      },
      {
        startDate: "2019-09-20",
        endDate: "2019-09-23",
        cumulativeReturn: 0.3186632699397396,
        periodReturn: 0.00026358707516328843
      },
      {
        startDate: "2019-09-23",
        endDate: "2019-09-24",
        cumulativeReturn: 0.3192158616165708,
        periodReturn: 0.0004190544238457808
      },
      {
        startDate: "2019-09-24",
        endDate: "2019-09-25",
        cumulativeReturn: 0.31654763647593076,
        periodReturn: -0.002022584186768594
      },
      {
        startDate: "2019-09-25",
        endDate: "2019-09-26",
        cumulativeReturn: 0.3171537123552697,
        periodReturn: 0.0004603524115246598
      },
      {
        startDate: "2019-09-26",
        endDate: "2019-09-27",
        cumulativeReturn: 0.31764129445936606,
        periodReturn: 0.00037017859003297217
      },
      {
        startDate: "2019-09-27",
        endDate: "2019-09-30",
        cumulativeReturn: 0.31744502278932996,
        periodReturn: -0.00014895682979982374
      },
      {
        startDate: "2019-09-30",
        endDate: "2019-10-01",
        cumulativeReturn: 0.318136519596393,
        periodReturn: 0.0005248771638294311
      },
      {
        startDate: "2019-10-01",
        endDate: "2019-10-02",
        cumulativeReturn: 0.3169901542908271,
        periodReturn: -0.0008696863249922507
      },
      {
        startDate: "2019-10-02",
        endDate: "2019-10-03",
        cumulativeReturn: 0.3179764191880863,
        periodReturn: 0.0007488779578539415
      },
      {
        startDate: "2019-10-03",
        endDate: "2019-10-04",
        cumulativeReturn: 0.3193817396925205,
        periodReturn: 0.0010662713565844498
      },
      {
        startDate: "2019-10-04",
        endDate: "2019-10-07",
        cumulativeReturn: 0.3182319674697007,
        periodReturn: -0.0008714477305770674
      },
      {
        startDate: "2019-10-07",
        endDate: "2019-10-08",
        cumulativeReturn: 0.31692525375970715,
        periodReturn: -0.000991262343987746
      },
      {
        startDate: "2019-10-08",
        endDate: "2019-10-09",
        cumulativeReturn: 0.31655626361693945,
        periodReturn: -0.00028019064993582373
      },
      {
        startDate: "2019-10-09",
        endDate: "2019-10-10",
        cumulativeReturn: 0.31571306144058675,
        periodReturn: -0.0006404604190908303
      },
      {
        startDate: "2019-10-10",
        endDate: "2019-10-11",
        cumulativeReturn: 0.31507500347495276,
        periodReturn: -0.0004849522166598724
      },
      {
        startDate: "2019-10-11",
        endDate: "2019-10-14",
        cumulativeReturn: 0.3153917205481449,
        periodReturn: 0.00024083574880157923
      },
      {
        startDate: "2019-10-14",
        endDate: "2019-10-15",
        cumulativeReturn: 0.3151619471111593,
        periodReturn: -0.00017468061672896353
      },
      {
        startDate: "2019-10-15",
        endDate: "2019-10-16",
        cumulativeReturn: 0.31613386898642326,
        periodReturn: 0.0007390130754610201
      },
      {
        startDate: "2019-10-16",
        endDate: "2019-10-17",
        cumulativeReturn: 0.3160704568597599,
        periodReturn: -0.00004818060545175914
      },
      {
        startDate: "2019-10-17",
        endDate: "2019-10-18",
        cumulativeReturn: 0.3172061814116329,
        periodReturn: 0.0008629663753587964
      },
      {
        startDate: "2019-10-18",
        endDate: "2019-10-21",
        cumulativeReturn: 0.3158796344635637,
        periodReturn: -0.0010070913474210773
      },
      {
        startDate: "2019-10-21",
        endDate: "2019-10-22",
        cumulativeReturn: 0.3170805677991506,
        periodReturn: 0.0009126467984866326
      },
      {
        startDate: "2019-10-22",
        endDate: "2019-10-23",
        cumulativeReturn: 0.3170805677991506,
        periodReturn: 0
      },
      {
        startDate: "2019-10-23",
        endDate: "2019-10-24",
        cumulativeReturn: 0.31805742366928014,
        periodReturn: 0.0007416826988510284
      },
      {
        startDate: "2019-10-24",
        endDate: "2019-10-25",
        cumulativeReturn: 0.31766308888802364,
        periodReturn: -0.00029917875668778024
      },
      {
        startDate: "2019-10-25",
        endDate: "2019-10-28",
        cumulativeReturn: 0.3170183723495854,
        periodReturn: -0.000489287848976807
      },
      {
        startDate: "2019-10-28",
        endDate: "2019-10-29",
        cumulativeReturn: 0.3168717356125865,
        periodReturn: -0.00011133993274312552
      },
      {
        startDate: "2019-10-29",
        endDate: "2019-10-30",
        cumulativeReturn: 0.3172554482462022,
        periodReturn: 0.0002913819343515363
      },
      {
        startDate: "2019-10-30",
        endDate: "2019-10-31",
        cumulativeReturn: 0.31801992026122106,
        periodReturn: 0.0005803521374966855
      },
      {
        startDate: "2019-10-31",
        endDate: "2019-11-01",
        cumulativeReturn: 0.31844480834413336,
        periodReturn: 0.0003223684834961921
      },
      {
        startDate: "2019-11-01",
        endDate: "2019-11-04",
        cumulativeReturn: 0.3185106005029146,
        periodReturn: 0.00004990133706373187
      },
      {
        startDate: "2019-11-04",
        endDate: "2019-11-05",
        cumulativeReturn: 0.3169148095065759,
        periodReturn: -0.0012102981923163125
      },
      {
        startDate: "2019-11-05",
        endDate: "2019-11-06",
        cumulativeReturn: 0.31677628469163954,
        periodReturn: -0.00010518889599875416
      },
      {
        startDate: "2019-11-06",
        endDate: "2019-11-07",
        cumulativeReturn: 0.314483566876979,
        periodReturn: -0.001741159710510306
      },
      {
        startDate: "2019-11-07",
        endDate: "2019-11-08",
        cumulativeReturn: 0.3146105284324703,
        periodReturn: 0.00009658664337134977
      },
      {
        startDate: "2019-11-08",
        endDate: "2019-11-11",
        cumulativeReturn: 0.31507048588496733,
        periodReturn: 0.00034988115685145405
      },
      {
        startDate: "2019-11-11",
        endDate: "2019-11-12",
        cumulativeReturn: 0.3149458643415908,
        periodReturn: -0.00009476415501227098
      },
      {
        startDate: "2019-11-12",
        endDate: "2019-11-13",
        cumulativeReturn: 0.3151174347847421,
        periodReturn: 0.00013047719134591157
      },
      {
        startDate: "2019-11-13",
        endDate: "2019-11-14",
        cumulativeReturn: 0.3174019787878717,
        periodReturn: 0.001737140686225944
      },
      {
        startDate: "2019-11-14",
        endDate: "2019-11-15",
        cumulativeReturn: 0.3178404129735408,
        periodReturn: 0.0003328021308065092
      },
      {
        startDate: "2019-11-15",
        endDate: "2019-11-18",
        cumulativeReturn: 0.31711548583443117,
        periodReturn: -0.0005500871971849083
      },
      {
        startDate: "2019-11-18",
        endDate: "2019-11-19",
        cumulativeReturn: 0.31718995322320453,
        periodReturn: 0.0000565382379708666
      },
      {
        startDate: "2019-11-19",
        endDate: "2019-11-20",
        cumulativeReturn: 0.31707412428175985,
        periodReturn: -0.0000879363991209102
      },
      {
        startDate: "2019-11-20",
        endDate: "2019-11-21",
        cumulativeReturn: 0.3162009873003875,
        periodReturn: -0.0006629368577478393
      },
      {
        startDate: "2019-11-21",
        endDate: "2019-11-22",
        cumulativeReturn: 0.31744629199976604,
        periodReturn: 0.0009461356672681747
      },
      {
        startDate: "2019-11-22",
        endDate: "2019-11-25",
        cumulativeReturn: 0.3182598149263971,
        periodReturn: 0.0006174998795557967
      },
      {
        startDate: "2019-11-25",
        endDate: "2019-11-26",
        cumulativeReturn: 0.3196833469119744,
        periodReturn: 0.001079856921571146
      },
      {
        startDate: "2019-11-26",
        endDate: "2019-11-27",
        cumulativeReturn: 0.31995443001623847,
        periodReturn: 0.00020541526488029345
      },
      {
        startDate: "2019-11-27",
        endDate: "2019-11-28",
        cumulativeReturn: 0.31995443001623847,
        periodReturn: 0
      },
      {
        startDate: "2019-11-28",
        endDate: "2019-11-29",
        cumulativeReturn: 0.31995443001623847,
        periodReturn: 0
      },
      {
        startDate: "2019-11-29",
        endDate: "2019-12-02",
        cumulativeReturn: 0.3188653084844302,
        periodReturn: -0.0008251205549534928
      },
      {
        startDate: "2019-12-02",
        endDate: "2019-12-03",
        cumulativeReturn: 0.32072686119618754,
        periodReturn: 0.00141148053541306
      },
      {
        startDate: "2019-12-03",
        endDate: "2019-12-04",
        cumulativeReturn: 0.3219110704671959,
        periodReturn: 0.0008966345016530513
      },
      {
        startDate: "2019-12-04",
        endDate: "2019-12-05",
        cumulativeReturn: 0.32252340637865773,
        periodReturn: 0.0004632202007698946
      },
      {
        startDate: "2019-12-05",
        endDate: "2019-12-06",
        cumulativeReturn: 0.3239040394935513,
        periodReturn: 0.0010439385104525159
      },
      {
        startDate: "2019-12-06",
        endDate: "2019-12-09",
        cumulativeReturn: 0.3253252187685576,
        periodReturn: 0.0010734760470629966
      },
      {
        startDate: "2019-12-09",
        endDate: "2019-12-10",
        cumulativeReturn: 0.3269087943615079,
        periodReturn: 0.0011948581152192593
      },
      {
        startDate: "2019-12-10",
        endDate: "2019-12-11",
        cumulativeReturn: 0.32960570219301233,
        periodReturn: 0.0020324741556950994
      },
      {
        startDate: "2019-12-11",
        endDate: "2019-12-12",
        cumulativeReturn: 0.32919498568676553,
        periodReturn: -0.00030890098137330296
      },
      {
        startDate: "2019-12-12",
        endDate: "2019-12-13",
        cumulativeReturn: 0.3328384283606818,
        periodReturn: 0.0027410896919941407
      },
      {
        startDate: "2019-12-13",
        endDate: "2019-12-16",
        cumulativeReturn: 0.33336572705106815,
        periodReturn: 0.0003956208638392665
      },
      {
        startDate: "2019-12-16",
        endDate: "2019-12-17",
        cumulativeReturn: 0.3358639161781638,
        periodReturn: 0.0018735963257588695
      },
      {
        startDate: "2019-12-17",
        endDate: "2019-12-18",
        cumulativeReturn: 0.3369111424410871,
        periodReturn: 0.0007839318438359369
      },
      {
        startDate: "2019-12-18",
        endDate: "2019-12-19",
        cumulativeReturn: 0.33809663113255684,
        periodReturn: 0.0008867370865839132
      },
      {
        startDate: "2019-12-19",
        endDate: "2019-12-20",
        cumulativeReturn: 0.3384139940950044,
        periodReturn: 0.00023717492075219166
      },
      {
        startDate: "2019-12-20",
        endDate: "2019-12-23",
        cumulativeReturn: 0.3386101061613085,
        periodReturn: 0.00014652571414335223
      },
      {
        startDate: "2019-12-23",
        endDate: "2019-12-24",
        cumulativeReturn: 0.3400411038860671,
        periodReturn: 0.0010690175714137952
      },
      {
        startDate: "2019-12-24",
        endDate: "2019-12-25",
        cumulativeReturn: 0.3400411038860671,
        periodReturn: 0
      },
      {
        startDate: "2019-12-25",
        endDate: "2019-12-26",
        cumulativeReturn: 0.3403481563837445,
        periodReturn: 0.0002291366263220787
      },
      {
        startDate: "2019-12-26",
        endDate: "2019-12-27",
        cumulativeReturn: 0.34148360073236517,
        periodReturn: 0.0008471264299598811
      },
      {
        startDate: "2019-12-27",
        endDate: "2019-12-30",
        cumulativeReturn: 0.3423886035092967,
        periodReturn: 0.0006746282820284383
      },
      {
        startDate: "2019-12-30",
        endDate: "2019-12-31",
        cumulativeReturn: 0.3417546205436164,
        periodReturn: -0.00047227975865040143
      },
      {
        startDate: "2019-12-31",
        endDate: "2020-01-01",
        cumulativeReturn: 0.3417546205436164,
        periodReturn: 0
      },
      {
        startDate: "2020-01-01",
        endDate: "2020-01-02",
        cumulativeReturn: 0.34370879415388145,
        periodReturn: 0.0014564314371232911
      },
      {
        startDate: "2020-01-02",
        endDate: "2020-01-03",
        cumulativeReturn: 0.3458466851209505,
        periodReturn: 0.001591037415525226
      },
      {
        startDate: "2020-01-03",
        endDate: "2020-01-06",
        cumulativeReturn: 0.346206403334425,
        periodReturn: 0.00026728023143440826
      },
      {
        startDate: "2020-01-06",
        endDate: "2020-01-07",
        cumulativeReturn: 0.34677358506360045,
        periodReturn: 0.00042131854949632437
      },
      {
        startDate: "2020-01-07",
        endDate: "2020-01-08",
        cumulativeReturn: 0.3465899485610797,
        periodReturn: -0.00013635291377651088
      },
      {
        startDate: "2020-01-08",
        endDate: "2020-01-09",
        cumulativeReturn: 0.3486314565294,
        periodReturn: 0.0015160576317249255
      },
      {
        startDate: "2020-01-09",
        endDate: "2020-01-10",
        cumulativeReturn: 0.3507138627489801,
        periodReturn: 0.0015440884234889868
      },
      {
        startDate: "2020-01-10",
        endDate: "2020-01-13",
        cumulativeReturn: 0.35115007222287753,
        periodReturn: 0.00032294735837659497
      },
      {
        startDate: "2020-01-13",
        endDate: "2020-01-14",
        cumulativeReturn: 0.35273316289205914,
        periodReturn: 0.0011716616101550207
      },
      {
        startDate: "2020-01-14",
        endDate: "2020-01-15",
        cumulativeReturn: 0.3540706514663361,
        periodReturn: 0.000988730527916861
      },
      {
        startDate: "2020-01-15",
        endDate: "2020-01-16",
        cumulativeReturn: 0.35379906748691003,
        periodReturn: -0.00020056854428681842
      },
      {
        startDate: "2020-01-16",
        endDate: "2020-01-17",
        cumulativeReturn: 0.35459986806757704,
        periodReturn: 0.0005915210018231234
      },
      {
        startDate: "2020-01-17",
        endDate: "2020-01-20",
        cumulativeReturn: 0.35459986806757704,
        periodReturn: 0
      },
      {
        startDate: "2020-01-20",
        endDate: "2020-01-21",
        cumulativeReturn: 0.3557863331163964,
        periodReturn: 0.0008758786094612014
      },
      {
        startDate: "2020-01-21",
        endDate: "2020-01-22",
        cumulativeReturn: 0.3557111136013402,
        periodReturn: -0.00005548036089374379
      },
      {
        startDate: "2020-01-22",
        endDate: "2020-01-23",
        cumulativeReturn: 0.3559737485481196,
        periodReturn: 0.00019372486080875017
      },
      {
        startDate: "2020-01-23",
        endDate: "2020-01-24",
        cumulativeReturn: 0.3565858545102538,
        periodReturn: 0.0004514143159406997
      },
      {
        startDate: "2020-01-24",
        endDate: "2020-01-27",
        cumulativeReturn: 0.35443633675761443,
        periodReturn: -0.0015845055036456
      },
      {
        startDate: "2020-01-27",
        endDate: "2020-01-28",
        cumulativeReturn: 0.35546778579839744,
        periodReturn: 0.0007615337929075612
      },
      {
        startDate: "2020-01-28",
        endDate: "2020-01-29",
        cumulativeReturn: 0.35786351036717323,
        periodReturn: 0.0017674522359559847
      },
      {
        startDate: "2020-01-29",
        endDate: "2020-01-30",
        cumulativeReturn: 0.35718321094332084,
        periodReturn: -0.0005010072210191389
      },
      {
        startDate: "2020-01-30",
        endDate: "2020-01-31",
        cumulativeReturn: 0.35835012500030716,
        periodReturn: 0.0008598058446177942
      },
      {
        startDate: "2020-01-31",
        endDate: "2020-02-03",
        cumulativeReturn: 0.3584970409602901,
        periodReturn: 0.0001081576519035647
      },
      {
        startDate: "2020-02-03",
        endDate: "2020-02-04",
        cumulativeReturn: 0.358220916141865,
        periodReturn: -0.000203257578117182
      },
      {
        startDate: "2020-02-04",
        endDate: "2020-02-05",
        cumulativeReturn: 0.3578237453260944,
        periodReturn: -0.00029241989359050615
      },
      {
        startDate: "2020-02-05",
        endDate: "2020-02-06",
        cumulativeReturn: 0.35874629509400857,
        periodReturn: 0.0006794326370339046
      },
      {
        startDate: "2020-02-06",
        endDate: "2020-02-07",
        cumulativeReturn: 0.36009880029184393,
        periodReturn: 0.0009954067236236813
      },
      {
        startDate: "2020-02-07",
        endDate: "2020-02-10",
        cumulativeReturn: 0.3607870807762099,
        periodReturn: 0.0005060518281600309
      },
      {
        startDate: "2020-02-10",
        endDate: "2020-02-11",
        cumulativeReturn: 0.3618909244195727,
        periodReturn: 0.0008111802786464702
      },
      {
        startDate: "2020-02-11",
        endDate: "2020-02-12",
        cumulativeReturn: 0.3621515072323156,
        periodReturn: 0.00019133897441448222
      },
      {
        startDate: "2020-02-12",
        endDate: "2020-02-13",
        cumulativeReturn: 0.361846751537235,
        periodReturn: -0.00022373112936594638
      },
      {
        startDate: "2020-02-13",
        endDate: "2020-02-14",
        cumulativeReturn: 0.3629902563952072,
        periodReturn: 0.0008396722000338267
      },
      {
        startDate: "2020-02-14",
        endDate: "2020-02-17",
        cumulativeReturn: 0.3629902563952072,
        periodReturn: 0
      },
      {
        startDate: "2020-02-17",
        endDate: "2020-02-18",
        cumulativeReturn: 0.36384869163507805,
        periodReturn: 0.0006298175910230036
      },
      {
        startDate: "2020-02-18",
        endDate: "2020-02-19",
        cumulativeReturn: 0.3636844597041544,
        periodReturn: -0.00012041799939457133
      },
      {
        startDate: "2020-02-19",
        endDate: "2020-02-20",
        cumulativeReturn: 0.3649270079061886,
        periodReturn: 0.0009111698774537016
      },
      {
        startDate: "2020-02-20",
        endDate: "2020-02-21",
        cumulativeReturn: 0.3669289237640956,
        periodReturn: 0.001466683453628737
      },
      {
        startDate: "2020-02-21",
        endDate: "2020-02-24",
        cumulativeReturn: 0.3647856031897858,
        periodReturn: -0.0015679824583766783
      },
      {
        startDate: "2020-02-24",
        endDate: "2020-02-25",
        cumulativeReturn: 0.36344197767470554,
        periodReturn: -0.0009844956687261718
      },
      {
        startDate: "2020-02-25",
        endDate: "2020-02-26",
        cumulativeReturn: 0.3610786963188295,
        periodReturn: -0.0017333200785753827
      },
      {
        startDate: "2020-02-26",
        endDate: "2020-02-27",
        cumulativeReturn: 0.35265807504190594,
        periodReturn: -0.006186726233904019
      },
      {
        startDate: "2020-02-27",
        endDate: "2020-02-28",
        cumulativeReturn: 0.3469501761322533,
        periodReturn: -0.004219764783850383
      },
      {
        startDate: "2020-02-28",
        endDate: "2020-03-02",
        cumulativeReturn: 0.3496231260863496,
        periodReturn: 0.0019844460481616305
      },
      {
        startDate: "2020-03-02",
        endDate: "2020-03-03",
        cumulativeReturn: 0.35586802487437263,
        periodReturn: 0.004627142694369791
      },
      {
        startDate: "2020-03-03",
        endDate: "2020-03-04",
        cumulativeReturn: 0.3588070265406125,
        periodReturn: 0.002167616325720376
      },
      {
        startDate: "2020-03-04",
        endDate: "2020-03-05",
        cumulativeReturn: 0.35397259632338085,
        periodReturn: -0.0035578489975427456
      },
      {
        startDate: "2020-03-05",
        endDate: "2020-03-06",
        cumulativeReturn: 0.3469036162476111,
        periodReturn: -0.00522091813007524
      },
      {
        startDate: "2020-03-06",
        endDate: "2020-03-09",
        cumulativeReturn: 0.31152484265530056,
        periodReturn: -0.026266744825345075
      },
      {
        startDate: "2020-03-09",
        endDate: "2020-03-10",
        cumulativeReturn: 0.30916182169511286,
        periodReturn: -0.001801735570180687
      },
      {
        startDate: "2020-03-10",
        endDate: "2020-03-11",
        cumulativeReturn: 0.29196217259338897,
        periodReturn: -0.013137909169588898
      },
      {
        startDate: "2020-03-11",
        endDate: "2020-03-12",
        cumulativeReturn: 0.25150794292804135,
        periodReturn: -0.03131224003574564
      },
      {
        startDate: "2020-03-12",
        endDate: "2020-03-13",
        cumulativeReturn: 0.2504758251514978,
        periodReturn: -0.0008246993416028934
      },
      {
        startDate: "2020-03-13",
        endDate: "2020-03-16",
        cumulativeReturn: 0.21426904118672918,
        periodReturn: -0.02895440538435212
      },
      {
        startDate: "2020-03-16",
        endDate: "2020-03-17",
        cumulativeReturn: 0.19489182072948075,
        periodReturn: -0.01595793007973809
      },
      {
        startDate: "2020-03-17",
        endDate: "2020-03-18",
        cumulativeReturn: 0.14639083442155987,
        periodReturn: -0.04059027391978549
      },
      {
        startDate: "2020-03-18",
        endDate: "2020-03-19",
        cumulativeReturn: 0.11413210748023106,
        periodReturn: -0.028139379671162278
      },
      {
        startDate: "2020-03-19",
        endDate: "2020-03-20",
        cumulativeReturn: 0.10380974516001484,
        periodReturn: -0.009264935684836845
      },
      {
        startDate: "2020-03-20",
        endDate: "2020-03-23",
        cumulativeReturn: 0.07030287752823305,
        periodReturn: -0.0303556548388005
      },
      {
        startDate: "2020-03-23",
        endDate: "2020-03-24",
        cumulativeReturn: 0.07272803795382288,
        periodReturn: 0.002265863688221223
      },
      {
        startDate: "2020-03-24",
        endDate: "2020-03-25",
        cumulativeReturn: 0.08446940269334391,
        periodReturn: 0.010945332203600385
      },
      {
        startDate: "2020-03-25",
        endDate: "2020-03-26",
        cumulativeReturn: 0.11685708261813432,
        periodReturn: 0.029865001118845484
      },
      {
        startDate: "2020-03-26",
        endDate: "2020-03-27",
        cumulativeReturn: 0.1278276158310414,
        periodReturn: 0.009822683120019257
      },
      {
        startDate: "2020-03-27",
        endDate: "2020-03-30",
        cumulativeReturn: 0.13269528644814454,
        periodReturn: 0.004315970409641303
      },
      {
        startDate: "2020-03-30",
        endDate: "2020-03-31",
        cumulativeReturn: 0.14094629533935588,
        periodReturn: 0.007284402954553162
      },
      {
        startDate: "2020-03-31",
        endDate: "2020-04-01",
        cumulativeReturn: 0.13211672643238281,
        periodReturn: -0.00773881202212667
      },
      {
        startDate: "2020-04-01",
        endDate: "2020-04-02",
        cumulativeReturn: 0.1308036440009881,
        periodReturn: -0.0011598472142820557
      },
      {
        startDate: "2020-04-02",
        endDate: "2020-04-03",
        cumulativeReturn: 0.1243881810063443,
        periodReturn: -0.005673366042529595
      },
      {
        startDate: "2020-04-03",
        endDate: "2020-04-06",
        cumulativeReturn: 0.13096939042193845,
        periodReturn: 0.005853147095253018
      },
      {
        startDate: "2020-04-06",
        endDate: "2020-04-07",
        cumulativeReturn: 0.13925690434930127,
        periodReturn: 0.007327796841850013
      },
      {
        startDate: "2020-04-07",
        endDate: "2020-04-08",
        cumulativeReturn: 0.14488016881812826,
        periodReturn: 0.00493590554277901
      },
      {
        startDate: "2020-04-08",
        endDate: "2020-04-09",
        cumulativeReturn: 0.16941602803822886,
        periodReturn: 0.021430940886528995
      },
      {
        startDate: "2020-04-09",
        endDate: "2020-04-10",
        cumulativeReturn: 0.16941602803822886,
        periodReturn: 0
      },
      {
        startDate: "2020-04-10",
        endDate: "2020-04-13",
        cumulativeReturn: 0.17546316598604994,
        periodReturn: 0.005171074966336608
      },
      {
        startDate: "2020-04-13",
        endDate: "2020-04-14",
        cumulativeReturn: 0.1828627139194161,
        periodReturn: 0.00629500621328186
      },
      {
        startDate: "2020-04-14",
        endDate: "2020-04-15",
        cumulativeReturn: 0.1820998927415547,
        periodReturn: -0.0006448940936972497
      },
      {
        startDate: "2020-04-15",
        endDate: "2020-04-16",
        cumulativeReturn: 0.18332704288174884,
        periodReturn: 0.0010381103557568535
      },
      {
        startDate: "2020-04-16",
        endDate: "2020-04-17",
        cumulativeReturn: 0.189108865139604,
        periodReturn: 0.004886072952220231
      },
      {
        startDate: "2020-04-17",
        endDate: "2020-04-20",
        cumulativeReturn: 0.18568483290119242,
        periodReturn: -0.002879494332934427
      },
      {
        startDate: "2020-04-20",
        endDate: "2020-04-21",
        cumulativeReturn: 0.1759122653580496,
        periodReturn: -0.008242129166172021
      },
      {
        startDate: "2020-04-21",
        endDate: "2020-04-22",
        cumulativeReturn: 0.17655373263158403,
        periodReturn: 0.0005455060657431404
      },
      {
        startDate: "2020-04-22",
        endDate: "2020-04-23",
        cumulativeReturn: 0.17633848952690245,
        periodReturn: -0.00018294370984669594
      },
      {
        startDate: "2020-04-23",
        endDate: "2020-04-24",
        cumulativeReturn: 0.174762026561329,
        periodReturn: -0.0013401439973349872
      },
      {
        startDate: "2020-04-24",
        endDate: "2020-04-27",
        cumulativeReturn: 0.17429066708705454,
        periodReturn: -0.000401238262402957
      },
      {
        startDate: "2020-04-27",
        endDate: "2020-04-28",
        cumulativeReturn: 0.17645048239753902,
        periodReturn: 0.0018392510227831244
      },
      {
        startDate: "2020-04-28",
        endDate: "2020-04-29",
        cumulativeReturn: 0.18195260537856872,
        periodReturn: 0.0046768844616534525
      },
      {
        startDate: "2020-04-29",
        endDate: "2020-04-30",
        cumulativeReturn: 0.1848985578628155,
        periodReturn: 0.002492445526868914
      },
      {
        startDate: "2020-04-30",
        endDate: "2020-05-01",
        cumulativeReturn: 0.1823597975781006,
        periodReturn: -0.0021425971597890197
      },
      {
        startDate: "2020-05-01",
        endDate: "2020-05-04",
        cumulativeReturn: 0.1807894986438181,
        periodReturn: -0.0013281058248927908
      },
      {
        startDate: "2020-05-04",
        endDate: "2020-05-05",
        cumulativeReturn: 0.1857282709778374,
        periodReturn: 0.004182601843674639
      },
      {
        startDate: "2020-05-05",
        endDate: "2020-05-06",
        cumulativeReturn: 0.1860459479504617,
        periodReturn: 0.00026791717832813254
      },
      {
        startDate: "2020-05-06",
        endDate: "2020-05-07",
        cumulativeReturn: 0.19041674612417658,
        periodReturn: 0.003685184525327761
      },
      {
        startDate: "2020-05-07",
        endDate: "2020-05-08",
        cumulativeReturn: 0.1941969639831922,
        periodReturn: 0.003175541566702165
      },
      {
        startDate: "2020-05-08",
        endDate: "2020-05-11",
        cumulativeReturn: 0.19556096494219033,
        periodReturn: 0.0011421909451591777
      },
      {
        startDate: "2020-05-11",
        endDate: "2020-05-12",
        cumulativeReturn: 0.20055528606607465,
        periodReturn: 0.004177387243590553
      },
      {
        startDate: "2020-05-12",
        endDate: "2020-05-13",
        cumulativeReturn: 0.19718481213721328,
        periodReturn: -0.0028074291688020615
      },
      {
        startDate: "2020-05-13",
        endDate: "2020-05-14",
        cumulativeReturn: 0.19344156217613828,
        periodReturn: -0.003126710198062595
      },
      {
        startDate: "2020-05-14",
        endDate: "2020-05-15",
        cumulativeReturn: 0.19465520149983684,
        periodReturn: 0.0010169239635711797
      },
      {
        startDate: "2020-05-15",
        endDate: "2020-05-18",
        cumulativeReturn: 0.20262386526598175,
        periodReturn: 0.006670262479199511
      },
      {
        startDate: "2020-05-18",
        endDate: "2020-05-19",
        cumulativeReturn: 0.20591312716134347,
        periodReturn: 0.002735071197538776
      },
      {
        startDate: "2020-05-19",
        endDate: "2020-05-20",
        cumulativeReturn: 0.2123992595811699,
        periodReturn: 0.005378606695404663
      },
      {
        startDate: "2020-05-20",
        endDate: "2020-05-21",
        cumulativeReturn: 0.21618747298548202,
        periodReturn: 0.0031245593185373795
      },
      {
        startDate: "2020-05-21",
        endDate: "2020-05-22",
        cumulativeReturn: 0.2166026354598809,
        periodReturn: 0.0003413638798464825
      },
      {
        startDate: "2020-05-22",
        endDate: "2020-05-25",
        cumulativeReturn: 0.2166026354598809,
        periodReturn: 0
      },
      {
        startDate: "2020-05-25",
        endDate: "2020-05-26",
        cumulativeReturn: 0.22562660171190996,
        periodReturn: 0.007417348926437338
      },
      {
        startDate: "2020-05-26",
        endDate: "2020-05-27",
        cumulativeReturn: 0.2314701208120924,
        periodReturn: 0.004767780898375089
      },
      {
        startDate: "2020-05-27",
        endDate: "2020-05-28",
        cumulativeReturn: 0.23652973863255933,
        periodReturn: 0.004108599741851869
      },
      {
        startDate: "2020-05-28",
        endDate: "2020-05-29",
        cumulativeReturn: 0.2402380752663158,
        periodReturn: 0.00299898701818316
      },
      {
        startDate: "2020-05-29",
        endDate: "2020-06-01",
        cumulativeReturn: 0.24417835212022365,
        periodReturn: 0.0031770326459795296
      },
      {
        startDate: "2020-06-01",
        endDate: "2020-06-02",
        cumulativeReturn: 0.2509063857360345,
        periodReturn: 0.005407611862355265
      },
      {
        startDate: "2020-06-02",
        endDate: "2020-06-03",
        cumulativeReturn: 0.2602395759021199,
        periodReturn: 0.007461141994725536
      },
      {
        startDate: "2020-06-03",
        endDate: "2020-06-04",
        cumulativeReturn: 0.26344838079402333,
        periodReturn: 0.0025461864182502454
      },
      {
        startDate: "2020-06-04",
        endDate: "2020-06-05",
        cumulativeReturn: 0.2770355919691083,
        periodReturn: 0.01075406908713291
      },
      {
        startDate: "2020-06-05",
        endDate: "2020-06-08",
        cumulativeReturn: 0.28380805035050516,
        periodReturn: 0.005303265174429693
      },
      {
        startDate: "2020-06-08",
        endDate: "2020-06-09",
        cumulativeReturn: 0.28360770779300926,
        periodReturn: -0.00015605335816447366
      },
      {
        startDate: "2020-06-09",
        endDate: "2020-06-10",
        cumulativeReturn: 0.2851965905454239,
        periodReturn: 0.0012378258113971505
      },
      {
        startDate: "2020-06-10",
        endDate: "2020-06-11",
        cumulativeReturn: 0.2731774041056909,
        periodReturn: -0.009352021728156083
      },
      {
        startDate: "2020-06-11",
        endDate: "2020-06-12",
        cumulativeReturn: 0.27542845167579255,
        periodReturn: 0.0017680549174393374
      },
      {
        startDate: "2020-06-12",
        endDate: "2020-06-15",
        cumulativeReturn: 0.27421500563756185,
        periodReturn: -0.0009514026730675096
      },
      {
        startDate: "2020-06-15",
        endDate: "2020-06-16",
        cumulativeReturn: 0.28393296220794295,
        periodReturn: 0.007626622294813267
      },
      {
        startDate: "2020-06-16",
        endDate: "2020-06-17",
        cumulativeReturn: 0.28393296220794295,
        periodReturn: 0
      },
      {
        startDate: "2020-06-17",
        endDate: "2020-06-18",
        cumulativeReturn: 0.281868181132501,
        periodReturn: -0.0016081689124105812
      },
      {
        startDate: "2020-06-18",
        endDate: "2020-06-19",
        cumulativeReturn: 0.28232940835132325,
        periodReturn: 0.0003598086180864597
      },
      {
        startDate: "2020-06-19",
        endDate: "2020-06-22",
        cumulativeReturn: 0.2814445699285062,
        periodReturn: -0.0006900242769561061
      },
      {
        startDate: "2020-06-22",
        endDate: "2020-06-23",
        cumulativeReturn: 0.2830574856291288,
        periodReturn: 0.00125866989370647
      },
      {
        startDate: "2020-06-23",
        endDate: "2020-06-24",
        cumulativeReturn: 0.2775982131693271,
        periodReturn: -0.004254893113479518
      },
      {
        startDate: "2020-06-24",
        endDate: "2020-06-25",
        cumulativeReturn: 0.27545545425740214,
        periodReturn: -0.001677177448933218
      },
      {
        startDate: "2020-06-25",
        endDate: "2020-06-26",
        cumulativeReturn: 0.27386430214088375,
        periodReturn: -0.001247516807589955
      },
      {
        startDate: "2020-06-26",
        endDate: "2020-06-29",
        cumulativeReturn: 0.2705811863453893,
        periodReturn: -0.002577288483535294
      },
      {
        startDate: "2020-06-29",
        endDate: "2020-06-30",
        cumulativeReturn: 0.2712375406465668,
        periodReturn: 0.00051657801030824
      },
      {
        startDate: "2020-06-30",
        endDate: "2020-07-01",
        cumulativeReturn: 0.2737955224537283,
        periodReturn: 0.0020121981340014304
      },
      {
        startDate: "2020-07-01",
        endDate: "2020-07-02",
        cumulativeReturn: 0.2788318174556075,
        periodReturn: 0.003953770376094445
      },
      {
        startDate: "2020-07-02",
        endDate: "2020-07-03",
        cumulativeReturn: 0.2788318174556075,
        periodReturn: 0
      },
      {
        startDate: "2020-07-03",
        endDate: "2020-07-06",
        cumulativeReturn: 0.2834632168621509,
        periodReturn: 0.003621586000071718
      },
      {
        startDate: "2020-07-06",
        endDate: "2020-07-07",
        cumulativeReturn: 0.2837057474017928,
        periodReturn: 0.0001889657112532738
      },
      {
        startDate: "2020-07-07",
        endDate: "2020-07-08",
        cumulativeReturn: 0.28293577711509066,
        periodReturn: -0.0005998027883417751
      },
      {
        startDate: "2020-07-08",
        endDate: "2020-07-09",
        cumulativeReturn: 0.28244730500634785,
        periodReturn: -0.0003807455661117797
      },
      {
        startDate: "2020-07-09",
        endDate: "2020-07-10",
        cumulativeReturn: 0.2822173691146641,
        periodReturn: -0.00017929461178331287
      },
      {
        startDate: "2020-07-10",
        endDate: "2020-07-13",
        cumulativeReturn: 0.283720174037692,
        periodReturn: 0.0011720360051474523
      },
      {
        startDate: "2020-07-13",
        endDate: "2020-07-14",
        cumulativeReturn: 0.2840533669233223,
        periodReturn: 0.00025955258191698473
      },
      {
        startDate: "2020-07-14",
        endDate: "2020-07-15",
        cumulativeReturn: 0.28789936295192575,
        periodReturn: 0.0029951995202649917
      },
      {
        startDate: "2020-07-15",
        endDate: "2020-07-16",
        cumulativeReturn: 0.2879905941961931,
        periodReturn: 0.00007083724621025776
      },
      {
        startDate: "2020-07-16",
        endDate: "2020-07-17",
        cumulativeReturn: 0.28990664051672943,
        periodReturn: 0.001487624466490685
      },
      {
        startDate: "2020-07-17",
        endDate: "2020-07-20",
        cumulativeReturn: 0.2935500241986313,
        periodReturn: 0.0028245328518056944
      },
      {
        startDate: "2020-07-20",
        endDate: "2020-07-21",
        cumulativeReturn: 0.29915938466460124,
        periodReturn: 0.00433640783969298
      },
      {
        startDate: "2020-07-21",
        endDate: "2020-07-22",
        cumulativeReturn: 0.3017550814022478,
        periodReturn: 0.00199798174749492
      },
      {
        startDate: "2020-07-22",
        endDate: "2020-07-23",
        cumulativeReturn: 0.3048508528039118,
        periodReturn: 0.002378151962602049
      },
      {
        startDate: "2020-07-23",
        endDate: "2020-07-24",
        cumulativeReturn: 0.304534487189259,
        periodReturn: -0.0002424534681284389
      },
      {
        startDate: "2020-07-24",
        endDate: "2020-07-27",
        cumulativeReturn: 0.3057600991142244,
        periodReturn: 0.0009395013600646047
      },
      {
        startDate: "2020-07-27",
        endDate: "2020-07-28",
        cumulativeReturn: 0.3071227842661297,
        periodReturn: 0.0010435953379412115
      },
      {
        startDate: "2020-07-28",
        endDate: "2020-07-29",
        cumulativeReturn: 0.3095291677469638,
        periodReturn: 0.0018409773816198526
      },
      {
        startDate: "2020-07-29",
        endDate: "2020-07-30",
        cumulativeReturn: 0.3096996707518056,
        periodReturn: 0.00013020176185532325
      },
      {
        startDate: "2020-07-30",
        endDate: "2020-07-31",
        cumulativeReturn: 0.31195469236775786,
        periodReturn: 0.001721785281245308
      },
      {
        startDate: "2020-07-31",
        endDate: "2020-08-03",
        cumulativeReturn: 0.3139885265080784,
        periodReturn: 0.0015502319951691047
      },
      {
        startDate: "2020-08-03",
        endDate: "2020-08-04",
        cumulativeReturn: 0.3165449348905045,
        periodReturn: 0.001945533260643849
      },
      {
        startDate: "2020-08-04",
        endDate: "2020-08-05",
        cumulativeReturn: 0.31945161503096053,
        periodReturn: 0.002207809291900638
      },
      {
        startDate: "2020-08-05",
        endDate: "2020-08-06",
        cumulativeReturn: 0.32134239212532045,
        periodReturn: 0.0014330022206350314
      },
      {
        startDate: "2020-08-06",
        endDate: "2020-08-07",
        cumulativeReturn: 0.32254036912210493,
        periodReturn: 0.0009066363146478557
      },
      {
        startDate: "2020-08-07",
        endDate: "2020-08-10",
        cumulativeReturn: 0.3234632831628046,
        periodReturn: 0.0006978343060425809
      },
      {
        startDate: "2020-08-10",
        endDate: "2020-08-11",
        cumulativeReturn: 0.32471998837418603,
        periodReturn: 0.0009495580477141308
      },
      {
        startDate: "2020-08-11",
        endDate: "2020-08-12",
        cumulativeReturn: 0.3239118781695547,
        periodReturn: -0.0006100234100212474
      },
      {
        startDate: "2020-08-12",
        endDate: "2020-08-13",
        cumulativeReturn: 0.32310729894073487,
        periodReturn: -0.0006077286880546162
      },
      {
        startDate: "2020-08-13",
        endDate: "2020-08-14",
        cumulativeReturn: 0.3226149932193214,
        periodReturn: -0.0003720829911585718
      },
      {
        startDate: "2020-08-14",
        endDate: "2020-08-17",
        cumulativeReturn: 0.32386784573195326,
        periodReturn: 0.000947254128415824
      },
      {
        startDate: "2020-08-17",
        endDate: "2020-08-18",
        cumulativeReturn: 0.3245342260290196,
        periodReturn: 0.0005033586239101225
      },
      {
        startDate: "2020-08-18",
        endDate: "2020-08-19",
        cumulativeReturn: 0.32468042059502444,
        periodReturn: 0.00011037432112494697
      },
      {
        startDate: "2020-08-19",
        endDate: "2020-08-20",
        cumulativeReturn: 0.3251213374629094,
        periodReturn: 0.00033284772767063533
      },
      {
        startDate: "2020-08-20",
        endDate: "2020-08-21",
        cumulativeReturn: 0.3259211262457966,
        periodReturn: 0.0006035589045893624
      },
      {
        startDate: "2020-08-21",
        endDate: "2020-08-24",
        cumulativeReturn: 0.3269754257395854,
        periodReturn: 0.0007951449546427272
      },
      {
        startDate: "2020-08-24",
        endDate: "2020-08-25",
        cumulativeReturn: 0.32789613954011676,
        periodReturn: 0.0006938438969344199
      },
      {
        startDate: "2020-08-25",
        endDate: "2020-08-26",
        cumulativeReturn: 0.32877762607892724,
        periodReturn: 0.0006638219003451962
      },
      {
        startDate: "2020-08-26",
        endDate: "2020-08-27",
        cumulativeReturn: 0.3290144441194456,
        periodReturn: 0.00017822247746384368
      },
      {
        startDate: "2020-08-27",
        endDate: "2020-08-28",
        cumulativeReturn: 0.3312115446998447,
        periodReturn: 0.001653180362426322
      },
      {
        startDate: "2020-08-28",
        endDate: "2020-08-31",
        cumulativeReturn: 0.33295406545019923,
        periodReturn: 0.001308973586724151
      },
      {
        startDate: "2020-08-31",
        endDate: "2020-09-01",
        cumulativeReturn: 0.33752261463868183,
        periodReturn: 0.0034273868146684696
      },
      {
        startDate: "2020-09-01",
        endDate: "2020-09-02",
        cumulativeReturn: 0.34087764770169104,
        periodReturn: 0.0025083935226886014
      },
      {
        startDate: "2020-09-02",
        endDate: "2020-09-03",
        cumulativeReturn: 0.3414095326409965,
        periodReturn: 0.0003966692563018176
      },
      {
        startDate: "2020-09-03",
        endDate: "2020-09-04",
        cumulativeReturn: 0.3394737639148786,
        periodReturn: -0.0014430855596401899
      },
      {
        startDate: "2020-09-04",
        endDate: "2020-09-07",
        cumulativeReturn: 0.3394737639148786,
        periodReturn: 0
      },
      {
        startDate: "2020-09-07",
        endDate: "2020-09-08",
        cumulativeReturn: 0.3371270206553223,
        periodReturn: -0.0017519889696812898
      },
      {
        startDate: "2020-09-08",
        endDate: "2020-09-09",
        cumulativeReturn: 0.3394396332165832,
        periodReturn: 0.0017295384249488939
      },
      {
        startDate: "2020-09-09",
        endDate: "2020-09-10",
        cumulativeReturn: 0.34124022451452074,
        periodReturn: 0.0013442870087497017
      },
      {
        startDate: "2020-09-10",
        endDate: "2020-09-11",
        cumulativeReturn: 0.3425470722199191,
        periodReturn: 0.0009743576739739987
      },
      {
        startDate: "2020-09-11",
        endDate: "2020-09-14",
        cumulativeReturn: 0.34342336122834594,
        periodReturn: 0.0006527063568636679
      },
      {
        startDate: "2020-09-14",
        endDate: "2020-09-15",
        cumulativeReturn: 0.34480070467358503,
        periodReturn: 0.0010252489907422245
      },
      {
        startDate: "2020-09-15",
        endDate: "2020-09-16",
        cumulativeReturn: 0.3457457057576947,
        periodReturn: 0.0007027071601208879
      },
      {
        startDate: "2020-09-16",
        endDate: "2020-09-17",
        cumulativeReturn: 0.3449333363363758,
        periodReturn: -0.0006036574501730121
      },
      {
        startDate: "2020-09-17",
        endDate: "2020-09-18",
        cumulativeReturn: 0.3449333363363758,
        periodReturn: 0
      }
    ]
  },
  allocations: {
    datastreamType: {
      buckets: [
        {
          name: "Municipals",
          percentOfNetAssetValue: 1
        }
      ]
    },
    datastreamSubtype: {
      buckets: [
        {
          name: "Municipals",
          percentOfNetAssetValue: 1
        }
      ]
    },
    country: {
      us: 100,
      other: 0
    },
    currency: {
      usd: 100,
      other: 0
    },
    debtType: {
      buckets: []
    },
    region: {
      unitedStates: 100,
      other: 0
    },
    maturity: {
      threeToFiveYears: 100,
      other: 0
    },
    rating: {
      investmentGrade: {
        total: 100,
        aaa: 0,
        aa: 100,
        a: 0,
        bbb: 0
      },
      nonInvestmentGrade: {
        total: 0,
        bb: 0,
        b: 0,
        c: 0,
        d: 0,
        nr: 0
      }
    },
    sector: {
      other: 100
    }
  },
  wealthProjections: [
    {
      date: "2020-09-01",
      percentiles: [
        {
          percentile: 0.3,
          cumulativeReturn: 5000,
          nav: 5000
        },
        {
          percentile: 0.5,
          cumulativeReturn: 5500,
          nav: 5500
        },
        {
          percentile: 0.7,
          cumulativeReturn: 6000,
          nav: 6000
        }
      ]
    },
    {
      date: "2020-12-01",
      percentiles: [
        {
          percentile: 0.3,
          cumulativeReturn: 5000 + 4500,
          nav: 4500
        },
        {
          percentile: 0.5,
          cumulativeReturn: 5500 + 5500,
          nav: 5500
        },
        {
          percentile: 0.7,
          cumulativeReturn: 6000 + 6500,
          nav: 6500
        }
      ]
    }
  ],
  metadata: {}
};

export default mockAnalysis;
