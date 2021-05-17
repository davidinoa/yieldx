import { Order2, OrderStatus } from "providers/graphql/hooks";

export function mockOrders(ordersToMock: Partial<Order2>[]): Order2[] {
  return ordersToMock.map((order, i) => {
    const {
      assetId = `mock-asset-id-${i}`,
      createdAt = "2020-12-11T05:14:29.623213Z",
      fullFillRequired = true,
      goodTillCancel = true,
      id = `mock-order-id-${i}`,
      portfolioId = `mock-portfolio-id-${i}`,
      priceLimit = 57.36,
      quantity = 1,
      spotPrice = 58.57,
      status = OrderStatus.Open,
      updatedAt = "2020-12-11T05:14:29.623213Z"
    } = order;
    return {
      __typename: "Order2",
      assetId,
      assignedTo: null,
      comment: null,
      createdAt,
      filled: null,
      fullFillRequired,
      goodTillCancel,
      id,
      metadata: null,
      portfolioId,
      priceLimit,
      quantity,
      spotPrice,
      status,
      updatedAt
    };
  });
}
