import styled from "styled-components";
import { Form, Row, Col } from "react-bootstrap";

export const Radio = styled(Form.Check).attrs({
  custom: true,
  inline: true,
  type: "radio"
})`
  margin-bottom: 1rem;

  .custom-control-label {
    display: flex;
    align-items: center;
    font-weight: bold;
    font-size: 11px;
    letter-spacing: 0.2em;
    text-transform: uppercase;
    ::before {
      display: block;
      border-width: 1.5px;
      border-color: var(--border-new);
      background: var(--page);
    }
  }
  .custom-control-input:checked ~ .custom-control-label::before {
    background: var(--page);
    border-color: var(--white);
  }
`;
export const CenteredRow = styled(Row)`
  justify-content: center;
`;
export const CenteredCol = styled(Col)`
  justify-content: center;
  max-width: 70%;
`;

export const EditPositionPage = styled.div`
  overflow: auto;
  display: flex;
  flex-direction: row;
  justify-content: center;
  margin: 10%;
  border-color: white;
  &.review-page {
    margin: 0 10%;
  }
`;
export const OrderPage = styled.div`
  display: flex;
  flex-direction: row;
  border-color: white;
  border: 1px solid #253859;
  box-sizing: border-box;
  border-radius: 10px;
  flex-wrap: wrap;
  width: 100%;
  max-width: 1280px;
  &.review-page {
    border: none;
  }
`;

export const Card = {
  Container: styled.div`
    display: flex;
    flex-direction: column;
    flex: 1;
    min-width: 300px;

    ${({ borderRight }: { borderRight?: boolean }) =>
      borderRight && "border-right: 1px solid #ccccc029;"}
  `,

  Header: styled.div`
    margin: 1em;
    padding: 2em;
    align-items: center;
    flex-basis: 30%;
    min-height: 120px;
    background-color: #0e1f3b;

    font-size: 17px;
    font-style: normal;
    font-weight: bold;
    height: 2em;
    margin-top: 1em;
    max-width: 100%;
    overflow: hidden;
    text-align: center;
    text-overflow: ellipsis;
    white-space: nowrap;
  `,
  HeaderText: styled.div`
    margin-top: 1em;
    font-style: normal;
    max-height: 17px;
    overflow: hidden;
    font-weight: bold;
    text-overflow: ellipsis;
    font-size: 17px;
    line-height: 21px;
    text-align: center;
  `,
  Body: styled.div`
    padding: 2em;
    display: flex;
    height: 100%;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    background-color: #03132f;
  `
};
