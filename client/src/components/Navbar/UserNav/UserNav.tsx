import React from "react";
import { User } from "@bondhouse/iam";
import { ReactComponent as UserIcon } from "assets/svg/user-menu.svg";
import UserMenuDropDown from "components/Navbar/UserNav/UserMenuDropDown/UserMenuDropDown";
import { userService } from "services";
import { NavButton } from "components/Navbar/UserNav/UserNav.styles";

const UserNav = () => {
  const [showDropDown, setDropDown] = React.useState(false);
  const [user, setUser] = React.useState<null | User>(null);
  React.useEffect(() => {
    userService
      .getUser()
      .then(data => setUser(data))
      .catch(err => console.error(err));
  }, [setUser]);
  const toggleDropDown = () => setDropDown(!showDropDown);
  return (
    <>
      <NavButton onClick={toggleDropDown}>
        <UserIcon data-testid="user-icon" />
        {showDropDown && user && (
          <UserMenuDropDown
            user={user}
            toggleDropDown={toggleDropDown}
            lastLogin={new Date()}
          />
        )}
      </NavButton>
    </>
  );
};

export default UserNav;
