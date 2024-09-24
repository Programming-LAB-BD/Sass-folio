import { useEffect, useState } from "react";
import Modal from "./Modal";

const PortfolioThumbnail = ({ data }) => {
  const { thumb, setThumb } = data;
  const [imgSrc, setImgSrc] = useState("");
  const [img, setImg] = useState(null);
  const [isOpen, setIsOpen] = useState(false);
  const [loading, setLoading] = useState(false);
  const [showingThumb, setShowingThumb] = useState(
    "/img/default-portfolio.png"
  );

  const handleUploadIcon = (e) => {
    e.preventDefault();
    const file = e.target.files?.[0];
    if (!e.target.files && e.target.files.length <= 0) return;

    setImg(file); // there is set original image for getting information.

    const reader = new FileReader();
    reader.addEventListener("load", () => {
      const iconUrl = reader.result?.toString() || "";
      setImgSrc(iconUrl);
      setIsOpen(true);
    });

    reader.readAsDataURL(file);
  };

  const UploadThumb = async (file) => {
    if (!file) return;
    setLoading(true);
    try {
      setThumb(file);

      const reader = new FileReader();
      reader.addEventListener("load", () => {
        const iconUrl = reader.result?.toString() || "";
        setShowingThumb(iconUrl);
      });

      reader.readAsDataURL(file);
    } catch (err) {
      console.log(err);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    if (thumb === "") {
      setShowingThumb("/img/default-portfolio.png");
    }
  }, [thumb]);

  return (
    <div className="input-form-group mb-8 w-[100%] md:w-[550px] relative">
      <label htmlFor="icon" className="font-medium pl-1">
        Portfolio Thumbnail :
        <div className="rounded-lg mt-2 w-2/4 aspect-video border-2 overflow-hidden">
          <img
            className="cursor-pointer w-full"
            src={showingThumb}
            alt="Portfolio Thumbnail"
          />
        </div>
      </label>
      <div className="flex items-center gap-2">
        <input
          id="icon"
          type="file"
          className="hidden p-2 border rounded w-full border-gray-900 bg-[#c7ebee] text-gray-900 file:rounded-xl file:border-0 file:p-1 file:px-2 file:ring-2"
          onChange={handleUploadIcon}
        />
      </div>

      <Modal
        data={{
          ASPECT_RATIO: 16 / 9,
          isOpen,
          setIsOpen,
          imgSrc,
          setImgSrc,
          img,
          loading,
        }}
        uploadFunction={UploadThumb}
      />
    </div>
  );
};

export default PortfolioThumbnail;
