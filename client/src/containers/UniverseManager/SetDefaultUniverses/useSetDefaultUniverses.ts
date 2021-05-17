import {
  atom,
  RecoilValue,
  selector,
  useRecoilState,
  useRecoilValue
} from "recoil";
import { useHistory } from "react-router";
import React from "react";
import { App, InventoryMetadata } from "@bondhouse/rover-universe";
import {
  AppType,
  InstitutionInventoryMappingApi,
  InventoryMapping
} from "@bondhouse/iam";
import { userState } from "services/userState";
import { allInventoriesSelector } from "../UniverseManager";

const institutionInventoryMappingApi = new InstitutionInventoryMappingApi();
export const useSetDefaultUniverses = () => {
  const { institutionId } = useRecoilValue(userState);
  if (!institutionId) throw Error("No institution ID for user");
  const [
    { bestFit, assetExplorer, inpaas, inventories },
    setSelectedInventories
  ] = useRecoilState(selectedInventoriesAtom);

  const history = useHistory();
  const [inpaasSelected, setInpaas] = React.useState(
    inpaas === undefined
      ? {
          label: "YieldX universe",
          universeId: "defaultId"
        }
      : { label: inpaas.name, universeId: inpaas.id }
  );
  const [bestfitSelected, setBestfit] = React.useState(
    bestFit === undefined
      ? {
          label: "YieldX universe",
          universeId: "defaultId"
        }
      : { label: bestFit.name, universeId: bestFit.id }
  );
  const [explorerSelected, setExplorer] = React.useState(
    assetExplorer === undefined
      ? {
          label: "YieldX universe",
          universeId: "defaultId"
        }
      : { label: assetExplorer.name, universeId: assetExplorer.id }
  );
  const highlightedState = React.useState<App>();
  const [isSubmitting, setSubmitting] = React.useState(false);
  const [showContactUs, setShowContactUs] = React.useState(false);

  return {
    inventories,
    inpaasSelected,
    setInpaas,
    bestfitSelected,
    setBestfit,
    explorerSelected,
    setExplorer,
    highlightedState,
    isSubmitting,
    showContactUs,
    setShowContactUs,
    onSave: () => {
      setSubmitting(true);
      saveHandler({
        institutionId,
        inventories,
        inpaas,
        inpaasSelected,
        bestFit,
        bestfitSelected,
        assetExplorer,
        explorerSelected
      }).then(({ newInpaas, newBestFit, newExplorer }) => {
        setSelectedInventories(prev => ({
          ...prev,
          inpaas: newInpaas,
          bestFit: newBestFit,
          assetExplorer: newExplorer
        }));
        history.push("/universes");
      });
    }
  };
};

export const selectedInventoriesAtom = atom({
  key: "selectedInventoriesAtom",
  default: selector({
    key: "selectedInventoriesAtom/default",
    get: selectedInventoriesCallback
  })
});

const inventoryMappingSelector = selector({
  key: "inventoryMappingSelector",
  get: ({ get }) => {
    const { institutionId } = get(userState);
    return new Promise<InventoryMapping | null>(res => {
      institutionInventoryMappingApi
        .getInstitutionInventoryMapping(institutionId ?? "bondhouse")
        .then(({ data: { inventoryMapping } }) => {
          res(inventoryMapping);
        })
        .catch(() => res(null));
    });
  }
});

export async function selectedInventoriesCallback({
  get
}: {
  get: <T>(recoilVal: RecoilValue<T>) => T;
}) {
  const mapping: InventoryMapping = get(inventoryMappingSelector) ?? {
    institutionId: ""
  };

  const inventories = get(allInventoriesSelector);
  const inpaas =
    mapping.inpaas === undefined
      ? undefined
      : inventories.find(it => it.id === mapping.inpaas);
  const assetExplorer =
    mapping.assetExplorer === undefined
      ? undefined
      : inventories.find(it => it.id === mapping.assetExplorer);
  const bestFit =
    mapping.bestFit === undefined
      ? undefined
      : inventories.find(it => it.id === mapping.bestFit);
  return {
    inventories,
    inpaas,
    bestFit,
    assetExplorer
  };
}

interface InventoryData {
  universeId: string;
  label: string;
}

export const saveHandler = async ({
  institutionId,
  inpaas,
  inpaasSelected,
  bestFit,
  bestfitSelected,
  assetExplorer,
  explorerSelected,
  inventories
}: {
  institutionId: string;
  inpaas?: InventoryMetadata;
  inpaasSelected: InventoryData;
  bestFit?: InventoryMetadata;
  bestfitSelected: InventoryData;
  assetExplorer?: InventoryMetadata;
  explorerSelected: InventoryData;
  inventories: InventoryMetadata[];
}) => {
  if (
    (!inpaas && inpaasSelected.universeId !== "defaultId") ||
    (inpaas && inpaas.id !== inpaasSelected.universeId)
  )
    await institutionInventoryMappingApi.createOrUpdateInstitutionInventoryMapping(
      institutionId,
      {
        app: AppType.InPaaS,
        inventoryId:
          inpaasSelected.universeId === "defaultId"
            ? undefined
            : inpaasSelected.universeId
      }
    );

  if (
    (!bestFit && bestfitSelected.universeId !== "defaultId") ||
    (bestFit && bestFit.id !== bestfitSelected.universeId)
  )
    await institutionInventoryMappingApi.createOrUpdateInstitutionInventoryMapping(
      institutionId,
      {
        app: AppType.BestFit,
        inventoryId:
          bestfitSelected.universeId === "defaultId"
            ? undefined
            : bestfitSelected.universeId
      }
    );

  if (
    (!assetExplorer && explorerSelected.universeId !== "defaultId") ||
    (assetExplorer && assetExplorer.id !== explorerSelected.universeId)
  )
    await institutionInventoryMappingApi.createOrUpdateInstitutionInventoryMapping(
      institutionId,
      {
        app: AppType.AssetExplorer,
        inventoryId:
          explorerSelected.universeId === "defaultId"
            ? undefined
            : explorerSelected.universeId
      }
    );
  const newInpaas =
    inpaasSelected.universeId === "defaultId"
      ? undefined
      : inventories.find(it => it.id === inpaasSelected.universeId);
  const newBestFit =
    bestfitSelected.universeId === "defaultId"
      ? undefined
      : inventories.find(it => it.id === bestfitSelected.universeId);
  const newExplorer =
    explorerSelected.universeId === "defaultId"
      ? undefined
      : inventories.find(it => it.id === explorerSelected.universeId);

  return { newInpaas, newBestFit, newExplorer };
};
