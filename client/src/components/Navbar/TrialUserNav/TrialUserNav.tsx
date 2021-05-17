import React from "react";
import { useRecoilValue } from "recoil";
import { ReactComponent as TrialUserIcon } from "assets/svg/clock.svg";
import { ReactComponent as TrialUserWarningIcon } from "assets/svg/clock-alert.svg";
import { calculateDaysSince } from "util/calculateDaysSince";
import { userState } from "services/userState";
import NavDropDown from "components/Navbar/TrialUserNav/NavDropDown/NavDropDown";
import { TrialUserMenuButton } from "components/Navbar/TrialUserNav/TrialUserNav.styles";

const TrialUserNav = () => {
  const user = useRecoilValue(userState);
  const [showDropDown, setDropDown] = React.useState(false);
  const toggleDropDown = () => setDropDown(!showDropDown);
  const willSoonExpire = calculateDaysSince(user.createdAt || "") >= 20;
  return (
    <>
      <TrialUserMenuButton
        data-testid="TrialUserNav-TrialUserMenuButton"
        onClick={toggleDropDown}
      >
        {willSoonExpire ? (
          <TrialUserWarningIcon data-testid="trial-user-warning-icon" />
        ) : (
          <TrialUserIcon data-testid="trial-user-icon" />
        )}
        {showDropDown && <NavDropDown toggleDropDown={toggleDropDown} />}
      </TrialUserMenuButton>
    </>
  );
};

export default TrialUserNav;
