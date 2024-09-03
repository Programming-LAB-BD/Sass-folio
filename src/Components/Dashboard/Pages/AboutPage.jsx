import Skill from "../Components/Skill";

export default function AboutPage({ controller }) {
  const { about, handleAbout, skillLength, handleSkillLength } = controller;

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
              rows="4"
              value={about.value}
              onChange={handleAbout}
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
        {[...Array(skillLength)].map((_, i) => (
          <Skill key={i} />
        ))}
        <button
          className="p-4 border border-white rounded-xl bg-blue-700 text-white font-medium col-span-2 mb-10"
          onClick={handleSkillLength}
        >
          Add More +
        </button>
      </form>
    </section>
  );
}
