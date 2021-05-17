import { assign, createMachine, TransitionsConfig } from "xstate";
import {
  Asset,
  AssetResult,
  Filter,
  SearchAssetRequest,
  SortOrderEnum
} from "@bondhouse/search";
import { Column, ColumnApi, GridApi, RowNode } from "@ag-grid-community/core";
import { Cart, CartItem, WatchList } from "@bondhouse/rover-preferences";
import React, { useCallback, useState } from "react";
import clsx from "clsx";
import { useLocation } from "react-router-dom";
import styled from "styled-components";
import { ReactComponent as Remove } from "../../../assets/svg/remove.svg";
import { ReactComponent as Add } from "../../../assets/svg/add.svg";
import { ReactComponent as Star } from "../../../assets/svg/star.svg";
import { AddToCartButton, FavoriteButton } from "./Search.styles";
import {
  assetsService,
  cartService,
  iceDataService,
  watchListService
} from "../../../services";
import {
  AssetClass,
  assetClasses,
  AssetClassesKeys
} from "./SearchOptionsBar/Dropdowns/ProductTypeFilter/ProductTypeFilter";
import {
  FilterYield,
  YieldItems
} from "./SearchOptionsBar/Dropdowns/YieldFilter/YieldFilter";
import debounce from "../../../util/debounce";
import { searchFields } from "./Search.constants";
import { defaultRowHeight } from "../../../grid/gridOptions";
import YieldXPortfolio, {
  YieldXPosition
} from "../../../models/YieldXPortfolio";
import { ReactComponent as InfoIcon } from "../../../assets/svg/info.svg";
import logger from "../../../models/Logger";
import { ratings as allRatings } from "./SearchOptionsBar/RatingsSlider/RatingsSlider";
import { convertInGridFilters, AgGridFilters } from "./utils";
import { EditIcon } from "containers/Portfolios/PortfolioDisplay/PortfolioHeader/PortfolioHeader.styles";

const defaultRowStyle = { height: `${defaultRowHeight}px` };

const searchTransitionsConfig: TransitionsConfig<
  SearchContext,
  SearchStateEvent
