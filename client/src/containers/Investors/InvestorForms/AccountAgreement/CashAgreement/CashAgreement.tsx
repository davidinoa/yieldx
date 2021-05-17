import React from "react";
import styled from "styled-components";
import { Container, Col, Row } from "react-bootstrap";
import { Checkbox, TextInput } from "../../elements/elements";
import FormUpload from "../../elements/FormUpload/FormUpload";

const CorpContainer = styled(Container).attrs({})`
  padding: 1em 0 3em 0;
`;

const ParagraphContainer = styled.p`
  color: var(--subtext-3);
`;

const CashAgreement = () => {
  return (
    <CorpContainer>
      <Row>
        <Col>
          <p className="text-white">
            I HEREBY CERTIFY that at a meeting, duly called, of the Board of
            Directors of
          </p>
        </Col>
      </Row>
      <Row>
        <Col>
          <TextInput
            name="cashAccountAgreement.corporationName"
            label="Corporation Name"
            xs={24}
            readOnly
            disabled
          />
        </Col>
        <Col>
          <TextInput
            name="cashAccountAgreement.stateOfIncorporation"
            label="State of Incorporation"
            xs={24}
            readOnly
            disabled
          />
        </Col>
      </Row>
      <Row />
      <Row>
        <Col>
          <ParagraphContainer>
            at which said meeting a quorum was present and acting throughout,
            the following preamble and resolution was adopted and ever since has
            been and now is in full force and effect: WHEREAS this Corporation
            is duly authorized and permitted by its Charter and By-Laws to deal
            in stocks, bonds, and other securities; NOW THEREFORE BE IT RESOLVED
            that this Corporation open an account or accounts in its name with
            my introducing firm (“the Introducing Firm”), to be carried by Apex
            Clearing Corporation (“Clearing Firm”), and that the President, Vice
            President, Treasurer, other officers, or any one of them or their
            successors in office, individually or jointly, may, on behalf of
            this Corporation, (1) give orders in the said account or accounts
            for the purchase, sale or other disposition of stocks, bonds, and
            other securities, (2) instruct, deliver to, or receive from
            Introducing Firm or Clearing Firm monies, stocks, bonds, and other
            securities, (3) sign acknowledgements of the correctness of all
            statements of accounts and (4) make, execute and deliver under the
            corporate authority and seal any and all written endorsements and
            documents necessary or proper to effectuate the authority hereby
            conferred.
          </ParagraphContainer>
        </Col>
      </Row>
      <Row>
        <Col>
          <ParagraphContainer>
            This Authorization and its enforcement shall be governed by the laws
            of the State of Texas, shall cover individually and collectively all
            accounts covered by this agreement and authorization which the under
            signed may open or reopen with you, and shall insure to the benefit
            of the Introducing Firm’s and the Clearing Broker’s present
            organization, and any successor organization, irrespective of any
            change or changes of any kind of the personnel thereof for any cause
            whatsoever, and of the assigns of the Introducing Firm’s and the
            Clearing Broker’s present organization or any successor
            organization. Very Truly Yours,
          </ParagraphContainer>
        </Col>
      </Row>
      <Row>
        <Col>
          <TextInput
            name="cashAccountAgreement.authorizedOfficerName"
            label="Authorized Officer Name"
          />
        </Col>
        <Col>
          <TextInput
            name="cashAccountAgreement.authorizedOfficerTitle"
            label="Authorized Officer Title"
          />
        </Col>
      </Row>
      <br />
      <Row>
        <Col>
          <Checkbox
            name="cashAccountAgreement.isAuthorizedOfficerESigned"
            label="Does Authorized Officer agree to terms"
          />
        </Col>
      </Row>
      <Row className="pb-4 separator" />
      <br />
      <Row>
        <Col>
          <TextInput
            name="cashAccountAgreement.secretaryName"
            label="Secretary Name"
            xs={12}
          />
        </Col>
      </Row>
      <Row>
        <Col>
          <ParagraphContainer>
            The undersigned Secretary of the Corporation (or equivalent
            officer), hereby certify that each of the Officers of the customer
            entity has been duly elected and is now legally holding the office
            set forth in the undersigned’s New Account Application and
            Agreement.
          </ParagraphContainer>
        </Col>
      </Row>
      <Row>
        <Col>
          <ParagraphContainer>
            IN WITNESS WHEREOF, I, the Secretary of the Customer, on behalf of
            the Customer, have hereunto affixed my hand of said Corporation.
          </ParagraphContainer>
        </Col>
      </Row>
      <Row>
        <Col className="mt-2">
          <Checkbox
            name="cashAccountAgreement.isSecretaryESigned"
            label="Does Secretary agree to terms?"
          />
        </Col>
      </Row>
      <Row>
        <Col>
          <ParagraphContainer style={{ fontSize: "13px" }}>
            (THIS CERTIFICATE MUST BE EXECUTED BY AN OFFICER OTHER THAN ONE
            AUTHORIZED TO ACT)
          </ParagraphContainer>
        </Col>
      </Row>
      <Row>
        <Col xs={12}>
          <FormUpload
            name="articlesOfIncorporationSnap"
            label="upload articles of incorporation"
          />
        </Col>
      </Row>
      <br />
      <br />
    </CorpContainer>
  );
};
export default CashAgreement;
