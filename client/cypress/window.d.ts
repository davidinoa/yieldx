import { setupWorker, rest } from "msw";

interface WindowMSW {
  msw: {
    worker: ReturnType<typeof setupWorker>;
    rest: typeof rest;
  };
}

declare global {
  // eslint-disable-next-line
  interface Window extends WindowMSW {}
}
