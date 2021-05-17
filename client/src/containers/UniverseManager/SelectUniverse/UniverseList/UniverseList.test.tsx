import React from "react";
import { RecoilRoot } from "recoil";
import { render, screen } from "../../../../test/utils";
import UniverseList from "./UniverseList";

describe("UniverseManager", () => {
  test("should display a list of 4 inventories", async () => {
    render(
      <RecoilRoot>
        <UniverseList />
      </RecoilRoot>
    );
    const inventoryRows = await screen.findAllByTestId("universe-row");
    expect(inventoryRows.length).toBe(4);
  });
});
