import {
  useRoverUniverseGetAllInventoriesQuery,
  useIamGetInstitutionInventoryMappingQuery
} from "providers/graphql/hooks";
import getSelectedInventories from "util/getSelectedInventories";

function useInventoryMappings(institutionId?: string | null) {
  const {
    data: mappingData,
    loading: mappingLoading,
    error: mappingError
  } = useIamGetInstitutionInventoryMappingQuery({
    variables: {
      institutionId: institutionId ?? ""
    },
    skip: !institutionId
  });
  const {
    data: inventoriesData,
    loading: inventoriesLoading,
    error: inventoriesError
  } = useRoverUniverseGetAllInventoriesQuery({
    variables: {
      institutionId: institutionId ?? ""
    },
    skip: !institutionId
  });
  if (!institutionId)
    return {
      loading: false
    };
  const mapping =
    mappingData?.iamGetInstitutionInventoryMapping?.inventoryMapping;
  const inventories =
    inventoriesData?.roverUniverseGetAllInventories?.inventories;
  const { bestFit, assetExplorer, inpaas } = getSelectedInventories(
    mapping,
    inventories
  );
  return {
    bestFit,
    assetExplorer,
    inpaas,
    inventories,
    loading: mappingLoading || inventoriesLoading,
    error: mappingError || inventoriesError
  };
}

export default useInventoryMappings;
