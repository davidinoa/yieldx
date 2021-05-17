import React, { useState } from "react";
import { Formik } from "formik";
import { User, UserStatus, UserType } from "@bondhouse/iam";
import * as Yup from "yup";
import { Col, Row } from "react-bootstrap";
import { useHistory } from "react-router-dom";
import { userService } from "services";
import ModalBase from "components/ModalBase/ModalBase";
import { ReactComponent as SuccessIcon } from "assets/svg/check.svg";
import { Root, SaveButton, CancelButton } from "./PersonalInformation.styles";
import { ButtonsContainer } from "../UserDetails.styles";
import FormikInput from "../../../../elements/FormikInput/FormikInput";
import { Checkbox } from "../../../Investors/InvestorForms/elements/elements";
import { emailPattern } from "../../../../util/regexPatterns";
import logger from "../../../../models/Logger";

const personalInfoSchema = Yup.object().shape({
  first: Yup.string()
    .trim()
    .min(2, "Must have at least 2 characters")
    .max(20, "Must have at most 20 characters")
    .matches(/^[a-zA-Z0-9\s]*$/, "Only letter and numbers are allowed")
    .required("Required"),
  last: Yup.string()
    .trim()
    .min(2, "Must have at least 2 characters")
    .max(20, "Must have at most 20 characters")
    .matches(/^[a-zA-Z0-9\s]*$/, "Only letter and numbers are allowed")
    .required("Required"),
  email: Yup.string()
    .required("Required")
    .test("email", "Invalid email", email => {
      return Boolean((email || "").match(emailPattern));
    })
});

interface Props {
  user: User;
  refreshPage: (user: User) => void;
}

const PersonalInformation = ({ user, refreshPage }: Props) => {
  const history = useHistory();
  const [showSuccessModal, setShowSuccessModal] = useState(false);
  const formDefaults = {
    first: user.first,
    last: user.last,
    email: user.email,
    isAdmin: user.userType === UserType.ADMIN
  };

  const isBlocked = user.status === UserStatus.BLOCKED;

  return (
    <Formik
      validateOnBlur
      validateOnChange={false}
      initialValues={formDefaults}
      validationSchema={personalInfoSchema}
      onSubmit={async values => {
        try {
          const { data } = await userService.updateUser(user.id, {
            first: values.first,
            last: values.last,
            userType: values.isAdmin ? UserType.ADMIN : UserType.DEFAULT
          });
          setShowSuccessModal(true);
          refreshPage(data.user);
        } catch (err) {
          logger.error("PersonalInformation", err);
        }
      }}
    >
      {({ handleSubmit, isSubmitting, isValid, dirty, resetForm }) => (
        <Root>
          <Row>
            <Col xs={24} lg={12} className="mb-4">
              <FormikInput
                name="first"
                label="first name"
                disabled={isBlocked}
              />
            </Col>
            <Col xs={24} lg={12} className="mb-4">
              <FormikInput name="last" label="last name" disabled={isBlocked} />
            </Col>
            <Col xs={24} className="mb-4">
              <FormikInput name="email" label="email" disabled />
            </Col>
            {history.location.pathname.includes("users") && (
              <Col xs={24} className="set-as-admin">
                <Checkbox
                  name="isAdmin"
                  label="Set as admin"
                  disabled={isBlocked}
                />
              </Col>
            )}
          </Row>
          <ButtonsContainer>
            <CancelButton disabled={isBlocked || !dirty} onClick={resetForm}>
              Cancel
            </CancelButton>
            <SaveButton
              onClick={handleSubmit}
              disabled={!isValid || isSubmitting || !dirty}
            >
              Save
            </SaveButton>
          </ButtonsContainer>
          <ModalBase
            show={showSuccessModal}
            onHide={() => {
              resetForm({
                values: {
                  first: user.first,
                  last: user.last,
                  email: user.email,
                  isAdmin: user.userType === UserType.ADMIN
                }
              });
              return setShowSuccessModal(false);
            }}
          >
            <SuccessIcon />
            <h3>User information updated!</h3>
            <p style={{ color: "var(--lightest)" }}>
              Your full name was successfully set.
            </p>
          </ModalBase>
        </Root>
      )}
    </Formik>
  );
};

export default PersonalInformation;
