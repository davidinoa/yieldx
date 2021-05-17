import React from "react";
import { Row } from "react-bootstrap";
import { Formik } from "formik";
import * as Yup from "yup";
import ModalBase from "components/ModalBase/ModalBase";
import {
  ButtonContainer,
  CancelButton,
  ContinueButton
} from "components/ModalBase/ModalBase.styles";
import ErrorAlert from "elements/Alert/ErrorAlert";
import { Form } from "containers/Investors/InvestorForms/ContactForm/ContactForm.styles";
import TextInput from "containers/Investors/InvestorForms/elements/TextInput/TextInput";

interface Props {
  isOpen: boolean;
  onHide: () => void;
  originalPortfolioData?: {
    isLivePortfolio: boolean;
    name: string;
  };
  postOrders: (name: string) => void;
}

function ExecutePortfolioModal({
  isOpen,
  onHide,
  postOrders,
  originalPortfolioData
}: Props) {
  const [error, setError] = React.useState<string>();
  return (
    <ModalBase show={isOpen} onHide={onHide}>
      {originalPortfolioData?.isLivePortfolio ? (
        <h1>Update your portfolio</h1>
      ) : (
        <h1>Save & execute your portfolio</h1>
      )}

      <Formik
        validationSchema={Yup.object().shape({
          name: Yup.string().required("Required")
        })}
        initialValues={{
          name: originalPortfolioData?.name || ""
        }}
        /* eslint-disable-next-line @typescript-eslint/no-empty-function */
        onSubmit={async values => {
          try {
            await postOrders(values.name);
          } catch (e) {
            setError(
              e.message ||
                e?.response?.data?.message ||
                "Your portfolio could not be executed at this time."
            );
          }
        }}
      >
        {({ errors, values, isSubmitting, submitForm }) => {
          return (
            <Form id="formik" className="mb-0">
              <Row>
                <TextInput
                  name="name"
                  label="portfolio name"
                  className="text-left"
                />
              </Row>
              <ButtonContainer>
                <CancelButton disabled={isSubmitting} onClick={onHide}>
                  Cancel
                </CancelButton>
                <ContinueButton
                  onClick={submitForm}
                  disabled={
                    Boolean(errors.name) || isSubmitting || values.name === ""
                  }
                >
                  Confirm and execute
                </ContinueButton>
              </ButtonContainer>
            </Form>
          );
        }}
      </Formik>
      {error && <ErrorAlert message={error} bottomNav />}
    </ModalBase>
  );
}

export default ExecutePortfolioModal;
