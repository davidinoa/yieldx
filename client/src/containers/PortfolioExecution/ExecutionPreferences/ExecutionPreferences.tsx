import React, { useCallback, useState } from "react";
import { Container, Row } from "react-bootstrap";
import { useHistory } from "react-router";
import { useRecoilState } from "recoil";
import PageTitle from "elements/PageTitle/PageTitle";
import { executionPreferencesState } from "recoil-state/executionPreferencesState";
import BottomNav from "containers/Investors/CreateInvestor/BottomNav/BottomNav";
import { Preferences } from "components/Execution/Preferences";
import styled from "styled-components";

export type ExecutionPreferencesType =
  | {
      goodTillCancel: boolean;
      fullFillRequired: boolean;
    }
  | undefined;

const TitleRow = styled(Row)`
  margin-bottom: 2rem;
`;

export default function ExecutionPreferencesContainer() {
  const {
    push,
    location: { search }
  } = useHistory();
  const [preferences, setPreferences] = useRecoilState<
    ExecutionPreferencesType
  >(executionPreferencesState);
  /*
   * Rather than triggering recoil updates each change -
   * Mirror the previous behavior of waiting for form submit (onNext)
   * By using local state instead of Formik
   */
  const [goodTillCancel, setGoodTillCancel] = useState<boolean>(
    !preferences || preferences.goodTillCancel === true
  );

  const [fullFillRequired, setFullFillRequired] = useState<boolean>(
    preferences?.fullFillRequired === true
  );

  const onNext = useCallback(async () => {
    await setPreferences({ goodTillCancel, fullFillRequired });
    push({ pathname: "/execute-portfolio/confirm", search });
  }, [push, search, goodTillCancel, fullFillRequired, setPreferences]);

  const onBack = useCallback(
    () => push({ pathname: "/execute-portfolio/investors", search }),
    [push, search]
  );

  return (
    <Container>
      <TitleRow>
        <PageTitle
          page
          title="Select your execution preferences"
          subtitle="Execution preferences"
          alignment="left"
        />
      </TitleRow>
      <Preferences
        goodTillCancel={goodTillCancel}
        fullFillRequired={fullFillRequired}
        setGoodTillCancel={setGoodTillCancel}
        setFullFillRequired={setFullFillRequired}
      />
      <BottomNav onPrevious={onBack} onNext={onNext} />
    </Container>
  );
}
