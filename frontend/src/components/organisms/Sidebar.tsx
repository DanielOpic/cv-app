import { useState } from "react";

import Navigation from "../molecules/Navigation";
import SidebarHeader from "../molecules/SidebarHeader";

const Sidebar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  return (
    <>
      <aside
        className={`${
          isMenuOpen ? "" : "aside-hidden"
        } aside text-white transition-all duration-300 bg-zinc-500 fixed top-0 left-0 bottom-0 z-9 flex-col-reverse lg:flex lg:flex-row`}
      >
        <div className="w-full lg:w-[80px] bg-zinc-700 flex-shrink-0">
          <Navigation />
        </div>
        <SidebarHeader />
      </aside>
      <button
        className="absolute top-4 right-4 lg:hidden text-white z-10"
        onClick={toggleMenu}
      >
        &#9776;
      </button>
    </>
  );
};

export default Sidebar;
