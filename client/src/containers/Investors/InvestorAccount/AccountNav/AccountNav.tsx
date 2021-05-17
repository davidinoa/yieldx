import React from "react";
import NavItem from "./NavItem/NavItem";
import { ReactComponent as InfoIcon } from "../../../../assets/svg/info.svg";
import { ReactComponent as InvestorIcon } from "../../../../assets/svg/investor.svg";
import { ReactComponent as PortfoliosIcon } from "../../../../assets/svg/portfolio.svg";
import { ReactComponent as BankIcon } from "../../../../assets/svg/bank.svg";
import { ReactComponent as StatementIcon } from "../../../../assets/svg/statement.svg";
import { Root, Menu } from "./AccountNav.styles";

function AccountNav() {
  return (
    <Root>
      <Menu>
        <NavItem
          data-testid="Investors-AccountNav-NavLink-GeneralInfo"
          to="#general-info"
          icon={<InfoIcon />}
        />
        <NavItem
          data-testid="Investors-AccountNav-NavLink-InvestorDetails"
          to="#investor-details"
          icon={<InvestorIcon />}
        />
        <NavItem
          data-testid="Investors-AccountNav-NavLink-InvestorPortfolios"
          to="#portfolios"
          icon={<PortfoliosIcon />}
        />
        <NavItem
          data-testid="Investors-AccountNav-NavLink-LinkedBanks"
          to="#linked-banks"
          icon={<BankIcon />}
        />
        <NavItem
          data-testid="Investors-AccountNav-NavLink-Statements"
          to="#statements"
          icon={<StatementIcon />}
        />
      </Menu>
    </Root>
  );
}

export default AccountNav;
