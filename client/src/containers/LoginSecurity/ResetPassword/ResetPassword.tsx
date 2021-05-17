import React, { useState } from "react";
import { UsersApi } from "@bondhouse/iam";
import { Formik, Form } from "formik";
import { Col, Row } from "react-bootstrap";
import {
  Root,
  CancelButton,
  SaveButton
} from "../../Users/UserDetails/PersonalInformation/PersonalInformation.styles";
import { Spinner } from "../../../elements/Spinner/Spinner";
import PasswordInput from "../../../elements/PasswordInput/PasswordInput";
import { validateForm, formDefaults } from "./ResetPassword.state";
import ModalBase from "../../Portfolios/PortfolioDisplay/Modals/ModalBase";
import { ReactComponent as SuccessIcon } from "../../../assets/svg/check.svg";
import { AlertLevel, useAlertContext } from "providers/alerts/AlertProvider";

type Props = {
  userId: string;
};

export default function ResetPassword({ userId }: Props) {
  const [showSuccessModal, setShowSuccessModal] = useState(false);
  const { triggerAlert } = useAlertContext();

  return (
    <Formik
      validateOnBlur
      validateOnChange={false}
      initialValues={formDefaults}
      validate={values => validateForm(values)}
      onSubmit={async (values, { resetForm }) => {
        try {
          const userService = new UsersApi();
          await userService.resetPasswordDirectly(userId, values);
          setShowSuccessModal(true);
          resetForm();
        } catch (err) {
          console.error(err);
          triggerAlert(
            "Please ensure you have provided the correct current password",
            AlertLevel.danger
          );
        }
      }}
    >
      {({ isSubmitting, isValid, dirty, resetForm }) => {
        return (
          <Form>
            {isSubmitting && <Spinner />}
            {!isSubmitting && (
              <Root>
                <Row>
                  <Col lg={24} className="mb-3">
                    <PasswordInput
                      name="currentPassword"
                      label="current password"
                    />
                  </Col>
                </Row>
                <Row>
                  <Col lg={24} className="mb-3">
                    <PasswordInput name="newPassword" label="new password" />
                  </Col>
                </Row>
                <Row>
                  <Col lg={24} className="mb-5">
                    <PasswordInput
                      name="confirmPassword"
                      label="confirm new password"
                    />
                  </Col>
                </Row>
                <div className="d-flex justify-content-between">
                  <CancelButton
                    data-testid="cancel-button"
                    disabled={!dirty}
                    onClick={() => resetForm()}
                  >
                    Cancel
                  </CancelButton>
                  <SaveButton
                    data-testid="LoginSecurity_ResetPassword"
                    disabled={!isValid || isSubmitting || !dirty}
                  >
                    Save
                  </SaveButton>
                </div>
              </Root>
            )}
            <ModalBase
              show={showSuccessModal}
              onHide={() => setShowSuccessModal(false)}
            >
              <SuccessIcon />
              <h3>Password updated</h3>
              <p style={{ color: "var(--lightest)" }}>
                Your new password was successfully set.
              </p>
            </ModalBase>
          </Form>
        );
      }}
    </Formik>
  );
}
