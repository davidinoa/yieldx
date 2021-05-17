import { Row } from "react-bootstrap";

import styled from "styled-components";
import { mediaQuery } from "../../theme/breakpoints.style";

export const StyledBackLink = styled(Row)`
  .list-link {
    svg {
      width: 5px;
      height: 15px;
      path {
        stroke-width: 3.5px;
        stroke: var(--lightest);
      }
    }
    span {
      margin-left: 0.5rem;
      font-weight: bold;
      font-size: 14px;
      color: var(--lightest);
      ${mediaQuery("xxl")} {
        font-size: 0.75rem;
      }
    }
  }
`;
