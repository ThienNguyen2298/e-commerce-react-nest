import React, { ReactNode } from "react";

import "./index.scss";

export interface LayoutProps {
  children: ReactNode;
}

const PrivateLayout = ({ children }: LayoutProps) => {
  return (
    <div className="pri-layout-container">
      {/* TODO: Header */}
      <div className="pri-layout-body">{children}</div>
      {/* TODO: Footer */}
    </div>
  );
};

export default PrivateLayout;
