import Cookies from "js-cookie";
import { Navigate } from "react-router-dom";

export default function PublicRoute({ children }) {
  const authenticatedUser = Cookies.get("saas-folio");

  return authenticatedUser ? children : <Navigate to="/" />;
}