> = {
  GRID_READY: {
    target: "searching",
    actions: assign((_ctx, e) => ({
      gridApi: (e as GridReadyEvent).gridApi,
      columnApi: (e as GridReadyEvent).columnApi
    }))
  },
  QUERY: {
    target: "searching",
    actions: assign((ctx, e) => {
      ctx.abortController?.abort();
      const abortController = new AbortController();
      return {
        query: (e as QueryEvent).query,
        abortController
      };
    })
  },
  SELECT_ASSET_CLASS: {
    target: "searching",
    actions: assign((ctx, e) => {
      ctx.abortController?.abort();
      const { columnApi, hideNonTradable } = ctx;
      const {
        colKeys,
        key,
        filters,
        tradabilityFilters
      } = (e as SelectAssetClassEvent).assetClass;
      const visibleColKeys = new Set(colKeys);
      const visibleColumnKeys: string[] = [];
      const hiddenColumnKeys: string[] = [];
      if (columnApi != null) {
        columnApi.getAllColumns().forEach((column: Column) => {
          const colKey = column.getId();
          if (visibleColKeys.has(colKey)) {
            visibleColumnKeys.push(colKey);
          } else {
            hiddenColumnKeys.push(colKey);
          }
        });

        columnApi.setColumnsVisible(visibleColumnKeys, true);
        columnApi.setColumnsVisible(hiddenColumnKeys, false);

        // NOTE: these also control column ordering
        if (key === "bonds") {
          columnApi.moveColumn("issuerName", 2);
          columnApi.moveColumn("ticker", 4);
          columnApi.moveColumn("productType", 6);
          columnApi.moveColumn("rating", 7);
          columnApi.moveColumn("bond.maturityDate", 8);
          columnApi.moveColumn("price", 9);
          columnApi.moveColumn("analytics.yield", 10);
          columnApi.moveColumn("analytics.duration", 11);
          columnApi.moveColumn("scores.risk", 12);
          columnApi.moveColumn("minimumQuantity", 13);
          columnApi.moveColumn("scores.liquidity", 14);
          columnApi.moveColumn("identifiers.isin", 17);
        } else if (key === "all") {
          columnApi.moveColumn("name", 2);
          columnApi.moveColumn("identifiers.cusip", 4);
          columnApi.moveColumn("productType", 5);
          columnApi.moveColumn("fund.classification", 6);
          columnApi.moveColumn("price", 6);
          columnApi.moveColumn("analytics.yield", 7);
          columnApi.moveColumn("scores.risk", 8);
          columnApi.moveColumn("scores.liquidity", 9);
          columnApi.moveColumn("ticker", 10);
          columnApi.moveColumn("rating", 11);
          columnApi.moveColumn("issuerName", 12);
          columnApi.moveColumn("bond.maturityDate", 13);
          columnApi.moveColumn("minimumQuantity", 14);
          columnApi.moveColumn("minimumUnits", 15);
          columnApi.moveColumn("bond.accruedInterest", 16);
          columnApi.moveColumn("analytics.duration", 17);
        }
      }
      const abortController = new AbortController();
      return {
        assetClassFilters: filters,
        hideNonTradable:
          hideNonTradable && Object.keys(tradabilityFilters).length > 0,
        tradabilityFilters,
        selectedClass: key,
        abortController
      };
    })
  },
  SELECT_YIELD_FILTER: {
    target: "searching",
    actions: assign((_ctx, evt) => {
      const { yieldFilter } = evt as SelectYieldFilterEvent;
      // this abortcontroller is for being passed to searchUniverse.
      // It's actually used for aborting the current fetch request before sending a new one.
      const abortController = new AbortController();
      return {
        yieldFilters: yieldFilter.filters,
        selectedYield: yieldFilter.label === "" ? undefined : yieldFilter.label,
        abortController
      };
    })
  },
  APPLY_INGRID_FILTERS: {
    target: "searching",
    actions: assign((ctx, event) => {
      ctx.abortController?.abort();
      let { inGridFilters } = event as AgGridFilters;
      inGridFilters = convertInGridFilters(inGridFilters);
      const abortController = new AbortController();
      return {
        inGridFilters,
        abortController
      };
    })
  },
  SELECT_RATINGS_RANGE: {
    target: "searching",
    actions: assign((ctx, e) => {
      ctx.abortController?.abort();
      const abortController = new AbortController();
      return {
        ratings: (e as SelectRatingsRangeEvent).ratings,
        abortController
      };
    })
  },
  CLEAR_ALL: {
    target: "searching",
    actions: assign(ctx => {
      ctx.abortController?.abort();
      const { columnApi, gridApi } = ctx;
      if (gridApi != null) {
        gridApi.setFilterModel(null);
        gridApi.setSortModel(null);
      }
      const { colKeys, key, filters, tradabilityFilters } = assetClasses.all;
      const visibleColKeys = new Set(colKeys);
      const visibleColumnKeys: string[] = [];
      const hiddenColumnKeys: string[] = [];
      if (columnApi != null) {
        columnApi.getAllColumns().forEach((column: Column) => {
          const colKey = column.getId();
          if (visibleColKeys.has(colKey)) {
            visibleColumnKeys.push(colKey);
          } else {
            hiddenColumnKeys.push(colKey);
          }
        });
        columnApi.setColumnsVisible(visibleColumnKeys, true);
        columnApi.setColumnsVisible(hiddenColumnKeys, false);
      }
      const abortController = new AbortController();
      return {
        assetClassFilters: filters,
        hideNonTradable: true,
        query: "",
        selectedClass: key,
        selectedYield: undefined,
        tradabilityFilters,
        yieldFilters: YieldItems[0].filters,
        abortController
      };
    })
  }
};

