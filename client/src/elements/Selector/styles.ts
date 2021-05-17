import styled from "styled-components";

export const DetailedSelectorTitle = styled.h1`
  font-family: var(--font-primary);
  font-style: normal;
  font-weight: 600;
  font-size: 25px;
  line-height: 30px;
  text-align: center;
  &.active {
    color: #669dff;
  }
`;

export const DetailedSelectorText = styled.span`
  font-family: var(--font-primary);
  font-style: normal;
  font-weight: normal;
  font-size: 15px;
  line-height: 18px;
  text-align: center;
  letter-spacing: 0.05em;
  color: var(--dark-light-4);
`;

export const DetailedSelectorCard = styled.div`
  span {
    font-family: var(--font-primary);
    font-style: normal;
    font-weight: normal;
    font-size: 15px;
    line-height: 18px;
    text-align: center;
    letter-spacing: 0.05em;
    color: var(--dark-light-4);
  }
  &.disabled {
    opacity: 0.3;
    pointer-events: none;
  }
  &:hover {
    border: double 1px transparent;
    background-image: linear-gradient(var(--page), var(--page)), var(--gradient);
    background-origin: border-box;
    background-clip: content-box, border-box;
    > svg.individual > path {
      stroke: var(--primary);
    }
    > svg.organization > path {
      fill: var(--primary);
    }
  }
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background: inherit;
  border: double 1px var(--dark-light-border);
  border-radius: 15px;
  width: 350px;
  height: 300px;
`;
