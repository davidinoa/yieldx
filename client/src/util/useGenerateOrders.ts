import { Asset5 } from "providers/graphql/hooks";
import { YieldXPosition } from "models/YieldXPortfolio";
import usePriceAssets from "providers/graphql/hooks/usePriceAssets";
import { ExecutionPreferencesType } from "containers/PortfolioExecution/ExecutionPreferences/ExecutionPreferences";
import { positionsToCreateOrderInputs } from "util/positionsToCreateOrderInputs";

function useGenerateOrders(
  selectedPositions: YieldXPosition[],
  executionPreferences?: ExecutionPreferencesType,
  originalPositions?: YieldXPosition[]
) {
  const { pricesMap, loading } = usePriceAssets(
    selectedPositions.map(position => ({
      asset: position.asset as Asset5,
      quantity: position?.quantity
    }))
  );
  const { pricesMap: originalPricesMap } = usePriceAssets(
    originalPositions?.map(position => ({
      asset: position.asset as Asset5,
      quantity: position?.quantity
    }))
  );

  const ordersToRaise = positionsToCreateOrderInputs(
    selectedPositions,
    pricesMap,
    originalPricesMap,
    executionPreferences,
    originalPositions
  );
  return {
    ordersToRaise,
    loading
  };
}

export default useGenerateOrders;
