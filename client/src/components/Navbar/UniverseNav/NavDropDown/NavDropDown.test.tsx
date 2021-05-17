import React from "react";
import { App } from "@bondhouse/rover-universe";
import UniverseDropDown from "components/Navbar/UniverseNav/NavDropDown/NavDropDown";
import { render } from "test/utils";

test("renders", () => {
  const { container } = render(
    <UniverseDropDown app={App.InPaaS} toggleDropDown={jest.fn} />
  );
  expect(container).toBeDefined();
});
