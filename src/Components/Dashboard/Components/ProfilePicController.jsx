import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function ProfilePicController() {
  return (
    <div className="input-form-group mb-8 w-[100%] md:w-[550px]">
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
          src="https://cdn-icons-png.flaticon.com/512/3237/3237472.png"
          alt="Profile Pic"
          className="w-1/4 border-2 rounded-full cursor-pointer"
        />
      </div>
      <div className="flex items-center gap-2">
        <input type="file" className="hidden" id="upload_file" />
      </div>
    </div>
  );
}
