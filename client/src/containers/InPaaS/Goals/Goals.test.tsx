import React from "react";
import userEvent from "@testing-library/user-event";
import { RecoilRoot } from "recoil";
import { App } from "@bondhouse/rover-universe";
import { UserStatus, UserType } from "@bondhouse/iam";
import { waitFor } from "@testing-library/dom";
import { render, screen } from "test/utils";
import { userState } from "services/userState";
import Goals from "./Goals";
import { selectedInventoriesAtom } from "../../UniverseManager/SetDefaultUniverses/useSetDefaultUniverses";

export const mockSelectedInventories = {
  inventories: [
    {
      id: "assetexplorer",
      name: "BestFit + InPaaS",
      app: App.AssetExplorer,
      updatedAt: "2020-08-27T15:47:25.419719Z"
    },
    {
      id: "bestfit",
      name: "IG/HY bonds",
      app: App.BestFit,
      updatedAt: "2020-08-25T11:50:44.512826Z"
    },
    {
      id: "id",
      name: "Univerve namee",
      app: App.AssetExplorer,
      updatedAt: "2020-08-28T06:26:16.506561Z"
    },
    {
      id: "inpaas",
      name: "5% Funds",
      app: App.InPaaS,
      updatedAt: "2020-08-25T11:50:44.512826Z"
    }
  ],
  inpaas: {
    id: "inpaas",
    name: "5% Funds",
    app: App.InPaaS,
    updatedAt: "2020-08-25T11:50:44.512826Z"
  },
  bestFit: {
    id: "bestfit",
    name: "IG/HY bonds",
    app: App.BestFit,
    updatedAt: "2020-08-25T11:50:44.512826Z"
  },
  assetExplorer: {
    id: "assetexplorer",
    name: "BestFit + InPaaS",
    app: App.AssetExplorer,
    updatedAt: "2020-08-27T15:47:25.419719Z"
  }
};
describe("goals component test", () => {
  test("it renders", () => {
    const { container } = render(
      <RecoilRoot
        initializeState={snap => {
          snap.set(userState, {
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
          });
          snap.set(selectedInventoriesAtom, mockSelectedInventories);
        }}
      >
        <Goals />
      </RecoilRoot>
    );
    expect(container).toBeInTheDocument();
  });

  test("target income allow 14% target", async () => {
    const { container } = render(
      <RecoilRoot
        initializeState={snap => {
          snap.set(userState, {
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
          });
          snap.set(selectedInventoriesAtom, mockSelectedInventories);
        }}
      >
        <Goals />
      </RecoilRoot>
    );
    expect(container).toBeInTheDocument();

    const investmentInput = await screen.findByTestId(
      /NumberInput-investmentAmount/i
    );
    expect(investmentInput).toBeDefined();
    expect(investmentInput).not.toBeDisabled();

    const dollarRadioButton = await screen.findByLabelText(/Dollar/i);
    expect(dollarRadioButton).toBeDefined();
    expect(dollarRadioButton).toBeDisabled();
    if (investmentInput) {
      await userEvent.type(investmentInput, "10000000");
      expect(investmentInput.getAttribute("value")).toBe("100,000.00");

      await waitFor(() => {
        expect(dollarRadioButton).not.toBeDisabled();
      });
      await userEvent.click(dollarRadioButton);
      const targetIncomeInput = await screen.findByTestId(
        /NumberInput-targetIncome/i
      );
      expect(targetIncomeInput).toBeDefined();
      if (targetIncomeInput) {
        await userEvent.type(targetIncomeInput, "116600");
        expect(targetIncomeInput.getAttribute("value")).toBe("1,166.00");
        await waitFor(() => {
          expect(targetIncomeInput.getAttribute("error")).toBe(null);
        });
      }
    }
  });

  test("target yield should be disabled at first and allow 14% target", async () => {
    const { container } = render(
      <RecoilRoot
        initializeState={snap => {
          snap.set(userState, {
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
          });
          snap.set(selectedInventoriesAtom, mockSelectedInventories);
        }}
      >
        <Goals />
      </RecoilRoot>
    );
    expect(container).toBeInTheDocument();
    const targetYieldInput = await screen.findByTestId(
      /NumberInput-targetYield/i
    );

    expect(targetYieldInput).toBeDefined();
    expect(targetYieldInput).toBeDisabled();

    const investmentInput = await screen.findByTestId(
      /NumberInput-investmentAmount/i
    );
    expect(investmentInput).toBeDefined();
    expect(investmentInput).not.toBeDisabled();
    if (investmentInput) {
      userEvent.type(investmentInput, "10000000");
      expect(investmentInput.getAttribute("value")).toBe("100,000.00");
      await waitFor(() => expect(targetYieldInput).not.toBeDisabled());
      if (targetYieldInput) {
        userEvent.type(targetYieldInput, "1400");
        expect(targetYieldInput.getAttribute("value")).toBe("14.00");
        await waitFor(() => {
          expect(targetYieldInput.getAttribute("error")).toBe(null);
        });
        userEvent.type(targetYieldInput, "1500");
        expect(targetYieldInput.getAttribute("value")).toBe("14.00");
      }
    }
  });
});
