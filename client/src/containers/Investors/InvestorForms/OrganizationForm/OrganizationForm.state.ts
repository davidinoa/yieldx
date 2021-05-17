import { string, object } from "yup";
import { CatAccountHolderType, EntityType } from "@bondhouse/investor";

export interface OrganizationInfoState {
  name: string;
  taxId: string;
  us: boolean;
  entity: EntityType;
  catAccountHolderType: CatAccountHolderType;
}

export const defaults = {
  name: "",
  taxId: "",
  us: true,
  entity: "",
  catAccountHolderType: ""
};

export const schema = getSchema();

export const entityMap = {
  C_CORPORATION: "C-Corporation",
  S_CORPORATION: "S-Corporation",
  LIMITED_LIABILITY_COMPANY_C_CORPORATION:
    "Limited Liability Company C-Corporation",
  LIMITED_LIABILITY_COMPANY_S_CORPORATION:
    "Limited Liability Company S-Corporation",
  LIMITED_LIABILITY_COMPANY_PARTNERSHIP: "Limited Liability Company PARTNERSHIP"
};

export const catAccountHolderMap = {
  INSTITUTIONAL_CUSTOMER: "Institutional Customer",
  EMPLOYEE_ACCOUNT: "Employee Account",
  INDIVIDUAL_CUSTOMER: "Individual Customer"
};
export const entityTypes = Object.values(EntityType).map(key => {
  return {
    value: key,
    label: entityMap[key]
  };
});

export const catAccountHolderTypes = Object.values(CatAccountHolderType).map(
  key => {
    return {
      value: key,
      label: catAccountHolderMap[key]
    };
  }
);
function getSchema() {
  const name = string()
    .trim()
    .min(3, "Must have at least 3 characters")
    .max(30, "Must have at most 30 characters")
    .matches(/^[a-zA-Z0-9\s]*$/, "Only letter and numbers are allowed")
    .required("Enter the organization legal name");

  const taxId = string()
    .test(
      "tin number",
      "EIN/TIN number must have exactly 9 digits (XXX-XX-XXXX)",
      inNum => {
        const inTrimmed = ((inNum || "").match(/\d/g) || []).length;
        return inTrimmed === 9;
      }
    )
    .required("Enter the organization EIN/TIN");

  const entity = string().required("Select an entity type");
  const catAccountHolderType = string().required(
    "Select an account holder type"
  );

  return object().shape({ name, taxId, entity, catAccountHolderType });
}
