import React from "react";
import { useRecoilCallback, useRecoilValue } from "recoil";
import {
  Redirect,
  Route,
  Switch,
  useHistory,
  useRouteMatch
} from "react-router-dom";
import { Row } from "react-bootstrap";
import { useMachine } from "@xstate/react";
import PageTitle from "elements/PageTitle/PageTitle";
import { Spinner } from "elements/Spinner/Spinner";
import { userState } from "services/userState";
import { deliveryInstructionsByInvestor } from "services/InvestorService";
import { getPortfolioState } from "recoil-state/portfoliosApi";
import { PortfolioType } from "@bondhouse/income-portfolios";
import {
  ExternalEntity,
  Investor,
  InvestorWithApexAccount
} from "@bondhouse/investor";
import { Portfolio } from "@bondhouse/position-management";
import { AccountStatus } from "@bondhouse/apex";
import AdditionalInformation from "../InvestorForms/AdditionalInformation/AdditionalInformation";
import OrganizationForm from "../InvestorForms/OrganizationForm/OrganizationForm";
import PersonalInfoForm from "../InvestorForms/PersonalInfoForm/PersonalInfoForm";
import ContactForm from "../InvestorForms/ContactForm/ContactForm";
import PublicTradeForm from "../InvestorForms/PublicTradeForm/PublicTradeForm";
import FinraSecForm from "../InvestorForms/FinraSecForm/FinraSecForm";
import EmploymentForm from "../InvestorForms/EmploymentForm/EmploymentForm";
import SelectInvestorType from "../InvestorForms/SelectInvestorType/SelectInvestorType";
import TrustedContactForm from "../InvestorForms/TrustedContactForm/TrustedContactForm";
import InvestmentProfileForm from "../InvestorForms/InvestmentProfileForm/InvestmentProfileForm";
import PublicPersonForm from "../InvestorForms/PublicPersonForm/PublicPersonForm";
import EntityClassification from "../InvestorForms/EntityClassification/EntityClassification";
import ExemptVerification from "../InvestorForms/ExemptVerification/ExemptVerification";
import W9Form from "../InvestorForms/W9Form/W9Form";
import W9UploadForm from "../InvestorForms/W9UploadForm/W9UploadForm";
import {
  FormContainer,
  InvestorContainer,
  InvestorForm,
  InvestorFormRow,
  InvestorSteps
} from "./CreateInvestor.styles";
import OrganizationBackgroundForm from "../InvestorForms/OrganizationBackground/OrganizationBackgroundForm";
import EntityAccountAgreementForm from "../InvestorForms/AccountAgreement/AccountAgreementForm";
import ProgressTracker from "./ProgressTracker/ProgressTracker";
import AgreementForm from "../InvestorForms/AgreementForm/AgreementForm";
import BhCrsForm from "../InvestorForms/BhCrsForm/BhCrsForm";
import ReviewCreateInvestor, {
  FormStep
} from "../ReviewCreateInvestor/ReviewCreateInvestor";
import transitionMachine, { formHeadings } from "./CreateInvestor.state";
import { investorsAtom } from "../InvestorList/InvestorList";

