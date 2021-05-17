import React from "react";
import { Route } from "react-router-dom";
import { Formik } from "formik";
import LlcAgreement from "./LlcAgreement";
import { render } from "../../../../../test/utils";

test("test render", () => {
  const { container } = render(
    <Route path="/yieldx/investors">
      <Formik
        initialValues={{}}
        onSubmit={() => undefined}
      >
        <LlcAgreement onAdd={jest.fn()} membersAndManagers={[]} onRemove={jest.fn()}/>
      </Formik>
    </Route>
    ,
    {
      route: "/yieldx/investors"
    }
  );
  expect(container).toBeDefined();
});
