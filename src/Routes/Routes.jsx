import { lazy, Suspense } from "react";
import { Route, Routes } from "react-router-dom";
import Loading from "../Components/Loading/Loading";

const About = lazy(() => import("../Components/Pages/About"));
const Home = lazy(() => import("../Components/Pages/Home"));
const Service = lazy(() => import("../Components/Pages/Service"));
const Portfolio = lazy(() => import("../Components/Pages/Portfolio"));
const Contact = lazy(() => import("../Components/Pages/Contact"));

export default function App() {
  return (
    <Routes>
      <Route
        path="/"
        element={
          <Suspense fallback={<Loading />}>
            <Home />
          </Suspense>
        }
      />
      <Route
        path="/about"
        element={
          <Suspense fallback={<Loading />}>
            <About />
          </Suspense>
        }
      />
      <Route
        path="/services"
        element={
          <Suspense fallback={<Loading />}>
            <Service />
          </Suspense>
        }
      />
      <Route
        path="/portfolio"
        element={
          <Suspense fallback={<Loading />}>
            <Portfolio />
          </Suspense>
        }
      />
      <Route
        path="/contact"
        element={
          <Suspense fallback={<Loading />}>
            <Contact />
          </Suspense>
        }
      />
    </Routes>
  );
}
