import React, { ReactNode } from "react";

type MainLayoutProps = {
  children: ReactNode;
};

const MainLayout = ({ children }: MainLayoutProps) => {
  return (
    <div className="min-h-screen bg-gray-100">
      <header className="bg-blue-500 p-4 text-white">My CV</header>
      <main className="p-8">{children}</main>
    </div>
  );
};

export default MainLayout;
