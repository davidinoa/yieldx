import React from "react";
import { ReactComponent as DollarSign } from "assets/svg/dollar-primary.svg";
import {
  EditPositionData,
  EditPositionResult
} from "providers/graphql/hooks/useEditPosition";
import { Direction2 } from "providers/graphql/hooks";
import { Col } from "react-bootstrap";
import { Formik } from "formik";
import { ReactComponent as StackIcon } from "assets/svg/stack.svg";
import YieldXLoader from "elements/YieldXLoader/YieldXLoader";
import {
  ErrorText,
  HelperText,
  Label,
  NumberFormatInput
} from "elements/FormikNumberInput/NumberInput.styles";
import {
  Card,
  CenteredRow,
  CenteredCol,
  Radio
} from "components/Execution/styles";
import { Field } from "./Field";

type EditOrderProps = Pick<
  EditPositionData,
  | "asset"
  | "cashAvailable"
  | "investor"
  | "order"
  | "currentPositionValue"
  | "currentPositionQuantity"
  | "currentPortfolioValue"
  | "originalPortfolio"
  | "position"
  | "spotPrice"
> &
  Pick<EditPositionResult, "setQuantity" | "setDirection">;

interface PositionProps extends EditOrderProps {
  helpText: string;
  errorText: string | undefined;
}

export function Position({
  asset,
  position,
  order,
  spotPrice,
  currentPositionValue,
  currentPositionQuantity,
  setDirection,
  setQuantity,
  helpText,
  errorText = ""
}: PositionProps) {
  if (!asset) return <YieldXLoader />;
  if (!asset.identifiers) return <YieldXLoader />;
  if (!asset.price) return <YieldXLoader />;
  const { name, identifiers, ticker } = asset;
  const assetYield = asset?.analytics?.yield;
  const { cusip } = identifiers;
  const { settled = 0, costBasis = 0 } = position || {};
  const error = errorText.length > 0;
  return (
    <Formik
      initialValues={{ direction: order?.direction, quantity: settled }}
      onSubmit={_values => undefined}
    >
      <>
        <Card.Container borderRight>
          <Card.Header>
            <StackIcon />
            <Card.HeaderText>{name}</Card.HeaderText>
          </Card.Header>
          <Card.Body>
            <Col>
              <Field label="CUSIP" value={cusip} />
              <Field label="Ticker" value={ticker} />
              <Field label="Current Quantity" value={currentPositionQuantity} />
              <Field
                label="Current Market Value"
                value={currentPositionValue}
                type="money"
              />
              <Field label="Price" value={spotPrice} type="money" />
              <Field label="Cost Basis" value={costBasis} type="money" />
              <Field label="Yield" value={assetYield} type="percent" />
            </Col>
          </Card.Body>
        </Card.Container>
        <Card.Container>
          <Card.Header>
            <DollarSign />
            <Card.HeaderText>Select your action below</Card.HeaderText>
          </Card.Header>
          <Card.Body>
            <CenteredRow>
              <Radio
                name="Buy"
                id="directionBuy"
                label="BUY"
                checked={order.direction === Direction2.Buy}
                onChange={() => setDirection(Direction2.Buy)}
              />
              <Radio
                name="Sell"
                id="directionSell"
                label="SELL"
                disabled={settled === 0}
                checked={order.direction === Direction2.Sell}
                onChange={() => setDirection(Direction2.Sell)}
              />
            </CenteredRow>
            <CenteredRow>
              <CenteredCol>
                <Label htmlFor="quantity">enter quantity</Label>
                <NumberFormatInput
                  id="quantity"
                  data-testid="NumberInput-quantity"
                  name="quantity"
                  align="left"
                  thousandSeparator
                  value={order.quantity}
                  onValueChange={({
                    floatValue = 0
                  }: {
                    floatValue: number;
                  }) => {
                    setQuantity(floatValue);
                  }}
                />
                <div style={{ position: "relative" }}>
                  {!error && <HelperText>{helpText}</HelperText>}
                  {error && (
                    <ErrorText className="err-text">{errorText}</ErrorText>
                  )}
                </div>
              </CenteredCol>
            </CenteredRow>
          </Card.Body>
        </Card.Container>
      </>
    </Formik>
  );
}
