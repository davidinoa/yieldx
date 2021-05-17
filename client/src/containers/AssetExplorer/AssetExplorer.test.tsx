import React from "react";
import { render } from "test/utils";
import AssetExplorer from "./AssetExplorer";

test("renders", async () => {
  const { container } = render(<AssetExplorer />, {
    route: "/asset-explorer"
  });
  expect(container).toBeInTheDocument();
});
