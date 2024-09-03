import axios from "axios";
import Cookies from "js-cookie";
import { useEffect, useState } from "react";
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

export default function DashboardComponent() {
  const [position, setPosition] = useState("dashboard");
  const [isLoading, setIsLoading] = useState(false);
  const [isOpen, setIsOpen] = useState(true); // is open mean it is work in learge devices
  const [mdIsOpen, setMdIsOpen] = useState(false); // md is open mean it is work in small devices and there is some wrong in the naming convention

  //= == == == == == == == == == == == == == == == == == == == == == == == ==//
  // == == == == == == there is the full dashboard state here == == == == == //
  //= == == == == == == == == == == == == == == == == == == == == == == == ==//

  // Dashboard Page state here
  const [name, setName] = useState({ value: "", info: "", forSubmit: false });
  const [title, setTitle] = useState({ value: "", info: "", forSubmit: false });
  const [description, setDescription] = useState({
    value: "",
    info: "",
    forSubmit: false,
  });

  // Home Page state here
  const [intro, setIntro] = useState({ value: "", info: "", forSubmit: false });
  const [socialLinkLength, setSocialLinkLength] = useState(1);

  // About Page state here
  const [about, setAbout] = useState({ value: "", info: "", forSubmit: false });
  const [skillLength, setSkillLength] = useState(1);

  //Contact Page state here
  const [addr, setAddr] = useState({ value: "", forSubmit: false });
  const [phone, setPhone] = useState({ value: "", forSubmit: false });
  const [publicEmail, setPublicEmail] = useState({
    value: "",
    forSubmit: false,
  });

  const token = Cookies.get("saas-folio");

  //= == == == == == == == == == == == == == == == == == == == == == == == ==//
  // == == == == == == there is the full dashboard validator here == == == ==//
  //= == == == == == == == == == == == == == == == == == == == == == == == ==//

  // Title Validatior here
  useEffect(() => {
    if (title.value.length > 30) {
      setTitle((prev) => {
        return {
          ...prev,
          info: "Title can't be greater than 30 characters.",
          forSubmit: false,
        };
      });
    } else {
      setTitle((prev) => {
        return {
          ...prev,
          info: "",
          forSubmit: true,
        };
      });
    }
  }, [title.value]);

  // Description Validatior here
  useEffect(() => {
    if (description.value.length > 500) {
      setDescription((prev) => {
        return {
          ...prev,
          info: "Description can't be greater than 500 characters.",
          forSubmit: false,
        };
      });
    } else {
      setDescription((prev) => {
        return {
          ...prev,
          info: "",
          forSubmit: true,
        };
      });
    }
  }, [description.value]);

  // Introduction validator here
  useEffect(() => {
    if (intro.value.length < 200 || intro.value.length > 1000) {
      setIntro((prev) => {
        return {
          ...prev,
          info: "Introduction must be in 200-1000 characters.",
          forSubmit: false,
        };
      });
    } else {
      setIntro((prev) => {
        return {
          ...prev,
          info: "",
          forSubmit: true,
        };
      });
    }
  }, [intro.value]);

  // Main UseEffect Function here
  useEffect(() => {
    async function fetchData() {
      let data = await axios.post(
        import.meta.env.REACT_APP_BACKEND_URI + "/site/",
        {
          token,
        }
      );

      allStateUpdate(data);
    }

    fetchData();
  }, []);

  //= == == == == == == == == == == == == == == == == == == == == == == == ==//
  // == == == == == == there is the full dashboard controller here == == == =//
  //= == == == == == == == == == == == == == == == == == == == == == == == ==//

  // Name Controller here
  const handleName = (e) => {
    setName((prev) => {
      return {
        ...prev,
        value: e.target.value,
        forSubmit: true,
      };
    });
  };

  // Title Controller here
  const handleTitle = (e) => {
    setTitle((prev) => {
      return {
        ...prev,
        value: e.target.value,
        forSubmit: true,
      };
    });
  };

  // Description Controller here
  const handleDescription = (e) => {
    setDescription((prev) => {
      return {
        ...prev,
        value: e.target.value,
        forSubmit: true,
      };
    });
  };

  // Introduction Controller here
  const handleIntro = (e) => {
    setIntro((prev) => {
      return {
        ...prev,
        value: e.target.value,
        forSubmit: true,
      };
    });
  };

  // Social Link Counter Controller here
  const handleSocialLinkLength = () => {
    setSocialLinkLength((prev) => prev + 1);
  };

  // Introduction Controller here
  const handleAbout = (e) => {
    setAbout((prev) => {
      return {
        ...prev,
        value: e.target.value,
        forSubmit: true,
      };
    });
  };

  // Skill Counter Controller here
  const handleSkillLength = () => {
    setSkillLength((prev) => prev + 1);
  };

  // Address Controller here
  const handleAddr = (e) => {
    setAddr((prev) => {
      return {
        ...prev,
        value: e.target.value,
        forSubmit: true,
      };
    });
  };

  // Address Controller here
  const handlePhone = (e) => {
    setPhone((prev) => {
      return {
        ...prev,
        value: e.target.value,
        forSubmit: true,
      };
    });
  };

  // Address Controller here
  const handlePublicEmail = (e) => {
    setPublicEmail((prev) => {
      return {
        ...prev,
        value: e.target.value,
        forSubmit: true,
      };
    });
  };

  const handleSubmit = async () => {
    await setIsLoading(true);
    let data = await axios.post(
      import.meta.env.REACT_APP_BACKEND_URI + "/site/create",
      {
        name: name.value,
        title: title.value,
        description: description.value,
        introduction: intro.value,
        aboutText: about.value,
        address: addr.value,
        phone: phone.value,
        contactEmail: publicEmail.value,
        token,
      }
    );

    allStateUpdate(data);
  };

  //= == == == == == == == == == == == == == == == == == == == == == == == ==//
  //= == == == == == there is the Other Functionalitys here == == == == == ==//
  //= == == == == == == == == == == == == == == == == == == == == == == == ==//
  function allStateUpdate(data) {
    let {
      name,
      title,
      description,
      introduction,
      aboutText,
      address,
      phone,
      contactEmail,
    } = data.data;

    setName((prev) => SSUWGRFB(prev, name));

    setTitle((prev) => SSUWGRFB(prev, title));

    setDescription((prev) => SSUWGRFB(prev, description));

    setIntro((prev) => SSUWGRFB(prev, introduction));

    setAbout((prev) => SSUWGRFB(prev, aboutText));

    setAddr((prev) => SSUWGRFB(prev, address || ""));

    setPhone((prev) => SSUWGRFB(prev, phone || ""));

    setPublicEmail((prev) => SSUWGRFB(prev, contactEmail));
  }

  // Full Form of SSUWGRFB is Single State Update When Get Response From Backend
  function SSUWGRFB(prev, currentDataName) {
    return {
      ...prev,
      value: currentDataName,
      forSubmit: false,
    };
  }

  //TODO: these will be change
  // useEffect(() => {
  //   console.log(isOpen);
  //   console.log(mdIsOpen);
  // }, [isOpen, mdIsOpen]);

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
              controller={{
                name,
                handleName,
                title,
                handleTitle,
                description,
                handleDescription,
              }}
            />
          )}
          {position.toLowerCase() === "home" && (
            <HomePage
              controller={{
                intro,
                handleIntro,
                socialLinkLength,
                handleSocialLinkLength,
              }}
            />
          )}
          {position.toLowerCase() === "about" && (
            <AboutPage
              controller={{
                about,
                handleAbout,
                skillLength,
                handleSkillLength,
              }}
            />
          )}
          {position.toLowerCase() === "services" && <ServicePage />}
          {position.toLowerCase() === "portfolio" && <PortfolioPage />}
          {position.toLowerCase() === "contact" && (
            <ContactPage
              controller={{
                addr,
                handleAddr,
                phone,
                handlePhone,
                publicEmail,
                handlePublicEmail,
              }}
            />
          )}

          {position.toLowerCase() !== "services" &&
            position.toLowerCase() !== "portfolio" && (
              <button
                className="p-4 border border-white rounded-xl bg-blue-700 text-white font-medium col-span-2 px-8"
                onClick={handleSubmit}
                disabled={
                  !name.forSubmit &&
                  !title.forSubmit &&
                  !description.forSubmit &&
                  !intro.forSubmit &&
                  !about.forSubmit &&
                  !addr.forSubmit &&
                  !phone.forSubmit &&
                  !publicEmail.forSubmit
                }
              >
                Update {isLoading && "..."}
              </button>
            )}
        </DashboardContainer>
      </DSIPContext.Provider>
    </>
  );
}
