import React, { useState } from "react";
// also exported from '@storybook/react' if you can deal with breaking changes in 6.1
import { Meta, Story } from "@storybook/react/types-6-0";
import { Dropdown } from "./Dropdown";

const DropdownTemplate: Story<Parameters<typeof Dropdown>[0]> = args => {
  const [value, setValue] = useState<string>();
  return (
    <Dropdown
      value={value}
      onSelected={setValue}
      name={args.name}
      placeholder={args.placeholder}
      items={args.items}
    />
  );
};

export const DropdownStory = DropdownTemplate.bind({});
DropdownStory.args = {
  name: "test",
  placeholder: "Select one",
  items: [
    {
      value: "mock-1",
      label: "Item 1"
    },
    {
      value: "mock-2",
      label: "Item 2"
    }
  ]
};

export default {
  component: Dropdown,
  title: "elements/Dropdown"
} as Meta;
