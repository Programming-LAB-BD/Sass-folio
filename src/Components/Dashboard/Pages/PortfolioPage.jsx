import axios from "axios";
import { useEffect, useState } from "react";
import CreatePortfolio from "../Components/CreatePortfolio";
import PreviousPortfolio from "../Components/PreviousPortfolio";

export default function PortfolioPage({ token }) {
  const [portfolioLength, setPortfolioLength] = useState([]);
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);

  // Main UseEffect Function here
  useEffect(() => {
    async function fetchData() {
      let data = await axios.post(
        import.meta.env.REACT_APP_BACKEND_URI + "/site/",
        {
          token,
        }
      );

      setPortfolioLength(data.data.portfolio);
    }

    fetchData();
  }, []);

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

  const handleDeletePreview = async (id) => {
    try {
      let deleteItem = await axios.post(
        `${import.meta.env.REACT_APP_BACKEND_URI}/portfolio/delete`,
        {
          token,
          id,
        }
      );

      if (deleteItem.data.delete) {
        setPortfolioLength((prev) => {
          return prev.filter((value) => value !== id);
        });

        setData((prev) => {
          return prev.filter((value) => value._id !== id);
        });
      }
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <section id="portfolio">
      <div className="heading_area text-2xl font-medium text-center block w-full md:text-3xl mb-10">
        <h1>Your Protfolio Page Controller.</h1>
      </div>

      <CreatePortfolio
        token={token}
        setPortfolioLength={setPortfolioLength}
        setData={setData}
      />

      <PreviousPortfolio
        data={data}
        handleDeletePreview={handleDeletePreview}
        loading={loading}
      />
    </section>
  );
}
