import React from "react";
import { render } from "../../../test/utils";
import { Spinner } from "../../../elements/Spinner/Spinner";
import SelectFunding from "./SelectFunding";

it("renders", async () => {
  const { container } = render(
    <React.Suspense fallback={<Spinner />}>
      <SelectFunding transferDirection="DEPOSIT" warn={false} />
    </React.Suspense>
  );
  expect(container).toBeInTheDocument();
});
