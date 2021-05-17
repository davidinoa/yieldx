import styled from "styled-components";
import { mediaQuery } from "theme/breakpoints.style";

export const Root = styled.div`
  position: absolute;
  top: 100%;
  right: 0;
  margin: 1rem 0 0;
  min-width: 256px;
  height: auto;
  border: 1px solid var(--border-new);
  border-radius: 5px;
  z-index: 10000;
  display: flex;
  flex-direction: column;
  transform: translate(1rem, 1rem);

  ${mediaQuery("xxl")} {
    transform: translate(3.75rem, 1.15rem);
  }

  > div.arrow {
    width: 60px;
    height: 16px;
    overflow: hidden;
    position: absolute;
    right: 0;
    margin-right: 0;
    top: -15px;

    ${mediaQuery("xxl")} {
      margin-right: 35px;
      width: 70px;
    }

    :after {
      content: "";
      position: absolute;
      left: 20px;
      top: 5px;
      width: 20px;
      height: 20px;
      transform: rotate(45deg);
      background: var(--dark);
      border: 1px solid var(--border-new);
      border-radius: 2px;
    }
  }
`;

export const DropDownBody = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  align-items: flex-start;
  width: 100%;
  background-color: var(--dark);
  border-radius: 0 0 5px 5px;
  flex-grow: 1;
  padding: 1.5rem 20px;
  .popover-text {
    width: 100%;
    font-weight: normal;
    font-size: 14px;
    line-height: 17px;
    text-align: center;
  }
  .popover-days-left {
    width: 100%;
    font-weight: bold;
    font-size: 22px;
    line-height: 27px;
    text-align: center;
    padding: 0.45em 0 0.45em 0;
  }
`;
