import React from "react";
import { render } from "../../../test/utils";
import SetDefaultUniverses from "./SetDefaultUniverses";

describe("set universe default tests", () => {
  test("should correctly display current defaults", async () => {
    const { container } = render(<SetDefaultUniverses />);
    expect(container).toBeInTheDocument();
  });
});
