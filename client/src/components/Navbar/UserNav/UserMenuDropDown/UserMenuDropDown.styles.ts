import styled from "styled-components";
import { Link } from "react-router-dom";
import { mediaQuery } from "theme/breakpoints.style";

export const Root = styled.div`
  position: absolute;

  margin: 1rem 0 0;
  min-width: 256px;
  height: auto;
  border: 1px solid var(--border-new);
  border-radius: 5px;
  z-index: 10000;
  display: flex;
  flex-direction: column;

  &.live-header-options {
    top: 50%;
    right: 0;
    transform: translate(1%, 2%);
    ${mediaQuery("xxl")} {
      transform: translate(18%, 1%);
    }
  }

  &.user-options {
    top: 54%;
    left: 7%;
    transform: translate(-83%, 3%);
    ${mediaQuery("xxl")} {
      transform: translate(-65%, 4%);
    }
  }

  > div.arrow {
    width: 60px;
    height: 16px;
    overflow: hidden;
    position: absolute;
    right: 0;
    margin-right: 0;
    top: -15px;

    ${mediaQuery("xxl")} {
      margin-right: 35px;
      width: 70px;
    }

    :after {
      content: "";
      position: absolute;
      left: 20px;
      top: 5px;
      width: 20px;
      height: 20px;
      transform: rotate(45deg);
      background: var(--dark);
      border: 1px solid var(--border-new);
      border-radius: 2px;
    }
  }
`;

export const DropDownHead = styled.div`
  width: 100%;
  height: 75px;
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  align-items: flex-start;
  border-radius: 5px 5px 0px 0px;
  background: var(--dark);
  border-bottom: 1px solid var(--border-new);
  box-sizing: border-box;
  padding: 1.5rem 20px;
  .user-name {
    display: block;
    width: 100%;
    font-weight: bold;
    font-size: 15px;
    line-height: 18px;
    text-align: left;
  }
  div.user-last-login {
    * {
      color: var(--subtext-3);
    }
  }
  div .last-login-label {
    font-weight: bold;
    font-size: 10px;
    letter-spacing: 0.15em;
    text-transform: uppercase;
    margin-right: 0.25rem;
    display: inline-block;
    padding-top: 0.185rem;
  }
  div .last-login-value {
    font-family: Roboto Mono;
    font-size: 11px;
  }
`;

export const DropDownBody = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  background-color: var(--dark);
  border-radius: 0 0 5px 5px;
  flex-grow: 1;

  .sign-out-container {
    color: var(--primary);
    height: 2rem;
    font-weight: bold;
    font-size: 14px;
    padding: 1.5rem 20px;
  }
`;

export const NavItem = styled(Link).attrs(
  (props: { disabled?: true; as?: keyof JSX.IntrinsicElements }) => ({
    as: props.disabled ? "div" : props.as
  })
)`
  width: 100%;
  height: 45px;
  display: flex;
  align-items: center;
  cursor: ${(props: { disabled?: boolean }) =>
    props.disabled ? "not-allowed" : "pointer"};
  opacity: ${(props: { disabled?: boolean }) =>
    props.disabled ? 0.5 : "initial"};
  padding-left: 20px;
  :hover {
    background: var(--medium);
    text-decoration: none;
    color: white;
  }
  background-color: transparent;
  &.manage-users {
    border-top: 1px solid var(--border-new);
    border-bottom: 1px solid var(--border-new);
  }
  text-decoration: none;
  font-size: 14px;
  line-height: 17px;
  color: white;
`;
