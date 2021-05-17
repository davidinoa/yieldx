import React from "react";
import { Container, Col, Row } from "react-bootstrap";
import { MembersAndManagers } from "@bondhouse/investor";
import clsx from "clsx";
import styled from "styled-components";
import { AddButton } from "../../FinraSecForm/FinraSec.styles";
import { Checkbox, TextInput } from "../../elements/elements";
import { ReactComponent as Del } from "../../../../../assets/svg/delete-cart-item.svg";

const LLCContainer = styled(Container).attrs({})`
  padding: 1em 0 3em 0;
`;

const ParagraphContainer = styled.p`
  color: var(--subtext-3);
`;

const FormSeparator = styled.div.attrs({})`
  display: flex;
  width: 100%;
  height: 1px;
  background: var(--border-new);
  margin: 1.5rem 0;
`;

interface Props {
  onAdd: () => void;
  membersAndManagers: Array<MembersAndManagers>;
  disabled?: boolean;
  onRemove: (currIndex: number) => void;
}

function LlcAgreement({
  onAdd,
  disabled,
  membersAndManagers,
  onRemove
}: Props) {
  return (
    <LLCContainer>
      <Row>
        <Col>
          <p className="text-white">
            I HEREBY CERTIFY that at a meeting, duly called, of the Board of
            Directors of:
          </p>
        </Col>
      </Row>
      <Row>
        <Col>
          <TextInput
            name="llcAccountAgreement.entityName"
            label="CORPORATION NAME"
            xs={24}
            readOnly
            disabled
          />
        </Col>
        <Col>
          <TextInput
            name="llcAccountAgreement.stateOfOrigin"
            label="STATE OF INCORPORATION"
            xs={24}
            readOnly
            disabled
          />
        </Col>
      </Row>
      <br />
      <Row>
        <Col>
          <ParagraphContainer>
            with you my Introducing Firm (the “Introducing Firm”), to be carried
            by Apex Clearing Corporation (the “Clearing Broker”), of which the
            undersigned is a duly elected or authorized member of the LLC, I
            hereby certify that each of the Officers and Managers of the
            customer entity is set forth on the undersigned’s New Account
            Application and Agreement and has been duly elected and is now
            legally holding the office as are set forth in the undersigned’s New
            Account Application and Agreement.
          </ParagraphContainer>
          <ParagraphContainer>
            All such Officers and Managers, as applicable, are hereby appointed
            the authorized agents and attorneys-in-fact of the LLC (the
            “Authorized Agents”) to act jointly or individually, and shall have
            authority on behalf of the LLC, and for its account and risk, to
            buy, sell (including short sales), tender, convert, exchange, trade
            and otherwise deal in stocks, bonds, options and any other
            securities (on margin or otherwise) in accordance with the terms and
            conditions for the LLC account as set forth in the New Account
            Application and Agreement otherwise.
          </ParagraphContainer>
          <ParagraphContainer>
            The Introducing Firm and the Clearing Broker are authorized to
            follow the instructions of the Authorized Agents in every respect
            concerning the account(s), and to deliver to the account(s) or
            Authorized Agents on behalf of the LLC account(s), all demands,
            notices, confirmations, reports, statements of accounts, and
            communications of every kind, money, securities, and property of
            every kind. The Authorized Agents are hereby authorized to execute
            and deliver on behalf of the LLC and the account(s) any agreements
            or documentation relating to any of the foregoing matters and to
            terminate or modify the same or waive any of the provisions thereof,
            and generally to deal with the Introducing Firm and the Clearing
            Broker on behalf of the LLC and the account as fully and completely
            as if each alone were interested in the LLC and/or account(s), all
            without notice of the other or others interested in said account.
          </ParagraphContainer>
          <ParagraphContainer>
            This authorization is in addition to, and in no way limits or
            restricts, any rights which the Introducing Firm and the Clearing
            Broker have under any other agreement or agreements between the
            Introducing Firm and the Clearing Broker and the LLC and/or
            undersigned(s), individually or jointly, now existing or hereafter
            entered into, and is binding on the LLC, its managers and members,
            and its legal representatives, successors and assigns. This
            authorization is also a continuing one and shall remain in full
            force and effect until revoked by a written notice, addressed to the
            Introducing Firm and delivered to the Introducing Firm at the
            Introducing Firm’s principal office or such other location as the
            Introducing Firm may instruct. No such revocation shall affect any
            liability arising out of any transaction initiated prior to such
            revocation and delivery.
          </ParagraphContainer>
          <ParagraphContainer>
            The undersigned hereby certify that all of the members and managers
            of the LLC are as follows:
          </ParagraphContainer>
        </Col>
      </Row>
      <Row>
        <Col>
          <TextInput
            name="memberOrManager.legalName"
            label="manager legal name"
          />
        </Col>
        <Col>
          <TextInput
            name="memberOrManager.organizationalRole"
            label="manager organizational role"
          />
        </Col>
      </Row>
      <Row>
        <Col>
          <Checkbox
            name="memberOrManager.isManagerESigned"
            label="Does this member or manager agree to terms?"
          />
        </Col>
      </Row>
      <Row>
        <Col>
          <Checkbox
            name="memberOrManager.isManager"
            label="Is this person a manager"
          />
        </Col>
      </Row>
      <Row>
        <Col
          xs={{ span: 8, offset: 16 }}
          className="d-flex justify-content-end"
        >
          <AddButton type="button" disabled={disabled} onClick={onAdd}>
            ADD
          </AddButton>
        </Col>
      </Row>
      {membersAndManagers.map((cv, i) => {
        const { legalName, organizationalRole, isManager } = cv;
        return (
          <Row
            key={JSON.stringify({ ...cv, i })}
            className={clsx("pb-4", {
              separator: i === (membersAndManagers?.length || 0) - 1
            })}
          >
            <Col xs={2} className="text-center">
              <button
                className="icon-button"
                type="button"
                onClick={() => onRemove(i)}
              >
                <Del />
              </button>
            </Col>
            <Col className="text-display">
              <span>{`Name: ${legalName} / Role:${organizationalRole} / ${
                isManager ? "Manager" : "Member"
              }`}</span>
            </Col>
          </Row>
        );
      })}
      <Row>
        <Col>
          <ParagraphContainer>
            The undersigned further authorizes the Introducing Firm and the
            Clearing Broker, in the event of death or retirement of any of the
            members of the LLC, to take such proceedings, require such papers,
            retain such portions or restrict transactions in said account as the
            Introducing Firm or the Clearing Broker may deem advisable to
            protect you and the Clearing Broker against any liability, penalty
            or loss under any present or future laws or otherwise. It is further
            agreed that in the event of the death or retirement of any member of
            the LLC the remaining members will immediately cause you to be
            notified of such fact.
          </ParagraphContainer>
          <ParagraphContainer>
            This authorization and its enforcement shall be governed by the laws
            of the State of Texas, shall cover individually and collectively all
            accounts covered by this agreement and authorization which the
            undersigned may open or reopen with you, and shall insure to the
            benefit of your present organization, and any successor
            organization, irrespective of any change or changes of any kind of
            the personnel thereof for any cause whatsoever, and of the assigns
            of your present organization or any successor organization.
          </ParagraphContainer>
          <ParagraphContainer>
            Customer consent to loan or pledge of securities and other property
            (not applicable to cash accounts): each of the undersigned has
            signed the enclosed Customer’s Agreement and Customer’s Loan Consent
            which are intended to cover, in addition to the provisions hereof,
            the terms upon which the LLC is to be carried.
          </ParagraphContainer>
        </Col>
      </Row>
      <Row>
        <Col>
          <FormSeparator />
        </Col>
      </Row>
      <Row>
        <Col>
          <h4>Signature</h4>
        </Col>
      </Row>
      <Row>
        <Col>
          <ParagraphContainer>
            I, Secretary, or the equivalent, of the Customer, a limited
            liability company, hereby certify that the resolutions herein were
            duly adopted at a meeting of the Members of the Customer, duly held
            on `resolutionAdoptionDate` at which a quorum of said Members was
            present and acting throughout and that no action has been taken to
            rescind or amend said resolutions and the same are now in full force
            and effect. I certify that the Customer, a limited liability
            company, is duly organized, existing, and in good standing in the
            jurisdiction of its incorporation and any other jurisdiction where
            it may be required to be registered, and that the Customer, through
            its Primary Officer above, has the power to take the action called
            for by the resolutions here. IN WITNESS WHEREOF, I, the Secretary of
            the Customer, on behalf of the Customer, have hereunto affixed my
            hand this date.
          </ParagraphContainer>
        </Col>
      </Row>
      <Row>
        <Col>
          <TextInput
            name="llcAccountAgreement.authorizedSignerName"
            label="authorized signer name"
          />
        </Col>
        <Col>
          <TextInput
            name="llcAccountAgreement.authorizedSignerTitle"
            label="authorized signer title"
          />
        </Col>
      </Row>
      <Row>
        <Col>
          <Checkbox
            name="llcAccountAgreement.isAuthorizedSignerESigned"
            label="Does Authorized signer agree to terms?"
          />
        </Col>
      </Row>
    </LLCContainer>
  );
}

export default LlcAgreement;
