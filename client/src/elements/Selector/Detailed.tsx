import React from "react";
import {
  DetailedSelectorCard,
  DetailedSelectorText,
  DetailedSelectorTitle
} from "./styles";

interface DetailedSelectorProps {
  title: string;
  children?: JSX.Element | JSX.Element[] | string;
}

export function Detailed({ title, children }: DetailedSelectorProps) {
  return (
    <DetailedSelectorCard>
      <div className="d-flex flex-column justify-content-around align-items-center mt-4 mb-4 ml-3 mr-3 h-100">
        <DetailedSelectorTitle>{title}</DetailedSelectorTitle>
        {children}
      </div>
    </DetailedSelectorCard>
  );
}

Detailed.Card = DetailedSelectorCard;
Detailed.Titled = DetailedSelectorTitle;
Detailed.Text = DetailedSelectorText;
