import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useContext } from "react";
import DSIPContext from "../../../Contexts/DashboardSidebarIsOpenContext";

export default function LogoutArea() {
  const { isOpen } = useContext(DSIPContext);

  return (
    <div className="absolute bottom-8 w-[90%]">
      <div
        className={`flex items-center justify-start w-full border-t border-secondary dark:border-dark_secondary py-2 px-4 transition-all duration-500 ${
          !isOpen && "max-w-[70%] pl-2"
        }`}
      >
        <a id="logout" href="#">
          <FontAwesomeIcon
            icon="fa-solid fa-circle-user"
            className="text-xl mr-1"
          />
          <span className={`${!isOpen && "hidden"}`}>Logout</span>
        </a>
      </div>
    </div>
  );
}
