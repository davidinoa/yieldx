import React from "react";
import { render } from "../../../test/utils";
import { Spinner } from "../../../elements/Spinner/Spinner";
import CheckNonTradable from "./CheckNonTradable";

it("renders", async () => {
  const { container } = render(
    <React.Suspense fallback={<Spinner/>}>
      <CheckNonTradable/>
    </React.Suspense>
  );
  expect(container).toBeInTheDocument();
});
