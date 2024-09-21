import axios from "axios";
import { useEffect, useState } from "react";
import { v4 as uuidv4 } from "uuid";
import Skills from "../Components/Skills";

export default function AboutPage({ stateUpdateFunction, token }) {
  const [result, setResult] = useState({});
  const [loading, setLoading] = useState(false);
  const [about, setAbout] = useState({
    value: "",
    info: "",
    forSubmit: false,
    formStatus: false,
  });
  const [skillLength, setSkillLength] = useState([
    {
      key: uuidv4(),
      name: "",
      progress: 0,
    },
  ]);
  const [skillSubmit, setSkillSubmit] = useState(false);

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
      setAbout((prev) => stateUpdateFunction(prev, data.data.aboutText));
      setSkillLength(data.data.skills);
      setSkillSubmit(false);
    }

    fetchData();
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Form validating here
    if (about.value.length < 700) {
      setAbout((prev) => {
        return {
          ...prev,
          info: "Introduction must be in 200-1000 characters.",
          forSubmit: false,
        };
      });
    }

    setLoading(true);
    try {
      let newData = await axios.post(
        `${import.meta.env.REACT_APP_BACKEND_URI}/site/update`,
        {
          ...result,
          aboutText: about.value,
          skills: skillLength,
          token,
        }
      );

      setAbout((prev) =>
        stateUpdateFunction(prev, newData.data.updateditem.aboutText)
      );
      setSkillLength(newData.data.updateditem.skills);
      setSkillSubmit(false);
    } catch (error) {
      console.error("Error updating About:", error);
    } finally {
      setLoading(false);
    }
  };

  // About Controller here
  const handleAbout = (e) => {
    setAbout((prev) => {
      return {
        ...prev,
        value: e.target.value,
        forSubmit: true,
      };
    });
  };

  // Function to add a new skill field
  const handleSkillLength = (e) => {
    e.preventDefault();
    setSkillLength((prev) => [
      ...prev,
      {
        key: uuidv4(),
        name: "",
        progress: 0,
      },
    ]);
  };

  // Function to remove a skill field
  const handleSkillLengthDecrease = (uniqueKey) => {
    if (skillLength.length > 1) {
      setSkillLength((prev) => prev.filter((skill) => skill.key !== uniqueKey));
    }
    setSkillSubmit(true);
  };

  // Function to update the name of a skill
  const handleNameChange = (uniqueKey, value) => {
    setSkillLength((prev) =>
      prev.map((skill) =>
        skill.key === uniqueKey ? { ...skill, name: value } : skill
      )
    );
    setSkillSubmit(true);
  };

  // Function to update the progress of a skill
  const handleProgressChange = (uniqueKey, value) => {
    setSkillLength((prev) =>
      prev.map((skill) =>
        skill.key === uniqueKey ? { ...skill, progress: value } : skill
      )
    );
    setSkillSubmit(true);
  };

  return (
    <section id="about">
      <div className="heading_area text-2xl font-medium text-center block w-full md:text-3xl">
        <h1>Your About Page Controller.</h1>
      </div>
      <form action="" className="mt-10">
        <div className="input-form-group mb-8 w-[100%] md:w-[550px]">
          <label htmlFor="input" className="font-medium pl-1">
            About Yourself :
          </label>
          <div className="flex items-center gap-2">
            <textarea
              type="text"
              placeholder="Enter About Yourself"
              className={`p-2 border rounded w-full border-gray-900 bg-[#c7ebee] text-gray-900 ${
                about.info !== ""
                  ? "border-red-400 focus:outline-red-600"
                  : "focus:outline-gray-400"
              }`}
              rows="10"
              value={about.value}
              onChange={handleAbout}
              disabled={!about.formStatus}
              required
            ></textarea>
            <i className="fa-solid fa-circle-info text-xl cursor-pointer"></i>
          </div>
          <div className="info text-xs text-zinc-400">
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
        </div>
        <div className="input-form-group mb-8 w-[100%] md:w-[550px]">
          <label htmlFor="input" className="font-medium pl-1">
            Skills :
          </label>

          {skillLength.map((skill, index) => (
            <Skills
              key={index}
              uniqueKey={skill.key}
              name={skill.name}
              progress={skill.progress}
              onNameChange={handleNameChange}
              onProgressChange={handleProgressChange}
              handleSkillLengthDecrease={handleSkillLengthDecrease}
            />
          ))}

          <div className="info text-xs text-zinc-400 mb-6">
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Est nam
              porro, fugiat voluptatibus
            </p>
          </div>
        </div>

        {skillLength.length < 6 && (
          <button
            className="p-4 border border-white rounded-xl bg-blue-700 text-white font-medium col-span-2 mb-10 block"
            onClick={handleSkillLength}
          >
            Add More +
          </button>
        )}

        <button
          type="submit"
          className="p-4 border border-white rounded-xl bg-blue-700 text-white font-medium col-span-2 px-8 mb-10"
          onClick={handleSubmit}
          disabled={!about.forSubmit && !skillSubmit}
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
          <span>Update About</span>
        </button>
      </form>
    </section>
  );
}
