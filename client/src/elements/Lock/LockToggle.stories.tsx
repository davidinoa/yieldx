import React from "react";
import { Meta, Story } from "@storybook/react/types-6-0";
import { LockToggle, LockToggleProps } from "./LockToggle";

const LockToggleTemplate: Story<Parameters<typeof LockToggle>[0]> = (
  args: LockToggleProps
) => <LockToggle {...args} />;

export const LockToggleStory = LockToggleTemplate.bind({});
LockToggleStory.args = {
  disabled: false,
  defaultLocked: true,
  onChange: () => undefined
};

export default {
  component: LockToggle,
  title: "Elements/LockToggle"
} as Meta;
