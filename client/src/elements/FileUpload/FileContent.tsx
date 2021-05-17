import React, { useState } from "react";
import { Table } from "elements/Table/Table";
import { ParseResult } from "elements/FileUpload/Parsers";
import styled from "styled-components";
import { Collapse } from "react-bootstrap";
import clsx from "clsx";
import { ChevronDown, ChevronUp } from "elements/Icon";
import { LabeledField } from "elements/Field/Labeled";

const ContentWrapper = styled.div`
  min-width: 300px,
  margin-top: 2rem
  border: 1px solid --var(--border-2);
`;
const FileHeader = styled.div`
  margin: 0 2rem;
  text-align: left;
  margin-bottom: 1rem;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
`;

const FilePreview = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: stretch;
  > * {
    width: 100%;
  }
  nav {
    margin-top: 0;
    margin-bottom: 1rem;
  }
  border: 1px solid rgba(120, 120, 120, 0.6);
  overflow: scroll;
`;
const CollapseToggle = styled.div`
  margin: 1rem;
  cursor: pointer;
  &::hover {
    color: var(--hover);
  }
`;

export function FileContent({ data, meta }: ParseResult) {
  const [open, setOpen] = useState(false);

  return (
    <ContentWrapper className="justify-content-center">
      <CollapseToggle onClick={() => setOpen(!open)}>
        <FileHeader>
          <LabeledField
            label="File"
            reverse
            value={`${meta.name} (${data.length} rows)`}
          />

          {open ? <ChevronUp /> : <ChevronDown />}
        </FileHeader>
      </CollapseToggle>
      <Collapse in={open}>
        <div className={clsx("m-0 p-0")}>
          <Table data={data} />
        </div>
      </Collapse>
    </ContentWrapper>
  );
}

export function FileList({ files }: { files: ParseResult[] }) {
  return (
    <FilePreview>
      {files.reverse().map((file: any) => (
        <FileContent key={file.meta.name} {...file} />
      ))}
    </FilePreview>
  );
}
