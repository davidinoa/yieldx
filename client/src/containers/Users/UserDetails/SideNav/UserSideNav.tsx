import React from "react";
import dayjs from "dayjs";
import { User, UserStatus } from "@bondhouse/iam";
import { useLocation } from "react-router-dom";
import {
  ActiveLabel,
  NavItem,
  UserAvatar,
  UserSideNavWrapper,
  UserLastLogin,
  UserAccountCreationDate
} from "../../../../components/UserBlock.styles";

interface Props {
  user: User;
  error: boolean;
  manage?: boolean;
}
const UserSideNav = ({ user, error }: Props) => {
  const location = useLocation();
  const isUserActive = user.status === UserStatus.ACTIVE;

  const navItems = [
    {
      to: `${location.pathname}`,
      label: "Personal information"
    },
    {
      to: `${location.pathname}#reset-password`,
      label: "Reset password",
      disabled: !isUserActive
    },
    {
      to: `${location.pathname}#deactivate`,
      label: isUserActive ? "Deactivate user" : "Reactivate user"
    }
  ];
  let currentNavItem:
    | "Reset password"
    | "Deactivate user"
    | "Personal information" = "Personal information";
  if (location.hash === "#reset-password") currentNavItem = "Reset password";
  if (location.hash === "#deactivate") currentNavItem = "Deactivate user";
  return (
    <UserSideNavWrapper>
      <UserAvatar>
        <div>
          <span>{`${user.first.charAt(0)}${user.last.charAt(0)}`}</span>
          {error && <span>-</span>}
        </div>
      </UserAvatar>
      {user.status === UserStatus.ACTIVE && (
        <ActiveLabel>
          <b>&nbsp;</b>
          <span>Active</span>
        </ActiveLabel>
      )}
      {user.status === UserStatus.BLOCKED && (
        <ActiveLabel>
          <b className="deactivated">&nbsp;</b>
          <span>Deactivated</span>
        </ActiveLabel>
      )}
      <UserLastLogin>
        <span>Last Updated:</span>
        {dayjs(user.updatedAt).format("ddd MMM DD[ @]h:mma")}
      </UserLastLogin>
      <div className="d-flex flex-column w-100 text-center">
        {navItems.map(({ to, label, disabled }) =>
          disabled ? (
            <span key={label} className="disabled-link">
              {label}
            </span>
          ) : (
            <NavItem
              key={label}
              to={to}
              className={currentNavItem === label ? "selected" : undefined}
            >
              <span className="w-100">{label}</span>
            </NavItem>
          )
        )}
      </div>

      <UserAccountCreationDate>
        <span>Account Created:</span>
        {dayjs(user?.createdAt).format("ddd MMM DD[ @]h:mma")}
      </UserAccountCreationDate>
    </UserSideNavWrapper>
  );
};

export default UserSideNav;
