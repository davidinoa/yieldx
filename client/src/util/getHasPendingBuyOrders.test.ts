import { mockOrders } from "test/mock-data/mockOrders";
import { OrderStatus } from "providers/graphql/hooks";
import { getHasPendingBuyOrders } from "./getHasPendingBuyOrders";

describe("getHasPendingBuyOrders", () => {
  it("Should return false when open orders are SELL", () => {
    const openSellOrders = mockOrders([
      {
        status: OrderStatus.Open,
        quantity: -100
      },
      {
        status: OrderStatus.Open,
        quantity: -200
      },
      {
        status: OrderStatus.Closed,
        quantity: 100
      }
    ]);
    const result = getHasPendingBuyOrders(openSellOrders);
    expect(result).toBe(false);
  });

  it("Should return true when open orders are SELL and BUY", () => {
    const openSellOrders = mockOrders([
      {
        status: OrderStatus.Open,
        quantity: -100
      },
      {
        status: OrderStatus.Open,
        quantity: -200
      },
      {
        status: OrderStatus.Closed,
        quantity: 100
      },
      {
        status: OrderStatus.Open,
        quantity: 200
      }
    ]);
    const result = getHasPendingBuyOrders(openSellOrders);
    expect(result).toBe(true);
  });

  it("Should return true when executing orders are BUY", () => {
    const openSellOrders = mockOrders([
      {
        status: OrderStatus.Open,
        quantity: -100
      },
      {
        status: OrderStatus.Open,
        quantity: -200
      },
      {
        status: OrderStatus.Closed,
        quantity: 100
      },
      {
        status: OrderStatus.Executing,
        quantity: 200
      }
    ]);
    const result = getHasPendingBuyOrders(openSellOrders);
    expect(result).toBe(true);
  });

  it("Should return false when executing orders are SELL", () => {
    const openSellOrders = mockOrders([
      {
        status: OrderStatus.Open,
        quantity: -100
      },
      {
        status: OrderStatus.Open,
        quantity: -200
      },
      {
        status: OrderStatus.Closed,
        quantity: 100
      },
      {
        status: OrderStatus.Executing,
        quantity: -200
      }
    ]);
    const result = getHasPendingBuyOrders(openSellOrders);
    expect(result).toBe(false);
  });
});
