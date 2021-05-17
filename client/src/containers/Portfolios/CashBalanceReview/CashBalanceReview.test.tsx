import React from "react";
import { render } from "../../../test/utils";
import CashBalanceReview from "./CashBalanceReview";

describe.skip("Cash Balance Review test", () => {
  test("should render", async () => {
    render(<CashBalanceReview />, {
      route: "/edit-portfolio/balance/mockBestFitPortfolioId"
    });
  });
});
