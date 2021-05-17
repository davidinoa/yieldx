import React from "react";
import * as Yup from "yup";
import { Formik } from "formik";
import { Row } from "react-bootstrap";
import { PortfolioType } from "@bondhouse/income-portfolios";
import ModalBase from "components/ModalBase/ModalBase";
import {
  ButtonContainer,
  CancelButton,
  ContinueButton
} from "components/ModalBase/ModalBase.styles";
import ErrorAlert from "elements/Alert/ErrorAlert";
import YieldXPortfolio from "models/YieldXPortfolio";
import TextInput from "containers/Investors/InvestorForms/elements/TextInput/TextInput";
import {
  Portfolio3Input,
  usePatchPortfolioMutation,
  usePostExternalPortfoliosMutation
} from "providers/graphql/hooks";
import toInputPortfolio from "util/toInputPortfolio";

import { Form } from "containers/Investors/InvestorForms/ContactForm/ContactForm.styles";

interface Props {
  show: boolean;
  onHide: () => void;
  portfolio: YieldXPortfolio;
}

function EditNameModal({ onHide, portfolio, show }: Props) {
  const portfolioType = portfolio.getType() ?? PortfolioType.EXTERNAL;
  const [updateExternal] = usePostExternalPortfoliosMutation();
  const [updateLive] = usePatchPortfolioMutation();
  const [error, setError] = React.useState<string>();

  return (
    <ModalBase onHide={onHide} show={show} small>
      {error && <ErrorAlert message={error} />}
      <h1>Edit portfolio name</h1>
      <Formik
        validationSchema={Yup.object().shape({
          name: Yup.string().required("Required")
        })}
        initialValues={{
          name: portfolio.getName && portfolio.getName()
        }}
        onSubmit={async values => {
          try {
            if (error) setError(undefined);
            if (portfolioType === "EXTERNAL") {
              const copy = portfolio.clone();
              copy.setName(values.name);
              await updateExternal({
                variables: {
                  createOrReplaceExternalPortfolioRequestInput: {
                    portfolio: (toInputPortfolio(
                      copy
                    ) as unknown) as Portfolio3Input
                  }
                },
                update(cache) {
                  cache.modify({
                    id: `Portfolio3:${portfolio.getId()}`,
                    fields: {
                      name() {
                        return values.name;
                      },
                      updatedAt() {
                        return new Date().toISOString();
                      }
                    }
                  });
                }
              });
            } else {
              await updateLive({
                variables: {
                  id: portfolio.getId(),
                  updatePortfolioRequestInput: {
                    name: values.name
                  }
                }
              });
            }
            onHide();
          } catch (e) {
            setError(e.response?.data?.message || "unknown error");
          }
        }}
      >
        {({ submitForm, dirty, isValid, isSubmitting }) => {
          return (
            <Form className="mb-0">
              <Row>
                <TextInput name="name" label="portfolio name" />
              </Row>
              <ButtonContainer>
                <CancelButton onClick={() => onHide()}>Cancel</CancelButton>
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

export default EditNameModal;
