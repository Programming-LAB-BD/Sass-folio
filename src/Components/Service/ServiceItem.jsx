import LoadingItem from "../Loading/LoadingItem";

export default function ServiceItem({ name, icon, text, index, loading }) {
  return (
    <>
      {loading ? (
        <LoadingItem />
      ) : (
        <div
          className="single_item bg-primary dark:bg-dark_primary text-text_secondary dark:text-dark_text_secondary rounded-md py-8 px-4 md:max-w-[550px] md:mx-auto"
          key={index}
        >
          <div className="service_heading text-2xl font-medium text-center">
            <h2 className="border-b-2 border-text_secondary dark:border-dark_text_secondary inline-block px-2 pb-2">
              {name}
            </h2>
          </div>
          <div className="flex flex-col gap-2">
            <div className="rounded-lg my-4 w-2/4 mx-auto overflow-hidden">
              <img
                className="cursor-pointer w-full"
                src={icon}
                alt="Service Icon"
              />
            </div>
            <div className="text-center text-lg">
              <p className="mb-6">
                {text.split(" ").length >= 35
                  ? text.split(" ").slice(0, 25).join(" ") + "....."
                  : text}
              </p>
              <button className="px-6 py-[12px] bg-secondary dark:bg-dark_secondary rounded-md text-primary dark:text-dark_primary font-medium hover:bg-hover_secondary dark:hover:bg-dark_hover_secondary">
                Read More &gt;
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
