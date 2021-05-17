import { array, boolean, mixed, object, string } from "yup";
import { InterestedParties, InvestorType } from "@bondhouse/investor";

const FILE_SIZE_BY_BYTE = 5_242_880;

export interface FinraSecState {
  interestedParties: InterestedParties[];
  interestedParty: InterestedParties;
  isAffiliatedExchangeOrFINRA: boolean;
  firmName: string;
  fileList: FileList | null;
}

export const defaults: FinraSecState = {
  interestedParties: [],
  interestedParty: {
    name: {
      companyName: ""
    },
    mailingAddress: {
      streetAddress: [""],
      city: "",
      state: "",
      postalCode: "",
      country: "USA"
    }
  },
  isAffiliatedExchangeOrFINRA: true,
  firmName: "",
  fileList: null
};

export const interestedParty = object().shape({
  name: object().shape({
    companyName: string()
      .trim()
      .min(2, "Must have at least 2 characters")
      .matches(/^[a-zA-Z0-9\s]*$/, "Only letter and numbers are allowed")
      .required("Company name is required")
  }),
  mailingAddress: object().shape({
    streetAddress: array().of(
      string()
        .trim()
        .min(2, "Must have at least 2 characters")
        .matches(
          /^[a-zA-Z0-9\s-]*$/,
          "Only letter, hyphen, and numbers are allowed"
        )
        .required("Street address is required")
        .test("isNotPOBox", "Address cannot be a PO box", value => {
          const poBox = /^ *((#\d+)|((box|bin)[-. /\\]?\d+)|(.*p[ .]? ?([o0])[-. /\\]? *-?((box|bin)|b|(#|num)?\d+))|(p(ost)? *(o(ff(ice)?)?)? *((box|bin)|b)? *\d+)|(p *-?\/?(o)? *-?box)|post office box|((box|bin)|b) *(number|num|#)? *\d+|(num|number|#) *\d+)/i;
          return !poBox.test(value || "");
        })
    ),
    city: string()
      .trim()
      .required("City is required")
      .min(2, "Must have at least 2 characters")
      .matches(/^[a-zA-Z0-9\s]*$/, "Only letter and numbers are allowed"),
    state: string()
      .trim()
      .min(2, "Must have at least 2 characters")
      .matches(/^[a-zA-Z0-9\s]*$/, "Only letter and numbers are allowed")
      .required("State is required"),
    postalCode: string()
      .matches(/^[0-9]*$/, "Only numbers are allowed")
      .length(5, "Must have exactly 5 digits (XXXXX)")
      .required("Zip code required")
  })
});

export function getSchema(investorType: InvestorType) {
  const isAffiliatedExchangeOrFINRA = boolean();
  const firmName = string().when("isAffiliatedExchangeOrFINRA", {
    is: true,
    then: string()
      .min(2, "Too Short!")
      .max(128, "Too Long!")
      .matches(/^[a-zA-Z0-9\s]*$/, "Only letter and numbers are allowed")
      .required("Firm name is required")
  });

  const fileList = mixed().when("isAffiliatedExchangeOrFINRA", {
    is: true,
    then: mixed()
      .required("An affiliated approval form is required")
      .test(
        "fileTypeTest",
        "File type must be .pdf, .jpg, .jpeg, or .png",
        value => {
          try {
            const file: File = value.item(0);
            return (
              file.type === "application/pdf" ||
              file.type === "image/jpeg" ||
              file.type === "image/png"
            );
          } catch (e) {
            return false;
          }
        }
      )
      .test("fileSizeTest", "File Size should be under 5 MB", value => {
        try {
          const file: File = value.item(0);
          return file.size < FILE_SIZE_BY_BYTE;
        } catch (e) {
          return false;
        }
      })
  });

  return object().shape({
    isAffiliatedExchangeOrFINRA,
    firmName,
    ...(investorType === InvestorType.INDIVIDUAL ? { fileList } : {})
  });
}

export const schema = getSchema;
