import React, { useState } from "react";
import { Story, Meta } from "@storybook/react/types-6-0";
import SimpleText, { Props } from "./SimpleText.Component";

export default {
  title: "Input/SimpleText",
  component: SimpleText,
  argTypes: {},
} as Meta<typeof SimpleText>;

const Template: Story<Props> = (args) => {
  const [value, setValue] = useState("");
  const change = (e: any) => {
    setValue(e.target.value);
  };
  return <SimpleText {...args} onChange={change} value={value} />;
};

export const Default = Template.bind({});
Default.args = {
  allowClear: true,
};
