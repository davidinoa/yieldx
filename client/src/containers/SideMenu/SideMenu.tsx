import React, { useEffect, useRef, useState } from "react";
import { useRecoilValue } from "recoil";
import { UserType } from "@bondhouse/iam";
import { useLocation } from "react-router";
import { Link } from "react-router-dom";
import clsx from "clsx";

import { ReactComponent as YieldXLogo } from "../../assets/svg/logo.svg";
import { ReactComponent as YieldXIcon } from "../../assets/svg/yieldx-icon.svg";
import { ReactComponent as InpaasIcon } from "../../assets/svg/inpaas.svg";
import { ReactComponent as BestFitIcon } from "../../assets/svg/best-fit.svg";
import { ReactComponent as AssetExplorerIcon } from "../../assets/svg/asset-explorer.svg";
import { ReactComponent as PortfoliosIcon } from "../../assets/svg/portfolio.svg";
import { ReactComponent as AccountsIcon } from "../../assets/svg/accounts.svg";
import { ReactComponent as UniverseIcon } from "../../assets/svg/universes.svg";
import { ReactComponent as MoreIcon } from "../../assets/svg/more.svg";
import { ReactComponent as CloseIcon } from "../../assets/svg/close.svg";
import {
  AppsNav,
  OptionsMenu,
  OptionsNav,
  StyledSideMenu,
  UserNav
} from "./SideMenu.styles";
import { shouldHide } from "../../components/AppLayout/AppLayout";
import useOutsideClick from "../../hooks/useOutsideClick";
import { userState } from "../../services/userState";
import { allInventoriesSelector } from "../UniverseManager/UniverseManager";

interface Props {
  expanded: boolean;
  hidePaths: RegExp[];
}

export default function SideMenu({ expanded = false, hidePaths }: Props) {
  const user = useRecoilValue(userState);
  const inventoryIds = useRecoilValue(allInventoriesSelector);
  const isAdmin =
    user.userType === UserType.ADMIN &&
    user.institutionId !== "bondhouse" &&
    user.institutionId !== undefined;
  const { pathname } = useLocation();
  const [hide, setHide] = useState(false);
  const [showMore, setShowMore] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useOutsideClick(ref, () => setShowMore(false));

  useEffect(() => {
    if (shouldHide(pathname, hidePaths) !== hide)
      setHide(shouldHide(pathname, hidePaths));
  }, [pathname, hidePaths, hide]);

  return (
    <StyledSideMenu
      className={`${expanded ? "expanded" : ""} ${hide ? "hidden" : ""}`}
    >
      <Link data-testid="logo" to="/" className="logo">
        <i className="logo-icon">
          <YieldXIcon />
        </i>
        <i className="logo-full">
          <YieldXLogo />
        </i>
      </Link>
      <AppsNav>
        <li
          data-testid="assetexplorer-link"
          className={clsx({ active: /asset-explorer/.test(pathname) })}
        >
          <Link data-testid="SideMenu-Link-AssetExplorer" to="/asset-explorer">
            <i>
              <AssetExplorerIcon />
            </i>
            <span>AssetExplorer&#8482;</span>
          </Link>
        </li>
        <li
          data-testid="inpaas-link"
          className={clsx({
            active: /^\/inpaas\/?(goals|portfolio-review)?$/.test(pathname)
          })}
        >
          <Link data-testid="SideMenu-Link-InPaaS" to="/inpaas">
            <i>
              <InpaasIcon />
            </i>
            <span>InPaaS&#8482;</span>
          </Link>
        </li>
        <li
          data-testid="bestfit-link"
          className={clsx({ active: /best-fit/.test(pathname) })}
        >
          <Link data-testid="SideMenu-Link-BestFit" to="/best-fit">
            <i>
              <BestFitIcon />
            </i>
            <span>BestFit&#8482;</span>
          </Link>
        </li>
      </AppsNav>
      <UserNav>
        <li
          data-testid="portfolios-link"
          className={clsx({ active: /portfolios/.test(pathname) })}
        >
          <Link data-testid="SideMenu-Link-Portfolios" to="/portfolios">
            <i>
              <PortfoliosIcon />
            </i>
            <span>Portfolios</span>
          </Link>
        </li>
        {user.userType !== UserType.TRIAL && (
          <li className={clsx({ active: /investors/.test(pathname) })}>
            <Link data-testid="SideMenu-Link-Investors" to="/investors">
              <i>
                <AccountsIcon />
              </i>
              <span>Investor accounts</span>
            </Link>
          </li>
        )}
        {isAdmin && inventoryIds.length > 0 && (
          <li className={clsx({ active: /universes/.test(pathname) })}>
            <Link data-testid="SideMenu-Link-Universes" to="/universes">
              <i>
                <UniverseIcon />
              </i>
              <span>Universes</span>
            </Link>
          </li>
        )}
      </UserNav>
      <OptionsNav className={`${expanded ? "expanded" : ""}`}>
        <span>More options</span>
        <button
          data-testid="more-icon"
          type="button"
          onClick={() => setShowMore(!showMore)}
        >
          {!showMore && <MoreIcon />}
          {showMore && <CloseIcon />}
        </button>
      </OptionsNav>
      {showMore && (
        <OptionsMenu ref={ref}>
          <ul
            data-testid="SideMenu-Link-More"
            onClickCapture={() => setShowMore(false)}
          >
            <li>
              <a
                href="https://www.yieldx.app/"
                target="_blank"
                rel="noopener noreferrer"
              >
                Website
              </a>
            </li>
            <li>
              <Link
                data-testid="SideMenu-Link-PrivacyPolicy"
                to="/privacy-policy"
              >
                Privacy Policy
              </Link>
            </li>
            <li>
              <Link data-testid="SideMenu-Link-Tos" to="/terms-and-conditions">
                Terms & Conditions
              </Link>
            </li>
            <li>
              <a
                data-testid="SideMenu-Link-Docs"
                href="https://docs.yieldx.app/service.html?service=inpaas"
                target="_blank"
                rel="noopener noreferrer"
              >
                API Docs
              </a>
            </li>
          </ul>
        </OptionsMenu>
      )}
    </StyledSideMenu>
  );
}
