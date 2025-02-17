import SmLinkAtom from "../atoms/SmLinkAtom";
import { FaGit, FaLinkedin, FaVolleyballBall } from "react-icons/fa";

const SidebarSmLinks = () => {
  return (
    <div className="flex items-center w-[80%] border border-gray-400 rounded">
      <SmLinkAtom href="https://github.com/DanielOpic" icon={<FaGit />} />
      <SmLinkAtom
        href="https://www.linkedin.com/in/daniel-opic-a019925b"
        icon={<FaLinkedin />}
      />
      <SmLinkAtom href="https://trenujsiate.pl/" icon={<FaVolleyballBall />} />
    </div>
  );
};

export default SidebarSmLinks;
