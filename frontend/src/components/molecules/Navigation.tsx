import LinkAtom from "../atoms/LinkAtom";
import { FaHome, FaUser } from "react-icons/fa"; // Używamy ikon z react-icons

const Navigation = () => {
  return (
    <nav className="flex flex-col space-y-4">
      <LinkAtom href="/" icon={<FaHome />}>
        {" "}
        Strona Główna
      </LinkAtom>
      <LinkAtom href="/about" icon={<FaUser />}>
        {" "}
        O mnie
      </LinkAtom>
    </nav>
  );
};

export default Navigation;
