import { array, boolean, object, string } from "yup";

const regExp = /^[a-zA-Z0-9\s]*$/;

export interface PublicPersonState {
  public: boolean;
  org: string;
  relative: string;
  family: string[];
}

export const defaults: PublicPersonState = {
  public: true,
  org: "",
  relative: "",
  family: []
};

export function getSchema() {
  return object().shape({
    public: boolean().required(),
    org: string().when("public", {
      is: (val: boolean) => val,
      then: string()
        .required("Organization is required.")
        .trim()
        .min(2, "Too short")
        .matches(regExp, "Only letter and numbers are allowed")
    }),
    relative: string()
      .trim()
      .min(2, "Too short")
      .matches(regExp, "Only letter and numbers are allowed"),
    family: array().when("public", {
      is: (val: boolean) => val,
      then: array()
        .required("At least one family member is required")
        .min(1, "At least one family member is required")
        .of(
          string()
            .trim()
            .min(2, "Too short")
            .matches(regExp, "Only letter and numbers are allowed")
        )
    })
  });
}

export const schema = getSchema;
