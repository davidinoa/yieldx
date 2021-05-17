import {
  useIncomePortfoliosGetPortfolioMappingQuery,
  useIncomePortfoliosGetProposalQuery
} from "providers/graphql/hooks";

interface GetPortfolioProposalOptions {
  variables: {
    portfolioId: string;
  };
  skip?: boolean;
}

function useGetPortfolioProposal({
  variables: { portfolioId },
  skip = false
}: GetPortfolioProposalOptions) {
  const {
    data: portfolioMappingData,
    loading: portfolioMappingLoading,
    error: portfolioMappingError
  } = useIncomePortfoliosGetPortfolioMappingQuery({
    variables: {
      portfolioId
    },
    skip
  });
  const { proposalId } =
    portfolioMappingData?.incomePortfoliosGetPortfolioMapping
      ?.portfolioMapping ?? {};

  const {
    data: proposalData,
    loading: proposalLoading,
    error: proposalError
  } = useIncomePortfoliosGetProposalQuery({
    variables: {
      proposalId: proposalId ?? ""
    },
    skip: !proposalId
  });

  const proposal = proposalData?.incomePortfoliosGetProposal?.proposal;
  return {
    proposal,
    loading: proposalLoading || portfolioMappingLoading,
    error: proposalError || portfolioMappingError
  };
}

export default useGetPortfolioProposal;
