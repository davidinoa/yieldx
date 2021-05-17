import clsx from "clsx";
import React from "react";
import { useHistory, useLocation } from "react-router";
import { useSetRecoilState } from "recoil";
import YieldXPortfolio from "models/YieldXPortfolio";
import { editPositions } from "recoil-state/editPositions";
import { portfolioCreateOrEditState } from "recoil-state/portfolioCreateOrEditState";
import { Button, Container } from "./Alert.styles";

interface Props {
  portfolio: YieldXPortfolio;
}

export default function NonTradableAlert({ portfolio }: Props) {
  const history = useHistory();
  const { pathname } = useLocation();
  const setPortfolioData = useSetRecoilState(portfolioCreateOrEditState);
  return (
    <Container className={clsx("container-fluid bottomNav")} color="#FAE369">
      <svg
        width="22"
        height="23"
        viewBox="0 0 22 23"
        fill="#FAE369"
        stroke="#FAE369"
      >
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M10.8478 2.37662C5.88487 2.37662 1.86164 6.39985 1.86164 11.3628C1.86164 16.3257 5.88487 20.3489 10.8478 20.3489C15.8107 20.3489 19.8339 16.3257 19.8339 11.3628C19.8339 6.39985 15.8107 2.37662 10.8478 2.37662ZM0.138672 11.3628C0.138672 5.44828 4.9333 0.653656 10.8478 0.653656C16.7622 0.653656 21.5569 5.44828 21.5569 11.3628C21.5569 17.2772 16.7622 22.0719 10.8478 22.0719C4.9333 22.0719 0.138672 17.2772 0.138672 11.3628ZM10.8473 6.21669C11.4155 6.21669 11.8761 6.6773 11.8761 7.24549V11.3606C11.8761 11.9288 11.4155 12.3894 10.8473 12.3894C10.2791 12.3894 9.81853 11.9288 9.81853 11.3606V7.24549C9.81853 6.6773 10.2791 6.21669 10.8473 6.21669ZM10.8473 14.2294C10.157 14.2294 9.59732 14.789 9.59732 15.4794C9.59732 16.1698 10.157 16.7294 10.8473 16.7294H10.8577C11.548 16.7294 12.1077 16.1698 12.1077 15.4794C12.1077 14.789 11.548 14.2294 10.8577 14.2294H10.8473Z"
          fill="#FAE369"
        />
      </svg>
      <span>
        You have some assets that cannot be executed right now through YieldX.
        You need to remove them to invest in this portfolio.
      </span>
      <Button
        data-testid="review-alert-button"
        disabled={pathname.includes("inpaas")}
        onClick={() => editPositions({ portfolio, setPortfolioData, history })}
      >
        Remove & Review
      </Button>
    </Container>
  );
}
