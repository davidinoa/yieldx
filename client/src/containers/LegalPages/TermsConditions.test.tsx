import React from "react";
import { Route } from "react-router-dom";
import { render } from "../../test/utils";
import TermsConditions from "./TermsConditions";

test("test render", ()=>{
  const { container } = render(
      <Route path="/yieldx/investors" component={TermsConditions} />
,
    {
      route: "/yieldx/investors"
    }
  );
  expect(container).toBeDefined();
})
