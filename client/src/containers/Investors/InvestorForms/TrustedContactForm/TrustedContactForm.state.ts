import { object, string } from "yup";
import {
  IssuerDirectCommunication,
  TrustedContact,
  TrustedContactInfo
} from "@bondhouse/investor";
import { emailPattern } from "../../../../util/regexPatterns";

export interface TrustedContactState {
  trustedContactInfo: TrustedContactInfo;
  issuerDirectCommunication: IssuerDirectCommunication;
}

// Note: TrustedContact should default to EXCLUDE because for Orgs it does not exist
export const defaults: TrustedContactState = {
  trustedContactInfo: {
    trustedContact: TrustedContact.EXCLUDE,
    trustedContactPerson: {
      givenName: "",
      familyName: "",
      emailAddress: ""
    }
  },
  issuerDirectCommunication: IssuerDirectCommunication.ACCEPT
};

export function getSchema() {
  const trustedContactPerson = object().when("trustedContact", {
    is: (val: TrustedContact) => val === TrustedContact.INCLUDE,
    then: object().shape({
      givenName: string()
        .trim()
        .min(2, "Too short!")
        .matches(/^[a-zA-Z0-9\s]*$/, "Only letter and numbers are allowed")
        .required("A first name is required."),
      familyName: string()
        .trim()
        .min(2, "Too short!")
        .matches(/^[a-zA-Z0-9\s]*$/, "Only letter and numbers are allowed")
        .required("A last name is required."),
      emailAddress: string()
        .required("Email required")
        .test("isValidEmail", "Invalid email", email => {
          return Boolean((email || "").match(emailPattern));
        })
    })
  });
  return object().shape({
    trustedContactInfo: object().shape({
      trustedContactPerson
    })
  });
}

export const schema = getSchema;
