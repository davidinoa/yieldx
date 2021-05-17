import {
  AppType2,
  PortfolioType,
  Position2,
  usePositionManagementGetExternalPortfolioQuery,
  usePositionManagementGetPortfolioQuery
} from "providers/graphql/hooks";

import {
  PortfolioType as IncPortfolioType,
  Proposal
} from "@bondhouse/income-portfolios";
import useGetYieldxAssets from "providers/graphql/hooks/useGetYieldxAssets";
import useGetPortfolioProposal from "providers/graphql/hooks/useGetPortfolioProposal";
import YieldXPortfolio from "models/YieldXPortfolio";
import { Portfolio, Position } from "@bondhouse/position-management";
import rfdc from "rfdc";

const clone = rfdc();

interface Params {
  portfolioId?: string;
  portfolioType?: PortfolioType;
}

function useGetYieldxPortfolio({ portfolioId, portfolioType }: Params) {
  const noParams = !portfolioId && !portfolioType;
  const skipLive = Boolean(portfolioType !== PortfolioType.Live || noParams);
  const skipExternal = Boolean(
    portfolioType === PortfolioType.Live || noParams
  );
  const {
    data: liveData,
    loading: liveLoading,
    error: liveError
  } = usePositionManagementGetPortfolioQuery({
    variables: {
      id: portfolioId ?? ""
    },
    skip: skipLive
  });
  const {
    data: externalData,
    loading: externalLoading,
    error: externalError
  } = usePositionManagementGetExternalPortfolioQuery({
    variables: {
      id: portfolioId ?? ""
    },
    skip: skipExternal
  });
  const portfolio =
    externalData?.positionManagementGetExternalPortfolio?.portfolio ??
    liveData?.positionManagementGetPortfolio?.portfolio;
  const assetIds = portfolio?.positions.map(it => it?.assetId);
  const {
    yieldXAssets,
    loading: assetsLoading,
    error: assetsError
  } = useGetYieldxAssets({
    assetIds: assetIds?.filter(it => !!it && it !== "USD") as string[]
  });
  const isInpaas = portfolio?.app === AppType2.Inpaas;
  const {
    proposal,
    loading: proposalLoading,
    error: proposalError
  } = useGetPortfolioProposal({
    variables: {
      portfolioId: portfolioId ?? ""
    },
    skip: !portfolioId || !isInpaas
  });
  const error = liveError || externalError || proposalError || assetsError;
  const loading =
    liveLoading || externalLoading || proposalLoading || assetsLoading;
  if (
    !portfolio ||
    !assetIds ||
    noParams ||
    !yieldXAssets ||
    (isInpaas && !proposal)
  )
    return { loading, error };
  const { positions } = portfolio;
  const aggregatedPositions = positions.reduce<{
    [assetId: string]: Position2;
  }>((acc, curr) => {
    if (!curr) throw Error("Undefined position");
    if (acc[curr.assetId]) acc[curr.assetId].quantity += curr.quantity;
    else acc[curr.assetId] = clone(curr);
    return acc;
  }, {});
  const portfolioWithFixedPositions: Portfolio = {
    ...((portfolio as unknown) as Portfolio),
    positions: Object.values(aggregatedPositions) as Position[]
  };
  if (proposal) {
    return {
      portfolio: new YieldXPortfolio(
        portfolioWithFixedPositions,
        yieldXAssets,
        {
          inpaasData: { proposal: (proposal as unknown) as Proposal },
          portfolioType: (portfolioType as unknown) as IncPortfolioType
        }
      )
    };
  }
  return {
    portfolio: new YieldXPortfolio(portfolioWithFixedPositions, yieldXAssets, {
      portfolioType: (portfolioType as unknown) as IncPortfolioType
    })
  };
}

export default useGetYieldxPortfolio;
