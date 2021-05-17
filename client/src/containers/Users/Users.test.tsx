import React from "react";
import { createModel } from "@xstate/test";
import { waitForElement } from "@testing-library/react";
import Users from "./Users";
import userMachine from "./Users.state";
import { render } from "../../test/utils";

test("renders", async () => {
  const { container, getByTestId } = render(<Users />, {
    route: "/users"
  });

  waitForElement(() => getByTestId("spinner"));
  expect(container).toBeInTheDocument();
});

describe("user state machine", () => {
  const usersModel = createModel(userMachine);
  const testPlans = usersModel.getShortestPathPlans();
  testPlans.forEach(plan => {
    describe(plan.description, () => {
      plan.paths.forEach(path => {
        it(path.description, () => {
          const rendered = render(<Users />, {
            route: "/users"
          });
          return path.test(rendered);
        });
      });
    });
  });
});
