import styled from "styled-components";
import NumberFormat from "react-number-format";
import { mediaQuery } from "../../theme/breakpoints.style";

interface InputProps {
  starticon?: string;
  endicon?: string;
  error?: string;
  align?: "left" | "right";
  onBlur?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  small?: boolean;
  percentage?: boolean;
  decimalScale?: number;
}

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  &.hidden {
    display: none;
  }
  ${mediaQuery("xxl")} {
  }
`;

export const Label = styled.label`
  font-weight: bold;
  letter-spacing: 0.2em;
  text-transform: uppercase;
  color: var(--text);
  margin-top: 0.25rem;
  margin-bottom: 0.5rem;
  font-size: 0.6rem;

  ${mediaQuery("xxl")} {
    margin-top: 0.5rem;
    margin-bottom: 0.75rem;
    font-size: 0.75rem;
  }
`;

export const HelperText = styled.p`
  color: var(--subtext-1);
  text-align: right;
  font-weight: normal;
  display: flex;
  font-size: 0.7rem;
  margin-top: 0.25rem;

  ${mediaQuery("xxl")} {
    margin-top: 0.35rem;
    font-size: 0.8125rem;
  }
`;

export const ErrorText = styled.p`
  z-index: 1;
  width: fit-content;
  background: var(--issue);
  opacity: 0.9;
  color: var(--white) !important;
  top: 0;
  position: relative;
  padding: 0.25rem 0.45rem;
  border-radius: 0 0 0.15rem 0.15rem;
  font-size: 0.675rem;
  margin: 1px 0 0 0.2rem;

  ${mediaQuery("xxl")} {
    font-size: 0.85rem;
    padding: 0.35rem 0.55rem;
  }
`;

export const Icon = styled.i`
  position: absolute;
  top: 50%;
  left: 1.25rem;
  transform: translate(-50%, -55%);

  ${mediaQuery("xxl")} {
    left: 1.25rem;
  }
`;

export const EndIcon = styled.i`
  position: absolute;
  top: 50%;
  right: 1.25rem;
  transform: translate(50%, -50%);

  ${mediaQuery("xxl")} {
    right: 1.25rem;
  }
`;

export const NumberFormatInput = styled(NumberFormat).attrs({})`
  width: 100%;
  border-radius: 4px;
  line-height: normal;
  display: inline-block;
  background: transparent;
  height: 42px;
  &.small {
    height: 36px;
  }

  padding-right: 15px;
  &.end-icon {
    padding-right: 40px;
  }

  padding-left: 15px;
  &.start-icon {
    padding-left: 40px;
  }

  border: 1px solid var(--border-1);
  &.issue {
    border: 1px solid var(--issue);
  }
  font-size: 1rem;

  ${mediaQuery("xxl")} {
    height: 50px;
    &.small {
      height: 40px;
    }
    font-size: 1.1rem;
  }

  &.validated {
    border-color: var(--live);
  }
  &:focus {
    outline-style: auto;
    outline-width: 1px;
    outline-color: var(--white);
    border-color: var(--border-2);
  }
`;

export const InputContainer = styled.div`
  display: flex;
  align-items: center;
  position: relative;
  width: ${(props: InputProps) => (props.percentage ? "50%" : "100%")};
  &.dollar {
    > i > svg {
      > path {
        stroke: #6980a6;
      }
    }
  }

  &.percent {
    > i > svg {
      > path {
        fill: #6980a6;
      }
    }
  }
`;
