import { Order2, OrderStatus } from "providers/graphql/hooks";

export function getHasPendingBuyOrders(orders: Array<Order2>) {
  const hasOpenBuyOrders = !!orders?.filter(
    it => it?.status === OrderStatus.Open && it.quantity > 0
  )?.length;
  const hasExecutingBuyOrders = !!orders?.filter(
    it => it?.status === OrderStatus.Executing && it.quantity > 0
  )?.length;
  const hasStagedBuyOrders = !!orders?.filter(
    it => it?.status?.toString() === "STAGED" && it.quantity > 0
  ).length;
  return hasOpenBuyOrders || hasExecutingBuyOrders || hasStagedBuyOrders;
}
