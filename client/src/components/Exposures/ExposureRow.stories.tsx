import { Meta, Story } from "@storybook/react/types-6-0";
import React from "react";
import { ExposureRow, ExposureRowProps } from "./ExposureRow";

const ExposureRowTemplate: Story<ExposureRowProps> = ({
  identifier,
  marketValue,
  index,
  onUpdate,
  onRemove,
  onAdd
}) => (
  <ExposureRow
    onAdd={onAdd}
    onRemove={onRemove}
    onUpdate={onUpdate}
    identifier={identifier}
    index={index}
    marketValue={marketValue}
  />
);

export const ExposureRowStory = ExposureRowTemplate.bind({});
ExposureRowStory.args = {
  identifier: "Retirement funds - 2022",
  index: "S&P",
  marketValue: 587_382.93,
  onAdd: value => undefined,
  onUpdate: value => undefined,
  onRemove: () => undefined
};

export default {
  component: ExposureRow,
  title: "Components/ExposureRow"
} as Meta;
