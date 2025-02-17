import LinkAtom from "../atoms/LinkAtom";
import { FaHome, FaUser } from "react-icons/fa";

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
    </nav>
  );
};

export default Navigation;
