import React, { useCallback, useState } from "react";
import { ColAlign, List } from "components/ListPages/List";
import Decimal from "util/Decimal";
import { ActionGroup } from "elements/Button/ActionGroup";
import { Action, Size } from "elements/Button/Action";
import { ReactComponent as Edit } from "assets/svg/edit.svg";
import { ReactComponent as X } from "assets/svg/x.svg";
import { ReactComponent as Plus } from "assets/svg/plus.svg";
import { Input } from "elements/FormikInput/FormikInput.styles";
import { StyledDropdown } from "containers/AssetExplorer/Search/SearchOptionsBar/Dropdowns/DropDowns.styles";
import { Dropdown, Row } from "react-bootstrap";
import styled from "styled-components";
import { NumberInput } from "elements/NumberInput/NumberInput";

type AddRowProps = {
  onAdd: () => void;
};

const StyledRow = styled(Row)`
  border: 1px dashed var(--dark-light-border);
  height: 70px;
  border-radius: 10px;
  .Action {
    font-weight: bold;
    font-size: 14px;
    line-height: 17px;
    color: var(--primary-light);
  }
`;

function AddExposureRow({ onAdd }: AddRowProps) {
  return (
    <StyledRow className="bg-transparent">
      <List.Col align={ColAlign.Center}>
        <Action.Link
          text="Add another exposure"
          icon={<Plus className="mr-2" />}
          onClick={onAdd}
        />
      </List.Col>
    </StyledRow>
  );
}

export type EditExposureRowProps = Partial<ExposureRowData> & {
  onAdd: (data: ExposureRowData) => void;
  onUpdate?: (data: ExposureRowData) => void;
  onCancel: () => void;
};

function ExposureRowEdit({
  onAdd,
  onUpdate,
  onCancel,
  index: exposureIndex,
  identifier: exposureIdentifier,
  marketValue: exposureMarketValue
}: EditExposureRowProps) {
  const isEditing = Boolean(
    exposureIdentifier || exposureIndex || exposureMarketValue
  );
  if (isEditing && !onUpdate)
    throw Error(
      "onUpdate is required if exposure row is given existing values as props"
    );
  const [index, setIndex] = useState(exposureIndex);
  const [marketValue, setMV] = useState(exposureMarketValue);
  const [identifier, setIdentifier] = useState(exposureIdentifier);
  const addExposure = useCallback(() => {
    if (index && marketValue && identifier) {
      onAdd({
        index,
        identifier,
        marketValue
      });
      onCancel();
    } else throw Error("Undefined values");
  }, [onAdd, onCancel, index, identifier, marketValue]);
  const updateExposure = useCallback(() => {
    if (!onUpdate)
      throw Error("onUpdate is undefined but original values were provided");
    if (index && marketValue && identifier) {
      onUpdate({
        index,
        identifier,
        marketValue
      });
      onCancel();
    } else throw Error("Undefined values");
  }, [onUpdate, onCancel, index, identifier, marketValue]);
  return (
    <List.Row>
      <List.Col>
        <Input
          value={identifier}
          placeholder="Identifier"
          onChange={e => {
            setIdentifier(e.target.value);
          }}
        />
      </List.Col>
      <List.Col>
        <StyledDropdown
          data-testid="product-type-dropdown"
          onSelect={(key: string) => setIndex(key)}
        >
          <Dropdown.Toggle
            data-testid="Search-ProductTypeFilter-Toggle"
            id="dropdown-product-type"
          >
            {index || "Select index"}
          </Dropdown.Toggle>
          <Dropdown.Menu>
            <Dropdown.Item eventKey="S&P 500">S&P 500</Dropdown.Item>
            <Dropdown.Item eventKey="NASDAQ 100">NASDAQ 100</Dropdown.Item>
            <Dropdown.Item eventKey="Developed Markets" active>
              Developed Markets
            </Dropdown.Item>
            <Dropdown.Item eventKey="Emerging Markets" active>
              Emerging Markets
            </Dropdown.Item>
            <Dropdown.Item eventKey="US Treasury" active>
              US Treasury
            </Dropdown.Item>
            <Dropdown.Item eventKey="Corporate Bonds, Investment Grade" active>
              Corporate Bonds, Investment Grade
            </Dropdown.Item>
            <Dropdown.Item eventKey="Corporate Bonds, High Yield" active>
              Corporate Bonds, High Yield
            </Dropdown.Item>
            <Dropdown.Item eventKey="Municipal Bonds" active>
              Municipal Bonds
            </Dropdown.Item>
            <Dropdown.Item eventKey="Developed Markets" active>
              Developed Markets
            </Dropdown.Item>
          </Dropdown.Menu>
        </StyledDropdown>
      </List.Col>
      <List.Col>
        <NumberInput
          small
          name="marketValue"
          value={marketValue}
          placeholder="Market value"
          onValueChange={newVal => setMV(newVal)}
        />
      </List.Col>
      <List.Col xs={6}>
        <ActionGroup>
          <Action
            text={isEditing ? "Update" : "Add"}
            size={Size.Large}
            onClick={isEditing ? updateExposure : addExposure}
            disabled={!(index && marketValue && identifier)}
          />
          <Action text="Cancel" inverted size={Size.Large} onClick={onCancel} />
        </ActionGroup>
      </List.Col>
    </List.Row>
  );
}

export type ExposureRowData = {
  identifier: string;
  index: string;
  marketValue: number;
};

export interface ExposureRowProps extends ExposureRowData {
  onAdd: (data: ExposureRowData) => void;
  onUpdate: (data: ExposureRowData) => void;
  onRemove: () => void;
}

export function ExposureRow({
  identifier,
  index,
  marketValue,
  onUpdate,
  onAdd,
  onRemove
}: ExposureRowProps) {
  const [isEditing, setIsEditing] = useState(false);

  const toggleEdit = useCallback(() => setIsEditing(prev => !prev), [
    setIsEditing
  ]);
  if (!isEditing)
    return (
      <List.Row>
        <List.Col label="IDENTIFIER" value={identifier} className="pl-3" />
        <List.Col label="INDEX" value={index} xs={3} align={ColAlign.Center} />
        <List.Col
          label="MARKET VALUE"
          value={`$${Decimal.format(marketValue)}`}
          xs={3}
          align={ColAlign.Center}
        />
        <List.Col xs={6}>
          <ActionGroup>
            <Action
              text="Edit"
              inverted
              size={Size.Large}
              icon={<Edit className="mr-2" />}
              onClick={toggleEdit}
            />
            <Action
              text="Remove"
              inverted
              size={Size.Large}
              icon={<X className="mr-2" />}
              onClick={onRemove}
            />
          </ActionGroup>
        </List.Col>
      </List.Row>
    );

  return (
    <ExposureRowEdit
      onAdd={onAdd}
      onUpdate={onUpdate}
      onCancel={toggleEdit}
      marketValue={marketValue}
      index={index}
      identifier={identifier}
    />
  );
}

ExposureRow.Edit = ExposureRowEdit;
ExposureRow.Add = AddExposureRow;
