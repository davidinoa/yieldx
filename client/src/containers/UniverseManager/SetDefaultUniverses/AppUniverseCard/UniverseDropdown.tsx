import { Col, Dropdown } from "react-bootstrap";
import React from "react";
import clsx from "clsx";
import {
  CustomToggle,
  StyledDropdown,
  StyledDropDownMenu,
  StyledItem
} from "../../../AssetExplorer/Search/SearchOptionsBar/Dropdowns/DropDowns.styles";

// Dropdown needs access to the DOM of the Menu to measure it
const CustomMenu = React.forwardRef((props: any, ref: any) => {
  const {
    style,
    className,
    "aria-labelledby": labeledBy,
    selectedUniverse,
    setUniverse,
    universeList,
    close
  } = props;
  return (
    <StyledDropDownMenu
      ref={ref}
      style={style}
      className={className}
      aria-labelledby={labeledBy}
    >
      {(universeList as Array<UniverseItem>).map(cv => (
        <StyledItem
          key={cv.label}
          className={clsx("row no-gutters small", {
            selected: cv.universeId === selectedUniverse.universeId
          })}
          onClick={() => {
            setUniverse(cv);
            close();
          }}
        >
          <Col xs={{ offset: 2 }}>{cv.label === "" ? "None" : cv.label}</Col>
        </StyledItem>
      ))}
    </StyledDropDownMenu>
  );
});

export default function UniverseDropdown({
  selectedUniverse,
  setUniverse,
  universeList,
  setHighlighted
}: Props) {
  return (
    <StyledDropdown onClick={setHighlighted}>
      <Dropdown.Toggle as={CustomToggle} data-testid="dropdown-universe">
        {selectedUniverse.label}
      </Dropdown.Toggle>
      <Dropdown.Menu
        as={CustomMenu}
        selectedUniverse={selectedUniverse}
        setUniverse={setUniverse}
        universeList={universeList}
      />
    </StyledDropdown>
  );
}

export interface UniverseItem {
  label: string;
  universeId: string;
}

interface Props {
  selectedUniverse: UniverseItem;
  setUniverse: (assetClass: UniverseItem) => void;
  universeList: Array<UniverseItem>;
  setHighlighted: () => void;
}
