import styled from "styled-components";
import { Container, Col } from "react-bootstrap";
import { navbar } from "theme/theme.style";
import { mediaQuery } from "theme/breakpoints.style";

export const TopMenu = styled(Container)`
  display: ${props => props.display};
  background: var(--dark);
  margin: 0;
  z-index: var(--zindex-navbar);
  width: 100%;
  height: ${navbar.height.xs};

  ${mediaQuery("xxl")} {
    height: ${navbar.height.xxl};
  }
  span {
    font-weight: bold;
    font-size: ${navbar.components.title.fontSize.xs};
    ${mediaQuery("xxl")} {
      font-size: ${navbar.components.title.fontSize.xxl};
    }
  }
`;

export const TitleContainer = styled(Col)`
  button {
    background: inherit;
    padding: 0;
    margin-left: 0.25rem;
  }
  span {
    font-weight: bold;
    font-size: ${navbar.components.title.fontSize.xs};
    margin-left: 1.25rem;
    ${mediaQuery("xxl")} {
      font-size: ${navbar.components.title.fontSize.xxl};
      margin-left: 1.5rem;
    }
  }

  span {
  }
`;
export const HeaderLinks = styled(Col)`
  > button {
    background: inherit;
    padding: 0;
  }
  > span {
    margin-left: 2rem;
  }
`;
