import { Col, Row } from "react-bootstrap";
import { Formik } from "formik";
import { useHistory, useLocation } from "react-router-dom";
import React from "react";
import { CrsState, getSchema } from "./BhCrsForm.state";
import { Form, FormRow, Terms, Questions } from "./BhCrsForm.styles";
import { Checkbox, NumberInput, TextInput } from "../elements/elements";
import BottomNav from "../../CreateInvestor/BottomNav/BottomNav";

function BhCrsForm() {
  const history = useHistory();
  const location = useLocation<CrsState>();
  const defaults = {
    crsConfirmed: false,
    electricSignatureAndDeliveryConfirmed: false
  };
  const checkInitial = (dirty: boolean, isValid: boolean) => {
    return !location.state ? !dirty || !isValid : !isValid;
  };
  return (
    <Formik
      validationSchema={getSchema()}
      initialValues={{ ...defaults, ...location.state }}
      validateOnChange
      validateOnBlur
      validateOnMount={!location.state}
      onSubmit={values => {
        history.replace(history.location.pathname, {
          formValues: values,
          direction: "next"
        });
      }}
    >
      {({ dirty, isValid, isSubmitting, values, submitForm }) => (
        <>
          <Form id="formik">
            <FormRow>
              <Terms as={Col} xs={24}>
                <Row>
                  <Col style={{ textAlign: "left" }}>
                    <h2>BondHouse Advisers, LLC</h2>
                    <h3>May 1, 2020</h3>
                    <h3>FORM CRs</h3>
                  </Col>
                </Row>
                <br />
                <Row>
                  <Col>
                    <p>
                      BondHouse Advisers, LLC is registered with the Securities
                      and Exchange Commission as an investment adviser and, as
                      such, we provide advisory services rather than brokerage
                      services. Brokerage and investment advisory services and
                      fees differ, and it is important for you, our client, to
                      understand the differences. Additionally, free and simple
                      tools are available to research firms and financial
                      professionals at{" "}
                      <a href="https://www.investor.gov/CRS">
                        Investor.gov/CRS
                      </a>
                      , which also provides educational materials about
                      brokerdealers, investment advisers, and investing. This
                      document is a summary of the services and fees we offer to
                      "retail" investors, which are natural persons who seek or
                      receive services primarily for personal, family, or
                      household purposes.
                    </p>
                  </Col>
                </Row>
                <br />
                <Row>
                  <Col>
                    <h4>
                      What investment services and advice can you provide me?{" "}
                    </h4>
                    <p>
                      We offer the following investment advisory services to
                      retail investors: <b>Portfolio Management Services</b>;{" "}
                      <b>Selection of Other Advisers</b>;{" "}
                      <b>Family Office and Wealth Planning Services</b>;{" "}
                      <b>Sponsor and Manager of Wrap Fee Program</b>; Detailed
                      information regarding our services, fees and other
                      disclosures can be found in our Form ADV Part 2A Items 4,
                      7, 13 and 16 and Form ADV Part 2 Appendix 1 Brochures
                      Items 4 and 5 by clicking this link{" "}
                      <a href="https://adviserinfo.sec.gov/firm/brochure/304035">
                        https://adviserinfo.sec.gov/firm/brochure/304035
                      </a>
                      .
                    </p>
                  </Col>
                </Row>
                <Row>
                  <Col>
                    <p>
                      <b>Account Monitoring</b> If you open an investment
                      account with our firm, as part of our standard service we
                      will monitor your investments on a quarterly basis.{" "}
                    </p>
                  </Col>
                </Row>
                <Row>
                  <Col>
                    <p>
                      <b>Investment Authority</b> We do not provide
                      discretionary management services.{" "}
                    </p>
                  </Col>
                </Row>
                <Row>
                  <Col>
                    <p>
                      <b>Investment Offerings</b> We offer advice on the
                      following types of investments or products: equity
                      securities, corporate debt securities (other than
                      commercial paper), commercial paper, certificates of
                      deposit, municipal securities, mutual fund shares, United
                      States government securities, options contracts on
                      commodities, ETFs and private placements.{" "}
                    </p>
                  </Col>
                </Row>
                <Row>
                  <Col>
                    <p>
                      <b>Account Minimums and Requirements</b> In general, we
                      require a minimum account size to open and maintain an
                      advisory account, which may be waived in our discretion.{" "}
                    </p>
                  </Col>
                </Row>
                <Row>
                  <Col>
                    <Questions>
                      <h4>Key Questions to Ask Your Financial Professional</h4>
                      <ul>
                        <li>
                          <b>
                            Given my financial situation, should I choose an
                            investment advisory service? Why or Why Not?
                          </b>
                        </li>
                        <li>
                          <b>
                            How will you choose investments to recommend to me?
                          </b>
                        </li>
                        <li>
                          <b>
                            What is your relevant experience, including your
                            licenses, education and other qualifications?
                          </b>
                        </li>
                        <li>
                          <b>What do these qualifications mean?</b>
                        </li>
                      </ul>
                    </Questions>
                  </Col>
                </Row>
                <br />
                <Row>
                  <Col>
                    <h4>What fees will I pay? </h4>
                    <p>
                      The following summarizes the principal fees and costs
                      associated with engaging our firm for investment advisory
                      services. For detailed information, refer to our Form ADV
                      Part 2A and Form ADV Part 2 Appendix 1 Brochures by
                      clicking this link{" "}
                      <a href="https://adviserinfo.sec.gov/firm/brochure/304035">
                        https://adviserinfo.sec.gov/firm/brochure/304035
                      </a>
                    </p>
                    <ul>
                      <li>
                        <b>Asset Based Fees</b> - Payable quarterly in arrears.
                        Since the fees we receive are asset-based (i.e. based on
                        the value of your account), we have an incentive to
                        increase your account value which creates a conflict
                        especially for those accounts holding illiquid or
                        hard-to-value assets;
                      </li>
                      <li>
                        <b>Fixed Fees</b> – Platform subscription fees payable
                        In advance;
                      </li>
                      <li>
                        <b>Wrap Program Fees</b> - Payable quarterly in arrears.
                        Asset-based fees associated with a wrap fee program
                        generally include most transaction costs and fees to a
                        broker-dealer or bank that has custody of the assets;
                        therefore, the asset-based fee is higher than a typical
                        asset-based advisory fee. Since our firm pays the
                        transaction costs associated with securities
                        transactions in your account, we have an incentive to
                        minimize the trading in your account;
                      </li>
                    </ul>
                    <br />
                    <h4>
                      Examples of the most common fees and costs applicable to
                      our clients are:{" "}
                    </h4>
                    <ul>
                      <li className="pt-0">Custodian fees;</li>
                      <li>Account maintenance fees;</li>
                      <li>
                        Fees related to mutual funds and exchange-traded funds;
                      </li>
                      <li>
                        Transaction charges when purchasing or selling
                        securities; and
                      </li>
                      <li>
                        Other product-level fees associated with your
                        investments
                      </li>
                    </ul>
                    <br />
                    <p>
                      <b>
                        You will pay fees and costs whether you make or lose
                        money on your investments. Fees and costs will reduce
                        any amount of money you make on your investments over
                        time. Please make sure you understand what fees and
                        costs you are paying.
                      </b>{" "}
                    </p>
                  </Col>
                </Row>
                <Row>
                  <Col>
                    <Questions>
                      <h4>Key Questions to Ask Your Financial Professional</h4>
                      <ul>
                        <li>
                          <b>
                            Help me understand how these fees and costs might
                            affect my investments. If I give you $10,000 to
                            invest, how much will go to fees and costs, and how
                            much will be invested for me?
                          </b>
                        </li>
                      </ul>
                    </Questions>
                  </Col>
                </Row>
                <br />
                <Row>
                  <Col>
                    <h4>
                      What are your legal obligations to me when acting as my
                      investment adviser? How else does your firm make money and
                      what conflicts of interest do you have?
                    </h4>
                    <p>
                      <b>When we act as your investment adviser</b>, we have to
                      act in your best interest and not put our interest ahead
                      of yours. At the same time, the way we make money creates
                      some conflicts with your interests. You should understand
                      and ask us about these conflicts because they can affect
                      the investment advice we provide you. Here are some
                      examples to help you understand what this means.
                    </p>
                    <ul>
                      <li>
                        We do not make any money from our investment advisory
                        services except as described above.
                      </li>
                    </ul>
                    <p>
                      Refer to our Form ADV Part 2A and Form ADV Part 2 Appendix
                      1 Brochures by clicking this link{" "}
                      <a href="https://adviserinfo.sec.gov/firm/brochure/304035">
                        https://adviserinfo.sec.gov/firm/brochure/304035
                      </a>{" "}
                      to help you understand what conflicts exist.
                    </p>
                  </Col>
                </Row>
                <Row>
                  <Col>
                    <Questions>
                      <h4>Key Questions to Ask Your Financial Professional</h4>
                      <ul>
                        <li>
                          <b>
                            How might your conflicts of interest affect me, and
                            how will you address them?
                          </b>
                        </li>
                      </ul>
                    </Questions>
                  </Col>
                </Row>
                <br />
                <Row>
                  <Col>
                    <h4>How do your financial professionals make money? </h4>
                    <p>
                      Our Company and the financial professional servicing your
                      account(s) are compensated in the following ways: Salary;
                      Bonus; Non-cash compensation. Financial professionals'
                      compensation is based on the following factors: Based on
                      the number of institutions subscribed to the platform.
                    </p>
                    <p>
                      <b>
                        Do you or your financial professionals have legal or
                        disciplinary history?
                      </b>
                    </p>
                    <p>
                      No, our firm and our financial professionals currently do
                      not have any legal or disciplinary history to disclose.
                      Visit{" "}
                      <a href="https://www.investor.gov/CRS">
                        Investor.gov/CRS
                      </a>{" "}
                      for a free and simple research tool.
                    </p>
                  </Col>
                </Row>
                <Row>
                  <Col>
                    <Questions>
                      <h4>Key Questions to Ask Your Financial Professional</h4>
                      <ul>
                        <li>
                          <b>
                            As a financial professional, do you have any
                            disciplinary history? For what type of conduct?
                          </b>
                        </li>
                      </ul>
                    </Questions>
                  </Col>
                </Row>
                <br />
                <Row>
                  <Col>
                    <p>
                      You can find additional information about your investment
                      advisory services and request a copy of the relationship
                      summary at 800-516-0851 or click the link provided{" "}
                      <a href="https://yieldx-public-files-675223963978.s3.us-east-1.amazonaws.com/Form.CRS.Document.pdf">
                        Form CRS Document.pdf
                      </a>
                    </p>
                  </Col>
                </Row>
                <Row>
                  <Col>
                    <Questions>
                      <h4>Key Questions to Ask Your Financial Professional</h4>
                      <ul>
                        <li>
                          <b>Who is my primary contact person?</b>
                        </li>
                        <li>
                          <b>
                            Is he or she a representative of an investment
                            adviser or a broker-dealer?
                          </b>
                        </li>
                        <li>
                          <b>
                            Who can I talk to if I have concerns about how this
                            person is treating me?
                          </b>
                        </li>
                      </ul>
                    </Questions>
                  </Col>
                </Row>
                <br />
                <Row>
                  <Col>
                    <Checkbox
                      name="crsConfirmed"
                      label="I confirm that I've read the Client Relationship Summary above"
                    />
                  </Col>
                </Row>
                <Row>
                  <Col>
                    <Checkbox
                      name="electricSignatureAndDeliveryConfirmed"
                      label="I agree to electronic signatures and delivery."
                    />
                  </Col>
                </Row>
                <br />
                <Row>
                  <Col>
                    <TextInput
                      name="digitalSignature"
                      label="Digital signature"
                    />
                  </Col>
                  <Col>
                    <NumberInput
                      name="signedDate"
                      label="Date"
                      format="##/##/##"
                      maxLen={6}
                      asString
                    />
                  </Col>
                </Row>
              </Terms>
            </FormRow>
          </Form>
          <BottomNav
            onNext={submitForm}
            blockNext={checkInitial(dirty, isValid) || isSubmitting}
            onPrevious={() => {
              history.replace(history.location.pathname, {
                formValues: values,
                direction: "back"
              });
            }}
          />
        </>
      )}
    </Formik>
  );
}

export default BhCrsForm;
