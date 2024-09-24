import { useState } from "react";
import LoadingItem from "./LoadingItem";
import PreviewModal from "./PreviewModal";

const PreviousPortfolio = ({ data, handleDeletePreview, loading }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [currentData, setCurrentData] = useState(null);

  const handleOpenPreview = (data) => {
    setIsOpen(true);
    setCurrentData(data);
  };

  return (
    <div
      id="previous"
      className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-4 relative"
    >
      {data.map((singleData, index) => (
        <div
          className="single_item border-2 p-4 rounded-lg shadow-lg"
          key={index}
        >
          <div className="title py-1 mb-3 text-2xl font-medium text-center border-b-2 border-slate-800">
            {singleData.name}
          </div>
          <div className="icon text-center text-8xl mb-3">
            <img
              src={singleData.thumbnail}
              alt={singleData.name}
              className="aspect-video"
            />
          </div>
          <div className="description mb-3">
            {singleData.description.split(" ").length >= 35
              ? singleData.description.split(" ").slice(0, 25).join(" ") +
                "....."
              : singleData.description}
          </div>
          <div className="w-full flex justify-center">
            <button
              className="p-4 border border-white rounded-xl bg-blue-700 text-white font-medium col-span-2"
              onClick={() => handleOpenPreview(singleData)}
            >
              Show more &gt;
            </button>
          </div>
        </div>
      ))}
      {loading && <LoadingItem />}

      <PreviewModal
        data={{ isOpen, setIsOpen, currentData }}
        handleDeletePreview={handleDeletePreview}
      />
    </div>
  );
};

export default PreviousPortfolio;
