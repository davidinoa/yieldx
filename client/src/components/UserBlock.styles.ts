import styled from "styled-components";
import { Container } from "react-bootstrap";
import { Link } from "react-router-dom";
import { mediaQuery } from "../theme/breakpoints.style";

export const UserDetailsBack = styled.div`
  //background: rgba(255,0,.23,.3);
  margin: 1.5rem auto 0.5rem;
  width: 100%;
  max-width: 1200px;

  ${mediaQuery("xxl")} {
    margin: 5rem auto 0.75rem;
  }
`;

export const BackLink = styled(Link)`
  width: max-content;
  :hover {
    text-decoration: none;
  }
  > span {
    font-weight: bold;
    font-size: 13px;
    margin-left: 0.65rem;

    ${mediaQuery("xxl")} {
      font-size: 15px;
      margin-left: 1rem;
    }
  }
`;

export const UserDetailsCard = styled(Container).attrs({
  // className: "col-24"
})`
  display: flex;
  background: var(--page);
  border: 2px solid var(--border-new);
  border-radius: 1rem;
  min-height: 500px;
  height: auto;
  margin-bottom: 2rem;
  padding: 0;

  ${mediaQuery("xxl")} {
    min-height: 600px;
    max-width: 1200px;
  }

  &.login-security {
    margin-top: 1.75rem;

    ${mediaQuery("xxl")} {
      margin-top: 7rem;
    }
  }
`;

export const UserDetailsNav = styled.div.attrs({
  className: "col-6"
})`
  padding: 0;
  display: flex;
  align-items: center;
  justify-content: flex-start;
  height: 100%;
  //min-width: 300px;
`;
export const UserDetailsContent = styled.div.attrs({
  className: "col-12 offset-3"
})`
  //background: #00f;
  display: flex;
  align-items: center;

  .set-as-admin {
    > label {
      display: flex;
      width: max-content;
      align-items: center;
      cursor: pointer;
    }
    > label > div {
      display: flex;
      justify-content: center;
      align-items: center;
      width: 16px;
      height: 16px;
      background: inherit;
      transition: all 150ms;
      border: 1.5px solid var(--white);
      border-radius: 2px;
    }
    > label > input {
      border: 0;
      clip: rect(0 0 0 0);
      clip-path: inset(50%);
      height: 1px;
      margin: -1px;
      overflow: hidden;
      padding: 0;
      position: absolute;
      white-space: nowrap;
      width: 1px;
    }
    > label > span {
      font-weight: bold;
      font-size: 11px;
      line-height: 13px;
      letter-spacing: 0.2em;
      text-transform: uppercase;
      margin-left: 1rem;
    }
  }
`;

export const UserSideNavWrapper = styled(Container).attrs({
  className: "container-fluid"
})`
  background: var(--dark);
  padding: 3.5rem 0 0;
  border-radius: 1rem 0 0 1rem;
  display: flex;
  flex-flow: column;
  height: 100%;

  ${mediaQuery("xxl")} {
    padding: 5rem 0 0;
  }

  .disabled-link {
    color: var(--lightest);
    cursor: not-allowed;
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    font-weight: bold;
    line-height: 18px;

    font-size: 0.75rem;
    height: 40px;

    ${mediaQuery("xxl")} {
      font-size: 0.95rem;
      height: 50px;
    }
  }
`;

export const UserAvatar = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;

  > div {
    background-image: linear-gradient(var(--dark), var(--dark)), var(--gradient);
    background-origin: border-box;
    background-clip: content-box, border-box;
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 100%;
    width: 4.125rem;
    height: 4.125rem;
    border: double 2px transparent;

    ${mediaQuery("xxl")} {
      border-width: 3px;
      width: 5.625rem;
      height: 5.625rem;
    }

    > span {
      display: flex;
      align-items: center;
      justify-content: center;
      font-weight: bold;
      text-align: center;
      font-size: 1.5rem;

      ${mediaQuery("xxl")} {
        font-size: 2rem;
      }
    }
  }
`;
export const ActiveLabel = styled.div`
  display: flex;
  width: 100%;
  justify-content: center;
  align-items: center;
  padding: 0.65rem 0;

  span {
    font-weight: bold;
    font-size: 10px;
    letter-spacing: 0.15em;
    text-transform: uppercase;

    &::before {
      content: "";
      display: inline-block;
      background: #42f1d2;
      height: 5px;
      width: 5px;
      border-radius: 50%;
      margin-right: 0.5rem;
    }

    &.deactivated {
      &::before {
        background: var(--subtext-3);
      }
    }
  }
`;

export const UserLastLogin = styled.div`
  font-family: var(--font-secondary);
  line-height: 155%;
  color: var(--subtext-3);
  text-align: center;
  border-bottom: solid 1px var(--border-new);

  font-size: 10px;
  ${mediaQuery("xxl")} {
    font-size: 11px;
  }

  span {
    font-weight: bold;
    font-size: 9px;
    //line-height: 210%;
    letter-spacing: 0.15em;
    text-transform: uppercase;
    color: var(--subtext-3);
    margin-right: 0.25rem;
    ${mediaQuery("xxl")} {
      font-size: 10px;
    }
  }
`;

export const UserAccountCreationDate = styled.div`
  position: absolute;
  bottom: 1rem;
  width: 100%;
  text-align: center;
  font-family: var(--font-secondary);
  color: var(--subtext-3);
  font-size: 10px;

  ${mediaQuery("xxl")} {
    bottom: 2rem;
    font-size: 11px;
  }

  span {
    display: block;
    font-weight: bold;
    font-size: 9px;
    letter-spacing: 0.15em;
    text-transform: uppercase;
    color: var(--subtext-3);
    margin: 0;
    ${mediaQuery("xxl")} {
      font-size: 10px;
    }
  }
`;

export const NavItem = styled(Link)`
  width: 100%;
  display: flex;
  align-items: center;
  font-weight: bold;
  font-size: 0.75rem;
  height: 40px;

  ${mediaQuery("xxl")} {
    font-size: 0.95rem;
    height: 50px;
  }

  :hover {
    background: var(--page);
    text-decoration: none;
  }
  text-decoration: none;
  &.selected {
    background: var(--page);
  }
`;
