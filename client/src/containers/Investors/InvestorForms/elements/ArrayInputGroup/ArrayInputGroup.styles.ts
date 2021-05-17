import styled from "styled-components";
import { Row, Col } from "react-bootstrap";
import { Form as FormikForm } from "formik";
import { Input } from "../TextInput/TextInput.styles";

export const Form = styled(FormikForm)`
  margin: auto;
  margin-top: 30px;
  max-width: 790px;
  display: flex;
  flex-direction: column;
`;

export const FormRow = styled(Row)`
  justify-content: space-between;
  & + & {
    margin-top: 40px;
  }
`;

export const InputGroup = styled.div`
  border: 1px solid var(--border-3);
  display: inline-block;
  border-radius: 4px;
`;

export const InputButton = styled.button.attrs({ type: "button" })`
  background: #0e1f3b;
  border-radius: 0px 3px 3px 0px;
  height: 40px;
  width: 60px;
`;

export const TextInput = styled(Input).attrs(props => ({ id: props.id }))`
  display: inline-block;
  width: 280px;
  border: none;
`;

export const Output = styled.li`
  background: var(--dark);
  border-radius: 5px;
  padding: 3px 7px;
  margin-bottom: 10px;
  font-weight: bold;
  text-transform: uppercase;

  button {
    border: none;
    background: transparent;
    > svg {
      margin-left: 10px;
      > path {
        fill: #6980a6;
      }
    }
  }
`;

export const GroupOutput = styled(Col)`
  padding: 0;
  display: flex;
  list-style: none;
  > ${Output} + ${Output} {
    margin-left: 10px;
  }
`;

export const BoxGroupOutput = styled(Row)`
  padding: 0;
  list-style: none;
  > ${Output} + ${Output} {
    margin-left: 10px;
  }
`;
