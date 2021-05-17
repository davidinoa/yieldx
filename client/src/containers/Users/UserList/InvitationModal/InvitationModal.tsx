import React from "react";
import { FormCheck } from "react-bootstrap";
import { UserType } from "@bondhouse/iam";
import { Form, Formik } from "formik";
import { Persist } from "formik-persist";
import ModalBase from "../../../../components/ModalBase/ModalBase";
import { ReactComponent as SuccessIcon } from "../../../../assets/svg/invite-success.svg";
import {
  Label,
  Button,
  FieldSet,
  SuccessMessage
} from "./InvitationModal.styles";
import { Spinner } from "../../../../elements/Spinner/Spinner";
import FormikInput from "../../../../elements/FormikInput/FormikInput";
import { Error } from "../../../../elements/FormikInput/FormikInput.styles";

import {
  ButtonContainer,
  CancelButton,
  ContinueButton,
  InviteUserWrapper
} from "../../../../components/ModalBase/ModalBase.styles";
import { emailPattern } from "../../../../util/regexPatterns";

interface Props {
  show: boolean;
  sending: boolean;
  success: boolean;
  error?: boolean;
  sendInvite: (email: string, userType: UserType) => void;
  inviteAnother: () => void;
  hide: () => void;
}

export function validateEmail(values: any) {
  const errors: { [field: string]: string } = {};
  if (!values.email.length) {
    errors.email = "Required";
  } else if (!values.email.match(emailPattern)) {
    errors.email = "Please provide a valid email";
  }
  return errors;
}

function InvitationModal({
  error,
  show,
  hide,
  sendInvite,
  sending,
  success,
  inviteAnother
}: Props) {
  return (
    <ModalBase show={show} onHide={hide} small>
      <InviteUserWrapper>
        {sending && <Spinner />}
        {success && (
          <>
            <SuccessIcon />
            <h2>Successfully invited!</h2>
            <SuccessMessage>
              The user will receive an email with an invite link shortly.
            </SuccessMessage>
            <Button
              className="secondary invite-another"
              onClick={() => inviteAnother()}
            >
              Invite another user
            </Button>
          </>
        )}
        {!sending && !success && (
          <Formik
            initialValues={{ email: "", userType: UserType.DEFAULT }}
            onSubmit={() => undefined}
            validateOnChange
            validate={validateEmail}
          >
            {({
              values,
              dirty,
              isValid,
              touched,
              isValidating,
              setFieldValue
            }) => (
              <>
                <h1>Invite an user</h1>
                <Form className="container-fluid">
                  <FieldSet className="row">
                    <div className="col">
                      <Label>enter user&rsquo;s email</Label>
                      <FormikInput name="email" />
                      {error && !touched.email ? (
                        <Error>Invitation has already been sent</Error>
                      ) : null}
                      <FormCheck
                        custom
                        id="as-admin"
                        name="userType"
                        type="checkbox"
                        label="set as admin"
                        onChange={() => {
                          return values.userType === UserType.ADMIN
                            ? setFieldValue("userType", UserType.DEFAULT)
                            : setFieldValue("userType", UserType.ADMIN);
                        }}
                      />
                    </div>
                  </FieldSet>
                  <ButtonContainer>
                    <CancelButton onClick={hide}>Cancel</CancelButton>
                    <ContinueButton
                      disabled={!dirty || !isValid || isValidating}
                      onClick={() => sendInvite(values.email, values.userType)}
                    >
                      Invite
                    </ContinueButton>
                  </ButtonContainer>
                  <Persist name="inviteUser" />
                </Form>
              </>
            )}
          </Formik>
        )}
      </InviteUserWrapper>
    </ModalBase>
  );
}

export default InvitationModal;
