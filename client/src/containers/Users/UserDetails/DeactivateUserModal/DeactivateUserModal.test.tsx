import React from "react";
import DeactivateUserModal from "./DeactivateUserModal";
import { render } from "../../../../test/utils";

test("renders", () => {
  const { container } = render(
    <DeactivateUserModal show onHide={jest.fn} userId="" deactivating />
  );
  expect(container).toBeDefined();
});
