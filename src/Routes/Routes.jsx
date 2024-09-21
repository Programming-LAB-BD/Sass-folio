import axios from "axios";
import { lazy, Suspense, useEffect, useState } from "react";
import { Route, Routes, useParams } from "react-router-dom";
import Layout from "../Components/Layout/Layout";
import Loading from "../Components/Loading/Loading";
import PageNotFound from "../Components/Pages/PageNotFound";
import ShowcaseDataContext from "../Contexts/ShowcaseDataContext";
import PrivateRoute from "./PrivateRoute";
import PublicRoute from "./PublicRoute";

const Signup = lazy(() => import("../Components/Pages/Signup"));
const Login = lazy(() => import("../Components/Pages/Login"));
const Profile = lazy(() => import("../Components/Pages/Profile"));
const Dashboard = lazy(() => import("../Components/Pages/Dashboard"));
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
            <PublicRoute>
              <Login />
            </PublicRoute>
          </Suspense>
        }
      />
      <Route
        path="/signup/"
        element={
          <Suspense fallback={<Loading />}>
            <PublicRoute>
              <Signup />
            </PublicRoute>
          </Suspense>
        }
      />
      <Route
        path="/profile/"
        element={
          <Suspense fallback={<Loading />}>
            <PrivateRoute>
              <Profile />
            </PrivateRoute>
          </Suspense>
        }
      />
      <Route
        path="/dashboard/"
        element={
          <Suspense fallback={<Loading />}>
            <PrivateRoute>
              <Dashboard />
            </PrivateRoute>
          </Suspense>
        }
      />
      <Route
        path="/:username/"
        element={
          <CreateLayout>
            <Home />
          </CreateLayout>
        }
      />
      <Route
        path="/:username/about"
        element={
          <CreateLayout>
            <About />
          </CreateLayout>
        }
      />
      <Route
        path="/:username/services"
        element={
          <CreateLayout>
            <Service />
          </CreateLayout>
        }
      />
      <Route
        path="/:username/portfolio"
        element={
          <CreateLayout>
            <Portfolio />
          </CreateLayout>
        }
      />
      <Route
        path="/:username/contact"
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
  const { username } = useParams();
  const [result, setResult] = useState({});
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      let data = await axios.post(
        import.meta.env.REACT_APP_BACKEND_URI + "/site/get",
        {
          username,
        }
      );

      setResult(data.data);
      setLoading(false);
    };

    fetchData();
  }, []);

  return (
    <>
      {loading ? (
        <Loading />
      ) : (
        <>
          {result.message ? (
            <PageNotFound />
          ) : (
            <ShowcaseDataContext.Provider value={result}>
              <Layout>
                <Suspense fallback={<Loading />}>{children}</Suspense>
              </Layout>
            </ShowcaseDataContext.Provider>
          )}
        </>
      )}
    </>
  );
};
