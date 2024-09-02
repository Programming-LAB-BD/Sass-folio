import { useContext } from "react";
import DSIPContext from "../../../Contexts/DashboardSidebarIsOpenContext";
import Navbar from "./Navbar";
import Sidebar from "./Sidebar";

const navitems = [
  {
    name: "Dashboard",
    icon: "fa-gauge-high",
  },
  {
    name: "Home",
    icon: "fa-house",
  },
  {
    name: "About",
    icon: "fa-user",
  },
  {
    name: "Services",
    icon: "fa-gear",
  },
  {
    name: "Portfolio",
    icon: "fa-briefcase",
  },
  {
    name: "Contact",
    icon: "fa-envelope",
  },
];

export default function Header() {
  const { mdIsOpen, setMdIsOpen } = useContext(DSIPContext);

  return (
    <header>
      <Navbar />
      <div
        id="outside_of_sidebar"
        className={`fixed w-screen h-screen bg-full_screen_shadow dark:bg-dark_full_screen_shadow z-40 transition-all duration-500 
          ${!mdIsOpen && "hidden"} md:hidden`}
        onClick={() => setMdIsOpen(false)}
      ></div>

      <Sidebar navitems={navitems} />
    </header>
  );
}
