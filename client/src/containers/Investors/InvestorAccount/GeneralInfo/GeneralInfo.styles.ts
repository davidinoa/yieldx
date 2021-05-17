import styled from "styled-components";
import { Link } from "react-router-dom";

export const Root = styled.div`
  max-width: 875px;
  padding: 0 10px;
  display: flex;
  flex-direction: column;
  .title {
    margin: 0;
    padding-top: 16px;
    padding-left: 50px;
    padding-bottom: 16px;
    border-top: 1px solid var(--border-new);
    border-bottom: 1px solid var(--border-new);
    font-weight: bold;
    font-size: 19px;
    line-height: 23px;
  }
  .data {
    flex-grow: 1;
    padding: 40px 50px;
    .record {
      display: flex;
      + .record {
        margin-top: 25px;
      }
      .label {
        flex-grow: 1;
        max-width: 250px;
        font-weight: bold;
        font-size: 11px;
        line-height: 13px;
        letter-spacing: 0.2em;
        text-transform: uppercase;
        color: var(--subtext-3);
      }
      .value {
        flex-grow: 1;
        font-size: 16px;
        line-height: 19px;
      }
    }
  }
`;

export const CloseButton = styled.button.attrs({
  type: "button"
})`
  width: 170px;
  height: 40px;
  background: transparent;
  border: 1px solid var(--border-new);
  border-radius: 5px;
  font-weight: bold;
  font-size: 16px;
  line-height: 19px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: var(--primary);
`;

export const ManageCashButton = styled(Link)`
  width: 170px;
  height: 40px;
  border: 1px solid var(--neutral-color);
  border-radius: 5px;
  font-weight: bold;
  font-size: 16px;
  line-height: 19px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: white;
  background: var(--neutral-color);
`;

export const ButtonGroup = styled.div`
  display: flex;
  padding: 0 1.75rem;
`;
