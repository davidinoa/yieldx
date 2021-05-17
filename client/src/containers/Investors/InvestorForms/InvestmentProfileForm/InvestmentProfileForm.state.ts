import { object, string, number } from "yup";
import {
  Amount,
  InvestmentExperience,
  InvestmentObjective,
  InvestmentProfile,
  InvestorType,
  LiquidityNeeds,
  RiskTolerance,
  SuitabilityProfile,
  TimeHorizon,
  Worth
} from "@bondhouse/investor";

export interface InvestmentProfileFormState {
  suitabilityProfile: Partial<SuitabilityProfile>;
  investmentProfile: Partial<InvestmentProfile>;
}

export const defaults: InvestmentProfileFormState = {
  investmentProfile: {
    federalTaxBracketPercent: 0
  },
  suitabilityProfile: {}
};

export function getSchema(investorType: InvestorType) {
  const suitabilityProfile = object().shape({
    timeHorizon: string().required("Required."),
    liquidityNeeds: string().required("Required.")
  });

  const investmentProfile =
    investorType === InvestorType.INDIVIDUAL
      ? object().shape({
          investmentObjective: string().required("Required."),
          investmentExperience: string().required("Required."),
          annualIncomeUSD: string().required("Required."),
          liquidNetWorthUSD: string().required("Required."),
          totalNetWorthUSD: string().required("Required."),
          riskTolerance: string().required("Required."),
          federalTaxBracketPercent: number()
            .min(1, "Tax bracket must be 1% or more")
            .required("Required.")
        })
      : object().shape({});

  return object().shape({ suitabilityProfile, investmentProfile });
}

export const employmentMap = {
  EMPLOYED: "Employed",
  RETIRED: "Retired",
  STUDENT: "Student",
  UNEMPLOYED: "Unemployed"
};

export const objectiveMap = {
  GROWTH: "Growth",
  INCOME: "Income",
  CAPITAL_PRESERVATION: "Capital preservation",
  SPECULATION: "Speculation",
  OTHER: "Other"
};

export const experienceMap = {
  NONE: "None",
  LIMITED: "Limited",
  GOOD: "Good",
  EXTENSIVE: "Extensive"
};

export const liquidityMap = {
  VERY_IMPORTANT: "Very important",
  SOMEWHAT_IMPORTANT: "Somewhat important",
  NOT_IMPORTANT: "Not important"
};

export const horizonMap = {
  SHORT: "Short",
  AVERAGE: "Average",
  LONGEST: "Longest"
};

export const amountMap = {
  UPTO25K: "$0 - $25k",
  FROM25TO50K: "$25k - $50k",
  FROM50TO100K: "$50k - $100k",
  FROM100TO200K: "$100k - $200k",
  FROM200TO300K: "$200k - $300k",
  FROM300TO500K: "$300k - $500k",
  FROM500TO1M200K: "$500k - $1.2m",
  FROM1M200KTO10M: "$1.2m - $10m"
};

export const worthMap = {
  UPTO50K: "$0 - $50k",
  FROM50TO100K: "$50k - $100k",
  FROM100TO200K: "$100k - $200k",
  FROM200TO500K: "$200k - $500k",
  FROM500KTO1M: "$500k - $1m",
  FROM1MTO5M: "$1m - $5m",
  FROM5MTO10M: "$5m - 10m"
};

export const riskMap = {
  HIGH: "High",
  MEDIUM: "Medium",
  LOW: "Low"
};
export const schema = getSchema;
export const objectiveOptions = Object.values(InvestmentObjective).map(key => {
  return { value: key, label: objectiveMap[key] };
});
export const experienceOptions = Object.values(InvestmentExperience).map(
  key => {
    return {
      value: key,
      label: experienceMap[key]
    };
  }
);
export const liquidityNeedsOptions = Object.values(LiquidityNeeds).map(key => {
  return { value: key, label: liquidityMap[key] };
});
export const timeHorizonOptions = Object.values(TimeHorizon).map(key => {
  return { value: key, label: horizonMap[key] };
});
export const amountOptions = Object.values(Amount).map(key => {
  return { value: key, label: amountMap[key] };
});
export const worthOptions = Object.values(Worth).map(key => {
  return { value: key, label: worthMap[key] };
});
export const riskOptions = Object.values(RiskTolerance).map(key => {
  return { value: key, label: riskMap[key] };
});
