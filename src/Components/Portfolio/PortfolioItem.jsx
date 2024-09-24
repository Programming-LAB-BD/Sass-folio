import LoadingItem from "../Loading/LoadingItem";

export default function PortfolioItem({
  name,
  image_src,
  text,
  index,
  loading,
}) {
  return (
    <>
      {loading ? (
        <LoadingItem />
      ) : (
        <div
          className="single_item bg-primary dark:bg-dark_primary rounded-md p-4 pb-8 md:max-w-[550px]  md:mx-auto"
          key={index}
        >
          <div className="flex flex-col gap-2">
            <div className="md:h-[240px]">
              <img src={image_src} alt={name} />
            </div>

            <div className="service_heading text-2xl font-medium text-center">
              <h2 className="inline-block px-2">{name}</h2>
            </div>

            <div className="text-center text-text_secondary dark:text-dark_text_secondary text-lg">
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
