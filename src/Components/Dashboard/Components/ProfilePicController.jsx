import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import axios from "axios";
import Cookies from "js-cookie";
import { useEffect, useState } from "react";
import Modal from "./Modal";

export default function ProfilePicController() {
  const [isOpen, setIsOpen] = useState(false);
  const [imgSrc, setImgSrc] = useState();
  const [img, setImg] = useState(null);
  const [loading, setLoading] = useState(false);
  const [profilePic, setProfilePic] = useState("/img/loading__picture.gif");

  const token = Cookies.get("saas-folio");

  const handleUploadImage = (e) => {
    e.preventDefault();
    const file = e.target.files?.[0];
    if (!e.target.files && e.target.files.length <= 0) return;

    setImg(file); // there is set original image for getting information.

    const reader = new FileReader();
    reader.addEventListener("load", () => {
      const imgUrl = reader.result?.toString() || "";
      setImgSrc(imgUrl);
      setIsOpen(true);
    });

    reader.readAsDataURL(file);
  };

  const uploadProfilePicToDB = async (file) => {
    if (!file) return;
    setLoading(true);

    try {
      const formData = new FormData();
      formData.append("picture", file);
      formData.append("token", token);

      let newImage = await axios.post(
        `${import.meta.env.REACT_APP_BACKEND_URI}/upload/profile`,
        formData,
        {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        }
      );

      setProfilePic(newImage.data.picture);
    } catch (error) {
      console.error("Error updating dashboard:", error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    const generateUrl = async () => {
      let fullData = await axios.post(
        import.meta.env.REACT_APP_BACKEND_URI + "/site/",
        {
          token,
        }
      );

      let newData = await axios.post(
        `${import.meta.env.REACT_APP_BACKEND_URI}/api/generate/image`,
        {
          imagePath: fullData.data.picture,
        }
      );

      setProfilePic(newData.data.url);
    };

    generateUrl();
  }, [profilePic, token]);

  return (
    <div className="input-form-group mb-8 w-[100%] md:w-[550px] relative">
      <label>Upload Profile Pic :</label>
      <div className="relative">
        <label
          htmlFor="upload_file"
          className="font-medium pl-1 cursor-pointer absolute bottom-2"
        >
          <div className="bg-slate-300 border-4 border-slate-50 pt-1 rounded-full w-10 h-10 text-center">
            <FontAwesomeIcon icon="fa-solid fa-pen-to-square" />
          </div>
        </label>
        <img
          src={profilePic}
          alt="Profile Pic"
          className="w-1/4 border-2 rounded-full cursor-pointer"
        />
      </div>
      <div className="flex items-center gap-2">
        <input
          type="file"
          className="hidden"
          id="upload_file"
          onChange={handleUploadImage}
        />
      </div>

      <Modal
        data={{
          ASPECT_RATIO: 1,
          isOpen,
          setIsOpen,
          imgSrc,
          setImgSrc,
          img,
          loading,
        }}
        uploadFunction={uploadProfilePicToDB}
      />
    </div>
  );
}
