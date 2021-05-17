import styled from "styled-components";
import { Container, Row } from "react-bootstrap";

export const StyledContainer = styled(Container).attrs({
  fluid: true
})`
  height: 90vh;
`;

export const StyledRow = styled(Row)`
  height: inherit;
  justify-content: center;
`;
