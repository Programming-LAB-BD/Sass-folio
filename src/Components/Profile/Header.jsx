import Cookies from "js-cookie";
import { useNavigate } from "react-router-dom";

export default function Header() {
  const navigate = useNavigate();

  const handleLogout = () => {
    Cookies.remove("saas-folio");
    navigate("/");
  };

  return (
    <header className="w-full bg-primary dark:bg-dark_primary fixed top-0">
      <nav className="w-10/12 lg:w-8/12 flex items-center justify-between mx-auto py-4 text-secondary dark:text-dark_secondary">
        <div className="text-xl md:text-3xl">Logo.</div>
        <div className="nav">
          <div
            className="rounded-full px-8 py-2 bg-secondary dark:bg-dark_secondary text-primary dark:text-dark_primary flex items-center justify-center relative cursor-pointer text-sm md:text-2xl font-semibold"
            onClick={handleLogout}
          >
            Logout
          </div>
        </div>
      </nav>
    </header>
  );
}
