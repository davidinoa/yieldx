import styled, { keyframes } from "styled-components";

export const UploadOuter = styled.div`
  padding: 4rem;
  width: 100%;
  height: 100%;
`;

const fadeInKeyframe = keyframes`
  0% {
    opacity: 0;
  }
  100% {
    opacity: 1;
  }
`;

export const UploadInner = styled.div`
  display: flex;
  flex: 1;
  flex-direction: column;
  cursor: pointer;
  grid-template-columns: max-content;
  text-align: right;
  align-items: center;
  justify-items: center;
  justify-content: center;

  padding: 4rem;
  border: 1px dashed transparent;
  animation: 1s ${fadeInKeyframe} ease-in-out;

  box-sizing: border-box;
  border-radius: 10px;

  -webkit-transition: color 0.25s;
  transition: color 0.25s;

  background: none;

  box-sizing: border-box;

  position: relative;
  &::before,
  &::after {
    box-sizing: inherit;
    content: "";
    position: absolute;
    width: 100%;
    height: 100%;

    border: 1px dashed transparent;
    border-radius: 10px;
    width: 0;
    height: 0;
  }
  &::before {
    border-radius: 10px;
    top: 0;
    left: 0;
  }
  &::after {
    border-radius: 10px;
    bottom: 0;
    right: 0;
  }
  &:hover::before,
  &:hover::after {
    width: 100%;
    height: 100%;
    border-style: dashed;
  }
  &:hover::before {
    border-top-color: var(--primary-hover);
    border-right-color: var(--primary-hover);
    -webkit-transition: width 0.125s ease-out, height 0.125s ease-out 0.125s;
    transition: width 0.125s ease-out, height 0.125s ease-out 0.125s;
  }
  &:hover::after {
    border-bottom-color: var(--primary-hover);
    border-left-color: var(--primary-hover);
    -webkit-transition: border-color 0s ease-out 0.25s,
      width 0.125s ease-out 0.25s, height 0.125s ease-out 0.375s;
    transition: border-color 0s ease-out 0.25s, width 0.125s ease-out 0.25s,
      height 0.125s ease-out 0.375s;
  }
`;

export const SubTitle = styled.h3`
  font-size: 13px;
  line-height: 13px;
  /* identical to box height */

  text-align: center;
  letter-spacing: 0.05em;

  /* Black / Light-4 */
  color: #8290b0;
`;

export const Note = styled.p`
  margin-top: 0.5rem;
  font-size: 10px;
  line-height: 10px;
  /* identical to box height */

  /* Black / Light-4 */

  color: #8290b0;
`;
