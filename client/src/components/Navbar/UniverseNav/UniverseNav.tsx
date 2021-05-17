import React from "react";
import { App } from "@bondhouse/rover-universe";
import { ReactComponent as UniverseIcon } from "assets/svg/universe-menu.svg";
import NavDropDown from "components/Navbar/UniverseNav/NavDropDown/NavDropDown";
import { UniverseMenuButton } from "components/Navbar/UniverseNav/UniverseNav.styles";

interface Props {
  app: App;
}

const UniverseNav = ({ app }: Props) => {
  const [showDropDown, setDropDown] = React.useState(false);
  const toggleDropDown = () => setDropDown(!showDropDown);
  return (
    <>
      <UniverseMenuButton
        data-testid="UniverseNav-UniverseMenuButton"
        onClick={toggleDropDown}
      >
        <UniverseIcon data-testid="universe-icon" />
        {showDropDown && (
          <NavDropDown app={app} toggleDropDown={toggleDropDown} />
        )}
      </UniverseMenuButton>
    </>
  );
};

export default UniverseNav;
