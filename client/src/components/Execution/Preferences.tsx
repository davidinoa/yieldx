import React from "react";
import { Col, Row } from "react-bootstrap";
import noOp from "util/noOp";
import { RadioGroup } from "containers/Investors/InvestorForms/elements/elements";
import { StyledForm } from "containers/BestFit/PreferencesForm/PreferencesForm.styles";
import styled from "styled-components";

const preferenceDefaults = {
  fullFillRequired: false,
  goodTillCancel: true
};

const GTCOptions = [
  { value: true, label: "yes" },
  { value: false, label: "no" }
];

const FullFillOptions = [
  { value: false, label: "partial fill" },
  { value: true, label: "all or none" }
];

type FormProps = {
  goodTillCancel: boolean;
  fullFillRequired: boolean;
  setGoodTillCancel: (value: boolean) => void;
  setFullFillRequired: (value: boolean) => void;
};

type RadioFields<T> = {
  value: T;
  onChange: (value: T) => void;
  name?: string;
};

export const Column = styled(Col)`
  padding: 1rem 3.25rem;

  p {
    font-size: 14;
    line-height: 1.65;
    color: #6980a6;
  }

  .highlighted {
    background: rgba(1, 92, 255, 0.2);
    color: var(--primary);
  }
`;

function GoodTillCancelRadio({
  value,
  name = "goodTillCancel",
  onChange = noOp
}: RadioFields<boolean>) {
  return (
    <>
      <h4>03) Good 'til canceled (GTC)</h4>
      <p>
        A type of order that an investor may place to buy or sell a security
        that remains active until either the order is filled or the investor
        cancels it.{" "}
        <span className="highlighted">
          We’ll keep the order open for 3 (three) days,
        </span>{" "}
        if it’s not possible to execute, it will be cancelled.
      </p>
      <RadioGroup.Component
        name={name}
        value={value}
        onChange={onChange}
        options={GTCOptions}
      />
    </>
  );
}

function FullFillRadio({
  value,
  name = "fullFillRequired",
  onChange = noOp
}: RadioFields<boolean>) {
  return (
    <>
      <h4>02) Select an order type</h4>
      <p>
        Given the illiquid nature of Corporate Bonds{" "}
        <span className="highlighted">we recommend allowing Partial Fills</span>{" "}
        of orders to help maximize the chance of execution. Fill or Kill orders
        may result in executing at a higher price than a Partial Fill.
      </p>
      <RadioGroup.Component
        name={name}
        value={value}
        onChange={onChange}
        options={FullFillOptions}
      />
    </>
  );
}

const ExecutionInfo = (
  <>
    <h4>01) Execution buffer</h4>
    <p>
      To increase the chance of execution{" "}
      <span className="highlighted">
        we utilize a +2% limit price to provide an execution buffer above the
        level shown
      </span>{" "}
      on YieldX – whilst we stream live prices onto the platform given markets
      may move between order generation and trade the buffer provides some
      flexibility on execution, rest assured there are{" "}
      <span className="highlighted">no mark-ups or commissions</span> being
      charged, the price we trade at is the price you trade at.
    </p>
  </>
);

export function Preferences({
  goodTillCancel = preferenceDefaults.goodTillCancel,
  fullFillRequired = preferenceDefaults.fullFillRequired,
  setGoodTillCancel,
  setFullFillRequired
}: FormProps) {
  return (
    <StyledForm>
      <Row>
        <Column>{ExecutionInfo}</Column>
        <Column data-testid="fullFillRequired">
          <FullFillRadio
            value={fullFillRequired}
            onChange={setFullFillRequired}
          />
        </Column>
        <Column data-testid="goodTillCancel">
          <GoodTillCancelRadio
            value={goodTillCancel}
            onChange={setGoodTillCancel}
          />
        </Column>
      </Row>
    </StyledForm>
  );
}

Preferences.Info = ExecutionInfo;
Preferences.GoodTillCancelRadio = GoodTillCancelRadio;
Preferences.FullFillRadio = FullFillRadio;
