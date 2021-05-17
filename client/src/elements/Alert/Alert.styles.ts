import styled from "styled-components";
import { ReactComponent as Icon } from "../../assets/svg/x.svg";

export const Container = styled.div`
  display: flex;
  transition: all 300ms ease-in-out;
  align-items: center;
  justify-content: center;
  padding: 10px 0;
  ${props => {
    if (props.color === "#FAE369")
      return "background: rgba(250, 227, 105, 0.2);";
    return `background-color: ${props.color}98;`;
  }}
  position: fixed;
  bottom: 0;
  z-index: var(--zindex-alert);
  &.bottomNav {
    bottom: 60px;
  }
  right: 0;
  z-index: 100;
  & > * + * {
    margin-left: 10px;
  }
  button {
    background-color: ${props => props.color};
    color: ${props => (props.color === "#FAE369" ? "black" : "white")};
  }
  > span {
    color: ${props => (props.color === "#FAE369" ? "#FAE369" : "white")};
  }
`;

export const Button = styled.button.attrs({ type: "button" })`
  border-radius: 5px;
  padding: 7px 10px;
  font-weight: bold;
  font-size: 14px;
  line-height: 17px;
  color: var(--white);
`;

export const CloseIcon = styled(Icon)`
  cursor: pointer;
`;
