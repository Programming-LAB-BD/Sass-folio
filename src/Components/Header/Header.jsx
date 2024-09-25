import { useLocation } from "react-router-dom";
import DesktopNav from "./DesktopNav";
import MobileNav from "./MobileNav";

export default function Header() {
  const path = useLocation().pathname;
  const currentPath = path.split("/");
  const userName =
    currentPath.length < 3
      ? currentPath[currentPath.length - 1]
      : currentPath[currentPath.length - 2];

  const navItems = [
    {
      name: "Home",
      iconClass: ["fas", "house"],
      navigate: `/${userName}/`,
    },
    {
      name: "About",
      iconClass: ["fas", "user"],
      navigate: `/${userName}/about`,
    },
    {
      name: "Services",
      iconClass: ["fas", "gear"],
      navigate: `/${userName}/services`,
    },
    {
      name: "Portfolio",
      iconClass: ["fas", "briefcase"],
      navigate: `/${userName}/portfolio`,
    },
    {
      name: "Contact",
      iconClass: ["fas", "envelope"],
      navigate: `/${userName}/contact`,
    },
  ];

  return (
    <header id="header">
      <DesktopNav navItems={navItems} />
      <MobileNav navItems={navItems} />
    </header>
  );
}
