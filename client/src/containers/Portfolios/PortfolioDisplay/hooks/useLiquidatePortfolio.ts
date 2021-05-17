import {
  Direction2,
  Order2,
  OrderManagementGetOrderDocument,
  OrderStatus,
  PortfolioStatus,
  usePatchPortfolioMutation,
  usePostPortfolioOrdersMutation
} from "providers/graphql/hooks";

import YieldXPortfolio from "models/YieldXPortfolio";
import useCancelOrder from "containers/Portfolios/PortfolioDisplay/hooks/useCancelOrder";

function useLiquidatePortfolio() {
  const [updatePortfolio] = usePatchPortfolioMutation();
  const [postOrder] = usePostPortfolioOrdersMutation();
  const cancelOrder = useCancelOrder();

  return async (portfolio: YieldXPortfolio, orders: Array<Order2>) => {
    orders.forEach(order => {
      const { id: orderId, status } = order ?? {};
      if (!orderId) throw Error("No order ID");
      if (status === OrderStatus.Executing)
        throw Error("Cannot liquidate portfolio with executing orders");
      if (status === OrderStatus.Open) cancelOrder(orderId, portfolio.getId());
    });
    const referencePricesList =
      portfolio?.positions?.map(it => it.asset.lastPrice) ?? [];
    const referencePricesMap = referencePricesList.reduce<{
      [assetId: string]: number | null;
    }>((acc, cv, i) => {
      acc[portfolio?.positions[i]?.assetId ?? ""] = !cv ? null : cv;
      return acc;
    }, {});
    await Promise.all(
      portfolio.positions.map(position =>
        postOrder({
          variables: {
            portfolioId: portfolio.getId(),
            createOrderRequestInput: {
              assetId: position.assetId,
              quantity: position.quantity,
              goodTillCancel: true,
              direction: Direction2.Sell,
              priceLimit: (position.asset?.price ?? 1) * 0.98,
              spotPrice:
                referencePricesMap[position.assetId] ??
                position.asset.price ??
                undefined
            }
          },
          update(cache, { data }) {
            const newOrder = data?.postPortfolioOrders?.order;
            if (newOrder)
              cache.writeQuery({
                data: newOrder,
                query: OrderManagementGetOrderDocument,
                variables: {
                  id: newOrder.id,
                  portfolioId: newOrder.portfolioId
                }
              });
          }
        })
      )
    );

    await updatePortfolio({
      variables: {
        id: portfolio.getId(),
        updatePortfolioRequestInput: {
          status: PortfolioStatus.Terminated
        }
      },
      update(cache) {
        cache.modify({
          id: `Portfolio3:${portfolio.getId()}`,
          fields: {
            status() {
              return PortfolioStatus.Terminated;
            }
          }
        });
      }
    });
  };
}

export default useLiquidatePortfolio;
