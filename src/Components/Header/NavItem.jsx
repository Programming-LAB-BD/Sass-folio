import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link, useLocation } from "react-router-dom";

export default function NavItem({
  name,
  iconClass,
  navigate,
  index,
  handleCloseBtn,
}) {
  const currentPath = useLocation().pathname;

  return (
    <li
      className={`${
        currentPath === navigate
          ? "bg-secondary dark:bg-dark_secondary text-primary dark:text-dark_primary hover:after:hidden md:rounded-md"
          : "bg-primary dark:bg-dark_primary text-secondary dark:text-dark_secondary"
      } p-3 relative after:bg-secondary dark:after:bg-dark_secondary after:absolute after:bottom-0 after:h-1 after:w-0 after:left-[43%] after:transition-all after:duration-500 after:rounded-[0.5px] hover:after:w-[10%] hover:after:scale-x-[9]`}
      key={index}
    >
      <Link
        to={navigate}
        className="flex gap-1 items-center"
        onClick={handleCloseBtn}
      >
        <FontAwesomeIcon icon={iconClass} />
        <span className="ml-2 font-semibold">{name}</span>
      </Link>
    </li>
  );
}
