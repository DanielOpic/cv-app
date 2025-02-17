import PageSectionHeader from "../../molecules/PageSectionHeader";
import Text from "../../molecules/Text";

const WelcomeSection = () => {
  // Tablica tekstów
  const texts = [
    "Jestem doświadczonym programistą, który szuka firmy do stałej, długoletniej współpracy. Posiadam szeroką wiedzę zarówno w backendzie, jak i frontendzie, dzięki czemu doskonale rozumiem cykl życia aplikacji. Specjalizuję się w projektowaniu technicznym i tworzeniu aplikacji webowych, systemów CMS, CRM, ERP oraz rozwiązań eCommerce.",
    "Mam doświadczenie związane ze współpracą w małych i średnich zespołach, w tym także międzynarodowych. Kładę duży nacisk na użyteczność aplikacji, dbając nie tylko o wydajność i bezpieczeństwo aplikacji, ale także o pozytywne doświadczenia użytkowników oraz estetyczny i intuicyjny interfejs.",
  ];

  return (
    <div className="flex flex-col w-full h-full p-5">
      <PageSectionHeader text="O mnie" />
      <Text texts={texts} />
    </div>
  );
};

export default WelcomeSection;
