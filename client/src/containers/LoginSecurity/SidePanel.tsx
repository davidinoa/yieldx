import React from "react";
import dayjs from "dayjs";
import { User } from "@bondhouse/iam";
import { useLocation } from "react-router-dom";
import {
  ActiveLabel,
  NavItem,
  UserAvatar,
  UserSideNavWrapper,
  UserLastLogin,
  UserAccountCreationDate
} from "../../components/UserBlock.styles";

interface Props {
  user: User;
  error: boolean;
  manage?: boolean;
}
const SidePanel = ({ user, error }: Props) => {
  const location = useLocation();
  const navItems = [
    {
      to: location.pathname,
      label: "Personal information"
    },
    {
      to: `${location.pathname}#reset-password`,
      label: "Password"
    }
  ];
  let currentNavItem: "Password" | "Personal information" =
    "Personal information";
  if (location.hash === "#reset-password") currentNavItem = "Password";
  return (
    <UserSideNavWrapper>
      <UserAvatar>
        <div>
          <span>{`${user.first.charAt(0)}${user.last.charAt(0)}`}</span>
          {error && <span>-</span>}
        </div>
      </UserAvatar>
      <ActiveLabel />
      <UserLastLogin>
        <span>Last Updated:</span>
        {dayjs(user.updatedAt).format("ddd MMM DD[ @]h:mma")}
      </UserLastLogin>

      <div className="d-flex flex-column w-100 text-center">
        {navItems.map(({ to, label }) => (
          <NavItem
            key={to}
            to={to}
            className={currentNavItem === label ? "selected" : undefined}
          >
            <span className="w-100">{label}</span>
          </NavItem>
        ))}
      </div>

      <UserAccountCreationDate>
        <span>Account Created:</span>
        {dayjs(user?.createdAt).format("ddd MMM DD[ @]h:mma")}
      </UserAccountCreationDate>
    </UserSideNavWrapper>
  );
};

export default SidePanel;
