import { AppType } from "@bondhouse/position-management";
import { PortfolioType } from "@bondhouse/income-portfolios";
import { atomFamily, selectorFamily } from "recoil";
import YieldXPortfolio from "models/YieldXPortfolio";
import {
  getPortfolioState,
  getProposalByPortfolioId
} from "recoil-state/portfoliosApi";
import getLiveAssets from "util/getLiveAssets";

export const getProposalWithPortfolioId = atomFamily({
  key: "getProposalWithPortfolioId",
  default: selectorFamily({
    key: "getProposalWithPortfolioId/Default",
    get: (portfolioId: string) => () => getProposalByPortfolioId(portfolioId)
  })
});
/**
 * Takes portfolioType and portfolioId
 * returns YieldXPortfolio
 */

export const yieldXPortfolioSelector = atomFamily({
  key: "yieldXPortfolioSelector",
  default: selectorFamily({
    key: "yieldXPortfolioSelector/default",
    get: (
      params: {
        portfolioId: string;
        portfolioType: PortfolioType;
      } | null
    ) => async ({ get }) => {
      if (params === null) return null;
      const { portfolioId, portfolioType } = params;
      const portfolio = get(getPortfolioState({ portfolioType, portfolioId }));
      if (portfolio === undefined) return null;
      if (portfolioType === PortfolioType.LIVE) {
        const pmsPortfolio = portfolio.portfolio;
        const assets = await getLiveAssets({
          positions: portfolio.portfolio.positions
        });
        if (portfolio.portfolio.app === AppType.INPAAS) {
          const proposal = get(getProposalWithPortfolioId(portfolioId));
          return new YieldXPortfolio(pmsPortfolio, assets, {
            inpaasData: { proposal },
            portfolioType
          });
        }
        return new YieldXPortfolio(pmsPortfolio, assets, { portfolioType });
      }
      const assets = await getLiveAssets({
        positions: portfolio.portfolio.positions
      });
      if (portfolio.portfolio.app === AppType.INPAAS) {
        const proposal = get(getProposalWithPortfolioId(portfolioId));
        return new YieldXPortfolio(portfolio.portfolio, assets, {
          inpaasData: { proposal },
          portfolioType
        });
      }
      return new YieldXPortfolio(portfolio.portfolio, assets, {
        portfolioType
      });
    }
  })
});
