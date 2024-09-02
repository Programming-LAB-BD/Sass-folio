import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Logo from "../../../assets/logo.png";

export default function LogoController() {
  return (
    <div className="input-form-group mb-8 w-[100%] md:w-[550px]">
      <label className="font-medium pl-1">Upload Logo :</label>
      <div className="relative">
        <label
          htmlFor="upload_file"
          className="font-medium pl-1 cursor-pointer absolute -bottom-4 -left-2"
        >
          <div className="bg-slate-300 border-4 border-slate-50 pt-1 rounded-full w-10 h-10 text-center">
            <FontAwesomeIcon icon="fa-solid fa-pen-to-square" />
          </div>
        </label>
        <img
          src={Logo}
          alt="Profile Pic"
          className="w-3/4 border-2 rounded-md cursor-pointer"
        />
      </div>
      <div className="flex items-center gap-2">
        <input type="file" className="hidden" id="upload_file" />
      </div>
    </div>
  );
}
