import React, { ReactNode } from "react";
import { useLocation } from "react-router-dom";
import { Icon, Item, StyledLink } from "./NavItem.styles";

function NavItem({ to, icon }: { to: string; icon: ReactNode }) {
  const { hash } = useLocation();
  const label = to.slice(1).split("-").join(" ");
  let currentClassName: string | undefined;
  if (hash === to) currentClassName = "selected";
  if (hash === "#close-investor" && to === "#general-info")
    currentClassName = "selected";
  if (hash === "#unlink-bank" && to === "#linked-banks")
    currentClassName = "selected";

  return (
    <Item>
      <StyledLink
        data-testid={`Investors-InvestorAccount-AccountNav-${label.replaceAll(
          " ",
          ""
        )}`}
        to={to}
        className={currentClassName}
      >
        <Icon>{icon}</Icon>
        {label}
      </StyledLink>
    </Item>
  );
}

export default NavItem;
