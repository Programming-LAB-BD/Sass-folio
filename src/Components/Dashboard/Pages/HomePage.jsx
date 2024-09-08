import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import axios from "axios";
import { useEffect, useState } from "react";
import ProfilePicController from "../Components/ProfilePicController";
import SocialLinks from "../Components/SocialLinks";

export default function HomePage({ stateUpdateFunction, token }) {
  const [loading, setLoading] = useState(false);
  const [result, setResult] = useState({});
  const [intro, setIntro] = useState({
    value: "",
    info: "",
    forSubmit: false,
    formStatus: false,
  });
  const [facebook, setFacebook] = useState({
    value: "",
    info: "",
    forSubmit: false,
    formStatus: false,
  })
  const [instagram, setInstagram] = useState({
    value: "",
    info: "",
    forSubmit: false,
    formStatus: false,
  })
  const [twitter, setTwitter] = useState({
    value: "",
    info: "",
    forSubmit: false,
    formStatus: false,
  })
  const [github, setGithub] = useState({
    value: "",
    info: "",
    forSubmit: false,
    formStatus: false,
  })
  const [linkedin, setLinkedin] = useState({
    value: "",
    info: "",
    forSubmit: false,
    formStatus: false,
  })

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
      setIntro((prev) => stateUpdateFunction(prev, data.data.introduction));
      setFacebook((prev) => stateUpdateFunction(prev, data.data.facebook || ""));
      setInstagram((prev) => stateUpdateFunction(prev, data.data.instagram || ""));
      setTwitter((prev) => stateUpdateFunction(prev, data.data.twitter || ""));
      setGithub((prev) => stateUpdateFunction(prev, data.data.github || ""));
      setLinkedin((prev) => stateUpdateFunction(prev, data.data.linkedin || ""));
    }

    fetchData();
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Form validating here
    if (intro.value.length < 200 || intro.value.length > 1000) {
      setIntro((prev) => {
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
          introduction: intro.value,
          facebook: facebook.value,
          instagram: instagram.value,
          twitter: twitter.value,
          github: github.value,
          linkedin: linkedin.value,
          token,
        }
      );

      setIntro((prev) => stateUpdateFunction(prev, newData.data.updateditem.introduction));
      setFacebook((prev) => stateUpdateFunction(prev, newData.data.updateditem.facebook || ""));
      setInstagram((prev) => stateUpdateFunction(prev, newData.data.updateditem.instagram || ""));
      setTwitter((prev) => stateUpdateFunction(prev, newData.data.updateditem.twitter || ""));
      setGithub((prev) => stateUpdateFunction(prev, newData.data.updateditem.github || ""));
      setLinkedin((prev) => stateUpdateFunction(prev, newData.data.updateditem.linkedin || ""));

    } catch (error) {
      console.error("Error updating Home:", error);
    } finally {
      setLoading(false);
    }
  };

  // Introduction Controller here
  const handleIntro = (e) => {
    setIntro((prev) => {
      return {
        ...prev,
        value: e.target.value,
        forSubmit: true,
      };
    });
  };

  return (
    <section id="home">
      <div className="heading_area text-2xl font-medium text-center block w-full md:text-3xl">
        <h1>Your Home Page Controller.</h1>
      </div>
      <form action="" className="mt-10">
        <ProfilePicController />
        <div className="input-form-group mb-8 w-[100%] md:w-[550px]">
          <label htmlFor="input" className="font-medium pl-1">
            Introduction :
          </label>
          <div className="flex items-center gap-2">
            <textarea
              type="text"
              placeholder="Enter Your Intro"
              className={`p-2 border rounded w-full border-gray-900 bg-[#c7ebee] text-gray-900 ${intro.info !== ""
                ? "border-red-400 focus:outline-red-600"
                : "focus:outline-gray-400"
                }`}
              rows="10"
              onChange={handleIntro}
              value={intro.value}
              disabled={!intro.formStatus}
              required
            ></textarea>
            <FontAwesomeIcon
              icon="fa-solid fa-circle-info"
              className="text-xl cursor-pointer"
            />
          </div>
          <div className="info text-xs text-zinc-400">
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
        </div>

        <SocialLinks states={{ facebook, setFacebook, instagram, setInstagram, twitter, setTwitter, github, setGithub, linkedin, setLinkedin }} />

        <button
          type="submit"
          className="p-4 border border-white rounded-xl bg-blue-700 text-white font-medium col-span-2 px-8 mb-10"
          onClick={handleSubmit}
          disabled={!intro.forSubmit && !facebook.forSubmit && !instagram.forSubmit && !twitter.forSubmit && !github.forSubmit && !linkedin.forSubmit}
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
          <span>Update Home</span>
        </button>
      </form>
    </section>
  );
}
