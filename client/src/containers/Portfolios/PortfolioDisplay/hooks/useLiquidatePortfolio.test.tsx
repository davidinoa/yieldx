import React from "react";
import { act, renderHook } from "@testing-library/react-hooks";
import { Route, Router } from "react-router-dom";
import GraphqlProvider, { client } from "providers/graphql";
import { createMemoryHistory } from "history";
import useLiquidatePortfolio from "containers/Portfolios/PortfolioDisplay/hooks/useLiquidatePortfolio";
import { buildMockPortfolio } from "test/utils";
import { AppType } from "@bondhouse/position-management";
import { PortfolioType } from "@bondhouse/income-portfolios";
import {
  AppType2,
  PortfolioStatus,
  PositionManagementGetPortfolioDocument
} from "providers/graphql/hooks";
import mockPortfolio from "test/mock-data/mockPortfolio";
import { setupServer } from "msw/node";
import createMockHandler from "mock-requests/graphql/createMockHandler";

const mockLivePortfolio = buildMockPortfolio({
  appType: AppType.CUSTOM,
  portfolioType: PortfolioType.LIVE
});
const server = setupServer();
describe("useLiquidatePortfolio", () => {
  beforeAll(() => server.listen());
  beforeEach(() => {
    client.clearStore();
    client.cache.writeQuery({
      data: {
        ...mockPortfolio({
          app: AppType2.Custom,
          id: "mockMultiAsset",
          status: PortfolioStatus.Ready
        })
      },
      query: PositionManagementGetPortfolioDocument,
      variables: {
        id: "mockMultiAsset"
      }
    });
    const mockHandler = createMockHandler({
      patchPortfolio: {
        portfolio: mockPortfolio({
          app: AppType2.Custom,
          id: "mockMultiAsset",
          status: PortfolioStatus.Terminated
        }),
        __typename: "UpdatePortfolioResponse"
      },
      postPortfolioOrders: {
        order: {
          assetId: "mock",
          createdAt: new Date().toISOString(),
          id: "mock",
          portfolioId: "mockMultiAsset",
          quantity: 2,
          goodTillCancel: true
        },
        __typename: "CreateOrderResponse"
      }
    });
    server.use(mockHandler);
  });
  afterAll(() => server.close());

  it("Should call patch portfolio mutation and update cache with portfolio status Terminated", async () => {
    const { result: liquidate } = renderHook(() => useLiquidatePortfolio(), {
      // eslint-disable-next-line react/prop-types
      wrapper: ({ children }) => (
        <GraphqlProvider>
          <Router
            history={createMemoryHistory({
              initialEntries: ["/portfolios/live/mockMultiAsset"]
            })}
          >
            <Route path="/portfolios/:type/:id">{children}</Route>
          </Router>
        </GraphqlProvider>
      )
    });
    await act(() => liquidate.current(mockLivePortfolio, []));
    const updatedCache = client.cache.extract();
    expect(updatedCache[`Portfolio3:mockMultiAsset`]?.status).toBe(
      PortfolioStatus.Terminated
    );
  });

  it("Should raise sell orders with good till cancel set to true", async () => {
    const { result: liquidate } = renderHook(() => useLiquidatePortfolio(), {
      // eslint-disable-next-line react/prop-types
      wrapper: ({ children }) => (
        <GraphqlProvider>
          <Router
            history={createMemoryHistory({
              initialEntries: ["/portfolios/live/mockMultiAsset"]
            })}
          >
            <Route path="/portfolios/:type/:id">{children}</Route>
          </Router>
        </GraphqlProvider>
      )
    });
    await act(() => liquidate.current(mockLivePortfolio, []));
    const updatedCache = client.cache.extract();
    expect(
      // @ts-expect-error
      updatedCache[`CreateOrderResponse:mock0`]?.order?.goodTillCancel
    ).toBe(true);
  });
});
