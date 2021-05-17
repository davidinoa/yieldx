import React from "react";
import { Col, Dropdown } from "react-bootstrap";
import clsx from "clsx";
import { Filter } from "@bondhouse/search";
import {
  CustomToggle,
  StyledDropdown,
  StyledItem,
  StyledMenu
} from "../DropDowns.styles";

export type AssetClassesKeys =
  | "all"
  | "corporates"
  | "munis"
  | "etfs"
  | "cefs"
  | "mutualFunds"
  | "bonds"
  | "funds";

export type AssetClass = {
  filters: {
    [key: string]: Filter;
  };
  tradabilityFilters: {
    [key: string]: Filter;
  };
  key: AssetClassesKeys;
  colKeys: string[];
  label: string;
};

export const commonColKeys = [
  "addToCart",
  "favorite",
  "name",
  "productType",
  "minimumQuantity",
  "minimumUnits",
  "price",
  "analytics.yield",
  "scores.liquidity",
  "scores.risk",
  "esgScores.total"
];

const commonBondColKeys = [
  ...commonColKeys,
  "ticker",
  "identifiers.cusip",
  "identifiers.isin",
  "rating",
  "bond.maturityDate",
  "bond.accruedInterest",
  "analytics.duration",
  "issuerName",
  "bond.issuer.sector",
  "bond.issuer.subsector"
];

const muniBondColKeys = [
  "addToCart",
  "favorite",
  "name",
  "productType",
  "minimumQuantity",
  "minimumUnits",
  "price",
  "analytics.yield",
  "scores.liquidity",
  "scores.risk",
  "ticker",
  "identifiers.cusip",
  "identifiers.isin",
  "rating",
  "bond.maturityDate",
  "bond.accruedInterest",
  "analytics.duration",
  "issuerName",
  "bond.issuer.sector",
  "bond.issuer.subsector"
];

export const commonFundColKeys = [
  ...commonColKeys,
  "ticker",
  "fund.classification",
  "fund.netAssetValuePerShare",
  "fund.fees.fundExpenseRatio",
  "fund.fees.managementFee"
];

const etAndCeFundColKeys = [
  "addToCart",
  "favorite",
  "name",
  "productType",
  "fund.classification",
  "minimumUnits",
  "price",
  "analytics.yield",
  "scores.liquidity",
  "scores.risk",
  "ticker",
  "fund.netAssetValuePerShare",
  "fund.fees.fundExpenseRatio",
  "fund.fees.managementFee",
  "esgScores.total"
];

export const assetClasses: Record<AssetClassesKeys, AssetClass> = {
  all: {
    key: "all",
    label: "Product types",
    filters: {},
    tradabilityFilters: {
      "universes.liquid": {
        equalsBoolean: true
      }
    },
    colKeys: [
      ...commonColKeys,
      "ticker",
      "fund.classification",
      "identifiers.cusip",
      "identifiers.isin",
      "rating",
      "bond.maturityDate",
      "bond.accruedInterest",
      "analytics.duration",
      "issuerName",
      "bond.issuer.sector",
      "bond.issuer.subsector"
    ]
  },
  corporates: {
    key: "corporates",
    label: "Corporate Bonds",
    filters: {
      assetType: { equalsText: "bond" },
      assetSubtype: { equalsText: "Corporate" }
    },
    tradabilityFilters: {
      "universes.liquid": {
        equalsBoolean: true
      }
    },
    colKeys: commonBondColKeys
  },
  munis: {
    key: "munis",
    label: "Municipal Bonds",
    filters: {
      assetType: { equalsText: "bond" },
      assetSubtype: { equalsText: "Sovereign" },
      "bond.classifications.datastreamType": { equalsText: "Municipals" }
    },
    tradabilityFilters: {
      "universes.liquid": {
        equalsBoolean: true
      }
    },
    colKeys: muniBondColKeys
  },
  etfs: {
    key: "etfs",
    label: "Exchange Traded Funds",
    filters: {
      assetType: { equalsText: "fund" },
      assetSubtype: { equalsText: "Exchange Traded Funds" }
    },
    tradabilityFilters: {
      "universes.liquid": {
        equalsBoolean: true
      }
    },
    colKeys: etAndCeFundColKeys
  },
  cefs: {
    key: "cefs",
    label: "Closed End Funds",
    filters: {
      assetType: { equalsText: "fund" },
      assetSubtype: { equalsText: "Closed End Funds" }
    },
    tradabilityFilters: {
      "universes.liquid": {
        equalsBoolean: true
      }
    },
    colKeys: etAndCeFundColKeys
  },
  mutualFunds: {
    key: "mutualFunds",
    label: "Mutual Funds",
    filters: {
      assetType: { equalsText: "fund" },
      assetSubtype: { equalsText: "Mutual Funds" }
    },
    tradabilityFilters: {
      "universes.liquid": {
        equalsBoolean: true
      }
    },
    colKeys: commonFundColKeys
  },
  bonds: {
    key: "bonds",
    label: "Bonds",
    filters: {
      assetType: { equalsText: "bond" }
    },
    tradabilityFilters: {
      "universes.liquid": {
        equalsBoolean: true
      }
    },
    colKeys: commonBondColKeys
  },
  funds: {
    key: "funds",
    label: "Funds",
    filters: {
      assetType: { equalsText: "fund" }
    },
    tradabilityFilters: {
      "universes.liquid": {
        equalsBoolean: true
      }
    },
    colKeys: commonFundColKeys
  }
};

