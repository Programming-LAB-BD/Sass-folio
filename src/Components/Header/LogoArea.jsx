import axios from "axios";
import { useContext, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import SDContext from "../../Contexts/ShowcaseDataContext";
import loading_pic from "/img/loading__.gif";

export default function LogoArea({ width, handleCloseBtn }) {
  const { logo } = useContext(SDContext);
  const [logoPic, setLogoPic] = useState("");
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const generateUrl = async () => {
      let newData = await axios.post(
        `${import.meta.env.REACT_APP_BACKEND_URI}/api/generate/image`,
        {
          imagePath: logo,
        }
      );

      setLogoPic(newData.data.url);
      setLoading(false);
    };

    generateUrl();
  }, [logo]);

  return (
    <div id="logo-area" className={width}>
      <Link to="/" onClick={handleCloseBtn}>
        <img
          src={loading ? loading_pic : logoPic}
          alt="Programming LAB BD"
          className="p-2 ml-6"
        />
      </Link>
    </div>
  );
}
