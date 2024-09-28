import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function LogoController({ data }) {
  const { isOpen, setIsOpen, name, image_src, text } = data;

  const handleClosePreview = (e) => {
    e.preventDefault();
    setIsOpen(false);
  };

  return (
    <>
      <div
        className={`fixed ${
          !isOpen && "hidden"
        } top-0 left-0 insert-0 bg-gray-600 bg-opacity-50 overflow-y-auto h-full w-full z-40`}
        id="modal"
      ></div>
      <div
        className={`fixed ${
          !isOpen && "hidden"
        } top-10 left-0 md:left-[20%] md:max-w-[50%] flex flex-col justify-between mx-auto p-5 border border-secondary dark:border-dark_secondary w-full shadow-lg rounded-md bg-primary dark:bg-dark_primary z-50`}
      >
        <div
          id="heading_of_modal"
          className="flex items-center justify-between text-white text-2xl px-2 pb-2 mb-6 border-b"
        >
          <div className="text-center">
            <h1>Preview - {name}</h1>
          </div>

          <div className="">
            <FontAwesomeIcon
              icon="fa-solid fa-x"
              className="cursor-pointer text-xl"
              onClick={handleClosePreview}
            />
          </div>
        </div>

        <div className="flex flex-col items-center justify-between">
          <div className="image my-4">
            <img src={image_src} alt={name} className="w-full mx-auto" />
          </div>
          <div className="description text-white my-4">{text}</div>
        </div>

        <div className="mt-3 text-center">
          <div className="flex items-center justify-between px-4 pt-3">
            <div className="w-1/2"></div>
            <div className="w-1/2 flex items-center justify-center gap-2">
              <button
                className="px-4 py-2 bg-blue-700 text-white text-base font-medium rounded-md w-full shadow-sm hover:bg-blue-800 focus:outline-none focus:ring-2 focus:ring-blue-300"
                onClick={handleClosePreview}
              >
                Close
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
