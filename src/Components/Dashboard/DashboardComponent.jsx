import Cookies from "js-cookie";
import { useState } from "react";
import DSIPContext from "../../Contexts/DashboardSidebarIsOpenContext";
import PositionContext from "../../Contexts/PositionContext";
import DashboardContainer from "../Container/DashboardContainer";
import Header from "./Header/Header";
import AboutPage from "./Pages/AboutPage";
import ContactPage from "./Pages/ContactPage";
import DashboardPage from "./Pages/DashboardPage";
import HomePage from "./Pages/HomePage";
import PortfolioPage from "./Pages/PortfolioPage";
import ServicePage from "./Pages/ServicePage";

export default function DashboardComponent({ profile }) {
  const [position, setPosition] = useState("dashboard");
  const [isOpen, setIsOpen] = useState(true); // is open mean it is work in learge devices
  const [mdIsOpen, setMdIsOpen] = useState(false); // md is open mean it is work in small devices and there is some wrong in the naming convention

  const token = Cookies.get("saas-folio");

  // Full Form of SSUWGRFB is Single State Update When Get Response From Backend
  function SSUWGRFB(prev, currentDataName) {
    return {
      ...prev,
      value: currentDataName,
      forSubmit: false,
      formStatus: true,
    };
  }

  return (
    <>
      <DSIPContext.Provider
        value={{ isOpen, setIsOpen, mdIsOpen, setMdIsOpen }}
      >
        <PositionContext.Provider value={{ position, setPosition }}>
          <Header />
        </PositionContext.Provider>

        <DashboardContainer isOpen={isOpen}>
          {position.toLowerCase() === "dashboard" && (
            <DashboardPage
              stateUpdateFunction={SSUWGRFB}
              token={token}
              profile={profile}
            />
          )}
          {position.toLowerCase() === "home" && (
            <HomePage stateUpdateFunction={SSUWGRFB} token={token} />
          )}
          {position.toLowerCase() === "about" && (
            <AboutPage stateUpdateFunction={SSUWGRFB} token={token} />
          )}
          {position.toLowerCase() === "services" && (
            <ServicePage token={token} />
          )}
          {position.toLowerCase() === "portfolio" && (
            <PortfolioPage token={token} />
          )}
          {position.toLowerCase() === "contact" && (
            <ContactPage stateUpdateFunction={SSUWGRFB} token={token} />
          )}
        </DashboardContainer>
      </DSIPContext.Provider>
    </>
  );
}
