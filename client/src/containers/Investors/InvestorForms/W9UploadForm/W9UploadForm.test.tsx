import React from "react";
import { Route, RouteChildrenProps } from "react-router-dom";
import { render, screen } from "../../../../test/utils";
import W9UploadForm from "./W9UploadForm";

describe("W9UploadForm", () => {
  test("component mounts without errors/warnings", async () => {
    render(
      <Route
        render={(props: RouteChildrenProps) => <W9UploadForm {...props} />}
      />
    );
    expect(screen.queryByText(/download w9 form/i)).toBeVisible();
  });
});
