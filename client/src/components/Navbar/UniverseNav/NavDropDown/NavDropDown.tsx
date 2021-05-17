import React from "react";
import { useHistory } from "react-router";
import { App, InventoryMetadata } from "@bondhouse/rover-universe";
import { useRecoilValue } from "recoil";
import { userState } from "services/userState";
import {
  DropDownBody,
  Root
} from "components/Navbar/UniverseNav/NavDropDown/NavDropDown.styles";
import { selectedInventoriesAtom } from "containers/UniverseManager/SetDefaultUniverses/useSetDefaultUniverses";

interface Props {
  app: App;
  toggleDropDown: () => void;
}

const NavDropDown = ({ toggleDropDown, app }: Props) => {
  const user = useRecoilValue(userState);
  const { bestFit, assetExplorer, inpaas } = useRecoilValue(
    selectedInventoriesAtom
  );
  const history = useHistory();
  const ref = React.useRef<HTMLDivElement>(null);
  React.useEffect(() => {
    const outsideClickListener = (event: MouseEvent) => {
      const node = ref.current;
      if (node && !node.contains(event.target as Node)) {
        toggleDropDown();
      }
    };
    document.addEventListener("click", outsideClickListener);
    return () => document.removeEventListener("click", outsideClickListener);
  }, [toggleDropDown]);

  let currentInv: InventoryMetadata | undefined;
  if (app === App.InPaaS) currentInv = inpaas;
  else if (app === App.BestFit) currentInv = bestFit;
  else if (app === App.AssetExplorer) currentInv = assetExplorer;
  return (
    <Root ref={ref}>
      <div className="arrow" />
      <DropDownBody>
        <span className="user-name">
          {user ? `${user?.first} ${user?.last}` : ""}
        </span>
        <span className="default-universe-label">
          {currentInv ? currentInv.name : "default universe"}
        </span>
        <button
          data-testid="UniverseNav-NavDropDown-Universes"
          type="button"
          onClick={() => history.push("/universes")}
        >
          Manage universe
        </button>
      </DropDownBody>
    </Root>
  );
};

export default NavDropDown;
