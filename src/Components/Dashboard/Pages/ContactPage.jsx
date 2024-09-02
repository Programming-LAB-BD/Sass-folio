export default function ContactPage() {
  return (
    <section id="contact">
      <div className="heading_area text-2xl font-medium text-center block w-full md:text-3xl">
        <h1>Your Contact Page Controller</h1>
      </div>

      <form action="" className="mt-10">
        <div className="input-form-group mb-8 w-[60%] md:w-[450px]">
          <label htmlFor="input" className="font-medium pl-1">
            Address :
          </label>
          <div className="flex items-center gap-2">
            <input
              type="text"
              placeholder="Enter Your Address"
              className="p-2 border rounded w-full border-gray-900 bg-[#c7ebee] text-gray-900"
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
            Phone Number :
          </label>
          <div className="flex items-center gap-2">
            <input
              type="text"
              placeholder="Enter Your Phone Number"
              className="p-2 border rounded w-full border-gray-900 bg-[#c7ebee] text-gray-900"
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
            Public Email Address :
          </label>
          <div className="flex items-center gap-2">
            <input
              type="text"
              placeholder="Enter a Public Email Address"
              className="p-2 border rounded w-full border-gray-900 bg-[#c7ebee] text-gray-900"
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
      </form>
    </section>
  );
}
