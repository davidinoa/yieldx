import React from "react";
import styled from "styled-components";

const Container = styled.div.attrs({
  role: "option"
})`
  position: relative;
`;

const Root = styled.div`
  width: 1px;
  height: 12px;
  background: var(--white);
`;

const Label = styled.label`
  bottom: 2rem;
  width: max-content;
  position: absolute;
  transform: translateX(-45%);
`;

type Props = {
  label: string;
  selected?: boolean;
};

export default function Tick({ label, selected }: Props) {
  return (
    <Container aria-selected={selected}>
      <Root />
      {selected && (
        <Label>
          <h6>{label}</h6>
        </Label>
      )}
    </Container>
  );
}
