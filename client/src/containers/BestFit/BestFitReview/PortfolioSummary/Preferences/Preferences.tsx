import React from "react";
import { Row, Col } from "react-bootstrap";
import { useHistory } from "react-router-dom";
import { useRecoilState } from "recoil";
import Root from "./Preferences.styles";
import { Preferences, Weighting } from "../../../BestFit.state";
import { preferencesState } from "../../../../../recoil-state/bestFit";

export default function PreferencesSummary() {
  const history = useHistory();
  const [preferences, setPreferences] = useRecoilState<Preferences>(
    preferencesState
  );
  const weightings: Record<Weighting, string> = {
    maximizeYield: "income maximization",
    minimizeRisk: "risk minimization",
    minimizeConcentration: "balanced"
  };

  return (
    <Root
      onEdit={() => {
        setPreferences(prev => ({
          ...prev,
          currentStepIndex: 0,
          submitting: false,
          isCurrentValid: true
        }));
        history.push("/best-fit/preferences/quality");
      }}
    >
      <Row className="row-cols-3">
        <Col>
          <div className="preference-name">credit rating</div>
          <div className="preference-text">
            I am targeting{" "}
            <span className="preference-value">{preferences.quality}</span>{" "}
            bonds for my portfolio credit quality.
          </div>
        </Col>
        <Col>
          <div className="preference-name">maturity/duration</div>
          <div className="preference-text">
            I would like to target{" "}
            <span className="preference-value">
              {preferences.years} {preferences.years === 1 ? "year" : "years"}{" "}
              {preferences.timeMetric}
            </span>{" "}
            for my bond portfolio.
          </div>
        </Col>

        <Col>
          <div className="preference-name">number of bonds</div>
          <div className="preference-text">
            I would like to include{" "}
            <span className="preference-value">
              {preferences.quantity} bonds
            </span>{" "}
            in my portfolio.
          </div>
        </Col>
        <Col>
          <div className="preference-name">allocation</div>
          <div className="preference-text">
            I would like to use a{" "}
            <span className="preference-value">
              {weightings[preferences.weighting ?? "maximizeYield"]}
            </span>{" "}
            approach for weighting my bond portfolio.
          </div>
        </Col>
        <Col>
          <div className="preference-name">exclusions</div>
          <div className="preference-text">
            {preferences.excludedSubsectors.length ? (
              <>
                I want to exclude from my bond portfolio companies from these
                sectors:
                {preferences.excludedSubsectors.map(subsector => (
                  <span key={subsector} className="preference-value">
                    {" "}
                    {subsector}{" "}
                  </span>
                ))}
              </>
            ) : (
              <>
                I have no restriction for bonds issued by any specific sector.
              </>
            )}
          </div>
        </Col>
      </Row>
    </Root>
  );
}
