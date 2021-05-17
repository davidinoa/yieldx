import React from "react";
import userEvent from "@testing-library/user-event";
import { Formik } from "formik";
import ResetPassword from "./ResetPassword";
import { render } from "../../../test/utils";

test("renders", () => {
  const { container } = render(<ResetPassword userId="" />);
  expect(container).toBeDefined();
});

test("save button", () => {
  const { getByText, getByLabelText } = render(
    <Formik
      initialValues={{
        currentPassword: "",
        newPassword: "",
        confirmPassword: ""
      }}
      onSubmit={() => undefined}
    >
      {() => <ResetPassword userId="" />}
    </Formik>
  );
  const saveButton = getByText(/save/i);
  const currentPasswordInput = getByLabelText(/current/i);
  const newPasswordInput = getByLabelText("new password");
  const confirmPasswordInput = getByLabelText(/confirm/i);

  expect(currentPasswordInput).toBeEmptyDOMElement();
  expect(newPasswordInput).toBeEmptyDOMElement();
  expect(confirmPasswordInput).toBeEmptyDOMElement();
  expect(saveButton).toBeDisabled();

  userEvent.type(currentPasswordInput, "Qwerty12!");
  userEvent.type(newPasswordInput, "Asdfg34@");
  userEvent.type(confirmPasswordInput, "Asdfg34@");

  expect(currentPasswordInput).toHaveValue("Qwerty12!");
  expect(newPasswordInput).toHaveValue("Asdfg34@");
  expect(confirmPasswordInput).toHaveValue("Asdfg34@");
  expect(saveButton).toBeEnabled();
});
