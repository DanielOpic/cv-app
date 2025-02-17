import Sidebar from "../../organisms/Sidebar";
import { ReactNode } from "react";

type MainLayoutProps = {
  children: ReactNode;
};

const MainLayout = ({ children }: MainLayoutProps) => {
  return (
    <div className="min-h-screen flex">
      <Sidebar />
      <main className="bg-zinc-800 text-white w-full lg:w-[100%] p-8 ml-0 lg:ml-[360px]">
        {children}
      </main>
    </div>
  );
};

export default MainLayout;
