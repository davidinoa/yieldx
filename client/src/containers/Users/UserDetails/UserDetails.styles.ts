import styled from "styled-components";

export const ButtonsContainer = styled.div`
  margin-top: 80px;
  display: flex;
  justify-content: space-between;
  width: 100%;
  > button {
    border-radius: 4px;
    font-weight: bold;
    font-size: 15px;
    height: 40px;
    line-height: 18px;
    padding-left: 6%;
    padding-right: 6%;
  }
  & .cancel-button {
    border: 1px solid var(--border-new);
    background: inherit;
    :hover {
      border: 1px solid var(--subtext-3);
    }
  }

  & .continue-button {
    height: 40px;
    background: var(--primary);
    :disabled {
      opacity: 0.3;
      pointer-events: none;
    }
    :hover {
      background: var(--primary-hover);
    }
  }
`;
