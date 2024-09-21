import axios from "axios";
import { useEffect, useState } from "react";
import CreateService from "../Components/CreateService";
import PreviousService from "../Components/PreviousService";

export default function ServicePage({ token }) {
  const [serviceLength, setServiceLength] = useState([]);
  const [data, setData] = useState([]);

  // Main UseEffect Function here
  useEffect(() => {
    async function fetchData() {
      let data = await axios.post(
        import.meta.env.REACT_APP_BACKEND_URI + "/site/",
        {
          token,
        }
      );

      setServiceLength(data.data.services);
    }

    fetchData();
  }, []);

  // Read data Singlly
  useEffect(() => {
    if (serviceLength.length < 1) return;

    async function fetchDataSinglly() {
      for (const id of serviceLength) {
        // checking here.
        const metchedData = data.find((item) => item._id === id);
        if (metchedData) return;
        //

        try {
          let singleService = await axios.post(
            import.meta.env.REACT_APP_BACKEND_URI + "/service/",
            { id }
          );

          let image = await axios.post(
            `${import.meta.env.REACT_APP_BACKEND_URI}/api/generate/image`,
            { imagePath: singleService.data.icon }
          );

          singleService.data.icon = image.data.url;

          setData((prev) => {
            return [...prev, singleService.data];
          });
        } catch (err) {
          console.log(err);
        }
      }
    }
    fetchDataSinglly();
  }, [serviceLength, setData]);

  return (
    <section id="service">
      <div className="heading_area text-2xl font-medium text-center block w-full md:text-3xl mb-10">
        <h1>Your Service Page Controller.</h1>
      </div>

      <CreateService token={token} setServiceLength={setServiceLength} />
      <PreviousService data={data} />
    </section>
  );
}
