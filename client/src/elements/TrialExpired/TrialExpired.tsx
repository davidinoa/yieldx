import React from "react";
import { Container } from "react-bootstrap";
import styled from "styled-components";
import { mediaQuery } from "../../theme/breakpoints.style";
import { ReactComponent as YieldXLogo } from "../../assets/svg/yieldx-logo.svg";

const Content = styled(Container)`
  padding: 1rem;
  min-height: 75vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  position: relative;
  border: 2px solid #253859;
  border-radius: 10px;
  justify-content: center;
  background: var(--page);

  &::before {
    content: "";
    display: block;
    position: absolute;
    border-radius: 0.5rem 0.5rem 0 0;
    background: var(--dark);
    margin: 0;
    top: 0.25rem;
    left: 0.25rem;
    width: calc(100% - 0.5rem);
    height: 1rem;

    ${mediaQuery("xxl")} {
      top: 0.25rem;
      left: 0.25rem;
      width: calc(100% - 0.5rem);
      height: 1.25rem;
    }
  }

  h2 {
    font-weight: bold;
    font-size: 30px;
    line-height: 145%;
    text-align: center;
  }

  p.message {
    max-width: 25rem;
    line-height: 185%;
    text-align: center;
    color: #6980a6;
    border-bottom: 1px solid #253859;
    padding-bottom: 1.5rem;
  }

  p.cta {
    max-width: 15rem;
    font-style: italic;
    font-weight: normal;
    font-size: 14px;
    line-height: 185%;
    text-align: center;
  }

  span.contact-number {
    margin-top: 1rem;
    font-style: initial;
    font-weight: 300;
    font-size: 34px;
    line-height: 41px;
    color: #015cff;
    display: block;
  }
`;

const Header = styled.header`
  width: 100vw;
  display: flex;
  align-items: center;
  justify-content: center;
  background: var(--dark);
  padding: 0.5rem;
`;

const LogoContainer = styled.i`
  display: flex;
  justify-content: center;
  height: 2.5rem;
`;

const Root = styled.div`
  ${Header} {
    margin-bottom: 5rem;
  }
`;

export default function TrialExpired() {
  return (
    <Root>
      <Header>
        <LogoContainer>
          <YieldXLogo />
        </LogoContainer>
      </Header>
      <Content>
        <h2>Trial period expired</h2>
        <p className="message">
          Sorry, but you no longer have access to the YieldX platform. We hope
          you enjoyed your trial experience and join us soon.
        </p>
        <p className="cta">
          If you want to continue using YieldX, contact your sales
          representative
          <span className="contact-number">(646) 328-9804</span>
        </p>
      </Content>
    </Root>
  );
}
