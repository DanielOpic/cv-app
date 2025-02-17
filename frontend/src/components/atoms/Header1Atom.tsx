type Header1AtomProps = {
  text: string;
};

const Header1Atom = ({ text }: Header1AtomProps) => {
  return <h1 className="text-xl font-bold pt-4">{text}</h1>;
};

export default Header1Atom;
