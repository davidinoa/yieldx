import React from "react";
import userEvent from "@testing-library/user-event";

import { createMemoryHistory } from "history";
import { waitFor } from "@testing-library/dom";
import { render, screen } from "test/utils";
import { mockMultiAssetPortfolio } from "__mocks__/models/mockYieldXPortfolio";
import { ValueBox } from "./ValueBox";

test.skip("edit portfolio value button", async () => {
  const history = createMemoryHistory();
  render(<ValueBox value={mockMultiAssetPortfolio.totalMarketValue} />, {
    history
  });
  userEvent.click(screen.getByRole("button"));
  await waitFor(() => {
    expect(history.location.pathname).toBe(
      `/asset-explorer/portfolio-builder/edit`
    );
  });
});
