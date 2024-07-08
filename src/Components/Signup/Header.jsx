import { Link } from "react-router-dom";

export default function Header({ hrefProps, name }) {
  return (
    <header className="w-full bg-primary dark:bg-dark_primary">
      <nav className="w-10/12 lg:w-8/12 flex items-center justify-between mx-auto py-4 text-secondary dark:text-dark_secondary">
        <div className="text-xl md:text-3xl">Logo.</div>
        <div className="nav">
          <Link
            to={hrefProps}
            className="rounded-3xl bg-secondary dark:bg-dark_secondary text-primary dark:text-dark_primary text-sm md:text-2xl shadow-[inset_2px_2px_10px_rgba(0,0,0,0.6)] px-6 md:px-8 py-2 flex items-center justify-center font-semibold"
          >
            {name}
          </Link>
        </div>
      </nav>
    </header>
  );
}
