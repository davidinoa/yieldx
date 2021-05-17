import React from "react";
import { renderHook } from "@testing-library/react-hooks";
import usePortfolioDisplayData from "containers/Portfolios/PortfolioDisplay/hooks/usePortfolioDisplayData";
import { Route, Router } from "react-router-dom";
import GraphqlProvider from "providers/graphql";
import { createMemoryHistory } from "history";

describe("usePortfolioDisplayData", () => {
  it("Should return a value", () => {
    const { result } = renderHook(() => usePortfolioDisplayData(), {
      // eslint-disable-next-line react/prop-types
      wrapper: ({ children }) => (
        <GraphqlProvider>
          <Router
            history={createMemoryHistory({ initialEntries: ["/yieldx"] })}
          >
            <Route path="/portfolios/:type/:id">{children}</Route>
          </Router>
        </GraphqlProvider>
      )
    });
    expect(result).toBeTruthy();
  });
});
