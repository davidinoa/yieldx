import React from "react";
import { Asset } from "@bondhouse/rover-universe";
import { waitFor } from "@testing-library/react";
import { render } from "test/utils";
import muni from "__mocks__/models/assets/muni";
import AssetDetails from "./AssetDetails";

test("should have the name and ticker as the heading", async () => {
  const asset: Asset = { id: "muni" };
  const result = render(<AssetDetails asset={asset} onHide={jest.fn} />);
  const heading = await waitFor(() => result.getByRole("heading"));
  expect(heading.textContent).toBe(`Ticker: ${muni.ticker}${muni.name}`);
});
