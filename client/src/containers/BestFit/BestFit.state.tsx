import { BestFitCreditQuality } from "@bondhouse/rover-whitelist";
import * as Yup from "yup";
import { AppType } from "@bondhouse/position-management";
import { CashFlow } from "providers/graphql/hooks";
import YieldXPortfolio from "models/YieldXPortfolio";
import {
  optimizationService,
  portfolioAnalysisService,
  whitelistsService
} from "services";
import Decimal from "util/Decimal";
import {
  MAXIMUM_INVESTMENT,
  MINIMUM_INVESTMENT,
  BestFitReviewData
} from "recoil-state/bestFit";
import getLiveAssets from "util/getLiveAssets";

export enum Subsector {
  OilandGas = "Oil and Gas",
  Tobacco = "Tobacco"
}

export enum Sector {
  Banks = "Banks",
  ConsumerGoods = "Consumer Goods",
  ElectricPower = "Electric Power",
  EnergyCompany = "Energy Company",
  GasDistribution = "Gas Distribution",
  Manufacturing = "Manufacturing",
  ServiceCompany = "Service Company",
  Telephone = "Telephone",
  Transportation = "Transportation"
}

export const ExcludedEsgScorePercentile = [20, 33, 50];

export type TimeMetric = "maturity" | "duration";
export type Weighting =
  | "maximizeYield"
  | "minimizeRisk"
  | "minimizeConcentration";

export interface Preferences {
  submitting: boolean;
  isCurrentValid: boolean;
  currentStepIndex: number;
  quality?: BestFitCreditQuality;
  timeMetric: TimeMetric;
  years: number;
  excludedSubsectors: Subsector[];
  excludedSectors: Sector[];
  excludedEsgScorePercentile: number;
  weighting?: Weighting;
  quantity: number;
  investment: number;
}

export const mockPreferences: Preferences = {
  submitting: false,
  isCurrentValid: false,
  currentStepIndex: 0,
  quality: BestFitCreditQuality.HighestQuality,
  timeMetric: "maturity",
  years: 5,
  weighting: "maximizeYield",
  excludedSubsectors: [],
  excludedSectors: [],
  excludedEsgScorePercentile: 0,
  quantity: 23,
  investment: 57500
};

const ADDITIONAL_ASSET_COUNT = 20;

export const MINIMUM_DENOMINATION = 2_500.0;

async function getWhitelist(
  preferences: Required<Preferences>,
  institutionId?: string
) {
  const {
    quantity,
    timeMetric,
    years,
    quality,
    excludedSubsectors,
    excludedSectors,
    excludedEsgScorePercentile
  } = preferences;
  if (!institutionId) {
    const {
      data: { assetIds }
    } = await whitelistsService.generateBestFitWhitelist({
      count: quantity + ADDITIONAL_ASSET_COUNT,
      excludedSubsectors,
      excludedSectors,
      excludedEsgScorePercentile,
      [timeMetric]: years,
      creditQualityBuckets: [quality]
    });
    return assetIds;
  }
  const {
    data: { assetIds }
  } = await whitelistsService.generateInstitutionBestFitWhitelist(
    !institutionId ? "bondhouse" : institutionId,
    {
      count: quantity + ADDITIONAL_ASSET_COUNT,
      excludedSubsectors,
      [timeMetric]: years,
      creditQualityBuckets: [quality]
    }
  );
  return assetIds;
}

function getEmptyPortfolio(investment: number): YieldXPortfolio {
  const portfolio = YieldXPortfolio.fromAssets("", []);
  portfolio.addCash(investment);
  return portfolio;
}

