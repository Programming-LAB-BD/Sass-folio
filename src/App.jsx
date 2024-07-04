import { BrowserRouter } from "react-router-dom";
import Layout from "./Components/Layout/Layout";
import "./Global.css";
import Routes from "./Routes/Routes";

export default function App() {
  return (
    <BrowserRouter>
      <Layout>
        <Routes />
      </Layout>
    </BrowserRouter>
  );
}
