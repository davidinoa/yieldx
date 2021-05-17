import { Col, Dropdown } from "react-bootstrap";
import React from "react";
import clsx from "clsx";
import { Filter } from "@bondhouse/search";
import {
  CustomToggle,
  StyledDropdown,
  StyledDropDownMenu,
  StyledItem
} from "../DropDowns.styles";
import arrayToHashMap from "../../../../../../util/arrayToHashMap";

export interface FilterYield {
  label: string;
  filters: Record<string, Filter>;
}

export const YieldItems: FilterYield[] = [
  {
    label: "",
    filters: {}
  },
  {
    label: "Less than 1%",
    filters: {
      "analytics.yield": {
        isLessThanOrEqualToNumber: 1
      }
    }
  },
  {
    label: "1% to 3%",
    filters: {
      "analytics.yield": {
        isGreaterThanOrEqualToNumber: 1,
        isLessThanOrEqualToNumber: 3
      }
    }
  },
  {
    label: "3% to 5%",
    filters: {
      "analytics.yield": {
        isGreaterThanOrEqualToNumber: 3,
        isLessThanOrEqualToNumber: 5
      }
    }
  },
  {
    label: "5% to 10%",
    filters: {
      "analytics.yield": {
        isGreaterThanOrEqualToNumber: 5,
        isLessThanOrEqualToNumber: 10
      }
    }
  },
  {
    label: "10% or more",
    filters: {
      "analytics.yield": {
        isGreaterThanOrEqualToNumber: 10
      }
    }
  }
];
export const yieldFiltersMap = arrayToHashMap(YieldItems, "label");

// Dropdown needs access to the DOM of the Menu to measure it
const CustomMenu = React.forwardRef((props: any, ref: any) => {
  const {
    style,
    className,
    "aria-labelledby": labeledBy,
    setYieldFilter,
    selectedYield,
    close
  } = props;
  return (
    <StyledDropDownMenu
      ref={ref}
      style={style}
      className={className}
      aria-labelledby={labeledBy}
    >
      {YieldItems.map(cv => (
        <StyledItem
          key={cv.label}
          className={clsx("row no-gutters small", {
            selected:
              yieldFiltersMap[cv.label].label === selectedYield ||
              (yieldFiltersMap[cv.label].label === "" &&
                selectedYield === undefined)
          })}
          onClick={() => {
            setYieldFilter(cv);
            close();
          }}
        >
          <Col xs={{ offset: 2 }}>{cv.label === "" ? "None" : cv.label}</Col>
        </StyledItem>
      ))}
    </StyledDropDownMenu>
  );
});

export default function YieldFilter({ selectedYield, setYieldFilter }: Props) {
  return (
    <StyledDropdown>
      <Dropdown.Toggle as={CustomToggle} id="dropdown-yield">
        {selectedYield || "Yield range"}
      </Dropdown.Toggle>
      <Dropdown.Menu
        as={CustomMenu}
        selectedYield={selectedYield}
        setYieldFilter={setYieldFilter}
      />
    </StyledDropdown>
  );
}

interface Props {
  selectedYield?: string;
  setYieldFilter: (assetClass: FilterYield) => void;
}
