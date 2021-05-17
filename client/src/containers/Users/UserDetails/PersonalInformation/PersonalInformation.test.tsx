import React from "react";
import { User, UserType } from "@bondhouse/iam";
import { render } from "../../../../test/utils";
import PersonalInformation from "./PersonalInformation";

const mockUser: User = {
  id: "auth0|5e1f2ee24d58ca0e75dcbae5",
  first: "David",
  last: "Inoa",
  userType: UserType.ADMIN,
  email: "david@bondhouse.com",
  terms: true,
  institutionId: "adbedc86-e795-4334-b1bd-7cbdf1fbe3bf",
  policies: [],
  createdAt: "2020-01-15T15:25:22.271918Z",
  updatedAt: "2020-05-21T17:06:21.669708Z",
  metadata: {
    sharedPoliciesId: "0bc1c40c-34bc-4cc7-8a0a-ccb7af301b99",
    adminPoliciesId: "776d6ffd-65ea-4250-a15a-33be47195b5b"
  }
};

test("should render", () => {
  const { container } = render(
    <PersonalInformation refreshPage={jest.fn} user={mockUser} />
  );
  expect(container).toBeDefined();
});

test("save button is disabled on mount", () => {
  const { getByText } = render(
    <PersonalInformation refreshPage={jest.fn} user={mockUser} />
  );
  expect(getByText(/save/i)).toBeDisabled();
});

test("cancel button is disabled on mount", () => {
  const { getByText } = render(
    <PersonalInformation refreshPage={jest.fn} user={mockUser} />
  );
  expect(getByText(/cancel/i)).toBeDisabled();
});
