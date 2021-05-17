import { ApolloQueryResult, useApolloClient } from "@apollo/client";
import {
  AnalyzePortfolioResponse,
  Portfolio3,
  RoverPortfolioAnalyzerAnalyzePortfolioDocument,
  RoverPortfolioAnalyzerAnalyzePortfolioQueryVariables
} from "./index";
import { useEffect, useState } from "react";
import toInputPortfolio from "util/toInputPortfolio";

export function useAnalyzePortfolios(portfolios?: Portfolio3[]) {
  const client = useApolloClient();
  const [analysisArr, setAnalysis] = useState<
    Array<
      ApolloQueryResult<{
        roverPortfolioAnalyzerAnalyzePortfolio?:
          | AnalyzePortfolioResponse
          | undefined;
      }>
    >
  >();
  const [fetchedTimes, setFetched] = useState(0);
  useEffect(() => {
    if (portfolios && portfolios.length > 0 && fetchedTimes === 0) {
      const promises = portfolios.map(portfolio =>
        client.query<
          {
            roverPortfolioAnalyzerAnalyzePortfolio?: AnalyzePortfolioResponse;
          },
          RoverPortfolioAnalyzerAnalyzePortfolioQueryVariables
        >({
          query: RoverPortfolioAnalyzerAnalyzePortfolioDocument,
          variables: {
            analyzePortfolioRequestInput: {
              portfolio: toInputPortfolio(portfolio)
            }
          }
        })
      );
      Promise.all(promises).then(datas => {
        if (datas) setAnalysis(datas);
      });
      setFetched(prev => prev + 1);
    }
  }, [setFetched, portfolios, client, fetchedTimes]);
  const loading = !portfolios?.length
    ? false
    : !analysisArr || analysisArr?.some(it => it.loading);
  const error = analysisArr?.find(it => it.error);
  return {
    loading,
    data:
      analysisArr?.map(
        it => it.data.roverPortfolioAnalyzerAnalyzePortfolio?.analysis
      ) ?? [],
    error
  };
}
