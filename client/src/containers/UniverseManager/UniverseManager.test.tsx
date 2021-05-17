import userEvent from "@testing-library/user-event";
import React from "react";
import { Route } from "react-router-dom";
import { RecoilRoot } from "recoil";
import { rest } from "msw";
import { setupServer } from "msw/node";
import { UserStatus, UserType } from "@bondhouse/iam";
import { render, screen } from "test/utils";
import { userState } from "services/userState";
import UniverseManager from "./UniverseManager";
import DeactivateList from "./DeactivateList/DeactivateList";
import { mockSelectedInventories } from "../InPaaS/Goals/Goals.test";
import { selectedInventoriesAtom } from "./SetDefaultUniverses/useSetDefaultUniverses";

describe("UniverseManager", () => {
  describe("universe list", () => {
    beforeEach(() => {
      render(
        <Route path="/universes">
          <UniverseManager />
        </Route>,
        {
          route: "/universes"
        }
      );
    });

    test("matches correct universe list path", () => {
      expect(screen.getByTestId("select-universe")).toBeInTheDocument();
    });

    test("create button", async () => {
      const createButton = await screen.findByRole("button", {
        name: /create universe/i
      });
      userEvent.click(createButton);
    });
  });

  describe("universe details", () => {
    beforeEach(() => {
      render(
        <Route path="/universes">
          <UniverseManager />
        </Route>,
        {
          route: "/universes/inpaas"
        }
      );
    });

    test("matches correct universe details path", async () => {
      const universeDetails = await screen.findByTestId("universe-details");
      expect(universeDetails).toBeInTheDocument();
    });
  });

  describe("modals", () => {
    test("deactivate list", async () => {
      const show = true;
      const onHide = jest.fn();
      render(
        <DeactivateList show={show} onHide={onHide} onContinue={jest.fn} />
      );
      const dismissButton = await screen.findByRole("button", {
        name: /dismiss/i
      });
      userEvent.click(dismissButton);
      expect(onHide).toHaveBeenCalled();
    });
  });

  describe("universe details", () => {
    beforeEach(() => {
      render(
        <RecoilRoot
          initializeState={({ set }) => {
            set(selectedInventoriesAtom, mockSelectedInventories);
            set(userState, {
              id: "auth0|5ec6119474dfa00cbf1d53cb",
              first: "Institution",
              last: "New User",
              userType: UserType.ADMIN,
              email: "test4@bondhouse.com",
              terms: true,
              institutionId: "b17c644a-30e8-47fb-a26b-f6743786c3ba",
              createdAt: "2020-05-21T05:28:52.982380Z",
              updatedAt: "2020-05-21T05:28:52.982380Z",
              status: UserStatus.ACTIVE,
              policies: []
            });
          }}
        >
          <Route path="/universes">
            <UniverseManager />
          </Route>
        </RecoilRoot>,
        {
          route: "/universes/manage"
        }
      );
    });

    test("matches correct set-universe-defaults path", async () => {
      expect(screen.getByTestId("set-defaults")).toBeInTheDocument();
    });

    test("buttons and dropdowns", async () => {
      const createButton = await screen.findByRole("button", {
        name: /create universe/i
      });
      userEvent.click(createButton);

      const dismissButton = screen.getByRole("button", {
        name: /dismiss/i
      });
      userEvent.click(dismissButton);

      const inpaasDropdown = await screen.findByRole("button", {
        name: /funds/i
      });
      userEvent.click(inpaasDropdown);

      const bestFitDropdown = screen.getByRole("button", {
        name: /bonds/i
      });
      userEvent.click(bestFitDropdown);

      const assetExplorerDropdown = screen.getByRole("button", {
        name: /\+/i
      });
      userEvent.click(assetExplorerDropdown);
    });

    test("institution-inventory-mapping api", async () => {
      const server = setupServer(
        rest.get(
          "https://dev.yieldx.app/apis/rover-universe/v1/institutions/b17c644a-30e8-47fb-a26b-f6743786c3ba/inventories",
          (req, res, ctx) => {
            const inventories = [
              {
                id: "b17c644a-30e8-47fb-a26b-f6743786c3ba-assetexplorer",
                name: "BestFit + InPaaS",
                app: "Asset Explorer",
                updatedAt: "2020-08-31T17:49:11.089914Z"
              },
              {
                id: "b17c644a-30e8-47fb-a26b-f6743786c3ba-bestfit",
                name: "IG/HY bonds",
                app: "BestFit",
                updatedAt: "2020-08-31T12:05:25.550355Z"
              },
              {
                id: "b17c644a-30e8-47fb-a26b-f6743786c3ba-inpaas",
                name: "5% Funds",
                app: "InPaaS",
                updatedAt: "2020-08-31T12:03:17.637185Z"
              }
            ];

            res(ctx.status(200), ctx.json({ data: { inventories } }));
          }
        )
      );

      server.listen();
      server.close();
    });
  });
});
