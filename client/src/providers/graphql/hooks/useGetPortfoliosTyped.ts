import {
  useIamGetCurrentUserQuery,
  usePositionManagementGetExternalPortfoliosQuery,
  usePositionManagementGetPortfoliosQuery,
  Policy
} from "providers/graphql/hooks";
import getPortfolioTypeMap from "providers/graphql/hooks/util/getPortfolioTypeMap";

function useGetPortfoliosTyped() {
  const {
    data: userData,
    loading: userLoading,
    error: userError
  } = useIamGetCurrentUserQuery();
  const {
    data: liveData,
    loading: liveLoading,
    error: liveError
  } = usePositionManagementGetPortfoliosQuery();
  const {
    data: externalData,
    loading: externalLoading,
    error: externalError
  } = usePositionManagementGetExternalPortfoliosQuery();
  const policies = userData?.iamGetCurrentUser?.user.policies;
  const livePortfolios = liveData?.positionManagementGetPortfolios?.portfolios?.filter(
    it => it?.name !== "CASH_ONLY_PORTFOLIO"
  );
  const portfolios = livePortfolios?.concat(
    externalData?.positionManagementGetExternalPortfolios?.portfolios ?? []
  );
  const typeMap = getPortfolioTypeMap((policies as Array<Policy>) ?? []);
  return {
    loading: liveLoading || userLoading || externalLoading,
    error: liveError || externalError || userError,
    portfolios: portfolios?.map(portfolio => {
      return {
        portfolio,
        portfolioType: typeMap[portfolio?.id ?? ""]
      };
    })
  };
}

export default useGetPortfoliosTyped;
