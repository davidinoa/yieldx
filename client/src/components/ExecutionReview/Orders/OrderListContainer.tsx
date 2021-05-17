import React from "react";
import {
  Asset5,
  AssetType,
  CreateOrderRequestInput
} from "providers/graphql/hooks";
import arrayToHashMap from "util/arrayToHashMap";
import { ColAlign, List } from "components/ListPages/List";
import Decimal from "util/Decimal";

interface Props {
  allAssets: Asset5[];
  ordersToRaise: (CreateOrderRequestInput & { metadata: { yield: number } })[];
}

export function OrderListContainer({ ordersToRaise, allAssets }: Props) {
  const assetMap = arrayToHashMap(allAssets, "id");
  const listItems = ordersToRaise.map(orderReq => {
    const currAsset = assetMap[orderReq.assetId];
    const { priceLimit, metadata, quantity, spotPrice: price } = orderReq;
    const bondYieldCol =
      currAsset.assetType === AssetType.Bond
        ? [
            {
              label: "YIELD",
              value: `${Decimal.format(metadata.yield)}%`,
              xs: 3,
              align: ColAlign.Center
            }
          ]
        : [];
    if (
      price === undefined ||
      price === null ||
      priceLimit === null ||
      priceLimit === undefined
    )
      throw Error("No price found");
    return [
      {
        label: "ASSET NAME",
        value: currAsset.name || "n/a",
        className: "pl-3"
      },
      {
        label: "CUSIP",
        value: currAsset.identifiers?.cusip || "n/a",
        xs: 3,
        align: ColAlign.Center
      },
      {
        label: "REFERENCE PRICE",
        value: `$${Decimal.format(price)}`,
        xs: 3,
        align: ColAlign.Center
      },
      {
        label: "LIMIT PRICE",
        value: `$${Decimal.format(priceLimit)}`,
        xs: 3,
        align: ColAlign.Center
      },
      ...bondYieldCol,
      {
        label: "QUANTITY",
        value: quantity.toLocaleString(undefined, {
          minimumFractionDigits: 0,
          maximumFractionDigits: 0
        }),
        xs: 3,
        align: ColAlign.Center
      },
      {
        label: "ACTION",
        value: orderReq.direction,
        xs: 3,
        align: ColAlign.Center
      }
    ];
  });
  return <List itemsPerPage={15} listItems={listItems} />;
}
