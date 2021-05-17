import styled from "styled-components";
import { Link } from "react-router-dom";

export const Item = styled.div`
  font-weight: bold;
  font-size: 15px;
  line-height: 18px;
  text-transform: capitalize;
`;

export const Icon = styled.div`
  width: 18px;
  height: 18px;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const StyledLink = styled(Link)`
  padding-left: 25px;
  height: 50px;
  display: flex;
  align-items: center;
  color: var(--subtext-3);

  &.selected {
    color: var(--text);
    background: var(--medium);

    svg {
      path {
        fill: white;
      }
    }
  }
  :hover {
    text-decoration: none;
    background: var(--medium);
    color: var(--text);
  }
  + & {
    margin-top: 10px;
  }
  ${Icon} {
    margin-right: 1.95rem;
  }
`;
