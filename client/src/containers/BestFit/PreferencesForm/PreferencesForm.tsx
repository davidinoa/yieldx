import React, { useEffect } from "react";
import { Col, Row } from "react-bootstrap";
import { Formik } from "formik";
import { Route, Switch, useHistory, useRouteMatch } from "react-router-dom";
import { useRecoilValue } from "recoil";
import Stepper from "./Stepper/Stepper";
import { formSchema, navSteps } from "../BestFit.state";
import QualityStep from "./Steps/QualityStep/QualityStep";
import MaturityStep from "./Steps/MaturityStep/MaturityStep";
import EsgStep from "./Steps/EsgStep/EsgStep";
import WeightingStep from "./Steps/WeightingStep/WeightingStep";
import QuantityStep from "./Steps/QuantityStep/QuantityStep";
import InvestmentStep from "./Steps/InvestmentStep/InvestmentStep";
import { BestFitContainer, Form, FormWrapper } from "./PreferencesForm.styles";
import BestFitNav from "../BestFitNav/BestFitNav";
import {
  bestFitReviewState,
  preferencesDefault,
  preferencesState
} from "recoil-state/bestFit";

export default function PreferencesForm() {
  const history = useHistory();
  const { path } = useRouteMatch();
  const { preferences } = useRecoilValue(bestFitReviewState) ?? {};
  const { currentStepIndex } = useRecoilValue(preferencesState);

  useEffect(() => {
    if (!preferences) {
      history.push(`/best-fit/preferences/${navSteps[currentStepIndex]}`);
    }
  }, [history, currentStepIndex, preferences]);

  return (
    <BestFitContainer fluid>
      <FormWrapper>
        <Row>
          <Col>
            <Stepper />
          </Col>
        </Row>
        <Row>
          <Col>
            <Formik
              enableReinitialize
              validateOnBlur
              validateOnChange
              validateOnMount
              initialValues={preferences ?? preferencesDefault}
              validationSchema={formSchema}
              onSubmit={(_, helpers) => {
                helpers.setSubmitting(false);
              }}
            >
              {() => (
                <Form data-testid="formik">
                  <Switch>
                    <Route path={`${path}/quality`} component={QualityStep} />
                    <Route path={`${path}/maturity`} component={MaturityStep} />
                    <Route
                      path={`${path}/weighting`}
                      component={WeightingStep}
                    />
                    <Route path={`${path}/esg`} component={EsgStep} />
                    <Route path={`${path}/quantity`} component={QuantityStep} />
                    <Route
                      path={`${path}/investment`}
                      component={InvestmentStep}
                    />
                  </Switch>
                </Form>
              )}
            </Formik>
          </Col>
        </Row>
      </FormWrapper>
      <BestFitNav />
    </BestFitContainer>
  );
}
