import React from "react";
import { render } from "@testing-library/react";
import Pagination from "./Pagination";

test("should render", () => {
  const { container } = render(
    <Pagination
      current={1}
      total={1}
      handleChange={(pageNum: number) => pageNum}
    />
  );
  expect(container).toBeDefined();
});
