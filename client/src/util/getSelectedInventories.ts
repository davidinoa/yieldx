import { InventoryMapping, InventoryMetadata } from "providers/graphql/hooks";

function getSelectedInventories(
  mapping?: InventoryMapping,
  inventories?: Array<InventoryMetadata | undefined | null>
) {
  const inpaas =
    mapping?.inpaas === undefined
      ? undefined
      : inventories?.find(it => it?.id === mapping.inpaas);
  const assetExplorer =
    mapping?.assetExplorer === undefined
      ? undefined
      : inventories?.find(it => it?.id === mapping?.assetExplorer);
  const bestFit =
    mapping?.bestFit === undefined
      ? undefined
      : inventories?.find(it => it?.id === mapping.bestFit);
  return {
    inpaas,
    bestFit,
    assetExplorer
  };
}

export default getSelectedInventories;
