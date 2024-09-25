import axios from "axios";
import Cookies from "js-cookie";
import { useEffect, useState } from "react";
import { Navigate } from "react-router-dom";
import DashboardComponent from "../Dashboard/DashboardComponent";

export default function Dashboard() {
  const [profile, setProfile] = useState(null);

  const token = Cookies.get("saas-folio");

  useEffect(() => {
    const findProfileFunctionality = async () => {
      let data = await axios.post(
        `${import.meta.env.REACT_APP_BACKEND_URI}/api/find/profile`,
        {
          token,
        }
      );

      if (data.data.profile) {
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
