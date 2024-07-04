import PageContainer from "../Container/PageContainer";
import PortfolioItem from "../Portfolio/PortfolioItem";

const portfolioItems = [
  {
    image_src: "/img/portfolio_1.jpg",
    image_alt: "Portfolio Image",
    text: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Blanditiis aliquid placeat cupiditate facere, repellat, quasi quidem quae dolor quos perspiciatis asperiores commodi alias nam suscipit natus ipsam ab doloribus sint.",
  },
  {
    image_src: "/img/portfolio_2.jpg",
    image_alt: "Portfolio Image",
    text: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Blanditiis aliquid placeat cupiditate facere, repellat, quasi quidem quae dolor quos perspiciatis asperiores commodi alias nam suscipit natus ipsam ab doloribus sint.",
  },
  {
    image_src: "/img/portfolio_3.jpg",
    image_alt: "Portfolio Image",
    text: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Blanditiis aliquid placeat cupiditate facere, repellat, quasi quidem quae dolor quos perspiciatis asperiores commodi alias nam suscipit natus ipsam ab doloribus sint.",
  },
  {
    image_src: "/img/portfolio_4.jpg",
    image_alt: "Portfolio Image",
    text: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Blanditiis aliquid placeat cupiditate facere, repellat, quasi quidem quae dolor quos perspiciatis asperiores commodi alias nam suscipit natus ipsam ab doloribus sint.",
  },
  {
    image_src: "/img/portfolio_5.jpg",
    image_alt: "Portfolio Image",
    text: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Blanditiis aliquid placeat cupiditate facere, repellat, quasi quidem quae dolor quos perspiciatis asperiores commodi alias nam suscipit natus ipsam ab doloribus sint.",
  },
  {
    image_src: "/img/portfolio_6.jpg",
    image_alt: "Portfolio Image",
    text: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Blanditiis aliquid placeat cupiditate facere, repellat, quasi quidem quae dolor quos perspiciatis asperiores commodi alias nam suscipit natus ipsam ab doloribus sint.",
  },
];

export default function PortfolioPage() {
  return (
    <PageContainer heading={"My Portfolio"}>
      <div
        id="service_items"
        className="grid gap-6 md:grid-cols-2 lg:grid-cols-3 justify-center items-center"
      >
        {portfolioItems.map((item, index) => (
          <PortfolioItem
            image_src={item.image_src}
            image_alt={item.image_alt}
            text={item.text}
            key={index}
            index={index}
          />
        ))}
      </div>
    </PageContainer>
  );
}
