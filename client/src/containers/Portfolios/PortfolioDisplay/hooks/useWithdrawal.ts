import {
  usePostInvestorPortfolioInternalPortfolioFundTransferMutation,
  Position2
} from "providers/graphql/hooks";

import YieldXPortfolio from "models/YieldXPortfolio";

interface Params {
  investorId: string;
  amount: number;
  cashPortfolio: {
    cashPos: Position2;
    cashAvailable: number;
    portfolioId: string;
  };
  portfolio: YieldXPortfolio;
}

function useWithdrawal() {
  const [
    makeTransfer
  ] = usePostInvestorPortfolioInternalPortfolioFundTransferMutation();

  return ({ investorId, amount, portfolio, cashPortfolio }: Params) => {
    const { cashAvailable } = cashPortfolio;
    const cashPosition = portfolio.positions.find(
      position => position.id === "CASH-USD" || position.id === "USD"
    );
    const cashAvailableInPortfolio =
      (cashPosition?.unsettled ?? 0) > 0
        ? cashPosition?.settled ?? 0
        : cashPosition?.quantity ?? 0;

    const addTransfer = cashAvailable + amount;
    const subtractTransferPortfolio = cashAvailableInPortfolio - amount;
    makeTransfer({
      variables: {
        investorId,
        portfolioId: portfolio.getId(),
        createFundTransferRequestInput: {
          quantity: amount * -1,
          currency: "USD"
        }
      },
      update(cache) {
        cache.modify({
          id: `Position2:USD:${portfolio.getId()}`,
          fields: {
            settled() {
              return subtractTransferPortfolio;
            },
            quantity() {
              return subtractTransferPortfolio;
            }
          }
        });

        cache.modify({
          id: `Position2:USD:${cashPortfolio.portfolioId}`,
          fields: {
            settled() {
              return addTransfer;
            },
            quantity() {
              return addTransfer;
            }
          }
        });
      }
    });
  };
}

export default useWithdrawal;
