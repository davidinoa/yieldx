import styled from "styled-components";
import { Form } from "react-bootstrap";

export const StyledSwitch = styled(Form.Check)`
  > label {
    pointer-events: ${props => (props.disabled ? "none" : "auto")};
    cursor: pointer;
    position: relative;

    ::before {
      width: 124px !important;
      height: 29px;
      border-radius: 100px !important;
      border: 1px solid var(--border-new) !important;
      background-color: inherit !important;
      pointer-events: ${props =>
        props.disabled ? "none !important" : "all !important"};
    }
    ::after {
      width: 57px !important;
      height: 19px !important;
      top: 50% !important;
      transform: ${props =>
        props.checked
          ? "translate(43%,47%) !important"
          : "translate(-50%, 47%) !important"};
      left: 50% !important;
      background-color: var(--primary) !important;
    }
  }
  > input {
    width: 124px;
    height: 32px;
    box-shadow: none;
    pointer-events: ${props => (props.disabled ? "none" : "auto")};
    background: none;
    visibility: hidden;
  }
`;
export const Labels = styled.div.attrs({
  className: "position-relative"
})`
  //width: 124px;
  font-weight: bold;
  font-size: 12px;
  line-height: 15px;
  pointer-events: none;
  width: 125px;
  text-align: center;

  .dollar,
  .yield {
    display: inline-block;
    position: absolute;
    z-index: 10;
    top: 1em;
    left: 50%;
    width: 50px;
  }
  .dollar {
    //background: #f0f;
    //left: 0;
    transform: translate(-100%, 0);
  }
  .yield {
    //background: #f00;
    transform: translate(10%, 0);
  }
`;

export const Root = styled.div`
  position: absolute;
  width: 124px;
  top: 0.35rem;
  right: 0.5rem;
`;
