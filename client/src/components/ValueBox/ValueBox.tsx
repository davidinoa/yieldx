import React from "react";
import { Row } from "react-bootstrap";
import Decimal from "util/Decimal";
import { CardOutlined, CardOutlinedBorderTop } from "theme/styles";
import { ReactComponent as Pencil } from "assets/svg/edit.svg";
import { Root, ValueTotal } from "./ValueBox.styles";

interface Props {
  value: number;
  onEdit?: () => void;
}

export function ValueBox({ onEdit, value }: Props) {
  const [dollars, cents] = Decimal.format(value).split(".");

  return (
    <Root>
      <CardOutlined>
        <CardOutlinedBorderTop className="justify-content-between">
          <h3>PORTFOLIO VALUE</h3>
          {onEdit && (
            <button
              type="button"
              style={{ border: "none", background: "none" }}
              data-testid="ValueBox-EditPortfolioValueButton"
              onClick={onEdit}
            >
              <Pencil
                style={{
                  width: 10,
                  height: 10,
                  marginRight: 15
                }}
              />
              Edit
            </button>
          )}
        </CardOutlinedBorderTop>
        <Row>
          <ValueTotal>
            <span>
              {`$${dollars}`}
              <sup>{`.${cents}`}</sup>
            </span>
          </ValueTotal>
        </Row>
      </CardOutlined>
    </Root>
  );
}
