import React from "react";
import { Story, Meta } from "@storybook/react/types-6-0";
import ErrorMessage, { Props } from "./ErrorMessage.Component";

export default {
  title: "General/ErrorMessage",
  component: ErrorMessage,
  argTypes: {},
} as Meta<typeof ErrorMessage>;

const Template: Story<Props> = (args) => <ErrorMessage {...args} />;

export const Default = Template.bind({});
Default.args = {};
