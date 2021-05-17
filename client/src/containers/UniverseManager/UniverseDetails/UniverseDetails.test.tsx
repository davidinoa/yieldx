import React from "react";
import { App } from "@bondhouse/rover-universe";
import { render } from "../../../test/utils";
import UniverseDetails from "./UniverseDetails";

export const mockEmptyInventory = {
  id: "mock-inventory-id-00",
  name: "Mock Universe",
  app: App.AssetExplorer,
  assetIds: [],
  updatedAt: new Date().toISOString()
};

describe("UniverseDetails", () => {
  test("mounts", async () => {
    render(<UniverseDetails />);
  });
});
