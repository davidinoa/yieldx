import {
  ExternalPortfolioApi,
  Portfolio,
  PortfoliosApi
} from "@bondhouse/position-management";
import {
  Analysis,
  PortfolioAnalyzerApi
} from "@bondhouse/rover-portfolio-analyzer";
import {
  PortfolioMappingsApi,
  PortfolioType,
  ProposalsApi
} from "@bondhouse/income-portfolios";
import { PortfolioDeliveryInstructionsApi } from "@bondhouse/investor";
import { atomFamily, selector, selectorFamily } from "recoil";
import { userState } from "services/userState";
import samplePortfolio from "util/samplePortfolio";
import { getInvestorSelector } from "services/InvestorService";

export const portfoliosApi = new PortfoliosApi();
const portfolioAnalyzerApi = new PortfolioAnalyzerApi();
const externalPortfolioApi = new ExternalPortfolioApi();
export const portfolioMappingsApi = new PortfolioMappingsApi();
export const proposalsApi = new ProposalsApi();
const portfolioDeliveryInstructionsApi = new PortfolioDeliveryInstructionsApi();

export const liveRegex = /^\/apis\/position-management\/v1\/portfolios\/(.*)\*$/;
export const externalRegex = /^\/apis\/position-management\/v1\/external-portfolios\/(.*)\*$/;

export type PortfolioTypeMapping = {
  portfolioId: string;
  portfolioType: PortfolioType;
};

export const getProposalByPortfolioId = async (portfolioId: string) => {
  const {
    data: {
      portfolioMapping: { proposalId }
    }
  } = await portfolioMappingsApi.getPortfolioMapping(portfolioId);
  const {
    data: { proposal }
  } = await proposalsApi.getProposal(proposalId);
  return proposal;
};

export const getPortfolioIds = selector<{
  [portfolioId: string]: PortfolioTypeMapping;
}>({
  key: "getPortfolioIds",
  get: ({ get }) => {
    const { policies = [] } = get(userState);
    return policies.reduce<{
      [portfolioId: string]: PortfolioTypeMapping;
    }>((acc, { resource }) => {
      if (resource.includes("model")) {
        return acc;
      }
      const liveMatch = liveRegex.exec(resource);
      const externalMatch = externalRegex.exec(resource);

      if (liveMatch !== null && liveMatch.length === 2)
        return {
          ...acc,
          [liveMatch[1]]: {
            portfolioId: liveMatch[1],
            portfolioType: PortfolioType.LIVE
          }
        };

      if (externalMatch !== null && externalMatch.length === 2)
        return {
          ...acc,
          [externalMatch[1]]: {
            portfolioId: externalMatch[1],
            portfolioType: PortfolioType.EXTERNAL
          }
        };
      return acc;
    }, {});
  },
  set: ({ set }, newVal) => {
    const toArray = Object.values(newVal);
    if (newVal && Array.isArray(toArray) && toArray.length > 0) {
      set(userState, prev => ({
        ...prev,
        policies: [
          ...(prev.policies || []),
          ...toArray.map(({ portfolioId, portfolioType }) => {
            if (portfolioType === PortfolioType.LIVE)
              return {
                resource: `/apis/position-management/v1/portfolios/${portfolioId}*`,
                actions: ["*"]
              };
            return {
              resource: `/apis/position-management/v1/external-portfolios/${portfolioId}*`,
              actions: ["*"]
            };
          })
        ]
      }));
    }
  }
});

export const getDeliveryInstructionSelector = selectorFamily({
  key: "getDeliveryInstructionSelector",
  get: (portfolioId: string) => async () => {
    const {
      data: { portfolioDeliveryInstruction }
    } = await portfolioDeliveryInstructionsApi.getPortfolioDeliveryInstruction(
      portfolioId
    );
    return portfolioDeliveryInstruction;
  }
});

export const getPortfolioInvestor = selectorFamily({
  key: "getPortfolioInvestor",
  get: (liveId: string) => ({ get }) => {
    const deliveryInstructions = get(getDeliveryInstructionSelector(liveId));
    return get(getInvestorSelector(deliveryInstructions.investorId));
  }
});

export const getPortfolioState = atomFamily({
  key: "getPortfolioState",
  default: selectorFamily<
    { portfolio: Portfolio; portfolioType: PortfolioType } | undefined,
    { portfolioId: string; portfolioType: PortfolioType }
  >({
    key: "getPortfolioState/Default",
    get: ({ portfolioId, portfolioType }) => async () => {
      try {
        if (portfolioType === PortfolioType.EXTERNAL) {
          const { data } = await externalPortfolioApi.getExternalPortfolio(
            portfolioId
          );
          return {
            portfolio: data.portfolio,
            portfolioType: PortfolioType.EXTERNAL
          };
        }
        const { data } = await portfoliosApi.getPortfolio(portfolioId);
        return { portfolio: data.portfolio, portfolioType: PortfolioType.LIVE };
      } catch (e) {
        return undefined;
      }
    }
  })
});

export const analyzeSleeve = selectorFamily<
  Analysis,
  {
    drawDown: boolean;
    posData: Array<{
      id: string;
      assetId: string;
      quantity: number;
      portfolioId: string;
    }>;
  }
>({
  key: "analyzeSleeve",
  get: ({ posData, drawDown }) => async () => {
    try {
      const {
        data: { analysis }
      } = await portfolioAnalyzerApi.analyzePortfolio(drawDown, undefined, {
        portfolio: {
          ...samplePortfolio,
          positions: posData.map(({ id, assetId, quantity, portfolioId }) => ({
            id,
            portfolioId,
            quantity,
            assetId
          }))
        }
      });
      return analysis;
    } catch (error) {
      throw new Error(error);
    }
  }
});
