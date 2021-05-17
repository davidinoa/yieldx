import React from "react";
import ModalBase from "./ModalBase";
import { render } from "../../test/utils";

test("renders", () => {
  const { container } = render(
    <ModalBase show onHide={jest.fn}>
      modal content goes here
    </ModalBase>
  );
  expect(container).toBeDefined();
});
