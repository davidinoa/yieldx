import {
  Position2,
  useInvestorGetDeliveryInstructionsByIdQuery,
  usePositionManagementGetPortfolioQuery
} from "providers/graphql/hooks";

function useGetInvestorCashPortfolio(investorId?: string) {
  const {
    data: deliveryInstructionsData,
    loading: deliveryInstructionsLoading,
    error: deliveryInstructionsError
  } = useInvestorGetDeliveryInstructionsByIdQuery({
    variables: {
      investorId: investorId ?? ""
    },
    skip: !investorId
  });

  const deliveryInstructions =
    deliveryInstructionsData?.investorGetDeliveryInstructionsById
      ?.deliveryInstructions;
  const cashOnlyPortfolioId = deliveryInstructions?.find(
    instruction => instruction?.cashOnly === true
  )?.portfolioId;

  const {
    data: liveData,
    loading: liveLoading,
    error: liveError
  } = usePositionManagementGetPortfolioQuery({
    variables: {
      id: cashOnlyPortfolioId ?? ""
    },
    skip: !investorId || !cashOnlyPortfolioId
  });
  const portfolio = liveData?.positionManagementGetPortfolio?.portfolio;
  const cashPos = portfolio?.positions.find(
    position => position?.id === "CASH-USD"
  );
  return {
    data: {
      cashPortfolio: {
        portfolioId: portfolio?.id,
        cashPos,
        cashAvailable:
          (cashPos?.unsettled ?? 0) > 0
            ? cashPos?.settled ?? 0
            : cashPos?.quantity ?? 0
      } as {
        cashPos: Position2;
        cashAvailable: number;
        portfolioId: string;
      },
      livePortfolioIds: deliveryInstructions
        ?.filter(it => it?.cashOnly !== true)
        ?.map(it => it?.portfolioId) as string[] | undefined
    },
    loading: liveLoading ?? deliveryInstructionsLoading,
    error: liveError ?? deliveryInstructionsError
  };
}

export default useGetInvestorCashPortfolio;
