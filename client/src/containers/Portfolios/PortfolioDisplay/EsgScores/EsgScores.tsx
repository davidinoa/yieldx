import React from "react";
import {
  EsgContainer,
  EsgFactor,
  EsgFactorsWrapper,
  IndividualScoreWrapper,
  Root,
  TotalScoreCircle
} from "./EsgScores.styles";

type Props = {
  total?: number;
  environmental?: number;
  social?: number;
  governance?: number;
  tooltipContent?: string;
};

export function EsgScores({
  total,
  environmental,
  social,
  governance,
  tooltipContent
}: Props) {
  return (
    <Root tooltipContent={tooltipContent}>
      <EsgContainer>
        <TotalScoreCircle>
          <h5>TOTAL SCORE:</h5>
          <b>{Math.round(total ?? 0)}</b>
          {/* <span>(Market AVG: 50)</span> */}
        </TotalScoreCircle>
        <EsgFactorsWrapper>
          <IndividualScoreWrapper>
            <EsgFactor>
              <h6>Environmental:</h6>
              {/* <span>(Market AVG: 50)</span> */}
            </EsgFactor>
            <h1>{Math.round(environmental ?? 0)}</h1>
          </IndividualScoreWrapper>
          <IndividualScoreWrapper>
            <EsgFactor>
              <h6>Social:</h6>
              {/* <span>(Market AVG: 50)</span> */}
            </EsgFactor>
            <h1>{Math.round(social ?? 0)}</h1>
          </IndividualScoreWrapper>
          <IndividualScoreWrapper>
            <EsgFactor>
              <h6>Governance:</h6>
              {/* <span>(Market AVG: 50)</span> */}
            </EsgFactor>
            <h1>{Math.round(governance ?? 0)}</h1>
          </IndividualScoreWrapper>
        </EsgFactorsWrapper>
      </EsgContainer>
    </Root>
  );
}
