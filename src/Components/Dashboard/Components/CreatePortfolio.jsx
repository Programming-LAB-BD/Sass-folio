import axios from "axios";
import { useState } from "react";
import PortfolioThumbnail from "./PortfolioThumbnail";

const CreatePorfolio = ({ token, setPortfolioLength, setData }) => {
  const [thumb, setThumb] = useState("");
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");
    if (!name || !description || !thumb) return;
    if (description.length < 200)
      return setError("Description must be Greater than 200 character");

    setLoading(true);
    try {
      // I'm uploading the icon here
      const formData = new FormData();
      formData.append("portfolio", thumb);
      formData.append("token", token);

      let data = await axios.post(
        `${import.meta.env.REACT_APP_BACKEND_URI}/upload/thumb`,
        formData,
        {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        }
      );

      // I'm creating the Portfolio here
      let portfolio = await axios.post(
        `${import.meta.env.REACT_APP_BACKEND_URI}/portfolio/create`,
        {
          name,
          thumbnail: data.data.thumb,
          description,
          token,
        }
      );

      if (portfolio.data) {
        //
        let image = await axios.post(
          `${import.meta.env.REACT_APP_BACKEND_URI}/api/generate/image`,
          { imagePath: portfolio.data.thumbnail }
        );
        portfolio.data.thumbnail = image.data.url;
        //

        setThumb("");
        setName("");
        setDescription("");
        setPortfolioLength((prev) => {
          return [...prev, portfolio.data._id];
        });
        setData((prev) => {
          return [...prev, portfolio.data];
        });
      }
    } catch (err) {
      console.log(err);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div id="create-service" className="mb-10" onSubmit={handleSubmit}>
      <form action="" className="mt-10">
        <PortfolioThumbnail data={{ thumb, setThumb }} />

        <div className="input-form-group mb-8 w-[100%] md:w-[550px]">
          <label htmlFor="input" className="font-medium pl-1">
            Portfolio Name :
          </label>
          <div className="flex items-center gap-2">
            <input
              type="text"
              placeholder="Enter Your Name"
              className="p-2 border rounded w-full border-gray-900 bg-[#c7ebee] text-gray-900 file:rounded-xl file:border-0 file:p-1 file:px-2 file:ring-2"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
            />
          </div>
        </div>

        <div className="input-form-group mb-8 w-[100%] md:w-[550px]">
          <label htmlFor="input" className="font-medium pl-1">
            Portfolio Description :
          </label>
          <div className="flex items-center gap-2">
            <textarea
              type="text"
              placeholder="Enter Your Portfolio Description"
              className="p-2 border rounded w-full border-gray-900 bg-[#c7ebee] text-gray-900"
              rows="4"
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              required
            ></textarea>
            <i className="fa-solid fa-circle-info text-xl cursor-pointer"></i>
          </div>
          {error ? (
            <div className="info text-xs text-zinc-400">
              <p className="text-red-600">{error}</p>
            </div>
          ) : (
            <div className="info text-xs text-zinc-400">
              <p>
                This Description will show on your portfolio Description field.
                so fill it by minimum 200 characters.
              </p>
            </div>
          )}
        </div>

        <button
          className="p-4 px-6 border border-white rounded-xl bg-blue-700 text-white font-medium col-span-2"
          type="submit"
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

          <span>Create Portfolio</span>
        </button>
      </form>
    </div>
  );
};

export default CreatePorfolio;
