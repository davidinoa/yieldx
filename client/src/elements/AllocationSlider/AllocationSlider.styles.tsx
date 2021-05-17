import styled from "styled-components";
import ReactSlider from "react-slider";
import React, { HTMLAttributes } from "react";

export const StyledSlider = styled(ReactSlider)`
  margin-top: 2em;
  width: 80%;
`;

const StyledThumb = styled.div`
  width: 15px;
  height: 15px;
  text-align: center;
  background: var(--primary);
  color: #fff;
  border-radius: 50%;
  cursor: grab;
  position: relative;
  top: 50%;
  transform: translateY(-50%);
  > span {
    position: absolute;
    font-weight: bold;
    font-size: 10px;
    line-height: 12px;
    text-align: center;
    letter-spacing: 0.2em;
    text-transform: uppercase;
    left: 50%;
    top: -1.5rem;
    transform: translateX(-50%);
  }
`;

export const Thumb = (
  props: HTMLAttributes<HTMLDivElement>,
  state: { valueNow: number }
) => (
  // eslint-disable-next-line react/jsx-props-no-spreading
  <StyledThumb {...props}>
    <span>{state.valueNow}%</span>
  </StyledThumb>
);

const StyledTrack = styled.div`
  top: 0;
  bottom: 0;
  background: ${(props: any) => {
    if (props.index === 1) return "var(--primary)";
    if (props.isLastValue) return "var(--page)";
    return "var(--border-new)";
  }};
  height: 2px;
`;

export const Track = (props: any, state: any) => (
  <StyledTrack
    // eslint-disable-next-line react/jsx-props-no-spreading
    {...props}
    index={state.index}
    isLastValue={state.value[1] === 99 && state.index === 2}
  />
);
