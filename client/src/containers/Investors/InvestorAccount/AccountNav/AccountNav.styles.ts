import styled from "styled-components";

export const Root = styled.div`
  width: 100%;
  height: 600px;
  border: 2px solid var(--border-new);
  padding: 0.35rem;
  border-radius: 0.7rem;

  &::before {
    display: block;
    width: 100%;
    height: 1rem;
    border-radius: 0.4rem 0.4rem 0 0;
    content: " ";
    background: var(--dark);
  }
`;

export const Menu = styled.nav`
  margin-top: 20px;
  list-style: none;
  > * + * {
    margin-top: 15px;
  }
`;
