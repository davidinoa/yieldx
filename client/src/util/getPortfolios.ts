import {
  ExternalPortfolioApi,
  Portfolio,
  PortfoliosApi
} from "@bondhouse/position-management";
import {
  InvestorsApi,
  PortfolioDeliveryInstructionsApi
} from "@bondhouse/investor";
import { userService } from "services";

const portfoliosService = new PortfoliosApi();
const externalPortfolioApi = new ExternalPortfolioApi();
const portfolioDeliveryInstructionsApi = new PortfolioDeliveryInstructionsApi();
const investorsApi = new InvestorsApi();

const liveRegex = /^\/apis\/position-management\/v1\/portfolios\/(.*)\*$/;
const externalRegex = /^\/apis\/position-management\/v1\/external-portfolios\/(.*)\*$/;
async function getPortfolioIds() {
  const user = await userService.getUser();
  const { policies = [] } = user;
  return policies.reduce<{ externalIds: string[]; liveIds: string[] }>(
    (acc, { resource }) => {
      const liveMatch = liveRegex.exec(resource);
      const externalMatch = externalRegex.exec(resource);
      if (liveMatch !== null && liveMatch.length === 2)
        acc.liveIds.push(liveMatch[1]);
      else if (externalMatch !== null && externalMatch.length === 2)
        acc.externalIds.push(externalMatch[1]);
      return acc;
    },
    {
      externalIds: [],
      liveIds: []
    }
  );
}

export default async function getPortfolios() {
  const { liveIds, externalIds } = await getPortfolioIds();
  const liveRequests = liveIds.map(function getPortfolio(id) {
    return portfoliosService.getPortfolio(id);
  });

  const externalRequests = externalIds.map(id =>
    externalPortfolioApi.getExternalPortfolio(id).catch(() => undefined)
  );

  const deliveryRequest = liveIds.map(function getDelivery(id) {
    return portfolioDeliveryInstructionsApi
      .getPortfolioDeliveryInstruction(id)
      .catch(() => undefined);
  });
  const liveResponses = await Promise.all(liveRequests);
  const livePortfolios = liveResponses.map(response => response.data.portfolio);

  const externalResponses = await Promise.all(externalRequests);
  const externalPortfolios = externalResponses
    .map(response => (response ? response.data.portfolio : undefined))
    .filter(cv => cv !== undefined) as Portfolio[];

  const deliveryResp = await Promise.all(deliveryRequest);
  const deliveries = deliveryResp.map(response =>
    response ? response.data.portfolioDeliveryInstruction : undefined
  );
  const investorsRequest = deliveries.map(function getInvestor(data) {
    if (!data) return Promise.resolve(undefined);
    return investorsApi.getInvestor(data.investorId).catch(() => undefined);
  });
  const investorsResp = await Promise.all(investorsRequest);
  const investors = investorsResp.map(resp =>
    resp ? resp.data.investor : undefined
  );
  return { livePortfolios, investors, externalPortfolios };
}
