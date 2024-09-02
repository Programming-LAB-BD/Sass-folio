import { useContext } from "react";
import DSIPContext from "../../../Contexts/DashboardSidebarIsOpenContext";
import LogoArea from "./LogoArea";
import LogoutArea from "./LogoutArea";
import Navigations from "./Navigations";

export default function Sidebar({ navitems }) {
  const { isOpen } = useContext(DSIPContext);

  return (
    <aside
      id="sidebar"
      className={`w-[45%] max-w-[260px] min-h-screen fixed top-0 left-0 z-50 bg-primary dark:bg-dark_primary text-secondary dark:text-dark_secondary flex flex-col gap-12 py-10 px-3 translate-x-[-999px] md:translate-x-0 transition-all duration-500 ${
        !isOpen && "custom_collapse max-w-[60px]"
      } `} // custom_collapse
    >
      <div className="close absolute top-6 right-4 text-xl cursor-pointer md:hidden">
        <i id="close" className="fa-solid fa-x"></i>
      </div>

      <LogoArea classes="logo_area font-medium text-xl pl-2 md:hidden" />

      <Navigations navitems={navitems} />

      <LogoutArea />
    </aside>
  );
}
