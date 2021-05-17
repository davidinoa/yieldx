import {
  LinkedBankAccount,
  Portfolio3,
  useApexGetAccountByInvestorIdQuery,
  useInvestorGetLinkedBankAccountsQuery,
  useInvestorGetQuery,
  usePositionManagementGetPortfoliosQuery
} from "providers/graphql/hooks";
import useGetInvestorCashPortfolio from "providers/graphql/hooks/useGetInvestorCashPortfolio";
import arrayToHashMap from "util/arrayToHashMap";
import { useAnalyzePortfolios } from "providers/graphql/hooks/useAnalyzePortfolios";

function useAccountSectionData(investorId: string) {
  const {
    data: investorData,
    loading: investorLoading,
    error: investorError
  } = useInvestorGetQuery({
    variables: {
      investorId
    }
  });
  const investor = investorData?.investorGet?.investor;
  const {
    loading: cashInvLoading,
    error: cashInvError,
    data: { cashPortfolio, livePortfolioIds }
  } = useGetInvestorCashPortfolio(investor?.id);
  const {
    data: apexData,
    loading: apexLoading,
    error: apexError
  } = useApexGetAccountByInvestorIdQuery({
    variables: {
      investorId: investor?.id || ""
    },
    skip: !investor?.id
  });
  const apexAccount = apexData?.apexGetAccountByInvestorId?.apexAccount;
  const {
    data: bankData,
    error: bankError,
    loading: bankLoading
  } = useInvestorGetLinkedBankAccountsQuery({
    variables: {
      investorId: investor?.id || ""
    },
    skip: !investor?.id
  });
  const bankAccounts = bankData?.investorGetLinkedBankAccounts?.linkedBankAccounts.filter(
    it => !!it
  ) as LinkedBankAccount[] | undefined;

  const {
    data: liveData,
    loading: liveLoading,
    error: liveError
  } = usePositionManagementGetPortfoliosQuery();

  const livePortfolios = liveData?.positionManagementGetPortfolios?.portfolios;
  const portfolioLookup = livePortfolioIds
    ? arrayToHashMap(livePortfolioIds)
    : null;
  const portfolios = livePortfolios?.reduce<Portfolio3[]>((acc, cv) => {
    if (portfolioLookup && cv && portfolioLookup[cv.id] !== undefined)
      acc.push(cv);
    return acc;
  }, []);

  const valueOfPortfoliosWithOnlyCashPosition =
    portfolios
      ?.filter(
        it => it.positions.length === 1 && it.positions[0]?.id === "CASH-USD"
      )
      ?.reduce((acc, cv) => acc + (cv.positions[0]?.settled || 0), 0) ?? 0;

  const portfoliosWithAssets = portfolios?.filter(
    it => it.positions.length > 1
  );
  const {
    data: analysisArr,
    error: analysisError,
    loading: analysisLoading
  } = useAnalyzePortfolios(portfoliosWithAssets);
  const aum =
    valueOfPortfoliosWithOnlyCashPosition +
    analysisArr.reduce((acc, cv) => acc + (cv?.netAssetValue || 0), 0);
  return {
    aum,
    loading: {
      analysisLoading,
      cashInvLoading,
      apexLoading,
      portfoliosLoading: liveLoading,
      bankLoading,
      investorLoading
    },
    error: {
      analysisError,
      cashInvError,
      portfolioError: liveError,
      apexError,
      investorError,
      bankError
    },
    data: {
      apexAccount,
      cashPortfolio,
      portfolios,
      investor,
      analysisArr,
      bankAccounts
    }
  };
}

export default useAccountSectionData;
