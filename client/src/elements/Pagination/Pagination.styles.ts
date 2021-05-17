import styled from "styled-components";

export const Container = styled.nav`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: 2rem;
  > * {
    margin-left: 15px;
  }
`;

interface ButtonProps {
  active?: boolean;
  disabled?: boolean;
}

export const Button = styled.button.attrs({
  type: "button"
})`
  padding: 0;
  background: none;
  font-weight: ${(props: ButtonProps) => (props.active ? "bold" : "normal")};
  color: ${(props: ButtonProps) =>
    props.active ? "#089aff" : "var(--neutral-color-4)"};
`;

export const ArrowButton = styled(Button)`
  path {
    stroke: ${props =>
      props.disabled ? "var(--neutral-color-4)" : "var(--white)"};
  }
`;

export const MoreButton = styled(Button)`
  padding-top: 4px;
`;
