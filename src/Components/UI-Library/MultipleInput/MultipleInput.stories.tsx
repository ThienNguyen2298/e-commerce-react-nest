import React from "react";
import { Story, Meta } from "@storybook/react/types-6-0";
import MultipleInput, { Props } from "./MultipleInput.Component";

export default {
  title: "Input/MultipleInput",
  component: MultipleInput,
  argTypes: {
    separatorType: {
      options: ["BOTH", "ENTER", "SPACE"],
      control: { type: "select" },
      table: {
        type: { summary: "string" },
        defaultValue: { summary: "ENTER" },
      },
    },
    values: {
      table: {
        type: { summary: "Array<string>" },
        defaultValue: { summary: "[]" },
      },
    },
  },
} as Meta<typeof MultipleInput>;

const Template: Story<Props> = (args) => <MultipleInput {...args} />;

export const Primary = Template.bind({});
Primary.args = {
  separatorType: "ENTER",
  values: [],
};

export const Flat = Template.bind({});
