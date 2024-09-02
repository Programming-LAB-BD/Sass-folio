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

      const headers = new Headers();
      headers.append("Content-Type", "application/json");

      let req = new Request("http://localhost:3000/site/create", {
        method: "POST",
        body: JSON.stringify(obj),
        headers,
      });

      let response = await fetch(req);
      let data = await response.json();

      if (data.created) {
        console.log(data.data);

        // setSubmitProcess(false);

        navigate("/dashboard/");
        return;
      }
    } catch (error) {
      console.error("Error:", error);
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
            Submit
          </button>
        </form>
      </div>
    </section>
  );
}

// ${
//   item.inputType === "file"
//     ? "file:text-sm file:bg-gray-200 file:py-1 file:px-2 file:rounded-2xl file:border-0"
//     : ""
// } ${
//   item.inputType === "number"
//     ? "[-moz-appearance:_textfield] [&::-webkit-inner-spin-button]:m-0 [&::-webkit-inner-spin-button]:appearance-none [&::-webkit-outer-spin-button]:m-0 [&::-webkit-outer-spin-button]:appearance-none"
//     : ""
// }

/* Logo Area Here

<div className="flex flex-col mb-6">
  <label className="mb-1 font-medium">Logo :</label>
  <input
    type="file"
    className="border-2 p-2 max-w-[350px] rounded-md focus:outline-2 focus:outline-gray-400 file:text-sm file:bg-gray-200 file:py-1 file:px-2 file:rounded-2xl file:border-0"
  />
  <p className="text-zinc-600 text-xs italic pl-1">
    Please choose a password.
  </p>
</div>

Picture Area Here

<div className="flex flex-col mb-6">
  <label className="mb-1 font-medium">Picture :</label>
  <input
    type="file"
    className="border-2 p-2 max-w-[350px] rounded-md focus:outline-2 focus:outline-gray-400 file:text-sm file:bg-gray-200 file:py-1 file:px-2 file:rounded-2xl file:border-0"
  />
  <p className="text-zinc-600 text-xs italic pl-1">
    Please choose a password.
  </p>
</div> */
