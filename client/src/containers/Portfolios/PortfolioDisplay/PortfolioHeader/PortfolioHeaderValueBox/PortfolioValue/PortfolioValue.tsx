import React from "react";
import { Row } from "react-bootstrap";
import { ValueTitle, ValueTotal } from "../../PortfolioHeader.styles";
import Decimal from "../../../../../../util/Decimal";

interface Props {
  value: number;
}

export default function PortfolioValue({ value }: Props) {
  const [dollars, cents] = Decimal.format(value).split(
    "."
  );
  return (
    <>
      <Row>
        <ValueTitle>
          <h3>PORTFOLIO VALUE</h3>
        </ValueTitle>
      </Row>
      <Row>
        <ValueTotal className="col">
              <span>
                {`$${dollars}`}
                <sup>{`.${cents}`}</sup>
              </span>
        </ValueTotal>
      </Row>
    </>
  );
}
