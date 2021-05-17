import { Col, Container, Row } from "react-bootstrap";
import React from "react";
import { App } from "@bondhouse/rover-universe";
import PageTitle from "../../../elements/PageTitle/PageTitle";
import { CardsContainer } from "./SetDefaultUniverse.styles";
import AppUniverseCard from "./AppUniverseCard/AppUniverseCard";
import AppNavbar from "../../../components/AppNavbar/AppNavbar";
import AppBottomNav from "../../../elements/AppBottomNav/AppBottomNav";
import YieldXLoader from "../../../elements/YieldXLoader/YieldXLoader";
import { ButtonContainer } from "../SelectUniverse/SelectUniverse";
import ContactUs from "../ContactUs/ContactUs";
import Button from "../../../elements/Button/Button";
import { useSetDefaultUniverses } from "./useSetDefaultUniverses";

export default function SetDefaultUniverses() {
  const {
    inventories,
    inpaasSelected,
    setInpaas,
    bestfitSelected,
    setBestfit,
    explorerSelected,
    setExplorer,
    highlightedState,
    isSubmitting,
    showContactUs,
    setShowContactUs,
    onSave
  } = useSetDefaultUniverses();
  if (isSubmitting) return <YieldXLoader />;
  return (
    <div data-testid="set-defaults">
      <AppNavbar appName="Set default universes" />
      <Container>
        <Row>
          <Col>
            <PageTitle
              page
              subtitle="UNIVERSES"
              title="Set default universes for the apps"
              alignment="left"
            />
          </Col>
        </Row>
        <Row className="mb-3">
          <Col
            xl={{ span: 7, offset: 17 }}
            className="d-flex justify-content-end"
          >
            <ButtonContainer>
              <Button
                text="Create universe"
                onClick={() => setShowContactUs(true)}
                style={{ background: "#253859" }}
              />
            </ButtonContainer>
            <ContactUs
              show={showContactUs}
              onHide={() => setShowContactUs(false)}
            />
          </Col>
        </Row>
        <Row />
        <CardsContainer>
          <Col
            sm={24}
            xl={12}
            className="d-flex justify-content-center align-items-center pl-5 pr-5 col-xxl-8"
          >
            <AppUniverseCard
              app={App.InPaaS}
              inventories={inventories.filter(it => it.app === App.InPaaS)}
              universeState={[inpaasSelected, setInpaas]}
              highlightedState={highlightedState}
            />
          </Col>
          <Col
            sm={24}
            xl={12}
            className="d-flex justify-content-center align-items-center pl-5 pr-5 col-xxl-8"
          >
            <AppUniverseCard
              app={App.BestFit}
              inventories={inventories.filter(it => it.app === App.BestFit)}
              universeState={[bestfitSelected, setBestfit]}
              highlightedState={highlightedState}
            />
          </Col>
          <Col
            sm={24}
            className="d-flex justify-content-center align-items-center pl-5 pr-5 col-xxl-8"
          >
            <AppUniverseCard
              app={App.AssetExplorer}
              inventories={inventories.filter(
                it => it.app === App.AssetExplorer
              )}
              universeState={[explorerSelected, setExplorer]}
              highlightedState={highlightedState}
            />
          </Col>
        </CardsContainer>
      </Container>
      <AppBottomNav
        hideBack
        onNext={onSave}
        nextLabel="Save changes"
        blockNext={isSubmitting}
      />
    </div>
  );
}
