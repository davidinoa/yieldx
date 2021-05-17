import React from "react";
import { Container, Col, Row } from "react-bootstrap";
import {
  HomeContainer,
  AppsCards,
  AppsBlock,
  AdminBlock
} from "./Dashboard.style";
import PageTitle from "../../elements/PageTitle/PageTitle";
import LinkCard from "./LinkCard/LinkCard";

import { ReactComponent as BestFitIcon } from "../../assets/svg/best-fit.svg";
import { ReactComponent as AssetExplorerIcon } from "../../assets/svg/asset-explorer.svg";
import { ReactComponent as InpaasIcon } from "../../assets/svg/inpaas.svg";

interface Props {
  isAdmin: boolean;
  isIndividual: boolean;
}

export default function Dashboard({ isAdmin, isIndividual }: Props) {
  return (
    <HomeContainer>
      <Row>
        <AppsBlock>
          <Row>
            <PageTitle
              title="Select an app and start exploring"
              subtitle="WELCOME TO YIELDX"
            />
          </Row>
          <Row>
            <AppsCards>
              <Row>
                <Col xs={24}>
                  <LinkCard
                    appName="Asset Explorer"
                    highlight
                    icon={<AssetExplorerIcon />}
                    title="Search. Analyze. Optimize."
                    text="A robust search, securities monitoring and analytics workflow. Real time indicative pricing, customizable filters, monitoring and portfolio allocation solutions across corporate and municipal bonds, fixed income ETFs and Closed End funds."
                    buttonLabel="Open app"
                    link="/asset-explorer"
                  />
                </Col>
                <Col lg={12}>
                  <LinkCard
                    appName="InPaaS - ETFs"
                    icon={<InpaasIcon />}
                    title="Income Portfolios As A Service"
                    text="A portfolio construction workflow that optimizes fixed income ETFs and Closed End Funds to meet your desired income or yield target."
                    buttonLabel="Open app"
                    link="/inpaas"
                  />
                </Col>
                <Col lg={12}>
                  <LinkCard
                    appName="BestFit - Bonds"
                    icon={<BestFitIcon />}
                    title="Customized Bond Portfolio"
                    text="A portfolio construction workflow that curates corporate and municipal bonds to align with your specific investment goals and preferences."
                    buttonLabel="Open app"
                    link="/best-fit"
                  />
                </Col>
              </Row>
            </AppsCards>
          </Row>
        </AppsBlock>
      </Row>
      <Row>
        {(isAdmin || isIndividual) && (
          <AdminBlock>
            <Row>
              <Col className="divider">
                <div />
              </Col>
            </Row>
            <Row>
              <Container fluid>
                <Row>
                  <Col>
                    <LinkCard
                      title="Open Investment Accounts"
                      text="Create and manage execution and custody accounts provided by Apex."
                      buttonLabel="Setup an account"
                      link="/investors/create/investor-type"
                    />
                  </Col>
                  {isAdmin && (
                    <Col>
                      <LinkCard
                        title="Manage Users"
                        text="Manage access to the YiledX platform for members of your organization."
                        buttonLabel="Invite a user"
                        link="/users"
                      />
                    </Col>
                  )}
                </Row>
              </Container>
            </Row>
          </AdminBlock>
        )}
      </Row>
    </HomeContainer>
  );
}
