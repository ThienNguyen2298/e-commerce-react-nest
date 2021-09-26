import React, { FunctionComponent, ReactNode } from "react";

const Button: FunctionComponent<{ children: ReactNode | string }> = ({
  children = "Button",
}) => {
  return <button style={{ border: "1px solid red" }}>{children}</button>;
};

export default Button;
