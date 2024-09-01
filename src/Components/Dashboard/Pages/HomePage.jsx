export default function HomePage() {
  return (
    <section id="home">
      <div className="heading_area text-2xl font-medium text-center block w-full md:text-3xl">
        <h1>Your Home Page Controller.</h1>
      </div>
      <form action="" className="mt-10">
        <div className="input-form-group mb-8 w-[100%] md:w-[550px]">
          <label>Upload Profile Pic :</label>
          <div className="relative">
            <label
              htmlFor="upload_file"
              className="font-medium pl-1 cursor-pointer absolute bottom-2"
            >
              <div className="bg-slate-300 border-4 border-slate-50 pt-1 rounded-full w-10 h-10 text-center">
                <i className="fa-solid fa-pen-to-square"></i>
              </div>
            </label>
            <img
              src="https://cdn-icons-png.flaticon.com/512/3237/3237472.png"
              alt="Profile Pic"
              className="w-1/4 border-2 rounded-full cursor-pointer"
            />
          </div>
          <div className="flex items-center gap-2">
            <input type="file" className="hidden" id="upload_file" />
          </div>
        </div>
        <div className="input-form-group mb-8 w-[100%] md:w-[550px]">
          <label htmlFor="input" className="font-medium pl-1">
            Introduction :
          </label>
          <div className="flex items-center gap-2">
            <textarea
              type="text"
              placeholder="Enter Your Intro"
              className="p-2 border border-primary rounded w-full bg-secondary text-primary"
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
            Social Link :
          </label>
          <div className="flex items-center gap-2">
            <div className="grid grid-flow-col grid-cols-3 gap-2 w-full">
              <select className="p-2 border border-primary rounded bg-secondary text-primary col-span-1">
                <option value="">Facebook</option>
                <option value="">YouTube</option>
                <option value="">WhatsApp</option>
                <option value="">Instagram</option>
                <option value="">TikTok</option>
                <option value="">X (Twitter)</option>
                <option value="">Messenger</option>
                <option value="">Telegram</option>
                <option value="">LinkedIn</option>
              </select>
              <input
                type="text"
                placeholder="Enter Your Link"
                className="p-2 border border-primary rounded bg-secondary text-primary col-span-2"
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
