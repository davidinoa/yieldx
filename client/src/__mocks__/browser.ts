import { setupWorker, rest } from "msw";
import mockRequests from "../mock-requests";

export const worker = setupWorker(...mockRequests);
// Make the `worker` and `rest` references available globally,
// so they can be accessed in both runtime and test suites.
window.msw = {
  worker,
  rest
};
