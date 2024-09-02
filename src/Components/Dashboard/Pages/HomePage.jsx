import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useEffect, useState } from "react";
import ProfilePicController from "../Components/ProfilePicController";
import SocialLink from "../Components/SocialLink";

export default function HomePage() {
  const [intro, setIntro] = useState({ value: "", info: "", forSubmit: false });
  const [socialLinkLength, setSocialLinkLength] = useState(1);

  // Introduction validator here
  useEffect(() => {
    if (intro.value.length < 200 || intro.value.length > 1000) {
      setIntro((prev) => {
        return {
          ...prev,
          info: "Introduction must be in 200-1000 characters.",
          forSubmit: false,
        };
      });
    } else {
      setIntro((prev) => {
        return {
          ...prev,
          info: "",
          forSubmit: true,
        };
      });
    }
  }, [intro.value]);

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

  const handleSocialLinkLength = () => {
    setSocialLinkLength((prev) => prev + 1);
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
              className={`p-2 border rounded w-full border-gray-900 bg-[#c7ebee] text-gray-900 ${
                intro.info !== ""
                  ? "border-red-400 focus:outline-red-600"
                  : "focus:outline-gray-400"
              }`}
              rows="4"
              onChange={handleIntro}
              value={intro.value}
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

        {[...Array(socialLinkLength)].map((_, i) => (
          <SocialLink key={i} />
        ))}

        <button
          type="button"
          className="p-4 border border-white rounded-xl bg-blue-700 text-white font-medium col-span-2"
          onClick={handleSocialLinkLength}
        >
          Add More +
        </button>
      </form>
    </section>
  );
}
