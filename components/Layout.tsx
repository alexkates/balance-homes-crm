import React, { ReactNode } from "react";
import Nav from "./sidebar/Nav";

type LayoutProps = {
  children: ReactNode;
};

const Layout: React.FC<LayoutProps> = ({ children }: LayoutProps) => {
  return (
    <div className="flex">
      <Nav />
      <div className="container m-8">{children}</div>
    </div>
  );
};

export default Layout;
