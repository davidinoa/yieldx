import React from "react";
import { Formik } from "formik";
import PasswordInput from "./PasswordInput";
import { render } from "../../test/utils";

test("renders", () => {
  const { container } = render(
    <Formik initialValues={{ password: "" }} onSubmit={() => undefined}>
      <PasswordInput name="password" label="Password" />
    </Formik>
  );
  expect(container).toBeDefined();
});
