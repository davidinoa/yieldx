import React from "react";
import { Route } from "react-router-dom";
import { render } from "../../test/utils";
import PrivacyPolicy from "./PrivacyPolicy";

test("test render", ()=>{
  const { container } = render(
    <Route path="/yieldx/investors" component={PrivacyPolicy} />
    ,
    {
      route: "/yieldx/investors"
    }
  );
  expect(container).toBeDefined();
})
