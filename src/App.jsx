import { BrowserRouter } from "react-router-dom";
import "react-toastify/dist/ReactToastify.css";
import "./Global.css";
import Routes from "./Routes/Routes";

export default function App() {
  return (
    <BrowserRouter>
      <Routes />
    </BrowserRouter>
  );
}
