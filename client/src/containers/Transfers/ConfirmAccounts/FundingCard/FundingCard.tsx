import dayjs from "dayjs";
import React from "react";
import { Col, Row } from "react-bootstrap";
import { useHistory } from "react-router";
import { useResetRecoilState } from "recoil";
import {
  Card,
  CardHeading,
  ChangeButton,
  Label,
  Value
} from "../ConfirmAccounts.styles";
import { ReactComponent as Bank } from "assets/svg/bank.svg";
import { selectedLinkedBankState } from "services/InvestorService";
import { LinkedBankAccount } from "providers/graphql/hooks";

interface Props {
  bankAccount?: LinkedBankAccount;
  rightBorder?: boolean;
  changeLink: string;
  blockChange: boolean;
}

function FundingCard({
  bankAccount,
  rightBorder,
  changeLink,
  blockChange
}: Props) {
  const { bankName, accountType, createdAt: linkedAt, mask } =
    bankAccount || {};
  const history = useHistory();
  const resetLinkedBankState = useResetRecoilState(selectedLinkedBankState);
  return (
    <>
      {bankAccount && (
        <Col className="p-0">
          <Card double className={rightBorder ? "right-border" : undefined}>
            <CardHeading>
              <Bank className="bank" />
              <span className="title">bank account</span>
              <span className="bank-name">{bankName}</span>
            </CardHeading>
            <div className="d-flex flex-column justify-content-between body-container">
              <div>
                <Row className="justify-content-center mt-5">
                  <Col xs={7} className="ml-4">
                    <Label>bank information</Label>
                  </Col>
                  <Col xs={7} className="ml-4">
                    <Row>
                      <Col className="d-flex flex-column">
                        <Value>{`**** **** **** ${mask}`}</Value>
                        <Value className="small">{bankName}</Value>
                      </Col>
                    </Row>
                  </Col>
                </Row>

                <Row className="justify-content-center mt-3">
                  <Col xs={7} className="ml-4">
                    <Label>account type</Label>
                  </Col>
                  <Col xs={7} className="ml-4">
                    <Value>{accountType}</Value>
                  </Col>
                </Row>

                <Row className="justify-content-center mt-3">
                  <Col xs={7} className="ml-4">
                    <Label>link date</Label>
                  </Col>
                  <Col xs={7} className="ml-4">
                    <Value>{dayjs(linkedAt).format("MMM D, YYYY")}</Value>
                  </Col>
                </Row>
              </div>
              <div className="change-container">
                <ChangeButton
                  onClick={() => {
                    resetLinkedBankState();
                    history.push(changeLink);
                  }}
                >
                  Change funding source
                </ChangeButton>
              </div>
            </div>
          </Card>
        </Col>
      )}
      {!bankAccount && (
        <Col className="p-0">
          <Card double className={rightBorder ? "right-border" : undefined}>
            <CardHeading>
              <Bank className="bank" />
              <span className="title">wire transfer</span>
              <span className="bank-name">BMO - Harris Bank</span>
            </CardHeading>
            <div className="d-flex flex-column justify-content-between body-container">
              <div>
                <Row className="justify-content-center mt-5">
                  <Col xs={7} className="ml-4">
                    <Label>beneficiary bank</Label>
                  </Col>
                  <Col xs={7} className="ml-4">
                    <Value>BMO - Harris Bank</Value>
                  </Col>
                </Row>
                <Row className="justify-content-center mt-3">
                  <Col xs={7} className="ml-4">
                    <Label>account number</Label>
                  </Col>
                  <Col xs={7} className="ml-4">
                    <Value>3713286</Value>
                  </Col>
                </Row>

                <Row className="justify-content-center mt-3">
                  <Col xs={7} className="ml-4">
                    <Label>ABA routing number</Label>
                  </Col>
                  <Col xs={7} className="ml-4">
                    <Value>**07000288**</Value>
                  </Col>
                </Row>

                <Row className="justify-content-center mt-3">
                  <Col xs={7} className="ml-4">
                    <Label>Full address</Label>
                  </Col>
                  <Col xs={7} className="ml-4">
                    <Value>111 West Monroe Street, 9th Floor</Value>
                    <br />
                    <Value>Center Chicago, IL 60603</Value>
                  </Col>
                </Row>
              </div>
              <div className="change-container">
                <ChangeButton
                  onClick={() => history.push(changeLink)}
                  className={blockChange ? "disabled" : undefined}
                >
                  Change funding source
                </ChangeButton>
              </div>
            </div>
          </Card>
        </Col>
      )}
    </>
  );
}

export default FundingCard;
