import styled from "styled-components";

export const RiskBar = styled.div`
  border: 1px solid #5d6d88;
  box-sizing: border-box;
  border-radius: 5px;
  width: 9px;
  &.bar-1 {
    height: 18px;
  }
  &.bar-2 {
    height: 22px;
  }
  &.bar-3 {
    height: 25px;
  }
  &.bar-4 {
    height: 28px;
  }
  &.bar-5 {
    height: 33px;
  }

  &.filled {
    background: #ffa15e;
  }
`;
export const ClassificationLabel = styled.span`
  font-weight: bold;
  font-size: 12px;
  line-height: 15px;
  color: #c4ccda;
`;
export const BarContainer = styled.div.attrs({
  className: "d-flex justify-content-between align-items-end"
})`
  width: 60px;
`;
