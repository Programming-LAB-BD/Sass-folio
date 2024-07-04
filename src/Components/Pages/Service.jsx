import PageContainer from "../Container/PageContainer";
import ServiceItem from "../Service/ServiceItem";

const serviceItems = [
  {
    name: "Web Design",
    icon: "fa-solid fa-palette",
    text: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Blanditiis aliquid placeat cupiditate facere, repellat, quasi quidem quae dolor quos perspiciatis asperiores commodi alias nam suscipit natus ipsam ab doloribus sint.",
  },
  {
    name: "Web Development",
    icon: "fa-solid fa-code",
    text: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Blanditiis aliquid placeat cupiditate facere, repellat, quasi quidem quae dolor quos perspiciatis asperiores commodi alias nam suscipit natus ipsam ab doloribus sint.",
  },
  {
    name: "Database Management",
    icon: "fa-solid fa-database",
    text: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Blanditiis aliquid placeat cupiditate facere, repellat, quasi quidem quae dolor quos perspiciatis asperiores commodi alias nam suscipit natus ipsam ab doloribus sint.",
  },
  {
    name: "Backend Development",
    icon: "fa-solid fa-server",
    text: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Blanditiis aliquid placeat cupiditate facere, repellat, quasi quidem quae dolor quos perspiciatis asperiores commodi alias nam suscipit natus ipsam ab doloribus sint.",
  },
  {
    name: "Frontend Development",
    icon: "fa-brands fa-react",
    text: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Blanditiis aliquid placeat cupiditate facere, repellat, quasi quidem quae dolor quos perspiciatis asperiores commodi alias nam suscipit natus ipsam ab doloribus sint.",
  },
  {
    name: "Other",
    icon: "fa-solid fa-gears",
    text: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Blanditiis aliquid placeat cupiditate facere, repellat, quasi quidem quae dolor quos perspiciatis asperiores commodi alias nam suscipit natus ipsam ab doloribus sint.",
  },
];

export default function ServicePage() {
  return (
    <PageContainer heading={"My Services"}>
      <div
        id="service_items"
        className="grid gap-6 md:grid-cols-2 lg:grid-cols-3"
      >
        {serviceItems.map((item, index) => (
          <ServiceItem
            name={item.name}
            icon={item.icon}
            text={item.text}
            key={index}
            index={index}
          />
        ))}
      </div>
    </PageContainer>
  );
}
