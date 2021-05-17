import { Route } from "react-router-dom";
import React from "react";
import { render } from "../../test/utils";
import Investors from "./Investors";
import { Spinner } from "../../elements/Spinner/Spinner";

jest.mock("./CreateInvestor/CreateInvestor", () => ({
  __esModule: true,
  default: () => {
    return <div data-testid="create-investor" />;
  }
}));

jest.mock("./InvestorAccount/InvestorAccount", () => ({
  __esModule: true,
  default: () => {
    return <div data-testid="investor-account" />;
  }
}));

jest.mock("./InvestorList/InvestorList", () => ({
  __esModule: true,
  default: () => {
    return <div data-testid="investor-list" />;
  }
}));

describe("make sure the correct views are shown initially", () => {
  test("should render investor list", async () => {
    const { container, queryByTestId } = render(
      <React.Suspense fallback={<Spinner />}>
        <Route path="/yieldx/investors" component={Investors} />
      </React.Suspense>,
      {
        route: "/yieldx/investors"
      }
    );
    expect(container).toBeDefined();
    // await act(async () => {
    //   await waitForElementToBeRemoved(queryByTestId("spinner"));
    // });
    expect(queryByTestId("investor-list")).toBeInTheDocument();
  });

  test("should render create investor", async () => {
    const { container, queryByTestId } = render(
      <React.Suspense fallback={<Spinner />}>
        <Route path="/yieldx/investors" component={Investors} />
      </React.Suspense>,
      {
        route: "/yieldx/investors/create"
      }
    );
    expect(container).toBeDefined();
    expect(queryByTestId("create-investor")).toBeInTheDocument();
  });

  test("should render investor account", async () => {
    const { container, queryByTestId } = render(
      <React.Suspense fallback={<Spinner />}>
        <Route path="/yieldx/investors" component={Investors} />
      </React.Suspense>,
      {
        route: "/yieldx/investors/investorId"
      }
    );
    expect(container).toBeDefined();
    // await act(async () => {
    //   await waitForElementToBeRemoved(queryByTestId("spinner"));
    // });
    expect(queryByTestId("investor-account")).toBeInTheDocument();
  });
});
