import { lazy, Suspense } from "react";
import { Route, Routes } from "react-router-dom";
import Layout from "../Components/Layout/Layout";
import Loading from "../Components/Loading/Loading";

const Signup = lazy(() => import("../Components/Pages/Signup"));
const Login = lazy(() => import("../Components/Pages/Login"));
const Profile = lazy(() => import("../Components/Pages/Profile"));
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
            <Login />
          </Suspense>
        }
      />
      <Route
        path="/signup/"
        element={
          <Suspense fallback={<Loading />}>
            <Signup />
          </Suspense>
        }
      />
      <Route
        path="/profile/"
        element={
          <Suspense fallback={<Loading />}>
            <Profile />
          </Suspense>
        }
      />
      <Route
        path="/:id/"
        element={
          <CreateLayout>
            <Home />
          </CreateLayout>
        }
      />
      <Route
        path="/:id/about"
        element={
          <CreateLayout>
            <About />
          </CreateLayout>
        }
      />
      <Route
        path="/:id/services"
        element={
          <CreateLayout>
            <Service />
          </CreateLayout>
        }
      />
      <Route
        path="/:id/portfolio"
        element={
          <CreateLayout>
            <Portfolio />
          </CreateLayout>
        }
      />
      <Route
        path="/:id/contact"
        element={
          <CreateLayout>
            <Contact />
          </CreateLayout>
        }
      />
    </Routes>
  );
}

export const CreateLayout = ({ children }) => {
  return (
    <Layout>
      <Suspense fallback={<Loading />}>{children}</Suspense>
    </Layout>
  );
};
