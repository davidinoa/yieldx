import React from "react";
import {
  EmptyList,
  NoItemAvailable
} from "../../../../components/ListPages/ListPages.styles";
import { ReactComponent as NoItemIcon } from "../../../../assets/svg/no-portfolio.svg";

export default function EmptyListFallback() {
  return (
    <EmptyList>
      <div className="content">
        <NoItemAvailable>
          <NoItemIcon />
          <h2>No portfolios</h2>
          <p>
            It looks like there aren&rsquo;t any portfolios created yet. Please
            utilize one of the apps to create a fixed income portfolio.
          </p>
        </NoItemAvailable>
      </div>
    </EmptyList>
  );
}
