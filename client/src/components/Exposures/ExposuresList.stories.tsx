import React, { useState } from "react";
// also exported from '@storybook/react' if you can deal with breaking changes in 6.1
import { Meta, Story } from "@storybook/react/types-6-0";
import { ExposureRowData } from "./ExposureRow";
import { ExposuresList } from "./ExposuresList";

const ExposuresListTemplate: Story<{ rows: ExposureRowData[] }> = args => {
  const [exposures, setExposures] = useState(args.rows);
  return (
    <ExposuresList exposures={exposures} onExposureChanged={setExposures} />
  );
};

export const ExposuresListStory = ExposuresListTemplate.bind({});
ExposuresListStory.args = {
  rows: [
    {
      identifier: "Retirement funds - 2021",
      index: "S&P",
      marketValue: 587_382.93
    }
  ]
};

export default {
  component: ExposuresList,
  title: "Components/ExposuresList"
} as Meta;
