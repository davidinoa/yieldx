import React from "react";
import { selectorFamily, useRecoilValue } from "recoil";
import { InventoriesApi, Inventory } from "@bondhouse/rover-universe";
import dayjs from "dayjs";
import {
  DetailsButton,
  ListContainer,
  ListRow
} from "components/ListPages/ListPages.styles";
import getCurrPageData, { PaginationOptions } from "util/getCurrPageData";
import Pagination from "elements/Pagination/Pagination";
import { userState } from "services/userState";
import NoItemsMessage from "components/NoItemsMessage";
import { ReactComponent as NoItemIcon } from "assets/svg/no-portfolio.svg";
import { allInventoriesSelector } from "../../UniverseManager";
import { List } from "components/ListPages/List";

const inventoriesApi = new InventoriesApi();

const inventoryPagesSelector = selectorFamily<
  Array<Inventory>,
  PaginationOptions
>({
  key: "inventoryPagesSelector",
  get: ({ itemsPerPage, currentPage }) => async ({ get }) => {
    const { institutionId } = get(userState);
    const inventoryIds = get(allInventoriesSelector);
    const paginatedIds = getCurrPageData(
      inventoryIds,
      itemsPerPage,
      currentPage
    );
    const inventories = await Promise.all(
      paginatedIds.map(it =>
        inventoriesApi.getInventory(institutionId || "bondhouse", it.id)
      )
    );
    return inventories.map(it => it.data.inventory);
  }
});

export default function UniverseList() {
  const [currPage, setCurrPage] = React.useState(1);
  const inventoriesFullList = useRecoilValue(allInventoriesSelector);
  const inventories = useRecoilValue(
    inventoryPagesSelector({ itemsPerPage: 7, currentPage: currPage })
  );
  return (
    <ListContainer>
      {!inventories.length && (
        <NoItemsMessage
          className="m-auto"
          title="No investor accounts"
          message="It looks like you haven’t set up any investor accounts. Contact us to get started."
          Icon={<NoItemIcon />}
        />
      )}
      {inventories.length >= 1 &&
        inventories.map(({ id, assetIds, name, updatedAt }) => {
          return (
            <ListRow key={id} data-testid="universe-row">
              <List.Col value={name} label={"NAME"} />
              <List.Col
                sm={6}
                label="TOTAL ASSETS"
                value={assetIds.length.toLocaleString()}
              />
              <List.Col
                sm={4}
                label="LAST UPDATED"
                value={dayjs(updatedAt).format("MMM D, YYYY")}
              />
              <List.Col md={3} xl={2}>
                <DetailsButton
                  data-testid="UniverseList-ShowUniverseLink"
                  to={`/universes/${id}`}
                >
                  Details
                </DetailsButton>
              </List.Col>
            </ListRow>
          );
        })}
      <Pagination
        total={Math.ceil(inventoriesFullList.length / 7)}
        current={currPage}
        handleChange={setCurrPage}
      />
    </ListContainer>
  );
}
