type ImageAtomProps = {
  src: string;
  alt: string;
  className?: string;
};

const ImageAtom = ({ src, alt, className }: ImageAtomProps) => {
  return <img src={src} alt={alt} className={className} />;
};

export default ImageAtom;
