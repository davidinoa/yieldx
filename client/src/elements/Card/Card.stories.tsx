import React, { useState } from "react";
import { Card, CardProps } from "elements/Card/Card";
// also exported from '@storybook/react' if you can deal with breaking changes in 6.1
import { Story, Meta } from "@storybook/react/types-6-0";

const Template: Story<CardProps> = args => <Card {...args} />;
function Toggle() {
  const [checked, setChecked] = useState(false);
  return (
    <label
      style={{
        display: "flex",
        justifyContent: "center",
        marginLeft: "1rem",
        lineHeight: "1em"
      }}
    >
      Toggle Checkbox
      <input
        style={{ marginLeft: "0.75rem" }}
        name="isGoing"
        type="checkbox"
        checked={checked}
        onChange={() => setChecked(!checked)}
      />
    </label>
  );
}

export const Primary = Template.bind({});
Primary.args = {
  title: "Card Title Prop",
  tooltipContent: "Tooltip Help Text",
  toggle: <Toggle />
};

export default {
  component: Card,
  title: "Elements/Card"
} as Meta;
