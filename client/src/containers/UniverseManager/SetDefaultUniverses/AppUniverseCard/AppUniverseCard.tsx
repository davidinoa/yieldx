import { App, InventoryMetadata } from "@bondhouse/rover-universe";
import React, { Dispatch, SetStateAction } from "react";
import { AppCard, BorderWrapper } from "../SetDefaultUniverse.styles";
import { ReactComponent as InpaasLogo } from "../../../../assets/svg/inpaas.svg";
import { ReactComponent as BestFitLogo } from "../../../../assets/svg/best-fit.svg";
import { ReactComponent as AssetExplorerLogo } from "../../../../assets/svg/asset-explorer.svg";
import UniverseDropdown, { UniverseItem } from "./UniverseDropdown";

interface Props {
  app: App;
  inventories: Array<InventoryMetadata>;
  universeState: [UniverseItem, Dispatch<SetStateAction<UniverseItem>>];
  highlightedState: [
    App | undefined,
    Dispatch<SetStateAction<App | undefined>>
  ];
}

const appMap: Record<App, { AppLogo: JSX.Element; text: string }> = {
  "Asset Explorer": {
    AppLogo: <AssetExplorerLogo />,
    text: "Funds & Bonds in this universe will be considered."
  },
  "Muni BestFit": {
    AppLogo: <BestFitLogo />,
    text: "Only available bonds in this universe will be considered."
  },
  BestFit: {
    AppLogo: <BestFitLogo />,
    text: "Only available bonds in this universe will be considered."
  },
  InPaaS: {
    AppLogo: <InpaasLogo />,
    text: "Only available funds in this universe will be considered."
  }
};

export default function AppUniverseCard({
  app,
  inventories,
  universeState,
  highlightedState
}: Props) {
  const [selectedUniverse, setUniverse] = universeState;
  const [highlightedApp, setHighlighted] = highlightedState;
  return (
    <BorderWrapper className={highlightedApp === app ? "active" : undefined}>
      <AppCard className="d-flex flex-column">
        {appMap[app].AppLogo}
        <h1 className="mt-3 mb-3">{app.replace(/\s/g, "")}&trade;</h1>
        <p className="mb-3">{appMap[app].text}</p>
        <UniverseDropdown
          selectedUniverse={selectedUniverse}
          setUniverse={setUniverse}
          universeList={[
            { label: "YieldX Default", universeId: "defaultId" },
            ...inventories.map(it => ({
              label: it.name,
              universeId: it.id
            }))
          ]}
          setHighlighted={() => setHighlighted(app)}
        />
      </AppCard>
    </BorderWrapper>
  );
}
