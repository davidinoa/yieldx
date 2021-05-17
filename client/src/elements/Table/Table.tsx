/* eslint-disable react/no-array-index-key */
import { LabeledField } from "elements/Field/Labeled";
import React from "react";
import Pagination from "elements/Pagination/Pagination";
import { ListContainer } from "components/ListPages/ListPages.styles";
import usePagination from "hooks/usePagination";
import { Col, Row } from "react-bootstrap";
import styled from "styled-components";

interface HeaderMap {
  [k: string]: number;
}

interface DataObject {
  [key: string]: any;
}
type DataValues = Array<any>;
type DataPoint = DataValues | DataObject;
type DataSet = DataPoint[];
function getHeaders(row: DataPoint): HeaderMap {
  if (row.constructor.name === "Object") {
    return Object.fromEntries(
      Object.keys(row).map((k: string, i: number) => [k, i])
    ) as HeaderMap;
  }
  return Object.fromEntries(
    (row as DataValues).map((_row: any, i: number) => [`${i}`, i])
  ) as HeaderMap;
}
function safeGetCell(data: DataPoint, header: any): string {
  const res =
    data instanceof Array ? data[header] : (data as DataObject)[`${header}`];
  return typeof res === "string" ? res : JSON.stringify(res);
}

const ListRow = styled(Row)`
  border: 1px solid var(--dark);
  border-radius: 4px;
  padding: 0.25rem 0.5rem;

  > * {
    justify-content: space-between;
    margin-right: 1rem;
  }
  margin-bottom: 0.5rem;
`;

function DataRow(props: { data: DataPoint; headers: string[] }) {
  const { data, headers } = props;
  const isArray = data instanceof Array;
  return (
    <ListRow>
      {headers.map((header, col) => (
        <LabeledField
          key={`${header}-${col}`}
          label={header}
          value={safeGetCell(data, isArray ? col : header)}
        />
      ))}
    </ListRow>
  );
}

export function Table({
  data = [],
  headers
}: {
  data: DataSet;
  headers?: string[];
}) {
  const pageSize = 10;
  const [current, total, handleChange] = usePagination(data, pageSize);
  const cleanData = data instanceof Array ? data : Object.entries(data);
  const orderedHeaders: [string, number][] =
    headers?.map((col, i) => [col, i]) ||
    Object.entries(
      cleanData.reduce(
        (res: HeaderMap, row) => ({ ...res, ...getHeaders(row) }),
        {} as HeaderMap
      )
    );
  const cleanHeaders = orderedHeaders
    .sort((headerA, headerB) => headerA[1] - headerB[1])
    .map(entry => entry[0]);
  return (
    <div>
      <ListContainer>
        <Col>
          <Pagination
            total={total}
            current={current}
            handleChange={handleChange}
          />
        </Col>
        {cleanData
          .slice((current - 1) * pageSize, current * pageSize)
          .map((row, i) => (
            // eslint-disable-next-line react/no-array-index-key
            <DataRow key={`${i}`} data={row} headers={cleanHeaders} />
          ))}
      </ListContainer>
    </div>
  );
}
