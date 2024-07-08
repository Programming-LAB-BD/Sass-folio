import DesktopNav from "./DesktopNav";
import MobileNav from "./MobileNav";

const navItems = [
  {
    name: "Home",
    iconClass: ["fas", "house"],
    navigate: "/1",
  },
  {
    name: "About",
    iconClass: ["fas", "user"],
    navigate: "/1/about",
  },
  {
    name: "Services",
    iconClass: ["fas", "gear"],
    navigate: "/1/services",
  },
  {
    name: "Portfolio",
    iconClass: ["fas", "briefcase"],
    navigate: "/1/portfolio",
  },
  {
    name: "Contact",
    iconClass: ["fas", "envelope"],
    navigate: "/1/contact",
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
