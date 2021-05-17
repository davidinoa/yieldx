import React from "react";
import { Story, Meta } from "@storybook/react/types-6-0";
import { Field, FieldProps } from "elements/Field/Field";

const exampleStyle = {
  margin: "20%",
  border: "1px solid white",
  borderRadius: 10
};

const Template: Story<FieldProps> = args => (
  <div style={exampleStyle}>
    <Field {...args} />
  </div>
);

export const Primary = Template.bind({});
Primary.args = {
  heading: "Field Heading",
  subheading: "Sub heading",
  step: 2,
  tooltipContent: "Help text"
};

export default {
  component: Field,
  title: "Elements/Field"
} as Meta;
