import React from "react";
import {
  CreateOrReplacePreferencesRequest,
  CreateOrReplacePreferencesResponse,
  CreateOrderRequestDirectionEnum
} from "@bondhouse/rover-preferences";

// eslint-disable-next-line @typescript-eslint/no-empty-function,no-shadow
function PreferencesApi() {
  return {
    getPreferences: jest.fn(() => {
      return Promise.resolve({
        data: { preference: {} }
      });
    }),
    createOrReplacePreferences: jest.fn()
  };
}

PreferencesApi.prototype.createOrReplacePreferences = jest.fn(
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  (_portfolioId: string, _req?: CreateOrReplacePreferencesRequest) =>
    Promise.resolve<{ data: CreateOrReplacePreferencesResponse }>({
      data: {
        created: true,
        updated: false
      }
    })
);

function CartApi() {
  return {
    getCart(_id: string) {
      return new Promise(resolve =>
        resolve({
          data: {
            cart: {
              items: []
            }
          }
        })
      );
    }
  };
}

function WatchListApi() {
  return {
    getWatchList(_id: string) {
      return new Promise(resolve =>
        resolve({
          data: {
            watchList: {
              items: []
            }
          }
        })
      );
    }
  };
}

export {
  React,
  PreferencesApi,
  CreateOrderRequestDirectionEnum,
  CartApi,
  WatchListApi
};
