import { array, boolean, object, string } from "yup";
import dayjs from "dayjs";
import {
  BeneficialOwnersAndOfficers,
  BusinessClassification
} from "@bondhouse/investor";

const classificationMap = {
  AGRICULTURE_FORESTRY_FISHING: "Agriculture, Forestry, and Fishing",
  MINING: "Mining",
  CONSTRUCTION: "Construction",
  MANUFACTURING: "Manufacturing",
  TRANSPORTATION_COMMUNICATIONS_ELECTRIC_GAS_SANITARY_SERVICES:
    "Transportation / Communications / Electric / Gas / Sanitary Services",
  WHOLESALE_TRADE: "Wholesale Trade",
  RETAIL_TRADE: "Retail Trade",
  FINANCE_INSURANCE_REAL_ESTATE: "Finance, Insurance, and Real Estate",
  SERVICES: "Services",
  PUBLIC_ADMINISTRATION: "Public Administration"
};

type OfficerOrOwner = {
  name: {
    familyName: string;
    givenName: string;
    legalName?: string;
  };
  dateOfBirth: string;
  socialSecurityNumber?: string;
  identificationNumber?: string;
  isUsCitizen: boolean;
  address: {
    streetAddress: string[];
    city: string;
    country: string;
    postalCode?: string;
  };
};

export interface EntityClassificationState {
  beneficialOwnersAndOfficers: Partial<BeneficialOwnersAndOfficers>;
  beneficialOwner: OfficerOrOwner;
  officer: OfficerOrOwner;
}

export const defaults: EntityClassificationState = {
  beneficialOwnersAndOfficers: {
    beneficialOwners: [],
    officers: [],
    businessClassification: undefined
  },
  beneficialOwner: {
    name: {
      givenName: "",
      familyName: ""
    },
    dateOfBirth: "",
    address: {
      streetAddress: [],
      country: "USA",
      city: "",
      postalCode: ""
    },
    socialSecurityNumber: "",
    identificationNumber: "",
    isUsCitizen: true
  },
  officer: {
    name: {
      familyName: "",
      givenName: ""
    },
    dateOfBirth: "",
    address: {
      streetAddress: [],
      postalCode: "",
      country: "USA",
      city: ""
    },
    socialSecurityNumber: "",
    identificationNumber: "",
    isUsCitizen: true
  }
};

export const ownerOrOfficer = object().shape({
  name: object().shape({
    givenName: string()
      .trim()
      .min(2, "Must have at least 2 characters")
      .matches(/^[a-zA-Z0-9\s]*$/, "Only letter and numbers are allowed")
      .required("First name is required"),
    familyName: string()
      .trim()
      .min(2, "Must have at least 2 characters")
      .matches(/^[a-zA-Z0-9\s]*$/, "Only letter and numbers are allowed")
      .required("First name is required")
  }),
  dateOfBirth: string()
    .matches(
      /^(0[1-9]|1[012]|\d)[/](0[1-9]|[12][0-9]|3[01])[/](19|20|21)\d\d$/,
      "must be MM/DD/YYYY"
    )
    .test("is-18", "Must be at least 18 years old!", val => {
      if (typeof val !== "string") return true;
      return dayjs(val).isBefore(dayjs().subtract(18, "year"));
    })
    .required("Date of birth is required"),
  address: object().shape({
    streetAddress: array()
      .required("Street address is required")
      .of(
        string()
          .trim()
          .min(2, "Must have at least 2 characters")
          .required("Street address is required")
          .matches(
            /^[a-zA-Z0-9\s-]*$/,
            "Only letter, hyphen, and numbers are allowed"
          )
          .test("isNotPOBox", "Address cannot be a PO box", value => {
            const poBox = /^ *((#\d+)|((box|bin)[-. /\\]?\d+)|(.*p[ .]? ?([o0])[-. /\\]? *-?((box|bin)|b|(#|num)?\d+))|(p(ost)? *(o(ff(ice)?)?)? *((box|bin)|b)? *\d+)|(p *-?\/?(o)? *-?box)|post office box|((box|bin)|b) *(number|num|#)? *\d+|(num|number|#) *\d+)/i;
            return !poBox.test(value || "");
          })
      ),
    state: string().required("State is required"),
    city: string()
      .trim()
      .min(2, "Must have at least 2 characters")
      .matches(/^[a-zA-Z0-9\s]*$/, "Only letter and numbers are allowed")
      .required("City is required"),
    country: string().required("Required"),
    postalCode: string()
      .matches(/^[0-9]*$/, "Only numbers are allowed")
      .length(5, "Must have exactly 5 digits (XXXXX)")
      .required("Zip code required")
  }),
  socialSecurityNumber: string().when("isUsCitizen", {
    is: true,
    then: string()
      .test(
        "tin number",
        "SSN/TIN number must have exactly 9 digits (XXX-XX-XXXX)",
        inNum => {
          const inTrimmed = ((inNum || "").match(/\d/g) || []).length;
          return inTrimmed === 9;
        }
      )
      .required("Required")
  }),
  identificationNumber: string().when("isUsCitizen", {
    is: false,
    then: string()
      .trim()
      .min(2, "Must have at least 2 characters")
      .matches(/^[a-zA-Z0-9\s]*$/, "Only letter and numbers are allowed")
      .required("Identification number is required")
  }),
  isUsCitizen: boolean().required("Required.")
});

export function getSchema() {
  return object().shape({
    beneficialOwnersAndOfficers: object().shape({
      officers: array().min(1, "Must have at least one officer"),
      beneficialOwners: array().min(
        1,
        "Must have at least one beneficial owner"
      ),
      businessClassification: string().required("Required.")
    }),
    beneficialOwner: object().when(
      "beneficialOwnersAndOfficers.beneficialOwners",
      {
        is: value => value.length > 0,
        then: object().notRequired(),
        otherwise: ownerOrOfficer
      }
    ),
    officer: object().when("beneficialOwnersAndOfficers.officers", {
      is: value => value.length > 0,
      then: object().notRequired(),
      otherwise: ownerOrOfficer
    })
  });
}

export const schema = getSchema;

export const classificationOptions = Object.values(BusinessClassification).map(
  key => {
    return {
      value: key,
      label: classificationMap[key as BusinessClassification]
    };
  }
);
