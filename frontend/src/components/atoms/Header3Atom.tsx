type Header3AtomProps = {
  text: string;
};

const Header3Atom = ({ text }: Header3AtomProps) => {
  return <h3 className="text-lg p-2 text-white-500">{text}</h3>;
};

export default Header3Atom;
