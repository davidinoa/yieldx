import React from "react";
import { Formik } from "formik";
import { MutableSnapshot } from "recoil";
import { Switch, Route } from "react-router";
import { testInvestmentValue, mockPreferences } from "./BestFit.state";
import YieldXPortfolio from "../../models/YieldXPortfolio";
import { render, screen } from "../../test/utils";
import PreferencesForm from "./PreferencesForm/PreferencesForm";
import {
  BestFitReviewData,
  bestFitReviewState,
  preferencesState
} from "../../recoil-state/bestFit";
import BestFitReview from "./BestFitReview/BestFitReview";
import LandingPage from "../../components/LandingPage/LandingPage";
import AppNavbar from "../../components/AppNavbar/AppNavbar";
import mockAnalysis from "../../__mocks__/models/mockAnalysis";
import InvestmentStep from "./PreferencesForm/Steps/InvestmentStep/InvestmentStep";

describe("field validation", () => {
  test("function to validate investment value", () => {
    const truthyResult = testInvestmentValue(50_000);
    const falsyResult = testInvestmentValue(0);
    expect(truthyResult).toBeTruthy();
    render(
      <Formik onSubmit={() => undefined} initialValues={{ investment: 50_000 }}>
        {() => <InvestmentStep />}
      </Formik>
    );
  });

  const cashflows = [
    {
      date: "2025-05-26",
      cashFlow: 60.03297222222,
      principal: 0.0,
      interest: 60.03297222222
    },
    {
      date: "2025-07-15",
      cashFlow: 2086.4461734721776,
      principal: 2008.5694444444,
      interest: 77.87672902777751
    },
    {
      date: "2025-07-21",
      cashFlow: 3463.1573462501015,
      principal: 3397.3340000000994,
      interest: 65.82334625000193
    },
    {
      date: "2025-07-23",
      cashFlow: 4684.25231192,
      principal: 4576.508,
      interest: 107.74431192000002
    },
    {
      date: "2025-09-15",
      cashFlow: 6717.552109666599,
      principal: 6598.5726666666005,
      interest: 118.9794429999985
    },
    {
      date: "2025-09-29",
      cashFlow: 2271.6977237500682,
      principal: 2232.0783333334,
      interest: 39.619390416667855
    },
    {
      date: "2025-10-01",
      cashFlow: 5796.897226076584,
      principal: 5662.963111111301,
      interest: 133.9341149652824
    },
    {
      date: "2025-10-15",
      cashFlow: 4668.831968749953,
      principal: 4559.8594444444,
      interest: 108.97252430555454
    },
    {
      date: "2025-10-21",
      cashFlow: 2358.8763281944216,
      principal: 2309.7932222222,
      interest: 49.08310597222175
    },
    {
      date: "2025-10-29",
      cashFlow: 2319.2014999999997,
      principal: 2271.5,
      interest: 47.7015
    },
    {
      date: "2025-11-03",
      cashFlow: 3638.3233700000674,
      principal: 3556.5233333334,
      interest: 81.8000366666682
    },
    {
      date: "2025-11-17",
      cashFlow: 6853.265268414813,
      principal: 6724.505611111201,
      interest: 128.75965730361295
    },
    {
      date: "2025-11-24",
      cashFlow: 2461.35186111102,
      principal: 2401.3188888888,
      interest: 60.03297222222
    },
    {
      date: "2026-01-15",
      cashFlow: 2307.111253333356,
      principal: 2261.8737777778,
      interest: 45.237475555556
    }
  ];

  const PORTFOLIO = YieldXPortfolio.fromAssets("bestfit", []);
  const BEST_FIT_REVIEW_DATA: BestFitReviewData = {
    portfolio: PORTFOLIO,
    additionalAssets: [],
    preferences: mockPreferences,
    cashflows
  };

  test("e2e", async () => {
    render(
      <Switch>
        <Route exact path="/best-fit">
          <LandingPage
            tag="bestfit"
            link="/best-fit/preferences/quality"
            title="Customized portfolios tailored to your investment goals and preferences."
            text="The BestFit app curates a customized corporate and municipal bond portfolio tailored to your investment goals and preferences."
          />
        </Route>
        <>
          <AppNavbar appName="BestFit" />
          <Route path="/best-fit/preferences" component={PreferencesForm} />
          <Route path="/best-fit/portfolio-review">
            <BestFitReview
              analysis={mockAnalysis}
              onEditPositions={jest.fn}
              reviewData={BEST_FIT_REVIEW_DATA}
            />
          </Route>
        </>
      </Switch>,
      {
        route: "/best-fit/preferences/quality",
        initializeState: ({ set }: MutableSnapshot) => {
          set(preferencesState, mockPreferences);
          set(bestFitReviewState, BEST_FIT_REVIEW_DATA);
        }
      }
    );
    await screen.findAllByRole("heading");
  });
});
