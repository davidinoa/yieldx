import { AccountType, LinkedBankAccountStatus,
  Amount,
  EmploymentStatus, InvestmentExperience, InvestmentObjective,
  InvestorType,
  LiquidityNeeds,
  PhoneType, RiskTolerance,
  TimeHorizon,
  TrustedContact, Worth} from "@bondhouse/investor";

export const TD_SAVINGS_ACTIVE = {
  "id": "781359af-35fe-4399-8351-cb93f239d484",
  "investorId": "b7ad4d69-e732-4bec-ba31-a256b22a51e4",
  "mask": "1111",
  "bankName": "TD Bank",
  "accountType": AccountType.SAVINGS,
  "status": LinkedBankAccountStatus.ACTIVE,
  "createdAt": "2020-06-18T20:03:58.585590Z",
  "updatedAt": "2020-06-18T20:03:58.585590Z"
};

export const INDIVIDUAL_INVESTOR = {
  id: "investorId",
  investorType: InvestorType.INDIVIDUAL,
  investorInfo: {
    givenName: "Alfredo",
    familyName: "Alpizar",
    citizenshipCountry: "USA",
    contactInformation: {
      streetAddress: "372 Westminster Road",
      city: "Brooklyn",
      state: "NY",
      postalCode: "11218",
      country: "USA",
      phone: "347-123-4567",
      phoneType: PhoneType.MOBILE,
      emailAddresses: ["test@testing.com"]
    },
    trustedContactInfo: { trustedContact: TrustedContact.EXCLUDE },
    disclosures: {
      isControlPerson: false,
      isAffiliatedExchangeOrFINRA: false,
      isPoliticallyExposed: false
    },
    suitabilityProfile: {
      timeHorizon: TimeHorizon.AVERAGE,
      liquidityNeeds: LiquidityNeeds.VERYIMPORTANT
    },
    applicantSignature: { eSigned: true },
    birthCountry: "USA",
    employment: { employmentStatus: EmploymentStatus.STUDENT },
    investmentProfile: {
      investmentObjective: InvestmentObjective.INCOME,
      investmentExperience: InvestmentExperience.LIMITED,
      annualIncomeUSD: Amount.FROM100TO200K,
      liquidNetWorthUSD: Worth.UPTO50K,
      totalNetWorthUSD: Worth.UPTO50K,
      riskTolerance: RiskTolerance.MEDIUM,
      federalTaxBracketPercent: 5
    }
  },
  createdAt: "2020-05-18T15:06:53.540735Z",
  updatedAt: "2020-05-18T15:06:53.540735Z"
};
