import { Route } from "react-router-dom";
import React from "react";
import { render } from "test/utils";
import { Spinner } from "elements/Spinner/Spinner";
import mockYieldXPortfolio from "__mocks__/models/mockYieldXPortfolio";
import SavePortfolioModal from "./SavePortfolioModal";

test("render test", () => {
  const { container } = render(
    <Route>
      <React.Suspense fallback={<Spinner />}>
        <SavePortfolioModal
          setSubmitting={jest.fn()}
          setError={jest.fn()}
          onHide={jest.fn()}
          show
          portfolio={mockYieldXPortfolio}
        />
      </React.Suspense>
    </Route>,
    {
      route: "/yieldx/execute-portfolio/investors"
    }
  );
  expect(container).toBeInTheDocument();
});
