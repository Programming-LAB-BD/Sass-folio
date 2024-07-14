import { useRef } from "react";

export default function Header() {
  const childrenRef = useRef();

  const handleOpenChildren = () => {
    childrenRef.current.classList.toggle("hidden");
  };

  return (
    <header className="w-full bg-primary dark:bg-dark_primary fixed top-0">
      <nav className="w-10/12 lg:w-8/12 flex items-center justify-between mx-auto py-4 text-secondary dark:text-dark_secondary">
        <div className="text-xl md:text-3xl">Logo.</div>
        <div className="nav">
          <div
            className="rounded-full w-[35px] h-[35px] bg-secondary dark:bg-dark_secondary text-primary dark:text-dark_primary flex items-center justify-center relative cursor-pointer"
            onClick={handleOpenChildren}
          >
            pic
            <div
              className="w-[200px] absolute bg-secondary dark:bg-dark_secondary top-12 -right-2 rounded-lg hidden drop-shadow-xl after:w-4 after:h-4 after:bg-secondary dark:after:bg-dark_secondary after:absolute after:-top-2 after:right-4 after:rotate-45 transition-all duration-300"
              ref={childrenRef}
            >
              <ul className="p-4">
                <li className="py-1 px-2 rounded-md my-1 bg-white text-gray-900">
                  <a href="#">Home</a>
                </li>
                <li className="py-1 px-2 rounded-md my-1 bg-white text-gray-900">
                  <a href="#">About</a>
                </li>
                <li className="py-1 px-2 rounded-md my-1 bg-white text-gray-900">
                  <a href="#">Service</a>
                </li>
                <li className="py-1 px-2 rounded-md my-1 bg-white text-gray-900">
                  <a href="#">Contact</a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </nav>
    </header>
  );
}
