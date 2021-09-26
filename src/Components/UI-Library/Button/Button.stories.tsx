import React, { ReactNode } from "react";
import { Story, Meta } from "@storybook/react/types-6-0";
import Button from "./Button.Component";

export default {
  title: "Button",
  component: Button,
} as Meta<typeof Button>;

const Template: Story<{ children: ReactNode | string }> = ({
  children = "Button",
}) => <button>{children}</button>;

export const Primary = Template.bind({});

export const Flat = Template.bind({});
