export default function DashboardPage() {
  return (
    <section id="dashboard">
      <div className="heading_area text-2xl font-medium text-center block w-full md:text-3xl">
        <h1>Welcome to Sass-folio Dashboard.</h1>
      </div>
      <form action="" className="mt-10">
        <div className="input-form-group mb-8 w-[60%] md:w-[450px]">
          <label htmlFor="input" className="font-medium pl-1">
            Name:
          </label>
          <div className="flex items-center gap-2">
            <input
              type="text"
              placeholder="Enter Your Name"
              className="p-2 border border-primary rounded w-full bg-secondary text-primary"
            />
            <i className="fa-solid fa-circle-info text-xl cursor-pointer"></i>
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
              className="p-2 border border-primary rounded w-full bg-secondary text-primary"
            />
            <i className="fa-solid fa-circle-info text-xl cursor-pointer"></i>
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
            Description:
          </label>
          <div className="flex items-center gap-2">
            <textarea
              type="text"
              placeholder="Enter Your Description in 500 words"
              rows="3"
              className="p-2 border border-primary rounded w-full bg-secondary text-primary"
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
        {/* <form action=""> */}
        <div className="input-form-group mb-8 w-[60%] md:w-[450px]">
          <label htmlFor="input" className="font-medium pl-1">
            Logo:
          </label>
          <div className="flex items-center gap-2">
            <input
              type="file"
              className="p-2 border border-primary rounded w-full bg-secondary text-primary"
            />
            <i className="fa-solid fa-circle-info text-xl cursor-pointer"></i>
          </div>
          <div className="info text-xs text-zinc-400">
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Est nam
              porro, fugiat voluptatibus
            </p>
          </div>
        </div>
        {/* </form> */}
      </form>
    </section>
  );
}
