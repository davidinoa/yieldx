import React, { Dispatch, SetStateAction } from "react";
import { Row } from "react-bootstrap";
import { Formik } from "formik";
import * as Yup from "yup";
import ModalBase from "components/ModalBase/ModalBase";
import {
  ButtonContainer,
  CancelButton,
  ContinueButton
} from "components/ModalBase/ModalBase.styles";
import YieldXPortfolio from "models/YieldXPortfolio";
import useSavePaperPortfolio from "containers/PortfolioExecution/SelectInvestor/SavePortfolioModal/hooks/useSavePaperPortfolio";
import { Form } from "containers/Investors/InvestorForms/ContactForm/ContactForm.styles";
import TextInput from "containers/Investors/InvestorForms/elements/TextInput/TextInput";
import { useHistory } from "react-router";
import useGetYieldxPortfolio from "providers/graphql/hooks/useGetYieldxPortfolio";
import parsePortfolioQuery from "util/parsePortfolioQuery";
import { useLocation } from "react-router-dom";
import { PortfolioType } from "providers/graphql/hooks";
import { Spinner } from "elements/Spinner/Spinner";
import { useResetRecoilState, useSetRecoilState } from "recoil";
import { portfolioCreateOrEditState } from "recoil-state/portfolioCreateOrEditState";
import { yieldXPortfolioSelector } from "recoil-state/getProposalWithPortfolioId";

interface Props {
  setError: Dispatch<SetStateAction<string | undefined>>;
  portfolio: YieldXPortfolio;
  show: boolean;
  onHide: () => void;
}

function SavePortfolioModal({ setError, portfolio, show, onHide }: Props) {
  const history = useHistory();
  const { search } = useLocation();
  const portfolioQueryParams = parsePortfolioQuery(search);
  const resetPortfolioContext = useResetRecoilState(portfolioCreateOrEditState);
  const updateOriginal = useSetRecoilState(
    yieldXPortfolioSelector(portfolioQueryParams)
  );
  const savePaperPortfolio = useSavePaperPortfolio();
  let portfolioType: PortfolioType | undefined;
  if (portfolioQueryParams && portfolioQueryParams.portfolioType === "LIVE")
    portfolioType = PortfolioType.Live;
  if (portfolioQueryParams && portfolioQueryParams.portfolioType === "EXTERNAL")
    portfolioType = PortfolioType.External;

  const { portfolio: originalPortfolio, loading } = useGetYieldxPortfolio({
    portfolioId: portfolioQueryParams?.portfolioId,
    portfolioType
  });
  const shouldSaveNewPaper =
    !originalPortfolio || originalPortfolio?.getType() === "LIVE";
  return (
    <ModalBase onHide={onHide} show={show}>
      <h1>Save your paper portfolio</h1>
      <Formik
        validationSchema={Yup.object().shape({
          name: Yup.string().required("Required")
        })}
        initialValues={{
          name: originalPortfolio?.getName() || ""
        }}
        onSubmit={async values => {
          // SAVE AS PAPER
          try {
            const id = await savePaperPortfolio(
              portfolio,
              values.name,
              originalPortfolio
            );
            resetPortfolioContext();
            // TODO: Remove update original call once asset explorer uses GraphQL to fetch original portfolio
            const clone = portfolio.clone();
            clone.setName(values.name);
            updateOriginal(clone);
            history.push(`/portfolios/external/${id}`);
          } catch (e) {
            setError(e.response?.data?.message || "unknown error");
          }
        }}
      >
        {({ errors, values, isSubmitting, submitForm }) => {
          const error = errors.name;
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
                    loading ||
                    Boolean(error) ||
                    isSubmitting ||
                    values.name === ""
                  }
                  type="submit"
                >
                  {loading && <Spinner />}
                  {!loading && shouldSaveNewPaper && "Confirm and save"}
                  {!loading && !shouldSaveNewPaper && "Confirm and update"}
                </ContinueButton>
              </ButtonContainer>
            </Form>
          );
        }}
      </Formik>
    </ModalBase>
  );
}

export default SavePortfolioModal;
