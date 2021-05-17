import styled from "styled-components";

export const Root = styled.div.attrs({ "data-testid": "root" })`
  position: fixed;
  left: 0;
  bottom: 0;
  height: 60px;
  width: 100vw;
  display: flex;
  align-items: center;
  justify-content: space-between;
  background: var(--dark);
  padding: 0 3rem;
  button {
    height: 40px;
    border: none;
    font-weight: bold;
    font-size: 15px;
    text-transform: capitalize;
  }
`;

type Props = {
  visibility: string;
};

export const BackButton = styled.button.attrs({
  "data-testid": "BackButton",
  type: "button"
})`
  background: none;
  visibility: ${(props: Props) => props.visibility};
  svg {
    margin-right: 10px;
  }
`;

export const NextButton = styled.button.attrs([
  { "data-testid": "NextButton", type: "submit" }
])`
  border-radius: 5px;
  background: var(--primary);
  width: 145px;
  :disabled {
    opacity: 0.3;
  }
`;
