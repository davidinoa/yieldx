import React from "react";
import userEvent from "@testing-library/user-event";
import { createMemoryHistory } from "history";
import { setupServer } from "msw/node";
import { rest } from "msw";
import { Route } from "react-router-dom";
import { RecoilRoot } from "recoil";
import { render, screen } from "test/utils";
import mockYieldXPortfolio from "__mocks__/models/mockYieldXPortfolio";
import { portfolioCreateOrEditState } from "recoil-state/portfolioCreateOrEditState";
import NonTradableAlert from "./NonTradableAlert";

const handlers = [
  rest.get("/", (req, res, ctx) => {
    console.error(req);
    res(ctx.status(200));
  })
];

const server = setupServer(...handlers);
server.listen();
describe("NonTradableAlert", () => {
  test("mounts", async () => {
    const route = "/best-fit/portfolio-review";
    const history = createMemoryHistory({ initialEntries: [route] });

    render(
      <RecoilRoot
        initializeState={({ set }) => {
          set(portfolioCreateOrEditState, {});
        }}
      >
        <Route
          exact
          path="/asset-explorer/portfolio-builder"
          render={() => <div data-testid="mock-pb" />}
        />
        <Route exact path="/best-fit/portfolio-review">
          <NonTradableAlert portfolio={mockYieldXPortfolio} />,
        </Route>
      </RecoilRoot>,
      { history, route }
    );

    const reviewAndRemoveButton = await screen.findByRole("button");
    userEvent.click(reviewAndRemoveButton);
  });
});