const SearchMachine = createMachine<
  SearchContext,
  SearchStateEvent,
  SearchState
>({
  initial: "init",
  id: "assetExplorer",
  invoke: {
    src: ctx => cb => {
      const watchListId = watchListService.subscribe(list => {
        cb({ type: "WATCH_LIST_UPDATE", data: list });
      });
      if (!ctx.isEditing) {
        const cartId = cartService.subscribe((cart, added, removed) => {
          cb({ type: "CART_UPDATE", data: cart, added, removed });
        });
        return () => {
          watchListService.unsubscribe(watchListId);
          cartService.unsubscribe(cartId);
        };
      }
      const cartId = cartService.subscribeToPortfolioCart(
        (cart, added, removed) => {
          cb({ type: "CART_UPDATE", data: cart, added, removed });
        }
      );
      return () => {
        watchListService.unsubscribe(watchListId);
        cartService.unsubscribeFromPortfolioCart(cartId);
      };
    }
  },

  states: {
    init: {
      on: searchTransitionsConfig,
      invoke: {
        src: async (_ctx: SearchContext) => {
          try {
            const watchList = await watchListService.getWatchList();
            if (!_ctx.isEditing) {
              const cart = await cartService.getCart();
              return {
                cart,
                watchList
              };
            }
            const cart = await cartService.getPortfolioCart();
            return {
              cart,
              watchList
            };
          } catch (err) {
            throw new Error(err);
          }
        },
        onDone: {
          target: "gridMounted",
          actions: assign((_ctx: SearchContext, e) => {
            const { rowData, found, cart, watchList } = e.data;
            return {
              rowData,
              found,
              cart,
              watchList
            };
          })
        },
        onError: {
          target: "failure",
          actions: (_, e) => logger.error("Search", e)
        }
      }
    },
    searching: {
      entry: ctx => ctx.gridApi?.showLoadingOverlay(),
      exit: ctx => ctx.gridApi?.hideOverlay(),
      on: searchTransitionsConfig,
      invoke: {
        src: (ctx: SearchContext) => {
          return searchUniverse(
            ctx.query,
            ctx.assetClassFilters,
            1000,
            ctx.hideNonTradable,
            ctx.tradabilityFilters,
            ctx.yieldFilters,
            ctx.inGridFilters,
            ctx.ratings,
            ctx.selectedClass,
            ctx.abortController,
            ctx.inventoryId
          );
        },
        onDone: {
          target: "gridMounted",
          actions: assign((_ctx, e: SearchCompleteEvent) => {
            const { rowData, found } = e.data;
            return {
              rowData,
              found,
              abortController: undefined
            };
          })
        },
        onError: {
          target: "gridMounted",
          actions: (ctx, e) => {
            logger.error("Search", e, ctx);
          }
        }
      }
    },
    gridMounted: {
      on: {
        ...searchTransitionsConfig,
        RENDER_WATCHLIST: {
          target: "fetchWatchlistAssets"
        },
        TOGGLE_HIDE: {
          actions: assign(ctx => ({
            hideNonTradable: !ctx.hideNonTradable,
            tradabilityFilters: {
              "universes.liquid": {
                equalsBoolean: !ctx.hideNonTradable
              }
            }
          })),
          target: "searching"
        },
        CART_UPDATE: {
          actions: assign((ctx, e) => {
            const { gridApi } = ctx;
            const { data, added, removed } = e as CartUpdateEvent;
            if (gridApi != null) {
              const rowNodes = [...added, ...removed]
                .map((assetId: string) => {
                  return gridApi.getRowNode(assetId);
                })
                .filter(node => node != null);
              // Using a timeout here is the only obvious way to get this to work. The grid will re-render, so calling
              // the refreshCells method straight away will result in a race.
              setTimeout(() => {
                gridApi.refreshCells({
                  rowNodes,
                  columns: ["addToCart"],
                  force: true
                });
              }, 200);
            }
            return {
              cart: data
            };
          })
        }
      }
    },
    failure: {},
    fetchWatchlistAssets: {
      invoke: {
        src: ctx => async () => {
          if (ctx.watchList) {
            try {
              return await Promise.all(
                ctx.watchList.items.map(item =>
                  assetsService.getAsset(item.assetId)
                )
              );
            } catch (err) {
              throw new Error(err);
            }
          }
          return undefined;
        },
        onDone: {
          target: "renderingWatchlist",
          actions: assign((_ctx, e) => ({
            rowData: e.data
          }))
        }
      }
    },
    renderingWatchlist: {
      entry: assign(ctx => {
        const list = ctx.watchList?.items.map(item => item.assetId) ?? [];
        return {
          ...ctx,
          rowData: ctx.rowData?.filter(asset => {
            return list.includes(asset.id);
          })
        };
      }),
      on: {
        WATCH_LIST_UPDATE: {
          target: "renderingWatchlist",
          actions: assign((_ctx, e) => ({
            watchList: (e as WatchListUpdateEvent).data
          }))
        }
      }
    }
  }
});

