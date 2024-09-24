import axios from "axios";
import { useContext, useEffect, useState } from "react";
import SDContext from "../../Contexts/ShowcaseDataContext";
import PageContainer from "../Container/PageContainer";
import ServiceItem from "../Service/ServiceItem";

export default function ServicePage() {
  const { services } = useContext(SDContext);
  const [serviceLength, setServiceLength] = useState([]);
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);

  // Main UseEffect Function here
  useEffect(() => {
    setServiceLength(services);
  }, [services]);

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
          setLoading(true);
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
        } finally {
          setLoading(false);
        }
      }
    }
    fetchDataSinglly();
  }, [serviceLength]);

  return (
    <PageContainer heading={"My Services"}>
      <div
        id="service_items"
        className="grid gap-6 md:grid-cols-2 lg:grid-cols-3"
      >
        {data.map((item, index) => (
          <ServiceItem
            name={item.name}
            icon={item.icon || item.thumbnail}
            text={item.description}
            key={index}
            index={index}
            loading={loading}
          />
        ))}
      </div>
    </PageContainer>
  );
}
