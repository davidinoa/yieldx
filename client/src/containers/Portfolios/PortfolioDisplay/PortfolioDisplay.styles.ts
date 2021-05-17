import styled from "styled-components";

const portfolioColorMap = {
  ready: "#42F1D2",
  pending: "#FAE369",
  tracking: "#6980A6",
  terminated: "#6980A6"
};

interface Props {
  type: keyof typeof portfolioColorMap;
}
export const Status = styled.div`
  height: 6px;
  width: 6px;
  border-radius: 50%;
  background: ${(props: Props) => portfolioColorMap[props.type || "tracking"]};
`;

export const PortfolioWidget = styled.div.attrs({
  className: "container-fluid"
})`
  margin-bottom: 0.85rem;
`;

export const CardValue = styled.div`
  font-size: 30px;
  line-height: 37px;
  sup {
    font-size: 18px;
    line-height: 22px;
    padding: 5px;
  }
`;
