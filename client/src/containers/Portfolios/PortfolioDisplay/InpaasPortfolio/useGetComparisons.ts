import { Analysis } from "@bondhouse/rover-portfolio-analyzer";
import { useIncomePortfoliosGetComparisonsQuery } from "providers/graphql/hooks";

function useGetComparisons(analysis?: Analysis | null) {
  const { data, loading, error } = useIncomePortfoliosGetComparisonsQuery({
    variables: {
      getComparisonsRequestInput: {
        portfolioAnalyzerAnalysis: {
          // allocations: analysis?.allocations,
          createdAt: analysis?.createdAt || "",
          currentCoupon: analysis?.currentCoupon,
          duration: analysis?.duration,
          estimatedPerformance: {
            endDate: analysis?.estimatedPerformance?.endDate || "",
            startDate: analysis?.estimatedPerformance?.startDate || "",
            timeSeries: [],
            estimatedMaximumDrawdown: {
              endDate:
                analysis?.estimatedPerformance?.estimatedMaximumDrawdown
                  .endDate || "",
              startDate:
                analysis?.estimatedPerformance?.estimatedMaximumDrawdown
                  .startDate || "",
              value:
                analysis?.estimatedPerformance?.estimatedMaximumDrawdown
                  .value || 0
            }
          },
          expenseRatio: analysis?.expenseRatio,
          id: analysis?.id || "",
          issuerConcentration: analysis?.issuerConcentration,
          // @ts-expect-error
          yield: analysis?.yield,
          yearsToMaturity: analysis?.yearsToMaturity,
          updatedAt: analysis?.updatedAt || "",
          risk: analysis?.risk,
          portfolioId: analysis?.portfolioId || "",
          netAssetValue: analysis?.netAssetValue,
          metadata: analysis?.metadata
        }
      }
    },
    skip: !analysis
  });

  return {
    loading,
    data: data?.incomePortfoliosGetComparisons,
    error
  };
}

export default useGetComparisons;
