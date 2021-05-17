import React from "react";
// also exported from '@storybook/react' if you can deal with breaking changes in 6.1
import { Meta, Story } from "@storybook/react/types-6-0";
import { ReactComponent as Edit } from "assets/svg/edit.svg";
import { ReactComponent as X } from "assets/svg/x.svg";
import { ActionGroup, ActionGroupDefaultProps } from "./ActionGroup";
import { Action, ActionGroupSwitchProps, ActionProps, Size } from "./Action";

const SmallSwitchTemplate: Story<ActionGroupSwitchProps> = args => (
  <ActionGroup.Switch {...args} />
);

export const SmallSwitchStory = SmallSwitchTemplate.bind({});
SmallSwitchStory.args = {
  children: [
    <Action.SwitchButton
      selected
      size={Size.Small}
      text="1 years"
      onClick={() => undefined}
    />,
    <Action.SwitchButton
      size={Size.Small}
      text="3 years"
      onClick={() => undefined}
    />,
    <Action.SwitchButton
      size={Size.Small}
      text="5 years"
      onClick={() => undefined}
    />
  ]
};
const SwitchTemplate: Story<ActionGroupSwitchProps> = args => (
  <ActionGroup.Switch {...args} />
);

export const SwitchStory = SwitchTemplate.bind({});
SwitchStory.args = {
  children: [
    <Action.SwitchButton selected text="ANALYTICS" onClick={() => undefined} />,
    <Action.SwitchButton text="POSITIONS" onClick={() => undefined} />,
    <Action.SwitchButton text="ORDERS" onClick={() => undefined} />
  ]
};

const DefaultTemplate: Story<ActionGroupDefaultProps> = args => (
  <div style={{ width: 220 }}>
    <ActionGroup {...args} />
  </div>
);
export const Default = DefaultTemplate.bind({});
Default.args = {
  children: [
    <Action
      text="Edit"
      inverted
      size={Size.Large}
      icon={<Edit className="mr-2" />}
      // eslint-disable-next-line no-console
      onClick={() => console.log("Editing.")}
    />,
    <Action
      text="Remove"
      inverted
      size={Size.Large}
      icon={<X className="mr-2" />}
      // eslint-disable-next-line no-console
      onClick={() => console.log("Removed")}
    />
  ]
};

const ActionTemplate: Story<ActionProps> = args => <Action {...args} />;
export const ActionStory = ActionTemplate.bind({});
ActionStory.args = {
  size: Size.Large,
  text: "Add"
};

export default {
  component: ActionGroup,
  title: "Elements/ActionGroup"
} as Meta;
