import { object, string } from "yup";
import dayjs from "dayjs";
import countryCodes from "../../../../util/countryCodes";
import usaStatesArray from "../../../../util/usaStatesArray";

let FIRST_NAME_LENGTH = 0;

export type PersonalInfoState = {
  first: string;
  last: string;
  ssn: string;
  birthdate: string;
  usCitizen?: boolean;
  birthplace: string;
  citizenshipCountry: string;
  isPermanentResident: boolean;
};

export const defaults: PersonalInfoState = {
  first: "",
  last: "",
  ssn: "",
  birthdate: "",
  usCitizen: true,
  birthplace: "",
  citizenshipCountry: "USA",
  isPermanentResident: false
};

export function getSchema() {
  const first = string()
    .trim()
    .min(2, "Must have at least 2 characters")
    .max(20, "Must have at most 20 characters")
    .matches(/^[a-zA-Z0-9\s]*$/, "Only letter and numbers are allowed")
    .required("First name is required");

  const last = string()
    .trim()
    .min(2, "Must have at least 2 characters")
    .max(20, "Must have at most 20 characters")
    .when("first", {
      is: val => {
        if (val) {
          FIRST_NAME_LENGTH = val.length;
          return val.length > 9;
        }
        return false;
      },
      then: string().max(
        29 - FIRST_NAME_LENGTH,
        "Full Name must be at most 29 characters"
      ),
      otherwise: string().max(20)
    })
    .matches(/^[a-zA-Z0-9\s]*$/, "Only letter and numbers are allowed")
    .required("Last name is required");

  const ssn = string()
    .test(
      "ssn number",
      "SSN number must have exactly 9 digits (XXX-XX-XXXX)",
      ssnNum => {
        const ssnTrimmed = ((ssnNum || "").match(/\d/g) || []).length;
        return ssnTrimmed === 9;
      }
    )
    .required("An SSN/TIN is required");

  const birthdate = string()
    .matches(
      /^(0[1-9]|1[012]|\d)[/](0[1-9]|[12][0-9]|3[01])[/](19|20|21)\d\d$/,
      "must be MM/DD/YYYY"
    )
    .test("is-18", "Must be at least 18 years old!", val => {
      if (typeof val !== "string") return true;
      return dayjs(val).isBefore(dayjs().subtract(18, "year"));
    })
    .required("Date of birth is required");

  return object().shape({
    first,
    last,
    ssn,
    birthdate,
    citizenshipCountry: string().when("usCitizen", {
      is: false,
      then: string().required()
    })
  });
}

export function getEditSchema() {
  const first = string()
    .trim()
    .min(2, "Must have at least 2 characters")
    .max(20, "Must have at most 20 characters")
    .matches(/^[a-zA-Z0-9\s]*$/, "Only letter and numbers are allowed")
    .required("First name is required");

  const last = string()
    .trim()
    .min(2, "Must have at least 2 characters")
    .max(20, "Must have at most 20 characters")
    .when("first", {
      is: val => {
        if (val) {
          FIRST_NAME_LENGTH = val.length;
          return val.length > 9;
        }
        return false;
      },
      then: string().max(
        29 - FIRST_NAME_LENGTH,
        "Full Name must be at most 29 characters"
      ),
      otherwise: string().max(20)
    })
    .matches(/^[a-zA-Z0-9\s]*$/, "Only letter and numbers are allowed")
    .required("Last name is required");

  return object().shape({
    first,
    last
  });
}

export const countryValues = countryCodes.map(
  ({ "Alpha-3 code": code, Country }) => {
    return { value: code, label: Country };
  }
);
export const stateValues = usaStatesArray.map(cv => {
  return { value: cv, label: cv };
});
export const schema = getSchema;
