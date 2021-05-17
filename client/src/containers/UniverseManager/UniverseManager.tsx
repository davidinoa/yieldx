import React from "react";
import { Route, Switch, useRouteMatch } from "react-router-dom";
import { selector } from "recoil";
import { InventoriesApi } from "@bondhouse/rover-universe";
import { userState } from "services/userState";
import SetDefaultUniverses from "./SetDefaultUniverses/SetDefaultUniverses";
import UniverseDetails from "./UniverseDetails/UniverseDetails";
import SelectUniverse from "./SelectUniverse/SelectUniverse";

export default function UniverseManager() {
  const { path } = useRouteMatch();
  return (
    <Switch>
      <Route exact path={path} component={SelectUniverse} />
      <Route path={`${path}/manage`}>
        <SetDefaultUniverses />
      </Route>
      <Route path={`${path}/:inventoryId`}>
        <UniverseDetails />
      </Route>
    </Switch>
  );
}

const inventoriesApi = new InventoriesApi();

export const allInventoriesSelector = selector({
  key: "allInventoriesSelector",
  get: async ({ get }) => {
    const { institutionId } = get(userState);
    if (!institutionId || institutionId === "bondhouse") return [];
    const { data } = await inventoriesApi.getAllInventories(institutionId);
    return data.inventories;
  }
});
