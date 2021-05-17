import {
  CreateOrderRequestInput,
  PortfolioType,
  usePatchPortfolioMutation,
  usePostPortfolioMappingMutation,
  usePostPortfolioOrdersMutation,
  usePostPortfolioOrdersRebalanceMutation
} from "providers/graphql/hooks";
import YieldXPortfolio from "models/YieldXPortfolio";
import {
  useUpdateOrdersCache,
  useUpdateRebalanceCache
} from "providers/graphql/hooks/updateApolloCacheFns";

function useUpdateLivePortfolio(
  ordersToRaise: (CreateOrderRequestInput & { metadata: { yield: number } })[],
  originalPortfolio?: YieldXPortfolio
) {
  const [createOrUpdateProposalMapping] = usePostPortfolioMappingMutation();
  const [createOrder] = usePostPortfolioOrdersMutation();
  const [rebalanceOrders] = usePostPortfolioOrdersRebalanceMutation();
  const [updatePortfolio] = usePatchPortfolioMutation();
  const updateRebalanceCallback = useUpdateRebalanceCache(
    originalPortfolio?.getId()
  );
  const updateOrdersCallback = useUpdateOrdersCache(originalPortfolio?.getId());
  return async function callback(
    name: string,
    selectedPortfolio: YieldXPortfolio
  ) {
    if (!originalPortfolio)
      throw Error("Calling update live with original portfolio undefined");
    const { proposal } = selectedPortfolio.getInpaasData() || {};
    // If it is an InPaaS portfolio, it should update mapping
    if (proposal) {
      await createOrUpdateProposalMapping({
        variables: {
          portfolioId: originalPortfolio.getId(),
          createOrReplacePortfolioMappingRequestInput: {
            proposalId: proposal.proposalId,
            portfolioType: PortfolioType.Live
          }
        },
        update(cache) {
          cache.modify({
            id: `PortfolioMapping2:${originalPortfolio.getId()}`,
            fields: {
              proposalId() {
                return proposal.proposalId;
              }
            }
          });
        }
      });

      await rebalanceOrders({
        variables: {
          portfolioId: originalPortfolio.getId(),
          rebalanceOrdersRequestInput: {
            orders: ordersToRaise
          }
        },
        update: updateRebalanceCallback
      });
    } else
      await Promise.all(
        ordersToRaise.map(it =>
          createOrder({
            variables: {
              portfolioId: originalPortfolio.getId(),
              createOrderRequestInput: it
            },
            update: updateOrdersCallback
          })
        )
      );
    if (name !== originalPortfolio.getName())
      await updatePortfolio({
        variables: {
          id: originalPortfolio.getId(),
          updatePortfolioRequestInput: {
            name
          }
        }
      });
  };
}

export default useUpdateLivePortfolio;
