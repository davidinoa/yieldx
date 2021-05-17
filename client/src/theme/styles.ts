import styled from "styled-components";
import { Container, Row } from "react-bootstrap";
import { mediaQuery } from "./breakpoints.style";

export const CardOutlinedBorderTop = styled(Row)`
  background: rgba(0, 0, 255, 0.3);
  border-radius: 0.35rem 0.35rem 0 0;
  background: var(--dark);
  padding: 0.35rem;
  a {
    background: none;
    border: none;
    padding: 0;
    max-height: 15px;
    line-height: 0;
    > span {
      margin-left: 0.25rem;
      font-weight: bold;
      font-size: 13px;
      line-height: 16px;
      color: #6980a6;
    }
  }
  h3 {
    letter-spacing: 0.2em;
    color: var(--lightest);
    text-align: center;
    font-size: 11px;
    line-height: 13px;
    padding-left: 0.3 rem;
    margin: 0;

    ${mediaQuery("xxl")} {
      font-size: 0.75rem;
    }
  }
`;

export const CardOutlined = styled.div.attrs({
  className: "container-fluid"
})`
  border: 1px solid var(--border-new);
  border-radius: 0.35rem;
  padding: 0.5rem 0.75rem;
  > div .change-container {
    height: 100px;
    border-top: 1px solid var(--border-new);
    display: flex;
    justify-content: center;
    align-items: center;
  }
  ${mediaQuery("xxl")} {
  }
`;

export const PageContainer = styled(Container)`
  margin-top: 2rem;
  margin-bottom: 2rem;
  padding-bottom: 2rem;
  ${mediaQuery("xxl")} {
    margin-top: 3rem;
    margin-bottom: 3rem;
  }

  h2 {
    font-weight: bold;
    font-size: 25px;
    line-height: 30px;
  }
  div > button.edit-portfolio-button {
    background: none;
    border: 1px solid rgba(255, 255, 255, 0.25);
    box-sizing: border-box;
    border-radius: 5px;
    font-weight: bold;
    font-size: 15px;
    line-height: 18px;
    text-align: center;
    padding: 10px 2rem;
  }
  div.separator {
    width: 100%;
    height: 1px;
    border-bottom: 1px solid #253859;
  }
`;
