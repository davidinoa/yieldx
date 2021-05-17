import React from "react";
import ModalBase from "./ModalBase";
import { render } from "../../../../test/utils";

test("renders", () => {
  const { container } = render(
    <ModalBase onHide={jest.fn} show>
      modal content goes here
    </ModalBase>
  );
  expect(container).toBeDefined();
});
