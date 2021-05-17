import { object, string, bool } from "yup";

export interface CrsState {
  crsConfirmed: boolean;
  electricSignatureAndDeliveryConfirmed: boolean;
  digitalSignature: string;
  signedDate: string;
}

export function getSchema() {
  const crsConfirmed = bool()
    .required()
    .test(
      "agree",
      "Must confirm to read Client Relationship Summary above",
      value => Boolean(value)
    );
  const electricSignatureAndDeliveryConfirmed = bool()
    .required()
    .test("agree", "Must agree to electronic signatures and delivery", value =>
      Boolean(value)
    );
  const digitalSignature = string()
    .required("Digital Signature is required")
    .max(30, "Digital Signature must be at most 30 characters");
  const signedDate = string()
    .matches(
      /^(0[1-9]|1[012]|\d)[/](0[1-9]|[12][0-9]|3[01])[/]\d\d$/,
      "must be MM/DD/YY"
    )
    .required("Digital Signature Date is required");
  return object().shape({
    crsConfirmed,
    electricSignatureAndDeliveryConfirmed,
    digitalSignature,
    signedDate
  });
}

export const schema = getSchema;
