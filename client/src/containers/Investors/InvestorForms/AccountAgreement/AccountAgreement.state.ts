import { boolean, mixed, object, string } from "yup";
import {
  CashAccountAgreement,
  EntityType,
  LlcAccountAgreement,
  MembersAndManagers
} from "@bondhouse/investor";

export interface AccountAgreementFormState {
  llcAccountAgreement: Partial<LlcAccountAgreement>;
  cashAccountAgreement: Partial<CashAccountAgreement>;
  memberOrManager: MembersAndManagers;
  articlesOfIncorporationSnap: FileList | null;
}

export const defaults: AccountAgreementFormState = {
  llcAccountAgreement: {
    entityName: "",
    stateOfOrigin: "",
    resolutionAdoptionDate: "",
    authorizedSignerName: "",
    authorizedSignerTitle: "",
    membersAndManagers: [],
    isAuthorizedSignerESigned: false
  },
  memberOrManager: {
    legalName: "",
    organizationalRole: "",
    isManager: false,
    isManagerESigned: false
  },
  cashAccountAgreement: {
    corporationName: "",
    stateOfIncorporation: "",
    authorizedOfficerName: "",
    authorizedOfficerTitle: "",
    isAuthorizedOfficerESigned: false,
    secretaryName: "",
    isSecretaryESigned: false,
    articlesOfIncorporationSnapId: ""
  },
  articlesOfIncorporationSnap: null
};

export const memberOrManagerSchema = object().shape({
  legalName: string()
    .trim()
    .min(2, "Too short")
    .matches(/^[a-zA-Z\s]*$/, "Only letter are allowed")
    .required("State is required"),
  organizationalRole: string()
    .trim()
    .min(2, "Too short")
    .matches(/^[a-zA-Z\s]*$/, "Only letter are allowed")
    .required("State is required"),
  isManager: boolean().oneOf([true]),
  isManagerESigned: boolean().oneOf([true])
});

export function getSchema(entityType: EntityType) {
  const accountAgreement =
    entityType === EntityType.CCORPORATION ||
    entityType === EntityType.SCORPORATION
      ? object().shape({
          // corporationName: string()
          //   .trim()
          //   .min(2, "Too short")
          //   .matches(/^[a-zA-Z\s]*$/, "Only letter are allowed")
          //   .required("Coporation name is required"),
          // stateOfIncorporation: string()
          //   .trim()
          //   .min(2, "Too short")
          //   .matches(/^[a-zA-Z]*$/, "Only letter are allowed")
          //   .required("State is required"),
          authorizedOfficerName: string()
            .trim()
            .min(2, "Too short")
            .matches(/^[a-zA-Z0-9\s]*$/, "Only letter are allowed")
            .required("Officer is required"),
          authorizedOfficerTitle: string()
            .trim()
            .min(2, "Too short")
            .matches(/^[a-zA-Z\s]*$/, "Only letter are allowed")
            .required("Title is required"),
          isAuthorizedOfficerESigned: boolean().oneOf([true]),
          secretaryName: string()
            .trim()
            .min(2, "Too short")
            .matches(/^[a-zA-Z\s]*$/, "Only letter are allowed")
            .required("State is required"),
          isSecretaryESigned: boolean().oneOf([true])
        })
      : object().shape({
          // entityName: string()
          //   .trim()
          //   .min(2, "Too short")
          //   .matches(/^[a-zA-Z\s]*$/, "Only letter are allowed")
          //   .required("Entity name is required"),
          // stateOfOrigin: string()
          //   .trim()
          //   .min(2, "Too short")
          //   .matches(/^[a-zA-Z\s]*$/, "Only letter are allowed")
          //   .required("State is required"),
          authorizedSignerName: string()
            .trim()
            .min(2, "Too short")
            .matches(/^[a-zA-Z\s]*$/, "Only letter are allowed")
            .required("Name is required"),
          authorizedSignerTitle: string()
            .trim()
            .min(2, "Too short")
            .matches(/^[a-zA-Z\s]*$/, "Only letter are allowed")
            .required("Title is required"),
          isAuthorizedSignerESigned: boolean().oneOf([true])
        });

  const articlesOfIncorporationSnap = mixed()
    .required("Articles of incorporation form is required")
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
    );

  return object().shape({
    cashAccountAgreement:
      entityType === EntityType.CCORPORATION ||
      entityType === EntityType.SCORPORATION
        ? accountAgreement
        : object(),
    llcAccountAgreement:
      entityType !== EntityType.CCORPORATION &&
      entityType !== EntityType.SCORPORATION
        ? accountAgreement
        : object(),
    ...(entityType === EntityType.CCORPORATION ||
    entityType === EntityType.SCORPORATION
      ? { articlesOfIncorporationSnap }
      : {})
  });
}

export const schema = getSchema;
