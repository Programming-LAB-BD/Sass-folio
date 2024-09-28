import axios from "axios";
import { useContext, useEffect, useState } from "react";
import SDContext from "../../Contexts/ShowcaseDataContext";
import PageContainer from "../Container/PageContainer";
import PortfolioItem from "../Portfolio/PortfolioItem";

export default function PortfolioPage() {
  const { portfolio } = useContext(SDContext);
  const [portfolioLength, setPortfolioLength] = useState([]);
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);

  // Main UseEffect Function here
  useEffect(() => {
    setPortfolioLength(portfolio);
  }, [portfolio]);

  // Read data Singlly
  useEffect(() => {
    if (portfolioLength.length < 1) return;

    async function fetchDataSinglly() {
      for (const id of portfolioLength) {
        // checking here.
        const metchedData = data.find((item) => item._id === id);
        if (metchedData) return;
        //

        try {
          setLoading(true);
          let singlePortfolio = await axios.post(
            import.meta.env.REACT_APP_BACKEND_URI + "/portfolio/",
            { id }
          );

          let image = await axios.post(
            `${import.meta.env.REACT_APP_BACKEND_URI}/api/generate/image`,
            { imagePath: singlePortfolio.data.thumbnail }
          );

          singlePortfolio.data.thumbnail = image.data.url;

          setData((prev) => {
            return [...prev, singlePortfolio.data];
          });
        } catch (err) {
          console.log(err);
        } finally {
          setLoading(false);
        }
      }
    }
    fetchDataSinglly();
  }, [portfolioLength]);

  return (
    <PageContainer heading={"My Portfolio"}>
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {data.map((item, index) => (
          <PortfolioItem
            name={item.name}
            image_src={item.thumbnail}
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
