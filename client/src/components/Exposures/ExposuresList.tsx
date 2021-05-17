import React, { Dispatch, SetStateAction, useCallback, useState } from "react";
import rfdc from "rfdc";
import { v4 as uuidv4 } from "uuid";
import { List } from "../ListPages/List";
import { ExposureRow, ExposureRowData } from "./ExposureRow";

const clone = rfdc();

type ExposuresListProps = {
  exposures: ExposureRowData[];
  onExposureChanged: Dispatch<SetStateAction<ExposureRowData[]>>;
};

export function ExposuresList({
  exposures,
  onExposureChanged
}: ExposuresListProps) {
  const [editRows, setEditRows] = useState<JSX.Element[]>([]);

  const cancelEdit = useCallback(
    (idx: number) => () =>
      setEditRows(prev => prev.filter((it, i) => i !== idx)),
    [setEditRows]
  );
  const addExposure = useCallback(
    (data: ExposureRowData) => {
      onExposureChanged(prev => [...prev, data]);
    },
    [onExposureChanged]
  );
  const updateExposure = useCallback(
    (idx: number) => (data: ExposureRowData) =>
      onExposureChanged(prev => {
        const copy = clone(prev);
        copy[idx] = data;
        return copy;
      }),
    [onExposureChanged]
  );
  const addEditRow = useCallback(() => {
    setEditRows(prev => [
      ...prev,
      <ExposureRow.Edit
        key={uuidv4()}
        onCancel={cancelEdit(prev.length)}
        onAdd={addExposure}
      />
    ]);
  }, [setEditRows, addExposure, cancelEdit]);

  const removeExposure = useCallback(
    (idx: number) => () =>
      onExposureChanged(prev => {
        return prev.filter((it, i) => i !== idx);
      }),
    [onExposureChanged]
  );

  return (
    <List>
      {exposures.map(({ identifier, index, marketValue }, i) => (
        <ExposureRow
          key={JSON.stringify(identifier + index + marketValue + i)}
          identifier={identifier}
          index={index}
          onRemove={removeExposure(i)}
          marketValue={marketValue}
          onAdd={addExposure}
          onUpdate={updateExposure(i)}
        />
      ))}
      {editRows}
      <ExposureRow.Add onAdd={addEditRow} />
    </List>
  );
}
