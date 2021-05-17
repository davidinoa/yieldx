import {
  OrderStatus,
  usePatchPortfolioOrderCancelMutation
} from "providers/graphql/hooks";

function useCancelOrder() {
  const [cancelOrder] = usePatchPortfolioOrderCancelMutation();
  return (id: string, portfolioId: string) =>
    cancelOrder({
      variables: {
        id,
        portfolioId,
        cancelOrderRequestInput: {}
      },
      update(cache) {
        cache.modify({
          id: `Order2:${id}`,
          fields: {
            status() {
              return OrderStatus.Canceled;
            }
          }
        });
      }
    });
}

export default useCancelOrder;
