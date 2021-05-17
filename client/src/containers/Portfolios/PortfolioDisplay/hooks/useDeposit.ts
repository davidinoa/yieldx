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

function useDeposit() {
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

    const addTransferPortfolio = cashAvailableInPortfolio + amount;
    const subtractTransfer = cashAvailable - amount;

    makeTransfer({
      variables: {
        investorId,
        portfolioId: portfolio.getId(),
        createFundTransferRequestInput: {
          quantity: amount,
          currency: "USD"
        }
      },
      update(cache) {
        cache.modify({
          id: `Position2:USD:${portfolio.getId()}`,
          fields: {
            settled() {
              return addTransferPortfolio;
            },
            quantity() {
              return addTransferPortfolio;
            }
          }
        });

        cache.modify({
          id: `Position2:USD:${cashPortfolio.portfolioId}`,
          fields: {
            settled() {
              return subtractTransfer;
            },
            quantity() {
              return subtractTransfer;
            }
          }
        });
      }
    });
  };
}

export default useDeposit;
