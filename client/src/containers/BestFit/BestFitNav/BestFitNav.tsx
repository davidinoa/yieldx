import React from "react";
import {
  useRecoilState,
  useRecoilValueLoadable,
  useSetRecoilState
} from "recoil";
import { useHistory } from "react-router-dom";
import BottomNav from "../../Investors/CreateInvestor/BottomNav/BottomNav";
import {
  bestFitReviewState,
  preferencesState
} from "../../../recoil-state/bestFit";
import {
  createBestfitPortfolio,
  navSteps,
  Preferences
} from "../BestFit.state";

export default function BestFitNav() {
  const history = useHistory();
  const [preferences, setPreferences] = useRecoilState(preferencesState);
  const setReviewData = useSetRecoilState(bestFitReviewState);
  const reviewData = useRecoilValueLoadable(bestFitReviewState);
  const { currentStepIndex, isCurrentValid, submitting } = preferences;

  React.useEffect(() => {
    if (currentStepIndex === 5 && reviewData) {
      setPreferences(prev => ({
        ...prev,
        submitting: false
      }));
    }
  }, [currentStepIndex, reviewData, setPreferences]);

  return (
    <BottomNav
      blockPrev={submitting}
      blockNext={!isCurrentValid || submitting}
      hideBackButton={currentStepIndex === 0}
      onNext={async () => {
        if (currentStepIndex === 5) {
          setPreferences(prev => ({
            ...prev,
            submitting: true
          }));
          const inputs = preferences as Required<Preferences>;
          const data = await createBestfitPortfolio({ preferences: inputs });
          setReviewData(data);
          history.push("/best-fit/portfolio-review");
        } else {
          setPreferences(prev => ({
            ...prev,
            currentStepIndex: currentStepIndex + 1
          }));
          history.push(navSteps[currentStepIndex + 1]);
        }
      }}
      onPrevious={() => {
        setPreferences(prev => ({
          ...prev,
          currentStepIndex: currentStepIndex - 1
        }));
        history.push(navSteps[currentStepIndex - 1]);
      }}
    />
  );
}
