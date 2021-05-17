import React from "react";
import InvitationModal, { validateEmail } from "./InvitationModal";

import { render } from "../../../../test/utils";

test("should have the invite button disabled by default", () => {
  const { getByText } = render(
    <InvitationModal
      show
      sending={false}
      success={false}
      hide={() => undefined}
      sendInvite={() => undefined}
      inviteAnother={() => undefined}
    />
  );
  const inviteButton = getByText("Invite");
  expect(inviteButton).toBeDisabled();
});

test("Should create valid formik errors for email", () => {
  expect(validateEmail({ email: "" })).toEqual({ email: "Required" });
  expect(validateEmail({ email: "tes1" })).toEqual({
    email: "Please provide a valid email"
  });
  expect(validateEmail({ email: "tes1@yieldx.com" })).toEqual({});
});
