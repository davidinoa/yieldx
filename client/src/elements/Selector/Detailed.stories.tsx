import React from "react";
// also exported from '@storybook/react' if you can deal with breaking changes in 6.1
import { Meta, Story } from "@storybook/react/types-6-0";
import { Detailed } from "./Detailed";
import { Action } from "../Button/Action";

const DetailedTemplate: Story<Parameters<typeof Detailed>[0]> = args => (
  <Detailed {...args} />
);

export const DetailedStory = DetailedTemplate.bind({});
DetailedStory.args = {
  title: "Reweight",
  children: [
    <span>
      To increase or decrease position sizes within your existing portfolio to
      get you closer to your yield, risk or diversification goals
    </span>,
    <Action onClick={() => console.log("Selected")} inverted text="Select" />
  ]
};

export default {
  component: Detailed,
  title: "Selector/Detailed"
} as Meta;
