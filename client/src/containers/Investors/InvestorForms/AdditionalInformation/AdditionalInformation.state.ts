import { array, boolean, object, string, number } from "yup";
import {
  PoliticallyExposedPersons,
  AccountActivity,
  AdditionalAccounts,
  ScopeOfBusiness,
  PrimaryOngoingFundingSource,
  PrimaryEntityAccountActivity,
  ExpectedWithdrawalFrequency,
  PoliticalOfficials
} from "@bondhouse/investor";

export interface AdditionalInformationState {
  isMaintainedForForeignFinancialInstitution: boolean;
  isForeignBank: boolean;
  politicallyExposedPersons: Partial<PoliticallyExposedPersons>;
  accountActivity: Partial<AccountActivity>;
  additionalAccounts: AdditionalAccounts;
  institution: string;
  familyMember: string;
  politicalOfficial: PoliticalOfficials;
}

export const politicalOfficialSchema = object().shape({
  legalName: string()
    .trim()
    .min(2, "Too short")
    .matches(/^[a-zA-Z0-9\s]*$/, "Only letter and numbers are allowed")
    .required("Legal Name is required"),
  role: string()
    .trim()
    .min(2, "Too short")
    .matches(/^[a-zA-Z0-9\s]*$/, "Only letter and numbers are allowed")
    .required("Role is required"),
  politicalTitle: string()
    .trim()
    .min(2, "Too short")
    .matches(/^[a-zA-Z0-9\s]*$/, "Only letter and numbers are allowed")
    .required("Title is required"),
  politicalOrganization: string()
    .trim()
    .min(2, "Too short")
    .matches(/^[a-zA-Z0-9\s]*$/, "Only letter and numbers are allowed")
    .required("Organization is required"),
  immediateFamily: array()
    .required("At least one famiy member is required")
    .min(1, "At least one family member is required")
    .of(
      string()
        .trim()
        .min(2, "Too short")
        .matches(/^[a-zA-Z0-9\s]*$/, "Only letter and numbers are allowed")
    )
});
export const defaults: AdditionalInformationState = {
  isMaintainedForForeignFinancialInstitution: false,
  isForeignBank: false,
  politicalOfficial: {
    legalName: "",
    role: "",
    politicalTitle: "",
    politicalOrganization: "",
    immediateFamily: []
  },
  politicallyExposedPersons: {
    isPoliticallyExposed: true,
    politicalOfficials: []
  },
  accountActivity: {
    primaryEntityAccountActivity: undefined,
    expectedWithdrawalFrequency: undefined,
    willTransactForeignBonds: false,
    willTransactLowPricedSecurities: false,
    initialDepositAmount: 0,
    initialDepositSource: ""
  },
  additionalAccounts: {
    institutionNames: [],
    scopeOfBusiness: ScopeOfBusiness.COMMERCIALRETAILBUSINESS,
    primaryOngoingFundingSource: PrimaryOngoingFundingSource.CORPORATEINCOME,
    confirmEntityDoesNotIssueBearerShares: false,
    primaryOngoingFundingSourceClarification: "",
    scopeOfBusinessClarification: ""
  },
  institution: "",
  familyMember: ""
};

export const AccountActivityMap = {
  ACTIVE_TRADING: "Active Trading",
  SHORT_TERM_INVESTING: "Short-term Investing",
  LONG_TERM_INVESTING: "Long-term Investing"
};

export const accountAcitivity = Object.values(PrimaryEntityAccountActivity).map(
  key => {
    return {
      value: key,
      label: AccountActivityMap[key as PrimaryEntityAccountActivity]
    };
  }
);

export const WithdrawalFrequencyMap = {
  FREQUENT: "Frequent",
  OCCASIONAL: "Occasional",
  WITHDRAWAL: "Withdrawal"
};

export const withdrawalFrequency = Object.values(
  ExpectedWithdrawalFrequency
).map(key => {
  return {
    value: key,
    label: WithdrawalFrequencyMap[key as ExpectedWithdrawalFrequency]
  };
});

export const ScopeOfBusinessMap = {
  COMMERCIAL_RETAIL_BUSINESS: "Commercial Retail Business",
  FINANCIAL_SERVICES_BUSINESS: "Financial Services Business",
  OTHER: "Other"
};

export const scopeOfBusiness = Object.values(ScopeOfBusiness).map(key => {
  return {
    value: key,
    label: ScopeOfBusinessMap[key as ScopeOfBusiness]
  };
});

export const PrimaryOngoingFundingSourceMap = {
  CORPORATE_INCOME: "Capital Income",
  INVESTMENT_CAPITAL: "Investment Capital",
  OTHER: "Other"
};

export const primaryOngoingFundingSource = Object.values(
  PrimaryOngoingFundingSource
).map(key => {
  return {
    value: key,
    label: PrimaryOngoingFundingSourceMap[key as PrimaryOngoingFundingSource]
  };
});

export function getSchema() {
  const isMaintainedForForeignFinancialInstitution = boolean();
  const isForeignBank = boolean();
  const accountActivity = object().shape({
    primaryEntityAccountActivity: string().required(
      "Account activity is required"
    ),
    expectedWithdrawalFrequency: string().required(
      "Withdraw frequency is required"
    ),
    initialDepositAmount: number()
      .min(2, "Too short")
      .required("An expected initial deposit amount is required"),
    initialDepositSource: string()
      .trim()
      .min(2, "Too short")
      .matches(/^[a-zA-Z0-9\s]*$/, "Only letter and numbers are allowed")
      .required("The source for the initial deposit is required")
  });
  const additionalAccounts = object().shape({
    institutionNames: array()
      .required("At least one institution name is required")
      .min(1, "At least one institution name is required")
      .of(
        string()
          .trim()
          .min(2, "Must have at least 2 characters")
          .required("Institution names are required")
          .matches(/^[a-zA-Z0-9\s]*$/, "Only letter and numbers are allowed")
      ),
    scopeOfBusiness: string().required("The scope of business is required"),
    scopeOfBusinessClarification: string().when("scopeOfBusiness", {
      is: "OTHER",
      then: string()
        .trim()
        .min(2, "Must have at least 2 characters")
        .required("A clarification is required")
        .matches(/^[a-zA-Z0-9\s]*$/, "Only letter and numbers are allowed")
    }),
    primaryOngoingFundingSource: string().required(
      "The primary funding source is required"
    ),
    primaryOngoingFundingSourceClarification: string().when(
      "primaryOngoingFundingSource",
      {
        is: "OTHER",
        then: string()
          .trim()
          .min(2, "Must have at least 2 characters")
          .required("A clarification is required")
          .matches(/^[a-zA-Z0-9\s]*$/, "Only letter and numbers are allowed")
      }
    )
  });

  return object().shape({
    isMaintainedForForeignFinancialInstitution,
    isForeignBank,
    accountActivity,
    additionalAccounts
  });
}

export const schema = getSchema;
