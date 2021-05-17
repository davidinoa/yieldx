import React from "react";
import { Col } from "react-bootstrap";
import styled from "styled-components";
import {
  GroupOutput,
  BoxGroupOutput,
  Output
} from "../InvestorForms/elements/ArrayInputGroup/ArrayInputGroup.styles";
import { StyledDataRow, DeepCol } from "./ReviewCreateInvestor.styles";

interface DeepItem {
  value: string;
  immediateFamily: string[];
}

interface Props {
  label: string;
  value: string | string[];
  boxStyle?: boolean;
  secondItems?: string[];
  deepValue?: DeepItem[];
}

const BreakWord = styled.span`
  display: block;
  overflow-wrap: break-word;
  width: 80%;
`;

function DataRow({ label, value, boxStyle, secondItems, deepValue }: Props) {
  return (
    <div>
      <StyledDataRow>
        <Col xs={{ span: 7, offset: 3 }}>
          <span>{label}</span>
        </Col>
        {boxStyle && Array.isArray(value) ? (
          <>
            {secondItems ? (
              <div>
                {deepValue?.map(val => (
                  <DeepCol>
                    <span>{val.value}</span>
                    <GroupOutput>
                      {val.immediateFamily.map((member: string) => (
                        <Output key={member}>
                          <button type="button">{member}</button>
                        </Output>
                      ))}
                    </GroupOutput>
                  </DeepCol>
                ))}
              </div>
            ) : (
              <Col>
                <BoxGroupOutput>
                  {value.map((member: string) => (
                    <Output key={member}>
                      <button type="button">{member}</button>
                    </Output>
                  ))}
                </BoxGroupOutput>
              </Col>
            )}
          </>
        ) : (
          <Col xs>
            {Array.isArray(value) ? (
              value.map((val, i) => (
                <span key={`${val + i}`}>
                  {val}
                  <br />
                </span>
              ))
            ) : (
              <>
                {secondItems ? (
                  <Col>
                    <span>{value}</span>
                    <GroupOutput>
                      {secondItems.map((member: string) => (
                        <Output key={member}>
                          <button type="button">{member}</button>
                        </Output>
                      ))}
                    </GroupOutput>
                  </Col>
                ) : (
                  <BreakWord>{value}</BreakWord>
                )}
              </>
            )}
          </Col>
        )}
      </StyledDataRow>
    </div>
  );
}

export default DataRow;
