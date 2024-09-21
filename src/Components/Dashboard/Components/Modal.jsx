import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useState } from "react";
import Cropper from "react-easy-crop";
import { generateImageFile } from "../../../utils/cropImage";

export default function LogoController({ data, uploadFunction }) {
  const { ASPECT_RATIO, isOpen, setIsOpen, imgSrc, setImgSrc, img, loading } =
    data;
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

  const onUploadImage = async (e) => {
    e.preventDefault();
    let file = await generateImageFile(imgSrc, croppedArea, img);
    await uploadFunction(file);
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
                disabled={loading}
              >
                Cancel
              </button>

              <button
                className="px-4 py-2 bg-blue-700 text-white text-base font-medium rounded-md w-full shadow-sm hover:bg-blue-800 focus:outline-none focus:ring-2 focus:ring-blue-300"
                onClick={onUploadImage}
                disabled={loading}
              >
                {loading && (
                  <svg
                    aria-hidden="true"
                    className="inline w-6 h-6 text-gray-200 animate-spin dark:text-gray-600 fill-white mr-2"
                    viewBox="0 0 100 101"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z"
                      fill="currentColor"
                    />
                    <path
                      d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z"
                      fill="currentFill"
                    />
                  </svg>
                )}{" "}
                <span>Upload</span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
