import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function LogoController({ data, handleDeletePreview }) {
  const { isOpen, setIsOpen, currentData } = data;

  const handleClosePreview = (e) => {
    e.preventDefault();
    setIsOpen(false);
  };

  const handleClickOnDelete = (id) => {
    const confirmDelete = window.confirm(
      "Are you sure you want to delete this item?"
    );
    if (!confirmDelete) {
      return;
    }

    setIsOpen(false);
    handleDeletePreview(id);
  };

  return (
    <>
      <div
        className={`fixed ${
          !isOpen && "hidden"
        } top-0 left-0 insert-0 bg-gray-600 bg-opacity-50 overflow-y-auto h-full w-full`}
        id="modal"
      ></div>
      <div
        className={`fixed ${
          !isOpen && "hidden"
        } top-16 md:top-18 left-0 md:left-[30%] md:max-w-[50%] flex flex-col justify-between mx-auto p-5 border border-secondary dark:border-dark_secondary w-full shadow-lg rounded-md bg-primary dark:bg-dark_primary`}
      >
        <div
          id="heading_of_modal"
          className="flex items-center justify-between text-white text-2xl px-2 pb-2 mb-6 border-b"
        >
          <div className="text-center">
            <h1>Preview - {currentData?.name}</h1>
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
            <img
              src={currentData?.icon || currentData?.thumbnail}
              alt={currentData?.name}
              className="w-2/4 mx-auto"
            />
          </div>
          <div className="description text-white my-4">
            {currentData?.description}
          </div>
        </div>

        <div className="mt-3 text-center">
          <div className="flex items-center justify-between px-4 pt-3">
            <div className="w-1/2"></div>
            <div className="w-1/2 flex items-center justify-center gap-2">
              <button
                className="px-4 py-2 bg-blue-700 text-white text-base font-medium rounded-md w-full shadow-sm hover:bg-blue-800 focus:outline-none focus:ring-2 focus:ring-blue-300"
                onClick={() => alert("Edit Functionality is'nt avilable now.")}
              >
                Edit
              </button>

              <button
                className="px-4 py-2 bg-red-600 text-white text-base font-medium rounded-md w-full shadow-sm hover:bg-red-800 focus:outline-none focus:ring-2 focus:ring-blue-300"
                onClick={() => handleClickOnDelete(currentData._id)}
              >
                <span>Delete</span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
