/* eslint-disable no-nested-ternary */
import styled from "styled-components";
import { mediaQuery } from "../../../../theme/breakpoints.style";

type Props = {
  current: boolean;
  completed: boolean;
};

export const StepperWrapper = styled.div`
  padding: 1rem 0 2rem;

  ${mediaQuery("sm")} {
    padding: 1.5rem 0 2rem;
  }
  ${mediaQuery("lg")} {
    padding: 0 0 2rem;
  }
  ${mediaQuery("xxl")} {
    padding: 1rem 0 4rem;
  }
`;
export const StepperItems = styled.ul`
  list-style: none;
  margin: 0;

  &::before {
    height: 1px;
    border: 1px solid var(--border-new);
    position: absolute;
  }
`;

export const Step = styled.li`
  display: flex;
  flex-flow: column;
  justify-content: center;
  align-items: center;
  font-weight: bold;
  text-align: center;
  text-transform: uppercase;
  position: relative;
  min-width: 3rem;
  z-index: 100;

  ${mediaQuery("sm")} {
    min-width: 6.5rem;
  }
  ${mediaQuery("xxl")} {
    min-width: 8.5rem;
  }

  &::before,
  &::after {
    content: "";
    display: block;
    width: 50%;
    height: 1px;
    position: absolute;
    background: var(--subtext-3);
    top: 0.45rem;
    z-index: 0;
  }
  &::before {
    right: 50%;
  }
  &::after {
    left: 50%;
  }
  &:first-of-type {
    &::before {
      display: none;
    }
  }
  &:last-of-type {
    margin-right: 0;

    &::after {
      display: none;
    }
  }

  span {
    border-radius: 50%;
    display: flex;
    justify-content: center;
    align-items: center;
    background: var(--page);
    border: 1px solid var(--subtext-3);
    margin-bottom: 10px;
    position: relative;
    z-index: 10;
    transition: border-color 300ms ease-out;
    height: 0.85rem;
    width: 0.85rem;

    ${mediaQuery("xxl")} {
      height: 1rem;
      width: 1rem;
    }

    &::before {
      display: flex;
      border-radius: 50%;
      content: "";
      background: transparent;
      transition: background 300ms ease-out;
      height: 0.5rem;
      width: 0.5rem;

      ${mediaQuery("xxl")} {
        height: 0.75rem;
        width: 0.75rem;
      }
    }
  }

  h5 {
    margin: 0;
    display: none;
    justify-content: center;
    width: 100%;
    color: var(--subtext-3);
    transition: color 300ms ease-out;
    font-size: 0.65rem;
    letter-spacing: 0.15em;

    ${mediaQuery("sm")} {
      display: flex;
    }

    ${mediaQuery("xxl")} {
      font-size: 0.75rem;
      letter-spacing: 0.2em;
    }
  }

  &.current {
    span {
      border-color: white;
      transition: border-color 300ms ease-out;
      background: var(--page);

      &::before {
        background: var(--page);
        transition: background 300ms ease-out;
      }
    }
    h5 {
      color: white;
      transition: color 300ms ease-out;

      ${mediaQuery("sm", true)} {
        display: flex;
        position: absolute;
        transform: translateY(125%);
      }
    }
  }
  &.completed {
    span {
      border-color: var(--primary);
      transition: border-color 300ms ease-out;
      &::before {
        background: var(--primary);
        transition: background 300ms ease-out;
      }
    }
    h5 {
      color: white;
      transition: color 300ms ease-out;
    }
  }

  * {
    color: ${(props: Props) =>
      props.current || props.completed ? "var(--text)" : "var(--subtext-3)"};
  }
`;

export default Step;
