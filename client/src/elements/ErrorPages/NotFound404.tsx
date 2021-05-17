import React from "react";
import styled from "styled-components";
import { useHistory } from "react-router";
import { ReactComponent as NotFoundImage } from "../../assets/svg/404.svg";

const ErrorMessageContainer = styled.div`
  &::before {
    content: "";
    display: inline-block;
    position: absolute;
    transform: translateX(-10%);
    width: 387px;
    height: 387px;
    border-radius: 50%;
    background: rgba(1, 92, 255, 0.04);
    pointer-events: none;
  }

  > button {
    width: 266.73px;
    height: 40px;
    background: var(--primary);
    box-shadow: 0px 0px 50px rgba(1, 92, 255, 0.5);
    border-radius: 5px;
    font-weight: bold;
    font-size: 14px;
    line-height: 17px;
  }
  > span {
    font-family: Roboto Mono;
    font-size: 13px;
    line-height: 17px;
    letter-spacing: 0.5em;
    text-transform: uppercase;
  }
`;

interface Props {
  topText?: string;
  bottomText?: string;
  buttonText?: string;
  onClick?: () => void;
}

export default function NotFound404({
  topText = "Sorry, this page is",
  bottomText = "No longer available",
  buttonText = "Go back",
  onClick
}: Props) {
  const history = useHistory();
  return (
    <ErrorMessageContainer className="d-flex justify-content-center align-items-center flex-column h-100 w-100">
      <span className="mb-4">{topText}</span>
      <NotFoundImage />

      <span className="mt-4">{bottomText}</span>
      <button
        data-testid="404-button"
        type="button"
        className="d-flex justify-content-center align-items-center mt-4"
        onClick={onClick ?? (() => history.goBack())}
      >
        {buttonText}
      </button>
    </ErrorMessageContainer>
  );
}