export async function searchUniverse(
  query: string,
  assetFilters: Record<string, Filter>,
  size: number,
  hideNonTradable: boolean,
  tradabilityFilters: Record<string, Filter>,
  yieldFilters: Record<string, Filter>,
  inGridFilters: AgGridFilters,
  ratings: string[],
  selectedClass: AssetClassesKeys,
  controller: AbortController | undefined,
  inventoryId?: string
) {
  return new Promise<{ rowData: RowData; found: number }>((res, rej) => {
    debounce(() => {
      let ratingsFilter: Record<string, Filter> = {};

      if (ratings.length !== allRatings.length) {
        switch (selectedClass) {
          case "bonds":
          case "corporates":
          case "munis":
            ratingsFilter = {
              rating: {
                inText: ratings
              }
            };
            break;
          default:
            break;
        }
      }
      const request: SearchAssetRequest = {
        query,
        fields: searchFields,
        filters: {
          ...assetFilters,
          ...inGridFilters,
          ...yieldFilters,
          ...(hideNonTradable ? tradabilityFilters ?? {} : {}),
          ...ratingsFilter
        },
        sort: [
          {
            field: "_score",
            order: SortOrderEnum.Descending
          },
          {
            field: "_id",
            order: SortOrderEnum.Descending
          }
        ],
        from: 0,
        size
      };
      if (inventoryId && request.filters)
        request.filters[`universes.custom.${inventoryId}`] = {
          equalsBoolean: true
        };
      fetch("/apis/search/v1/assets/_search", {
        body: JSON.stringify(request),
        headers: {
          "Content-Type": "application/json"
        },
        method: "POST",
        signal: controller?.signal
      })
        .then(data => data.json())
        .then(({ results, found }) => {
          const nextRowData = results.map((result: AssetResult) => {
            const { asset, score } = result;
            // If adding new custom fields, ensure you keep additionalSearchFields up to date in Search.constants.ts
            return {
              ...asset,
              score
            };
          });
          res({
            rowData: nextRowData,
            found
          });
        })
        .catch(err => rej(err));
    }, 200)();
  });
}

export type RowData = (AssetResult["asset"] & {
  score: number;
  rating?: string;
})[];

export interface SearchContext {
  inventoryId?: string;
  isEditing: boolean;
  rowData?: RowData;
  found?: number;
  gridApi?: GridApi;
  columnApi?: ColumnApi;
  query: string;
  assetClassFilters: Record<string, Filter>;
  selectedClass: AssetClassesKeys;
  selectedYield?: string;
  yieldFilters: Record<string, Filter>;
  inGridFilters: AgGridFilters;
  ratings: string[];
  hideNonTradable: boolean;
  tradabilityFilters: Record<string, Filter>;
  cart?: Cart;
  watchList?: WatchList;
  error?: string;
  abortController?: AbortController;
}

