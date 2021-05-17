import React from "react";
import styled, { keyframes } from "styled-components";
import loaderProcessing01 from "../../assets/svg/loader-processing-1.svg";
import loaderProcessing02 from "../../assets/svg/loader-processing-2.svg";
import loaderProcessing03 from "../../assets/svg/loader-processing-3.svg";
import loaderSuccess from "../../assets/svg/loader-success.svg";

const transition = keyframes`
  0% {
    background-image: url(${loaderProcessing01});
  }

  50% {
    background-image: url(${loaderProcessing02});
  }

  100% {
    background-image: url(${loaderProcessing03});
  }
`;

const successTransition = keyframes`
 0% {
   transform: scale(0.1) translateX(-50%);
   transition: all 300ms ease-out;
 }

 100% {
   transform: scale(1) translateX(50);
   transition: all 300ms ease-out;
 }
`;

export const Root = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 85vh;
  width: 100%;
  z-index: 1000000;
  background: #03132f;
  filter: alpha(opacity = 55);
  opacity: 0.55;
`;

export const StyledLoader = styled.div`
  animation: ${transition} 1s infinite;
  width: 181px;
  height: 97px;
  background-repeat: no-repeat;
`;

export const LoaderSuccess = styled.div`
  width: 181px;
  height: 97px;
  background-image: url(${loaderSuccess});
  background-position: center;
  background-size: cover;
  background-repeat: no-repeat;
  animation: ${successTransition} 300ms ease-in-out;
`;

export default React.memo(function YieldXLoader() {
  return (
    <Root>
      <StyledLoader data-testid="loader" />
    </Root>
  );
});
