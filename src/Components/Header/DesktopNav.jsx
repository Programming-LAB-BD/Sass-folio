import LogoArea from "./LogoArea";
import NavItem from "./NavItem";

export default function DesktopNav({ navItems }) {
  const Items = [...navItems];
  return (
    <div id="desktop_nav" className="hidden md:block bg-transparent">
      <nav className="fixed top-0 left-0 right-0 w-screen bg-primary dark:bg-dark_primary flex justify-between py-2 border-b-[5px] border-secondary dark:border-dark_secondary z-10">
        <LogoArea width={"max-w-[270px]"} />
        <div id="nav-area" className="w-[60%] max-w-[600px] p-[6px] pr-6">
          <ul className="flex justify-evenly items-center">
            {Items.map((item, index) => (
              <NavItem
                name={item.name}
                iconClass={item.iconClass}
                navigate={item.navigate}
                index={index}
                key={index}
              />
            ))}
          </ul>
        </div>
      </nav>
    </div>
  );
}