export function getOptimizedPortfolio(
  preferences: Preferences,
  whitelist: string[]
): Promise<YieldXPortfolio> {
  const { investment, weighting } = preferences as Required<Preferences>;
  const emptyPortfolio = getEmptyPortfolio(investment);
  return new Promise((resolve, reject) => {
    optimizationService[weighting](emptyPortfolio, whitelist, null, 0.03)
      .then(portfolio => resolve(portfolio))
      .catch(() => {
        optimizationService[weighting](emptyPortfolio, whitelist, null, 0.05)
          .then(portfolio => resolve(portfolio))
          .catch(() => {
            optimizationService[weighting](emptyPortfolio, whitelist, null, 0.1)
              .then(portfolio => resolve(portfolio))
              .catch(reject);
          });
      });
  });
}

export function testInvestmentValue(value: unknown) {
  const maxMessage = `Investment must be at least $${Decimal.format(
    MAXIMUM_INVESTMENT
  )}`;
  const errorPath = "preferences";

  if (typeof value === "number") {
    if (value > MAXIMUM_INVESTMENT) {
      throw new Yup.ValidationError(maxMessage, maxMessage, errorPath);
    }
    return true;
  }
  return false;
}

const defaultMinMessage = `Investment must be at least $${Decimal.format(
  MINIMUM_INVESTMENT
)}`;
let currentQuantity = 20;
let minMessage = "";
export const formSchema = Yup.object().shape({
  quality: Yup.string().required(),
  quantity: Yup.number()
    .typeError("Required")
    .required("Required")
    .min(5, "Quantity must be at least 5")
    .max(50, "Quantity must be at most 50"),
  weighting: Yup.string().required(),
  excludedSectors: Yup.array().max(3, "Maximum of 3 sectors"),
  investment: Yup.mixed()
    .required("Required")
    .test(
      "investmentValidation",
      defaultMinMessage,
      (value: unknown) =>
        typeof value === "number" && value >= MINIMUM_INVESTMENT
    )
    .test(
      "investmentMaxValidataion",
      `Investment must be at most $${Decimal.format(MAXIMUM_INVESTMENT)}`,
      (value: unknown) => {
        return typeof value === "number" && value <= MAXIMUM_INVESTMENT;
      }
    )
    .when("quantity", {
      is: value => {
        currentQuantity = value;
        minMessage = `Investment must be at least $${Decimal.format(
          currentQuantity * MINIMUM_DENOMINATION
        )}`;
        return value >= 20;
      },
      then: Yup.mixed().test({
        name: "investmentMinValidataion",
        message: `${minMessage}`,
        test(value: unknown) {
          return typeof value === "number" &&
            value >= currentQuantity * MINIMUM_DENOMINATION
            ? true
            : this.createError({ message: minMessage, path: "investment" });
        }
      })
    })
});

export async function createBestfitPortfolio({
  preferences,
  institutionId
}: {
  preferences: Required<Preferences>;
  institutionId?: string;
}) {
  let whitelist: string[];
  try {
    whitelist = await getWhitelist(preferences, institutionId);
  } catch (error) {
    console.error(error.message);
    whitelist = await getWhitelist(preferences);
  }
  const additionalWhitelist = whitelist.slice(-10);
  const portfolioWhitelist = whitelist.slice(0, preferences.quantity);
  const additionalAssets = await getLiveAssets({
    assetIds: additionalWhitelist
  });
  const portfolio = await getOptimizedPortfolio(
    preferences,
    portfolioWhitelist
  );
  const portfolioWithPrices = new YieldXPortfolio(
    portfolio.asPmsPortfolio(),
    await getLiveAssets({ positions: portfolio.positions })
  );
  portfolioWithPrices.putMetadata("app", AppType.CUSTOM);
  portfolioWithPrices.setId("bestfit");

  const cashflows: CashFlow[] = await portfolioAnalysisService.projectCashflows(
    portfolioWithPrices
  );
  const reviewState: BestFitReviewData = {
    preferences,
    additionalAssets,
    portfolio: portfolioWithPrices,
    cashflows
  };

  return reviewState;
}

export const navSteps = [
  "quality",
  "maturity",
  "weighting",
  "esg",
  "quantity",
  "investment"
];
