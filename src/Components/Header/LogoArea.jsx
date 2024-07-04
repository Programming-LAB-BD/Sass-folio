import { Link } from "react-router-dom";
import black_logo from "/img/black_logo.png";

export default function LogoArea({ width, handleCloseBtn }) {
  return (
    <div id="logo-area" className={width}>
      <Link to="/" onClick={handleCloseBtn}>
        <img
          src={black_logo}
          alt="Programming LAB BD"
          className="p-2 ml-6 dark:invert"
        />
      </Link>
    </div>
  );
}
