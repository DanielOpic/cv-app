import Link from "next/link";

type LinkAtomProps = {
  href: string;
  children: React.ReactNode;
  icon?: React.ReactNode;
};

const LinkAtom = ({ href, children, icon }: LinkAtomProps) => {
  return (
    <Link
      href={href}
      className="m-0 px-1 py-5 border-b border-gray-500 text-center flex justify-center items-center hover:text-orange-300 w-full transition-all duration-300"
    >
      <div className="flex flex-col items-center space-y-2">
        {" "}
        {icon && <span className="w-5 h-5 text-xl">{icon}</span>}
        <div className="m-0 text-xs">{children}</div>
      </div>
    </Link>
  );
};

export default LinkAtom;
