import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useState } from "react";
import Cropper from "react-easy-crop";
import { generateDownload } from "../../../utils/cropImage";

const ASPECT_RATIO = 5 / 1;

export default function LogoController({ data }) {
  const { isOpen, setIsOpen, imgSrc, setImgSrc } = data;
  const [croppedArea, setCroppedArea] = useState();
  const [crop, setCrop] = useState({ x: 0, y: 0 });
  const [zoom, setZoom] = useState(1);

  const handleCancelUploadImage = (e) => {
    e.preventDefault();
    setIsOpen(false);
    setImgSrc("");
  };

  const onCropComplete = (croppedAreaParcentege, croppedAreaPixels) => {
    setCroppedArea(croppedAreaPixels);
  };

  const onDownloadImage = (e) => {
    e.preventDefault();
    generateDownload(imgSrc, croppedArea);
    setIsOpen(false);
    setImgSrc("");
  };

  return (
    <>
      <div
        className={`fixed ${
          !isOpen && "hidden"
        } top-0 left-0 insert-0 bg-gray-600 bg-opacity-50 overflow-y-auto h-full w-full`}
        id="modal"
      ></div>
      <div
        className={`absolute ${
          !isOpen && "hidden"
        } -top-10 left-0 md:left-56 flex flex-col justify-between mx-auto p-5 border border-secondary dark:border-dark_secondary w-full shadow-lg rounded-md bg-primary dark:bg-dark_primary`}
      >
        <div
          id="heading_of_modal"
          className="flex items-center justify-between text-white text-2xl px-2 pb-2 mb-6 border-b"
        >
          <div className="">
            <h1>Crop your Image</h1>
          </div>
          <div className="">
            <FontAwesomeIcon
              icon="fa-solid fa-x"
              className="cursor-pointer text-xl"
              onClick={handleCancelUploadImage}
            />
          </div>
        </div>

        <div className="flex items-center justify-center">
          <Cropper
            image={imgSrc}
            crop={crop}
            zoom={zoom}
            showGrid={false}
            objectFit="horizontal-cover"
            aspect={ASPECT_RATIO}
            onCropChange={setCrop}
            onZoomChange={setZoom}
            onCropComplete={onCropComplete}
          />
        </div>

        <div className="mt-3 text-center">
          <div className="flex items-center justify-between px-4 pt-3">
            <div className="w-1/2"></div>
            <div className="w-1/2 flex items-center justify-center gap-2">
              <button
                className="px-4 py-2 bg-zinc-800 text-white text-base font-medium rounded-md w-full shadow-sm hover:bg-zinc-700 focus:outline-none focus:ring-2 focus:ring-blue-300"
                onClick={handleCancelUploadImage}
              >
                Cancel
              </button>

              <button
                className="px-4 py-2 bg-blue-700 text-white text-base font-medium rounded-md w-full shadow-sm hover:bg-blue-800 focus:outline-none focus:ring-2 focus:ring-blue-300"
                onClick={onDownloadImage}
              >
                Upload
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
