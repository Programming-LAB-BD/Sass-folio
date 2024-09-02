export default function AboutPage() {
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
              className="p-2 border rounded w-full border-gray-900 bg-[#c7ebee] text-gray-900"
              rows="4"
            ></textarea>
            <i className="fa-solid fa-circle-info text-xl cursor-pointer"></i>
          </div>
          <div className="info text-xs text-zinc-400">
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Est nam
              porro, fugiat voluptatibus
            </p>
          </div>
        </div>
        <div className="input-form-group mb-8 w-[100%] md:w-[550px]">
          <label htmlFor="input" className="font-medium pl-1">
            Skills :
          </label>
          <div className="flex items-center gap-2">
            <div className="grid grid-flow-col grid-cols-3 gap-2 w-full">
              <input
                type="text"
                placeholder="Enter Your Skill Name"
                className="p-2 border rounded border-gray-900 bg-[#c7ebee] text-gray-900 col-span-2"
              />
              <input
                type="number"
                placeholder="Enter Your Skill Progress"
                className="p-2 border rounded border-gray-900 bg-[#c7ebee] text-gray-900 col-span-1"
              />
            </div>
            <i className="fa-solid fa-circle-info text-xl cursor-pointer"></i>
          </div>
          <div className="info text-xs text-zinc-400 mb-6">
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Est nam
              porro, fugiat voluptatibus
            </p>
          </div>
          <button className="p-4 border border-white rounded-xl bg-blue-700 text-white font-medium col-span-2">
            Add More +
          </button>
        </div>
      </form>
    </section>
  );
}
