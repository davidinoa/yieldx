import React from "react";
import userEvent from "@testing-library/user-event";
import { PortfolioType } from "@bondhouse/income-portfolios";
import { render, screen } from "test/utils";
import fund from "__mocks__/models/assets/fund";
import mockAssets from "__mocks__/models/mockAssets";
import mockYieldXPortfolio from "__mocks__/models/mockYieldXPortfolio";
import OrdersService from "services/OrdersService";
import {
  Order,
  OrderStatus as OrderStatusOMS
} from "@bondhouse/order-management";
import { Order2, OrderStatus } from "providers/graphql/hooks";
import OrderAndTradesRow from "./OrderAndTradesRow/OrderAndTradesRow";
import OrdersAndTrades from "./OrdersAndTrades";

export const openOrder: Order2 = {
  id: "5d62a607-9c33-4610-9310-eeb45351c37a",
  portfolioId: "6cdf10c3-000c-40c5-886e-c45f4b8226f7",
  quantity: 1,
  assetId: "4207ed32-9c48-4235-9821-f0612f54a009",
  createdAt: "2020-07-15T15:00:02.250811Z",
  updatedAt: "2020-07-15T15:00:02.250811Z",
  status: OrderStatus.Open
};

const mockOrder: Order2 = {
  id: "mockOrderId",
  assetId: "fund",
  portfolioId: "mock-portfolio-id",
  quantity: 5,
  createdAt: new Date().toISOString(),
  status: OrderStatus.Executing
};

describe("OrdersAndTrades", () => {
  test("dropdown and propsOrders", async () => {
    mockYieldXPortfolio.portfolioType = PortfolioType.LIVE;
    render(<OrdersAndTrades portfolio={mockYieldXPortfolio} orders={[]} />);

    const dropdown = await screen.findByTestId("dropdownToggle-sortBy");
    userEvent.click(dropdown);

    const updatedAt = screen.getByRole("button", { name: /updated at/i });
    userEvent.click(updatedAt);
    expect(updatedAt).toBeInTheDocument();

    const status = await screen.findByRole("button", { name: "Status" });
    userEvent.click(status);
    expect(status).toBeInTheDocument();
  });

  test("cancel button", async done => {
    const { muni } = mockAssets;
    render(
      <OrderAndTradesRow
        assetPrice={0}
        cancelable
        asset={muni}
        order={{ ...openOrder }}
        trades={{
          loading: true
        }}
      />
    );
    const cancelButton = await screen.findByText(/cancel/i);
    expect(cancelButton).toBeDefined();
    userEvent.click(cancelButton);
    done();
  });

  test("it renders after loading orders", async () => {
    const { container } = render(
      <OrdersAndTrades orders={[]} portfolio={mockYieldXPortfolio} />
    );
    expect(container).toBeInTheDocument();
  });

  test("method for getting by status", () => {
    const service = new OrdersService([(mockOrder as unknown) as Order]);
    const executingOrders = service.getAllByStatus(
      OrderStatus.Executing.toString() as OrderStatusOMS.EXECUTING,
      mockOrder.portfolioId
    );
    expect(executingOrders).toHaveLength(1);
  });
});

describe("Trades", () => {
  test("fallback for empty trades-list", async () => {
    render(
      <OrderAndTradesRow
        assetPrice={0}
        cancelable={false}
        order={mockOrder}
        asset={fund}
        trades={{
          loading: false,
          data: []
        }}
      />
    );

    const button = await screen.findByRole("button");
    userEvent.click(button);
    expect(screen.getByText(/no trades available/i)).toBeInTheDocument();
  });
});
