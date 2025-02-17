import Text from "../../molecules/Text";

const WelcomeSection = () => {
  // Tablica tekstów
  const texts = ["Witaj na mojej stronie."];

  return (
    <div className="flex flex-col w-full h-full p-5">
      <Text texts={texts} />
    </div>
  );
};

export default WelcomeSection;
