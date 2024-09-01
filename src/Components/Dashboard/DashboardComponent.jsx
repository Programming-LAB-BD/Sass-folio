import { useEffect, useState } from "react";
import DSIPContext from "../../Contexts/DashboardSidebarIsOpenContext";
import PositionContext from "../../Contexts/PositionContext";
import Header from "./Header/Header";
import AboutPage from "./Pages/AboutPage";
import ContactPage from "./Pages/ContactPage";
import DashboardPage from "./Pages/DashboardPage";
import HomePage from "./Pages/HomePage";
import PortfolioPage from "./Pages/PortfolioPage";
import ServicePage from "./Pages/ServicePage";

export default function DashboardComponent() {
  const [position, setPosition] = useState("dashboard");
  const [isOpen, setIsOpen] = useState(true);
  const [mdIsOpen, setMdIsOpen] = useState(false);

  useEffect(() => {
    console.log(isOpen);
    console.log(mdIsOpen);
  }, [isOpen, mdIsOpen]);

  return (
    <>
      <DSIPContext.Provider
        value={{ isOpen, setIsOpen, mdIsOpen, setMdIsOpen }}
      >
        <PositionContext.Provider value={{ position, setPosition }}>
          <Header />
        </PositionContext.Provider>

        {position.toLowerCase() === "dashboard" && <DashboardPage />}
        {position.toLowerCase() === "home" && <HomePage />}
        {position.toLowerCase() === "about" && <AboutPage />}
        {position.toLowerCase() === "service" && <ServicePage />}
        {position.toLowerCase() === "portfolio" && <PortfolioPage />}
        {position.toLowerCase() === "contact" && <ContactPage />}
      </DSIPContext.Provider>
    </>
  );
}
