import { Container } from "react-bootstrap";
import styled from "styled-components";

export const RootContainer = styled(Container)`
  height: 100%;
  padding-top: 50px;
  padding-bottom: 50px;

  .header {
    margin-top: 20px;
    margin-bottom: 50px;
    padding-top: 25px;
    padding-bottom: 25px;
    border-top: 1px solid #253859;
    border-bottom: 1px solid #253859;
    .universe-name {
      h2 {
        font-weight: bold;
        font-size: 30px;
        line-height: 37px;
      }
    }
  }

  .grid-container {
    height: 50vh;
  }
`;

export const EditNameButton = styled.button.attrs({ type: "button" })`
  background: none;
  margin-top: -0.25rem;
  margin-left: 0.5rem;
  display: flex;
  align-items: center;
  justify-content: center;
`;
