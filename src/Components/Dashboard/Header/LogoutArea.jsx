import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function LogoutArea() {
  return (
    <div className="logout absolute bottom-8 w-[90%]">
      <div className="shape flex items-center justify-start w-full border-t border-secondary dark:border-dark_secondary py-2 px-4">
        <a id="logout" href="#">
          <FontAwesomeIcon
            icon="fa-solid fa-circle-user"
            className="text-xl mr-1"
          />
          <span>Logout</span>
        </a>
      </div>
    </div>
  );
}
