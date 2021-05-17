// @ts-nocheck
import { object, string } from "yup";
import { WNineTaxForm } from "@bondhouse/investor";

export type W9State = WNineTaxForm & { hasW9: boolean };
export const defaults: W9State = {
  exemptionFromFatca: "",
  exemptPayeeCode: "",
  hasW9: true
};

export function getSchema() {
  const exemptionFromFatca = string()
    .notRequired()
    .trim()
    .matches(/^[a-zA-Z0-9\s]*$/, "Only letter and numbers are allowed");
  const exemptPayeeCode = string()
    .notRequired()
    .trim()
    .matches(/^[a-zA-Z0-9\s]*$/, "Only letter and numbers are allowed");
  const digitalSignature = string()
    .required("Digital Signature is required")
    .max(30, "Digital Signature must be at most 30 characters");
  const digitalSignatureDate = string()
    .matches(
      /^(0[1-9]|1[012]|\d)[/](0[1-9]|[12][0-9]|3[01])[/]\d\d$/,
      "must be MM/DD/YY"
    )
    .required("Digital Signature Date is required");
  return object().shape({
    exemptionFromFatca,
    exemptPayeeCode,
    digitalSignature,
    digitalSignatureDate
  });
}

export const schema = getSchema;
