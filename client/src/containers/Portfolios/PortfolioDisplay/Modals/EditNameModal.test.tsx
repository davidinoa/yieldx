import React from "react";
import EditNameModal from "./EditNameModal";
import { render } from "../../../../test/utils";
import mockYieldXPortfolio from "../../../../__mocks__/models/mockYieldXPortfolio";

test("renders", () => {
  const { container } = render(
    <EditNameModal show onHide={jest.fn} portfolio={mockYieldXPortfolio} />
  );
  expect(container).toBeDefined();
});
