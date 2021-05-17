/**
 * Takes array of policies and uses regex to match portfolioId's with their type (LIVE or EXTERNAL)
 */
import { Policy, PortfolioType } from "providers/graphql/hooks";

const liveRegex = /^\/apis\/position-management\/v1\/portfolios\/(.*)\*$/;
const externalRegex = /^\/apis\/position-management\/v1\/external-portfolios\/(.*)\*$/;

function getPortfolioTypeMap(policies: Array<Policy>) {
  return policies.reduce<{
    [portfolioId: string]: PortfolioType;
  }>((acc, { resource }) => {
    if (resource.includes("model")) {
      return acc;
    }
    const liveMatch = liveRegex.exec(resource);
    const externalMatch = externalRegex.exec(resource);

    if (liveMatch !== null && liveMatch.length === 2)
      return {
        ...acc,
        [liveMatch[1]]: PortfolioType.Live
      };

    if (externalMatch !== null && externalMatch.length === 2)
      return {
        ...acc,
        [externalMatch[1]]: PortfolioType.External
      };
    return acc;
  }, {});
}

export default getPortfolioTypeMap;
