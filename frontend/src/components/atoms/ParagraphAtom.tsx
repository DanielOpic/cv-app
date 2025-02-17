type ParagraphAtomProps = {
  children: string;
  className?: string;
};

const ParagraphAtom = ({ children, className }: ParagraphAtomProps) => {
  return <h1 className={className}>{children}</h1>;
};

export default ParagraphAtom;
