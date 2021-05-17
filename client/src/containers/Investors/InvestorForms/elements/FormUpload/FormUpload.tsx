import React, { ChangeEvent, MouseEvent, useRef } from "react";
import { useField } from "formik";
import { FormGroup, Label } from "../elements";
import { BrowseButton, Error, InputContainer } from "./FormUpload.styles";

interface Props {
  name: string;
  label: string;
}

const FormUpload: React.FC<Props> = ({ name, label }: Props) => {
  const inputRef = useRef(null);
  const [, meta, formHelper] = useField(name);
  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    e?.preventDefault();
    if (e.target.files) {
      formHelper.setTouched(true);
      formHelper.setValue(e.target.files);
    }
  };

  const handleClick = (e: MouseEvent) => {
    e.preventDefault();
    // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
    const inputElement: HTMLInputElement = inputRef.current!;
    inputElement.click();
  };
  return (
    <FormGroup invalid={meta.error} touched={String(meta.touched)}>
      {label && <Label htmlFor="affiliated-approval-upload">{label}</Label>}
      <input
        hidden
        multiple
        type="file"
        ref={inputRef}
        onChange={handleChange}
        accept=".pdf,.png,.jpg,.jpeg"
        id="affiliated-approval-upload"
        data-cy="file-input"
      />

      <InputContainer className="investor-input">
        {meta.value?.length && (
          <span>
            {meta.value.length > 1
              ? `...${meta.value.length} Files`
              : meta.value[0]?.name}
          </span>
        )}
        <BrowseButton onClick={handleClick}>
          {meta.value?.length ? "Edit" : "Browse"}
        </BrowseButton>
      </InputContainer>
      {meta.error && <Error>{meta.error}</Error>}
    </FormGroup>
  );
};

export default FormUpload;
