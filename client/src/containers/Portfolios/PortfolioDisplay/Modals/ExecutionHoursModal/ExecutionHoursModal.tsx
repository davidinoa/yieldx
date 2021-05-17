import React from "react";
import styled from "styled-components";
import dayjs, { Dayjs } from "dayjs";
import ModalBase from "components/ModalBase/ModalBase";
import Button from "elements/Button/Button";
import { InfoText } from "components/ModalBase/ModalBase.styles";

interface Props {
  onHide: () => void;
  onSave?: () => void;
  isOpen: boolean;
}

const ButtonContainer = styled.div`
  width: 100%;
  margin: 1rem auto;
  display: flex;
  max-width: 13rem;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  & button {
    width: 100%;
    margin-bottom: 1rem;
  }
`;

export default function ExecutionHoursModal({
  onSave,
  onHide,
  isOpen = false
}: Props) {
  return (
    <ModalBase onHide={onHide} show={isOpen}>
      <h1>Sorry, your portfolio can’t be executed right now.</h1>
      <InfoText>
        Your orders can’t be placed at this time. YieldX’s trading hours are
        between 9:30am and 4:00pm EST.
      </InfoText>
      <ButtonContainer>
        {onSave ? (
          <Button
            data-testid="save-btn"
            onClick={onSave}
            text="Save as paper for now"
          />
        ) : null}
        <Button
          data-testid="dismiss-btn"
          variant="secondary"
          onClick={onHide}
          text="Dismiss"
        />
      </ButtonContainer>
    </ModalBase>
  );
}

// All values are in Eastern Time
const OPENING_TIME_HOUR = 9;
const OPENING_TIME_MINUTE = 30;
const CLOSING_TIME_HOUR = 16;
const CLOSING_TIME_MINUTE = 0;
const SATURDAY = 6;
const SUNDAY = 0;

export function isTradingOpen(date: number | Dayjs) {
  const nyDate = dayjs(date).tz("America/New_York");
  const day = nyDate.get("day");
  const hour = nyDate.get("hour");
  const minute = nyDate.get("minute");
  return (
    day !== SATURDAY &&
    day !== SUNDAY &&
    (hour > OPENING_TIME_HOUR ||
      (hour === OPENING_TIME_HOUR && minute >= OPENING_TIME_MINUTE)) &&
    (hour < CLOSING_TIME_HOUR ||
      (hour === CLOSING_TIME_HOUR && minute < CLOSING_TIME_MINUTE))
  );
}
