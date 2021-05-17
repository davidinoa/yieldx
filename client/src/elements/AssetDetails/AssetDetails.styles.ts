import styled from "styled-components";

export const Description = styled.p`
  text-align: center;
  &::before,
  &::after {
    content: "";
    background: var(--lightest);
    width: 2rem;
    height: 1px;
    display: block;
    position: absolute;
    left: 50%;
    transform: translate(-50%, 0);
  }
  &::before {
    top: 0;
  }
  &::after {
    bottom: 0;
  }
`;
