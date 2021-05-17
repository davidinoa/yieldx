import {
  App,
  AssetAssetSubtypeEnum,
  AssetAssetTypeEnum,
  GetAssetsRequest,
  Inventory
} from "@bondhouse/rover-universe";
import muni from "__mocks__/models/assets/muni";
import { closedEndFund, municipalBond } from "./__fixtures__";
import { WhitelistsApi } from "../rover-whitelist";

function AssetsApi() {
  return {
    getAsset: (id: string) =>
      new Promise(resolve => resolve({ data: { asset: muni } }))
  };
}

function InventoriesApi() {
  return {
    getAllInventories: jest.fn(async (_institutionId: string) => ({
      data: {
        inventories: [
          {
            id: "test",
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
        ]
      }
    })),
    getInventory: jest.fn(async (universeId: string) => ({
      data: {
        inventory: {
          id: universeId,
          name: "5% Funds",
          app: "InPaaS",
          assetIds: [
            "8b7d46db-61fd-4287-a136-a03230045b8b",
            "04b96c46-dac4-4efc-a145-97d0943e4cbf",
            "4e4abe64-c514-474b-92ec-a0d09b6c70ff",
            "62907c7c-d436-4444-a96d-c3a234e2eb5a",
            "1fd7e816-03ee-46b1-ac3c-210deb7addc6",
            "f5011ea3-efe9-40af-947c-8ac99c6574a5",
            "500d7980-919b-4c55-ad8d-4d74c8af7410",
            "a5dcf04f-f831-4fd5-a692-41c75f1bf62f",
            "102dd159-1401-49dc-bad0-9cb776fbe5cb",
            "59fe015c-5cf6-4bbd-a51c-5cc1247301b7",
            "9f6f9208-4062-44e2-b0cf-245a77cc8911",
            "d96cf090-a15d-40d0-82c0-03e6ccc0b154",
            "0b555f67-de53-4f92-9b0a-bde595f47460",
            "908d9023-4404-4286-964b-d7b04cb5328f",
            "8baf40ae-b3a5-4dd3-8c27-22ef32d365ef",
            "acd843e6-004d-4717-a611-667829ccca47",
            "a863a64f-848f-424a-892f-c1b611529154",
            "9d8e77f6-4b70-45af-b542-491b36f4d0ef",
            "6512c887-2cf2-4847-be97-51a0bd6b7eed",
            "4eacb809-f4eb-41c6-9716-44f3a3ea3926",
            "621e7f48-e332-4e92-a875-260ed4ec9569",
            "c7283330-e6e8-43ca-9457-d7ec6ce2656e",
            "57187b79-82cf-4524-98f6-819455264fb5",
            "f10c6a1d-c607-4666-8621-8b1a2c3741b3",
            "f0383473-bf83-4466-8b66-edd8a875b137",
            "076124a3-b1f0-4fa9-a941-168f80f59e77",
            "3eb44c46-e309-41bd-a87c-d190bb0269bb"
          ],
          updatedAt: "2020-08-25T11:50:44.512826Z"
        }
      }
    }))
  };
}

AssetsApi.prototype.getAssets = jest.fn((assetsRequest: GetAssetsRequest) =>
  Promise.resolve({
    data: {
      assets: assetsRequest.assetIds.map(id => ({
        ...closedEndFund,
        id
      }))
    }
  })
);

export {
  App,
  AssetsApi,
  AssetAssetTypeEnum,
  AssetAssetSubtypeEnum,
  InventoriesApi,
  WhitelistsApi
};

export type { Inventory };
