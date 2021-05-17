import React, { ReactNode } from "react";
import { useLocation } from "react-router-dom";
import SideMenu from "containers/SideMenu/SideMenu";
import { useAlertContext } from "providers/alerts/AlertProvider";
import Alert from "elements/Alert/Alert";
import YieldXLoader from "elements/YieldXLoader/YieldXLoader";
import { Spinner } from "elements/Spinner/Spinner";
import Navbar from "../Navbar/Navbar";
import {
  ContentWrapper,
  InnerContainer,
  OuterContainer
} from "./AppLayout.styles";

interface Props {
  children: ReactNode;
}

export const hidePaths = [
  /investors\/create/,
  /execute-portfolio/,
  /inpaas\//,
  /best-fit\//,
  /playground/,
  /asset-explorer\//,
  /deposit\//,
  /withdrawal\//,
  /cash-account\//,
  /portfolios\/live\/.*\/(edit|rebalance)/,
  /check-tradable/,
  /universes\/manage/,
  /trial-expired/
];

function AppLayout({ children }: Props) {
  const [expanded, setExpanded] = React.useState(true);
  const { pathname } = useLocation();
  const { alert } = useAlertContext();

  const hide = shouldHide(pathname, hidePaths);

  return (
    <OuterContainer>
      <React.Suspense fallback={<YieldXLoader />}>
        <SideMenu expanded={expanded} hidePaths={hidePaths} />
        <InnerContainer className={expanded ? "expanded" : ""}>
          <Navbar
            hidePaths={hidePaths}
            toggleExpanded={() => setExpanded(!expanded)}
            expanded={expanded}
          />
          <React.Suspense fallback={<Spinner />}>
            <ContentWrapper
              data-testid="content-wrapper"
              className={hide ? "app-container" : ""}
            >
              {children}
            </ContentWrapper>
          </React.Suspense>
        </InnerContainer>
        {alert && <Alert {...alert} />}
      </React.Suspense>
    </OuterContainer>
  );
}

export function shouldHide(path: string, pathPatterns: RegExp[]) {
  return pathPatterns.some(pattern => pattern.test(path));
}

export default AppLayout;
