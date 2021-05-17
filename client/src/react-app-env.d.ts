/* eslint-disable spaced-comment */
/// <reference types="react-scripts" />
import { rest, setupWorker } from "msw";
// Optimizer
export interface WindowMSW {
  msw: {
    worker: ReturnType<typeof setupWorker>;
    rest: typeof rest;
  };
}

declare module "*.png";
declare global {
  // eslint-disable-next-line
  interface Window extends WindowMSW {}
}
