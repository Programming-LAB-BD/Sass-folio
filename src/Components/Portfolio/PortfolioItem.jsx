export default function PortfolioItem({ image_src, image_alt, text, index }) {
  return (
    <div
      className="single_item bg-primary dark:bg-dark_primary rounded-md p-4 pb-8 md:max-w-[550px]  md:mx-auto"
      key={index}
    >
      <div className="flex flex-col gap-2">
        <div className="image mb-2 md:h-[240px]  overflow-hidden">
          <img
            src={image_src}
            alt={image_alt}
            width={0}
            height={0}
            sizes="100vw"
            style={{ width: "100%", height: "100%", objectPosition: "center" }}
          />
        </div>
        <div className="text-center text-text_secondary dark:text-dark_text_secondary text-lg">
          <p className="mb-6">{text}</p>
          <button className="px-6 py-[12px] bg-secondary dark:bg-dark_secondary rounded-md text-primary dark:text-dark_primary font-medium hover:bg-hover_secondary dark:hover:bg-dark_hover_secondary">
            Read More &gt;
          </button>
        </div>
      </div>
    </div>
  );
}
