import Header1Atom from "../atoms/Header1Atom";
import Header2Atom from "../atoms/Header2Atom";
import ImageAtom from "../atoms/ImageAtom";

const SidebarHeader = () => {
  return (
    <>
      <ImageAtom
        src="/assets/img/my.jpg"
        alt="Daniel Opic"
        className="w-36 h-36 rounded-full mt-5"
      />
      <Header1Atom text="Daniel Opic" />
      <Header2Atom text="fullstack developer" />
    </>
  );
};

export default SidebarHeader;
