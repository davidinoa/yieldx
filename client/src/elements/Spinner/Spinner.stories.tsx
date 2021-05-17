import React from "react";
import { Spinner, SpinnerProps } from "elements/Spinner/Spinner";
// also exported from '@storybook/react' if you can deal with breaking changes in 6.1
import { Story, Meta } from "@storybook/react/types-6-0";

const Template: Story<SpinnerProps> = args => <Spinner {...args} />;

export const Primary = Template.bind({});
Primary.args = {};

export default {
  component: Spinner,
  title: "Elements/Spinner"
} as Meta;
