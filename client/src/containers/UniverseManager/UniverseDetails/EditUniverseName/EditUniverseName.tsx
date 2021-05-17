import React from "react";
import { Form, Formik } from "formik";
import * as Yup from "yup";
import { Row } from "react-bootstrap";
import ModalBase from "../../../../components/ModalBase/ModalBase";
import {
  ButtonContainer,
  CancelButton,
  ContinueButton
} from "../../../../components/ModalBase/ModalBase.styles";
import { TextInput } from "../../../Investors/InvestorForms/elements/elements";

type Props = {
  show: boolean;
  onHide: () => void;
  onSave: (name: string) => void;
};

export default function EditUniverseName({ show, onHide, onSave }: Props) {
  return (
    <ModalBase onHide={onHide} show={show}>
      <h1>Edit universe name</h1>
      <Formik
        initialValues={{ name: "Univerve name" }}
        onSubmit={({ name }) => onSave(name)}
        validationSchema={Yup.object().shape({
          name: Yup.string().required("Required")
        })}
      >
        {({ submitForm, dirty, isValid, isSubmitting }) => {
          return (
            <Form>
              <Row style={{ textAlign: "left", marginTop: 30 }}>
                <TextInput name="name" label="universe name" />
              </Row>
              <ButtonContainer>
                <CancelButton onClick={onHide}>Cancel</CancelButton>
                <ContinueButton
                  onClick={submitForm}
                  disabled={!dirty || !isValid || isSubmitting}
                  type="submit"
                >
                  Save
                </ContinueButton>
              </ButtonContainer>
            </Form>
          );
        }}
      </Formik>
    </ModalBase>
  );
}
