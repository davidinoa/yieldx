// @ts-nocheck
import { mixed, object, boolean } from "yup";

export interface W9UploadFormState {
  disregardedEntity: boolean;
  w9FormUpload: FileList | null;
}

export const defaults: W9UploadFormState = {
  disregardedEntity: true,
  w9FormUpload: null
};

export function getSchema() {
  const disregardedEntity = boolean().required("Required.");
  const w9FormUpload = mixed().when("disregardedEntity", {
    is: true,
    then: mixed()
      .required("W9 Form is required")
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
  });
  return object().shape({
    disregardedEntity,
    w9FormUpload
  });
}

export const schema = getSchema;
