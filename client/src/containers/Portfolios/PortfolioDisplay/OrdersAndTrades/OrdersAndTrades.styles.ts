import styled from "styled-components";
import { Button, Col, Row } from "react-bootstrap";

type Props = {
  status: string | undefined;
};

export const CollapsibleRow = styled(Row)`
  ul {
    padding: 0;
  }

  .order-info {
    padding: 4.5rem 5rem;
    padding-right: 1rem;
    display: flex;
    align-items: center;
    justify-content: center;
    border: 1px solid #253859;

    h4 {
      margin-bottom: 1.5rem;
    }

    li {
      font-size: 14px;
      .label {
        padding-right: 0.5rem;
        text-transform: uppercase;
        font-weight: bold;
        font-size: 11px;
        line-height: 13px;
        display: flex;
        align-items: center;
        letter-spacing: 0.1em;
        color: #6980a6;
      }
    }
  }

  .trades {
    padding: 0;
    display: flex;
    flex-direction: column;
  }

  background: var(--dark);
  margin-top: -7px;
  margin-bottom: 30px;
`;

export const CancelButton = styled(Button)`
  border: none;
  padding: 6px 18px;
  text-transform: uppercase;
  background: #f87584;
  border-radius: 5px;
  font-weight: bold;
  font-size: 11px;
  line-height: 13px;
  color: var(--darkest);
`;

export const StatusBadge = styled.div`
  --color-open: #fae369;
  --color-pending: #fae369;
  --color-executing: #0fd4ff;
  --color-confirmed: #42f1d2;
  --color-closed: var(--white);
  --color-settled: var(--white);
  --color-canceled: #f87584;
  --background-open: #fae36910;
  --background-pending: #fae36910;
  --background-executing: #0fd4ff10;
  --background-confirmed: #42f1d210;
  --background-closed: #ffffff10;
  --background-settled: #ffffff10;
  --background-canceled: #f8758410;
  color: ${(props: Props) =>
    `var(--color-${props.status?.toLocaleLowerCase()})`};
  background: ${(props: Props) =>
    `var(--background-${props.status?.toLowerCase()})`};
  padding: 5px 25px;
  border-radius: 50px;
  text-align: center;
  text-transform: uppercase;
  font-weight: bold;
  font-size: 10px;
  letter-spacing: 0.2em;
  width: 100%;
  line-height: initial;
`;

export const Root = styled.div`
  padding-bottom: 1rem;
  width: 100%;
  * {
    transition: all ease-in 100ms;
  }
`;

export const MoreInfoHeading = styled.div`
  font-family: Roboto Mono;
  font-style: normal;
  font-weight: bold;
  font-size: 14px;
  letter-spacing: 0.2em;
  text-transform: uppercase;
  color: #ffffff;
  margin-bottom: 25px;
`;

export const MoreInfoWrapper = styled.li`
  margin-bottom: 15px;
  display: grid;
  grid-template-columns: 2fr 3fr;
`;

export const MoreInfoTitle = styled.span`
  font-weight: bold;
  font-size: 12px;
  line-height: 15px;
  letter-spacing: 0.1em;
  color: #6980a6;
  text-transform: uppercase;
`;

export const MoreInfoValue = styled.span`
  text-transform: capitalize;
  font-size: 14px;
  line-height: 17px;
  color: #ffffff;
`;

export const MoreInfoToggle = styled.button.attrs({
  type: "button"
})`
  background: none;
  margin: 0 auto;
`;

export const TradesHeader = styled.header`
  width: 100%;
  background: #192b4a;
  border: 1px solid #253859;
  padding: 1rem;
`;

export const Heading = styled.h4`
  font-weight: bold;
  font-size: 15px;
`;

export const HeadRow = styled.div`
  display: flex;
`;

export const HeadingColumn = styled(Col)`
  font-weight: bold;
  font-size: 11px;
  line-height: 13px;
  letter-spacing: 0.1em;
  color: var(--lightest);
  text-transform: uppercase;
  text-align: center;
`;

export const TradesList = styled.div`
  border: 1px solid #253859;
  flex-grow: 1;
  display: flex;
  flex-direction: column;
  justify-content: top;
  padding: 1rem;
  background: var(--dark);
  height: 100%;
  width: 100%;
  text-align: center;
  font-size: 13px;
`;

export const TradesWrapper = styled.div`
  height: 100%;
  display: flex;
  flex-direction: column;
  :last-child {
    flex-grow: 1;
  }
  > * {
    width: 100%;
  }
`;
