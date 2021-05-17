import { object, string } from "yup";
import { InvestorType, PhoneType } from "@bondhouse/investor";
import { emailPattern } from "../../../../util/regexPatterns";

export interface ContactFormState {
  email: string;
  address: string;
  address2?: string;
  investorType?: InvestorType;
  city: string;
  country: string;
  zip: string;
  phone: string;
  state: string;
  phoneType: PhoneType;
}

export const defaults: ContactFormState = {
  email: "",
  address: "",
  address2: "",
  investorType: InvestorType.INDIVIDUAL,
  city: "",
  state: "",
  country: "USA",
  zip: "",
  phone: "",
  phoneType: PhoneType.MOBILE
};

export function getSchema(investorType: InvestorType | undefined) {
  const schema = object({
    email: string()
      .required("Email is required")
      .test("email", "Invalid email", email => {
        return Boolean((email || "").match(emailPattern));
      }),
    address: string()
      .trim()
      .min(2, "Must have at least 2 characters")
      .matches(
        /^[a-zA-Z0-9\s-]*$/,
        "Only letter, hyphen, and numbers are allowed"
      )
      .test("isNotPOBox", "Address cannot be a PO box", value => {
        const poBox = /^ *((#\d+)|((box|bin)[-. /\\]?\d+)|(.*p[ .]? ?([o0])[-. /\\]? *-?((box|bin)|b|(#|num)?\d+))|(p(ost)? *(o(ff(ice)?)?)? *((box|bin)|b)? *\d+)|(p *-?\/?(o)? *-?box)|post office box|((box|bin)|b) *(number|num|#)? *\d+|(num|number|#) *\d+)/i;
        return !poBox.test(value || "");
      })
      .required(
        investorType === InvestorType.INDIVIDUAL
          ? "Street address is required"
          : "Street address 1 is required"
      ),
    address2: string().when("investorType", {
      is: value => value === InvestorType.INDIVIDUAL,
      then: string().notRequired(),
      otherwise: string()
        .trim()
        .min(2, "Must have at least 2 characters")
        .matches(
          /^[a-zA-Z0-9\s-]*$/,
          "Only letter, hyphen, and numbers are allowed"
        )
        .test("isNotPOBox", "Address cannot be a PO box", value => {
          const poBox = /^ *((#\d+)|((box|bin)[-. /\\]?\d+)|(.*p[ .]? ?([o0])[-. /\\]? *-?((box|bin)|b|(#|num)?\d+))|(p(ost)? *(o(ff(ice)?)?)? *((box|bin)|b)? *\d+)|(p *-?\/?(o)? *-?box)|post office box|((box|bin)|b) *(number|num|#)? *\d+|(num|number|#) *\d+)/i;
          return !poBox.test(value || "");
        })
        .required("Street address 2 is required")
    }),
    city: string()
      .trim()
      .min(2, "Must have at least 2 characters")
      .matches(/^[a-zA-Z0-9\s]*$/, "Only letter and numbers are allowed")
      .required("City is required"),
    state: string()
      .trim()
      .min(2, "Must have at least 2 characters")
      .matches(/^[a-zA-Z0-9\s]*$/, "Only letter and numbers are allowed")
      .required("State is required"),
    zip: string()
      .trim()
      .matches(/^[0-9]*$/, "Only numbers are allowed")
      .length(5, "Must have exactly 5 digits (XXXXX)")
      .required("Zip code is required"),
    phone: string()
      .test(
        "phone number",
        "Phone number must have exactly 10 digits (XXX-XXX-XXXX)",
        phoneNum => {
          const phoneTrimmed = ((phoneNum || "").match(/\d/g) || []).length;
          return phoneTrimmed === 10;
        }
      )
      .required("Phone is required")
  });

  schema.isValid("", {
    context: { other: investorType }
  });
  return schema;
}

export const phoneTypes = Object.values(PhoneType).map(val => {
  return { value: val, label: val[0].concat(val.slice(1).toLocaleLowerCase()) };
});
