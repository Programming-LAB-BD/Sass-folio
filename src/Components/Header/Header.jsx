import DesktopNav from "./DesktopNav";
import MobileNav from "./MobileNav";

const navItems = [
  {
    name: "Home",
    iconClass: ["fas", "house"],
    navigate: "/",
  },
  {
    name: "About",
    iconClass: ["fas", "user"],
    navigate: "/about",
  },
  {
    name: "Services",
    iconClass: ["fas", "gear"],
    navigate: "/services",
  },
  {
    name: "Portfolio",
    iconClass: ["fas", "briefcase"],
    navigate: "/portfolio",
  },
  {
    name: "Contact",
    iconClass: ["fas", "envelope"],
    navigate: "/contact",
  },
];

export default function Header() {
  return (
    <header id="header">
      <DesktopNav navItems={navItems} />
      <MobileNav navItems={navItems} />
    </header>
  );
}
