import styled from "styled-components";

export const LabelWrapper = styled.div`
  --text-color: ${props => {
    return `var(--label-text-${props.color})`;
  }};
  position: relative;
  border: 1px solid
    var(${props => (props.color === "default" ? "--border-1" : "--text-color")});
  box-sizing: border-box;
  border-radius: 3px;
  height: 18px;
  width: 70px;
  color: var(--text-color);
  font-weight: bold;
  font-size: 10px;
  line-height: 12px;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 4px 6px;

  &::before {
    content: "";
    width: 100%;
    height: 100%;
    position: absolute;
    left: 0;
    background-color: ${props =>
      props.color === "default" ? "" : "var(--text-color)"};
    opacity: 0.2;
  }

  &.disabled {
    opacity: 0.3;
  }
`;

export const IconWrapper = styled.div`
  height: 14px;
  width: 14px;
  margin-right: 0.5rem;
`;

export const TextWrapper = styled.div`
  text-align: center;
`;
