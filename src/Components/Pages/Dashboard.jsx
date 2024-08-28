import Cookies from "js-cookie";
import { useEffect, useState } from "react";
import { Navigate } from "react-router-dom";
import DashboardComponent from "../Dashboard/DashboardComponent";

export default function Dashboard() {
  const [profile, setProfile] = useState(null);

  const token = Cookies.get("saas-folio");

  useEffect(() => {
    const findProfileFunctionality = async () => {
      let obj = {
        token,
      };

      const headers = new Headers();
      headers.append("Content-Type", "application/json");

      let req = new Request("http://localhost:3000/api/find/profile", {
        method: "POST",
        body: JSON.stringify(obj),
        headers,
      });

      let response = await fetch(req);
      let data = await response.json();

      if (data.profile) {
        setProfile(<DashboardComponent />);
      } else {
        setProfile(<Navigate to="/profile/" />);
      }

      return;
    };

    findProfileFunctionality();
  }, [token]);

  return profile;
}
