import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import axios from "axios";
import { useEffect, useRef, useState } from "react";
import LogoController from "../Components/LogoController";

export default function DashboardPage({ stateUpdateFunction, token, profile }) {
  const [loading, setLoading] = useState(false);
  const [result, setResult] = useState({});
  const [name, setName] = useState({
    value: "",
    info: "",
    forSubmit: false,
    formStatus: false,
  });
  const [title, setTitle] = useState({
    value: "",
    info: "",
    forSubmit: false,
    formStatus: false,
  });
  const [description, setDescription] = useState({
    value: "",
    info: "",
    forSubmit: false,
    formStatus: false,
  });

  const linkRef = useRef(null);

  // Main UseEffect Function here
  useEffect(() => {
    async function fetchData() {
      let data = await axios.post(
        import.meta.env.REACT_APP_BACKEND_URI + "/site/",
        {
          token,
        }
      );

      setResult(data.data);
      setName((prev) => stateUpdateFunction(prev, data.data.name || ""));
      setTitle((prev) => stateUpdateFunction(prev, data.data.title || ""));
      setDescription((prev) =>
        stateUpdateFunction(prev, data.data.description || "")
      );
    }

    fetchData();
  }, []);

  // Submit form functionality here
  const handleSubmit = async (e) => {
    e.preventDefault();

    // Form validating here
    if (title.value.length > 30 && description.value.length > 500) {
      setTitle((prev) => {
        return {
          ...prev,
          info: "Title can't be greater than 30 characters.",
          forSubmit: false,
        };
      });
      setDescription((prev) => {
        return {
          ...prev,
          info: "Description can't be greater than 500 characters.",
          forSubmit: false,
        };
      });
      return;
    }
    if (title.value.length > 30) {
      setTitle((prev) => ({
        ...prev,
        info: "Title can't be greater than 30 characters.",
        forSubmit: false,
      }));
      return;
    }
    if (description.value.length > 500) {
      setDescription((prev) => ({
        ...prev,
        info: "Description can't be greater than 500 characters.",
        forSubmit: false,
      }));
      return;
    }

    setTitle((prev) => ({
      ...prev,
      info: "",
      forSubmit: true,
    }));

    setDescription((prev) => ({
      ...prev,
      info: "",
      forSubmit: true,
    }));

    setLoading(true);
    try {
      let newData = await axios.post(
        `${import.meta.env.REACT_APP_BACKEND_URI}/site/update`,
        {
          ...result,
          name: name.value,
          title: title.value,
          description: description.value,
          token,
        }
      );

      setResult(newData.data.data);
      setName((prev) =>
        stateUpdateFunction(prev, newData.data.updateditem.name)
      );
      setTitle((prev) =>
        stateUpdateFunction(prev, newData.data.updateditem.title)
      );
      setDescription((prev) =>
        stateUpdateFunction(prev, newData.data.updateditem.description)
      );
    } catch (error) {
      console.error("Error updating dashboard:", error);
    } finally {
      setLoading(false);
    }
  };

  // Name Controller here
  const handleName = (e) => {
    setName((prev) => ({
      ...prev,
      value: e.target.value,
      forSubmit: true,
    }));
  };

  // Title Controller here
  const handleTitle = (e) => {
    setTitle((prev) => ({
      ...prev,
      value: e.target.value,
      forSubmit: true,
    }));
  };

  // Description Controller here
  const handleDescription = (e) => {
    setDescription((prev) => ({
      ...prev,
      value: e.target.value,
      forSubmit: true,
    }));
  };

  const handleCopy = () => {
    // Select the text field
    linkRef.current.select();
    linkRef.current.setSelectionRange(0, 99999); // For mobile devices

    // Copy the text inside the text field
    navigator.clipboard.writeText(linkRef.current.value);
  };

  return (
    <section id="dashboard">
      <div className="heading_area text-2xl font-medium text-center block w-full md:text-3xl">
        <h1>Welcome to Sass-folio Dashboard.</h1>
      </div>

      <div className="input-form-group mb-16 mt-6 w-[60%] md:w-[450px]">
        <label htmlFor="input" className="font-medium pl-1">
          Copy site address:
        </label>
        <div className="flex items-center gap-2 mt-1 relative">
          <input
            type="text"
            className={`p-2 border rounded w-full border-gray-900 bg-[#c7ebee] text-gray-900`}
            value={`https://saas-folio.netlify.app/${profile.username}/`}
            ref={linkRef}
            disabled
          />
          <button
            className="absolute top-0 end-0 p-2.5 px-3 h-full text-sm font-medium rounded-e border border-black bg-[#c7ebee] hover:bg-[#a8e8ee]"
            onClick={handleCopy}
          >
            <FontAwesomeIcon icon="fa-solid fa-copy" />
          </button>
        </div>
      </div>

      <form className="mt-10">
        <LogoController />
        <div className="input-form-group mb-8 w-[60%] md:w-[450px]">
          <label htmlFor="input" className="font-medium pl-1">
            Name:
          </label>
          <div className="flex items-center gap-2">
            <input
              type="text"
              placeholder="Enter Your Name"
              className="p-2 rounded w-full border border-gray-900 bg-[#c7ebee] text-gray-900"
              onChange={handleName}
              value={name.value}
              disabled={!name.formStatus}
              required
            />
            <FontAwesomeIcon
              icon="fa-solid fa-circle-info"
              className="text-xl cursor-pointer"
            />
          </div>
          <div className="info text-xs text-zinc-400">
            <p className="text-zinc-600 text-xs italic pl-1">
              Enter your Full Name here, which will display on your protfolio.
            </p>
          </div>
        </div>
        <div className="input-form-group mb-8 w-[60%] md:w-[450px]">
          <label htmlFor="input" className="font-medium pl-1">
            Title:
          </label>
          <div className="flex items-center gap-2">
            <input
              type="text"
              placeholder="Enter Your Title"
              className={`p-2 border rounded w-full border-gray-900 bg-[#c7ebee] text-gray-900 ${
                title.info !== ""
                  ? "border-red-400 focus:outline-red-600"
                  : "focus:outline-gray-400"
              }`}
              onChange={handleTitle}
              value={title.value}
              disabled={!title.formStatus}
              required
            />
            <FontAwesomeIcon
              icon="fa-solid fa-circle-info"
              className="text-xl cursor-pointer"
            />
          </div>
          <div className="info text-xs text-zinc-400">
            {title.info !== "" ? (
              <span className="flex items-center font-medium tracking-wide text-red-500 text-xs mt-1 ml-1">
                {title.info}
              </span>
            ) : (
              <p className="text-zinc-600 text-xs italic pl-1">
                Enter your Title here, which will display on your titlebar.
              </p>
            )}
          </div>
        </div>
        <div className="input-form-group mb-8 w-[60%] md:w-[450px]">
          <label htmlFor="input" className="font-medium pl-1">
            Description:
          </label>
          <div className="flex items-center gap-2">
            <textarea
              placeholder="Enter Your Description in 500 words"
              rows="3"
              className={`p-2 border rounded w-full border-gray-900 bg-[#c7ebee] text-gray-900 ${
                description.info !== ""
                  ? "border-red-400 focus:outline-red-600"
                  : "focus:outline-gray-400"
              }`}
              onChange={handleDescription}
              value={description.value}
              disabled={!description.formStatus}
              required
            ></textarea>
            <FontAwesomeIcon
              icon="fa-solid fa-circle-info"
              className="text-xl cursor-pointer"
            />
          </div>
          <div className="info text-xs text-zinc-400">
            {description.info !== "" ? (
              <span className="flex items-center font-medium tracking-wide text-red-500 text-xs mt-1 ml-1">
                {description.info}
              </span>
            ) : (
              <p className="text-zinc-600 text-xs italic pl-1">
                Enter your Description here, which will help you to rank your
                website on search engine.
              </p>
            )}
          </div>
        </div>
        <button
          type="submit"
          className="p-4 border border-white rounded-xl bg-blue-700 text-white font-medium col-span-2 px-8 mb-10"
          onClick={handleSubmit}
          disabled={
            !name.forSubmit && !title.forSubmit && !description.forSubmit
          }
        >
          {loading && (
            <svg
              aria-hidden="true"
              className="inline w-6 h-6 text-gray-200 animate-spin dark:text-gray-600 fill-white mr-2"
              viewBox="0 0 100 101"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z"
                fill="currentColor"
              />
              <path
                d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z"
                fill="currentFill"
              />
            </svg>
          )}
          <span>Update Dashboard</span>
        </button>
      </form>
    </section>
  );
}
