import styled from "styled-components";
import { Card } from "elements/Card/Card";

const Root = styled(Card).attrs({ title: "ratings" })`
  height: 100%;
  margin-top: 0.75rem;

  .ratings-chart {
    display: flex;
    align-items: center;
  }

  .recharts-responsive-container {
    svg {
      padding: 0.5rem 0 0;
      margin-top: 1rem;
    }
  }
  .recharts-layer.recharts-bar {
    margin: 5px;
  }
`;

export default Root;
