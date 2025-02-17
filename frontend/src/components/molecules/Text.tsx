import React from "react";
import ParagraphAtom from "../atoms/ParagraphAtom";

interface TextProps {
  texts: string[];
}

const Text: React.FC<TextProps> = ({ texts }) => {
  return (
    <>
      {texts.map((text, index) => (
        <ParagraphAtom
          key={index}
          className="p-5 text-justify font-light text-white-700"
        >
          {text}
        </ParagraphAtom>
      ))}
    </>
  );
};

export default Text;
