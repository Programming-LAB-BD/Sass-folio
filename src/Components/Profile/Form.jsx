import axios from "axios";
import Cookies from "js-cookie";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

export default function Form() {
  const [name, setName] = useState("");
  const [title, setTitle] = useState({ info: "", value: "", submit: false }); // max 30
  const [description, setDescription] = useState({
    info: "",
    value: "",
    submit: false,
  }); // min 50 max 500
  const [intro, setIntro] = useState({ info: "", value: "", submit: false }); // min 200 max 1000
  const [about, setAbout] = useState({ info: "", value: "", submit: false }); // min 700
  const [addr, setAddr] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [hittedSubmit, setHittedSubmit] = useState(false);
  const [loading, setLoading] = useState(false);

  const navigate = useNavigate();
  const token = Cookies.get("saas-folio");

  // Title check functionality here
  useEffect(() => {
    if (hittedSubmit) {
      title.value.length > 30
        ? setTitle((prev) => {
            return {
              ...prev,
              info: "Title can't be more than 30 characters.",
              submit: false,
            };
          })
        : setTitle((prev) => {
            return {
              ...prev,
              info: "",
              submit: true,
            };
          });
    }
  }, [title.value, hittedSubmit]);

  // Description check functionality here
  useEffect(() => {
    if (hittedSubmit) {
      description.value.length > 500
        ? setDescription((prev) => {
            return {
              ...prev,
              info: "Description can't be Greater than 500 characters.",
              submit: false,
            };
          })
        : setDescription((prev) => {
            return {
              ...prev,
              info: "",
              submit: true,
            };
          });
    }
  }, [description.value, hittedSubmit]);

  // Introduction check functionality here
  useEffect(() => {
    if (hittedSubmit) {
      intro.value.length < 200 || intro.value.length > 1000
        ? setIntro((prev) => {
            return {
              ...prev,
              info: "Introduction must be in 200-1000 characters.",
              submit: false,
            };
          })
        : setIntro((prev) => {
            return {
              ...prev,
              info: "",
              submit: true,
            };
          });
    }
  }, [intro.value, hittedSubmit]);

  // About check functionality here
  useEffect(() => {
    if (hittedSubmit) {
      about.value.length < 700
        ? setAbout((prev) => {
            return {
              ...prev,
              info: "About must be more than 700 characters.",
              submit: false,
            };
          })
        : setAbout((prev) => {
            return {
              ...prev,
              info: "",
              submit: true,
            };
          });
    }
  }, [about.value, hittedSubmit]);

  // Name handle functionality here
  const handleName = (e) => {
    setName(e.target.value);
  };

  // Title handle functionality here
  const handleTitle = (e) => {
    setTitle((prev) => {
      return {
        ...prev,
        value: e.target.value,
      };
    });
  };

  // Description handle functionality here
  const handleDescription = (e) => {
    setDescription((prev) => {
      return {
        ...prev,
        value: e.target.value,
      };
    });
  };

  // Introduction handle functionality here
  const handleIntro = (e) => {
    setIntro((prev) => {
      return {
        ...prev,
        value: e.target.value,
      };
    });
  };

  // Introduction handle functionality here
  const handleAbout = (e) => {
    setAbout((prev) => {
      return {
        ...prev,
        value: e.target.value,
      };
    });
  };

  // Address handle functionality here
  const handleAddr = (e) => {
    setAddr(e.target.value);
  };

  // Phone Number handle functionality here
  const handlePhone = (e) => {
    setPhone(e.target.value);
  };

  // Public Email Address handle functionality here
  const handleEmail = (e) => {
    setEmail(e.target.value);
  };

  // Form Submit handle functionality here
  const handleSubmit = async (e) => {
    e.preventDefault(true);
    setHittedSubmit(true);

    if (!title.submit || !description.submit || !intro.submit || !about.submit)
      return;

    // There is the submitting functionality here
    try {
      setLoading(true);

      let obj = {
        name: name,
        title: title.value,
        description: description.value,
        introduction: intro.value,
        aboutText: about.value,
        address: addr,
        phone: phone,
        contactEmail: email,
        token,
      };

      let data = await axios.post(
        `${import.meta.env.REACT_APP_BACKEND_URI}/site/create`,
        obj
      );

      if (data.data.created) {
        navigate("/dashboard/");
        return;
      }
    } catch (error) {
      console.error("Error:", error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <section className="mt-24">
      <div className="w-10/12 lg:w-8/12 mx-auto">
        <form onSubmit={handleSubmit}>
          {/* Full Name Area Here */}

          <div className="flex flex-col mb-6">
            <label className="mb-1 font-medium">Full Name :</label>
            <input
              type="text"
              placeholder="Enter your Full Name"
              onChange={handleName}
              value={name}
              className="border-2 p-2 max-w-[350px] rounded-md focus:outline-2 focus:outline-gray-400"
              required
            />
            <p className="text-zinc-600 text-xs italic pl-1">
              Enter your Full Name here, which will display on your protfolio.
            </p>
          </div>

          {/* Title Area Here */}

          <div className="flex flex-col mb-6">
            <label className="mb-1 font-medium">Title :</label>
            <input
              type="text"
              placeholder="Enter your Title"
              onChange={handleTitle}
              value={title.value}
              className={`border-2 ${
                title.info !== ""
                  ? "border-red-400 focus:outline-red-600"
                  : "focus:outline-gray-400"
              } p-2 max-w-[350px] rounded-md focus:outline-2`}
              required
            />
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

          {/* Description Area Here */}

          <div className="flex flex-col mb-6">
            <label className="mb-1 font-medium">Description :</label>
            <textarea
              type="text"
              placeholder="Enter your Description"
              onChange={handleDescription}
              value={description.value}
              className={`border-2 ${
                description.info !== ""
                  ? "border-red-400 focus:outline-red-600"
                  : "focus:outline-gray-400"
              } p-2 max-w-[350px] rounded-md focus:outline-2`}
              rows="3"
              required
            ></textarea>

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

          {/* Introduction Area Here */}

          <div className="flex flex-col mb-6">
            <label className="mb-1 font-medium">Introduction :</label>
            <textarea
              type="text"
              placeholder="Enter your Introduction in 200-1000 chars"
              onChange={handleIntro}
              value={intro.value}
              className={`border-2 ${
                intro.info !== ""
                  ? "border-red-400 focus:outline-red-600"
                  : "focus:outline-gray-400"
              } p-2 max-w-[350px] rounded-md focus:outline-2`}
              rows="3"
              required
            ></textarea>

            {intro.info !== "" ? (
              <span className="flex items-center font-medium tracking-wide text-red-500 text-xs mt-1 ml-1">
                {intro.info}
              </span>
            ) : (
              <p className="text-zinc-600 text-xs italic pl-1">
                Enter your Introduction here, which will display on your
                Introduction of frist page.
              </p>
            )}
          </div>

          {/* About yourself Area Here */}

          <div className="flex flex-col mb-6">
            <label className="mb-1 font-medium">About yourself :</label>
            <textarea
              type="text"
              placeholder="Enter your About in minimum 700 chars"
              onChange={handleAbout}
              value={about.value}
              className={`border-2 ${
                about.info !== ""
                  ? "border-red-400 focus:outline-red-600"
                  : "focus:outline-gray-400"
              } p-2 max-w-[350px] rounded-md focus:outline-2`}
              rows="3"
              required
            ></textarea>

            {about.info !== "" ? (
              <span className="flex items-center font-medium tracking-wide text-red-500 text-xs mt-1 ml-1">
                {about.info}
              </span>
            ) : (
              <p className="text-zinc-600 text-xs italic pl-1">
                Enter your About here, which will display on your About page.
              </p>
            )}
          </div>

          {/* Address Area Here */}

          <div className="flex flex-col mb-6">
            <label className="mb-1 font-medium">Address :</label>
            <input
              type="text"
              placeholder="Enter your Address"
              onChange={handleAddr}
              value={addr}
              className="border-2 p-2 max-w-[350px] rounded-md focus:outline-2 focus:outline-gray-400"
            />
            <p className="text-zinc-600 text-xs italic pl-1">
              Enter your Address here, which will display on your Contact page.
            </p>
          </div>

          {/* Phone Number Area Here */}

          <div className="flex flex-col mb-6">
            <label className="mb-1 font-medium">Phone Number :</label>
            <input
              type="text"
              placeholder="Enter your Phone Number"
              onChange={handlePhone}
              value={phone}
              className="border-2 p-2 max-w-[350px] rounded-md focus:outline-2 focus:outline-gray-400"
            />
            <p className="text-zinc-600 text-xs italic pl-1">
              Enter your Phone Number here, which will display on your Contact
              page.
            </p>
          </div>

          {/* Public Email Address Area Here */}

          <div className="flex flex-col mb-6">
            <label className="mb-1 font-medium">Public Email Address :</label>
            <input
              type="email"
              placeholder="Enter your Public Email Address"
              onChange={handleEmail}
              value={email}
              className="border-2 p-2 max-w-[350px] rounded-md focus:outline-2 focus:outline-gray-400"
              required
            />
            <p className="text-zinc-600 text-xs italic pl-1">
              Enter your Public Email Address here, which will display on your
              Contact page.
            </p>
          </div>

          <button
            type="submit"
            className="bg-blue-600 py-3 text-white font-medium w-32 my-3 rounded-lg"
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
            Submit
          </button>
        </form>
      </div>
    </section>
  );
}
