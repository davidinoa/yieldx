import styled from "styled-components";
import { Container } from "react-bootstrap";
import { mediaQuery } from "../../theme/breakpoints.style";

export const HomeContainer = styled(Container).attrs({})`
  height: auto;
  min-height: calc(100vh - 60px);
  //background-image: linear-gradient(180deg, var(--page), var(--page), var(--page), rgba(1,92,255,.15));
  //background-size: cover;
  //background-attachment: fixed;
  padding: 1rem 0;
  position: relative;
  max-width: 900px;

  ${mediaQuery("lg")} {
    max-width: 900px;
  }
  ${mediaQuery("xl")} {
    max-width: 1100px;
  }
`;

export const AppsBlock = styled(Container).attrs({})`
  padding: 1rem 0 0;
`;

export const AppsCards = styled.div.attrs({
  // className: "col-18 offset-3"
})`
  padding: 1rem 0 0;
`;

export const AdminBlock = styled(Container).attrs({})`
  position: relative;
  padding: 0 0 1rem 0;

  .divider {
    text-align: center;
    margin: 4rem 0;
    display: flex;
    align-items: center;
    justify-content: center;

    > div {
      display: flex;
      width: 100%;
      border-bottom: solid 1px var(--border-new);
    }
  }
`;
