import LinkAtom from "../atoms/LinkAtom";
import { FaHome, FaUser, FaCompass, FaNewspaper } from "react-icons/fa";

const Navigation = () => {
  return (
    <nav className="flex flex-col">
      <LinkAtom href="/" icon={<FaHome />}>
        {" "}
        Home
      </LinkAtom>
      <LinkAtom href="/about" icon={<FaUser />}>
        {" "}
        O mnie
      </LinkAtom>
      <LinkAtom href="/experience" icon={<FaCompass />}>
        {" "}
        Doświadczenie
      </LinkAtom>
      <LinkAtom href="/blog" icon={<FaNewspaper />}>
        {" "}
        Blog
      </LinkAtom>
    </nav>
  );
};

export default Navigation;
