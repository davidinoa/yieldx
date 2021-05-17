import {
  OrderStatus,
  CreateOrderRequestDirectionEnum
} from "@bondhouse/order-management";
import { openOrder } from "containers/Portfolios/PortfolioDisplay/OrdersAndTrades/OrdersAndTrades.test";

// eslint-disable-next-line @typescript-eslint/no-empty-function
function OrdersApi() {}

OrdersApi.prototype.getOrders = jest.fn(() => {
  return Promise.resolve({
    data: {
      orders: []
    }
  });
});
OrdersApi.prototype.createOrder = jest.fn(() => {
  return Promise.resolve({
    data: {
      orders: [openOrder]
    }
  });
});
export { OrdersApi, OrderStatus, CreateOrderRequestDirectionEnum };
