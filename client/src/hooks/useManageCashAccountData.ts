import { useSetRecoilState } from "recoil";
import React, { useCallback } from "react";
import { Portfolio } from "@bondhouse/position-management";
import { investmentAmountState } from "services/InvestorService";
import useGetInvestorCashPortfolio from "providers/graphql/hooks/useGetInvestorCashPortfolio";
import {
  CreateFundTransferRequestInput,
  TransferDirection,
  useInvestorGetQuery,
  usePostInvestorPortfolioInternalPortfolioFundTransferMutation
} from "providers/graphql/hooks";

function useManageCashAccountData(investorId: string) {
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

  const [transferPortfolio, setTransferPortfolio] = React.useState<Portfolio>();
  const setAmount = useSetRecoilState(investmentAmountState);

  const [
    postTransfer
  ] = usePostInvestorPortfolioInternalPortfolioFundTransferMutation();

  const onInternalTransfer = useCallback(
    async (direction: TransferDirection, transferAmount: number) => {
      if (!transferPortfolio) throw Error("No portfolio selected for transfer");
      const createFundTransferRequestInput: CreateFundTransferRequestInput = {
        currency: "USD",
        quantity: direction === "DEPOSIT" ? transferAmount : transferAmount * -1
      };
      const cashPosition = transferPortfolio.positions.find(
        position => position.id === "CASH-USD" || position.id === "USD"
      );
      const cashAvailableInPortfolio =
        (cashPosition?.unsettled ?? 0) > 0
          ? cashPosition?.settled ?? 0
          : cashPosition?.quantity ?? 0;
      const addTransfer = cashPortfolio.cashAvailable + transferAmount;
      const subtractTransfer = cashPortfolio.cashAvailable - transferAmount;
      const addTransferPortfolio = cashAvailableInPortfolio + transferAmount;
      const subtractTransferPortfolio =
        cashAvailableInPortfolio - transferAmount;
      const newCashPortfolioUSD =
        direction === "DEPOSIT" ? subtractTransfer : addTransfer;
      const newTransferPortfolioUSD =
        direction === "DEPOSIT"
          ? addTransferPortfolio
          : subtractTransferPortfolio;
      await postTransfer({
        variables: {
          portfolioId: transferPortfolio.id,
          investorId,
          createFundTransferRequestInput
        },
        update(cache) {
          cache.modify({
            id: `Position2:CASH-USD:${cashPortfolio.portfolioId}`,
            fields: {
              settled() {
                return newCashPortfolioUSD;
              },
              quantity() {
                return newCashPortfolioUSD;
              }
            }
          });
          cache.modify({
            id: `Position2:CASH-USD:${transferPortfolio.id}`,
            fields: {
              settled() {
                return newTransferPortfolioUSD;
              },
              quantity() {
                return newTransferPortfolioUSD;
              }
            }
          });
        }
      });
    },
    [investorId, postTransfer, transferPortfolio, cashPortfolio]
  );
  return {
    loading: {
      investorLoading,
      cashInvLoading
    },
    error: {
      cashInvError,
      investorError
    },
    data: {
      cashPortfolio,
      investor,
      livePortfolioIds
    },
    setAmount,
    setTransferPortfolio,
    transferPortfolio,
    onInternalTransfer
  };
}

export default useManageCashAccountData;
