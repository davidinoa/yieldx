import React from "react";
import {
  Container,
  Content,
  ContentWrapper,
  StartLink
} from "./LandingPage.styles";
import { ReactComponent as InPaaSIcon } from "../../assets/svg/inpaas.svg";
import { ReactComponent as BestFitIcon } from "../../assets/svg/best-fit.svg";
import { ReactComponent as AssetExplorerIcon } from "../../assets/svg/asset-explorer.svg";

type LandingPageProps = {
  title: string;
  text: string;
  link: string;
  tag: string;
};

function LandingPage({ title, text, link, tag = "" }: LandingPageProps) {
  const buttonLabels: Record<string, string> = {
    inpaas: "InPaaS",
    bestfit: "BestFit",
    "asset-explorer": "Asset Explorer"
  };
  const appIcons: Record<string, React.ReactElement> = {
    inpaas: <InPaaSIcon />,
    bestfit: <BestFitIcon />,
    "asset-explorer": <AssetExplorerIcon />
  };

  return (
    <Container data-testid="landing-page">
      <ContentWrapper>
        <Content>
          <div className="info-text">
            {appIcons[tag]}
            <h1>{title}</h1>
            <p>{text}</p>
            <StartLink data-testid={`LandingPage-StartLink-${tag}`} to={link}>
              Start {buttonLabels[tag]}
            </StartLink>
          </div>
        </Content>
      </ContentWrapper>
    </Container>
  );
}
export default LandingPage;
