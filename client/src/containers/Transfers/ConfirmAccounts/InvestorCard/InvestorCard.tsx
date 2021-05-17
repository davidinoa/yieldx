import { Col, Row } from "react-bootstrap";
import dayjs from "dayjs";
import React from "react";
import { useHistory } from "react-router";
import {
  Card,
  CardHeading,
  ChangeButton,
  Label,
  Value
} from "../ConfirmAccounts.styles";
import { ReactComponent as Individual } from "assets/svg/individual.svg";
import { Investor, ApexAccount2 } from "providers/graphql/hooks";

interface Props {
  investor: Investor;
  rightBorder?: boolean;
  apexAccount?: ApexAccount2;
}

function InvestorCard({ investor, apexAccount, rightBorder }: Props) {
  const { investorType, investorInfo, createdAt } = investor;
  const { familyName, givenName } = investorInfo;
  const history = useHistory();
  return (
    <Col className="p-0">
      <Card double className={rightBorder ? "right-border" : undefined}>
        <CardHeading>
          <Individual className="individual" />
          <span className="title">investor account</span>
          <span className="bank-name">{`${givenName} ${familyName}`}</span>
        </CardHeading>
        <div className="d-flex flex-column justify-content-between body-container">
          <div>
            <Row className="justify-content-center mt-5">
              <Col xs={7} className="ml-4">
                <Label>investor type</Label>
              </Col>
              <Col xs={7} className="ml-4">
                {investorType}
              </Col>
            </Row>

            <Row className="justify-content-center mt-3">
              <Col xs={7} className="ml-4">
                <Label>account status</Label>
              </Col>
              <Col xs={7} className="ml-4">
                <Value>{apexAccount?.status}</Value>
              </Col>
            </Row>

            <Row className="justify-content-center mt-3">
              <Col xs={7} className="ml-4">
                <Label>account created</Label>
              </Col>
              <Col xs={7} className="ml-4">
                <Value>{dayjs(createdAt).format("MMM D, YYYY")}</Value>
              </Col>
            </Row>
          </div>
          <div className="change-container">
            <ChangeButton onClick={() => history.push("/investors")}>
              Change investor account
            </ChangeButton>
          </div>
        </div>
      </Card>
    </Col>
  );
}

export default InvestorCard;
