import React from "react";
import { useRecoilValue } from "recoil";
import { userState } from "services/userState";
import { calculateDaysSince } from "util/calculateDaysSince";
import {
  DropDownBody,
  Root
} from "components/Navbar/TrialUserNav/NavDropDown/NavDropDown.styles";

interface Props {
  toggleDropDown: () => void;
}

const NavDropDown = ({ toggleDropDown }: Props) => {
  const user = useRecoilValue(userState);
  const willSoonExpire = calculateDaysSince(user.createdAt || "") >= 20;
  const daysLeft = 30 - calculateDaysSince(user.createdAt || "");
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

  return (
    <Root ref={ref}>
      <div className="arrow" />
      <DropDownBody>
        <span className="popover-text">
          {willSoonExpire
            ? "Your free trial will expire in"
            : "Your trial period still has"}
        </span>
        <span className="popover-days-left">{`${daysLeft} days`}</span>
        <span className="popover-text">
          {willSoonExpire
            ? "Contact your sales representative to continue using YieldX."
            : "Contact your sales representative to get all available features."}
        </span>
      </DropDownBody>
    </Root>
  );
};

export default NavDropDown;