function CreateInvestor() {
  const history = useHistory();
  const { path } = useRouteMatch();
  const user = useRecoilValue(userState);
  const updateUI = useRecoilCallback(
    ({ set }) => async (
      investor: Investor,
      cashPortfolio: Portfolio,
      externalEntity: ExternalEntity
    ) => {
      set(investorsAtom, prev => {
        const newAccount: InvestorWithApexAccount = {
          investor,
          apexAccount: {
            apexAccountNumber: externalEntity.externalEntityId,
            id: externalEntity.externalEntityId,
            apexRequestId: "",
            investorId: investor.id,
            status: AccountStatus.PENDING,
            createdAt: new Date().toISOString(),
            updatedAt: new Date().toISOString()
          }
        };
        if (prev !== undefined) return [newAccount, ...prev];
        return [newAccount];
      });
      set(deliveryInstructionsByInvestor(investor.id), [
        {
          id: "",
          portfolioId: cashPortfolio.id,
          investorId: investor.id,
          instructions: [externalEntity],
          createdAt: investor.createdAt,
          updatedAt: investor.updatedAt,
          cashOnly: true
        }
      ]);
      set(
        getPortfolioState({
          portfolioType: PortfolioType.LIVE,
          portfolioId: cashPortfolio.id
        }),
        { portfolioType: PortfolioType.LIVE, portfolio: cashPortfolio }
      );
    }
  );
  const [state, send] = useMachine(
    transitionMachine.withContext({
      history,
      path,
      updateUI,
      user
    })
  );
  const currentStep = String(state.value);
  const atFirstStep = state.matches("investor-type");
  const atReviewStep = state.matches("review");
  return (
    <>
      <InvestorContainer>
        <Row>
          <PageTitle
            title={formHeadings(currentStep, state.context.investorType)}
            subtitle="Create an Investor Account"
            alignment="left"
            page
          />
        </Row>
        <Row>
          {!atFirstStep && !atReviewStep && !state.matches("submit") && (
            <InvestorSteps>
              <ProgressTracker investorType={state.context.investorType} />
            </InvestorSteps>
          )}

          <Switch>
            <>
              {(() => {
                switch (true) {
                  case state.matches("personal-info"):
                    return (
                      <InvestorForm>
                        <InvestorFormRow>
                          <FormContainer>
                            <Route
                              render={({
                                location: _location,
                                history: _history
                              }) => {
                                // TODO: fix variable shadowing here
                                return (
                                  <PersonalInfoForm
                                    history={_history}
                                    location={_location}
                                    investorType={state.context.investorType}
                                  />
                                );
                              }}
                            />
                          </FormContainer>
                        </InvestorFormRow>
                      </InvestorForm>
                    );

                  case state.matches("organization-info"):
                    return (
                      <InvestorForm>
                        <InvestorFormRow>
                          <FormContainer>
                            <Route
                              path={`${path}/organization-info`}
                              component={OrganizationForm}
                            />
                          </FormContainer>
                        </InvestorFormRow>
                      </InvestorForm>
                    );

                  case state.matches("contact"):
                    return (
                      <InvestorForm>
                        <InvestorFormRow>
                          <FormContainer>
                            <Route
                              path={`${path}/contact`}
                              render={({
                                history: _history,
                                location: _location
                              }) => (
                                // TODO: fix variable shadowing here
                                <ContactForm
                                  history={_history}
                                  location={_location}
                                  investorType={state.context.investorType}
                                />
                              )}
                            />
                          </FormContainer>
                        </InvestorFormRow>
                      </InvestorForm>
                    );

                  case state.matches("employment"):
                    return (
                      <InvestorForm>
                        <InvestorFormRow>
                          <FormContainer>
                            <Route
                              path={`${path}/employment`}
                              component={EmploymentForm}
                            />
                          </FormContainer>
                        </InvestorFormRow>
                      </InvestorForm>
                    );

                  case state.matches("public-trade"):
                    return (
                      <InvestorForm>
                        <InvestorFormRow>
                          <FormContainer>
                            <Route
                              path={`${path}/public-trade`}
                              component={PublicTradeForm}
                            />
                          </FormContainer>
                        </InvestorFormRow>
                      </InvestorForm>
                    );

                  case state.matches("sec-finra-association"):
                    return (
                      <InvestorForm>
                        <InvestorFormRow>
                          <FormContainer>
                            <Route
                              render={({
                                location: _location,
                                history: _history
                              }) => {
                                // TODO: fix variable shadowing here
                                if (state.context.investorType)
                                  return (
                                    <FinraSecForm
                                      history={_history}
                                      location={_location}
                                      investorType={state.context.investorType}
                                    />
                                  );
                                return (
                                  <Redirect to={`${path}/investor-type`} push />
                                );
                              }}
                            />
                          </FormContainer>
                        </InvestorFormRow>
                      </InvestorForm>
                    );

                  case state.matches("public-person"):
                    return (
                      <InvestorForm>
                        <InvestorFormRow>
                          <FormContainer>
                            <Route
                              path={`${path}/public-person`}
                              component={PublicPersonForm}
                            />
                          </FormContainer>
                        </InvestorFormRow>
                      </InvestorForm>
                    );

                  case state.matches("trusted-contact"):
                    return (
                      <InvestorForm>
                        <InvestorFormRow>
                          <FormContainer>
                            <Route
                              path={`${path}/trusted-contact`}
                              render={({
                                location: _location,
                                history: _history
                              }) => (
                                // TODO: fix variable shadowing here
                                <TrustedContactForm
                                  history={_history}
                                  location={_location}
                                  investorType={state.context.investorType}
                                />
                              )}
                            />
                          </FormContainer>
                        </InvestorFormRow>
                      </InvestorForm>
                    );

                  case state.matches("investment-profile"):
                    return (
                      <InvestorForm>
                        <InvestorFormRow>
                          <FormContainer>
                            <Route
                              render={({
                                location: _location,
                                history: _history
                              }) => {
                                // TODO: fix variable shadowing here
                                return (
                                  <InvestmentProfileForm
                                    history={_history}
                                    location={_location}
                                    investorType={state.context.investorType}
                                  />
                                );
                              }}
                            />
                          </FormContainer>
                        </InvestorFormRow>
                      </InvestorForm>
                    );

                  case state.matches("w-9"):
                    return (
                      <InvestorForm>
                        <InvestorFormRow>
                          <FormContainer>
                            <Route path={`${path}/w-9`}>
                              <W9Form />
                            </Route>
                          </FormContainer>
                        </InvestorFormRow>
                      </InvestorForm>
                    );

                  case state.matches("w-9-upload"):
                    return (
                      <InvestorForm>
                        <InvestorFormRow>
                          <FormContainer>
                            <Route
                              render={({
                                location: _location,
                                history: _history
                              }) => {
                                // TODO: fix variable shadowing here
                                return (
                                  <W9UploadForm
                                    history={_history}
                                    location={_location}
                                  />
                                );
                              }}
                            />
                          </FormContainer>
                        </InvestorFormRow>
                      </InvestorForm>
                    );

                  case state.matches("organization-background"):
                    return (
                      <InvestorForm>
                        <InvestorFormRow>
                          <FormContainer>
                            <Route
                              render={({
                                location: _location,
                                history: _history
                              }) => {
                                // TODO: fix variable shadowing here
                                return (
                                  <OrganizationBackgroundForm
                                    history={_history}
                                    location={_location}
                                  />
                                );
                              }}
                            />
                          </FormContainer>
                        </InvestorFormRow>
                      </InvestorForm>
                    );

                  case state.matches("exempt-legal"):
                    return (
                      <InvestorForm>
                        <InvestorFormRow>
                          <FormContainer>
                            <Route
                              path={`${path}/exempt-legal`}
                              component={ExemptVerification}
                            />
                          </FormContainer>
                        </InvestorFormRow>
                      </InvestorForm>
                    );

                  case state.matches("beneficial-ownership"):
                    return (
                      <InvestorForm>
                        <InvestorFormRow>
                          <FormContainer>
                            <Route
                              path={`${path}/beneficial-ownership`}
                              component={EntityClassification}
                            />
                          </FormContainer>
                        </InvestorFormRow>
                      </InvestorForm>
                    );

                  case state.matches("additional-information"):
                    return (
                      <InvestorForm>
                        <InvestorFormRow>
                          <FormContainer>
                            <Route
                              render={({
                                location: _location,
                                history: _history
                              }) => {
                                // TODO: fix variable shadowing here
                                return (
                                  <AdditionalInformation
                                    history={_history}
                                    location={_location}
                                    organizationName={
                                      state.context.organizationInfo?.name || ""
                                    }
                                  />
                                );
                              }}
                            />
                          </FormContainer>
                        </InvestorFormRow>
                      </InvestorForm>
                    );

                  case state.matches("entity-account-agreement"):
                    return (
                      <InvestorForm>
                        <InvestorFormRow>
                          <FormContainer>
                            <Route
                              render={() => {
                                return (
                                  <EntityAccountAgreementForm
                                    orgName={
                                      state.context.organizationInfo?.name!
                                    }
                                    selectedState={
                                      state.context.contact?.state || ""
                                    }
                                    entityType={
                                      state.context.organizationInfo?.entity!
                                    }
                                  />
                                );
                              }}
                            />
                          </FormContainer>
                        </InvestorFormRow>
                      </InvestorForm>
                    );

                  case state.matches("crs-form"):
                    return (
                      <InvestorForm>
                        <InvestorFormRow>
                          <FormContainer>
                            <Route
                              path={`${path}/crs-form`}
                              component={BhCrsForm}
                            />
                          </FormContainer>
                        </InvestorFormRow>
                      </InvestorForm>
                    );

                  case state.matches("terms-and-agreement"):
                    return (
                      <InvestorForm>
                        <InvestorFormRow>
                          <FormContainer>
                            <Route
                              path={`${path}/terms-and-agreement`}
                              component={AgreementForm}
                            />
                          </FormContainer>
                        </InvestorFormRow>
                      </InvestorForm>
                    );

                  case state.matches("review"):
                    return (
                      <Route path={`${path}/review`}>
                        <ReviewCreateInvestor
                          formsState={state.context}
                          onEdit={(formStep: FormStep) => send(formStep)}
                        />
                      </Route>
                    );
                  case state.matches("submit"):
                    return <Spinner />;
                  default:
                    if (state.matches("investor-type"))
                      return (
                        <>
                          <Route
                            path={`${path}/investor-type`}
                            component={SelectInvestorType}
                          />
                          <Route
                            render={() => (
                              <Redirect to={`${path}/investor-type`} push />
                            )}
                          />
                        </>
                      );
                    send("FIRST_STEP");
                    history.push(`${path}/investor-type`);
                }
                return null;
              })()}
            </>
          </Switch>
        </Row>
      </InvestorContainer>
    </>
  );
}

export default CreateInvestor;
