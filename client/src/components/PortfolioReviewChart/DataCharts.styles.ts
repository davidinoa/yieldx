import styled from "styled-components";

export const PieChartContainer = styled.div`
  background: var(--container);
  border-radius: 10px;
  padding: 1.5rem 10px;
  > h3 {
    font-weight: bold;
    font-size: 21px;
    line-height: 145%;
    margin-bottom: 2rem;
    margin-left: 1rem;
  }
  @media (min-width: 1200px) {
    max-width: 49.5%;
  }
  @media (max-width: 1200px) {
    :first-of-type {
      margin-bottom: 10px;
    }
  }
`;

export const PieChartRow = styled.div`
  padding: 0;
  justify-content: space-between;
  margin-bottom: 2rem;
`;

export const ChartContainer = styled.div`
  position: relative;
`;

export const LegendItem = styled.li`
  :not(last-child) {
    margin-bottom: 8px;
  }
  > div > span {
    border-radius: 2px;
    width: 11px;
    max-width: 11px;
    height: 11px;
    display: inline-block;
  }

  > span {
    flex: 1;
    &.highlighted {
      text-decoration: underline;
      text-decoration-color: var(--primary);
    }
  }

  font-style: normal;
  font-weight: bold;
  font-size: 15px;
  line-height: 18px;
`;

export const LegendContainer = styled.ul`
  width: 100%;
  list-style: none;
  cursor: pointer;
  margin: auto;
  > li.hidden {
    text-decoration: line-through;
  }
`;

export const PieCol = styled.div`
  height: 250px;
`;

export const chartColors = [
  "#015CFF",
  "#9656FF",
  "#6457FE",
  "#518CFF",
  "#19C2FF",
  "#015CFF80",
  "#9656FF80",
  "#6457FE80",
  "#518CFF80",
  "#19C2FF80",

  "#125FEE",
  "#1981FF",
  "#19C2FF",
  "#42E8F1",
  "#ACFFEC",
  "#ACFFD0",
  "#ACFFB4",
  "#D0FEC2",
  "#EEFFC1",
  "#FFFBC1",
  "#F5EACC",
  "#FFCCE3",
  "#E5B3DA",
  "#CA7DE8",
  "#B96EF7",
  "#A066FF",
  "#8833FF",
  "#6C0AFF",
  "#4117E9"
];
