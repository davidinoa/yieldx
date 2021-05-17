import React from "react";
import dayjs from "dayjs";
import { User, UserType } from "@bondhouse/iam";
import {
  DropDownBody,
  DropDownHead,
  NavItem,
  Root
} from "components/Navbar/UserNav/UserMenuDropDown/UserMenuDropDown.styles";

interface Props {
  user: User;
  toggleDropDown: () => void;
  lastLogin: string | Date;
}

const navLinks = [
  {
    text: "Login & security",
    to: "/login-security"
  },
  {
    text: "Investor accounts",
    to: "/investors"
  },
  {
    text: "Portfolios",
    to: "/portfolios"
  },
  {
    text: "Favorites",
    to: "/favorites"
  },
  { text: "Manage users", to: "/users" }
];

const UserMenuDropDown = ({ toggleDropDown, user, lastLogin }: Props) => {
  const ref = React.useRef<HTMLDivElement>(null);
  const logoutURL = `${
    window.location.host.split(".")[0]
  }.yieldx.app/iam/api/v1/logout`;
  if (
    process.env.NODE_ENV === "production" &&
    !(
      logoutURL === "invest.yieldx.app/iam/api/v1/logout" ||
      logoutURL === "dev.yieldx.app/iam/api/v1/logout"
    )
  )
    throw Error(
      "Hostname should be either dev.yieldx.app or invest.yieldx.app"
    );
  React.useEffect(() => {
    const outsideClickListener = (event: MouseEvent) => {
      const node = ref.current;
      if (node && !node.contains(event.target as Node)) {
        toggleDropDown();
      }
    };
    document.addEventListener("click", outsideClickListener);
    return () => document.removeEventListener("click", outsideClickListener);
  }, [toggleDropDown]);

  return (
    <Root ref={ref} className="user-options">
      <div className="arrow" />
      <DropDownHead>
        <span className="user-name">
          {user ? `${user?.first} ${user?.last}` : ""}
        </span>
        <div className="user-last-login d-flex justify-content-center align-items-center">
          <span className="last-login-label">Last login: </span>
          <span className="last-login-value">
            {dayjs.tz(lastLogin).format("ddd MMM DD[ @]h:mma")}
          </span>
        </div>
      </DropDownHead>
      <DropDownBody>
        {navLinks.map(({ to, text }, i) => {
          if (
            !(
              user.userType === UserType.ADMIN &&
              user.institutionId !== "bondhouse" &&
              user.institutionId
            ) &&
            to === "/users"
          ) {
            return null;
          }
          if (user.userType === UserType.TRIAL && to === "/investors")
            return null;
          return (
            <NavItem
              data-testid={`Nav-Item-${text.replace(/\s/g, "-")}`}
              to={to}
              onClick={toggleDropDown}
              key={to + text}
              className={
                i === navLinks.length - 1 ? "nav-item manage-users" : "nav-item"
              }
            >
              {text}
            </NavItem>
          );
        })}
        <div className="sign-out-container d-flex w-100 align-items-center justify-content-center">
          {/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
          <a
            data-testid="logout-link"
            href={
              process.env.NODE_ENV === "production"
                ? `https://${logoutURL}`
                : // eslint-disable-next-line no-script-url
                  "#"
            }
          >
            Log Out
          </a>
        </div>
      </DropDownBody>
    </Root>
  );
};

export default UserMenuDropDown;
