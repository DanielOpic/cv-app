type Header2AtomProps = {
  text: string;
};

const Header2Atom = ({ text }: Header2AtomProps) => {
  return <h2 className="text-md py-2 text-gray-300">{text}</h2>;
};

export default Header2Atom;
