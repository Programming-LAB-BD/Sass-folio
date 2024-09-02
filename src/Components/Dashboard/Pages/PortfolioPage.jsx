export default function PortfolioPage() {
  return (
    <section id="portfolio">
      <div className="heading_area text-2xl font-medium text-center block w-full md:text-3xl mb-10">
        <h1>Your Protfolio Page Controller.</h1>
      </div>
      <div id="create-service">
        <button className="p-4 border border-white rounded-xl bg-blue-700 text-white font-medium col-span-2">
          Create a new Portfolio +
        </button>

        <form action="" className="mt-10">
          <div className="input-form-group mb-8 w-[100%] md:w-[550px]">
            <label htmlFor="input" className="font-medium pl-1">
              Portfolio Thumbnail :
            </label>
            <div className="flex items-center gap-2">
              <input
                type="file"
                placeholder="Enter About Yourself"
                className="p-2 border rounded w-full border-gray-900 bg-[#c7ebee] text-gray-900 file:rounded-xl file:border-0 file:p-1 file:px-2 file:ring-2"
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
              Portfolio Description :
            </label>
            <div className="flex items-center gap-2">
              <textarea
                type="text"
                placeholder="Enter Your Portfolio Description"
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
        </form>
      </div>

      <div
        id="previous"
        className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-4"
      >
        <div className="single_item border-2 p-4 rounded-lg shadow-lg">
          <div className="icon text-center text-8xl mb-3">
            <img
              src="https://saas-folio.netlify.app/img/portfolio_6.jpg"
              alt="Portfolio Thumbnail"
              className="aspect-video"
            />
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
          <div className="icon text-center text-8xl mb-3">
            <img
              src="https://saas-folio.netlify.app/img/portfolio_1.jpg"
              alt="Portfolio Thumbnail"
              className="aspect-video"
            />
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
          <div className="icon text-center text-8xl mb-3">
            <img
              src="https://saas-folio.netlify.app/img/portfolio_2.jpg"
              alt="Portfolio Thumbnail"
              className="aspect-video"
            />
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
          <div className="icon text-center text-8xl mb-3">
            <img
              src="https://saas-folio.netlify.app/img/portfolio_3.jpg"
              alt="Portfolio Thumbnail"
              className="aspect-video"
            />
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
          <div className="icon text-center text-8xl mb-3">
            <img
              src="https://saas-folio.netlify.app/img/portfolio_4.jpg"
              alt="Portfolio Thumbnail"
              className="aspect-video"
            />
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
          <div className="icon text-center text-8xl mb-3">
            <img
              src="https://saas-folio.netlify.app/img/portfolio_5.jpg"
              alt="Portfolio Thumbnail"
              className="aspect-video"
            />
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
