import React, { ReactNode } from "react";
import { Story, Meta } from "@storybook/react/types-6-0";
import Button from "./Button.Component";

export default {
  title: "General/Button",
  component: Button,
  argTypes: {
    children: {
      table: {
        type: { summary: "ReactNode | string" },
      },
    },
  },
} as Meta<typeof Button>;

const Template: Story<{ children: ReactNode | string }> = (args) => (
  <Button {...args} />
);

export const Primary = Template.bind({});
Primary.args = {
  children: "Button",
};

export const Ghost = Template.bind({});

export const Dashed = Template.bind({});

export const Link = Template.bind({});

export const Default = Template.bind({});
