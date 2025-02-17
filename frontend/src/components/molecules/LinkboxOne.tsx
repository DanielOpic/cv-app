interface LinkboxOneProps {
  item: number;
}

const LinkboxOne: React.FC<LinkboxOneProps> = ({ item }) => {
  return <div className="p-5">{item}</div>;
};

export default LinkboxOne;
