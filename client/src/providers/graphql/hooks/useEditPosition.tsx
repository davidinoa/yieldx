import { useCallback, useState } from "react";
import {
  Asset5,
  CreateOrderRequestInput,
  Direction2,
  Investor,
  Order2,
  Portfolio3,
  Position2,
  Price,
  usePositionManagementGetExternalPortfolioQuery,
  usePositionManagementGetPortfolioQuery,
  usePostPortfolioOrdersMutation,
  usePricesPriceAssetQuery,
  useRoverUniverseGetAssetQuery
} from "providers/graphql/hooks";
import useGetPortfolioInvestor from "providers/graphql/hooks/useGetPortfolioInvestor";
import { ApolloError } from "@apollo/client";
import { useHistory } from "react-router-dom";

type HookOptions = {
  onCompleted?: () => void;
  onError?: () => void;
  skip?: boolean;
};

export type EditPositionData = {
  asset?: Asset5 | null;
  position?: Position2 | null;
  investor?: Investor | null;
  order: CreateOrderRequestInput & OrderMetadata;
  spotPrice?: number;
  cashAvailable?: number;
  originalPortfolio?: Portfolio3;
  currentPortfolio?: Portfolio3;
  currentPositionValue: number;
  currentPositionQuantity: number;
  currentPortfolioValue: number;
  errorText: string | undefined;
};

type EditPositionErrors = {
  portfolio?: ApolloError;
  asset?: ApolloError;
  investor?: ApolloError;
};

export type EditPositionResult = {
  data: EditPositionData;
  loading: { [key: string]: boolean };
  error: EditPositionErrors;
  setDirection: (direction: Direction2) => void;
  setQuantity: (quantity: Order2["quantity"]) => void;
  setGoodTillCancel: (gtc: boolean) => void;
  setFullFillRequired: (full: boolean) => void;
  postOrder: () => void;
};

// type ResUnion = ReturnType<typeof
type ExternalData = ReturnType<
  typeof usePositionManagementGetExternalPortfolioQuery
>["data"];
type LiveData = ReturnType<
  typeof usePositionManagementGetPortfolioQuery
>["data"];

type OrderMetadata = {
  goodTillCancel: boolean;
  fullFillRequired: boolean;
  metadata: { yield: number };
};

type PortfolioQueryData = ExternalData | LiveData;

const extractPortfolio = (data: PortfolioQueryData) => {
  if (data?.hasOwnProperty("positionManagementGetExternalPortfolio")) {
    return (data! as ExternalData)?.positionManagementGetExternalPortfolio
      ?.portfolio;
  }
  if (data?.hasOwnProperty("positionManagementGetPortfolio")) {
    return (data! as LiveData)?.positionManagementGetPortfolio?.portfolio;
  }
  return undefined;
};

// TODO: remove this after removing portfolio object requirement from consuming components
function convertToBadPortfolio(
  assetId: string,
  portfolio?: Portfolio3,
  quantity = 0
) {
  if (!portfolio) return undefined;
  const portfolioIdNew = `optimizer-${portfolio.id}`;
  // TODO: @alfredo -> why does this override all the quantities
  return portfolio
    ? {
        ...portfolio,
        id: portfolioIdNew,
        positions: portfolio?.positions
          .map(it => {
            if (it?.assetId === assetId)
              return {
                ...it,
                portfolioId: portfolioIdNew,
                quantity
              };
            return { ...it, portfolioId: portfolioIdNew };
          })
          .filter(it => !!it) as Position2[]
      }
    : undefined;
}

function calculatePositionValue(
  positions: Pick<Position2, "settled">[],
  spotPrice: number
) {
  return {
    value: positions.reduce((res, pos) => {
      return res + (pos.settled || 0) * spotPrice;
    }, 0),
    quantity: positions.reduce((res, pos) => {
      return res + (pos.settled || 0);
    }, 0)
  };
}

function useSwitchPortfolio(
  type: string,
  portfolioId: string,
  skip: boolean,
  onCompleted?: (data?: Portfolio3) => void
) {
  const external = usePositionManagementGetExternalPortfolioQuery({
    variables: { id: portfolioId },
    skip: type !== "external" || skip,
    onCompleted: onCompleted
      ? data => onCompleted(extractPortfolio(data))
      : undefined
  });
  const live = usePositionManagementGetPortfolioQuery({
    variables: { id: portfolioId },
    skip: type !== "live" || skip,
    onCompleted: onCompleted
      ? data => onCompleted(extractPortfolio(data))
      : undefined
  });
  return {
    data: {
      portfolio: extractPortfolio(external.data || live.data)
    },
    loading: live?.loading || external?.loading,
    error: live?.error || external?.error
  };
}

