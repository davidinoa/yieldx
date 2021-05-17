import { Row } from "react-bootstrap";
import React from "react";
import {
  SFIHeaderContainer,
  SFIHeaderInfo,
  SFIHeaderInfoContainer,
  SFIHeaderInfoName,
  SFIHeaderInfoStatus
} from "../SelectInvestor.style";
import { ValueBox } from "components/ValueBox/ValueBox";

interface Props {
  title: string;
  subtitle: string;
  value: number;
  onEdit?: () => void;
}

export function HeaderWithValue({ onEdit, title, subtitle, value }: Props) {
  return (
    <Row>
      <SFIHeaderContainer>
        <Row>
          <SFIHeaderInfo>
            <Row>
              <SFIHeaderInfoContainer>
                <Row className="d-flex flex-row">
                  <SFIHeaderInfoStatus>
                    <h5>{subtitle}</h5>
                  </SFIHeaderInfoStatus>
                </Row>
                <Row>
                  <SFIHeaderInfoName>
                    <h1>{title}</h1>
                  </SFIHeaderInfoName>
                </Row>
              </SFIHeaderInfoContainer>
            </Row>
          </SFIHeaderInfo>
          <ValueBox value={value} onEdit={onEdit} />
        </Row>
      </SFIHeaderContainer>
    </Row>
  );
}
