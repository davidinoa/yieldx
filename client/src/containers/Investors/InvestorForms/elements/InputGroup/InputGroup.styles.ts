import styled from "styled-components";
import { Input } from "../TextInput/TextInput.styles";

export const Group = styled.div`
  border: 1px solid var(--border-3);
  display: inline-block;
  border-radius: 4px;
`;

export const Button = styled.button.attrs({ type: "button" })`
  background: #0e1f3b;
  border-radius: 0px 3px 3px 0px;
  height: 40px;
  width: 60px;
  font-weight: bold;
  font-size: 12px;
  text-transform: capitalize;
`;

export const TextInput = styled(Input)`
  display: inline-block;
  width: 280px;
  border: none;
`;
