import React from "react";
import Link from "next/link";

interface SmLinkAtomProps {
  href: string;
  icon: React.ReactElement;
}

const SmLinkAtom: React.FC<SmLinkAtomProps> = ({ href, icon }) => {
  return (
    <Link
      href={href}
      target="_blank"
      className="text-center flex justify-center items-center hover:text-orange-300 w-full py-2 px-1 transition-all duration-300"
    >
      <div className="flex flex-col items-center space-y-2">
        {icon && <span className="w-5 h-5 text-xl">{icon}</span>}
      </div>
    </Link>
  );
};

export default SmLinkAtom;
