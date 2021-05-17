import React from "react";
import { render, screen, waitFor } from "test/utils";
import { Spinner } from "elements/Spinner/Spinner";
import CheckBalanceModal from "./CheckBalanceModal";

describe("Cash Balance Review Modal test", () => {
  const { container } = render(
    <React.Suspense fallback={<Spinner />}>
      <CheckBalanceModal />
    </React.Suspense>,
    {
      route:
        "/yieldx/execute-portfolio/preferences?portfolioId=mock-portfolio-id-1-2&portfolioType=LIVE"
    }
  );
  test("buttons", async () => {
    await waitFor(() => screen.queryByText(/continue/));
    expect(container).toBeDefined();
  });
});
