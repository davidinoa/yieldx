import styled from "styled-components";
import { Row } from "react-bootstrap";
import { Form as FormikForm } from "formik";

export const Form = styled(FormikForm)`
  margin: auto;
  margin-top: 30px;
  max-width: 790px;
  display: flex;
  flex-direction: column;
  & .separator {
    border-bottom: solid 2px var(--border-new);
  }
`;

export const AddButton = styled.button`
  border: 1px solid var(--border-3);
  border-radius: 5px;
  font-weight: bold;
  font-size: 15px;
  line-height: 18px;
  width: 94px;
  height: 40px;
  background: inherit;
  margin-bottom: 1rem;
  :disabled {
    opacity: 0.3;
  }
`;

export const InterestedPartyDisplay = styled(Row)`
  height: 72px;
  border-bottom: solid 2px var(--border-new);
  &.first-party {
    border-top: solid 2px var(--border-new);
  }
  &.last-party {
    margin-bottom: 3rem;
  }
  .text-data {
    border-right: 2px solid var(--border-new);
    margin-top: 10px;
    margin-bottom: 10px;
    > span:first-child {
      font-size: 13px;
      line-height: 165%;
      text-transform: uppercase;
    }
    > span:last-child {
      font-weight: bold;
      font-size: 11px;
      line-height: 13px;
      letter-spacing: 0.2em;
      text-transform: uppercase;
      color: var(--subtext-3);
    }
  }
  .icon-button {
    background: inherit;
    padding: 0;
  }
`;
