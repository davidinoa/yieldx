import { ApolloCache, MutationUpdaterFn } from "@apollo/client/core";
import {
  Order2,
  OrderManagementGetOrdersDocument,
  OrderManagementGetOrdersQuery,
  OrderManagementGetOrdersQueryVariables,
  PostPortfolioOrdersMutation,
  PostPortfolioOrdersRebalanceMutation
} from "./index";
import { useCallback } from "react";

const updateOrders = (
  cache: ApolloCache<unknown>,
  portfolioId: string,
  newOrders: Array<Order2>
) => {
  const currData = cache.readQuery<
    OrderManagementGetOrdersQuery,
    OrderManagementGetOrdersQueryVariables
  >({
    query: OrderManagementGetOrdersDocument,
    variables: {
      portfolioId
    }
  });
  const currOrders = currData?.orderManagementGetOrders?.orders as
    | Array<Order2>
    | undefined;

  cache.writeQuery({
    data: {
      orderManagementGetOrders: {
        orders: newOrders.concat(currOrders ?? [])
      }
    },
    query: OrderManagementGetOrdersDocument,
    variables: {
      portfolioId
    }
  });
};

export const useUpdateRebalanceCache = (portfolioId?: string) =>
  useCallback(
    (
      cache: Parameters<
        MutationUpdaterFn<PostPortfolioOrdersRebalanceMutation>
      >[0],
      {
        data
      }: Parameters<MutationUpdaterFn<PostPortfolioOrdersRebalanceMutation>>[1]
    ) => {
      if (!portfolioId) throw Error("No original portfolio");
      const stagedOrders =
        data?.postPortfolioOrdersRebalance?.stagedOrders ?? [];
      const placedOrders =
        data?.postPortfolioOrdersRebalance?.placedOrders ?? [];
      updateOrders(
        cache,
        portfolioId,
        stagedOrders.concat(placedOrders) as Array<Order2>
      );
    },
    [portfolioId]
  );

export const useUpdateOrdersCache = (portfolioId?: string) =>
  useCallback(
    (
      cache: Parameters<MutationUpdaterFn<PostPortfolioOrdersMutation>>[0],
      { data }: Parameters<MutationUpdaterFn<PostPortfolioOrdersMutation>>[1]
    ) => {
      if (!portfolioId) throw Error("No original portfolio");
      const newOrder = data?.postPortfolioOrders?.order;
      if (!newOrder) throw Error("New order undefined");
      const currData = cache.readQuery<
        OrderManagementGetOrdersQuery,
        OrderManagementGetOrdersQueryVariables
      >({
        query: OrderManagementGetOrdersDocument,
        variables: {
          portfolioId
        }
      });
      const currOrders = currData?.orderManagementGetOrders?.orders as Array<
        Order2
      >;
      updateOrders(cache, portfolioId, [newOrder, ...(currOrders ?? [])]);
    },
    [portfolioId]
  );
