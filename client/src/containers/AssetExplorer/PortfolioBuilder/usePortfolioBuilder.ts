import { useRecoilValue } from "recoil";
import { Dispatch, SetStateAction, useEffect, useState } from "react";
import { useHistory } from "react-router";
import { ColumnApi, GridApi } from "@ag-grid-community/core";
import { Analysis } from "@bondhouse/rover-portfolio-analyzer";
import { useLocation } from "react-router-dom";
import { yieldXPortfolioSelector } from "recoil-state/getProposalWithPortfolioId";
import { portfolioCreateOrEditState } from "recoil-state/portfolioCreateOrEditState";
import YieldXPortfolio from "models/YieldXPortfolio";
import usdCash from "util/usdCash";
import parsePortfolioQuery from "util/parsePortfolioQuery";
import { meetsMinimumInvestmentToBuyAll } from "./util/minimumInvestment";
import { analyzePortfolio } from "./util/analysis";
import { optimize } from "./util/optimization";

export const emptyAnalysis: Analysis = {
  // eslint-disable-next-line @typescript-eslint/ban-ts-comment
  // @ts-ignore
  yield: 0,
  risk: 0
};

export const usePortfolioBuilder = (
  portfolio: YieldXPortfolio,
  setPortfolio: Dispatch<SetStateAction<YieldXPortfolio | undefined>>
) => {
  const { search, pathname } = useLocation();
  const editPortfolioQueryParams = parsePortfolioQuery(search);
  const [investmentAmount, setInvestmentAmount] = useState<number>(
    portfolio.totalMarketValue ?? 0
  );
  const originalPortfolio = useRecoilValue(
    yieldXPortfolioSelector(editPortfolioQueryParams)
  );
  const portfolioData = useRecoilValue(portfolioCreateOrEditState);

  const history = useHistory();
  const [gridApi, setGridApi] = useState<GridApi>();
  const [columnApi, setColumnApi] = useState<ColumnApi>();
  useEffect(() => {
    setPortfolio(prev => {
      if (prev && investmentAmount !== prev.totalMarketValue) {
        const cashDifference = (investmentAmount ?? 0) - prev.totalMarketValue;
        const copy = prev.clone();
        copy.addCash(cashDifference);
        copy.refreshWeights();
        return copy;
      }
      return prev;
    });
    gridApi?.refreshCells();
  }, [investmentAmount, setPortfolio, gridApi]);
  const [analysis, setAnalysis] = useState<Analysis | undefined>(
    portfolioData.originalAnalysis ??
      portfolioData.currentAnalysis ??
      portfolio.cashMarketValue !== portfolio.totalMarketValue
      ? undefined
      : emptyAnalysis
  );
  const [errorMessage, setErrorMessage] = useState<string>();
  const [showOptions, setShowOptions] = useState(false);
  const [optimizing, setOptimizing] = useState(false);

  // Analyze the portfolio when it changes
  useEffect(() => {
    if (!analysis) {
      if (portfolio.totalMarketValue === 0) {
        setAnalysis(emptyAnalysis);
      } else {
        analyzePortfolio(portfolio, setAnalysis);
      }
    }
  }, [analysis, portfolio]);

  // Hide optimization options if investment amount drops below the minimum.
  const validated =
    meetsMinimumInvestmentToBuyAll(portfolio) && portfolio.cashMarketValue >= 0;
  // Show optimizer options
  useEffect(() => {
    if (!validated && showOptions) {
      setShowOptions(false);
    }
  }, [validated, showOptions]);

  useEffect(() => {
    const handle = setTimeout(() => {
      setErrorMessage(undefined);
    }, 10000);
    return () => clearTimeout(handle);
  }, [errorMessage]);

  return {
    validated,
    history,
    analysis,
    setShowOptions,
    showOptions,
    optimizing,
    setAnalysis,
    setGridApi,
    setColumnApi,
    columnApi,
    gridApi,
    errorMessage,
    originalPortfolio,
    pathname,
    search: editPortfolioQueryParams === null ? null : search,
    setInvestmentAmount,
    investmentAmount,
    handleOptimizationSelection: (
      objective: "maximizeYield" | "minimizeRisk" | "minimizeConcentration",
      weightRange: { min: number; max: number } | null
    ) => {
      gridApi?.showLoadingOverlay();
      setOptimizing(true);
      const cashPmsPortfolio = portfolio.asPmsPortfolio();
      cashPmsPortfolio.positions = [
        {
          id: "USD",
          assetId: "USD",
          quantity: portfolio.totalMarketValue,
          portfolioId: portfolio.getId()
        }
      ];
      const cashPortfolio = new YieldXPortfolio(cashPmsPortfolio, [usdCash]);
      const whitelist = portfolio.getAssetIds();
      optimize(cashPortfolio, whitelist, objective, weightRange)
        .then((optimizedPortfolio: YieldXPortfolio) => {
          // Rather than using the optimized portfolio directly, this ensures we preserve existing positions even if
          // their new quantity will be 0
          const nextPortfolio = portfolio.clone();
          nextPortfolio.overwriteWith(optimizedPortfolio);
          setPortfolio(nextPortfolio);

          gridApi?.refreshCells();
          setAnalysis(undefined);
        })
        .catch(_reason => {
          console.error(_reason);
          setErrorMessage(
            "Optimization failed. Try increasing the investment amount or widening the allocation range."
          );
        })
        .finally(() => {
          setOptimizing(false);
          gridApi?.hideOverlay();
        });
    }
  };
};
