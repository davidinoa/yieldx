import React from "react";
import { Route } from "react-router-dom";
import { render } from "../../test/utils";
import LegalPages from "./LegalPages";

test("test render", ()=>{
  const { container } = render(
    <Route path="/yieldx/investors" component={LegalPages} />
    ,
    {
      route: "/yieldx/investors"
    }
  );
  expect(container).toBeDefined();
})