type FetchEvent = {
  type: "FETCH_EVENT";
  request: SearchAssetRequest;
  debounce?: boolean;
};

type QueryEvent = {
  type: "QUERY";
  query: string;
  controller?: AbortController;
};

type SearchCompleteEvent = {
  type: string;
  data: {
    rowData: SearchContext["rowData"];
    found: SearchContext["found"];
  };
};

type SelectAssetClassEvent = {
  type: "SELECT_ASSET_CLASS";
  assetClass: AssetClass;
};

type SelectYieldFilterEvent = {
  type: "SELECT_YIELD_FILTER";
  yieldFilter: FilterYield;
};

type ApplyInGridFilterEvent = {
  type: "APPLY_INGRID_FILTERS";
  inGridFilters: AgGridFilters;
};

type SelectRatingsRangeEvent = {
  type: "SELECT_RATINGS_RANGE";
  ratings: string[];
};

type ClearAllEvent = {
  type: "CLEAR_ALL";
};
type GridReadyEvent = {
  type: "GRID_READY";
  gridApi: GridApi;
  columnApi: ColumnApi;
};
type CartUpdateEvent = {
  type: "CART_UPDATE";
  data: Cart;
  added: string[];
  removed: string[];
};
type WatchListUpdateEvent = {
  type: "WATCH_LIST_UPDATE";
  data: WatchList;
};
type HideTradableEvent = {
  type: "TOGGLE_HIDE";
};
export type SearchStateEvent =
  | FetchEvent
  | HideTradableEvent
  | SearchCompleteEvent
  | { type: "REJECT"; error: string }
  | QueryEvent
  | SelectAssetClassEvent
  | SelectYieldFilterEvent
  | ApplyInGridFilterEvent
  | SelectRatingsRangeEvent
  | ClearAllEvent
  | GridReadyEvent
  | CartUpdateEvent
  | WatchListUpdateEvent;

type SearchState =
  | {
      value: "init";
      context: SearchContext;
    }
  | {
      value: "gridMounted";
      context: SearchContext & {
        rowData: RowData;
        gridApi: GridApi;
        columnApi: ColumnApi;
        query: string;
        assetClassFilters: Record<string, Filter>;
        ratings: string[];
        selectedClass: AssetClassesKeys;
        cart: Cart;
        watchList: WatchList;
        error: undefined;
      };
    }
  | {
      value: "initialLoaded";
      context: SearchContext & {
        rowData: RowData;
        gridApi?: undefined;
        columnApi?: undefined;
        query: string;
        assetClassFilters: Record<string, Filter>;
        ratings: string[];
        selectedClass: AssetClassesKeys;
        cart: Cart;
        watchList: WatchList;
        error: undefined;
      };
    };

export function createFrameworkComponents() {
  return {
    addToCartRenderer: createAddToCartRenderer(),
    editPositionRenderer: createEditPositionRenderer(),
    favoriteRenderer: createFavoriteRenderer(),
    latestOfferRenderer: createLatestOfferRenderer(),
    removePositionRenderer: createRemovePositionRenderer(),
    nonTradableRenderer: createNonTradableRenderer()
  };
}

export interface RendererProps {
  node: RowNode;
  value: string;
  columnApi: ColumnApi;
  colDef: {
    field: string;
  };
  data: YieldXPosition;
  context: {
    cart: Cart;
    portfolio: YieldXPortfolio;
    watchList: WatchList;
    editPosition: (assetId: string) => void;
    addToCart: (assetId: string) => void;
    removeFromCart: (assetId: string) => void;
    addFavorite: (assetId: string) => void;
    removeFavorite: (assetId: string) => void;
  };
}

