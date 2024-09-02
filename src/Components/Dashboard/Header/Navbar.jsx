import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useContext } from "react";
import DSIPContext from "../../../Contexts/DashboardSidebarIsOpenContext";
import LogoArea from "./LogoArea";

export default function Navbar() {
  const { setIsOpen, setMdIsOpen } = useContext(DSIPContext);

  const handleOpen = () => {
    setIsOpen((prev) => !prev);
    setMdIsOpen(true);
  };

  return (
    <nav className="bg-primary dark:bg-dark_primary fixed top-0 left-0 w-full z-50 md:z-[60]">
      <div className="navigation text-secondary dark:text-dark_secondary max-w-[60%] flex gap-4 p-2 justify-start items-center">
        <div
          id="iii_dot"
          className="p-1 px-3 text-xl border border-secondary dark:border-dark_secondary rounded cursor-pointer"
          onClick={handleOpen}
        >
          <FontAwesomeIcon icon="fa-solid fa-bars" />
        </div>
        <LogoArea classes="logo_area font-medium text-xl md:ml-4 py-2" />
      </div>
    </nav>
  );
}
