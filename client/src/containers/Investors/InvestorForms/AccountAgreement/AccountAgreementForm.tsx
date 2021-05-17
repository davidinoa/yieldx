/* eslint-disable @typescript-eslint/no-explicit-any */
import React from "react";
import { Formik } from "formik";
import { EntityType } from "@bondhouse/investor";
import { useHistory, useLocation } from "react-router-dom";
import {
  defaults,
  getSchema,
  memberOrManagerSchema
} from "./AccountAgreement.state";
import { Form, SectionTitle } from "./AccountAgreement.styles";
import BottomNav from "../../CreateInvestor/BottomNav/BottomNav";
import LlcAgreement from "./LlcAgreement/LlcAgreement";
import CashAgreement from "./CashAgreement/CashAgreement";

function AccountAgreementForm({
  orgName,
  entityType,
  selectedState
}: {
  orgName: string;
  entityType: EntityType;
  selectedState: string;
}) {
  const history = useHistory();
  const location = useLocation<any>();
  const checkInitial = (dirty: boolean, isValid: boolean) => {
    return !location.state ? !dirty || !isValid : !isValid;
  };
  return (
    <Formik
      validationSchema={getSchema(entityType)}
      validateOnChange
      validateOnBlur
      validateOnMount={!location.state}
      initialValues={{
        ...defaults,
        ...location.state,
        llcAccountAgreement: {
          ...defaults.llcAccountAgreement,
          ...location.state?.llcAccountAgreement,
          stateOfOrigin: selectedState,
          entityName: orgName
        },
        cashAccountAgreement: {
          ...defaults.cashAccountAgreement,
          ...location.state?.cashAccountAgreement,
          stateOfIncorporation: selectedState,
          corporationName: orgName
        }
      }}
      onSubmit={values => {
        history.replace(history.location.pathname, {
          formValues: values,
          direction: "next"
        });
      }}
    >
      {({
        dirty,
        isValid,
        setFieldValue,
        setFieldTouched,
        isSubmitting,
        values,
        submitForm
      }) => {
        return (
          <>
            {entityType === EntityType.CCORPORATION ||
            entityType === EntityType.SCORPORATION ? (
              <Form id="formik">
                <SectionTitle>Account Agreement</SectionTitle>
                <CashAgreement />
              </Form>
            ) : (
              <Form id="formik">
                <SectionTitle>Account Agreement</SectionTitle>
                <LlcAgreement
                  membersAndManagers={
                    values.llcAccountAgreement.membersAndManagers
                  }
                  disabled={Boolean(
                    !memberOrManagerSchema.isValidSync(values.memberOrManager)
                  )}
                  onAdd={() => {
                    setFieldValue("llcAccountAgreement.membersAndManagers", [
                      ...values.llcAccountAgreement.membersAndManagers,
                      { ...values.memberOrManager }
                    ]);
                    setFieldValue("memberOrManager", {
                      ...defaults.memberOrManager
                    });
                    setFieldTouched("memberOrManager", false);
                  }}
                  onRemove={(currIndex: number) => {
                    const politicalOfficials =
                      values.llcAccountAgreement.membersAndManagers || [];
                    setFieldValue(
                      "llcAccountAgreement.membersAndManagers",
                      politicalOfficials
                        .slice(0, currIndex)
                        .concat(politicalOfficials.slice(currIndex + 1))
                    );
                  }}
                />
              </Form>
            )}
            <BottomNav
              onNext={submitForm}
              blockNext={
                checkInitial(dirty, isValid) ||
                isSubmitting ||
                (!(
                  entityType === EntityType.CCORPORATION ||
                  entityType === EntityType.SCORPORATION
                ) &&
                  values?.llcAccountAgreement?.membersAndManagers.length < 1)
              }
              onPrevious={() => {
                history.replace(history.location.pathname, {
                  formValues: values,
                  direction: "back"
                });
              }}
            />
          </>
        );
      }}
    </Formik>
  );
}

export default AccountAgreementForm;
