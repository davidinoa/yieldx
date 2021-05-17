import {
  AppType2,
  CreateOrderRequestInput,
  Investor,
  PortfolioType,
  usePostInvestorPortfolioInternalPortfolioFundTransferMutation,
  usePostInvestorPortfoliosMutation,
  usePostPortfolioMappingMutation,
  usePostPortfolioOrdersMutation
} from "providers/graphql/hooks";
import YieldXPortfolio from "models/YieldXPortfolio";

function useExecuteLivePortfolio(
  ordersToRaise: (CreateOrderRequestInput & { metadata: { yield: number } })[]
) {
  const [createPortfolioForInvestor] = usePostInvestorPortfoliosMutation();
  const [createOrUpdateProposalMapping] = usePostPortfolioMappingMutation();
  const [
    internalPortfolioFundTransfer
  ] = usePostInvestorPortfolioInternalPortfolioFundTransferMutation();
  const [createOrder] = usePostPortfolioOrdersMutation();

  return async function callback(
    name: string,
    selectedPortfolio: YieldXPortfolio,
    selectedInvestor: Investor
  ) {
    const { proposal } = selectedPortfolio.getInpaasData() || {};

    // First create blank live portfolio for investor (Should map delivery instructions)
    const { data } = await createPortfolioForInvestor({
      variables: {
        investorId: selectedInvestor.id,
        createPortfolioRequestInput: {
          currency: "USD",
          name,
          app: proposal === undefined ? AppType2.Custom : AppType2.Inpaas
        }
      }
    });
    const portfolio = data?.postInvestorPortfolios?.portfolio;
    if (!portfolio) throw Error("Portfolio was not created properly");
    // If it is an InPaaS portfolio, it should create the mapping
    if (proposal)
      await createOrUpdateProposalMapping({
        variables: {
          portfolioId: portfolio.id,
          createOrReplacePortfolioMappingRequestInput: {
            proposalId: proposal.proposalId,
            portfolioType: PortfolioType.Live
          }
        }
      });

    // Internal portfolio fund transfer
    await internalPortfolioFundTransfer({
      variables: {
        investorId: selectedInvestor.id,
        portfolioId: portfolio.id,
        createFundTransferRequestInput: {
          currency: "USD",
          quantity: selectedPortfolio.totalMarketValue
        }
      }
    });

    await Promise.all(
      ordersToRaise.map(it =>
        createOrder({
          variables: {
            portfolioId: portfolio.id,
            createOrderRequestInput: it
          }
        })
      )
    );
    return portfolio;
  };
}

export default useExecuteLivePortfolio;
