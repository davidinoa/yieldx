import React from "react";
import { Route } from "react-router-dom";
import { Formik } from "formik";
import { render } from "../../../../../test/utils";
import CashAgreement from "./CashAgreement";

test("test render", () => {
  const { container } = render(
    <Route path="/yieldx/investors">
      <Formik
        initialValues={{}}
        onSubmit={() => undefined}
      >
        <CashAgreement />
      </Formik>
    </Route>
    ,
    {
      route: "/yieldx/investors"
    }
  );
  expect(container).toBeDefined();
});
