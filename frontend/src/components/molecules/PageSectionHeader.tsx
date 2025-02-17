import Header3Atom from "../atoms/Header3Atom";

interface PageSectionHeaderProps {
  text: string;
}

const PageSectionHeader: React.FC<PageSectionHeaderProps> = ({ text }) => {
  return (
    <div className="border-b border-gray-600 mb-2">
      <Header3Atom text={text} />
    </div>
  );
};

export default PageSectionHeader;
