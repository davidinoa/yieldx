import { SetterOrUpdater } from "recoil";
import { Order, OrderStatus, OrdersApi } from "@bondhouse/order-management";

export default class OrdersService {
  private ordersApi: OrdersApi;

  private readonly orders: Record<string, Order[]>;

  constructor(orders?: Order[]) {
    this.ordersApi = new OrdersApi();
    this.orders =
      orders && orders[0] ? { [orders[0].portfolioId]: orders } : {};
  }

  async cancelOrder({
    orderId,
    portfolioId,
    updateOrders
  }: {
    orderId: string;
    portfolioId: string;
    updateOrders: SetterOrUpdater<Order[] | undefined>;
  }) {
    let updatedOrders: Order[] = [];
    try {
      await this.ordersApi.cancelOrder(portfolioId, orderId);
      updateOrders((prev = []) => {
        const oldOrder = prev.find(cv => cv.id === orderId);
        const updatedOrder = oldOrder
          ? {
              ...oldOrder,
              status: OrderStatus.CANCELED
            }
          : undefined;
        if (updatedOrder === undefined)
          throw Error("Deleted order is undefined");

        const newOrders = [
          updatedOrder,
          ...prev.filter(cv => cv.id !== orderId)
        ];

        updatedOrders = newOrders;
        return updatedOrders;
      });
    } catch (error) {
      throw Error(error);
    }
    return updatedOrders;
  }

  save(portfolioId: string, orders: Order[]) {
    this.orders[portfolioId] = orders;
  }

  getAllByStatus(status: OrderStatus, portfolioId: string) {
    if (this.orders[portfolioId]) {
      return this.orders[portfolioId].filter(order => order.status === status);
    }
    return [];
  }

  hasExecuting(portfolioId: string) {
    return this.orders[portfolioId].some(
      order => order.status === OrderStatus.EXECUTING
    );
  }
}
