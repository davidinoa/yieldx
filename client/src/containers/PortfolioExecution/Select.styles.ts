import styled, { css } from "styled-components";
import { Link } from "react-router-dom";
import { Row } from "react-bootstrap";
import { AccountStatus } from "@bondhouse/apex";

interface Props {
  status?: AccountStatus;
  hidden?: boolean;
}

const colorMap = {
  [AccountStatus.ACTIVE]: "var(--active)",
  [AccountStatus.INACTIVE]: "var(--subtext-3)",
  [AccountStatus.CANCELED]: "var(--subtext-3)",
  [AccountStatus.PENDING]: "var(--caution)",
  [AccountStatus.ERROR]: "var(--issue)"
};

export const Container = styled.div`
  height: 85vh;
  p {
    margin: 0;
  }

  .investor-breakdown {
    > :first-child {
      margin-right: 30px;
    }
    .status-label {
      margin-right: 5px;
      margin-left: 5px;
      font-weight: bold;
      font-size: 11px;
      line-height: 13px;
      letter-spacing: 0.2em;
      text-transform: uppercase;
      color: var(--subtext-3);
    }
  }

  .custom-control.custom-checkbox {
    .custom-control-label {
      padding-top: 5px;
      text-transform: uppercase;
      font-weight: bold;
      font-size: 11px;
      line-height: 13px;
      letter-spacing: 0.2em;
      text-transform: uppercase;
      ::before {
        background: transparent;
        border: 1.5px solid var(--subtext-3);
      }
    }
  }

  .dropdown-container {
    .dropdown-label {
      font-weight: bold;
      font-size: 11px;
      line-height: 13px;
      letter-spacing: 0.2em;
      text-transform: uppercase;
      margin-bottom: 10px;
    }
    .dropdown-toggle {
      width: 200px;
      font-weight: bold;
      background: var(--dark);
      border-radius: 5px;
      height: 40px;
      text-align: left;
    }
    .dropdown-menu {
      background: var(--dark);
      > a {
        color: var(--text);
        :hover {
          background: inherit;
        }
      }
    }
  }

  .data-rows {
    margin: 50px 0;
  }

  .value {
    font-weight: bold;
    font-size: 16px;
    line-height: 19px;
    color: var(--text);
  }

  .label {
    font-weight: bold;
    font-size: 11px;
    line-height: 13px;
    letter-spacing: 0.2em;
    text-transform: uppercase;
    color: var(--subtext-3);
  }

  .right-border {
    border-right: 1px solid var(--border-new);
  }

  .center {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
  }
`;

export const InvestorRow = styled(Row)`
  height: 70px;
  padding-top: 15px;
  padding-bottom: 15px;
  background: var(--dark);
  &.selected {
    background: var(--medium);
    border: 1px solid var(--border-3);
  }
  border-radius: 5px;
  margin-bottom: 10px;
  display: ${props => (props.hidden ? "none" : undefined)};
  .value,
  .label {
    color: ${(props: Props) =>
      props.status !== AccountStatus.ACTIVE ? "var(--subtext-3)" : undefined};
  }
`;

export const Status = styled.div`
  height: 6px;
  width: 6px;
  border-radius: 50%;
  background: ${(props: Props) =>
    colorMap[props.status || AccountStatus.ACTIVE]};
  margin: 0 auto;
`;

export const SelectButton = styled.button`
  width: 90px;
  height: 30px;
  background: var(--page);
  font-weight: bold;
  border-radius: 5px;
  color: white;
  text-decoration: none;
  &.selected {
    background: var(--border-new);
  }
`;

export const createButtonStyle = css`
  width: 233px;
  height: 40px;
  border: 1px solid var(--border-new) !important;
  background: var(--page) !important;
  color: var(--primary);
  font-size: 15px;
  font-weight: bold;
  border-radius: 5px !important;
  line-height: 18px;
  :hover {
    text-decoration: none;
    border: 1px solid var(--border-3);
  }
`;

export const CreateInvestorButton = styled(Link).attrs({
  className: "d-flex align-items-center justify-content-center"
})`
  ${createButtonStyle}
`;

export const TextContainer = styled.div`
  width: max-content;
  margin: auto;
`;

export const Title = styled.p`
  margin: 0;
  font-weight: bold;
  font-size: 11px;
  line-height: 13px;
  letter-spacing: 0.25em;
  text-transform: uppercase;
  color: var(--subtext-3);
`;
