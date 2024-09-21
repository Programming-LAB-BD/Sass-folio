import { useLocation } from "react-router-dom";
import DesktopNav from "./DesktopNav";
import MobileNav from "./MobileNav";

export default function Header() {
  const path = useLocation().pathname;
  const currentPath = path.split("/");

  const navItems = [
    {
      name: "Home",
      iconClass: ["fas", "house"],
      navigate: `/${currentPath[currentPath.length - 2]}/`,
    },
    {
      name: "About",
      iconClass: ["fas", "user"],
      navigate: `/${currentPath[currentPath.length - 2]}/about`,
    },
    {
      name: "Services",
      iconClass: ["fas", "gear"],
      navigate: `/${currentPath[currentPath.length - 2]}/services`,
    },
    {
      name: "Portfolio",
      iconClass: ["fas", "briefcase"],
      navigate: `/${currentPath[currentPath.length - 2]}/portfolio`,
    },
    {
      name: "Contact",
      iconClass: ["fas", "envelope"],
      navigate: `/${currentPath[currentPath.length - 2]}/contact`,
    },
  ];

  return (
    <header id="header">
      <DesktopNav navItems={navItems} />
      <MobileNav navItems={navItems} />
    </header>
  );
}
