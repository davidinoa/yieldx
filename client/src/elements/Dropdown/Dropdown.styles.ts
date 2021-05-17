import styled from "styled-components";
import { Dropdown } from "react-bootstrap";

export const DropdownContainer = styled(Dropdown)`
  & * {
    width: 100%;
    color: var(--text);
  }
  &.show > button.dropdown-toggle,
  &.show > button.dropdown-toggle:active {
    background-color: var(--dark-light-3) !important;
    border-color: var(--dark-light-border) !important;
  }
`;

export const Toggle = styled(Dropdown.Toggle)`
  height: 40px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  border-radius: 4px;
  font-weight: bold;
  font-size: 15px;
  padding-top: 12px;
  padding-bottom: 12px;
  background-color: var(--dark-light-2);
  border-color: var(--dark-light-border);
  &:hover,
  &:focus,
  &:active {
    background-color: var(--dark-light-3) !important;
    border-color: var(--dark-light-border) !important;
  }
  &:focus {
    box-shadow: 0 0 0 0.2rem rgb(0, 0, 0, 0.25) !important;
  }
`;

export const Menu = styled(Dropdown.Menu)`
  margin: 0;
  padding: 0;
  max-height: 200px;
  color: var(--text);
  background: var(--dark-light-2);
  overflow: auto;
`;

export const Item = styled(Dropdown.Item)`
  height: 40px;
  &.selected {
    background-color: var(--dark-light-3);
  }
  &:hover {
    color: white;
    background-color: var(--dark-light-3);
  }
`;
