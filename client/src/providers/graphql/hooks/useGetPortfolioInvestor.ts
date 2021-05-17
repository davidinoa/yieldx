import {
  useInvestorGetQuery,
  useInvestorGetPortfolioDeliveryInstructionQuery
} from "providers/graphql/hooks";

function useGetPortfolioInvestor(portfolioId: string, skip = false) {
  const {
    data: deliveryInstructionsData,
    loading: deliveryInstructionsLoading,
    error: deliveryInstructionsError
  } = useInvestorGetPortfolioDeliveryInstructionQuery({
    variables: {
      portfolioId
    },
    skip
  });
  const { investorId } =
    deliveryInstructionsData?.investorGetPortfolioDeliveryInstruction
      ?.portfolioDeliveryInstruction ?? {};

  const {
    data: investorData,
    loading: investorLoading,
    error: investorError
  } = useInvestorGetQuery({
    variables: {
      investorId: investorId ?? ""
    },
    skip: !investorId
  });
  const investor = investorData?.investorGet?.investor;
  const loading = investorLoading ?? deliveryInstructionsLoading;
  const error = investorError ?? deliveryInstructionsError;

  return {
    investor,
    loading,
    error
  };
}

export default useGetPortfolioInvestor;