// forwardRef again here!
// Dropdown needs access to the DOM of the Menu to measure it
// eslint-disable-next-line @typescript-eslint/no-explicit-any
const CustomMenu = React.forwardRef((props: any, ref: any) => {
  const {
    style,
    className,
    "aria-labelledby": labeledBy,
    selectedClass,
    setAssetClass,
    close
  } = props;
  return (
    <StyledMenu
      ref={ref}
      style={style}
      className={className}
      aria-labelledby={labeledBy}
    >
      <StyledItem
        data-testid="Search-ProductTypeFilter-All"
        className={clsx("row no-gutters big", {
          selected: assetClasses.all.key === selectedClass
        })}
        onClick={() => {
          setAssetClass(assetClasses.all);
          close();
        }}
      >
        <Col xs={{ offset: 2 }}>ALL</Col>
      </StyledItem>

      <StyledItem
        data-testid="Search-ProductTypeFilter-Bonds"
        className={clsx("row no-gutters big", {
          selected: assetClasses.bonds.key === selectedClass
        })}
        onClick={() => {
          setAssetClass(assetClasses.bonds);
          close();
        }}
      >
        <Col xs={{ offset: 2 }}>BONDS</Col>
      </StyledItem>
      <StyledItem
        data-testid="Search-ProductTypeFilter-CorporateBonds"
        className={clsx("row no-gutters small", {
          selected: assetClasses.corporates.key === selectedClass
        })}
        onClick={() => {
          setAssetClass(assetClasses.corporates);
          close();
        }}
      >
        <Col xs={{ offset: 4 }}>Corporate Bonds</Col>
      </StyledItem>
      <StyledItem
        data-testid="Search-ProductTypeFilter-MuniBonds"
        className={clsx("row no-gutters small", {
          selected: assetClasses.munis.key === selectedClass
        })}
        onClick={() => {
          setAssetClass(assetClasses.munis);
          close();
        }}
      >
        <Col xs={{ offset: 4 }}>Municipal Bonds</Col>
      </StyledItem>

      <StyledItem
        data-testid="Search-ProductTypeFilter-Funds"
        className={clsx("row no-gutters big", {
          selected: assetClasses.funds.key === selectedClass
        })}
        onClick={() => {
          setAssetClass(assetClasses.funds);
          close();
        }}
      >
        <Col xs={{ offset: 2 }}>FUNDS</Col>
      </StyledItem>
      <StyledItem
        data-testid="Search-ProductTypeFilter-ETF"
        className={clsx("row no-gutters small", {
          selected: assetClasses.etfs.key === selectedClass
        })}
        onClick={() => {
          setAssetClass(assetClasses.etfs);
          close();
        }}
      >
        <Col xs={{ offset: 4 }}>Exchange Traded Funds</Col>
      </StyledItem>
      <StyledItem
        data-testid="Search-ProductTypeFilter-CEF"
        className={clsx("row no-gutters small", {
          selected: assetClasses.cefs.key === selectedClass
        })}
        onClick={() => {
          setAssetClass(assetClasses.cefs);
          close();
        }}
      >
        <Col xs={{ offset: 4 }}>Closed End Funds</Col>
      </StyledItem>
      <StyledItem
        data-testid="Search-ProductTypeFilter-MFUND"
        className={clsx("row no-gutters small", {
          selected: assetClasses.mutualFunds.key === selectedClass
        })}
        onClick={() => {
          setAssetClass(assetClasses.mutualFunds);
          close();
        }}
      >
        <Col xs={{ offset: 4 }}>Mutual Funds</Col>
      </StyledItem>
    </StyledMenu>
  );
});

export default function ProductTypeFilter({
  selectedClass,
  setAssetClass
}: Props) {
  return (
    <StyledDropdown data-testid="product-type-dropdown">
      <Dropdown.Toggle
        data-testid="Search-ProductTypeFilter-Toggle"
        as={CustomToggle}
        id="dropdown-product-type"
      >
        {assetClasses[selectedClass].label}
      </Dropdown.Toggle>
      <Dropdown.Menu
        as={CustomMenu}
        selectedClass={selectedClass}
        setAssetClass={setAssetClass}
      />
    </StyledDropdown>
  );
}

interface Props {
  selectedClass: AssetClassesKeys;
  setAssetClass: (assetClass: AssetClass) => void;
}
