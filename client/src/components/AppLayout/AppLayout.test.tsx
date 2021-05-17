import React from "react";
import userEvent from "@testing-library/user-event";
import { RecoilRoot } from "recoil";
import { render, screen } from "test/utils";
import Dashboard from "containers/Dashboard/Dashboard";
import { mockAdminUser } from "__mocks__/@bondhouse/iam/__fixtures__";
import { userState } from "services/userState";
import App from "../../App";
import AppLayout from "./AppLayout";

describe("AppLayout", () => {
  test("logo navigation", async done => {
    render(
      <RecoilRoot
        initializeState={({ set }) => {
          set(userState, mockAdminUser);
        }}
      >
        <AppLayout>
          <App />
          <Dashboard isAdmin isIndividual />
        </AppLayout>
      </RecoilRoot>
    );

    const logo = await screen.findByTestId("logo");
    expect(logo).toHaveAttribute("href", "/");
    userEvent.click(logo);
    done();
  });
});
