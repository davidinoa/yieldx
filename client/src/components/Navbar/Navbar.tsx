import React from "react";
import { Row } from "react-bootstrap";
import { useLocation } from "react-router-dom";
import { useRecoilValue } from "recoil";
import { UserType } from "@bondhouse/iam";
import {
  HeaderLinks,
  TitleContainer,
  TopMenu
} from "components/Navbar/Navbar.styles";
import { ReactComponent as MoreIcon } from "assets/svg/drawer-more.svg";
import { ReactComponent as CloseIcon } from "assets/svg/drawer-close.svg";
import UserNav from "components/Navbar/UserNav/UserNav";
import ShoppingCartNav from "components/Navbar/ShoppingCartNav/ShoppingCartNav";
import { shouldHide } from "components/AppLayout/AppLayout";
import TrialUserNav from "components/Navbar/TrialUserNav/TrialUserNav";
import { userState } from "services/userState";

interface Props {
  toggleExpanded: () => void;
  hidePaths: RegExp[];
  expanded: boolean;
}

const Navbar = ({ toggleExpanded, expanded, hidePaths }: Props) => {
  const { pathname } = useLocation();
  const user = useRecoilValue(userState);
  const isTrialUser = user.userType === UserType.TRIAL;
  const hide = shouldHide(pathname, hidePaths);
  const display = hide ? "none" : "";
  let title = "Dashboard";
  if (pathname === "/inpaas") title = "InPaaS";
  if (pathname === "/best-fit") title = "Best Fit";
  if (pathname === "/asset-explorer") title = "Asset Explorer";
  if (pathname.includes("/portfolios")) title = "Portfolios";
  if (pathname.includes("/investors")) title = "Investor accounts";
  if (pathname.includes("/cash-balance")) title = "Cash account";
  if (pathname === "/login-security") title = "Login & security";
  if (pathname === "/favorites") title = "Favorites";
  if (pathname.includes("/users")) title = "Manage users";
  if (pathname.includes("/universes")) title = "Universes";

  if (hide) return null;
  return (
    <TopMenu fluid display={display}>
      <Row className="justify-content-between align-items-center h-100">
        <TitleContainer
          xs={10}
          className="d-flex justify-content-start align-items-center"
        >
          <button
            data-testid="Navbar-ToggleExpanded"
            type="button"
            onClick={toggleExpanded}
          >
            <i>{expanded ? <CloseIcon /> : <MoreIcon />}</i>
          </button>
          <span>{title}</span>
        </TitleContainer>
        <HeaderLinks
          xs={13}
          className="d-flex justify-content-end align-items-center"
        >
          {isTrialUser && <TrialUserNav />}
          <ShoppingCartNav />
          <UserNav />
        </HeaderLinks>
      </Row>
    </TopMenu>
  );
};

export default Navbar;
