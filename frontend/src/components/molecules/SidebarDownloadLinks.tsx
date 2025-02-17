import DownloadLinkAtom from "../atoms/DownloadLinkAtom";

const SidebarDownloadLinks = () => {
  return (
    <div className="p-4 w-full">
      <DownloadLinkAtom
        href="/assets/cv/daniel_opic_cv_pl.pdf"
        download="Daniel Opic CV.pdf"
      >
        Pobierz CV
      </DownloadLinkAtom>
    </div>
  );
};

export default SidebarDownloadLinks;
