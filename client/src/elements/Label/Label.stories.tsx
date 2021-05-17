import React from "react";
import { Meta, Story } from "@storybook/react/types-6-0";
import { Label, LabelProps } from "./Label";

const LabelTemplate: Story<Parameters<typeof Label>[0]> = (
  args: LabelProps
) => <Label {...args} />;

export const LabelStory = LabelTemplate.bind({});
LabelStory.args = {
  text: "Adding",
  color: "green"
};

export default {
  component: Label,
  title: "Elements/Label"
} as Meta;
