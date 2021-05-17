import React from "react";
import userEvent from "@testing-library/user-event";
import { render, screen, waitFor } from "test/utils";
import { setupServer } from "msw/node";
import { client } from "providers/graphql";
import createMockHandler from "mock-requests/graphql/createMockHandler";
import mockPortfolio from "test/mock-data/mockPortfolio";
import { AppType2 } from "providers/graphql/hooks";
import PortfolioItem from "./PortfolioItem";

const server = setupServer();
describe("PortfolioItem", () => {
  beforeAll(() => server.listen());
  afterEach(() => client.clearStore());
  afterAll(() => server.close());
  test("portfolio cash available", async () => {
    server.use(
      createMockHandler({
        orderManagementGetOrders: {
          orders: []
        },
        positionManagementGetPortfolio: {
          portfolio: mockPortfolio({
            app: AppType2.Inpaas,
            id: "mock-portfolio-id"
          }),
          __typename: "GetPortfolioResponse2"
        }
      })
    );

    const mockSetTransferPortfolio = jest.fn();

    const { container } = render(
      <PortfolioItem
        portfolioId="mock-portfolio-id"
        setTransferPortfolio={mockSetTransferPortfolio}
        cashOnlyPortfolio={{
          cashAvailable: 0,
          portfolioId: "",
          cashPos: { assetId: "", id: "", portfolioId: "", quantity: 0 }
        }}
      />
    );
    await waitFor(() =>
      expect(screen.getByRole("link")).not.toHaveClass("disabled")
    );
    expect(screen.getByRole("link")).toHaveAttribute(
      "href",
      "/portfolios/live/mock-portfolio-id"
    );
    userEvent.click(screen.getByRole("link"));

    await waitFor(() =>
      expect(screen.getByRole("button", { name: /remove/i })).not.toBeDisabled()
    );

    userEvent.click(screen.getByRole("button", { name: /remove/i }));

    userEvent.click(screen.getByRole("link"));
    expect(container).toBeInTheDocument();

    expect(mockSetTransferPortfolio).toHaveBeenCalled();
  });
});
