import PageSectionHeader from "../../molecules/PageSectionHeader";
import LinkboxOne from "../../molecules/LinkboxOne";

const experiences = [1, 2, 3];

const ExperienceSection = () => {
  return (
    <div className="flex flex-col w-full h-full p-5">
      <PageSectionHeader text="Doświadczenie" />
      <div>
        {experiences.map((experience, index) => (
          <LinkboxOne key={index} item={experience} />
        ))}
      </div>
    </div>
  );
};

export default ExperienceSection;
