import { createModel } from "@xstate/test";
import React from "react";
import { InvestorType } from "@bondhouse/investor";
import { UserStatus, UserType } from "@bondhouse/iam";
import { waitForElementToBeRemoved } from "@testing-library/dom";
import { act, render, RenderResult } from "test/utils";
import { Spinner } from "elements/Spinner/Spinner";
import CreateInvestor from "./CreateInvestor";
import transitionMachine from "./CreateInvestor.state";

// jest.mock("services");
jest.mock("../InvestorForms/SelectInvestorType/SelectInvestorType", () => ({
  __esModule: true,
  default: () => <div data-testid="select-investor-type" />
}));

describe("create investor view tests", () => {
  let utils: RenderResult;
  const mockSetMap = jest.fn((...args) => args);
  beforeEach(() => {
    utils = render(
      <React.Suspense fallback={<Spinner />}>
        <CreateInvestor setApexAccountMap={mockSetMap} />
      </React.Suspense>,
      {
        route: "/yieldx/investors/create"
      }
    );
  });

  afterEach(() => jest.clearAllMocks());
  test("should render select investor type first", async () => {
    const { container, queryByTestId } = utils;
    expect(container).toBeDefined();
    await act(async () => {
      await waitForElementToBeRemoved(queryByTestId("spinner"));
    });
    expect(queryByTestId("select-investor-type")).toBeInTheDocument();
  });
});

describe("createModel list", () => {
  const transitionModel = createModel(
    transitionMachine.withContext({
      // setInvestorIds: jest.fn((...args) => (args)),
      updateUI: jest.fn((...args) => args),
      user: {
        id: "auth0|5ec6119474dfa00cbf1d53cb",
        first: "Institution",
        last: "New User",
        userType: UserType.ADMIN,
        email: "test4@bondhouse.com",
        terms: true,
        institutionId: "bf8a5597-9569-4510-babd-a6d9655e9f0d",
        createdAt: "2020-05-21T05:28:52.982380Z",
        updatedAt: "2020-05-21T05:28:52.982380Z",
        status: UserStatus.ACTIVE,
        policies: []
      },
      path: "/investors/create",
      history: {
        push: jest.fn(() => undefined),
        listen: jest.fn(() => () => undefined),
        action: "REPLACE",
        length: 1,
        replace: () => undefined,
        go: () => undefined,
        goBack: () => undefined,
        goForward: () => undefined,
        block: () => () => undefined,
        createHref: () => "test",
        location: {
          pathname: "",
          search: "test",
          state: {
            investorType: InvestorType.INDIVIDUAL
          },
          hash: ""
        }
      }
    })
  );
  const testPlans = transitionModel.getShortestPathPlans();

  testPlans.forEach(plan => {
    const mockSetMap = jest.fn((...args) => args);
    describe(plan.description, () => {
      afterEach(() => jest.clearAllMocks());
      plan.paths.forEach(path => {
        it(path.description, async () => {
          const rendered = render(
            <React.Suspense fallback={<Spinner />}>
              <CreateInvestor setApexAccountMap={mockSetMap} />
            </React.Suspense>,
            {
              route: "/yieldx/investors/create"
            }
          );
          return path.test(rendered);
        });
      });
    });
  });
});