function createAddToCartRenderer(): React.FunctionComponent<RendererProps> {
  return (props: RendererProps) => {
    const {
      value,
      context: { cart, addToCart, removeFromCart }
    } = props;
    const [isInCart, setInCart] = useState(
      cart == null
        ? false
        : cart.items.some((cartItem: CartItem) => cartItem.assetId === value)
    );
    return (
      <div
        className="d-flex justify-content-start align-items-center"
        style={defaultRowStyle}
      >
        <AddToCartButton
          data-testid="AddToCartButton"
          onClick={() => {
            if (isInCart) {
              removeFromCart(value);
            } else {
              addToCart(value);
            }
            setInCart(prev => !prev);
          }}
        >
          {isInCart ? <Remove /> : <Add />}
          {isInCart ? "remove" : "add"}
        </AddToCartButton>
      </div>
    );
  };
}

const StyledInfo = styled(InfoIcon)`
  path {
    fill: var(--caution);
  }
`;

export function createNonTradableRenderer(): React.FunctionComponent<
  RendererProps
> {
  return ({ value }: RendererProps) => {
    return (
      <div className="m-auto" style={{ width: "fit-content" }}>
        {!value ? <StyledInfo /> : "--"}
      </div>
    );
  };
}

export function createFavoriteRenderer(): React.FunctionComponent<
  RendererProps
> {
  return (props: RendererProps) => {
    const {
      value,
      context: { watchList = { items: [] }, removeFavorite, addFavorite }
    } = props;
    const { pathname } = useLocation();

    const [favorite, setFavorited] = React.useState(
      pathname.includes("favorites")
        ? true
        : Boolean(watchList.items.find(cv => cv.assetId === value))
    );

    const toggleFavorite = useCallback(() => {
      if (favorite) {
        removeFavorite(value);
      } else {
        addFavorite(value);
      }
      setFavorited(prev => !prev);
    }, [favorite, value, removeFavorite, addFavorite, setFavorited]);

    return (
      <div
        className="d-flex justify-content-center align-items-center"
        style={defaultRowStyle}
      >
        <FavoriteButton
          className="d-flex justify-content-center align-items-center"
          data-testid={`Favorite-${value}`}
          onClick={toggleFavorite}
        >
          <Star className={clsx({ favorite })} />
        </FavoriteButton>
      </div>
    );
  };
}

export function createLatestOfferRenderer(): React.FunctionComponent<
  RendererProps
> {
  return (props: RendererProps) => {
    const [offer, setOffer] = useState<number | null>(null);
    const { data } = props;

    const asset: Asset | undefined = (data as YieldXPosition).asset ?? data;
    iceDataService
      .getBestOffer(asset)
      .then(setOffer)
      .catch(error => logger.error("Search", error));
    return <div>{offer}</div>;
  };
}

function createRemovePositionRenderer(): React.FunctionComponent<
  RendererProps
> {
  return (props: RendererProps) => {
    const {
      data,
      value,
      context: { portfolio, removeFromCart }
    } = props;
    return (
      <div
        className="d-flex justify-content-start align-items-center"
        style={defaultRowStyle}
      >
        <AddToCartButton
          data-testid={`AddToCartButton-${data.assetId}`}
          onClick={() => {
            portfolio.sellPosition(data.id);
            removeFromCart(value);
          }}
        >
          <Remove />
          remove
        </AddToCartButton>
      </div>
    );
  };
}

export function createEditPositionRenderer(): React.FunctionComponent<
  RendererProps
> {
  return React.memo(
    (props: RendererProps) => {
      const {
        data,
        context: { editPosition }
      } = props;
      return (
        <div
          className="d-flex justify-content-start align-items-center"
          style={defaultRowStyle}
        >
          <AddToCartButton
            data-testid={`EditPosition-${data.assetId}`}
            onClick={() => editPosition(data.assetId)}
          >
            <EditIcon />
            edit
          </AddToCartButton>
        </div>
      );
    },
    (prev, next) =>
      prev.data.assetId === next.data.assetId &&
      prev.context.editPosition === next.context.editPosition
  );
}

export default SearchMachine;
