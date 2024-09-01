export default function ServicePage() {
  return (
    <section id="service">
      <div className="heading_area text-2xl font-medium text-center block w-full md:text-3xl mb-10">
        <h1>Your Service Page Controller.</h1>
      </div>
      <div id="create-service">
        <button className="p-4 border border-white rounded-xl bg-blue-700 text-white font-medium col-span-2">
          Create a new Service +
        </button>

        <form action="" className="mt-10">
          <div className="input-form-group mb-8 w-[100%] md:w-[550px]">
            <label htmlFor="input" className="font-medium pl-1">
              Service Title :
            </label>
            <div className="flex items-center gap-2">
              <input
                type="text"
                placeholder="Enter Service Title"
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

          <div className="input-form-group mb-8 w-[100%] md:w-[550px]">
            <label htmlFor="input" className="font-medium pl-1">
              Service Icon :
            </label>
            <div className="flex items-center gap-2">
              <input
                type="file"
                placeholder="Enter About Yourself"
                className="p-2 border border-primary rounded w-full bg-secondary text-primary file:rounded-xl file:border-0 file:p-1 file:px-2 file:ring-2"
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

          <div className="input-form-group mb-8 w-[100%] md:w-[550px]">
            <label htmlFor="input" className="font-medium pl-1">
              Service Description :
            </label>
            <div className="flex items-center gap-2">
              <textarea
                type="text"
                placeholder="Enter Your Service Description"
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
        </form>
      </div>

      <div
        id="previous"
        className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-4"
      >
        <div className="single_item border-2 p-4 rounded-lg shadow-lg">
          <div className="title py-1 mb-3 text-2xl font-medium text-center border-b-2 border-slate-800">
            Frontend Development
          </div>
          <div className="icon text-center text-8xl mb-3">
            <i className="fa-solid fa-palette"></i>
          </div>
          <div className="description mb-3">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Expedita
            reprehenderit eveniet accusantium dolor eaque dolorum doloremque,
            ipsum mollitia saepe voluptatibus suscipit vitae molestias assumenda
            id voluptas. Neque autem repellendus similique!
          </div>
          <div className="w-full flex justify-center">
            <button className="p-4 border border-white rounded-xl bg-blue-700 text-white font-medium col-span-2">
              Show more &gt;
            </button>
          </div>
        </div>
        <div className="single_item border-2 p-4 rounded-lg shadow-lg">
          <div className="title py-1 mb-3 text-2xl font-medium text-center border-b-2 border-slate-800">
            Frontend Development
          </div>
          <div className="icon text-center text-8xl mb-3">
            <i className="fa-solid fa-palette"></i>
          </div>
          <div className="description mb-3">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Expedita
            reprehenderit eveniet accusantium dolor eaque dolorum doloremque,
            ipsum mollitia saepe voluptatibus suscipit vitae molestias assumenda
            id voluptas. Neque autem repellendus similique!
          </div>
          <div className="w-full flex justify-center">
            <button className="p-4 border border-white rounded-xl bg-blue-700 text-white font-medium col-span-2">
              Show more &gt;
            </button>
          </div>
        </div>
        <div className="single_item border-2 p-4 rounded-lg shadow-lg">
          <div className="title py-1 mb-3 text-2xl font-medium text-center border-b-2 border-slate-800">
            Frontend Development
          </div>
          <div className="icon text-center text-8xl mb-3">
            <i className="fa-solid fa-palette"></i>
          </div>
          <div className="description mb-3">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Expedita
            reprehenderit eveniet accusantium dolor eaque dolorum doloremque,
            ipsum mollitia saepe voluptatibus suscipit vitae molestias assumenda
            id voluptas. Neque autem repellendus similique!
          </div>
          <div className="w-full flex justify-center">
            <button className="p-4 border border-white rounded-xl bg-blue-700 text-white font-medium col-span-2">
              Show more &gt;
            </button>
          </div>
        </div>
        <div className="single_item border-2 p-4 rounded-lg shadow-lg">
          <div className="title py-1 mb-3 text-2xl font-medium text-center border-b-2 border-slate-800">
            Frontend Development
          </div>
          <div className="icon text-center text-8xl mb-3">
            <i className="fa-solid fa-palette"></i>
          </div>
          <div className="description mb-3">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Expedita
            reprehenderit eveniet accusantium dolor eaque dolorum doloremque,
            ipsum mollitia saepe voluptatibus suscipit vitae molestias assumenda
            id voluptas. Neque autem repellendus similique!
          </div>
          <div className="w-full flex justify-center">
            <button className="p-4 border border-white rounded-xl bg-blue-700 text-white font-medium col-span-2">
              Show more &gt;
            </button>
          </div>
        </div>
        <div className="single_item border-2 p-4 rounded-lg shadow-lg">
          <div className="title py-1 mb-3 text-2xl font-medium text-center border-b-2 border-slate-800">
            Frontend Development
          </div>
          <div className="icon text-center text-8xl mb-3">
            <i className="fa-solid fa-palette"></i>
          </div>
          <div className="description mb-3">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Expedita
            reprehenderit eveniet accusantium dolor eaque dolorum doloremque,
            ipsum mollitia saepe voluptatibus suscipit vitae molestias assumenda
            id voluptas. Neque autem repellendus similique!
          </div>
          <div className="w-full flex justify-center">
            <button className="p-4 border border-white rounded-xl bg-blue-700 text-white font-medium col-span-2">
              Show more &gt;
            </button>
          </div>
        </div>
        <div className="single_item border-2 p-4 rounded-lg shadow-lg">
          <div className="title py-1 mb-3 text-2xl font-medium text-center border-b-2 border-slate-800">
            Frontend Development
          </div>
          <div className="icon text-center text-8xl mb-3">
            <i className="fa-solid fa-palette"></i>
          </div>
          <div className="description mb-3">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Expedita
            reprehenderit eveniet accusantium dolor eaque dolorum doloremque,
            ipsum mollitia saepe voluptatibus suscipit vitae molestias assumenda
            id voluptas. Neque autem repellendus similique!
          </div>
          <div className="w-full flex justify-center">
            <button className="p-4 border border-white rounded-xl bg-blue-700 text-white font-medium col-span-2">
              Show more &gt;
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
