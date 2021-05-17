import styled from "styled-components";

export const Root = styled.div.attrs({})``;

export const Button = styled.button`
  border-radius: 4px;
  padding: 10px 35px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-weight: bold;
  color: var(--text);
  font-size: 15px;
  line-height: 18px;
  min-width: 135px;
`;
export const SaveButton = styled(Button).attrs(
  (props: { onClick: unknown; "data-testid"?: string }) => ({
    ...props
  })
)`
  background: var(--primary);
`;

export const CancelButton = styled(Button).attrs(
  (props: { onClick: unknown }) => ({
    ...props
  })
)`
  border: 1px solid var(--light);
  background: transparent;
`;

export const Label = styled.label`
  text-align: left;
  display: block;
  font-weight: bold;
  font-size: 11px;
  line-height: 13px;
  letter-spacing: 0.2em;
  text-transform: uppercase;
`;
