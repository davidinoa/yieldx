import { object, string } from "yup";
import { Employment, EmploymentStatus } from "@bondhouse/investor";

export const defaults: Partial<Employment> = {
  employmentStatus: EmploymentStatus.EMPLOYED,
  employer: "",
  positionEmployed: ""
};

export function getSchema() {
  const positionEmployed = string().when("employmentStatus", {
    is: (val: EmploymentStatus) => val === EmploymentStatus.EMPLOYED,
    then: string()
      .trim()
      .required("Position is required if employed")
      .max(40, "Too long!")
      .min(3, "Too short!")
      .matches(/^[a-zA-Z0-9\s]*$/, "Only letter and numbers are allowed")
  });

  const employer = string().when("employmentStatus", {
    is: (val: EmploymentStatus) => val === EmploymentStatus.EMPLOYED,
    then: string()
      .trim()
      .required("Employer is required if employed")
      .max(40, "Too long!")
      .min(3, "Too short!")
      .matches(/^[a-zA-Z0-9\s]*$/, "Only letter and numbers are allowed")
  });
  return object().shape({ positionEmployed, employer });
}

export const schema = getSchema;