export function useEditPosition(
  type: string,
  portfolioId: string,
  assetId: string,
  options: HookOptions = { skip: false }
): EditPositionResult {
  const history = useHistory();
  const skipAll = options.skip === true;
  const [direction, setDirection] = useState<Direction2>(Direction2.Buy);
  const [quantity, internalSetQuantity] = useState<Order2["quantity"]>(0);
  const [goodTillCancel, setGoodTillCancel] = useState<boolean>(false);
  const [fullFillRequired, setFullFillRequired] = useState<boolean>(false);
  const [cashAvailable, setCashAvailable] = useState<number | undefined>();
  const [spotPrice, setSpotPrice] = useState<Price>();
  const [errorText, setErrorText] = useState<string>();

  const { loading: pricesLoading } = usePricesPriceAssetQuery({
    variables: {
      priceAssetRequestInput: {
        assetId
      }
    },
    onCompleted: data => {
      const price = data.pricesPriceAsset?.prices.slice(-1)[0];
      if (price) setSpotPrice(price);
    },
    skip: skipAll
  });

  const portfolioQuery = useSwitchPortfolio(
    type,
    portfolioId,
    skipAll,
    resolvedPortfolio => {
      const cashPosition = resolvedPortfolio?.positions.find(
        pos => pos?.id === "CASH-USD" || pos?.id === "USD"
      );
      setCashAvailable(
        (cashPosition?.unsettled ?? 0) > 0
          ? cashPosition?.settled ?? 0
          : cashPosition?.quantity ?? 0
      );
    }
  );
  const assetQuery = useRoverUniverseGetAssetQuery({
    variables: {
      id: assetId,
      date: undefined
    },
    skip: skipAll
  });
  const investorQuery = useGetPortfolioInvestor(portfolioId, skipAll);
  const asset = assetQuery.data?.roverUniverseGetAsset?.asset;
  const portfolio = portfolioQuery.data?.portfolio;
  const yieldToMaturity = spotPrice?.yieldToMaturity;
  const yieldToWorst = spotPrice?.yieldToWorst;
  const assetYield = asset?.analytics?.yield;
  const referencePrice = spotPrice?.price || asset?.price;
  const order: CreateOrderRequestInput & OrderMetadata = {
    quantity,
    direction,
    assetId,
    goodTillCancel,
    fullFillRequired,
    spotPrice: referencePrice,
    metadata: {
      yield: yieldToWorst || yieldToMaturity || assetYield || 0
    }
  };
  if (direction === Direction2.Buy && referencePrice)
    order.priceLimit = referencePrice * 1.02;
  if (direction === Direction2.Sell && referencePrice)
    order.priceLimit = referencePrice * 0.98;
  const [ordersMutation] = usePostPortfolioOrdersMutation({
    variables: {
      createOrderRequestInput: order,
      portfolioId
    },
    onCompleted: options.onCompleted,
    onError: options.onError
  });
  const postOrder = useCallback(async () => {
    await ordersMutation();
    history.push(`/portfolios/${type}/${portfolioId}#orders`);
  }, [ordersMutation, portfolioId, history, type]);

  const position = portfolio?.positions.find(pos => assetId === pos?.assetId);
  const allPositions: Position2[] =
    (portfolio?.positions.filter(p => !!p) as Position2[]) || [];
  const positions: Position2[] = allPositions.filter(
    p => p.assetId === assetId
  ) as Position2[];
  const currentPrice = spotPrice?.price || asset?.price || 0;
  const currentPositionValue = calculatePositionValue(positions, currentPrice);
  const currentPortfolioValue = calculatePositionValue(
    allPositions,

    currentPrice
  );
  const currentPortfolio = convertToBadPortfolio(assetId, portfolio, quantity);

  const setQuantity = useCallback(
    quantityUpdate => {
      internalSetQuantity(quantityUpdate);
      const price = spotPrice?.price || asset?.price;
      if (!price || (!cashAvailable && direction === Direction2.Buy)) {
        return false;
      }
      // TODO: there are more rules here
      let isValidBuy = true;
      if (direction === Direction2.Buy) {
        const assetType = asset?.assetType;
        if (assetType === "FUND") {
          isValidBuy =
            quantityUpdate < Math.floor((cashAvailable || 0) / price);
        } else if (assetType === "BOND") {
          isValidBuy =
            quantityUpdate < Math.floor((cashAvailable || 0) / (price / 100));
        }
      }
      const isValidSell =
        direction === Direction2.Sell &&
        quantityUpdate <= (position?.quantity || 0);
      if (
        (direction === Direction2.Buy && isValidBuy) ||
        (direction === Direction2.Sell && isValidSell)
      ) {
        setErrorText("");
        return true;
      }

      if (direction === Direction2.Buy && !isValidBuy) {
        setErrorText("Market value exceeds cash available");
      }
      if (direction === Direction2.Sell && !isValidSell) {
        setErrorText(
          `${quantityUpdate} is greater than ${currentPositionValue.quantity}`
        );
      }
      return false;
    },
    [cashAvailable, spotPrice, direction, position, asset, currentPositionValue]
  );

  return {
    data: {
      asset,
      position,
      investor: investorQuery.investor,
      order,
      originalPortfolio: portfolio,
      currentPortfolio,
      cashAvailable,
      spotPrice: spotPrice?.price || asset?.price || undefined,
      currentPositionValue: currentPositionValue.value,
      currentPositionQuantity: currentPositionValue.quantity,
      currentPortfolioValue: currentPortfolioValue.value,
      errorText
    },
    loading: {
      assetQuery: assetQuery.loading,
      portfolioQuery: portfolioQuery.loading,
      investorQuery: investorQuery.loading,
      pricesLoading
    },
    error: {
      portfolio: portfolioQuery.error,
      asset: assetQuery.error,
      investor: investorQuery.error
    },

    setDirection,
    setQuantity,
    setGoodTillCancel,
    setFullFillRequired,
    postOrder
  };
}
