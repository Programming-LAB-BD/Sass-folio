import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useEffect, useState } from "react";
import LogoController from "../Components/LogoController";

export default function DashboardPage() {
  const [name, setName] = useState({ value: "", info: "", forSubmit: false });
  const [title, setTitle] = useState({ value: "", info: "", forSubmit: false });
  const [description, setDescription] = useState({
    value: "",
    info: "",
    forSubmit: false,
  });

  // Title Validatior here
  useEffect(() => {
    if (title.value.length > 30) {
      setTitle((prev) => {
        return {
          ...prev,
          info: "Title can't be greater than 30 characters.",
          forSubmit: false,
        };
      });
    } else {
      setTitle((prev) => {
        return {
          ...prev,
          info: "",
          forSubmit: true,
        };
      });
    }
  }, [title.value]);

  // Description Validatior here
  useEffect(() => {
    if (description.value.length > 500) {
      setDescription((prev) => {
        return {
          ...prev,
          info: "Description can't be greater than 500 characters.",
          forSubmit: false,
        };
      });
    } else {
      setDescription((prev) => {
        return {
          ...prev,
          info: "",
          forSubmit: true,
        };
      });
    }
  }, [description.value]);

  // Name Controller here
  const handleName = (e) => {
    setName((prev) => {
      return {
        ...prev,
        value: e.target.value,
        forSubmit: true,
      };
    });
  };

  // Title Controller here
  const handleTitle = (e) => {
    setTitle((prev) => {
      return {
        ...prev,
        value: e.target.value,
        forSubmit: true,
      };
    });
  };

  // Description Controller here
  const handleDescription = (e) => {
    setDescription((prev) => {
      return {
        ...prev,
        value: e.target.value,
        forSubmit: true,
      };
    });
  };

  return (
    <section id="dashboard">
      <div className="heading_area text-2xl font-medium text-center block w-full md:text-3xl">
        <h1>Welcome to Sass-folio Dashboard.</h1>
      </div>
      <form action="" className="mt-10">
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
              required
            />
            <FontAwesomeIcon
              icon="fa-solid fa-circle-info"
              className=" text-xl cursor-pointer"
            />
          </div>
          <div className="info text-xs text-zinc-400">
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Est nam
              porro, fugiat voluptatibus
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
              required
            />
            <FontAwesomeIcon
              icon="fa-solid fa-circle-info"
              className=" text-xl cursor-pointer"
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
              type="text"
              placeholder="Enter Your Description in 500 words"
              rows="3"
              className={`p-2 border rounded w-full border-gray-900 bg-[#c7ebee] text-gray-900 ${
                description.info !== ""
                  ? "border-red-400 focus:outline-red-600"
                  : "focus:outline-gray-400"
              }`}
              onChange={handleDescription}
              value={description.value}
              required
            ></textarea>
            <FontAwesomeIcon
              icon="fa-solid fa-circle-info"
              className=" text-xl cursor-pointer"
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
          className="p-4 border border-white rounded-xl bg-blue-700 text-white font-medium col-span-2"
          disabled={
            !name.forSubmit || !title.forSubmit || !description.forSubmit
          }
        >
          Update Dashboard
        </button>
      </form>
    </section>
  );
}
