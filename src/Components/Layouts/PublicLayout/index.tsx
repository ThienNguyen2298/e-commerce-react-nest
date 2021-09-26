import React, { ReactNode } from "react";

import Header from "Components/Header";
import Footer from "Components/Footer";

interface LayoutProps {
  children: ReactNode;
}

const PublicLayout = ({ children }: LayoutProps) => {
  return (
    <div className="w-full h-full">
      <div className="fixed top-0 left-0 right-0">
        <Header />
      </div>
      <div className="min-h-screen h-full flex flex-col justify-between pt-16">
        <div className="h-auto">{children}</div>
        <Footer />
      </div>
    </div>
  );
};

export default PublicLayout;
