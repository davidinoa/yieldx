import React from "react";
import { Story, Meta } from "@storybook/react/types-6-0";
import { LabeledField, LabeledFieldProps } from "elements/Field/Labeled";

const exampleStyle = {
  width: "600px",
  border: "1px solid white",
  borderRadius: "15px",
  padding: "20px"
};
const TemplateLabeled: Story<LabeledFieldProps> = args => (
  <div style={exampleStyle}>
    <LabeledField {...args} />
  </div>
);
export const FieldLabeled = TemplateLabeled.bind({});
FieldLabeled.args = {
  label: "Total Portfolio Value",
  value: "100,000,000$"
};

export default {
  component: LabeledField,
  title: "Elements/Field.Labeled"
} as Meta;
