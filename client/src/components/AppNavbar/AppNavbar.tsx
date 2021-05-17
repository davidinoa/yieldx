import { UserType } from "@bondhouse/iam";
import { App } from "@bondhouse/rover-universe";
import React, { ReactElement, useEffect, useState } from "react";
import { useHistory } from "react-router";
import { useRecoilValue, useResetRecoilState } from "recoil";
import { ReactComponent as AssetExplorerLogo } from "assets/svg/asset-explorer.svg";
import { ReactComponent as BestFitLogo } from "assets/svg/best-fit.svg";
import { ReactComponent as InpaasLogo } from "assets/svg/inpaas.svg";
import { ReactComponent as Logo } from "assets/svg/logo.svg";
import { ReactComponent as YieldXIcon } from "assets/svg/yieldx-icon.svg";
import ModalBase from "components/ModalBase/ModalBase";
import TrialUserNav from "components/Navbar/TrialUserNav/TrialUserNav";
import UniverseNav from "components/Navbar/UniverseNav/UniverseNav";
import {
  Content,
  Heading,
  Message,
  PrimaryButton
} from "containers/BestFit/BestFitReview/EditModal/EditModal.styles";
import ShoppingCartNav from "components/Navbar/ShoppingCartNav/ShoppingCartNav";
import { allInventoriesSelector } from "containers/UniverseManager/UniverseManager";
import { inpaasFormState } from "recoil-state/inPaaS";
import YieldXPortfolio from "models/YieldXPortfolio";
import { portfolioCreateOrEditState } from "recoil-state/portfolioCreateOrEditState";
import { userState } from "services/userState";
import { Spinner } from "elements/Spinner/Spinner";
import {
  AppLogo,
  ExitButton,
  Nav,
  TitleContainer
} from "components/AppNavbar/AppNavbar.styles";

type Props = {
  appName: string;
  exitPath?: string;
};

const routeMap: Record<string, { AppLogo: ReactElement; title: string }> = {
  inpaas: { AppLogo: <InpaasLogo />, title: "InPaaS" },
  bestfit: { AppLogo: <BestFitLogo />, title: "BestFit" },
  assetexplorer: { AppLogo: <AssetExplorerLogo />, title: "AssetExplorer" }
};

export default function AppNavbar({ appName }: Props) {
  const user = useRecoilValue(userState);
  const isTrialUser = user.userType === UserType.TRIAL;
  const inventoryIds = useRecoilValue(allInventoriesSelector);
  const isAdmin =
    user.userType === UserType.ADMIN &&
    user.institutionId !== "bondhouse" &&
    user.institutionId !== undefined;
  const resetInpaasForm = useResetRecoilState(inpaasFormState);
  const resetPortfolioData = useResetRecoilState(portfolioCreateOrEditState);
  const history = useHistory<{ portfolio?: YieldXPortfolio }>();
  const pathsWithCart = [
    "/asset-explorer/search",
    "/asset-explorer/search/edit"
  ];
  const [state, setState] = useState<{ goBack: () => void }>();
  const [showModal, setShowModal] = useState(false);

  useEffect(() => {
    if (!state) {
      setState({ goBack: () => history.goBack() });
    }
  }, [history, state]);

  let app: App | undefined;
  if (/assetexplorer/i.test(appName)) app = App.AssetExplorer;
  else if (appName === "BestFit") app = App.BestFit;
  else if (appName === "InPaaS") app = App.InPaaS;

  return (
    <>
      <Nav>
        <AppLogo
          onClick={() => setShowModal(true)}
          data-testid="Nav-AppLogo"
          type="button"
        >
          <i className="logo-full">
            <Logo />
          </i>
          <i className="logo-icon">
            <YieldXIcon />
          </i>
        </AppLogo>
        <TitleContainer>
          {routeMap[appName.toLowerCase()] &&
            routeMap[appName.toLowerCase()].AppLogo}
          <h1>{appName}</h1>
          {routeMap[appName.toLowerCase()] && <>&trade;</>}
        </TitleContainer>
        {isTrialUser && <TrialUserNav />}
        <React.Suspense fallback={<Spinner />}>
          {pathsWithCart.includes(history.location.pathname) && (
            <ShoppingCartNav />
          )}
        </React.Suspense>
        {isAdmin && inventoryIds.length > 0 && app && <UniverseNav app={app} />}
        <ExitButton
          data-testid="exit-button"
          onClick={() => setShowModal(true)}
        >
          {history.location.pathname === "/universes/manage"
            ? "Cancel"
            : "Exit app"}
        </ExitButton>
      </Nav>

      <ModalBase nopadding show={showModal} onHide={() => setShowModal(false)}>
        <Content>
          <Heading>Are you sure you want to exit?</Heading>
          <Message>Your progress will not be saved.</Message>
          <PrimaryButton
            data-testid="continue-button"
            onClick={() => {
              if (appName === "InPaaS") resetInpaasForm();
              resetPortfolioData();
              history.push("/");
            }}
          >
            Continue
          </PrimaryButton>
        </Content>
      </ModalBase>
    </>
  );
}
