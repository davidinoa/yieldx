import React from "react";
import { render } from "test/utils";
import TrialUserDropDown from "components/Navbar/TrialUserNav/NavDropDown/NavDropDown";

test("renders", () => {
  const { container } = render(<TrialUserDropDown toggleDropDown={jest.fn} />);
  expect(container).toBeDefined();
});
