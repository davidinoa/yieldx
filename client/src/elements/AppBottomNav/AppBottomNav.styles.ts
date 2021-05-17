import styled from "styled-components";
import { mediaQuery } from "../../theme/breakpoints.style";
import { bottomNav } from "../../theme/theme.style";

export const Root = styled.div`
  position: fixed;
  z-index: var(--zindex-bottom-nav);
  left: 0;
  bottom: 0;
  width: 100vw;
  display: flex;
  align-items: center;
  justify-content: space-between;
  background: var(--dark);
  padding: 0 1rem;
  box-shadow: 0 -5px 10px rgba(0, 0, 0, 0.1);
  height: ${bottomNav.height.xs};

  ${mediaQuery("xxl")} {
    height: ${bottomNav.height.xxl};
    padding: 0 2rem;
  }

  button {
    width: auto;
    border: none;
    font-weight: bold;
    font-size: 0.75rem;
    height: 1.85rem;
    text-transform: capitalize;

    ${mediaQuery("xxl")} {
      height: 2.5rem;
      font-size: 0.975rem;
    }
  }
`;

export const BackButton = styled.button.attrs({ type: "button" })`
  background: none;
  visibility: ${(props: { visibility: "hidden" | "initial" }) =>
    props.visibility};
  padding-left: 0;
  padding-right: 1.5rem;

  ${mediaQuery("xxl")} {
    padding-right: 2.5rem;
  }
  svg {
    margin-right: 0.65rem;
  }
`;

export const NextButton = styled.button`
  padding-left: 1.5rem;
  padding-right: 1.5rem;
  border-radius: 0.25rem;
  background: var(--primary);

  ${mediaQuery("xxl")} {
    padding-left: 2.5rem;
    padding-right: 2.5rem;
  }

  :disabled {
    opacity: 0.3;
  }
`;
export const SecondaryButton = styled.button`
  padding-left: 1.5rem;
  padding-right: 1.5rem;
  border-radius: 0.25rem;
  background: var(--light);
  margin-right: 0.75rem;

  :disabled {
    opacity: 0.3;
  }
`;

export const ExportButton = styled.button`
  background: #0e1f3b;
  border: 1px solid #253859 !important;
  box-sizing: border-box;
  border-radius: 5px;
  height: 40px;
  width: 114px !important;
  color: var(--primary);
  font-weight: bold;
  font-size: 15px;
  line-height: 18px;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-right: 1rem;
  > svg {
    margin-left: 0.5rem;
  }
`;
