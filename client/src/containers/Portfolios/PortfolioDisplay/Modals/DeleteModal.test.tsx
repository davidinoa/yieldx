import React from "react";
import DeleteModal from "./DeleteModal";
import { render } from "../../../../test/utils";

test("mounts", () => {
  const { container } = render(
    <DeleteModal onDelete={() => Promise.resolve()} onHide={jest.fn} />
  );
  expect(container).toBeInTheDocument();
});
