import React, { FunctionComponent, ReactNode } from "react";

const Button: FunctionComponent<{ children: ReactNode | string }> = ({
  children = "Button",
}) => {
  return <button className="text-red-500">{children}</button>;
};

export default Button;
