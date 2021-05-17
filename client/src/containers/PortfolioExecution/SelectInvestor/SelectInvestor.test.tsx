import { Route } from "react-router-dom";
import React from "react";
import { render } from "../../../test/utils";
import SelectInvestor from "./SelectInvestor";
import mockYieldXPortfolio from "../../../__mocks__/models/mockYieldXPortfolio";
import { Spinner } from "../../../elements/Spinner/Spinner";

test("render test", () => {
  const { container } = render(
    <Route>
      <React.Suspense fallback={<Spinner />}>
        <SelectInvestor selectedPortfolio={mockYieldXPortfolio} />
      </React.Suspense>
    </Route>,
    {
      route: "/yieldx/execute-portfolio/investors"
    }
  );
  expect(container).toBeInTheDocument();
});
