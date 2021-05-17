import {
  Asset,
  AssetAssetTypeEnum,
  AssetAssetSubtypeEnum
} from "@bondhouse/rover-universe";

const muni: Asset = {
  id: "bond",
  name: "Bond",
  description: "Bond",
  price: 105,
  ticker: "CT",
  priceDate: "2020-05-27",
  country: "US",
  assetType: AssetAssetTypeEnum.Bond,
  assetSubtype: AssetAssetSubtypeEnum.Sovereign,
  currency: "USD",
  universes: {
    liquid: true
  },
  identifiers: {
    cusip: "20030NCM1",
    isin: "muniIsin"
  },
  bond: {
    issuer: {
      id: "muniIssuer"
    },
    cleanPrice: 105,
    accruedInterest: 1,
    maturityDate: "2023-08-01",
    classifications: {
      datastreamType: "Municipals",
      datastreamSubtype: "Municipals"
    },
    instrumentType: "Bond",
    originalAmountIssued: 29620,
    amountOutstanding: 29620,
    capType: "New Filing",
    debtServiceType: "Special Tax",
    state: "CT",
    useOfProceeds: "General Purpose/Public Improvements",
    minimumDenomination: 5000,
    denominationIncrement: 5000,
    ratings: {
      snpLongTerm: {
        effectiveDate: "2015-09-28",
        rating: "AA",
        rank: 5
      }
    },
    unitedStatesTaxExempt: true,
    stateTaxExempt: true
  },
  analytics: {
    date: "2020-05-27",
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-ignore
    yield: 1,
    duration: 2
  },
  allocation: {
    country: {
      us: 100
    },
    currency: {
      usd: 100
    },
    maturity: {
      threeToFiveYears: 100
    },
    rating: {
      aa: 100
    },
    region: {
      unitedStates: 100
    }
  }
};

export default muni;
