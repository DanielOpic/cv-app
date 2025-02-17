import Link from "next/link";
import { FaDownload } from "react-icons/fa";

type DownloadLinkAtomProps = {
  href: string;
  children: React.ReactNode;
  download?: string;
};

const DownloadLinkAtom = ({
  href,
  children,
  download,
}: DownloadLinkAtomProps) => {
  return (
    <Link
      href={href}
      {...(download ? { download } : {})}
      className="text-center flex justify-center items-center w-full mt-5 py-2 px-1 transition-all duration-300 border border-gray-400 text-gray-200 rounded-xl block"
    >
      <FaDownload className="mr-2" />
      <div className="text-lg font-bold">{children}</div>
    </Link>
  );
};

export default DownloadLinkAtom;
