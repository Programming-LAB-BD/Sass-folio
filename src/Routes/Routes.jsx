import { Route, Routes } from "react-router-dom";
import About from "../Components/Pages/About";
import Contact from "../Components/Pages/Contact";
import Home from "../Components/Pages/Home";
import Portfolio from "../Components/Pages/Portfolio";
import Service from "../Components/Pages/Service";

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<About />} />
      <Route path="/services" element={<Service />} />
      <Route path="/portfolio" element={<Portfolio />} />
      <Route path="/contact" element={<Contact />} />
    </Routes>
  );
}
