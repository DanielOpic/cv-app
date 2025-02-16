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
      className="text-center flex justify-center items-center hover:text-gray-300 w-full py-2 px-1" // Padding 10px góra-dół, 5px prawo-lewo
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
